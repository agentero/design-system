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

const PROFILE_PHOTO =
	'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop';

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
		await expect(canvas.getByRole('img', { name: 'AL' })).toBeInTheDocument();
		await expect(canvas.getByRole('img', { name: '+2' })).toBeInTheDocument();

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
		await expect(canvas.getByRole('img', { name: 'HT' })).toBeInTheDocument();
		await expect(canvas.queryByText(/^\+/)).not.toBeInTheDocument();
	}
};

/**
 * Initials are a poor accessible name. Give each avatar `role="img"` and an
 * `aria-label` with the person's name; the group keeps what the caller sets.
 *
 * @summary Avatars named by the caller keep their accessible names
 */
export const WithNames: Story = {
	render: args => (
		<AvatarGroup {...args}>
			{PEOPLE.map(person => (
				<Avatar
					key={person.colorize}
					role="img"
					aria-label={person.colorize}
					fallback={person.fallback}
					colorize={person.colorize}
				/>
			))}
		</AvatarGroup>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('img', { name: 'Ada Lovelace' })).toBeInTheDocument();
		await expect(canvas.queryByRole('img', { name: 'AL' })).not.toBeInTheDocument();
	}
};

/**
 * An avatar with a photo is named by its `alt`, so the group adds no fallback
 * name on top of it.
 *
 * @summary A photo is named by its alt, not by its fallback
 */
export const WithPhoto: Story = {
	render: args => (
		<AvatarGroup {...args}>
			<Avatar src={PROFILE_PHOTO} alt="Alex Morgan" fallback="AM" />
			{PEOPLE.map(person => (
				<Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />
			))}
		</AvatarGroup>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.queryByRole('img', { name: 'AM' })).not.toBeInTheDocument();
		await expect(canvas.getByRole('img', { name: 'AL' })).toBeInTheDocument();
	}
};

/**
 * A role says what the avatar is, not what it is called. An avatar that carries
 * its own role keeps it and still takes its text fallback as its name. An
 * avatar marked `presentation` is left without one.
 *
 * @summary A caller's role is kept and the fallback still names the avatar
 */
export const WithRole: Story = {
	tags: ['!manifest'],
	render: args => (
		<AvatarGroup {...args}>
			<Avatar role="button" tabIndex={0} fallback="AL" colorize="Ada Lovelace" />
			<Avatar role="presentation" fallback="GH" colorize="Grace Hopper" />
		</AvatarGroup>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('button', { name: 'AL' })).toBeInTheDocument();
		await expect(canvas.getByText('GH').closest('[role="presentation"]')).not.toHaveAttribute(
			'aria-label'
		);
	}
};

/**
 * Initials wrapped in an element or a fragment are read from its text, so the
 * avatar is still named.
 *
 * @summary Initials wrapped in an element still name the avatar
 */
export const WithWrappedInitials: Story = {
	tags: ['!manifest'],
	render: args => (
		<AvatarGroup {...args}>
			<Avatar fallback={<span>AL</span>} colorize="Ada Lovelace" />
			<Avatar fallback={<>GH</>} colorize="Grace Hopper" />
		</AvatarGroup>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('img', { name: 'AL' })).toBeInTheDocument();
		await expect(canvas.getByRole('img', { name: 'GH' })).toBeInTheDocument();
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
