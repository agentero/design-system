import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Controller, useForm } from 'react-hook-form';
import { expect, fn, userEvent, within } from 'storybook/test';

import { RadioGroup } from '.';
import { Button } from '../button';
import { Field } from '../field';

/** `Root` owns the selected value; each `Item` is a radio with its label. */
const meta = {
	title: 'Components/RadioGroup',
	component: RadioGroup.Root,
	tags: ['autodocs'],
	argTypes: {
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' },
		orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
		'aria-invalid': { control: 'boolean' },
		onValueChange: { action: 'valueChange' }
	},
	args: {
		'aria-label': 'Payment plan',
		defaultValue: 'monthly'
	},
	render: args => (
		<RadioGroup.Root {...args}>
			{PLANS.map(({ value, label }) => (
				<RadioGroup.Item key={value} value={value}>
					{label}
				</RadioGroup.Item>
			))}
		</RadioGroup.Root>
	)
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

const PLANS = [
	{ value: 'monthly', label: 'Monthly' },
	{ value: 'quarterly', label: 'Quarterly' },
	{ value: 'annual', label: 'Annual' }
];

/** @summary Uncontrolled group with one item selected */
export const Default: Story = {
	args: { onValueChange: fn() },
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('radiogroup', { name: 'Payment plan' })).toBeInTheDocument();
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).toBeChecked();
		await expect(canvas.getByText('Monthly')).toHaveStyle({ color: 'rgb(22, 24, 29)' });

		await userEvent.click(canvas.getByRole('radio', { name: 'Quarterly' }));
		await expect(canvas.getByRole('radio', { name: 'Quarterly' })).toBeChecked();
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).not.toBeChecked();
		await expect(args.onValueChange).toHaveBeenLastCalledWith('quarterly');

		await userEvent.click(canvas.getByText('Annual'));
		await expect(canvas.getByRole('radio', { name: 'Annual' })).toBeChecked();
		await expect(args.onValueChange).toHaveBeenLastCalledWith('annual');

		const monthly = canvas.getByRole('radio', { name: 'Monthly' });
		await userEvent.click(monthly.closest('[data-slot=radio-group-item-control]')!);
		await expect(monthly).toBeChecked();
	}
};

/**
 * Items laid in a row, 24px apart, wrapping when the row runs out of room.
 *
 * @summary Items in a row
 */
export const Horizontal: Story = {
	args: { orientation: 'horizontal' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const [monthly, quarterly] = canvas
			.getAllByRole('radio')
			.map(radio => radio.closest('[data-slot=radio-group-item]')!.getBoundingClientRect()) as [
			DOMRect,
			DOMRect
		];

		await expect(canvas.getByRole('radiogroup')).toHaveAttribute('data-orientation', 'horizontal');
		await expect(canvas.getByRole('radiogroup')).toHaveAttribute('aria-orientation', 'horizontal');
		await expect(quarterly.top).toBe(monthly.top);
		await expect(quarterly.left - monthly.right).toBe(24);
	}
};

/**
 * Inside a `Field.Root`, label, messages, `invalid`, `required` and
 * `disabled` reach the group with nothing wired by hand.
 *
 * @summary Wired to a surrounding Field
 */
export const InsideField: Story = {
	args: { 'aria-label': undefined, defaultValue: undefined },
	render: args => (
		<Field.Root invalid required>
			<Field.Content>
				<Field.Label>Payment plan</Field.Label>
				<Field.Description>How often the insured pays the premium.</Field.Description>
			</Field.Content>
			<RadioGroup.Root {...args}>
				{PLANS.map(({ value, label }) => (
					<RadioGroup.Item key={value} value={value}>
						{label}
					</RadioGroup.Item>
				))}
			</RadioGroup.Root>
			<Field.Error errors={[{ message: 'Choose a payment plan' }]} />
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvas.getByRole('radiogroup', { name: /Payment plan/ });

		await expect(group).toHaveAccessibleDescription(
			/premium.*Choose a payment plan|Choose a payment plan.*premium/
		);
		await expect(group).toHaveAttribute('aria-invalid', 'true');
		await expect(group).toHaveAttribute('aria-required', 'true');
	}
};

