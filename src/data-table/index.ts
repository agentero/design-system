import { Table as TableNamespace, tableRecipe as tableRecipeImpl } from '../table';
import { DataTablePagination, DataTableTable, Footer, Root, ToolBar } from './data-table';

export { useDataTable } from './data-table';
export type { DataTableColumnMeta, PaginationState } from './data-table';

/**
 * @deprecated Import from `@agentero/design-system/table` instead — that entry
 * point carries no `@tanstack/react-table` dependency.
 */
export const Table = TableNamespace;

/**
 * @deprecated Import from `@agentero/design-system/table` instead.
 */
export const tableRecipe = tableRecipeImpl;

/**
 * @deprecated Import from `@agentero/design-system/table` instead.
 */
export type { TableRootProps } from '../table';

export const DataTable = {
	Root,
	ToolBar,
	Table: DataTableTable,
	Footer,
	Pagination: DataTablePagination
};
