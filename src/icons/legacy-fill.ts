// Consumers still pass filled `@agentero/icons` SVGs, which `text-*` cannot paint on its own.
// One module to delete once they finish migrating. It lives under `src/` because that is the
// only directory the consumers' Tailwind scans for class names; `lib/` is not.

/** A root without `fill="none"`: its bare path would render black, SVG's default. */
export const legacyIconRootFill = '[&_:where(svg:not([fill=none]))]:fill-current';
/** A path with its own hardcoded `fill`; the mask path some glyphs carry stays transparent. */
export const legacyIconPathFill = '[&_:where(svg_path[fill]:not([fill=none]))]:fill-current';
/** Both, for a recipe whose class lands on an ancestor of the icon. */
export const legacyIconFill = `${legacyIconRootFill} ${legacyIconPathFill}`;
/** Both, for the one slot whose class lands on the icon's own `<svg>` (Alert). */
export const legacyIconSelfFill =
	'[&:where(:not([fill=none]))]:fill-current [&_:where(path[fill]:not([fill=none]))]:fill-current';
