import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { FieldCheckbox } from '.';
import { Checkbox } from '../checkbox';
import { Field } from '../field';
import { Label } from '../label';

/**
 * FieldCheckbox is a `Field.Root` for a checkbox. It provides
 * `CheckboxContext`, so the `Checkbox` inside associates itself with the label
 * and the messages and takes `invalid`, `required`, `disabled` and `readOnly`
 * from the field — no `id`, `htmlFor` or `aria-describedby` written by hand.
 * The box comes first and its label beside it, as in the design.
 *
 * It knows nothing about form libraries, and its contexts compose: a provider
 * nested inside it can extend `CheckboxContext` with `checked`,
 * `onCheckedChange`, `onBlur` and `name`, and `FieldContext` with the errors.
 */
const meta = {
	title: 'Components/FieldCheckbox',
	component: FieldCheckbox,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<div className="w-120 max-w-full">
				<Story />
			</div>
		)
	],
	argTypes: {
		invalid: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' }
	},
	args: {
		invalid: false,
		disabled: false,
		readOnly: false,
		required: false
	}
} satisfies Meta<typeof FieldCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

// The stories with no play are the ones the controls and the Docs page drive;
// the hidden ones click the box and measure it, and run as tests only.
const testOnly = ['!dev', '!autodocs', '!manifest'];

/**
 * The composition consumers write: the design system's `Checkbox` and a
 * label after it. The label names the box through context, and clicking it
 * toggles the box like clicking the box itself.
 *
 * @summary Checkbox and its label on one line, wired with no ids
 */
export const Default: Story = {
	render: args => (
		<FieldCheckbox {...args}>
			<Checkbox />
			<Label>Send me the carrier newsletter</Label>
		</FieldCheckbox>
	)
};

/** Clicking the label toggles the box, which the label names. */
export const LabelToggles: Story = {
	tags: testOnly,
	render: () => (
		<FieldCheckbox>
			<Checkbox />
			<Label>Send me the carrier newsletter</Label>
		</FieldCheckbox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const box = canvas.getByRole('checkbox', { name: 'Send me the carrier newsletter' });

		await expect(box).toHaveAttribute('data-slot', 'checkbox');
		await expect(box).not.toBeChecked();

		await userEvent.click(canvas.getByText('Send me the carrier newsletter'));

		await expect(box).toBeChecked();
	}
};

/**
 * A `Field.Content` keeps the label and its description together beside the
 * box, and the description is announced with it. The box stays on the
 * label's first line however long the text below.
 *
 * @summary Label and description stacked beside the box
 */
export const WithDescription: Story = {
	render: args => (
		<FieldCheckbox {...args}>
			<Checkbox />
			<Field.Content>
				<Label>Email notifications</Label>
				<Field.Description>Get an email when a carrier returns a quote.</Field.Description>
			</Field.Content>
		</FieldCheckbox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(
			canvas.getByRole('checkbox', { name: 'Email notifications' })
		).toHaveAccessibleDescription('Get an email when a carrier returns a quote.');
	}
};

/**
 * Figma's geometry: the 16px box centred in a 24px slot, the label 12px after
 * it, and the description flush under the label.
 */
export const MatchesTheDesign: Story = {
	tags: testOnly,
	render: () => (
		<FieldCheckbox>
			<Checkbox />
			<Field.Content>
				<Label>Email notifications for every quote a carrier returns on this agency</Label>
				<Field.Description>Get an email when a carrier returns a quote.</Field.Description>
			</Field.Content>
		</FieldCheckbox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const root = canvasElement.querySelector('[data-slot=field]')!.getBoundingClientRect();
		const box = canvas.getByRole('checkbox').getBoundingClientRect();
		const label = canvas
			.getByText(/^Email notifications/)
			.closest('label')!
			.getBoundingClientRect();
		const description = canvas
			.getByText('Get an email when a carrier returns a quote.')
			.getBoundingClientRect();

		await expect([box.width, box.height]).toEqual([16, 16]);
		await expect([box.left - root.left, box.top - root.top]).toEqual([4, 4]);
		await expect(label.left - root.left).toBe(36);
		await expect(label.height).toBeGreaterThan(24);
		await expect(description.top).toBe(label.bottom);
	}
};

/**
 * `Field.Label` takes `optional` and a `tooltip` here as in any field. The
 * info button sits beside the label, outside it, so it has its own name and
 * opening the hint never toggles the box.
 *
 * @summary Label with the optional suffix and an info tooltip
 */
