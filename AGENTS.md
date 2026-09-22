# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Commands

- `yarn dev` — Vite dev server for the library itself (rarely used; prefer Storybook).
- `yarn storybook` — runs Storybook on port 6006. Primary development loop.
- `yarn build-storybook` — builds `storybook-static/`, including the MCP manifests at `storybook-static/manifests/components.json`. **Must be run before `yarn build` if you want the MCP server bundled into `dist/`.**
- `yarn build` — production library build (see Build pipeline below).
- `yarn tsc` — typecheck via `tsgo` (`@typescript/native-preview`), not stock `tsc`.
- `yarn lint` — runs `oxlint src/ lib/` then `oxfmt --check src/ lib/`. Both must pass.
- `yarn lint:format` — just the `oxfmt` check. There is no `format:write` script; run `yarn oxfmt src/ lib/` directly to apply formatting.
- `yarn check:manifest` — validates `storybook-static/manifests/components.json` (description, `@summary`, props and import line per entry). Needs `yarn build-storybook` first; CI runs both in the `manifest` job.
- `yarn test` — runs both Vitest projects declared in `vite.config.ts`: `storybook` (story files as tests, via `@storybook/addon-vitest` + Playwright/Chromium) and `unit` (plain node tests, `src/**/*.test.ts`). `yarn test:storybook` runs only the story suite; `yarn vitest run <file>` runs a single one.

CI (`.github/workflows/ci.yml`) runs `yarn lint`, `yarn tsc`, `yarn test` and the `manifest` job (`yarn build-storybook` + `yarn check:manifest`) on PRs to `master` — nothing else gates merges.

## Architecture

### Package shape

`@agentero/design-system` is a React 19 / Tailwind v4 / Radix UI component library. Each component is **individually importable** via a subpath export (`@agentero/design-system/avatar`, `/lib`, `/theme`). Consumers import only what they use; `sideEffects: false` lets bundlers tree-shake aggressively.

In the repo's `package.json`, exports point directly at source files (`./src/avatar/index.ts`) so `yarn link` works without a watcher — the consumer's bundler picks up edits via HMR. The published `package.json` is **different** and is generated at build time (see Build pipeline).

### Component layout

Each component lives in its own directory under `src/<component>/`:

```
src/avatar/
  index.ts              # public re-export only
  avatar.tsx            # implementation
  avatar.stories.tsx    # Storybook stories (also the test suite)
```

New components must follow this pattern — `vite.config.ts` globs `src/*/index.{ts,tsx}` and `@storybook/mcp` expects this structure to generate manifests. Creating a file at a different path will not register it as a build entry.

### Component authoring conventions

Study `src/avatar/avatar.tsx` before adding new components — it's the canonical example. Key patterns:

