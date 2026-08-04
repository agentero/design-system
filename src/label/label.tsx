'use client';

import { ComponentPropsWithRef } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';
import { useFieldContext } from '../field/context';

/** Style recipe for Label. Slots: `root`, `text`, `required`. */
export const labelRecipe = tv({
	slots: {
		root: 'flex flex-wrap gap-1 py-0.25 text-sm font-semibold text-text-input-normal',
		text: 'align-middle',
		required: 'ms-1 align-middle text-text-input-destructive'
	},
	variants: {
		optional: {
			true: {
				// `text-input-optional` does not exist in the theme; this reuses the
				// muted token Field.Description already uses, so the two stay in step.
				text: 'after:font-normal after:text-text-input-placeholder after:content-["_(optional)"]'
			}
		}
	},
	defaultVariants: {
		optional: false
	}
});

export type LabelVariants = VariantProps<typeof labelRecipe>;

export type LabelProps = ComponentPropsWithRef<typeof LabelPrimitive.Root> &
	LabelVariants & {
		/** Appends a muted " (optional)" suffix. Ignored when `required` is set. */
		optional?: boolean;
		/** Appends a decorative asterisk. Mark the control itself `required` too — the asterisk is `aria-hidden`. */
		required?: boolean;
	};

/**
 * Accessible caption for a form control, built on Radix's Label primitive so it
 * associates with the control via `htmlFor` and does not select text on
 * double-click. Inside a `Field.Root` it takes the control's `id` from context,
 * so `htmlFor` is only needed standalone.
 *
 * Keep it text-only. Nesting an interactive element (a help tooltip trigger, a
 * button) inside a `<label>` gives that element the label's accessible name and
 * makes a click focus the control — render it as a sibling instead.
 *
 * @summary Accessible caption for a form control
 *
 * @example
 * <Label htmlFor="phone" optional>Phone number</Label>
 * <Input id="phone" type="tel" />
 */
export const Label = ({
	className,
	children,
	optional = false,
	required = false,
	htmlFor,
	...props
}: LabelProps) => {
	const field = useFieldContext();

	// `required` wins over `optional` rather than throwing: a published component
	// should not crash the page over contradictory props.
	const styles = labelRecipe({ optional: optional && !required });

	return (
		<LabelPrimitive.Root
			data-slot="label"
			htmlFor={htmlFor ?? field?.id}
			className={cn(styles.root(), className)}
			{...props}>
			<span className={styles.text()}>{children}</span>

			{required && (
				<span aria-hidden className={styles.required()}>
					*
				</span>
			)}
		</LabelPrimitive.Root>
	);
};

Label.displayName = 'Label';
