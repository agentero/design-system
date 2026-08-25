import {
	Body,
	Cell,
	ExpandButton,
	ExpandedRow,
	Head,
	Header,
	Root,
	Row,
	RowActions
} from './table';

export { tableRecipe } from './table';
export type { TableRootProps } from './table';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const Table = { Root, Head, Body, Row, Header, Cell, ExpandButton, ExpandedRow, RowActions };
