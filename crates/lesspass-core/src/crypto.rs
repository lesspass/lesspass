use crate::types::{CryptoConfig, PasswordProfile};
use hex;
use hmac::{Hmac, Mac};
use pbkdf2::pbkdf2_hmac;
use sha1::Sha1;
use sha2::{Sha256, Sha512};

/// Normalize the digest name. Matches the original LessPass behavior.
pub fn get_algorithm(algorithm: &str) -> &str {
    match algorithm.to_lowercase().as_str() {
        "sha1" | "sha-1" => "SHA-1",
        "sha256" | "sha-256" => "SHA-256",
        "sha512" | "sha-512" => "SHA-512",
        _ => "SHA-256",
    }
}

/// Compute PBKDF2-derived entropy from a master password and salt.
pub fn derive_entropy(
    master_password: &str,
    salt: &str,
    crypto: &CryptoConfig,
) -> Vec<u8> {
    let mut derived = vec![0u8; crypto.keylen];

    match get_algorithm(&crypto.digest) {
        "SHA-1" => {
            pbkdf2_hmac::<Sha1>(
                master_password.as_bytes(),
                salt.as_bytes(),
                crypto.iterations,
                &mut derived,
            );
        }
        "SHA-512" => {
            pbkdf2_hmac::<Sha512>(
                master_password.as_bytes(),
                salt.as_bytes(),
                crypto.iterations,
                &mut derived,
            );
        }
        _ => {
            // Default: SHA-256
            pbkdf2_hmac::<Sha256>(
                master_password.as_bytes(),
                salt.as_bytes(),
                crypto.iterations,
                &mut derived,
            );
        }
    }

    derived
}

/// Calculate entropy for a given profile and master password.
/// This is the main entry point — equivalent to the TypeScript `calcEntropy`.
pub fn calc_entropy(
    profile: &PasswordProfile,
    master_password: &str,
    crypto: &CryptoConfig,
) -> String {
    let salt = profile.build_salt();
    let effective_crypto = profile.crypto.as_ref().unwrap_or(crypto);
    let derived = derive_entropy(master_password, &salt, effective_crypto);
    hex::encode(derived)
}

/// Build a fingerprint hash using HMAC-SHA256.
pub fn build_fingerprint_hash(key: &str) -> String {
    let key = key.as_bytes();
    let mut mac = Hmac::<Sha256>::new_from_slice(key).expect("HMAC key size is fine");
    mac.update(key);
    let result = mac.finalize();
    hex::encode(result.into_bytes())
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::types::{PasswordOptions, PasswordProfile};

    #[test]
    fn test_get_algorithm() {
        assert_eq!(get_algorithm("sha256"), "SHA-256");
        assert_eq!(get_algorithm("SHA-256"), "SHA-256");
        assert_eq!(get_algorithm("sha512"), "SHA-512");
        assert_eq!(get_algorithm("sha1"), "SHA-1");
        assert_eq!(get_algorithm("unknown"), "SHA-256");
    }

    #[test]
    fn test_calc_entropy_matches_original() {
        let profile = PasswordProfile {
            site: "lesspass.com".into(),
            login: "♥".into(),
            counter: 1,
            options: PasswordOptions {
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: true,
                length: 16,
            },
            salt_fields: vec![],
            crypto: None,
        };
        let crypto = CryptoConfig {
            iterations: 1,
            keylen: 32,
            digest: "sha256".into(),
        };
        let entropy = calc_entropy(&profile, "tHis is a g00d! password", &crypto);
        assert_eq!(
            entropy,
            "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da"
        );
    }

    #[test]
    fn test_calc_entropy_with_salt_fields() {
        let profile = PasswordProfile {
            site: "example.com".into(),
            login: "user@example.com".into(),
            counter: 1,
            options: PasswordOptions::default(),
            salt_fields: vec![
                crate::types::SaltField {
                    key: "pepper".into(),
                    value: "secret123".into(),
                },
            ],
            crypto: None,
        };
        let crypto = CryptoConfig::default();
        let entropy = calc_entropy(&profile, "master", &crypto);
        assert_eq!(entropy.len(), 64); // 32 bytes hex = 64 chars
    }

    #[test]
    fn test_salt_fields_are_deterministic() {
        let profile1 = PasswordProfile {
            site: "a.com".into(),
            login: "b".into(),
            counter: 1,
            options: PasswordOptions::default(),
            salt_fields: vec![
                crate::types::SaltField {
                    key: "z".into(),
                    value: "2".into(),
                },
                crate::types::SaltField {
                    key: "a".into(),
                    value: "1".into(),
                },
            ],
            crypto: None,
        };
        let profile2 = PasswordProfile {
            site: "a.com".into(),
            login: "b".into(),
            counter: 1,
            options: PasswordOptions::default(),
            salt_fields: vec![
                crate::types::SaltField {
                    key: "a".into(),
                    value: "1".into(),
                },
                crate::types::SaltField {
                    key: "z".into(),
                    value: "2".into(),
                },
            ],
            crypto: None,
        };
        let crypto = CryptoConfig::default();
        let e1 = calc_entropy(&profile1, "master", &crypto);
        let e2 = calc_entropy(&profile2, "master", &crypto);
        assert_eq!(e1, e2, "salt fields should be sorted by key for determinism");
    }

    #[test]
    fn test_different_salts_different_entropy() {
        let profile = PasswordProfile {
            site: "test.com".into(),
            login: "user".into(),
            counter: 1,
            options: PasswordOptions::default(),
            salt_fields: vec![],
            crypto: None,
        };
        let crypto = CryptoConfig::default();
        let e1 = calc_entropy(&profile, "pass1", &crypto);
        let e2 = calc_entropy(&profile, "pass2", &crypto);
        assert_ne!(e1, e2);
    }
}
