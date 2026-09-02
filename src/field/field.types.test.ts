import { describe, expectTypeOf, it } from 'vitest';

import type { FieldProps } from './field';
import type { FieldTextProps } from './field-text';

/**
 * The labelling rule is a type, not a runtime check: a field declares exactly
 * one of `label`, `aria-label` or `aria-labelledby`, and leaving all three out
 * — or declaring two — does not compile.
 *
 * Where the rule stops is pinned here too, because the field's docs promise
 * exactly this much and no more. It catches a name that is *absent*
 * (`undefined`, `null`, a boolean guard); it does not catch a name that is
 * *empty* (`''`, `[]`, anything typed `string`), and by decision it never will
 * — the shapes that would catch `''` cost more than they buy. Both halves are
 * asserted so the prose and the types cannot drift apart.
 *
 * These are compile-time assertions, so `yarn tsc` is what enforces them and
 * `yarn test` only reports that the file was checked. Each `@ts-expect-error`
 * is load-bearing in both directions: delete the directive and `yarn tsc`
 * fails on the line below it, which is what proves the rule still bites.
 */

// Stand-ins for a call site. The props are returned so nothing here is unused,
// and neither function is ever called for its effect.
const field = (props: FieldProps) => props;
const fieldText = (props: FieldTextProps) => props;

// The generic Field takes the control as its child; `null` is a valid one and
// keeps this file free of JSX, so it runs in the node-side `unit` project.
const control = null;

// A caption read from somewhere that may not have one — a translation lookup, a
// prop on a wrapper. Returned from a function rather than held in a `const`,
// which TypeScript would narrow back to `string`.
const maybeLabel = (): string | undefined => 'Agency name';

// A translation lookup that falls back to the empty string, and the flag a
// caption is often guarded by. Both are what a caller reaches for once `tsc`
// rejects `label={maybeLabel()}`, and only one of them is caught.
const translate = (): string | undefined => 'Agency name';
const showLabel = (): boolean => true;

describe('Field labelling union', () => {
	it('accepts a visible label, and the affordances that hang off one', () => {
		field({ children: control, label: 'Agency name' });
		field({ children: control, label: 'Agency name', tooltip: 'Shown on your profile.' });
		field({ children: control, label: 'Agency name', optional: true });

		expectTypeOf<{ children: null; label: string }>().toExtend<FieldProps>();
		expectTypeOf<{ children: null; label: string; tooltip: string }>().toExtend<FieldProps>();
	});

	it('accepts a field named by aria-label or by aria-labelledby', () => {
		field({ children: control, 'aria-label': 'Search' });
		field({ children: control, 'aria-labelledby': 'section-heading' });

		expectTypeOf<{ children: null; 'aria-label': string }>().toExtend<FieldProps>();
		expectTypeOf<{ children: null; 'aria-labelledby': string }>().toExtend<FieldProps>();
	});

	it('rejects a field with none of the three', () => {
		// @ts-expect-error — no label, no aria-label, no aria-labelledby: a
		// control with no accessible name, which is the case this union exists
		// to make impossible.
		field({ children: control });

		expectTypeOf<{ children: null }>().not.toExtend<FieldProps>();
	});

	it('rejects a caption that might not be there', () => {
		// @ts-expect-error — `label` excludes undefined on its branch, so a
		// caption coming from an optional value has to be resolved by the caller
		// rather than silently leaving the field unnamed.
		field({ children: control, label: maybeLabel() });

		expectTypeOf<{ children: null; label: string | undefined }>().not.toExtend<FieldProps>();
	});

	it('rejects a caption guarded by a boolean', () => {
		// @ts-expect-error — `label` excludes booleans, so the everyday
		// `label={flag && 'text'}` is a compile error: when the flag is false the
		// field renders a <label> with nothing in it and the control has no name.
		field({ children: control, label: showLabel() && 'Agency name' });

		// @ts-expect-error — the same exclusion, reached directly.
		field({ children: control, label: false });

		// @ts-expect-error — and `true`, which renders nothing either.
		field({ children: control, label: true });

		expectTypeOf<{ children: null; label: false | 'Agency name' }>().not.toExtend<FieldProps>();
		expectTypeOf<{ children: null; label: boolean }>().not.toExtend<FieldProps>();
	});

	/**
	 * The other half of the line, pinned deliberately. Every case here **compiles
	 * today**, and by decision keeps compiling: an empty name is documented as the
	 * caller's responsibility rather than enforced, because `Exclude` works by
	 * dropping members from a union and `''` is not a member of `string` to drop
	 * (`Exclude<string, ''>` is `string`) — the shapes that would catch it put a
	 * type parameter on the component. Each case below leaves the control named by
	 * the empty string.
	 *
	 * If a later change does reject one of these, this test fails. That is the
	 * point: the prose in `field.tsx`, `field-text.tsx` and `migration.md`
	 * promises exactly this much and has to be updated with it.
	 */
	it('does not reject an empty name, which the docs say out loud', () => {
		field({ children: control, label: '' });
		field({ children: control, label: [] });
		field({ children: control, label: translate() ?? '' });
		field({ children: control, 'aria-label': '' });
		field({ children: control, 'aria-labelledby': '' });

		expectTypeOf<{ children: null; label: string }>().toExtend<FieldProps>();
		expectTypeOf<{ children: null; label: '' }>().toExtend<FieldProps>();
		expectTypeOf<{ children: null; 'aria-label': '' }>().toExtend<FieldProps>();
	});

	it('rejects the caption affordances on a field with no caption', () => {
		// @ts-expect-error — a tooltip trigger sits beside the caption, and there
		// is no caption to sit beside.
		field({ children: control, 'aria-label': 'Search', tooltip: 'No caption to sit beside.' });

		// @ts-expect-error — the " (optional)" suffix is appended to the caption.
		field({ children: control, 'aria-label': 'Search', optional: true });

		expectTypeOf<{
			children: null;
			'aria-label': string;
			tooltip: string;
		}>().not.toExtend<FieldProps>();
	});

	it('rejects a field named twice', () => {
		// @ts-expect-error — `aria-label` would override the visible caption for
		// a screen reader, so the two names disagree with nothing on screen to
		// show it.
		field({ children: control, label: 'Agency name', 'aria-label': 'Agency' });

		// @ts-expect-error — same for the two aria attributes: `aria-labelledby`
		// wins and the `aria-label` is dead text.
		field({ children: control, 'aria-label': 'Search', 'aria-labelledby': 'heading' });

		expectTypeOf<{
			children: null;
			label: string;
			'aria-label': string;
		}>().not.toExtend<FieldProps>();
	});

	it('accepts an orientation on either branch', () => {
		field({ children: control, label: 'Agency name', orientation: 'horizontal' });
		// Legal, and the field lays itself out in one column rather than leaving
		// the caption column empty — asserted in the browser by the
		// `HorizontalWithoutCaption` story.
		field({ children: control, 'aria-label': 'Search', orientation: 'horizontal' });

		expectTypeOf<{
			children: null;
			'aria-label': string;
			orientation: 'horizontal';
		}>().toExtend<FieldProps>();
	});
});