- **`'use client'`** only when the file itself needs it: it calls a hook or creates a context, defines an event handler inline and passes it down, or touches `window`/`document`. Wrapping a Radix primitive is **not** a reason — those packages ship their own directive and expose each part as its own named export, so a Server Component can render them. The exception is a dependency that hangs its parts off a single export the way `cmdk` does (`Command.Item`): that one export arrives as a single client reference and its parts are `undefined`, so the wrapper has to keep the directive. See `src/command/command.tsx`. A file without the directive works from both sides and ships no client JavaScript of its own, so don't add it by default.
- **`tailwind-variants` (`tv`) recipes** exported from the file (e.g. `avatarRecipe`). Use `slots` + `variants` + `defaultVariants`. Consumers can re-use the recipe.
- **Compound internal components** (e.g. `AvatarRoot`, `AvatarImage`, `AvatarFallback`) sharing a `React.createContext` that carries the computed slot styles. The public export is a **single wrapper** (`Avatar`) that composes them — the internal primitives are not exported.
- **Multi-part components** (`Tabs.Root`, `Modal.Content`, ...): export each part as its own named export from the `'use client'` file. Assemble the `Tabs` object in the directive-free `index.ts` from those named imports. Do not export the object from the client file, and do not use `export * as Tabs` in the barrel. React turns each named export of a client module into one client reference, so an object built in `index.ts` holds one reference per part and `Tabs.Content` renders in a Server Component. An object exported from the client file crosses the boundary as one opaque reference and `Tabs.Content` is `undefined` (React error #130). rolldown lowers `export * as` to that same broken shape. See `src/tabs/` for the pattern; `src/client-boundary.test.ts` fails if a client module exports a namespace object.
- **`cn(...)` from `lib`** — always merge incoming `props.className` last: `cn(styles.root(), props.className)`. Never concatenate with template strings.
- **Radix primitives** for behavior; Tailwind for styling. Prefer `ComponentPropsWithRef<typeof Primitive>` over hand-rolled prop types.

JSDoc and stories are load-bearing here — `react-docgen-typescript` feeds both the Storybook docs page and the MCP manifests consumers rely on. Use the `/document-component <path>` skill for JSDoc and `/story-component <path>` for `.stories.tsx`; those skills encode the MCP-facing conventions (`@summary` tags, required stories, arg controls). Don't hand-roll either.

### Icons

`lucide-react` is a runtime **dependency** of this package, not a peer: the design system owns the icon dependency so consumers never declare or version it. They reach it through the `@agentero/design-system/icons` subpath (`src/icons/index.ts`, a flat `export * from 'lucide-react'`). Inside this repo, import from `lucide-react` directly — component modules must not pull the barrel, or a consumer importing one component drags all ~6300 icon symbols into its module graph.

There is no wrapper component and no size scale. A lucide icon is a plain SVG that takes `className`: `size-*` for size, a `text-*` token for color, `shrink-0` next to text in a flex row.

**Size one step below what the Material glyph used.** Material drew inside a ~19–20px live area of its 24px box (2px keyline); lucide fills ~22px (1px padding plus half the stroke), so at the same class a lucide icon reads ×1.16 larger — measured on the paths. The components compensate per call site: status circles (Alert, Toast, Field, Combobox, Command) went one size down (24→20, 20→18 — `size-4.5` is a real Tailwind v4 class, the spacing scale is dynamic); chevrons (×1.31) went two (Pagination 32→24, Accordion/DropdownMenu 16→12); the sort arrows half a step (16→14); Checkbox stayed (Material Sharp already filled the box, ×1.0). Two glyphs were small on purpose and got a pinned size instead: the DropdownMenu submenu chevron (`size-3`) and the Toast dismiss X (`[&_svg]:size-4` on its Button). When a Button or Item sizes its icon through `[&_svg]:size-*`, override it on that element with the same variant, never with a `size-*` on the icon — the recipe's compound selector outranks it.

**Color comes from `text-*`, never `fill-*`.** Lucide paints with `stroke="currentColor"` on a root that carries `fill="none"`, so a `fill-*` rule either does nothing to it or — with `fill-current` — turns its open paths into solid blobs (the Alert warning triangle became a filled wedge that way). Every recipe that takes an icon therefore drives the token through `[&_svg]:text-<token>` only. Consumers still pass filled `@agentero/icons` SVGs, and those need painting, so each such recipe (Button, Tag, Tabs, Avatar, DropdownMenu, Pagination, Alert, Toast, Field) carries two constant rules in its base:

```
[&_svg:not([fill=none])]:fill-current   [&_svg_path[fill]]:fill-current
```

Alert is the one place where the slot class lands on the icon's own `<svg>`, so there the same two rules target the element itself: `[&:not([fill=none])]:fill-current [&_path[fill]]:fill-current` — a `[&_svg…]` variant on the svg matches nothing. The first paints a legacy icon whose root has no `fill="none"` (a bare `<path>` otherwise renders black — SVG's default — and `text-*` cannot reach it); lucide's root is excluded by the `:not()`. The second repaints a `<path>` that carries its own hardcoded `fill`, which is what `@agentero/icons` ships (root `fill="none"`, path `fill="#434856"`) — CSS inheritance does not beat a presentation attribute on the element itself. `Button/LegacyFilledIcon` renders lucide, bare-path and hardcoded-fill side by side across the variants; it is the regression fixture for both rules, so keep it until the consumers finish migrating and the two rules can go.