export const WithTooltip: Story = {
	render: args => (
		<FieldCheckbox {...args}>
			<Checkbox />
			<Field.Content>
				<Field.Label optional tooltip="Sent once a month, never shared.">
					Carrier newsletter
				</Field.Label>
				<Field.Description>News from the carriers you work with.</Field.Description>
			</Field.Content>
		</FieldCheckbox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('checkbox')).toHaveAccessibleName(
			'Carrier newsletter (optional)'
		);
		await expect(
			canvas.getByRole('button', { name: 'More information' }).closest('label')
		).toBeNull();
	}
};

/** Opening the hint leaves the box as it was. */
export const TooltipDoesNotToggle: Story = {
	tags: testOnly,
	render: WithTooltip.render,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: 'More information' }));

		await expect(canvas.getByRole('checkbox')).not.toBeChecked();
	}
};

/**
 * `required` on the field reaches both the label's asterisk and the box's
 * `required`.
 *
 * @summary Required field driven from the root alone
 */
export const Required: Story = {
	args: {
		required: true
	},
	render: args => (
		<FieldCheckbox {...args}>
			<Checkbox />
			<Label>I accept the carrier terms</Label>
		</FieldCheckbox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(
			canvas.getByRole('checkbox', { name: /I accept the carrier terms/ })
		).toBeRequired();
	}
};

/**
 * `invalid` paints the box in the destructive tone and `Field.Error` shows the
 * message under the label; the box announces both.
 *
 * @summary Invalid field with its error under the label
 */
export const Invalid: Story = {
	args: {
		invalid: true,
		required: true
	},
	render: args => (
		<FieldCheckbox {...args}>
			<Checkbox />
			<Field.Content>
				<Label>I accept the carrier terms</Label>
				<Field.Error errors={[{ message: 'Accept the terms to send the request.' }]} />
			</Field.Content>
		</FieldCheckbox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const box = canvas.getByRole('checkbox', { name: /I accept the carrier terms/ });

		await expect(box).toHaveAttribute('aria-invalid', 'true');
		await expect(box).toHaveAccessibleDescription('Accept the terms to send the request.');
	}
};

/**
 * `disabled` on the field disables the box through context.
 *
 * @summary Disabled field driven from the root
 */
export const Disabled: Story = {
	args: {
		disabled: true
	},
	render: args => (
		<FieldCheckbox {...args}>
			<Checkbox defaultChecked />
			<Label>Quote alerts by text</Label>
		</FieldCheckbox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('checkbox', { name: 'Quote alerts by text' })).toBeDisabled();
	}
};

/**
 * `readOnly` on the field keeps the box focusable and announced as read-only,
 * but neither a click on it or its label nor Space toggles it.
 *
 * @summary Read-only field: focusable, but it does not toggle
 */
export const ReadOnly: Story = {
	args: {
		readOnly: true
	},
	render: args => (
		<FieldCheckbox {...args}>
			<Checkbox defaultChecked />
			<Label>Instant appointments</Label>
		</FieldCheckbox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const box = canvas.getByRole('checkbox', { name: 'Instant appointments' });

		await expect(box).toHaveAttribute('aria-readonly', 'true');
		await expect(box).not.toBeDisabled();
		await expect(box).toBeChecked();
	}
};

/** A click on the box or its label, or Space, leaves a read-only box as it was. */
export const ReadOnlyIgnoresInput: Story = {
	tags: testOnly,
	render: () => (
		<FieldCheckbox readOnly>
			<Checkbox defaultChecked />
			<Label>Instant appointments</Label>
		</FieldCheckbox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const box = canvas.getByRole('checkbox', { name: 'Instant appointments' });

		await userEvent.click(box);
		await expect(box).toBeChecked();

		await userEvent.click(canvas.getByText('Instant appointments'));
		await expect(box).toBeChecked();

		await userEvent.keyboard(' ');
		await expect(box).toHaveFocus();
		await expect(box).toBeChecked();
	}
};

/**
 * The context is a default, never an override: an extra `aria-describedby` is
 * concatenated with the field's ids, and a `disabled` on the box wins over the
 * field's.
 */
export const OwnPropsWin: Story = {
	tags: testOnly,
	render: () => (
		<div className="flex flex-col gap-2">
			<FieldCheckbox>
				<Checkbox aria-describedby="news-hint" disabled />
				<Field.Content>
					<Label>Carrier news</Label>
					<Field.Description>Shown on the home page.</Field.Description>
				</Field.Content>
			</FieldCheckbox>
			<p id="news-hint" className="text-sm">
				You can change it later.
			</p>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const box = canvas.getByRole('checkbox', { name: 'Carrier news' });

		await expect(box).toHaveAccessibleDescription(
			'Shown on the home page. You can change it later.'
		);
		await expect(box).toBeDisabled();
	}
};
