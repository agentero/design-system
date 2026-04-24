import { ComponentProps } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for StatusBall using tailwind-variants. Defines a single `base`
 * (a 8px circle via `size-2 rounded-full`) and a `color` variant that swaps
 * the background across 8 semantic-intent tokens (`--color-bg-status-ball-*`).
 * Consumers typically render `StatusBall` directly; import the recipe only
 * when styling a custom element to match a StatusBall.
 *
 * @summary Tailwind-variants recipe for the StatusBall component
 */
export const statusBallRecipe = tv({
	base: 'size-2 rounded-full',
	variants: {
		color: {
			success: 'bg-bg-status-ball-success',
			info: 'bg-bg-status-ball-info',
			warning: 'bg-bg-status-ball-warning',
			danger: 'bg-bg-status-ball-danger',
			creative: 'bg-bg-status-ball-creative',
			dynamic: 'bg-bg-status-ball-dynamic',
			playful: 'bg-bg-status-ball-playful',
			neutral: 'bg-bg-status-ball-neutral'
		}
	},
	defaultVariants: {
		color: 'neutral'
	}
});

export type StatusBallVariants = VariantProps<typeof statusBallRecipe>;

export type StatusBallProps = ComponentProps<'div'> & {
	/**
	 * Semantic intent of the dot. Defaults to `'neutral'`. Resolve a
	 * domain-specific status to an intent via your own lookup table
	 * (e.g., `active → success`, `expired → danger`).
	 * - `success` — positive / active / confirmed states
	 * - `info` — informational / scheduled / in-progress states
	 * - `warning` — pending / approaching-expiration states
	 * - `danger` — error / expired / blocking states
	 * - `creative`, `dynamic`, `playful` — category intents for domain statuses
	 *   without a direct success/info/warning/danger mapping (e.g., review,
	 *   flagged, attention)
	 * - `neutral` — inactive / unknown / default
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
 * The 8 intents (`success`, `info`, `warning`, `danger`, `creative`,
 * `dynamic`, `playful`, `neutral`) map to semantic tokens
 * (`--color-bg-status-ball-*`) and mirror the convention used by
 * [Alert](?path=/docs/components-alert--docs). Consumers typically resolve a
 * domain-specific status to an intent via their own lookup table
 * (e.g., `active → success`, `expired → danger`).
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
 *   <StatusBall color="success" />
 *   <span>Active</span>
 * </div>
 *
 * @example
 * <StatusBall color={statusToIntent[appointment.status]} />
 */
export const StatusBall = ({ color, className, ...props }: StatusBallProps) => (
	<div data-slot="status-ball" className={cn(statusBallRecipe({ color }), className)} {...props} />
);
