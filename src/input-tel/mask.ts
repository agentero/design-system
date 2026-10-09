/** The US phone mask InputTel applies: three groups of 3, 3 and 4 digits. */
export const US_PHONE_MASK = '(...) ...-....';

/** The character that marks a digit slot in a mask. */
export const MASK_SYMBOL = '.';

type ApplyMaskArgs = {
	value: string;
	mask: string;
	maskSymbol: string;

	/**
	 * @description Removes all non-maskSymbol chars from the result's ending if the value is shorter than the mask
	 * @example
	 * value: "1234"
	 * mask: "(....) ...."
	 * if true -> "(1234"
	 * if false -> "(1234) "
	 */
	trimNonMaskCharsLeftover?: boolean;
};

/**
 * Places each character of `value` in the next `maskSymbol` slot of `mask`,
 * keeping the mask's own characters in between. A value longer than the mask
 * is cut; a shorter one stops at its last character, followed by the
 * separators up to the next slot unless `trimNonMaskCharsLeftover` is set.
 */
export const applyMask = ({
	value,
	mask,
	maskSymbol,
	trimNonMaskCharsLeftover = false
}: ApplyMaskArgs): string => {
	if (!value) return '';

	let result = '';
	let charsPlaced = 0;

	for (const maskChar of mask.split('')) {
		if (charsPlaced >= value.length) {
			if (!trimNonMaskCharsLeftover && maskChar !== maskSymbol) {
				result += maskChar;
				continue;
			}
			break;
		}
		if (maskChar === maskSymbol) {
			result += value[charsPlaced];
			charsPlaced += 1;
		} else {
			result += maskChar;
		}
	}

	return result;
};

export const isNumeric = (str?: string) => {
	if (!str) return false;

	return /^\d+$/.test(str);
};

type GetCursorPositionProps = {
	phoneBeforeInput: string;
	phoneAfterInput: string;
	phoneAfterFormatted: string;
	cursorPositionAfterInput: number;
	deletion?: 'forward' | 'backward' | undefined;
};

/**
 * Finds where the caret should sit in the formatted phone after an edit, so
 * that it stays after the digit the user just typed or removed instead of
 * jumping to the end when the mask characters move around it.
 */
export const getCursorPosition = ({
	phoneBeforeInput,
	phoneAfterInput,
	phoneAfterFormatted,
	cursorPositionAfterInput,
	deletion
}: GetCursorPositionProps) => {
	if (!phoneBeforeInput) {
		return phoneAfterFormatted.length;
	}

	let afterInputPointIndex: number | null = null;

	// iterate from right to left and get first digit char
	for (let index = cursorPositionAfterInput - 1; index >= 0; index -= 1) {
		if (isNumeric(phoneAfterInput[index])) {
			afterInputPointIndex = index;
			break;
		}
	}

	if (afterInputPointIndex === null) {
		for (let index = 0; index < phoneAfterInput.length; index += 1) {
			if (isNumeric(phoneAfterFormatted[index])) {
				return index;
			}
		}

		return phoneAfterInput.length;
	}

	// find "digit index" of new char (only digits count)
	let digitIndex = 0;
	for (let index = 0; index < afterInputPointIndex; index += 1) {
		if (isNumeric(phoneAfterInput[index])) {
			digitIndex += 1;
		}
	}

	// find cursor position by going over digits until we get digitIndex
	let cursorPosition = 0;
	let digitsCounter = 0;
	for (let index = 0; index < phoneAfterFormatted.length; index += 1) {
		cursorPosition += 1;

		if (isNumeric(phoneAfterFormatted[index])) {
			digitsCounter += 1;
		}

		if (digitsCounter >= digitIndex + 1) {
			break;
		}
	}

	// set cursor before next digit (jump over mask chars on the right side)
	if (deletion !== 'backward') {
		while (
			!isNumeric(phoneAfterFormatted[cursorPosition]) &&
			cursorPosition < phoneAfterFormatted.length
		) {
			cursorPosition += 1;
		}
	}

	return cursorPosition;
};

/**
 * Reads the `inputType` of a native `input` event and tells whether the edit
 * removed characters, and in which direction. `undefined` for an insertion.
 */
export const getDeletionType = (inputType?: string) => {
	const isDeletion = inputType?.toLocaleLowerCase().includes('delete') ?? false;
	if (!isDeletion) return undefined;

	return inputType?.toLocaleLowerCase().includes('forward') ? 'forward' : 'backward';
};
