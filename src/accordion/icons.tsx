import { SVGProps } from 'react';

/**
 * Downward chevron glyph rendered inside `Accordion.Trigger` as the
 * expand/collapse affordance. Rotates 180° when its item is expanded (driven
 * by the trigger's `data-state=open` via a `group-data-*` class). The fill
 * follows `currentColor` so it inherits the trigger's text color token.
 *
 * @summary 24px chevron-down icon used as the accordion trigger affordance
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
