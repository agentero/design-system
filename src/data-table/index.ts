import { DataTablePagination, DataTableTable, Footer, Root, ToolBar } from './data-table';

export { useDataTable } from './data-table';
export type { DataTableColumnMeta, PaginationState } from './data-table';

export const DataTable = {
	Root,
	ToolBar,
	Table: DataTableTable,
	Footer,
	Pagination: DataTablePagination
};
