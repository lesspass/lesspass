# UI Context

## Design System

PassForge uses a Material Design 3-inspired dark system from the provided design language. The app should feel dense, secure, local-first, and operational rather than like a marketing page.

- **Framework:** React 19 + TypeScript + Tailwind CSS in `desktop/src`; minimal HTML/CSS/TS popup in `packages/lesspass-web-extension`.
- **Fonts:** Inter for UI text; JetBrains Mono for passwords, entropy, crypto values, and usernames when useful.
- **Surface tokens:** `background/surface #0b1326`, `surface-container-lowest #060e20`, `surface-container-low #131b2e`, `surface-container #171f33`, `surface-container-high #222a3d`, `surface-container-highest #2d3449`.
- **Text tokens:** `on-surface #dae2fd`, `on-surface-variant #bec8d2`, `outline #88929b`, `outline-variant #3e4850`.
- **Action tokens:** `primary #89ceff`, `primary-container #0ea5e9`, `secondary #4fdbc8`, `secondary-container #04b4a2`, `tertiary #ffb86e`, `error #ffb4ab`, `error-container #93000a`.
- **Radius:** default `2px`, large `4px`, extra-large `8px`, full `12px`.
- **Density:** base unit `4px`; tight `4px`, normal `8px`, base/gutter `16px`, container padding `24px`, sidebar width `260px`.
- **Type scale:** headline-lg 24/32 600, headline-md 18/24 600, body-md 14/20, body-sm 12/16, code-md 14/20 500, code-sm 12/16, label-caps 11/16 700 uppercase.

## Layout Patterns

- Desktop app uses persistent left sidebar, sticky topbar, and dense content canvas.
- Sidebar items use icon + label, hover `surface-container-highest`, active primary text with right border or high surface fill.
- Search belongs in the topbar or list header with a leading search icon and `surface-container-low` field.
- Vault views should be scan-friendly: compact rows/cards, clear site/login hierarchy, icon buttons for copy/edit/delete, and no nested cards.
- Modals use `surface-container-high`, border `outline-variant`, compact headers, and direct action footer.
- Extension popup is compact: dark header, status line, matching entry cards, primary autofill button, secondary copy button.

## Component Conventions

- Use familiar icons for commands. The design language uses Material Symbols; if the implementation dependency is lucide, map to equivalent symbols while preserving size, weight, and intent.
- Use icon-only buttons for copy, reveal, edit, delete, settings, lock, and sync; provide accessible labels/tooltips.
- Use toggles for character-set booleans, sliders or numeric inputs for length/iterations, select menus for digest/profile choices, and chips for tags/groups.
- Password and entropy fields use JetBrains Mono and should support reveal/copy controls without shifting layout.
- Avoid hero sections, decorative gradients, bokeh/orbs, oversized type in tool surfaces, or one-note blue-only screens.

## Accessibility

- All icon buttons need `aria-label` or visible text.
- Inputs must have labels, not just hint text.
- Focus states use `primary` ring/border and must remain visible on dark surfaces.
- Text must fit at desktop and extension-popup widths; prefer truncation for long sites/logins with full value in title/tooltip.
