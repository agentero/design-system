---
name: plan-ds-migration
description: Generates a phased migration plan for a design-system component subtask under ENG-1342, prints it for review, and attaches it to the Linear issue description on greenlight. Use only when the user explicitly runs `/plan-ds-migration`.
user-invocable: true
---

# plan-ds-migration

Produce a phased migration plan for a design-system component subtask under the ENG-1342 umbrella.

## Input

Invoked as `/plan-ds-migration <TICKET>` where `<TICKET>` is the Linear issue identifier (e.g. `ENG-1345`). If no ticket is passed, ask for one before starting.

## Before planning

1. Read the `<TICKET>` Linear issue to confirm the component name and any scope notes.
2. Read the `ENG-1342` parent issue description for the migration conventions every subtask must follow.
3. Locate the legacy component source in both `agentero/mono` and `producerflow/mono` (`javascript/packages/ui/src/<component>.*`) and `diff -q` them to see whether they're byte-identical or need reconciling.
4. Check the design-system repo for existing conventions to match: `src/avatar/`, `src/button/`, `src/loading/` for file layout; `themes/base.css` for tokens the component should use; `package.json` `exports` for the subpath-export pattern.
5. Scan both monorepos for consumer counts so the plan can cite them.

## Grill the user before drafting

Don't guess on anything ambiguous — stop and ask. Typical unknowns to surface as questions:

- API shape: keep legacy signature as-is, or tighten it? Any compound / sub-component restructuring?
- Variant set: which legacy variants stay, which get dropped or renamed?
- Tokens: are new tokens needed, or does `themes/base.css` already cover every color/spacing/radius the component uses?
- Runtime deps: any new Radix primitives or third-party packages?
- Legacy behavior to preserve vs drop: animations, ref forwarding, data attributes, a11y patterns?
- Stories scope: which legacy stories survive? Which teach tailwind escape hatches and should be dropped?

Present these as a short numbered list before drafting. Do not assume defaults for decisions the user hasn't spoken to.

## Producing the plan

Match the structure of the `ENG-1347` description (Divider migration) as the format reference:

- **Context**: source files, current API, tokens, consumers, locked decisions (with dates).
- **Phases**: typically 3 (scaffold → stories+JSDoc → verify+ship+follow-ups) but **adapt to the component** — a simpler component may collapse into 2 phases, a complex one with new tokens or animations may need 4. Let the work drive the phase count, not a template.
- Each phase must include **Touches** (files/paths), **Steps**, **Acceptance**, and **Depends on** (prior phases or external prerequisites). Each phase must be self-contained so a fresh Cyrus session can execute it on its own.
- **Risks** at the end.

## Constraints

- Do NOT implement anything. Plan only.
- Print the plan for the user's review. Do not save a local `.md` file — the Linear description is the source of truth.
- The **final phase** (whichever it is) must pause for the user's explicit greenlight before any `git commit`.
- Consumer-codemod follow-ups are TWO standalone tickets (no parent), one in team **MKT** (for `agentero/mono`) and one in team **PF** (for `producerflow/mono`), both labelled `frontend`. Do NOT write them as subtasks of `ENG-1342`.

## After greenlight

Attach the approved plan to the `<TICKET>` Linear issue **description** via `mcp__linear__save_issue`. Do NOT add it as a comment. If the description already has content, ask before overwriting.
