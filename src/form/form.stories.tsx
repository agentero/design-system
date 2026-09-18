import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { Form } from '.';
import { Button } from '../button';
import { Field } from '../field';
import { FormText } from '../form-text';

/**
 * Form is the react-hook-form binding of the design system. `Form.Root` renders
 * the `<form>` and provides the `useForm()` instance to the form fields inside
 * it — `FormText` and the other `Form<X>` components — which bind themselves by
 * `name`. The submit goes through `handleSubmit`, so `onSubmit` only runs with
 * valid, typed values, and the element is always `noValidate`: validation is
 * react-hook-form's, and the `required` a field sets is announced without the
 * browser's own bubble.
 *
 * `react-hook-form` is an optional peer dependency: install it in the app and
 * keep a single copy, since the provider and the fields share one context.
 */
const meta = {
	title: 'Components/Form',
	component: Form.Root,
	tags: ['autodocs'],
	argTypes: {
		'aria-label': { control: 'text' }
	}
} satisfies Meta;

export default meta;

type Story = StoryObj;

type AgencyValues = {
	agencyName: string;
	email: string;
};

const onSubmit = fn();

const AgencyForm = () => {
	const methods = useForm<AgencyValues>({ defaultValues: { agencyName: '', email: '' } });

	return (
		<Form.Root
			methods={methods}
			onSubmit={onSubmit}
			aria-label="Agency profile"
			className="flex flex-col items-start gap-7">
			<Field.Group>
				<FormText
					name="agencyName"
					label="Agency name"
					required
					rules={{ required: 'Enter the agency name.' }}
				/>
				<FormText
					name="email"
					label="Email"
					required
					rules={{ required: 'Enter the agency email.' }}
					inputProps={{ type: 'email', autoComplete: 'email' }}
				/>
			</Field.Group>
			<Button type="submit">Save</Button>
		</Form.Root>
	);
};

/**
 * A form with two required fields and a submit button. Submitting empty shows
 * both errors, marks both inputs invalid and focuses the first one — proof that
 * react-hook-form's `ref` reached the inputs. Once filled in, `onSubmit`
 * receives the typed values.
 *
 * @summary Form.Root with FormText fields validating on submit
 */
export const Default: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<AgencyValues>({ defaultValues: { agencyName: '', email: '' } });

<Form.Root
  methods={methods}
  onSubmit={saveAgency}
  aria-label="Agency profile"
  className="flex flex-col items-start gap-7">
  <Field.Group>
    <FormText
      name="agencyName"
      label="Agency name"
      required
      rules={{ required: 'Enter the agency name.' }}
    />
    <FormText
      name="email"
      label="Email"
      required
      rules={{ required: 'Enter the agency email.' }}
      inputProps={{ type: 'email', autoComplete: 'email' }}
    />
  </Field.Group>
  <Button type="submit">Save</Button>
</Form.Root>`
			}
		}
	},
	render: () => <AgencyForm />,
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const form = canvas.getByRole('form', { name: 'Agency profile' });
		const agencyName = canvas.getByRole('textbox', { name: 'Agency name' });
		const email = canvas.getByRole('textbox', { name: 'Email' });

		await expect(form).toHaveAttribute('novalidate');
		await expect(agencyName).toBeRequired();
		await expect(email).toBeRequired();

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		const alerts = await canvas.findAllByRole('alert');

		await expect(alerts).toHaveLength(2);
		await expect(alerts[0]).toHaveTextContent('Enter the agency name.');
		await expect(alerts[1]).toHaveTextContent('Enter the agency email.');
		await expect(agencyName).toHaveAttribute('aria-invalid', 'true');
		await expect(email).toHaveAttribute('aria-invalid', 'true');
		await expect(agencyName).toHaveFocus();
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.type(agencyName, 'Acme Insurance');
		await userEvent.type(email, 'ops@acme-insurance.com');

		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
		await expect(agencyName).not.toHaveAttribute('aria-invalid');

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith(
				{ agencyName: 'Acme Insurance', email: 'ops@acme-insurance.com' },
				expect.anything()
			)
		);
	}
};

type NicknameValues = {
	nickname: string;
};

const NicknameForm = () => {
	const methods = useForm<NicknameValues>({ defaultValues: { nickname: '' } });

	return (
		<Form.Root
			methods={methods}
			onSubmit={onSubmit}
			aria-label="Display name"
			className="flex flex-col items-start gap-7">
			<FormText name="nickname" label="Display name" required />
			<Button type="submit">Save</Button>
		</Form.Root>
	);
};

/**
 * `required` on a field reaches the native attribute, so assistive technology
 * announces it, but the form renders `noValidate`: without `rules`, submitting
 * the field empty is not blocked by the browser and `onSubmit` still runs.
 * Validation is react-hook-form's alone.
 *
 * @summary Native required never triggers the browser's validation bubble
 */
export const NoValidate: Story = {
	parameters: {
		docs: {
			source: {
				code: `const methods = useForm<NicknameValues>({ defaultValues: { nickname: '' } });

<Form.Root
  methods={methods}
  onSubmit={save}
  aria-label="Display name"
  className="flex flex-col items-start gap-7">
  <FormText name="nickname" label="Display name" required />
  <Button type="submit">Save</Button>
</Form.Root>`
			}
		}
	},
	render: () => <NicknameForm />,
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('form', { name: 'Display name' })).toHaveAttribute('novalidate');
		await expect(canvas.getByRole('textbox', { name: 'Display name' })).toBeRequired();

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ nickname: '' }, expect.anything()));
		await expect(canvas.queryByRole('alert')).toBeNull();
	}
};
