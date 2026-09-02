import { ReactNode } from 'react';

import { Input, InputProps } from '../input';
import { InputGroup } from '../input-group';

export type InputWithAddonsProps = Omit<InputProps, 'id'> & {
	/** Rendered inside the group, before the control. */
	leadingAddon?: ReactNode;
	/** Rendered inside the group, after the control. */
	trailingAddon?: ReactNode;
};

/**
 * An `Input` inside an `InputGroup`, wired to the surrounding field. Internal to
 * the field layer — `FieldText` renders it when it is given an addon.
 *
 * The field's wiring arrives here on its own. `Field` injects `id`,
 * `aria-describedby`, `aria-invalid`, `required` and its `ref` through a Radix
 * `Slot`, and a `Slot` hands them to whatever single child it is given: since
 * that child is this component rather than the group's `div`, they land in these
 * props and the spread below puts them on the `<input>`, one level inside the
 * frame. So the caption points at the `<input>`, and the field's development
 * check — which warns when the wiring lands on an element a `<label>` cannot
 * point at — sees an `INPUT` and stays quiet.
 *
 * So the component reads no context of its own and needs no `'use client'`
 * directive: everything it places on the `<input>` arrives as a prop.
 *
 * What the component buys is that the group is assembled here rather than at
 * the call site. Consumers set `leadingAddon`/`trailingAddon` on the field and
 * never get the chance to pass an `InputGroup` to the generic `Field` — there
 * the single child *is* the group's `div`, the id lands on the frame, and the
 * caption ends up pointing at an element a `<label>` cannot label.
 *
 * @summary Input and its addons assembled inside an InputGroup for the field
 */
export const InputWithAddons = ({
	leadingAddon,
	trailingAddon,
	...inputProps
}: InputWithAddonsProps) => (
	<InputGroup.Root>
		{leadingAddon}

		<Input {...inputProps} />

		{trailingAddon}
	</InputGroup.Root>
);

InputWithAddons.displayName = 'InputWithAddons';
