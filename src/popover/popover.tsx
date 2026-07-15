'use client';

import { ComponentProps } from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import { tv } from 'tailwind-variants';

type RootProps = ComponentProps<typeof PopoverPrimitive.Root>;

const Root = (props: RootProps) => <PopoverPrimitive.Root data-slot="popover-root" {...props} />;
Root.displayName = 'Popover.Root';

type TriggerProps = ComponentProps<typeof PopoverPrimitive.Trigger>;

const Trigger = (props: TriggerProps) => (
	<PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
);
Trigger.displayName = 'Popover.Trigger';

type AnchorProps = ComponentProps<typeof PopoverPrimitive.Anchor>;

const Anchor = (props: AnchorProps) => (
	<PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
);
Anchor.displayName = 'Popover.Anchor';

type CloseProps = ComponentProps<typeof PopoverPrimitive.Close>;

const Close = (props: CloseProps) => (
	<PopoverPrimitive.Close data-slot="popover-close" {...props} />
);
Close.displayName = 'Popover.Close';

// `Content` already self-portals; use `Portal` only to portal into a custom container.
const Portal = PopoverPrimitive.Portal;

export const popoverRecipe = tv({
	base: [
		'z-(--z-index-flyover) rounded-md bg-bg-default-base-primary px-2 py-3 shadow-md',
		'border border-border-default-base-primary',
		'will-change-[transform,opacity]',
		// Radix computes the exact origin (accounts for side + align) so the scale grows from the trigger edge.
		'origin-(--radix-popover-content-transform-origin)',
		// Gate the open animation on data-[state=open] so it can't beat slide-out on close.
		'data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top',
		'data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right',
		'data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left',
		'data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom',
		'data-[state=closed]:animate-dropdown-slide-out',
		'motion-reduce:animate-none!'
	]
});

type ContentProps = ComponentProps<typeof PopoverPrimitive.Content>;

// Self-portals to the body and animates on open/close following `side`. Defaults `sideOffset` to 1.
const Content = ({ className, sideOffset = 1, ...props }: ContentProps) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			data-slot="popover-content"
			sideOffset={sideOffset}
			className={popoverRecipe({ className })}
			{...props}
		/>
	</PopoverPrimitive.Portal>
);
Content.displayName = 'Popover.Content';

/**
 * Non-modal floating surface anchored to a trigger, built on Radix Popover.
 * Compose from `Root` / `Trigger` / `Content`, plus optional `Anchor`,
 * `Close`, and `Portal`. Use for rich interactive overlays (forms, filters,
 * pickers); prefer `Tooltip` for text hints and `DropdownMenu` for menus.
 *
 * @summary Compound floating surface for interactive overlays
 * @see {@link https://www.radix-ui.com/primitives/docs/components/popover|Radix UI Popover}
 *
 * @example
 * ```tsx
 * <Popover.Root>
 *   <Popover.Trigger asChild>
 *     <Button>Filters</Button>
 *   </Popover.Trigger>
 *   <Popover.Content align="start">
 *     <FiltersForm />
 *   </Popover.Content>
 * </Popover.Root>
 * ```
 */
export const Popover = {
	Root,
	Trigger,
	Anchor,
	Close,
	Portal,
	Content
};
