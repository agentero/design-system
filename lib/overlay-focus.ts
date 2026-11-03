import { useRef } from 'react';

let lastInputWasPointer = false;

if (typeof document !== 'undefined') {
	document.addEventListener('pointerdown', () => (lastInputWasPointer = true), true);
	document.addEventListener('keydown', () => (lastInputWasPointer = false), true);
}

type AutoFocusHandler = (event: Event) => void;

/**
 * Focus handlers for a Radix overlay `Content` (menu, popover) that hand focus
 * back to the trigger without a focus ring after a pointer close. The trigger
 * swallows its pointerdown, so Chrome treats the focus Radix moves back on
 * close as keyboard focus and paints the ring. A keyboard close keeps Radix's
 * own behaviour, ring included, so keyboard users still see where they are.
 *
 * The trigger is the content's `aria-labelledby` (menus), or else the element
 * whose `aria-controls` names the content on open, which Radix only sets while
 * it is open (popovers). Pass the consumer's own handlers in; they run first,
 * and one that calls `preventDefault` keeps the default skipped.
 *
 * @summary Returns focus to an overlay trigger with no ring after a pointer close
 */
export const useOverlayFocus = ({
	onOpenAutoFocus,
	onCloseAutoFocus
}: {
	onOpenAutoFocus?: AutoFocusHandler;
	onCloseAutoFocus?: AutoFocusHandler;
}) => {
	const triggerRef = useRef<HTMLElement | null>(null);

	return {
		onOpenAutoFocus: (event: Event) => {
			onOpenAutoFocus?.(event);
			const { id } = event.target as HTMLElement;
			triggerRef.current = id
				? document.querySelector<HTMLElement>(`[aria-controls="${CSS.escape(id)}"]`)
				: null;
		},
		onCloseAutoFocus: (event: Event) => {
			onCloseAutoFocus?.(event);
			if (event.defaultPrevented || !lastInputWasPointer) return;
			event.preventDefault();
			const content = event.target as HTMLElement;
			const active = document.activeElement;
			// An outside click that focused another control keeps that focus.
			if (active && active !== document.body && !content.contains(active)) return;
			const labelledBy = content.getAttribute('aria-labelledby');
			const trigger =
				triggerRef.current ?? (labelledBy ? document.getElementById(labelledBy) : null);
			trigger?.focus({ focusVisible: false });
		}
	};
};
