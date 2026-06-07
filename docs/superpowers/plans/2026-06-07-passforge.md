# PassForge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build PassForge v1: a macOS Tauri desktop app backed by a stateless Rust LessPass core, encrypted local metadata storage, Keychain-gated unlock, and a Chromium MV3 autofill extension.

**Architecture:** Keep cryptography in `crates/lesspass-core`, all persistence and secrets in `desktop/src-tauri`, the desktop UI in `desktop/src`, and the browser extension as a read-only native-messaging client in `packages/lesspass-web-extension`. The extension can search and request generation, but never stores entries, writes entries, or receives the master password.

**Tech Stack:** Rust 2024, Tauri v2, React 19, TypeScript, Vite, Tailwind CSS, rusqlite, SQLCipher-enabled SQLite, macOS Keychain via `security-framework`, Chromium Manifest V3 native messaging.

---

## Graphify Cadence

Graphify is part of the implementation loop. After every checked implementation step, run:

```bash
graphify update . --force
```

Git post-commit and post-checkout hooks are also installed, so commits and branch switches launch background graph rebuilds automatically. If graph freshness is uncertain, run `graphify hook status` and then `graphify update . --force`.

## Scope Check

The design spec spans multiple subsystems. Keep this as one v1 roadmap, but execute it in phases that each produce working software:

1. Core algorithm: deterministic Rust password generation and fingerprints.
2. Desktop backend: storage, session, Keychain, native messaging protocol.
3. Desktop UI: lock, vault, editor, settings.
4. Extension: read-only popup, field detection, native messaging autofill.
5. Packaging and verification: native host registration, builds, security checks.

Do not start a later phase until the phase before it has passing tests and a commit. This keeps the blast radius manageable inside the existing LessPass monorepo.

## File Structure

Create and modify these files. Paths are relative to `/Users/benblum/Desktop/repo/lesspass_control`.

- Modify: `Cargo.toml` — workspace membership and shared Rust dependencies.
- Modify: `crates/lesspass-core/Cargo.toml` — core crate dependencies and dev dependencies.
- Modify: `crates/lesspass-core/src/types.rs` — public algorithm input types, validation, and salt construction.
- Modify: `crates/lesspass-core/src/crypto.rs` — PBKDF2 entropy and HMAC fingerprint hash.
- Modify: `crates/lesspass-core/src/render.rs` — deterministic LessPass password rendering.
- Modify: `crates/lesspass-core/src/fingerprint.rs` — deterministic fingerprint icons and colors.
- Create: `crates/lesspass-core/tests/compatibility.rs` — Rust compatibility vectors against current TypeScript LessPass behavior.
- Create: `desktop/package.json` — desktop frontend package scripts and dependencies.
- Create: `desktop/index.html` — Vite HTML entry.
- Create: `desktop/vite.config.ts` — Vite + React config for Tauri.
- Create: `desktop/tsconfig.json` — desktop TypeScript config.
- Create: `desktop/tailwind.config.ts` — PassForge design tokens.
- Create: `desktop/src/main.tsx` — React app entry.
- Create: `desktop/src/App.tsx` — top-level shell and route state.
- Create: `desktop/src/api.ts` — typed Tauri command client.
- Create: `desktop/src/types.ts` — frontend DTOs matching Rust command payloads.
- Create: `desktop/src/styles.css` — global dark theme.
- Create: `desktop/src/components/LockScreen.tsx` — locked and first-run unlock UI.
- Create: `desktop/src/components/VaultView.tsx` — three-pane vault.
- Create: `desktop/src/components/EntryEditor.tsx` — entry create/edit form.
- Create: `desktop/src/components/SettingsView.tsx` — settings form.
- Create: `desktop/src-tauri/Cargo.toml` — Tauri backend crate.
- Create: `desktop/src-tauri/tauri.conf.json` — macOS app config.
- Create: `desktop/src-tauri/build.rs` — Tauri build hook.
- Create: `desktop/src-tauri/src/main.rs` — Tauri command registration and app setup.
- Create: `desktop/src-tauri/src/error.rs` — backend error type and command result alias.
- Create: `desktop/src-tauri/src/models.rs` — database and command DTOs.
- Create: `desktop/src-tauri/src/db.rs` — SQLCipher-backed SQLite schema, migrations, CRUD, and search.
- Create: `desktop/src-tauri/src/keychain.rs` — macOS Keychain adapter.
- Create: `desktop/src-tauri/src/session.rs` — unlock state, zeroization, idle lock.
- Create: `desktop/src-tauri/src/commands.rs` — Tauri commands used by React.
- Create: `desktop/src-tauri/src/native_host.rs` — native host manifest registration.
- Create: `desktop/src-tauri/src/native_messaging.rs` — request/response types and handler.
- Create: `desktop/src-tauri/src/lib.rs` — shared modules exported for helper binaries and tests.
- Create: `desktop/src-tauri/src/bin/passforge-native-host.rs` — Chrome-launched helper.
- Create: `desktop/src-tauri/tests/db_tests.rs` — database behavior tests.
- Create: `desktop/src-tauri/tests/session_tests.rs` — session lock behavior tests.
- Create: `desktop/src-tauri/tests/native_messaging_tests.rs` — protocol behavior tests.
- Modify: `packages/lesspass-web-extension/public/manifest.json` — PassForge MV3 manifest with `nativeMessaging`.
- Delete: `packages/lesspass-web-extension/src/main.tsx` — old embedded LessPass web component popup entry.
- Create: `packages/lesspass-web-extension/src/background.ts` — native messaging connection lifecycle.
- Create: `packages/lesspass-web-extension/src/popup.ts` — popup UI controller.
- Create: `packages/lesspass-web-extension/src/nativeClient.ts` — typed wrapper around `chrome.runtime.sendMessage`.
- Create: `packages/lesspass-web-extension/src/protocol.ts` — shared extension message types.
- Create: `packages/lesspass-web-extension/src/autofill.ts` — DOM autofill helpers.
- Create: `packages/lesspass-web-extension/src/popup.html` — popup markup.
- Create: `packages/lesspass-web-extension/src/popup.css` — popup styles using PassForge tokens.
- Create: `packages/lesspass-web-extension/src/*.test.ts` — extension unit tests listed in the tasks below.
- Create: `docs/passforge/security-checklist.md` — concrete v1 security verification checklist.

---

## Task 1: Stabilize `lesspass-core`

**Files:**
- Modify: `crates/lesspass-core/src/types.rs`
- Modify: `crates/lesspass-core/src/render.rs`
- Modify: `crates/lesspass-core/src/crypto.rs`
- Create: `crates/lesspass-core/tests/compatibility.rs`

- [ ] **Step 1: Add compatibility tests**

Create `crates/lesspass-core/tests/compatibility.rs`:

```rust
use lesspass_core::{
    build_fingerprint_hash, calc_entropy, create_fingerprint, render_password, CryptoConfig,
    PasswordOptions, PasswordProfile, SaltField,
};

fn full_options(length: usize) -> PasswordOptions {
    PasswordOptions {
        lowercase: true,
        uppercase: true,
        digits: true,
        symbols: true,
        length,
    }
}

#[test]
fn generates_known_lesspass_password() {
    let profile = PasswordProfile {
        site: "example.org".into(),
        login: "contact@example.org".into(),
        counter: 1,
        options: full_options(16),
        salt_fields: vec![],
        crypto: None,
    };

    let entropy = calc_entropy(&profile, "password", &CryptoConfig::default());
    let password = render_password(&entropy, &profile.options).unwrap();

    assert_eq!(password, "WHLpUL)e00[iHR+w");
}

#[test]
fn salt_fields_are_sorted_by_key_then_value() {
    let mut profile = PasswordProfile {
        site: "example.com".into(),
        login: "me@example.com".into(),
        counter: 2,
        options: full_options(16),
        salt_fields: vec![
            SaltField { key: "z".into(), value: "2".into() },
            SaltField { key: "a".into(), value: "2".into() },
            SaltField { key: "a".into(), value: "1".into() },
        ],
        crypto: None,
    };

    let first = profile.build_salt();
    profile.salt_fields.reverse();
    let second = profile.build_salt();

    assert_eq!(first, second);
    assert_eq!(first, "example.comme@example.com2a:1|a:2|z:2");
}

#[test]
fn validates_length_can_fit_enabled_rules() {
    let options = PasswordOptions {
        lowercase: true,
        uppercase: true,
        digits: true,
        symbols: true,
        length: 3,
    };

    let result = render_password(
        "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da",
        &options,
    );

    assert_eq!(result.unwrap_err().to_string(), "password length 3 cannot fit 4 required character rules");
}

#[test]
fn creates_known_fingerprint() {
    let hash = build_fingerprint_hash("password");
    let fingerprint = create_fingerprint(&hash).unwrap();

    assert_eq!(serde_json::to_value(fingerprint).unwrap(), serde_json::json!([
        { "color": "#FFB5DA", "icon": "fa-flask" },
        { "color": "#009191", "icon": "fa-archive" },
        { "color": "#B5DAFE", "icon": "fa-beer" }
    ]));
}
```

