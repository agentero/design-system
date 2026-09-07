'use client';

import { ComponentPropsWithRef, ReactNode, createContext, use } from 'react';

import { useMergeProps } from '../../lib';

/**
 * Raw wiring of the surrounding `Field.Root`, for controls that have no
 * context of their own and connect themselves by hand.
 */
export type FieldContextValue = {
	/** `id` the control must carry so the label points at it. */
	controlId: string;
	/** `id` the `Field.Description` takes by default. */
	descriptionId: string;
	/** `id` the `Field.Error` takes by default. */
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
};

export const FieldContext = createContext<FieldContextValue | null>(null);

/**
 * Reads the surrounding `Field.Root`. Returns `null` outside a field, so a
 * control can read it and still work standalone. Reach for it when a control
 * has no context of its own; the design system's controls read theirs instead.
 *
 * @example
 * const field = useFieldContext();
 * <input id={field?.controlId} aria-describedby={field?.describedBy} aria-invalid={field?.invalid || undefined} />
 */
export const useFieldContext = () => use(FieldContext);

export type FieldDescriptionProps = ComponentPropsWithRef<'p'>;

/** Props `Field.Root` hands to the `Field.Description` inside it: its `id`. */
export const DescriptionContext = createContext<Partial<FieldDescriptionProps> | null>(null);

export const useDescriptionContext = (props: FieldDescriptionProps) =>
	useMergeProps(use(DescriptionContext), props);

/** A validation error. Structurally matches a react-hook-form `FieldError`. */
export type FieldErrorLike = { message?: string } | undefined;

export type FieldErrorProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
	/** Message to render. Takes precedence over `errors`. */
	children?: ReactNode;
	/**
	 * Errors to render, de-duplicated by message: one line for a single error, a
	 * bulleted list for several. Shaped to take a form library's error objects as
	 * they come.
	 */
	errors?: FieldErrorLike[];
};

/**
 * Props `Field.Root` hands to the `Field.Error` inside it: its `id`. A form
 * adapter can re-provide it with `errors` so a bare `<Field.Error />` renders
 * the field's validation messages.
 */
export const ErrorContext = createContext<Partial<FieldErrorProps> | null>(null);

export const useErrorContext = (props: FieldErrorProps) => useMergeProps(use(ErrorContext), props);
