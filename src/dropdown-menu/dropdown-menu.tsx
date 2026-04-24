'use client';

import { ComponentProps } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type VariantProps, tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { IconArrowRight } from './icons';

/**
 * Props for the DropdownMenu Root component.
 *
 * @property {boolean} [defaultOpen] - The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.
 * @property {boolean} [open] - The controlled open state of the dropdown menu. Must be used in conjunction with onOpenChange.
 * @property {(open: boolean) => void} [onOpenChange] - Event handler called when the open state of the dropdown menu changes.
 * @property {boolean} [modal=true] - The modality of the dropdown menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers.
 * @property {'ltr' | 'rtl'} [dir] - The reading direction of the dropdown menu when applicable. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.
 */
type RootProps = ComponentProps<typeof DropdownMenuPrimitive.Root>;

/**
 * Root container that holds every part of a DropdownMenu. Owns the open
 * state (controlled via `open`/`onOpenChange` or uncontrolled via
 * `defaultOpen`) and must wrap Trigger, Portal, and Content.
 *
 * @summary Root provider for a DropdownMenu's open state
 *
 * @example
 * ```tsx
 * <DropdownMenu.Root>
 *   <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
 *   <DropdownMenu.Portal>
 *     <DropdownMenu.Content>
 *       <DropdownMenu.Item>Item 1</DropdownMenu.Item>
 *     </DropdownMenu.Content>
 *   </DropdownMenu.Portal>
 * </DropdownMenu.Root>
 * ```
 */
const Root = (props: RootProps) => (
	<DropdownMenuPrimitive.Root data-slot="dropdown-menu-root" {...props} />
);
Root.displayName = 'DropdownMenu.Root';

/**
 * Props for the DropdownMenu Trigger component.
 *
 * @property {boolean} [asChild=false] - Change the default rendered element for the one passed as a child, merging their props and behavior.
 * @property {string} [className] - Additional CSS classes to apply to the trigger.
 *
 * @dataAttribute {string} data-state - "open" | "closed"
 * @dataAttribute {string} data-disabled - Present when disabled
 */
type TriggerProps = ComponentProps<typeof DropdownMenuPrimitive.Trigger>;

/**
 * Button that toggles the DropdownMenu open/closed. Pass `asChild` to
 * delegate rendering to a custom element (e.g. a `Button`) while inheriting
 * Radix's accessibility wiring.
 *
 * @summary Toggle button that opens the DropdownMenu
 *
 * @example
 * ```tsx
 * <DropdownMenu.Trigger asChild>
 *   <Button variant="secondary">Open</Button>
 * </DropdownMenu.Trigger>
 * ```
 */
const Trigger = ({ className, ...props }: TriggerProps) => (
	<DropdownMenuPrimitive.Trigger
		data-slot="dropdown-menu-trigger"
		className={cn('cursor-pointer outline-none focus:outline-none', className)}
		{...props}
	/>
);
Trigger.displayName = 'DropdownMenu.Trigger';

/**
 * Portals Content out of the DOM subtree to `document.body` (or a custom
 * `container`) so the menu escapes ancestor `overflow:hidden` and z-index
 * stacking contexts. Always wrap `Content` and `SubContent` in a Portal.
 *
 * @summary Portals DropdownMenu content to the body to escape stacking contexts
 *
 * @property {boolean} [forceMount] - Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
 * @property {HTMLElement} [container=document.body] - Specify a container element to portal the content into.
 *
 * @example
 * ```tsx
 * <DropdownMenu.Portal>
 *   <DropdownMenu.Content>...</DropdownMenu.Content>
 * </DropdownMenu.Portal>
 * ```
 */
const Portal = DropdownMenuPrimitive.Portal;

/**
 * Tailwind variant styles for the dropdown menu content.
 * Includes animations for slide-in/out based on the side from which the menu appears.
 */
