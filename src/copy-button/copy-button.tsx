'use client';

import { useEffect, useState } from 'react';

import { tv } from 'tailwind-variants';

import { Button, type ButtonProps } from '../button';
import { Tooltip } from '../tooltip';
import { IconCheck, IconContentCopy } from './icons';

/**
 * Styles for CopyButton's two stacked glyphs. The `copied` variant crossfades
 * and scales the copy icon out and the check icon in; `motion-reduce` swaps
 * them without the transition.
 * - Slots: `glyphs` (the grid that stacks both icons), `copyIcon`, `checkIcon`.
 */
export const copyButtonRecipe = tv({
	slots: {
		glyphs: 'grid',
		copyIcon: [
			'col-start-1 row-start-1',
			'transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none'
		],
		checkIcon: [
			'col-start-1 row-start-1 text-icon-default-positive-primary',
			'transition-[opacity,scale] duration-150 ease-out motion-reduce:transition-none'
		]
	},
	variants: {
		copied: {
			true: { copyIcon: 'scale-50 opacity-0', checkIcon: 'scale-100 opacity-100' },
			false: { copyIcon: 'scale-100 opacity-100', checkIcon: 'scale-50 opacity-0' }
		}
	},
	defaultVariants: {
		copied: false
	}
});

export type CopyButtonProps = Omit<
	ButtonProps,
	'children' | 'onClick' | 'asChild' | 'iconOnly' | 'loading' | 'aria-label'
> & {
	/** Text written to the clipboard when the button is pressed. */
	value: string;
	/**
	 * Name of what gets copied, e.g. `'Agent ID'`. Builds the accessible name
	 * and tooltip (`Copy Agent ID`) and the announcement once it is copied.
	 */
	label: string;
	/** Fires after the value is on the clipboard, with that value. Use it for a toast or analytics. */
	onCopy?: (value: string) => void;
	/**
	 * Fires when the browser refuses the copy (no Clipboard API outside a secure
	 * context, or permission denied), with the error. The check is not shown.
	 */
	onCopyError?: (error: unknown) => void;
	/** How long the check stays before the copy icon returns, in ms. Defaults to `2000`. */
	feedbackDuration?: number;
};

/**
 * CopyButton is an icon-only button that copies `value` to the clipboard and
 * confirms it in place: the copy icon turns into a check for a moment, and
 * screen readers hear "<label> copied". Pair it with the value it copies, like
 * an ID or a URL shown next to it, so people can grab it whole even when the
 * text is truncated.
 *
 * It renders a ghost [Button](?path=/docs/components-button--docs) with a
 * [Tooltip](?path=/docs/components-tooltip--docs), so it fits dense rows and
 * cards. Do not use it for an action that has a visible text label (use a
 * Button with an icon), and do not use it to copy large or multi-part content,
 * where people need to see what they are taking.
 *
 * @summary Icon button that copies a value and confirms it with a check
 *
 * @example
 * <CopyButton value={agent.id} label="Agent ID" onCopy={() => toast.success('Agent ID copied')} />
 */
export const CopyButton = ({
	value,
	label,
	onCopy,
	onCopyError,
	feedbackDuration = 2000,
	variant = 'ghost',
	size = 'sm',
	...props
}: CopyButtonProps) => {
	const [copiedAt, setCopiedAt] = useState<number>();
	const isCopied = copiedAt !== undefined;
	const styles = copyButtonRecipe({ copied: isCopied });

	// Keyed on the copy time, so copying again restarts the check instead of cutting it short.
	useEffect(() => {
		if (copiedAt === undefined) return;

		const timeout = setTimeout(() => setCopiedAt(undefined), feedbackDuration);
		return () => clearTimeout(timeout);
	}, [copiedAt, feedbackDuration]);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(value);
		} catch (error) {
			onCopyError?.(error);
			return;
		}

		setCopiedAt(Date.now());
		onCopy?.(value);
	};

	return (
		<>
			<Tooltip content={`Copy ${label}`} asChild>
				<Button
					type="button"
					variant={variant}
					size={size}
					iconOnly
					aria-label={`Copy ${label}`}
					data-copied={isCopied || undefined}
					onClick={copy}
					{...props}>
					<span className={styles.glyphs()}>
						<IconContentCopy aria-hidden className={styles.copyIcon()} />
						<IconCheck aria-hidden className={styles.checkIcon()} />
					</span>
				</Button>
			</Tooltip>
			<span role="status" className="sr-only">
				{isCopied ? `${label} copied` : ''}
			</span>
		</>
	);
};
CopyButton.displayName = 'CopyButton';
