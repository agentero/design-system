import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { FormNumber } from '.';
import { Button } from '../button';
import { Field } from '../field';
import { Form } from '../form';

/**
 * FormNumber is a complete numeric field bound to one react-hook-form value:
 * label, `InputNumber`, helper text and validation error in the standard
 * order, wired through `useController`. It renders inside a `Form.Root` and
 * needs only a `name`. The form stores the text the field shows (`"1,234"`),
 * not a number; parse it where the number is used.
 *
 * It is `FormText` with an `InputNumber` in place of the `Input`: same props,
 * same layout, same wiring. The formatting goes in `inputProps`.
 */
const meta = {
	title: 'Components/FormNumber',
	component: FormNumber,
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
		name: 'annualPremium',
		label: 'Annual premium',
		orientation: 'vertical',
		required: true,
		optional: false,
		disabled: false,
		readOnly: false
	}
} satisfies Meta<typeof FormNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

const onSubmit = fn();

type PolicyValues = {
	annualPremium: string;
};

/**
 * An amount: `thousandSeparator` groups the digits as they are typed and the
 * form receives the formatted text, `"1,234,567"`. Submitting empty fails the
 * required rule.
 *
 * @summary Required amount field submitting the formatted text
 */
export const Default: Story = {
	// The controls drive the field; the form owns the path, the control and the rules.
	render: args => {
		const methods = useForm<PolicyValues>({ defaultValues: { annualPremium: '' } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Policy"
				className="flex flex-col items-start gap-7">
				<FormNumber
					rules={{ required: 'Enter the annual premium.' }}
					inputProps={{ thousandSeparator: true, placeholder: '0' }}
					{...args}
					name="annualPremium"
				/>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Annual premium' });
		const save = canvas.getByRole('button', { name: 'Save' });

		await expect(input).toHaveAttribute('name', 'annualPremium');
		await expect(input).toHaveAttribute('inputmode', 'decimal');
		await expect(input).toBeRequired();

		await userEvent.click(save);

		await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter the annual premium.');
		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.type(input, '1234567');

		await expect(input).toHaveValue('1,234,567');
		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());

		await userEvent.click(save);

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({ annualPremium: '1,234,567' }, expect.anything())
		);
	}
};

type LicenseValues = {
	agency: {
		npn: string;
	};
};

/**
 * An identifier: with no separator the field keeps the zeros typed in front,
 * so `0012345` reaches the form as typed. `inputMode="numeric"` brings up a
 * digits-only keypad on mobile, and the rules validate the text.
 *
 * @summary Identifier keeping its leading zeros, on a nested path
 */
export const Identifier: Story = {
	render: () => {
		const methods = useForm<LicenseValues>({ defaultValues: { agency: { npn: '' } } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="License"
				className="flex flex-col items-start gap-7">
				<FormNumber<LicenseValues>
					name="agency.npn"
					label="NPN"
					description="6 to 10 digits, as on your license."
					rules={{
						required: 'Enter your NPN.',
						pattern: { value: /^\d{6,10}$/, message: 'An NPN is 6 to 10 digits.' }
					}}
					inputProps={{ inputMode: 'numeric', autoComplete: 'off' }}
				/>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'NPN' });
		const save = canvas.getByRole('button', { name: 'Save' });

		await expect(input).toHaveAttribute('inputmode', 'numeric');

		await userEvent.type(input, '0012');
		await userEvent.click(save);

		await expect(await canvas.findByRole('alert')).toHaveTextContent('An NPN is 6 to 10 digits.');

		await userEvent.type(input, '345');
		await userEvent.click(save);

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({ agency: { npn: '0012345' } }, expect.anything())
		);
		await expect(input).toHaveValue('0012345');
	}
};

type CoverageValues = {
	coveragePercentage: string;
};

/**
 * `maxNumber` drops a keystroke that would take the number above it, before
 * it reaches the form: typing `150` with a maximum of 100 leaves `15`.
 *
 * @summary Maximum enforced while typing
 */
