import { ComponentPropsWithRef } from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { IconCheck, IconMinus } from './icons';

/** Style recipe for Checkbox. Slots: `root` (the box), `indicator` (the glyph). */
export const checkboxRecipe = tv({
	slots: {
		root: [
			'group/checkbox box-border inline-flex size-4 shrink-0 appearance-none items-center justify-center rounded-sm',
			'border border-solid border-border-input-default bg-bg-input-normal',
			'cursor-pointer transition-colors duration-200 ease-in-out',
			'data-[state=checked]:border-bg-checkbox-selected data-[state=checked]:bg-bg-checkbox-selected',
			'data-[state=indeterminate]:border-bg-checkbox-selected data-[state=indeterminate]:bg-bg-checkbox-selected',
			'outline-solid outline-2 outline-offset-2 outline-transparent',
			'focus-visible:outline-focus-ring-button-primary',
			'aria-invalid:border-border-input-destructive',
			'aria-invalid:focus-visible:outline-focus-ring-button-destructive',
			'aria-invalid:data-[state=checked]:border-bg-default-danger-primary aria-invalid:data-[state=checked]:bg-bg-default-danger-primary',
			'aria-invalid:data-[state=indeterminate]:border-bg-default-danger-primary aria-invalid:data-[state=indeterminate]:bg-bg-default-danger-primary',
			'disabled:cursor-not-allowed disabled:border-border-checkbox-disabled',
			'disabled:data-[state=checked]:border-bg-checkbox-disabled disabled:data-[state=checked]:bg-bg-checkbox-disabled',
			'disabled:data-[state=indeterminate]:border-bg-checkbox-disabled disabled:data-[state=indeterminate]:bg-bg-checkbox-disabled',
			'aria-invalid:disabled:border-bg-checkbox-invalid-disabled',
			'aria-invalid:disabled:data-[state=checked]:border-bg-checkbox-invalid-disabled aria-invalid:disabled:data-[state=checked]:bg-bg-checkbox-invalid-disabled',
			'aria-invalid:disabled:data-[state=indeterminate]:border-bg-checkbox-invalid-disabled aria-invalid:disabled:data-[state=indeterminate]:bg-bg-checkbox-invalid-disabled'
		],
		indicator: 'flex items-center justify-center text-text-default-base-inverse-primary'
	}
});

/** Radix Checkbox root props; the ones redeclared here are the ones docgen would otherwise omit. */
export type CheckboxProps = Omit<
	ComponentPropsWithRef<typeof CheckboxPrimitive.Root>,
	'children'
> & {
	/** Controlled state. `'indeterminate'` renders a dash and announces `aria-checked="mixed"`. */
	checked?: CheckboxPrimitive.CheckboxProps['checked'];
	/** Initial state for an uncontrolled checkbox. */
	defaultChecked?: CheckboxPrimitive.CheckboxProps['defaultChecked'];
	/** Fires with the next state (`true`, `false` or `'indeterminate'`) on click and on Space. */
	onCheckedChange?: CheckboxPrimitive.CheckboxProps['onCheckedChange'];
	/** Blocks interaction and greys the box out; the value is not submitted. */
	disabled?: boolean;
	/** Marks the control required for the browser and assistive technology. */
	required?: boolean;
	/** Form field name. Needed for uncontrolled form usage. */
	name?: string;
	/** Value submitted when checked. Defaults to `'on'`. */
	value?: string;
	/** Drives the destructive border and fill. Point `aria-describedby` at the error message. */
	'aria-invalid'?: ComponentPropsWithRef<'button'>['aria-invalid'];
};

/**
 * Base control for a boolean the user confirms later: one item of a
 * multi-select, a terms tick, a row picked for a bulk action. Supports the
 * mixed state for a parent that summarises a partially selected group.
 * Keeps the legacy 16px surface, glyphs and state colours during adoption.
 *
 * Headless like [Input](?path=/docs/components-input--docs): pair it with
 * [Label](?path=/docs/components-label--docs) and `htmlFor`, or give it an
 * `aria-label`. There is no `status` prop — set `aria-invalid`.
 *
 * Use [Switch](?path=/docs/components-switch--docs) when the change applies
 * immediately, and [CheckList](?path=/docs/components-check-list--docs) for a
 * read-only list of ticked items.
 *
 * @summary Base checkbox control, with mixed state, unaware of form libraries
 *
 * @example
 * <Label htmlFor="terms">I accept the terms</Label>
 * <Checkbox id="terms" name="terms" required />
 */
export const Checkbox = ({ className, ref, ...props }: CheckboxProps) => {
	const styles = checkboxRecipe();

	return (
		<CheckboxPrimitive.Root
			ref={ref}
			data-slot="checkbox"
			className={cn(styles.root(), className)}
			{...props}>
			<CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className={styles.indicator()}>
				<IconCheck className="hidden size-3.5 group-data-[state=checked]/checkbox:block" />
				<IconMinus className="hidden size-3.5 group-data-[state=indeterminate]/checkbox:block" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
};
