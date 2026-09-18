import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { FormText, type FormTextProps } from '.';
import { Button } from '../button';
import { Field } from '../field';
import { Form } from '../form';

/**
 * FormText is a complete text field bound to one react-hook-form value: label,
 * `Input`, helper text and validation error in the standard order, wired
 * through `useController`. It renders inside a `Form.Root` and needs only a
 * `name`; `required`, `invalid` and the error reach the label, the input's
 * `aria-*` attributes and the message with no ids written by hand.
 *
 * It covers the common case. For another layout — an input with addons, a
 * different control, a message rendered elsewhere — compose `useController`
 * with the `FieldText`, `Label`, `Input` and `Field.*` primitives directly.
 */
const meta = {
	title: 'Components/FormText',
	component: FormText,
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
		name: 'agencyName',
		label: 'Agency name',
		orientation: 'vertical',
		required: true,
		optional: false,
		disabled: false,
		readOnly: false
	}
} satisfies Meta<typeof FormText>;

export default meta;

type Story = StoryObj<typeof meta>;

const onSubmit = fn();

type AgencyValues = {
	agencyName: string;
};

// Takes the story args so the controls panel drives the field; the form owns
// the path, the control and the rule.
const AgencyNameForm = (args: Omit<FormTextProps, 'name' | 'control'>) => {
	const methods = useForm<AgencyValues>({ defaultValues: { agencyName: '' } });

	return (
		<Form.Root
			methods={methods}
			onSubmit={onSubmit}
			aria-label="Agency"
			className="flex flex-col items-start gap-7">
			<FormText
				rules={{ required: 'Enter the agency name.' }}
				inputProps={{ placeholder: 'Acme Insurance' }}
				{...args}
				name="agencyName"
			/>
			<Button type="submit">Save</Button>
		</Form.Root>
	);
};

/**
 * The field consumers write: a `name`, a `label` and the validation rule.
 * Submitting empty renders the error and marks the input invalid; typing
 * clears both and the value reaches `onSubmit`.
 *
 * @summary Required text field validating on submit
 */
export const Default: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<AgencyValues>({ defaultValues: { agencyName: '' } });

<Form.Root
  methods={methods}
  onSubmit={saveAgency}
  aria-label="Agency"
  className="flex flex-col items-start gap-7">
  <FormText
    name="agencyName"
    label="Agency name"
    required
    rules={{ required: 'Enter the agency name.' }}
    inputProps={{ placeholder: 'Acme Insurance' }}
  />
  <Button type="submit">Save</Button>
</Form.Root>`
			}
		}
	},
	render: args => <AgencyNameForm {...args} />,
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Agency name' });

		await expect(input).toBeRequired();
		await expect(input).toHaveAttribute('name', 'agencyName');
		await expect(canvas.queryByRole('alert')).toBeNull();

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter the agency name.');
		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.type(input, 'Acme Insurance');

		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
		await expect(input).not.toHaveAttribute('aria-invalid');

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({ agencyName: 'Acme Insurance' }, expect.anything())
		);
	}
};

type TaxValues = {
	taxId: string;
};

const TaxIdForm = () => {
	const methods = useForm<TaxValues>({ defaultValues: { taxId: '' } });

	return (
		<Form.Root methods={methods} aria-label="Tax details">
			<FormText
				name="taxId"
				label="Tax ID"
				tooltip="The EIN the IRS issued to the agency."
				description="Nine digits, with or without the dash."
				inputProps={{ inputMode: 'numeric', autoComplete: 'off' }}
			/>
		</Form.Root>
	);
};

/**
 * `description` is helper text under the input, announced through
 * `aria-describedby`. `tooltip` is an info button beside the label for details
 * worth a click; it is a sibling of the `<label>`, so the field's accessible
 * name stays the label text.
 *
 * @summary Helper text under the input and an info tooltip beside the label
 */
export const WithDescriptionAndTooltip: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<TaxValues>({ defaultValues: { taxId: '' } });

<Form.Root methods={methods} aria-label="Tax details">
  <FormText
    name="taxId"
    label="Tax ID"
    tooltip="The EIN the IRS issued to the agency."
    description="Nine digits, with or without the dash."
    inputProps={{ inputMode: 'numeric', autoComplete: 'off' }}
  />
</Form.Root>`
			}
		}
	},
	render: () => <TaxIdForm />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Tax ID' });
		const trigger = canvas.getByRole('button', { name: 'More information' });

		await expect(input).toHaveAccessibleDescription('Nine digits, with or without the dash.');
		await expect(trigger.closest('label')).toBeNull();
	}
};

type PhoneValues = {
	phone: string;
};

