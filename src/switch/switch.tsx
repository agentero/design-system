'use client';

import { ComponentPropsWithRef, useId } from 'react';

import * as SwitchPrimitive from '@radix-ui/react-switch';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

export const switchRecipe = tv({
	slots: {
		wrapper: 'inline-flex items-center gap-2.5',
		root: [
			'peer inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors',
			'bg-bg-default-base-tertiary data-[state=checked]:bg-bg-default-base-inverse-primary',
			'focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary',
			'disabled:cursor-not-allowed disabled:opacity-50'
		],
		thumb:
			'block translate-x-0 rounded-full bg-bg-default-base-primary shadow-sm transition-transform',
		label: [
			'cursor-pointer text-sm text-text-default-base-primary select-none',
			'peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
		]
	},
	variants: {
		size: {
			sm: {
				root: 'h-4 w-7.5 p-0.5',
				thumb: 'size-3 data-[state=checked]:translate-x-3.5'
			},
			md: {
				root: 'h-6 w-12 p-0.75',
				thumb: 'size-4.5 data-[state=checked]:translate-x-6'
			}
		},
		reverse: {
			true: {
				wrapper: 'flex-row-reverse'
			}
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type SwitchSize = NonNullable<VariantProps<typeof switchRecipe>['size']>;

export type SwitchProps = ComponentPropsWithRef<typeof SwitchPrimitive.Root> &
	VariantProps<typeof switchRecipe> & {
		/**
		 * Optional text rendered beside the toggle and associated with it via
		 * `htmlFor`. Provide an `id` so the association resolves. Omit it to keep
		 * the toggle headless and supply your own `<label htmlFor>`.
		 */
		label?: string;
	};

/**
 * Instant-effect on/off toggle built on Radix Switch. Reach for it over a
 * Checkbox when flipping a single boolean that applies immediately.
 *
 * Renders only the toggle by default — pair it with a `<label htmlFor>` for an
 * accessible name. Pass `label` (with an `id`) to render an associated text
 * label beside the toggle; `reverse` places the label before it.
 *
 * @summary Instant-effect on/off toggle built on Radix Switch
 *
 * @example
 * <Switch checked={enabled} onCheckedChange={setEnabled} />
 * @example
 * <Switch id="email-notifications" label="Email" checked={on} onCheckedChange={setOn} />
 */
export const Switch = ({ className, size, reverse, label, id, ref, ...props }: SwitchProps) => {
	const generatedId = useId();
	// Only synthesize an id when a label needs one to associate; headless usage
	// keeps whatever `id` (or none) the caller passed.
	const controlId = id ?? (label ? generatedId : undefined);
	const styles = switchRecipe({ size, reverse });

	const control = (
		<SwitchPrimitive.Root
			ref={ref}
			id={controlId}
			data-slot="switch"
			className={cn(styles.root(), className)}
			{...props}>
			<SwitchPrimitive.Thumb data-slot="switch-thumb" className={styles.thumb()} />
		</SwitchPrimitive.Root>
	);

	if (!label) {
		return control;
	}

	return (
		<span data-slot="switch-wrapper" className={styles.wrapper()}>
			{control}
			<label htmlFor={controlId} data-slot="switch-label" className={styles.label()}>
				{label}
			</label>
		</span>
	);
};
