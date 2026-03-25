---
name: story-component
description: Create comprehensive Storybook stories for a React component following Storybook MCP best practices
allowed-tools: Read, Edit, Write, Glob, Grep, Agent
argument-hint: [component-file-path]
---

# Create Storybook Stories for MCP

Create or update the Storybook stories file for the component at `$ARGUMENTS`, following best practices for Storybook MCP manifests so AI agents get rich, accurate component examples.

## Steps

1. **Read the component file** at `$ARGUMENTS` to understand:
   - All exported components and their props/types
   - Available variants, sizes, and other enumerable options
   - Default values
   - Compound component patterns (Root, Image, Fallback, etc.)
   - Any JSDoc documentation already present

2. **Check for an existing stories file** in the same directory (e.g., `component.stories.tsx`). If it exists, read it and enhance it. If not, create a new one.

3. **Read other story files** in the project (`src/**/*.stories.tsx`) to match the existing conventions (import style, meta structure, naming patterns, use of `satisfies`).

4. **Write the stories file** with the following structure:

### Meta Configuration

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Component } from './component';

/**
 * Component description here — what it is, when to use it.
 * This appears in the Storybook docs page and in the AI manifest.
 */
const meta = {
  title: 'Components/ComponentName',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    // Only add argTypes when you need to override or enhance the auto-detected types.
    // Use 'radio' or 'select' controls for union types to improve the docs UI.
    variant: {
      control: 'radio',
      options: ['option1', 'option2'],
      description: 'Override description if needed',
    },
    // Use 'action' for callback props
    onClick: { action: 'clicked' },
  },
  args: {
    // Set sensible defaults that make the component render meaningfully
    // These are the "base" args inherited by every story
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;
```

### Story Design Principles

- **One concept per story** — never combine multiple unrelated features.
- **Every story gets a JSDoc comment** with description and `@summary` tag.
- **Use realistic, meaningful args** — real names, real URLs, real text. Never "test", "foo", "lorem ipsum".
- **Stories should be self-contained** — an AI agent reading the manifest should understand the use case from the story alone.

### Required Stories

Create stories in this order:

#### a) **Default** — The component with minimal/default props
```tsx
/**
 * The default rendering with no custom props applied.
 * Shows the component in its most basic, out-of-the-box state.
 *
 * @summary Default state with minimal props
 */
export const Default: Story = {
  args: {
    // Minimal props that produce a meaningful render
  },
};
```

#### b) **One story per variant** — For each visual variant (variant, size, color, etc.)
```tsx
/**
 * The square variant gives the avatar a rounded-rectangle shape,
 * suitable for workspace or team icons.
 *
 * @summary Square-shaped avatar for workspaces
 */
export const Square: Story = {
  args: {
    variant: 'square',
    fallback: 'WS',
  },
};
```

#### c) **Key feature stories** — Demonstrate important features
- With/without optional props (e.g., with image vs fallback)
- Interactive states (hover, focus, disabled)
- Edge cases the AI should know about (long text, missing data, error states)

#### d) **Composition stories** — If the sub-components are **exported** and available to consumers, show the compound component pattern
```tsx
/**
 * Using the compound component API for full customization.
 * Useful when you need to add custom elements like badges or status indicators.
 *
 * @summary Compound component usage with custom composition
 */
export const Compound: Story = {
  render: (args) => (
    <AvatarRoot {...args}>
      <AvatarImage src="..." alt="..." />
      <AvatarFallback>AB</AvatarFallback>
    </AvatarRoot>
  ),
};
```
Skip this if sub-components are internal and not exported from the barrel file.

#### e) **Size/scale showcase** — A story showing all sizes together (for visual reference)
```tsx
/**
 * All available sizes displayed together for visual comparison.
 * Sizes range from `xs` (24px) to `4xl` (128px).
 *
 * @summary Visual comparison of all avatar sizes
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map((size) => (
        <Avatar key={size} size={size} fallback={size.toUpperCase()} />
      ))}
    </div>
  ),
};
```

### Excluding Stories from Manifest

If a story is only useful for visual testing and would confuse an AI agent, exclude it:
```tsx
export const VisualTestOnly: Story = {
  tags: ['!manifest'],
  // ...
};
```

## Verification

After writing the stories file, **re-read it** and verify against this checklist. Fix any failures before finishing.

| # | Check | How to verify |
|---|-------|---------------|
| 1 | Meta uses `satisfies Meta<typeof Component>` | Confirm the `satisfies` keyword is present on the meta object |
| 2 | Meta includes `tags: ['autodocs']` | Search for `autodocs` in meta |
| 3 | Meta has a JSDoc description above it | Confirm a `/** ... */` block before `const meta` |
| 4 | Default story exists and is first | Confirm `export const Default` is the first story |
| 5 | Every story has JSDoc with `@summary` | Check each `export const ... Story` has a `/** ... @summary` block |
| 6 | `@summary` tags are under 80 characters | Count characters in each `@summary` value |
| 7 | One story per variant value | Compare variant options in the component to story exports — every variant should have its own story |
| 8 | Key feature stories exist | At least one story per major optional feature (e.g., with image vs fallback, disabled state) |
| 9 | Composition story exists (only if sub-components are exported) | If the barrel file exports sub-components, confirm a composition story using them; otherwise skip |
| 10 | Showcase stories exist for size/variant when there are 3+ options | Confirm `AllSizes` / `AllVariants` or equivalent stories with `render` functions |
| 11 | `argTypes` controls set for union/enum props | Confirm `radio` (<=5 options) or `select` (>5 options) for each union prop |
| 12 | Args use realistic values | Scan all `args` — no "foo", "test", "lorem ipsum", or placeholder values |
| 13 | Imports from local barrel, not deep paths | Check import path matches `./component-name` pattern |
| 14 | Stories are grouped logically | Order is: Default > Variants > Features > Edge cases > Showcases |
| 15 | TypeScript compiles without errors | Run `npx tsc --noEmit` and confirm clean output |

If any check fails, fix the issue and re-verify before reporting completion.

## Rules

- **Import from the local barrel** (`./component`) not from deep paths, matching existing patterns.
- **Use `satisfies Meta<typeof Component>`** for better type inference in the manifest.
- **Always include `tags: ['autodocs']`** in meta so docs pages are generated.
- **Set `argTypes` controls** for union/enum props — use `'radio'` for <=5 options, `'select'` for more.
- **Use descriptive story names** — `WithProfileImage` not `Story2`. Names appear in the manifest.
- **Keep render functions minimal** — only use `render` when you need JSX composition. Prefer `args` when possible since the manifest extracts args more cleanly.
- **Do NOT use decorator-heavy stories** — keep stories simple so the manifest code snippets are useful to AI agents.
- **Do NOT create stories that test internal implementation** — stories should demonstrate consumer-facing API.
- **Use `action()` for callback props** in argTypes so interactions are visible.
- **Group related stories** — the file order determines the docs page order. Put Default first, then variants, then features, then edge cases.
- **Match existing project conventions** — check other `.stories.tsx` files for import style, meta format, and naming patterns.
