type Page = {
	number: number;
	type: PageType;
};

type UsePaginationProps = {
	totalCount: number;
	pageSize: number;
	currentPage: number;
};

export enum PageType {
	Normal,
	Dots
}

const getPagesRange = (start: number, end: number): Page[] => {
	const length = end - start + 1;
	return Array.from({ length }, (_, index) => ({
		number: index + start,
		type: PageType.Normal
	}));
};

const FIRST_PAGE_INDEX = 1;
const SIBLING_COUNT = 1;
const DOTS_PAGE: Page = { number: 0, type: PageType.Dots };

export const getPages = ({ totalCount, pageSize, currentPage }: UsePaginationProps): Page[] => {
	const totalPageCount = Math.ceil(totalCount / pageSize);

	// Pages count is determined as SIBLING_COUNT + firstPage + lastPage + currentPage + dots * 2
	// It is the number of items displayed except for the prev and next buttons
	const totalPageNumbers = SIBLING_COUNT + 5;

	// If the number of pages is less than the page numbers we want to show in our paginationComponent,
	// we return the getPagesRange between 1 and the totalPageCount
	if (totalPageNumbers >= totalPageCount) {
		return getPagesRange(1, totalPageCount);
	}

	const leftSiblingIndex = Math.max(currentPage - SIBLING_COUNT, 1);
	const rightSiblingIndex = Math.min(currentPage + SIBLING_COUNT, totalPageCount);

	// Dots won't be displayed if there is only one position left after/before the left/right page count
	// as it would lead to a change in the size
	const hasLeftDots = leftSiblingIndex > 2;
	const hasRightDots = rightSiblingIndex < totalPageCount - 2;

	if (!hasLeftDots && hasRightDots) {
		const leftItemCount = 3 + 2 * SIBLING_COUNT;
		const leftPagesRange = getPagesRange(1, leftItemCount);

		return [...leftPagesRange, DOTS_PAGE, { number: totalPageCount, type: PageType.Normal }];
	}

	if (hasLeftDots && !hasRightDots) {
		const rightItemCount = 3 + 2 * SIBLING_COUNT;
		const rightPagesRange = getPagesRange(totalPageCount - rightItemCount + 1, totalPageCount);

		return [{ number: FIRST_PAGE_INDEX, type: PageType.Normal }, DOTS_PAGE, ...rightPagesRange];
	}

	if (hasLeftDots && hasRightDots) {
		const middlePagesRange = getPagesRange(leftSiblingIndex, rightSiblingIndex);

		return [
			{ number: FIRST_PAGE_INDEX, type: PageType.Normal },
			DOTS_PAGE,
			...middlePagesRange,
			DOTS_PAGE,
			{ number: totalPageCount, type: PageType.Normal }
		];
	}

	return [];
};
