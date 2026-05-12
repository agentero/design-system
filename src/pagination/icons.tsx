import { SVGProps } from 'react';

/**
 * Three-dot ellipsis glyph rendered inside the page list to indicate a
 * collapsed range between page numbers. The fill follows the surrounding
 * text color so it inherits the pagination button color tokens.
 *
 * @summary 24px horizontal-dots icon used as the page-range ellipsis
 */
export const IconHorizontalDots = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
	</svg>
);

/**
 * Left-chevron glyph rendered inside the previous-page icon button. The fill
 * follows the surrounding text color so it inherits the pagination button
 * color tokens.
 *
 * @summary 24px chevron-left icon used by the previous-page button
 */
export const IconKeyboardArrowLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M10.4539 12L14.5269 16.0731C14.6654 16.2115 14.7362 16.3856 14.7394 16.5952C14.7427 16.8048 14.6718 16.982 14.5269 17.1269C14.3821 17.2718 14.2064 17.3442 14 17.3442C13.7936 17.3442 13.618 17.2718 13.4731 17.1269L8.97892 12.6327C8.88532 12.5391 8.81929 12.4404 8.78084 12.3365C8.74238 12.2327 8.72314 12.1205 8.72314 12C8.72314 11.8795 8.74238 11.7673 8.78084 11.6635C8.81929 11.5596 8.88532 11.4609 8.97892 11.3673L13.4731 6.8731C13.6116 6.73463 13.7856 6.6638 13.9952 6.6606C14.2048 6.65738 14.3821 6.72821 14.5269 6.8731C14.6718 7.01796 14.7443 7.1936 14.7443 7.4C14.7443 7.6064 14.6718 7.78203 14.5269 7.9269L10.4539 12Z" />
	</svg>
);

/**
 * Right-chevron glyph rendered inside the next-page icon button. The fill
 * follows the surrounding text color so it inherits the pagination button
 * color tokens.
 *
 * @summary 24px chevron-right icon used by the next-page button
 */
export const IconKeyboardArrowRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M12.9462 12L8.87309 7.92689C8.73462 7.78844 8.66379 7.6144 8.66059 7.40479C8.65737 7.19519 8.7282 7.01795 8.87309 6.87309C9.01795 6.7282 9.19359 6.65576 9.39999 6.65576C9.60639 6.65576 9.78202 6.7282 9.92689 6.87309L14.4211 11.3673C14.5147 11.4609 14.5807 11.5596 14.6192 11.6635C14.6577 11.7673 14.6769 11.8795 14.6769 12C14.6769 12.1205 14.6577 12.2327 14.6192 12.3365C14.5807 12.4404 14.5147 12.5391 14.4211 12.6327L9.92689 17.1269C9.78844 17.2654 9.6144 17.3362 9.40479 17.3394C9.19519 17.3426 9.01795 17.2718 8.87309 17.1269C8.7282 16.982 8.65576 16.8064 8.65576 16.6C8.65576 16.3936 8.7282 16.218 8.87309 16.0731L12.9462 12Z" />
	</svg>
);
