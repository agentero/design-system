'use client';

import { ReactNode } from 'react';

import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { Field, type FieldRootProps, useFieldContext } from '../field';
import { SwitchContext, type SwitchContextValue } from '../switch';

const SwitchProvider = ({ children }: { children: ReactNode }) => {
	const field = useFieldContext();

	const value: SwitchContextValue | null = field && {
		id: field.controlId,
		'aria-describedby': field.describedBy,
		'aria-invalid': field.invalid || undefined,
		required: field.required || undefined,
		disabled: field.disabled || undefined,
		readOnly: field.readOnly || undefined,
		size: 'sm'
	};

	return <SwitchContext value={value}>{children}</SwitchContext>;
};

// Figma's Switch field: the toggle 16px from its text instead of pushed to the
// far edge by the field's row, and centred on the label's 24px first line
// however many lines the text below it takes. In a row the first child stops
// growing, and a toggle there never shrinks either, however long the text after
// it. Stacked, the field stretches its children (`w-full`), so the toggle is
// capped at its own width.
export const fieldSwitchRecipe = tv({
	base: [
		'data-[orientation=horizontal]:items-start data-[orientation=horizontal]:gap-4',
		'data-[orientation=horizontal]:[&>:first-child]:flex-initial',
		'data-[orientation=horizontal]:[&>[data-slot=switch]:first-child]:flex-none',
		'data-[orientation=horizontal]:[&>[data-slot=switch][data-size=sm]]:mt-1',
		'data-[orientation=vertical]:[&>[data-slot=switch][data-size=sm]]:max-w-7.5',
		'data-[orientation=vertical]:[&>[data-slot=switch][data-size=md]]:max-w-12'
	]
});

export type FieldSwitchProps = Omit<FieldRootProps, 'orientation'> & {
	/**
	 * `horizontal` (default) puts the label, or a `Field.Content` with the
	 * label, its description and its error, on one row with the toggle beside
	 * it; `vertical` stacks the toggle under the label.
	 */
	orientation?: 'horizontal' | 'vertical';
};

/**
 * A `Field.Root` for an on/off toggle: it provides `SwitchContext`, so the
 * `Switch` inside associates itself with the label and the messages and takes
 * `invalid`, `required`, `disabled` and `readOnly` from the field, plus the
 * `sm` size of the design. Every other part (`Label`, `Field.Content`,
 * `Field.Description`, `Field.Error`) works as in any field. `invalid` only
 * sets `aria-invalid` on the toggle, which looks the same as in a valid field
 * (the design draws no invalid switch): `Field.Error` is what shows the error.
 *
 * Unlike the other fields it defaults to `orientation="horizontal"`: the
 * label and the toggle read as one row, the toggle 16px after the text and
 * centred on the label's first line. Wrap the label with its description and
 * its error in a `Field.Content`, so they stack together beside the toggle
 * instead of joining the row. Pass `vertical` to put the toggle under the
 * label.
 *
 * Form-library agnostic, and its contexts compose: a provider nested inside it
 * can extend `SwitchContext` with `name`, `checked`, `onCheckedChange`,
 * `onBlur` and `ref` to control the `Switch`, and `FieldContext` with the
 * errors, on top of the wiring `FieldSwitch` already set.
 *
 * @summary Field for an on/off toggle, wiring the Switch inside it
 *
 * @example
 * <FieldSwitch>
 *   <Field.Content>
 *     <Label>Email notifications</Label>
 *     <Field.Description>Get an email when a quote is ready.</Field.Description>
 *   </Field.Content>
 *   <Switch checked={enabled} onCheckedChange={setEnabled} />
 * </FieldSwitch>
 */
export const FieldSwitch = ({
	orientation = 'horizontal',
	className,
	children,
	...props
}: FieldSwitchProps) => (
	<Field.Root orientation={orientation} className={cn(fieldSwitchRecipe(), className)} {...props}>
		<SwitchProvider>{children}</SwitchProvider>
	</Field.Root>
);

FieldSwitch.displayName = 'FieldSwitch';
