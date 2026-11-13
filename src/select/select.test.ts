import { ComponentProps } from 'react';

import { expectTypeOf, it } from 'vitest';

import { Select } from './index';

it('should not take multiple on the root', () => {
	expectTypeOf<ComponentProps<typeof Select.Root>>().not.toHaveProperty('multiple');
});

it('should take string values only', () => {
	expectTypeOf<ComponentProps<typeof Select.Root>['value']>().toEqualTypeOf<string | undefined>();
});

it('should take a size token on the trigger', () => {
	expectTypeOf<ComponentProps<typeof Select.Trigger>['size']>().toEqualTypeOf<
		'sm' | 'md' | 'lg' | undefined
	>();
});