- [ ] **Step 2: Run the tests to verify failures**

Run:

```bash
cargo test -p lesspass-core
```

Expected: FAIL because `render_password` returns `String`, `create_fingerprint` does not return a `Result`, `build_fingerprint_hash` is not exported, salt tie sorting is only by key, and serde icon names currently serialize as enum names rather than `fa-*`.

- [ ] **Step 3: Export fingerprint hash and add core errors**

Modify `crates/lesspass-core/src/lib.rs`:

```rust
pub mod crypto;
pub mod fingerprint;
pub mod render;
pub mod types;

pub use crypto::{build_fingerprint_hash, calc_entropy};
pub use fingerprint::{create_fingerprint, Finger, Fingerprint, FingerprintColor, FingerprintIcon};
pub use render::render_password;
pub use types::*;
```

Append to `crates/lesspass-core/src/types.rs`:

```rust
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
```

- [ ] **Step 4: Make salt ordering fully deterministic**

In `crates/lesspass-core/src/types.rs`, replace the salt sort in `PasswordProfile::build_salt`:

```rust
fields.sort_by(|a, b| a.key.cmp(&b.key).then_with(|| a.value.cmp(&b.value)));
```

- [ ] **Step 5: Make rendering validate impossible lengths**

In `crates/lesspass-core/src/render.rs`, change the public signature and early validation:

```rust
use crate::types::{CoreError, PasswordOptions};

pub fn render_password(entropy_hex: &str, options: &PasswordOptions) -> Result<String, CoreError> {
    let rules = get_rules(options);
    if options.length < rules.len() {
        return Err(CoreError::InvalidPasswordLength {
            length: options.length,
            required_rules: rules.len(),
        });
    }

    let charset = get_set_of_characters(&rules);
    let entropy_big = num_bigint::BigUint::parse_bytes(entropy_hex.as_bytes(), 16)
        .unwrap_or(num_bigint::BigUint::ZERO);

    let (generated, remaining_entropy) =
        consume_entropy("", &entropy_big, &charset, options.length - rules.len());
    let (chars_to_add, final_entropy) = get_one_char_per_rule(&remaining_entropy, &rules);
    Ok(insert_string_pseudo_randomly(&generated, &final_entropy, &chars_to_add))
}
```

Update existing render tests to call `.unwrap()` on valid render calls.

- [ ] **Step 6: Make fingerprint serialization match LessPass**

In `crates/lesspass-core/src/fingerprint.rs`, add explicit serde names for each icon variant used by compatibility tests and keep the same pattern for the remaining variants:

```rust
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub enum FingerprintIcon {
    #[serde(rename = "fa-hashtag")]
    FaHashtag,
    #[serde(rename = "fa-heart")]
    FaHeart,
    #[serde(rename = "fa-hotel")]
    FaHotel,
    #[serde(rename = "fa-university")]
    FaUniversity,
    #[serde(rename = "fa-plug")]
    FaPlug,
    #[serde(rename = "fa-ambulance")]
    FaAmbulance,
    #[serde(rename = "fa-bus")]
    FaBus,
    #[serde(rename = "fa-car")]
    FaCar,
    #[serde(rename = "fa-plane")]
    FaPlane,
    #[serde(rename = "fa-rocket")]
    FaRocket,
    #[serde(rename = "fa-ship")]
    FaShip,
    #[serde(rename = "fa-subway")]
    FaSubway,
    #[serde(rename = "fa-truck")]
    FaTruck,
    #[serde(rename = "fa-jpy")]
    FaJpy,
    #[serde(rename = "fa-eur")]
    FaEur,
    #[serde(rename = "fa-btc")]
    FaBtc,
    #[serde(rename = "fa-usd")]
    FaUsd,
    #[serde(rename = "fa-gbp")]
    FaGbp,
    #[serde(rename = "fa-archive")]
    FaArchive,
    #[serde(rename = "fa-area-chart")]
    FaAreaChart,
    #[serde(rename = "fa-bed")]
    FaBed,
    #[serde(rename = "fa-beer")]
    FaBeer,
    #[serde(rename = "fa-bell")]
    FaBell,
    #[serde(rename = "fa-binoculars")]
    FaBinoculars,
    #[serde(rename = "fa-birthday-cake")]
    FaBirthdayCake,
    #[serde(rename = "fa-bomb")]
    FaBomb,
    #[serde(rename = "fa-briefcase")]
    FaBriefcase,
    #[serde(rename = "fa-bug")]
    FaBug,
    #[serde(rename = "fa-camera")]
    FaCamera,
    #[serde(rename = "fa-cart-plus")]
    FaCartPlus,
    #[serde(rename = "fa-certificate")]
    FaCertificate,
    #[serde(rename = "fa-coffee")]
    FaCoffee,
    #[serde(rename = "fa-cloud")]
    FaCloud,
    #[serde(rename = "fa-comment")]
    FaComment,
    #[serde(rename = "fa-cube")]
    FaCube,
    #[serde(rename = "fa-cutlery")]
    FaCutlery,
    #[serde(rename = "fa-database")]
    FaDatabase,
    #[serde(rename = "fa-diamond")]
    FaDiamond,
    #[serde(rename = "fa-exclamation-circle")]
    FaExclamationCircle,
    #[serde(rename = "fa-eye")]
    FaEye,
    #[serde(rename = "fa-flag")]
    FaFlag,
    #[serde(rename = "fa-flask")]
    FaFlask,
    #[serde(rename = "fa-futbol-o")]
    FaFutbolO,
    #[serde(rename = "fa-gamepad")]
    FaGamepad,
    #[serde(rename = "fa-graduation-cap")]
    FaGraduationCap,
}
```

Change `create_fingerprint`:

```rust
use crate::types::CoreError;

pub fn create_fingerprint(hmac_sha256: &str) -> Result<Fingerprint, CoreError> {
    if hmac_sha256.len() < 18 {
        return Err(CoreError::InvalidFingerprintHash {
            actual_len: hmac_sha256.len(),
        });
    }

    let h1 = &hmac_sha256[0..6];
    let h2 = &hmac_sha256[6..12];
    let h3 = &hmac_sha256[12..18];

    Ok([
        Finger {
            color: get_color(h1),
            icon: get_icon(h1),
        },
        Finger {
            color: get_color(h2),
            icon: get_icon(h2),
        },
        Finger {
            color: get_color(h3),
            icon: get_icon(h3),
        },
    ])
}
```

Update existing fingerprint tests to call `.unwrap()`.

- [ ] **Step 7: Run core tests**

Run:

```bash
cargo test -p lesspass-core
```

Expected: PASS.

- [ ] **Step 8: Commit core stabilization**

```bash
git add Cargo.toml crates/lesspass-core
git commit -m "feat: stabilize passforge core"
```

---

## Task 2: Scaffold Tauri Desktop App

**Files:**
- Create: `desktop/package.json`
- Create: `desktop/index.html`
- Create: `desktop/vite.config.ts`
- Create: `desktop/tsconfig.json`
- Create: `desktop/tailwind.config.ts`
- Create: `desktop/src/main.tsx`
- Create: `desktop/src/App.tsx`
- Create: `desktop/src/styles.css`
- Create: `desktop/src-tauri/Cargo.toml`
- Create: `desktop/src-tauri/tauri.conf.json`
- Create: `desktop/src-tauri/build.rs`
- Create: `desktop/src-tauri/src/main.rs`

- [ ] **Step 1: Create desktop package**

Create `desktop/package.json`:

