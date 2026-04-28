import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	ChevronDownIcon,
	CopyIcon,
	FolderInputIcon,
	Share2Icon,
	Trash2Icon,
	UsersIcon
} from 'lucide-react';

import { Button } from '../button';
import { DropdownMenu } from './dropdown-menu';

/**
 * DropdownMenu is a compound overlay for secondary actions, bulk operations,
 * or navigation shortcuts triggered off a button or icon. Compose it from
 * `Root` / `Trigger` / `Portal` / `Content` and fill the menu with `Item`,
 * `Separator`, `Label`, and — for nested flows — `Sub` / `SubTrigger` /
 * `SubContent`. Built on Radix UI's DropdownMenu primitive, so keyboard
 * navigation, focus trapping, typeahead, and collision detection come for
 * free.
 */
const meta = {
	title: 'Components/DropdownMenu',
	component: DropdownMenu.Root,
	tags: ['autodocs']
} satisfies Meta<typeof DropdownMenu.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A minimal DropdownMenu with four `Item`s — edit/duplicate/archive plus a
 * separator before a destructive delete. Use this as the starting point for
 * most overflow menus.
 *
 * @summary Basic menu with item rows and a separated destructive action
 */
export const Default: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button size="md" variant="secondary">
					Click me
					<ChevronDownIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item onSelect={() => console.log('Edit clicked')}>Edit</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Duplicate clicked')}>
						Duplicate
					</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Archive clicked')}>
						Archive
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item onSelect={() => console.log('Delete clicked')}>
						<span className="text-red-500">Delete</span>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
};

/**
 * Multiple clusters of `Item`s split by `Separator` rules — mirrors an
 * "edit history / clipboard / export" overflow menu. Demonstrates the
 * `disabled` state on a menu row.
 *
 * @summary Menu with multiple `Separator`-split groups and a disabled item
 */
export const WithGroupsAndDividers: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button size="md" variant="secondary">
					More Options
					<ChevronDownIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item onSelect={() => console.log('Undo')}>Undo</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Redo')}>Redo</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item onSelect={() => console.log('Copy')}>Copy</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Cut')}>Cut</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Paste')}>Paste</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item disabled>Print (disabled)</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Export')}>Export</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
};

/**
 * Menu items with leading icons and a destructive row using the
 * `data-[highlighted]:bg-red-100` + `text-red-500` escape hatch. Use this
 * pattern when a row should read as destructive.
 *
 * @summary Icon-leading items with a destructive delete row
 */
export const WithIcons: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button size="md" variant="secondary">
					Actions
					<ChevronDownIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item onSelect={() => console.log('Copy')}>
						<CopyIcon />
						Copy
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item
						onSelect={() => console.log('Delete')}
						className="data-[highlighted]:bg-red-100">
						<Trash2Icon className="text-red-500" />
						<span className="text-red-500">Delete</span>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
};

/**
 * `Label`-segmented Profile / Settings / Account sections with a
 * destructive Logout row. Use `Label` to name groups that would otherwise
 * be ambiguous from the item text alone.
 *
 * @summary Menu with `Label`-titled sections and a destructive logout row
 */
export const WithGroupTitles: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button size="md" variant="secondary">
					Account Menu
					<ChevronDownIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Label>Profile</DropdownMenu.Label>
					<DropdownMenu.Item onSelect={() => console.log('View Profile')}>
						View Profile
					</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Edit Profile')}>
						Edit Profile
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Label>Settings</DropdownMenu.Label>
					<DropdownMenu.Item onSelect={() => console.log('Preferences')}>
						Preferences
					</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Privacy')}>Privacy</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Notifications')}>
						Notifications
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Label>Account</DropdownMenu.Label>
					<DropdownMenu.Item onSelect={() => console.log('Billing')}>Billing</DropdownMenu.Item>
					<DropdownMenu.Item
						onSelect={() => console.log('Logout')}
						className="data-[highlighted]:bg-red-100">
						<span className="text-red-500">Logout</span>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
};

/**
 * One level of nesting: Share and Move-to submenus wired via `Sub` /
 * `SubTrigger` / `SubContent`. Each submenu is portaled independently so
 * it escapes the parent's stacking context.
 *
 * @summary Single-level submenus for Share and Move-to flows
 */
