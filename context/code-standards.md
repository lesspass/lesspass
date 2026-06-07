# Code Standards

## Language Conventions

- Rust modules should be small and responsibility-based: `db.rs`, `session.rs`, `keychain.rs`, `native_messaging.rs`, `commands.rs`.
- Rust public DTOs use `serde` and should match TypeScript through explicit `#[serde(rename_all = "camelCase")]` when crossing Tauri or extension boundaries.
- TypeScript code should keep DTOs in `desktop/src/types.ts` or `packages/lesspass-web-extension/src/protocol.ts`; avoid ad hoc object shapes in components.
- Keep `lesspass-core` APIs explicit: typed config structs, deterministic functions, and `Result` for invalid inputs.
- Do not mix legacy LessPass UI patterns into PassForge desktop unless the plan calls for reuse.

## Error Handling

- Rust backend errors should flow through `PassForgeError` in `desktop/src-tauri/src/error.rs`.
- Tauri commands return serializable command errors, not panics, for user-facing failures.
- Core validation errors belong in `crates/lesspass-core`, not in UI code.
- Extension failures should display connection/locked states; do not leak low-level secret or keychain details into popup text.

## Testing

- Follow TDD from the implementation plan: write the failing test, run it, implement, rerun.
- Core tests: `cargo test -p lesspass-core`.
- Desktop backend tests: `cargo test -p passforge-desktop --test db_tests`, `session_tests`, and `native_messaging_tests`.
- Desktop frontend tests: `yarn workspace passforge-desktop test` once the workspace exists.
- Extension tests: `yarn workspace lesspass-web-extension test`.
- Compatibility tests should include known LessPass password and fingerprint vectors.

## Formatting and Linting

```bash
cargo fmt
cargo test
cargo check
yarn prettier
yarn test
yarn build
```

Use narrower commands while executing a single plan task, then run broader verification before claiming completion.

## Documentation

- Update `context/progress-tracker.md` after completing a plan task or changing project direction.
- Add docs only where they clarify security, data flow, or operational setup.
- Keep comments sparse and useful; do not narrate obvious assignments.
