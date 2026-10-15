// Radix closes a Modal or Popover on an Escape it catches on the document during capture, before
// the focused control sees it. An Escape from an expanded combobox (Combobox, Autocomplete) belongs
// to its list: it closes the list, and the next Escape, from the collapsed field, closes the layer.
export const isFromExpandedCombobox = (event: KeyboardEvent) =>
	event.target instanceof Element &&
	event.target.matches('[role="combobox"][aria-expanded="true"]');
