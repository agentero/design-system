import { ReactNode, use, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { FieldSwitch } from '.';
import { Field, FieldContext, FieldErrorLike } from '../field';
import { Label } from '../label';
import { Switch, SwitchContext, type SwitchContextValue } from '../switch';

/**
 * FieldSwitch is a `Field.Root` for an on/off toggle. It provides
 * `SwitchContext`, so the `Switch` inside associates itself with the label and
 * the messages and takes `invalid`, `required`, `disabled` and `readOnly` from
 * the field — no `id`, `htmlFor` or `aria-describedby` written by hand. It
 * defaults to one row, with the small toggle next to the text.
 *
 * It knows nothing about form libraries, and its contexts compose: a provider
 * nested inside it can extend `SwitchContext` with `checked`,
 * `onCheckedChange`, `onBlur` and `name`, and `FieldContext` with the errors,
 * which is how a form library binds it. For react-hook-form, use `FormSwitch`.
 */
const meta = {
	title: 'Components/FieldSwitch',
	component: FieldSwitch,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<div className="w-120 max-w-full">
				<Story />
			</div>
		)
	],
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['horizontal', 'vertical'],
			description:
				'Layout of the label and the toggle. `horizontal` (default) is one row, the toggle beside the text.'
		},
		invalid: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' }
	},
	args: {
		orientation: 'horizontal',
		invalid: false,
		disabled: false,
		readOnly: false,
		required: false
	}
} satisfies Meta<typeof FieldSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The composition consumers write: a label and the design system's `Switch`.
 * The label names the toggle through context, and clicking it flips the
 * toggle like clicking the toggle itself.
 *
 * @summary Label and Switch on one row, wired with no ids
 */
export const Default: Story = {
	render: args => (
		<FieldSwitch {...args}>
			<Label>Auto-appointment requests</Label>
			<Switch />
		</FieldSwitch>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('switch', { name: 'Auto-appointment requests' });

		await expect(toggle).toHaveAttribute('data-slot', 'switch');
		await expect(toggle).toHaveAttribute('data-size', 'sm');
		await expect(toggle).not.toBeChecked();

		const label = canvas.getByText('Auto-appointment requests').closest('label')!;
		const box = toggle.getBoundingClientRect();

		await expect([box.width, box.height]).toEqual([30, 16]);
		await expect(box.left - label.getBoundingClientRect().right).toBe(16);

		await userEvent.click(canvas.getByText('Auto-appointment requests'));

		await expect(toggle).toBeChecked();
	}
};

/**
 * `required` on the field reaches both the label's asterisk and the toggle's
 * `aria-required`.
 *
 * @summary Required field driven from the root alone
 */
export const Required: Story = {
	args: {
		required: true
	},
	render: args => (
		<FieldSwitch {...args}>
			<Label>Accept the carrier terms</Label>
			<Switch />
		</FieldSwitch>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('switch', { name: /Accept the carrier terms/ })).toHaveAttribute(
			'aria-required',
			'true'
		);
	}
};

/**
 * `disabled` on the field disables the toggle through context.
 *
 * @summary Disabled field driven from the root
 */
export const Disabled: Story = {
	args: {
		disabled: true
	},
	render: args => (
		<FieldSwitch {...args}>
			<Label>Quote alerts by text</Label>
			<Switch defaultChecked />
		</FieldSwitch>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('switch', { name: 'Quote alerts by text' })).toBeDisabled();
	}
};

/**
 * `readOnly` on the field keeps the toggle focusable and announced as
 * read-only, but neither a click nor a key flips it.
 *
 * @summary Read-only field: focusable, but it does not flip
 */
export const ReadOnly: Story = {
	args: {
		readOnly: true
	},
	render: args => (
		<FieldSwitch {...args}>
			<Label>Instant appointments</Label>
			<Switch defaultChecked />
		</FieldSwitch>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('switch', { name: 'Instant appointments' });

		await expect(toggle).toHaveAttribute('aria-readonly', 'true');
		await expect(toggle).not.toBeDisabled();
		await expect(toggle).toBeChecked();

		await userEvent.click(toggle);
		await expect(toggle).toBeChecked();

		await userEvent.click(canvas.getByText('Instant appointments'));
		await expect(toggle).toBeChecked();

		await userEvent.keyboard(' ');
		await expect(toggle).toHaveFocus();
		await expect(toggle).toBeChecked();
	}
};

