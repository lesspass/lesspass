# AI Workflow Rules

## Scoping Work

1. **Follow the plan task-by-task.** Use `docs/superpowers/plans/2026-06-07-passforge.md` as the active implementation contract.
2. **One phase at a time.** Finish core, then backend, then UI, then extension, then packaging/verification.
3. **Failing test first.** Each behavior change starts with the exact failing test from the plan or a more focused equivalent.
4. **Minimal diff.** Do not refactor legacy LessPass packages unless a PassForge task requires it.
5. **No speculative features.** v2 Expert Mode UI may be referenced, but do not implement pluggable algorithms in v1.
6. **Graphify after each step.** Run `graphify update . --force` after every implementation plan step, even before a commit exists.

## Decision Making

1. **Preserve invariants first.** If a request conflicts with `context/architecture.md`, stop and explain the conflict.
2. **Prefer local patterns.** Use existing workspace tooling, package managers, and test frameworks.
3. **Make security choices explicit.** Any change touching secrets, clipboard, Keychain, SQLCipher, or native messaging needs tests or a checklist update.
4. **Avoid dependency drift.** Add dependencies only when the plan names them or the reason is concrete and documented.

## Code Review Discipline

1. **Lead with risks.** Reviews should list security, correctness, persistence, and compatibility issues first.
2. **Verify before completion.** Report exact commands run and whether they passed.
3. **Respect dirty worktrees.** Never revert user or generated changes you did not make.
4. **Keep commits phase-sized.** The plan expects a commit after each completed task.
5. **Update context when reality changes.** If implementation diverges from the plan, update the relevant context file and explain why.
6. **Trust the commit hook.** Graphify post-commit/post-checkout hooks are installed; verify with `graphify hook status` if graph freshness is in doubt.

## Completion Criteria

- Tests for the touched layer pass.
- No generated password, master password, or DB key is logged or persisted.
- Type names and JSON casing match across Rust and TypeScript.
- UI changes follow `context/ui-context.md`.
- `graphify update . --force` has been run after the step, or the post-commit hook has launched successfully.