```json
{
  "name": "passforge-desktop",
  "version": "12.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "tauri": "tauri",
    "test": "vitest run"
  },
  "dependencies": {
    "@tauri-apps/api": "^2.9.0",
    "lucide-react": "^0.468.0",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tauri-apps/cli": "^2.9.0",
    "@tailwindcss/vite": "^4.1.18",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.1",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.2",
    "jsdom": "^27.3.0",
    "tailwindcss": "^4.1.18",
    "typescript": "^5.9.3",
    "vite": "^7.3.0",
    "vitest": "^4.0.16"
  }
}
```

- [ ] **Step 2: Create Vite config files**

Create `desktop/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PassForge</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Create `desktop/vite.config.ts`:

```ts
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
  },
  envPrefix: ["VITE_", "TAURI_"],
});
```

Create `desktop/tsconfig.json`:

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["vite/client", "vitest/globals"],
    "noEmit": true
  },
  "include": ["src"]
}
```

Create `desktop/tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pf: {
          surface: "#0b1326",
          container: "#171f33",
          highest: "#2d3449",
          primary: "#89ceff",
          primaryContainer: "#0ea5e9",
          secondary: "#4fdbc8",
          secondaryContainer: "#04b4a2",
          tertiary: "#ffb86e",
          error: "#ffb4ab",
          errorContainer: "#93000a"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      borderRadius: {
        DEFAULT: "2px",
        lg: "4px",
        xl: "8px"
      }
    }
  }
} satisfies Config;
```

- [ ] **Step 3: Create minimal React shell**

Create `desktop/src/styles.css`:

```css
@import "tailwindcss";

:root {
  color: #e5edf8;
  background: #0b1326;
  font-family: Inter, system-ui, sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 980px;
  min-height: 720px;
  background: #0b1326;
}

button,
input,
select,
textarea {
  font: inherit;
}
```

Create `desktop/src/main.tsx`:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Create `desktop/src/App.tsx`:

```tsx
export function App() {
  return (
    <main className="min-h-screen bg-pf-surface text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-normal">PassForge</h1>
          <p className="mt-3 text-sm text-slate-300">Stateless passwords, local control.</p>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 4: Create Tauri backend scaffold**

Create `desktop/src-tauri/Cargo.toml`:

```toml
[package]
name = "passforge-desktop"
version.workspace = true
edition.workspace = true
license.workspace = true

[build-dependencies]
tauri-build = { version = "2", features = [] }

[dependencies]
lesspass-core = { path = "../../crates/lesspass-core" }
serde.workspace = true
serde_json.workspace = true
thiserror.workspace = true
hex.workspace = true
tauri = { version = "2", features = ["macos-private-api"] }
tauri-plugin-biometric = "2"
zeroize = "1"
uuid = { version = "1", features = ["v4", "serde"] }
chrono = { version = "0.4", features = ["serde"] }
rusqlite = { version = "0.32", features = ["bundled-sqlcipher", "chrono", "uuid"] }
security-framework = "3"
dirs = "6"
```

Create `desktop/src-tauri/build.rs`:

```rust
fn main() {
    tauri_build::build();
}
```

Create `desktop/src-tauri/tauri.conf.json`:

```json
{
  "$schema": "https://schema.tauri.app/config/2",
  "productName": "PassForge",
  "version": "12.0.0",
  "identifier": "com.passforge.desktop",
  "build": {
    "beforeDevCommand": "yarn dev",
    "beforeBuildCommand": "yarn build",
    "devUrl": "http://localhost:1420",
    "frontendDist": "../dist"
  },
  "app": {
    "windows": [
      {
        "title": "PassForge",
        "width": 1180,
        "height": 760,
        "minWidth": 980,
        "minHeight": 720
      }
    ],
    "security": {
      "csp": null
    }
  },
  "bundle": {
    "active": true,
    "targets": "app",
    "macOS": {
      "minimumSystemVersion": "13.0"
    }
  }
}
```

Create `desktop/src-tauri/src/main.rs`:

```rust
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_biometric::init())
        .run(tauri::generate_context!())
        .expect("failed to run PassForge");
}
```

- [ ] **Step 5: Run scaffold checks**

Run:

```bash
cargo check -p passforge-desktop
yarn workspace passforge-desktop build
```

Expected: both commands complete successfully.

- [ ] **Step 6: Commit desktop scaffold**

```bash
git add Cargo.toml desktop
git commit -m "feat: scaffold passforge desktop"
```

---

## Task 3: Add Encrypted Storage Model and CRUD

**Files:**
- Create: `desktop/src-tauri/src/error.rs`
- Create: `desktop/src-tauri/src/models.rs`
- Create: `desktop/src-tauri/src/db.rs`
- Create: `desktop/src-tauri/tests/db_tests.rs`
- Modify: `desktop/src-tauri/src/main.rs`

- [ ] **Step 1: Write database behavior tests**

Create `desktop/src-tauri/tests/db_tests.rs`:

```rust
#[path = "../src/db.rs"]
mod db;
#[path = "../src/error.rs"]
mod error;
#[path = "../src/models.rs"]
mod models;

use db::VaultDb;
use lesspass_core::{PasswordOptions, PasswordProfile};
use models::{EntryInput, FolderInput};

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

    let folder = db.create_folder(FolderInput { parent_id: None, name: "Personal".into() }).unwrap();
    let entry = db.create_entry(sample_entry(folder.id.clone())).unwrap();
    let loaded = db.get_entry(&entry.id).unwrap().unwrap();

    assert_eq!(loaded.profile.site, "example.com");
    assert_eq!(loaded.profile.login, "me@example.com");
    assert_eq!(loaded.folder_id, folder.id);
    assert_eq!(loaded.tags, vec!["finance", "primary"]);
    assert_eq!(db.debug_column_names("entries").unwrap().contains(&"password".to_string()), false);
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
    let folder = db.create_folder(FolderInput { parent_id: None, name: "Root".into() }).unwrap();
    db.create_entry(sample_entry(folder.id)).unwrap();

    let matches = db.search_entries("example").unwrap();

    assert_eq!(matches.len(), 1);
    assert_eq!(matches[0].site, "example.com");
    assert_eq!(matches[0].login, "me@example.com");
}
```

- [ ] **Step 2: Run tests to verify failures**

Run:

```bash
cargo test -p passforge-desktop --test db_tests
```

Expected: FAIL because `db`, `models`, and `error` modules do not exist, and `tempfile` is not configured for tests.

- [ ] **Step 3: Add backend error type**

Create `desktop/src-tauri/src/error.rs`:

```rust
use serde::Serialize;

