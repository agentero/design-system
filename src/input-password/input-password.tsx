'use client';

import { useState } from 'react';

import { Button } from '../button';
import { Input, InputProps } from '../input';
import { InputGroup } from '../input-group';
import { IconVisibility, IconVisibilityOff } from './icons';

export type InputPasswordProps = Omit<InputProps, 'type'>;

/**
 * InputPassword is a password field with a show/hide toggle at the end of its
 * frame. The value starts hidden; the toggle reveals it as plain text and
 * hides it again. Its accessible name reads "Show password" or "Hide
 * password", depending on what the next press does. Pressing the toggle keeps
 * focus and the caret in the input. The toggle is not rendered while the input
 * is disabled, whether `disabled` comes from the prop, from a surrounding
 * `FieldText` or from a `<fieldset disabled>`.
 *
 * It is an [Input](?path=/docs/components-input--docs) inside an
 * [InputGroup](?path=/docs/components-inputgroup--docs) frame. `className`
 * styles the frame. Every other prop goes to the `<input>`: the `ref`, `id`,
 * `name`, `value`, `onChange`, `aria-*` and every other standard attribute,
 * such as `autoComplete`, `required` or `maxLength`. Only `type` is not
 * accepted, because the toggle owns it. Inside a `FieldText` the input takes
 * its label, messages and states from the field as a plain `Input` does. The
 * invalid state comes from `aria-invalid`, and the frame paints the
 * destructive border. Set `autoComplete` to `current-password` on sign-in and
 * `new-password` when the user picks one, so password managers fill the right
 * value.
 *
 * Do not use it for text that is not secret; use `Input` instead. A one-time
 * code is an `Input` with `autoComplete="one-time-code"`, not a password.
 *
 * @summary Password input with a show/hide toggle inside the frame
 * @dataAttribute {string} data-slot - Always set to "input-password" on the frame
 *
 * @example
 * <FieldText required>
 *   <Label>Password</Label>
 *   <InputPassword name="password" autoComplete="current-password" />
 * </FieldText>
 */
export const InputPassword = ({ className, size, ...props }: InputPasswordProps) => {
	const [type, setType] = useState<'password' | 'text'>('password');
	const isHidden = type === 'password';

	return (
		<InputGroup.Root data-slot="input-password" className={className}>
			<Input {...props} size={size} type={type} />
			<InputGroup.Addon className="group-has-[input:disabled]/input-group:hidden">
				<Button
					type="button"
					variant="ghost"
					iconOnly
					size={size === 'lg' ? 'sm' : 'xs'}
					aria-label={isHidden ? 'Show password' : 'Hide password'}
					onMouseDown={event => event.preventDefault()}
					onClick={() => setType(isHidden ? 'text' : 'password')}>
					{isHidden ? <IconVisibility /> : <IconVisibilityOff />}
				</Button>
			</InputGroup.Addon>
		</InputGroup.Root>
	);
};

InputPassword.displayName = 'InputPassword';
