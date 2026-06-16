'use client';

import {
	ComponentProps,
	createContext,
	HTMLAttributes,
	PropsWithChildren,
	Ref,
	TdHTMLAttributes,
	use
} from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';
import { Button, ButtonProps } from '../button';
import { IconKeyboardArrowDown } from './icons';

/**
 * Inline padding shared by header and data cells. Both sides default to
 * `--table-cell-padding-inline`; the first/last cells override their
 * leading/trailing side with `--table-cell-padding-inline-ends`. Checkbox cells
 * collapse to zero width. Logical (`ps`/`pe`) so it mirrors under RTL.
 */
const CELL_INLINE_PADDING =
	'ps-[var(--table-cell-padding-inline)] pe-[var(--table-cell-padding-inline)] first:ps-[var(--table-cell-padding-inline-ends)] last:pe-[var(--table-cell-padding-inline-ends)] has-[[type=checkbox]]:w-0 has-[[type=checkbox]]:pe-0';

/**
 * Style recipe for the Table container. Owns only the `root` wrapper, the
 * `scroll` viewport, and the `<table>` element. The per-part styling (cell
 * padding, heights, sticky, dividers) is resolved once by `Table.Root` from the
 * header/cell/row recipes and shared with the parts via context. Spacing flows
 * from two custom properties set here (`--table-cell-padding-inline`,
 * `--table-cell-padding-inline-ends`), so a variant retunes spacing by
 * overriding two variables.
 *
 * @summary tailwind-variants recipe backing the Table container styles
 */
export const tableRecipe = tv({
	slots: {
		root: [
			'flex min-h-0 flex-1 flex-col overflow-hidden',
			'[--table-cell-padding-inline:1rem] [--table-cell-padding-inline-ends:1.5rem]'
		],
		scroll: 'min-h-0 flex-1 overflow-auto focus-visible:outline-none',
		table: 'w-full has-[[data-slot=table-empty-state]]:h-full'
	},
	variants: {
		size: {
			xxs: {
				root: '[--table-cell-padding-inline:0.125rem] [--table-cell-padding-inline-ends:0.25rem]'
			},
			xs: {},
			sm: {},
			md: {}
		},
		enclosed: {
			true: { root: 'rounded-md border border-border-default-base-primary' }
		},
		// For a table embedded in a padded page container: edge cells sit 1rem from
		// the table edge instead of the default 1.5rem gutter, so the table aligns
		// with the surrounding layout without page-level margin hacks.
		embed: {
			true: { root: '[--table-cell-padding-inline-ends:1rem]' }
		},
		clean: {
			true: {
				root: '[--table-cell-padding-inline-ends:1.25rem]',
				table: 'border-separate border-spacing-0'
			}
		},
		// Stickiness is applied per-part (header cells / last body row) via context.
		sticky: { header: {}, footer: {}, headerAndFooter: {} }
	},
	defaultVariants: {
		enclosed: true,
		size: 'md'
	}
});

type TableVariants = VariantProps<typeof tableRecipe>;

/**
 * Precomputed class strings for the table parts. `Table.Root` resolves every
 * recipe once and shares the result, so cells/rows read a string instead of
 * re-running `tv()` per element (the `avatar.tsx` pattern).
 */
type TableSlotClasses = { header: string; cell: string; headRow: string; bodyRow: string };

const TableContext = createContext<TableSlotClasses | null>(null);
const useTableSlots = () => {
	const ctx = use(TableContext);
	if (!ctx) {
		throw new Error('Table parts must be used within Table.Root');
	}
	return ctx;
};

/** Which section a `Table.Row` lives in, so a row picks the head/body class
 * instead of the `<tbody>` reaching into its rows with descendant selectors. */
const TableSectionContext = createContext<'head' | 'body'>('body');

const isHeaderSticky = (s: TableVariants['sticky']) => s === 'header' || s === 'headerAndFooter';
const isFooterSticky = (s: TableVariants['sticky']) => s === 'footer' || s === 'headerAndFooter';

export type TableRootProps = TableVariants & {
	maxHeight?: number;
	ref?: Ref<HTMLDivElement>;
};

/**
 * The outermost Table part. Renders the scroll viewport and the `<table>`
 * element, shares the active variants with the other parts via context, and
 * forwards `ref` to the scroll container so callers can scroll it
 * programmatically (e.g. to the top on page change). `maxHeight` (px) caps the
 * scroll viewport height.
 *
 * @summary Table root that owns the scroll viewport and `<table>` element
 */
