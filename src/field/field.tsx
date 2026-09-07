'use client';

import {
	ComponentPropsWithRef,
	ReactNode,
	useCallback,
	useId,
	useLayoutEffect,
	useState
} from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';
import { Label as BaseLabel, LabelContext, type LabelProps } from '../label';
import { Tooltip, type TooltipProps } from '../tooltip';
import {
	FieldContext,
	type FieldContextValue,
	type FieldDescriptionProps,
	type FieldErrorProps,
	useFieldContext
} from './context';
import { IconInfoOutline } from './icons';

/**
 * Style recipe for Field. Slots: `group`, `root`, `content`, `label`,
 * `labelTooltip`, `description`, `error`. The `orientation` variant applies to
 * `root`.
 *
 * @summary tailwind-variants recipe backing the Field parts
 */
export const fieldRecipe = tv({
	slots: {
		group: 'flex w-full flex-col gap-7 [&>[data-slot=field-group]]:gap-4',
		// Matched on the value, not on presence: a consumer forwarding
		// `data-invalid={false}` renders `data-invalid="false"`, which a
		// presence-based `data-invalid:` variant would wrongly light up.
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
			// Balanced lines when the description sits beside the label: always in
			// `horizontal`, and from `md` in `responsive` (the `@md/field` query only
			// matches inside a responsive root, the only one that is a container).
			'group-data-[orientation=horizontal]/field:text-balance @md/field:text-balance',
			'[&>a]:underline [&>a]:underline-offset-4'
		],
		error: [
			'text-sm font-normal text-text-input-destructive',
			'[&>ul]:ml-4 [&>ul]:flex [&>ul]:list-disc [&>ul]:flex-col [&>ul]:gap-1'
		]
	},
	variants: {
		orientation: {
			vertical: {
				root: 'flex-col [&>*]:w-full [&>.sr-only]:w-auto'
			},
			// One row at every width. Wrap control and messages in `Field.Content`
			// so they stack beside the label.
			horizontal: {
				root: [
					'flex-row items-center',
					'[&>:is([data-slot=label],[data-slot=field-label])]:flex-auto',
					'has-[>[data-slot=field-content]]:items-start'
				]
			},
			// Stacked below `md` (28rem), one row from there, measured on the field
			// itself: the root is its own container and always wraps, and only the
			// children's widths react to it. An element cannot query its own size,
			// so the direction never changes on the root.
			responsive: {
				root: [
					'@container/field flex-row flex-wrap items-start [&>*]:w-full [&>.sr-only]:w-auto',
					'@md/field:items-center @md/field:[&>*]:w-auto',
					'@md/field:[&>:is([data-slot=label],[data-slot=field-label])]:flex-auto',
					'@md/field:has-[>[data-slot=field-content]]:items-start'
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
export const Group = ({ className, ...props }: FieldGroupProps) => (
	<div data-slot="field-group" className={cn(slots.group(), className)} {...props} />
);
Group.displayName = 'Field.Group';

export type FieldRootProps = ComponentPropsWithRef<'div'> & {
	/**
	 * Layout of the field. `vertical` (default) stacks label, control and
	 * messages. `horizontal` puts the label beside the control at every width.
	 * `responsive` stacks below `28rem` and goes horizontal from there, measured
	 * on the field itself, so it needs no particular wrapper. In `horizontal` and
	 * `responsive`, wrap the control and its messages in `Field.Content` so they
	 * stack beside the label.
	 */
	orientation?: FieldVariants['orientation'];
	/**
	 * Marks the field as failing validation: colors the label, sets `data-invalid`
	 * on the root and `aria-invalid` on the control through its context.
	 */
	invalid?: boolean;
	/** Disables the control through its context and sets `data-disabled` on the root. */
	disabled?: boolean;
	/**
	 * Makes the control read-only through its context (focusable and copyable,
	 * not editable, still submitted) and sets `data-readonly` on the root.
	 */
	readOnly?: boolean;
	/**
	 * Single source of truth for a required field: the `Label` shows its
	 * asterisk and the control receives `required`, both through context.
	 */
	required?: boolean;
	/**
	 * `id` for the control. Generated when omitted. Set it here, not on the
	 * control, so the label and the messages keep pointing at the right element.
	 */
	controlId?: string;
};

/**
 * Wraps one label, control, description and error into a single field and
 * wires the accessibility relationships between them. It generates the ids
 * and shares them through context: `Label` reads `LabelContext`,
 * `Field.Description` and `Field.Error` read `FieldContext` and register
 * themselves so the control's `aria-describedby` lists exactly the messages on
 * screen, and a `Field<X>` such as `FieldText` provides the control's context so
 * the control associates itself too. Nobody passes an `id` by hand.
 *
 * Presentational and form-library agnostic: pass `invalid` and the error
 * messages from whatever validates the form. Deliberately not a `role="group"`:
 * one field is not a set of related controls, and an unnamed group only adds
 * screen-reader verbosity. Real groupings belong to a fieldset with a legend.
 *
 * @summary Wraps a label, control, description and error into one field
 *
 * @example
 * <Field.Root invalid={!!error} required>
 *   <Field.Label>Email</Field.Label>
 *   <Input type="email" />
 *   <Field.Description>We only use this for policy documents.</Field.Description>
 *   <Field.Error errors={[error]} />
 * </Field.Root>
 */
export const Root = ({
	className,
	orientation = 'vertical',
	invalid = false,
	disabled = false,
	readOnly = false,
	required = false,
	controlId: controlIdProp,
	...props
}: FieldRootProps) => {
	const generatedId = useId();

	const controlId = controlIdProp ?? `${generatedId}-control`;
	const descriptionId = `${generatedId}-description`;
	const errorId = `${generatedId}-error`;

	// The messages register themselves from a layout effect, so `aria-describedby`
	// lists exactly the elements in the DOM and never a dangling id. Registering
	// an id twice is a no-op: the same array comes back and React skips the render.
	const [messageIds, setMessageIds] = useState<string[]>([]);

	const registerMessage = useCallback((id: string) => {
		setMessageIds(ids => (ids.includes(id) ? ids : [...ids, id]));

		return () => setMessageIds(ids => ids.filter(existing => existing !== id));
	}, []);

	// The description reads before the error whatever the order they mounted in.
	const describedBy =
		[
			...[descriptionId, errorId].filter(id => messageIds.includes(id)),
			...messageIds.filter(id => id !== descriptionId && id !== errorId)
		].join(' ') || undefined;

	const field: FieldContextValue = {
		controlId,
		descriptionId,
		errorId,
		describedBy,
		registerMessage,
		invalid,
		disabled,
		readOnly,
		required
	};

	return (
		<FieldContext value={field}>
			<LabelContext value={{ htmlFor: controlId, required: required || undefined }}>
				<div
					data-slot="field"
					data-orientation={orientation}
					data-invalid={invalid || undefined}
					data-disabled={disabled || undefined}
					data-readonly={readOnly || undefined}
					className={cn(slots.root({ orientation }), className)}
					{...props}
				/>
			</LabelContext>
		</FieldContext>
	);
};
Root.displayName = 'Field.Root';

export type FieldContentProps = ComponentPropsWithRef<'div'>;

/**
 * Stacks the control, description and error vertically inside a `horizontal`
 * or `responsive` field, where the label sits beside them. Also wraps a label
 * and its description when they share the left side.
 *
 * @summary Stacks control, description and error beside the label
 */
export const Content = ({ className, ...props }: FieldContentProps) => (
	<div data-slot="field-content" className={cn(slots.content(), className)} {...props} />
);
Content.displayName = 'Field.Content';

export type FieldLabelProps = LabelProps & {
	/**
	 * Hint revealed on hover or focus from an info icon beside the caption. The
	 * icon is a sibling of the `<label>`, never inside it, so it keeps its own
	 * accessible name and clicking it does not focus the control.
	 */
	tooltip?: ReactNode;
	/** Preferred side of the tooltip. Defaults to `'top'`. */
	tooltipSide?: TooltipProps['side'];
};

/**
 * The field's caption row: a `Label` and, when `tooltip` is given, an info
 * button beside it. The `Label` associates itself with the control through the
 * field's context, so no `htmlFor` is passed by hand. A bare `Label` inside a
 * field works too; use `Field.Label` when you need the tooltip.
 *
 * @summary The field's caption, with an optional tooltip beside it
 *
 * @example
 * <Field.Label required tooltip="Issued by the IRS">Tax ID</Field.Label>
 */
export const Label = ({ tooltip, tooltipSide, ...props }: FieldLabelProps) => (
	<div data-slot="field-label" className={slots.label()}>
		<BaseLabel {...props} />

		{tooltip && (
			<Tooltip content={tooltip} side={tooltipSide} asChild>
				<button
					type="button"
					data-slot="field-label-tooltip"
					aria-label="More information"
					className={slots.labelTooltip()}>
					<IconInfoOutline />
				</button>
			</Tooltip>
		)}
	</div>
);
Label.displayName = 'Field.Label';

/**
 * Helper text explaining what the field expects, announced through the
 * control's `aria-describedby`. For validation feedback use `Field.Error`.
 *
 * @summary Helper text explaining what the field expects
 */
export const Description = ({ className, id: idProp, ...props }: FieldDescriptionProps) => {
	const field = useFieldContext();
	const id = idProp ?? field?.descriptionId;
	// The callback is stable across the root's renders; depending on the whole
	// context object would re-register on every render instead.
	const registerMessage = field?.registerMessage;

	useLayoutEffect(() => (id ? registerMessage?.(id) : undefined), [registerMessage, id]);

	return (
		<p
			data-slot="field-description"
			id={id}
			className={cn(slots.description(), className)}
			{...props}
		/>
	);
};
Description.displayName = 'Field.Description';

/**
 * Validation feedback for the field, announced as an alert when it appears.
 * Renders nothing without a message, so it can stay mounted unconditionally;
 * set `invalid` on `Field.Root` alongside it. Takes `children` or an `errors`
 * array, and a form adapter can supply `errors` through `FieldContext` so a
 * bare `<Field.Error />` renders them.
 *
 * @summary Validation feedback for the field, announced as an alert
 */
const FieldError = ({
	className,
	children,
	errors: errorsProp,
	id: idProp,
	...props
}: FieldErrorProps) => {
	const field = useFieldContext();
	const id = idProp ?? field?.errorId;
	const errors = errorsProp ?? field?.errors;
	const registerMessage = field?.registerMessage;

	const messages = [...new Set(errors?.flatMap(error => error?.message || []))];

	const content =
		children ??
		(messages.length > 1 ? (
			<ul>
				{messages.map(message => (
					<li key={message}>{message}</li>
				))}
			</ul>
		) : (
			messages[0]
		));

	// Only a rendered message is announced; while there is none the field's
	// `aria-describedby` does not mention this element.
	const hasContent = !!content;

	useLayoutEffect(
		() => (hasContent && id ? registerMessage?.(id) : undefined),
		[registerMessage, hasContent, id]
	);

	if (!content) {
		return null;
	}

	return (
		<div
			role="alert"
			data-slot="field-error"
			id={id}
			className={cn(slots.error(), className)}
			{...props}>
			{content}
		</div>
	);
};
FieldError.displayName = 'Field.Error';

export { FieldError as Error };
