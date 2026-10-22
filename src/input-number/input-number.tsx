'use client';

import type { ChangeEvent } from 'react';

import { NumericFormat } from 'react-number-format';

import { Input, InputContext, InputProps, useInputContext } from '../input';

// Module scope: `customInput` must be a stable component type, or
// react-number-format would remount the input on every render. Rendered under a
// null context because `InputNumber` has already merged it once, before the
// formatting; letting `Input` merge it again would run the context handlers
// twice, the first time with the raw value.
const BareInput = (props: InputProps) => (
	<InputContext value={null}>
		<Input data-slot="input-number" {...props} />
	</InputContext>
);

export type InputNumberProps = Omit<InputProps, 'type' | 'value' | 'defaultValue'> & {
	/**
	 * Highest value the field accepts. A keystroke or paste that would take
	 * the number above it is dropped before it reaches the field, so `onChange`
	 * is not called for it. No limit by default.
	 */
	maxNumber?: number;
	/**
	 * Groups the integer part in thousands with a comma as the user types
	 * (`1,234,567`). The separators are part of `event.target.value`. Defaults
	 * to `false`.
	 */
	thousandSeparator?: boolean;
	/**
	 * Keeps zeros typed in front of the number (`007`), which an identifier
	 * such as an NPN or a ZIP code needs. Set it to `false` for an amount, so
	 * `007` becomes `7` once the field loses focus, and `onChange` fires with
	 * the trimmed value. Defaults to `true`.
	 */
	allowLeadingZeros?: boolean;
	/**
	 * The underlying `<input>` type. Defaults to `'text'`. The keypad on mobile
	 * devices follows `inputMode`, not the type.
	 * - `text` — the general case.
	 * - `tel` — for codes and identifiers that are digits only.
	 * - `password` — masks the digits, for a PIN.
	 */
	type?: 'password' | 'tel' | 'text';
	/**
	 * The number to show, as a number or as a string of digits. It is displayed
	 * formatted according to `thousandSeparator`. `null` and `''` both clear the
	 * field.
	 */
	value?: number | string | null;
	/** Initial value of an uncontrolled field, in the same forms as `value`. */
	defaultValue?: number | string | null;
};

/**
 * InputNumber is a text field that only takes digits and a decimal point and
 * formats them as the user types: a thousands separator when
 * `thousandSeparator` is set, leading zeros kept unless `allowLeadingZeros` is
 * off, no sign, no decimal rounding.
 * Anything that is not a digit or the decimal point is ignored, and
 * `maxNumber` drops any edit that would exceed it. `onChange` fires with the
 * formatted text in `event.target.value` (`"1,234"`, not `1234`), which is
 * what a form library stores; parse it where the number is consumed.
 *
 * On mobile devices it brings up a keypad that fits the field:
 * `inputMode="decimal"`, which has a decimal key, when `thousandSeparator` is
 * set, since that marks an amount, and `inputMode="numeric"` otherwise, for an
 * identifier such as an NPN or a ZIP code. An `inputMode` passed in overrides the choice.
 *
 * It is an [Input](?path=/docs/components-input--docs) driven by
 * `react-number-format`, so it keeps the caret in place while it reformats
 * and takes its wiring from a surrounding `FieldText` as a plain `Input`
 * does. Every standard `<input>` attribute is accepted and forwarded, such as
 * `placeholder`, `required`, `maxLength` or `aria-invalid`; `type` is limited
 * to `text`, `tel` and `password`, and `value` and `defaultValue` also take a
 * number or `null`. The invalid state comes from `aria-invalid`, which paints
 * the destructive border. Place it inside an
 * [InputGroup](?path=/docs/components-inputgroup--docs) to show a currency or
 * unit affix.
 *
 * Do not use it for a phone number, which is formatted by `InputTel`, nor for
 * free text with some digits in it, which is a plain `Input`. It is not a
 * `type="number"` input on purpose: that one drops leading zeros and cannot
 * show separators, which identifiers and amounts both need.
 *
 * It renders from `value`, not from the DOM, so bind it to a form through a
 * controlled value (react-hook-form's `Controller` or `useController`), not
 * through `register`: a value `register` writes into the `<input>`, such as a
 * default or a `reset`, is wiped on the next render.
 *
 * @summary Numeric input formatting as you type, built on react-number-format
 * @dataAttribute {string} data-slot - Always set to "input-number"
 *
 * @example
 * <FieldText>
 *   <Label>Annual premium</Label>
 *   <InputNumber name="premium" thousandSeparator allowLeadingZeros={false} />
 * </FieldText>
 */
export const InputNumber = (props: InputNumberProps) => {
	const {
		ref,
		maxNumber,
		thousandSeparator = false,
		allowLeadingZeros = true,
		onChange,
		...rest
	} = useInputContext(props);

	return (
		<NumericFormat
			inputMode={thousandSeparator ? 'decimal' : 'numeric'}
			{...rest}
			customInput={BareInput}
			getInputRef={ref}
			thousandSeparator={thousandSeparator}
			allowLeadingZeros={allowLeadingZeros}
			allowNegative={false}
			onChange={onChange}
			// On blur react-number-format drops leading zeros and clears a value
			// with no digits, but reports it through `onValueChange` only and leaves
			// the DOM stale until it re-renders. Write the value to the input and
			// replay it as a change, so `onChange` and the `onBlur` that follows
			// both see what the field shows.
			onValueChange={({ formattedValue }, { event, source }) => {
				if (source !== 'event' || event?.type !== 'blur') return;
				const input = event.target as HTMLInputElement;
				input.value = formattedValue;
				onChange?.(
					Object.assign(Object.create(event), event, {
						type: 'change'
					}) as ChangeEvent<HTMLInputElement>
				);
			}}
			isAllowed={({ floatValue }) =>
				maxNumber === undefined || floatValue === undefined || floatValue <= maxNumber
			}
		/>
	);
};

InputNumber.displayName = 'InputNumber';
