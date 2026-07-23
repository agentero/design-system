'use client';

import { ComponentPropsWithRef } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

export type ValidationRule = {
	text: string;
	pattern: RegExp | ((value: string) => boolean);
};

export const validationListRecipe = tv({
	slots: {
		root: 'ml-4 flex list-inside list-disc flex-col gap-1 text-left',
		item: 'text-sm'
	},
	variants: {
		active: {
			true: { item: 'text-text-default-base-primary' },
			false: { item: 'text-text-default-base-tertiary' }
		}
	},
	defaultVariants: {
		active: false
	}
});

const slots = validationListRecipe();

export type ValidationListVariants = VariantProps<typeof validationListRecipe>;

export type ValidationListProps = Omit<ComponentPropsWithRef<'ul'>, 'children'> & {
	value: string;
	rules: ValidationRule[];
};

// Clone RegExp patterns so a stray `g` flag can't carry `lastIndex` across renders.
const isMet = (pattern: ValidationRule['pattern'], value: string) =>
	pattern instanceof RegExp ? new RegExp(pattern).test(value) : pattern(value);

/**
 * A checklist of rules that turn active as `value` satisfies them — one `<li>`
 * per rule, each matched via a `RegExp` or a `(value) => boolean` predicate.
 * Presentational only; pair it with your form validation.
 *
 * @example
 * <ValidationList
 * 	value={password}
 * 	rules={[{ text: 'At least 10 characters', pattern: value => value.length >= 10 }]}
 * />
 */
export const ValidationList = ({ value, rules, className, ...props }: ValidationListProps) => (
	<ul data-slot="validation-list" className={slots.root({ className })} {...props}>
		{rules.map(({ text, pattern }) => {
			const active = isMet(pattern, value);

			return (
				<li
					key={text}
					data-slot="validation-list-item"
					data-active={active}
					className={slots.item({ active })}>
					{text}
				</li>
			);
		})}
	</ul>
);
