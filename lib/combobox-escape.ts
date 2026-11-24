// Radix closes a Modal or Popover on an Escape it catches on the document during capture, before
// the focused control sees it. An Escape from a combobox is the field's to take first: Base UI
// (Combobox, Autocomplete) stops it when it closes the list or clears the value, and lets it bubble
// when it has nothing to undo, such as no matches and no `Empty`. So the layer holds the Escape,
// and closes only if it comes back up unstopped, by sending a fresh Escape from the body that no
// combobox will claim. It waits on the window, past the document, where Base UI may stop it too.
// cmdk never stops it, so a `Command` closes the layer at once.
// Returns whether the Escape was held, in which case the layer's own handling must not run.
export const deferEscapeToCombobox = (event: KeyboardEvent) => {
	const target = event.target;
	if (!(target instanceof Element) || !target.matches('[role="combobox"]')) return false;
	const doc = target.ownerDocument;
	const win = doc.defaultView;
	if (!win) return false;

	event.preventDefault();
	const onBubble = (bubbled: KeyboardEvent) => {
		if (bubbled !== event) return;
		doc.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
	};
	win.addEventListener('keydown', onBubble, { once: true });
	// A stopped Escape never reaches the listener; drop it once this dispatch is over.
	setTimeout(() => win.removeEventListener('keydown', onBubble));
	return true;
};
