'use client';

import {
	createContext,
	CSSProperties,
	ElementType,
	Fragment,
	HTMLAttributes,
	PropsWithChildren,
	RefObject,
	use,
	useRef
} from 'react';

import {
	flexRender,
	getCoreRowModel,
	RowData,
	type Table as TableType,
	type TableOptions,
	useReactTable
} from '@tanstack/react-table';
import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { Pagination, type PaginationProps } from '../pagination';
import { IconArrowUpward, IconSwapVert } from './icons';
import { Table, type TableRootProps } from './table';

/* ------------ Column meta ------------ */

/**
 * Shape a column's `meta` may carry. Spread onto the underlying `<th>`/`<td>`,
 * so any cell HTML attribute is accepted; `style.textAlign` additionally
 * drives header content alignment.
 */
export type DataTableColumnMeta = HTMLAttributes<HTMLTableCellElement> & {
	style?: CSSProperties;
};

/* ------------ DataTable Context ------------ */

type DataTableContextValue<TData extends RowData> = {
	table: TableType<TData>;
	isLoading: boolean;
	scrollRef: RefObject<HTMLDivElement | null>;
	onRowClick?: (row: TData) => void;
	rowHref?: (row: TData) => string;
	linkComponent: ElementType;
};

const DataTableContext = createContext<DataTableContextValue<RowData> | null>(null);

/**
 * Accesses the DataTable context (the TanStack table instance and shared
 * config). Must be called within a `DataTable.Root`.
 *
 * @summary Access the DataTable context and table instance
 */
export const useDataTable = () => {
	const context = use(DataTableContext);
	if (!context) {
		throw new Error('useDataTable must be used within a DataTable.Root');
	}
	return context;
};

/* ------------ DataTable Root ------------ */

type DataTableProps<TData extends RowData> = Omit<TableOptions<TData>, 'getCoreRowModel'>;

type DataTableRootProps<TData extends RowData> = DataTableProps<TData> & {
	/** Dims the table while data is loading and suppresses the empty state. */
	isLoading?: boolean;
	/** Called with the row's data when a non-interactive part of the row is clicked. */
	onRowClick?: (row: TData) => void;
	/** Returns an href for a row; the row becomes a link (see `linkComponent`). */
	rowHref?: (row: TData) => string;
	/**
	 * Element used to render the per-row navigation link when `rowHref` is set.
	 * Defaults to a native `'a'`. Pass a framework link (e.g. Next.js `Link`) to
	 * get client-side navigation.
	 */
	linkComponent?: ElementType;
};

/**
 * Root of the DataTable. Creates the TanStack table instance from the supplied
 * `data`/`columns` (plus any TanStack options) and provides it to the
 * subcomponents. Accepts `isLoading`, `onRowClick`, `rowHref`, and
 * `linkComponent`.
 *
 * @summary DataTable root that builds the table instance and shares context
 *
 * @example
 * ```tsx
 * <DataTable.Root data={users} columns={columns}>
 *   <DataTable.ToolBar>…</DataTable.ToolBar>
 *   <DataTable.Table />
 *   <DataTable.Footer>…</DataTable.Footer>
 * </DataTable.Root>
 * ```
 */
const Root = <TData extends RowData>({
	children,
	isLoading = false,
	onRowClick,
	rowHref,
	linkComponent = 'a',
	...tableOptions
}: PropsWithChildren<DataTableRootProps<TData>>) => {
	const table = useReactTable<TData>({
		...tableOptions,
		getCoreRowModel: getCoreRowModel()
	});
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<DataTableContext
			value={{
				table: table as TableType<RowData>,
				isLoading,
				scrollRef,
				onRowClick: onRowClick as ((row: RowData) => void) | undefined,
				rowHref: rowHref as ((row: RowData) => string) | undefined,
				linkComponent
			}}>
			<div data-slot="data-table-root" className="flex min-h-0 flex-1 flex-col">
				{children}
			</div>
		</DataTableContext>
	);
};
Root.displayName = 'DataTable.Root';

/* ------------ DataTable Toolbar ------------ */

/**
 * Toolbar strip above the table for search inputs, filters, and actions.
 * Separated from the table body by a bottom border. Its horizontal padding
 * (`px-4`) matches the table's edge cells so toolbar and column content align.
 *
 * @summary Toolbar row above the table for filters and actions
 */
const ToolBar = ({ children }: PropsWithChildren) => (
	<div
		data-slot="data-table-toolbar"
		role="toolbar"
		className="flex gap-2 border-b border-border-default-base-primary px-4 py-3">
		{children}
	</div>
);
ToolBar.displayName = 'DataTable.ToolBar';