const contentStyles = tv({
	base: [
		'z-[1000] flex flex-col rounded-lg bg-white p-1 shadow-xl',
		'border border-gray-100',
		'will-change-[transform,opacity]',
		'data-[state=open]:animate-[dropdownSlideIn_200ms_ease-out]',
		'data-[state=closed]:animate-[dropdownSlideOut_150ms_ease-in]',
		'data-[side=bottom]:origin-top',
		'data-[side=left]:origin-right',
		'data-[side=right]:origin-left',
		'data-[side=top]:origin-bottom',
		'data-[side=bottom]:animate-[dropdownSlideInFromTop_200ms_ease-out]',
		'data-[side=left]:animate-[dropdownSlideInFromRight_200ms_ease-out]',
		'data-[side=right]:animate-[dropdownSlideInFromLeft_200ms_ease-out]',
		'data-[side=top]:animate-[dropdownSlideInFromBottom_200ms_ease-out]'
	],
	variants: {
		hasTriggerWidth: {
			true: 'w-[var(--radix-dropdown-menu-trigger-width)]'
		}
	}
});

/**
 * Props for the DropdownMenu Content component.
 *
 * @property {boolean} [loop=false] - When true, keyboard navigation will loop from last item to first, and vice versa.
 * @property {'ltr' | 'rtl'} [dir] - The reading direction. If omitted, inherits from DirectionProvider or assumes LTR.
 * @property {'top' | 'right' | 'bottom' | 'left'} [side='bottom'] - The preferred side of the trigger to render against when open.
 * @property {number} [sideOffset=8] - The distance in pixels from the trigger.
 * @property {'start' | 'center' | 'end'} [align='center'] - The preferred alignment against the trigger.
 * @property {number} [alignOffset=0] - An offset in pixels from the "start" or "end" alignment options.
 * @property {boolean} [avoidCollisions=true] - When true, overrides side and align to prevent collisions with boundary edges.
 * @property {Element | null} [collisionBoundary] - The element used as the collision boundary.
 * @property {number} [collisionPadding=0] - The distance in pixels from the boundary edges where collision detection should occur.
 * @property {boolean} [hasTriggerWidth=false] - When true, sets the content width to match the trigger width using CSS variable.
 * @property {string} [className] - Additional CSS classes to apply.
 *
 * @dataAttribute {string} data-state - "open" | "closed"
 * @dataAttribute {string} data-side - "top" | "right" | "bottom" | "left"
 * @dataAttribute {string} data-align - "start" | "end" | "center"
 *
 * @cssVariable --radix-dropdown-menu-content-transform-origin - The transform origin based on content side
 * @cssVariable --radix-dropdown-menu-trigger-width - The width of the trigger element
 * @cssVariable --radix-dropdown-menu-content-available-width - The available width before overflow
 * @cssVariable --radix-dropdown-menu-content-available-height - The available height before overflow
 */
type ContentProps = ComponentProps<typeof DropdownMenuPrimitive.Content> &
	VariantProps<typeof contentStyles>;

/**
 * Floating surface that holds the menu items. Animates on open/close
 * (direction follows `side`), performs collision detection so the menu
 * stays within the viewport, and — when `hasTriggerWidth` is `true` —
 * matches the trigger's width. Defaults: `sideOffset` is `8`,
 * `hasTriggerWidth` is `false`.
 *
 * @summary Animated popover surface that contains the menu items
 *
 * @example
 * ```tsx
 * <DropdownMenu.Content side="bottom" align="end" sideOffset={8}>
 *   <DropdownMenu.Item>Edit</DropdownMenu.Item>
 *   <DropdownMenu.Item>Delete</DropdownMenu.Item>
 * </DropdownMenu.Content>
 * ```
 */
const Content = ({
	className,
	hasTriggerWidth = false,
	sideOffset = 8,
	...props
}: ContentProps) => (
	<DropdownMenuPrimitive.Content
		data-slot="dropdown-menu-content"
		sideOffset={sideOffset}
		className={contentStyles({ hasTriggerWidth, className })}
		{...props}
	/>
);
Content.displayName = 'DropdownMenu.Content';

