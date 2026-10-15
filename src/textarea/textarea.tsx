'use client';

import {
	ComponentPropsWithRef,
	useCallback,
	useId,
	useMemo,
	useRef,
	useSyncExternalStore
} from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn, mergeRefs } from '../../lib';
import { inputRecipe } from '../input';
import { useTextAreaContext } from './context';

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
		},
		// Without the scroll padding, typing leaves the caret's line under the count.
		counter: {
			true: 'peer pb-7 scroll-pb-7'
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

const counterClassName = [
	'pointer-events-none absolute right-4 bottom-2 text-xs leading-normal tabular-nums',
	'text-text-input-placeholder peer-disabled:text-text-input-disable',
	'data-over:text-text-input-destructive'
];

export type TextAreaVariants = VariantProps<typeof textAreaRecipe>;

/** Control size, the same three as Input. */
export type TextAreaSize = NonNullable<TextAreaVariants['size']>;

export type TextAreaProps = ComponentPropsWithRef<'textarea'> & {
	/**
	 * Defaults to `'md'`. The first row measures one Input of the same size and
	 * three rows show at rest: `sm` 76px, `md` 84px, `lg` 96px (`lg` also raises
	 * the text to `base` and the radius to `lg`).
	 */
	size?: TextAreaSize;
	/**
	 * Caps the value natively and shows the count inside the box, bottom right
	 * (`12/500`), announced with the control as "12 of 500 characters".
	 */
	maxLength?: number;
};

const describedByWith = (describedBy: string | undefined, id: string) =>
	describedBy ? `${describedBy} ${id}` : id;

/**
 * TextArea is the design system's multi-line text control: Input's skin, states
 * and sizes on a `<textarea>`, so the native resize handle and scrollbar keep
 * working. Pair it with [Label](?path=/docs/components-label--docs) the way you
 * pair an Input.
 *
 * When a container provides `TextAreaContext`, the text area takes its wiring
 * (`id`, `aria-describedby`, `aria-invalid`, `required`, `disabled`,
 * `readOnly`) from it, and its own props win; `FieldTextArea` is one such
 * container. Standalone, `id`, `aria-describedby` and `aria-invalid` are the
 * field owner's job. The invalid state has no prop of its own: `aria-invalid`
 * drives the destructive border, the same as Input. Every `<textarea>` attribute
 * is accepted and forwarded, so `placeholder`, `required`, `disabled`,
 * `readOnly` and the rest work as in plain HTML; `rows` raises the resting
 * height when three rows are not enough.
 *
 * With `maxLength` it also counts: a `12/500` in the box's bottom-right
 * corner, joined to the control's `aria-describedby` rather than announced on
 * every keystroke. The `<textarea>` always sits in a `data-slot="textarea-root"`
 * wrapper, which only takes part in layout when there is a count: then it fills
 * its container, so size a counted control from its parent. `className` and
 * every other prop go to the `<textarea>`. The count follows `value` when the
 * text area is controlled; uncontrolled, it follows typing, a native form
 * reset and any rewrite followed by a render. A form library that writes the
 * value without rendering (react-hook-form's `setValue` on a registered field)
 * needs the value controlled for the count to follow.
 *
 * @summary Base multi-line text control sharing Input's skin, states and sizes
 *
 * @example
 * <Label htmlFor="notes">Notes</Label>
 * <TextArea id="notes" maxLength={500} placeholder="Anything the underwriter should know" />
 */
export const TextArea = (props: TextAreaProps) => {
	const {
		className,
		size,
		maxLength,
		ref,
		'aria-describedby': describedBy,
		...rest
	} = useTextAreaContext(props);
	const counterId = useId();
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const mergedRef = useMemo(() => mergeRefs(textareaRef, ref), [ref]);

	// The DOM is the source of an uncontrolled count: typing notifies through
	// `input`, a native form reset through the form's `reset` (which fires before
	// the values are restored), and any other rewrite is read on the next render.
	const subscribe = useCallback((onChange: () => void) => {
		const textarea = textareaRef.current;
		const form = textarea?.form;
		const onReset = () => setTimeout(onChange);
		textarea?.addEventListener('input', onChange);
		form?.addEventListener('reset', onReset);
		return () => {
			textarea?.removeEventListener('input', onChange);
			form?.removeEventListener('reset', onReset);
		};
	}, []);
	const initialLength = String(rest.defaultValue ?? '').length;
	const domLength = useSyncExternalStore(
		subscribe,
		() => textareaRef.current?.value.length ?? initialLength,
		() => initialLength
	);

	const counter = maxLength !== undefined;
	const length = rest.value != null ? String(rest.value).length : domLength;

	return (
		<div data-slot="textarea-root" className={counter ? 'relative w-full' : 'contents'}>
			<textarea
				ref={mergedRef}
				data-slot="textarea"
				data-size={size}
				className={cn(textAreaRecipe({ size, counter }), className)}
				maxLength={maxLength}
				aria-describedby={counter ? describedByWith(describedBy, counterId) : describedBy}
				{...rest}
			/>
			{counter && (
				<p
					id={counterId}
					data-slot="textarea-counter"
					data-over={length > maxLength || undefined}
					className={cn(counterClassName)}>
					<span aria-hidden>
						{length}/{maxLength}
					</span>
					<span className="sr-only">
						{length} of {maxLength} characters
					</span>
				</p>
			)}
		</div>
	);
};

TextArea.displayName = 'TextArea';