const PhoneForm = () => {
	const methods = useForm<PhoneValues>({ defaultValues: { phone: '' } });

	return (
		<Form.Root methods={methods} aria-label="Contact">
			<FormText name="phone" label="Phone number" optional inputProps={{ type: 'tel' }} />
		</Form.Root>
	);
};

/**
 * The forms mark optional fields rather than required ones: `optional`
 * appends a muted suffix to the label and leaves the input without the
 * `required` attribute.
 *
 * @summary Optional field with the " (optional)" label suffix
 */
export const Optional: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<PhoneValues>({ defaultValues: { phone: '' } });

<Form.Root methods={methods} aria-label="Contact">
  <FormText name="phone" label="Phone number" optional inputProps={{ type: 'tel' }} />
</Form.Root>`
			}
		}
	},
	render: () => <PhoneForm />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await expect(input).not.toBeRequired();
		await expect(canvas.getByText('Phone number')).toHaveClass(/after:content-/);
	}
};

type LicenseValues = {
	agency: {
		npn: string;
	};
};

const NpnForm = () => {
	const methods = useForm<LicenseValues>({ defaultValues: { agency: { npn: '' } } });

	return (
		<Form.Root
			methods={methods}
			onSubmit={onSubmit}
			aria-label="License"
			className="flex flex-col items-start gap-7">
			<FormText<LicenseValues>
				name="agency.npn"
				label="NPN"
				rules={{
					required: 'Enter your NPN.',
					pattern: { value: /^\d{6,10}$/, message: 'An NPN is 6 to 10 digits.' }
				}}
				inputProps={{ inputMode: 'numeric' }}
			/>
			<Button type="submit">Save</Button>
		</Form.Root>
	);
};

/**
 * `rules` are react-hook-form's, and `name` accepts nested paths typed against
 * the form's values through the generic. `rules.required` validates but does
 * not mark the field required: that stays an explicit `required` prop.
 *
 * @summary Nested path with validation rules, typed through the generic
 */
export const WithRules: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<LicenseValues>({ defaultValues: { agency: { npn: '' } } });

<Form.Root
  methods={methods}
  onSubmit={saveLicense}
  aria-label="License"
  className="flex flex-col items-start gap-7">
  <FormText<LicenseValues>
    name="agency.npn"
    label="NPN"
    rules={{
      required: 'Enter your NPN.',
      pattern: { value: /^\\d{6,10}$/, message: 'An NPN is 6 to 10 digits.' }
    }}
  />
  <Button type="submit">Save</Button>
</Form.Root>`
			}
		}
	},
	render: () => <NpnForm />,
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'NPN' });
		const save = canvas.getByRole('button', { name: 'Save' });

		await expect(input).toHaveAttribute('name', 'agency.npn');
		await expect(input).not.toBeRequired();
		await expect(canvas.queryByText('*')).toBeNull();

		await userEvent.click(save);
		await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter your NPN.');

		await userEvent.type(input, 'abc');
		await userEvent.click(save);
		await expect(await canvas.findByRole('alert')).toHaveTextContent('An NPN is 6 to 10 digits.');
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.clear(input);
		await userEvent.type(input, '1234567');
		await userEvent.click(save);

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({ agency: { npn: '1234567' } }, expect.anything())
		);
		await expect(canvas.queryByRole('alert')).toBeNull();
	}
};

type PasswordValues = {
	password: string;
};

const PasswordRulesForm = () => {
	const methods = useForm<PasswordValues>({
		defaultValues: { password: '' },
		criteriaMode: 'all'
	});

	return (
		<Form.Root
			methods={methods}
			onSubmit={onSubmit}
			aria-label="Account security"
			className="flex flex-col items-start gap-7">
			<FormText
				name="password"
				label="Password"
				required
				inputProps={{ type: 'password' }}
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
};

/**
 * A form set to react-hook-form's `criteriaMode: 'all'` collects every rule
 * that failed instead of stopping at the first, and the field lists them all.
 * With the default `'firstError'` a single message is rendered, as in the other
 * stories.
 *
 * @summary Every failed rule listed under criteriaMode 'all'
 */
export const AllErrors: Story = {
	parameters: {
		docs: {
			source: {
				code: `// criteriaMode: 'all' collects every rule that failed, not just the first.
const methods = useForm<PasswordValues>({
  defaultValues: { password: '' },
  criteriaMode: 'all'
});

<Form.Root
  methods={methods}
  onSubmit={save}
  aria-label="Account security"
  className="flex flex-col items-start gap-7">
  <FormText
    name="password"
    label="Password"
    required
    inputProps={{ type: 'password' }}
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
</Form.Root>`
			}
		}
	},
	render: () => <PasswordRulesForm />,
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByLabelText(/Password/);

		await userEvent.type(input, 'short');
		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		// Three rules failed, so three messages, not just the first one.
		const alert = await canvas.findByRole('alert');

		await expect(within(alert).getAllByRole('listitem')).toHaveLength(3);
		await expect(alert).toHaveTextContent('At least one uppercase letter.');
		await expect(alert).toHaveTextContent('At least one number.');
		await expect(alert).toHaveTextContent('At least 10 characters.');
		await expect(input).toHaveAccessibleDescription(
			expect.stringContaining('At least one number.')
		);
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.clear(input);
		await userEvent.type(input, 'Str0ngPassw0rd');
		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() => expect(onSubmit).toHaveBeenCalled());
		await expect(canvas.queryByRole('alert')).toBeNull();
	}
};

