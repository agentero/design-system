# Migrating from the legacy form fields

How the form fields in `@agentero/ui` map onto the field layer here. Later
phases add a row per control as each `Field<X>` lands; keep this file up to
date as they do.

## The rule to read first

**A legacy `Field<X>` maps to a new `Form<X>`, never to a new `Field<X>`.**

The names look like a one-to-one swap and they are not. A legacy `FieldText` is
form-bound: it takes a `name`, reaches into the surrounding form through
`useAgFormContext()`, registers itself with react-hook-form and pulls its own
error message out of the form state. Nothing is passed in.

The new `FieldText` is presentational. It renders a caption, a control and the
errors it is handed, and knows nothing about react-hook-form. The component that
takes a `name` and talks to the form is `FormText`, which renders a `FieldText`
underneath.

```tsx
// Legacy — bound to the surrounding form, error looked up by name
<FieldText<FormData> name="agency.name" label="Agency name" />

// New — same behaviour
<FormText<FormData> name="agency.name" label="Agency name" />

// New — a field with no form library, errors driven by the caller
<FieldText label="Agency name" errors={[nameError]} />
```

Swapping a legacy `FieldText` for the new `FieldText` compiles as soon as you
drop `name`, and then silently stops showing errors and stops writing to the
form. Reach for `Form<X>` unless you are deliberately leaving react-hook-form
behind.

## Prop mapping

Legacy props are those of the internal `Field` in
`@agentero/ui/src/form/shared/Field.tsx`, which every legacy `Field<X>` forwards
to.

