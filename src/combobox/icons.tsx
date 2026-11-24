import { SVGProps } from 'react';

/**
 * Rounded check drawn inside a selected row's indicator, the same glyph
 * `Checkbox` uses, so a multi-select row reads as a ticked checkbox. Takes its
 * color from the surrounding text.
 *
 * @summary 16px check used by the Combobox selection indicator
 */
export const IconCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="16"
		height="16"
		viewBox="4 4 16 16"
		fill="currentColor"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M15.7705 9.20996C15.4722 8.92272 14.9973 8.93137 14.71 9.22949L10.9453 13.1377L9.31641 11.2588C9.0451 10.9459 8.57174 10.9124 8.25879 11.1836C7.94595 11.4549 7.91237 11.9283 8.18359 12.2412L10.3496 14.7412C10.4876 14.9004 10.6869 14.9945 10.8975 15C11.1078 15.0054 11.311 14.9221 11.457 14.7705L15.79 10.2705C16.0773 9.97222 16.0686 9.4973 15.7705 9.20996Z" />
	</svg>
);
