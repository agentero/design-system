'use client';

import { ComponentProps, createContext, useContext } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type VariantProps, tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { Button } from '../button';
import { IconClose } from './icons';

type RootProps = ComponentProps<typeof DialogPrimitive.Root>;

/**
 * Root container of a dialog that interrupts the flow — confirmations, forms,
 * and detail views. It owns the modal's open state, controlled via
 * `open`/`onOpenChange` or uncontrolled via `defaultOpen`/`Trigger`. Built on
 * Radix UI Dialog, so focus trapping, scroll locking, `Escape`/overlay
 * dismissal, and ARIA wiring come for free.
 *
 * Compose `Root` with `Content` (surface, `size` md/lg), and fill it with
 * `Title` (built-in X button), an optional `Description` right below it, `Body`
 * (scrollable), and `Footer` (right-aligned actions). Close from inside with
 * `Close asChild` around your cancel button.
 *
 * For a modal the user has to answer, pass `variant="alert"` to `Content`:
 * `Escape`, the overlay click and the X button all stop closing it, and it is
 * announced as an `alertdialog`.
 *
 * @summary Root provider for a Modal's open state
 *
 * @example
 * ```tsx
 * import { Modal } from '@agentero/design-system/modal';
 *
 * <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
 *   <Modal.Content size="md">
 *     <Modal.Title>Delete carrier</Modal.Title>
 *     <Modal.Description>This action cannot be undone.</Modal.Description>
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
 * @example
 * ```tsx
 * // Alert: no Escape, no overlay click, no X — the user must answer.
 * <Modal.Root open={isOpen}>
 *   <Modal.Content variant="alert">
 *     <Modal.Title>Complete your Docusign integration</Modal.Title>
 *     <Modal.Body>Authorize access to finish connecting your account.</Modal.Body>
 *     <Modal.Footer>
 *       <Button onClick={handleAuthorize}>Authorize</Button>
 *     </Modal.Footer>
 *   </Modal.Content>
 * </Modal.Root>
 * ```
 */
export const Root = (props: RootProps) => (
	<DialogPrimitive.Root data-slot="modal-root" {...props} />
);
Root.displayName = 'Modal.Root';

type TriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>;

/**
 * Button that opens the Modal. Pass `asChild` to delegate rendering to a
 * custom element (e.g. a `Button`) while inheriting Radix's wiring.
 *
 * @summary Toggle button that opens the Modal
 */
export const Trigger = (props: TriggerProps) => (
	<DialogPrimitive.Trigger data-slot="modal-trigger" {...props} />
);
Trigger.displayName = 'Modal.Trigger';

type ModalVariant = 'dialog' | 'alert';

const ModalVariantContext = createContext<ModalVariant>('dialog');

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
			'flex items-center justify-between gap-2 px-10 text-[1.375rem] leading-7 font-semibold text-text-default-base-primary',
		description: '-mt-4 px-10 text-base text-text-default-base-primary',
		body: '-my-1 max-h-[60vh] overflow-y-auto px-10 py-1',
		footer: 'flex shrink-0 items-center justify-end gap-4 px-10'
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
	/**
	 * `'dialog'` (default) is dismissable: `Escape`, an overlay click, and the
	 * X button in `Modal.Title` all close it. `'alert'` removes all three, so
	 * the only way out is one of the buttons in `Modal.Footer`, and exposes
	 * `role="alertdialog"` to assistive technology. Use it when dismissing
	 * without choosing would leave the user stuck or lose their work.
	 */
	variant?: ModalVariant;
};

/**
 * The modal surface, portalled over a dimmed overlay and centered in the
 * viewport. Focus is trapped inside, `Escape` and overlay clicks close it,
 * and body scroll is locked while open. Labelled by `Modal.Title`
 * automatically; pass `aria-label` for the rare titleless modal.
 *
 * `variant="alert"` turns off every implicit way out — `Escape`, the overlay
 * click, and the X button in `Modal.Title` — leaving only the footer actions.
 *
 * @summary Centered modal surface over a dimmed overlay
 */
export const Content = ({
	className,
	size,
	variant = 'dialog',
	children,
	onEscapeKeyDown,
	onPointerDownOutside,
	...props
}: ContentProps) => {
	const styles = modalRecipe({ size });
	const isAlert = variant === 'alert';

	return (
		<ModalVariantContext.Provider value={variant}>
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay data-slot="modal-overlay" className={styles.overlay()} />
				<DialogPrimitive.Content
					data-slot="modal-content"
					role={isAlert ? 'alertdialog' : 'dialog'}
					className={cn(styles.content(), className)}
					onEscapeKeyDown={event => {
						onEscapeKeyDown?.(event);
						if (isAlert) event.preventDefault();
					}}
					onPointerDownOutside={event => {
						onPointerDownOutside?.(event);
						if (isAlert) event.preventDefault();
					}}
					{...props}>
					{children}
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</ModalVariantContext.Provider>
	);
};
Content.displayName = 'Modal.Content';

type TitleProps = ComponentProps<typeof DialogPrimitive.Title>;

/**
 * Heading row of the modal with a built-in close (X) button. Radix wires it
 * as the modal's accessible name via `aria-labelledby`. The X button is
 * omitted inside a `Modal.Content` with `variant="alert"`.
 *
 * @summary Modal heading with built-in close button
 */
export const Title = ({ className, children, ...props }: TitleProps) => {
	const variant = useContext(ModalVariantContext);

	return (
		<div data-slot="modal-title" className={slots.title({ className })}>
			<DialogPrimitive.Title {...props}>{children}</DialogPrimitive.Title>
			{variant === 'dialog' && (
				<DialogPrimitive.Close asChild>
					<Button variant="ghost" size="sm" aria-label="Close" className="shrink-0">
						<IconClose />
					</Button>
				</DialogPrimitive.Close>
			)}
		</div>
	);
};
Title.displayName = 'Modal.Title';

type DescriptionProps = ComponentProps<typeof DialogPrimitive.Description>;

/**
 * Supporting text placed directly below `Modal.Title`, spaced 0.5rem beneath
 * it. Wired as the modal's accessible description via `aria-describedby`.
 *
 * @summary Supporting text below the Modal title
 */
export const Description = ({ className, ...props }: DescriptionProps) => (
	<DialogPrimitive.Description
		data-slot="modal-description"
		className={slots.description({ className })}
		{...props}
	/>
);
Description.displayName = 'Modal.Description';

type BodyProps = ComponentProps<'div'>;

/**
 * Scrollable content area of the modal. Focusable (`tabIndex 0`) so keyboard
 * users can scroll overflowing content with the arrow keys.
 *
 * @summary Scrollable modal content area
 */
export const Body = ({ className, ...props }: BodyProps) => (
	<div data-slot="modal-body" tabIndex={0} className={slots.body({ className })} {...props} />
);
Body.displayName = 'Modal.Body';

type FooterProps = ComponentProps<'div'>;

/**
 * Right-aligned action row at the bottom of the modal.
 *
 * @summary Right-aligned modal action row
 */
export const Footer = ({ className, ...props }: FooterProps) => (
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
export const Close = (props: CloseProps) => (
	<DialogPrimitive.Close data-slot="modal-close" {...props} />
);
Close.displayName = 'Modal.Close';
