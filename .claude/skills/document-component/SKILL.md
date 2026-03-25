---
name: document-component
description: Add comprehensive JSDoc documentation to a React component file following Storybook MCP best practices
allowed-tools: Read, Edit, Glob, Grep, Agent
argument-hint: [component-file-path]
---

# Document Component for Storybook MCP

Add comprehensive JSDoc documentation to the component file at `$ARGUMENTS` so that Storybook's AI manifest and MCP server produce high-quality, actionable component metadata.

## Steps

1. **Read the component file** at `$ARGUMENTS` and understand its structure: exported components, props types/interfaces, sub-components, variants, and defaults.

2. **Read related files** (index.ts barrel, stories, any MDX docs in the same directory) to understand the full component API surface and existing documentation.

3. **Add JSDoc to the main exported component** with:
   - A clear description explaining **what** the component is, **when/why** to use it, and **when NOT to** (suggesting alternatives).
   - Cross-references to related components using Storybook markdown links: `[ComponentName](?path=/docs/componentname--docs)`.
   - A `@summary` tag with a concise one-line description (under 80 chars). This is critical — AI agents see this in list views.
   - An `@example` tag showing the most common usage pattern with realistic props.

   ```tsx
   /**
    * Avatar displays a user's profile image, initials, or a fallback icon.
    * Use Avatar for user identification in lists, headers, cards, and comments.
    * For navigation that displays a user, consider pairing with [UserCard](?path=/docs/usercard--docs).
    *
    * @summary Displays a user's profile image, initials, or fallback icon
    *
    * @example
    * <Avatar src="/photo.jpg" alt="Jane Doe" size="md" variant="circle" />
    */
   ```

4. **Add JSDoc to every prop** in the component's type/interface:
   - Explain **what** the prop does and **why/when** you'd use it.
   - Mention the default value if one exists (e.g., `Defaults to 'md'`).
   - For union/enum types, briefly explain when to pick each option if it's not obvious.
   - For callback props, describe when the callback fires and what arguments it receives.
   - For ReactNode props, describe what kind of content is expected.

   ```tsx
   interface AvatarProps {
     /** Image URL to display. When unavailable or loading fails, `fallback` content is shown instead. */
     src?: string;
     /** Accessible alt text describing the avatar image. Required when `src` is provided. */
     alt?: string;
     /** Content rendered when `src` is missing or fails to load. Typically initials (e.g., "JD") or an icon. */
     fallback?: ReactNode;
     /** Controls the avatar dimensions. Defaults to `'md'` (40px).
      * - `xs` (24px) — inline indicators, dense lists
      * - `sm` (32px) — compact layouts, table rows
      * - `md` (40px) — standard usage, cards, headers
      * - `lg` (48px) — profile sections, detail views
      * - `xl` (64px) — hero sections, prominent display
      * - `2xl`–`4xl` — large feature areas, profile pages
      */
     size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
   }
   ```

5. **Add JSDoc to sub-components** (compound component parts like Root, Image, Fallback, Trigger, Content, etc.) if they are exported:
   - Describe their role within the compound component pattern.
   - Note that they must be used inside the parent component's context.
   - Add `@summary` tags.

6. **Add JSDoc to exported hooks** (e.g., `useAvatar`):
   - Describe what context it provides and when to use it.
   - Note the requirement to be within the provider.

7. **Add JSDoc to exported recipe/style objects** (e.g., `tv()` variants):
   - Briefly describe what styling system it defines and the available slots/variants.

## Verification

After applying all documentation, **re-read the modified file** and verify against this checklist. Fix any failures before finishing.

| # | Check | How to verify |
|---|-------|---------------|
| 1 | Every exported component has a JSDoc with `@summary` | Search for each `export` — confirm a `/** ... @summary` block directly above it |
| 2 | Every prop in every public type/interface has a JSDoc comment | Read the type block — every member must have a `/** ... */` line |
| 3 | `@summary` tags are under 80 characters | Count characters in each `@summary` value |
| 4 | Component JSDoc includes "when NOT to use" guidance | Look for negative guidance (e.g., "Do not use…", "For X, use Y instead") in the main component description |
| 5 | At least one `@example` tag on the main component | Confirm `@example` exists with realistic JSX |
| 6 | Defaults mentioned in prop docs for props that have them | Check that props with default values include "Defaults to …" |
| 7 | Union/enum options explained where not self-evident | Confirm size/variant/status-like props list their options with context |
| 8 | Exported hooks have JSDoc with `@summary` | Search for exported hooks — confirm documentation |
| 9 | No `@param` or `@type` tags added | Search for `@param` and `@type` — must find none that were added |
| 10 | No runtime code was modified | Diff only shows JSDoc comment additions/changes |
| 11 | TypeScript compiles without errors | Run `npx tsc --noEmit` and confirm clean output |

If any check fails, fix the issue and re-verify before reporting completion.

## Rules

- **Do NOT modify any runtime code** — only add/update JSDoc comments.
- **Do NOT change the file structure**, exports, or import order.
- **Preserve existing comments** that are still accurate; enhance them rather than replace.
- **Write descriptions that explain "why/when"**, not just "what". An AI agent can read the types — it needs context about usage decisions.
- **Keep `@summary` tags concise** — under 80 characters. Agents see this in list views and truncated contexts.
- **Use realistic values** in `@example` tags, not placeholder text like "foo" or "test".
- **Match the project's code style** — observe the existing formatting, quotes, and indentation.
- **Do NOT add `@param` tags for props** — `react-docgen-typescript` extracts these from the interface. Use JSDoc on the interface members instead.
- **Do NOT add redundant type annotations** in JSDoc (e.g., `@type {string}`) — TypeScript types are already extracted.
