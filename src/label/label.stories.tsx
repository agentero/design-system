import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Field, useFieldContext } from '../field';
import { inputRecipe } from '../input';
import { Label } from './label';

/**
 * Label is the accessible caption for a form control, built on Radix's Label
 * primitive: it associates with the control through `htmlFor` and does not select
 * text on double-click.
 *
 * `optional` and `required` are display-only affordances — the control itself
 * still has to carry `required` / `aria-required`.
 */
const meta = {
	title: 'Components/Label',
	component: Label,
	tags: ['autodocs'],
	argTypes: {
		optional: { control: 'boolean' },
		required: { control: 'boolean' }
	},
	args: {
		children: 'Email'
	}
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A plain caption, associated with its control through `htmlFor`.
 *
 * @summary Default label associated with a control
 */
export const Default: Story = {
	args: {
		htmlFor: 'email'
	},
	render: args => (
		<>
			<Label {...args} />
			<input id="email" placeholder="you@example.com" className={inputRecipe()} />
		</>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText('Email')).toBeInTheDocument();
	}
};

/**
 * Appends a muted " (optional)" suffix for fields that can be left blank.
 *
 * @summary Optional field with a muted suffix
 */
export const Optional: Story = {
	args: {
		optional: true,
		children: 'Phone number'
	}
};

/**
 * Appends an asterisk. It is `aria-hidden`, so the control still needs its own
 * `required` attribute for assistive technology.
 *
 * @summary Required field with a decorative asterisk
 */
export const Required: Story = {
	args: {
		required: true,
		children: 'Full name'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Full name')).toBeInTheDocument();
		await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
	}
};

/**
 * Contradictory props do not throw — `required` wins and the optional suffix is
 * dropped, so a mistake never takes the page down.
 *
 * @summary required takes precedence over optional
 */
export const RequiredWinsOverOptional: Story = {
	args: {
		optional: true,
		required: true,
		children: 'Agency name'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('*')).toBeInTheDocument();
		await expect(canvas.getByText('Agency name')).not.toHaveClass(/after:content/);
	}
};

const FieldInput = () => {
	const field = useFieldContext();

	return (
		<input id={field?.controlId} aria-describedby={field?.describedBy} className={inputRecipe()} />
	);
};

/**
 * Inside a `Field.Root` the label reads `LabelContext` and points at the
 * field's control with no `htmlFor`. An explicit `htmlFor` still wins.
 *
 * @summary Inside a Field the label associates itself; explicit htmlFor wins
 */
export const InsideField: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<Field.Root>
				<Label>Email</Label>
				<FieldInput />
			</Field.Root>

			<Field.Root>
				<Label htmlFor="explicit-control">Phone</Label>
				<input id="explicit-control" className={inputRecipe()} />
			</Field.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const email = canvas.getByRole('textbox', { name: 'Email' });

		await expect(canvas.getByText('Email').closest('label')).toHaveAttribute('for', email.id);
		await expect(canvas.getByText('Phone').closest('label')).toHaveAttribute(
			'for',
			'explicit-control'
		);
	}
};
