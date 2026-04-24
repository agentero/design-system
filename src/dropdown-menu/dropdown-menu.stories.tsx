import type { SVGProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { DropdownMenu } from './dropdown-menu';

const IconContentCopy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M9.05765 17.5C8.55252 17.5 8.12496 17.325 7.77498 16.975C7.42498 16.625 7.24998 16.1974 7.24998 15.6923V4.30773C7.24998 3.8026 7.42498 3.37503 7.77498 3.02503C8.12496 2.67503 8.55252 2.50003 9.05765 2.50003H17.4422C17.9473 2.50003 18.3749 2.67503 18.7249 3.02503C19.0749 3.37503 19.2499 3.8026 19.2499 4.30773V15.6923C19.2499 16.1974 19.0749 16.625 18.7249 16.975C18.3749 17.325 17.9473 17.5 17.4422 17.5H9.05765ZM9.05765 16H17.4422C17.5191 16 17.5897 15.968 17.6538 15.9039C17.7179 15.8397 17.7499 15.7692 17.7499 15.6923V4.30773C17.7499 4.2308 17.7179 4.16027 17.6538 4.09616C17.5897 4.03206 17.5191 4.00001 17.4422 4.00001H9.05765C8.98072 4.00001 8.9102 4.03206 8.8461 4.09616C8.78198 4.16027 8.74993 4.2308 8.74993 4.30773V15.6923C8.74993 15.7692 8.78198 15.8397 8.8461 15.9039C8.9102 15.968 8.98072 16 9.05765 16ZM5.55768 20.9999C5.05256 20.9999 4.625 20.8249 4.275 20.4749C3.925 20.1249 3.75 19.6974 3.75 19.1923V6.30773H5.24998V19.1923C5.24998 19.2692 5.28203 19.3397 5.34613 19.4038C5.41024 19.4679 5.48076 19.5 5.55768 19.5H15.4422V20.9999H5.55768Z" />
	</svg>
);

const IconDelete = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M7.3077 20.5C6.80898 20.5 6.38302 20.3234 6.02982 19.9701C5.67661 19.6169 5.5 19.191 5.5 18.6923V5.99999H5.25C5.03718 5.99999 4.85898 5.9282 4.7154 5.78462C4.5718 5.64103 4.5 5.46283 4.5 5.25002C4.5 5.0372 4.5718 4.859 4.7154 4.71542C4.85898 4.57182 5.03718 4.50002 5.25 4.50002H8.99997C8.99997 4.25515 9.08619 4.0465 9.25863 3.87407C9.43106 3.70163 9.63971 3.61542 9.88457 3.61542H14.1154C14.3602 3.61542 14.5689 3.70163 14.7413 3.87407C14.9138 4.0465 15 4.25515 15 4.50002H18.75C18.9628 4.50002 19.141 4.57182 19.2845 4.71542C19.4281 4.859 19.5 5.0372 19.5 5.25002C19.5 5.46283 19.4281 5.64103 19.2845 5.78462C19.141 5.9282 18.9628 5.99999 18.75 5.99999H18.5V18.6923C18.5 19.191 18.3233 19.6169 17.9701 19.9701C17.6169 20.3234 17.191 20.5 16.6922 20.5H7.3077ZM17 5.99999H6.99997V18.6923C6.99997 18.782 7.02883 18.8557 7.08652 18.9134C7.14423 18.9711 7.21795 19 7.3077 19H16.6922C16.782 19 16.8557 18.9711 16.9134 18.9134C16.9711 18.8557 17 18.782 17 18.6923V5.99999ZM9.40385 17H10.9038V7.99999H9.40385V17ZM13.0961 17H14.5961V7.99999H13.0961V17Z" />
	</svg>
);