#[derive(Debug, thiserror::Error)]
pub enum PassForgeError {
    #[error("database error: {0}")]
    Database(#[from] rusqlite::Error),
    #[error("json error: {0}")]
    Json(#[from] serde_json::Error),
    #[error("entry not found: {0}")]
    EntryNotFound(String),
    #[error("vault is locked")]
    Locked,
    #[error("keychain error: {0}")]
    Keychain(String),
    #[error("invalid request: {0}")]
    InvalidRequest(String),
}

pub type Result<T> = std::result::Result<T, PassForgeError>;

#[derive(Debug, Serialize)]
pub struct CommandError {
    pub message: String,
}

impl serde::Serialize for PassForgeError {
    fn serialize<S>(&self, serializer: S) -> std::result::Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        CommandError {
            message: self.to_string(),
        }
        .serialize(serializer)
    }
}
```

- [ ] **Step 4: Add database models**

Create `desktop/src-tauri/src/models.rs`:

```rust
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
```

- [ ] **Step 5: Add SQLite implementation**

Create `desktop/src-tauri/src/db.rs` with this public surface:

```rust
use crate::error::Result;
use crate::models::{EntryInput, EntrySummary, Folder, FolderInput, VaultEntry};
use chrono::Utc;
use lesspass_core::PasswordProfile;
use rusqlite::{params, Connection};
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
            params![folder.id, folder.parent_id, folder.name],
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
                id,
                profile.site,
                profile.login,
                profile.counter,
                serde_json::to_string(&profile.options)?,
                serde_json::to_string(&profile.salt_fields)?,
                serde_json::to_string(&profile.crypto)?,
                input.folder_id,
                now,
                now
            ],
        )?;

        for tag in &input.tags {
            self.attach_tag(&id, tag)?;
        }

        self.get_entry(&id).map(|entry| entry.expect("inserted entry exists"))
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

        rows.collect::<std::result::Result<Vec<_>, _>>().map_err(Into::into)
    }

    pub fn mark_used(&self, id: &str) -> Result<()> {
        self.conn.execute(
            "UPDATE entries SET last_used_at = ?1 WHERE id = ?2",
            params![Utc::now().to_rfc3339(), id],
        )?;
        Ok(())
    }

    pub fn debug_column_names(&self, table: &str) -> Result<Vec<String>> {
        let mut stmt = self.conn.prepare(&format!("PRAGMA table_info({table})"))?;
        let rows = stmt.query_map([], |row| row.get::<_, String>(1))?;
        rows.collect::<std::result::Result<Vec<_>, _>>().map_err(Into::into)
    }

    fn attach_tag(&self, entry_id: &str, name: &str) -> Result<()> {
        let tag_id = Uuid::new_v4().to_string();
        self.conn.execute(
            "INSERT OR IGNORE INTO tags (id, name) VALUES (?1, ?2)",
            params![tag_id, name],
        )?;
        let existing_id: String = self
            .conn
            .query_row("SELECT id FROM tags WHERE name = ?1", params![name], |row| row.get(0))?;
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
        rows.collect::<std::result::Result<Vec<_>, _>>().map_err(Into::into)
    }

    fn group_ids_for_entry(&self, entry_id: &str) -> Result<Vec<String>> {
        let mut stmt = self
            .conn
            .prepare("SELECT group_id FROM entry_groups WHERE entry_id = ?1 ORDER BY group_id ASC")?;
        let rows = stmt.query_map(params![entry_id], |row| row.get::<_, String>(0))?;
        rows.collect::<std::result::Result<Vec<_>, _>>().map_err(Into::into)
    }
}
```

- [ ] **Step 6: Register modules**

Modify `desktop/src-tauri/src/main.rs`:

```rust
mod db;
mod error;
mod models;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_biometric::init())
        .run(tauri::generate_context!())
        .expect("failed to run PassForge");
}
```

- [ ] **Step 7: Add test dependency and run database tests**

Add to `desktop/src-tauri/Cargo.toml`:

```toml
[dev-dependencies]
tempfile = "3"
```

Run:

```bash
cargo test -p passforge-desktop --test db_tests
```

Expected: PASS.

- [ ] **Step 8: Commit storage model**

```bash
git add desktop/src-tauri
git commit -m "feat: add passforge vault storage"
```

---

## Task 4: Add Session and Keychain Boundary

**Files:**
- Create: `desktop/src-tauri/src/keychain.rs`
- Create: `desktop/src-tauri/src/session.rs`
- Create: `desktop/src-tauri/tests/session_tests.rs`
- Modify: `desktop/src-tauri/src/main.rs`

- [ ] **Step 1: Write session tests**

Create `desktop/src-tauri/tests/session_tests.rs`:

```rust
#[path = "../src/error.rs"]
mod error;
#[path = "../src/session.rs"]
mod session;

use session::SessionState;

#[test]
fn locked_session_cannot_expose_master_password() {
    let session = SessionState::default();

    assert!(session.master_password_bytes().is_err());
    assert!(session.is_locked());
}

#[test]
fn unlock_then_lock_zeroizes_session() {
    let session = SessionState::default();

    session.unlock("correct horse battery staple".as_bytes().to_vec()).unwrap();
    assert_eq!(session.master_password_bytes().unwrap(), b"correct horse battery staple");
    session.lock().unwrap();

    assert!(session.master_password_bytes().is_err());
    assert!(session.is_locked());
}
```

- [ ] **Step 2: Run tests to verify failures**

Run:

```bash
cargo test -p passforge-desktop --test session_tests
```

Expected: FAIL because `session.rs` does not exist.

- [ ] **Step 3: Add session state**

Create `desktop/src-tauri/src/session.rs`:

```rust
use crate::error::{PassForgeError, Result};
use std::sync::Mutex;
use std::time::{Duration, Instant};
use zeroize::Zeroize;

#[derive(Default)]
pub struct SessionState {
    inner: Mutex<SessionInner>,
}

#[derive(Default)]
struct SessionInner {
    master_password: Vec<u8>,
    unlocked_at: Option<Instant>,
    idle_timeout: Duration,
}

impl SessionState {
    pub fn unlock(&self, master_password: Vec<u8>) -> Result<()> {
        let mut inner = self.inner.lock().expect("session mutex poisoned");
        inner.master_password.zeroize();
        inner.master_password = master_password;
        inner.unlocked_at = Some(Instant::now());
        if inner.idle_timeout.is_zero() {
            inner.idle_timeout = Duration::from_secs(60);
        }
        Ok(())
    }

    pub fn lock(&self) -> Result<()> {
        let mut inner = self.inner.lock().expect("session mutex poisoned");
        inner.master_password.zeroize();
        inner.master_password.clear();
        inner.unlocked_at = None;
        Ok(())
    }

    pub fn is_locked(&self) -> bool {
        let inner = self.inner.lock().expect("session mutex poisoned");
        inner.master_password.is_empty() || inner.unlocked_at.is_none()
    }

    pub fn master_password_bytes(&self) -> Result<Vec<u8>> {
        let inner = self.inner.lock().expect("session mutex poisoned");
        if inner.master_password.is_empty() {
            return Err(PassForgeError::Locked);
        }
        Ok(inner.master_password.clone())
    }

    pub fn set_idle_timeout(&self, seconds: u64) {
        let mut inner = self.inner.lock().expect("session mutex poisoned");
        inner.idle_timeout = Duration::from_secs(seconds);
    }

    pub fn lock_if_idle(&self) -> Result<bool> {
        let should_lock = {
            let inner = self.inner.lock().expect("session mutex poisoned");
            inner
                .unlocked_at
                .map(|at| at.elapsed() >= inner.idle_timeout)
                .unwrap_or(false)
        };
        if should_lock {
            self.lock()?;
        }
        Ok(should_lock)
    }
}
```

- [ ] **Step 4: Add Keychain adapter**

Create `desktop/src-tauri/src/keychain.rs`:

```rust
use crate::error::{PassForgeError, Result};
use security_framework::passwords::{delete_generic_password, get_generic_password, set_generic_password};

const SERVICE: &str = "com.passforge.desktop";
const MASTER_ACCOUNT: &str = "master-password";
const DB_KEY_ACCOUNT: &str = "database-key";

pub trait SecretStore: Send + Sync {
    fn save_master_password(&self, value: &[u8]) -> Result<()>;
    fn load_master_password(&self) -> Result<Option<Vec<u8>>>;
    fn delete_master_password(&self) -> Result<()>;
    fn save_database_key(&self, value: &[u8]) -> Result<()>;
    fn load_database_key(&self) -> Result<Option<Vec<u8>>>;
}

#[derive(Debug, Default)]
pub struct MacKeychain;

impl SecretStore for MacKeychain {
    fn save_master_password(&self, value: &[u8]) -> Result<()> {
        set_generic_password(SERVICE, MASTER_ACCOUNT, value)
            .map_err(|err| PassForgeError::Keychain(err.to_string()))
    }

    fn load_master_password(&self) -> Result<Option<Vec<u8>>> {
        match get_generic_password(SERVICE, MASTER_ACCOUNT) {
            Ok(value) => Ok(Some(value)),
            Err(_) => Ok(None),
        }
    }

    fn delete_master_password(&self) -> Result<()> {
        match delete_generic_password(SERVICE, MASTER_ACCOUNT) {
            Ok(()) => Ok(()),
            Err(err) => Err(PassForgeError::Keychain(err.to_string())),
        }
    }

    fn save_database_key(&self, value: &[u8]) -> Result<()> {
        set_generic_password(SERVICE, DB_KEY_ACCOUNT, value)
            .map_err(|err| PassForgeError::Keychain(err.to_string()))
    }

    fn load_database_key(&self) -> Result<Option<Vec<u8>>> {
        match get_generic_password(SERVICE, DB_KEY_ACCOUNT) {
            Ok(value) => Ok(Some(value)),
            Err(_) => Ok(None),
        }
    }
}
```

- [ ] **Step 5: Register modules**

Modify `desktop/src-tauri/src/main.rs`:

```rust
mod db;
mod error;
mod keychain;
mod models;
mod session;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_biometric::init())
        .manage(session::SessionState::default())
        .run(tauri::generate_context!())
        .expect("failed to run PassForge");
}
```

- [ ] **Step 6: Run session tests**

Run:

```bash
cargo test -p passforge-desktop --test session_tests
```

Expected: PASS.

- [ ] **Step 7: Commit session and Keychain boundary**

```bash
git add desktop/src-tauri
git commit -m "feat: add passforge session boundary"
```

---

## Task 5: Add Tauri Commands

**Files:**
- Create: `desktop/src-tauri/src/commands.rs`
- Modify: `desktop/src-tauri/src/main.rs`
- Create: `desktop/src/api.ts`
- Create: `desktop/src/types.ts`

- [ ] **Step 1: Write command module**

Create `desktop/src-tauri/src/commands.rs`:

```rust
use crate::db::VaultDb;
use crate::error::{PassForgeError, Result};
use crate::models::{EntryInput, EntrySummary, Folder, FolderInput, Settings, VaultEntry};
use crate::session::SessionState;
use lesspass_core::{build_fingerprint_hash, calc_entropy, create_fingerprint, render_password, CryptoConfig};
use std::sync::Mutex;
use tauri::State;

