import { ComponentProps, ComponentPropsWithRef } from 'react';

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
 *   <Combobox.Content label="Select a state">
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

type TriggerProps = ComponentPropsWithRef<typeof PopoverPrimitive.Trigger>;

/** @summary Button that opens the combobox dialog */
export const Trigger = (props: TriggerProps) => (
	<PopoverPrimitive.Trigger data-slot="combobox-trigger" {...props} />
);
Trigger.displayName = 'Combobox.Trigger';

type AnchorProps = ComponentPropsWithRef<typeof PopoverPrimitive.Anchor>;

/**
 * Positions `Content` against something other than the trigger — wrap the
 * search input with it when the trigger is a button elsewhere in the row.
 *
 * @summary Positioning anchor for the combobox surface
 */
export const Anchor = (props: AnchorProps) => (
	<PopoverPrimitive.Anchor data-slot="combobox-anchor" {...props} />
);
Anchor.displayName = 'Combobox.Anchor';

/**
 * Optional external portal. Pair it with `Content portalled={false}` so the
 * content stays inside this portal's container. Otherwise use `Content container`.
 *
 * @summary External portal for a combobox surface
 */
export const Portal = PopoverPrimitive.Portal;

/** Positioning and legacy fade/scale animation for the unpainted surface. */
export const comboboxRecipe = tv({
	base: [
		'z-(--z-index-flyover) w-75 will-change-[transform,opacity]',
		// Radix computes the exact origin (accounts for side + align) so the scale grows from the trigger edge.
		'origin-(--radix-popover-content-transform-origin)',
		'data-[state=open]:animate-combobox-in',
		'data-[state=closed]:animate-combobox-out',
		'motion-reduce:animate-none!'
	]
});

type DialogName =
	| {
			/** Accessible name of the dialog. */
			label: string;
	  }
	| {
			/** Accessible name supplied through standard ARIA. */
			'aria-label': string;
			label?: never;
	  }
	| {
			/** ID of the element naming the dialog. */
			'aria-labelledby': string;
			label?: never;
	  };

type ContentSemantics =
	| ({
			/** Named dialog for a button trigger. This is the default. */
			role?: 'dialog';
	  } & DialogName)
	| {
			/** Unnamed surface when an external input owns the combobox semantics. */
			role: 'presentation';
			label?: never;
	  };

type PortalTarget =
	| {
			/** Portal destination. Defaults to document.body. */
			container?: ComponentProps<typeof PopoverPrimitive.Portal>['container'];
			portalled?: true;
	  }
	| {
			/** Set false inside an explicit `Combobox.Portal`, which then owns the destination. */
			portalled: false;
			container?: never;
	  };

export type ComboboxContentProps = Omit<
	ComponentPropsWithRef<typeof PopoverPrimitive.Content>,
	'role'
> &
	ContentSemantics &
	PortalTarget;

const keepFocusWhereItIs = (event: Event) => event.preventDefault();

/**
 * Floating surface with the legacy 100ms fade and scale (0.95 to 1).
 * Self-portals to the body; use `container` to change the destination, or
 * `portalled={false}` when already wrapped in `Combobox.Portal`.
 *
 * Defaults to 300px wide. Pass `className="w-(--radix-popover-trigger-width)"`
 * to match the trigger. `sideOffset` defaults to 8 like every other
 * trigger-anchored DS surface; Marketplace wrappers pass 4 for legacy spacing.
 *
 * A button trigger opens a named dialog: provide `label`, `aria-label` or
 * `aria-labelledby`. When an external input owns the combobox semantics set
 * `role="presentation"` and anchor with `Anchor`, not `Trigger` — a trigger
 * would still announce `aria-haspopup="dialog"` for a presentational surface.
 * That mode also keeps focus in the input on open and close, as shown in the
 * anchored search story.
 *
 * The inner `combobox-content-inner` slot is retained for legacy selectors.
 *
 * @summary Unpainted floating surface holding a filterable list
 * @dataAttribute {string} data-slot - Always set to "combobox-content"
 */
export const Content = ({
	className,
	children,
	align = 'start',
	sideOffset = 8,
	collisionPadding = 8,
	role = 'dialog',
	label,
	container,
	portalled = true,
	forceMount,
	onOpenAutoFocus,
	onCloseAutoFocus,
	...props
}: ComboboxContentProps) => {
	const presentationalFocus = role === 'presentation' ? keepFocusWhereItIs : undefined;

	const content = (
		<PopoverPrimitive.Content
			data-slot="combobox-content"
			align={align}
			sideOffset={sideOffset}
			collisionPadding={collisionPadding}
			role={role}
			aria-label={label}
			forceMount={forceMount}
			onOpenAutoFocus={onOpenAutoFocus ?? presentationalFocus}
			onCloseAutoFocus={onCloseAutoFocus ?? presentationalFocus}
			className={comboboxRecipe({ className })}
			{...props}>
			<div data-slot="combobox-content-inner" className="[transform-origin:inherit]">
				{children}
			</div>
		</PopoverPrimitive.Content>
	);

	return portalled ? (
		<PopoverPrimitive.Portal container={container} forceMount={forceMount}>
			{content}
		</PopoverPrimitive.Portal>
	) : (
		content
	);
};
Content.displayName = 'Combobox.Content';
