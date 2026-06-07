# PassForge Design Spec

A stateless, enterprise-grade password manager built on the LessPass algorithm. Desktop app (macOS) with a companion Chromium web extension for autofill.

## Project Identity

- **Name:** PassForge
- **Origin:** Fork of LessPass (GPL-3.0)
- **Language:** Rust (core + backend), TypeScript/React (desktop UI), JS (extension)
- **Platform:** macOS (v1), Chromium browsers (extension)
- **Design system:** PassForge — Material Design 3 dark theme tokens

## 1. Architecture

```
┌──────────────┐     Native Messaging      ┌──────────────────┐
│   Extension   │ ◄─────────────────────── │  Desktop (Tauri)  │
│  (Manifest V3) │     stdin/stdout JSON    │   React + Rust    │
│  autofill only │                          │  full management  │
└──────────────┘                            └────────┬─────────┘
                                                     │
                                              ┌──────┴──────┐
                                              │ lesspass-core│
                                              │  (pure Rust) │
                                              │  stateless   │
                                              └─────────────┘
```

Three crates in one Cargo workspace:

- `lesspass-core` — Pure functions for password derivation and fingerprinting. No I/O, no state. Same inputs always produce the same outputs.
- `desktop/src-tauri` — Tauri v2 Rust backend. Owns all I/O: Keychain, SQLite, Native Messaging bridge, IPC commands. Sole authority for all data.
- `extension/` — Chromium Manifest V3. Thin client: field detection, autofill, connection status. Read-only — no entry creation or modification from the extension.

### Core Algorithm

```
Password = render_password(
    PBKDF2(
        master_password,
        salt = site + login + counter(hex) + sorted_salt_fields,
        iterations = N,
        hash = SHA-256 | SHA-512 | SHA-1,
        keylen = 32 | 64
    ),
    options = { lowercase, uppercase, digits, symbols, length }
)
```

The algorithm is deterministic. Same inputs → same password, on any machine, indefinitely. Passwords are never stored — only the parameters to regenerate them.

## 2. Storage Model

Three tiers, zero password persistence:

| Tier | Location | Contents | Protection |
|------|----------|----------|------------|
| 1 | macOS Keychain (Secure Enclave) | Master password, DB encryption key | Touch ID / device passcode |
| 2 | Encrypted SQLite (disk) | Entries, folders, groups, tags, settings | SQLCipher AES-256, key in Keychain |
| 3 | RAM only (never written) | Derived passwords | Zeroized on lock, idle timeout, or quit |

### Entry Schema

```rust
struct PasswordProfile {
    site: String,           // domain or service name
    login: String,          // username / email
    counter: u32,           // rotation counter (default 1)
    options: PasswordOptions,  // char sets + length
    salt_fields: Vec<SaltField>,  // optional key-value pairs
    crypto: Option<CryptoConfig>, // per-entry overrides
}

struct SaltField {
    key: String,
    value: String,
}

struct PasswordOptions {
    lowercase: bool,
    uppercase: bool,
    digits: bool,
    symbols: bool,
    length: usize,  // default 16
}

struct CryptoConfig {
    iterations: u32,    // default 100_000
    keylen: usize,      // default 32
    digest: String,     // "sha256" | "sha512" | "sha1"
}
```

### Organization

- **Folders:** Hierarchical. Each entry belongs to exactly one folder.
- **Groups:** Flat, many-to-many with entries.
- **Tags:** Freeform, many-to-many with entries.

## 3. Security Model

### Master Password Lifecycle

1. Created on first launch. User types once, confirmed with second entry.
2. Stored in Keychain with `SecAccessControl` requiring biometric or device passcode.
3. Retrieved only after Touch ID succeeds (or fallback password entry).
4. Held in RAM (`Vec<u8>`, zeroized on lock/idle/quit). Never logged, serialized, or sent to frontend.
5. Frontend only sees entry metadata and generated password output.

### Protections

| Threat | Mitigation |
|--------|-----------|
| Stolen laptop (locked) | Keychain inaccessible without device passcode |
| Stolen laptop (unlocked) | Touch ID required per session; idle lock |
| Disk access (malware) | SQLCipher encryption; key in Keychain |
| Memory read (malware) | Master password zeroized quickly; passwords ephemeral |
| Malicious extension | Extension has no write access; read-only autofill |
| Network interception | No network — native messaging is local IPC |
| Clipboard history | Transient pasteboard marking; auto-clear after 30s |

### Extension Permissions

- `activeTab` only — no broad host access.
- `nativeMessaging` — for desktop bridge.

### Native Host Registration

On desktop app install, the Tauri setup registers a native messaging host manifest at:

```
~/Library/Application Support/Google/Chrome/NativeMessagingHosts/com.passforge.desktop.json
```

The manifest points to a helper binary that Chrome launches. The helper connects to the running Tauri app via a local Unix socket. If the desktop app is not running, the helper starts it. All auth and crypto stays inside the desktop process. The extension is read-only: search entries and request password generation only.