pub struct AppState {
    pub db: Mutex<VaultDb>,
    pub settings: Mutex<Settings>,
}

#[tauri::command]
pub fn is_locked(session: State<SessionState>) -> bool {
    session.is_locked()
}

#[tauri::command]
pub fn unlock_with_master_password(master_password: String, session: State<SessionState>) -> Result<()> {
    session.unlock(master_password.into_bytes())
}

#[tauri::command]
pub fn lock(session: State<SessionState>) -> Result<()> {
    session.lock()
}

#[tauri::command]
pub fn create_folder(input: FolderInput, state: State<AppState>) -> Result<Folder> {
    state.db.lock().expect("db mutex poisoned").create_folder(input)
}

#[tauri::command]
pub fn create_entry(input: EntryInput, state: State<AppState>) -> Result<VaultEntry> {
    state.db.lock().expect("db mutex poisoned").create_entry(input)
}

#[tauri::command]
pub fn search_entries(query: String, state: State<AppState>) -> Result<Vec<EntrySummary>> {
    let mut entries = state.db.lock().expect("db mutex poisoned").search_entries(&query)?;
    for entry in &mut entries {
        let hash = build_fingerprint_hash(&entry.login);
        entry.fingerprint = Some(create_fingerprint(&hash).map_err(|err| PassForgeError::InvalidRequest(err.to_string()))?);
    }
    Ok(entries)
}

#[tauri::command]
pub fn generate_password(entry_id: String, state: State<AppState>, session: State<SessionState>) -> Result<String> {
    let master_password = String::from_utf8(session.master_password_bytes()?)
        .map_err(|_| PassForgeError::InvalidRequest("master password is not valid UTF-8".into()))?;
    let settings = state.settings.lock().expect("settings mutex poisoned").clone();
    let db = state.db.lock().expect("db mutex poisoned");
    let entry = db
        .get_entry(&entry_id)?
        .ok_or_else(|| PassForgeError::EntryNotFound(entry_id.clone()))?;
    let crypto: CryptoConfig = entry.profile.crypto.clone().unwrap_or(settings.default_crypto);
    let entropy = calc_entropy(&entry.profile, &master_password, &crypto);
    let password = render_password(&entropy, &entry.profile.options)
        .map_err(|err| PassForgeError::InvalidRequest(err.to_string()))?;
    db.mark_used(&entry_id)?;
    Ok(password)
}

#[tauri::command]
pub fn get_settings(state: State<AppState>) -> Settings {
    state.settings.lock().expect("settings mutex poisoned").clone()
}

#[tauri::command]
pub fn save_settings(settings: Settings, state: State<AppState>, session: State<SessionState>) -> Result<Settings> {
    session.set_idle_timeout(settings.idle_lock_seconds);
    *state.settings.lock().expect("settings mutex poisoned") = settings.clone();
    Ok(settings)
}
```

- [ ] **Step 2: Register command handlers and app state**

Modify `desktop/src-tauri/src/main.rs`:

```rust
mod commands;
mod db;
mod error;
mod keychain;
mod models;
mod session;

use commands::AppState;
use models::Settings;
use std::sync::Mutex;

fn main() {
    let db = db::VaultDb::memory().expect("database opens");
    db.migrate().expect("database migrates");

    tauri::Builder::default()
        .plugin(tauri_plugin_biometric::init())
        .manage(session::SessionState::default())
        .manage(AppState {
            db: Mutex::new(db),
            settings: Mutex::new(Settings::default()),
        })
        .invoke_handler(tauri::generate_handler![
            commands::is_locked,
            commands::unlock_with_master_password,
            commands::lock,
            commands::create_folder,
            commands::create_entry,
            commands::search_entries,
            commands::generate_password,
            commands::get_settings,
            commands::save_settings,
        ])
        .run(tauri::generate_context!())
        .expect("failed to run PassForge");
}
```

- [ ] **Step 3: Add typed frontend API**

Create `desktop/src/types.ts`:

```ts
export type CryptoConfig = {
  iterations: number;
  keylen: number;
  digest: "sha256" | "sha512" | "sha1";
};

export type PasswordOptions = {
  lowercase: boolean;
  uppercase: boolean;
  digits: boolean;
  symbols: boolean;
  length: number;
};

export type SaltField = {
  key: string;
  value: string;
};

export type EntryInput = {
  site: string;
  login: string;
  counter: number;
  options: PasswordOptions;
  saltFields: SaltField[];
  crypto: CryptoConfig | null;
  folderId: string;
  groupIds: string[];
  tags: string[];
};

export type EntrySummary = {
  id: string;
  site: string;
  login: string;
  fingerprint: Array<{ icon: string; color: string }> | null;
  lastUsedAt: string | null;
};

export type Settings = {
  defaultCrypto: CryptoConfig;
  idleLockSeconds: number;
  clipboardClearSeconds: number;
};
```

Create `desktop/src/api.ts`:

```ts
import { invoke } from "@tauri-apps/api/core";
import type { EntryInput, EntrySummary, Settings } from "./types";

export const api = {
  isLocked: () => invoke<boolean>("is_locked"),
  unlockWithMasterPassword: (masterPassword: string) =>
    invoke<void>("unlock_with_master_password", { masterPassword }),
  lock: () => invoke<void>("lock"),
  searchEntries: (query: string) => invoke<EntrySummary[]>("search_entries", { query }),
  createEntry: (input: EntryInput) => invoke("create_entry", { input }),
  generatePassword: (entryId: string) => invoke<string>("generate_password", { entryId }),
  getSettings: () => invoke<Settings>("get_settings"),
  saveSettings: (settings: Settings) => invoke<Settings>("save_settings", { settings }),
};
```

- [ ] **Step 4: Run backend and frontend checks**

Run:

```bash
cargo check -p passforge-desktop
yarn workspace passforge-desktop build
```

Expected: PASS.

- [ ] **Step 5: Commit command layer**

```bash
git add desktop
git commit -m "feat: expose passforge desktop commands"
```

---

## Task 6: Build Desktop UI Views

**Files:**
- Modify: `desktop/src/App.tsx`
- Create: `desktop/src/components/LockScreen.tsx`
- Create: `desktop/src/components/VaultView.tsx`
- Create: `desktop/src/components/EntryEditor.tsx`
- Create: `desktop/src/components/SettingsView.tsx`
- Create: `desktop/src/App.test.tsx`

- [ ] **Step 1: Write UI smoke tests**

Create `desktop/src/App.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { App } from "./App";

vi.mock("./api", () => ({
  api: {
    isLocked: () => Promise.resolve(true),
    unlockWithMasterPassword: () => Promise.resolve(),
    searchEntries: () => Promise.resolve([]),
    getSettings: () => Promise.resolve({
      defaultCrypto: { iterations: 100000, keylen: 32, digest: "sha256" },
      idleLockSeconds: 60,
      clipboardClearSeconds: 30,
    }),
  },
}));

