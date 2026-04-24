import { SVGProps } from 'react';

/**
 * Right-arrow indicator rendered inside `DropdownMenu.SubTrigger` to signal
 * that a submenu will open. Fill color is supplied by the surrounding class
 * (`[&>path]:fill-...`) so the icon inherits the trigger's color token.
 *
 * @summary 24px arrow-right icon used as the submenu affordance
 */
export const IconArrowRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M10.25 9.92397C10.25 9.51885 10.4349 9.23841 10.8048 9.08264C11.1747 8.92688 11.5019 8.9913 11.7865 9.27592L14.0211 11.5105C14.1147 11.6041 14.1833 11.7028 14.2269 11.8066C14.2705 11.9105 14.2922 12.0227 14.2922 12.1432C14.2922 12.2637 14.2705 12.3759 14.2269 12.4797C14.1833 12.5836 14.1147 12.6823 14.0211 12.7759L11.7865 15.0105C11.5019 15.2951 11.1747 15.3595 10.8048 15.2037C10.4349 15.048 10.25 14.7675 10.25 14.3624L10.25 9.92397Z" />
	</svg>
);
