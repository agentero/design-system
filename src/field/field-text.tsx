import { ReactNode } from 'react';

import { Input, InputProps, InputSize } from '../input';
import { Field, FieldErrorLike } from './field';

/**
 * Everything the Input accepts, minus `id`. The caption points at the id the
 * field generates, so an `id` set here would land on the control and leave the
 * label attached to nothing — a control with no accessible name, and nothing
 * failing visibly. Removing it from the type turns that into a compile error
 * and sends you to `controlId`, which moves both ends together.
 */
export type FieldTextProps = Omit<InputProps, 'id'> & {
	/** The field's caption. */
	label: ReactNode;
	/**
	 * Hint about the field, revealed from an info-icon trigger beside the
	 * caption. For text that should always be on screen, use `description`.
	 */
	tooltip?: ReactNode;
	/** Helper text under the control, announced as part of the control's description. */
	description?: ReactNode;
	/** Appends the muted " (optional)" suffix to the caption. Ignored when `required` is set. */
	optional?: boolean;
	/**
	 * Marks the field required, declared once: the caption gets its decorative
	 * asterisk and the `<input>` gets the native `required` attribute, which is
	 * what assistive technology actually announces.
	 */
	required?: boolean;
	/**
	 * Errors to display under the control. Any entry with a `message` also flips
	 * the control's `aria-invalid`, so the message and the treatment can never
	 * disagree.
	 */
	errors?: FieldErrorLike[];
	/**
	 * Field arrangement. Defaults to `'vertical'` (caption above the control,
	 * messages below); `'horizontal'` puts the caption in a fixed-width first
	 * column.
	 */
	orientation?: 'vertical' | 'horizontal';
	/**
	 * The **control's** height, not the field's — it reaches the `<input>` and
	 * changes nothing about the caption, the helper text or the gaps. Defaults
	 * to `'md'`.
	 * - `sm` (32px) — dense layouts where vertical space is tight.
	 * - `md` (40px) — standard form density.
	 * - `lg` (48px) — low-density forms and larger touch targets.
	 */
	size?: InputSize;
	/**
	 * Overrides the generated control id when a semantic one is needed (e2e
	 * selectors, an external `aria-labelledby`).
	 */
	controlId?: string;
	/** Extra classes for the field's root element, merged last. The control is styled by `size`. */
	className?: string;
};

/**
 * FieldText is the ready-made text field: the
 * [Field](?path=/docs/components-field--docs) layout plus an
 * [Input](?path=/docs/components-input--docs) control, one prop per part and no
 * child to pass. Everything that is not a field-level prop is forwarded to the
 * `<input>`, and the wiring (`id`, `htmlFor`, `aria-invalid`,
 * `aria-describedby`, `required`) comes from Field — the Input itself stays
 * field-agnostic.
 *
 * This is what a form should reach for by default. Drop to the generic `Field`
 * only for a control that has no ready-made field yet.
 *
 * It is form-library agnostic: drive `errors` yourself, or pair it with the
 * react-hook-form-bound `FormText`. Do not use it for multi-line text (that is
 * a TextArea field) or for a value with a leading or trailing addon (that is an
 * input group).
 *
 * @summary Ready-made text field: Field layout plus Input, no form library
 *
 * @example
 * <FieldText
 *   label="Agency name"
 *   description="As registered with your state."
 *   placeholder="ACME Insurance"
 *   errors={[nameError]}
 *   required
 * />
 */
export const FieldText = ({
	label,
	tooltip,
	description,
	optional,
	required,
	errors,
	orientation,
	controlId,
	className,
	...inputProps
}: FieldTextProps) => (
	<Field
		label={label}
		tooltip={tooltip}
		description={description}
		optional={optional}
		required={required}
		errors={errors}
		orientation={orientation}
		controlId={controlId}
		className={className}>
		<Input type="text" {...inputProps} />
	</Field>
);

FieldText.displayName = 'FieldText';
