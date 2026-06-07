# Project Overview

## What is PassForge?

PassForge is a local-first, stateless password manager forked from LessPass. It keeps the LessPass promise that passwords are regenerated from deterministic inputs, while adding a macOS desktop app, encrypted local metadata storage, Keychain-gated unlock, and a Chromium autofill extension.

The current repository is still the LessPass monorepo, with new PassForge work starting in `Cargo.toml`, `crates/lesspass-core/`, `docs/superpowers/specs/2026-06-07-passforge-design.md`, and `docs/superpowers/plans/2026-06-07-passforge.md`.

## Who is it for?

- Security-conscious users who want password generation without cloud sync.
- Teams or power users who need organized entries, folders, tags, and deterministic rotation.
- Browser users who want autofill, but only through a local desktop authority.

## Core User Flows

1. **First launch and unlock**
   - User creates or enters the master password in the desktop app.
   - macOS Keychain stores the master password and database key behind biometric/passcode access.
   - Desktop session holds the master password only in RAM and zeroizes it on lock.

2. **Create and manage an entry**
   - User creates an entry with site, login, counter, password options, salt fields, and optional crypto overrides.
   - Desktop stores only derivation parameters in SQLCipher-backed SQLite.
   - User organizes entries with folders, groups, and tags.

3. **Generate or copy a password**
   - User selects an entry in the desktop app or extension.
   - Desktop derives the password through `lesspass-core`.
   - Password is returned only as ephemeral output and clipboard contents are cleared after the configured delay.

4. **Browser autofill**
   - User opens the Chromium extension on the active tab.
   - Extension asks the desktop native host to search by domain.
   - User selects an entry; desktop generates the password and the extension autofills the active page.

## Deliberately Out of Scope

- Cloud sync, hosted accounts, or network services.
- Storing generated passwords.
- Safari, Firefox, mobile, or non-macOS desktop support for v1.
- Expert algorithm pipeline implementation; the design exists, but v2 owns it.
