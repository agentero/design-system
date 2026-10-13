'use client';

import { ChangeEvent, use, useMemo, useRef, useState } from 'react';

import { tv } from 'tailwind-variants';

import { chain, mergeRefs } from '../../lib';
import { Input, InputContext, InputProps } from '../input';
import { InputGroup } from '../input-group';
import { Loading } from '../loading';
import { IconCancel, IconSearch } from './icons';

/**
 * Style recipe for InputSearch. Slots: `input` (hides the browser's own
 * cancel button and search decoration, so the field shows only the clear
 * button it draws) and `clear` (the clear button, the same 24px icon button
 * as the Combobox clear, removed while the input is disabled).
 *
 * @summary tailwind-variants recipe backing the InputSearch input and clear button
 */
export const inputSearchRecipe = tv({
	slots: {
		input:
			'[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none',
		clear: [
			'flex size-6 shrink-0 cursor-pointer items-center justify-center self-center rounded-sm',
			'[&>svg>path]:fill-icon-input-default hover:[&>svg>path]:fill-icon-default-base-primary',
			'focus-visible:outline-2 focus-visible:outline-border-input-focus',
			'disabled:cursor-default disabled:[&>svg>path]:fill-icon-input-disable',
			'group-has-[input:disabled]/input-group:hidden'
		]
	}
});

const slots = inputSearchRecipe();

const isFilled = (value: InputProps['value']) => value !== undefined && String(value) !== '';

export type InputSearchProps = Omit<InputProps, 'type'> & {
	/**
	 * Shows a spinner at the end of the frame, in place of the clear button,
	 * while the results for the current text are on their way. Defaults to
	 * `false`.
	 */
	isLoading?: boolean;
	/**
	 * Accessible name of the clear button. Defaults to `'Clear search'`; name it
	 * after what is searched (`'Clear agency search'`) when a page carries
	 * several search fields.
	 */
	clearLabel?: string;
};

/**
 * InputSearch is a search field: a magnifier in front of the text and, once
 * there is text, a clear button after it, named "Clear search" unless
 * `clearLabel` says otherwise. The clear button empties the field
 * and puts focus back in it, and it reports the change through `onChange` like
 * a keystroke would: a real change event whose `event.target.value` is `''`,
 * so a controlled field, an uncontrolled one and one registered with
 * react-hook-form all clear the same way. While `isLoading` is set, a spinner
 * takes the clear button's place. The clear button is not rendered while the
 * input is disabled, whether `disabled` comes from the prop, from a
 * surrounding `FieldText` or from a `<fieldset disabled>`.
 *
 * It is an [Input](?path=/docs/components-input--docs) of `type="search"`
 * inside an [InputGroup](?path=/docs/components-inputgroup--docs) frame, so
 * it is announced as a search box. `className` styles the frame. Every other
 * prop goes to the `<input>`: the `ref`, `id`, `name`, `value`, `onChange`,
 * `aria-*` and every other standard attribute. Only `type` is not accepted.
 * `placeholder` defaults to `'Search'`. Inside a `FieldText` the input takes
 * its label, messages and states from the field as a plain `Input` does. The
 * invalid state comes from `aria-invalid`, and the frame paints the
 * destructive border.
 *
 * Do not use it to pick a value from a list; that is
 * [Combobox](?path=/docs/components-combobox--docs), whose `search` field is
 * drawn by InputSearch. For a filter that should
 * run only once the user pauses typing, use `DebouncedInputSearch`.
 *
 * @summary Search input with a leading icon, a clear button and a loading slot
 * @dataAttribute {string} data-slot - Always set to "input-search" on the frame
 *
 * @example
 * <InputSearch
 *   aria-label="Search agencies"
 *   value={query}
 *   onChange={event => setQuery(event.target.value)}
 *   isLoading={isFetching}
 * />
 */
export const InputSearch = ({
	className,
	isLoading = false,
	clearLabel = 'Clear search',
	placeholder = 'Search',
	ref,
	onChange,
	...props
}: InputSearchProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const contextValue = use(InputContext)?.value;
	const [hasText, setHasText] = useState(() => isFilled(props.defaultValue));

	// A value set on the input itself or handed down by a container wins over
	// what the user has typed so far, which only an uncontrolled field tracks.
	const value = props.value !== undefined ? props.value : contextValue;
	const showClear = value !== undefined ? isFilled(value) : hasText;

	const trackValue = (event: ChangeEvent<HTMLInputElement>) =>
		setHasText(event.target.value !== '');

	// Runs after the consumer's ref, so a value written straight into the DOM on
	// mount (react-hook-form's `register` with `defaultValues`) shows the clear
	// button too.
	const mergedRef = useMemo(
		() =>
			mergeRefs(inputRef, ref, (node: HTMLInputElement | null) => {
				if (node) setHasText(node.value !== '');
			}),
		[ref]
	);

	// Writes through the native setter and dispatches an `input` event, so React
	// sees a real change and calls every `onChange` (own, context, register's)
	// with `event.target.value === ''`.
	const clear = () => {
		const input = inputRef.current;
		if (!input) return;

		Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, '');
		input.dispatchEvent(new Event('input', { bubbles: true }));
		input.focus();
	};

	return (
		<InputGroup.Root data-slot="input-search" className={className}>
			<InputGroup.Addon>
				<IconSearch />
			</InputGroup.Addon>
			<Input
				ref={mergedRef}
				type="search"
				placeholder={placeholder}
				{...props}
				className={slots.input()}
				onChange={chain(trackValue, onChange)}
			/>
			{isLoading ? (
				<InputGroup.Addon>
					<Loading size="sm" />
				</InputGroup.Addon>
			) : (
				showClear && (
					<InputGroup.Addon>
						<button type="button" className={slots.clear()} aria-label={clearLabel} onClick={clear}>
							<IconCancel />
						</button>
					</InputGroup.Addon>
				)
			)}
		</InputGroup.Root>
	);
};

InputSearch.displayName = 'InputSearch';
