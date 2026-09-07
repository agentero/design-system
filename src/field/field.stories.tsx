import { ComponentProps, ReactNode, use, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { ErrorContext, Field, FieldErrorLike, useFieldContext } from '.';
import { inputRecipe } from '../input';
import { Label } from '../label';

/**
 * Field lays out a single form field — label, control, helper text and error —
 * and wires the accessibility relationships between them. `Field.Root`
 * generates the ids and shares them through context: `Label` reads
 * `LabelContext`, `Field.Description` and `Field.Error` read theirs, and a
 * `Field<X>` such as `FieldText` provides the control's context. Nobody passes
 * an `id` by hand.
 *
 * Presentational and form-library agnostic: pass `invalid` and the error
 * messages from whatever validates the form. Spacing between fields belongs to
 * `Field.Group`, never to a margin on the field itself.
 *
 * `Field.Description` and `Field.Error` register themselves with the root, so
 * the control's `aria-describedby` lists exactly the messages on screen and is
 * absent when there is none.
 */
const meta = {
	title: 'Components/Field',
	component: Field.Root,
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['vertical', 'horizontal']
		},
		invalid: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' }
	},
	args: {
		orientation: 'vertical',
		invalid: false,
		disabled: false,
		readOnly: false,
		required: false
	}
} satisfies Meta<typeof Field.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stand-in for a control that has no context of its own: it reads the field's
 * raw wiring with `useFieldContext()` and applies it by hand. This is the
 * contract for any custom control; the design system's own controls read their
 * own context instead (`Input` reads `InputContext`, provided by `FieldText`).
 * It borrows `inputRecipe` so it looks exactly like the design system's Input.
 */
const DemoInput = (props: ComponentProps<'input'>) => {
	const field = useFieldContext();

	return (
		<input
			id={field?.controlId}
			aria-describedby={field?.describedBy}
			aria-invalid={field?.invalid || undefined}
			required={field?.required || undefined}
			disabled={field?.disabled || undefined}
			readOnly={field?.readOnly || undefined}
			className={inputRecipe()}
			{...props}
		/>
	);
};

/**
 * A vertical field with a label, a control and helper text. The label points
 * at the control and the description is referenced by it — neither needed an
 * explicit `id`.
 *
 * @summary Default vertical field with label, control and description
 */
export const Default: Story = {
	render: args => (
		<Field.Root {...args}>
			<Field.Label>Email</Field.Label>
			<DemoInput placeholder="you@example.com" />
			<Field.Description>We only use this to send policy documents.</Field.Description>
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Email' });
		const description = canvas.getByText(/policy documents/);

		await expect(input).toHaveAttribute(
			'aria-describedby',
			expect.stringContaining(description.id)
		);
		await expect(input).toHaveAccessibleDescription('We only use this to send policy documents.');
		await expect(input).not.toHaveAttribute('aria-invalid');
	}
};

/**
 * `required` on the root is the single source of truth: the label shows its
 * asterisk and the control receives `required`, both through context.
 *
 * @summary Required field driven from the root alone
 */
export const Required: Story = {
	args: {
		required: true
	},
	render: args => (
		<Field.Root {...args}>
			<Field.Label>Full name</Field.Label>
			<DemoInput placeholder="Jane Doe" />
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('textbox', { name: 'Full name' })).toBeRequired();
		await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
	}
};

/**
 * `optional` on the label appends the muted suffix; the control stays
 * non-required.
 *
 * @summary Optional field with the muted label suffix
 */
export const Optional: Story = {
	render: args => (
		<Field.Root {...args}>
			<Field.Label optional>Phone number</Field.Label>
			<DemoInput type="tel" placeholder="+1 (555) 000-0000" />
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Phone number')).toHaveClass(/after:content/);
		await expect(canvas.getByRole('textbox', { name: 'Phone number' })).not.toBeRequired();
	}
};

/**
 * `Field.Label` puts an info button beside the caption. It is a sibling of the
 * `<label>`, so it keeps its own accessible name, clicking it does not focus
 * the control, and the control's name stays clean. It opens on focus too.
 *
 * @summary Label with a tooltip trigger beside it
 */
