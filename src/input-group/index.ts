import { Addon, Root, Text } from './input-group';

export { inputGroupRecipe } from './input-group';

export type { InputGroupRootProps, InputGroupAddonProps, InputGroupTextProps } from './input-group';

/**
 * InputGroup puts a control and its addons inside one bordered frame, so a value
 * with a leading icon, a currency prefix or a trailing action reads as a single
 * control rather than as a row of boxes. Compose it from three parts: `Root` is
 * the frame, `Addon` holds an icon, a tag or a button, and `Text` holds a text
 * prefix or suffix.
 *
 * The group takes no state props. It reads focus, disabled, invalid and the
 * control's height off the control inside it, so the frame can never disagree
 * with what it wraps — set `size`, `disabled` and `aria-invalid` on the
 * [Input](?path=/docs/components-input--docs) as usual and the frame follows.
 *
 * It is presentational, and it is not the control: it renders a `div`, which a
 * `<label>` cannot point at. Inside a form field, wire the field to the `input`
 * inside the group — a
 * [FieldText](?path=/docs/components-fieldtext--docs) with `leadingAddon` /
 * `trailingAddon` does that for you. Do not use InputGroup for two controls that
 * together are one value (that is a `fieldset`), and do not reach for it just to
 * put a button next to a field — a button that is not part of the value belongs
 * outside the frame.
 *
 * @summary Bordered frame joining a control with its icon, text and button addons
 *
 * @example
 * <InputGroup.Root>
 * 	<InputGroup.Text>$</InputGroup.Text>
 * 	<Input inputMode="decimal" placeholder="0.00" />
 * 	<InputGroup.Text>USD</InputGroup.Text>
 * </InputGroup.Root>
 */
// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const InputGroup = { Root, Addon, Text };
