use crate::error::{PassForgeError, Result};
use crate::models::{EntryInput, EntrySummary, Folder, FolderInput, VaultEntry};
use chrono::Utc;
use lesspass_core::PasswordProfile;
use rusqlite::{Connection, params};
use uuid::Uuid;

pub struct VaultDb {
    conn: Connection,
}

impl VaultDb {
    pub fn memory() -> Result<Self> {
        Ok(Self {
            conn: Connection::open_in_memory()?,
        })
    }

    pub fn open(path: &std::path::Path) -> Result<Self> {
        Ok(Self {
            conn: Connection::open(path)?,
        })
    }

    pub fn open_encrypted(path: &std::path::Path, key: &[u8]) -> Result<Self> {
        let conn = Connection::open(path)?;
        let key_hex = hex::encode(key);
        conn.pragma_update(None, "key", format!("x'{key_hex}'"))?;
        conn.pragma_update(None, "cipher_page_size", 4096)?;
        conn.pragma_update(None, "kdf_iter", 256000)?;
        conn.execute_batch("SELECT count(*) FROM sqlite_master;")?;
        Ok(Self { conn })
    }

    pub fn migrate(&self) -> Result<()> {
        self.conn.execute_batch(
            r#"
            PRAGMA foreign_keys = ON;

            CREATE TABLE IF NOT EXISTS folders (
              id TEXT PRIMARY KEY,
              parent_id TEXT REFERENCES folders(id) ON DELETE SET NULL,
              name TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS entries (
              id TEXT PRIMARY KEY,
              site TEXT NOT NULL,
              login TEXT NOT NULL,
              counter INTEGER NOT NULL,
              options_json TEXT NOT NULL,
              salt_fields_json TEXT NOT NULL,
              crypto_json TEXT,
              folder_id TEXT NOT NULL REFERENCES folders(id) ON DELETE RESTRICT,
              created_at TEXT NOT NULL,
              updated_at TEXT NOT NULL,
              last_used_at TEXT
            );

            CREATE TABLE IF NOT EXISTS groups (
              id TEXT PRIMARY KEY,
              name TEXT NOT NULL UNIQUE
            );

            CREATE TABLE IF NOT EXISTS entry_groups (
              entry_id TEXT NOT NULL REFERENCES entries(id) ON DELETE CASCADE,
              group_id TEXT NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
              PRIMARY KEY (entry_id, group_id)
            );

            CREATE TABLE IF NOT EXISTS tags (
              id TEXT PRIMARY KEY,
              name TEXT NOT NULL UNIQUE
            );

            CREATE TABLE IF NOT EXISTS entry_tags (
              entry_id TEXT NOT NULL REFERENCES entries(id) ON DELETE CASCADE,
              tag_id TEXT NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
              PRIMARY KEY (entry_id, tag_id)
            );
            "#,
        )?;
        Ok(())
    }

    pub fn create_folder(&self, input: FolderInput) -> Result<Folder> {
        let folder = Folder {
            id: Uuid::new_v4().to_string(),
            parent_id: input.parent_id,
            name: input.name,
        };
        self.conn.execute(
            "INSERT INTO folders (id, parent_id, name) VALUES (?1, ?2, ?3)",
            params![&folder.id, &folder.parent_id, &folder.name],
        )?;
        Ok(folder)
    }

    pub fn create_entry(&self, input: EntryInput) -> Result<VaultEntry> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now().to_rfc3339();
        let profile = PasswordProfile {
            site: input.site,
            login: input.login,
            counter: input.counter,
            options: input.options,
            salt_fields: input.salt_fields,
            crypto: input.crypto,
        };

        self.conn.execute(
            "INSERT INTO entries
             (id, site, login, counter, options_json, salt_fields_json, crypto_json, folder_id, created_at, updated_at)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)",
            params![
                &id,
                &profile.site,
                &profile.login,
                profile.counter,
                serde_json::to_string(&profile.options)?,
                serde_json::to_string(&profile.salt_fields)?,
                serde_json::to_string(&profile.crypto)?,
                &input.folder_id,
                &now,
                &now
            ],
        )?;

        for tag in &input.tags {
            self.attach_tag(&id, tag)?;
        }

