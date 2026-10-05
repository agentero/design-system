import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { CheckboxGroup } from '.';
import { Field } from '../field';

/**
 * CheckboxGroup is a compound: `Root` owns the checked values as a
 * `string[]` and renders `role="group"`, and each `Item` renders one
 * `Checkbox` with its label. Name the group with `aria-labelledby` or
 * `aria-label`; the group label, description and error come from the field
 * layer.
 */
const meta = {
	title: 'Components/CheckboxGroup',
	component: CheckboxGroup.Root,
	tags: ['autodocs'],
	argTypes: {
		disabled: { control: 'boolean' },
		orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
		'aria-invalid': { control: 'boolean' },
		onValueChange: { action: 'valueChange' }
	},
	args: {
		'aria-label': 'Lines of business',
		defaultValue: ['home']
	},
	render: args => (
		<CheckboxGroup.Root {...args}>
			{LOBS.map(({ value, label }) => (
				<CheckboxGroup.Item key={value} value={value}>
					{label}
				</CheckboxGroup.Item>
			))}
		</CheckboxGroup.Root>
	)
} satisfies Meta<typeof CheckboxGroup.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

const LOBS = [
	{ value: 'home', label: 'Home' },
	{ value: 'auto', label: 'Auto' },
	{ value: 'renters', label: 'Renters' }
];

/** @summary Uncontrolled group with one item checked */
export const Default: Story = {
	args: { onValueChange: fn() },
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('group', { name: 'Lines of business' })).toBeInTheDocument();
		await expect(canvas.getByRole('checkbox', { name: 'Home' })).toBeChecked();

		await userEvent.click(canvas.getByRole('checkbox', { name: 'Auto' }));
		await expect(canvas.getByRole('checkbox', { name: 'Auto' })).toBeChecked();
		await expect(args.onValueChange).toHaveBeenLastCalledWith(['home', 'auto']);

		await userEvent.click(canvas.getByText('Home'));
		await expect(canvas.getByRole('checkbox', { name: 'Home' })).not.toBeChecked();
		await expect(args.onValueChange).toHaveBeenLastCalledWith(['auto']);
	}
};

/**
 * Tab moves between items and Space toggles the focused one, as with
 * standalone checkboxes.
 *
 * @summary Keyboard navigation and toggling
 */
export const Keyboard: Story = {
	args: { defaultValue: [] },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.tab();
		await expect(canvas.getByRole('checkbox', { name: 'Home' })).toHaveFocus();
		await userEvent.tab();
		await userEvent.keyboard(' ');
		await expect(canvas.getByRole('checkbox', { name: 'Auto' })).toBeChecked();
		await expect(canvas.getByRole('checkbox', { name: 'Home' })).not.toBeChecked();
	}
};

/** @summary Group named by a visible heading */
export const LabelledByHeading: Story = {
	args: { 'aria-label': undefined, 'aria-labelledby': 'lobs-heading' },
	render: args => (
		<div className="flex flex-col gap-2">
			<span id="lobs-heading" className="text-sm font-semibold text-text-input-normal">
				Lines of business
			</span>
			<CheckboxGroup.Root {...args}>
				{LOBS.map(({ value, label }) => (
					<CheckboxGroup.Item key={value} value={value}>
						{label}
					</CheckboxGroup.Item>
				))}
			</CheckboxGroup.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('group', { name: 'Lines of business' })).toBeInTheDocument();
	}
};

/** @summary Controlled group with a select-all parent */
export const Controlled: Story = {
	render: () => {
		const [selected, setSelected] = useState<string[]>(['home']);
		const allValues = LOBS.map(({ value }) => value);

		return (
			<div className="flex flex-col gap-3">
				<button
					type="button"
					className="w-fit text-sm underline"
					onClick={() => setSelected(selected.length === allValues.length ? [] : allValues)}>
					{selected.length === allValues.length ? 'Unselect all' : 'Select all'}
				</button>
				<CheckboxGroup.Root
					aria-label="Lines of business"
					value={selected}
					onValueChange={setSelected}>
					{LOBS.map(({ value, label }) => (
						<CheckboxGroup.Item key={value} value={value}>
							{label}
						</CheckboxGroup.Item>
					))}
				</CheckboxGroup.Root>
				<output className="text-sm">{selected.join(', ') || 'None'}</output>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: 'Select all' }));
		for (const { label } of LOBS) {
			await expect(canvas.getByRole('checkbox', { name: label })).toBeChecked();
		}
		await userEvent.click(canvas.getByRole('checkbox', { name: 'Auto' }));
		await expect(canvas.getByRole('status')).toHaveTextContent('home, renters');
	}
};

