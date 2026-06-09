# Progress Tracker

## Current Phase

Implementation phase. Task 1 (stabilize `lesspass-core`), Task 2 (scaffold Tauri desktop app), and Task 3 (SQLCipher-backed storage model and CRUD) are complete. Next: Task 4 — session and Keychain boundary.

## Completed

| Task | Description | Evidence |
|------|-------------|----------|
| Design spec | PassForge v1 architecture, storage, security, UI, and extension behavior defined. | `docs/superpowers/specs/2026-06-07-passforge-design.md` |
| Implementation plan | Task-by-task TDD plan created for core, desktop, extension, and verification. | `docs/superpowers/plans/2026-06-07-passforge.md` |
| Initial Rust workspace | Workspace manifest and `crates/lesspass-core` exist as untracked project work. | `Cargo.toml`, `crates/lesspass-core/` |
| Agent context | Context folder and `AGENTS.md` created for future agents. | `context/`, `AGENTS.md` |
| Graphify setup | Graphify 0.8.33 installed, Codex hook configured, git hooks installed, initial graph built. | `.codex/hooks.json`, `.git/hooks/post-commit`, `graphify-out/` |
| Task 1 | Stabilize lesspass-core: CoreError, Result returns, fa-* serde, salt tiebreaking, compatibility tests. 15 tests passing. | `crates/lesspass-core/`, `Cargo.toml` |
| Task 2 | Scaffold Tauri desktop app: Vite + React + Tailwind frontend, Tauri v2 Rust backend. cargo check and yarn build pass. | `desktop/`, `Cargo.toml`, `package.json`, `yarn.lock` |
| Task 3 | Add SQLCipher-backed storage model and CRUD: folders, entries, tags, encrypted open, search, and no password column. 4 DB tests passing. | `desktop/src-tauri/src/db.rs`, `desktop/src-tauri/tests/db_tests.rs` |

## In Progress

None.

## Remaining

| Task | Description |
|------|-------------|
| Task 4 | Add session and Keychain boundary. |
| Task 5 | Add Tauri commands. |
| Task 6 | Build desktop UI views. |
| Task 7 | Add native messaging backend. |
| Task 8 | Rebuild Chromium extension as read-only client. |
| Task 9 | Add security checklist and final verification. |

## Quick Commands

```bash
# Inspect repo state
git status --short

# Query/update code graph
graphify query "How is PassForge structured?"
graphify update . --force
graphify hook status

# Core verification
cargo test -p lesspass-core

# Rust workspace verification as implementation grows
cargo test
cargo check
cargo check -p passforge-desktop

# Desktop frontend verification
yarn workspace passforge-desktop build

# Existing JS workspace verification
yarn test
yarn build

# Extension-specific verification
yarn workspace lesspass-web-extension test
yarn workspace lesspass-web-extension build
```
