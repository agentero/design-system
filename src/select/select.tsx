'use client';

// Stays: `@base-ui/react/select` is `export * as Select`, so its parts hang off one export like
// cmdk's — without the directive they arrive `undefined` (see `command.tsx`).
import {
	ComponentPropsWithRef,
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	use,
	useEffect,
	useMemo,
	useState
} from 'react';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { tv } from 'tailwind-variants';

import { cn, mergeProps, mergeRefs } from '../../lib';
import { IconCheck, IconKeyboardArrowDown } from '../combobox/icons';
import { useFieldContext } from '../field';
import { inputRecipe, InputSize } from '../input';

/**
 * Style recipe for Select. Slots: `trigger` (the closed field), `value`, `icon` (the chevron),
 * `content` (the floating surface), `list`, `item` and `indicator` (the check on the selected
 * row). The trigger wears `Input`'s recipe; the surface and rows match `Combobox`'s.
 *
 * @summary tailwind-variants recipe backing the Select trigger, surface and rows
 */
export const selectRecipe = tv({
	slots: {
		trigger: [
			'flex cursor-pointer items-center gap-2 pe-3 text-start',
			'data-readonly:cursor-default',
			// Focus moves to the options while the list is open; the field keeps its ring meanwhile.
			'data-popup-open:border-border-input-focus data-popup-open:outline-border-input-focus',
			'data-popup-open:outline-[0.125rem] data-popup-open:outline-offset-[-0.0625rem]',
			'aria-invalid:data-popup-open:border-border-input-destructive',
			'aria-invalid:data-popup-open:outline-border-input-destructive'
		],
		value: 'min-w-0 flex-1 truncate data-placeholder:text-text-input-placeholder',
		icon: [
			'flex size-5 shrink-0 items-center justify-center transition-transform duration-150 motion-reduce:transition-none',
			'[&_path]:fill-icon-input-default group-data-popup-open/select-trigger:rotate-180',
			'group-disabled/select-trigger:[&_path]:fill-icon-input-disable'
		],
		// The cap sits on the surface, so a `max-h-*` from `className` shrinks the list, not clips it.
		content: [
			'flex w-(--anchor-width) max-h-[min(18rem,var(--available-height))] flex-col overflow-hidden',
			'rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-lg',
			'outline-none'
		],
		list: 'min-h-0 flex-1 overflow-y-auto scroll-py-2 py-2 outline-none',
		item: [
			'group/item relative mx-2 my-px flex cursor-pointer items-center rounded-[calc(var(--radius-md)-2px)]',
			// The end padding keeps room for the check, so the text never runs under it.
			'py-2 ps-3 pe-9 text-sm text-text-default-base-primary outline-none select-none',
			'data-highlighted:bg-bg-default-base-primary-hover',
			'data-disabled:cursor-default data-disabled:text-text-default-base-tertiary'
		],
		indicator: [
			'pointer-events-none absolute end-3 flex size-4 items-center justify-center',
			'text-text-default-base-primary group-data-disabled/item:text-text-default-base-tertiary'
		]
	}
});

const slots = selectRecipe();

type SelectContextValue = {
	trigger: HTMLElement | null;
	setTrigger: Dispatch<SetStateAction<HTMLElement | null>>;
};

const SelectContext = createContext<SelectContextValue | null>(null);

const LAYER = '[data-slot=modal-content], [data-slot=popover-content]';

export type SelectRootProps<Value> = Omit<SelectPrimitive.Root.Props<Value, false>, 'multiple'>;

/**
 * Root of a select: a button that opens a list of options and shows the one
 * picked. Use it for a pick from a short, known list, where typing would add
 * nothing. For a long list or one the user searches, use
 * [Combobox](?path=/docs/components-combobox--docs); for a handful of options
 * that should all stay visible, use
 * [RadioGroup](?path=/docs/components-radiogroup--docs).
 *
 * Pass the options as `items` (`{ value, label }`) so the trigger shows the
 * picked option's label rather than its value. With `name`, the form submits
 * `name=value`, and `required` blocks the submission until something is picked.
 *
 * Inside a `Field.Root`, `disabled`, `readOnly` and `required` default to the
 * field's, and the trigger takes its label, description and error. Every Base
 * UI root prop is accepted and forwarded — `value`, `defaultValue`,
 * `onValueChange`, `open` and so on. A native form reset puts an uncontrolled
 * select back on its `defaultValue`.
 *
 * With react-hook-form, wire it through `Controller` and render the form with
 * `noValidate`, as `Form.Root` does: a required select also sets the native
 * `required`, and the browser would otherwise block the submit before the
 * form library validates.
 *
 * @summary Root of a single-select dropdown picking from a short list
 * @see {@link https://base-ui.com/react/components/select|Base UI Select}
 *
 * @example
 * <Select.Root items={plans} defaultValue="monthly" name="plan">
 *   <Select.Trigger placeholder="Select a plan" />
 *   <Select.Content>
 *     {plans.map(plan => (
 *       <Select.Item key={plan.value} value={plan.value}>
 *         {plan.label}
 *       </Select.Item>
 *     ))}
 *   </Select.Content>
 * </Select.Root>
 */
