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

## Utilities

### `cn`

A class name merging utility combining `clsx` and `tailwind-merge`. Useful for conditionally joining Tailwind classes without conflicts.

```tsx
import { cn } from '@agentero/design-system/lib';

cn('px-4 py-2', isActive && 'bg-blue-500', className);
```

## License

[Apache-2.0](./LICENSE)
