import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { FormPassword } from '.';
import { Button } from '../button';
import { Field } from '../field';
import { Form } from '../form';
import { FormText } from '../form-text';

/**
 * FormPassword is a complete password field bound to one react-hook-form
 * value: label, `InputPassword` with its show/hide toggle, helper text and
 * validation error in the standard order, wired through `useController`. It
 * renders inside a `Form.Root` and needs only a `name`.
 *
 * It is `FormText` with an `InputPassword` in place of the `Input`: same
 * props, same layout, same wiring. Only `inputProps.type` is left out,
 * because the toggle owns it.
 */
const meta = {
	title: 'Components/FormPassword',
	component: FormPassword,
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
		name: 'password',
		label: 'Password',
		orientation: 'vertical',
		required: true,
		optional: false,
		disabled: false,
		readOnly: false
	}
} satisfies Meta<typeof FormPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

const onSubmit = fn();

type SignInValues = {
	email: string;
	password: string;
};

/**
 * A sign-in password: required, with `autoComplete="current-password"` so
 * password managers fill it. The toggle reveals what was typed and the form
 * receives the text either way.
 *
 * @summary Required sign-in password with the show/hide toggle
 */
export const Default: Story = {
	// The controls drive the field; the form owns the path, the control and the rules.
	render: args => {
		const methods = useForm<SignInValues>({ defaultValues: { email: '', password: '' } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Sign in"
				className="flex flex-col items-start gap-7">
				<FormPassword
					rules={{ required: 'Enter your password.' }}
					inputProps={{ autoComplete: 'current-password' }}
					{...args}
					name="password"
				/>
				<Button type="submit">Sign in</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByLabelText(/Password/);
		const submit = canvas.getByRole('button', { name: 'Sign in' });

		await expect(input).toHaveAttribute('type', 'password');
		await expect(input).toHaveAttribute('name', 'password');
		await expect(input).toHaveAttribute('autocomplete', 'current-password');
		await expect(input).toBeRequired();

		await userEvent.click(submit);

		await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter your password.');
		await expect(input).toHaveAttribute('aria-invalid', 'true');

		await userEvent.type(input, 'Str0ngPassw0rd');
		await userEvent.click(canvas.getByRole('button', { name: 'Show password' }));

		await expect(input).toHaveAttribute('type', 'text');
		await expect(input).toHaveValue('Str0ngPassw0rd');

		await userEvent.click(submit);

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith(
				{ email: '', password: 'Str0ngPassw0rd' },
				expect.anything()
			)
		);
	}
};

type NewPasswordValues = {
	newPassword: string;
};

/**
 * A new password with strength rules: each rule is a `rules.validate` entry,
 * and a form set to `criteriaMode: 'all'` lists every rule that failed under
 * the field, after the description.
 *
 * @summary New password listing every failed strength rule
 */
export const NewPassword: Story = {
	render: () => {
		const methods = useForm<NewPasswordValues>({
			defaultValues: { newPassword: '' },
			criteriaMode: 'all'
		});

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Change password"
				className="flex flex-col items-start gap-7">
				<FormPassword
					name="newPassword"
					label="New password"
					description="At least 10 characters, with an uppercase letter and a number."
					required
					inputProps={{ autoComplete: 'new-password' }}
					rules={{
						required: 'Enter a password.',
						validate: {
							uppercase: value => /[A-Z]/.test(value) || 'At least one uppercase letter.',
							number: value => /[0-9]/.test(value) || 'At least one number.',
							length: value => value.length >= 10 || 'At least 10 characters.'
						}
					}}
				/>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByLabelText(/New password/);

		await userEvent.type(input, 'short');
		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		const alert = await canvas.findByRole('alert');

		await expect(within(alert).getAllByRole('listitem')).toHaveLength(3);
		await expect(input).toHaveAccessibleDescription(
			expect.stringContaining('At least 10 characters, with an uppercase letter and a number.')
		);
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.clear(input);
		await userEvent.type(input, 'Str0ngPassw0rd');
		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({ newPassword: 'Str0ngPassw0rd' }, expect.anything())
		);
	}
};

const onOwnChange = fn();
const onOwnBlur = fn();

/**
 * `inputProps` carries the input's own attributes — `placeholder`,
 * `autoComplete`, `size`… — and its handlers. A consumer `onChange` runs after
 * react-hook-form's and reads the typed text, both from the event and from
 * `getValues`; a consumer `onBlur` runs once the field is already touched. An
 * `aria-describedby` of its own joins the field's description instead of
 * replacing it.
 *
 * @summary Input attributes, chained handlers and an extra aria-describedby
 */
