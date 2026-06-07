# PassForge - Agent Instructions

This file is the entry point for AI agents working on PassForge in `/Users/benblum/Desktop/repo/lesspass_control`.

## Required Reading

Read the context files in this order before doing implementation work:

1. `context/project-overview.md` - Product purpose, target users, core flows, and v1 non-goals.
2. `context/architecture.md` - Stack, system layers, and invariants that must not be broken.
3. `context/code-standards.md` - Rust/TypeScript conventions, errors, tests, and verification commands.
4. `context/ai-workflow-rules.md` - Scope control, decision rules, review discipline, and completion criteria.
5. `context/ui-context.md` - PassForge design tokens, layout language, component rules, and accessibility.
6. `context/progress-tracker.md` - Current phase, completed work, next task, and quick commands.

## Source Documents

- Design spec: `docs/superpowers/specs/2026-06-07-passforge-design.md`
- Implementation plan: `docs/superpowers/plans/2026-06-07-passforge.md`
- Legacy LessPass overview: `README.md`

## Current State

PassForge is in planning/context setup. Start implementation with Task 1 in `docs/superpowers/plans/2026-06-07-passforge.md` unless the user explicitly redirects.

## Quick Commands

```bash
git status --short
graphify query "What changed recently?"
graphify update . --force
cargo test -p lesspass-core
cargo test
cargo check
yarn test
yarn build
yarn workspace lesspass-web-extension test
yarn workspace lesspass-web-extension build
```

## Agent Rules

- Follow the implementation plan task-by-task; do not skip ahead across phases.
- Write or update the failing test before implementing behavior.
- Never break the invariants in `context/architecture.md`.
- Keep secrets in the desktop backend; never persist or log generated passwords.
- Use the PassForge design language in `context/ui-context.md` for desktop and extension UI.
- Update `context/progress-tracker.md` when completing a task or making a new architectural decision.
- Run `graphify update . --force` after every implementation plan step, even when no commit is made.
- Git post-commit and post-checkout hooks are installed; do not remove them unless the user explicitly asks.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, invoke the `skill` tool with `skill: "graphify"` before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update . --force` to keep the graph current (AST-only, no API cost). This is required after every implementation step; the git hook also runs after commits.