export const MaxNumber: Story = {
	render: () => {
		const methods = useForm<CoverageValues>({ defaultValues: { coveragePercentage: '' } });

		return (
			<Form.Root methods={methods} aria-label="Coverage">
				<FormNumber
					name="coveragePercentage"
					label="Coverage percentage"
					description="Up to 100."
					inputProps={{ maxNumber: 100 }}
				/>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Coverage percentage' });

		await userEvent.type(input, '150');

		await expect(input).toHaveValue('15');
	}
};

const onValidate = fn(() => true);

/**
 * With `thousandSeparator` the zeros typed in front are dropped once the field
 * loses focus: `0001234` becomes `1,234`, in the field and in the form. The
 * trimmed value reaches react-hook-form before its blur, so a rule run on
 * blur (`mode: 'onBlur'`) already reads `"1,234"`.
 *
 * @summary Leading zeros dropped on blur, in the field and in the form
 */
export const LeadingZerosOnBlur: Story = {
	render: () => {
		const methods = useForm<PolicyValues>({
			mode: 'onBlur',
			defaultValues: { annualPremium: '' }
		});

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Policy"
				className="flex flex-col items-start gap-7">
				<FormNumber
					name="annualPremium"
					label="Annual premium"
					rules={{ validate: onValidate }}
					inputProps={{ thousandSeparator: true }}
				/>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		onValidate.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Annual premium' });

		await userEvent.type(input, '0001234');
		await userEvent.tab();

		await expect(input).toHaveValue('1,234');
		await waitFor(() => expect(onValidate).toHaveBeenLastCalledWith('1,234', expect.anything()));

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({ annualPremium: '1,234' }, expect.anything())
		);
	}
};

/**
 * A value the form writes — `defaultValues`, `reset`, `setValue` — is shown
 * formatted. Write it in the shape the field stores, the formatted text, so
 * the form holds the same value before and after the user edits it.
 *
 * @summary Formatted default value and reset written by the form
 */
export const WithDefaultValue: Story = {
	render: () => {
		const methods = useForm<PolicyValues>({ defaultValues: { annualPremium: '12,500' } });

		return (
			<Form.Root methods={methods} aria-label="Policy" className="flex flex-col items-start gap-7">
				<FormNumber
					name="annualPremium"
					label="Annual premium"
					inputProps={{ thousandSeparator: true }}
				/>
				<Button
					type="button"
					variant="secondary"
					onClick={() => methods.reset({ annualPremium: '8,250' })}>
					Load last year
				</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Annual premium' });

		await expect(input).toHaveValue('12,500');

		await userEvent.click(canvas.getByRole('button', { name: 'Load last year' }));

		await expect(input).toHaveValue('8,250');
	}
};

const onOwnChange = fn();

/**
 * A consumer `onChange` in `inputProps` runs after react-hook-form's and reads
 * the formatted text, both from the event and from `getValues`.
 *
 * @summary Consumer onChange reading the formatted value
 */
export const InputPropsChaining: Story = {
	render: () => {
		const methods = useForm<PolicyValues>({ defaultValues: { annualPremium: '' } });

		return (
			<Form.Root methods={methods} aria-label="Policy">
				<FormNumber
					name="annualPremium"
					label="Annual premium"
					inputProps={{
						thousandSeparator: true,
						size: 'lg',
						onChange: event => onOwnChange(methods.getValues('annualPremium'), event.target.value)
					}}
				/>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onOwnChange.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Annual premium' });

		await expect(input).toHaveAttribute('data-size', 'lg');

		await userEvent.type(input, '1234');

		await expect(onOwnChange).toHaveBeenLastCalledWith('1,234', '1,234');
	}
};

/**
 * `disabled` disables the input and marks the field, and the value still
 * reaches `onSubmit` — unlike react-hook-form's own `disabled` option, which
 * drops it.
 *
 * @summary Disabled numeric field whose value is still submitted
 */
export const Disabled: Story = {
	render: () => {
		const methods = useForm<PolicyValues>({ defaultValues: { annualPremium: '12,500' } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Policy"
				className="flex flex-col items-start gap-7">
				<FormNumber
					name="annualPremium"
					label="Annual premium"
					disabled
					inputProps={{ thousandSeparator: true }}
				/>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Annual premium' });

		await expect(input).toBeDisabled();
		await expect(input.closest('[data-slot=field]')).toHaveAttribute('data-disabled');

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({ annualPremium: '12,500' }, expect.anything())
		);
	}
};

type QuoteValues = {
	annualPremium: string;
	deductible: string;
};

/**
 * react-hook-form's `ref` reaches the `<input>` that `InputNumber` renders, so
 * `setFocus` and the focus on the first invalid field after submit both work.
 *
 * @summary Focus on the first invalid field after submit
 */
export const FocusOnError: Story = {
	render: () => {
		const methods = useForm<QuoteValues>({
			defaultValues: { annualPremium: '12,500', deductible: '' }
		});

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Quote"
				className="flex flex-col items-start gap-7">
				<Field.Group>
					<FormNumber
						name="annualPremium"
						label="Annual premium"
						inputProps={{ thousandSeparator: true }}
					/>
					<FormNumber
						name="deductible"
						label="Deductible"
						required
						rules={{ required: 'Enter the deductible.' }}
						inputProps={{ thousandSeparator: true }}
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

		await waitFor(() => expect(canvas.getByRole('textbox', { name: 'Deductible' })).toHaveFocus());
		await expect(onSubmit).not.toHaveBeenCalled();
	}
};