`Foundations/*` stories document a convention rather than a component, so they declare no `meta.component` and `scripts/check-manifest.mjs` skips them — the manifest is the component catalogue.

### Theme / tokens

`themes/base.css` is the single source of truth for design tokens, declared as CSS custom properties inside a Tailwind v4 `@theme { ... }` block. Consumers include it via:

```css
@import 'tailwindcss';
@source "@agentero/design-system/theme";
```

Components reference tokens either through Tailwind utility classes Tailwind generates from `@theme` (e.g. `bg-bg-default-base-primary`) or directly via `var(--...)`. **Do not hardcode hex colors** in component recipes except for palettes that are deliberately not themeable (see `COLORIZE_PALETTE` in `avatar.tsx` for precedent — document the exception).

### Build pipeline (`vite.config.ts`)

`yarn build` runs Vite in library mode with four custom plugins, in order:

1. **`vite-plugin-dts`** emits `.d.ts` files alongside each entry, excluding `*.stories.*` and `*.test.*`.
2. **`generatePackageJson`** writes a *different* `package.json` into `dist/`. The shipped exports map points at compiled `.js` + `.d.ts`, not the source TS. It also adds `exports['./theme.css']`, an `./mcp` entry, and a `bin` for `design-system-mcp`.
3. **`bundleMcpServer`** uses esbuild to bundle `mcp/server.ts` → `dist/mcp/server.mjs` and copies `storybook-static/manifests/*` into `dist/mcp/manifests/`. **Silently skipped** if the manifests don't exist — always run `yarn build-storybook` before `yarn build` when preparing a release, or the published package will be missing the MCP server.
4. **`cleanDist`** removes `dist/_virtual` and `dist/node_modules` that Rollup sometimes leaves behind with `preserveModules: true`.

Rollup externals include all peer deps, all runtime deps, and `react/jsx-runtime`. `preserveModules: true` keeps the output file structure aligned with source paths, so subpath imports resolve correctly.

### MCP server (`mcp/server.ts`)

Uses `@storybook/mcp` to expose three tools — `list-all-documentation`, `get-documentation`, `get-documentation-for-story` — backed by the manifests Storybook emits. The runtime server reads manifests from a directory sibling to the bundled `server.mjs`; **do not** hardcode paths relative to CWD. When adding new MCP tools, follow the existing `tmcp` + Valibot adapter pattern.

### Publishing

- `publish.yml` auto-publishes to npm on push to `master` (patch/minor bumps driven by commits).
- `publish-major.yml` is triggered manually; use the `/publish-major` slash command which dispatches the workflow and reports back the run URL.

## Tooling notes

- **Formatter is `oxfmt`, not Prettier.** Config lives in `.oxfmtrc.json`. Tabs (width 2), single quotes, `bracketSameLine: true`, `trailingComma: none`, `arrowParens: 'avoid'`, and a custom import-sort order: `server-only` → `react` → `builtin` → `external` → `@agentero/*` → `lib/*`/`modules/*` → relative → style → unknown. Respect this — sorting or quoting the Prettier way will produce a diff CI rejects.
- **Linter is `oxlint`, not ESLint.** Config in `.oxlintrc.json`. Plugin set is `typescript` / `react` / `jest` and only the `correctness` category is enforced as errors.
- **Typechecker is `tsgo`** (TypeScript native preview). Behavior is ~equivalent to `tsc --noEmit`, but the binary is different — don't swap it back to `tsc` in scripts.
- **Yarn classic** (lockfile is `yarn.lock`, `--frozen-lockfile` in CI). Node 24.
