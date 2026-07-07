'use client';

import { ComponentPropsWithRef } from 'react';

import * as SwitchPrimitive from '@radix-ui/react-switch';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

export const switchRecipe = tv({
	slots: {
		root: [
			'inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors',
			'bg-bg-default-base-tertiary data-[state=checked]:bg-bg-default-base-inverse-primary',
			'focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary',
			'disabled:cursor-not-allowed disabled:opacity-50'
		],
		thumb:
			'block translate-x-0 rounded-full bg-bg-default-base-primary shadow-sm transition-transform'
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
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type SwitchSize = NonNullable<VariantProps<typeof switchRecipe>['size']>;

export type SwitchProps = ComponentPropsWithRef<typeof SwitchPrimitive.Root> &
	VariantProps<typeof switchRecipe>;

/**
 * Instant-effect on/off toggle built on Radix Switch. Reach for it over a
 * Checkbox when flipping a single boolean that applies immediately. Renders
 * only the toggle — pair it with a `<label htmlFor>` for an accessible name.
 *
 * @summary Instant-effect on/off toggle built on Radix Switch
 *
 * @example
 * <Switch checked={enabled} onCheckedChange={setEnabled} />
 */
export const Switch = ({ className, size, ref, ...props }: SwitchProps) => {
	const styles = switchRecipe({ size });

	return (
		<SwitchPrimitive.Root
			ref={ref}
			data-slot="switch"
			className={cn(styles.root(), className)}
			{...props}>
			<SwitchPrimitive.Thumb data-slot="switch-thumb" className={styles.thumb()} />
		</SwitchPrimitive.Root>
	);
};
