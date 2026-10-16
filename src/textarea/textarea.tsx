'use client';

import {
	ComponentPropsWithRef,
	useCallback,
	useId,
	useLayoutEffect,
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
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

/**
 * The count `TextArea` shows under its box when it has `maxLength`,
 * right-aligned like the helper text's row in Figma.
 *
 * @summary tailwind-variants recipe backing the TextArea character count
 */
export const textAreaCounterRecipe = tv({
	base: [
		'mt-2 flex justify-end',
		'text-sm leading-normal tabular-nums text-text-input-placeholder',
		'group-has-[textarea:disabled]/textarea:text-text-input-disable',
		'group-has-[textarea[aria-invalid=true]]/textarea:text-text-input-destructive',
		'data-over:text-text-input-destructive'
	]
});

/**
 * The layer a `TextArea` lays over itself once the value passes `maxLength`:
 * it paints the whole text, the characters over the limit in red, while the
 * textarea's own text turns transparent and keeps the caret and selection. The
 * textarea never shows through, so scrolling, which the layer follows a frame
 * late, cannot flash the red characters dark.
 *
 * @summary tailwind-variants recipe backing the TextArea over-limit highlight
 */
export const textAreaOverflowRecipe = tv({
	slots: {
		// Hidden until it has been measured, so a server render never shows it misplaced.
		root: 'pointer-events-none invisible absolute box-border overflow-hidden border-0 data-ready:visible',
		within: [
			'text-text-input-normal',
			'group-has-[textarea:disabled]/textarea:text-text-input-disable'
		],
		over: 'text-text-input-destructive'
	}
});

// The layer must wrap and scroll exactly like the textarea it covers.
const MIRRORED = [
	'paddingTop',
	'paddingRight',
	'paddingBottom',
	'paddingLeft',
	'direction',
	'textAlign',
	'textTransform',
	'fontFamily',
	'fontSize',
	'fontStyle',
	'fontVariant',
	'fontWeight',
	'lineHeight',
	'letterSpacing',
	'wordSpacing',
	'textIndent',
	'tabSize',
	'whiteSpace',
	'overflowWrap',
	'wordBreak'
] as const;

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
 * except `maxLength` is forwarded, so `placeholder`, `required`, `disabled`,
 * `readOnly` and the rest work as in plain HTML; `rows` raises the resting
 * height when three rows are not enough.
 *
 * `maxLength` is a soft limit and is not forwarded, since the native attribute
 * would stop typing. It shows a `12/500` count under the box, right-aligned and
 * announced through the textarea's `aria-describedby` rather than on every
 * keystroke. Past the limit the user keeps typing: the extra characters and
 * the count turn destructive, and rejecting a longer value is the form's
 * validation. The count is destructive when the field is invalid too. The box
 * and its count are stacked in a `data-slot="textarea-root"` wrapper that
 * fills its container, so size a counted TextArea from its container rather
 * than through `className`; `FieldTextArea` lays the count beside the
 * description or error instead.
 * Without `maxLength` the wrapper is `display: contents`, and `className` and
 * every other prop always go to the `<textarea>`.
 *
 * The count follows `value` when the text area is controlled; uncontrolled, it
 * follows typing, a native form reset and any rewrite followed by a render. A
 * form library that writes the value without rendering (react-hook-form's
 * `setValue` on a registered field) needs the value controlled for the count
 * to follow.
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
	const counterId = `${useId()}-count`;
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const mergedRef = useMemo(() => mergeRefs(textareaRef, ref), [ref]);

	const counter = maxLength !== undefined;
	const controlled = rest.value != null;

	const subscribe = useCallback(
		(onChange: () => void) => {
			const textarea = textareaRef.current;
			const form = textarea?.form;
			if (!counter || controlled || !textarea) return () => {};

			// `reset` fires before the form restores the values.
			const onReset = () => setTimeout(onChange);
			textarea.addEventListener('input', onChange);
			form?.addEventListener('reset', onReset);
			return () => {
				textarea.removeEventListener('input', onChange);
				form?.removeEventListener('reset', onReset);
			};
		},
		[counter, controlled]
	);
	const initialValue = String(rest.defaultValue ?? '');
	const domValue = useSyncExternalStore(
		subscribe,
		() => textareaRef.current?.value ?? initialValue,
		() => initialValue
	);

	const value = controlled ? String(rest.value) : domValue;
	const length = value.length;
	const over = counter && length > maxLength;
	const overflowRef = useRef<HTMLSpanElement>(null);
	// Copies the textarea's layout onto the layer, reading every style before
	// writing any, so it wraps and scrolls exactly like the text it covers.
	const syncOverflow = useCallback(() => {
		const textarea = textareaRef.current;
		const layer = overflowRef.current;
		if (!textarea || !layer) return;

		const style = getComputedStyle(textarea);
		const values = MIRRORED.map(property => style[property]);
		// The layer covers the textarea's client area, wherever its scrollbars sit.
		const { offsetTop, offsetLeft, clientTop, clientLeft, clientWidth, clientHeight } = textarea;
		const { scrollTop, scrollLeft } = textarea;

		MIRRORED.forEach((property, index) => (layer.style[property] = values[index] ?? ''));
		layer.style.top = `${offsetTop + clientTop}px`;
		layer.style.left = `${offsetLeft + clientLeft}px`;
		layer.style.width = `${clientWidth}px`;
		layer.style.height = `${clientHeight}px`;
		layer.dataset.ready = '';
		layer.scrollTop = scrollTop;
		layer.scrollLeft = scrollLeft;
	}, []);

	// A class, size or value change can move the text, so every render re-syncs.
	useLayoutEffect(() => {
		if (over) syncOverflow();
	});

	useLayoutEffect(() => {
		const textarea = textareaRef.current;
		if (!over || !textarea) return;

		const onScroll = () => {
			const layer = overflowRef.current;
			if (!layer) return;
			layer.scrollTop = textarea.scrollTop;
			layer.scrollLeft = textarea.scrollLeft;
		};
		const observer = new ResizeObserver(syncOverflow);
		observer.observe(textarea);
		if (textarea.parentElement) observer.observe(textarea.parentElement);
		textarea.addEventListener('scroll', onScroll);
		document.fonts?.addEventListener('loadingdone', syncOverflow);
		return () => {
			observer.disconnect();
			textarea.removeEventListener('scroll', onScroll);
			document.fonts?.removeEventListener('loadingdone', syncOverflow);
		};
	}, [over, syncOverflow]);

	// Splits on a whole character, so an emoji across the limit is never cut in two.
	const highSurrogate = /[\uD800-\uDBFF]/.test(value.charAt((maxLength ?? 0) - 1));
	const split = (maxLength ?? 0) - (highSurrogate ? 1 : 0);
	const overflowStyles = textAreaOverflowRecipe();

	return (
		<span
			data-slot="textarea-root"
			className={cn('group/textarea', counter ? 'flex w-full flex-col' : 'contents')}>
			<span data-slot="textarea-box" className={counter ? 'relative block' : 'contents'}>
				<textarea
					ref={mergedRef}
					data-slot="textarea"
					data-size={size}
					className={cn(
						textAreaRecipe({ size }),
						// While the layer paints the text, the textarea keeps only its caret and
						// selection, and its colour never fades, so the swap is instant.
						counter && 'transition-[box-shadow,outline-color,outline-offset,outline-width]',
						'group-has-[[data-slot=textarea-overflow][data-ready]]/textarea:text-transparent',
						'group-has-[[data-slot=textarea-overflow][data-ready]]/textarea:caret-text-input-normal',
						'group-has-[[data-slot=textarea-overflow][data-ready]]/textarea:selection:text-transparent',
						'group-has-[[data-slot=textarea-overflow][data-ready]]/textarea:selection:bg-[Highlight]',
						className
					)}
					aria-describedby={counter ? describedByWith(describedBy, counterId) : describedBy}
					{...rest}
				/>
				{over && (
					<span
						ref={overflowRef}
						aria-hidden
						data-slot="textarea-overflow"
						className={overflowStyles.root()}>
						<span className={overflowStyles.within()}>{value.slice(0, split)}</span>
						<span data-over className={overflowStyles.over()}>
							{value.slice(split)}
						</span>
						{/* Keeps a trailing line break as tall as the textarea's. */}
						{'\u200b'}
					</span>
				)}
			</span>
			{counter && (
				<>
					<span
						aria-hidden
						data-slot="textarea-counter"
						data-over={length > maxLength || undefined}
						className={textAreaCounterRecipe()}>
						{length}/{maxLength}
					</span>
					{/* Hidden, so it reaches the description but never the name of a wrapping label. */}
					<span id={counterId} hidden>
						{length > maxLength
							? `${length - maxLength} characters over the limit of ${maxLength}`
							: `${length} of ${maxLength} characters`}
					</span>
				</>
			)}
		</span>
	);
};

TextArea.displayName = 'TextArea';
