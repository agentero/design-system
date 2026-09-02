'use client';

import { ComponentPropsWithRef, MouseEvent, ReactNode } from 'react';

import { tv } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for InputGroup. Slots: `root`, `addon`, `text`.
 *
 * The group draws the frame the control used to draw for itself, and the
 * control's own frame is switched off from here — that is the whole trick. The
 * `root` slot paints the border, background, radius, shadow and focus ring, and
 * strips the border, outline, shadow, background and horizontal padding off the
 * `input` inside it, so the two never draw two boxes.
 *
 * Every state is read off the control rather than passed in: `:has()` looks at
 * the inner `input`'s `:focus-within`, `:disabled`, `aria-invalid` and
 * `data-size`, so the frame cannot disagree with the control it wraps and a
 * group needs no state props at all.
 *
 * @summary tailwind-variants recipe backing the InputGroup frame and its addons
 */
export const inputGroupRecipe = tv({
	slots: {
		root: [
			// The gap is a variable so an addon can cancel it — a full-height button
			// at the edge of the group has to reach the border, and does it with a
			// negative margin of exactly this value.
			'[--input-group-gap:0.75rem]',
			'group flex cursor-text gap-[var(--input-group-gap)] overflow-hidden',
			'rounded-md border border-solid border-border-input-default px-3 shadow-sm',
			'bg-bg-input-normal text-text-input-normal',
			// Same transparent zero-width outline the Input uses, so the focus ring
			// animates in rather than popping, and is drawn *inside* the border.
			'outline-0 -outline-offset-1 outline-[transparent]',
			'transition-[color,box-shadow,outline-color,outline-offset,outline-width] duration-75',
			// Focus
			'has-[input:focus-within]:border-border-input-focus',
			'has-[input:focus-within]:outline-border-input-focus',
			'has-[input:focus-within]:outline-[0.125rem]',
			'has-[input:focus-within]:outline-offset-[-0.0625rem]',
			// Disabled
			'has-[input:disabled]:cursor-default',
			'has-[input:disabled]:border-border-input-disable',
			'has-[input:disabled]:bg-bg-input-disable',
			'has-[input:disabled]:text-text-input-disable',
			'has-[input:disabled]:placeholder:text-text-input-disable',
			'has-[input:disabled]:shadow-none',
			// Invalid
			'has-[input[aria-invalid="true"]]:border-border-input-destructive',
			'has-[input[aria-invalid="true"]:focus-within]:border-border-input-destructive',
			'has-[input[aria-invalid="true"]:focus-within]:outline-outline-input-destructive',
			// The 48px control raises the group's corners with it, so the frame and
			// the control it replaces have the same radius at every height.
			'has-[input[data-size="lg"]]:rounded-lg',
			// The control's own frame, switched off. The 1px negative block margin
			// lets a 40px control sit in a 40px group: the group's two borders take
			// the 2px back.
			'**:[input]:-my-0.25 **:[input]:px-0',
			'**:[input]:border-none **:[input]:bg-transparent',
			'**:[input]:shadow-none **:[input]:outline-none',
			// A Divider inside the group is a rule between addons, so it takes the
			// group's own border colour rather than the page's.
			'**:[*[data-slot="separator"]]:bg-border-input-default',
			// A Tag reads as part of the frame rather than as content: square-ish
			// corners, and pulled towards the edge it sits against so its own
			// padding does not read as a second gap.
			'**:[*[data-slot="tag"]]:-ms-1 **:[*[data-slot="tag"]]:rounded-sm',
			'**:[input+[data-slot="input-group-addon"]>[data-slot="tag"]]:ms-0',
			'**:[input+[data-slot="input-group-addon"]>[data-slot="tag"]]:-me-1'
		],
		addon: [
			'flex h-auto cursor-text items-center justify-center',
			// Icons are laid out at 24px and pulled in by 4px a side: the visual
			// weight of an icon is smaller than its box, so without this it sits
			// too far from the value.
			'*:[svg]:size-6 *:[svg]:-mx-1',
			'[&_path]:fill-icon-input-default',
			'group-has-[input:disabled]:[&_path]:fill-icon-input-disable'
		],
		text: [
			'flex items-center text-sm text-text-input-placeholder',
			// Tracks the 48px control's larger type, so a prefix and the value it
			// sits beside are set at the same size.
			'group-has-[input[data-size="lg"]]:text-base',
			'group-has-[input:disabled]:text-text-input-disable'
		]
	}
});

const slots = inputGroupRecipe();