export const Root = <Value,>({
	disabled,
	readOnly,
	required,
	...props
}: SelectRootProps<Value>) => {
	const field = useFieldContext();
	const [trigger, setTrigger] = useState<HTMLElement | null>(null);
	const [resetKey, setResetKey] = useState(0);

	// Base UI ignores a native form reset; remounting its root brings `defaultValue` back.
	useEffect(() => {
		const form = trigger?.closest('form');

		if (!form) return;

		const handleReset = () => setResetKey(key => key + 1);
		form.addEventListener('reset', handleReset);
		return () => form.removeEventListener('reset', handleReset);
	}, [trigger]);

	const context = useMemo(() => ({ trigger, setTrigger }), [trigger]);

	return (
		<SelectContext value={context}>
			<SelectPrimitive.Root<Value, false>
				key={resetKey}
				{...props}
				disabled={disabled ?? field?.disabled}
				readOnly={readOnly ?? field?.readOnly}
				required={required ?? field?.required}
			/>
		</SelectContext>
	);
};
Root.displayName = 'Select.Root';

// `className` is a string only: Base UI also takes a function, which `cn` cannot merge.
export type SelectTriggerProps = Omit<
	ComponentPropsWithRef<typeof SelectPrimitive.Trigger>,
	'children' | 'className'
> & {
	/** Classes for the trigger, merged after its own. */
	className?: string;
	/** Control height, matching `Input`. Defaults to `'md'`. */
	size?: InputSize;
	/** Text shown while nothing is picked. */
	placeholder?: ReactNode;
	/**
	 * Renders the picked value. Defaults to the label of the matching entry in
	 * the root's `items`.
	 */
	children?: ComponentPropsWithRef<typeof SelectPrimitive.Value>['children'];
};

/**
 * The closed field: a button drawn as an `Input`, showing the picked option
 * (or `placeholder`) and a chevron. Click, Enter, Space or the arrow keys
 * open the list, and so does a click on the field's `<label>`. While the list
 * is open the focus is on the options, and the field keeps its focus ring.
 *
 * Inside a `Field.Root` it takes the field's `id`, label, description and
 * `invalid` with nothing passed by hand, and its own props win. Outside one,
 * give it an `aria-label` or point a `Label` at its `id`. Native button
 * attributes are forwarded, and its `ref` reaches the button, so a form
 * library can focus the field on a failed submit.
 *
 * @summary Button drawn as an input, showing the picked option and a chevron
 * @dataAttribute {string} data-slot - Always set to "select-trigger"
 * @dataAttribute {string} data-popup-open - Present while the list is open
 * @dataAttribute {string} data-placeholder - Present while nothing is picked
 */
export const Trigger = ({
	size = 'md',
	placeholder,
	children,
	className,
	ref,
	...props
}: SelectTriggerProps) => {
	const field = useFieldContext();
	const setTrigger = use(SelectContext)?.setTrigger;
	const mergedRef = useMemo(() => mergeRefs(setTrigger, ref), [setTrigger, ref]);

	return (
		<SelectPrimitive.Trigger
			{...mergeProps(
				{
					id: field?.controlId,
					// Base UI names the trigger after its own `Field`'s label; ours isn't Base UI's.
					'aria-labelledby': field && props['aria-label'] === undefined ? field.labelId : undefined,
					'aria-describedby': field?.describedBy,
					'aria-invalid': field?.invalid || undefined
				},
				props
			)}
			ref={mergedRef}
			data-slot="select-trigger"
			data-size={size}
			className={cn(inputRecipe({ size }), 'group/select-trigger', slots.trigger(), className)}>
			<SelectPrimitive.Value
				data-slot="select-value"
				placeholder={placeholder}
				className={slots.value()}>
				{children}
			</SelectPrimitive.Value>
			<SelectPrimitive.Icon data-slot="select-icon" className={slots.icon()}>
				<IconKeyboardArrowDown className="size-5" />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	);
};
Trigger.displayName = 'Select.Trigger';

