'use client';

import { ComponentPropsWithRef, ReactNode, useId } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { Label, type LabelProps } from '../label';
import { Tooltip, type TooltipProps } from '../tooltip';
import { FieldContext, useFieldContext } from './context';
import { IconInfoOutline } from './icons';

export { useFieldContext };
export type { FieldContextValue } from './context';

/**
 * Style recipe for Field. Slots: `group`, `root`, `content`, `label`,
 * `labelTooltip`, `description`, `error`.
 */
export const fieldRecipe = tv({
	slots: {
		group: [
			'@container/field-group flex w-full flex-col gap-7',
			'data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4'
		],
		// Matched on the value, not on presence: a consumer passing `data-invalid`
		// straight through renders `data-invalid="false"` when valid, which a
		// presence-based `data-invalid:` variant would wrongly match.
		root: 'group/field flex w-full gap-2 data-[invalid=true]:text-text-input-destructive',
		content: [
			'flex flex-1 flex-col gap-2 leading-snug',
			'[&>:is([data-slot=label],[data-slot=field-label])+[data-slot=field-description]]:-mt-1.5'
		],
		label: 'flex flex-wrap items-center gap-1',
		labelTooltip: [
			'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-sm',
			'text-icon-default-base-secondary [&_svg]:size-5 [&_path]:fill-current',
			'focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary'
		],
		description: [
			'text-sm leading-normal font-normal text-text-input-placeholder',
			'group-has-[[data-orientation=horizontal]]/field:text-balance',
			'[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-text-default-brand-primary'
		],
		error: 'text-sm font-normal text-text-input-destructive'
	},
	variants: {
		orientation: {
			vertical: {
				root: 'flex-col [&>*]:w-full [&>.sr-only]:w-auto'
			},
			horizontal: {
				root: [
					'flex-row items-center',
					'[&>:is([data-slot=label],[data-slot=field-label])]:flex-auto',
					'has-[>[data-slot=field-content]]:items-start',
					'has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'
				]
			},
			responsive: {
				root: [
					'flex-col [&>*]:w-full [&>.sr-only]:w-auto',
					'@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto',
					'@md/field-group:[&>:is([data-slot=label],[data-slot=field-label])]:flex-auto',
					'@md/field-group:has-[>[data-slot=field-content]]:items-start',
					'@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'
				]
			}
		}
	},
	defaultVariants: {
		orientation: 'vertical'
	}
});

const slots = fieldRecipe();

export type FieldVariants = VariantProps<typeof fieldRecipe>;

export type FieldGroupProps = ComponentPropsWithRef<'div'>;

/**
 * Stacks sibling fields and owns the space between them. The gap lives here
 * rather than as a margin on each field, so a field never carries spacing it
 * cannot control. Nest a `Field.Group` to tighten a sub-set of fields.
 *
 * @summary Stacks sibling fields and owns the space between them
 */
const FieldGroup = ({ className, ...props }: FieldGroupProps) => (
	<div data-slot="field-group" className={slots.group({ className })} {...props} />
);

FieldGroup.displayName = 'Field.Group';

export type FieldRootProps = ComponentPropsWithRef<'div'> &
	FieldVariants & {
		/**
		 * Marks the field as failing validation. Styles the field and sets
		 * `aria-invalid` on any control reading {@link useFieldContext}.
		 */
		invalid?: boolean;
	};

/**
 * Wraps one label, control, description and error message into a single field,
 * generating the ids that tie them together and sharing them through context —
 * so the control and label associate themselves, with no `id` passed by hand.
 *
 * Deliberately not a `role="group"`: one field is not a set of related controls,
 * and an unnamed group only adds screen-reader verbosity. Real groupings belong to
 * a fieldset with a legend.
 *
 * @summary Wraps a label, control, description and error into one field
 */
const FieldRoot = ({
	className,
	orientation = 'vertical',
	invalid = false,
	id,
	...props
}: FieldRootProps) => {
	const generatedId = useId();

	const descriptionId = `${generatedId}-description`;
	const errorId = `${generatedId}-error`;

	// Both message ids are always advertised. An `aria-describedby` reference to an
	// element that is not rendered is ignored, which saves Description and Error
	// from having to register themselves with the Root.
	const context = {
		id: id ?? `${generatedId}-control`,
		invalid,
		descriptionId,
		errorId,
		describedBy: `${descriptionId} ${errorId}`
	};

	return (
		<FieldContext value={context}>
			<div
				data-slot="field"
				data-orientation={orientation}
				data-invalid={invalid || undefined}
				className={slots.root({ orientation, className })}
				{...props}
			/>
		</FieldContext>
	);
};

FieldRoot.displayName = 'Field.Root';

export type FieldContentProps = ComponentPropsWithRef<'div'>;

/**
 * Stacks the control, description and error vertically inside a `horizontal` or
 * `responsive` field, where the label sits beside them.
 *
 * @summary Stacks control, description and error inside a horizontal field
 */
const FieldContent = ({ className, ...props }: FieldContentProps) => (
	<div data-slot="field-content" className={slots.content({ className })} {...props} />
);

FieldContent.displayName = 'Field.Content';

export type FieldLabelProps = Omit<LabelProps, 'htmlFor'> & {
	/** A {@link FieldLabelTooltip} to place beside the caption. */
	tooltip?: ReactNode;
};

