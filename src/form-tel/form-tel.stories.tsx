import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { FormTel } from '.';
import { Button } from '../button';
import { Field } from '../field';
import { Form } from '../form';

/**
 * FormTel is a complete US phone number field bound to one react-hook-form
 * value: label, `InputTel`, helper text and validation error in the standard
 * order, wired through `useController`. It renders inside a `Form.Root` and
 * needs only a `name`. The form stores the number masked, as the user sees
 * it: `(555) 123-4567`.
 *
 * It is `FormText` with an `InputTel` in place of the `Input`: same props,
 * same layout, same wiring.
 */
const meta = {
	title: 'Components/FormTel',
	component: FormTel,
	tags: ['autodocs'],
	argTypes: {
		// The form the story renders owns the path: changing it would unbind the field.
		name: { control: false },
		orientation: {
			control: 'radio',
			options: ['vertical', 'horizontal', 'responsive']
		},
		label: { control: 'text' },
		description: { control: 'text' },
		tooltip: { control: 'text' },
		required: { control: 'boolean' },
		optional: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' }
	},
	args: {
		name: 'phone',
		label: 'Phone number',
		orientation: 'vertical',
		required: true,
		optional: false,
		disabled: false,
		readOnly: false
	}
} satisfies Meta<typeof FormTel>;

export default meta;

type Story = StoryObj<typeof meta>;

const onSubmit = fn();

const US_PHONE = /^\(\d{3}\) \d{3}-\d{4}$/;

type ContactValues = {
	phone: string;
};

/**
 * A required phone field validating the full format. The digits are masked as
 * they are typed, a partial number fails the `pattern` rule, and the form
 * receives the masked text, never the bare digits.
 *
 * @summary Required phone field submitting the masked number
 */
