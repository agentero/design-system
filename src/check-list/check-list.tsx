'use client';

import { ComponentProps } from 'react';

import { tv } from 'tailwind-variants';

import { IconCheck } from './icons';

export const checkListRecipe = tv({
	slots: {
		root: 'flex flex-col gap-1.5 text-sm text-text-default-base-primary',
		item: 'flex items-start gap-2',
		// em-based so the check scales with the item's font size
		icon: 'relative top-[0.125em] size-[1.25em] shrink-0'
	}
});

const slots = checkListRecipe();

type RootProps = ComponentProps<'ul'>;

/** @summary List container for check-marked items */
const Root = ({ className, ...props }: RootProps) => (
	<ul data-slot="check-list" className={slots.root({ className })} {...props} />
);
Root.displayName = 'CheckList.Root';

type ItemProps = ComponentProps<'li'>;

/** @summary List row with a leading check icon */
const Item = ({ className, children, ...props }: ItemProps) => (
	<li data-slot="check-list-item" className={slots.item({ className })} {...props}>
		<IconCheck className={slots.icon()} aria-hidden />
		{children}
	</li>
);
Item.displayName = 'CheckList.Item';

/**
 * CheckList renders a vertical list where every row is marked with a check
 * icon — feature lists, benefits, availability summaries. Purely
 * presentational: for interactive selection use a checkbox group instead.
 *
 * @summary Vertical list of check-marked rows
 *
 * @example
 * ```tsx
 * <CheckList.Root>
 *   <CheckList.Item>Instant appointment</CheckList.Item>
 * </CheckList.Root>
 * ```
 */
export const CheckList = {
	Root,
	Item
};
