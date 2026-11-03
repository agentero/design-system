let lastInputWasPointer = false;

if (typeof document !== 'undefined') {
	document.addEventListener('pointerdown', () => (lastInputWasPointer = true), true);
	document.addEventListener('keydown', () => (lastInputWasPointer = false), true);
}

/** Radix triggers cancel their pointerdown, so Chrome keeps the last key press's modality and rings
 * the trigger Radix refocuses on close. Call from `onCloseAutoFocus`; a keyboard close keeps the ring. */
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
		// focus() on the element that already has focus is a no-op, so the ring only drops on a fresh focus.
		focused.blur();
		focused.focus({ focusVisible: false, preventScroll: true });
	});
};
