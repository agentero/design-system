import { DataTablePagination, DataTableTable, Footer, Root, ToolBar } from './data-table';
import {
	TableBody,
	TableCell,
	TableExpandButton,
	TableExpandedRow,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
	TableRowActions
} from './table';

export { tableRecipe } from './table';
export type { TableRootProps } from './table';

export { useDataTable } from './data-table';
export type { DataTableColumnMeta, PaginationState } from './data-table';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
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

export const DataTable = {
	Root,
	ToolBar,
	Table: DataTableTable,
	Footer,
	Pagination: DataTablePagination
};