/**
 * Props for the DropdownMenu Item component.
 *
 * @property {boolean} [disabled] - When true, prevents the user from interacting with the item.
 * @property {(event: Event) => void} [onSelect] - Event handler called when the user selects an item (via mouse or keyboard).
 * @property {string} [textValue] - Optional text used for typeahead purposes. By default, the typeahead behavior will use the .textContent of the item.
 * @property {string} [className] - Additional CSS classes to apply.
 *
 * @dataAttribute {string} data-highlighted - Present when highlighted via keyboard navigation or hover
 * @dataAttribute {string} data-disabled - Present when disabled
 */
type ItemProps = ComponentProps<typeof DropdownMenuPrimitive.Item>;

/**
 * Selectable row inside the menu. Fires `onSelect` on click or keyboard
 * activation; passing `disabled` greys the row and blocks interaction. Any
 * leading `<svg>` is sized to 24px and tinted with the tertiary icon token.
 *
 * @summary Selectable menu row with hover + disabled styling
 *
 * @example
 * ```tsx
 * <DropdownMenu.Item onSelect={() => handleEdit()}>
 *   <IconEdit />
 *   Edit
 * </DropdownMenu.Item>
 *
 * <DropdownMenu.Item disabled>
 *   <IconDelete />
 *   Delete (unavailable)
 * </DropdownMenu.Item>
 * ```
 */
const Item = ({ className, ...props }: ItemProps) => (
	<DropdownMenuPrimitive.Item
		data-slot="dropdown-menu-item"
		className={cn(
			'flex items-center gap-2 bg-white px-3 py-1.75 text-sm text-gray-700',
			'cursor-pointer rounded-md no-underline transition-colors outline-none',
			'min-w-[10rem]',
			'data-[highlighted]:bg-bg-button-ghost-hover',
			'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed',
			'data-[disabled]:text-gray-400',
			'data-[disabled]:active:bg-white',
			'[&>svg]:h-6',
			'[&_path]:fill-icon-default-base-tertiary',
			className
		)}
		{...props}
	/>
);
Item.displayName = 'DropdownMenu.Item';

/**
 * Props for the DropdownMenu Separator component.
 *
 * @property {string} [className] - Additional CSS classes to apply.
 */
type SeparatorProps = ComponentProps<typeof DropdownMenuPrimitive.Separator>;

/**
 * Full-width horizontal rule that visually groups menu items — e.g. between
 * an edit cluster and a destructive action. Extends past the content
 * padding so the line meets the menu's edges.
 *
 * @summary Horizontal divider between groups of menu items
 *
 * @example
 * ```tsx
 * <DropdownMenu.Item>Edit</DropdownMenu.Item>
 * <DropdownMenu.Separator />
 * <DropdownMenu.Item>Delete</DropdownMenu.Item>
 * ```
 */
const Separator = ({ className, ...props }: SeparatorProps) => (
	<DropdownMenuPrimitive.Separator
		data-slot="dropdown-menu-divider"
		className={cn('-mx-1 my-1 w-[calc(100%+0.5rem)] border-t border-gray-100', className)}
		{...props}
	/>
);
Separator.displayName = 'DropdownMenu.Separator';

/**
 * Props for the DropdownMenu Label component.
 *
 * @property {string} [className] - Additional CSS classes to apply.
 */
type LabelProps = ComponentProps<typeof DropdownMenuPrimitive.Label>;

/**
 * Non-interactive section heading. Use to label grouped items (e.g.
 * "Profile", "Settings"). Not focusable and not announced as an item — the
 * text reads as a group label to assistive tech.
 *
 * @summary Non-interactive section heading for grouped menu items
 *
 * @example
 * ```tsx
 * <DropdownMenu.Label>Account Actions</DropdownMenu.Label>
 * <DropdownMenu.Item>Profile</DropdownMenu.Item>
 * <DropdownMenu.Item>Settings</DropdownMenu.Item>
 * <DropdownMenu.Separator />
 * <DropdownMenu.Label>Danger Zone</DropdownMenu.Label>
 * <DropdownMenu.Item>Delete Account</DropdownMenu.Item>
 * ```
 */
