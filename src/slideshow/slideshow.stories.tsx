import type { SVGProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { Slideshow, type SlideshowItem } from './slideshow';

const IconStar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
	</svg>
);

const baseItems: SlideshowItem[] = [
	{
		id: 'welcome',
		title: 'Welcome aboard',
		body: 'Quote, bind, and manage policies from a single place.',
		image: { content: <IconStar /> },
		cta: { label: 'Get started', action: fn() },
		color: { bg: '#1e7b5f', nav: 'dark' }
	},
	{
		id: 'carriers',
		title: 'More carriers',
		body: 'Access dozens of appointed carriers in minutes.',
		image: { content: <IconStar /> },
		cta: { label: 'Browse carriers', action: fn() },
		color: { bg: '#054594', nav: 'dark' }
	},
	{
		id: 'commissions',
		title: 'Track commissions',
		body: 'See every payout as soon as it posts.',
		image: { content: <IconStar /> },
		cta: { label: 'View commissions', action: fn() },
		color: { bg: '#4f0792', nav: 'dark' }
	}
];

const meta = {
	title: 'Components/Slideshow',
	component: Slideshow,
	tags: ['autodocs'],
	argTypes: {
		items: { table: { disable: true } },
		delay: { control: { type: 'number', min: 1000, step: 500 } }
	},
	args: {
		items: baseItems,
		delay: 5000
	},
	parameters: { layout: 'padded' }
} satisfies Meta<typeof Slideshow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: { a11y: { test: 'error' } },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const nav = canvas.getByRole('navigation');
		await expect(nav).toBeInTheDocument();
		await expect(within(nav).getAllByRole('button')).toHaveLength(baseItems.length);
		await expect(canvas.getByRole('heading', { name: 'Welcome aboard' })).toBeInTheDocument();
	}
};

export const Navigation: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const nav = canvas.getByRole('navigation');
		const dots = within(nav).getAllByRole('button');

		await userEvent.click(dots[2]!);
		await waitFor(() => expect(dots[2]!).toHaveAttribute('aria-current', 'true'));
	}
};

export const SingleSlide: Story = {
	args: { items: [baseItems[0]!] },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.queryByRole('navigation')).not.toBeInTheDocument();
		await expect(canvas.getByRole('heading', { name: 'Welcome aboard' })).toBeInTheDocument();
	}
};

export const Dismissable: Story = {
	args: {
		items: [{ ...baseItems[0]!, onDismiss: fn() }]
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('heading', { name: 'Welcome aboard' })).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: 'Dismiss slide' }));

		await waitFor(() =>
			expect(canvas.queryByRole('heading', { name: 'Welcome aboard' })).not.toBeInTheDocument()
		);
		await expect(args.items[0]!.onDismiss).toHaveBeenCalledTimes(1);
	}
};

export const CtaAction: Story = {
	args: {
		items: [{ ...baseItems[0]!, cta: { label: 'Get started', action: fn() } }]
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: 'Get started' }));
		await expect(args.items[0]!.cta.action).toHaveBeenCalledTimes(1);
	}
};
