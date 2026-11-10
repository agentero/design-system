// Consumers import icons from here, never from `lucide-react`: the design system
// declares the dependency, and a direct import only works by hoisting. A flat
// re-export rather than a curated list, so a new lucide icon never waits for a
// design-system release; Next.js consumers keep this subpath in `optimizePackageImports`.
export * from 'lucide-react';
export * from './custom';
