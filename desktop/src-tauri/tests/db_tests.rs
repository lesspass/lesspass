use lesspass_core::PasswordOptions;
use passforge_desktop::db::VaultDb;
use passforge_desktop::models::{EntryInput, FolderInput};

fn sample_entry(folder_id: String) -> EntryInput {
    EntryInput {
        site: "example.com".into(),
        login: "me@example.com".into(),
        counter: 1,
        options: PasswordOptions::default(),
        salt_fields: vec![],
        crypto: None,
        folder_id,
        group_ids: vec![],
        tags: vec!["finance".into(), "primary".into()],
    }
}

#[test]
fn creates_folder_and_entry_without_storing_password() {
    let db = VaultDb::memory().unwrap();
    db.migrate().unwrap();

    let folder = db
        .create_folder(FolderInput {
            parent_id: None,
            name: "Personal".into(),
        })
        .unwrap();
    let entry = db.create_entry(sample_entry(folder.id.clone())).unwrap();
    let loaded = db.get_entry(&entry.id).unwrap().unwrap();

    assert_eq!(loaded.profile.site, "example.com");
    assert_eq!(loaded.profile.login, "me@example.com");
    assert_eq!(loaded.folder_id, folder.id);
    assert_eq!(loaded.tags, vec!["finance", "primary"]);
    assert_eq!(
        db.debug_column_names("entries")
            .unwrap()
            .contains(&"password".to_string()),
        false
    );
}

#[test]
fn opens_encrypted_database_with_key() {
    let temp_dir = tempfile::tempdir().unwrap();
    let db_path = temp_dir.path().join("vault.sqlite");

    let db = VaultDb::open_encrypted(&db_path, b"0123456789abcdef0123456789abcdef").unwrap();
    db.migrate().unwrap();
    drop(db);

    let reopened = VaultDb::open_encrypted(&db_path, b"0123456789abcdef0123456789abcdef").unwrap();
    reopened.migrate().unwrap();
}

#[test]
fn searches_entries_by_domain_and_login() {
    let db = VaultDb::memory().unwrap();
    db.migrate().unwrap();
    let folder = db
        .create_folder(FolderInput {
            parent_id: None,
            name: "Root".into(),
        })
        .unwrap();
    db.create_entry(sample_entry(folder.id)).unwrap();

    let matches = db.search_entries("example").unwrap();

    assert_eq!(matches.len(), 1);
    assert_eq!(matches[0].site, "example.com");
    assert_eq!(matches[0].login, "me@example.com");
}

#[test]
fn rejects_unsafe_debug_table_names() {
    let db = VaultDb::memory().unwrap();
    db.migrate().unwrap();

    let error = db.debug_column_names("entries); DROP TABLE entries; --");

    assert_eq!(
        error.unwrap_err().to_string(),
        "invalid request: table name must be a simple identifier"
    );
}
