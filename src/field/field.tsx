'use client';

import { ComponentPropsWithRef, ReactNode, useId } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';
import { Label, LabelProps } from '../label';
import { Tooltip } from '../tooltip';
import { FieldContext, FieldContextValue, useFieldContext } from './context';
import { IconInfoOutline } from './icons';

/**
 * Style recipe for Field. Slots: `root`, `caption`, `labelTooltip`,
 * `description`, `error`, `errorList`, with an `orientation` variant.
 *
 * The whole field layout lives here, and only here. The `root` slot is a grid
 * that places each part by its `data-slot`, and `caption` arranges the label
 * with its tooltip trigger — so the caption travels as a single grid item and
 * the same slot-to-cell mapping serves both orientations.
 *
 * In `horizontal` the label column is `--field-label-width` (12rem by default),
 * a fixed width on purpose: each field is its own grid, so an `auto` column
 * would make every field's labels a different width and nothing would line up
 * down the form. Set the variable on a shared ancestor to change it once.
 *
 * That column never yields, so `horizontal` folds back to the vertical stack
 * below 24rem: the two-column rules live behind a container query and the
 * stacked layout is the base.
 *
 * The query names the field's own container (`@container/field`, declared on
 * the same element). An unnamed one would measure the same element today: the
 * root declares `container-type` itself, so it is already the nearest query
 * container for its own children — verified in Chromium. The name is therefore
 * not what makes the fold measure the field; it is what keeps it that way. An
 * unnamed query jumps to the next container up the moment the root stops being
 * one, or a part is moved inside some other container, and the legacy container
 * that stacks fields declares `@container/field-group` — which is exactly what
 * it would find.
 *
 * The threshold is a literal because a container query cannot read a custom
 * property: changing `--field-label-width` moves the column but not the fold.
 *
 * @summary tailwind-variants recipe backing the Field layout and its parts
 */
