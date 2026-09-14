import { ComponentProps } from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import { tv } from 'tailwind-variants';

type RootProps = ComponentProps<typeof PopoverPrimitive.Root>;

/**
 * Root of a combobox: a filterable list in a surface anchored to a trigger,
 * built on Radix Popover. Compose `Root` with `Trigger` / `Content`, plus
 * `Anchor` when the surface should align to something other than the trigger.
 *
 * `Content` is deliberately **chrome-less** — no border, background or shadow.
 * It only positions and animates, because the `Command` that goes inside
 * carries the panel chrome itself. Nesting `Command` in a `Popover.Content`
 * instead paints two borders. Use `Popover` for overlays that need their own
 * chrome, and `Combobox` whenever the content is a `Command`.
 *
 * @summary Root provider for a trigger-anchored filterable list
 * @see {@link https://www.radix-ui.com/primitives/docs/components/popover|Radix UI Popover}
 *
 * @example
 * ```tsx
 * import { Combobox } from '@agentero/design-system/combobox';
 * import { Command } from '@agentero/design-system/command';
 *
 * <Combobox.Root>
 *   <Combobox.Trigger asChild>
 *     <Button variant="secondary">{selected ?? 'Select a state'}</Button>
 *   </Combobox.Trigger>
 *   <Combobox.Content>
 *     <Command.Root label="Search states">
 *       <Command.Input placeholder="Search..." />
 *       <Command.List>
 *         {options.map(option => (
 *           <Command.Item key={option} onSelect={select}>
 *             {option}
 *           </Command.Item>
 *         ))}
 *       </Command.List>
 *       <Command.Empty>No options found</Command.Empty>
 *     </Command.Root>
 *   </Combobox.Content>
 * </Combobox.Root>
 * ```
 */
export const Root = (props: RootProps) => (
	<PopoverPrimitive.Root data-slot="combobox-root" {...props} />
);
Root.displayName = 'Combobox.Root';

type TriggerProps = ComponentProps<typeof PopoverPrimitive.Trigger>;

export const Trigger = (props: TriggerProps) => (
	<PopoverPrimitive.Trigger data-slot="combobox-trigger" {...props} />
);
Trigger.displayName = 'Combobox.Trigger';

type AnchorProps = ComponentProps<typeof PopoverPrimitive.Anchor>;

/**
 * Positions `Content` against something other than the trigger — wrap the
 * search input with it when the trigger is a button elsewhere in the row.
 */
export const Anchor = (props: AnchorProps) => (
	<PopoverPrimitive.Anchor data-slot="combobox-anchor" {...props} />
);
Anchor.displayName = 'Combobox.Anchor';

// `Content` already self-portals; use `Portal` only to portal into a custom container.
export const Portal = PopoverPrimitive.Portal;

export const comboboxRecipe = tv({
	base: [
		// No border, background or shadow on purpose: `Command.Root` brings the panel chrome.
		'z-(--z-index-flyover) w-75 will-change-[transform,opacity]',
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

/**
 * The floating surface. Self-portals to the body and animates on open/close
 * following `side`.
 *
 * Defaults to a fixed 300px, the width a combobox list reads well at
 * regardless of its trigger. Pass `className="w-(--radix-popover-trigger-width)"`
 * to match the trigger instead — the right call when the trigger is a
 * full-width form control.
 *
 * `sideOffset` defaults to 4 rather than the 8 the other trigger-anchored
 * surfaces use: a list the trigger filters reads as attached to it, not as a
 * separate overlay.
 *
 * `role` defaults to `presentation`, overriding the `dialog` Radix puts on
 * every popover. The surface holds no semantics of its own — the `listbox` and
 * its accessible name belong to the `Command` inside — and a `dialog` wrapped
 * around a listbox both misreports the pattern and demands a name of its own
 * (axe `aria-dialog-name`), one every consumer would have to remember. Pass
 * `role="dialog"` plus `aria-label` for the rare surface that really is one.
 *
 * @summary Chrome-less floating surface holding the filterable list
 * @dataAttribute {string} data-slot - Always set to "combobox-content"
 */
export const Content = ({
	className,
	align = 'start',
	sideOffset = 4,
	collisionPadding = 8,
	role = 'presentation',
	...props
}: ContentProps) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			data-slot="combobox-content"
			align={align}
			sideOffset={sideOffset}
			collisionPadding={collisionPadding}
			role={role}
			className={comboboxRecipe({ className })}
			{...props}
		/>
	</PopoverPrimitive.Portal>
);
Content.displayName = 'Combobox.Content';
