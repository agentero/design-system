import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Avatar } from '../avatar';
import { Button } from '../button';
import { HoverCard } from './hover-card';

const PreviewCard = () => (
	<div className="flex w-72 gap-3">
		<Avatar fallback="AG" colorize="Agentero" type="initials" size="md" />
		<div className="flex flex-col gap-1">
			<p className="font-medium text-text-default-base-primary">Agentero</p>
			<p className="text-text-default-base-tertiary">
				Insurance marketplace for independent agents.
			</p>
		</div>
	</div>
);

/**
 * HoverCard reveals rich, sighted-user preview content anchored to a trigger
 * on pointer hover or keyboard focus. Compose it from `Root` / `Trigger` /
 * `Portal` / `Content`.
 *
 * `Trigger` takes any focusable control through `asChild`; these stories use a
 * `secondary` Button throughout. Radix mirrors open state onto whatever you
 * pass, so the trigger can style itself off `data-state`.
 */
const meta = {
	title: 'Components/HoverCard',
	component: HoverCard.Root,
	tags: ['autodocs'],
	argTypes: {
		openDelay: {
			control: 'number'
		},
		closeDelay: {
			control: 'number'
		}
	},
	args: {
		openDelay: 0,
		closeDelay: 0
	},
	decorators: [
		Story => (
			<div className="flex min-h-64 items-center justify-center p-10">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof HoverCard.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default preview revealed on hover; hides again on unhover. */
export const Default: Story = {
	render: args => (
		<HoverCard.Root {...args}>
			<HoverCard.Trigger asChild>
				<Button variant="secondary">Hover me</Button>
			</HoverCard.Trigger>
			<HoverCard.Portal>
				<HoverCard.Content>
					<PreviewCard />
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const trigger = canvas.getByRole('button', { name: /hover me/i });
		await expect(trigger).toHaveAttribute('data-slot', 'hover-card-trigger');

		await expect(body.queryByText(/insurance marketplace/i)).not.toBeInTheDocument();

		await userEvent.hover(trigger);

		const previews = await body.findAllByText(/insurance marketplace/i);
		await expect(previews.length).toBeGreaterThan(0);
		await expect(document.querySelector('[data-slot="hover-card-content"]')).toBeInTheDocument();
		// Open state lands on the Button itself, so it can style its own open look.
		await expect(trigger).toHaveAttribute('data-state', 'open');

		await userEvent.unhover(trigger);
		await waitFor(() => expect(body.queryByText(/insurance marketplace/i)).not.toBeInTheDocument());
		await expect(trigger).toHaveAttribute('data-state', 'closed');
	}
};

/**
 * Brushing the trigger and leaving without ever reaching the card is the most
 * common way a hover card gets dismissed, so the exit reverses the entrance
 * from wherever it got to. Driving it with keyframes instead would restart the
 * exit at full opacity and scale, popping the half-faded card to fully visible
 * on its way out.
 */
export const AbandonedHover: Story = {
	render: args => (
		<HoverCard.Root {...args}>
			<HoverCard.Trigger asChild>
				<Button variant="secondary">Hover me</Button>
			</HoverCard.Trigger>
			<HoverCard.Portal>
				<HoverCard.Content>
					<PreviewCard />
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /hover me/i });

		await userEvent.hover(trigger);

		const content = await waitFor(() => {
			const node = document.querySelector('[data-slot="hover-card-content"]');
			if (!node) throw new Error('hover card never opened');
			return node;
		});

		// Sample every frame across the interruption. The entrance runs 200ms, so
		// leaving now lands well inside it.
		const frames: { state: string | null; opacity: number }[] = [];
		let sampling = true;
		const sample = () => {
			if (!sampling) return;
			if (content.isConnected) {
				frames.push({
					state: content.getAttribute('data-state'),
					opacity: Number(getComputedStyle(content).opacity)
				});
			}
			requestAnimationFrame(sample);
		};
		sample();

		await userEvent.unhover(trigger);
		await waitFor(() => expect(content.isConnected).toBe(false));
		sampling = false;

		const closing = frames.findIndex(frame => frame.state === 'closed');
		await expect(closing).toBeGreaterThan(0);

		const lastOpen = frames[closing - 1]?.opacity ?? 1;
		const firstClosed = frames[closing]?.opacity ?? 1;
		// The card was still fading in when the pointer left, and opacity keeps
		// falling from there instead of snapping back up to 1.
		await expect(lastOpen).toBeLessThan(1);
		await expect(firstClosed).toBeLessThanOrEqual(lastOpen);
	}
};

/**
 * Opens on focus as a supplementary affordance. Note this is not the same as
 * being keyboard-accessible: focus does not move into the card and it closes
 * on blur, so any interactive content inside stays unreachable by keyboard —
 * never put essential actions there.
 */
export const OpensOnFocus: Story = {
	render: args => (
		<HoverCard.Root {...args}>
			<HoverCard.Trigger asChild>
				<Button variant="secondary">Focus me</Button>
			</HoverCard.Trigger>
			<HoverCard.Portal>
				<HoverCard.Content>
					<PreviewCard />
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const trigger = canvas.getByRole('button', { name: /focus me/i });

		await userEvent.tab();
		await expect(trigger).toHaveFocus();

		const previews = await body.findAllByText(/insurance marketplace/i);
		await expect(previews.length).toBeGreaterThan(0);
	}
};

/**
 * `side` sets the preferred placement; it flips on viewport collision. The
 * triggers are laid out on a compass so each card opens away from the centre,
 * which makes a flip obvious the moment one runs out of room.
 */
const SIDE_CELL = {
	top: 'col-start-2 row-start-1',
	right: 'col-start-3 row-start-2',
	bottom: 'col-start-2 row-start-3',
	left: 'col-start-1 row-start-2'
} as const;

export const Sides: Story = {
	// Headroom so `top` clears the viewport and actually opens upward rather
	// than flipping — the point here is the four placements, not the collision.
	decorators: [
		Story => (
			<div className="py-32">
				<Story />
			</div>
		)
	],
	render: args => (
		<div className="grid grid-cols-3 grid-rows-3 gap-4">
			{(['top', 'right', 'bottom', 'left'] as const).map(side => (
				<HoverCard.Root key={side} {...args}>
					<HoverCard.Trigger asChild>
						{/* `capitalize` sits on the Button because Preflight resets
						    text-transform on <button>, so it can't be inherited. */}
						<Button variant="secondary" className={`capitalize ${SIDE_CELL[side]}`}>
							{side}
						</Button>
					</HoverCard.Trigger>
					<HoverCard.Portal>
						<HoverCard.Content side={side}>
							<PreviewCard />
						</HoverCard.Content>
					</HoverCard.Portal>
				</HoverCard.Root>
			))}
		</div>
	)
};

/**
 * The whole point of a HoverCard over a Tooltip: freely laid-out content that
 * may include its own links and actions. Keep those actions at `secondary` or
 * below — a primary CTA inside a card the keyboard can't reach reads as the
 * main path to something it isn't. The trigger still has to stand on its own.
 */
export const RichContent: Story = {
	render: args => (
		<HoverCard.Root {...args}>
			<HoverCard.Trigger asChild>
				<Button variant="secondary">Hover me</Button>
			</HoverCard.Trigger>
			<HoverCard.Portal>
				<HoverCard.Content className="w-80">
					<div className="flex flex-col gap-3">
						<div className="flex gap-3">
							<Avatar fallback="AG" colorize="Agentero" type="initials" size="lg" />
							<div className="flex flex-col gap-1">
								<p className="font-medium text-text-default-base-primary">Agentero</p>
								<p className="text-text-default-base-tertiary">
									Insurance marketplace for independent agents.
								</p>
							</div>
						</div>
						<div className="flex gap-4 text-text-default-base-secondary">
							<span>
								<span className="font-medium text-text-default-base-primary">128</span> carriers
							</span>
							<span>
								<span className="font-medium text-text-default-base-primary">50</span> states
							</span>
						</div>
						<Button variant="secondary" size="sm" asChild>
							<a href="https://agentero.com">View profile</a>
						</Button>
					</div>
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const trigger = canvas.getByRole('button', { name: /hover me/i });

		await userEvent.hover(trigger);

		await expect(await body.findByText(/128/)).toBeInTheDocument();
		// `asChild` keeps the anchor semantics while picking up Button's styling.
		const profileLink = await body.findByRole('link', { name: /view profile/i });
		await expect(profileLink).toHaveAttribute('data-slot', 'button');
		await expect(profileLink).toHaveAttribute('href', 'https://agentero.com');
	}
};

/**
 * An optional `Arrow` points back at the trigger; render it inside `Content`.
 * It is filled with the card background and carries no border, so it reads as
 * a notch out of the card's edge rather than a distinct shape.
 */
export const WithArrow: Story = {
	render: args => (
		<HoverCard.Root {...args}>
			<HoverCard.Trigger asChild>
				<Button variant="secondary">Hover me</Button>
			</HoverCard.Trigger>
			<HoverCard.Portal>
				<HoverCard.Content>
					<PreviewCard />
					<HoverCard.Arrow />
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /hover me/i });

		await userEvent.hover(trigger);

		await waitFor(() =>
			expect(document.querySelector('[data-slot="hover-card-arrow"]')).toBeInTheDocument()
		);
	}
};

/**
 * `openDelay` / `closeDelay` tune the hover latency. Default is a deliberate
 * `700ms` open so cards don't flash on incidental passes; drop it to `0` for
 * trigger-dense UIs where an instant preview reads as more responsive.
 */
export const Delays: Story = {
	render: () => (
		// Grid rather than flex so both triggers take the wider label's width —
		// a size difference would read as part of what the delay changes.
		<div className="grid grid-cols-2 gap-10">
			<HoverCard.Root openDelay={700} closeDelay={300}>
				<HoverCard.Trigger asChild>
					<Button variant="secondary">Default (700ms)</Button>
				</HoverCard.Trigger>
				<HoverCard.Portal>
					<HoverCard.Content>
						<PreviewCard />
					</HoverCard.Content>
				</HoverCard.Portal>
			</HoverCard.Root>
			<HoverCard.Root openDelay={0} closeDelay={0}>
				<HoverCard.Trigger asChild>
					<Button variant="secondary">Instant (0ms)</Button>
				</HoverCard.Trigger>
				<HoverCard.Portal>
					<HoverCard.Content>
						<PreviewCard />
					</HoverCard.Content>
				</HoverCard.Portal>
			</HoverCard.Root>
		</div>
	)
};
