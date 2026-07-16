import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Avatar } from '../avatar';
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
				<a href="https://agentero.com" className="text-text-default-base-primary underline">
					@agentero
				</a>
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
		const trigger = canvas.getByRole('link', { name: /@agentero/i });
		await expect(trigger).toHaveAttribute('data-slot', 'hover-card-trigger');

		await expect(body.queryByText(/insurance marketplace/i)).not.toBeInTheDocument();

		await userEvent.hover(trigger);

		const previews = await body.findAllByText(/insurance marketplace/i);
		await expect(previews.length).toBeGreaterThan(0);
		await expect(document.querySelector('[data-slot="hover-card-content"]')).toBeInTheDocument();

		await userEvent.unhover(trigger);
		await waitFor(() => expect(body.queryByText(/insurance marketplace/i)).not.toBeInTheDocument());
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
				<a href="https://agentero.com" className="text-text-default-base-primary underline">
					@agentero
				</a>
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
		const trigger = canvas.getByRole('link', { name: /@agentero/i });

		await userEvent.tab();
		await expect(trigger).toHaveFocus();

		const previews = await body.findAllByText(/insurance marketplace/i);
		await expect(previews.length).toBeGreaterThan(0);
	}
};

/** `side` sets the preferred placement; it flips on viewport collision. */
export const Sides: Story = {
	render: args => (
		<div className="grid grid-cols-2 gap-10">
			{(['top', 'right', 'bottom', 'left'] as const).map(side => (
				<HoverCard.Root key={side} {...args}>
					<HoverCard.Trigger asChild>
						<a href="https://agentero.com" className="text-text-default-base-primary underline">
							{side}
						</a>
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
 * may include its own links and actions. Still supplementary — never the only
 * path to an action.
 */
export const RichContent: Story = {
	render: args => (
		<HoverCard.Root {...args}>
			<HoverCard.Trigger asChild>
				<a href="https://agentero.com" className="text-text-default-base-primary underline">
					@agentero
				</a>
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
						<a href="https://agentero.com" className="text-text-default-base-primary underline">
							View profile
						</a>
					</div>
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const trigger = canvas.getByRole('link', { name: /@agentero/i });

		await userEvent.hover(trigger);

		await expect(await body.findByText(/128/)).toBeInTheDocument();
		const profileLink = await body.findByRole('link', { name: /view profile/i });
		await expect(profileLink).toBeInTheDocument();
	}
};

/**
 * An optional `Arrow` points back at the trigger; render it inside `Content`.
 * The arrow is filled with the card background (white), so it only reads
 * against a surface that contrasts with the card — shown here on a muted
 * backdrop.
 */
export const WithArrow: Story = {
	decorators: [
		Story => (
			<div className="rounded-lg bg-slate-300 p-16">
				<Story />
			</div>
		)
	],
	render: args => (
		<HoverCard.Root {...args}>
			<HoverCard.Trigger asChild>
				<a href="https://agentero.com" className="text-text-default-base-primary underline">
					@agentero
				</a>
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
		const trigger = canvas.getByRole('link', { name: /@agentero/i });

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
		<div className="flex gap-10">
			<HoverCard.Root openDelay={700} closeDelay={300}>
				<HoverCard.Trigger asChild>
					<a href="https://agentero.com" className="text-text-default-base-primary underline">
						Default (700ms)
					</a>
				</HoverCard.Trigger>
				<HoverCard.Portal>
					<HoverCard.Content>
						<PreviewCard />
					</HoverCard.Content>
				</HoverCard.Portal>
			</HoverCard.Root>
			<HoverCard.Root openDelay={0} closeDelay={0}>
				<HoverCard.Trigger asChild>
					<a href="https://agentero.com" className="text-text-default-base-primary underline">
						Instant (0ms)
					</a>
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
