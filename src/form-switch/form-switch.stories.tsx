import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { FormSwitch } from '.';
import { Button } from '../button';
import { Field } from '../field';
import { Form } from '../form';

/**
 * FormSwitch is a complete on/off field bound to one boolean react-hook-form
 * value: label, `Switch`, helper text and validation error, laid out as in
 * `FieldSwitch` and wired through `useController`. It renders inside a
 * `Form.Root` and needs only a `name`; `required`, `invalid` and the error
 * reach the label, the toggle's `aria-*` attributes and the message with no
 * ids written by hand.
 *
 * It covers the common case. For another layout, compose `useController` with
 * the `FieldSwitch`, `Label`, `Switch` and `Field.*` primitives directly.
 */
const meta = {
	title: 'Components/FormSwitch',
	component: FormSwitch,
	tags: ['autodocs'],
	argTypes: {
		// The form the story renders owns the path: changing it would unbind the field.
		name: { control: false },
		label: { control: 'text' },
		description: { control: 'text' },
		tooltip: { control: 'text' },
		orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
		switchPosition: { control: 'radio', options: ['end', 'start'] },
		required: { control: 'boolean' },
		optional: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' }
	},
	args: {
		name: 'terms',
		label: 'I accept the carrier terms',
		description: 'The carrier reviews every request against them.',
		orientation: 'horizontal',
		switchPosition: 'end',
		required: true,
		optional: false,
		disabled: false,
		readOnly: false
	}
} satisfies Meta<typeof FormSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

// The stories with no play are the ones the controls and the Docs page drive;
// the hidden ones below them flip and submit the fields, and run as tests only.
const testOnly = ['!dev', '!autodocs', '!manifest'];

const onSubmit = fn();

type TermsValues = {
	terms: boolean;
};

const TermsForm = (args: Partial<Story['args']>) => {
	const methods = useForm<TermsValues>({ defaultValues: { terms: false } });

	return (
		<Form.Root
			methods={methods}
			onSubmit={onSubmit}
			aria-label="Appointment request"
			className="flex max-w-120 flex-col items-start gap-7">
			<FormSwitch
				label="I accept the carrier terms"
				rules={{ required: 'Accept the terms to send the request.' }}
				{...args}
				name="terms"
			/>
			<Button type="submit">Send</Button>
		</Form.Root>
	);
};

/**
 * The field consumers write: a `name`, a `label` and the validation rule.
 * `rules.required` fails while the toggle is off, so sending with it off
 * renders the error and marks the toggle invalid; turning it on clears both
 * and `true` reaches `onSubmit`.
 *
 * @summary Toggle the user must turn on, validating on submit
 */
export const Default: Story = {
	// The controls drive the field; the form owns the path, the value and the rule.
	render: args => <TermsForm {...args} />
};

/**
 * Sending with the toggle off renders the error, marks the toggle invalid and
 * focuses it through react-hook-form's `ref`; turning it on clears both and
 * `true` reaches `onSubmit`.
 */
export const ValidatesOnSubmit: Story = {
	tags: testOnly,
	render: () => (
		<TermsForm description="The carrier reviews every request against them." required />
	),
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('switch', { name: 'I accept the carrier terms' });

		await expect(toggle).not.toBeChecked();
		await expect(toggle).toHaveAttribute('aria-required', 'true');
		await expect(toggle).toHaveAccessibleDescription(
			'The carrier reviews every request against them.'
		);
		await expect(canvas.queryByRole('alert')).toBeNull();

		await userEvent.click(canvas.getByRole('button', { name: 'Send' }));

		await expect(await canvas.findByRole('alert')).toHaveTextContent(
			'Accept the terms to send the request.'
		);
		await expect(toggle).toHaveAttribute('aria-invalid', 'true');
		await expect(toggle).toHaveFocus();
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.click(toggle);

		await expect(toggle).toBeChecked();
		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
		await expect(toggle).not.toHaveAttribute('aria-invalid');

		await userEvent.click(canvas.getByRole('button', { name: 'Send' }));

		await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ terms: true }, expect.anything()));
	}
};

