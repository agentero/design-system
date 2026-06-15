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

/**
 * Builds a standard table from the Root variant args. `extras` toggles optional
 * columns/features so the structural stories stay terse.
 */
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
 * Table is the low-level, presentational table primitive: native `<table>`
 * markup with theming for scrolling, sticky header/footer rows, sizing, cell
 * padding, row dividers, hover states, and expandable rows. Use it when you
 * render rows yourself; for sorting/toolbar/pagination over data, prefer
 * `DataTable`, which is built on top of it.
 */
const meta = {
	title: 'Components/Table',
	component: Table.Root,
	tags: ['autodocs'],
	parameters: { layout: 'fullscreen' },
	argTypes: {
		size: { control: 'inline-radio', options: ['xxs', 'xs', 'sm', 'md'] },
		enclosed: { control: 'boolean' },
		embed: { control: 'boolean' },
		clean: { control: 'boolean' },
		sticky: {
			control: 'inline-radio',
			options: [undefined, 'header', 'footer', 'headerAndFooter']
		},
		maxHeight: { control: 'number' }
	},
	args: { size: 'md', enclosed: true, embed: false, clean: false },
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
 * Default args playground — `md` size, enclosed (bordered) container.
 *
 * @summary Default bordered table
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
 * All four densities stacked for comparison. `size` drives header height and
 * cell vertical padding (and tightens the inline gutters at `xxs`).
 *
 * @summary size — xxs / xs / sm / md
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			{(['xxs', 'xs', 'sm', 'md'] as const).map(size => (
				<div key={size} className="flex flex-col gap-1">
					<span className="text-xs text-text-default-base-tertiary">size=&quot;{size}&quot;</span>
					{renderTable({ size })}
				</div>
			))}
		</div>
	)
};

/**
 * `enclosed={false}` drops the rounded border, letting the table sit flush
 * inside a page or card (this is what `DataTable` uses).
 *
 * @summary enclosed=false — borderless
 */
export const Borderless: Story = {
	args: { enclosed: false }
};

/**
 * `sticky="header"` pins the header row while the body scrolls; the divider
 * travels with it as a box-shadow. Needs a height cap (`maxHeight`) to scroll.
 *
 * @summary sticky="header" with a scrolling body
 */
export const StickyHeader: Story = {
	args: { sticky: 'header', maxHeight: 220 }
};

/**
 * `sticky="headerAndFooter"` pins both the header and the last body row (a
 * totals row here) while the middle scrolls.
 *
 * @summary sticky="headerAndFooter" with a pinned totals row
 */
export const StickyHeaderAndFooter: Story = {
	args: { sticky: 'headerAndFooter', maxHeight: 220 },
	render: args => renderTable(args, { totals: true })
};

/**
 * `embed` removes the per-row dividers and pulls the edge cells in to a 1rem
 * gutter — the spacing used when a table is embedded in a page (no card).
 *
 * @summary embed — no row dividers, 1rem edge gutter
 */
export const Embed: Story = {
	args: { embed: true, enclosed: false }
};

/**
 * `clean` switches to separated borders with pill-rounded rows and a wider
 * edge gutter — a card-list look.
 *
 * @summary clean — rounded, separated rows
 */
export const Clean: Story = {
	args: { clean: true, enclosed: false }
};

/**
 * A leading checkbox column. Cells containing a checkbox collapse to zero width
 * and drop their trailing padding, so the column hugs the control.
 *
 * @summary Selectable rows with a collapsing checkbox column
 */
export const WithCheckbox: Story = {
	render: args => renderTable(args, { checkbox: true })
};

/**
 * Hover-revealed row actions pinned to the trailing edge. The controls fade in
 * on row hover with a gradient mask over the row content behind them.
 *
 * @summary Hover-revealed row actions
 */
export const WithRowActions: Story = {
	args: { enclosed: false },
	render: args => renderTable(args, { actions: true }),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Controls are present in the DOM (hidden until row hover, a visual-only behavior).
		await expect(canvas.getAllByRole('button', { name: /Edit / })).toHaveLength(ROWS.length);
		await expect(canvas.getAllByRole('button', { name: /Delete / })).toHaveLength(ROWS.length);
	}
};

/**
 * Expandable rows: `Table.ExpandButton` toggles a `Table.ExpandedRow` detail
 * panel beneath its parent row (the chevron rotates while open).
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
