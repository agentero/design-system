import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { ValidationList, type ValidationRule } from './validation-list';

/**
 * ValidationList renders a bulleted checklist of rules that light up as a value
 * satisfies them. Each rule's `pattern` is a `RegExp` or a predicate
 * `(value) => boolean`, so character-class checks and arbitrary logic (length,
 * membership, …) live in the same list. It is presentational — pair it with
 * your form validation; it does not own the input or block submission.
 */
const meta = {
	title: 'Components/ValidationList',
	component: ValidationList,
	tags: ['autodocs'],
	argTypes: {
		value: { control: 'text' }
	}
} satisfies Meta<typeof ValidationList>;

export default meta;

type Story = StoryObj<typeof meta>;

const rules: ValidationRule[] = [
	{ text: 'At least one uppercase letter', pattern: /[A-Z]/ },
	{ text: 'At least one lowercase letter', pattern: /[a-z]/ },
	{ text: 'At least one number', pattern: /[0-9]/ },
	{ text: 'At least one symbol', pattern: /[.,\-_&%$!/[\]{}@#|\\]/ },
	{ text: 'At least 10 characters', pattern: value => value.length >= 10 }
];

/** A partially-satisfied value: some rules are active, some are still unmet. */
export const Default: Story = {
	args: {
		value: 'Password1234.',
		rules
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const items = canvas.getAllByRole('listitem');
		await expect(items).toHaveLength(rules.length);

		for (const item of items) {
			await expect(item).toHaveAttribute('data-active', 'true');
			await expect(item).toHaveClass('text-text-default-base-primary');
		}
	}
};

/** Empty value: every rule is unmet, so all items render in the tertiary color. */
export const NoneMet: Story = {
	args: {
		value: '',
		rules
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const items = canvas.getAllByRole('listitem');
		for (const item of items) {
			await expect(item).toHaveAttribute('data-active', 'false');
			await expect(item).toHaveClass('text-text-default-base-tertiary');
		}
	}
};

/** A value that satisfies the regex rules but not the length predicate. */
export const PartiallyMet: Story = {
	args: {
		value: 'Aa1.',
		rules
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const items = canvas.getAllByRole('listitem');
		await expect(items[0]).toHaveAttribute('data-active', 'true');
		await expect(items[4]).toHaveAttribute('data-active', 'false');
	}
};

/** Wire the value to an input to watch the list update on every keystroke. */
export const Playground: Story = {
	args: {
		value: '',
		rules
	},
	render: args => {
		const [value, setValue] = useState('');

		return (
			<div className="flex w-100 flex-col gap-4">
				<input
					type="text"
					value={value}
					placeholder="Type a password…"
					onChange={event => setValue(event.target.value)}
					className="rounded-md border border-border-default-base-primary px-3 py-2 text-sm"
				/>
				<ValidationList {...args} value={value} />
			</div>
		);
	}
};