describe('FieldText labelling union', () => {
	it('accepts a visible label, or a name on the input', () => {
		fieldText({ label: 'Agency name' });
		fieldText({ label: 'Agency name', tooltip: 'As registered with your state.' });
		fieldText({ 'aria-label': 'Search', type: 'search' });
		fieldText({ 'aria-labelledby': 'section-heading' });

		expectTypeOf<{ label: string }>().toExtend<FieldTextProps>();
		expectTypeOf<{ 'aria-label': string }>().toExtend<FieldTextProps>();
	});

	it('rejects a field with none of the three', () => {
		// @ts-expect-error — a text field with no accessible name.
		fieldText({ placeholder: 'ACME Insurance' });

		expectTypeOf<{ placeholder: string }>().not.toExtend<FieldTextProps>();
	});

	it('rejects a caption guarded by a boolean, and accepts an empty one', () => {
		// @ts-expect-error — a caption that is only sometimes there.
		fieldText({ label: showLabel() && 'Agency name' });

		// Compiles, and the docs say so: the `<input>` ends up named by the empty
		// string. Pinned so a future fix has to update the prose with it.
		fieldText({ label: translate() ?? '' });

		expectTypeOf<{ label: false | 'Agency name' }>().not.toExtend<FieldTextProps>();
		expectTypeOf<{ label: '' }>().toExtend<FieldTextProps>();
	});

	it('rejects the caption affordances on a field with no caption', () => {
		// @ts-expect-error — nothing on screen for the trigger to sit beside.
		fieldText({ 'aria-label': 'Search', tooltip: 'No caption to sit beside.' });

		// @ts-expect-error — nothing on screen to append the suffix to.
		fieldText({ 'aria-label': 'Search', optional: true });

		expectTypeOf<{ 'aria-label': string; tooltip: string }>().not.toExtend<FieldTextProps>();
	});

	it('still keeps the control id out of the input props', () => {
		// @ts-expect-error — `id` would land on the <input> and leave the caption
		// pointing at nothing; `controlId` moves both ends together.
		fieldText({ label: 'Agency name', id: 'agency-name' });

		fieldText({ label: 'Agency name', controlId: 'agency-name' });

		expectTypeOf<FieldTextProps>().not.toHaveProperty('id');
		expectTypeOf<FieldTextProps>().toHaveProperty('controlId');
	});
});
