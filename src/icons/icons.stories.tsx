import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	ArrowUpDownIcon,
	ArrowUpIcon,
	BellIcon,
	CheckIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CircleAlertIcon,
	CircleCheckIcon,
	DownloadIcon,
	EllipsisIcon,
	EyeIcon,
	EyeOffIcon,
	InfoIcon,
	PlusIcon,
	SearchIcon,
	StarIcon,
	Trash2Icon,
	TriangleAlertIcon,
	XIcon
} from 'lucide-react';

import { Button } from '../button';
import * as custom from './custom';

/**
 * Icons ship with the design system. `lucide-react` is a runtime dependency
 * here and reaches consumers through the `@agentero/design-system/icons`
 * subpath, so nothing is declared or versioned on the consumer side.
 *
 * There is no wrapper component and no size scale: a lucide icon is a plain
 * SVG that takes `className`, so Tailwind already does the job — `size-*` for
 * size, a `text-*` token for color, `shrink-0` when it sits next to text in a
 * flex row. The stroke is 1.5, as the Figma library draws it: the theme sets
 * it on every `svg.lucide`, so don't pass `strokeWidth` (the prop loses to that
 * rule); put a `stroke-*` class on the icon when one really needs another.
 *
 * Always import the `*Icon` form. Lucide also exports bare names such as `Tag`,
 * `Table` and `Command` that collide with design-system components, so an
 * auto-import on the bare name lands on the icon.
 *
 * ```tsx
 * import { ChevronRightIcon } from '@agentero/design-system/icons';
 *
 * <ChevronRightIcon className="size-4 shrink-0 text-icon-default-base-secondary" />
 * ```
 *
 * @summary How to size and color icons, and the set the components use
 */
const meta: Meta = {
	title: 'Foundations/Icons',
	parameters: {
		layout: 'padded'
	},
	tags: ['autodocs', '!manifest']
};

export default meta;
type Story = StoryObj;

/**
 * Size comes from a `size-*` class on the icon. The design system imposes no
 * scale — components pick the size that fits their own density.
 *
 * @summary Sizing icons with Tailwind classes
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex items-end gap-8 text-icon-default-base-primary">
			{['size-3.5', 'size-4', 'size-5', 'size-6'].map(size => (
				<div key={size} className="flex flex-col items-center gap-2">
					<ChevronRightIcon className={size} />
					<span className="text-xs text-text-default-base-tertiary">{size}</span>
				</div>
			))}
		</div>
	)
};

/**
 * Lucide paints with `stroke="currentColor"` and leaves `fill` empty, so color
 * comes from a `text-*` token — **not** from `fill-*`, which is what the old
 * inlined Material glyphs used and which does nothing here.
 *
 * @summary Color through text tokens, not fill
 */
export const Colors: Story = {
	render: () => (
		<div className="flex gap-8">
			{[
				{ token: 'text-icon-default-base-primary', Icon: BellIcon, label: 'primary' },
				{ token: 'text-icon-default-base-secondary', Icon: BellIcon, label: 'secondary' },
				{ token: 'text-icon-default-base-tertiary', Icon: BellIcon, label: 'tertiary' },
				{ token: 'text-icon-default-danger-primary', Icon: TriangleAlertIcon, label: 'danger' },
				{ token: 'text-icon-default-positive-primary', Icon: CircleCheckIcon, label: 'positive' }
			].map(({ token, Icon, label }) => (
				<div key={label} className={`flex flex-col items-center gap-2 ${token}`}>
					<Icon className="size-5" />
					<span className="text-xs text-text-default-base-tertiary">{label}</span>
				</div>
			))}
		</div>
	)
};

/**
 * The icons the components themselves render, with the name each one replaced.
 * The Checkbox check and minus, and the Combobox row check that mirrors them,
 * are not here: they are the Figma Base Checkbox glyphs, kept as local SVGs.
 * Use this page to check a swap before reaching for a different lucide glyph.
 *
 * @summary The set the design system renders internally
 */
