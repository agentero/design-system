'use client';

import { ChangeEvent, FocusEvent, useMemo, useRef } from 'react';

import { mergeRefs } from '../../lib';
import { Input, InputContext, InputProps, useInputContext } from '../input';
import { InputGroup } from '../input-group';
import {
	applyMask,
	getCursorPosition,
	getDeletionType,
	MASK_SYMBOL,
	toNationalDigits,
	US_PHONE_MASK
} from './mask';

export type InputTelProps = Omit<InputProps, 'type'>;

/**
 * InputTel is a US phone number field that masks as you type: the digits the
 * user enters are laid out as `(555) 123-4567` while typing, pasting or
 * deleting, anything that is not a digit is dropped, and the caret stays next
 * to the digit just edited instead of jumping to the end. A leading `+1`
 * country code, as pasted or filled in by the browser's autofill, is dropped
 * too; past that, the eleventh digit and beyond are ignored. `onChange`
 * receives the native change event with the masked text already in
 * `event.target.value`, so a controlled field, an uncontrolled one and one
 * registered with react-hook-form all store `(555) 123-4567`, never the bare
 * digits.
 *
 * It is an [Input](?path=/docs/components-input--docs) of `type="tel"` inside
 * an [InputGroup](?path=/docs/components-inputgroup--docs) frame that always
 * shows a `+1` prefix in front of the number. The prefix is part of the frame,
 * not of the value. `className` styles the frame. Every other prop goes to the
 * `<input>`: the `ref`, `id`, `name`, `value`, `onChange`, `aria-*` and every
 * other standard attribute, such as `placeholder`, `autoComplete` or
 * `required`. Only `type` is not accepted. Inside a `FieldText` the input
 * takes its label, messages and states from the field as a plain `Input` does.
 * The invalid state comes from `aria-invalid`, and the frame paints the
 * destructive border.
 *
 * Do not use it for international numbers or extensions; the mask only knows
 * the ten-digit US format. For free-form text that happens to hold a number,
 * use `Input`.
 *
 * @summary US phone input with a +1 prefix that masks as you type
 * @dataAttribute {string} data-slot - Always set to "input-tel" on the frame
 *
 * @example
 * <FieldText>
 *   <Label>Phone number</Label>
 *   <InputTel name="phone" autoComplete="tel-national" placeholder="(555) 000-0000" />
 * </FieldText>
 */
export const InputTel = (props: InputTelProps) => {
	// The context is merged here, once, and the inner Input is cut off from it:
	// a handler the context provides must run after the mask, not before it.
	const { className, onChange, onFocus, ref, ...rest } = useInputContext(props);
	const inputRef = useRef<HTMLInputElement>(null);
	const phoneBeforeInput = useRef('');
	const mergedRef = useMemo(() => mergeRefs(inputRef, ref), [ref]);

	// Read on focus rather than from props: react-hook-form's `register` and
	// `reset` write the value straight into the DOM, behind React's back.
	const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
		phoneBeforeInput.current = event.target.value;
		onFocus?.(event);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const deletion = getDeletionType((event.nativeEvent as InputEvent).inputType);
		const { value: userInput, selectionStart } = event.target;

		const maskedValue = applyMask({
			value: toNationalDigits(userInput),
			mask: US_PHONE_MASK,
			maskSymbol: MASK_SYMBOL,
			trimNonMaskCharsLeftover: deletion === 'backward'
		});

		const newCursorPosition = getCursorPosition({
			cursorPositionAfterInput: selectionStart ?? 0,
			phoneBeforeInput: phoneBeforeInput.current,
			phoneAfterInput: userInput,
			phoneAfterFormatted: maskedValue,
			deletion
		});

		phoneBeforeInput.current = maskedValue;
		event.target.value = maskedValue;

		if (onChange) {
			onChange(event);
			// The caret has to move after the controlling state has re-rendered the
			// masked value; a 0ms timeout misses keys pressed together. The focus
			// check keeps Safari from focusing the input on `setSelectionRange`.
			Promise.resolve().then(() => {
				const input = inputRef.current;
				if (!input || input !== document.activeElement) return;
				input.setSelectionRange(newCursorPosition, newCursorPosition);
			});
		} else {
			event.target.setSelectionRange(newCursorPosition, newCursorPosition);
		}
	};

	return (
		<InputGroup.Root data-slot="input-tel" className={className}>
			<InputGroup.Text>+1</InputGroup.Text>
			<InputContext value={null}>
				<Input {...rest} type="tel" ref={mergedRef} onFocus={handleFocus} onChange={handleChange} />
			</InputContext>
		</InputGroup.Root>
	);
};

InputTel.displayName = 'InputTel';
