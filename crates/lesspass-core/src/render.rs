use crate::types::{CoreError, PasswordOptions};

type Rule = &'static str;

const LOWERCASE: &str = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE: &str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS: &str = "0123456789";
const SYMBOLS: &str = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

fn get_rules(options: &PasswordOptions) -> Vec<Rule> {
    let mut rules = Vec::new();
    if options.lowercase {
        rules.push("lowercase");
    }
    if options.uppercase {
        rules.push("uppercase");
    }
    if options.digits {
        rules.push("digits");
    }
    if options.symbols {
        rules.push("symbols");
    }
    rules
}

fn get_set_of_characters(rules: &[Rule]) -> String {
    if rules.is_empty() {
        return format!("{}{}{}{}", LOWERCASE, UPPERCASE, DIGITS, SYMBOLS);
    }
    let mut charset = String::new();
    for rule in rules {
        let subset = match *rule {
            "lowercase" => LOWERCASE,
            "uppercase" => UPPERCASE,
            "digits" => DIGITS,
            "symbols" => SYMBOLS,
            _ => continue,
        };
        charset.push_str(subset);
    }
    charset
}

/// Consume entropy to build a password character by character.
fn consume_entropy(
    generated: &str,
    quotient: &num_bigint::BigUint,
    charset: &str,
    max_length: usize,
) -> (String, num_bigint::BigUint) {
    let charset_len = num_bigint::BigUint::from(charset.len() as u64);
    if generated.len() >= max_length {
        return (generated.to_string(), quotient.clone());
    }
    let remainder = &*quotient % &charset_len;
    let remainder_usize: usize = remainder.iter_u64_digits().next().unwrap_or(0) as usize;
    let char_idx = remainder_usize % charset.len();
    let new_generated = format!(
        "{}{}",
        generated,
        charset.chars().nth(char_idx).unwrap_or('a')
    );
    let new_quotient = quotient / &charset_len;
    consume_entropy(&new_generated, &new_quotient, charset, max_length)
}

/// Get one character per rule for the mandatory rule-satisfying characters.
fn get_one_char_per_rule(
    entropy: &num_bigint::BigUint,
    rules: &[Rule],
) -> (String, num_bigint::BigUint) {
    let mut one_char_per_rules = String::new();
    let mut consumed = entropy.clone();
    for rule in rules {
        let subset = match *rule {
            "lowercase" => LOWERCASE,
            "uppercase" => UPPERCASE,
            "digits" => DIGITS,
            "symbols" => SYMBOLS,
            _ => continue,
        };
        let (value, new_consumed) = consume_entropy("", &consumed, subset, 1);
        one_char_per_rules.push_str(&value);
        consumed = new_consumed;
    }
    (one_char_per_rules, consumed)
}

/// Insert characters pseudo-randomly into the password string.
fn insert_string_pseudo_randomly(
    initial: &str,
    entropy: &num_bigint::BigUint,
    to_insert: &str,
) -> String {
    let mut result = initial.to_string();
    let mut consumed = entropy.clone();

    for ch in to_insert.chars() {
        let current_len = num_bigint::BigUint::from(result.len() as u64);
        if current_len == num_bigint::BigUint::ZERO {
            result.push(ch);
            continue;
        }
        let remainder = &consumed % &current_len;
        let remainder_val: usize = remainder.iter_u64_digits().next().unwrap_or(0) as usize;
        let pos = remainder_val % result.len();
        result.insert(pos, ch);
        consumed /= &current_len;
    }
    result
}

/// Render a password from an entropy hex string and options.
/// This is the deterministic password generation function.
pub fn render_password(entropy_hex: &str, options: &PasswordOptions) -> Result<String, CoreError> {
    let rules = get_rules(options);
    if options.length < rules.len() {
        return Err(CoreError::InvalidPasswordLength {
            length: options.length,
            required_rules: rules.len(),
        });
    }
    let rules = get_rules(options);
    let charset = get_set_of_characters(&rules);
    let entropy_big = num_bigint::BigUint::parse_bytes(entropy_hex.as_bytes(), 16)
        .unwrap_or(num_bigint::BigUint::ZERO);

    let (generated, remaining_entropy) =
        consume_entropy("", &entropy_big, &charset, options.length - rules.len());
    let (chars_to_add, final_entropy) = get_one_char_per_rule(&remaining_entropy, &rules);
    Ok(insert_string_pseudo_randomly(&generated, &final_entropy, &chars_to_add))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_render_password_known_entropy() {
        let options = PasswordOptions {
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true,
            length: 16,
        };
        let entropy = "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da";
        let password = render_password(entropy, &options).unwrap();
        assert_eq!(password.len(), 16);
    }

    #[test]
    fn test_render_password_deterministic() {
        let options = PasswordOptions {
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true,
            length: 16,
        };
        let entropy = "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da";
        let p1 = render_password(entropy, &options);
        let p2 = render_password(entropy, &options);
        assert_eq!(p1, p2);
    }

    #[test]
    fn test_render_password_only_lowercase() {
        let options = PasswordOptions {
            lowercase: true,
            uppercase: false,
            digits: false,
            symbols: false,
            length: 12,
        };
        let entropy = "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da";
        let password = render_password(entropy, &options).unwrap();
        assert_eq!(password.len(), 12);
        assert!(password.chars().all(|c| c.is_ascii_lowercase()));
    }

    #[test]
    fn test_render_password_contains_required_chars() {
        let options = PasswordOptions {
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true,
            length: 16,
        };
        let entropy = "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da";
        let password = render_password(entropy, &options).unwrap();
        assert!(password.chars().any(|c| c.is_ascii_lowercase()));
        assert!(password.chars().any(|c| c.is_ascii_uppercase()));
        assert!(password.chars().any(|c| c.is_ascii_digit()));
        assert!(password
            .chars()
            .any(|c| SYMBOLS.contains(c)));
    }

    #[test]
    fn test_get_rules_empty() {
        let opts = PasswordOptions {
            lowercase: false,
            uppercase: false,
            digits: false,
            symbols: false,
            length: 10,
        };
        let rules = get_rules(&opts);
        assert!(rules.is_empty());
    }
}