export type SelectContentProps = Omit<
	ComponentPropsWithRef<typeof SelectPrimitive.Popup>,
	'className'
> & {
	/** Classes for the surface, merged after its own. */
	className?: string;
} & Pick<
		ComponentPropsWithRef<typeof SelectPrimitive.Positioner>,
		'side' | 'align' | 'sideOffset' | 'alignOffset' | 'collisionPadding'
	>;

/**
 * The floating list, the same surface as the `Combobox` list. It portals to
 * the body, matches the trigger's width, opens below it and caps its height
 * to the room available, so a long list scrolls. Inside a `Modal` or a
 * `Popover` it renders into that layer instead, so the layer's focus trap and
 * outside press leave the list alone, and Escape closes the list first.
 *
 * Inside a `Field.Root` with a `Field.Label` the list is named after that
 * label; otherwise it is named "Options". Pass `aria-label` or
 * `aria-labelledby` to name it after the field when a page has more than one
 * select.
 *
 * @summary Floating surface holding the options
 * @dataAttribute {string} data-slot - Always set to "select-content"
 */
export const Content = ({
	side = 'bottom',
	align = 'start',
	sideOffset = 8,
	alignOffset,
	collisionPadding = 8,
	'aria-label': labelProp,
	'aria-labelledby': labelledByProp,
	className,
	children,
	...props
}: SelectContentProps) => {
	const field = useFieldContext();
	const trigger = use(SelectContext)?.trigger;

	// Until the trigger mounts there is no layer to portal into: a `defaultOpen` list would
	// land on the body first and then jump into the Modal.
	if (!trigger) return null;

	// Base UI leaves the listbox unnamed; the trigger's id would name it after the picked value.
	const fieldLabel =
		field && trigger.ownerDocument.getElementById(field.labelId) ? field.labelId : undefined;
	const labelledBy = labelledByProp ?? (labelProp !== undefined ? undefined : fieldLabel);
	const label = labelProp ?? (labelledBy !== undefined ? undefined : 'Options');
	const layer = trigger.closest<HTMLElement>(LAYER) ?? undefined;

	return (
		<SelectPrimitive.Portal container={layer}>
			<SelectPrimitive.Positioner
				// Below the trigger like every other surface, not over it.
				alignItemWithTrigger={false}
				side={side}
				align={align}
				sideOffset={sideOffset}
				alignOffset={alignOffset}
				collisionPadding={collisionPadding}
				// `Modal` sets `pointer-events: none` on the body, where the surface may portal.
				className="isolate z-(--z-index-top-layer) pointer-events-auto">
				<SelectPrimitive.Popup
					{...props}
					data-slot="select-content"
					className={cn(slots.content(), className)}>
					<SelectPrimitive.List
						data-slot="select-list"
						aria-label={label}
						aria-labelledby={labelledBy}
						className={slots.list()}>
						{children}
					</SelectPrimitive.List>
				</SelectPrimitive.Popup>
			</SelectPrimitive.Positioner>
		</SelectPrimitive.Portal>
	);
};
Content.displayName = 'Select.Content';

export type SelectItemProps = Omit<
	ComponentPropsWithRef<typeof SelectPrimitive.Item>,
	'className'
> & {
	/** Classes for the row, merged after its own. */
	className?: string;
};

/**
 * One option. `value` is what the select stores and submits; the children are
 * the label shown in the row and, through the root's `items`, in the trigger.
 * The picked row carries a check at its end. A `disabled` row is greyed out
 * and cannot be picked, but the arrow keys still stop on it, so it is
 * announced.
 *
 * @summary Option row inside the list
 * @dataAttribute {string} data-slot - Always set to "select-item"
 * @dataAttribute {string} data-selected - Present on the picked row
 * @dataAttribute {string} data-highlighted - Present on the row under the pointer or the keyboard
 */
export const Item = ({ className, children, ...props }: SelectItemProps) => (
	<SelectPrimitive.Item {...props} data-slot="select-item" className={cn(slots.item(), className)}>
		<SelectPrimitive.ItemText className="min-w-0 flex-1 truncate">
			{children}
		</SelectPrimitive.ItemText>
		<SelectPrimitive.ItemIndicator data-slot="select-item-indicator" className={slots.indicator()}>
			<IconCheck className="size-4" />
		</SelectPrimitive.ItemIndicator>
	</SelectPrimitive.Item>
);
Item.displayName = 'Select.Item';
