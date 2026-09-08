'use client';

import { ComponentPropsWithRef, ReactNode, createContext, use } from 'react';

/** A validation error. Structurally matches a react-hook-form `FieldError`. */
export type FieldErrorLike = { message?: string } | undefined;

/**
 * State of the surrounding `Field.Root`, shared with the Field family
 * (`Field.Description`, `Field.Error`) and with controls that have no context
 * of their own and connect themselves by hand.
 */
export type FieldContextValue = {
	/** `id` the control must carry so the label points at it. */
	controlId: string;
	/** `id` the `Field.Description` takes by default. One description per field. */
	descriptionId: string;
	/** `id` the `Field.Error` takes by default. One error element per field. */
	errorId: string;
	/**
	 * Ids of the messages currently rendered, ready for the control's
	 * `aria-describedby`. `undefined` while there is none, so the attribute is
	 * not rendered and never points at an element that does not exist.
	 */
	describedBy: string | undefined;
	/**
	 * Adds a message element to `describedBy` and returns the function that
	 * removes it. `Field.Description` and `Field.Error` call it from a layout
	 * effect; a custom message element can do the same.
	 */
	registerMessage: (id: string) => () => void;
	invalid: boolean;
	disabled: boolean;
	readOnly: boolean;
	required: boolean;
	/**
	 * Errors a bare `<Field.Error />` renders. `Field.Root` leaves it unset; a
	 * form adapter re-provides the context with the field's validation errors.
	 */
	errors?: FieldErrorLike[];
};

export const FieldContext = createContext<FieldContextValue | null>(null);

/**
 * Reads the surrounding `Field.Root`. Returns `null` outside a field, so a part
 * or a control can read it and still work standalone. Reach for it in a control
 * that has no context of its own; the design system's controls read theirs.
 *
 * @example
 * const field = useFieldContext();
 * <input id={field?.controlId} aria-describedby={field?.describedBy} aria-invalid={field?.invalid || undefined} />
 */
export const useFieldContext = () => use(FieldContext);

/** Props of `Field.Description`: a `<p>`. One per field. */
export type FieldDescriptionProps = ComponentPropsWithRef<'p'>;

export type FieldErrorProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
	/** Message to render. Takes precedence over `errors`. */
	children?: ReactNode;
	/**
	 * Errors to render, de-duplicated by message: one line for a single error, a
	 * bulleted list for several. Shaped to take a form library's error objects as
	 * they come. Falls back to the `errors` in `FieldContext`.
	 */
	errors?: FieldErrorLike[];
};
