'use client';

import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { getPages, PageType } from './get-pages';
import { IconHorizontalDots, IconKeyboardArrowLeft, IconKeyboardArrowRight } from './icons';

/**
 * Style recipe for Pagination using tailwind-variants. Multi-slot recipe that
 * owns every element the component renders: the `root` `<nav>`, the entries
 * `summary`, the `list` and per-page `item` wrappers, the page/prev/next
 * `button`, and the ellipsis `dots` span. The `active` variant paints the
 * current page button.
 *
 * Exported for advanced composition (e.g., styling a custom element to match
 * a Pagination slot). Prefer rendering the `Pagination` component.
 *
 * @summary tailwind-variants recipe backing the Pagination component styles
 */
export const paginationRecipe = tv({
	slots: {
		root: 'flex h-8 items-center justify-between gap-4',
		summary: 'text-base text-text-default-base-tertiary',
		list: 'flex items-center gap-2',
		item: 'flex min-w-8 h-8',
		button: [
			'relative inline-flex items-center justify-center',
			'text-sm font-semibold rounded-md cursor-pointer no-underline whitespace-nowrap',
			'min-w-8 h-8 px-1',
			'border border-solid border-transparent',
			'bg-bg-button-ghost-enable text-text-button-ghost-enable',
			'transition-[background-color,border-color,color] duration-200',
			'disabled:pointer-events-none disabled:opacity-30',
			'focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-[0.0625rem] focus-visible:outline-focus-ring-button-primary',
			'hover:not-aria-[current=page]:border-border-button-secondary-enable hover:not-aria-[current=page]:shadow-1',
			'[&_svg]:size-8 [&_svg]:-mx-2 [&_svg]:fill-current'
		],
		dots: 'inline-flex size-8 items-center justify-center text-text-button-ghost-enable [&_svg]:size-4 [&_svg]:fill-current'
	},
	variants: {
		active: {
			true: { button: 'bg-bg-button-ghost-hover border-bg-button-ghost-hover' }
		}
	}
});

/**
 * Props for the Pagination component.
 *
 * @property {(page: number) => void} onPageChange - Called with the next 1-indexed page number when the user clicks a page, prev, or next button.
 * @property {number} totalCount - Total number of items across all pages. Combined with `pageSize` to derive the total page count.
 * @property {number} currentPage - The 1-indexed page currently in view. Pass `0` to short-circuit and render nothing (legacy "off" sentinel).
 * @property {number} pageSize - Number of items per page. Drives both the page count and the entries-of-total summary.
 * @property {string} [className] - Additional CSS classes applied to the root `<nav>` element.
 */
export type PaginationProps = {
	onPageChange: (page: number) => void;
	totalCount: number;
	currentPage: number;
	pageSize: number;
	className?: string;
};

/**
 * Pagination is a 1-indexed paged navigation control with previous/next icon
 * buttons, numeric page buttons, and a leading "X - Y of Z" entries summary.
 * The page list collapses long ranges with `…` ellipses, keeping at most a
 * handful of buttons in view regardless of total page count. Use it whenever
 * a list, table, or grid is split across pages and the user needs direct
 * access to specific pages (not just prev/next).
 *
 * The control short-circuits to `null` when `currentPage === 0` (legacy "off"
 * sentinel) or when there are no pages to show, so it's safe to mount
 * unconditionally above a list that may be empty.
 *
 * Do **not** use Pagination for infinite-scroll feeds, sub-page-1 indexing
 * (the `0` value is reserved as the off-switch), or as a tab/segmented
 * control — it's strictly a page-of-pages affordance.
 *
 * @summary 1-indexed paged navigation control with prev/next, numeric pages, and entries summary
 *
 * @example
 * ```tsx
 * import { useState } from 'react';
 * import { Pagination } from '@agentero/design-system/pagination';
 *
 * const [page, setPage] = useState(1);
 *
 * <Pagination
 *   currentPage={page}
 *   pageSize={10}
 *   totalCount={1000}
 *   onPageChange={setPage}
 * />
 * ```
 */
export const Pagination = ({
	onPageChange,
	totalCount,
	currentPage,
	pageSize,
	className
}: PaginationProps) => {
	const pages = getPages({ currentPage, totalCount, pageSize });

	if (currentPage === 0 || pages.length === 0) {
		return null;
	}

	const onNext = () => onPageChange(currentPage + 1);
	const onPrevious = () => onPageChange(currentPage - 1);

	const listIsVisible = pages.length >= 2;
	const lastPage = pages[pages.length - 1]!.number;

	const startEntry = currentPage * pageSize - pageSize + 1;
	const endEntry = currentPage * pageSize > totalCount ? totalCount : currentPage * pageSize;

	const styles = paginationRecipe();

	return (
		<nav aria-label="Pagination" className={cn(styles.root(), className)}>
			<span className={styles.summary()}>
				{startEntry} - {endEntry} of {Intl.NumberFormat('en-US').format(totalCount)}
			</span>
			{listIsVisible && (
				<ul className={styles.list()}>
					<li className={styles.item()}>
						<button
							type="button"
							onClick={onPrevious}
							disabled={currentPage === 1}
							aria-label="Go to previous page"
							className={styles.button()}>
							<IconKeyboardArrowLeft />
						</button>
					</li>
					{pages.map(({ number, type }, index) =>
						type === PageType.Dots ? (
							<li className={styles.item()} key={index}>
								<span aria-hidden="true" className={styles.dots()}>
									<IconHorizontalDots />
								</span>
							</li>
						) : (
							<li className={styles.item()} key={index}>
								<button
									type="button"
									onClick={() => onPageChange(number)}
									aria-current={currentPage === number ? 'page' : undefined}
									className={styles.button({ active: currentPage === number })}>
									{Intl.NumberFormat('en-US').format(number)}
								</button>
							</li>
						)
					)}
					<li className={styles.item()}>
						<button
							type="button"
							onClick={onNext}
							disabled={currentPage === lastPage}
							aria-label="Go to next page"
							className={styles.button()}>
							<IconKeyboardArrowRight />
						</button>
					</li>
				</ul>
			)}
		</nav>
	);
};