/** @summary Whole group disabled */
export const Disabled: Story = {
	args: { disabled: true, onValueChange: fn() },
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		for (const radio of canvas.getAllByRole('radio')) {
			await expect(radio).toBeDisabled();
		}
		await expect(canvas.getByText('Monthly')).toHaveStyle({ color: 'rgb(207, 210, 219)' });
		await userEvent.click(canvas.getByText('Annual'));
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).toBeChecked();
		await expect(args.onValueChange).not.toHaveBeenCalled();
	}
};

/**
 * `disabled` on one item leaves the rest interactive, and the arrow keys skip
 * it.
 *
 * @summary One item disabled
 */
export const DisabledItem: Story = {
	args: { onValueChange: fn() },
	render: args => (
		<RadioGroup.Root {...args}>
			<RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
			<RadioGroup.Item value="quarterly" disabled>
				Quarterly (not offered by this carrier)
			</RadioGroup.Item>
			<RadioGroup.Item value="annual">Annual</RadioGroup.Item>
		</RadioGroup.Root>
	),
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('radio', { name: /Quarterly/ })).toBeDisabled();
		await userEvent.click(canvas.getByRole('radio', { name: 'Monthly' }));
		await userEvent.keyboard('{ArrowDown}');
		await expect(canvas.getByRole('radio', { name: 'Annual' })).toBeChecked();
		await expect(args.onValueChange).toHaveBeenLastCalledWith('annual');
	}
};

/**
 * The items stay focusable but the selection does not change, by pointer or
 * by keyboard.
 *
 * @summary Read-only group
 */
export const ReadOnly: Story = {
	args: { readOnly: true, onValueChange: fn() },
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const annual = canvas.getByRole('radio', { name: 'Annual' });

		await expect(canvas.getByRole('radiogroup')).toHaveAttribute('aria-readonly', 'true');
		await userEvent.click(annual);
		await userEvent.click(canvas.getByText('Quarterly'));
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).toBeChecked();
		await expect(annual).not.toBeChecked();
		await expect(args.onValueChange).not.toHaveBeenCalled();
	}
};

/**
 * `aria-invalid` sits on the group, which `role="radiogroup"` supports, and
 * every radio paints the destructive border from it.
 *
 * @summary Failed validation on the group
 */
export const Invalid: Story = {
	args: { 'aria-invalid': true, 'aria-describedby': 'plan-error', defaultValue: undefined },
	render: args => (
		<div className="flex flex-col gap-2">
			<RadioGroup.Root {...args}>
				{PLANS.map(({ value, label }) => (
					<RadioGroup.Item key={value} value={value}>
						{label}
					</RadioGroup.Item>
				))}
			</RadioGroup.Root>
			<p id="plan-error" className="text-sm text-text-input-destructive">
				Choose a payment plan.
			</p>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvas.getByRole('radiogroup', { name: 'Payment plan' });

		await expect(group).toHaveAttribute('aria-invalid', 'true');
		await expect(group).toHaveAccessibleDescription('Choose a payment plan.');
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).toHaveStyle({
			borderColor: 'rgb(217, 38, 38)'
		});
	}
};

/** @summary Controlled group whose value is set from outside */
export const Controlled: Story = {
	render: () => {
		const [plan, setPlan] = useState('monthly');

		return (
			<div className="flex flex-col items-start gap-6">
				<div className="flex gap-3">
					<Button variant="secondary" size="sm" onClick={() => setPlan('')}>
						Clear
					</Button>
					<Button variant="secondary" size="sm" onClick={() => setPlan('annual')}>
						Choose annual
					</Button>
				</div>
				<RadioGroup.Root aria-label="Payment plan" value={plan} onValueChange={setPlan}>
					{PLANS.map(({ value, label }) => (
						<RadioGroup.Item key={value} value={value}>
							{label}
						</RadioGroup.Item>
					))}
				</RadioGroup.Root>
				<output className="text-sm">Selected: {plan || 'none'}</output>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: 'Choose annual' }));
		await expect(canvas.getByRole('radio', { name: 'Annual' })).toBeChecked();
		await userEvent.tab();
		await expect(canvas.getByRole('radio', { name: 'Annual' })).toHaveFocus();

		await userEvent.click(canvas.getByRole('radio', { name: 'Quarterly' }));
		await expect(canvas.getByRole('status')).toHaveTextContent('quarterly');
		await userEvent.click(canvas.getByRole('button', { name: 'Clear' }));
		for (const radio of canvas.getAllByRole('radio')) {
			await expect(radio).not.toBeChecked();
		}
		await expect(canvas.getByRole('status')).toHaveTextContent('Selected: none');
	}
};