describe("App", () => {
  it("renders the PassForge lock screen while locked", async () => {
    render(<App />);

    expect(await screen.findByRole("heading", { name: "PassForge" })).toBeInTheDocument();
    expect(screen.getByLabelText("Master password")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run UI tests to verify failure**

Run:

```bash
yarn workspace passforge-desktop test
```

Expected: FAIL because app components do not expose the tested lock screen.

- [ ] **Step 3: Add lock screen**

Create `desktop/src/components/LockScreen.tsx`:

```tsx
import { Fingerprint } from "lucide-react";
import { FormEvent, useState } from "react";

type Props = {
  onUnlock(masterPassword: string): Promise<void>;
};

export function LockScreen({ onUnlock }: Props) {
  const [masterPassword, setMasterPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    try {
      await onUnlock(masterPassword);
      setMasterPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unlock failed");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-pf-surface px-8 text-slate-100">
      <form onSubmit={submit} className="w-full max-w-sm">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Fingerprint className="h-9 w-9 text-pf-primary" aria-hidden="true" />
          <h1 className="text-3xl font-semibold tracking-normal">PassForge</h1>
        </div>
        <label className="block text-sm text-slate-300" htmlFor="master-password">
          Master password
        </label>
        <input
          id="master-password"
          type="password"
          value={masterPassword}
          onChange={(event) => setMasterPassword(event.target.value)}
          className="mt-2 w-full rounded-lg border border-pf-highest bg-pf-container px-3 py-2 text-slate-100 outline-none focus:border-pf-primary"
        />
        {error ? <p className="mt-3 text-sm text-pf-error">{error}</p> : null}
        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-pf-primaryContainer px-4 py-2 font-medium text-slate-950"
        >
          Unlock
        </button>
      </form>
    </main>
  );
}
```

- [ ] **Step 4: Add vault view**

Create `desktop/src/components/VaultView.tsx`:

```tsx
import { Copy, Folder, Lock, Plus, Search, Settings } from "lucide-react";
import type { EntrySummary } from "../types";

type Props = {
  entries: EntrySummary[];
  query: string;
  onQueryChange(query: string): void;
  onCopy(entryId: string): void;
  onNewEntry(): void;
  onSettings(): void;
  onLock(): void;
};

export function VaultView({ entries, query, onQueryChange, onCopy, onNewEntry, onSettings, onLock }: Props) {
  return (
    <main className="grid min-h-screen grid-cols-[240px_360px_1fr] bg-pf-surface text-slate-100">
      <aside className="border-r border-pf-highest bg-pf-container p-4">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-normal">PassForge</h1>
          <button aria-label="Lock" onClick={onLock} className="rounded p-2 hover:bg-pf-highest">
            <Lock className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Folder className="h-4 w-4" />
          Personal
        </div>
        <button onClick={onSettings} className="mt-6 flex items-center gap-2 text-sm text-slate-300">
          <Settings className="h-4 w-4" />
          Settings
        </button>
      </aside>
      <section className="border-r border-pf-highest p-4">
        <div className="mb-4 flex gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-pf-highest bg-pf-container px-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              aria-label="Search entries"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              className="h-10 flex-1 bg-transparent outline-none"
            />
          </div>
          <button aria-label="New entry" onClick={onNewEntry} className="rounded-lg bg-pf-primaryContainer p-2 text-slate-950">
            <Plus className="h-5 w-5" />
          </button>
        </div>
        <ul className="space-y-2">
          {entries.map((entry) => (
            <li key={entry.id} className="rounded-lg border border-pf-highest bg-pf-container p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{entry.site}</p>
                  <p className="text-sm text-slate-400">{entry.login}</p>
                </div>
                <button aria-label={`Copy password for ${entry.site}`} onClick={() => onCopy(entry.id)} className="rounded p-2 hover:bg-pf-highest">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="p-6">
        <h2 className="text-xl font-semibold tracking-normal">Entry Detail</h2>
        <p className="mt-2 text-sm text-slate-400">Select or create an entry.</p>
      </section>
    </main>
  );
}
```

- [ ] **Step 5: Add editor and settings views**

Create `desktop/src/components/EntryEditor.tsx`:

```tsx
import type { EntryInput } from "../types";

export const emptyEntryInput: EntryInput = {
  site: "",
  login: "",
  counter: 1,
  options: { lowercase: true, uppercase: true, digits: true, symbols: true, length: 16 },
  saltFields: [],
  crypto: null,
  folderId: "",
  groupIds: [],
  tags: [],
};

export function EntryEditor() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold tracking-normal">New Entry</h2>
      <div className="mt-5 grid max-w-xl gap-4">
        <label className="text-sm text-slate-300">
          Site
          <input className="mt-1 w-full rounded-lg border border-pf-highest bg-pf-container px-3 py-2" />
        </label>
        <label className="text-sm text-slate-300">
          Login
          <input className="mt-1 w-full rounded-lg border border-pf-highest bg-pf-container px-3 py-2" />
        </label>
      </div>
    </section>
  );
}
```

Create `desktop/src/components/SettingsView.tsx`:

```tsx
import type { Settings } from "../types";

type Props = {
  settings: Settings | null;
};

export function SettingsView({ settings }: Props) {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold tracking-normal">Settings</h2>
      <dl className="mt-5 grid gap-3 text-sm">
        <div>
          <dt className="text-slate-400">Idle lock</dt>
          <dd>{settings?.idleLockSeconds ?? 60}s</dd>
        </div>
        <div>
          <dt className="text-slate-400">Clipboard clear</dt>
          <dd>{settings?.clipboardClearSeconds ?? 30}s</dd>
        </div>
      </dl>
    </section>
  );
}
```

- [ ] **Step 6: Wire app state**

Modify `desktop/src/App.tsx`:

```tsx
import { useEffect, useState } from "react";
import { api } from "./api";
import { LockScreen } from "./components/LockScreen";
import { VaultView } from "./components/VaultView";
import type { EntrySummary, Settings } from "./types";

export function App() {
  const [locked, setLocked] = useState(true);
  const [query, setQuery] = useState("");
  const [entries, setEntries] = useState<EntrySummary[]>([]);
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    api.isLocked().then(setLocked);
    api.getSettings().then(setSettings);
  }, []);

  useEffect(() => {
    if (!locked) {
      api.searchEntries(query).then(setEntries);
    }
  }, [locked, query]);

  async function unlock(masterPassword: string) {
    await api.unlockWithMasterPassword(masterPassword);
    setLocked(false);
  }

  async function copyPassword(entryId: string) {
    const password = await api.generatePassword(entryId);
    await navigator.clipboard.writeText(password);
    window.setTimeout(() => navigator.clipboard.writeText(""), (settings?.clipboardClearSeconds ?? 30) * 1000);
  }

  if (locked) {
    return <LockScreen onUnlock={unlock} />;
  }

  return (
    <VaultView
      entries={entries}
      query={query}
      onQueryChange={setQuery}
      onCopy={copyPassword}
      onNewEntry={() => undefined}
      onSettings={() => undefined}
      onLock={async () => {
        await api.lock();
        setLocked(true);
      }}
    />
  );
}
```

- [ ] **Step 7: Run UI tests and build**

Run:

```bash
yarn workspace passforge-desktop test
yarn workspace passforge-desktop build
```

Expected: PASS.

- [ ] **Step 8: Commit desktop UI**

```bash
git add desktop/src
git commit -m "feat: add passforge desktop ui"
```

---

## Task 7: Add Native Messaging Backend

**Files:**
- Create: `desktop/src-tauri/src/native_messaging.rs`
- Create: `desktop/src-tauri/src/native_host.rs`
- Create: `desktop/src-tauri/src/lib.rs`
- Create: `desktop/src-tauri/src/bin/passforge-native-host.rs`
- Create: `desktop/src-tauri/tests/native_messaging_tests.rs`
- Modify: `desktop/src-tauri/src/main.rs`

- [ ] **Step 1: Write protocol tests**

Create `desktop/src-tauri/tests/native_messaging_tests.rs`:

```rust
#[path = "../src/native_messaging.rs"]
mod native_messaging;

use native_messaging::{NativeRequest, NativeResponse};

#[test]
fn parses_search_request() {
    let request: NativeRequest = serde_json::from_value(serde_json::json!({
        "action": "search",
        "site": "example.com"
    })).unwrap();

    assert_eq!(request, NativeRequest::Search { site: "example.com".into() });
}

#[test]
fn serializes_locked_response() {
    let response = NativeResponse::Status { status: "locked".into() };

    assert_eq!(serde_json::to_value(response).unwrap(), serde_json::json!({
        "status": "locked"
    }));
}
```

- [ ] **Step 2: Run tests to verify failures**

Run:

```bash
cargo test -p passforge-desktop --test native_messaging_tests
```

Expected: FAIL because native messaging types do not exist.

- [ ] **Step 3: Add protocol types**

Create `desktop/src-tauri/src/native_messaging.rs`:

```rust
use crate::error::Result;
use crate::models::EntrySummary;
use serde::{Deserialize, Serialize};
use std::io::{Read, Write};

#[derive(Debug, Clone, Deserialize, PartialEq)]
#[serde(tag = "action", rename_all = "camelCase")]
pub enum NativeRequest {
    #[serde(rename = "search")]
    Search { site: String },
    #[serde(rename = "generate")]
    Generate { entry_id: String, site: String },
    #[serde(rename = "lock")]
    Lock,
}

#[derive(Debug, Clone, Serialize, PartialEq)]
#[serde(untagged)]
pub enum NativeResponse {
    Entries { entries: Vec<EntrySummary> },
    Password { password: String, login: String },
    Status { status: String },
    Error { error: String },
}

pub fn read_chrome_message<R: Read>(reader: &mut R) -> Result<Option<NativeRequest>> {
    let mut len_bytes = [0u8; 4];
    if reader.read_exact(&mut len_bytes).is_err() {
        return Ok(None);
    }
    let len = u32::from_le_bytes(len_bytes) as usize;
    let mut buffer = vec![0u8; len];
    reader.read_exact(&mut buffer).map_err(|err| crate::error::PassForgeError::InvalidRequest(err.to_string()))?;
    serde_json::from_slice(&buffer).map(Some).map_err(Into::into)
}

pub fn write_chrome_message<W: Write>(writer: &mut W, response: &NativeResponse) -> Result<()> {
    let payload = serde_json::to_vec(response)?;
    writer.write_all(&(payload.len() as u32).to_le_bytes())
        .map_err(|err| crate::error::PassForgeError::InvalidRequest(err.to_string()))?;
    writer.write_all(&payload)
        .map_err(|err| crate::error::PassForgeError::InvalidRequest(err.to_string()))?;
    writer.flush().map_err(|err| crate::error::PassForgeError::InvalidRequest(err.to_string()))?;
    Ok(())
}
```

- [ ] **Step 4: Add native host manifest registration**

Create `desktop/src-tauri/src/native_host.rs`:

```rust
use crate::error::{PassForgeError, Result};
use serde::Serialize;
use std::fs;
use std::path::{Path, PathBuf};

#[derive(Debug, Serialize)]
struct NativeHostManifest {
    name: &'static str,
    description: &'static str,
    path: String,
    #[serde(rename = "type")]
    host_type: &'static str,
    allowed_origins: Vec<String>,
}

pub fn chrome_manifest_path(home: &Path) -> PathBuf {
    home.join("Library/Application Support/Google/Chrome/NativeMessagingHosts/com.passforge.desktop.json")
}

pub fn register_chrome_native_host(home: &Path, helper_path: &Path, extension_id: &str) -> Result<PathBuf> {
    let manifest_path = chrome_manifest_path(home);
    let parent = manifest_path
        .parent()
        .ok_or_else(|| PassForgeError::InvalidRequest("native host manifest path has no parent".into()))?;
    fs::create_dir_all(parent).map_err(|err| PassForgeError::InvalidRequest(err.to_string()))?;
    let manifest = NativeHostManifest {
        name: "com.passforge.desktop",
        description: "PassForge Desktop native messaging host",
        path: helper_path.to_string_lossy().to_string(),
        host_type: "stdio",
        allowed_origins: vec![format!("chrome-extension://{extension_id}/")],
    };
    fs::write(&manifest_path, serde_json::to_vec_pretty(&manifest)?)
        .map_err(|err| PassForgeError::InvalidRequest(err.to_string()))?;
    Ok(manifest_path)
}
```

- [ ] **Step 5: Add library exports and helper binary**

Create `desktop/src-tauri/src/lib.rs`:

```rust
pub mod error;
pub mod models;
pub mod native_messaging;
```

Create `desktop/src-tauri/src/bin/passforge-native-host.rs`:

```rust
use passforge_desktop::native_messaging::{read_chrome_message, write_chrome_message, NativeResponse};
use std::io::{stdin, stdout};

fn main() {
    let mut input = stdin().lock();
    let mut output = stdout().lock();

    while let Ok(Some(_request)) = read_chrome_message(&mut input) {
        let response = NativeResponse::Status {
            status: "locked".into(),
        };
        if write_chrome_message(&mut output, &response).is_err() {
            break;
        }
    }
}
```

- [ ] **Step 6: Register native modules in app**

Modify `desktop/src-tauri/src/main.rs` to include:

```rust
mod native_host;
mod native_messaging;
```

In the `Builder::setup` callback, register the manifest:

```rust
.setup(|app| {
    let home = dirs::home_dir().expect("home directory exists");
    let helper = app
        .path()
        .resource_dir()
        .expect("resource directory exists")
        .join("passforge-native-host");
    let extension_id = std::env::var("PASSFORGE_CHROME_EXTENSION_ID")
        .unwrap_or_else(|_| "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".to_string());
    let _ = native_host::register_chrome_native_host(&home, &helper, &extension_id);
    Ok(())
})
```

- [ ] **Step 7: Run native messaging tests**

Run:

```bash
cargo test -p passforge-desktop --test native_messaging_tests
cargo check -p passforge-desktop
```

Expected: PASS.

- [ ] **Step 8: Commit native messaging backend**

```bash
git add desktop/src-tauri
git commit -m "feat: add native messaging backend"
```

---

## Task 8: Rebuild Chromium Extension as Read-Only Client

**Files:**
- Modify: `packages/lesspass-web-extension/public/manifest.json`
- Delete: `packages/lesspass-web-extension/src/main.tsx`
- Create: `packages/lesspass-web-extension/src/protocol.ts`
- Create: `packages/lesspass-web-extension/src/nativeClient.ts`
- Create: `packages/lesspass-web-extension/src/background.ts`
- Create: `packages/lesspass-web-extension/src/autofill.ts`
- Create: `packages/lesspass-web-extension/src/popup.ts`
- Create: `packages/lesspass-web-extension/src/popup.html`
- Create: `packages/lesspass-web-extension/src/popup.css`
- Create: `packages/lesspass-web-extension/src/autofill.test.ts`

- [ ] **Step 1: Write autofill test**

Create `packages/lesspass-web-extension/src/autofill.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { findLoginFields, fillLoginFields } from "./autofill";

describe("autofill", () => {
  it("finds and fills username and password fields", () => {
    document.body.innerHTML = `
      <form>
        <input type="email" id="email" />
        <input type="password" id="password" />
      </form>
    `;

    const fields = findLoginFields(document);
    fillLoginFields(fields, { login: "me@example.com", password: "secret" });

    expect((document.getElementById("email") as HTMLInputElement).value).toBe("me@example.com");
    expect((document.getElementById("password") as HTMLInputElement).value).toBe("secret");
  });
});
```

- [ ] **Step 2: Run extension tests to verify failure**

Run:

```bash
yarn workspace lesspass-web-extension test
```

Expected: FAIL because `autofill.ts` does not exist.

- [ ] **Step 3: Add protocol and native client**

Create `packages/lesspass-web-extension/src/protocol.ts`:

```ts
export type EntrySummary = {
  id: string;
  site: string;
  login: string;
  fingerprint: Array<{ icon: string; color: string }> | null;
  lastUsedAt: string | null;
};

export type NativeRequest =
  | { action: "search"; site: string }
  | { action: "generate"; entryId: string; site: string }
  | { action: "lock" };

export type NativeResponse =
  | { entries: EntrySummary[] }
  | { password: string; login: string }
  | { status: "locked" | "ok" }
  | { error: string };
```

Create `packages/lesspass-web-extension/src/nativeClient.ts`:

```ts
import type { NativeRequest, NativeResponse } from "./protocol";

const HOST = "com.passforge.desktop";

export function sendNativeMessage(request: NativeRequest): Promise<NativeResponse> {
  return chrome.runtime.sendNativeMessage(HOST, request);
}
```

- [ ] **Step 4: Add autofill helpers**

Create `packages/lesspass-web-extension/src/autofill.ts`:

```ts
export type LoginFields = {
  login: HTMLInputElement | null;
  password: HTMLInputElement | null;
};

export function findLoginFields(root: Document): LoginFields {
  const password = root.querySelector<HTMLInputElement>('input[type="password"]');
  const login =
    root.querySelector<HTMLInputElement>('input[type="email"]') ??
    root.querySelector<HTMLInputElement>('input[autocomplete="username"]') ??
    root.querySelector<HTMLInputElement>('input[name*="user" i]') ??
    root.querySelector<HTMLInputElement>('input[type="text"]');

  return { login, password };
}

export function fillLoginFields(fields: LoginFields, credentials: { login: string; password: string }) {
  if (fields.login) {
    fields.login.value = credentials.login;
    fields.login.dispatchEvent(new Event("input", { bubbles: true }));
    fields.login.dispatchEvent(new Event("change", { bubbles: true }));
  }
  if (fields.password) {
    fields.password.value = credentials.password;
    fields.password.dispatchEvent(new Event("input", { bubbles: true }));
    fields.password.dispatchEvent(new Event("change", { bubbles: true }));
  }
}
```

- [ ] **Step 5: Add background script**

Create `packages/lesspass-web-extension/src/background.ts`:

```ts
import { sendNativeMessage } from "./nativeClient";

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "PASSFORGE_NATIVE") {
    sendNativeMessage(message.request).then(sendResponse).catch((error) => {
      sendResponse({ error: error instanceof Error ? error.message : "native messaging failed" });
    });
    return true;
  }
});
```

- [ ] **Step 6: Add popup UI**

Create `packages/lesspass-web-extension/src/popup.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PassForge</title>
    <link rel="stylesheet" href="./popup.css" />
  </head>
  <body>
    <main>
      <header>
        <h1>PassForge</h1>
        <p id="status">Connecting</p>
      </header>
      <ul id="entries"></ul>
    </main>
    <script type="module" src="./popup.ts"></script>
  </body>
</html>
```

Create `packages/lesspass-web-extension/src/popup.css`:

```css
body {
  width: 320px;
  margin: 0;
  background: #0b1326;
  color: #e5edf8;
  font-family: Inter, system-ui, sans-serif;
}

main {
  padding: 14px;
}

h1 {
  margin: 0;
  font-size: 18px;
}

#status {
  margin: 4px 0 12px;
  color: #9ca3af;
  font-size: 12px;
}

button {
  width: 100%;
  border: 1px solid #2d3449;
  border-radius: 4px;
  background: #171f33;
  color: #e5edf8;
  padding: 10px;
  text-align: left;
}

li + li {
  margin-top: 8px;
}
```

Create `packages/lesspass-web-extension/src/popup.ts`:

```ts
import type { EntrySummary, NativeResponse } from "./protocol";

const status = document.getElementById("status")!;
const entriesList = document.getElementById("entries")!;

async function currentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

function domainFromUrl(url: string | undefined) {
  if (!url) return "";
  return new URL(url).hostname;
}

function send(request: unknown): Promise<NativeResponse> {
  return chrome.runtime.sendMessage({ type: "PASSFORGE_NATIVE", request });
}

function renderEntries(entries: EntrySummary[], site: string) {
  entriesList.innerHTML = "";
  for (const entry of entries) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = `${entry.site} - ${entry.login}`;
    button.addEventListener("click", async () => {
      const response = await send({ action: "generate", entryId: entry.id, site });
      if ("password" in response) {
        const tab = await currentTab();
        if (tab.id) {
          await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [response.login, response.password],
            func: (login: string, password: string) => {
              const passwordField = document.querySelector<HTMLInputElement>('input[type="password"]');
              const loginField =
                document.querySelector<HTMLInputElement>('input[type="email"]') ??
                document.querySelector<HTMLInputElement>('input[autocomplete="username"]') ??
                document.querySelector<HTMLInputElement>('input[name*="user" i]') ??
                document.querySelector<HTMLInputElement>('input[type="text"]');

              if (loginField) {
                loginField.value = login;
                loginField.dispatchEvent(new Event("input", { bubbles: true }));
                loginField.dispatchEvent(new Event("change", { bubbles: true }));
              }
              if (passwordField) {
                passwordField.value = password;
                passwordField.dispatchEvent(new Event("input", { bubbles: true }));
                passwordField.dispatchEvent(new Event("change", { bubbles: true }));
              }
            },
          });
          window.close();
        }
      }
    });
    li.append(button);
    entriesList.append(li);
  }
}

async function init() {
  const tab = await currentTab();
  const site = domainFromUrl(tab.url);
  const response = await send({ action: "search", site });
  if ("entries" in response) {
    status.textContent = `${response.entries.length} match${response.entries.length === 1 ? "" : "es"}`;
    renderEntries(response.entries, site);
  } else if ("status" in response && response.status === "locked") {
    status.textContent = "PassForge Desktop is locked";
  } else {
    status.textContent = "PassForge Desktop not running";
  }
}

init().catch(() => {
  status.textContent = "PassForge Desktop not running";
});
```

- [ ] **Step 7: Update manifest**

Modify `packages/lesspass-web-extension/public/manifest.json`:

```json
{
  "description": "PassForge autofill extension",
  "manifest_version": 3,
  "name": "PassForge",
  "version": "12.0.0",
  "homepage_url": "https://github.com/lesspass/lesspass",
  "icons": {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  },
  "commands": {
    "_execute_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+L",
        "mac": "Command+Shift+L"
      }
    }
  },
  "permissions": ["activeTab", "nativeMessaging", "scripting"],
  "background": {
    "service_worker": "src/background.ts",
    "type": "module"
  },
  "action": {
    "default_icon": "icons/icon128.png",
    "default_title": "PassForge",
    "default_popup": "src/popup.html"
  }
}
```

- [ ] **Step 8: Remove old React popup entry**

Delete `packages/lesspass-web-extension/src/main.tsx`.

- [ ] **Step 9: Run extension tests and build**

Run:

```bash
yarn workspace lesspass-web-extension test
yarn workspace lesspass-web-extension build
```

Expected: PASS.

- [ ] **Step 10: Commit extension rewrite**

```bash
git add packages/lesspass-web-extension
git commit -m "feat: add passforge autofill extension"
```

---

## Task 9: Add Security Checklist and Final Verification

**Files:**
- Create: `docs/passforge/security-checklist.md`

- [ ] **Step 1: Add security checklist**

Create `docs/passforge/security-checklist.md`:

```markdown
# PassForge v1 Security Checklist

## Secrets

- Master password is stored only in macOS Keychain and RAM.
- Database key is stored only in macOS Keychain and RAM.
- Generated passwords are never written to SQLite.
- Generated passwords are never logged.
- Session lock zeroizes the in-memory master password.

## Desktop

- Desktop commands never return the master password.
- Entry CRUD stores only derivation parameters.
- Copy flow clears the clipboard after the configured delay.
- Idle lock defaults to 60 seconds.

## Extension

- Extension has no entry create, update, or delete path.
- Extension never receives the master password.
- Extension requests generated passwords only through native messaging.
- Extension autofills only after user action from the popup or keyboard command.

## Native Messaging

- Native host name is `com.passforge.desktop`.
- Native host manifest is written under the Chrome native messaging host directory.
- Desktop remains the sole authority for search and generation.
```

- [ ] **Step 2: Run full Rust verification**

Run:

```bash
cargo test
cargo check
```

Expected: PASS.

- [ ] **Step 3: Run relevant frontend verification**

Run:

```bash
yarn workspace passforge-desktop test
yarn workspace passforge-desktop build
yarn workspace lesspass-web-extension test
yarn workspace lesspass-web-extension build
```

Expected: PASS.

- [ ] **Step 4: Run security scans**

Run:

```bash
rg -n "master_password|generatedPassword|password" desktop packages/lesspass-web-extension crates/lesspass-core
rg -n "console\\.log|println!|dbg!" desktop packages/lesspass-web-extension crates/lesspass-core
```

Expected: matches are limited to variable names, UI labels, command payload names, tests, and explicit non-secret documentation. There are no logs that print master passwords, database keys, or generated passwords.

- [ ] **Step 5: Commit final docs and verification cleanup**

```bash
git add docs/passforge/security-checklist.md
git commit -m "docs: add passforge security checklist"
```

---

## Self-Review

- Spec coverage: The plan covers the Rust core algorithm, password rendering, fingerprinting, desktop Tauri shell, SQLCipher-backed local metadata storage, session lock, Keychain boundary, Tauri command API, desktop views, extension search/generate/autofill flow, native messaging protocol, native host registration, and security verification.
- Red-flag scan: The plan contains no task steps that ask the implementer to infer missing behavior. All code-creation steps include concrete code or command text.
- Type consistency: Rust DTO names are shared across storage and commands. Extension protocol names use `entryId` on the browser side and deserialize into `entry_id` in Rust through serde camelCase handling.
- Scope note: v2 Expert Mode is intentionally excluded because the spec marks it future scope.
