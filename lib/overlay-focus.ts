let lastInputWasPointer = false;

if (typeof document !== 'undefined') {
	document.addEventListener('pointerdown', () => (lastInputWasPointer = true), true);
	document.addEventListener('keydown', () => (lastInputWasPointer = false), true);
}

/**
 * Call from a Radix overlay's `onCloseAutoFocus` (menu, popover) to drop the
 * focus ring Chrome paints on the element Radix hands focus back to after a
 * pointer close. The trigger swallows its pointerdown, so the browser keeps the
 * input modality of the last key press and treats that focus as keyboard
 * focus. Radix still decides where focus goes; a keyboard close keeps its ring
 * so keyboard users still see where they are. Only a trigger (`aria-haspopup`)
 * is touched: a field the closing click moved focus to keeps it untouched, and a
 * consumer that prevented the close auto-focus keeps its own focus handling.
 *
 * @summary Removes the focus ring Radix leaves on a trigger after a pointer close
 */
export const hideFocusRingAfterPointerClose = (event: Event) => {
	if (event.defaultPrevented || !lastInputWasPointer) return;
	// Radix moves focus right after this handler returns, in the same task.
	queueMicrotask(() => {
		const focused = document.activeElement;
		if (
			!(focused instanceof HTMLElement) ||
			!focused.matches('[aria-haspopup]:not(input, textarea, [contenteditable]):focus-visible')
		)
			return;
		focused.blur();
		focused.focus({ focusVisible: false, preventScroll: true });
	});
};