/**
 * With `name`, the form submits `name=value` for the selected item, and
 * `required` blocks the submission while nothing is selected.
 *
 * @summary Native form submission
 */
export const InForm: Story = {
	render: () => {
		const [submitted, setSubmitted] = useState<string | null>(null);

		return (
			<form
				className="flex flex-col items-start gap-6"
				onSubmit={event => {
					event.preventDefault();
					setSubmitted(String(new FormData(event.currentTarget).get('plan')));
				}}>
				<RadioGroup.Root aria-label="Payment plan" name="plan" required>
					{PLANS.map(({ value, label }) => (
						<RadioGroup.Item key={value} value={value}>
							{label}
						</RadioGroup.Item>
					))}
				</RadioGroup.Root>
				<Button type="submit">Submit</Button>
				{submitted && <output className="text-sm">Submitted: {submitted}</output>}
			</form>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(canvas.queryByRole('status')).not.toBeInTheDocument();
		await userEvent.click(canvas.getByRole('radio', { name: 'Annual' }));
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('annual');
	}
};

/**
 * With react-hook-form, wire the group through `Controller`. Its `ref` lets
 * the form focus the group on a failed submit: focus lands on the radio Tab
 * would reach.
 *
 * @summary React Hook Form through Controller
 */
export const WithReactHookForm: Story = {
	render: () => {
		const { control, handleSubmit } = useForm<{ plan: string }>({ defaultValues: { plan: '' } });
		const [submitted, setSubmitted] = useState<string | null>(null);

		return (
			<form
				className="flex flex-col items-start gap-6"
				onSubmit={handleSubmit(data => setSubmitted(data.plan))}>
				<Controller
					name="plan"
					control={control}
					rules={{ required: 'Choose a payment plan' }}
					render={({ field, fieldState }) => (
						<Field.Root invalid={fieldState.invalid} required>
							<Field.Label>Payment plan</Field.Label>
							<RadioGroup.Root
								ref={field.ref}
								value={field.value}
								onValueChange={field.onChange}
								onBlur={field.onBlur}>
								{PLANS.map(({ value, label }) => (
									<RadioGroup.Item key={value} value={value}>
										{label}
									</RadioGroup.Item>
								))}
							</RadioGroup.Root>
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

		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).toHaveFocus();
		const group = canvas.getByRole('radiogroup', { name: /Payment plan/ });
		await expect(group).toHaveAccessibleDescription('Choose a payment plan');
		await expect(group).toHaveAttribute('aria-invalid', 'true');
		await expect(
			group.getBoundingClientRect().top -
				group.previousElementSibling!.getBoundingClientRect().bottom
		).toBe(16);
		await userEvent.keyboard('{ArrowDown}');
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('quarterly');
	}
};

/**
 * A long label wraps under itself and the radio stays level with its first
 * line.
 *
 * @summary Wrapping label keeps the radio on the first line
 */
export const LongLabel: Story = {
	render: args => (
		<div className="w-60">
			<RadioGroup.Root {...args}>
				<RadioGroup.Item value="monthly">
					Monthly, charged on the policy's effective day of every month
				</RadioGroup.Item>
				<RadioGroup.Item value="annual">Annual</RadioGroup.Item>
			</RadioGroup.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const radio = canvas.getByRole('radio', { name: /Monthly/ });
		const label = canvas.getByText(/Monthly/);
		const slot = radio.parentElement!.getBoundingClientRect();
		const circle = radio.getBoundingClientRect();

		await expect(label.getBoundingClientRect().height).toBeGreaterThan(24);
		await expect(slot.top).toBe(label.getBoundingClientRect().top);
		await expect(slot.height).toBe(24);
		await expect(circle.top - slot.top).toBe(4);
		await expect(circle.width).toBe(16);
	}
};

/**
 * Every state of an item side by side, for checking against the design:
 * enabled, disabled, invalid and read-only, each with one item selected.
 *
 * @summary Visual comparison of the item states
 */
export const AllStates: Story = {
	render: () => (
		<div className="flex flex-wrap gap-10">
			{(
				[
					['Enabled', {}],
					['Disabled', { disabled: true }],
					['Invalid', { 'aria-invalid': true }],
					['Read-only', { readOnly: true }]
				] as const
			).map(([title, props]) => (
				<div key={title} className="flex flex-col gap-2">
					<span className="text-xs text-text-input-placeholder">{title}</span>
					<RadioGroup.Root aria-label={`${title} payment plan`} defaultValue="quarterly" {...props}>
						{PLANS.map(({ value, label }) => (
							<RadioGroup.Item key={value} value={value}>
								{label}
							</RadioGroup.Item>
						))}
					</RadioGroup.Root>
				</div>
			))}
		</div>
	)
};

/**
 * Tab enters the group on the selected item and leaves it on the next Tab;
 * the arrow keys move the selection, wrapping at the ends.
 *
 * @summary Keyboard navigation and selection
 */
export const Keyboard: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	args: { onValueChange: fn() },
	render: args => (
		<div className="flex flex-col items-start gap-6">
			<RadioGroup.Root {...args}>
				{PLANS.map(({ value, label }) => (
					<RadioGroup.Item key={value} value={value}>
						{label}
					</RadioGroup.Item>
				))}
			</RadioGroup.Root>
			<Button variant="secondary">Continue</Button>
		</div>
	),
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.tab();
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).toHaveFocus();
		await userEvent.keyboard('{ArrowDown}');
		await expect(canvas.getByRole('radio', { name: 'Quarterly' })).toHaveFocus();
		await expect(canvas.getByRole('radio', { name: 'Quarterly' })).toBeChecked();
		await expect(args.onValueChange).toHaveBeenLastCalledWith('quarterly');
		await userEvent.keyboard('{ArrowUp}{ArrowUp}');
		await expect(canvas.getByRole('radio', { name: 'Annual' })).toBeChecked();
		await userEvent.tab();
		await expect(canvas.getByRole('button', { name: 'Continue' })).toHaveFocus();
	}
};

