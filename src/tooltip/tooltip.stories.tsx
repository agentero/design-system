import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '../button';
import { Tooltip } from './tooltip';

/**
 * Tooltip reveals a short, non-essential hint anchored to a trigger element
 * when the user hovers or focuses it. Pass the trigger as `children` and the
 * hint as `content`. Use `asChild` when the trigger is already an interactive
 * element to avoid nesting buttons.
 */
const meta = {
	title: 'Components/Tooltip',
	component: Tooltip,
	tags: ['autodocs'],
	argTypes: {
		content: {
			control: 'text'
		},
		side: {
			control: 'radio',
			options: ['top', 'right', 'bottom', 'left']
		},
		align: {
			control: 'radio',
			options: ['start', 'center', 'end']
		},
		sideOffset: {
			control: 'number'
		},
		delayDuration: {
			control: 'number'
		},
		asChild: {
			control: 'boolean'
		},
		children: {
			table: { disable: true }
		}
	},
	args: {
		content: 'Archive this carrier',
		side: 'top',
		asChild: true,
		children: <Button variant="secondary">Hover me</Button>
	},
	decorators: [
		Story => (
			<div className="flex min-h-40 items-center justify-center p-10">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default tooltip: a hint that fades in above a button trigger on hover or
 * focus. Hover or tab to the trigger to reveal it.
 *
 * @summary Default hint revealed on hover/focus
 */
export const Default: Story = {
	render: args => (
		<Tooltip {...args}>
			<Button variant="secondary">Hover me</Button>
		</Tooltip>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const trigger = canvas.getByRole('button', { name: /hover me/i });

		await expect(body.queryByText(args.content as string)).not.toBeInTheDocument();

		await userEvent.hover(trigger);

		const tooltips = await body.findAllByText(args.content as string);
		await expect(tooltips.length).toBeGreaterThan(0);
		await expect(trigger).toHaveAttribute('aria-describedby');

		await userEvent.unhover(trigger);
		await waitFor(() => expect(body.queryByText(args.content as string)).not.toBeInTheDocument());
	}
};

/**
 * The tooltip also opens on keyboard focus, so it stays accessible without a
 * pointer. Tabbing to the trigger reveals the hint and wires up
 * `aria-describedby`; blurring hides it.
 *
 * @summary Opens on keyboard focus, not just hover
 */
export const OpensOnFocus: Story = {
	render: args => (
		<Tooltip {...args}>
			<Button variant="secondary">Focus me</Button>
		</Tooltip>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const trigger = canvas.getByRole('button', { name: /focus me/i });

		await userEvent.tab();
		await expect(trigger).toHaveFocus();

		const tooltips = await body.findAllByText(args.content as string);
		await expect(tooltips.length).toBeGreaterThan(0);
		await expect(trigger).toHaveAttribute('aria-describedby');
	}
};

/* --------------- Sides --------------- */

/**
 * `side` sets the preferred placement relative to the trigger. Radix flips it
 * automatically when it would collide with the viewport edge.
 *
 * @summary Placement on any of the four sides
 */
export const Sides: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-6">
			<Tooltip content="Tooltip on top" side="top" asChild>
				<Button variant="secondary">Top</Button>
			</Tooltip>
			<Tooltip content="Tooltip on the right" side="right" asChild>
				<Button variant="secondary">Right</Button>
			</Tooltip>
			<Tooltip content="Tooltip on the bottom" side="bottom" asChild>
				<Button variant="secondary">Bottom</Button>
			</Tooltip>
			<Tooltip content="Tooltip on the left" side="left" asChild>
				<Button variant="secondary">Left</Button>
			</Tooltip>
		</div>
	)
};

/* --------------- asChild --------------- */

/**
 * With `asChild`, the trigger decorates its child element instead of wrapping
 * it in a `<button>`. Use it when the trigger is already interactive — a link
 * or icon button — to avoid nesting interactive elements.
 *
 * @summary Decorate an already-interactive trigger
 */
export const AsChild: Story = {
	render: args => (
		<Tooltip {...args} content="Opens in a new tab" side="bottom" asChild>
			<a
				href="https://agentero.com"
				target="_blank"
				rel="noreferrer"
				className="text-text-default-base-primary underline">
				Docs
			</a>
		</Tooltip>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const link = canvas.getByRole('link', { name: /docs/i });

		await userEvent.hover(link);
		const tooltips = await body.findAllByText(/opens in a new tab/i);
		await expect(tooltips.length).toBeGreaterThan(0);
	}
};

/* --------------- Long content --------------- */

/**
 * Content wider than `32ch` wraps onto multiple lines instead of stretching
 * across the viewport. Keep tooltips short — long explanations belong inline.
 *
 * @summary Long text wraps at the max width
 */
export const LongContent: Story = {
	args: {
		content:
			'This carrier requires a completed appointment before you can request quotes for this line of business.'
	},
	render: args => (
		<Tooltip {...args}>
			<Button variant="secondary">Why is this disabled?</Button>
		</Tooltip>
	)
};
