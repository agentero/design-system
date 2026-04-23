import { ComponentProps } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for StatusBall using tailwind-variants. Defines a single `base`
 * (a 8px circle via `size-2 rounded-full`) and a `color` variant that swaps the
 * background token across the 8 legacy palette entries. Consumers typically
 * render `StatusBall` directly; import the recipe only when styling a custom
 * element to match a StatusBall.
 *
 * @summary Tailwind-variants recipe for the StatusBall component
 */
export const statusBallRecipe = tv({
	base: 'size-2 rounded-full',
	variants: {
		color: {
			green: 'bg-positive-700',
			blue: 'bg-blue-600',
			yellow: 'bg-warning-700',
			red: 'bg-danger-500',
			purple: 'bg-purple-500',
			pink: 'bg-pink-500',
			orange: 'bg-orange-500',
			gray: 'bg-slate-300'
		}
	},
	defaultVariants: {
		color: 'gray'
	}
});

export type StatusBallVariants = VariantProps<typeof statusBallRecipe>;

export type StatusBallProps = ComponentProps<'div'> & {
	/**
	 * Background color of the dot. Defaults to `'gray'`. Each option maps to a
	 * fixed palette token rather than a semantic intent — pick the value that
	 * matches your domain status mapping.
	 * - `green` — positive / active / success states
	 * - `blue` — informational / neutral-positive states
	 * - `yellow` — warning / pending states
	 * - `red` — danger / error / expired states
	 * - `purple`, `pink`, `orange` — category colors for domain-specific
	 *   statuses with no semantic fallback
	 * - `gray` — inactive / unknown / default
	 */
	color?: StatusBallVariants['color'];
};

/**
 * StatusBall renders a small colored dot used to mark the state of an adjacent
 * label — things like an appointment's confirmation state, a license's validity,
 * or any list-row entry where a single glyph of color conveys the status at a
 * glance. Pair it with text; the dot alone is not announced to assistive
 * technologies, so the surrounding label must carry the meaning.
 *
 * The 8 color names (`green`, `blue`, `yellow`, `red`, `purple`, `pink`,
 * `orange`, `gray`) map to fixed palette tokens and are intentionally flat —
 * consumers typically resolve a domain-specific status to a color via their
 * own lookup table (e.g., `active → green`, `expired → red`).
 *
 * Do **not** use StatusBall as a progress or loading indicator — reach for
 * [Loading](?path=/docs/components-loading--docs) for async state. For
 * section-level alerts with copy, use [Alert](?path=/docs/components-alert--docs)
 * instead.
 *
 * @summary Small colored dot that signals the status of an adjacent label
 *
 * @example
 * <div className="flex items-center gap-2">
 *   <StatusBall color="green" />
 *   <span>Active</span>
 * </div>
 *
 * @example
 * <StatusBall color={statusToColor[appointment.status]} />
 */
export const StatusBall = ({ color, className, ...props }: StatusBallProps) => (
	<div data-slot="status-ball" className={cn(statusBallRecipe({ color }), className)} {...props} />
);