/**
 * With no `defaultValue` nothing is selected, and Tab lands on the first item
 * without selecting it.
 *
 * @summary Group that starts with nothing selected
 */
export const NoSelection: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	args: { defaultValue: undefined, onValueChange: fn() },
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		for (const radio of canvas.getAllByRole('radio')) {
			await expect(radio).not.toBeChecked();
		}
		await userEvent.tab();
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).toHaveFocus();
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).not.toBeChecked();
		await expect(args.onValueChange).not.toHaveBeenCalled();
	}
};

/** @summary Group named by a visible heading */
export const LabelledByHeading: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	args: { 'aria-label': undefined, 'aria-labelledby': 'plan-heading' },
	render: args => (
		<div className="flex flex-col gap-2">
			<span id="plan-heading" className="text-sm font-semibold text-text-input-normal">
				Payment plan
			</span>
			<RadioGroup.Root {...args}>
				{PLANS.map(({ value, label }) => (
					<RadioGroup.Item key={value} value={value}>
						{label}
					</RadioGroup.Item>
				))}
			</RadioGroup.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('radiogroup', { name: 'Payment plan' })).toBeInTheDocument();
	}
};

/**
 * When the selected item is disabled, Tab enters the group on the first
 * enabled item instead, so the group stays reachable by keyboard.
 *
 * @summary Selected item disabled
 */
export const DisabledSelectedItem: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: args => (
		<RadioGroup.Root {...args}>
			<RadioGroup.Item value="monthly" disabled>
				Monthly (no longer offered)
			</RadioGroup.Item>
			<RadioGroup.Item value="quarterly">Quarterly</RadioGroup.Item>
			<RadioGroup.Item value="annual">Annual</RadioGroup.Item>
		</RadioGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('radio', { name: /Monthly/ })).toBeChecked();
		await userEvent.tab();
		await expect(canvas.getByRole('radio', { name: 'Quarterly' })).toHaveFocus();
	}
};

/**
 * A native form reset puts an uncontrolled group back on its `defaultValue`,
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
				className="flex flex-col items-start gap-6"
				onSubmit={event => {
					event.preventDefault();
					setSubmitted(String(new FormData(event.currentTarget).get('plan')));
				}}>
				<RadioGroup.Root aria-label="Payment plan" name="plan" defaultValue="monthly">
					{PLANS.map(({ value, label }) => (
						<RadioGroup.Item key={value} value={value}>
							{label}
						</RadioGroup.Item>
					))}
				</RadioGroup.Root>
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

		await userEvent.click(canvas.getByRole('radio', { name: 'Annual' }));
		await userEvent.click(canvas.getByRole('button', { name: 'Reset' }));
		await expect(canvas.getByRole('radio', { name: 'Monthly' })).toBeChecked();
		await expect(canvas.getByRole('radio', { name: 'Annual' })).not.toBeChecked();
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('monthly');
	}
};

/**
 * A native form reset leaves a controlled group on its `value`, and the form
 * submits that value too.
 *
 * @summary Native form reset on a controlled group
 */
