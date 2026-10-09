import { describe, expect, it } from 'vitest';

import { applyMask, getCursorPosition } from './mask';

describe('applyMask', () => {
	it('should put each character of the value in a mask slot and keep the mask separators', () => {
		expect(applyMask({ value: '12345678', mask: '.. .. ....', maskSymbol: '.' })).toBe(
			'12 34 5678'
		);
		expect(applyMask({ value: '12345678', mask: '.... ....', maskSymbol: '.' })).toBe('1234 5678');
		expect(applyMask({ value: '12345678', mask: '## ## ## ##', maskSymbol: '#' })).toBe(
			'12 34 56 78'
		);
		expect(applyMask({ value: '12345678', mask: '.. (..) .. ..', maskSymbol: '.' })).toBe(
			'12 (34) 56 78'
		);
		expect(applyMask({ value: '1234', mask: '(..) ..', maskSymbol: '.' })).toBe('(12) 34');
	});

	it('should cut a value that is longer than the mask', () => {
		expect(applyMask({ value: '1234567890', mask: '.. .. ....', maskSymbol: '.' })).toBe(
			'12 34 5678'
		);
		expect(applyMask({ value: '1234567890', mask: '.... ....', maskSymbol: '.' })).toBe(
			'1234 5678'
		);
	});

	it('should stop at the next empty slot when the value is shorter than the mask', () => {
		expect(applyMask({ value: '1234', mask: '.. .. ....', maskSymbol: '.' })).toBe('12 34 ');
		expect(applyMask({ value: '1234', mask: '.... ....', maskSymbol: '.' })).toBe('1234 ');
		expect(applyMask({ value: '1', mask: '.... ....', maskSymbol: '.' })).toBe('1');
		expect(applyMask({ value: '', mask: '.... ....', maskSymbol: '.' })).toBe('');
	});

	it('should place letters and symbols in the mask slots like digits', () => {
		expect(applyMask({ value: 'abcdefgh', mask: '.. .. ....', maskSymbol: '.' })).toBe(
			'ab cd efgh'
		);
		expect(applyMask({ value: 'sometest', mask: '.... ....', maskSymbol: '.' })).toBe('some test');
		expect(applyMask({ value: '+12345678', mask: '.... ....', maskSymbol: '.' })).toBe('+123 4567');
		expect(applyMask({ value: '+1a', mask: '.... ....', maskSymbol: '.' })).toBe('+1a');
	});

	it('should drop the trailing separators only when trimNonMaskCharsLeftover is true', () => {
		const maskConfig = {
			value: '1234',
			mask: '(....) .. ..',
			maskSymbol: '.'
		};

		expect(applyMask(maskConfig)).toBe('(1234) ');
		expect(applyMask({ ...maskConfig, trimNonMaskCharsLeftover: true })).toBe('(1234');
	});
});

describe('getCursorPosition', () => {
	it('should place the cursor at the end when the previous value was empty', () => {
		expect(
			getCursorPosition({
				phoneBeforeInput: '',
				phoneAfterInput: '1',
				cursorPositionAfterInput: '1'.length,
				phoneAfterFormatted: '+1 '
			})
		).toBe(3);
	});

	it('should place the cursor after the added mask characters when typing at the end', () => {
		expect(
			getCursorPosition({
				phoneBeforeInput: '+380 (9',
				phoneAfterInput: '+380 (97',
				cursorPositionAfterInput: '+380 (97'.length,
				phoneAfterFormatted: '+380 (97) '
			})
		).toBe('+380 (97) '.length);
	});

	it('should keep the cursor after the typed digits when typing in the middle', () => {
		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (111) 111-',
				phoneAfterInput: '+1 (111) 9111-',
				cursorPositionAfterInput: '+1 (111) 9'.length,
				phoneAfterFormatted: '+1 (111) 911-1'
			})
		).toBe('+1 (111) 9'.length);

		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (111) 111-1111',
				phoneAfterInput: '+1 (119991) 111-1111',
				cursorPositionAfterInput: '+1 (11999'.length,
				phoneAfterFormatted: '+1 (119) 991-1111'
			})
		).toBe('+1 (119) 99'.length);
	});

	it('should keep the cursor where a digit was removed', () => {
		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (111) 111-1111',
				phoneAfterInput: '+1 (11) 111-1111',
				cursorPositionAfterInput: '+1 (11'.length,
				phoneAfterFormatted: '+1 (111) 111-111'
			})
		).toBe('+1 (11'.length);

		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (234) 567-8901',
				phoneAfterInput: '+1 (24) 567-8901',
				cursorPositionAfterInput: '+1 (2'.length,
				phoneAfterFormatted: '+1 (245) 678-901'
			})
		).toBe('+1 (2'.length);
	});

	it('should keep the cursor after the typed digit when the phone is already full', () => {
		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (111) 111-1111',
				phoneAfterInput: '+1 (9111) 111-1111',
				cursorPositionAfterInput: '+1 (9'.length,
				phoneAfterFormatted: '+1 (911) 111-1111'
			})
		).toBe('+1 (9'.length);
	});

	it('should place the cursor at the end when a digit replaces the whole selection', () => {
		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (111) 111-',
				phoneAfterInput: '1',
				cursorPositionAfterInput: '1'.length,
				phoneAfterFormatted: '+1 '
			})
		).toBe('+1 '.length);
	});

	it('should move the cursor past the mask characters when typing before one', () => {
		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (111) 111-111',
				phoneAfterInput: '+1 9(111) 111-111',
				cursorPositionAfterInput: '+1 9'.length,
				phoneAfterFormatted: '+1 (911) 111-1111'
			})
		).toBe('+1 (9'.length);

		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (111) 111-111',
				phoneAfterInput: '+19 (111) 111-111',
				cursorPositionAfterInput: '+19'.length,
				phoneAfterFormatted: '+1 (911) 111-1111'
			})
		).toBe('+1 (9'.length);

		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (111) 111-111',
				phoneAfterInput: '+91 (111) 111-111',
				cursorPositionAfterInput: '+9'.length,
				phoneAfterFormatted: '+9 (111) 111-1111'
			})
		).toBe('+9 ('.length);
	});

	it('should place the cursor after the plus sign when the prefix is removed', () => {
		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 (111) 111-111',
				phoneAfterInput: '1 (111) 111-111',
				cursorPositionAfterInput: 0,
				phoneAfterFormatted: '+1 (111) 111-1111',
				deletion: 'backward'
			})
		).toBe('+'.length);

		expect(
			getCursorPosition({
				phoneBeforeInput: '+380',
				phoneAfterInput: '380',
				cursorPositionAfterInput: 0,
				phoneAfterFormatted: '+380 ',
				deletion: 'backward'
			})
		).toBe('+'.length);

		expect(
			getCursorPosition({
				phoneBeforeInput: '+1 ',
				phoneAfterInput: ' ',
				cursorPositionAfterInput: 0,
				phoneAfterFormatted: '+',
				deletion: 'forward'
			})
		).toBe('+'.length);
	});
});