/**
 * The context is a default, never an override: an extra `aria-describedby` is
 * concatenated with the field's ids and `size="md"` replaces the field's `sm`.
 *
 * @summary Switch's own props merge with, and win over, the field's context
 */
export const OwnPropsWin: Story = {
	render: args => (
		<div className="flex flex-col gap-2">
			<FieldSwitch {...args}>
				<Field.Content>
					<Label>Carrier news</Label>
					<Field.Description>Shown on the home page.</Field.Description>
				</Field.Content>
				<Switch size="md" aria-describedby="news-hint" />
			</FieldSwitch>
			<p id="news-hint" className="text-sm">
				You can change it later.
			</p>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('switch', { name: 'Carrier news' });

		await expect(toggle).toHaveAccessibleDescription(
			'Shown on the home page. You can change it later.'
		);
		await expect(toggle).toHaveAttribute('data-size', 'md');
		await expect(toggle).toHaveClass('h-6');
	}
};

/**
 * A `Field.Content` keeps the label and its description together, and the
 * description is announced with the toggle. The toggle lines up with the
 * label, not with the middle of the block.
 *
 * @summary Label and description stacked beside the toggle
 */
export const WithDescription: Story = {
	render: args => (
		<FieldSwitch {...args}>
			<Field.Content>
				<Label>Email notifications</Label>
				<Field.Description>Get an email when a carrier returns a quote.</Field.Description>
			</Field.Content>
			<Switch defaultChecked />
		</FieldSwitch>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('switch', { name: 'Email notifications' });

		await expect(toggle).toBeChecked();
		await expect(toggle).toHaveAccessibleDescription(
			'Get an email when a carrier returns a quote.'
		);

		const label = canvas.getByText('Email notifications').closest('label')!;

		await expect(toggle.getBoundingClientRect().top - label.getBoundingClientRect().top).toBe(4);
	}
};

/**
 * The toggle can lead instead: write it before the `Field.Content`. Use this
 * order in lists of settings, where the toggles line up on the left.
 *
 * @summary Toggle first, then the label and its description
 */
export const SwitchFirst: Story = {
	render: args => (
		<FieldSwitch {...args}>
			<Switch />
			<Field.Content>
				<Label>Paperless billing</Label>
				<Field.Description>Invoices arrive by email only.</Field.Description>
			</Field.Content>
		</FieldSwitch>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch', { name: 'Paperless billing' });
		const root = canvasElement.querySelector('[data-slot=field]')!.getBoundingClientRect();
		const box = toggle.getBoundingClientRect();
		const label = canvas.getByText('Paperless billing').closest('label')!.getBoundingClientRect();

		await expect(toggle).toHaveAccessibleDescription('Invoices arrive by email only.');
		await expect(box.left).toBe(root.left);
		await expect([box.width, box.height]).toEqual([30, 16]);
		await expect(label.left - box.right).toBe(16);
		await expect(box.top - label.top).toBe(4);
	}
};

/**
 * `Field.Label` takes `optional` and a `tooltip` here as in any field. The info
 * button sits beside the label, outside it, so it has its own name and
 * opening the hint never flips the toggle.
 *
 * @summary Label with the optional suffix and an info tooltip
 */
export const WithTooltip: Story = {
	render: args => (
		<FieldSwitch {...args}>
			<Switch />
			<Field.Content>
				<Field.Label optional tooltip="Policies stop printing once this is on.">
					Paperless billing
				</Field.Label>
				<Field.Description>Invoices arrive by email only.</Field.Description>
			</Field.Content>
		</FieldSwitch>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch', { name: /Paperless billing/ });
		const info = canvas.getByRole('button', { name: 'More information' });
		const root = canvasElement.querySelector('[data-slot=field]')!.getBoundingClientRect();

		await expect(toggle).toHaveAccessibleName('Paperless billing (optional)');
		await expect(toggle.getBoundingClientRect().top - root.top).toBe(4);

		await userEvent.click(info);

		await expect(toggle).not.toBeChecked();
	}
};

