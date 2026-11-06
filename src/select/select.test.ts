import { ComponentProps } from 'react';

import { expectTypeOf, it } from 'vitest';

import { Select } from './index';

it('should not take multiple on the root', () => {
	expectTypeOf<ComponentProps<typeof Select.Root>>().not.toHaveProperty('multiple');
});

it('should take a size token on the trigger', () => {
	expectTypeOf<ComponentProps<typeof Select.Trigger>['size']>().toEqualTypeOf<
		'sm' | 'md' | 'lg' | undefined
	>();
});

it('should take only a string className on the parts that Base UI would evaluate as a function', () => {
	expectTypeOf<ComponentProps<typeof Select.Trigger>['className']>().toEqualTypeOf<
		string | undefined
	>();
	expectTypeOf<ComponentProps<typeof Select.Content>['className']>().toEqualTypeOf<
		string | undefined
	>();
	expectTypeOf<ComponentProps<typeof Select.Item>['className']>().toEqualTypeOf<
		string | undefined
	>();
});