export const WithTooltip: Story = {
	args: {
		required: true
	},
	render: args => (
		<Field.Root {...args}>
			<Field.Label tooltip="Issued by the IRS to identify your business.">Tax ID</Field.Label>
			<DemoInput placeholder="XX-XXXXXXX" />
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const trigger = canvas.getByRole('button', { name: 'More information' });

		await expect(trigger.closest('label')).toBeNull();
		await expect(canvas.getByRole('textbox', { name: 'Tax ID' })).toBeInTheDocument();

		await userEvent.tab();
		await expect(trigger).toHaveFocus();

		const hints = await within(document.body).findAllByText(/Issued by the IRS/);
		await expect(hints.length).toBeGreaterThan(0);
	}
};

/**
 * `invalid` on the root colors the label, sets `data-invalid` for styling and
 * `aria-invalid` on the control. `Field.Error` takes the error objects as they
 * come from a form library.
 *
 * @summary Invalid field with a single error message
 */
export const Invalid: Story = {
	args: {
		invalid: true
	},
	render: args => (
		<Field.Root {...args}>
			<Field.Label>Email</Field.Label>
			<DemoInput type="email" defaultValue="not-an-email" />
			<Field.Error errors={[{ message: 'Enter a valid email address.' }]} />
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Email' });
		const alert = canvas.getByRole('alert');

		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(input).toHaveAttribute('aria-describedby', expect.stringContaining(alert.id));
		await expect(input).toHaveAccessibleDescription('Enter a valid email address.');
		await expect(
			canvasElement.querySelector('[data-slot=field][data-invalid="true"]')
		).not.toBeNull();
	}
};

/**
 * Several errors render as a list, de-duplicated by message.
 *
 * @summary Several errors rendered as a de-duplicated list
 */
export const MultipleErrors: Story = {
	args: {
		invalid: true
	},
	render: args => (
		<Field.Root {...args}>
			<Field.Label>Password</Field.Label>
			<DemoInput type="password" defaultValue="abc" />
			<Field.Error
				errors={[
					{ message: 'Use at least 8 characters.' },
					{ message: 'Include a number.' },
					{ message: 'Use at least 8 characters.' }
				]}
			/>
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('alert')).toBeInTheDocument();
		await expect(canvas.getAllByRole('listitem')).toHaveLength(2);
	}
};

/**
 * `Field.Error` renders nothing without a message, so it can stay mounted and
 * receive `undefined` entries while the field is valid. With no description
 * either, the control carries no `aria-describedby` at all.
 *
 * @summary Error stays mounted and renders nothing while valid
 */
export const NoError: Story = {
	render: args => (
		<Field.Root {...args}>
			<Field.Label>Email</Field.Label>
			<DemoInput type="email" />
			<Field.Error errors={[undefined]} />
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.queryByRole('alert')).toBeNull();
		await expect(canvas.getByRole('textbox', { name: 'Email' })).not.toHaveAttribute(
			'aria-describedby'
		);
	}
};

/**
 * `disabled` on the root disables the control through context and sets
 * `data-disabled` for styling.
 *
 * @summary Disabled field driven from the root
 */
export const Disabled: Story = {
	args: {
		disabled: true
	},
	render: args => (
		<Field.Root {...args}>
			<Field.Label>Agency</Field.Label>
			<DemoInput defaultValue="Acme Insurance" />
			<Field.Description>Managed by your administrator.</Field.Description>
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('textbox', { name: 'Agency' })).toBeDisabled();
		await expect(canvasElement.querySelector('[data-slot=field][data-disabled]')).not.toBeNull();
	}
};

/**
 * `readOnly` on the root makes the control read-only through context and sets
 * `data-readonly` for styling. Unlike `disabled`, the value stays focusable,
 * copyable and submitted.
 *
 * @summary Read-only field driven from the root
 */
export const ReadOnly: Story = {
	args: {
		readOnly: true
	},
	render: args => (
		<Field.Root {...args}>
			<Field.Label>Policy number</Field.Label>
			<DemoInput defaultValue="POL-2049-118" />
			<Field.Description>Assigned by the carrier; contact support to change it.</Field.Description>
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Policy number' });

		await expect(input).toHaveAttribute('readonly');
		await expect(input).not.toBeDisabled();
		await expect(canvasElement.querySelector('[data-slot=field][data-readonly]')).not.toBeNull();
	}
};

/**
 * `horizontal` puts the label beside the control at every width. Wrap the
 * control and its messages in `Field.Content` so they stack on the right; wrap
 * a label and its description in `Field.Content` too when they share the left
 * side, as in a settings row. A bare `Label` gets the same placement as
 * `Field.Label`.
 *
 * @summary Horizontal field, one row at every width
 */
