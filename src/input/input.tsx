import { ComponentPropsWithRef } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for Input. Single-element recipe with a `size` variant; the
 * invalid treatment is driven entirely by the `aria-invalid` attribute so the
 * visual state can never drift from what assistive technology announces.
 *
 * @summary tailwind-variants recipe backing the Input component styles
 */
export const inputRecipe = tv({
	base: [
		'box-border w-full min-w-0 appearance-none rounded-md px-4 shadow-sm',
		'border border-solid border-border-input-default bg-bg-input-normal text-text-input-normal',
		'placeholder:text-text-input-placeholder placeholder-shown:text-ellipsis',
		// A transparent zero-width outline sits under the focus ring so the ring
		// animates in rather than popping. Focus draws it *inside* the border
		// (negative offset), which reads as the border thickening rather than as
		// a detached halo.
		'outline-0 -outline-offset-1 outline-[transparent]',
		'transition-[color,box-shadow,outline-color,outline-offset,outline-width] duration-75',
		'focus-visible:border-border-input-focus focus-visible:outline-border-input-focus',
		'focus-visible:outline-[0.125rem] focus-visible:outline-offset-[-0.0625rem]',
		'aria-invalid:border-border-input-destructive',
		'aria-invalid:focus-visible:border-border-input-destructive',
		'aria-invalid:focus-visible:outline-border-input-destructive',
		'disabled:cursor-default disabled:border-border-input-disable disabled:bg-bg-input-disable',
		'disabled:text-text-input-disable disabled:shadow-none',
		'disabled:placeholder:text-text-input-disable'
	],
	variants: {
		size: {
			sm: 'h-8 text-sm',
			md: 'h-10 text-sm',
			lg: 'h-12 rounded-lg text-base'
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type InputVariants = VariantProps<typeof inputRecipe>;

/** Control height. See the `size` prop for when to reach for each one. */
export type InputSize = NonNullable<InputVariants['size']>;

/**
 * Every standard `<input>` attribute is accepted and forwarded. The handful
 * redeclared below are the ones worth documenting: they are what most callers
 * reach for, and `react-docgen` does not expand native attributes, so without
 * this they would be invisible in the docs and the MCP manifest.
 */
export type InputProps = Omit<ComponentPropsWithRef<'input'>, 'size'> & {
	/**
	 * Control height. Defaults to `'md'`.
	 * - `sm` (32px) — dense layouts where vertical space is tight.
	 * - `md` (40px) — standard form density.
	 * - `lg` (48px) — low-density forms and larger touch targets. Also raises
	 *   the text to `base` and the corner radius to `lg`.
	 */
	size?: InputSize;
	/**
	 * Native input type. Picks the on-screen keyboard on touch devices and the
	 * browser's own parsing, so set it even when you validate yourself.
	 * Defaults to `'text'`. Multi-line text is not one of the options — that is
	 * a TextArea.
	 */
	type?: ComponentPropsWithRef<'input'>['type'];
	/**
	 * Short hint shown while the field is empty. It disappears on the first
	 * keystroke, so it is never a substitute for a label.
	 */
	placeholder?: string;
	/**
	 * Blocks interaction, greys the control out and drops its shadow. The value
	 * is not submitted. When the user still needs to read or copy the value,
	 * use `readOnly` instead.
	 */
	disabled?: boolean;
	/**
	 * Keeps the value focusable and copyable but not editable, and still
	 * submits it. Unlike `disabled`, it stays in the tab order.
	 */
	readOnly?: boolean;
	/** Marks the control required for both the browser and assistive technology. */
	required?: boolean;
	/**
	 * Set this when the value fails validation: it drives the destructive border
	 * and is what assistive technology announces. Point `aria-describedby` at
	 * the error message so the two are read together.
	 */
	'aria-invalid'?: ComponentPropsWithRef<'input'>['aria-invalid'];
};

/**
 * Input is the design system's base single-line text control. Reach for it
 * whenever a form collects free text, and pair it with
 * [Label](?path=/docs/components-label--docs) so the control has an accessible
 * name.
 *
 * It is deliberately self-contained: it renders the props it is given and
 * knows nothing about form fields, form libraries, or surrounding layout.
 * Wiring (`id`, `aria-invalid`, `aria-describedby`) arrives as plain props, so
 * a field wrapper can inject them and standalone usage can set them by hand.
 * There is no `status` prop — mark the control `aria-invalid` and the
 * destructive border follows.
 *
 * Do not use Input for multi-line text; that is TextArea's job. It also has no
 * slots for leading or trailing addons — an input with a currency prefix or a
 * unit suffix belongs in an input group, not here.
 *
 * @summary Base single-line text control, unaware of fields and form libraries
 *
 * @example
 * <Label htmlFor="email">Email</Label>
 * <Input id="email" type="email" placeholder="you@example.com" />
 *
 * @example
 * <Input id="email" aria-invalid aria-describedby="email-error" />
 * <span id="email-error">Enter a valid email address.</span>
 */
export const Input = ({ className, size, ...props }: InputProps) => (
	<input
		data-slot="input"
		data-size={size}
		className={cn(inputRecipe({ size }), className)}
		{...props}
	/>
);

Input.displayName = 'Input';
