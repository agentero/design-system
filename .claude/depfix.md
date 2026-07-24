# depfix repo config

Read by the depfix plugin (`/depfix:dispatch`, `/depfix:replan`) from the `ai-tools` marketplace.

- **Linear team**: Engineering (prefix `ENG`)
- **Ticket labels**: `Security`, `ai-agent`
- **Package manager**: yarn classic (1.x) — single root `yarn.lock`, no workspaces
- **Ecosystems**: npm
- **Known-tricky packages**: `react`, `react-dom` (peer-dep blast radius for every consumer of the library), `storybook` (majors must move in lockstep with `@storybook/*` addons and `@vitest/browser-*`)
- **Known pitfalls**: none recorded yet
- **Manual verification checklist**: none — `yarn test` runs the Storybook/Vitest browser project, which covers component rendering
