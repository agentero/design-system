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
| —                                          | `orientation`            | New. Legacy fields were always stacked vertically. `horizontal` folds back to the stack below 24rem of the field's own width, which is why there is no `responsive` value to port to — see "Orientation folds instead of a `responsive` value" below.                                                                                                                                                                                                                                                         |
| `disabled`                                 | forwarded to the control | Declared on the legacy `Field` but never used there; on `Field<X>` it reaches the control like any other control prop.                                                                                                                                                                                                                                                                                                                                                                                        |
| `aria-labelledby`                          | `aria-labelledby`        | **Now real, and it moved.** On the legacy `Field` it was declared and never used. Here it names the control from text already on screen, it lands on the control rather than the field's root, and it is one of the three ways to name a field — see "Every field is named" below.                                                                                                                                                                                                                            |
| —                                          | `aria-label`             | New, and the other half of the same rule: names the control where the design has no room for a caption.                                                                                                                                                                                                                                                                                                                                                                                                       |
| `displayErrorMessage={false}`              | `suppressErrorMessage`   | Same effect, opposite polarity: the flag now says "suppress", so leaving it off is the ordinary field. Only the visible message goes — `aria-invalid`, `data-invalid` and the whole `aria-describedby` wiring stay, so point the control at whatever reports the error instead.                                                                                                                                                                                                                               |

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

## Every field declares a name

The legacy `Field` took `label` and did nothing if you left it out. Measured
across both monorepos, 16 fields are designed without a visible label, and 10 of
those have **no accessible name at all** today: the control is unusable with a
screen reader and nothing on screen shows it.

Here, leaving all three out does not compile. The props are a union: a field
declares exactly one of `label`, `aria-label` or `aria-labelledby`.

Read that as **declares**, not as a guarantee that the control ends up named.
The types enforce the cheap part — that you made the decision and wrote it down
— and the rest is your knowledge to apply. "What the types do not catch" below
is the list; go through it once before leaning on the rule across a screen.

```tsx
// Legacy — no caption, and the control ends up with no name
<FieldText<FormData> name="query" />

// New — the name is on the control, and no caption is rendered
<FormText<FormData> name="query" aria-label="Search" />

// New — named by text that is already on screen
<FormText<FormData> name="limit" aria-labelledby="monthly-limit-heading" />
```

Three things follow from the union, all of them compile errors rather than
surprises at runtime:

- **Two names is an error too.** A visible `label` plus an `aria-label` means the
  caption on screen and the name a screen reader reads can disagree, with
  nothing to show it. Pick one.
- **`tooltip` and `optional` need a caption.** Both hang off the visible caption
  — a trigger beside it, a suffix appended to it — so they are unavailable on the
  two branches that render none.
- **A caption that might be missing is an error.** `label` accepts neither
  `undefined` nor a boolean, so `label={maybeName}` and
  `label={showLabel && 'Agency name'}` have to be resolved by the caller instead
  of quietly producing a nameless field.

### What the types do not catch

Three gaps. None of them is a bug to be fixed later: enforcing them costs more
than it buys, so they are documented and left to you.

**An empty name compiles.** `label={''}`, `label={t('agency') ?? ''}` and
`aria-label={''}` all type-check, and each leaves the control named by the empty
string — for `label`, a `<label>` with no text in it and, in `horizontal`, a
12rem caption column holding nothing. TypeScript cannot help here: the union
rejects `undefined`, `null` and booleans by dropping them as members, and `''`
is not a member of `string` to drop (`Exclude<string, ''>` is just `string`). The
shape that would catch it makes the component generic, which means a type
parameter at every call site to catch one empty literal. So a caption or a name
that can come back empty — a translation lookup, a field on a partially loaded
record — has to be resolved before it reaches the field. `field.types.test.ts`
pins which forms are rejected and which are not, so this list and the types
cannot drift apart.

**An `aria-labelledby` can point at nothing.** It takes the id of an element
that has to be on the page when the field renders. Nothing checks that, and a
reference that resolves to nothing is a control with no name — which is exactly
the `email-link-callback.tsx` bug described earlier in this file, reachable
through the new props too if you write the id and never the element.

**A composite control drops the name entirely.** The name lands on the
**control**, never on the field's root. A name on the wrapping `<div>` labels a
group nobody navigates to and leaves the control itself unnamed, which is the
failure this rule exists to prevent — so passing `aria-label` to a field is not
the same as writing it on the field's element.

The field merges the name onto its single child along with the rest of the
wiring, and a plain function component — the usual shape of a control assembled
from several elements — has no props to merge onto, so it discards all of them,
the name included. Nothing catches it: it compiles, it renders, and the control
has no accessible name.

