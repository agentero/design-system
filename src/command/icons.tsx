import { SVGProps } from 'react';

/**
 * Magnifier rendered inside `Command.Input`'s search row. Fill color is
 * supplied by the surrounding class (`[&>path]:fill-...`) so the icon inherits
 * the search row's token.
 *
 * @summary 24px search icon used as the Command search affordance
 */
export const IconSearch = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M9.52 15.615q-2.562 0-4.34-1.777Q3.405 12.062 3.405 9.5T5.18 5.162q1.776-1.777 4.338-1.777t4.339 1.777q1.777 1.776 1.777 4.338 0 1.071-.36 2.046a5.7 5.7 0 0 1-.96 1.696l5.754 5.754q.209.209.213.522a.7.7 0 0 1-.213.532.72.72 0 0 1-.527.217.72.72 0 0 1-.527-.217l-5.753-5.754q-.75.62-1.725.97t-2.018.35m0-1.5q1.933 0 3.273-1.341 1.342-1.34 1.342-3.274 0-1.932-1.342-3.274-1.34-1.341-3.274-1.341-1.932 0-3.274 1.34Q4.904 7.569 4.904 9.5q0 1.933 1.341 3.274 1.342 1.341 3.274 1.341" />
	</svg>
);
