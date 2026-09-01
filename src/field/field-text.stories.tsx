import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { FieldText } from './field-text';

/**
 * FieldText is the ready-made text field: the Field layout plus an Input
 * control, one prop per part and no child to pass. It is what a form should
 * reach for by default — the generic `Field` is for controls that have no
 * ready-made field yet.
 *
 * Everything that is not a field-level prop is forwarded to the `<input>`,
 * including `size`: the control's height is the control's business, and it
 * changes nothing about the caption, the helper text or the gaps.
 */
const meta = {
	title: 'Components/FieldText',
	component: FieldText,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg']
		},
		type: {
			control: 'select',
			options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search']
		},
		orientation: {
			control: 'radio',
			options: ['vertical', 'horizontal']
		},
		label: { control: 'text' },
		tooltip: { control: 'text' },
		description: { control: 'text' },
		optional: { control: 'boolean' },
		required: { control: 'boolean' },
		disabled: { control: 'boolean' },
		errors: { table: { disable: true } }
	},
	args: {
		label: 'Agency name',
		placeholder: 'ACME Insurance'
	},
	decorators: [
		Story => (
			<div className="max-w-md">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof FieldText>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * One prop per part — the whole field in a single self-wiring component. The
 * caption and the control are associated without an `id` or an `htmlFor`
 * written by hand.
 *
 * @summary Complete text field from a flat prop surface
 */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText('Agency name')).toBeInTheDocument();
	}
};

/**
 * The caption's affordances and the helper text, all as flat props. `tooltip`
 * is the aside a user can go looking for; `description` is the guidance that
 * should always be on screen and is announced with the control.
 *
 * @summary Field with description, tooltip and the optional suffix
 */
export const WithDescriptionAndTooltip: Story = {
	args: {
		label: 'Scheduling link',
		type: 'url',
		optional: true,
		tooltip: 'Anyone with this link can book time on your calendar.',
		description: 'Shown on your public profile.',
		placeholder: 'https://cal.com/jane'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Scheduling link' });

		await expect(input).toHaveAccessibleDescription('Shown on your public profile.');
		await expect(canvas.getByRole('button', { name: 'More information' })).toBeInTheDocument();
	}
};

/**
 * Any entry with a `message` flips the field to invalid: the control gets
 * `aria-invalid` and the message is announced via `role="alert"`. The treatment
 * and the message come from the same prop, so they cannot disagree.
 *
 * @summary Errors drive both the invalid treatment and the alert message
 */
export const WithErrors: Story = {
	args: {
		label: 'Scheduling link',
		type: 'url',
		defaultValue: 'cal.com/jane',
		errors: [{ message: 'Enter a full URL, including https://.' }]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Scheduling link');

		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(canvas.getByRole('alert')).toHaveTextContent(
			'Enter a full URL, including https://.'
		);
	}
};

/**
 * `required` marks both halves of the field from one prop: the caption gets its
 * decorative asterisk and the `<input>` gets the native attribute, which is the
 * half assistive technology announces.
 *
 * @summary Required field: asterisk on the caption, required on the control
 */
export const Required: Story = {
	args: {
		label: 'Full name',
		required: true,
		placeholder: 'Jane Rivera'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText(/Full name/)).toBeRequired();
	}
};

/**
 * `size` is the **control's** height, not the field's: it reaches the `<input>`
 * and leaves the caption, the helper text and the gaps alone. The three heights
 * are `sm` (32px), `md` (40px, the default) and `lg` (48px).
 *
 * @summary The three control heights, set on the field and applied to the input
 */
export const Sizes: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1.5rem' }}>
			<FieldText {...args} size="sm" label="Small" />
			<FieldText {...args} size="md" label="Medium" />
			<FieldText {...args} size="lg" label="Large" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// The value set on the field has to survive the trip to the control —
		// nothing on the way is allowed to drop it.
		await expect(canvas.getByLabelText('Small')).toHaveAttribute('data-size', 'sm');
		await expect(canvas.getByLabelText('Medium')).toHaveAttribute('data-size', 'md');

		const large = canvas.getByLabelText('Large');
		await expect(large).toHaveAttribute('data-size', 'lg');
		await expect(large.getBoundingClientRect().height).toBe(48);
	}
};