const Label = ({ className, ...props }: LabelProps) => (
	<DropdownMenuPrimitive.Label
		data-slot="dropdown-menu-label"
		className={cn('px-3 py-1 text-xs text-gray-500', className)}
		{...props}
	/>
);
Label.displayName = 'DropdownMenu.Label';

/**
 * Props for the DropdownMenu Sub component.
 *
 * @property {boolean} [defaultOpen] - The open state of the submenu when it is initially rendered. Use when you do not need to control its open state.
 * @property {boolean} [open] - The controlled open state of the submenu. Must be used in conjunction with onOpenChange.
 * @property {(open: boolean) => void} [onOpenChange] - Event handler called when the open state of the submenu changes.
 */
type SubProps = ComponentProps<typeof DropdownMenuPrimitive.Sub>;

/**
 * Wrapper that groups a `SubTrigger` with its own `Portal` + `SubContent`.
 * Lives inside a parent `Content`. Use sparingly — nest only when the extra
 * depth meaningfully chunks actions; otherwise prefer a flat menu.
 *
 * @summary Groups a submenu's trigger and content
 *
 * @example
 * ```tsx
 * <DropdownMenu.Sub>
 *   <DropdownMenu.SubTrigger>More Options</DropdownMenu.SubTrigger>
 *   <DropdownMenu.Portal>
 *     <DropdownMenu.SubContent>
 *       <DropdownMenu.Item>Sub Item 1</DropdownMenu.Item>
 *       <DropdownMenu.Item>Sub Item 2</DropdownMenu.Item>
 *     </DropdownMenu.SubContent>
 *   </DropdownMenu.Portal>
 * </DropdownMenu.Sub>
 * ```
 */
const Sub = (props: SubProps) => (
	<DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
);
Sub.displayName = 'DropdownMenu.Sub';

/**
 * Props for the DropdownMenu SubTrigger component.
 *
 * @property {boolean} [disabled] - When true, prevents the user from interacting with the item.
 * @property {string} [textValue] - Optional text used for typeahead purposes. By default, the typeahead behavior will use the .textContent of the item.
 * @property {string} [className] - Additional CSS classes to apply.
 *
 * @dataAttribute {string} data-state - "open" | "closed"
 * @dataAttribute {string} data-highlighted - Present when highlighted via keyboard navigation or hover
 * @dataAttribute {string} data-disabled - Present when disabled
 */
type SubTriggerProps = ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>;

/**
 * Row inside a parent `Content` that opens its submenu on hover or keyboard
 * activation. Renders a trailing right-arrow affordance so the nested
 * menu's existence is visible to users.
 *
 * @summary Submenu-opening menu row with a trailing arrow affordance
 *
 * @example
 * ```tsx
 * <DropdownMenu.Sub>
 *   <DropdownMenu.SubTrigger>
 *     <IconFolder />
 *     Move to folder
 *   </DropdownMenu.SubTrigger>
 *   <DropdownMenu.Portal>
 *     <DropdownMenu.SubContent>
 *       <DropdownMenu.Item>Folder 1</DropdownMenu.Item>
 *       <DropdownMenu.Item>Folder 2</DropdownMenu.Item>
 *     </DropdownMenu.SubContent>
 *   </DropdownMenu.Portal>
 * </DropdownMenu.Sub>
 * ```
 */
const SubTrigger = ({ className, children, ...props }: SubTriggerProps) => (
	<DropdownMenuPrimitive.SubTrigger
		data-slot="dropdown-menu-sub-trigger"
		className={cn(
			'flex items-center gap-2 bg-white px-3 py-1.75 text-sm text-gray-700',
			'cursor-pointer rounded-md no-underline transition-colors outline-none',
			'min-w-[10rem]',
			'data-[highlighted]:bg-bg-button-ghost-hover',
			'data-[state=open]:bg-bg-button-ghost-hover',
			'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed',
			'data-[disabled]:text-gray-400',
			'[&>svg]:h-6',
			'[&_path]:fill-icon-default-base-tertiary',
			className
		)}
		{...props}>
		{children}
		<IconArrowRight className="ml-auto h-4 w-4 [&>path]:fill-icon-default-base-tertiary" />
	</DropdownMenuPrimitive.SubTrigger>
);
SubTrigger.displayName = 'DropdownMenu.SubTrigger';

