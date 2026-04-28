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

import { iconStyles } from '../../lib/icon-styles';

/**
 * The design system does not wrap icons — consumers install `lucide-react`
 * directly (declared as a `peerDependency`) and pair any icon with `iconStyles`
 * from `@agentero/design-system/lib` to enforce canonical sizing, color
 * inheritance, and shrink behavior.
 *
 * This page is a living reference for the icon system: sizes, color inheritance
 * via semantic tokens, and a sample set of the most-used icons.
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
 * Three canonical sizes — `sm` (14px, default), `md` (16px), `lg` (20px).
 * Apply via `iconStyles({ size })` on any SVG from `lucide-react`. Calling
 * `iconStyles()` with no args returns the default `sm`.
 *
 * @summary Canonical icon sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex items-end gap-8">
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className={iconStyles()} />
				<span className="text-xs">sm (14px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className={iconStyles({ size: 'md' })} />
				<span className="text-xs">md (16px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className={iconStyles({ size: 'lg' })} />
				<span className="text-xs">lg (20px)</span>
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
				<BellIcon className={iconStyles()} />
				<span className="text-xs">primary</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-icon-default-base-secondary">
				<BellIcon className={iconStyles()} />
				<span className="text-xs">secondary</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-icon-default-base-tertiary">
				<BellIcon className={iconStyles()} />
				<span className="text-xs">tertiary</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-bg-default-danger-primary">
				<TriangleAlertIcon className={iconStyles()} />
				<span className="text-xs">danger</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-bg-default-positive-primary">
				<CheckIcon className={iconStyles()} />
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
			<div className="grid grid-cols-4 gap-4 text-icon-default-base-primary sm:grid-cols-6">
				{icons.map(({ name, Icon }) => (
					<div
						key={name}
						className="flex flex-col items-center gap-2 rounded border border-slate-200 p-3">
						<Icon className={iconStyles({ size: 'lg' })} />
						<span className="text-xs text-icon-default-base-tertiary">{name}</span>
					</div>
				))}
			</div>
		);
	}
};

/**
 * Demonstrates the intended usage pattern: icons live inside composed
 * components (buttons, inputs, badges) that own their own sizing slot.
 *
 * @summary Icon within a button-like composition
 */
export const InComposition: Story = {
	render: () => (
		<div className="flex items-center gap-2 rounded-full bg-bg-button-primary-enable px-4 py-2 text-icon-button-primary-enable">
			<PlusIcon className={iconStyles()} />
			<span className="text-sm">Create agent</span>
		</div>
	)
};
