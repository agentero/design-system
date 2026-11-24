import { ComponentProps } from 'react';

import { expectTypeOf, it } from 'vitest';

import { RadioGroup } from './index';

it('should require a value and a label on every item', () => {
	expectTypeOf<ComponentProps<typeof RadioGroup.Item>['value']>().toEqualTypeOf<string>();
	expectTypeOf<ComponentProps<typeof RadioGroup.Item>>().toHaveProperty('children');
});

it('should report the selected value as a string', () => {
	expectTypeOf<ComponentProps<typeof RadioGroup.Root>['onValueChange']>().toEqualTypeOf<
		((value: string) => void) | undefined
	>();
});
