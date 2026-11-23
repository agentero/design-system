import { describe, expect, it } from 'vitest';

import { getAcceptedFormats, isAccepted, isDragAccepted } from './accept';

const file = (name: string, type: string) => ({ name, type });

describe('getAcceptedFormats', () => {
	it('should print the extension of a MIME type', () => {
		expect(getAcceptedFormats('application/pdf')).toEqual(['PDF']);
	});

	it('should print every extension of a MIME group', () => {
		expect(getAcceptedFormats('image/*')).toEqual([
			'AVIF',
			'BMP',
			'GIF',
			'ICO',
			'JPEG',
			'JPG',
			'PNG',
			'SVG',
			'TIF',
			'TIFF',
			'WEBP'
		]);
	});

	it('should print a bare extension as it is', () => {
		expect(getAcceptedFormats('.csv')).toEqual(['CSV']);
	});

	it('should mix MIME types and extensions, ignoring spaces and empty entries', () => {
		expect(getAcceptedFormats('application/pdf, image/gif,.png,')).toEqual(['PDF', 'GIF', 'PNG']);
	});

	it('should print each format once', () => {
		expect(getAcceptedFormats('image/jpeg,.jpg,.JPEG')).toEqual(['JPEG', 'JPG']);
	});

	it('should print nothing for a MIME type it does not know', () => {
		expect(getAcceptedFormats('application/x-agentero')).toEqual([]);
	});
});

describe('isAccepted', () => {
	it('should accept anything without an accept string', () => {
		expect(isAccepted(file('notes.txt', 'text/plain'), undefined)).toBe(true);
		expect(isAccepted(file('notes.txt', 'text/plain'), '')).toBe(true);
	});

	it('should accept anything when the accept string has no entries', () => {
		expect(isAccepted(file('notes.txt', 'text/plain'), ' , ')).toBe(true);
	});

	it('should match a MIME type against the whole type', () => {
		expect(isAccepted(file('w9.pdf', 'application/pdf'), 'application/pdf')).toBe(true);
		expect(isAccepted(file('agents.csv', 'text/csv'), 'application/pdf')).toBe(false);
	});

	it('should match a group against the first half of the type', () => {
		expect(isAccepted(file('logo.png', 'image/png'), 'image/*')).toBe(true);
		expect(isAccepted(file('w9.pdf', 'application/pdf'), 'image/*')).toBe(false);
	});

	it('should match an extension against the name, whatever the case', () => {
		expect(isAccepted(file('Agents.CSV', ''), '.csv')).toBe(true);
		expect(isAccepted(file('agents.csv.pdf', 'application/pdf'), '.csv')).toBe(false);
	});

	it('should accept a file matching any of the entries', () => {
		expect(isAccepted(file('appetite.md', ''), 'application/pdf, .md')).toBe(true);
	});
});

describe('isDragAccepted', () => {
	it('should match MIME types and groups as isAccepted does', () => {
		expect(isDragAccepted('application/pdf', 'application/pdf')).toBe(true);
		expect(isDragAccepted('image/png', 'image/*')).toBe(true);
		expect(isDragAccepted('text/csv', 'application/pdf')).toBe(false);
	});

	it('should match an extension through the extensions of the type', () => {
		expect(isDragAccepted('text/csv', '.csv')).toBe(true);
		expect(isDragAccepted('image/jpeg', '.jpg')).toBe(true);
		expect(isDragAccepted('application/pdf', '.csv')).toBe(false);
	});

	it('should not tell when the type is missing or unknown to the table', () => {
		expect(isDragAccepted('', '.csv')).toBeUndefined();
		expect(isDragAccepted('', 'application/pdf')).toBeUndefined();
		expect(isDragAccepted('application/x-agentero', '.agentero')).toBeUndefined();
	});
});