        Ok(self
            .get_entry(&id)?
            .expect("inserted entry should be readable immediately"))
    }

    pub fn get_entry(&self, id: &str) -> Result<Option<VaultEntry>> {
        let mut stmt = self.conn.prepare(
            "SELECT id, site, login, counter, options_json, salt_fields_json, crypto_json, folder_id, created_at, updated_at, last_used_at
             FROM entries WHERE id = ?1",
        )?;
        let mut rows = stmt.query(params![id])?;
        let Some(row) = rows.next()? else {
            return Ok(None);
        };

        let options_json: String = row.get(4)?;
        let salt_fields_json: String = row.get(5)?;
        let crypto_json: String = row.get(6)?;
        let profile = PasswordProfile {
            site: row.get(1)?,
            login: row.get(2)?,
            counter: row.get::<_, i64>(3)? as u32,
            options: serde_json::from_str(&options_json)?,
            salt_fields: serde_json::from_str(&salt_fields_json)?,
            crypto: serde_json::from_str(&crypto_json)?,
        };
        let entry_id: String = row.get(0)?;

        Ok(Some(VaultEntry {
            id: entry_id.clone(),
            profile,
            folder_id: row.get(7)?,
            group_ids: self.group_ids_for_entry(&entry_id)?,
            tags: self.tags_for_entry(&entry_id)?,
            created_at: row.get(8)?,
            updated_at: row.get(9)?,
            last_used_at: row.get(10)?,
        }))
    }

    pub fn search_entries(&self, query: &str) -> Result<Vec<EntrySummary>> {
        let like = format!("%{}%", query);
        let mut stmt = self.conn.prepare(
            "SELECT id, site, login, last_used_at FROM entries
             WHERE site LIKE ?1 OR login LIKE ?1
             ORDER BY last_used_at DESC, site ASC, login ASC",
        )?;
        let rows = stmt.query_map(params![like], |row| {
            Ok(EntrySummary {
                id: row.get(0)?,
                site: row.get(1)?,
                login: row.get(2)?,
                fingerprint: None,
                last_used_at: row.get(3)?,
            })
        })?;

        rows.collect::<std::result::Result<Vec<_>, _>>()
            .map_err(Into::into)
    }

    pub fn mark_used(&self, id: &str) -> Result<()> {
        self.conn.execute(
            "UPDATE entries SET last_used_at = ?1 WHERE id = ?2",
            params![Utc::now().to_rfc3339(), id],
        )?;
        Ok(())
    }

    pub fn debug_column_names(&self, table: &str) -> Result<Vec<String>> {
        if !is_simple_identifier(table) {
            return Err(PassForgeError::InvalidRequest(
                "table name must be a simple identifier".into(),
            ));
        }
        let mut stmt = self.conn.prepare(&format!("PRAGMA table_info({table})"))?;
        let rows = stmt.query_map([], |row| row.get::<_, String>(1))?;
        rows.collect::<std::result::Result<Vec<_>, _>>()
            .map_err(Into::into)
    }

    fn attach_tag(&self, entry_id: &str, name: &str) -> Result<()> {
        let tag_id = Uuid::new_v4().to_string();
        self.conn.execute(
            "INSERT OR IGNORE INTO tags (id, name) VALUES (?1, ?2)",
            params![tag_id, name],
        )?;
        let existing_id: String = self.conn.query_row(
            "SELECT id FROM tags WHERE name = ?1",
            params![name],
            |row| row.get(0),
        )?;
        self.conn.execute(
            "INSERT OR IGNORE INTO entry_tags (entry_id, tag_id) VALUES (?1, ?2)",
            params![entry_id, existing_id],
        )?;
        Ok(())
    }

    fn tags_for_entry(&self, entry_id: &str) -> Result<Vec<String>> {
        let mut stmt = self.conn.prepare(
            "SELECT tags.name FROM tags
             INNER JOIN entry_tags ON entry_tags.tag_id = tags.id
             WHERE entry_tags.entry_id = ?1
             ORDER BY tags.name ASC",
        )?;
        let rows = stmt.query_map(params![entry_id], |row| row.get::<_, String>(0))?;
        rows.collect::<std::result::Result<Vec<_>, _>>()
            .map_err(Into::into)
    }

    fn group_ids_for_entry(&self, entry_id: &str) -> Result<Vec<String>> {
        let mut stmt = self.conn.prepare(
            "SELECT group_id FROM entry_groups WHERE entry_id = ?1 ORDER BY group_id ASC",
        )?;
        let rows = stmt.query_map(params![entry_id], |row| row.get::<_, String>(0))?;
        rows.collect::<std::result::Result<Vec<_>, _>>()
            .map_err(Into::into)
    }
}

fn is_simple_identifier(value: &str) -> bool {
    let mut chars = value.chars();
    let Some(first) = chars.next() else {
        return false;
    };

    (first == '_' || first.is_ascii_alphabetic())
        && chars.all(|ch| ch == '_' || ch.is_ascii_alphanumeric())
}
