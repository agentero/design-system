import { tv } from 'tailwind-variants';

/**
 * Baseline styling for any SVG icon (e.g. from `lucide-react`): applies
 * `shrink-0` so the icon never collapses in a flex row, and merges any extra
 * Tailwind classes you pass. Size and color are the consumer's choice — set
 * them directly via `className` (e.g. `size-4`, `text-icon-default-base-secondary`).
 *
 * @example
 * <ChevronRightIcon className={iconStyles({ className: 'size-4' })} />
 * // equivalently, without the helper:
 * <ChevronRightIcon className="size-4 shrink-0" />
 */
export const iconStyles = tv({ base: 'shrink-0' });
