# @agentero/design-system

A React component library built with [Tailwind CSS v4](https://tailwindcss.com/) and [Radix UI](https://www.radix-ui.com/) primitives. Each component is individually importable, fully typed, and designed to integrate seamlessly into any Tailwind-based project.

[Storybook](https://agentero.github.io/design-system/) | [npm](https://www.npmjs.com/package/@agentero/design-system)

## Installation

```bash
pnpm add @agentero/design-system
```

### Peer dependencies

This package requires the following peer dependencies:

```bash
pnpm add react react-dom tailwindcss
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

## Utilities

### `cn`

A class name merging utility: joins like `clsx` and merges conflicting Tailwind classes with the same engine as `tv` (tailwind-variants). Useful for conditionally joining Tailwind classes without conflicts.

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

- **docs-list** — discover all available components and docs
- **docs-show** — get full docs, props, and usage examples for a component
- **docs-show-story** — get details for a specific story variant

## Local development

To develop the design system alongside a consumer app without a build process, link the package locally:

```bash
# In the consumer app directory, with the path to your design-system checkout
pnpm link ../design-system
```

pnpm writes the link into `package.json`, `pnpm-workspace.yaml` and `pnpm-lock.yaml` (the workspace root's in a monorepo). Do not commit those changes.

The root `package.json` exports point directly to TypeScript source files, so the consumer's bundler (Vite, Next.js, etc.) picks up changes instantly via HMR — no build step or watcher needed.

If using Next.js, add the package to `transpilePackages` in `next.config.ts`:

```ts
transpilePackages: ['@agentero/design-system'],
```

### Unlinking

```bash
# In the consumer app directory
pnpm unlink @agentero/design-system
```

This reverts the three files and reinstalls the published version.

## License

[Apache-2.0](./LICENSE)