export const InComponents: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-4 text-icon-default-base-primary sm:grid-cols-4">
			{[
				{ Icon: ChevronRightIcon, name: 'ChevronRightIcon', where: 'Pagination, DropdownMenu' },
				{ Icon: ChevronLeftIcon, name: 'ChevronLeftIcon', where: 'Pagination' },
				{ Icon: ChevronDownIcon, name: 'ChevronDownIcon', where: 'Accordion, Combobox, Table' },
				{ Icon: CheckIcon, name: 'CheckIcon', where: 'CheckList' },
				{ Icon: XIcon, name: 'XIcon', where: 'Alert, Modal, Toast' },
				{ Icon: SearchIcon, name: 'SearchIcon', where: 'Command, Combobox, InputSearch' },
				{
					Icon: custom.CircleXFilledIcon,
					name: 'CircleXFilledIcon',
					where: 'Combobox, InputSearch clear'
				},
				{ Icon: EyeIcon, name: 'EyeIcon', where: 'InputPassword' },
				{ Icon: EyeOffIcon, name: 'EyeOffIcon', where: 'InputPassword' },
				{ Icon: ArrowUpIcon, name: 'ArrowUpIcon', where: 'DataTable sorted' },
				{ Icon: ArrowUpDownIcon, name: 'ArrowUpDownIcon', where: 'DataTable sortable' },
				{ Icon: EllipsisIcon, name: 'EllipsisIcon', where: 'Pagination ellipsis' },
				{ Icon: CircleCheckIcon, name: 'CircleCheckIcon', where: 'Alert' },
				{ Icon: CircleAlertIcon, name: 'CircleAlertIcon', where: 'Alert' },
				{ Icon: TriangleAlertIcon, name: 'TriangleAlertIcon', where: 'Alert' },
				{ Icon: InfoIcon, name: 'InfoIcon', where: 'Alert, Field' },
				{ Icon: custom.CircleCheckFilledIcon, name: 'CircleCheckFilledIcon', where: 'Toast' },
				{ Icon: custom.CircleAlertFilledIcon, name: 'CircleAlertFilledIcon', where: 'Toast' },
				{ Icon: custom.TriangleAlertFilledIcon, name: 'TriangleAlertFilledIcon', where: 'Toast' },
				{ Icon: custom.InfoFilledIcon, name: 'InfoFilledIcon', where: 'Toast' },
				{ Icon: StarIcon, name: 'StarIcon', where: 'Alert creative' }
			].map(({ Icon, name, where }) => (
				<div key={name} className="flex items-start gap-2">
					<Icon className="size-5 shrink-0" />
					<span className="flex flex-col text-xs">
						<span className="text-text-default-base-primary">{name}</span>
						<span className="text-text-default-base-tertiary">{where}</span>
					</span>
				</div>
			))}
		</div>
	)
};

/**
 * Glyphs the Figma library draws and lucide doesn't ship. They come from the same
 * subpath and behave like any lucide icon: `size-*`, a `text-*` token, and the
 * filled ones paint with `currentColor` too.
 *
 * @summary Icons the design system adds to lucide
 */
export const Custom: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-4 text-icon-default-base-primary sm:grid-cols-4">
			{Object.entries(custom).map(([name, Icon]) => (
				<div key={name} className="flex items-center gap-2">
					<Icon className="size-5 shrink-0" />
					<span className="text-xs text-text-default-base-primary">{name}</span>
				</div>
			))}
		</div>
	)
};

/**
 * Next to text: `size-*` to match the line, `shrink-0` so the flex row can't
 * squash it, and no color of its own so it follows the parent's token. Inside a
 * Button none of that is needed: the recipe sizes the icon and colors it.
 *
 * @summary Icon composed with text
 */
export const InComposition: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Button>
				<PlusIcon />
				Create agent
			</Button>
			<span className="flex items-center gap-2 text-sm text-text-default-base-secondary">
				<DownloadIcon className="size-4 shrink-0" />
				Download report
			</span>
			<span className="flex items-center gap-2 text-sm text-text-default-danger-primary">
				<Trash2Icon className="size-4 shrink-0" />
				Delete
			</span>
		</div>
	)
};
