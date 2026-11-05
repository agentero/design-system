import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Controller, useForm } from 'react-hook-form';
import { expect, fn, screen, userEvent, waitFor, within } from 'storybook/test';

import { Select } from '.';
import { Button } from '../button';
import { Field } from '../field';
import { Modal } from '../modal';
import { Popover } from '../popover';

const STATES = [
	{ value: 'AZ', label: 'Arizona' },
	{ value: 'CA', label: 'California' },
	{ value: 'FL', label: 'Florida' },
	{ value: 'GA', label: 'Georgia' },
	{ value: 'NY', label: 'New York' },
	{ value: 'TX', label: 'Texas' }
];

/** `Root` owns the picked value; `Trigger` is the closed field and `Content` the list of `Item`s. */
const meta = {
	title: 'Components/Select',
	component: Select.Root,
	tags: ['autodocs'],
	parameters: {
		// Room under the trigger for the open list, so it does not cover the docs around it.
		docs: { story: { height: '320px' } }
	},
	// The list takes the trigger's width; 592px is what the marketplace forms give it.
	decorators: [
		Story => (
			<div className="w-148 max-w-full p-4">
				<Story />
			</div>
		)
	],
	argTypes: {
		items: {
			control: 'object',
			description:
				'The options as `{ value, label }`, so the trigger shows the picked label rather than its value.'
		},
		disabled: {
			control: 'boolean',
			description: 'Blocks the whole select. Defaults to the surrounding `Field.Root`.'
		},
		readOnly: {
			control: 'boolean',
			description:
				'The list still opens, but the value cannot change. Defaults to the surrounding `Field.Root`.'
		},
		required: {
			control: 'boolean',
			description:
				'Blocks a native form submission until something is picked. Defaults to the surrounding `Field.Root`.'
		},
		onValueChange: {
			action: 'valueChange',
			description: 'Called with the picked value and Base UI event details.'
		}
	},
	args: {
		items: STATES
	},
	render: ({ items, ...args }) => (
		<Select.Root {...args} items={items}>
			<Select.Trigger aria-label="State" placeholder="Select a state" />
			<Select.Content>
				{(items as typeof STATES).map(({ value, label }) => (
					<Select.Item key={value} value={value}>
						{label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	)
} satisfies Meta<typeof Select.Root<string>>;

export default meta;

type Story = StoryObj<typeof meta>;

const open = async (trigger: HTMLElement) => {
	await userEvent.click(trigger);
	return screen.findByRole('listbox');
};

// A story ends with the list gone: while it is open Base UI keeps focus guards on the page, which
// the accessibility check run after every story reports.
const close = async () => {
	await userEvent.keyboard('{Escape}');
	await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
};

/** @summary Pick an option from the list */
export const Default: Story = {
	args: { onValueChange: fn() },
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox', { name: 'State' });

		await expect(trigger).toHaveTextContent('Select a state');

		const list = await open(trigger);
		await expect(list).toHaveAccessibleName('Options');
		await userEvent.click(within(list).getByRole('option', { name: 'Florida' }));

		await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(trigger).toHaveTextContent('Florida');
		await expect(args.onValueChange).toHaveBeenLastCalledWith('FL', expect.anything());
	}
};

/**
 * Starts on a value; the list opens with that option checked.
 *
 * @summary Uncontrolled with a starting value
 */
export const WithValue: Story = {
	args: { defaultValue: 'TX' },
	play: async ({ canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: 'State' });

		await expect(trigger).toHaveTextContent('Texas');
		const list = await open(trigger);
		await expect(list.scrollHeight).toBe(list.clientHeight);
		await expect(within(list).getByRole('option', { name: 'Texas' })).toHaveAttribute(
			'aria-selected',
			'true'
		);
		await close();
	}
};

/**
 * Trigger heights match `Input`: 32, 40 and 48px.
 *
 * @summary Small, medium and large triggers
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex w-full flex-col gap-4">
			{(['sm', 'md', 'lg'] as const).map(size => (
				<Select.Root key={size} items={STATES} defaultValue="CA">
					<Select.Trigger aria-label={`State ${size}`} size={size} />
					<Select.Content>
						{STATES.map(({ value, label }) => (
							<Select.Item key={value} value={value}>
								{label}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Root>
			))}
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		for (const [size, height] of [
			['sm', 32],
			['md', 40],
			['lg', 48]
		] as const) {
			await expect(
				canvas.getByRole('combobox', { name: `State ${size}` }).getBoundingClientRect().height
			).toBe(height);
		}
	}
};

/**
 * Inside a `Field.Root`, the label, description, error, `invalid` and
 * `required` reach the trigger with nothing wired by hand.
 *
 * @summary Wired to a surrounding Field
 */
export const InsideField: Story = {
	render: () => (
		<div className="w-full">
			<Field.Root invalid required>
				<Field.Label>State</Field.Label>
				<Select.Root items={STATES}>
					<Select.Trigger placeholder="Select a state" />
					<Select.Content>
						{STATES.map(({ value, label }) => (
							<Select.Item key={value} value={value}>
								{label}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Root>
				<Field.Description>Where the risk is located.</Field.Description>
				<Field.Error errors={[{ message: 'Choose a state' }]} />
			</Field.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: /State/ });

		await expect(trigger).toHaveAttribute('aria-invalid', 'true');
		await expect(trigger).toHaveAccessibleDescription(
			/located.*Choose a state|Choose a state.*located/
		);
		await expect(trigger).toHaveStyle({ borderColor: 'rgb(217, 38, 38)' });
		const list = await open(trigger);
		await expect(list).toHaveAccessibleName(/State/);
		await close();
	}
};

/** @summary Whole select disabled */
export const Disabled: Story = {
	args: { disabled: true, defaultValue: 'CA' },
	play: async ({ canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: 'State' });

		await expect(trigger).toBeDisabled();
		await userEvent.click(trigger, { pointerEventsCheck: 0 });
		await expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
	}
};

/**
 * `disabled` on one item leaves the rest selectable. The arrow keys still stop
 * on it, so it is announced, but neither Enter nor a press picks it.
 *
 * @summary One option disabled
 */
export const DisabledItem: Story = {
	args: { onValueChange: fn() },
	render: args => (
		<Select.Root {...args} items={STATES}>
			<Select.Trigger aria-label="State" placeholder="Select a state" />
			<Select.Content>
				{STATES.map(({ value, label }) => (
					<Select.Item key={value} value={value} disabled={value === 'FL'}>
						{label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	),
	play: async ({ args, canvasElement }) => {
		const list = await open(within(canvasElement).getByRole('combobox', { name: 'State' }));

		await expect(within(list).getByRole('option', { name: 'Florida' })).toHaveAttribute(
			'aria-disabled',
			'true'
		);
		await userEvent.click(within(list).getByRole('option', { name: 'Florida' }));
		await expect(args.onValueChange).not.toHaveBeenCalled();
		within(list).getByRole('option', { name: 'California' }).focus();
		await userEvent.keyboard('{ArrowDown}{Enter}');
		await expect(args.onValueChange).not.toHaveBeenCalled();
		await close();
	}
};

/**
 * The list still opens to show the options, but neither a press, the arrow
 * keys nor typing a letter changes the value.
 *
 * @summary Read-only select
 */
export const ReadOnly: Story = {
	args: { readOnly: true, defaultValue: 'CA', onValueChange: fn() },
	play: async ({ args, canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: 'State' });

		const list = await open(trigger);
		await userEvent.click(within(list).getByRole('option', { name: 'Texas' }));
		await userEvent.keyboard('{ArrowDown}{Enter}');
		await userEvent.keyboard('g');
		await userEvent.keyboard('{Enter}');
		await expect(trigger).toHaveTextContent('California');
		await expect(args.onValueChange).not.toHaveBeenCalled();
		await close();
	}
};

/** @summary Controlled select whose value is set from outside */
export const Controlled: Story = {
	render: () => {
		const [state, setState] = useState<string | null>('CA');

		return (
			<div className="flex w-full flex-col items-start gap-6">
				<div className="flex gap-3">
					<Button variant="secondary" size="sm" onClick={() => setState(null)}>
						Clear
					</Button>
					<Button variant="secondary" size="sm" onClick={() => setState('NY')}>
						Choose New York
					</Button>
				</div>
				<div className="w-full">
					<Select.Root items={STATES} value={state} onValueChange={setState}>
						<Select.Trigger aria-label="State" placeholder="Select a state" />
						<Select.Content>
							{STATES.map(({ value, label }) => (
								<Select.Item key={value} value={value}>
									{label}
								</Select.Item>
							))}
						</Select.Content>
					</Select.Root>
				</div>
				<output className="text-sm">Selected: {state ?? 'none'}</output>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox', { name: 'State' });

		await userEvent.click(canvas.getByRole('button', { name: 'Choose New York' }));
		await expect(trigger).toHaveTextContent('New York');
		await userEvent.click(canvas.getByRole('button', { name: 'Clear' }));
		await expect(trigger).toHaveTextContent('Select a state');
		await expect(canvas.getByRole('status')).toHaveTextContent('Selected: none');
	}
};

/**
 * With `name`, the form submits `name=value`, and `required` blocks the
 * submission until something is picked.
 *
 * @summary Native form submission
 */
export const InForm: Story = {
	render: () => {
		const [submitted, setSubmitted] = useState<string | null>(null);

		return (
			<form
				className="flex w-full flex-col items-start gap-6"
				onSubmit={event => {
					event.preventDefault();
					setSubmitted(String(new FormData(event.currentTarget).get('state')));
				}}>
				<div className="w-full">
					<Select.Root items={STATES} name="state" required>
						<Select.Trigger aria-label="State" placeholder="Select a state" />
						<Select.Content>
							{STATES.map(({ value, label }) => (
								<Select.Item key={value} value={value}>
									{label}
								</Select.Item>
							))}
						</Select.Content>
					</Select.Root>
				</div>
				<Button type="submit">Submit</Button>
				{submitted && <output className="text-sm">Submitted: {submitted}</output>}
			</form>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(canvas.queryByRole('status')).not.toBeInTheDocument();

		const list = await open(canvas.getByRole('combobox', { name: 'State' }));
		await userEvent.click(within(list).getByRole('option', { name: 'Georgia' }));
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: GA');
	}
};

/**
 * With react-hook-form, wire the select through `Controller` and put
 * `field.ref` on the trigger, so a failed submit focuses it.
 *
 * @summary React Hook Form through Controller
 */
export const WithReactHookForm: Story = {
	render: () => {
		const { control, handleSubmit } = useForm<{ state: string | null }>({
			defaultValues: { state: null }
		});
		const [submitted, setSubmitted] = useState<string | null>(null);

		return (
			// `noValidate`, as `Form.Root` renders it: the field's validation is the form library's.
			<form
				noValidate
				className="flex w-full flex-col items-start gap-6"
				onSubmit={handleSubmit(data => setSubmitted(data.state))}>
				<Controller
					name="state"
					control={control}
					rules={{ required: 'Choose a state' }}
					render={({ field, fieldState }) => (
						<Field.Root invalid={fieldState.invalid} required className="w-full">
							<Field.Label>State</Field.Label>
							<Select.Root items={STATES} value={field.value} onValueChange={field.onChange}>
								<Select.Trigger
									ref={field.ref}
									onBlur={field.onBlur}
									placeholder="Select a state"
								/>
								<Select.Content>
									{STATES.map(({ value, label }) => (
										<Select.Item key={value} value={value}>
											{label}
										</Select.Item>
									))}
								</Select.Content>
							</Select.Root>
							<Field.Error errors={[fieldState.error]} />
						</Field.Root>
					)}
				/>
				<Button type="submit">Submit</Button>
				{submitted && <output className="text-sm">Submitted: {submitted}</output>}
			</form>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox', { name: /State/ });

		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(trigger).toHaveFocus();
		await waitFor(() => expect(trigger).toHaveAccessibleDescription('Choose a state'));

		const list = await open(trigger);
		await userEvent.click(within(list).getByRole('option', { name: 'Arizona' }));
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: AZ');
	}
};

/**
 * A long option label is cut with an ellipsis in the trigger and in its row,
 * and the chevron keeps its place.
 *
 * @summary Long labels truncate
 */
export const LongLabel: Story = {
	render: () => {
		const items = [
			{ value: 'ho3', label: 'Homeowners HO-3, special form, including dwelling and contents' },
			{ value: 'ho6', label: 'Condo unit owners HO-6' }
		];

		return (
			<div className="w-60">
				<Select.Root items={items} defaultValue="ho3">
					<Select.Trigger aria-label="Policy form" />
					<Select.Content>
						{items.map(({ value, label }) => (
							<Select.Item key={value} value={value}>
								{label}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: 'Policy form' });
		const value = trigger.querySelector('[data-slot=select-value]')!;

		await expect(trigger.getBoundingClientRect().height).toBe(40);
		await expect(value.scrollWidth).toBeGreaterThan(value.clientWidth);
	}
};

/**
 * Every state of the trigger side by side, for checking against the design.
 *
 * @summary Visual comparison of the trigger states
 */
export const AllStates: Story = {
	render: () => (
		<div className="grid w-full grid-cols-2 gap-6">
			{(
				[
					['Placeholder', {}],
					['Filled', { defaultValue: 'TX' }],
					['Disabled', { defaultValue: 'TX', disabled: true }],
					['Read-only', { defaultValue: 'TX', readOnly: true }]
				] as const
			).map(([title, props]) => (
				<div key={title} className="flex flex-col gap-2">
					<span className="text-xs text-text-input-placeholder">{title}</span>
					<Select.Root items={STATES} {...props}>
						<Select.Trigger aria-label={title} placeholder="Select a state" />
						<Select.Content>
							{STATES.map(({ value, label }) => (
								<Select.Item key={value} value={value}>
									{label}
								</Select.Item>
							))}
						</Select.Content>
					</Select.Root>
				</div>
			))}
			<div className="flex flex-col gap-2">
				<span className="text-xs text-text-input-placeholder">Invalid</span>
				<Select.Root items={STATES}>
					<Select.Trigger aria-label="Invalid" aria-invalid placeholder="Select a state" />
					<Select.Content>
						{STATES.map(({ value, label }) => (
							<Select.Item key={value} value={value}>
								{label}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Root>
			</div>
		</div>
	)
};

/**
 * Enter, Space or the arrow keys open the list; the arrows move, Enter picks
 * and Escape closes it, handing focus back to the trigger.
 *
 * @summary Keyboard selection
 */
export const Keyboard: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	args: { defaultValue: 'CA', onValueChange: fn() },
	play: async ({ args, canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: 'State' });

		await userEvent.tab();
		await expect(trigger).toHaveFocus();
		await userEvent.keyboard('{ArrowDown}');
		const list = await screen.findByRole('listbox');
		await waitFor(() =>
			expect(within(list).getByRole('option', { name: 'California' })).toHaveFocus()
		);
		await userEvent.keyboard('{ArrowDown}{Enter}');
		await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(trigger).toHaveTextContent('Florida');
		await expect(args.onValueChange).toHaveBeenLastCalledWith('FL', expect.anything());
		await expect(trigger).toHaveFocus();

		await userEvent.keyboard('{Enter}');
		await screen.findByRole('listbox');
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(trigger).toHaveTextContent('Florida');
		await expect(trigger).toHaveFocus();
	}
};

/**
 * The list matches the trigger's width, opens below it and scrolls once it
 * runs out of height.
 *
 * @summary List geometry and scrolling
 */
export const ListGeometry: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => {
		const many = Array.from({ length: 30 }, (_, index) => ({
			value: `option-${index}`,
			label: `Option ${index + 1}`
		}));

		return (
			<div className="m-4 w-72">
				<Select.Root items={many}>
					<Select.Trigger aria-label="Option" placeholder="Pick one" />
					<Select.Content>
						{many.map(({ value, label }) => (
							<Select.Item key={value} value={value}>
								{label}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: 'Option' });
		const list = await open(trigger);
		const surface = list.closest('[data-slot=select-content]')!;
		const box = trigger.getBoundingClientRect();
		const panel = surface.getBoundingClientRect();

		await expect(Math.round(panel.width)).toBe(Math.round(box.width));
		await expect(Math.round(panel.left)).toBe(Math.round(box.left));
		await expect(Math.round(panel.top - box.bottom)).toBe(8);
		await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight);
		await close();
	}
};

/**
 * A `max-h-*` on `Content` shrinks the scrolling area; the last option is still
 * reachable by scrolling.
 *
 * @summary Shorter list through className
 */
export const ContentMaxHeight: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => (
		<Select.Root items={STATES}>
			<Select.Trigger aria-label="State" placeholder="Select a state" />
			<Select.Content className="max-h-40">
				{STATES.map(({ value, label }) => (
					<Select.Item key={value} value={value}>
						{label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	),
	play: async ({ canvasElement }) => {
		const list = await open(within(canvasElement).getByRole('combobox', { name: 'State' }));
		const surface = list.closest('[data-slot=select-content]')!;

		await expect(surface.getBoundingClientRect().height).toBe(160);
		await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight);
		list.scrollTop = list.scrollHeight;
		await waitFor(() =>
			expect(
				within(list).getByRole('option', { name: 'Texas' }).getBoundingClientRect().bottom
			).toBeLessThanOrEqual(surface.getBoundingClientRect().bottom)
		);
		await close();
	}
};

/**
 * A native form reset puts an uncontrolled select back on its `defaultValue`,
 * on screen and in what the form submits.
 *
 * @summary Native form reset
 */
export const FormReset: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => {
		const [submitted, setSubmitted] = useState<string | null>(null);

		return (
			<form
				className="flex w-full flex-col items-start gap-6"
				onSubmit={event => {
					event.preventDefault();
					setSubmitted(String(new FormData(event.currentTarget).get('state')));
				}}>
				<div className="w-full">
					<Select.Root items={STATES} name="state" defaultValue="CA">
						<Select.Trigger aria-label="State" />
						<Select.Content>
							{STATES.map(({ value, label }) => (
								<Select.Item key={value} value={value}>
									{label}
								</Select.Item>
							))}
						</Select.Content>
					</Select.Root>
				</div>
				<div className="flex gap-3">
					<Button type="reset" variant="secondary">
						Reset
					</Button>
					<Button type="submit">Submit</Button>
				</div>
				{submitted && <output className="text-sm">Submitted: {submitted}</output>}
			</form>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox', { name: 'State' });

		const list = await open(trigger);
		await userEvent.click(within(list).getByRole('option', { name: 'Georgia' }));
		await expect(trigger).toHaveTextContent('Georgia');
		await userEvent.click(canvas.getByRole('button', { name: 'Reset' }));
		await expect(trigger).toHaveTextContent('California');
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: CA');
	}
};

/**
 * Inside a `Modal`, the list renders into the dialog, so the arrow keys keep
 * focus on the options. Escape closes the list first and the modal on the
 * next press.
 *
 * @summary Keyboard and Escape inside a Modal
 */
export const InsideModal: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => (
		<Modal.Root>
			<Modal.Trigger asChild>
				<Button variant="secondary">Edit address</Button>
			</Modal.Trigger>
			<Modal.Content>
				<Modal.Title>Edit address</Modal.Title>
				<Modal.Body>
					<Select.Root items={STATES} defaultValue="CA">
						<Select.Trigger aria-label="State" />
						<Select.Content>
							{STATES.map(({ value, label }) => (
								<Select.Item key={value} value={value}>
									{label}
								</Select.Item>
							))}
						</Select.Content>
					</Select.Root>
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>
	),
	play: async ({ canvasElement }) => {
		const body = within(document.body);

		await userEvent.click(within(canvasElement).getByRole('button', { name: 'Edit address' }));
		const dialog = await body.findByRole('dialog', { name: 'Edit address' });
		const trigger = within(dialog).getByRole('combobox', { name: 'State' });

		trigger.focus();
		await userEvent.keyboard('{ArrowDown}');
		const list = await body.findByRole('listbox');
		await expect(dialog).toContainElement(list);
		await waitFor(() =>
			expect(within(list).getByRole('option', { name: 'California' })).toHaveFocus()
		);
		await userEvent.keyboard('{ArrowDown}');
		await expect(within(list).getByRole('option', { name: 'Florida' })).toHaveFocus();
		await userEvent.keyboard('{Enter}');
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(trigger).toHaveTextContent('Florida');

		await userEvent.keyboard('{ArrowDown}');
		await body.findByRole('listbox');
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(dialog).toHaveAttribute('data-state', 'open');
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
	}
};

/**
 * Inside a `Popover`, Escape on the open list closes the list only; the next
 * one closes the popover.
 *
 * @summary Escape inside a Popover
 */
export const InsidePopover: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button variant="secondary">Filter</Button>
			</Popover.Trigger>
			<Popover.Content className="w-72">
				<Select.Root items={STATES}>
					<Select.Trigger aria-label="State" placeholder="Any state" />
					<Select.Content>
						{STATES.map(({ value, label }) => (
							<Select.Item key={value} value={value}>
								{label}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Root>
			</Popover.Content>
		</Popover.Root>
	),
	play: async ({ canvasElement }) => {
		const body = within(document.body);
		const button = within(canvasElement).getByRole('button', { name: 'Filter' });

		await userEvent.click(button);
		const trigger = await body.findByRole('combobox', { name: 'State' });
		const list = await open(trigger);
		await userEvent.keyboard('{ArrowDown}');
		await expect(list.querySelector(':focus')).not.toBeNull();
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(trigger).toBeVisible();
		await userEvent.keyboard('{Escape}');
		await waitFor(() =>
			expect(body.queryByRole('combobox', { name: 'State' })).not.toBeInTheDocument()
		);
	}
};

/**
 * Under a `dir="rtl"` container the list keeps the direction, even though it
 * renders away from the trigger.
 *
 * @summary Right-to-left
 */
export const RightToLeft: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => (
		<div dir="rtl" className="w-full">
			<Select.Root items={STATES} defaultValue="TX">
				<Select.Trigger aria-label="State" />
				<Select.Content>
					{STATES.map(({ value, label }) => (
						<Select.Item key={value} value={value}>
							{label}
						</Select.Item>
					))}
				</Select.Content>
			</Select.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const list = await open(within(canvasElement).getByRole('combobox', { name: 'State' }));
		await expect(getComputedStyle(list).direction).toBe('rtl');
		await close();
	}
};

/**
 * Opening the list and moving through it is still using the field, so the
 * trigger's `onBlur` waits: it runs once, when focus leaves the select.
 *
 * @summary onBlur only when focus leaves the select
 */
export const BlurOnLeave: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => {
		const [blurs, setBlurs] = useState(0);

		return (
			<div className="flex w-full flex-col items-start gap-6">
				<div className="w-full">
					<Select.Root items={STATES} defaultValue="CA">
						<Select.Trigger aria-label="State" onBlur={() => setBlurs(count => count + 1)} />
						<Select.Content>
							{STATES.map(({ value, label }) => (
								<Select.Item key={value} value={value}>
									{label}
								</Select.Item>
							))}
						</Select.Content>
					</Select.Root>
				</div>
				<Button variant="secondary">Next</Button>
				<output className="text-sm">Blurs: {blurs}</output>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox', { name: 'State' });

		trigger.focus();
		await userEvent.keyboard('{ArrowDown}');
		const list = await screen.findByRole('listbox');
		await userEvent.keyboard('{ArrowDown}{ArrowDown}');
		await expect(list.querySelector(':focus')).not.toBeNull();
		await expect(canvas.getByRole('status')).toHaveTextContent('Blurs: 0');
		await close();
		await expect(trigger).toHaveFocus();
		await expect(canvas.getByRole('status')).toHaveTextContent('Blurs: 0');
		await userEvent.tab();
		await expect(canvas.getByRole('status')).toHaveTextContent('Blurs: 1');

		await open(trigger);
		await userEvent.click(canvas.getByRole('button', { name: 'Next' }));
		await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(canvas.getByRole('status')).toHaveTextContent('Blurs: 2');
	}
};