export const fieldRecipe = tv({
	slots: {
		root: 'w-full',
		caption: 'flex items-center gap-1',
		labelTooltip: [
			'inline-flex size-6 items-center justify-center',
			'rounded-sm border-none bg-transparent p-0',
			// Same weight as the caption it sits next to, which is what the legacy
			// field shows: the icon inherited the label's colour there. The focus
			// ring below is the one deliberate addition — the trigger is a real
			// button here, so it has to be reachable by keyboard.
			'text-text-input-normal [&_path]:fill-current',
			'focus-visible:outline-solid focus-visible:outline-2',
			'focus-visible:outline-offset-[0.125rem]',
			'focus-visible:outline-outline-input-focus'
		],
		description: 'm-0 text-sm text-text-input-placeholder',
		error: 'text-sm text-text-input-destructive',
		errorList: 'm-0 list-disc ps-5'
	},
	variants: {
		orientation: {
			// One column, parts stacked in source order: caption, control,
			// description, error.
			// 8px between rows, matching the vertical rhythm of the legacy field
			// this replaces — the parts line up on the same spacing consumers see
			// today rather than a tighter one.
			vertical: {
				root: 'grid grid-cols-1 gap-2'
			},
			// Caption in the first column, everything else stacked in the second:
			// the control on the caption's row, then description and error under
			// the control rather than under the caption.
			//
			// The fold is expressed entirely on the parts, and it has to be: a
			// container query restyles the container's *descendants*, never the
			// container itself, so nothing here can change the root's own grid.
			// The two columns are therefore declared once, at every width, and
			// what folds is which cells the parts occupy — below the threshold
			// every part spans both columns, which makes each one full width and
			// stacks them in source order. The column widths stop mattering
			// rather than changing.
			horizontal: {
				root: [
					'@container/field',
					'grid grid-cols-[minmax(0,var(--field-label-width,12rem))_minmax(0,1fr)] gap-x-3 gap-y-2',
					'[&>*]:col-span-2',
					'@min-[24rem]/field:[&>*]:col-span-1',
					'@min-[24rem]/field:[&>[data-slot=field-caption]]:col-start-1',
					'@min-[24rem]/field:[&>[data-slot=field-caption]]:row-start-1',
					'@min-[24rem]/field:[&>[data-slot=field-caption]]:self-center',
					'@min-[24rem]/field:[&>*:not([data-slot=field-caption])]:col-start-2'
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

/**
 * Structurally matches a react-hook-form `FieldError` without importing the
 * library — the field layer stays form-library agnostic.
 *
 * @summary Minimal error shape the field's `errors` prop accepts
 */
export type FieldErrorLike = { message?: string } | undefined;

/** Whether any entry carries a message, which is what flips the field to invalid. */
const hasMessage = (errors?: FieldErrorLike[]) => Boolean(errors?.some(error => error?.message));

export type FieldRootProps = ComponentPropsWithRef<'div'> &
	FieldVariants & {
		/**
		 * Marks the field as being in an error state: the control gets
		 * `aria-invalid` and the root gets `data-invalid`.
		 */
		invalid?: boolean;
		/**
		 * Marks the field as required: the caption renders the asterisk and the
		 * control receives its native `required`, so the two never drift apart.
		 */
		required?: boolean;
		/**
		 * Replaces the generated id on the control, for the two cases that need a
		 * predictable one: an end-to-end selector, and an `aria-labelledby`
		 * pointing at the control from outside the field. The label follows it
		 * automatically.
		 *
		 * **Use it rather than writing an `id` on the control.** A hand-set one
		 * wins over the injected wiring, and the caption still points at the id
		 * the field generated — the label ends up attached to nothing and the
		 * control has no accessible name, with nothing failing visibly.
		 *
		 * It is not called `id` because `id` keeps its usual meaning here — the
		 * element this component renders, which is the field's root.
		 */
		controlId?: string;
		/**
		 * Field arrangement. Defaults to `'vertical'` (caption above the control,
		 * messages below). `'horizontal'` puts the caption in a fixed-width first
		 * column — see `--field-label-width` on the recipe — with the control,
		 * description and error stacked in the second.
		 *
		 * `'horizontal'` is safe in a narrow slot: the caption column does not
		 * yield, so below 24rem of the field's own width the field folds back to
		 * the vertical stack. It measures its own slot rather than the viewport,
		 * so the same field folds inside a narrow drawer and stays horizontal on
		 * a wide page.
		 */
		orientation?: 'vertical' | 'horizontal';
	};

/**
 * Layout and wiring shell for one form field. Generates the control,
 * description and error ids from a single `useId` and shares them through
 * `FieldContext`, so the parts inside associate themselves without the
 * consumer passing ids by hand.
 *
 * Internal to the field layer: consumers reach a field through `Field` or a
 * ready-made `Field<X>`.
 *
 * @summary Field container: generates ids, provides context, places the parts
 */
export const FieldRoot = ({
	className,
	children,
	invalid = false,
	required = false,
	controlId,
	orientation = 'vertical',
	...props
}: FieldRootProps) => {
	const generatedId = useId();

	const context: FieldContextValue = {
		controlId: controlId ?? `${generatedId}-control`,
		invalid,
		required,
		descriptionId: `${generatedId}-description`,
		errorId: `${generatedId}-error`,
		describedBy: `${generatedId}-description ${generatedId}-error`
	};

	return (
		<FieldContext value={context}>
			<div
				data-slot="field"
				data-invalid={invalid || undefined}
				className={cn(fieldRecipe({ orientation }).root(), className)}
				{...props}>
				{children}
			</div>
		</FieldContext>
	);
};

FieldRoot.displayName = 'FieldRoot';

export type FieldControlProps = ComponentPropsWithRef<typeof Slot> & {
	/** Native `required`, injected from the field unless the child sets its own. */
	required?: boolean;
};

// The elements a `<label for>` can actually point at. Anything else — an input
// group's wrapper, a plain div — would take the id and leave the caption
// associated with nothing, which no test of the wrapper itself would catch.
const LABELABLE = new Set(['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON', 'METER', 'OUTPUT', 'PROGRESS']);

/**
 * Wires the field to its control without the control knowing about Field.
 * Renders no element of its own: it merges `id`, `aria-invalid`, `required` and
 * `aria-describedby` onto its single child via Radix's `Slot`, and the child's
 * own props win over the injected ones. Works with any control — Input today,
 * Select or TextArea tomorrow — with zero coupling.
 *
 * Anything else passed to it rides along the same way, which is how a field
 * named by `aria-label`/`aria-labelledby` gets that name onto the control rather
 * than onto the field's root.
 *
 * Internal to the field layer: `Field` wraps its child in one of these.
 *
 * @summary Injects the field's wiring onto any control element
 */
export const FieldControl = ({ ref, ...props }: FieldControlProps) => {
	const field = useFieldContext();

	// The wiring has to land on the control, not on a wrapper around it. That
	// mistake is silent — the markup renders, nothing throws, and the field is
	// simply unlabelled — so it is caught here, in development, at the only
	// place it can still happen: a composite control passed as the field's child.
	const wireAndCheck = (node: HTMLElement | null) => {
		if (process.env.NODE_ENV !== 'production' && node && !LABELABLE.has(node.tagName)) {
			console.warn(
				`Field wired a <${node.tagName.toLowerCase()}>, which a <label> cannot point at: ` +
					'the caption ends up associated with nothing and the control gets no accessible name. ' +
					'A control made of several elements should read useFieldContext() and place the ' +
					'wiring on the element that is the control.'
			);
		}

		if (typeof ref === 'function') {
			return ref(node);
		}

		if (ref) {
			ref.current = node;
		}
	};

	// `required` is not one of Slot's attributes — unlike aria-*, it exists only
	// on form controls — so the injection needs the cast. A field whose control
	// is a <div role="group"> (radio group, custom combobox) would receive an
	// attribute that does nothing there and wants `aria-required` instead.
	const wiring = {
		id: field?.controlId,
		// `|| undefined` so a valid field renders no attribute at all —
		// `aria-invalid="false"` is announced by some screen readers.
		'aria-invalid': field?.invalid || undefined,
		// The caption's asterisk is aria-hidden, so this attribute is what
		// actually tells assistive technology the field is required.
		required: field?.required || undefined,
		'aria-describedby': field?.describedBy
	} as FieldControlProps;

	// Slot gives the child's own props precedence over these, whatever order
	// they are passed in. That is fine for everything here except the two
	// attributes the association rests on — see the `controlId` and
	// `aria-describedby` notes on FieldProps for what a caller must avoid.
	return <Slot {...wiring} {...props} ref={wireAndCheck} />;
};

FieldControl.displayName = 'FieldControl';

type FieldLabelTooltipProps = {
	/** The hint text. Keep it short — context, not documentation. */
	children: ReactNode;
};

/**
 * Info-icon trigger revealing a hint about the field, rendered beside the
 * caption and outside the `<label>` element, so it never joins the control's
 * accessible name and never steals the label's click.
 *
 * Deliberately without options: a trigger a consumer could place — or a balloon
 * a consumer could point elsewhere — is a caption that drifts from screen to
 * screen. The hint pops above the trigger and flips when there is no room,
 * always.
 */
const FieldLabelTooltip = ({ children }: FieldLabelTooltipProps) => (
	<Tooltip content={children} asChild>
		<button
			type="button"
			data-slot="field-label-tooltip"
			aria-label="More information"
			className={slots.labelTooltip()}>
			<IconInfoOutline />
		</button>
	</Tooltip>
);

FieldLabelTooltip.displayName = 'FieldLabelTooltip';

export type FieldLabelProps = Omit<LabelProps, 'htmlFor'> & {
	/**
	 * Hint about the field. Passing it renders the standard info-icon trigger
	 * beside the caption — you pass the content and nothing else, the field
	 * decides the rest. The trigger is always a sibling of the `<label>`, never
	 * inside it: an interactive element inside a label joins the control's
	 * accessible name and its click focuses the control.
	 */
	tooltip?: ReactNode;
	/**
	 * Draws the caption's asterisk. Defaults to the field's `required`, so a
	 * required field already marks its caption.
	 */
	required?: boolean;
};

/**
 * The field's caption. Renders the design system's
 * [Label](?path=/docs/components-label--docs) with `htmlFor` filled in from the
 * field's context, alongside the tooltip trigger when there is a hint; `Label`
 * itself stays field-agnostic.
 *
 * Internal to the field layer: `Field` renders it from the `label`, `tooltip`
 * and `optional` props.
 *
 * @summary Field caption: a Label wired to the control, plus its tooltip
 */
export const FieldLabel = ({ tooltip, required, children, ...props }: FieldLabelProps) => {
	const field = useFieldContext();

	// The caption is one grid item: the label and its tooltip trigger travel
	// together, so the root can place the pair as a unit in either orientation.
	// Its internal arrangement is the recipe's `caption` slot, not this
	// component's — the layout still lives in exactly one place.
	return (
		<div data-slot="field-caption" className={slots.caption()}>
			<Label htmlFor={field?.controlId} required={required ?? field?.required} {...props}>
				{children}
			</Label>

			{tooltip && <FieldLabelTooltip>{tooltip}</FieldLabelTooltip>}
		</div>
	);
};

FieldLabel.displayName = 'FieldLabel';

export type FieldDescriptionProps = ComponentPropsWithRef<'p'>;

/**
 * Helper text below the control. Picks up the field's description id, so the
 * control's `aria-describedby` reaches it automatically.
 *
 * Internal to the field layer: `Field` renders it from the `description` prop.
 *
 * @summary Muted helper text announced through the control's aria-describedby
 */
export const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
	const field = useFieldContext();

	return (
		<p
			data-slot="field-description"
			id={field?.descriptionId}
			className={cn(slots.description(), className)}
			{...props}
		/>
	);
};

FieldDescription.displayName = 'FieldDescription';

export type FieldErrorProps = ComponentPropsWithRef<'div'> & {
	/**
	 * Errors to display. Entries without a `message` are skipped and duplicate
	 * messages are collapsed; a single message renders as text, several as a
	 * list. When empty, the component renders nothing.
	 */
	errors?: FieldErrorLike[];
};

/**
 * The field's error message(s). Renders `children` verbatim when provided,
 * otherwise the deduped `errors` messages — or nothing at all, so it can stay
 * mounted unconditionally. Announced assertively via `role="alert"` and
 * reachable from the control through the field's `aria-describedby`.
 *
 * Internal to the field layer: `Field` renders it from the `errors` prop.
 *
 * @summary Field error messages with role="alert"; renders nothing when empty
 */
export const FieldError = ({ className, children, errors, ...props }: FieldErrorProps) => {
	const field = useFieldContext();

	const messages = [
		...new Set((errors ?? []).flatMap(error => (error?.message ? [error.message] : [])))
	];

	if (!children && messages.length === 0) {
		return null;
	}

	return (
		<div
			role="alert"
			data-slot="field-error"
			id={field?.errorId}
			className={cn(slots.error(), className)}
			{...props}>
			{children ??
				(messages.length === 1 ? (
					messages[0]
				) : (
					<ul className={slots.errorList()}>
						{messages.map(message => (
							<li key={message}>{message}</li>
						))}
					</ul>
				))}
		</div>
	);
};

FieldError.displayName = 'FieldError';

/**
 * The one-of-three rule as a union: a field declares either a visible `label`,
 * an `aria-label` or an `aria-labelledby`, and never two of them. Written as
 * constraints only — every prop it mentions is documented once on the field's
 * own prop type, which this intersects with.
 *
 * The branch with no visible label has no caption either, so `tooltip` and
 * `optional` are `never` there: there is nothing on screen for a hint to sit
 * beside or a suffix to append to.
 *
 * **What this guarantees is that one of the three is declared — no more than
 * that.** Three things it does not guarantee, each the caller's own knowledge
 * to apply:
 *
 * 1. **A declared name can still be empty.** `label` rejects `undefined`,
 *    `null` and booleans, which covers `label={maybeName}` and the
 *    `label={showLabel && 'Agency name'}` idiom. It cannot reject `''`:
 *    exclusion works by dropping members from a union, and `''` is not a member
 *    of `string` to drop — `Exclude<string, ''>` is `string`. So `label={''}`,
 *    `label={t('agency') ?? ''}` and `label={[]}` compile, and so do
 *    `aria-label={''}` and `aria-labelledby={''}`. Each leaves the control
 *    named by the empty string — for `label`, a `<label>` with no text in it
 *    and, in `horizontal`, a 12rem caption column holding nothing. Resolve a
 *    value that can come back empty before it gets here.
 * 2. **An `aria-labelledby` can point at nothing.** No type can check that the
 *    id is on the page, and a reference to a missing element is a control with
 *    no name.
 * 3. **A composite control can drop the name entirely** — see `children` on the
 *    field's props. For a field built through `useFieldContext()`, the
 *    guarantee here is zero: the declaration says what the name should be, and
 *    placing it is the caller's job.
 *
 * `field.types.test.ts` pins which forms are rejected and which are not, so
 * this description and the type cannot drift apart.
 *
 * @summary Union requiring exactly one of label / aria-label / aria-labelledby
 */
export type FieldLabellingProps =
	| {
			/**
			 * The field's caption, and the usual way to name a field. Leave it out
			 * only when the field is deliberately without one, and then declare an
			 * `aria-label` or an `aria-labelledby` instead — the types take exactly
			 * one of the three, so leaving all three out does not compile.
			 *
			 * It accepts neither `undefined` nor a boolean: a caption that may or
			 * may not be there is a field that may or may not have a name, so
			 * `label={maybeName}` and `label={showLabel && 'Agency name'}` are
			 * compile errors rather than a field that silently loses its name. An
			 * **empty** caption is not caught — `label={''}` type-checks and
			 * renders a `<label>` with no text — so resolve a value that can come
			 * back empty before passing it.
			 */
			label: Exclude<NonNullable<ReactNode>, boolean>;
			tooltip?: ReactNode;
			optional?: boolean;
			'aria-label'?: never;
			'aria-labelledby'?: never;
	  }
	| {
			label?: never;
			tooltip?: never;
			optional?: never;
			// Deliberately just `string`, and it has to be a non-empty one: nothing
			// here checks that. `Exclude<string, ''>` is `string`, and the shapes
			// that would catch `''` put a type parameter on the component — a
			// generic at every call site to catch one empty literal. Enforce what is
			// cheap to enforce and document the rest; the requirement is on the type
			// above and on the prop's own docs.
			'aria-label': string;
			'aria-labelledby'?: never;
	  }
	| {
			label?: never;
			tooltip?: never;
			optional?: never;
			'aria-label'?: never;
			// Same: a non-empty id, of an element that is actually on the page.
			// Neither is checkable here.
			'aria-labelledby': string;
	  };

type FieldOwnProps = Omit<
	FieldRootProps,
	'children' | 'invalid' | 'aria-label' | 'aria-labelledby'
> & {
	/**
	 * The field's control, and the only child it takes. It is wired
	 * automatically — `id`, `aria-invalid`, `aria-describedby` and the native
	 * `required` are merged onto it — and its own props win over the injected
	 * ones, so a `size` or an `aria-describedby` you set by hand survives.
	 *
	 * It has to be an element a `<label>` can point at (an `<input>`, `<select>`,
	 * `<textarea>`…). A control made of several elements reads
	 * `useFieldContext()` instead; wrapping the group here leaves the caption
	 * pointing at nothing, and the field warns about it in development.
	 *
	 * One limitation, stated plainly because nothing catches it and nothing is
	 * going to: the props are merged onto this child, and a plain function
	 * component — the usual shape of a composite control — has no props to merge
	 * them onto, so it discards all of them silently. That includes the
	 * `aria-label`/`aria-labelledby` the field declared. The field compiles, it
	 * renders, and the control has no accessible name.
	 *
	 * So for a field built through `useFieldContext()` the labelling union
	 * guarantees nothing at all: what you declare on the field is a statement of
	 * intent, and placing the name on the element that really is the control is
	 * entirely yours to do. The `FieldYearMonth` story shows the shape.
	 */
	children: ReactNode;
	/**
	 * Names the control when the design has no room for a visible caption — a
	 * search box in a toolbar, a cell that is edited in place. It lands on the
	 * control, not on the field's root, and the field renders no caption at all,
	 * so nothing takes up the space one would have used.
	 *
	 * Prefer a visible `label`: a name only a screen reader can reach is a name
	 * most users never get. Use `aria-labelledby` instead when the text is
	 * already on screen somewhere else.
	 *
	 * It has to be a non-empty string, and that part is on you: `aria-label={''}`
	 * type-checks and leaves the control named by the empty string.
	 */
	'aria-label'?: string;
	/**
	 * Names the control from text that is already on screen outside the field —
	 * a section heading the field sits under, a column header above it. Takes the
	 * id of that element and lands on the control, and the field renders no
	 * caption of its own.
	 *
	 * Two things nothing here can check, both on you: that the id is non-empty,
	 * and that an element carrying it is on the page. A reference that resolves
	 * to nothing is a control with no name, and nothing on screen shows it.
	 */
	'aria-labelledby'?: string;
	/**
	 * Hint about the field, revealed from an info-icon trigger beside the
	 * caption. You pass the content and nothing else: the field owns where the
	 * trigger sits and which way the balloon opens, so every field in the
	 * product reads the same. Keep it to a sentence — for text that should
	 * always be on screen, use `description`.
	 *
	 * Needs a visible `label` to sit beside, so it is not available on a field
	 * named by `aria-label` or `aria-labelledby`.
	 */
	tooltip?: ReactNode;
	/**
	 * Helper text rendered under the control and announced as part of the
	 * control's description. Use it for guidance the user needs before typing;
	 * `tooltip` is for the aside they can go looking for.
	 */
	description?: ReactNode;
	/**
	 * Appends the muted " (optional)" suffix to the caption. Ignored when
	 * `required` is set, and unavailable on a field with no visible caption to
	 * append it to.
	 */
	optional?: boolean;
	/**
	 * Marks the field required, declared once: the caption gets its decorative
	 * asterisk and the control gets the native `required` attribute, which is
	 * what assistive technology actually announces. Wins over `optional`,
	 * without throwing.
	 */
	required?: boolean;
	/**
	 * Errors to display under the control. Any entry with a `message` also flips
	 * the field to invalid, so the control's `aria-invalid` and the message can
	 * never disagree. Duplicate messages collapse; several render as a list.
	 */
	errors?: FieldErrorLike[];
	/**
	 * Stops the error message being rendered under the control, for screens that
	 * report validation somewhere else — a toast, a summary at the top of the
	 * form. Everything else about an invalid field is untouched: the control
	 * still gets `aria-invalid`, the root still gets `data-invalid`, and the
	 * `aria-describedby` wiring is unchanged.
	 *
	 * Whatever reports the error instead has to be reachable: an unannounced
	 * `aria-invalid` tells a screen reader user that something is wrong and
	 * nothing about what.
	 */
	suppressErrorMessage?: boolean;
};

export type FieldProps = FieldOwnProps & FieldLabellingProps;

/**
 * Field lays out one form field — caption, control, helper text and error — and
 * wires their accessibility relations for free. Pass the parts as props and the
 * control as the single child: Field generates the ids, points the caption at
 * the control, and merges `id`, `aria-invalid`, `aria-describedby` and the
 * native `required` onto it. The control itself stays a plain component that
 * knows nothing about fields, so [Input](?path=/docs/components-input--docs)
 * today and any control tomorrow work unchanged.
 *
 * Reach for the generic Field when you are pairing it with a control the design
 * system has no ready-made field for. For a text field, prefer
 * [FieldText](?path=/docs/components-fieldtext--docs) — one component, no child
 * to pass. The layout is deliberately closed: there is no way to reorder the
 * parts or to assemble the caption yourself, which is what keeps every form in
 * the product looking the same.
 *
 * Every field has to be named, and the types make you declare it: pass a
 * visible `label`, or name the control with `aria-label` or `aria-labelledby`
 * when the design has no room for a caption. Exactly one of the three — none of
 * them, or two of them, does not compile.
 *
 * What that buys you is a declaration, not a working accessible name. A
 * declared name can be empty (`label={''}` compiles), an `aria-labelledby` can
 * point at an id that is not on the page, and a composite control passed as
 * `children` can discard the name along with the rest of the injected wiring.
 * Whether the name reaches the control is the caller's knowledge to apply — see
 * `children` and `aria-labelledby` below.
 *
 * Note that `size` is not a Field prop. Control height belongs to the control:
 * set it on the child, or on a ready-made `Field<X>` that forwards it.
 *
 * Do not use Field for a group of related controls that share one caption
 * (checkbox and radio groups are `fieldset`/`legend` territory), for static
 * key-value display, or to bind a form library — the `Form<X>` layer does that
 * and renders a Field underneath.
 *
 * @summary Form-field layout: caption, control, description and error, wired for free
 *
 * @example
 * <Field
 *   label="Scheduling link"
 *   tooltip="Anyone with this link can book time on your calendar."
 *   description="Shown on your public profile."
 *   errors={[linkError]}
 *   optional>
 *   <Input type="url" placeholder="https://cal.com/jane" />
 * </Field>
 */
export const Field = ({
	children,
	label,
	tooltip,
	description,
	optional,
	required,
	errors,
	suppressErrorMessage = false,
	orientation = 'vertical',
	'aria-label': ariaLabel,
	'aria-labelledby': ariaLabelledBy,
	...rootProps
}: FieldProps) => {
	const captioned = label !== undefined;

	return (
		<FieldRoot
			invalid={hasMessage(errors)}
			required={required}
			// `horizontal` exists to put the caption beside the control, and a field
			// named by `aria-label`/`aria-labelledby` has no caption to put there —
			// the fixed 12rem column would be 192px of empty gutter with the control
			// pushed off to the side of nothing. So a field with no caption lays out
			// in one column whichever orientation it asks for.
			orientation={captioned ? orientation : 'vertical'}
			{...rootProps}>
			{captioned && (
				<FieldLabel optional={optional} tooltip={tooltip}>
					{label}
				</FieldLabel>
			)}

			{/* The name reaches the control, never the field's root: a name on the
			    wrapping <div> labels a group nobody navigates to and leaves the
			    control itself unnamed. */}
			<FieldControl aria-label={ariaLabel} aria-labelledby={ariaLabelledBy}>
				{children}
			</FieldControl>

			{description !== undefined && <FieldDescription>{description}</FieldDescription>}

			{!suppressErrorMessage && <FieldError errors={errors} />}
		</FieldRoot>
	);
};

Field.displayName = 'Field';
