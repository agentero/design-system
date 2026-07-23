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

/** Shared inline cell padding; the first/last cell widens to the `-ends` value.
 * Checkbox cells collapse to zero width; logical `ps`/`pe` mirror under RTL. */
const CELL_INLINE_PADDING =
	'ps-[var(--table-cell-padding-inline)] pe-[var(--table-cell-padding-inline)] first:ps-[var(--table-cell-padding-inline-ends)] last:pe-[var(--table-cell-padding-inline-ends)] has-[[type=checkbox]]:w-0 has-[[type=checkbox]]:pe-0';

/**
 * Style recipe for the Table container. Inline spacing flows from two custom
 * properties, so the `embed` variant retunes the edge gutter via one of them.
 *
 * @summary tailwind-variants recipe backing the Table container styles
 */
export const tableRecipe = tv({
	slots: {
		root: [
			'flex min-h-0 flex-1 flex-col overflow-hidden',
			'[--table-cell-padding-inline:1.25rem] [--table-cell-padding-inline-ends:1.25rem]'
		],
		scroll: 'min-h-0 flex-1 overflow-auto focus-visible:outline-none',
		table: 'w-full has-[[data-slot=table-empty-state]]:h-full'
	},
	variants: {
		// Row density, resolved into the cell min-height by `Table.Root`.
		size: { sm: {}, md: {}, lg: {} },
		embed: {
			true: { root: '[--table-cell-padding-inline-ends:1.25rem]' }
		},
		// Wraps the table in a bordered, rounded container (the standalone "card" look,
		// as opposed to a full-bleed page table).
		enclosed: {
			true: { root: 'rounded-lg border border-border-default-base-primary' }
		},
		sticky: { header: {}, headerAndFooter: {} }
	},
	defaultVariants: {
		size: 'md'
	}
});

type TableVariants = VariantProps<typeof tableRecipe>;

/** Precomputed class strings for the table parts, resolved once by `Table.Root`
 * and shared via context so cells/rows don't re-run `tv()` per element. */
type TableSlotClasses = { header: string; cell: string; headRow: string; bodyRow: string };

const TableContext = createContext<TableSlotClasses | null>(null);
const useTableSlots = () => {
	const ctx = use(TableContext);
	if (!ctx) {
		throw new Error('Table parts must be used within Table.Root');
	}
	return ctx;
};

/** Which section a `Table.Row` lives in, so it picks the head/body class. */
const TableSectionContext = createContext<'head' | 'body'>('body');

const isHeaderSticky = (s: TableVariants['sticky']) => s === 'header' || s === 'headerAndFooter';
const isFooterSticky = (s: TableVariants['sticky']) => s === 'headerAndFooter';

export type TableRootProps = TableVariants & {
	ref?: Ref<HTMLDivElement>;
};

/**
 * The outermost Table part: renders the scroll viewport and `<table>`, shares
 * variants with the other parts via context, and forwards `ref` to the scroll
 * container. The viewport fills its (bounded) parent — cap height by
 * constraining that parent.
 *
 * @summary Table root that owns the scroll viewport and `<table>` element
 */
const TableRoot = ({ children, ref, ...variants }: PropsWithChildren<TableRootProps>) => {
	const { size, sticky, embed } = variants;
	const styles = tableRecipe(variants);
	const slots: TableSlotClasses = {
		header: headerStyles({ sticky: isHeaderSticky(sticky) }),
		cell: cellStyles({ size }),
		headRow: rowStyles({ body: false }),
		bodyRow: rowStyles({
			body: true,
			// `embed` also drops the row dividers (the recipe only retunes the gutter).
			divider: !embed,
			stickyFooter: isFooterSticky(sticky)
		})
	};

	return (
		<TableContext value={slots}>
			<div data-slot="table-root" className={styles.root()}>
				<div data-slot="table-scroll" ref={ref} tabIndex={0} className={styles.scroll()}>
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
 * `<thead>` wrapper; group your header `Table.Row` here.
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
 * `<tbody>` wrapper; the per-row treatment lives on `Table.Row`.
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
	base: '',
	variants: {
		body: {
			true: [
				'hover:bg-bg-default-base-secondary hover:has-[[data-slot=table-empty-state]]:bg-transparent',
				'[&:hover_[data-slot=table-row-actions]>*]:opacity-100',
				'[&:hover_[data-slot=table-row-actions]]:after:opacity-100'
			],
			false: ''
		},
		divider: { true: 'border-t border-border-default-base-primary', false: '' },
		// `last:` targets the final body row — the totals row to pin.
		stickyFooter: {
			true: 'last:sticky last:bottom-0 last:z-[1] last:bg-bg-default-base-primary last:shadow-[0_-0.03125rem_0_0_var(--color-border-default-base-primary)]',
			false: ''
		}
	}
});

/**
 * A table row (`<tr>`). In `Table.Body`, rows pick up dividers, hover, and the
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
	base: `h-12 border-b border-border-default-base-primary text-left align-middle text-sm font-light whitespace-nowrap text-text-default-base-tertiary ${CELL_INLINE_PADDING}`,
	variants: {
		sticky: {
			true: 'sticky top-0 z-[1] bg-bg-default-base-primary',
			false: ''
		}
	}
});

/**
 * A header cell (`<th>`): tertiary, light-weight column label.
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
	// `size` sets the row min-height; for table cells `height` acts as a floor
	// that grows with content. No vertical padding so multi-line content stays
	// centered (via `align-middle`) instead of overflowing.
	base: `align-middle text-sm whitespace-nowrap ${CELL_INLINE_PADDING}`,
	variants: {
		size: { sm: 'h-12', md: 'h-16', lg: 'h-22' }
	},
	defaultVariants: { size: 'md' }
});

/**
 * A data cell (`<td>`). Row min-height follows the `Table.Root` `size` variant.
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
 * Ghost icon button toggling an expandable row; the chevron rotates 180° while open.
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
 * Full-width detail row revealed under its parent when expanded. Put content in
 * a single `Table.Cell` with a matching `colSpan`.
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
		// Gradient mask behind the actions, revealed on row hover.
		'after:absolute after:inset-y-0 after:right-0 after:left-[calc(var(--table-cell-padding-inline)*-1)] after:opacity-0 after:content-[""]',
		'after:[background:linear-gradient(to_right,transparent_0,var(--color-bg-default-base-secondary)_var(--table-cell-padding-inline))]',
		// Controls appear on hover; always visible on coarse-pointer devices.
		'[&>*]:relative [&>*]:z-[1] [&>*]:opacity-0',
		'[@media(hover:none)_and_(pointer:coarse)]:[&>*]:opacity-100'
	]
});

/**
 * Inline action cluster pinned to the row's trailing edge; controls stay hidden
 * until row hover (always visible on coarse-pointer devices).
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
 * Low-level presentational table primitive — a thin themed wrapper over native
 * `<table>` markup (scrolling, sticky rows, row sizing, dividers, hover,
 * expandable rows). Compose from `Root` / `Head` / `Body` / `Row` / `Header` /
 * `Cell`, plus `ExpandButton` / `ExpandedRow` and `RowActions`. For
 * sorting/toolbar/pagination, prefer `DataTable`, built on top of this.
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
