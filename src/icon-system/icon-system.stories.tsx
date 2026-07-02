import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	BellIcon,
	CheckIcon,
	ChevronRightIcon,
	CopyIcon,
	DownloadIcon,
	FilterIcon,
	HeartIcon,
	HomeIcon,
	InfoIcon,
	MailIcon,
	MenuIcon,
	PlusIcon,
	SearchIcon,
	SettingsIcon,
	StarIcon,
	Trash2Icon,
	TriangleAlertIcon,
	UploadIcon,
	UserIcon,
	XIcon
} from 'lucide-react';

/**
 * The design system does not wrap icons — consumers install `lucide-react`
 * directly (declared as a `peerDependency`) and style any icon with Tailwind
 * classes: `size-*` for size and `text-*` tokens for color. Add `shrink-0`
 * when an icon sits next to text in a flex row so it doesn't collapse.
 *
 * This page is a living reference: how to size and color icons, plus a sample
 * set of the most-used ones.
 */
const meta: Meta = {
	title: 'Foundations/Icons',
	parameters: {
		layout: 'padded'
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

/**
 * Size is set with a Tailwind `size-*` class straight on the icon — the DS
 * doesn't impose a scale.
 *
 * @summary Sizing icons with Tailwind classes
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex items-end gap-8">
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className="size-3.5" />
				<span className="text-xs">size-3.5 (14px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className="size-4" />
				<span className="text-xs">size-4 (16px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className="size-5" />
				<span className="text-xs">size-5 (20px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className="size-6" />
				<span className="text-xs">size-6 (24px)</span>
			</div>
		</div>
	)
};

/**
 * Icons inherit color via `currentColor`. Drive them from semantic tokens on
 * the parent (`text-icon-default-base-*`) so they stay in sync with the
 * surrounding UI state.
 *
 * @summary Color inheritance via semantic tokens
 */
export const Colors: Story = {
	render: () => (
		<div className="flex gap-8">
			<div className="flex flex-col items-center gap-2 text-icon-default-base-primary">
				<BellIcon className="size-5" />
				<span className="text-xs">primary</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-icon-default-base-secondary">
				<BellIcon className="size-5" />
				<span className="text-xs">secondary</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-icon-default-base-tertiary">
				<BellIcon className="size-5" />
				<span className="text-xs">tertiary</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-bg-default-danger-primary">
				<TriangleAlertIcon className="size-5" />
				<span className="text-xs">danger</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-bg-default-positive-primary">
				<CheckIcon className="size-5" />
				<span className="text-xs">positive</span>
			</div>
		</div>
	)
};

/**
 * A sample set of icons from `lucide-react`. The full catalogue (~1500 icons)
 * is available at https://lucide.dev/icons — import by name as needed.
 *
 * @summary Sample icon set
 */
export const Gallery: Story = {
	render: () => {
		const icons = [
			{ name: 'HomeIcon', Icon: HomeIcon },
			{ name: 'SearchIcon', Icon: SearchIcon },
			{ name: 'UserIcon', Icon: UserIcon },
			{ name: 'SettingsIcon', Icon: SettingsIcon },
			{ name: 'BellIcon', Icon: BellIcon },
			{ name: 'MailIcon', Icon: MailIcon },
			{ name: 'HeartIcon', Icon: HeartIcon },
			{ name: 'StarIcon', Icon: StarIcon },
			{ name: 'PlusIcon', Icon: PlusIcon },
			{ name: 'XIcon', Icon: XIcon },
			{ name: 'CheckIcon', Icon: CheckIcon },
			{ name: 'MenuIcon', Icon: MenuIcon },
			{ name: 'ChevronRightIcon', Icon: ChevronRightIcon },
			{ name: 'InfoIcon', Icon: InfoIcon },
			{ name: 'TriangleAlertIcon', Icon: TriangleAlertIcon },
			{ name: 'Trash2Icon', Icon: Trash2Icon },
			{ name: 'DownloadIcon', Icon: DownloadIcon },
			{ name: 'UploadIcon', Icon: UploadIcon },
			{ name: 'CopyIcon', Icon: CopyIcon },
			{ name: 'FilterIcon', Icon: FilterIcon }
		];

		return (
			<div className="flex flex-wrap items-center gap-4 text-icon-default-base-primary">
				{icons.map(({ name, Icon }) => (
					<Icon key={name} className="size-6" />
				))}
			</div>
		);
	}
};

/**
 * Icons composed next to text: size with `size-*`, add `shrink-0` so the icon
 * doesn't collapse in the flex row, and let color inherit from the parent's
 * text token.
 *
 * @summary Icon within a button-like composition
 */
export const InComposition: Story = {
	render: () => (
		<div className="flex items-center gap-2 rounded-full bg-bg-button-primary-enable px-4 py-2 text-icon-button-primary-enable">
			<PlusIcon className="size-4 shrink-0" />
			<span className="text-sm">Create agent</span>
		</div>
	)
};
