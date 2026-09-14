import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./command-BgYzl0lk.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{n(),i=t(),{expect:a,fn:o,userEvent:s,waitFor:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Command`,component:r.Root,tags:[`autodocs`],parameters:{docs:{description:{component:"Command is a filterable list built on `cmdk`. Type to narrow the options,\nnavigate with the arrow keys, select with Enter. It carries its own panel\nchrome, so dropping it inside a `Popover.Content` yields a combobox."}}}},d=[`Profile`,`Documentation`,`Projects`],f=`**:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:text-text-default-base-tertiary`,p={render:()=>(0,i.jsxs)(r.Root,{label:`Search commands`,children:[(0,i.jsx)(r.Input,{placeholder:`Type a command or search...`}),(0,i.jsx)(r.List,{children:d.map(e=>(0,i.jsx)(r.Item,{children:e},e))}),(0,i.jsx)(r.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{let t=l(e),n=t.getByRole(`combobox`,{name:/search commands/i});await a(n.closest(`[data-slot="command-search"]`)).toBeInTheDocument(),await a(t.getAllByRole(`option`)).toHaveLength(3),await s.type(n,`pro`),await c(()=>a(t.getAllByRole(`option`)).toHaveLength(2)),await a(t.getByText(`Profile`)).toBeInTheDocument(),await a(t.queryByText(`Documentation`)).not.toBeInTheDocument()}},m={render:()=>(0,i.jsxs)(r.Root,{label:`Search commands`,children:[(0,i.jsx)(r.Input,{placeholder:`Search...`}),(0,i.jsx)(r.List,{children:d.map(e=>(0,i.jsx)(r.Item,{children:e},e))}),(0,i.jsx)(r.Empty,{children:`No results found for your search.`})]}),play:async({canvasElement:e})=>{let t=l(e),n=t.getByRole(`combobox`,{name:/search commands/i});await a(t.queryByText(/no results found/i)).not.toBeInTheDocument(),await s.type(n,`zzzzz`),await a(await t.findByText(/no results found/i)).toBeInTheDocument(),await a(t.queryAllByRole(`option`)).toHaveLength(0),await a(t.getByRole(`listbox`).getBoundingClientRect().height).toBe(0)}},h={render:()=>(0,i.jsxs)(r.Root,{label:`Search commands`,children:[(0,i.jsx)(r.Input,{placeholder:`Search...`}),(0,i.jsxs)(r.List,{children:[(0,i.jsxs)(r.Group,{heading:`Account`,className:f,children:[(0,i.jsx)(r.Item,{children:`Profile`}),(0,i.jsx)(r.Item,{children:`Billing`})]}),(0,i.jsxs)(r.Group,{heading:`Workspace`,className:f,children:[(0,i.jsx)(r.Item,{children:`Projects`}),(0,i.jsx)(r.Item,{children:`Members`})]})]}),(0,i.jsx)(r.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{let t=l(e);await a(t.getByText(`Account`)).toBeVisible(),await a(t.getByText(`Workspace`)).toBeInTheDocument(),await s.type(t.getByRole(`combobox`,{name:/search commands/i}),`proj`),await c(()=>a(t.getByText(`Account`)).not.toBeVisible()),await a(t.getByText(`Workspace`)).toBeVisible()}},g=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`),_={render:()=>(0,i.jsxs)(r.Root,{label:`Search states`,children:[(0,i.jsx)(r.Input,{placeholder:`Search states...`}),(0,i.jsx)(r.List,{children:g.map(e=>(0,i.jsx)(r.Item,{children:e},e))}),(0,i.jsx)(r.Empty,{children:`No states found.`})]}),play:async({canvasElement:e})=>{let t=l(e),n=t.getByRole(`listbox`);await a(t.getAllByRole(`option`)).toHaveLength(50),await a(n.scrollHeight).toBeGreaterThan(n.clientHeight),await a(n.scrollTop).toBe(0),await s.click(t.getByRole(`combobox`,{name:/search states/i})),await s.keyboard(`{End}`);let r=t.getByRole(`option`,{name:`Wyoming`});await c(()=>a(r).toHaveAttribute(`data-selected`,`true`)),await c(()=>a(n.scrollTop).toBeGreaterThan(0));let i=n.getBoundingClientRect(),o=r.getBoundingClientRect();await a(o.top).toBeGreaterThanOrEqual(i.top),await a(o.bottom).toBeLessThanOrEqual(i.bottom)}},v=o(),y={args:{label:`Search commands`},render:e=>(0,i.jsxs)(r.Root,{...e,children:[(0,i.jsx)(r.Input,{placeholder:`Search...`}),(0,i.jsxs)(r.List,{children:[(0,i.jsx)(r.Item,{value:`home`,keywords:[`Homeowners`],onSelect:v,children:`Homeowners`}),(0,i.jsx)(r.Item,{value:`auto`,keywords:[`Auto`],onSelect:v,children:`Auto`})]}),(0,i.jsx)(r.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{v.mockClear();let t=l(e),n=t.getAllByRole(`option`);await a(n[0]).toHaveAttribute(`data-selected`,`true`),await a(n[1]).toHaveAttribute(`data-selected`,`false`),await s.click(t.getByRole(`combobox`,{name:/search commands/i})),await s.keyboard(`{ArrowDown}`),await c(()=>a(n[1]).toHaveAttribute(`data-selected`,`true`)),await a(n[0]).toHaveAttribute(`data-selected`,`false`),await s.keyboard(`{Enter}`),await a(v).toHaveBeenCalledTimes(1),await a(v).toHaveBeenCalledWith(`auto`)}},b=o(),x={args:{label:`Search agencies`},render:e=>(0,i.jsxs)(r.Root,{...e,children:[(0,i.jsx)(r.Input,{placeholder:`Search...`}),(0,i.jsxs)(r.List,{children:[(0,i.jsx)(r.Item,{value:`pinnacle`,onSelect:b,children:`Pinnacle Shield Insurance`}),(0,i.jsx)(r.Item,{value:`horizon`,disabled:!0,onSelect:b,children:`Horizon Risk Solutions`})]}),(0,i.jsx)(r.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{b.mockClear();let t=l(e).getByRole(`option`,{name:`Horizon Risk Solutions`});await a(t).toHaveAttribute(`data-disabled`,`true`),await a(t).toHaveAttribute(`aria-disabled`,`true`),await s.click(t),await a(b).not.toHaveBeenCalled()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Command.Root label="Search commands">
            <Command.Input placeholder="Type a command or search..." />
            <Command.List>
                {OPTIONS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
            </Command.List>
            <Command.Empty>No results found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: /search commands/i
    });
    await expect(input.closest('[data-slot="command-search"]')).toBeInTheDocument();
    await expect(canvas.getAllByRole('option')).toHaveLength(3);

    // "pro" fuzzy-matches Profile and Projects but not Documentation, which has no "p".
    await userEvent.type(input, 'pro');
    await waitFor(() => expect(canvas.getAllByRole('option')).toHaveLength(2));
    await expect(canvas.getByText('Profile')).toBeInTheDocument();
    await expect(canvas.queryByText('Documentation')).not.toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source},description:{story:`Search field over a flat list. Typing filters the rows through cmdk's default scorer.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Command.Root label="Search commands">
            <Command.Input placeholder="Search..." />
            <Command.List>
                {OPTIONS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
            </Command.List>
            <Command.Empty>No results found for your search.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: /search commands/i
    });
    await expect(canvas.queryByText(/no results found/i)).not.toBeInTheDocument();
    await userEvent.type(input, 'zzzzz');
    await expect(await canvas.findByText(/no results found/i)).toBeInTheDocument();
    await expect(canvas.queryAllByRole('option')).toHaveLength(0);

    // The itemless listbox stays mounted; it must collapse instead of leaving its py-2 as a gap.
    const list = canvas.getByRole('listbox');
    await expect(list.getBoundingClientRect().height).toBe(0);
  }
}`,...m.parameters?.docs?.source},description:{story:"`Empty` renders only while nothing matches, so it can live permanently in the list.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Command.Root label="Search commands">
            <Command.Input placeholder="Search..." />
            <Command.List>
                <Command.Group heading="Account" className={GROUP_HEADING}>
                    <Command.Item>Profile</Command.Item>
                    <Command.Item>Billing</Command.Item>
                </Command.Group>
                <Command.Group heading="Workspace" className={GROUP_HEADING}>
                    <Command.Item>Projects</Command.Item>
                    <Command.Item>Members</Command.Item>
                </Command.Group>
            </Command.List>
            <Command.Empty>No results found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Account')).toBeVisible();
    await expect(canvas.getByText('Workspace')).toBeInTheDocument();

    // cmdk hides an unmatched group with \`hidden\`, leaving its children mounted.
    await userEvent.type(canvas.getByRole('combobox', {
      name: /search commands/i
    }), 'proj');
    await waitFor(() => expect(canvas.getByText('Account')).not.toBeVisible());
    await expect(canvas.getByText('Workspace')).toBeVisible();
  }
}`,...h.parameters?.docs?.source},description:{story:"`Group` sections related options. It ships unstyled, so the heading is styled\nper usage through the `[cmdk-group-heading]` hook.",...h.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Command.Root label="Search states">
            <Command.Input placeholder="Search states..." />
            <Command.List>
                {US_STATES.map(state => <Command.Item key={state}>{state}</Command.Item>)}
            </Command.List>
            <Command.Empty>No states found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('listbox');
    await expect(canvas.getAllByRole('option')).toHaveLength(50);
    await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight);
    await expect(list.scrollTop).toBe(0);
    await userEvent.click(canvas.getByRole('combobox', {
      name: /search states/i
    }));
    await userEvent.keyboard('{End}');
    const last = canvas.getByRole('option', {
      name: 'Wyoming'
    });
    await waitFor(() => expect(last).toHaveAttribute('data-selected', 'true'));
    await waitFor(() => expect(list.scrollTop).toBeGreaterThan(0));

    // The active row must sit fully inside the list viewport after the scroll.
    const listRect = list.getBoundingClientRect();
    const lastRect = last.getBoundingClientRect();
    await expect(lastRect.top).toBeGreaterThanOrEqual(listRect.top);
    await expect(lastRect.bottom).toBeLessThanOrEqual(listRect.bottom);
  }
}`,..._.parameters?.docs?.source},description:{story:`With more rows than the list cap fits, the list scrolls — by wheel, or by
keyboard: cmdk scrolls the active row into view as the arrow keys move it,
and \`scroll-py-2\` keeps that row off the container edges.`,..._.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search commands'
  },
  render: args => <Command.Root {...args}>
            <Command.Input placeholder="Search..." />
            <Command.List>
                <Command.Item value="home" keywords={['Homeowners']} onSelect={handleSelect}>
                    Homeowners
                </Command.Item>
                <Command.Item value="auto" keywords={['Auto']} onSelect={handleSelect}>
                    Auto
                </Command.Item>
            </Command.List>
            <Command.Empty>No results found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    handleSelect.mockClear();
    const canvas = within(canvasElement);
    const options = canvas.getAllByRole('option');

    // cmdk activates the first row on mount.
    await expect(options[0]).toHaveAttribute('data-selected', 'true');
    await expect(options[1]).toHaveAttribute('data-selected', 'false');
    await userEvent.click(canvas.getByRole('combobox', {
      name: /search commands/i
    }));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(options[1]).toHaveAttribute('data-selected', 'true'));
    await expect(options[0]).toHaveAttribute('data-selected', 'false');
    await userEvent.keyboard('{Enter}');
    await expect(handleSelect).toHaveBeenCalledTimes(1);
    await expect(handleSelect).toHaveBeenCalledWith('auto');
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search agencies'
  },
  render: args => <Command.Root {...args}>
            <Command.Input placeholder="Search..." />
            <Command.List>
                <Command.Item value="pinnacle" onSelect={handleDisabledSelect}>
                    Pinnacle Shield Insurance
                </Command.Item>
                <Command.Item value="horizon" disabled onSelect={handleDisabledSelect}>
                    Horizon Risk Solutions
                </Command.Item>
            </Command.List>
            <Command.Empty>No results found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    handleDisabledSelect.mockClear();
    const canvas = within(canvasElement);
    const disabledOption = canvas.getByRole('option', {
      name: 'Horizon Risk Solutions'
    });
    await expect(disabledOption).toHaveAttribute('data-disabled', 'true');
    await expect(disabledOption).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(disabledOption);
    await expect(handleDisabledSelect).not.toHaveBeenCalled();
  }
}`,...x.parameters?.docs?.source},description:{story:`A \`disabled\` row stays visible and searchable but cannot be chosen. cmdk skips it with the
arrow keys and swallows the click, and the row drops its hover and active styling so the
list does not invite the pointer.`,...x.parameters?.docs?.description}}},S=[`Default`,`EmptyState`,`Grouped`,`ScrollingList`,`KeyboardNavigation`,`DisabledItem`]}))();export{p as Default,x as DisabledItem,m as EmptyState,h as Grouped,y as KeyboardNavigation,_ as ScrollingList,S as __namedExportsOrder,u as default};