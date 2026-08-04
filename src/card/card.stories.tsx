import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Avatar } from '../avatar';
import { Button } from '../button';
import { IconHorizontalDots } from '../pagination/icons';
import { Card } from './card';

/**
 * Card is a surface container — border, radius, and a subtle shadow — into
 * which you compose whatever you need. It ships no fixed width and no built-in
 * content: size it from the parent and fill it with the optional
 * `Card.Header` / `Card.Body` / `Card.Footer` sections (or arbitrary children).
 * The `spacing` prop is the only visual knob: `md` / `lg` pad the card and gap
 * its sections, while `none` turns the sections into divider-separated bands.
 */
const meta = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: {
		spacing: {
			control: 'radio',
			options: ['none', 'md', 'lg'],
			description: 'Internal padding + section rhythm. `none` uses divider-separated bands.'
		}
	}
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const SampleContent = () => (
	<>
		<Card.Header className="flex-row items-center justify-between">
			<Avatar src="https://i.pravatar.cc/96?img=47" alt="Ada Lovelace" size="lg" />
			<Button variant="ghost" iconOnly aria-label="More options">
				<IconHorizontalDots />
			</Button>
		</Card.Header>
		<Card.Body>
			<p className="font-semibold text-text-default-base-primary">Ada Lovelace</p>
			<p className="text-sm text-text-default-base-secondary">
				Visionary mathematician and writer, known for her pioneering work on Charles Babbage&apos;s
				Analytical Engine.
			</p>
		</Card.Body>
		<Card.Footer>
			<Button>Follow</Button>
			<Button variant="secondary">Message</Button>
		</Card.Footer>
	</>
);

/** Default `md` spacing: padded card with gap-separated sections. */
export const Default: Story = {
	args: {
		spacing: 'md'
	},
	render: args => (
		<Card {...args} className="w-100">
			<SampleContent />
		</Card>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const root = canvasElement.querySelector('[data-slot="card-root"]');
		await expect(root).toBeInTheDocument();
		await expect(canvasElement.querySelector('[data-slot="card-header"]')).toBeInTheDocument();
		await expect(canvasElement.querySelector('[data-slot="card-body"]')).toBeInTheDocument();

		const footer = canvasElement.querySelector('[data-slot="card-footer"]');
		await expect(footer).toBeInTheDocument();
		await expect(within(footer as HTMLElement).getAllByRole('button')).toHaveLength(2);

		await expect(canvas.getByText('Ada Lovelace')).toBeVisible();
	}
};

/** `spacing="none"`: zero root padding; sections become edge-to-edge bands split by dividers. */
export const Sectioned: Story = {
	args: {
		spacing: 'none'
	},
	render: args => (
		<Card {...args} className="w-100">
			<SampleContent />
		</Card>
	),
	play: async ({ canvasElement }) => {
		const header = canvasElement.querySelector('[data-slot="card-header"]');
		const body = canvasElement.querySelector('[data-slot="card-body"]');
		const footer = canvasElement.querySelector('[data-slot="card-footer"]');

		await expect(header).toHaveClass('border-b');
		await expect(body).toHaveClass('p-6');
		await expect(footer).toHaveClass('border-t');
	}
};

/** `spacing="lg"`: roomier padding and gap for prominent surfaces. */
export const Large: Story = {
	args: {
		spacing: 'lg'
	},
	render: args => (
		<Card {...args} className="w-100">
			<SampleContent />
		</Card>
	)
};

/** The foundation only — no sections, arbitrary children. */
export const FoundationOnly: Story = {
	args: {
		spacing: 'md'
	},
	render: args => (
		<Card {...args} className="w-100">
			<p className="text-text-default-base-primary">
				Put anything you want in here — the Card just provides the border, radius, and shadow.
			</p>
		</Card>
	)
};

/** `asChild` renders the card surface as a semantic element (here, an `<article>`). */
export const AsChild: Story = {
	args: {
		spacing: 'md'
	},
	render: args => (
		<Card {...args} asChild className="w-100">
			<article>
				<SampleContent />
			</article>
		</Card>
	),
	play: async ({ canvasElement }) => {
		const root = canvasElement.querySelector('[data-slot="card-root"]');
		await expect(root?.tagName).toBe('ARTICLE');
	}
};

/** All three spacing treatments side by side. */
export const Spacings: Story = {
	render: () => (
		<div className="flex flex-wrap items-start gap-6">
			<Card spacing="none" className="w-80">
				<SampleContent />
			</Card>
			<Card spacing="md" className="w-80">
				<SampleContent />
			</Card>
			<Card spacing="lg" className="w-80">
				<SampleContent />
			</Card>
		</div>
	)
};