export const Horizontal: Story = {
	render: () => (
		<div className="flex flex-col gap-8">
			<div className="w-[40rem]" data-testid="wide">
				<Field.Root orientation="horizontal">
					<Field.Label>Email</Field.Label>
					<Field.Content>
						<DemoInput type="email" placeholder="you@example.com" />
						<Field.Description>We only use this to send policy documents.</Field.Description>
					</Field.Content>
				</Field.Root>
			</div>

			<div className="w-[40rem]" data-testid="settings">
				<Field.Root orientation="horizontal">
					<Field.Content>
						<Label>Auto-renew</Label>
						<Field.Description>
							Renews the policy automatically before it expires.
						</Field.Description>
					</Field.Content>
					<DemoInput type="checkbox" className="size-5" />
				</Field.Root>
			</div>

			<div className="w-[20rem]" data-testid="narrow">
				<Field.Root orientation="horizontal">
					<Field.Label>Email</Field.Label>
					<Field.Content>
						<DemoInput type="email" placeholder="you@example.com" />
					</Field.Content>
				</Field.Root>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const rect = (element: Element) => element.getBoundingClientRect();

		const wide = canvas.getByTestId('wide');
		const wideLabel = wide.querySelector('[data-slot=field-label]') as HTMLElement;
		const wideInput = wide.querySelector('input') as HTMLElement;
		const wideDescription = wide.querySelector('[data-slot=field-description]') as HTMLElement;

		await expect(rect(wideLabel).right).toBeLessThanOrEqual(rect(wideInput).left);
		await expect(rect(wideDescription).left).toBe(rect(wideInput).left);
		await expect(rect(wideDescription).top).toBeGreaterThanOrEqual(rect(wideInput).bottom);

		const settings = canvas.getByTestId('settings');
		const settingsLabel = settings.querySelector('label') as HTMLElement;
		const settingsDescription = settings.querySelector(
			'[data-slot=field-description]'
		) as HTMLElement;
		const settingsControl = settings.querySelector('input') as HTMLElement;

		await expect(rect(settingsDescription).left).toBe(rect(settingsLabel).left);
		await expect(rect(settingsControl).left).toBeGreaterThanOrEqual(
			rect(settingsDescription).right
		);

		// Horizontal never folds: the row holds even when the field is narrow.
		const narrow = canvas.getByTestId('narrow');
		const narrowLabel = narrow.querySelector('[data-slot=field-label]') as HTMLElement;
		const narrowInput = narrow.querySelector('input') as HTMLElement;

		await expect(rect(narrowLabel).right).toBeLessThanOrEqual(rect(narrowInput).left);
	}
};

/**
 * `responsive` stacks the parts below `28rem` and puts the label beside the
 * control from there. It measures the field itself, so it needs no particular
 * wrapper. Use `Field.Content` as in `horizontal`.
 *
 * @summary Responsive field that stacks when narrow
 */
export const Responsive: Story = {
	render: () => (
		<div className="flex flex-col gap-8">
			<div className="w-[40rem]" data-testid="wide">
				<Field.Root orientation="responsive">
					<Field.Label>Email</Field.Label>
					<Field.Content>
						<DemoInput type="email" placeholder="you@example.com" />
						<Field.Description>We only use this to send policy documents.</Field.Description>
					</Field.Content>
				</Field.Root>
			</div>

			<div className="w-[20rem]" data-testid="narrow">
				<Field.Root orientation="responsive">
					<Field.Label>Email</Field.Label>
					<Field.Content>
						<DemoInput type="email" placeholder="you@example.com" />
						<Field.Description>We only use this to send policy documents.</Field.Description>
					</Field.Content>
				</Field.Root>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const rect = (element: Element) => element.getBoundingClientRect();

		const wide = canvas.getByTestId('wide');
		const wideLabel = wide.querySelector('[data-slot=field-label]') as HTMLElement;
		const wideInput = wide.querySelector('input') as HTMLElement;

		await expect(rect(wideLabel).right).toBeLessThanOrEqual(rect(wideInput).left);

		const narrow = canvas.getByTestId('narrow');
		const narrowLabel = narrow.querySelector('[data-slot=field-label]') as HTMLElement;
		const narrowInput = narrow.querySelector('input') as HTMLElement;

		await expect(rect(narrowInput).top).toBeGreaterThanOrEqual(rect(narrowLabel).bottom);
		await expect(rect(narrowInput).left).toBe(rect(narrowLabel).left);
	}
};