export const Default: Story = {
	// The controls drive the field; the form owns the path, the control and the rules.
	render: args => {
		const methods = useForm<ContactValues>({ defaultValues: { phone: '' } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Contact"
				className="flex flex-col items-start gap-7">
				<FormTel
					rules={{
						required: 'Enter a phone number.',
						pattern: { value: US_PHONE, message: 'Enter a 10-digit phone number.' }
					}}
					inputProps={{ placeholder: '(555) 000-0000', autoComplete: 'tel-national' }}
					{...args}
					name="phone"
				/>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Phone number' });
		const save = canvas.getByRole('button', { name: 'Save' });

		await expect(input).toHaveAttribute('type', 'tel');
		await expect(input).toHaveAttribute('name', 'phone');
		await expect(input).toBeRequired();

		await userEvent.click(save);

		await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter a phone number.');
		await expect(input).toHaveAttribute('aria-invalid', 'true');

		await userEvent.type(input, '555123');
		await expect(input).toHaveValue('(555) 123-');

		await userEvent.click(save);

		await expect(await canvas.findByRole('alert')).toHaveTextContent(
			'Enter a 10-digit phone number.'
		);
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.type(input, '4567');

		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
		await expect(input).toHaveValue('(555) 123-4567');

		await userEvent.click(save);

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({ phone: '(555) 123-4567' }, expect.anything())
		);
	}
};

type AgentValues = {
	phone: string;
	mobile: string;
};

/**
 * `optional` appends a muted suffix to the label and leaves the input without
 * the `required` attribute. `description` is announced with the input.
 *
 * @summary Optional phone field with helper text
 */
export const OptionalWithDescription: Story = {
	render: () => {
		const methods = useForm<AgentValues>({ defaultValues: { phone: '', mobile: '' } });

		return (
			<Form.Root methods={methods} aria-label="Agent contact">
				<FormTel
					name="mobile"
					label="Mobile number"
					optional
					description="We text a code here when you sign in."
				/>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Mobile number (optional)' });

		await expect(input).not.toBeRequired();
		await expect(input).toHaveAccessibleDescription('We text a code here when you sign in.');
	}
};

/**
 * A value the form writes itself — `defaultValues`, `reset`, `setValue` — is
 * shown as given, so it is written masked, in the same shape the field stores.
 * Editing it masks the result as usual.
 *
 * @summary Masked default value and reset written by the form
 */
export const WithDefaultValue: Story = {
	render: () => {
		const methods = useForm<ContactValues>({ defaultValues: { phone: '(555) 123-4567' } });

		return (
			<Form.Root methods={methods} aria-label="Contact" className="flex flex-col items-start gap-7">
				<FormTel name="phone" label="Phone number" />
				<Button
					type="button"
					variant="secondary"
					onClick={() => methods.reset({ phone: '(555) 987-6543' })}>
					Load saved number
				</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await expect(input).toHaveValue('(555) 123-4567');

		await userEvent.click(canvas.getByRole('button', { name: 'Load saved number' }));

		await expect(input).toHaveValue('(555) 987-6543');

		await userEvent.clear(input);
		await userEvent.type(input, '5550001111');

		await expect(input).toHaveValue('(555) 000-1111');
	}
};

const onOwnChange = fn();
const onOwnBlur = fn();

/**
 * `inputProps` carries the input's own attributes — `placeholder`,
 * `autoComplete`, `size`… — and its handlers. A consumer `onChange` runs after
 * react-hook-form's and reads the masked value, both from the event and from
 * `getValues`; a consumer `onBlur` runs once the field is already touched. An
 * `aria-describedby` of its own joins the field's description instead of
 * replacing it.
 *
 * @summary Input attributes, chained handlers and an extra aria-describedby
 */
export const InputPropsChaining: Story = {
	render: () => {
		const methods = useForm<ContactValues>({ defaultValues: { phone: '' } });

		return (
			<Form.Root methods={methods} aria-label="Contact" className="flex flex-col gap-2">
				<FormTel
					name="phone"
					label="Phone number"
					description="We call this number about your policy."
					inputProps={{
						placeholder: '(555) 000-0000',
						autoComplete: 'tel-national',
						size: 'lg',
						'aria-describedby': 'phone-hours',
						onChange: event => onOwnChange(methods.getValues('phone'), event.target.value),
						onBlur: () => onOwnBlur(methods.getFieldState('phone').isTouched)
					}}
				/>
				<p id="phone-hours">Calls go out on weekdays, 9am to 5pm.</p>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onOwnChange.mockClear();
		onOwnBlur.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await expect(input).toHaveAttribute('placeholder', '(555) 000-0000');
		await expect(input).toHaveAttribute('autocomplete', 'tel-national');
		await expect(input).toHaveAttribute('data-size', 'lg');
		await expect(input).toHaveAccessibleDescription(
			'We call this number about your policy. Calls go out on weekdays, 9am to 5pm.'
		);

		await userEvent.type(input, '5551');

		await expect(onOwnChange).toHaveBeenCalledTimes(4);
		await expect(onOwnChange).toHaveBeenLastCalledWith('(555) 1', '(555) 1');

		await userEvent.tab();

		await expect(onOwnBlur).toHaveBeenCalledTimes(1);
		await expect(onOwnBlur).toHaveBeenLastCalledWith(true);
	}
};

/**
 * Root props pass through: `orientation="horizontal"` lays the label and the
 * phone frame in a row, with the description under the control.
 *
 * @summary Horizontal orientation through the root props
 */
export const Horizontal: Story = {
	render: () => {
		const methods = useForm<AgentValues>({ defaultValues: { phone: '', mobile: '' } });

		return (
			<Form.Root methods={methods} aria-label="Agent contact" className="w-[40rem]">
				<Field.Group>
					<FormTel
						name="phone"
						label="Office phone"
						orientation="horizontal"
						inputProps={{ className: 'w-72' }}
					/>
					<FormTel
						name="mobile"
						label="Mobile"
						description="Used for sign-in codes only."
						orientation="horizontal"
						inputProps={{ className: 'w-72' }}
						data-testid="mobile"
					/>
				</Field.Group>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const rect = (element: Element) => element.getBoundingClientRect();

		const field = canvas.getByTestId('mobile');
		const input = canvas.getByRole('textbox', { name: 'Mobile' });
		const frame = field.querySelector('[data-slot=input-tel]') as HTMLElement;
		const description = field.querySelector('[data-slot=field-description]') as HTMLElement;

		await expect(field).toHaveAttribute('data-orientation', 'horizontal');
		await expect(frame).toHaveClass('w-72');
		await expect(rect(canvas.getByText('Mobile')).right).toBeLessThanOrEqual(rect(frame).left);
		await expect(rect(description).top).toBeGreaterThanOrEqual(rect(frame).bottom);
		await expect(input).toHaveAccessibleDescription('Used for sign-in codes only.');
	}
};

/**
 * `disabled` disables the input and marks the field, and the value still
 * reaches `onSubmit` — unlike react-hook-form's own `disabled` option, which
 * drops it.
 *
 * @summary Disabled phone field whose value is still submitted
 */
export const Disabled: Story = {
	render: () => {
		const methods = useForm<ContactValues>({ defaultValues: { phone: '(555) 123-4567' } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Contact"
				className="flex flex-col items-start gap-7">
				<FormTel name="phone" label="Phone number" disabled />
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await expect(input).toBeDisabled();
		await expect(input.closest('[data-slot=field]')).toHaveAttribute('data-disabled');

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({ phone: '(555) 123-4567' }, expect.anything())
		);
	}
};

/**
 * react-hook-form's `ref` reaches the `<input>` inside the phone frame, so
 * `setFocus` and the focus on the first invalid field after submit both work.
 *
 * @summary Focus on the first invalid field after submit
 */
export const FocusOnError: Story = {
	render: () => {
		const methods = useForm<AgentValues>({ defaultValues: { phone: '', mobile: '' } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Agent contact"
				className="flex flex-col items-start gap-7">
				<Field.Group>
					<FormTel name="phone" label="Office phone" />
					<FormTel
						name="mobile"
						label="Mobile"
						required
						rules={{ required: 'Enter a mobile number.' }}
					/>
				</Field.Group>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() => expect(canvas.getByRole('textbox', { name: 'Mobile' })).toHaveFocus());
		await expect(onSubmit).not.toHaveBeenCalled();
	}
};