/**
 * The field's caption. Renders a
 * {@link https://agentero.github.io/design-system/?path=/docs/label--docs Label}
 * associated with the control through the field's ids, so no `htmlFor` is passed by
 * hand, and puts an optional `tooltip` on the same row.
 *
 * The hint is a prop rather than a child so the trigger stays a *sibling* of the
 * `<label>`: a `<label>`'s accessible name is its text content, so a nested
 * interactive element would be read as part of the field's name and would activate
 * the control when clicked.
 *
 * @summary The field's caption, with an optional tooltip beside it
 */
const FieldLabel = ({ tooltip, ...props }: FieldLabelProps) => {
	const field = useFieldContext();

	const label = <Label htmlFor={field?.id} {...props} />;

	// With no tooltip there is no row to lay out, so the `<label>` goes in bare and
	// the orientation rules reach it through `[data-slot=label]`.
	if (!tooltip) {
		return label;
	}

	return (
		<div data-slot="field-label" className={slots.label()}>
			{label}
			{tooltip}
		</div>
	);
};

FieldLabel.displayName = 'Field.Label';

export type FieldLabelTooltipProps = Omit<ComponentPropsWithRef<'button'>, 'children' | 'type'> &
	Pick<TooltipProps, 'side' | 'align'> & {
		/** The hint revealed on hover or focus. Keep it to a sentence or two. */
		children: ReactNode;
		/** Accessible name for the trigger. Defaults to `'More information'`. */
		'aria-label'?: string;
	};

/**
 * Info icon beside the label that reveals a hint on hover or focus. Pass the hint
 * as children; the icon is the design system's. Hand it to {@link FieldLabel}'s
 * `tooltip` prop, which places it beside the caption.
 *
 * @summary Info icon beside the label revealing a hint on hover or focus
 */
const FieldLabelTooltip = ({
	children,
	className,
	side,
	align,
	'aria-label': ariaLabel = 'More information',
	...props
}: FieldLabelTooltipProps) => (
	<Tooltip content={children} side={side} align={align} asChild>
		<button
			type="button"
			data-slot="field-label-tooltip"
			aria-label={ariaLabel}
			className={slots.labelTooltip({ className })}
			{...props}>
			<IconInfoOutline />
		</button>
	</Tooltip>
);

FieldLabelTooltip.displayName = 'Field.LabelTooltip';

export type FieldDescriptionProps = ComponentPropsWithRef<'p'>;

/**
 * Helper text explaining what the field expects, announced through the control's
 * `aria-describedby`. For validation feedback use {@link FieldError} instead.
 *
 * @summary Helper text explaining what the field expects
 */
const FieldDescription = ({ className, id, ...props }: FieldDescriptionProps) => {
	const field = useFieldContext();

	return (
		<p
			data-slot="field-description"
			id={id ?? field?.descriptionId}
			className={slots.description({ className })}
			{...props}
		/>
	);
};

FieldDescription.displayName = 'Field.Description';

/** A validation error. Structurally matches a react-hook-form `FieldError`. */
export type FieldErrorLike = { message?: string } | undefined;

export type FieldErrorProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
	/** Message to render. Takes precedence over `errors`. */
	children?: ReactNode;
	/**
	 * Errors to render, de-duplicated by message — one line for a single error, a
	 * bulleted list for several. Shaped to take a form library's error objects
	 * directly.
	 */
	errors?: FieldErrorLike[];
};

/**
 * Validation feedback for the field, announced as an alert when it appears.
 * Renders nothing when there is no message, so it can stay mounted
 * unconditionally. Set `invalid` on {@link FieldRoot} alongside it.
 *
 * @summary Validation feedback for the field, announced as an alert
 */
const FieldError = ({ className, children, errors, id, ...props }: FieldErrorProps) => {
	const field = useFieldContext();

	const messages = [...new Set(errors?.flatMap(error => error?.message || []))];

	const content =
		children ??
		(messages.length > 1 ? (
			<ul className="ml-4 flex list-disc flex-col gap-1">
				{messages.map(message => (
					<li key={message}>{message}</li>
				))}
			</ul>
		) : (
			messages[0]
		));

	if (!content) {
		return null;
	}

	return (
		<div
			role="alert"
			data-slot="field-error"
			id={id ?? field?.errorId}
			className={slots.error({ className })}
			{...props}>
			{content}
		</div>
	);
};

FieldError.displayName = 'Field.Error';

/**
 * Field lays out a single form field — label, control, helper text and error —
 * and wires up the accessibility relationships between them.
 *
 * Presentational and form-library agnostic: pass `invalid` and `errors` from
 * whatever validates your form. Spacing between fields belongs to `Field.Group`,
 * never to a margin on the field itself. The caption is `Field.Label`, which renders
 * a [Label](?path=/docs/label--docs) and takes its `optional` and `required` props.
 *
 * @summary Lays out and wires up a single form field
 *
 * @example
 * <Field.Group>
 * 	<Field.Root invalid={!!error}>
 * 		<Field.Label>Email</Field.Label>
 * 		<Input type="email" />
 * 		<Field.Description>We only use this for policy documents</Field.Description>
 * 		<Field.Error errors={[error]} />
 * 	</Field.Root>
 *
 * 	<Field.Root>
 * 		<Field.Label
 * 			optional
 * 			tooltip={
 * 				<Field.LabelTooltip>Anyone with this link can book time on your calendar.</Field.LabelTooltip>
 * 			}>
 * 			Scheduling link
 * 		</Field.Label>
 * 		<Input type="url" />
 * 	</Field.Root>
 * </Field.Group>
 */
export const Field = {
	Root: FieldRoot,
	Group: FieldGroup,
	Content: FieldContent,
	Label: FieldLabel,
	LabelTooltip: FieldLabelTooltip,
	Description: FieldDescription,
	Error: FieldError
};