/* ------------ DataTable Table ------------ */

const orderIconStyles = tv({
	base: 'size-4 transition-transform duration-200',
	variants: {
		direction: {
			asc: '',
			desc: 'rotate-180',
			false: ''
		}
	}
});

// Shared by the sortable <button> and the static <div>: resets so a <button>
// inherits the header's font and fills the cell, letting `align` work.
const headerCell = tv({
	base: 'flex w-full appearance-none items-center bg-transparent p-0 text-left [font:inherit]',
	variants: {
		canSort: {
			true: 'cursor-pointer',
			false: 'cursor-default'
		},
		align: {
			right: 'justify-end',
			left: 'justify-start'
		}
	}
});

const isInteractiveElement = (target: HTMLElement) => !!target.closest('a, button, [role="menu"]');

type DataTableTableProps = PropsWithChildren<{
	/** Which edges stay sticky on scroll. Defaults to `'header'`. */
	sticky?: TableRootProps['sticky'];
	/** Wraps the table in a rounded border. Defaults to `false` (full-page table). */
	enclosed?: TableRootProps['enclosed'];
	/** Tightens the edge gutter for a table embedded in a padded page container. Defaults to `true`. */
	embed?: TableRootProps['embed'];
}>;

/**
 * Renders the table headers and rows from the table instance. Sortable columns
 * show a sort affordance and toggle sorting on click; rows become clickable
 * when `onRowClick` or `rowHref` is set. Pass a custom empty state as children
 * (defaults to "No results.").
 *
 * The `sticky`, `enclosed`, and `embed` props are forwarded to the underlying
 * `Table.Root`. Their defaults suit a full-page table embedded in a padded page
 * layout; override them per consumer when a table needs different sticky
 * behavior, enclosure, or edge gutter.
 *
 * @summary Renders headers and rows, with sorting and row navigation
 *
 * @example
 * ```tsx
 * <DataTable.Table>
 *   <CustomEmptyState />
 * </DataTable.Table>
 * ```
 */
const DataTableTable = ({
	children = <DataTableEmptyState />,
	sticky = 'header',
	enclosed = false,
	embed = true
}: DataTableTableProps) => {
	const {
		table,
		isLoading,
		scrollRef,
		onRowClick,
		rowHref,
		linkComponent: LinkComponent
	} = useDataTable();
	const colSpan = table.getAllColumns().length;

	return (
		<div
			data-slot="data-table-loading-overlay"
			className={cn(
				'flex min-h-0 flex-1 flex-col transition-opacity duration-150',
				isLoading && 'opacity-50'
			)}>
			<Table.Root sticky={sticky} enclosed={enclosed} embed={embed} ref={scrollRef}>
				<Table.Head>
					{table.getHeaderGroups().map(headerGroup => (
						<Table.Row key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								const meta = header.column.columnDef.meta as DataTableColumnMeta | undefined;
								const canSort = header.column.getCanSort();
								const sorted = header.column.getIsSorted();
								const align = meta?.style?.textAlign === 'right' ? 'right' : 'left';
								const content = header.isPlaceholder ? null : (
									<>
										{flexRender(header.column.columnDef.header, header.getContext())}
										{canSort && (
											<span className="size-4">
												{sorted ? (
													<IconArrowUpward className={orderIconStyles({ direction: sorted })} />
												) : (
													<IconSwapVert className="size-4" />
												)}
											</span>
										)}
									</>
								);
								return (
									<Table.Header
										key={header.id}
										{...meta}
										aria-sort={
											canSort
												? sorted === 'asc'
													? 'ascending'
													: sorted === 'desc'
														? 'descending'
														: 'none'
												: undefined
										}>
										{canSort ? (
											<button
												type="button"
												className={headerCell({ canSort: true, align })}
												onClick={header.column.getToggleSortingHandler()}
												title={
													header.column.getNextSortingOrder() === 'asc'
														? 'Sort ascending'
														: header.column.getNextSortingOrder() === 'desc'
															? 'Sort descending'
															: 'Clear sort'
												}>
												{content}
											</button>
										) : (
											<div className={headerCell({ canSort: false, align })}>{content}</div>
										)}
									</Table.Header>
								);
							})}
						</Table.Row>
					))}
				</Table.Head>

				<Table.Body>
					{table.getRowModel().rows.length ? (
						table.getRowModel().rows.map(row => {
							const href = rowHref?.(row.original);
							const isClickable = !!onRowClick || !!href;
							return (
								<Fragment key={row.id}>
									<Table.Row
										className={cn(
											'has-aria-expanded:bg-bg-default-base-secondary',
											isClickable && 'cursor-pointer'
										)}
										onClick={
											isClickable
												? e => {
														if (isInteractiveElement(e.target as HTMLElement)) return;
														if (onRowClick) {
															onRowClick(row.original);
														} else if (href) {
															const link = (e.currentTarget as HTMLElement).querySelector(
																'[data-row-link]'
															) as HTMLAnchorElement | null;
															link?.click();
														}
													}
												: undefined
										}>
										{row.getVisibleCells().map((cell, cellIndex) => {
											const meta = cell.column.columnDef.meta as DataTableColumnMeta | undefined;
											return (
												<Table.Cell key={cell.id} {...meta}>
													{cellIndex === 0 && href && (
														<LinkComponent
															href={href}
															data-row-link
															className="hidden"
															tabIndex={-1}
															aria-hidden="true"
														/>
													)}
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</Table.Cell>
											);
										})}
									</Table.Row>
								</Fragment>
							);
						})
					) : isLoading ? null : (
						<Table.Row>
							<Table.Cell colSpan={colSpan}>
								<div data-slot="table-empty-state" className="whitespace-normal">
									{children}
								</div>
							</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table.Root>
		</div>
	);
};
DataTableTable.displayName = 'DataTable.Table';

