import { ReactNode } from 'react';

import { Input, InputProps, InputSize } from '../input';
import { Field, FieldErrorLike, FieldLabellingProps } from './field';
import { InputWithAddons } from './input-with-addons';

/**
 * Everything the Input accepts, minus `id` and the two naming attributes, which
 * the field owns. The caption points at the id the field generates, so an `id`
 * set here would land on the control and leave the label attached to nothing —
 * a control with no accessible name, and nothing failing visibly. Removing it
 * from the type turns that into a compile error and sends you to `controlId`,
 * which moves both ends together.
 *
 * The labelling union comes in on top: exactly one of `label`, `aria-label` or
 * `aria-labelledby`, so leaving all three out does not compile. It checks that
 * one is declared and nothing about what it says — `label={''}` and
 * `aria-label={''}` type-check. See `FieldLabellingProps` for what the union
 * does and does not promise.
 */
export type FieldTextProps = Omit<InputProps, 'id' | 'aria-label' | 'aria-labelledby'> & {
	/**
	 * Names the `<input>` when there is no visible caption — a search box in a
	 * toolbar, a cell edited in place. The field renders no caption, so nothing
	 * takes up the space one would have used. Prefer a visible `label`: a name
	 * only a screen reader can reach is a name most users never get.
	 */
	'aria-label'?: string;
	/**
	 * Names the `<input>` from text already on screen outside the field — a
	 * section heading, a column header. Takes that element's id, and the field
	 * renders no caption of its own.
	 */
	'aria-labelledby'?: string;
	/**
	 * Hint about the field, revealed from an info-icon trigger beside the
	 * caption. For text that should always be on screen, use `description`.
	 * Needs a visible `label` to sit beside.
	 */
	tooltip?: ReactNode;
	/** Helper text under the control, announced as part of the control's description. */
	description?: ReactNode;
	/**
	 * Appends the muted " (optional)" suffix to the caption. Ignored when
	 * `required` is set, and unavailable without a visible caption.
	 */
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
	 * Stops the error message being rendered under the control, for screens that
	 * report validation somewhere else — a toast, a summary at the top of the
	 * form. The `<input>` still gets `aria-invalid` and the wiring is unchanged,
	 * so whatever reports the error instead has to be reachable.
	 */
	suppressErrorMessage?: boolean;
	/**
	 * Field arrangement. Defaults to `'vertical'` (caption above the control,
	 * messages below); `'horizontal'` puts the caption in a fixed-width first
	 * column and folds back to the stack below 24rem of the field's own width,
	 * so it is safe in a narrow slot.
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
	/**
	 * Content shown inside the control's frame, before the value — a leading
	 * icon, a currency symbol, a URL scheme. Setting it (or `trailingAddon`) puts
	 * the `<input>` inside an
	 * [InputGroup](?path=/docs/components-inputgroup--docs), which draws one
	 * bordered frame around the pair.
	 *
	 * Wrap what you pass in the group part that matches it: `InputGroup.Addon`
	 * for an icon, a tag or a button, `InputGroup.Text` for a text prefix. The
	 * field keeps its wiring on the `<input>` inside the frame, so the caption
	 * still points at the control.
	 *
	 * Addons are decoration and nothing announces them: anything the user has to
	 * read to fill the field in belongs in `label` or `description`.
	 */
	leadingAddon?: ReactNode;
	/**
	 * Content shown inside the control's frame, after the value — a unit, a
	 * domain suffix, an action button. Same rules as `leadingAddon`.
	 */
	trailingAddon?: ReactNode;
	/** Extra classes for the field's root element, merged last. The control is styled by `size`. */
	className?: string;
} & FieldLabellingProps;

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
 * The accessible name is not optional, and the types make you declare one: pass
 * a visible `label`, or name the `<input>` with `aria-label` or
 * `aria-labelledby` where the design has no room for a caption. Exactly one of
 * the three — none of them, or two of them, does not compile. Declaring one is
 * all they check: `label={''}` and `aria-label={''}` type-check and leave the
 * `<input>` named by the empty string, so resolve a value that might come back
 * empty before passing it.
 *
 * A value with a leading icon, a currency prefix or a trailing unit is still a
 * text field: pass `leadingAddon`/`trailingAddon` and the control is rendered
 * inside an [InputGroup](?path=/docs/components-inputgroup--docs), with the
 * field's wiring staying on the `<input>` inside the frame. That is the reason
 * to reach for the props rather than assembling the group under the generic
 * `Field` — there, the wiring would land on the group's `div` and the caption
 * would end up pointing at an element a `<label>` cannot label.
 *
 * It is form-library agnostic: drive `errors` yourself, or pair it with the
 * react-hook-form-bound `FormText`. Do not use it for multi-line text (that is
 * a TextArea field), and do not reach for an addon to hold something the user
 * has to read — nothing announces an addon.
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
 *
 * @example
 * <FieldText
 *   label="Email"
 *   type="email"
 *   size="lg"
 *   leadingAddon={
 *     <InputGroup.Addon>
 *       <IconMail />
 *     </InputGroup.Addon>
 *   }
 * />
 */
export const FieldText = ({
	label,
	tooltip,
	optional,
	'aria-label': ariaLabel,
	'aria-labelledby': ariaLabelledBy,
	description,
	required,
	errors,
	suppressErrorMessage,
	orientation,
	controlId,
	className,
	leadingAddon,
	trailingAddon,
	...inputProps
}: FieldTextProps) => {
	// The union is enforced on FieldText's own surface, and TypeScript cannot
	// carry that correlation through the destructuring — five loose variables no
	// longer say "exactly one of these is set". So the naming props travel to
	// Field as one object again, with the assertion in a single place.
	const labelling = {
		label,
		tooltip,
		optional,
		'aria-label': ariaLabel,
		'aria-labelledby': ariaLabelledBy
	} as FieldLabellingProps;

	return (
		<Field
			{...labelling}
			description={description}
			required={required}
			errors={errors}
			suppressErrorMessage={suppressErrorMessage}
			orientation={orientation}
			controlId={controlId}
			className={className}>
			{leadingAddon === undefined && trailingAddon === undefined ? (
				<Input type="text" {...inputProps} />
			) : (
				<InputWithAddons
					type="text"
					leadingAddon={leadingAddon}
					trailingAddon={trailingAddon}
					{...inputProps}
				/>
			)}
		</Field>
	);
};

FieldText.displayName = 'FieldText';
