'use client';

import { ComponentProps } from 'react';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { tv } from 'tailwind-variants';

import { cn } from '../../lib';

type RootProps = ComponentProps<typeof HoverCardPrimitive.Root>;

const Root = (props: RootProps) => (
	<HoverCardPrimitive.Root data-slot="hover-card-root" {...props} />
);
Root.displayName = 'HoverCard.Root';

type TriggerProps = ComponentProps<typeof HoverCardPrimitive.Trigger>;

const Trigger = (props: TriggerProps) => (
	<HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
);
Trigger.displayName = 'HoverCard.Trigger';

const Portal = HoverCardPrimitive.Portal;

export const hoverCardRecipe = tv({
	base: [
		'z-(--z-index-flyover) rounded-lg bg-bg-default-base-primary p-4 shadow-xl',
		'border border-border-default-base-primary',
		'text-sm text-text-default-base-primary',
		// No overflow: the Arrow renders inside Content and pokes past its edge.
		'will-change-[transform,opacity]',
		'data-[side=bottom]:origin-top data-[side=left]:origin-right',
		'data-[side=right]:origin-left data-[side=top]:origin-bottom',
		// Gate the open animation on data-state=open so it can't beat slide-out on close.
		'data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top',
		'data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right',
		'data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left',
		'data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom',
		'data-[state=closed]:animate-dropdown-slide-out',
		'motion-reduce:animate-none!'
	]
});

type ContentProps = ComponentProps<typeof HoverCardPrimitive.Content>;

const Content = ({ className, sideOffset = 8, collisionPadding = 8, ...props }: ContentProps) => (
	<HoverCardPrimitive.Content
		data-slot="hover-card-content"
		sideOffset={sideOffset}
		collisionPadding={collisionPadding}
		className={hoverCardRecipe({ className })}
		{...props}
	/>
);
Content.displayName = 'HoverCard.Content';

type ArrowProps = ComponentProps<typeof HoverCardPrimitive.Arrow>;

const Arrow = ({ className, ...props }: ArrowProps) => (
	<HoverCardPrimitive.Arrow
		data-slot="hover-card-arrow"
		className={cn('fill-bg-default-base-primary', className)}
		{...props}
	/>
);
Arrow.displayName = 'HoverCard.Arrow';

/**
 * Rich, sighted-user hover preview anchored to a trigger (profile cards, entity
 * previews) shown on hover/focus, built on Radix HoverCard. Compose from
 * `Root` / `Trigger` / `Portal` / `Content`, plus an optional `Arrow`.
 *
 * Pointer-first and NOT keyboard-accessible: focus opens it but focus never
 * enters the card — never put essential info or the only path to an action
 * inside. Use `Popover`/`DropdownMenu` for that, or `Tooltip` for text hints.
 *
 * @summary Compound overlay card for rich hover previews of an entity
 * @see {@link https://www.radix-ui.com/primitives/docs/components/hover-card|Radix UI HoverCard}
 */
export const HoverCard = {
	Root,
	Trigger,
	Portal,
	Content,
	Arrow
};