export const InputPropsChaining: Story = {
	render: () => {
		const methods = useForm<SignInValues>({ defaultValues: { email: '', password: '' } });

		return (
			<Form.Root methods={methods} aria-label="Sign in" className="flex flex-col gap-2">
				<FormPassword
					name="password"
					label="Password"
					description="The one you set when you activated your account."
					inputProps={{
						placeholder: 'Enter your password',
						autoComplete: 'current-password',
						size: 'lg',
						'aria-describedby': 'password-reset',
						onChange: event => onOwnChange(methods.getValues('password'), event.target.value),
						onBlur: () => onOwnBlur(methods.getFieldState('password').isTouched)
					}}
				/>
				<p id="password-reset">Forgot it? Ask your admin for a reset link.</p>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onOwnChange.mockClear();
		onOwnBlur.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByLabelText('Password');

		await expect(input).toHaveAttribute('placeholder', 'Enter your password');
		await expect(input).toHaveAttribute('autocomplete', 'current-password');
		await expect(input).toHaveAttribute('data-size', 'lg');
		await expect(input).toHaveAccessibleDescription(
			'The one you set when you activated your account. Forgot it? Ask your admin for a reset link.'
		);

		await userEvent.type(input, 'Str0ng');

		await expect(onOwnChange).toHaveBeenCalledTimes(6);
		await expect(onOwnChange).toHaveBeenLastCalledWith('Str0ng', 'Str0ng');

		await userEvent.tab();

		await expect(onOwnBlur).toHaveBeenCalledTimes(1);
		await expect(onOwnBlur).toHaveBeenLastCalledWith(true);
	}
};

type ChangePasswordValues = {
	currentPassword: string;
	newPassword: string;
};

/**
 * Root props pass through: `orientation="horizontal"` lays the label and the
 * password frame in a row, with the description under the control.
 *
 * @summary Horizontal orientation through the root props
 */
export const Horizontal: Story = {
	render: () => {
		const methods = useForm<ChangePasswordValues>({
			defaultValues: { currentPassword: '', newPassword: '' }
		});

		return (
			<Form.Root methods={methods} aria-label="Change password" className="w-[40rem]">
				<Field.Group>
					<FormPassword
						name="currentPassword"
						label="Current password"
						orientation="horizontal"
						inputProps={{ autoComplete: 'current-password', className: 'w-72' }}
					/>
					<FormPassword
						name="newPassword"
						label="New password"
						description="At least 10 characters."
						orientation="horizontal"
						inputProps={{ autoComplete: 'new-password', className: 'w-72' }}
						data-testid="new-password"
					/>
				</Field.Group>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const rect = (element: Element) => element.getBoundingClientRect();

		const field = canvas.getByTestId('new-password');
		const input = canvas.getByLabelText('New password');
		const frame = field.querySelector('[data-slot=input-password]') as HTMLElement;
		const description = field.querySelector('[data-slot=field-description]') as HTMLElement;

		await expect(field).toHaveAttribute('data-orientation', 'horizontal');
		await expect(frame).toHaveClass('w-72');
		await expect(rect(canvas.getByText('New password')).right).toBeLessThanOrEqual(
			rect(frame).left
		);
		await expect(rect(description).top).toBeGreaterThanOrEqual(rect(frame).bottom);
		await expect(input).toHaveAccessibleDescription('At least 10 characters.');
	}
};

/**
 * `disabled` disables the input and hides the toggle, and the value still
 * reaches `onSubmit` — unlike react-hook-form's own `disabled` option, which
 * drops it.
 *
 * @summary Disabled password field, toggle hidden, value still submitted
 */
export const Disabled: Story = {
	render: () => {
		const methods = useForm<SignInValues>({
			defaultValues: { email: 'ops@acme-insurance.com', password: 'Str0ngPassw0rd' }
		});

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Sign in"
				className="flex flex-col items-start gap-7">
				<FormPassword name="password" label="Password" disabled />
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByLabelText('Password');

		await expect(input).toBeDisabled();
		await expect(input.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
		await expect(
			canvas.getByRole('button', { name: 'Show password', hidden: true })
		).not.toBeVisible();

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith(
				{ email: 'ops@acme-insurance.com', password: 'Str0ngPassw0rd' },
				expect.anything()
			)
		);
	}
};

/**
 * react-hook-form's `ref` reaches the `<input>` inside the password frame, so
 * `setFocus` and the focus on the first invalid field after submit both work.
 *
 * @summary Focus on the first invalid field after submit
 */
export const FocusOnError: Story = {
	render: () => {
		const methods = useForm<SignInValues>({
			defaultValues: { email: 'ops@acme-insurance.com', password: '' }
		});

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Sign in"
				className="flex flex-col items-start gap-7">
				<Field.Group>
					<FormText name="email" label="Email" inputProps={{ type: 'email' }} />
					<FormPassword
						name="password"
						label="Password"
						required
						rules={{ required: 'Enter your password.' }}
						inputProps={{ autoComplete: 'current-password' }}
					/>
				</Field.Group>
				<Button type="submit">Sign in</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: 'Sign in' }));

		await waitFor(() => expect(canvas.getByLabelText(/Password/)).toHaveFocus());
		await expect(onSubmit).not.toHaveBeenCalled();
	}
};
