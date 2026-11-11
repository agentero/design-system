import { Fragment, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Controller, useForm } from 'react-hook-form';
import { expect, fn, screen, userEvent, waitFor, within } from 'storybook/test';

import { Select, type SelectRootProps } from '.';
import { Button } from '../button';
import { Field } from '../field';
import type { InputSize } from '../input';
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

const REGIONS = [
	{
		label: 'North',
		options: [
			{ value: 'AZ', label: 'Arizona' },
			{ value: 'MN', label: 'Minnesota' },
			{ value: 'FL', label: 'Florida' }
		]
	},
	{ label: 'West', options: [{ value: 'CA', label: 'California' }] },
	{ label: 'South', options: [{ value: 'TX', label: 'Texas' }] }
];

type StoryArgs = SelectRootProps & {
	/** Control height of the trigger, matching `Input`. */
	size?: InputSize;
	/** Text the trigger shows while nothing is picked. */
	placeholder?: string;
};

/**
 * Select is a button that opens a list of options and shows the one picked.
 * Use it for a pick from a short, known list, where typing would add nothing.
 * For a long list or one the user searches, use Combobox; for a handful of
 * options that should all stay visible, use RadioGroup. `Root` owns the picked
 * value; `Trigger` is the closed field and `Content` the list of `Item`s.
 */