/** @summary Whole group disabled */
export const Disabled: Story = {
	args: { disabled: true },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		for (const checkbox of canvas.getAllByRole('checkbox')) {
			await expect(checkbox).toBeDisabled();
		}
		await expect(canvas.getByText('Home')).toHaveStyle({ opacity: '0.5' });
	}
};

/**
 * `disabled` on one item leaves the rest interactive. A checked disabled item
 * stays in the value.
 *
 * @summary One item disabled
 */
export const DisabledItem: Story = {
	args: { defaultValue: ['auto'], onValueChange: fn() },
	render: args => (
		<CheckboxGroup.Root {...args}>
			<CheckboxGroup.Item value="home">Home</CheckboxGroup.Item>
			<CheckboxGroup.Item value="auto" disabled>
				Auto (required by your appointment)
			</CheckboxGroup.Item>
			<CheckboxGroup.Item value="renters">Renters</CheckboxGroup.Item>
		</CheckboxGroup.Root>
	),
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('checkbox', { name: /Auto/ })).toBeDisabled();
		await userEvent.click(canvas.getByRole('checkbox', { name: 'Home' }));
		await expect(args.onValueChange).toHaveBeenLastCalledWith(['auto', 'home']);
	}
};

/**
 * `aria-invalid` on the root reaches every checkbox, never the group element
 * (`role="group"` does not support it).
 *
 * @summary Failed validation, forwarded to the items
 */
export const Invalid: Story = {
	args: { 'aria-invalid': true, 'aria-describedby': 'lobs-error', defaultValue: [] },
	render: args => (
		<div className="flex flex-col gap-2">
			<CheckboxGroup.Root {...args}>
				{LOBS.map(({ value, label }) => (
					<CheckboxGroup.Item key={value} value={value}>
						{label}
					</CheckboxGroup.Item>
				))}
			</CheckboxGroup.Root>
			<p id="lobs-error" className="text-sm text-text-input-destructive">
				Select at least one line of business.
			</p>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvas.getByRole('group', { name: 'Lines of business' });

		await expect(group).not.toHaveAttribute('aria-invalid');
		await expect(group).toHaveAccessibleDescription('Select at least one line of business.');
		for (const checkbox of canvas.getAllByRole('checkbox')) {
			await expect(checkbox).toHaveAttribute('aria-invalid', 'true');
		}
	}
};

/**
 * With `name`, each checked item submits `name=value`, so a native form reads
 * the selection with `FormData.getAll`.
 *
 * @summary Native form submission
 */
export const InForm: Story = {
	render: () => {
		const [submitted, setSubmitted] = useState<string[] | null>(null);

		return (
			<form
				className="flex flex-col gap-3"
				onSubmit={event => {
					event.preventDefault();
					setSubmitted(new FormData(event.currentTarget).getAll('lobs') as string[]);
				}}>
				<CheckboxGroup.Root aria-label="Lines of business" name="lobs" defaultValue={['home']}>
					{LOBS.map(({ value, label }) => (
						<CheckboxGroup.Item key={value} value={value}>
							{label}
						</CheckboxGroup.Item>
					))}
				</CheckboxGroup.Root>
				<button type="submit" className="w-fit text-sm underline">
					Submit
				</button>
				{submitted && <output className="text-sm">{submitted.join(', ')}</output>}
			</form>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('checkbox', { name: 'Renters' }));
		await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
		await expect(await canvas.findByRole('status')).toHaveTextContent('home, renters');
	}
};

/**
 * A long label wraps under itself and the box stays level with its first line.
 *
 * @summary Wrapping label keeps the box on the first line
 */
