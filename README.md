# @agentero/design-system

A React component library built with [Tailwind CSS v4](https://tailwindcss.com/) and [Radix UI](https://www.radix-ui.com/) primitives. Each component is individually importable, fully typed, and designed to integrate seamlessly into any Tailwind-based project.

[Storybook](https://agentero.github.io/design-system/) | [npm](https://www.npmjs.com/package/@agentero/design-system)

## Installation

```bash
yarn add @agentero/design-system
```

### Peer dependencies

This package requires the following peer dependencies:

```bash
yarn add react react-dom tailwindcss
```

## Setup

### Tailwind CSS configuration

Add the design system as a Tailwind source so that the CSS for component classes is generated:

```css
/* app.css */
@import 'tailwindcss';
@source "@agentero/design-system/theme";
```

## Components

```tsx
import { ComponentName } from '@agentero/design-system/ComponentName';
```

## Icons

Icons are imported from the `/icons` subpath:

```tsx
import { IconCheckCircle } from '@agentero/design-system/icons';

<IconCheckCircle />
<IconCheckCircle width={32} height={32} />
<IconCheckCircle className="text-green-500" />
```

Each icon is a thin wrapper around its `<svg>` and forwards all standard `SVGProps`. Set size with `width`/`height`. The bundle mirrors the build pattern from `@agentero/icons` in `producerflow/mono` — esbuild + SVGR + SVGO — producing a single ESM bundle at `lib/icons/`. Every rendered `<svg>` carries a `data-icon="<kebab-name>"` attribute and runtime-unique internal IDs, so multiple instances stack safely on a page and can be targeted with `[data-icon="..."]` selectors.

### Adding a new icon

1. Export the source SVG.
2. Save it as `src/icons/svg/<name>.svg` (kebab-case).
3. Add `export { default as Icon<Name> } from './svg/<name>.svg';` to `src/icons/index.ts`.
4. Run `yarn build:icons` (or rely on `postinstall`).

The new icon appears automatically in the `Icons/Gallery` Storybook story — no story file to write.

## Utilities

### `cn`

A class name merging utility combining `clsx` and `tailwind-merge`. Useful for conditionally joining Tailwind classes without conflicts.

```tsx
import { cn } from '@agentero/design-system/lib';

cn('px-4 py-2', isActive && 'bg-blue-500', className);
```

## AI integration (MCP)

This package ships a [Model Context Protocol](https://modelcontextprotocol.io/) server that gives AI coding assistants access to component documentation, props, and usage examples — no Storybook runtime needed.

Add to your project`.mcp.json`:

```json
{
	"mcpServers": {
		"design-system": {
			"command": "node",
			"args": ["./node_modules/@agentero/design-system/mcp/server.mjs"]
		}
	}
}
```

Or run it directly:

```bash
npx @agentero/design-system-mcp
```

The server exposes three tools:

- **list-all-documentation** — discover all available components and docs
- **get-documentation** — get full docs, props, and usage examples for a component
- **get-documentation-for-story** — get details for a specific story variant

## Local development

To develop the design system alongside a consumer app without a build process, link the package locally:

```bash
# In the design system directory
yarn link

# In the consumer app directory
yarn link @agentero/design-system
```

The root `package.json` exports point directly to TypeScript source files, so the consumer's bundler (Vite, Next.js, etc.) picks up changes instantly via HMR — no build step or watcher needed.

If using Next.js, add the package to `transpilePackages` in `next.config.ts`:

```ts
transpilePackages: ['@agentero/design-system'],
```

### Unlinking

```bash
# In the consumer app directory
yarn unlink @agentero/design-system
yarn install --force
```

## License

[Apache-2.0](./LICENSE)