type NotificationValues = {
	notifications: {
		email: boolean;
		sms?: boolean | null;
	};
};

const NotificationsForm = () => {
	const methods = useForm<NotificationValues>({
		defaultValues: { notifications: { email: true } }
	});

	return (
		<Form.Root
			methods={methods}
			onSubmit={onSubmit}
			aria-label="Notifications"
			className="flex max-w-120 flex-col items-start gap-7">
			<Field.Group>
				<FormSwitch<NotificationValues>
					name="notifications.email"
					label="Email notifications"
					description="Get an email when a carrier returns a quote."
				/>
				<FormSwitch<NotificationValues>
					name="notifications.sms"
					label="Text messages"
					tooltip="Standard rates from your carrier apply."
					optional
				/>
			</Field.Group>
			<Button type="submit">Save</Button>
		</Form.Root>
	);
};

/**
 * `name` accepts nested paths typed against the form's values through the
 * generic. A value the form has not set yet (`undefined`, or `null`) reads as
 * off, and the first flip stores a boolean. `tooltip` is an info button beside
 * the label, a sibling of the `<label>`, so the accessible name stays the
 * label text; `optional` appends a muted suffix to it.
 *
 * @summary Nested paths, an empty value read as off, and an info tooltip
 */
export const NestedAndEmpty: Story = {
	render: () => <NotificationsForm />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const sms = canvas.getByRole('switch', { name: 'Text messages (optional)' });

		await expect(canvas.getByRole('switch', { name: 'Email notifications' })).toBeChecked();
		await expect(sms).not.toBeChecked();
		await expect(sms).not.toHaveAttribute('aria-required');
		await expect(
			canvas.getByRole('button', { name: 'More information' }).closest('label')
		).toBeNull();
	}
};

/** Flipping both toggles submits booleans at their nested paths, the empty one included. */
export const SubmitsNestedBooleans: Story = {
	tags: testOnly,
	render: () => <NotificationsForm />,
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('switch', { name: 'Email notifications' }));
		await userEvent.click(canvas.getByRole('switch', { name: 'Text messages (optional)' }));
		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith(
				{ notifications: { email: false, sms: true } },
				expect.anything()
			)
		);
	}
};

type BillingValues = {
	paperlessBilling: boolean;
};

/**
 * `switchPosition="start"` puts the toggle before the label and its
 * description, the same row in the other order.
 *
 * @summary Toggle first, then the label and its description
 */
