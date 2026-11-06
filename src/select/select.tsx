'use client';

// Stays: `@base-ui/react/select` is `export * as Select`, so its parts hang off one export like
// cmdk's — without the directive they arrive `undefined` (see `command.tsx`).
import {
	ComponentPropsWithRef,
	createContext,
	Dispatch,
	FocusEvent,
	ReactNode,
	RefObject,
	SetStateAction,
	use,
	useEffect,
	useMemo,
	useRef,
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
			'data-readonly:cursor-default'
		],
		value: 'min-w-0 flex-1 truncate data-placeholder:text-text-input-placeholder',
		icon: [
			'flex size-5 shrink-0 items-center justify-center transition-transform duration-150',
			'[&_path]:fill-icon-input-default group-data-popup-open/select-trigger:rotate-180',
			'group-disabled/select-trigger:[&_path]:fill-icon-input-disable'
		],
		// The height cap lives on the surface alone and the list fills it, so a `max-h-*` passed as
		// `className` shrinks the scrolling area instead of cutting off the last rows.
		content: [
			'flex w-(--anchor-width) max-h-[min(18rem,var(--available-height))] flex-col overflow-hidden',
			'rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-lg',
			'outline-none'
		],
		list: 'min-h-0 flex-1 overflow-y-auto scroll-py-2 py-2 outline-none',
		item: [
			'group/item mx-2 my-px flex cursor-pointer items-center gap-2 rounded-[calc(var(--radius-md)-2px)]',
			'px-3 py-2 text-sm text-text-default-base-primary outline-none select-none',
			'data-highlighted:bg-bg-default-base-primary-hover',
			'data-disabled:cursor-default data-disabled:text-text-default-base-tertiary'
		],
		indicator: [
			'flex size-4 shrink-0 items-center justify-center text-text-default-base-primary',
			// Kept in the row while hidden, so the text of every row starts at the same place.
			'invisible group-data-selected/item:visible group-data-disabled/item:text-text-default-base-tertiary'
		]
	}
});

const slots = selectRecipe();

// The trigger's element, which `Root` needs to find the form to reset and `Content` the layer to
// render into, and the trigger's `onBlur`, which `Content` calls when focus leaves the open list.
type SelectContextValue = {
	trigger: HTMLElement | null;
	setTrigger: Dispatch<SetStateAction<HTMLElement | null>>;
	triggerBlur: RefObject<((event: FocusEvent<HTMLElement>) => void) | undefined>;
};

const SelectContext = createContext<SelectContextValue | null>(null);

// A Radix layer traps focus and closes on an outside press. Rendered inside it, the list keeps
// focus on its options and counts as inside.
const LAYER = '[data-slot=modal-content], [data-slot=popover-content]';

const isInList = (element: EventTarget | null) =>
	element instanceof Element && element.closest('[data-slot=select-content]') !== null;

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
	value,
	defaultValue = null,
	onValueChange,
	disabled,
	readOnly,
	required,
	...props
}: SelectRootProps<Value>) => {
	const field = useFieldContext();
	const [trigger, setTrigger] = useState<HTMLElement | null>(null);
	const triggerBlur = useRef<((event: FocusEvent<HTMLElement>) => void) | undefined>(undefined);
	const [initialValue] = useState(defaultValue);
	const [uncontrolledValue, setUncontrolledValue] = useState<Value | null>(defaultValue);
	const isControlled = value !== undefined;

	// A controlled value dropped back to `undefined` (a form library's reset with no defaults)
	// clears the selection, rather than showing whatever the select last held on its own.
	const [previousValue, setPreviousValue] = useState(value);
	if (value !== previousValue) {
		setPreviousValue(value);
		if (value === undefined) setUncontrolledValue(null);
	}

	const reset = useRef(() => {});
	reset.current = () => {
		if (!isControlled) setUncontrolledValue(initialValue);
	};

	// Base UI keeps the value in state and feeds its hidden input from it, so a native reset
	// changes nothing on screen or in what the form submits.
	useEffect(() => {
		const form = trigger?.closest('form');

		if (!form) return;

		const handleReset = () => reset.current();
		form.addEventListener('reset', handleReset);
		return () => form.removeEventListener('reset', handleReset);
	}, [trigger]);

	// Stable between renders, so `Trigger` and `Content` only re-render when the trigger changes.
	const context = useMemo(() => ({ trigger, setTrigger, triggerBlur }), [trigger]);

	return (
		<SelectContext value={context}>
			<SelectPrimitive.Root<Value, false>
				{...props}
				value={isControlled ? value : uncontrolledValue}
				onValueChange={(next, eventDetails) => {
					onValueChange?.(next, eventDetails);
					if (!isControlled && !eventDetails.isCanceled) setUncontrolledValue(next);
				}}
				disabled={disabled ?? field?.disabled}
				readOnly={readOnly ?? field?.readOnly}
				required={required ?? field?.required}
			/>
		</SelectContext>
	);
};
Root.displayName = 'Select.Root';

