import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '../button';
import { Popover } from './popover';

/**
 * Popover is a non-modal floating surface anchored to a trigger, used for
 * rich interactive overlays such as forms, filters, and pickers. Compose it
 * from `Root` / `Trigger` / `Content`, plus optional `Anchor` and `Close`.
 * Built on Radix UI's Popover primitive, so focus management, dismissal, and
 * collision detection come for free.
 */
const meta = {
	title: 'Components/Popover',
	component: Popover.Root,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<div className="flex min-h-60 items-center justify-center p-10">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof Popover.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A minimal Popover: a trigger button that reveals a short text surface on
 * click and dismisses on outside click or Escape.
 *
 * @summary Basic click-to-open popover surface
 */
export const Default: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button variant="secondary">Open popover</Button>
			</Popover.Trigger>
			<Popover.Content>
				<p className="text-sm text-text-default-base-primary">
					This carrier is appointed for 3 lines of business.
				</p>
			</Popover.Content>
		</Popover.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const trigger = canvas.getByRole('button', { name: /open popover/i });

		await expect(body.queryByText(/3 lines of business/i)).not.toBeInTheDocument();

		await userEvent.click(trigger);

		const content = await body.findByText(/3 lines of business/i);
		await expect(content).toBeInTheDocument();
		await expect(content.closest('[data-slot="popover-content"]')).toHaveAttribute(
			'data-state',
			'open'
		);

		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(body.queryByText(/3 lines of business/i)).not.toBeInTheDocument());
	}
};

/**
 * `side` sets the preferred placement; Radix flips it on viewport collision.
 *
 * @summary Popover placement on each of the four sides
 */
export const Sides: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-6">
			{(['top', 'right', 'bottom', 'left'] as const).map(side => (
				<Popover.Root key={side}>
					<Popover.Trigger asChild>
						<Button variant="secondary">{side}</Button>
					</Popover.Trigger>
					<Popover.Content side={side}>
						<p className="text-sm text-text-default-base-primary">Opens on {side}</p>
					</Popover.Content>
				</Popover.Root>
			))}
		</div>
	)
};

/**
 * Rich interactive content — the primary reason to reach for a Popover over a
 * Tooltip. A `Close` inside the surface dismisses it after submitting.
 *
 * @summary Popover holding an interactive form with a `Close` action
 */
export const WithForm: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button variant="secondary">Rename</Button>
			</Popover.Trigger>
			<Popover.Content align="start">
				<div className="flex flex-col gap-3">
					<label className="flex flex-col gap-1 text-sm text-text-default-base-primary">
						New name
						<input
							type="text"
							defaultValue="Untitled"
							className="rounded-md border border-border-default-base-primary px-2 py-1 text-sm"
						/>
					</label>
					<Popover.Close asChild>
						<Button variant="primary" size="sm">
							Save
						</Button>
					</Popover.Close>
				</div>
			</Popover.Content>
		</Popover.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		await userEvent.click(canvas.getByRole('button', { name: /rename/i }));

		const input = await body.findByRole('textbox');
		await expect(input).toBeInTheDocument();

		await userEvent.click(body.getByRole('button', { name: /save/i }));
		await waitFor(() => expect(body.queryByRole('textbox')).not.toBeInTheDocument());
	}
};

/**
 * `Anchor` positions the Content against an element other than the Trigger —
 * useful when the visual anchor differs from the toggle button.
 *
 * @summary Popover positioned against a separate `Anchor` element
 */
export const WithAnchor: Story = {
	render: () => (
		<Popover.Root>
			<div className="flex flex-col items-center gap-4">
				<Popover.Anchor className="rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary">
					Anchored here
				</Popover.Anchor>
				<Popover.Trigger asChild>
					<Button variant="secondary">Toggle from below</Button>
				</Popover.Trigger>
			</div>
			<Popover.Content side="top">
				<p className="text-sm text-text-default-base-primary">Positioned against the anchor</p>
			</Popover.Content>
		</Popover.Root>
	)
};
