use lesspass_core::{CryptoConfig, Fingerprint, PasswordOptions, PasswordProfile, SaltField};
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub struct Folder {
    pub id: String,
    pub parent_id: Option<String>,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub struct FolderInput {
    pub parent_id: Option<String>,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub struct EntryInput {
    pub site: String,
    pub login: String,
    pub counter: u32,
    pub options: PasswordOptions,
    pub salt_fields: Vec<SaltField>,
    pub crypto: Option<CryptoConfig>,
    pub folder_id: String,
    pub group_ids: Vec<String>,
    pub tags: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub struct VaultEntry {
    pub id: String,
    pub profile: PasswordProfile,
    pub folder_id: String,
    pub group_ids: Vec<String>,
    pub tags: Vec<String>,
    pub created_at: String,
    pub updated_at: String,
    pub last_used_at: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub struct EntrySummary {
    pub id: String,
    pub site: String,
    pub login: String,
    pub fingerprint: Option<Fingerprint>,
    pub last_used_at: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub struct Settings {
    pub default_crypto: CryptoConfig,
    pub idle_lock_seconds: u64,
    pub clipboard_clear_seconds: u64,
}

impl Default for Settings {
    fn default() -> Self {
        Self {
            default_crypto: CryptoConfig::default(),
            idle_lock_seconds: 60,
            clipboard_clear_seconds: 30,
        }
    }
}
