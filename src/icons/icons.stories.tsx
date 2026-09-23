import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	ArrowUpIcon,
	BellIcon,
	CheckIcon,
	ChevronRightIcon,
	CircleAlertIcon,
	CircleCheckIcon,
	CircleXIcon,
	DownloadIcon,
	EllipsisIcon,
	InfoIcon,
	PlusIcon,
	SearchIcon,
	StarIcon,
	Trash2Icon,
	TriangleAlertIcon,
	XIcon
} from 'lucide-react';

/**
 * Icons ship with the design system. `lucide-react` is a runtime dependency
 * here and reaches consumers through the `@agentero/design-system/icons`
 * subpath, so nothing is declared or versioned on the consumer side.
 *
 * There is no wrapper component and no size scale: a lucide icon is a plain
 * SVG that takes `className`, so Tailwind already does the job — `size-*` for
 * size, a `text-*` token for color, `shrink-0` when it sits next to text in a
 * flex row.
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
	tags: ['autodocs']
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
 * Use this page to check a swap before reaching for a different lucide glyph.
 *
 * @summary The set the design system renders internally
 */
export const InComponents: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-4 text-icon-default-base-primary sm:grid-cols-4">
			{[
				{ Icon: ChevronRightIcon, name: 'ChevronRightIcon', where: 'Pagination, DropdownMenu' },
				{ Icon: CheckIcon, name: 'CheckIcon', where: 'Checkbox, CheckList' },
				{ Icon: XIcon, name: 'XIcon', where: 'Alert, Modal, Toast' },
				{ Icon: SearchIcon, name: 'SearchIcon', where: 'Command' },
				{ Icon: CircleXIcon, name: 'CircleXIcon', where: 'Combobox clear' },
				{ Icon: ArrowUpIcon, name: 'ArrowUpIcon', where: 'DataTable sort' },
				{ Icon: EllipsisIcon, name: 'EllipsisIcon', where: 'Pagination ellipsis' },
				{ Icon: CircleCheckIcon, name: 'CircleCheckIcon', where: 'Alert, Toast' },
				{ Icon: CircleAlertIcon, name: 'CircleAlertIcon', where: 'Alert, Toast' },
				{ Icon: TriangleAlertIcon, name: 'TriangleAlertIcon', where: 'Alert, Toast' },
				{ Icon: InfoIcon, name: 'InfoIcon', where: 'Alert, Toast, Field' },
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
 * Next to text: `size-*` to match the line, `shrink-0` so the flex row can't
 * squash it, and no color of its own so it follows the parent's token.
 *
 * @summary Icon composed with text
 */
export const InComposition: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<span className="flex items-center gap-2 rounded-full bg-bg-button-primary-enable px-4 py-2 text-sm text-text-button-primary-enable">
				<PlusIcon className="size-4 shrink-0" />
				Create agent
			</span>
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
