import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { InputGroup } from '../input-group';
// A story fixture, not a published icon: the design system ships no icon set.
import { IconMail } from '../input-group/icons';
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
		// Keeps the documented row; only the useless widget goes.
		errors: { control: false },
		leadingAddon: { control: false },
		trailingAddon: { control: false }
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
		// The suffix is a pseudo-element, so it is read off the computed style.
		const caption = canvasElement.querySelector('[data-slot="label"] span') as HTMLElement;
		await expect(getComputedStyle(caption, '::after').content).toContain('optional');
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

		// Both halves, since the JSDoc promises both: the native attribute…
		await expect(canvas.getByLabelText(/Full name/)).toBeRequired();
		// …and the decorative asterisk, which is aria-hidden and so stays out of
		// the control's accessible name.
		const asterisk = canvas.getByText('*');
		await expect(asterisk).toHaveAttribute('aria-hidden');
		await expect(canvas.getByRole('textbox', { name: 'Full name' })).toBeInTheDocument();
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

/**
 * A leading icon inside the control's frame. `leadingAddon` puts the `<input>`
 * inside an [InputGroup](?path=/docs/components-inputgroup--docs) and keeps the
 * field's wiring on the input, so the caption still points at the control and
 * the frame around it is only a frame.
 *
 * This is the shape of a sign-in email field: one caption, a 48px control, an
 * envelope in the frame. Assembling it by hand is where it goes wrong — put the
 * group under the generic `Field` and the caption ends up pointing at the
 * group's `div`, which is a control with no accessible name and nothing on
 * screen to show it.
 *
 * @summary Leading icon addon with the field's wiring still on the input
 */
export const WithLeadingAddon: Story = {
	args: {
		label: 'Email',
		type: 'email',
		size: 'lg',
		required: true,
		placeholder: 'name@example.com',
		leadingAddon: (
			<InputGroup.Addon>
				<IconMail />
			</InputGroup.Addon>
		)
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const control = canvas.getByRole('textbox', { name: /Email/ });
		const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
		const caption = canvasElement.querySelector('[data-slot="label"]') as HTMLLabelElement;

		// The wiring is on the input, one level below the frame — the caption
		// points at the control and not at the group's div.
		await expect(caption.getAttribute('for')).toBe(control.getAttribute('id'));
		await expect(control.closest('[data-slot="input-group"]')).toBe(group);
		await expect(group).not.toHaveAttribute('id');
		await expect(control).toHaveAttribute('aria-describedby');
		await expect(control).toBeRequired();

		// Clicking the caption reaches the control through the frame, and so does
		// clicking the icon.
		await userEvent.click(caption);
		await expect(control).toHaveFocus();

		// The icon is checked from a blurred start, otherwise the assertion would
		// pass on the focus the caption already handed over: the addon deliberately
		// skips refocusing a control that is already focused.
		control.blur();
		await expect(control).not.toHaveFocus();
		await userEvent.click(
			canvasElement.querySelector('[data-slot="input-group-addon"]') as HTMLElement
		);
		await expect(control).toHaveFocus();
	}
};

/**
 * A currency prefix and a unit suffix, both inside the frame. `InputGroup.Text`
 * is the part for plain text; the control's `size` still drives the frame's
 * height and both text addons' type size. This one is `lg`, so the frame is 48px
 * tall and `$` and `USD` are set at the control's larger type size rather than
 * at the group's default.
 *
 * Addons are decoration and nothing announces them, so the unit the field
 * expects is repeated in the description rather than left to the suffix alone.
 *
 * @summary Text prefix and suffix around the value, sized by the control
 */
export const WithTextAddons: Story = {
	args: {
		label: 'Coverage limit',
		description: 'Enter the amount in US dollars.',
		inputMode: 'decimal',
		size: 'lg',
		placeholder: '0.00',
		leadingAddon: <InputGroup.Text>$</InputGroup.Text>,
		trailingAddon: <InputGroup.Text>USD</InputGroup.Text>
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const control = canvas.getByRole('textbox', { name: 'Coverage limit' });
		const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
		const prefix = canvas.getByText('$');
		const suffix = canvas.getByText('USD');

		// The addons stay out of the accessible name and out of the description.
		await expect(control).toHaveAccessibleName('Coverage limit');
		await expect(control).toHaveAccessibleDescription('Enter the amount in US dollars.');

		// The `size` set on the field reaches the control, and the frame and the
		// text addons follow it: 48px of frame, and 16px type on both addons rather
		// than the 14px they would take at any other height.
		await expect(control).toHaveAttribute('data-size', 'lg');
		await expect(group.getBoundingClientRect().height).toBe(48);
		await expect(getComputedStyle(control).fontSize).toBe('16px');
		await expect(getComputedStyle(prefix).fontSize).toBe('16px');
		await expect(getComputedStyle(suffix).fontSize).toBe('16px');
	}
};