const IconDriveFileMove = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M4.30775 19.5C3.80258 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30775C2.5 5.80258 2.675 5.375 3.025 5.025C3.375 4.675 3.80258 4.5 4.30775 4.5H9.05C9.291 4.5 9.52275 4.54683 9.74525 4.6405C9.96758 4.734 10.1608 4.86283 10.325 5.027L11.798 6.5H19.6923C20.1974 6.5 20.625 6.675 20.975 7.025C21.325 7.375 21.5 7.80258 21.5 8.30775V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.30775ZM4.30775 18H19.6923C19.7821 18 19.8558 17.9712 19.9135 17.9135C19.9712 17.8558 20 17.7821 20 17.6923V8.30775C20 8.21792 19.9712 8.14417 19.9135 8.0865C19.8558 8.02883 19.7821 8 19.6923 8H11.1845L9.27125 6.0865C9.23908 6.0545 9.20542 6.03208 9.17025 6.01925C9.13492 6.00642 9.098 6 9.0595 6H4.30775C4.21792 6 4.14417 6.02883 4.0865 6.0865C4.02883 6.14417 4 6.21792 4 6.30775V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18ZM12.7963 13.75L11.5538 14.9923C11.4154 15.1308 11.3446 15.3048 11.3413 15.5145C11.3381 15.724 11.4089 15.9012 11.5538 16.0463C11.6988 16.1911 11.8744 16.2635 12.0808 16.2635C12.2873 16.2635 12.4629 16.1911 12.6077 16.0463L15.0212 13.6328C15.2019 13.4519 15.2923 13.241 15.2923 13C15.2923 12.759 15.2019 12.5481 15.0212 12.3672L12.6077 9.95375C12.4692 9.81542 12.2952 9.74458 12.0855 9.74125C11.876 9.73808 11.6988 9.80892 11.5538 9.95375C11.4089 10.0988 11.3365 10.2744 11.3365 10.4807C11.3365 10.6872 11.4089 10.8629 11.5538 11.0078L12.7963 12.25H9.09625C8.88342 12.25 8.70517 12.3218 8.5615 12.4655C8.418 12.609 8.34625 12.7872 8.34625 13C8.34625 13.2128 8.418 13.391 8.5615 13.5345C8.70517 13.6782 8.88342 13.75 9.09625 13.75H12.7963Z" />
	</svg>
);

const IconIosShare = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M6.3077 22.5C5.80257 22.5 5.375 22.325 5.025 21.975C4.675 21.625 4.5 21.1974 4.5 20.6923V10.3077C4.5 9.80261 4.675 9.37504 5.025 9.02504C5.375 8.67504 5.80257 8.50004 6.3077 8.50004H8.11537C8.32819 8.50004 8.50639 8.57184 8.64997 8.71544C8.79356 8.85902 8.86535 9.03722 8.86535 9.25004C8.86535 9.46286 8.79356 9.64106 8.64997 9.78464C8.50639 9.92822 8.32819 10 8.11537 10H6.3077C6.23077 10 6.16024 10.0321 6.09612 10.0962C6.03202 10.1603 5.99997 10.2308 5.99997 10.3077V20.6923C5.99997 20.7692 6.03202 20.8397 6.09612 20.9039C6.16024 20.968 6.23077 21 6.3077 21H17.6922C17.7692 21 17.8397 20.968 17.9038 20.9039C17.9679 20.8397 18 20.7692 18 20.6923V10.3077C18 10.2308 17.9679 10.1603 17.9038 10.0962C17.8397 10.0321 17.7692 10 17.6922 10H15.8846C15.6718 10 15.4936 9.92822 15.35 9.78464C15.2064 9.64106 15.1346 9.46286 15.1346 9.25004C15.1346 9.03722 15.2064 8.85902 15.35 8.71544C15.4936 8.57184 15.6718 8.50004 15.8846 8.50004H17.6922C18.1974 8.50004 18.625 8.67504 18.975 9.02504C19.325 9.37504 19.5 9.80261 19.5 10.3077V20.6923C19.5 21.1974 19.325 21.625 18.975 21.975C18.625 22.325 18.1974 22.5 17.6922 22.5H6.3077V22.5ZM11.25 4.71926L9.92687 6.04236C9.77817 6.19108 9.60414 6.26448 9.40477 6.26256C9.20542 6.26063 9.02819 6.18211 8.87308 6.02699C8.72819 5.87186 8.65319 5.69621 8.64808 5.50006C8.64294 5.30393 8.71794 5.1283 8.87308 4.97316L11.3673 2.47894C11.5481 2.29815 11.759 2.20776 12 2.20776C12.241 2.20776 12.4519 2.29815 12.6327 2.47891L15.1269 4.97314C15.2653 5.11161 15.3362 5.28307 15.3394 5.48754C15.3426 5.69202 15.2718 5.87183 15.1269 6.02696C14.9718 6.18208 14.7936 6.25964 14.5923 6.25964C14.391 6.25964 14.2128 6.18208 14.0577 6.02696L12.7499 4.71924V15C12.7499 15.2128 12.6782 15.391 12.5346 15.5346C12.391 15.6782 12.2128 15.75 12 15.75C11.7872 15.75 11.609 15.6782 11.4654 15.5346C11.3218 15.391 11.25 15.2128 11.25 15V4.71924V4.71926Z" />
	</svg>
);

const IconKeyboardArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M11.9999 14.6769C11.8794 14.6769 11.7672 14.6577 11.6634 14.6192C11.5595 14.5807 11.4608 14.5147 11.3672 14.4211L6.87301 9.92689C6.73454 9.78844 6.66371 9.6144 6.66051 9.40479C6.65729 9.19519 6.72812 9.01795 6.87301 8.87309C7.01787 8.7282 7.1935 8.65576 7.3999 8.65576C7.6063 8.65576 7.78194 8.7282 7.9268 8.87309L11.9999 12.9462L16.073 8.87309C16.2115 8.73462 16.3855 8.66379 16.5951 8.66059C16.8047 8.65737 16.9819 8.7282 17.1268 8.87309C17.2717 9.01795 17.3441 9.19359 17.3441 9.39999C17.3441 9.60639 17.2717 9.78202 17.1268 9.92689L12.6326 14.4211C12.539 14.5147 12.4403 14.5807 12.3364 14.6192C12.2326 14.6577 12.1204 14.6769 11.9999 14.6769Z" />
	</svg>
);

const IconPeople = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M11.9998 18.3333C8.87984 18.3333 2.6665 19.8933 2.6665 23V25.3333H21.3332V23C21.3332 19.8933 15.1198 18.3333 11.9998 18.3333ZM5.7865 22.6666C6.9065 21.8933 9.61317 21 11.9998 21C14.3865 21 17.0932 21.8933 18.2132 22.6666H5.7865ZM11.9998 16C14.5732 16 16.6665 13.9066 16.6665 11.3333C16.6665 8.75996 14.5732 6.66663 11.9998 6.66663C9.4265 6.66663 7.33317 8.75996 7.33317 11.3333C7.33317 13.9066 9.4265 16 11.9998 16ZM11.9998 9.33329C13.1065 9.33329 13.9998 10.2266 13.9998 11.3333C13.9998 12.44 13.1065 13.3333 11.9998 13.3333C10.8932 13.3333 9.99984 12.44 9.99984 11.3333C9.99984 10.2266 10.8932 9.33329 11.9998 9.33329ZM21.3865 18.4133C22.9332 19.5333 23.9998 21.0266 23.9998 23V25.3333H29.3332V23C29.3332 20.3066 24.6665 18.7733 21.3865 18.4133ZM19.9998 16C22.5732 16 24.6665 13.9066 24.6665 11.3333C24.6665 8.75996 22.5732 6.66663 19.9998 6.66663C19.2798 6.66663 18.6132 6.83996 17.9998 7.13329C18.8398 8.31996 19.3332 9.77329 19.3332 11.3333C19.3332 12.8933 18.8398 14.3466 17.9998 15.5333C18.6132 15.8266 19.2798 16 19.9998 16Z" />
	</svg>
);

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
					<IconKeyboardArrowDown />
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
					<IconKeyboardArrowDown />
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
					<IconKeyboardArrowDown />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item onSelect={() => console.log('Copy')}>
						<IconContentCopy />
						Copy
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item
						onSelect={() => console.log('Delete')}
						className="data-[highlighted]:bg-red-100">
						<IconDelete className="[&>path]:fill-red-500" />
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
					<IconKeyboardArrowDown />
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
					<IconKeyboardArrowDown />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item onSelect={() => console.log('New File')}>New File</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Open')}>Open</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<IconIosShare />
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
							<IconDriveFileMove />
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
						<IconDelete className="[&>path]:fill-red-500" />
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
					<IconKeyboardArrowDown />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Label>Organization</DropdownMenu.Label>
					<DropdownMenu.Item onSelect={() => console.log('Dashboard')}>Dashboard</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<IconPeople />
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
					<IconKeyboardArrowDown />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item onSelect={() => console.log('View')}>View</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => console.log('Edit')}>Edit</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<IconContentCopy />
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
							<IconIosShare />
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
