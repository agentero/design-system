import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Pagination } from './pagination';

/**
 * Pagination is a 1-indexed paged navigation control with previous/next icon
 * buttons, numeric page buttons, and a leading "X - Y of Z" entries summary.
 * The page list collapses long ranges with `…` ellipses so the control stays
 * compact regardless of total page count. Use it for lists, tables, or grids
 * that are split across pages.
 */
const meta = {
	title: 'Components/Pagination',
	component: Pagination,
	tags: ['autodocs'],
	argTypes: {
		currentPage: { control: { type: 'number', min: 0, step: 1 } },
		totalCount: { control: { type: 'number', min: 0, step: 10 } },
		pageSize: { control: { type: 'number', min: 1, step: 1 } },
		onPageChange: { table: { disable: true } },
		className: { table: { disable: true } }
	},
	args: {
		currentPage: 1,
		totalCount: 1000,
		pageSize: 10,
		onPageChange: (page: number) => console.log('onPageChange', page)
	}
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default args playground. The first page of a 1,000-item list paged 10 at a
 * time — renders pages 1–5, an ellipsis, and the last page (100), with the
 * previous-page button disabled because we're on page 1.
 *
 * @summary Default args playground for Pagination
 */
export const Default: Story = {
	args: { onPageChange: fn() },
	argTypes: { onPageChange: { control: false, action: 'onPageChange' } },
	parameters: { a11y: { test: 'error' } },
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const nav = canvas.getByRole('navigation', { name: 'Pagination' });
		await expect(nav).toBeInTheDocument();
		await expect(canvas.getByText(/1 - 10 of 1,000/)).toBeInTheDocument();

		const prev = canvas.getByRole('button', { name: 'Go to previous page' });
		const next = canvas.getByRole('button', { name: 'Go to next page' });
		await expect(prev).toBeDisabled();
		await expect(next).toBeEnabled();

		const page1 = canvas.getByRole('button', { name: '1' });
		const page2 = canvas.getByRole('button', { name: '2' });
		await expect(page1).toHaveAttribute('aria-current', 'page');
		await expect(page2).not.toHaveAttribute('aria-current');

		await userEvent.click(canvas.getByRole('button', { name: '3' }));
		await expect(args.onPageChange).toHaveBeenLastCalledWith(3);

		await userEvent.click(next);
		await expect(args.onPageChange).toHaveBeenLastCalledWith(2);
	}
};

/**
 * Short list whose total pages fit in the visible window — no ellipsis is
 * rendered. Exercises the `totalPageNumbers >= totalPageCount` branch in
 * `getPages`.
 *
 * @summary Short page list with no ellipsis collapse
 */
export const FewPages: Story = {
	args: { currentPage: 2, totalCount: 30, pageSize: 10 }
};

/**
 * Current page sits near the start of the range — left ellipsis is hidden,
 * right ellipsis is shown, and the last page button anchors the right edge.
 *
 * @summary Right-side ellipsis only (current page near start)
 */
export const DotsRight: Story = {
	args: { currentPage: 2, totalCount: 1000, pageSize: 10 }
};

/**
 * Current page sits near the end of the range — left ellipsis is shown, right
 * ellipsis is hidden, and the first page button anchors the left edge.
 *
 * @summary Left-side ellipsis only (current page near end)
 */
export const DotsLeft: Story = {
	args: { currentPage: 99, totalCount: 1000, pageSize: 10 }
};

/**
 * Current page sits in the middle of the range — both ellipses are visible,
 * with the first and last page buttons anchoring each edge.
 *
 * @summary Both ellipses visible (current page in middle)
 */
export const DotsBoth: Story = {
	args: { currentPage: 50, totalCount: 1000, pageSize: 10 }
};

/**
 * Last page selected — the next-page button is disabled and the active page
 * indicator sits on the trailing number.
 *
 * @summary Last page selected with disabled next button
 */
export const LastPage: Story = {
	args: {
		currentPage: 100,
		totalCount: 1000,
		pageSize: 10,
		onPageChange: fn()
	},
	argTypes: { onPageChange: { control: false, action: 'onPageChange' } },
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const prev = canvas.getByRole('button', { name: 'Go to previous page' });
		const next = canvas.getByRole('button', { name: 'Go to next page' });
		await expect(prev).toBeEnabled();
		await expect(next).toBeDisabled();

		await expect(canvas.getByRole('button', { name: '100' })).toHaveAttribute(
			'aria-current',
			'page'
		);

		await userEvent.click(prev);
		await expect(args.onPageChange).toHaveBeenLastCalledWith(99);
	}
};

/**
 * Interactive controlled example. Local `useState` owns the page; clicking a
 * page, previous, or next button updates it so the active page indicator and
 * entries summary follow along.
 *
 * @summary Interactive controlled example backed by `useState`
 */
export const Controlled: Story = {
	render: ({ totalCount, pageSize }) => {
		const [page, setPage] = useState(1);

		return (
			<Pagination
				currentPage={page}
				totalCount={totalCount}
				pageSize={pageSize}
				onPageChange={setPage}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(await canvas.findByRole('button', { current: 'page' })).toHaveTextContent('1');

		const next = canvas.getByRole('button', { name: 'Go to next page' });
		await userEvent.click(next);
		await userEvent.click(next);

		await expect(await canvas.findByRole('button', { current: 'page' })).toHaveTextContent('3');
		await expect(canvas.getByText(/21 - 30 of 1,000/)).toBeInTheDocument();
	}
};