export const FormResetControlled: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => {
		const [plan, setPlan] = useState('quarterly');
		const [submitted, setSubmitted] = useState<string | null>(null);

		return (
			<form
				className="flex flex-col items-start gap-6"
				onSubmit={event => {
					event.preventDefault();
					setSubmitted(String(new FormData(event.currentTarget).get('plan')));
				}}>
				<RadioGroup.Root aria-label="Payment plan" name="plan" value={plan} onValueChange={setPlan}>
					{PLANS.map(({ value, label }) => (
						<RadioGroup.Item key={value} value={value}>
							{label}
						</RadioGroup.Item>
					))}
				</RadioGroup.Root>
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

		await userEvent.click(canvas.getByRole('radio', { name: 'Annual' }));
		await userEvent.click(canvas.getByRole('button', { name: 'Reset' }));
		await expect(canvas.getByRole('radio', { name: 'Annual' })).toBeChecked();
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('annual');
	}
};

/**
 * Without `name` the radios are not one native group, so `required` only
 * marks the group (`aria-required`) and leaves validation to the form: a
 * selection never leaves the form invalid.
 *
 * @summary Required without a name
 */
export const RequiredWithoutName: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => {
		const [submitted, setSubmitted] = useState(false);

		return (
			<form
				className="flex flex-col items-start gap-6"
				onSubmit={event => {
					event.preventDefault();
					setSubmitted(true);
				}}>
				<RadioGroup.Root aria-label="Payment plan" required>
					{PLANS.map(({ value, label }) => (
						<RadioGroup.Item key={value} value={value}>
							{label}
						</RadioGroup.Item>
					))}
				</RadioGroup.Root>
				<Button type="submit">Submit</Button>
				{submitted && <output className="text-sm">Sent</output>}
			</form>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('radiogroup')).toHaveAttribute('aria-required', 'true');
		await userEvent.click(canvas.getByRole('radio', { name: 'Annual' }));
		await expect(canvasElement.querySelector('form')!.checkValidity()).toBe(true);
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('Sent');
	}
};

/** @summary Item id reaches the radio */
export const ItemId: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: args => (
		<RadioGroup.Root {...args}>
			<RadioGroup.Item id="plan-monthly" value="monthly">
				Monthly
			</RadioGroup.Item>
			<RadioGroup.Item value="annual">Annual</RadioGroup.Item>
		</RadioGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('radio', { name: 'Monthly' })).toHaveAttribute(
			'id',
			'plan-monthly'
		);
		await expect(canvas.getByRole('radio', { name: 'Annual' }).id).not.toBe('');
	}
};

/**
 * `aria-label` and `disabled={false}` on the group win over the field. Its own
 * `aria-describedby` joins the field's messages instead of replacing them.
 *
 * @summary Own props override the Field wiring
 */
export const InsideFieldOverridden: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	args: { 'aria-label': 'Plan', 'aria-describedby': 'plan-note', disabled: false },
	render: args => (
		<Field.Root disabled>
			<Field.Content>
				<Field.Label>Payment plan</Field.Label>
				<Field.Description>How often the insured pays the premium.</Field.Description>
			</Field.Content>
			<p id="plan-note">Changing it starts at the next renewal.</p>
			<RadioGroup.Root {...args}>
				{PLANS.map(({ value, label }) => (
					<RadioGroup.Item key={value} value={value}>
						{label}
					</RadioGroup.Item>
				))}
			</RadioGroup.Root>
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvas.getByRole('radiogroup', { name: 'Plan' });

		await expect(group).not.toHaveAttribute('aria-labelledby');
		await expect(group).toHaveAccessibleDescription(
			'How often the insured pays the premium. Changing it starts at the next renewal.'
		);
		for (const radio of canvas.getAllByRole('radio')) {
			await expect(radio).toBeEnabled();
		}
	}
};