const onOwnChange = fn();

const MobileForm = () => {
	const methods = useForm<PhoneValues>({ defaultValues: { phone: '' } });

	return (
		<Form.Root methods={methods} aria-label="Mobile">
			<FormText
				name="phone"
				label="Mobile"
				inputProps={{
					type: 'tel',
					placeholder: '5550000000',
					maxLength: 10,
					size: 'lg',
					onChange: event => onOwnChange(methods.getValues('phone'), event.target.value)
				}}
			/>
		</Form.Root>
	);
};

/**
 * `inputProps` carries the input's own attributes — `type`, `placeholder`,
 * `maxLength`, `size`… — and its handlers. A consumer `onChange` runs after
 * react-hook-form's: by the time it fires, `getValues` already returns the new
 * value.
 *
 * @summary Input attributes and a consumer onChange chained after the form's
 */
export const InputPropsChaining: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<PhoneValues>({ defaultValues: { phone: '' } });

// The consumer's own onChange runs after react-hook-form's, already wired.
<Form.Root methods={methods} aria-label="Mobile">
  <FormText
    name="phone"
    label="Mobile"
    inputProps={{
      type: 'tel',
      maxLength: 1,
      onChange: event => track(event.target.value)
    }}
  />
</Form.Root>`
			}
		}
	},
	render: () => <MobileForm />,
	play: async ({ canvasElement }) => {
		onOwnChange.mockClear();
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Mobile' });

		await expect(input).toHaveAttribute('type', 'tel');
		await expect(input).toHaveAttribute('placeholder', '5550000000');
		await expect(input).toHaveAttribute('maxlength', '10');
		await expect(input).toHaveAttribute('data-size', 'lg');

		await userEvent.type(input, '5');

		await expect(input).toHaveValue('5');
		await expect(onOwnChange).toHaveBeenCalledTimes(1);
		await expect(onOwnChange).toHaveBeenLastCalledWith('5', '5');
	}
};

type ProfileValues = {
	fullName: string;
	title: string;
};

const ProfileForm = () => {
	const methods = useForm<ProfileValues>({
		defaultValues: { fullName: 'Rafa Moro', title: '' }
	});

	return (
		<Form.Root methods={methods} aria-label="Profile" className="w-[40rem]">
			<Field.Group>
				<FormText
					name="fullName"
					label="Full name"
					orientation="horizontal"
					inputProps={{ className: 'w-72' }}
					data-testid="short"
				/>
				<FormText
					name="title"
					label="Title"
					description="Shown on your public profile."
					orientation="horizontal"
					inputProps={{ className: 'w-72', placeholder: 'Software engineer' }}
					data-testid="long"
				/>
			</Field.Group>
		</Form.Root>
	);
};

/**
 * Root props pass through: `orientation="horizontal"` lays the label and the
 * control in a row, and `className` on the root or in `inputProps` sizes them.
 * The `Input` is full-width by default, so a settings row gives it a width.
 * `responsive` stacks the field below 28rem and rows it from there.
 *
 * @summary Horizontal orientation and class names through the root props
 */
export const Horizontal: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<ProfileValues>({
  defaultValues: { fullName: 'Rafa Moro', title: '' }
});

<Form.Root methods={methods} aria-label="Profile" className="w-[40rem]">
  <Field.Group>
    <FormText
      name="fullName"
      label="Full name"
      orientation="horizontal"
      inputProps={{ className: 'w-72' }}
    />
    <FormText
      name="title"
      label="Title"
      description="Shown on your public profile."
      orientation="horizontal"
      inputProps={{ className: 'w-72', placeholder: 'Software engineer' }}
    />
  </Field.Group>
</Form.Root>`
			}
		}
	},
	render: () => <ProfileForm />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const rect = (element: Element) => element.getBoundingClientRect();

		const short = canvas.getByTestId('short');
		const long = canvas.getByTestId('long');
		const shortInput = canvas.getByRole('textbox', { name: 'Full name' });
		const longInput = canvas.getByRole('textbox', { name: 'Title' });

		await expect(short).toHaveAttribute('data-orientation', 'horizontal');
		await expect(shortInput).toHaveClass('w-72');
		await expect(shortInput).toHaveValue('Rafa Moro');

		// Controls line up on the right whatever the label measures.
		await expect(rect(shortInput).left).toBe(rect(longInput).left);
		await expect(Math.round(rect(shortInput).right)).toBe(Math.round(rect(short).right));
		await expect(rect(canvas.getByText('Full name')).right).toBeLessThanOrEqual(
			rect(shortInput).left
		);

		// The description stays with its control, under it.
		const description = long.querySelector('[data-slot=field-description]') as HTMLElement;

		await expect(rect(description).top).toBeGreaterThanOrEqual(rect(longInput).bottom);
		await expect(longInput).toHaveAccessibleDescription('Shown on your public profile.');
	}
};