/**
 * Tailwind variant styles for the dropdown menu sub-content.
 * Similar to content styles but with different animation origins for nested menus.
 */
const subContentStyles = tv({
	base: [
		'z-[1000] flex flex-col rounded-lg bg-white p-1 shadow-xl',
		'border border-gray-100',
		'will-change-[transform,opacity]',
		'data-[state=open]:animate-[dropdownSlideIn_200ms_ease-out]',
		'data-[state=closed]:animate-[dropdownSlideOut_150ms_ease-in]',
		'data-[side=bottom]:origin-top',
		'data-[side=left]:origin-right',
		'data-[side=right]:origin-left',
		'data-[side=top]:origin-bottom',
		'data-[side=bottom]:animate-[dropdownSlideInFromTop_200ms_ease-out]',
		'data-[side=left]:animate-[dropdownSlideInFromRight_200ms_ease-out]',
		'data-[side=right]:animate-[dropdownSlideInFromLeft_200ms_ease-out]',
		'data-[side=top]:animate-[dropdownSlideInFromBottom_200ms_ease-out]'
	]
});

/**
 * Props for the DropdownMenu SubContent component.
 *
 * @property {boolean} [loop=false] - When true, keyboard navigation will loop from last item to first, and vice versa.
 * @property {number} [sideOffset=2] - The distance in pixels from the trigger.
 * @property {number} [alignOffset=-5] - An offset in pixels from the "start" or "end" alignment options.
 * @property {boolean} [avoidCollisions=true] - When true, overrides side and align to prevent collisions with boundary edges.
 * @property {Element | null} [collisionBoundary] - The element used as the collision boundary.
 * @property {number} [collisionPadding=0] - The distance in pixels from the boundary edges where collision detection should occur.
 * @property {string} [className] - Additional CSS classes to apply.
 *
 * @dataAttribute {string} data-state - "open" | "closed"
 * @dataAttribute {string} data-side - "top" | "right" | "bottom" | "left"
 * @dataAttribute {string} data-align - "start" | "end" | "center"
 *
 * @cssVariable --radix-dropdown-menu-content-transform-origin - The transform origin based on content side
 * @cssVariable --radix-dropdown-menu-content-available-width - The available width before overflow
 * @cssVariable --radix-dropdown-menu-content-available-height - The available height before overflow
 */
type SubContentProps = ComponentProps<typeof DropdownMenuPrimitive.SubContent>;

/**
 * Floating surface for a submenu's items. Positions itself alongside its
 * `SubTrigger` with sensible defaults (`sideOffset: 2`, `alignOffset: -5`)
 * and animates on open/close just like `Content`.
 *
 * @summary Popover surface that renders a submenu's items
 *
 * @example
 * ```tsx
 * <DropdownMenu.Sub>
 *   <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
 *   <DropdownMenu.Portal>
 *     <DropdownMenu.SubContent sideOffset={2} alignOffset={-5}>
 *       <DropdownMenu.Item>Email</DropdownMenu.Item>
 *       <DropdownMenu.Item>Slack</DropdownMenu.Item>
 *       <DropdownMenu.Item>Copy Link</DropdownMenu.Item>
 *     </DropdownMenu.SubContent>
 *   </DropdownMenu.Portal>
 * </DropdownMenu.Sub>
 * ```
 */
const SubContent = ({ className, sideOffset = 2, alignOffset = -5, ...props }: SubContentProps) => (
	<DropdownMenuPrimitive.SubContent
		data-slot="dropdown-menu-sub-content"
		sideOffset={sideOffset}
		alignOffset={alignOffset}
		className={subContentStyles({ className })}
		{...props}
	/>
);
SubContent.displayName = 'DropdownMenu.SubContent';

