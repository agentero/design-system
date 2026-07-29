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
		// Cap the width here rather than leaving it to callers. Popper content is
		// shrink-to-fit, so an unconstrained card grows to the collision boundary
		// and a sentence of text becomes one long line. Override with `max-w-*`.
		'z-(--z-index-flyover) max-w-80 rounded-lg bg-bg-default-base-primary p-4 shadow-xl',
		'border border-border-default-base-primary',
		'text-sm text-text-default-base-primary',
		// No overflow: the Arrow renders inside Content and pokes past its edge.
		'will-change-[transform,opacity]',
		'data-[side=bottom]:origin-top data-[side=left]:origin-right',
		'data-[side=right]:origin-left data-[side=top]:origin-bottom',
		// Motion is transition-driven rather than keyframe-driven. A hover card is
		// routinely abandoned mid-entrance — the pointer brushes the trigger and
		// leaves without ever reaching the card — and keyframes restart the exit at
		// full opacity/scale, so the half-faded card pops to fully visible before
		// shrinking away. A transition reverses from wherever the entrance got to.
		'transition-[opacity,transform] duration-200 ease-out',
		// Direction comes from the side-aware origin above, not a translate:
		// @starting-style is captured before Floating UI resolves a collision flip,
		// so a translate keyed on data-side runs backwards whenever the card flips.
		'starting:opacity-0 starting:[transform:scale(0.9)]',
		'data-[state=closed]:opacity-0 data-[state=closed]:[transform:scale(0.9)]',
		'data-[state=closed]:duration-150 data-[state=closed]:ease-in',
		// Presence unmounts on animationend, so the exit needs an animation to wait
		// on; presence-hold is a no-op whose duration matches the exit transition.
		'data-[state=closed]:animate-presence-hold',
		'motion-reduce:transition-none motion-reduce:animate-none!'
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
