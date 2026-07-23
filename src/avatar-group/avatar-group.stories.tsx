import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Avatar } from '../avatar';
import { AvatarGroup } from './avatar-group';

const PEOPLE = [
	{ fallback: 'AL', colorize: 'Ada Lovelace' },
	{ fallback: 'GH', colorize: 'Grace Hopper' },
	{ fallback: 'MK', colorize: 'Mary Kom' },
	{ fallback: 'RP', colorize: 'Rosa Parks' },
	{ fallback: 'HT', colorize: 'Harriet Tubman' }
];

/**
 * AvatarGroup stacks `<Avatar>` children into an overlapping row and collapses
 * everything past `max` into a trailing `+N` bubble. The group owns the layout:
 * it forces a uniform `size` (and `variant`, when set) and rings each avatar in
 * the surface color so they read as separate.
 */
const meta = {
	title: 'Components/AvatarGroup',
	component: AvatarGroup,
	tags: ['autodocs'],
	argTypes: {
		max: { control: { type: 'number', min: 1 } },
		size: { control: 'radio', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] },
		variant: { control: 'radio', options: ['circle', 'square', 'pillow', 'pentagon'] }
	},
	args: {
		max: 3,
		size: 'md'
	}
} satisfies Meta<typeof AvatarGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Five people, `max={3}`: three avatars overlap and the rest collapse into `+2`. */
export const Default: Story = {
	render: args => (
		<AvatarGroup {...args}>
			{PEOPLE.map(person => (
				<Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />
			))}
		</AvatarGroup>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('AL')).toBeInTheDocument();
		await expect(canvas.getByText('GH')).toBeInTheDocument();
		await expect(canvas.getByText('MK')).toBeInTheDocument();
		await expect(canvas.queryByText('RP')).not.toBeInTheDocument();
		await expect(canvas.getByText('+2')).toBeInTheDocument();

		const items = canvasElement.querySelectorAll('[data-slot="avatar-group"] > *');
		expect(items).toHaveLength(4); // 3 visible + the +2 bubble

		const [first, second] = items;
		if (first && second) {
			// first avatar sits flush; the rest overlap by the md step (-0.625rem = -10px)
			expect(getComputedStyle(first).marginLeft).toBe('0px');
			expect(getComputedStyle(second).marginLeft).toBe('-10px');
			// the surface-colored separator lands as a 2px border on each avatar
			expect(getComputedStyle(first).borderTopWidth).toBe('2px');
		}
	}
};

/** When the count is within `max`, every avatar shows and no `+N` bubble renders. */
export const WithinMax: Story = {
	args: {
		max: 5
	},
	render: args => (
		<AvatarGroup {...args}>
			{PEOPLE.map(person => (
				<Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />
			))}
		</AvatarGroup>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('HT')).toBeInTheDocument();
		await expect(canvas.queryByText(/^\+/)).not.toBeInTheDocument();
	}
};

/** The group forces its `size` onto every child, so the stack stays uniform. */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
				<AvatarGroup key={size} size={size} max={3}>
					{PEOPLE.map(person => (
						<Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />
					))}
				</AvatarGroup>
			))}
		</div>
	)
};

/** `variant` reshapes every avatar and the overflow bubble together. */
export const Square: Story = {
	args: {
		variant: 'square'
	},
	render: args => (
		<AvatarGroup {...args}>
			{PEOPLE.map(person => (
				<Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />
			))}
		</AvatarGroup>
	),
	play: async ({ canvasElement }) => {
		const overflow = canvasElement.querySelector('[data-slot="avatar-group-overflow"]');

		await expect(overflow).toBeInTheDocument();
		await expect(overflow).toHaveClass('rounded-md');
	}
};