## 4. Desktop App (Tauri v2 + React)

### Tech Stack

- **Shell:** Tauri v2
- **Backend:** Rust (`desktop/src-tauri`)
- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS with PassForge design tokens
- **DB:** SQLite via `rusqlite` + SQLCipher extension
- **Keychain:** `security-framework` (macOS native)
- **Biometrics:** `tauri-plugin-biometric`
- **Native Messaging:** Custom stdin/stdout handler in the Tauri backend

### Views

#### Lock Screen
- Centered app icon + "PassForge" wordmark
- System Touch ID dialog (native, triggered on launch)
- "Use master password instead" fallback link
- Full-bleed dark background (`#0b1326`)

#### Vault (Main View)
- Three-pane: folder sidebar → entry list → entry detail
- Sidebar: collapsible folder tree, group/tag filter chips below
- Entry list: searchable table — site, login, fingerprint icons, last used timestamp
- Quick copy per entry (generates password on click; Touch ID prompt if locked)

#### Entry Editor
- Fields: site, login, counter (default 1, increment button for rotation)
- Password options toggles: lowercase, uppercase, digits, symbols + length slider (4–64)
- Salt fields: dynamic add/remove key-value string pairs
- Crypto override (collapsed by default): iterations slider, hash dropdown, keylen toggle
- Folder picker, group multi-select, tag input
- Password preview at bottom (show/hide toggle + copy button)

#### Settings
- Default crypto config (iterations, hash, keylen)
- Security: idle lock timeout (30s / 60s / 2min / 5min), clipboard clear delay
- Algorithm mode toggle: Basic ↔ Expert (Expert unlocks plugin UI, shipped in v2)

### Idle Lock

Configurable timeout (default 60s). On trigger: master password zeroized from RAM, UI transitions to lock screen. Any action requiring password generation prompts Touch ID or master password re-entry.

## 5. Web Extension (Chromium Manifest V3)

### Structure

- `manifest.json` — permissions: `activeTab`, `nativeMessaging`
- `background.js` (service worker) — native messaging client, connection lifecycle
- `content.js` — field detection, autofill injection
- `popup/` — minimal HTML + JS for status UI

### Behavior

1. User clicks extension icon or presses `Ctrl+Shift+L`.
2. Background script checks native messaging connection to desktop.
3. If disconnected: popup shows "PassForge Desktop not running" with instructions.
4. If connected: content script extracts the active page's domain.
5. Popup shows matching entries for the domain (via native message `search`).
6. User selects an entry → extension sends `generate` → desktop derives password → extension autofills.

### Native Messaging Protocol

Extension → Desktop:
```json
{ "action": "search", "site": "example.com" }
{ "action": "generate", "entryId": "uuid", "site": "example.com" }
{ "action": "lock" }
```

Desktop → Extension:
```json
{ "entries": [{ "id": "uuid", "site": "...", "login": "...", "fingerprint": [...] }] }
{ "password": "generated-password", "login": "user@example.com" }
{ "status": "locked" }
```

The extension never sends the master password. The desktop is the sole authority.

## 6. Algorithm Modes

### Basic Mode (v1)
Three user-facing knobs:
- Iterations: 100k – 1M (slider, default 100k)
- Hash algorithm: SHA-256 / SHA-512 / SHA-1 (dropdown, default SHA-256)
- Key length: 32 / 64 bytes (toggle, default 32)

### Expert Mode (v2)
Pluggable algorithm pipelines. User can define custom generation schemes (Argon2id, custom character exclusions, community profiles). The UI for this is designed but implementation is deferred to a follow-up release.

## 7. Design System (PassForge)

Material Design 3 dark theme. Key tokens:

- **Background:** `#0b1326` (surface), `#171f33` (container), `#2d3449` (highest)
- **Primary:** `#89ceff`, containers: `#0ea5e9`
- **Secondary:** `#4fdbc8`, containers: `#04b4a2`
- **Tertiary:** `#ffb86e`, containers: `#de8712`
- **Error:** `#ffb4ab`, containers: `#93000a`
- **Typography:** Inter (UI), JetBrains Mono (passwords, code)
- **Border radius:** tight — 2px default, 4px lg, 8px xl, 12px full

## 8. What This Is NOT

- Not a cloud-sync password manager (no server, no accounts)
- Not a password vault (passwords are never stored)
- Not a cross-platform desktop app (macOS only for v1)
- Not a Safari/Firefox extension (Chromium only for v1)
- Not a mobile app

## 9. v1 vs v2 Scope

**v1 (this spec):**
- `lesspass-core` crate with full algorithm
- Tauri desktop app with all views (lock, vault, editor, settings)
- Basic algorithm mode
- Entry CRUD with folders, groups, tags
- Encrypted SQLite storage
- macOS Keychain + Touch ID
- Chromium extension with autofill via native messaging

**v2 (future):**
- Expert algorithm mode (pluggable pipelines)
- Windows support
- Firefox extension support
- Import/export (CSV, JSON, encrypted backup)