/**
 * DropdownMenu is the compound component for attaching a menu of secondary
 * actions to a button or icon trigger — edit/duplicate/delete rows, account
 * menus, overflow affordances, and nested submenus. Built on Radix UI's
 * DropdownMenu primitive, so keyboard navigation, focus trapping, typeahead,
 * and viewport-collision detection come for free.
 *
 * Compose it from `Root` / `Trigger` / `Portal` / `Content` and fill the
 * menu with `Item`, `Separator`, `Label`, and — for nested flows — `Sub` /
 * `SubTrigger` / `SubContent`. Wrap content in `Portal` so the menu escapes
 * ancestor `overflow:hidden` and z-index stacking contexts.
 *
 * Do **not** use DropdownMenu for primary navigation (use a real nav menu),
 * for single-choice form input (use a `Select`), or for command palettes
 * (use a dedicated command component). For radio/checkbox-style toggles,
 * use Radix's `CheckboxItem` / `RadioItem` primitives directly — those
 * parts are not exposed here yet.
 *
 * @summary Compound overlay menu for secondary actions, grouped items, and submenus
 *
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu|Radix UI DropdownMenu}
 *
 * @example
 * ```tsx
 * import { DropdownMenu } from '@agentero/design-system/dropdown-menu';
 *
 * <DropdownMenu.Root>
 *   <DropdownMenu.Trigger>
 *     <IconMoreVert />
 *   </DropdownMenu.Trigger>
 *
 *   <DropdownMenu.Portal>
 *     <DropdownMenu.Content side="bottom" align="end">
 *       <DropdownMenu.Label>Actions</DropdownMenu.Label>
 *
 *       <DropdownMenu.Item onSelect={() => handleEdit()}>
 *         <IconEdit />
 *         Edit
 *       </DropdownMenu.Item>
 *
 *       <DropdownMenu.Sub>
 *         <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
 *         <DropdownMenu.Portal>
 *           <DropdownMenu.SubContent>
 *             <DropdownMenu.Item>Email</DropdownMenu.Item>
 *             <DropdownMenu.Item>Slack</DropdownMenu.Item>
 *           </DropdownMenu.SubContent>
 *         </DropdownMenu.Portal>
 *       </DropdownMenu.Sub>
 *
 *       <DropdownMenu.Separator />
 *
 *       <DropdownMenu.Item
 *         onSelect={() => handleDelete()}
 *         disabled={!canDelete}
 *       >
 *         <IconDelete />
 *         Delete
 *       </DropdownMenu.Item>
 *     </DropdownMenu.Content>
 *   </DropdownMenu.Portal>
 * </DropdownMenu.Root>
 * ```
 *
 * @component
 * @namespace DropdownMenu
 */
export const DropdownMenu = {
	/**
	 * The root container component for the dropdown menu.
	 * @see {@link Root}
	 */
	Root,
	/**
	 * The button that toggles the dropdown menu.
	 * @see {@link Trigger}
	 */
	Trigger,
	/**
	 * Portals the content to the body element.
	 * @see {@link Portal}
	 */
	Portal,
	/**
	 * The popup component containing menu items.
	 * @see {@link Content}
	 */
	Content,
	/**
	 * An individual menu item.
	 * @see {@link Item}
	 */
	Item,
	/**
	 * A visual divider between menu items.
	 * @see {@link Separator}
	 */
	Separator,
	/**
	 * A non-interactive label for menu sections.
	 * @see {@link Label}
	 */
	Label,
	/**
	 * Container for submenu parts.
	 * @see {@link Sub}
	 */
	Sub,
	/**
	 * An item that opens a submenu.
	 * @see {@link SubTrigger}
	 */
	SubTrigger,
	/**
	 * The popup component for submenu items.
	 * @see {@link SubContent}
	 */
	SubContent
};