// The native `size` is not a token here; the control height is. `className` is narrowed to a
// string: Base UI also takes a function of its state, which `cn` cannot merge.
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
 * open the list.
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
	const context = use(SelectContext);
	const setTrigger = context?.setTrigger;
	const mergedRef = useMemo(() => mergeRefs(setTrigger, ref), [setTrigger, ref]);
	const own = mergeProps(
		{
			id: field?.controlId,
			// While the list is open Base UI hides the rest of the page from assistive technology,
			// label included; a direct reference keeps the trigger named.
			'aria-labelledby': field && props['aria-label'] === undefined ? field.labelId : undefined,
			'aria-describedby': field?.describedBy,
			'aria-invalid': field?.invalid || undefined
		},
		props
	);
	const { onBlur } = own;
	// The list's blur event stands in for the trigger's; a form library reads neither's target.
	if (context) context.triggerBlur.current = onBlur as SelectContextValue['triggerBlur']['current'];

	return (
		<SelectPrimitive.Trigger
			{...own}
			ref={mergedRef}
			// Opening moves focus into the list. The field is still being used, so that blur is held
			// back; `Content` reports it once focus leaves the list for anything but the trigger.
			onBlur={event => {
				if (!isInList(event.relatedTarget)) onBlur?.(event);
			}}
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
 * Inside a `Field.Root` the list is named after the field's label; outside
 * one it is named "Options". Pass `aria-label` or `aria-labelledby` to name it
 * after the field when a page has more than one select.
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
	onBlur,
	className,
	children,
	...props
}: SelectContentProps) => {
	const field = useFieldContext();
	const context = use(SelectContext);
	const trigger = context?.trigger;
	// Base UI ships the listbox unnamed. Not the trigger's id: that resolves to the picked value.
	const labelledBy = labelledByProp ?? (labelProp !== undefined ? undefined : field?.labelId);
	const label = labelProp ?? (labelledBy !== undefined ? undefined : 'Options');
	const layer = trigger?.closest<HTMLElement>(LAYER) ?? undefined;
	// Portalled away from the trigger, the list would lose a `dir` set around it.
	const dir = trigger ? getComputedStyle(trigger).direction : undefined;

	return (
		<SelectPrimitive.Portal container={layer}>
			<SelectPrimitive.Positioner
				// Opens below the trigger like every other surface, instead of over it, macOS style.
				alignItemWithTrigger={false}
				side={side}
				align={align}
				sideOffset={sideOffset}
				alignOffset={alignOffset}
				collisionPadding={collisionPadding}
				// A Radix modal (`Modal`) sets `pointer-events: none` on the body and re-enables only its
				// own layers; the surface portals to the body, so it re-enables itself the same way.
				className="isolate z-(--z-index-top-layer) pointer-events-auto">
				<SelectPrimitive.Popup
					{...props}
					data-slot="select-content"
					dir={dir}
					onBlur={event => {
						onBlur?.(event);
						const next = event.relatedTarget;
						if (isInList(next) || next === trigger) return;
						context?.triggerBlur.current?.(event);
					}}
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
 * The picked row carries a check. A `disabled` row is greyed out and cannot be
 * picked, but the arrow keys still stop on it, so it is announced.
 *
 * @summary Option row inside the list
 * @dataAttribute {string} data-slot - Always set to "select-item"
 * @dataAttribute {string} data-selected - Present on the picked row
 * @dataAttribute {string} data-highlighted - Present on the row under the pointer or the keyboard
 */
export const Item = ({ className, children, ...props }: SelectItemProps) => (
	<SelectPrimitive.Item {...props} data-slot="select-item" className={cn(slots.item(), className)}>
		<SelectPrimitive.ItemIndicator
			keepMounted
			data-slot="select-item-indicator"
			className={slots.indicator()}>
			<IconCheck className="size-4" />
		</SelectPrimitive.ItemIndicator>
		<SelectPrimitive.ItemText className="min-w-0 flex-1 truncate">
			{children}
		</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
);
Item.displayName = 'Select.Item';
