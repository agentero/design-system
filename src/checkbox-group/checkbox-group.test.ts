import { ComponentProps } from 'react';

import { expectTypeOf, it } from 'vitest';

import { CheckboxGroup } from './index';

it('should require a value and a label on every item', () => {
	expectTypeOf<ComponentProps<typeof CheckboxGroup.Item>['value']>().toEqualTypeOf<string>();
	expectTypeOf<ComponentProps<typeof CheckboxGroup.Item>>().toHaveProperty('children');
});

it('should report the checked values as a string array', () => {
	expectTypeOf<ComponentProps<typeof CheckboxGroup.Root>['onValueChange']>().toEqualTypeOf<
		((value: string[]) => void) | undefined
	>();
});

it('should not accept required on the group', () => {
	expectTypeOf<ComponentProps<typeof CheckboxGroup.Root>>().not.toHaveProperty('required');
});
