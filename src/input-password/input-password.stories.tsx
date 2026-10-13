import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Field } from '../field';
import { FieldText } from '../field-text';
import { Label } from '../label';
import { InputPassword } from './input-password';

/**
 * InputPassword is a password field with a show/hide toggle at the end of its
 * frame. It is an `Input` inside an `InputGroup`: `className` styles the
 * frame and every other prop reaches the `<input>`, which takes its label,
 * messages and states from a surrounding `FieldText`. The toggle is not
 * rendered while the input is disabled.
 */
const meta = {
	title: 'Components/InputPassword',
	component: InputPassword,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg']
		},
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' },
		'aria-invalid': { control: 'boolean' }
	},
	args: {
		'aria-label': 'Password',
		autoComplete: 'current-password'
	},
	decorators: [
		Story => (
			<div style={{ maxWidth: '24rem' }}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof InputPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

const getFrames = (canvasElement: HTMLElement) =>
	Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-slot="input-password"]'));

/**
 * The value starts hidden. The toggle shows it as plain text and hides it
 * again; pressing it leaves focus and the caret in the input.
 *
 * @summary Hidden value with a toggle that reveals and hides it
 */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Password');

		await expect(input).toHaveAttribute('type', 'password');
		await userEvent.type(input, 'correct horse');

		await userEvent.click(canvas.getByRole('button', { name: 'Show password' }));
		await expect(input).toHaveAttribute('type', 'text');
		await expect(input).toHaveFocus();
		await expect(input).toHaveValue('correct horse');
		await expect(canvas.getByRole('button', { name: 'Hide password' })).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: 'Hide password' }));
		await expect(input).toHaveAttribute('type', 'password');
		await expect(input).toHaveFocus();
	}
};

/**
 * A disabled input has no toggle, whether `disabled` is set on the input
 * itself or comes from a `<fieldset disabled>` around it.
 *
 * @summary Disabled input with the toggle removed
 */
export const Disabled: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<InputPassword {...args} disabled defaultValue="hunter22" />
			<fieldset disabled style={{ border: 0, margin: 0, padding: 0 }}>
				<InputPassword {...args} aria-label="New password" autoComplete="new-password" />
			</fieldset>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText('Password')).toBeDisabled();
		await expect(canvas.getByLabelText('New password')).toBeDisabled();
		await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
	}
};

/**
 * `invalid` on the surrounding `FieldText` sets `aria-invalid` on the input,
 * which paints the frame's destructive border, and `Field.Error` is announced
 * with the input.
 *
 * @summary Invalid field driving the frame's destructive border
 */
export const Invalid: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1.5rem' }}>
			<InputPassword {...args} aria-label="Valid password" defaultValue="hunter22" />
			<FieldText invalid>
				<Label>Password</Label>
				<InputPassword autoComplete="new-password" defaultValue="hunter" />
				<Field.Error errors={[{ message: 'Use at least 8 characters.' }]} />
			</FieldText>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Password');
		const [valid, invalid] = getFrames(canvasElement) as [HTMLElement, HTMLElement];

		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(input).toHaveAccessibleDescription('Use at least 8 characters.');
		await expect(getComputedStyle(invalid).borderColor).not.toBe(
			getComputedStyle(valid).borderColor
		);
	}
};

/**
 * The three sizes match Input's: the frame is 32, 40 or 48px tall. The toggle
 * grows with it (a 24px button with a 16px icon at `sm`, 32px with 20px at
 * `md`, 32px with 24px at `lg`) and sits as far from the right edge as from
 * the top and bottom.
 *
 * @summary The three sizes, with the toggle scaled and evenly inset
 */
export const AllSizes: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<InputPassword {...args} size="sm" aria-label="Small" />
			<InputPassword {...args} size="md" aria-label="Medium" />
			<InputPassword {...args} size="lg" aria-label="Large" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const measures = getFrames(canvasElement).map(frame => {
			const box = frame.getBoundingClientRect();
			const button = frame.querySelector('button')!.getBoundingClientRect();
			const icon = frame.querySelector('button svg')!.getBoundingClientRect();

			return {
				frame: box.height,
				button: button.height,
				icon: icon.height,
				top: button.top - box.top,
				bottom: box.bottom - button.bottom,
				right: box.right - button.right
			};
		});

		await expect(measures).toEqual([
			{ frame: 32, button: 24, icon: 16, top: 4, bottom: 4, right: 4 },
			{ frame: 40, button: 32, icon: 20, top: 4, bottom: 4, right: 4 },
			{ frame: 48, button: 32, icon: 24, top: 8, bottom: 8, right: 8 }
		]);
	}
};

/**
 * Inside a `FieldText` the input takes its label, description and states from
 * the field through the frame. A disabled field removes the toggle too.
 *
 * @summary Label and disabled state reaching the input through the frame
 */
export const InsideFieldText: Story = {
	render: () => (
		<div style={{ display: 'grid', gap: '1.5rem' }}>
			<FieldText required>
				<Label>Password</Label>
				<InputPassword autoComplete="new-password" />
				<Field.Description>At least 8 characters.</Field.Description>
			</FieldText>
			<FieldText disabled>
				<Label>Current password</Label>
				<InputPassword autoComplete="current-password" defaultValue="hunter22" />
			</FieldText>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText(/^Password/);
		const disabled = canvas.getByLabelText('Current password');

		await expect(input).toBeRequired();
		await expect(input).toHaveAccessibleDescription('At least 8 characters.');
		await expect(canvas.getByRole('button', { name: 'Show password' })).toBeInTheDocument();
		await expect(disabled).toBeDisabled();
		await expect(canvas.getAllByRole('button')).toHaveLength(1);
	}
};
