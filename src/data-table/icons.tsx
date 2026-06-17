import { SVGProps } from 'react';

/**
 * Upward arrow glyph rendered inside a sortable column header when that column
 * is actively sorted. Rotates 180° via a CSS class to indicate descending
 * order. The fill follows `currentColor` so it inherits the header's text
 * color token.
 *
 * @summary 24px arrow-upward icon used as the active sort indicator
 */
export const IconArrowUpward = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			fill="currentColor"
			d="m11.25 7.373-5.17 5.17a.7.7 0 0 1-.521.22.74.74 0 0 1-.532-.236.78.78 0 0 1-.225-.527.7.7 0 0 1 .225-.527l6.34-6.34A.83.83 0 0 1 12 4.877q.18 0 .337.058a.8.8 0 0 1 .296.198l6.34 6.34q.209.208.213.515a.75.75 0 0 1-.213.539.74.74 0 0 1-.534.233.74.74 0 0 1-.535-.233L12.75 7.373V18.75a.73.73 0 0 1-.215.535.73.73 0 0 1-.535.215.73.73 0 0 1-.534-.215.73.73 0 0 1-.216-.535z"
		/>
	</svg>
);

/**
 * Vertical swap glyph rendered inside a sortable column header that is not
 * currently sorted, signalling the column can be sorted. The fill follows
 * `currentColor` so it inherits the header's text color token.
 *
 * @summary 24px swap-vert icon used as the sortable (unsorted) indicator
 */
export const IconSwapVert = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			fill="currentColor"
			d="M9.163 12.644a.73.73 0 0 1-.534-.216.73.73 0 0 1-.215-.534v-6.53L6.096 7.68a.68.68 0 0 1-.507.207.767.767 0 0 1-.77-.751q0-.303.233-.535l3.47-3.47a.8.8 0 0 1 .297-.197 1.001 1.001 0 0 1 .678 0 .8.8 0 0 1 .3.198l3.493 3.494a.7.7 0 0 1 .22.517.788.788 0 0 1-.763.752.7.7 0 0 1-.526-.225L9.914 5.364v6.54q0 .315-.216.527a.73.73 0 0 1-.535.213m5.682 8.47a1 1 0 0 1-.341-.059.8.8 0 0 1-.3-.197l-3.495-3.495a.7.7 0 0 1-.22-.517.788.788 0 0 1 .763-.752.7.7 0 0 1 .527.225l2.307 2.308v-6.54q0-.315.216-.528a.73.73 0 0 1 .535-.213q.318 0 .534.216a.73.73 0 0 1 .215.534v6.531l2.318-2.317a.68.68 0 0 1 .507-.208.767.767 0 0 1 .77.752q0 .302-.233.535l-3.47 3.469a.8.8 0 0 1-.296.198 1 1 0 0 1-.337.057"
		/>
	</svg>
);

/**
 * Downward chevron glyph used by the row expand/collapse button. Rotates 180°
 * when its row is expanded (driven by `data-state=open`). The fill follows
 * `currentColor` so it inherits the button's text color token.
 *
 * @summary 24px chevron-down icon used by the row expand button
 */
export const IconKeyboardArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			fill="currentColor"
			d="M12 14.677a.83.83 0 0 1-.633-.256L6.873 9.927a.73.73 0 0 1-.212-.522.7.7 0 0 1 .212-.532.72.72 0 0 1 .527-.217q.31 0 .527.217L12 12.946l4.073-4.073a.73.73 0 0 1 .522-.212.7.7 0 0 1 .532.212q.217.217.217.527a.72.72 0 0 1-.217.527l-4.494 4.494a.83.83 0 0 1-.633.256"
		/>
	</svg>
);
