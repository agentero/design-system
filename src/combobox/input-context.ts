'use client';

import { use } from 'react';

import { useMergeProps } from '../../lib';
import { useFieldContext } from '../field';
import { InputContext } from '../input';

// The root owns the text through its own value; a form adapter's copies would fight it.
const ROOT_OWNED_KEYS = new Set(['value', 'defaultValue', 'onChange']);

type NameProps = {
	'aria-label'?: string;
	'aria-labelledby'?: string;
};

/**
 * Merges the surrounding `InputContext` and `FieldContext` under the props of a
 * Base UI input (`Combobox.Input`, `Autocomplete.Input`). The field's `id`,
 * `aria-describedby`, `aria-invalid`, `required`, `disabled` and `readOnly`
 * reach the input; the adapter's `value`, `defaultValue` and `onChange` do not,
 * because the root owns the text.
 *
 * Inside a field it also names the input with `aria-labelledby` pointing at the
 * label. While the list is open, Base UI hides everything but the input and the
 * list from assistive technology, label included, and Chrome then drops a
 * `<label for>` from the name. A direct reference survives that. Only as a
 * default: a name the consumer gave, either way, wins.
 *
 * Internal: shared by the Base UI backed inputs, not exported from a barrel.
 */
export const useBaseInputContext = <Props extends NameProps>(props: Props) => {
	const context = use(InputContext);
	const field = useFieldContext();
	const wiring = context
		? Object.fromEntries(Object.entries(context).filter(([key]) => !ROOT_OWNED_KEYS.has(key)))
		: null;

	const named = 'aria-label' in props || 'aria-labelledby' in props;
	const labelledBy = !named && field ? { 'aria-labelledby': field.labelId } : null;

	return useMergeProps({ ...wiring, ...labelledBy } as Partial<Props> | null, props);
};
