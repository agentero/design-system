'use client';

import { useState } from 'react';

import { tv } from 'tailwind-variants';

import { Button } from '../button';
import { Input, InputProps } from '../input';
import { InputGroup } from '../input-group';
import { IconVisibility, IconVisibilityOff } from './icons';

/**
 * Style recipe for InputPassword. Slots: `toggle` (the addon holding the
 * button) and `button`. The `size` variant follows the input's: the button is
 * 24px at `sm` and 32px above, the icon 16, 20 or 24px, and a negative end
 * margin pulls the addon into the frame's padding so the button sits as far
 * from the right edge as from the top and bottom (4px, 8px at `lg`).
 *
 * @summary tailwind-variants recipe backing the InputPassword toggle
 */
export const inputPasswordRecipe = tv({
	slots: {
		toggle: 'group-has-[input:disabled]/input-group:hidden',
		button: '[&_svg]:mx-0'
	},
	variants: {
		size: {
			sm: { toggle: '-me-2.25', button: 'rounded-sm [&_svg]:size-4' },
			md: { toggle: '-me-2.25', button: 'rounded-sm [&_svg]:size-5' },
			lg: { toggle: '-me-1.25', button: '[&_svg]:size-6' }
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

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
	const styles = inputPasswordRecipe({ size });

	return (
		<InputGroup.Root data-slot="input-password" className={className}>
			<Input {...props} size={size} type={type} />
			<InputGroup.Addon className={styles.toggle()}>
				<Button
					type="button"
					variant="ghost"
					iconOnly
					size={size === 'sm' ? 'xs' : 'sm'}
					className={styles.button()}
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