/* ------------ DataTable Empty State ------------ */

const DataTableEmptyState = () => (
	<div className="mb-6 flex flex-col items-center gap-4">
		<div className="text-lg">
			<b>No results.</b>
		</div>
	</div>
);

/* ------------ DataTable Footer & Pagination ------------ */

/**
 * Offset/limit pagination state shape, for callers driving server-side paging.
 *
 * @property {number} offset - Zero-based index of the first item on the page.
 * @property {number} limit - Number of items per page.
 */
export type PaginationState = {
	offset: number;
	limit: number;
};

/**
 * Footer strip below the table, typically holding pagination. Separated from
 * the table body by a top border and right-aligns its content.
 *
 * @summary Footer row below the table for pagination
 */
const Footer = ({ children }: PropsWithChildren) => (
	<div
		data-slot="data-table-pagination"
		className="flex justify-end border-t border-border-default-base-primary px-6 py-3">
		{children}
	</div>
);
Footer.displayName = 'DataTable.Footer';

/**
 * Pagination control wired to the table: scrolls the table viewport back to the
 * top whenever the page changes, then forwards to the caller's `onPageChange`.
 * Place it inside `DataTable.Footer`.
 *
 * @summary Table-aware pagination that scrolls to top on page change
 */
const DataTablePagination = (props: PaginationProps) => {
	const { scrollRef } = useDataTable();
	return (
		<Pagination
			{...props}
			onPageChange={page => {
				scrollRef.current?.scrollTo({ top: 0 });
				props.onPageChange(page);
			}}
		/>
	);
};
DataTablePagination.displayName = 'DataTable.Pagination';

/**
 * DataTable is the data-driven table compound, built on TanStack Table and the
 * `Table` primitive. Compose it from `Root` (owns the table instance) with
 * `ToolBar` for filters/actions, `Table` for the headers and rows (sorting,
 * row navigation, empty state), and `Footer` + `Pagination` for paging.
 *
 * Use it for sortable, paginated, server- or client-driven tables. When you
 * render rows by hand and don't need TanStack, drop down to the `Table`
 * primitive instead.
 *
 * @summary Data-driven table compound (sorting, toolbar, pagination) over TanStack
 * @see {@link https://tanstack.com/table/latest|TanStack Table}
 * @namespace DataTable
 *
 * @example
 * ```tsx
 * import { DataTable } from '@agentero/design-system/data-table';
 * import { createColumnHelper } from '@tanstack/react-table';
 *
 * const columnHelper = createColumnHelper<User>();
 * const columns = [
 *   columnHelper.accessor('name', { header: 'Name', enableSorting: true }),
 *   columnHelper.accessor('email', { header: 'Email' })
 * ];
 *
 * <DataTable.Root data={users} columns={columns}>
 *   <DataTable.ToolBar>
 *     <SearchInput />
 *   </DataTable.ToolBar>
 *   <DataTable.Table />
 *   <DataTable.Footer>
 *     <DataTable.Pagination
 *       currentPage={page}
 *       pageSize={10}
 *       totalCount={total}
 *       onPageChange={setPage}
 *     />
 *   </DataTable.Footer>
 * </DataTable.Root>
 * ```
 */
export const DataTable = {
	Root,
	ToolBar,
	Table: DataTableTable,
	Footer,
	Pagination: DataTablePagination
};
