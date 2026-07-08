import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Skeleton } from './skeleton';

/**
 * Skeleton renders a pulsing placeholder box while content loads. Size and
 * shape it with Tailwind classes to mirror the content it stands in for.
 */
const meta = {
	title: 'Components/Skeleton',
	component: Skeleton,
	tags: ['autodocs'],
	argTypes: {
		className: {
			control: 'text'
		}
	},
	args: {
		className: 'h-4 w-40'
	}
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default placeholder box, sized via `className`; hidden from assistive technologies. */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skeleton = canvasElement.querySelector('[data-slot="skeleton"]');

		await expect(skeleton).toBeInTheDocument();
		await expect(skeleton).toHaveAttribute('aria-hidden', 'true');
		await expect(canvas.queryByRole('generic', { hidden: false, name: /./ })).toBeNull();
	}
};

/** Compose plain skeletons to sketch the loading shape of real content. */
export const TextBlock: Story = {
	render: () => (
		<div className="flex w-80 flex-col gap-2">
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-2/3" />
		</div>
	)
};

/** `rounded-full` for avatars; pair with text lines for a list-item placeholder. */
export const ListItem: Story = {
	render: () => (
		<div className="flex w-80 items-center gap-3">
			<Skeleton className="size-10 shrink-0 rounded-full" />
			<div className="flex w-full flex-col gap-2">
				<Skeleton className="h-4 w-1/2" />
				<Skeleton className="h-3 w-3/4" />
			</div>
		</div>
	)
};

/** A card-shaped placeholder: media area, title, and body lines. */
export const Card: Story = {
	render: () => (
		<div className="flex w-80 flex-col gap-3 rounded-lg border border-border-default-base-primary p-4">
			<Skeleton className="h-32 w-full rounded-md" />
			<Skeleton className="h-5 w-1/2" />
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-2/3" />
		</div>
	)
};
