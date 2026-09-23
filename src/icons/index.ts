// The design system owns the icon dependency so consumers never declare it:
// `lucide-react` is a runtime `dependency` here and reaches them through this
// subpath. Importing `lucide-react` directly from a consumer works today only
// by hoisting — it is an undeclared dependency, so don't.
//
// Icons are plain SVGs. Size them with `size-*` and color them with a `text-*`
// token (lucide paints with `stroke="currentColor"`, so `fill-*` does nothing).
// Add `shrink-0` when an icon sits next to text in a flex row.
//
//     import { ChevronRightIcon } from '@agentero/design-system/icons';
//
//     <ChevronRightIcon className="size-4 shrink-0 text-icon-default-base-secondary" />
//
// This is a flat re-export rather than a curated list: lucide ships new icons
// almost weekly and a curated barrel would make every one of them wait for a
// design-system release. The cost is a wide barrel — consumers on Next.js
// should keep `@agentero/design-system/icons` in `optimizePackageImports`.
export * from 'lucide-react';
