import { SVGProps } from 'react';

/** @summary Material Sharp check used by the legacy checkbox */
export const IconCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="currentColor"
		stroke="currentColor"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
	</svg>
);

/** @summary Rounded minus used by the legacy checkbox's mixed state */
export const IconMinus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M5 12h14" />
	</svg>
);