const meta = {
	title: 'Components/Select',
	component: Select.Root,
	tags: ['autodocs'],
	parameters: {
		docs: { story: { height: '320px' } }
	},
	// 592px is what the marketplace forms give a field.
	decorators: [
		Story => (
			<div className="w-148 max-w-full p-4">
				<Story />
			</div>
		)
	],
	argTypes: {
		size: {
			control: 'inline-radio',
			options: ['sm', 'md', 'lg'],
			description: 'Control height of the trigger, matching `Input`. Set on `Select.Trigger`.'
		},
		placeholder: {
			control: 'text',
			description: 'Text the trigger shows while nothing is picked. Set on `Select.Trigger`.'
		},
		disabled: {
			control: 'boolean',
			description: 'Blocks the whole select. Defaults to the surrounding `Field.Root`.'
		},
		required: {
			control: 'boolean',
			description:
				'Blocks a native form submission until something is picked. Defaults to the surrounding `Field.Root`.'
		},
		onValueChange: {
			action: 'valueChange',
			description: 'Called with the picked value.'
		}
	},
	args: {
		size: 'md',
		placeholder: 'Select a state'
	},
	render: ({ size, placeholder, ...args }) => (
		<Select.Root {...args}>
			<Select.Trigger aria-label="State" size={size} placeholder={placeholder} />
			<Select.Content>
				{STATES.map(({ value, label }) => (
					<Select.Item key={value} value={value}>
						{label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	)
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

const open = async (trigger: HTMLElement) => {
	await userEvent.click(trigger);
	return screen.findByRole('listbox');
};

// Stories end with the list closed: its focus guards fail the accessibility check.
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
		const viewport = list.querySelector<HTMLElement>('[data-slot=select-list]')!;
		await expect(list).toHaveAccessibleName('Options');
		await expect(viewport.scrollHeight).toBe(viewport.clientHeight);
		await userEvent.click(within(list).getByRole('option', { name: 'Florida' }));

		await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(trigger).toHaveTextContent('Florida');
		await expect(args.onValueChange).toHaveBeenLastCalledWith('FL');
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
				<Select.Root>
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

/**
 * `disabled` on one item leaves the rest selectable. It is announced as
 * disabled, a press does not pick it, and the arrow keys skip it.
 *
 * @summary One option disabled
 */
export const DisabledItem: Story = {
	args: { onValueChange: fn() },
	render: args => (
		<Select.Root {...args}>
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
		await userEvent.keyboard('{ArrowDown}');
		await expect(within(list).getByRole('option', { name: 'Georgia' })).toHaveFocus();
		await close();
	}
};

/** @summary Controlled select whose value is set from outside */
export const Controlled: Story = {
	render: () => {
		const [state, setState] = useState('CA');

		return (
			<div className="flex w-full flex-col items-start gap-6">
				<div className="flex gap-3">
					<Button variant="secondary" size="sm" onClick={() => setState('')}>
						Clear
					</Button>
					<Button variant="secondary" size="sm" onClick={() => setState('NY')}>
						Choose New York
					</Button>
				</div>
				<div className="w-full">
					<Select.Root value={state} onValueChange={setState}>
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
				<output className="text-sm">Selected: {state || 'none'}</output>
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
					<Select.Root name="state" required>
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
		const form = canvasElement.querySelector('form')!;

		await expect(form.checkValidity()).toBe(false);

		const list = await open(canvas.getByRole('combobox', { name: 'State' }));
		await userEvent.click(within(list).getByRole('option', { name: 'Georgia' }));
		await expect(form.checkValidity()).toBe(true);
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
		const { control, handleSubmit } = useForm<{ state: string }>({
			defaultValues: { state: '' }
		});
		const [submitted, setSubmitted] = useState<string | null>(null);

		return (
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
							<Select.Root value={field.value} onValueChange={field.onChange}>
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
		await waitFor(() => expect(trigger).toHaveFocus());
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
				<Select.Root defaultValue="ho3">
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
		await waitFor(() => expect(value.scrollWidth).toBeGreaterThan(value.clientWidth));
	}
};

const US_STATES = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming'
].map(label => ({ value: label, label }));

/**
 * With more options than fit, the list stops at six rows and scrolls, with an
 * arrow at each end while there is more to see, and it opens with the picked
 * option in view. It matches the trigger's width and opens 8px below it. Past
 * a few dozen options, or when
 * people know what they are looking for, a Combobox lets them type instead.
 *
 * @summary Long list that scrolls
 */
export const ManyItems: Story = {
	args: { defaultValue: 'Ohio' },
	parameters: { docs: { story: { height: '400px' } } },
	render: args => (
		<Select.Root {...args}>
			<Select.Trigger aria-label="State" placeholder="Select a state" />
			<Select.Content>
				{US_STATES.map(({ value, label }) => (
					<Select.Item key={value} value={value}>
						{label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	),
	play: async ({ canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: 'State' });
		const list = await open(trigger);
		const picked = within(list).getByRole('option', { name: 'Ohio' });
		const viewport = list.querySelector<HTMLElement>('[data-slot=select-list]')!;
		const box = trigger.getBoundingClientRect();
		const panel = list.getBoundingClientRect();

		await expect(Math.round(panel.width)).toBe(Math.round(box.width));
		await expect(Math.round(panel.left)).toBe(Math.round(box.left));
		await expect(Math.round(panel.top - box.bottom)).toBe(8);
		await expect(viewport.scrollHeight).toBeGreaterThan(viewport.clientHeight);
		await expect(picked).toHaveAttribute('aria-selected', 'true');
		await waitFor(() => {
			expect(list.querySelector('[data-slot=select-scroll-up]')).not.toBeNull();
			expect(list.querySelector('[data-slot=select-scroll-down]')).not.toBeNull();
		});
		await waitFor(() => {
			const row = picked.getBoundingClientRect();
			const view = viewport.getBoundingClientRect();
			expect(row.top).toBeGreaterThanOrEqual(view.top);
			expect(row.bottom).toBeLessThanOrEqual(view.bottom);
		});
		await close();
	}
};

/**
 * Options grouped into sections: each `Group` has a `GroupLabel` as heading,
 * with a `Separator` between groups. A single group can carry a heading too.
 *
 * @summary Options in sections
 */
export const Sections: Story = {
	parameters: { docs: { story: { height: '360px' } } },
	render: () => (
		<div className="grid w-full grid-cols-2 gap-6">
			<Select.Root defaultValue="FL">
				<Select.Trigger aria-label="Region" />
				<Select.Content>
					{REGIONS.map((region, index) => (
						<Fragment key={region.label}>
							{index > 0 && <Select.Separator />}
							<Select.Group>
								<Select.GroupLabel>{region.label}</Select.GroupLabel>
								{region.options.map(({ value, label }) => (
									<Select.Item key={value} value={value}>
										{label}
									</Select.Item>
								))}
							</Select.Group>
						</Fragment>
					))}
				</Select.Content>
			</Select.Root>
			<Select.Root defaultValue="CA">
				<Select.Trigger aria-label="Recent state" />
				<Select.Content>
					<Select.Group>
						<Select.GroupLabel>Recently used</Select.GroupLabel>
						{STATES.slice(0, 3).map(({ value, label }) => (
							<Select.Item key={value} value={value}>
								{label}
							</Select.Item>
						))}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const list = await open(within(canvasElement).getByRole('combobox', { name: 'Region' }));

		await expect(within(list).getAllByRole('group')).toHaveLength(3);
		await expect(
			within(within(list).getByRole('group', { name: 'North' })).getByRole('option', {
				name: 'Florida'
			})
		).toHaveAttribute('aria-selected', 'true');
		await close();
	}
};

/**
 * `trailing` puts short text at the end of a row, such as a code. It stays in
 * the list: the trigger shows only the label.
 *
 * @summary Text at the end of a row
 */
export const TrailingText: Story = {
	render: () => (
		<Select.Root defaultValue="CA">
			<Select.Trigger aria-label="State" />
			<Select.Content>
				{STATES.map(({ value, label }) => (
					<Select.Item key={value} value={value} trailing={value}>
						{label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	),
	play: async ({ canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: 'State' });
		const list = await open(trigger);

		await expect(within(list).getByRole('option', { name: /Texas/ })).toHaveTextContent('TX');
		await userEvent.click(within(list).getByRole('option', { name: /Texas/ }));
		await waitFor(() => expect(trigger).toHaveTextContent(/^Texas$/));
	}
};

/**
 * `position="item-aligned"` on `Content` opens the list over the trigger, with
 * the picked option on top of it, instead of below.
 *
 * @summary List opening on the picked option
 */
export const OpensOnPickedOption: Story = {
	parameters: { docs: { story: { height: '360px' } } },
	render: () => (
		<div className="pt-24">
			<Select.Root defaultValue="FL">
				<Select.Trigger aria-label="State" />
				<Select.Content position="item-aligned">
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
		const trigger = within(canvasElement).getByRole('combobox', { name: 'State' });
		const list = await open(trigger);
		const box = trigger.getBoundingClientRect();

		await waitFor(() => {
			const row = within(list).getByRole('option', { name: 'Florida' }).getBoundingClientRect();
			expect(row.top).toBeLessThan(box.bottom);
			expect(row.bottom).toBeGreaterThan(box.top);
		});
		await close();
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
					['Disabled', { defaultValue: 'TX', disabled: true }]
				] as const
			).map(([title, props]) => (
				<div key={title} className="flex flex-col gap-2">
					<span className="text-xs text-text-input-placeholder">{title}</span>
					<Select.Root {...props}>
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
				<Select.Root>
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
 * and Escape closes it, handing focus back to the trigger. The trigger keeps
 * its focus ring while the options hold the focus.
 *
 * @summary Keyboard selection
 */
export const Keyboard: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	args: { defaultValue: 'CA', onValueChange: fn() },
	play: async ({ args, canvasElement }) => {
		const trigger = within(canvasElement).getByRole('combobox', { name: 'State' });
		const focusBorder = 'rgb(45, 48, 57)';

		await userEvent.tab();
		await expect(trigger).toHaveFocus();
		await waitFor(() => expect(trigger).toHaveStyle({ borderColor: focusBorder }));
		await userEvent.keyboard('{ArrowDown}');
		const list = await screen.findByRole('listbox');
		await waitFor(() =>
			expect(within(list).getByRole('option', { name: 'California' })).toHaveFocus()
		);
		await expect(trigger).toHaveStyle({ borderColor: focusBorder });
		await userEvent.keyboard('{ArrowDown}{Enter}');
		await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(trigger).toHaveTextContent('Florida');
		await expect(args.onValueChange).toHaveBeenLastCalledWith('FL');
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
					<Select.Root name="state" defaultValue="CA">
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
		await waitFor(() => expect(trigger).toHaveTextContent('California'));
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: CA');
	}
};

/**
 * Inside a `Modal`, the list sits on top of the dialog in Radix's layer stack,
 * so focus moves to it. Escape closes the list first and the modal on the next
 * press.
 *
 * @summary Focus and Escape inside a Modal
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
					<Select.Root>
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

		const list = await open(trigger);
		await waitFor(() => expect(list).toContainElement(document.activeElement as HTMLElement));
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(dialog).toHaveAttribute('data-state', 'open');

		await userEvent.click(within(await open(trigger)).getByRole('option', { name: 'California' }));
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
		trigger.focus();
		await userEvent.keyboard('{ArrowDown}');
		const options = await body.findByRole('listbox');
		await waitFor(() =>
			expect(within(options).getByRole('option', { name: 'California' })).toHaveFocus()
		);
		await userEvent.keyboard('{ArrowDown}');
		await expect(within(options).getByRole('option', { name: 'Florida' })).toHaveFocus();
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
				<Select.Root>
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
		await waitFor(() => expect(list).toContainElement(document.activeElement as HTMLElement));
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(trigger.closest('[data-slot=popover-content]')).toHaveAttribute(
			'data-state',
			'open'
		);
		await userEvent.keyboard('{Escape}');
		await waitFor(() =>
			expect(body.queryByRole('combobox', { name: 'State' })).not.toBeInTheDocument()
		);
	}
};
