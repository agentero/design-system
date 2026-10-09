'use client';

import { ChangeEvent, useMemo, useRef } from 'react';

import { mergeRefs } from '../../lib';
import { Input, InputContext, InputProps, useInputContext } from '../input';
import { applyMask, getCursorPosition, getDeletionType, MASK_SYMBOL, US_PHONE_MASK } from './mask';

const removeNonDigits = (value: string): string => value.replace(/\D/g, '');

export type InputTelProps = Omit<InputProps, 'type'>;

/**
 * InputTel is a US phone number field that masks as you type: the digits the
 * user enters are laid out as `(555) 123-4567` while typing, pasting or
 * deleting, anything that is not a digit is dropped, and the caret stays next
 * to the digit just edited instead of jumping to the end. The eleventh digit
 * and beyond are ignored. `onChange` receives the native change event with the
 * masked text already in `event.target.value`, so a controlled field, an
 * uncontrolled one and one registered with react-hook-form all store
 * `(555) 123-4567`, never the bare digits.
 *
 * It is an [Input](?path=/docs/components-input--docs) of `type="tel"`, with
 * no frame of its own: put it inside an
 * [InputGroup](?path=/docs/components-inputgroup--docs) to set a `+1` prefix
 * beside it. Every standard `<input>` attribute is accepted and forwarded, such
 * as `name`, `placeholder`, `autoComplete` or `required`; only `type` is not
 * accepted. Inside a `FieldText` it takes its label, messages and states from
 * the field as a plain `Input` does, and the invalid state comes from
 * `aria-invalid`.
 *
 * Do not use it for international numbers or extensions; the mask only knows
 * the ten-digit US format. For free-form text that happens to hold a number,
 * use `Input`.
 *
 * @summary US phone input that masks as you type and reports the masked value
 * @dataAttribute {string} data-slot - Always set to "input-tel"
 *
 * @example
 * <FieldText>
 *   <Label>Phone number</Label>
 *   <InputGroup.Root>
 *     <InputGroup.Text>+1</InputGroup.Text>
 *     <InputTel name="phone" autoComplete="tel-national" />
 *   </InputGroup.Root>
 * </FieldText>
 */
export const InputTel = (props: InputTelProps) => {
	// The context is merged here, once, and the inner Input is cut off from it:
	// a handler the context provides must run after the mask, not before it.
	const { onChange, ref, ...rest } = useInputContext(props);
	const inputRef = useRef<HTMLInputElement>(null);
	const phoneBeforeInput = useRef(String(rest.value ?? rest.defaultValue ?? ''));
	const mergedRef = useMemo(() => mergeRefs(inputRef, ref), [ref]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const deletion = getDeletionType((event.nativeEvent as InputEvent).inputType);
		const { value: userInput, selectionStart } = event.target;

		const maskedValue = applyMask({
			value: removeNonDigits(userInput),
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

		phoneBeforeInput.current = userInput;
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
		<InputContext value={null}>
			<Input data-slot="input-tel" {...rest} type="tel" ref={mergedRef} onChange={handleChange} />
		</InputContext>
	);
};

InputTel.displayName = 'InputTel';
