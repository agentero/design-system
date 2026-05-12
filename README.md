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

Import icons from the `/icons` subpath:

```tsx
import { IconCheckCircle, IconInfoFilled } from '@agentero/design-system/icons';

<IconCheckCircle />                  {/* unfilled */}
<IconInfoFilled />                   {/* filled */}
<IconCheckCircle width={32} height={32} />
<IconCheckCircle className="text-green-500" />
```

The icons module mirrors the build pattern of `@agentero/icons` in `producerflow/mono` (esbuild + SVGR + SVGO), with SVGs sourced automatically from Google's official [`@material-symbols/svg-400`](https://www.npmjs.com/package/@material-symbols/svg-400) package (Apache-2.0). Style is **rounded**, matching the working set in Figma.

### Adding a new icon

1. Find the icon name on https://fonts.google.com/icons.
2. Add the filename (without `.svg`) to `src/icons/manifest.json`:
   - Unfilled: just the snake_case name, e.g. `"check_circle"`.
   - Filled: append `-fill`, e.g. `"check_circle-fill"`.
3. Run `yarn build:icons` (the `postinstall` hook also runs it).

The sync script copies the SVG from `@material-symbols/svg-400/rounded/` and regenerates `src/icons/index.ts`. Filenames ending in `-fill` produce component names suffixed with `Filled` (e.g. `IconCheckCircleFilled`). The build produces the bundled output at `lib/icons/`. The new icon appears automatically in the `Icons/Gallery` Storybook story.

**Note on style**: `@material-symbols/svg-400` only ships at `opsz=48`, so icons may render slightly thinner at small display sizes than `opsz=24` exports from Figma.

Every rendered `<svg>` gets `data-icon="<kebab-name>"` and unique internal IDs. Filled variants preserve the `-fill` suffix in `data-icon`, enabling selectors like `[data-icon$="-fill"]` to target all filled icons in CSS or tests.

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
