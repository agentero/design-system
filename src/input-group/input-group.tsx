'use client';

import { ComponentPropsWithRef, MouseEvent } from 'react';

import { tv } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for InputGroup. Slots: `root` (the bordered frame), `addon` and
 * `text`. There are no variants of its own: focus, disabled, invalid and size
 * all come from the `<input>` or `<textarea>` inside through `:has()`, so the
 * frame can never disagree with its control.
 *
 * @summary tailwind-variants recipe backing the InputGroup frame and addons
 */
export const inputGroupRecipe = tv({
	slots: {
		root: [
			'group/input-group [--input-group-gap:0.75rem]',
			'flex gap-(--input-group-gap) rounded-md border border-solid border-border-input-default',
			'bg-bg-input-normal px-3 text-text-input-normal shadow-sm',
			'cursor-text overflow-hidden outline-0 -outline-offset-1 outline-[transparent]',
			'transition-[color,box-shadow,outline-color,outline-offset,outline-width] duration-75',
			'has-[input:focus-within,textarea:focus-within]:border-border-input-focus',
			'has-[input:focus-within,textarea:focus-within]:outline-border-input-focus',
			'has-[input:focus-within,textarea:focus-within]:outline-[0.125rem]',
			'has-[input:focus-within,textarea:focus-within]:outline-offset-[-0.0625rem]',
			'has-[input:disabled,textarea:disabled]:cursor-default',
			'has-[input:disabled,textarea:disabled]:border-border-input-disable',
			'has-[input:disabled,textarea:disabled]:bg-bg-input-disable',
			'has-[input:disabled,textarea:disabled]:text-text-input-disable',
			'has-[input:disabled,textarea:disabled]:shadow-none',
			'has-[input[data-size="lg"],textarea[data-size="lg"]]:rounded-lg',
			'has-[input[aria-invalid="true"],textarea[aria-invalid="true"]]:border-border-input-destructive',
			'has-[input[aria-invalid="true"]:focus-within,textarea[aria-invalid="true"]:focus-within]:outline-border-input-destructive',
			// The 1px negative margins swallow the frame's border so the group is as tall as a
			// standalone Input; the extra `focus-visible` reset is needed because the Input's own
			// ring rule outranks a plain descendant reset.
			'**:[input,textarea]:-my-0.25 **:[input,textarea]:border-none **:[input,textarea]:bg-transparent',
			'**:[input,textarea]:px-0 **:[input,textarea]:pb-0.125 **:[input,textarea]:shadow-none',
			'**:[input,textarea]:outline-none **:[input,textarea]:focus-visible:outline-none',
			'**:[[data-slot=separator]]:bg-border-input-default'
		],
		addon: [
			'flex h-auto cursor-text items-center justify-center',
			'*:[svg]:-mx-1 *:[svg]:size-6 [&_path]:fill-icon-input-default',
			'group-has-[input:disabled,textarea:disabled]/input-group:[&_path]:fill-icon-input-disable'
		],
		text: [
			'flex items-center text-sm text-text-input-placeholder',
			'group-has-[input[data-size="lg"]]/input-group:text-base',
			'group-has-[input:disabled,textarea:disabled]/input-group:text-text-input-disable'
		]
	}
});

const slots = inputGroupRecipe();

export type InputGroupRootProps = ComponentPropsWithRef<'div'>;

/**
 * The bordered frame of an input group: one box around an `Input` and its
 * addons, drawn as a single control. It carries the border, the shadow, the
 * focus ring and the horizontal padding; the `Input` inside renders bare and
 * gives the frame its state — focus, `disabled`, `aria-invalid` and `size`
 * all propagate through `:has()`, so nothing is passed to the frame by hand.
 *
 * Put the `Input` and any `InputGroup.Addon` or `InputGroup.Text` inside, in
 * reading order. Inside a `FieldText` the `Input` still takes its label and
 * messages from the field, at any depth; the frame needs nothing.
 *
 * Use it for an input with a leading icon, a currency or unit affix, or a
 * trailing action. A plain input with nothing around it is just `Input`, and a
 * button beside an input that submits on its own is a form layout, not a group.
 *
 * @summary Bordered frame drawing an Input and its addons as one control
 * @dataAttribute {string} data-slot - Always set to "input-group"
 *
 * @example
 * <InputGroup.Root>
 *   <InputGroup.Text>$</InputGroup.Text>
 *   <Input inputMode="decimal" placeholder="0.00" />
 *   <InputGroup.Text>USD</InputGroup.Text>
 * </InputGroup.Root>
 */
export const Root = ({ className, ...props }: InputGroupRootProps) => (
	<div data-slot="input-group" role="group" className={cn(slots.root(), className)} {...props} />
);
Root.displayName = 'InputGroup.Root';

export type InputGroupAddonProps = ComponentPropsWithRef<'div'>;

/**
 * A slot for an icon, a tag or a button inside the frame. Icons take the input
 * colour and size (24px) and follow the disabled state. A press on the addon
 * itself focuses the input, so the whole frame reads as the control; a press on
 * a button or link inside it is left alone.
 *
 * For a text affix use `InputGroup.Text`, which sets the type and colour a
 * prefix needs.
 *
 * @summary Icon, tag or button slot inside the input group frame
 * @dataAttribute {string} data-slot - Always set to "input-group-addon"
 *
 * @example
 * <InputGroup.Root>
 *   <InputGroup.Addon><IconSearch /></InputGroup.Addon>
 *   <Input type="search" placeholder="Search agencies" />
 * </InputGroup.Root>
 */
export const Addon = ({ className, onMouseDown, ...props }: InputGroupAddonProps) => {
	const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
		onMouseDown?.(event);
		if (event.defaultPrevented || (event.target as HTMLElement).closest('button, a')) return;

		event.preventDefault();
		const group = event.currentTarget.parentElement;
		const control = group?.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
		if (control && !group?.querySelector('input:focus, textarea:focus')) control.focus();
	};

	return (
		<div
			data-slot="input-group-addon"
			className={cn(slots.addon(), className)}
			onMouseDown={handleMouseDown}
			{...props}
		/>
	);
};
Addon.displayName = 'InputGroup.Addon';

export type InputGroupTextProps = ComponentPropsWithRef<'span'>;

/**
 * A text affix inside the frame: a currency symbol, a protocol, a unit. Set in
 * the placeholder colour so the typed value stands out, at the input's text
 * size (`base` when the input is `lg`), and greyed out with a disabled input.
 * It is decoration only: a screen reader does not read it as part of the value,
 * so say the unit in the label or the description when it matters — and the
 * value excludes it too, so a `https://` prefix goes with a `type="text"`
 * input, not `type="url"`, whose native validation would reject the bare host.
 *
 * @summary Currency, protocol or unit affix set beside the input
 * @dataAttribute {string} data-slot - Always set to "input-group-text"
 *
 * @example
 * <InputGroup.Root>
 *   <InputGroup.Text>https://</InputGroup.Text>
 *   <Input type="text" inputMode="url" autoCapitalize="none" placeholder="www.agentero.com" />
 * </InputGroup.Root>
 */
export const Text = ({ className, ...props }: InputGroupTextProps) => (
	<span data-slot="input-group-text" className={cn(slots.text(), className)} {...props} />
);
Text.displayName = 'InputGroup.Text';
