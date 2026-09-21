import { ComponentPropsWithRef } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';
import { inputRecipe } from '../input';

/**
 * Extends `inputRecipe`, trading Input's fixed height for a minimum one. The
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

/** Every `<textarea>` attribute is forwarded; these are redeclared so the docs and the MCP manifest list them. */
export type TextAreaProps = ComponentPropsWithRef<'textarea'> & {
	/**
	 * Defaults to `'md'`. The first row measures one Input of the same size and
	 * three rows show at rest: `sm` 76px, `md` 84px, `lg` 96px (`lg` also raises
	 * the text to `base` and the radius to `lg`).
	 */
	size?: TextAreaSize;
	/** Rows visible at rest when three are not enough. */
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
 * TextArea is the design system's multi-line text control: Input's skin, states
 * and sizes on a single `<textarea>` with nothing around it, so the native
 * resize handle and scrollbar keep working. Pair it with
 * [Label](?path=/docs/components-label--docs) the way you pair an Input.
 *
 * It wires nothing itself — `id`, `aria-describedby` and `aria-invalid` are the
 * field owner's job, and there is no `status` prop. It holds no value either, so
 * a character counter belongs to whoever owns it.
 *
 * @summary Base multi-line text control sharing Input's skin, states and sizes
 *
 * @example
 * <Label htmlFor="notes">Notes</Label>
 * <TextArea id="notes" placeholder="Anything the underwriter should know" />
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