**So on the `useFieldContext()` path the labelling union guarantees nothing.**
What you declare on the field is a statement of intent; placing the name is
entirely yours. Declare `aria-labelledby` on the field so the intent is written
down, put the reference on the element that really is the control, and check the
result in a browser rather than trusting the props — the `FieldYearMonth` story
shows the shape and asserts the name it ends up with.

## One error contract instead of four

Worth knowing when a group control is ported, because the legacy has no single
answer to copy. It connects a field's error to its control four different ways
depending on which `Field<X>` you touch:

| Legacy component      | How the error reaches the control                          |
| --------------------- | ---------------------------------------------------------- |
| `FieldCheckboxGroup`  | `aria-errormessage`                                        |
| `FieldTextArea`       | `aria-errormessage`                                        |
| `FieldCheckboxCards`  | `aria-describedby`, overwriting whatever the caller passed |
| `Field.tsx` (generic) | gives the error an id and connects it to nothing           |

The field layer here uses `aria-describedby` for the description and the error
alike — one contract, and already better than any of those four.

**`aria-errormessage` is deliberately not used, and the group milestones inherit
that.** It is not a synonym for `aria-describedby`: support across screen readers
is patchy, it is only meant to be read when `aria-invalid` is set, and where both
are honoured the message is announced twice. The error is already in
`aria-describedby`, which every screen reader reads. Revisit it per control only
with measured evidence from a screen reader, not on principle.

The related open question is `aria-required`: a group control is a
`<div role="group">` or `role="radiogroup"`, and the native `required` attribute
the field injects does nothing there. Mapping the field's `required` to
`aria-required` for those controls belongs to the ticket that adds the first one.

## Orientation folds instead of a `responsive` value

The legacy `orientation` had three values and the third, `responsive`, was
vertical on narrow **screens** and horizontal on wide ones. There is no
`responsive` here, and nothing to port: `horizontal` folds back to the vertical
stack on its own, below 24rem (384px) of the field's own width.

Two differences from the legacy behaviour, both deliberate:

- **It measures the field's slot, not the screen.** Two identical fields on one
  page fold independently — the one in a narrow drawer stacks while the one on
  the page behind it stays horizontal. A viewport breakpoint could not do that.
- **The caption column is a fixed 12rem (`--field-label-width`), not
  content-width.** The legacy horizontal field is a flex row whose caption is as
  wide as its text (measured at 220px in producerflow's Storybook) with an 8px
  gap; ours is a fixed column with a 12px gap, so captions line up down a form
  instead of each field sizing its own. Set the variable on a shared ancestor to
  change it once. The fold is what makes the fixed column safe: it is why a
  column that never yields cannot squeeze the control to nothing.

So a legacy `orientation="responsive"` maps to `orientation="horizontal"`, and a
legacy `orientation="horizontal"` maps to itself with one fewer thing to worry
about.

## Not ported yet

These legacy capabilities have no equivalent here. Each one is its own ticket;
until it lands, a call site that uses it cannot move.

| Legacy prop                                              | What it did                                                                                                                                               |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nested`                                                 | Separated a dependent field from the one above it — a `margin-top` of `1rem` and nothing more.                                                            |
| `nestedChildren` (the `children` of a legacy `Field<X>`) | Dependent sub-fields revealed under the field, rendered below the error. Note the trap: `children` on the new `Field` is the **control**, not sub-fields. |
| `asFieldset`                                             | Rendered the container as a `<fieldset>` with the caption in a `<legend>`, for groups of related controls.                                                |
| `getReadonlyValue` and the form's read-only mode         | Swapped the whole field for a `<dt>`/`<dd>` pair showing the formatted value.                                                                             |
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

One detail for whoever builds it, stated carefully because the wrong version of
it is easy to inherit. The field's fold is a **named** container query
(`@container/field`), and the reason is _not_ that an unnamed one would have
measured `@container/field-group`. Checked in Chromium: it would not. The field's
root declares `container-type: inline-size` itself, which makes it the nearest
query container for its own parts, so an unnamed query written inside the field
still resolves to the field — a 320px field inside an 800px `field-group` folds
either way.

Naming it is defensive rather than corrective. An unnamed query moves to the
next container up the moment the field's root stops being a container, or a part
is nested inside some other container, and `@container/field-group` is exactly
what it would find there. Two things follow for the stacking container: it does
not fight the fold, so it is free to declare a container of its own; and it
cannot stand in for the field's — do not drop `container-type` from the field's
root on the assumption that the group's container will do. The `Responsive`
story asserts the 320px-in-800px case, and the fold's own threshold, to keep
both ends honest.

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