export const LongLabel: Story = {
	render: args => (
		<div className="w-60">
			<CheckboxGroup.Root {...args}>
				<CheckboxGroup.Item value="home">
					Homeowners, including dwelling fire and condo unit owners policies
				</CheckboxGroup.Item>
				<CheckboxGroup.Item value="auto">Auto</CheckboxGroup.Item>
			</CheckboxGroup.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox', { name: /Homeowners/ });
		const label = canvas.getByText(/Homeowners/);
		const slot = checkbox.parentElement!.getBoundingClientRect();
		const box = checkbox.getBoundingClientRect();

		await expect(label.getBoundingClientRect().height).toBeGreaterThan(24);
		await expect(slot.top).toBe(label.getBoundingClientRect().top);
		await expect(slot.height).toBe(24);
		await expect(box.top - slot.top).toBe(4);
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
		const [home, auto] = canvas
			.getAllByRole('checkbox')
			.map(checkbox =>
				checkbox.closest('[data-slot=checkbox-group-item]')!.getBoundingClientRect()
			) as [DOMRect, DOMRect];

		await expect(canvas.getByRole('group')).toHaveAttribute('data-orientation', 'horizontal');
		await expect(auto.top).toBe(home.top);
		await expect(auto.left - home.right).toBe(24);
	}
};

/**
 * An `id` on the item lands on its checkbox, so a message elsewhere can point
 * at it; otherwise one is generated.
 *
 * @summary Item id reaches the checkbox
 */
export const ItemId: Story = {
	render: args => (
		<CheckboxGroup.Root {...args}>
			<CheckboxGroup.Item id="lob-home" value="home">
				Home
			</CheckboxGroup.Item>
			<CheckboxGroup.Item value="auto">Auto</CheckboxGroup.Item>
		</CheckboxGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const home = canvas.getByRole('checkbox', { name: 'Home' });

		await expect(home).toHaveAttribute('id', 'lob-home');
		await expect(home.closest('[data-slot=checkbox-group-item]')).toHaveAttribute(
			'data-state',
			'checked'
		);
		await expect(canvas.getByRole('checkbox', { name: 'Auto' }).id).not.toBe('');
	}
};

/**
 * Inside a `Field.Root` the group takes its name from the field's label, its
 * description from the field's messages, and `invalid` and `disabled` from the
 * field, with nothing wired by hand.
 *
 * @summary Wired to a surrounding Field
 */
export const InsideField: Story = {
	args: { 'aria-label': undefined, defaultValue: [] },
	render: args => (
		<Field.Root invalid>
			<Field.Label>Lines of business</Field.Label>
			<Field.Description>The lines this agency writes.</Field.Description>
			<CheckboxGroup.Root {...args}>
				{LOBS.map(({ value, label }) => (
					<CheckboxGroup.Item key={value} value={value}>
						{label}
					</CheckboxGroup.Item>
				))}
			</CheckboxGroup.Root>
			<Field.Error errors={[{ message: 'Select at least one line of business' }]} />
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvas.getByRole('group', { name: 'Lines of business' });

		await expect(group).toHaveAccessibleDescription(
			/writes.*Select at least one|Select at least one.*writes/
		);
		await expect(group).not.toHaveAttribute('aria-invalid');
		for (const checkbox of canvas.getAllByRole('checkbox')) {
			await expect(checkbox).toHaveAttribute('aria-invalid', 'true');
		}
	}
};

/**
 * The group's own props win over the field: here `aria-label` replaces the
 * label as the name, and `disabled` on a field is overridden by
 * `disabled={false}` on the group.
 *
 * @summary Own props override the Field wiring
 */
export const InsideFieldOverridden: Story = {
	args: { 'aria-label': 'Lines written', disabled: false },
	render: args => (
		<Field.Root disabled>
			<Field.Label>Lines of business</Field.Label>
			<CheckboxGroup.Root {...args}>
				{LOBS.map(({ value, label }) => (
					<CheckboxGroup.Item key={value} value={value}>
						{label}
					</CheckboxGroup.Item>
				))}
			</CheckboxGroup.Root>
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvas.getByRole('group', { name: 'Lines written' });

		await expect(group).not.toHaveAttribute('aria-labelledby');
		for (const checkbox of canvas.getAllByRole('checkbox')) {
			await expect(checkbox).toBeEnabled();
		}
	}
};