const TableRoot = ({
	children,
	maxHeight,
	ref,
	...variants
}: PropsWithChildren<TableRootProps>) => {
	const { size, sticky, embed, clean } = variants;
	const styles = tableRecipe(variants);
	const slots: TableSlotClasses = {
		header: headerStyles({ size, sticky: isHeaderSticky(sticky), clean }),
		cell: cellStyles({ size, clean }),
		headRow: rowStyles({ body: false }),
		bodyRow: rowStyles({
			body: true,
			divider: !embed && !clean,
			stickyFooter: isFooterSticky(sticky)
		})
	};

	return (
		<TableContext value={slots}>
			<div data-slot="table-root" className={styles.root()}>
				<div
					data-slot="table-scroll"
					ref={ref}
					tabIndex={0}
					className={styles.scroll()}
					style={maxHeight ? { maxHeight: `${maxHeight / 16}rem` } : undefined}>
					<table data-slot="table" className={styles.table()}>
						{children}
					</table>
				</div>
			</div>
		</TableContext>
	);
};
TableRoot.displayName = 'Table.Root';

/**
 * The `<thead>` wrapper. Group your header `Table.Row` here so sticky-header
 * styling can target it.
 *
 * @summary `<thead>` wrapper for header rows
 */
const TableHead = ({
	children,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>) => (
	<TableSectionContext value="head">
		<thead data-slot="table-head" {...props}>
			{children}
		</thead>
	</TableSectionContext>
);
TableHead.displayName = 'Table.Head';

/**
 * The `<tbody>` wrapper. A plain section marker — the per-row treatment
 * (dividers, hover, sticky footer) lives on `Table.Row`, which reads the
 * section + variants from context.
 *
 * @summary `<tbody>` wrapper
 */
const TableBody = ({
	children,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>) => (
	<TableSectionContext value="body">
		<tbody data-slot="table-body" {...props}>
			{children}
		</tbody>
	</TableSectionContext>
);
TableBody.displayName = 'Table.Body';

const rowStyles = tv({
	base: 'transition-colors duration-150',
	variants: {
		// Body rows highlight on hover (except the empty-state row) and reveal any
		// nested Table.RowActions; header rows get none of this.
		body: {
			true: [
				'hover:bg-bg-default-base-secondary hover:has-[[data-slot=table-empty-state]]:bg-transparent',
				'[&:hover_[data-slot=table-row-actions]>*]:opacity-100',
				'[&:hover_[data-slot=table-row-actions]]:after:opacity-100'
			],
			false: ''
		},
		divider: { true: 'border-t border-border-default-base-primary', false: '' },
		// `last:` targets the final body row — the footer/totals row to pin.
		stickyFooter: {
			true: 'last:sticky last:bottom-0 last:z-[1] last:bg-bg-default-base-primary last:shadow-[0_-0.03125rem_0_0_var(--color-border-default-base-primary)]',
			false: ''
		}
	}
});

/**
 * A table row (`<tr>`). Use inside `Table.Head` for the header row and inside
 * `Table.Body` for data rows; body rows pick up dividers, hover, and the
 * sticky-footer treatment from the `Table.Root` variants automatically.
 *
 * @summary Table row element
 */
const TableRow = ({ className, ...props }: ComponentProps<'tr'>) => {
	const { headRow, bodyRow } = useTableSlots();
	const body = use(TableSectionContext) === 'body';
	return (
		<tr data-slot="table-row" className={cn(body ? bodyRow : headRow, className)} {...props} />
	);
};
TableRow.displayName = 'Table.Row';

const headerStyles = tv({
	base: `text-left align-middle text-sm font-light whitespace-nowrap text-text-default-base-tertiary ${CELL_INLINE_PADDING}`,
	variants: {
		size: { xxs: 'h-8 py-0.5', xs: 'h-8', sm: 'h-10', md: 'h-12' },
		sticky: {
			true: 'sticky top-0 z-[1] bg-bg-default-base-primary shadow-[0_0.03125rem_0_0_var(--color-border-default-base-primary)]',
			false: ''
		},
		clean: { true: 'first:rounded-l-xl last:rounded-r-xl', false: '' }
	},
	defaultVariants: { size: 'md' }
});

/**
 * A header cell (`<th>`). Renders the tertiary-colored, light-weight column
 * label; height, inline padding, and sticky behavior follow the `Table.Root`
 * variants.
 *
 * @summary Header cell element
 */
const TableHeader = ({
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLTableCellElement>>) => {
	const { header } = useTableSlots();
	return <th data-slot="table-header" className={cn(header, className)} {...props} />;
};
TableHeader.displayName = 'Table.Header';

const cellStyles = tv({
	base: `align-middle text-sm whitespace-nowrap ${CELL_INLINE_PADDING}`,
	variants: {
		size: { xxs: 'py-0.5', xs: 'py-2', sm: 'py-4', md: 'py-6' },
		clean: { true: 'first:rounded-l-xl last:rounded-r-xl', false: '' }
	},
	defaultVariants: { size: 'md' }
});

/**
 * A data cell (`<td>`). Vertical and inline padding follow the `Table.Root`
 * `size` variant.
 *
 * @summary Data cell element
 */
const TableCell = ({
	className,
	...props
}: PropsWithChildren<TdHTMLAttributes<HTMLTableCellElement>>) => {
	const { cell } = useTableSlots();
	return <td data-slot="table-cell" className={cn(cell, className)} {...props} />;
};
TableCell.displayName = 'Table.Cell';

const expandButtonStyles = tv({
	base: 'relative z-[1] [&>svg]:shrink-0 [&>svg]:transition-transform [&>svg]:duration-200 data-[state=open]:[&>svg]:rotate-180'
});

type TableExpandButtonProps = {
	toggleExpanded: () => void;
	isExpanded: boolean;
} & ButtonProps;

/**
 * Ghost icon button that toggles an expandable row open or closed. The chevron
 * rotates 180° while the row is expanded.
 *
 * @summary Expand/collapse toggle button for an expandable row
 */
const TableExpandButton = ({
	toggleExpanded,
	isExpanded,
	className,
	...props
}: TableExpandButtonProps) => (
	<Button
		variant="ghost"
		onClick={toggleExpanded}
		className={cn(expandButtonStyles(), className)}
		data-state={isExpanded ? 'open' : 'default'}
		data-slot="table-expand-button"
		{...props}>
		<IconKeyboardArrowDown />
	</Button>
);
TableExpandButton.displayName = 'Table.ExpandButton';

/**
 * A full-width detail row revealed beneath its parent row when expanded. Place
 * the expanded content inside a single `Table.Cell` with a matching `colSpan`.
 *
 * @summary Detail row shown under an expanded parent row
 */
const TableExpandedRow = ({
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLTableRowElement>>) => (
	<tr
		data-slot="table-expanded-row"
		className={cn('border-t border-border-default-base-primary', className)}
		{...props}
	/>
);
TableExpandedRow.displayName = 'Table.ExpandedRow';

const rowActionsStyles = tv({
	base: [
		'relative flex w-fit gap-1',
		// Gradient mask fading the row content behind the actions; revealed on row hover.
		'after:absolute after:inset-y-0 after:right-0 after:left-[calc(var(--table-cell-padding-inline)*-1)] after:opacity-0 after:transition-opacity after:duration-150 after:content-[""]',
		'after:[background:linear-gradient(to_right,transparent_0,var(--color-bg-default-base-secondary)_var(--table-cell-padding-inline))]',
		// The action controls (direct children) sit above the gradient and fade in
		// on hover — always visible on coarse-pointer devices.
		'[&>*]:relative [&>*]:z-[1] [&>*]:opacity-0 [&>*]:transition-opacity [&>*]:duration-150',
		'[@media(hover:none)_and_(pointer:coarse)]:[&>*]:opacity-100'
	]
});

/**
 * Inline action cluster pinned to the trailing edge of a row. Its controls stay
 * hidden until the row is hovered (always visible on coarse-pointer devices),
 * with a gradient mask fading the row content behind them.
 *
 * @summary Hover-revealed row action cluster
 */
const TableRowActions = ({ children }: PropsWithChildren) => (
	<div data-slot="table-row-actions" className={rowActionsStyles()}>
		{children}
	</div>
);
TableRowActions.displayName = 'Table.RowActions';

/**
 * Table is the low-level, presentational table primitive — a thin, themed
 * wrapper over native `<table>` markup that handles scrolling, sticky
 * header/footer rows, sizing, cell padding, row separators, hover states, and
 * expandable rows. Compose it from `Root` / `Head` / `Body` / `Row` /
 * `Header` / `Cell`, plus `ExpandButton` / `ExpandedRow` for expandable rows
 * and `RowActions` for hover-revealed row controls.
 *
 * Use it directly when you render rows yourself. For data-driven tables with
 * sorting, an empty state, a toolbar, and pagination, prefer the higher-level
 * `DataTable`, which is built on top of this primitive.
 *
 * @summary Low-level themed table primitive (scrolling, sticky, sizing, rows)
 * @namespace Table
 */
export const Table = {
	Root: TableRoot,
	Head: TableHead,
	Body: TableBody,
	Row: TableRow,
	Header: TableHeader,
	Cell: TableCell,
	ExpandButton: TableExpandButton,
	ExpandedRow: TableExpandedRow,
	RowActions: TableRowActions
};
