import { SVGProps, useMemo, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { createColumnHelper, getSortedRowModel, type SortingState } from '@tanstack/react-table';
import { expect, userEvent, within } from 'storybook/test';

import { Button } from '../button';
import { DropdownMenu } from '../dropdown-menu';
import { Pagination } from '../pagination';
import { DataTable } from './data-table';
import { Table } from './table';

/* -------------------------------------------------------------------------- */
/* Inline icons / badges that stand in for application-provided components in   */
/* these stories. The DataTable itself ships none.                             */
/* -------------------------------------------------------------------------- */

const IconMoreVert = (props: SVGProps<SVGSVGElement>) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
		<path
			fill="currentColor"
			d="M12 19.27q-.619 0-1.06-.441a1.45 1.45 0 0 1-.44-1.06q0-.618.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06 0 .62-.44 1.06-.441.44-1.06.44m0-5.77q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06t-.44 1.06q-.441.44-1.06.44m0-5.77q-.619 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.618.44-1.059.442-.44 1.06-.44t1.06.44q.44.44.44 1.06 0 .618-.44 1.06-.441.44-1.06.44"
		/>
	</svg>
);

const IconArrowForward = (props: SVGProps<SVGSVGElement>) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
		<path
			fill="currentColor"
			d="M16.627 12.75H5.25a.73.73 0 0 1-.535-.215A.73.73 0 0 1 4.5 12q0-.32.215-.535a.73.73 0 0 1 .535-.215h11.377l-5.17-5.17a.7.7 0 0 1-.22-.521q.003-.3.236-.532A.78.78 0 0 1 12 4.802a.7.7 0 0 1 .527.225l6.34 6.34a.83.83 0 0 1 .256.633.828.828 0 0 1-.256.633l-6.34 6.34a.72.72 0 0 1-.514.213.75.75 0 0 1-.54-.213.74.74 0 0 1-.233-.534q0-.303.233-.535z"
		/>
	</svg>
);

const IconHome = (props: SVGProps<SVGSVGElement>) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
		<path
			fill="currentColor"
			d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-1.5 1.5V9.25L12 3.5l7.5 5.75V20.5h-6v-6h-3v6z"
		/>
	</svg>
);

type LeadStatus = 'quoted' | 'readyToQuote';

const statusLabel: Record<LeadStatus, string> = {
	quoted: 'Quoted',
	readyToQuote: 'Ready to quote'
};

/* -------------------------------------------------------------------------- */
/* Sample data for a representative leads-management table                      */
/* -------------------------------------------------------------------------- */

type Lead = {
	leadId: string;
	contact: string;
	address: string;
	phoneNumber: string;
	email: string;
	insuranceType: string;
	createdAt: string;
	status: LeadStatus;
};

const LEADS: Lead[] = [
	{
		leadId: '1',
		contact: 'Alice Williams',
		address: 'Austin, TX',
		phoneNumber: '(512) 555-0142',
		email: 'alice@example.com',
		insuranceType: 'Home',
		createdAt: 'Jun 2, 2026',
		status: 'quoted'
	},
	{
		leadId: '2',
		contact: 'Bob Johnson',
		address: 'Denver, CO',
		phoneNumber: '(303) 555-0188',
		email: 'bob@example.com',
		insuranceType: 'Auto',
		createdAt: 'Jun 5, 2026',
		status: 'readyToQuote'
	},
	{
		leadId: '3',
		contact: 'Charlie Brown',
		address: 'Seattle, WA',
		phoneNumber: '(206) 555-0119',
		email: 'charlie@example.com',
		insuranceType: 'Home',
		createdAt: 'Jun 7, 2026',
		status: 'readyToQuote'
	},
	{
		leadId: '4',
		contact: 'Diana Prince',
		address: 'Miami, FL',
		phoneNumber: '(305) 555-0167',
		email: 'diana@example.com',
		insuranceType: 'Renters',
		createdAt: 'Jun 9, 2026',
		status: 'quoted'
	},
	{
		leadId: '5',
		contact: 'Evan Davis',
		address: 'Chicago, IL',
		phoneNumber: '(312) 555-0153',
		email: 'evan@example.com',
		insuranceType: 'Auto',
		createdAt: 'Jun 11, 2026',
		status: 'readyToQuote'
	},
	{
		leadId: '6',
		contact: 'Fiona Clark',
		address: 'Boston, MA',
		phoneNumber: '(617) 555-0124',
		email: 'fiona@example.com',
		insuranceType: 'Home',
		createdAt: 'Jun 13, 2026',
		status: 'quoted'
	}
];

const columnHelper = createColumnHelper<Lead>();

