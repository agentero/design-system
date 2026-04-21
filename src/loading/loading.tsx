'use client';

import { ComponentProps } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for Loading using tailwind-variants.
 * Renders a circular spinner via the `::before` pseudo-element that inherits
 * color from the parent and fades in on mount. Size variants (`sm`, `md`, `lg`)
 * scale the spinner diameter in `em` units so it tracks the parent font size.
 *
 * @summary Tailwind-variants recipe for the Loading spinner
 */
export const loadingRecipe = tv({
	base: [
		'inline-grid',
		'place-items-center',
		'bg-inherit',
		'opacity-0',
		'animate-fade-in',
		'before:content-[""]',
		'before:block',
		'before:border-[0.125em]',
		'before:border-solid',
		'before:rounded-full',
		'before:border-inherit',
		'before:border-t-transparent',
		'before:animate-spin'
	],
	variants: {
		size: {
			sm: ['before:h-[1em]', 'before:w-[1em]'],
			md: ['before:h-[1.5em]', 'before:w-[1.5em]'],
			lg: ['before:h-[2em]', 'before:w-[2em]']
		}
	},
	defaultVariants: {
		size: 'sm'
	}
});

export type LoadingVariants = VariantProps<typeof loadingRecipe>;

export type LoadingProps = ComponentProps<'span'> & {
	/**
	 * Controls the spinner diameter in `em` units relative to the parent font size.
	 * Defaults to `'sm'`.
	 * - `sm` (1em) — inline indicators, buttons, and compact layouts
	 * - `md` (1.5em) — cards, panels, and standalone loading states
	 * - `lg` (2em) — page-level or section-level loading
	 */
	size?: LoadingVariants['size'];
};

/**
 * Loading displays a circular spinner that indicates an in-progress operation.
 * Use Loading to signal that content is being fetched, a form is submitting,
 * or any asynchronous task is running inline with surrounding content.
 *
 * The spinner inherits its color from the parent `color` (text color) via
 * `border-current`, so it adapts to the surrounding context without extra
 * props. It fades in on mount and spins continuously until unmounted.
 *
 * Available sizes: `sm` (1em, default), `md` (1.5em), and `lg` (2em). Each
 * size is expressed in `em` units so the spinner scales with the parent
 * font size — wrap the Loading (or its ancestor) with the appropriate
 * `text-[size]` utility to override the absolute diameter.
 *
 * Exposes `role="status"` and `aria-label="Loading"` for screen readers, and
 * `data-slot="loading"` for styling hooks.
 *
 * Do **not** use Loading as the busy indicator for a button — the Button
 * component has its own built-in loading overlay ([Button](?path=/docs/button--docs)).
 * For full-page or skeleton loading states prefer a dedicated skeleton
 * placeholder instead of a spinner.
 *
 * @summary Circular spinner for in-progress and loading states
 *
 * @example
 * <Loading />
 *
 * @example
 * <Loading size="lg" className="text-text-default-brand-primary" />
 */
export const Loading = ({ className, size, ...props }: LoadingProps) => (
	<span
		data-slot="loading"
		role="status"
		aria-label="Loading"
		className={cn(loadingRecipe({ size }), className)}
		{...props}
	/>
);