export const WithSubmenu: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button size="md" variant="secondary">
					File Options
					<ChevronDownIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item onSelect={() => console.log('New File')}>New File</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Open')}>Open</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<Share2Icon />
							Share
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item onSelect={() => console.log('Email')}>Email</DropdownMenu.Item>
								<DropdownMenu.Item onSelect={() => console.log('Slack')}>Slack</DropdownMenu.Item>
								<DropdownMenu.Item onSelect={() => console.log('Copy Link')}>
									Copy Link
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<FolderInputIcon />
							Move to
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item onSelect={() => console.log('Archive')}>
									Archive
								</DropdownMenu.Item>
								<DropdownMenu.Item onSelect={() => console.log('Projects')}>
									Projects
								</DropdownMenu.Item>
								<DropdownMenu.Item onSelect={() => console.log('Drafts')}>Drafts</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
					<DropdownMenu.Separator />
					<DropdownMenu.Item
						onSelect={() => console.log('Delete')}
						className="data-[highlighted]:bg-red-100">
						<Trash2Icon className="text-red-500" />
						<span className="text-red-500">Delete</span>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
};

/**
 * Two levels of nesting: Organization → Teams → (Engineering, Design).
 * Deeper nesting is rarely a good UX — prefer splitting into separate
 * screens once the tree grows past two levels.
 *
 * @summary Two-level nested submenus inside a parent menu
 */
export const NestedSubmenus: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button size="md" variant="secondary">
					Organization Menu
					<ChevronDownIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Label>Organization</DropdownMenu.Label>
					<DropdownMenu.Item onSelect={() => console.log('Dashboard')}>Dashboard</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<UsersIcon />
							Teams
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item onSelect={() => console.log('View All Teams')}>
									View All Teams
								</DropdownMenu.Item>
								<DropdownMenu.Separator />
								<DropdownMenu.Sub>
									<DropdownMenu.SubTrigger>Engineering</DropdownMenu.SubTrigger>
									<DropdownMenu.Portal>
										<DropdownMenu.SubContent>
											<DropdownMenu.Item onSelect={() => console.log('Frontend')}>
												Frontend
											</DropdownMenu.Item>
											<DropdownMenu.Item onSelect={() => console.log('Backend')}>
												Backend
											</DropdownMenu.Item>
											<DropdownMenu.Item onSelect={() => console.log('DevOps')}>
												DevOps
											</DropdownMenu.Item>
										</DropdownMenu.SubContent>
									</DropdownMenu.Portal>
								</DropdownMenu.Sub>
								<DropdownMenu.Sub>
									<DropdownMenu.SubTrigger>Design</DropdownMenu.SubTrigger>
									<DropdownMenu.Portal>
										<DropdownMenu.SubContent>
											<DropdownMenu.Item onSelect={() => console.log('Product Design')}>
												Product Design
											</DropdownMenu.Item>
											<DropdownMenu.Item onSelect={() => console.log('Brand')}>
												Brand
											</DropdownMenu.Item>
										</DropdownMenu.SubContent>
									</DropdownMenu.Portal>
								</DropdownMenu.Sub>
								<DropdownMenu.Item onSelect={() => console.log('Marketing')}>
									Marketing
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
					<DropdownMenu.Separator />
					<DropdownMenu.Item onSelect={() => console.log('Settings')}>Settings</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
};

/**
 * Submenu that contains `disabled` `Item`s alongside a fully-disabled
 * `SubTrigger`. Use `disabled` sparingly — prefer hiding unavailable
 * actions outright unless the user needs to see them and understand why.
 *
 * @summary Submenu with `disabled` items and a disabled `SubTrigger`
 */
export const SubmenuWithDisabledItems: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button size="md" variant="secondary">
					Document Actions
					<ChevronDownIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item onSelect={() => console.log('View')}>View</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Edit')}>Edit</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<CopyIcon />
							Export as
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item onSelect={() => console.log('PDF')}>PDF</DropdownMenu.Item>
								<DropdownMenu.Item onSelect={() => console.log('Word')}>
									Word Document
								</DropdownMenu.Item>
								<DropdownMenu.Item disabled>Excel (Premium only)</DropdownMenu.Item>
								<DropdownMenu.Item disabled>PowerPoint (Premium only)</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger disabled>
							<Share2Icon />
							Share (Sign in required)
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item>Email</DropdownMenu.Item>
								<DropdownMenu.Item>Link</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
};