type AccountValues = {
	agencyId: string;
	email: string;
};

const AccountForm = () => {
	const methods = useForm<AccountValues>({
		defaultValues: { agencyId: 'AG-48213', email: 'ops@acme-insurance.com' }
	});

	return (
		<Form.Root
			methods={methods}
			onSubmit={onSubmit}
			aria-label="Account"
			className="flex flex-col items-start gap-7">
			<Field.Group>
				<FormText name="agencyId" label="Agency ID" disabled />
				<FormText name="email" label="Email" inputProps={{ type: 'email' }} />
			</Field.Group>
			<Button type="submit">Save</Button>
		</Form.Root>
	);
};

/**
 * `disabled` disables the input and marks the field, and the value still
 * reaches `onSubmit` — unlike react-hook-form's own `disabled` option, which
 * drops it. Use `readOnly` for a value the user can copy but not edit.
 *
 * @summary Disabled field whose value is still submitted
 */
export const Disabled: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<AccountValues>({
  defaultValues: { agencyId: 'AG-48213', email: 'ops@acme-insurance.com' }
});

<Form.Root
  methods={methods}
  onSubmit={saveAccount}
  aria-label="Account"
  className="flex flex-col items-start gap-7">
  <Field.Group>
    <FormText name="agencyId" label="Agency ID" disabled />
    <FormText name="email" label="Email" inputProps={{ type: 'email' }} />
  </Field.Group>
  <Button type="submit">Save</Button>
</Form.Root>`
			}
		}
	},
	render: () => <AccountForm />,
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const agencyId = canvas.getByRole('textbox', { name: 'Agency ID' });

		await expect(agencyId).toBeDisabled();
		await expect(agencyId.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
		await expect(canvas.getByRole('textbox', { name: 'Email' })).toBeEnabled();

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith(
				{ agencyId: 'AG-48213', email: 'ops@acme-insurance.com' },
				expect.anything()
			)
		);
	}
};

const SetFocusForm = () => {
	const methods = useForm<AgencyValues & PhoneValues>({
		defaultValues: { agencyName: '', phone: '' }
	});

	return (
		<Form.Root
			methods={methods}
			aria-label="Agency contact"
			className="flex flex-col items-start gap-7">
			<Field.Group>
				<FormText name="agencyName" label="Agency name" />
				<FormText name="phone" label="Phone number" inputProps={{ type: 'tel' }} />
			</Field.Group>
			<Button type="button" variant="secondary" onClick={() => methods.setFocus('phone')}>
				Focus phone
			</Button>
		</Form.Root>
	);
};

/**
 * react-hook-form's `ref` reaches the `<input>`, so `setFocus` and the focus
 * on the first invalid field after submit both work with no ref written by
 * hand.
 *
 * @summary setFocus reaches the input through the merged ref
 */
export const SetFocus: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<AgencyValues & PhoneValues>({
  defaultValues: { agencyName: '', phone: '' }
});

<Form.Root methods={methods} aria-label="Agency contact" className="flex flex-col items-start gap-7">
  <Field.Group>
    <FormText name="agencyName" label="Agency name" />
    <FormText name="phone" label="Phone number" inputProps={{ type: 'tel' }} />
  </Field.Group>
  <Button type="button" variant="secondary" onClick={() => methods.setFocus('phone')}>
    Focus phone
  </Button>
</Form.Root>`
			}
		}
	},
	render: () => <SetFocusForm />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const phone = canvas.getByRole('textbox', { name: 'Phone number' });

		await expect(phone).not.toHaveFocus();

		await userEvent.click(canvas.getByRole('button', { name: 'Focus phone' }));

		await expect(phone).toHaveFocus();
	}
};
