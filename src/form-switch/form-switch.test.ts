import { type FieldValues } from 'react-hook-form';
import { expectTypeOf, it } from 'vitest';

import { type FormSwitchPath } from './index';

type AgencyValues = {
	paperless: boolean;
	notifications: { email: boolean | null; sms?: boolean };
	name: string;
	carriers: number;
};

it('should take only the paths holding a boolean on a typed form', () => {
	expectTypeOf<FormSwitchPath<AgencyValues>>().toEqualTypeOf<
		'paperless' | 'notifications.email' | 'notifications.sms'
	>();
});

it('should take any path on an untyped form', () => {
	expectTypeOf<FormSwitchPath<FieldValues>>().toEqualTypeOf<string>();
});
