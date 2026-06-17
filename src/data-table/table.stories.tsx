import { Fragment, SVGProps, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Button } from '../button';
import { Table, type TableRootProps } from './table';

type Row = { id: string; name: string; email: string; role: string; amount: string };

const ROWS: Row[] = [
	{ id: '1', name: 'Alice Williams', email: 'alice@example.com', role: 'Admin', amount: '$1,200' },
	{ id: '2', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', amount: '$340' },
	{ id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', amount: '$980' },
	{ id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', amount: '$2,450' },
	{ id: '5', name: 'Evan Davis', email: 'evan@example.com', role: 'User', amount: '$75' },
	{ id: '6', name: 'Fiona Clark', email: 'fiona@example.com', role: 'Admin', amount: '$610' },
	{ id: '7', name: 'George Hill', email: 'george@example.com', role: 'User', amount: '$1,890' },
	{ id: '8', name: 'Hannah Scott', email: 'hannah@example.com', role: 'Editor', amount: '$430' }
];

const IconEdit = (props: SVGProps<SVGSVGElement>) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
		<path
			fill="currentColor"
			d="M5.154 19H6.39l9.26-9.26-1.237-1.236-9.26 9.26zM4.558 20.5a.88.88 0 0 1-.646-.259.88.88 0 0 1-.258-.645v-2.094q0-.18.065-.344a.9.9 0 0 1 .206-.304L15.483 5.156q.222-.202.49-.312a1.5 1.5 0 0 1 .562-.11q.291 0 .555.11.264.11.46.33l1.207 1.221q.22.197.323.461.103.264.103.552 0 .291-.106.556a1.4 1.4 0 0 1-.32.49L7.3 20.229a1.3 1.3 0 0 1-.304.206 1.4 1.4 0 0 1-.344.065z"
		/>
	</svg>
);

const IconDelete = (props: SVGProps<SVGSVGElement>) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
		<path
			fill="currentColor"
			d="M7.308 20.5q-.749 0-1.278-.53a1.74 1.74 0 0 1-.53-1.278V6h-.25a.73.73 0 0 1-.535-.215.73.73 0 0 1-.215-.535q0-.32.215-.535A.73.73 0 0 1 5.25 4.5H9q0-.367.259-.626a.85.85 0 0 1 .626-.259h4.23q.368 0 .626.26A.85.85 0 0 1 15 4.5h3.75q.32 0 .535.215a.73.73 0 0 1 .215.535.73.73 0 0 1-.215.535.73.73 0 0 1-.535.215h-.25v12.692q0 .749-.53 1.278-.53.53-1.278.53zM17 6H7v12.692a.3.3 0 0 0 .087.221.3.3 0 0 0 .22.087h9.385a.3.3 0 0 0 .221-.087.3.3 0 0 0 .087-.22z"
		/>
	</svg>
);

/** Builds a standard table from the Root args; `extras` toggles optional columns. */
const renderTable = (
	args: Partial<TableRootProps>,
	extras: { checkbox?: boolean; actions?: boolean; totals?: boolean } = {}
) => {
	return (
		<Table.Root {...args}>
			<Table.Head>
				<Table.Row>
					{extras.checkbox && (
						<Table.Header>
							<input type="checkbox" aria-label="Select all rows" />
						</Table.Header>
					)}
					<Table.Header>Name</Table.Header>
					<Table.Header>Email</Table.Header>
					<Table.Header>Role</Table.Header>
					<Table.Header style={{ textAlign: 'right' }}>Amount</Table.Header>
					{extras.actions && (
						<Table.Header>
							<span className="sr-only">Actions</span>
						</Table.Header>
					)}
				</Table.Row>
			</Table.Head>
			<Table.Body>
				{ROWS.map(row => (
					<Table.Row key={row.id}>
						{extras.checkbox && (
							<Table.Cell>
								<input type="checkbox" aria-label={`Select ${row.name}`} />
							</Table.Cell>
						)}
						<Table.Cell className="font-bold">{row.name}</Table.Cell>
						<Table.Cell className="text-text-default-base-secondary">{row.email}</Table.Cell>
						<Table.Cell>{row.role}</Table.Cell>
						<Table.Cell style={{ textAlign: 'right' }}>{row.amount}</Table.Cell>
						{extras.actions && (
							<Table.Cell style={{ width: '0.0625rem', position: 'sticky', right: 0 }}>
								<Table.RowActions>
									<Button variant="ghost" size="sm" iconOnly aria-label={`Edit ${row.name}`}>
										<IconEdit />
									</Button>
									<Button variant="ghost" size="sm" iconOnly aria-label={`Delete ${row.name}`}>
										<IconDelete />
									</Button>
								</Table.RowActions>
							</Table.Cell>
						)}
					</Table.Row>
				))}
				{extras.totals && (
					<Table.Row>
						<Table.Cell className="font-bold">Total</Table.Cell>
						<Table.Cell />
						<Table.Cell />
						<Table.Cell className="font-bold" style={{ textAlign: 'right' }}>
							$8,375
						</Table.Cell>
					</Table.Row>
				)}
			</Table.Body>
		</Table.Root>
	);
};

/**
 * Low-level presentational table primitive: native `<table>` markup themed for
 * scrolling, sticky rows, cell padding, dividers, hover, and expandable rows.
 * For sorting/toolbar/pagination, prefer `DataTable`.
 */
const meta = {
	title: 'Components/Table',
	component: Table.Root,
	tags: ['autodocs'],
	parameters: { layout: 'fullscreen' },
	argTypes: {
		size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
		embed: { control: 'boolean' },
		sticky: {
			control: 'inline-radio',
			options: [undefined, 'header', 'headerAndFooter']
		}
	},
	args: { size: 'md', embed: false },
	render: args => renderTable(args),
	decorators: [
		Story => (
			<div className="flex h-112 flex-col p-4">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof Table.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default args playground.
 *
 * @summary Default table
 */
export const Default: Story = {
	parameters: { a11y: { test: 'error' } },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('Alice Williams')).toBeInTheDocument();
		await expect(canvas.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
	}
};

/**
 * The three row densities. `size` sets row min-height: sm 48 / md 64 / lg 88px.
 *
 * @summary size — sm / md / lg
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			{(['sm', 'md', 'lg'] as const).map(size => (
				<div key={size} className="flex flex-col gap-1">
					<span className="text-xs text-text-default-base-tertiary">size=&quot;{size}&quot;</span>
					{renderTable({ size })}
				</div>
			))}
		</div>
	)
};

/**
 * `sticky="header"` pins the header while the body scrolls. Needs a bounded-height parent.
 *
 * @summary sticky="header" with a scrolling body
 */
export const StickyHeader: Story = {
	args: { sticky: 'header' },
	decorators: [
		Story => (
			<div className="flex h-55 flex-col">
				<Story />
			</div>
		)
	]
};

/**
 * `sticky="headerAndFooter"` pins the header and the last body row (totals here).
 *
 * @summary sticky="headerAndFooter" with a pinned totals row
 */
export const StickyHeaderAndFooter: Story = {
	args: { sticky: 'headerAndFooter' },
	render: args => renderTable(args, { totals: true }),
	decorators: [
		Story => (
			<div className="flex h-55 flex-col">
				<Story />
			</div>
		)
	]
};

/**
 * `embed` drops the per-row dividers and tightens the edge gutter to 1rem.
 *
 * @summary embed — no row dividers, 1rem edge gutter
 */
export const Embed: Story = {
	args: { embed: true }
};

/**
 * A leading checkbox column; checkbox cells collapse to zero width.
 *
 * @summary Selectable rows with a collapsing checkbox column
 */
export const WithCheckbox: Story = {
	render: args => renderTable(args, { checkbox: true })
};

/**
 * Hover-revealed row actions pinned to the trailing edge.
 *
 * @summary Hover-revealed row actions
 */
export const WithRowActions: Story = {
	render: args => renderTable(args, { actions: true }),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Controls are present in the DOM (hidden until row hover, a visual-only behavior).
		await expect(canvas.getAllByRole('button', { name: /Edit / })).toHaveLength(ROWS.length);
		await expect(canvas.getAllByRole('button', { name: /Delete / })).toHaveLength(ROWS.length);
	}
};

/**
 * `Table.ExpandButton` toggles a `Table.ExpandedRow` detail panel under its row.
 *
 * @summary Expandable rows with a detail panel
 */
export const ExpandableRows: Story = {
	render: args => {
		const Demo = () => {
			const [openId, setOpenId] = useState<string | null>(ROWS[0]!.id);
			return (
				<Table.Root {...args}>
					<Table.Head>
						<Table.Row>
							<Table.Header>
								<span className="sr-only">Expand</span>
							</Table.Header>
							<Table.Header>Name</Table.Header>
							<Table.Header>Email</Table.Header>
							<Table.Header>Role</Table.Header>
						</Table.Row>
					</Table.Head>
					<Table.Body>
						{ROWS.slice(0, 4).map(row => (
							<Fragment key={row.id}>
								<Table.Row>
									<Table.Cell>
										<Table.ExpandButton
											isExpanded={openId === row.id}
											toggleExpanded={() => setOpenId(openId === row.id ? null : row.id)}
											aria-label={`Toggle ${row.name}`}
										/>
									</Table.Cell>
									<Table.Cell className="font-bold">{row.name}</Table.Cell>
									<Table.Cell className="text-text-default-base-secondary">{row.email}</Table.Cell>
									<Table.Cell>{row.role}</Table.Cell>
								</Table.Row>
								{openId === row.id && (
									<Table.ExpandedRow>
										<Table.Cell colSpan={4}>
											<div className="py-2 text-text-default-base-secondary">
												Extended details for {row.name} — {row.amount} lifetime value.
											</div>
										</Table.Cell>
									</Table.ExpandedRow>
								)}
							</Fragment>
						))}
					</Table.Body>
				</Table.Root>
			);
		};
		return <Demo />;
	}
};