export const SwitchFirst: Story = {
	render: () => {
		const methods = useForm<BillingValues>({ defaultValues: { paperlessBilling: false } });

		return (
			<Form.Root methods={methods} aria-label="Billing" className="max-w-120">
				<FormSwitch
					name="paperlessBilling"
					label="Paperless billing"
					description="Invoices arrive by email only."
					switchPosition="start"
				/>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('switch', { name: 'Paperless billing' });

		// The spacing is `FieldSwitch`'s; what `switchPosition` changes is the order.
		await expect(toggle.closest('[data-slot=field]')!.firstElementChild).toBe(toggle);
		await expect(toggle).toHaveAccessibleDescription('Invoices arrive by email only.');
	}
};

type LicenseValues = {
	skipLicenseCheck: boolean;
};

/**
 * `orientation="vertical"` stacks the toggle under the label, its
 * description and its error, for a switch in a form column next to other
 * fields.
 *
 * @summary Toggle under the label and its description
 */
export const Vertical: Story = {
	render: () => {
		const methods = useForm<LicenseValues>({ defaultValues: { skipLicenseCheck: false } });

		return (
			<Form.Root methods={methods} aria-label="Qualification" className="max-w-120">
				<FormSwitch
					name="skipLicenseCheck"
					label="Skip the one-year license check"
					description="Only for agencies the carrier has approved by hand."
					orientation="vertical"
				/>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('switch', { name: 'Skip the one-year license check' });
		const description = canvas.getByText('Only for agencies the carrier has approved by hand.');

		await expect(toggle.closest('[data-slot=field]')).toHaveAttribute(
			'data-orientation',
			'vertical'
		);
		await expect(toggle.getBoundingClientRect().top).toBeGreaterThanOrEqual(
			description.getBoundingClientRect().bottom
		);
	}
};

type AgencyValues = {
	instantAppointments: boolean;
	paperlessBilling: boolean;
};

const AgencyForm = () => {
	const methods = useForm<AgencyValues>({
		defaultValues: { instantAppointments: true, paperlessBilling: true }
	});

	return (
		<Form.Root
			methods={methods}
			onSubmit={onSubmit}
			aria-label="Agency"
			className="flex max-w-120 flex-col items-start gap-7">
			<Field.Group>
				<FormSwitch name="instantAppointments" label="Instant appointments" readOnly />
				<FormSwitch name="paperlessBilling" label="Paperless billing" disabled />
			</Field.Group>
			<Button type="submit">Save</Button>
		</Form.Root>
	);
};

/**
 * `disabled` disables the toggle and marks the field, and the value still
 * reaches `onSubmit` — unlike react-hook-form's own `disabled` option, which
 * drops it. `readOnly` keeps the toggle focusable and announced, but a click
 * does not flip it.
 *
 * @summary Disabled and read-only toggles whose values are still submitted
 */
export const DisabledAndReadOnly: Story = {
	render: () => <AgencyForm />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const paperless = canvas.getByRole('switch', { name: 'Paperless billing' });

		await expect(canvas.getByRole('switch', { name: 'Instant appointments' })).toHaveAttribute(
			'aria-readonly',
			'true'
		);
		await expect(paperless).toBeDisabled();
		await expect(paperless.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
	}
};

/** A click leaves the read-only toggle as it was, and both values are submitted. */
export const SubmitsDisabledAndReadOnly: Story = {
	tags: testOnly,
	render: () => <AgencyForm />,
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const instant = canvas.getByRole('switch', { name: 'Instant appointments' });

		await userEvent.click(instant);

		await expect(instant).toBeChecked();

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith(
				{ instantAppointments: true, paperlessBilling: true },
				expect.anything()
			)
		);
	}
};

type MarketingValues = {
	marketing: boolean;
};

const onOwnCheckedChange = fn();

const MarketingForm = () => {
	const methods = useForm<MarketingValues>({ defaultValues: { marketing: false } });

	return (
		<Form.Root methods={methods} aria-label="Preferences" className="flex max-w-120 flex-col gap-2">
			<FormSwitch
				name="marketing"
				label="Product news"
				description="One email a month."
				switchProps={{
					'aria-describedby': 'marketing-unsubscribe',
					onCheckedChange: checked => onOwnCheckedChange(methods.getValues('marketing'), checked)
				}}
			/>
			<p id="marketing-unsubscribe" className="text-sm text-text-input-placeholder">
				Unsubscribe from any email.
			</p>
		</Form.Root>
	);
};

/**
 * `switchProps` carries the toggle's own props — `aria-*`, `className`… — and
 * its handlers. An `aria-describedby` joins the ids the field wires, and a
 * consumer `onCheckedChange` runs after react-hook-form's: by the time it
 * fires, `getValues` already returns the new value.
 *
 * @summary Toggle props merged with the field's wiring
 */
export const SwitchProps: Story = {
	render: () => <MarketingForm />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('switch', { name: 'Product news' })).toHaveAccessibleDescription(
			'One email a month. Unsubscribe from any email.'
		);
	}
};

/** A consumer `onCheckedChange` runs after react-hook-form's, once the value is stored. */
export const ChainsOnCheckedChange: Story = {
	tags: testOnly,
	render: () => <MarketingForm />,
	play: async ({ canvasElement }) => {
		onOwnCheckedChange.mockClear();
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('switch', { name: 'Product news' });

		await userEvent.click(toggle);

		await expect(toggle).toBeChecked();
		await expect(onOwnCheckedChange).toHaveBeenCalledTimes(1);
		await expect(onOwnCheckedChange).toHaveBeenLastCalledWith(true, true);
	}
};