const columns = [
	columnHelper.accessor('contact', {
		header: 'Applicant',
		enableSorting: false,
		meta: { style: { width: 'auto' } },
		cell: ({ row }) => (
			<div className="flex flex-col">
				<span className="truncate font-bold">{row.original.contact}</span>
				<span className="text-sm text-text-default-base-secondary">{row.original.address}</span>
			</div>
		)
	}),
	columnHelper.accessor('phoneNumber', {
		header: 'Contact info',
		enableSorting: false,
		meta: { style: { width: '15rem' } },
		cell: ({ row }) => (
			<div className="flex flex-col">
				<span className="text-sm text-text-default-base-secondary">{row.original.phoneNumber}</span>
				<a
					href={`mailto:${row.original.email}`}
					className="text-sm text-text-default-base-secondary underline hover:no-underline">
					{row.original.email}
				</a>
			</div>
		)
	}),
	columnHelper.accessor('insuranceType', {
		header: 'Insurance type',
		enableSorting: false,
		meta: { style: { width: '10rem' } },
		cell: ({ row }) => (
			<div className="flex items-center gap-1">
				<IconHome className="size-5 shrink-0 text-icon-default-base-secondary" />
				<span className="truncate text-sm font-bold">{row.original.insuranceType}</span>
			</div>
		)
	}),
	columnHelper.accessor('createdAt', {
		header: 'Created',
		enableSorting: true,
		sortDescFirst: true,
		meta: { style: { width: '8rem' } }
	}),
	columnHelper.accessor('status', {
		header: 'Status',
		enableSorting: false,
		meta: { style: { width: '8.75rem' } },
		// NOTE: a status badge would normally render here, but the DS has no Tag
		// component yet, so we show plain text rather than faking one.
		cell: ({ row }) => statusLabel[row.original.status]
	}),
	columnHelper.display({
		id: 'actions',
		header: () => <span className="sr-only">Actions</span>,
		meta: { style: { width: '0.0625rem', position: 'sticky', right: 0, textAlign: 'right' } },
		cell: ({ row }) => (
			<Table.RowActions>
				<Button asChild variant="ghost" size="sm" iconOnly aria-label="View lead details">
					<a href={`/leads/${row.original.leadId}`}>
						<IconArrowForward />
					</a>
				</Button>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild>
						<Button
							variant="ghost"
							size="sm"
							data-slot="button"
							aria-label="Lead actions"
							className="data-[state=open]:opacity-100">
							<IconMoreVert />
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Portal>
						<DropdownMenu.Content align="end">
							<DropdownMenu.Item>View lead details</DropdownMenu.Item>
							<DropdownMenu.Item>Get quotes</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>
			</Table.RowActions>
		)
	})
];

/**
 * DataTable is the data-driven table compound built on TanStack Table. This
 * story shows a representative leads table: an `Applicant` column with a name +
 * address, contact info, insurance type with an icon, a sortable `Created`
 * column, a status badge, and hover-revealed row actions (open + a kebab menu).
 * The toolbar (search + filters) and the footer pagination are **separate
 * components** composed inside `ToolBar` / `Footer`.
 */
const meta = {
	title: 'Components/DataTable',
	component: DataTable.Root,
	tags: ['autodocs'],
	parameters: { layout: 'fullscreen' },
	decorators: [
		Story => (
			<div className="flex h-112 flex-col">
				<Story />
			</div>
		)
	]
} satisfies Meta;

export default meta;
type Story = StoryObj;

/**
 * A leads-table composition: sortable `Created` column, a status badge, row
 * navigation via `rowHref`, hover-revealed actions, a search input + filters in
 * the toolbar, and pagination in the footer.
 *
 * @summary Representative leads table composition
 */
export const Leads: Story = {
	render: () => {
		const [sorting, setSorting] = useState<SortingState>([]);
		const [page, setPage] = useState(1);
		const [search, setSearch] = useState('');

		const data = useMemo(
			() => LEADS.filter(l => l.contact.toLowerCase().includes(search.toLowerCase())),
			[search]
		);

		return (
			<DataTable.Root
				data={data}
				columns={columns}
				state={{ sorting }}
				onSortingChange={setSorting}
				getSortedRowModel={getSortedRowModel()}
				enableSortingRemoval={false}
				rowHref={lead => `/leads/${lead.leadId}`}>
				<DataTable.ToolBar>
					<input
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder="Search..."
						aria-label="Search leads"
						className="h-8 w-60 rounded-md border border-border-default-base-primary px-3 text-sm outline-none"
					/>
					<Button variant="secondary" size="sm">
						Filters
					</Button>
				</DataTable.ToolBar>

				<DataTable.Table />

				<DataTable.Footer>
					<Pagination
						totalCount={LEADS.length}
						currentPage={page}
						pageSize={10}
						onPageChange={setPage}
					/>
				</DataTable.Footer>
			</DataTable.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('toolbar')).toBeInTheDocument();
		await expect(canvas.getByText('Alice Williams')).toBeInTheDocument();
		await expect(canvas.getByText(/1 - 6 of 6/)).toBeInTheDocument();

		await userEvent.click(canvas.getByText('Created'));
		await expect(canvas.getByText('Applicant')).toBeInTheDocument();
	}
};

/**
 * No rows: the table renders its default empty state instead of body rows.
 *
 * @summary Empty state when there are no rows
 */
export const Empty: Story = {
	render: () => (
		<DataTable.Root data={[] as Lead[]} columns={columns}>
			<DataTable.Table />
		</DataTable.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('No results.')).toBeInTheDocument();
	}
};

/**
 * Loading: the body is dimmed and the empty state is suppressed while data is
 * in flight.
 *
 * @summary Loading state dims the table and hides the empty state
 */
export const Loading: Story = {
	render: () => (
		<DataTable.Root data={[] as Lead[]} columns={columns} isLoading>
			<DataTable.Table />
		</DataTable.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.queryByText('No results.')).not.toBeInTheDocument();
	}
};