/**
 * `orientation="vertical"` stacks the label above the toggle, as in the other
 * fields. Use it when the switch sits in a form column next to other fields.
 *
 * @summary Label above the toggle
 */
export const Vertical: Story = {
	args: {
		orientation: 'vertical'
	},
	render: args => (
		<FieldSwitch {...args}>
			<Label>Skip the one-year license check</Label>
			<Switch />
		</FieldSwitch>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvasElement.querySelector('[data-slot=field]')).toHaveAttribute(
			'data-orientation',
			'vertical'
		);
		const toggle = canvas.getByRole('switch', { name: 'Skip the one-year license check' });

		await expect(toggle).toBeVisible();
		await expect(toggle.getBoundingClientRect().width).toBe(30);
	}
};

/**
 * In a narrow column the label wraps and the description follows it; the
 * toggle keeps its size and stays on the label's first line.
 *
 * @summary Long label in a narrow column keeps the toggle whole
 */
export const NarrowWithLongLabel: Story = {
	tags: ['!dev', '!autodocs', '!manifest'],
	render: args => (
		<div className="w-56">
			<FieldSwitch {...args}>
				<Field.Content>
					<Label>Paperless billing for every policy on this agency account</Label>
					<Field.Description>Invoices arrive by email only.</Field.Description>
				</Field.Content>
				<Switch />
			</FieldSwitch>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch', { name: /Paperless billing/ });
		const root = canvasElement.querySelector('[data-slot=field]')!.getBoundingClientRect();
		const box = toggle.getBoundingClientRect();
		const label = canvas
			.getByText(/Paperless billing/)
			.closest('label')!
			.getBoundingClientRect();

		await expect(label.height).toBeGreaterThan(24);
		await expect([box.width, box.height]).toEqual([30, 16]);
		await expect(box.top - root.top).toBe(4);
		await expect(box.right).toBeLessThanOrEqual(root.right);
	}
};

/**
 * Extends `SwitchContext` and `FieldContext` under the field, so the state,
 * the handlers and the errors come from outside. Must sit inside
 * `FieldSwitch` so it inherits the field's wiring and only adds to it.
 */
const ContextExtension = ({
	switchProps,
	errors,
	children
}: {
	switchProps: SwitchContextValue;
	errors?: FieldErrorLike[];
	children: ReactNode;
}) => {
	const toggle = use(SwitchContext);
	const field = use(FieldContext);

	return (
		<SwitchContext value={{ ...toggle, ...switchProps }}>
			<FieldContext value={field && { ...field, errors }}>{children}</FieldContext>
		</SwitchContext>
	);
};

const onOwnCheckedChange = fn();

/**
 * The contexts are an extension point: a provider nested in the field adds
 * `name`, `checked` and `onCheckedChange` to `SwitchContext`, so a bare
 * `<Switch />` becomes controlled, and the errors to `FieldContext`, so a
 * bare `<Field.Error />` renders them — here with `useState` and no form
 * library. The switch's own `onCheckedChange` still runs, chained after the
 * provider's.
 *
 * @summary Switch controlled and errors supplied from outside the field
 */
export const ControlledFromContext: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);

		const errors = checked ? undefined : [{ message: 'Turn it on to continue.' }];

		return (
			<FieldSwitch invalid={!!errors}>
				<ContextExtension
					switchProps={{ name: 'terms', checked, onCheckedChange: setChecked }}
					errors={errors}>
					<Field.Content>
						<Label>I accept the terms</Label>
						<Field.Error />
					</Field.Content>
					<Switch onCheckedChange={onOwnCheckedChange} />
				</ContextExtension>
			</FieldSwitch>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('switch', { name: 'I accept the terms' });

		await expect(toggle).toHaveAttribute('aria-invalid', 'true');
		await expect(canvas.getByRole('alert')).toHaveTextContent('Turn it on to continue.');

		await userEvent.click(toggle);

		await expect(toggle).toBeChecked();
		await expect(onOwnCheckedChange).toHaveBeenCalledWith(true);
		await expect(canvas.queryByRole('alert')).toBeNull();
	}
};
