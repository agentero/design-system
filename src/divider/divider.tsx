'use client';

import { ComponentPropsWithRef, ReactNode } from 'react';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for Divider using tailwind-variants.
 * Defines slots (`root`, `label`) and variants (`orientation`, `hasLabel`).
 * The labelless case renders a single 1px line via `bg-border-default-base-primary`;
 * the labelled case flanks the label with two 1px pseudo-element lines via
 * `border-border-default-base-primary`. Label text routes through
 * `text-text-default-base-tertiary`.
 *
 * @summary Tailwind-variants recipe for the Divider component
 */
export const dividerRecipe = tv({
	slots: {
		root: ['shrink-0'],
		label: ['flex text-text-default-base-tertiary']
	},
	variants: {
		orientation: {
			horizontal: {
				root: ['w-full']
			},
			vertical: {
				root: ['h-auto']
			}
		},
		hasLabel: {
			true: {
				root: [
					'flex items-center text-sm',
					'before:flex-1 before:content-[""] before:border-border-default-base-primary',
					'after:flex-1 after:content-[""] after:border-border-default-base-primary'
				]
			},
			false: {
				root: ['bg-border-default-base-primary']
			}
		}
	},
	compoundVariants: [
		{
			orientation: 'horizontal',
			hasLabel: false,
			class: { root: 'h-px w-full' }
		},
		{
			orientation: 'vertical',
			hasLabel: false,
			class: { root: 'h-auto w-px' }
		},
		{
			orientation: 'horizontal',
			hasLabel: true,
			class: {
				root: 'before:mr-2 before:border-t after:ml-2 after:border-t',
				label: 'px-10'
			}
		},
		{
			orientation: 'vertical',
			hasLabel: true,
			class: {
				root: 'flex-col before:mb-2 before:border-l after:mt-2 after:border-l',
				label: 'py-2'
			}
		}
	],
	defaultVariants: {
		orientation: 'horizontal',
		hasLabel: false
	}
});

export type DividerVariants = VariantProps<typeof dividerRecipe>;

export type DividerProps = ComponentPropsWithRef<typeof SeparatorPrimitive.Root> & {
	/**
	 * Optional label rendered inline between two flanking 1px lines. When set,
	 * Divider renders a styled `<div>` (rather than the underlying separator
	 * primitive) so the label can sit centered between the two line segments.
	 */
	label?: ReactNode;
};

/**
 * Divider separates content visually (or semantically, via `decorative={false}`)
 * along either a horizontal or vertical axis. Use Divider between page or card
 * sections, between inline items in a toolbar or list, or to break up long
 * content regions. Pass a `label` to render the "or"-style divider with text
 * centered between two line segments — useful for auth flows and step breaks.
 *
 * Built on Radix UI's Separator primitive for the unlabelled case; the
 * labelled case renders a `<div>` that still forwards the correct
 * `role`/`aria-orientation` when `decorative={false}`.
 *
 * Do **not** use Divider as a bare horizontal rule to add vertical rhythm —
 * reach for margin utilities or a layout wrapper instead. Divider should carry
 * meaning (visual or semantic section break), not whitespace.
 *
 * @summary Visual or semantic separator that optionally renders a centered label
 *
 * @param orientation - Axis along which the separator renders. Defaults to `'horizontal'`.
 *   - `horizontal` — 1px line spanning the parent width.
 *   - `vertical` — 1px line spanning the parent height; parent must establish a height.
 * @param decorative - When `true` (default), the separator is purely visual and hidden
 *   from assistive technologies. Set to `false` to expose `role="separator"` plus
 *   `aria-orientation` for meaningful section breaks.
 * @param label - Optional inline content rendered between two flanking 1px lines.
 *   When omitted, Divider renders a single line.
 *
 * @example
 * <Divider />
 *
 * @example
 * <Divider orientation="vertical" />
 *
 * @example
 * <Divider label="or" />
 *
 * @example
 * <Divider decorative={false} />
 */
export const Divider = ({
	className,
	orientation = 'horizontal',
	decorative = true,
	label,
	ref,
	...props
}: DividerProps) => {
	const hasLabel = label !== undefined && label !== null;
	const styles = dividerRecipe({ orientation, hasLabel });

	return (
		<SeparatorPrimitive.Root
			ref={ref}
			data-slot="separator"
			decorative={decorative}
			orientation={orientation}
			className={cn(styles.root(), className)}
			{...props}>
			{hasLabel && <div className={styles.label()}>{label}</div>}
		</SeparatorPrimitive.Root>
	);
};
