import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { CheckList } from './check-list';

/**
 * CheckList renders a vertical list where every row is marked with a check
 * icon. Purely presentational — for interactive selection use a checkbox group.
 */
const meta = {
	title: 'Components/CheckList',
	component: CheckList.Root,
	tags: ['autodocs']
} satisfies Meta<typeof CheckList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Plain text rows with a leading check. */
export const Default: Story = {
	render: () => (
		<CheckList.Root>
			<CheckList.Item>Instant appointment</CheckList.Item>
			<CheckList.Item>Bind with Agentero</CheckList.Item>
			<CheckList.Item>Available in the Agentero rater</CheckList.Item>
		</CheckList.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const items = canvas.getAllByRole('listitem');

		await expect(canvas.getByRole('list')).toBeInTheDocument();
		await expect(items).toHaveLength(3);
		await expect(items[0]!.querySelector('svg')).toHaveAttribute('aria-hidden');
	}
};

/** Items accept rich content — links, wrapped text, custom markup. */
export const RichContent: Story = {
	render: () => (
		<div className="w-72">
			<CheckList.Root>
				<CheckList.Item>
					<a href="#quoting" className="underline">
						Agentero rater
					</a>
				</CheckList.Item>
				<CheckList.Item>
					Longer descriptions wrap under their own text while the check stays aligned to the first
					line.
				</CheckList.Item>
			</CheckList.Root>
		</div>
	)
};
