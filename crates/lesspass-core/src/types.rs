use serde::{Deserialize, Serialize};

/// Configuration for the password generation algorithm.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct CryptoConfig {
    /// Number of PBKDF2 iterations (default: 100_000)
    #[serde(default = "default_iterations")]
    pub iterations: u32,
    /// Key length in bytes (default: 32)
    #[serde(default = "default_keylen")]
    pub keylen: usize,
    /// Hash digest algorithm: "sha256", "sha512", "sha1"
    #[serde(default = "default_digest")]
    pub digest: String,
}

fn default_iterations() -> u32 {
    100_000
}
fn default_keylen() -> usize {
    32
}
fn default_digest() -> String {
    "sha256".into()
}

impl Default for CryptoConfig {
    fn default() -> Self {
        Self {
            iterations: default_iterations(),
            keylen: default_keylen(),
            digest: default_digest(),
        }
    }
}

/// Character set options for the rendered password.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct PasswordOptions {
    pub lowercase: bool,
    pub uppercase: bool,
    pub digits: bool,
    pub symbols: bool,
    pub length: usize,
}

impl Default for PasswordOptions {
    fn default() -> Self {
        Self {
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true,
            length: 16,
        }
    }
}

/// A saved password profile (the "entry") — no password is stored,
/// only the parameters needed to regenerate it.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct PasswordProfile {
    /// Website or service identifier
    pub site: String,
    /// Login / username
    pub login: String,
    /// Counter for password rotation
    #[serde(default = "default_counter")]
    pub counter: u32,
    /// Character set options
    #[serde(flatten)]
    pub options: PasswordOptions,
    /// Per-entry custom salt fields; key-value pairs mixed into the salt
    #[serde(default)]
    pub salt_fields: Vec<SaltField>,
    /// Per-entry algorithm overrides (falls back to global settings)
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub crypto: Option<CryptoConfig>,
}

fn default_counter() -> u32 {
    1
}

/// A user-defined salt field for extra entropy per entry.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct SaltField {
    pub key: String,
    pub value: String,
}

impl PasswordProfile {
    /// Build the salt string: site + login + counter(hex) + sorted salt fields.
    pub fn build_salt(&self) -> String {
        let base = format!("{}{}{:x}", self.site, self.login, self.counter);
        if self.salt_fields.is_empty() {
            return base;
        }
        // Sort by key for deterministic output
        let mut fields = self.salt_fields.clone();
        fields.sort_by(|a, b| a.key.cmp(&b.key).then_with(|| a.value.cmp(&b.value)));
        let extra: String = fields
            .iter()
            .map(|f| format!("{}:{}", f.key, f.value))
            .collect::<Vec<_>>()
            .join("|");
        format!("{}{}", base, extra)
    }
}

/// Full configuration for generating a password.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GenerateRequest {
    pub profile: PasswordProfile,
    pub master_password: String,
    /// Global crypto settings (can be overridden per-profile)
    #[serde(default)]
    pub crypto: CryptoConfig,
}

use std::fmt;

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum CoreError {
    InvalidPasswordLength { length: usize, required_rules: usize },
    InvalidFingerprintHash { actual_len: usize },
}

impl fmt::Display for CoreError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            CoreError::InvalidPasswordLength { length, required_rules } => {
                write!(f, "password length {length} cannot fit {required_rules} required character rules")
            }
            CoreError::InvalidFingerprintHash { actual_len } => {
                write!(f, "fingerprint hash must contain at least 18 hex characters, got {actual_len}")
            }
        }
    }
}

impl std::error::Error for CoreError {}
