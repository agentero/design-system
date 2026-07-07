'use client';

import { ComponentProps } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type VariantProps, tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { Button } from '../button';
import { IconClose } from './icons';

type RootProps = ComponentProps<typeof DialogPrimitive.Root>;

/**
 * Root container that owns the modal's open state — controlled via
 * `open`/`onOpenChange` or uncontrolled via `defaultOpen`/`Trigger`.
 *
 * @summary Root provider for a Modal's open state
 */
const Root = (props: RootProps) => <DialogPrimitive.Root data-slot="modal-root" {...props} />;
Root.displayName = 'Modal.Root';

type TriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>;

/**
 * Button that opens the Modal. Pass `asChild` to delegate rendering to a
 * custom element (e.g. a `Button`) while inheriting Radix's wiring.
 *
 * @summary Toggle button that opens the Modal
 */
const Trigger = (props: TriggerProps) => (
	<DialogPrimitive.Trigger data-slot="modal-trigger" {...props} />
);
Trigger.displayName = 'Modal.Trigger';

// `motion-reduce:animate-none!` — the `!` outranks the higher-specificity data-[state=…] rules
export const modalRecipe = tv({
	slots: {
		overlay: [
			'fixed inset-0 z-(--z-index-overlay) bg-overlay-dark-300',
			'data-[state=open]:animate-modal-overlay-in data-[state=closed]:animate-modal-overlay-out',
			'motion-reduce:animate-none!'
		],
		content: [
			'fixed top-1/2 left-1/2 z-(--z-index-modal) -translate-x-1/2 -translate-y-1/2',
			'flex max-h-[calc(100dvh-4rem)] w-[calc(100vw-2rem)] flex-col gap-6',
			'rounded-lg bg-bg-default-base-primary py-10 shadow-sm outline-none',
			'data-[state=open]:animate-modal-content-in data-[state=closed]:animate-modal-content-out',
			'motion-reduce:animate-none!'
		],
		title:
			'flex items-start justify-between gap-2 px-10 text-[1.375rem] leading-7 font-semibold text-text-default-base-primary',
		body: '-my-1 max-h-[60vh] overflow-y-auto px-10 py-1',
		footer: 'flex shrink-0 items-center justify-end gap-2 px-10'
	},
	variants: {
		size: {
			md: { content: 'max-w-[33.75rem]' },
			lg: { content: 'max-w-[45rem]' }
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

type ModalVariants = VariantProps<typeof modalRecipe>;

// Shared instance for the slots that take no variants (Title, Body, Footer).
const slots = modalRecipe();

type ContentProps = ComponentProps<typeof DialogPrimitive.Content> & {
	/**
	 * Width of the modal. Defaults to `'md'` (540px); `'lg'` is 720px.
	 * Both shrink to the viewport on small screens.
	 */
	size?: ModalVariants['size'];
};

/**
 * The modal surface, portalled over a dimmed overlay and centered in the
 * viewport. Focus is trapped inside, `Escape` and overlay clicks close it,
 * and body scroll is locked while open. Labelled by `Modal.Title`
 * automatically; pass `aria-label` for the rare titleless modal.
 *
 * @summary Centered modal surface over a dimmed overlay
 */
const Content = ({ className, size, children, ...props }: ContentProps) => {
	const styles = modalRecipe({ size });

	return (
		<DialogPrimitive.Portal>
			<DialogPrimitive.Overlay data-slot="modal-overlay" className={styles.overlay()} />
			<DialogPrimitive.Content
				data-slot="modal-content"
				aria-describedby={undefined}
				className={cn(styles.content(), className)}
				{...props}>
				{children}
			</DialogPrimitive.Content>
		</DialogPrimitive.Portal>
	);
};
Content.displayName = 'Modal.Content';

type TitleProps = ComponentProps<typeof DialogPrimitive.Title>;

/**
 * Heading row of the modal with a built-in close (X) button. Radix wires it
 * as the modal's accessible name via `aria-labelledby`.
 *
 * @summary Modal heading with built-in close button
 */
const Title = ({ className, children, ...props }: TitleProps) => (
	<div data-slot="modal-title" className={slots.title({ className })}>
		<DialogPrimitive.Title {...props}>{children}</DialogPrimitive.Title>
		<DialogPrimitive.Close asChild>
			<Button variant="ghost" size="sm" aria-label="Close" className="-my-2 -mr-6 shrink-0">
				<IconClose />
			</Button>
		</DialogPrimitive.Close>
	</div>
);
Title.displayName = 'Modal.Title';

type BodyProps = ComponentProps<'div'>;

/**
 * Scrollable content area of the modal. Focusable (`tabIndex 0`) so keyboard
 * users can scroll overflowing content with the arrow keys.
 *
 * @summary Scrollable modal content area
 */
const Body = ({ className, ...props }: BodyProps) => (
	<div data-slot="modal-body" tabIndex={0} className={slots.body({ className })} {...props} />
);
Body.displayName = 'Modal.Body';

type FooterProps = ComponentProps<'div'>;

/**
 * Right-aligned action row at the bottom of the modal.
 *
 * @summary Right-aligned modal action row
 */
const Footer = ({ className, ...props }: FooterProps) => (
	<div data-slot="modal-footer" className={slots.footer({ className })} {...props} />
);
Footer.displayName = 'Modal.Footer';

type CloseProps = ComponentProps<typeof DialogPrimitive.Close>;

/**
 * Closes the modal when activated. Pass `asChild` to wrap your own button —
 * the idiomatic replacement for the legacy `{({ close }) => …}` render prop.
 *
 * @summary Closes the Modal when activated
 */
const Close = (props: CloseProps) => <DialogPrimitive.Close data-slot="modal-close" {...props} />;
Close.displayName = 'Modal.Close';

/**
 * Modal is the compound component for dialogs that interrupt the flow —
 * confirmations, forms, and detail views. Built on Radix UI Dialog, so focus
 * trapping, scroll locking, `Escape`/overlay dismissal, and ARIA wiring come
 * for free.
 *
 * Compose `Root` (open state) with `Content` (surface, `size` md/lg), and
 * fill it with `Title` (built-in X button), `Body` (scrollable), and `Footer`
 * (right-aligned actions). Open it controlled (`open`/`onOpenChange`) or via
 * `Trigger`; close from inside with `Close asChild` around your cancel button.
 *
 * @summary Compound modal dialog over a dimmed overlay
 *
 * @example
 * ```tsx
 * <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
 *   <Modal.Content size="md">
 *     <Modal.Title>Delete carrier</Modal.Title>
 *     <Modal.Body>This action cannot be undone.</Modal.Body>
 *     <Modal.Footer>
 *       <Modal.Close asChild>
 *         <Button variant="ghost">Cancel</Button>
 *       </Modal.Close>
 *       <Button onClick={handleDelete}>Delete</Button>
 *     </Modal.Footer>
 *   </Modal.Content>
 * </Modal.Root>
 * ```
 *
 * @component
 * @namespace Modal
 */
export const Modal = {
	Root,
	Trigger,
	Content,
	Title,
	Body,
	Footer,
	Close
};
