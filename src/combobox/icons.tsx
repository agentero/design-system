import { SVGProps } from 'react';

/**
 * Circled cross rendered inside `Combobox.Clear`, the affordance the legacy
 * search field used. Fill color is supplied by the surrounding class
 * (`[&>path]:fill-...`) so the icon follows the button's state instead of
 * carrying a color of its own.
 *
 * @summary 24px cancel icon used as the Combobox clear affordance
 */
export const IconCancel = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M12 13.0538L15.0731 16.1269C15.2115 16.2654 15.3856 16.3362 15.5952 16.3394C15.8048 16.3426 15.982 16.2718 16.1269 16.1269C16.2718 15.982 16.3442 15.8064 16.3442 15.6C16.3442 15.3936 16.2718 15.218 16.1269 15.0731L13.0538 12L16.1269 8.9269C16.2653 8.78845 16.3362 8.61442 16.3394 8.4048C16.3426 8.1952 16.2718 8.01797 16.1269 7.8731C15.982 7.72822 15.8064 7.65577 15.6 7.65577C15.3936 7.65577 15.2179 7.72822 15.0731 7.8731L12 10.9462L8.92688 7.8731C8.78842 7.73463 8.61439 7.6638 8.40478 7.6606C8.19518 7.65738 8.01794 7.72822 7.87308 7.8731C7.72819 8.01797 7.65575 8.1936 7.65575 8.4C7.65575 8.6064 7.72819 8.78203 7.87308 8.9269L10.9461 12L7.87308 15.0731C7.73461 15.2115 7.66378 15.3856 7.66058 15.5952C7.65736 15.8048 7.72819 15.982 7.87308 16.1269C8.01794 16.2718 8.19358 16.3442 8.39998 16.3442C8.60638 16.3442 8.78201 16.2718 8.92688 16.1269L12 13.0538ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5766 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45271 3.248 8.29657C3.74667 7.14042 4.42342 6.13474 5.27825 5.27952C6.1331 4.42429 7.13834 3.74723 8.29398 3.24835C9.44959 2.74947 10.6844 2.50002 11.9983 2.50002C13.3122 2.50002 14.5473 2.74936 15.7034 3.24802C16.8596 3.74669 17.8652 4.42344 18.7205 5.27827C19.5757 6.13312 20.2527 7.13837 20.7516 8.294C21.2505 9.44962 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8653 18.7217 18.7205C17.8669 19.5757 16.8616 20.2528 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76664 4 7.87498 4.775 6.32498 6.325C4.77498 7.875 3.99998 9.76667 3.99998 12C3.99998 14.2333 4.77498 16.125 6.32498 17.675C7.87498 19.225 9.76664 20 12 20Z" />
	</svg>
);

/**
 * Material Sharp check drawn inside a selected row's indicator, the same glyph
 * `Checkbox` uses, so a multi-select row reads as a ticked checkbox. Takes its
 * color from the surrounding text.
 *
 * @summary 24px check used by the Combobox selection indicator
 */
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

/**
 * Magnifier leading the `search` variant of `Combobox.Input`, the same glyph
 * `Command` uses. Fill color comes from the input group addon, so it follows
 * the field's disabled state.
 *
 * @summary 24px search icon leading the Combobox search field
 */
export const IconSearch = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M9.52 15.615q-2.562 0-4.34-1.777Q3.405 12.062 3.405 9.5T5.18 5.162q1.776-1.777 4.338-1.777t4.339 1.777q1.777 1.776 1.777 4.338 0 1.071-.36 2.046a5.7 5.7 0 0 1-.96 1.696l5.754 5.754q.209.209.213.522a.7.7 0 0 1-.213.532.72.72 0 0 1-.527.217.72.72 0 0 1-.527-.217l-5.753-5.754q-.75.62-1.725.97t-2.018.35m0-1.5q1.933 0 3.273-1.341 1.342-1.34 1.342-3.274 0-1.932-1.342-3.274-1.34-1.341-3.274-1.341-1.932 0-3.274 1.34Q4.904 7.569 4.904 9.5q0 1.933 1.341 3.274 1.342 1.341 3.274 1.341" />
	</svg>
);

/**
 * Downward chevron inside the `chevron` variant's trigger, the same glyph
 * `Accordion` uses. Fill color is supplied by the trigger's class so it
 * follows the button's state.
 *
 * @summary 24px chevron-down icon used as the Combobox list trigger
 */
export const IconKeyboardArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M12 14.677a.83.83 0 0 1-.633-.256L6.873 9.927a.73.73 0 0 1-.212-.522.7.7 0 0 1 .212-.532.72.72 0 0 1 .527-.217q.31 0 .527.217L12 12.946l4.073-4.073a.73.73 0 0 1 .522-.212.7.7 0 0 1 .532.212q.217.217.217.527a.72.72 0 0 1-.217.527l-4.494 4.494a.83.83 0 0 1-.633.256" />
	</svg>
);
