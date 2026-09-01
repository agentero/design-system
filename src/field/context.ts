'use client';

import { createContext, use } from 'react';

/**
 * Wiring one field shares with the parts inside it. `Field` generates it once
 * and its own parts consume it; base controls never read it directly — the
 * control receives plain props and stays unaware that a field exists.
 *
 * `describedBy` always lists both the description and the error id, even when
 * neither is rendered. Assistive technology ignores references to elements that
 * do not exist, so the dangling ids cost nothing and spare the description and
 * error from registering themselves with the root — which would mean state and
 * a re-render per field.
 *
 * @summary Ids and validity a Field shares with the parts inside it
 */
export type FieldContextValue = {
	/** Id the field's control receives; the caption points its `htmlFor` here. */
	controlId: string;
	/** Whether the field is in an error state. Mirror it onto `aria-invalid` as `invalid || undefined`, never `"false"`. */
	invalid: boolean;
	/** Whether the field is required. Drives both the caption's asterisk and the control's native `required`. */
	required: boolean;
	/** Id the field's description paragraph renders with. */
	descriptionId: string;
	/** Id the field's error message renders with. */
	errorId: string;
	/**
	 * Space-separated `descriptionId errorId`, always advertised even when
	 * neither part is rendered — put this on every element of a composite
	 * control so they all announce the same description and error.
	 */
	describedBy: string;
};

/**
 * Context a `Field` provides to everything rendered inside it. Lives in its own
 * module so importing the hook does not pull `field.tsx` — and its Tooltip
 * dependency — into another subpath's module graph.
 *
 * @summary Context object carrying one field's ids and validity
 */
export const FieldContext = createContext<FieldContextValue | null>(null);

/**
 * Reads the surrounding field's wiring. Returns `null` outside a `Field`, so
 * anything built on it keeps working standalone.
 *
 * This is the field layer's escape hatch: published on purpose, but off the
 * path. The supported way to build a field is a ready-made `Field<X>` such as
 * [FieldText](?path=/docs/components-fieldtext--docs), or the generic
 * [Field](?path=/docs/components-field--docs) with a single control as its
 * child — both lay the field out for you. Reach for this hook only when neither
 * can express what you need: a control made of several elements, where there is
 * no single child to inject the wiring into.
 *
 * Two rules if you do:
 *
 * 1. **Never from a base control.** An `Input` that reads this behaves
 *    differently depending on where it is rendered, and every future control
 *    would have to repeat the coupling. Read it from the field-level component
 *    you are writing and pass plain props down.
 * 2. **You take over the placement.** `Field` places its parts through the
 *    recipe; wiring by hand means arranging by hand, and a field that arranges
 *    itself differently is a field that looks different from every other one.
 *
 * @summary Escape hatch exposing the surrounding Field's ids and validity
 *
 * @example
 * // A composite control: two elements that together are one field's control.
 * const AmountWithCurrency = () => {
 *   const field = useFieldContext();
 *
 *   return (
 *     <div className="flex items-center gap-2">
 *       <Input
 *         id={field?.controlId}
 *         aria-describedby={field?.describedBy}
 *         aria-invalid={field?.invalid || undefined}
 *         required={field?.required || undefined}
 *         inputMode="decimal"
 *       />
 *       <span aria-hidden>USD</span>
 *     </div>
 *   );
 * };
 *
 * <Field label="Coverage limit" errors={[limitError]}>
 *   <AmountWithCurrency />
 * </Field>
 */
export const useFieldContext = () => use(FieldContext);
