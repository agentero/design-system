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
- Tests run via Storybook's Vitest integration (`@storybook/addon-vitest` + Playwright/Chromium). There is **no `test` script**; story files are the tests. Invoke `yarn vitest` directly (or `yarn vitest run <story-file>` for a single file) — it picks up the `storybook` project in `vite.config.ts`.

CI (`.github/workflows/ci.yml`) runs `yarn lint` and `yarn tsc` on PRs — nothing else gates merges.

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

- **`'use client'`** directive at the top of every component file that uses React hooks/context, so Next.js RSC consumers work.
- **`tailwind-variants` (`tv`) recipes** exported from the file (e.g. `avatarRecipe`). Use `slots` + `variants` + `defaultVariants`. Consumers can re-use the recipe.
- **Compound internal components** (e.g. `AvatarRoot`, `AvatarImage`, `AvatarFallback`) sharing a `React.createContext` that carries the computed slot styles. The public export is a **single wrapper** (`Avatar`) that composes them — the internal primitives are not exported.
- **`cn(...)` from `lib`** — always merge incoming `props.className` last: `cn(styles.root(), props.className)`. Never concatenate with template strings.
- **Radix primitives** for behavior; Tailwind for styling. Prefer `ComponentPropsWithRef<typeof Primitive>` over hand-rolled prop types.

JSDoc and stories are load-bearing here — `react-docgen-typescript` feeds both the Storybook docs page and the MCP manifests consumers rely on. Use the `/document-component <path>` skill for JSDoc and `/story-component <path>` for `.stories.tsx`; those skills encode the MCP-facing conventions (`@summary` tags, required stories, arg controls). Don't hand-roll either.

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
