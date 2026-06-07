# Architecture

## Technical Stack

- **Core:** Rust 2024 crate in `crates/lesspass-core`, using PBKDF2, SHA-1/SHA-256/SHA-512, HMAC, serde, and deterministic rendering.
- **Desktop backend:** Tauri v2 Rust crate in `desktop/src-tauri`, with `rusqlite` + SQLCipher, `security-framework`, `tauri-plugin-biometric`, `zeroize`, `uuid`, and `chrono`.
- **Desktop frontend:** React 19 + TypeScript + Vite + Tailwind in `desktop/src`.
- **Extension:** Chromium Manifest V3 in `packages/lesspass-web-extension`, using `activeTab`, `nativeMessaging`, popup UI, and script injection/autofill helpers.
- **Existing monorepo:** Yarn 4 workspaces under `packages/*`, plus legacy Python/Django/mobile LessPass code that should not be casually refactored.

## System Layers

```text
Chromium Extension (read-only autofill)
  -> native messaging JSON over local stdio
Tauri Desktop Backend (sole authority for I/O and secrets)
  -> Keychain: master password + DB key
  -> SQLCipher SQLite: entries, folders, groups, tags, settings
  -> Tauri commands: metadata and generated output only
React Desktop UI (lock, vault, editor, settings)
  -> typed commands in desktop/src/api.ts
lesspass-core (pure Rust)
  -> deterministic entropy, rendering, fingerprints; no I/O
```

## Invariants

1. **Passwords are never persisted:** Generated passwords must not be written to SQLite, logs, config files, or extension storage.
2. **The extension is read-only:** It may search entries and request generation, but it must not create, update, delete, or store entries.
3. **Desktop owns secrets:** The master password and database key never leave `desktop/src-tauri`; frontend and extension never receive them.
4. **Core stays pure:** `crates/lesspass-core` must remain deterministic and free of I/O, global state, clocks, Keychain, SQLite, or Tauri dependencies.
5. **Same inputs, same password:** Algorithm changes must preserve compatibility vectors or explicitly introduce a versioned migration.
6. **Local-only IPC:** Extension communication stays local through native messaging; do not add network calls for v1.
7. **Lock means zeroize:** Lock, idle timeout, and quit paths must clear master password bytes from session memory.

## Source Documents

- Design spec: `docs/superpowers/specs/2026-06-07-passforge-design.md`
- Implementation plan: `docs/superpowers/plans/2026-06-07-passforge.md`
- Legacy product context: `README.md`
