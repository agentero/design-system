import type { Decorator } from '@storybook/react-vite';

/**
 * Wraps a story in a plain container div. Harness only — kept out of the
 * "Show code" snippets via `docs.source.excludeDecorators` in preview.ts.
 */
export const withContainer = (className: string): Decorator => Story => (
	<div className={className}>
		<Story />
	</div>
);

/**
 * Centers a floating-UI trigger (tooltip, popover, hover-card) with headroom
 * for the floating content to open into.
 */
export const withFloatingCenter = withContainer('flex min-h-60 items-center justify-center p-10');