export type InputGroupRootProps = ComponentPropsWithRef<'div'> & {
	/**
	 * The group's contents, in the order they should appear: the control, with
	 * `InputGroup.Addon` and `InputGroup.Text` parts before or after it. Normally
	 * one [Input](?path=/docs/components-input--docs) — every state the frame
	 * shows is read off the `input` inside it.
	 */
	children?: ReactNode;
};

/**
 * The group's frame: the bordered box that holds a control and its addons, and
 * the part that makes the whole thing look like one control instead of a row of
 * separate boxes.
 *
 * The control has to be inside the frame — at any depth, so an extra wrapper is
 * fine — because that is where the frame reads focus, disabled, invalid and
 * height from. With more than one control inside, the frame shows the state of
 * whichever one has it, and pressing an addon focuses the first.
 *
 * @summary Bordered frame that turns a control and its addons into one control
 *
 * @example
 * <InputGroup.Root>
 * 	<InputGroup.Addon>
 * 		<IconSearch />
 * 	</InputGroup.Addon>
 * 	<Input placeholder="Search" />
 * </InputGroup.Root>
 */
export const Root = ({ className, children, ...props }: InputGroupRootProps) => (
	<div data-slot="input-group" role="group" className={cn(slots.root(), className)} {...props}>
		{children}
	</div>
);

Root.displayName = 'InputGroup.Root';

export type InputGroupAddonProps = ComponentPropsWithRef<'div'> & {
	/**
	 * What sits beside the value: an icon, a
	 * [Tag](?path=/docs/components-tag--docs), a
	 * [Button](?path=/docs/components-button--docs). For a prefix or a unit made
	 * of plain text, use `InputGroup.Text` instead — it is set at the control's
	 * own type size.
	 */
	children?: ReactNode;
	/**
	 * Fires before the addon hands focus to the control. Called on every press,
	 * including presses on a button inside the addon.
	 */
	onMouseDown?: (event: MouseEvent<HTMLDivElement>) => void;
};

/**
 * A non-text addon inside the group — an icon, a tag, a button. It sizes SVGs to
 * 24px, tints them with the control's icon colour, and greys them out when the
 * control is disabled.
 *
 * It also stands in for the control: pressing anywhere on the addon focuses the
 * control and keeps the caret where it was, which is what makes the icon beside
 * a search field feel like part of the field. A press that lands on a `button`
 * or a link inside the addon is left alone, so an addon can hold a real action.
 *
 * @summary Icon, tag or button addon that focuses the control when pressed
 *
 * @example
 * <InputGroup.Addon>
 * 	<Tag color="informative">ID</Tag>
 * </InputGroup.Addon>
 */
export const Addon = ({ className, onMouseDown, children, ...props }: InputGroupAddonProps) => {
	const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
		onMouseDown?.(event);

		// An addon can hold a real action. Focusing the control on the way to a
		// button press would move focus out from under the click.
		const target = event.target as HTMLElement;
		if (target.closest('button, a')) {
			return;
		}

		// Default-prevented so the press does not put the caret in the addon and
		// take it away from the control.
		event.preventDefault();
		const parent = event.currentTarget.parentElement;
		const control = parent?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
			'input, textarea'
		);

		if (control && !parent?.querySelector('input:focus, textarea:focus')) {
			control.focus();
		}
	};

	return (
		<div
			data-slot="input-group-addon"
			className={cn(slots.addon(), className)}
			onMouseDown={handleMouseDown}
			{...props}>
			{children}
		</div>
	);
};

Addon.displayName = 'InputGroup.Addon';

export type InputGroupTextProps = ComponentPropsWithRef<'span'> & {
	/**
	 * The prefix, suffix or unit — a currency symbol, a URL scheme, `USD`, `%`.
	 * Keep it to a few characters: it is read as part of the value's line, not as
	 * a caption, and it is not announced to a screen reader. Anything the user
	 * has to know belongs in the field's label or description.
	 */
	children?: ReactNode;
};

/**
 * A text prefix or suffix inside the group — `$`, `https://`, `USD`, `%`. Set in
 * the placeholder colour and at the control's own type size, so it reads as part
 * of the value's line without competing with what the user typed.
 *
 * Do not use it for anything the user has to read to fill the field in: it is
 * decoration, not a caption, and nothing announces it. Put that in the field's
 * label or description. For an icon, a tag or a button, use `InputGroup.Addon`.
 *
 * @summary Text prefix or suffix set in the control's own type size
 *
 * @example
 * <InputGroup.Text>USD</InputGroup.Text>
 */
export const Text = ({ className, ...props }: InputGroupTextProps) => (
	<span data-slot="input-group-text" className={cn(slots.text(), className)} {...props} />
);

Text.displayName = 'InputGroup.Text';
