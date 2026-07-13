import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Progress } from './progress';

/**
 * Progress shows how far a bounded task has advanced. Pass `percentage`
 * (0–100) and optionally a `label` rendered above the bar. The fill paints
 * with `currentColor`, so recolor it with a plain text class — e.g.
 * `className="text-brand-400"`.
 */
const meta = {
	title: 'Components/Progress',
	component: Progress,
	tags: ['autodocs'],
	argTypes: {
		percentage: {
			control: { type: 'range', min: 0, max: 100 }
		},
		label: {
			control: 'text'
		},
		className: {
			control: 'text'
		}
	},
	args: {
		percentage: 62
	},
	decorators: [
		Story => (
			<div className="w-80">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default near-black bar; exposes `role="progressbar"` with the current value. */
export const Default: Story = {
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const bar = canvas.getByRole('progressbar');

		await expect(bar).toBeInTheDocument();
		await expect(bar).toHaveAttribute('aria-valuenow', String(args.percentage));
	}
};

/** `label` renders above the bar with the percentage value on the right. */
export const WithLabel: Story = {
	args: { label: 'Profile completion', className: 'text-brand-400' },
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText(args.label as string)).toBeVisible();
		await expect(canvas.getByText(`${args.percentage}%`)).toBeVisible();
	}
};

/** The fill follows `currentColor`: recolor it with any `text-*` class via `className`. */
export const CustomColors: Story = {
	render: args => (
		<div className="flex flex-col gap-4">
			{[
				['default', undefined],
				['text-brand-400', 'text-brand-400'],
				['text-brand-600', 'text-brand-600'],
				['text-purple-400', 'text-purple-400'],
				['text-orange-400', 'text-orange-400'],
				['text-pink-400', 'text-pink-400'],
				['text-blue-400', 'text-blue-400']
			].map(([name, className]) => (
				<Progress key={name} {...args} className={className} label={name} />
			))}
		</div>
	),
	play: async ({ canvasElement }) => {
		const [defaultBar, brandBar] = canvasElement.querySelectorAll('[data-slot="progress-track"]');
		const brandIndicator = brandBar!.querySelector('[data-slot="progress-indicator"]')!;

		await expect(defaultBar).toHaveClass('text-neutrals-900');
		await expect(brandBar).toHaveClass('text-brand-400');
		await expect(getComputedStyle(brandIndicator).backgroundColor).toBe(
			getComputedStyle(brandBar!).color
		);
	}
};

/** Out-of-range values are clamped to 0–100. */
export const Clamped: Story = {
	args: { percentage: 150 },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
	}
};
