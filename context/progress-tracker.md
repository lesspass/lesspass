# Progress Tracker

## Current Phase

Planning/context phase. The PassForge design spec and implementation plan exist. The next implementation step is Task 1 from `docs/superpowers/plans/2026-06-07-passforge.md`: stabilize `crates/lesspass-core`.

## Completed

| Task | Description | Evidence |
|------|-------------|----------|
| Design spec | PassForge v1 architecture, storage, security, UI, and extension behavior defined. | `docs/superpowers/specs/2026-06-07-passforge-design.md` |
| Implementation plan | Task-by-task TDD plan created for core, desktop, extension, and verification. | `docs/superpowers/plans/2026-06-07-passforge.md` |
| Initial Rust workspace | Workspace manifest and `crates/lesspass-core` exist as untracked project work. | `Cargo.toml`, `crates/lesspass-core/` |
| Agent context | Context folder and `AGENTS.md` created for future agents. | `context/`, `AGENTS.md` |
| Graphify setup | Graphify 0.8.33 installed, Codex hook configured, git hooks installed, initial graph built. | `.codex/hooks.json`, `.git/hooks/post-commit`, `graphify-out/` |
| Task 1 | Stabilize lesspass-core: CoreError, Result returns, fa-* serde, salt tiebreaking, compatibility tests. 15 tests passing. | `crates/lesspass-core/`, `Cargo.toml` |

## In Progress

| Task | Description | Status |
|------|-------------|--------|
| Task 2 | Scaffold Tauri desktop app. | Ready to start |

## Remaining

| Task | Description |
|------|-------------|
| Task 2 | Scaffold Tauri desktop app. |
| Task 3 | Add SQLCipher-backed storage model and CRUD. |
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

# Existing JS workspace verification
yarn test
yarn build

# Extension-specific verification
yarn workspace lesspass-web-extension test
yarn workspace lesspass-web-extension build
```