/**
 * `Field.Group` stacks fields and owns the space between them. Each field gets
 * its own ids, so several on one page never collide.
 *
 * @summary Several fields stacked in a group
 */
export const Group: Story = {
	render: () => (
		<Field.Group>
			<Field.Root required>
				<Field.Label>Full name</Field.Label>
				<DemoInput placeholder="Jane Doe" />
			</Field.Root>

			<Field.Root required invalid>
				<Field.Label>Email</Field.Label>
				<DemoInput type="email" defaultValue="not-an-email" />
				<Field.Error>Enter a valid email address.</Field.Error>
			</Field.Root>

			<Field.Root>
				<Field.Label optional>Phone number</Field.Label>
				<DemoInput type="tel" placeholder="+1 (555) 000-0000" />
			</Field.Root>
		</Field.Group>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const ids = canvas.getAllByRole('textbox').map(input => input.id);

		await expect(new Set(ids).size).toBe(3);
		await expect(canvas.getAllByRole('alert')).toHaveLength(1);
	}
};

/**
 * Outside a `Field.Root` every part reads a `null` context and works on its own
 * props alone: `Label` needs its `htmlFor`, `Field.Error` its own `id`.
 *
 * @summary Label and Field.Error used without a Field.Root
 */
export const StandaloneOutsideField: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<Label htmlFor="standalone-email">Email</Label>
			<DemoInput id="standalone-email" type="email" aria-describedby="standalone-error" />
			<Field.Error id="standalone-error">Something went wrong.</Field.Error>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('textbox', { name: 'Email' })).toHaveAttribute(
			'id',
			'standalone-email'
		);
		await expect(canvas.getByRole('alert')).toHaveAttribute('id', 'standalone-error');
	}
};

/**
 * A context is a default, never an override: an explicit `htmlFor` or `id` on a
 * part wins over what `Field.Root` provides.
 *
 * @summary Explicit props on a part win over the field's context
 */
export const OwnPropsWin: Story = {
	render: () => (
		<Field.Root>
			<Label htmlFor="own-input">Email</Label>
			<input id="own-input" type="email" className={inputRecipe()} />
			<Field.Description id="own-description">Points wherever you say.</Field.Description>
		</Field.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Email').closest('label')).toHaveAttribute('for', 'own-input');
		await expect(canvas.getByRole('textbox', { name: 'Email' })).toHaveAttribute('id', 'own-input');
		await expect(canvas.getByText(/Points wherever/)).toHaveAttribute('id', 'own-description');
	}
};

/**
 * Re-provides `ErrorContext` under the root with the field's errors, the way a
 * form adapter would. Must sit inside `Field.Root` so it inherits the error id.
 */
const ErrorProvider = ({
	errors,
	children
}: {
	errors?: FieldErrorLike[];
	children: ReactNode;
}) => {
	const context = use(ErrorContext);

	return <ErrorContext value={{ ...context, errors }}>{children}</ErrorContext>;
};

const SimulatedFormField = () => {
	const [value, setValue] = useState('');
	const [touched, setTouched] = useState(false);

	const errors = touched && !value ? [{ message: 'Required' }] : undefined;

	return (
		<Field.Root invalid={!!errors} required>
			<Field.Label>Email</Field.Label>
			<DemoInput
				type="email"
				value={value}
				onChange={event => setValue(event.target.value)}
				onBlur={() => setTouched(true)}
			/>
			<ErrorProvider errors={errors}>
				<Field.Error />
			</ErrorProvider>
		</Field.Root>
	);
};

/**
 * What a form adapter does with these contexts, simulated with `useState` and
 * no form library: it re-provides `ErrorContext` with the field's errors so a
 * bare `<Field.Error />` renders them. A `FieldText` adapter extends
 * `InputContext` the same way with `value`, `onChange`, `onBlur` and `name`.
 *
 * @summary Form-adapter extension point simulated without a form library
 */
export const FormAdapterSimulation: Story = {
	render: () => <SimulatedFormField />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Email' });

		await expect(canvas.queryByRole('alert')).toBeNull();

		await userEvent.click(input);
		await userEvent.tab();

		await expect(await canvas.findByRole('alert')).toHaveTextContent('Required');
		await expect(input).toHaveAttribute('aria-invalid', 'true');

		await userEvent.type(input, 'jane@example.com');

		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
		await expect(input).not.toHaveAttribute('aria-invalid');
	}
};
