import { ComponentPropsWithRef } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';
import { inputRecipe } from '../input';

/**
 * Style recipe for TextArea. Extends `inputRecipe`, so it shares Input's skin
 * and states and only trades the fixed height for a minimum one: the first row
 * measures one Input of the same size and three rows show at rest. The corner
 * handle drags vertically only, so the control can never break its column.
 *
 * @summary tailwind-variants recipe backing the TextArea component styles
 */
export const textAreaRecipe = tv({
	extend: inputRecipe,
	base: 'block resize-y',
	variants: {
		size: {
			sm: 'h-auto min-h-19 py-1',
			md: 'h-auto min-h-21 py-2',
			lg: 'h-auto min-h-24 py-2.75'
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type TextAreaVariants = VariantProps<typeof textAreaRecipe>;

/** Control size, the same three as Input. */
export type TextAreaSize = NonNullable<TextAreaVariants['size']>;

/**
 * Every `<textarea>` attribute is forwarded; the ones below are redeclared so
 * they show up in the docs and the MCP manifest.
 */
export type TextAreaProps = ComponentPropsWithRef<'textarea'> & {
	/**
	 * Defaults to `'md'`. Matches Input's sizes; the minimum height shows three
	 * rows: `sm` 76px, `md` 84px, `lg` 96px (with `text-base` and the `lg`
	 * radius).
	 */
	size?: TextAreaSize;
	/** Rows visible at rest when the three the minimum height shows are not enough. */
	rows?: number;
	/** Hint shown while empty; never a substitute for a label. */
	placeholder?: string;
	/** Caps the value in UTF-16 code units: typing stops there and a paste is cut. */
	maxLength?: number;
	/**
	 * Blocks interaction and drops the value from the submission. Use `readOnly`
	 * when the user still needs to read or copy it.
	 */
	disabled?: boolean;
	/** Focusable, copyable and submitted, but not editable. */
	readOnly?: boolean;
	/** Marks the control required for both the browser and assistive technology. */
	required?: boolean;
	/** Drives the destructive border and is what assistive technology announces. */
	'aria-invalid'?: ComponentPropsWithRef<'textarea'>['aria-invalid'];
};

/**
 * TextArea is the design system's multi-line text control. It shares Input's
 * skin, states and sizes, and pairs with
 * [Label](?path=/docs/components-label--docs) the same way.
 *
 * It renders exactly the props it is given: `id`, `aria-describedby` and
 * `aria-invalid` are wired by whoever owns the field. There is no `status`
 * prop: mark the control `aria-invalid` and the destructive border follows.
 *
 * It renders a single `<textarea>` and nothing around it, so the native resize
 * handle and the scrollbar keep working. It holds no value, so a character
 * counter belongs to whoever owns it.
 *
 * @summary Base multi-line text control sharing Input's skin, states and sizes
 *
 * @example
 * <Label htmlFor="notes">Notes</Label>
 * <TextArea id="notes" placeholder="Anything the underwriter should know" />
 *
 * @example
 * <TextArea id="reason" rows={6} maxLength={500} aria-label="Reason" />
 */
export const TextArea = (props: TextAreaProps) => {
	const { className, size, ...rest } = props;

	return (
		<textarea
			data-slot="textarea"
			data-size={size}
			className={cn(textAreaRecipe({ size }), className)}
			{...rest}
		/>
	);
};

TextArea.displayName = 'TextArea';