| Legacy prop                                | New prop                 | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                     | `name` on `Form<X>`      | Only the form layer takes it. A presentational `Field<X>` has no `name`.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `label`                                    | `label`                  | Same meaning.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `description`                              | `tooltip`                | **Renamed, and the names cross over.** The legacy `description` is not visible text: it becomes the info-icon tooltip beside the caption.                                                                                                                                                                                                                                                                                                                                                                     |
| `help`                                     | `description`            | **The other half of the crossover.** The legacy `help` is the visible helper text under the control. Two differences: it took an HTML string and rendered it with `dangerouslySetInnerHTML`, and it drew a leading info icon. The new `description` takes a `ReactNode` and renders no icon — HTML coming from the backend has to be turned into elements before it gets here.                                                                                                                                |
| `optional`                                 | `optional`               | Same meaning.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| —                                          | `required`               | **New capability — do not switch it on while migrating.** The legacy field had no `required` at all, and measured across both monorepos, no call site writes an asterisk into the label text either: required fields are unmarked today, visually and programmatically. The legacy convention marks the _optional_ ones instead. So enabling `required` puts an asterisk on screens that have never had one — a design change to agree on separately, not part of a 1:1 port. See "Required is opt-in" below. |
| errors, read from the form state by `name` | `errors`                 | On a presentational field you pass them; `Form<X>` reads them from react-hook-form and passes them for you.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `id`                                       | `controlId`              | Careful: the legacy `id` landed on the `<label>`. `controlId` names the **control**, which is what an end-to-end selector normally wants. The field's own `id` prop stays on the field's root element.                                                                                                                                                                                                                                                                                                        |
| `size` (via the input's variants)          | `size` on `Field<X>`     | Unchanged in meaning — it was always the control's height, never the field's. The generic `Field` does not take it: it accepts an arbitrary child and cannot know whether that child has a `size`. Set it on the control, or on a `Field<X>` that forwards it.                                                                                                                                                                                                                                                |
| —                                          | `orientation`            | New. Legacy fields were always stacked vertically.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `disabled`                                 | forwarded to the control | Declared on the legacy `Field` but never used there; on `Field<X>` it reaches the control like any other control prop.                                                                                                                                                                                                                                                                                                                                                                                        |
| `aria-labelledby`                          | —                        | Declared on the legacy `Field` and never used. Drop it.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## A field whose control has addons

The legacy screens that need one assemble it by hand: a `Label`, then an
`InputGroup.Root` holding an `InputGroup.Addon` and an `Input`, with the `id`
written on the input and the `htmlFor` written on the label. That is two ends to
keep in agreement, and in `producerpass-ui`'s
`modules/auth/ui/email-link-callback.tsx` they disagree today — the label points
at `error-email` and the input carries no `id` at all, so the field has no
accessible name and nothing on screen shows it.

Here it is one prop:

```tsx
// Legacy — the caption and the control are wired by hand
<Label htmlFor="error-email" required>Email</Label>
<InputGroup.Root>
	<InputGroup.Addon><IconMail /></InputGroup.Addon>
	<Input size="lg" id="error-email" {...register('email')} />
</InputGroup.Root>

// New — the field wires the input inside the frame
<FieldText
	label="Email"
	size="lg"
	required
	leadingAddon={<InputGroup.Addon><IconMail /></InputGroup.Addon>}
/>
```

| Legacy shape                                    | New prop                       | Notes                                                                                                                                                    |
| ----------------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InputGroup.Addon` before the `Input`           | `leadingAddon`                 | Pass the `InputGroup.Addon` (icons, tags, buttons) or `InputGroup.Text` (prefixes, units) as-is; the field puts it inside the frame.                     |
| `InputGroup.Addon` / `InputGroup.Text` after it | `trailingAddon`                | Same.                                                                                                                                                    |
| `InputGroup.Root` wrapping both                 | —                              | The field renders it. Do not wrap the group yourself under the generic `Field`: the wiring lands on the group's `div` and the caption points at nothing. |
| `id` on the inner `Input`                       | `controlId`, or nothing at all | The field generates one and points the caption at it. Only an end-to-end selector needs a predictable id.                                                |

The group itself is published as `@agentero/design-system/input-group` for the
uses that are not fields at all — a search box in a toolbar, a read-only value
with a copy button. It is a straight port: same heights, radii, border colours,
focus ring and addon treatment as the legacy one, verified against it in a
browser. Two differences, both invisible on screen: the inner control's
background is `transparent` rather than the frame's own colour (the legacy asked
for this and misspelled the class), and it no longer carries a dead
`padding-bottom` of half a pixel that the legacy's Tailwind never generated.

## Not ported yet

These legacy capabilities have no equivalent here. Each one is its own ticket;
until it lands, a call site that uses it cannot move.

| Legacy prop                                              | What it did                                                                                                                                               |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayErrorMessage={false}`                            | Suppressed the inline error, for screens that report errors somewhere else (a toast, a summary at the top).                                               |
| `nested`                                                 | Separated a dependent field from the one above it — a `margin-top` of `1rem` and nothing more.                                                            |
| `nestedChildren` (the `children` of a legacy `Field<X>`) | Dependent sub-fields revealed under the field, rendered below the error. Note the trap: `children` on the new `Field` is the **control**, not sub-fields. |
| `asFieldset`                                             | Rendered the container as a `<fieldset>` with the caption in a `<legend>`, for groups of related controls.                                                |
| `getReadonlyValue` and the form's read-only mode         | Swapped the whole field for a `<dt>`/`<dd>` pair showing the formatted value.                                                                             |
| `orientation="responsive"`                               | Vertical on narrow screens, horizontal on wide ones. Only `vertical` and `horizontal` exist here so far.                                                  |
| `Form.Fields` and `Field.Group`                          | **The container that stacks fields**, and the largest gap of the set — see below.                                                                         |

### Stacking fields is not solved here

A field owns the space between its own caption, control and messages. **Nothing
here owns the space between one field and the next.** In the legacy package two
containers do, and between them they are the most used piece of the whole form
layer:

| Container     | Real call sites                               | What it does                                                                                                                        |
| ------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `Form.Fields` | **289** (13 in agentero, 276 in producerflow) | The original stacking container.                                                                                                    |
| `Field.Group` | **8** (4 and 4)                               | The newer one: a flex column with a 28px gap, 12px for checkbox groups, 16px when nested, and it declares `@container/field-group`. |

This does not block adoption: a screen can keep the legacy `Form.Root` and
`Form.Fields` and swap only the fields inside them for `Form<X>`, and the
spacing keeps coming from the legacy container. But it does stand between here
and retiring `@agentero/ui`, and **no phase ticket covers it yet** — it belongs
to whatever migrates the form shell rather than the fields. Needs a team
decision on where it lands.

One detail for whoever adds the horizontal fold: `@container/field-group` is
declared by the **group**, not the field. A fold that queries "my container"
would be measuring the group unless the field establishes its own containment.

## Required is opt-in

**The rule for adoption: do not change what consumers see or how their forms
behave.** A port is a port. Two consequences worth stating, because both are
easy to get wrong:

- **Leave `required` off.** It cannot be derived from the legacy props anyway —
  the legacy field has no such prop, so required-ness lives only in the
  react-hook-form rules or the validation schema. Turning it on is a separate,
  deliberate decision per field, with design agreeing to the asterisk first.
- **Keep `noValidate` on the form element.** Both legacy roots set it
  (`form/Form.tsx` and `newForm/FormRoot.tsx`), so a native `required` attribute
  never triggers the browser's own validation today. Preserve that: with
  `noValidate` in place, declaring `required` is a pure accessibility gain — the
  control finally exposes the state to assistive technology — and changes no
  behaviour. Drop `noValidate` and browsers start blocking submits and showing
  native bubbles across every migrated form.

## Two more things that changed

- **Contradictory props no longer crash the page.** The legacy label threw an
  `Error` when a field was both `optional` and `required`. Here `required` wins
  and the suffix is dropped.
- **The tooltip trigger moved out of the `<label>`.** The legacy label nested an
  unnamed `<button>` inside the caption, which is invalid HTML and announces as
  a bare "button". The trigger is now a sibling of the `<label>` with its own
  accessible name, and there is nothing to configure: you pass `tooltip` and the
  field places it.
