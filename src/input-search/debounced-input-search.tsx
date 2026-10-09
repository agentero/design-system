'use client';

import { ChangeEvent, ChangeEventHandler, useState } from 'react';

import { useDebouncedCallback } from 'use-debounce';

import { InputSearch, InputSearchProps } from './input-search';

/**
 * Milliseconds DebouncedInputSearch waits after the last keystroke before it
 * calls `onChange`.
 *
 * @summary Debounce delay of DebouncedInputSearch, in milliseconds
 */
export const DEBOUNCE_TIME = 300;

export type DebouncedInputSearchProps = Omit<InputSearchProps, 'value' | 'onChange'> & {
	/**
	 * The query the page is filtering by. The field shows it, and follows it
	 * when it changes from outside (a reset button, a saved filter, navigation),
	 * unless the user is in the middle of typing: then what they typed stays,
	 * and `onChange` reports it once they pause.
	 */
	value: string;
	/**
	 * Fires once the user has stopped typing for `DEBOUNCE_TIME` milliseconds,
	 * with the change event of the last keystroke; clearing the field goes
	 * through the same delay. Read the text from `event.target.value`, which is
	 * what the field shows at that moment. `event.currentTarget` is no longer
	 * set by then, since the event is delivered after the browser's dispatch.
	 */
	onChange: ChangeEventHandler<HTMLInputElement>;
};

/**
 * DebouncedInputSearch is an [InputSearch](?path=/docs/components-inputsearch--docs)
 * for filters that are expensive to run: a table query, a request to the
 * server. Keystrokes show up in the field at once, but `onChange` fires only
 * once the user pauses for `DEBOUNCE_TIME` (300ms), with the last change
 * event, so the page runs one search per pause instead of one per key. It is
 * always controlled: `value` and `onChange` are required, the page owns the
 * query, and the field follows a `value` changed from outside while the user
 * is not typing.
 *
 * Every other prop goes to the InputSearch and from there to the `<input>`:
 * the `ref`, `size`, `isLoading`, `placeholder`, `aria-*` and every other
 * standard attribute. Only `type` is not accepted. `className` styles the
 * frame.
 *
 * Do not use it where every keystroke matters, such as filtering a short list
 * already in memory; that is a plain
 * [InputSearch](?path=/docs/components-inputsearch--docs). To pick a value from
 * the results, use [Combobox](?path=/docs/components-combobox--docs).
 *
 * @summary Search input that reports the query once the user pauses typing
 * @dataAttribute {string} data-slot - Always set to "input-search" on the frame
 *
 * @example
 * <DebouncedInputSearch
 *   aria-label="Search agencies"
 *   value={filters.query}
 *   onChange={event => setFilters({ ...filters, query: event.target.value })}
 *   isLoading={isFetching}
 * />
 */
export const DebouncedInputSearch = ({ value, onChange, ...props }: DebouncedInputSearchProps) => {
	const [text, setText] = useState(value);
	const [prevValue, setPrevValue] = useState(value);
	const debouncedChange = useDebouncedCallback(onChange, DEBOUNCE_TIME);

	// Follows a `value` changed from outside, but not while a change is pending:
	// the page is about to receive what the user typed and would overwrite it.
	if (value !== prevValue) {
		setPrevValue(value);
		if (!debouncedChange.isPending()) setText(value);
	}

	// React does not reuse the event object, and its `target` is the live input,
	// so when the delayed call fires `event.target.value` is what the field shows.
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
		debouncedChange(event);
	};

	return <InputSearch {...props} value={text} onChange={handleChange} />;
};

DebouncedInputSearch.displayName = 'DebouncedInputSearch';
