import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./button-n1__Ip0-.js";import{n as i,t as a}from"./popover-CiBBj_Qt.js";import{i as o,n as s,t as c}from"./command-cY3x6QcM.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{s(),n(),i(),l=t(),{expect:u,fn:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Command`,component:c.Root,tags:[`autodocs`],parameters:{docs:{description:{component:"Command is a filterable list built on `cmdk`. Type to narrow the options,\nnavigate with the arrow keys, select with Enter. It carries its own panel\nchrome, so dropping it inside a `Popover.Content` yields a combobox.\n`useCommandState` reads the search text and results of the surrounding\n`Command.Root` from any component rendered inside it."}}}},g=[`Profile`,`Documentation`,`Projects`],_=`**:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:text-text-default-base-tertiary`,v={render:()=>(0,l.jsxs)(c.Root,{label:`Search commands`,children:[(0,l.jsx)(c.Input,{placeholder:`Type a command or search...`}),(0,l.jsx)(c.List,{children:g.map(e=>(0,l.jsx)(c.Item,{children:e},e))}),(0,l.jsx)(c.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`combobox`,{name:/search commands/i});await u(n.closest(`[data-slot="command-search"]`)).toBeInTheDocument(),await u(t.getAllByRole(`option`)).toHaveLength(3),await f.type(n,`pro`),await p(()=>u(t.getAllByRole(`option`)).toHaveLength(2)),await u(t.getByText(`Profile`)).toBeInTheDocument(),await u(t.queryByText(`Documentation`)).not.toBeInTheDocument()}},y={render:()=>(0,l.jsxs)(c.Root,{label:`Search commands`,children:[(0,l.jsx)(c.Input,{placeholder:`Search...`}),(0,l.jsx)(c.List,{children:g.map(e=>(0,l.jsx)(c.Item,{children:e},e))}),(0,l.jsx)(c.Empty,{children:`No results found for your search.`})]}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`combobox`,{name:/search commands/i});await u(t.queryByText(/no results found/i)).not.toBeInTheDocument(),await f.type(n,`zzzzz`),await u(await t.findByText(/no results found/i)).toBeInTheDocument(),await u(t.queryAllByRole(`option`)).toHaveLength(0);let r=t.getByRole(`listbox`);await u(r.getBoundingClientRect().height).toBe(0)}},b={render:()=>(0,l.jsxs)(c.Root,{label:`Search commands`,children:[(0,l.jsx)(c.Input,{placeholder:`Search...`}),(0,l.jsxs)(c.List,{children:[(0,l.jsxs)(c.Group,{heading:`Account`,className:_,children:[(0,l.jsx)(c.Item,{children:`Profile`}),(0,l.jsx)(c.Item,{children:`Billing`})]}),(0,l.jsxs)(c.Group,{heading:`Workspace`,className:_,children:[(0,l.jsx)(c.Item,{children:`Projects`}),(0,l.jsx)(c.Item,{children:`Members`})]})]}),(0,l.jsx)(c.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{let t=m(e);await u(t.getByText(`Account`)).toBeVisible(),await u(t.getByText(`Workspace`)).toBeInTheDocument(),await f.type(t.getByRole(`combobox`,{name:/search commands/i}),`proj`),await p(()=>u(t.getByText(`Account`)).not.toBeVisible()),await u(t.getByText(`Workspace`)).toBeVisible()}},x=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`),S={render:()=>(0,l.jsxs)(c.Root,{label:`Search states`,children:[(0,l.jsx)(c.Input,{placeholder:`Search states...`}),(0,l.jsx)(c.List,{children:x.map(e=>(0,l.jsx)(c.Item,{children:e},e))}),(0,l.jsx)(c.Empty,{children:`No states found.`})]}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`listbox`);await u(t.getAllByRole(`option`)).toHaveLength(50),await u(n.scrollHeight).toBeGreaterThan(n.clientHeight),await u(n.scrollTop).toBe(0),await f.click(t.getByRole(`combobox`,{name:/search states/i})),await f.keyboard(`{End}`);let r=t.getByRole(`option`,{name:`Wyoming`});await p(()=>u(r).toHaveAttribute(`data-selected`,`true`)),await p(()=>u(n.scrollTop).toBeGreaterThan(0));let i=n.getBoundingClientRect(),a=r.getBoundingClientRect();await u(a.top).toBeGreaterThanOrEqual(i.top),await u(a.bottom).toBeLessThanOrEqual(i.bottom)}},C=d(),w={args:{label:`Search commands`},render:e=>(0,l.jsxs)(c.Root,{...e,children:[(0,l.jsx)(c.Input,{placeholder:`Search...`}),(0,l.jsxs)(c.List,{children:[(0,l.jsx)(c.Item,{value:`home`,keywords:[`Homeowners`],onSelect:C,children:`Homeowners`}),(0,l.jsx)(c.Item,{value:`auto`,keywords:[`Auto`],onSelect:C,children:`Auto`})]}),(0,l.jsx)(c.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{C.mockClear();let t=m(e),n=t.getAllByRole(`option`);await u(n[0]).toHaveAttribute(`data-selected`,`true`),await u(n[1]).toHaveAttribute(`data-selected`,`false`),await f.click(t.getByRole(`combobox`,{name:/search commands/i})),await f.keyboard(`{ArrowDown}`),await p(()=>u(n[1]).toHaveAttribute(`data-selected`,`true`)),await u(n[0]).toHaveAttribute(`data-selected`,`false`),await f.keyboard(`{Enter}`),await u(C).toHaveBeenCalledTimes(1),await u(C).toHaveBeenCalledWith(`auto`)}},T=d(),E={args:{label:`Search agencies`},render:e=>(0,l.jsxs)(c.Root,{...e,children:[(0,l.jsx)(c.Input,{placeholder:`Search...`}),(0,l.jsxs)(c.List,{children:[(0,l.jsx)(c.Item,{value:`pinnacle`,onSelect:T,children:`Pinnacle Shield Insurance`}),(0,l.jsx)(c.Item,{value:`horizon`,disabled:!0,onSelect:T,children:`Horizon Risk Solutions`})]}),(0,l.jsx)(c.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{T.mockClear();let t=m(e).getByRole(`option`,{name:`Horizon Risk Solutions`});await u(t).toHaveAttribute(`data-disabled`,`true`),await u(t).toHaveAttribute(`aria-disabled`,`true`),await f.click(t),await u(T).not.toHaveBeenCalled()}},D=d(),O=()=>{let e=o(e=>e.search),t=o(e=>e.filtered.count);return!e||t>0?null:(0,l.jsxs)(c.Item,{value:`create-${e}`,forceMount:!0,onSelect:()=>D(e),children:[`Create agency "`,e,`"`]})},k={args:{label:`Search agencies`},render:e=>(0,l.jsxs)(c.Root,{...e,children:[(0,l.jsx)(c.Input,{placeholder:`Search agencies...`}),(0,l.jsxs)(c.List,{children:[(0,l.jsx)(c.Item,{children:`Pinnacle Shield Insurance`}),(0,l.jsx)(c.Item,{children:`Horizon Risk Solutions`}),(0,l.jsx)(O,{})]})]}),play:async({canvasElement:e})=>{D.mockClear();let t=m(e),n=t.getByRole(`combobox`,{name:/search agencies/i});await u(t.queryByText(/create agency/i)).not.toBeInTheDocument(),await f.type(n,`Summit`);let r=await t.findByRole(`option`,{name:`Create agency "Summit"`});await f.click(r),await u(D).toHaveBeenCalledWith(`Summit`)}},A={render:()=>(0,l.jsxs)(a.Root,{children:[(0,l.jsx)(a.Trigger,{asChild:!0,children:(0,l.jsx)(r,{variant:`secondary`,children:`Open commands`})}),(0,l.jsx)(a.Content,{"aria-label":`Commands`,children:(0,l.jsxs)(c.Root,{label:`Search commands`,children:[(0,l.jsx)(c.Input,{placeholder:`Search...`}),(0,l.jsx)(c.List,{children:g.map(e=>(0,l.jsx)(c.Item,{children:e},e))})]})})]}),play:async({canvasElement:e})=>{let t=m(document.body),n=m(e).getByRole(`button`,{name:/open commands/i});await f.click(n);let r=await t.findByRole(`combobox`,{name:/search commands/i});await p(()=>u(r).toHaveFocus());let i=getComputedStyle(t.getByRole(`dialog`,{name:/commands/i}));await u(i.borderTopWidth).toBe(`0px`),await u(i.boxShadow).toMatch(/^rgba\(0, 0, 0, 0\) 0px 0px 0px 0px(, rgba\(0, 0, 0, 0\) 0px 0px 0px 0px)*$/),await u(i.paddingTop).toBe(`0px`),await f.keyboard(`{Escape}`),await p(()=>u(n).toHaveAttribute(`data-state`,`closed`))}},j=[`Default`,`EmptyState`,`Grouped`,`ScrollingList`,`KeyboardNavigation`,`DisabledItem`,`ReadingState`,`InsidePopover`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Search field over a flat list. Typing filters the rows through cmdk's default scorer.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"`Empty` renders only while nothing matches, so it can live permanently in the list.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"`Group` sections related options. It ships unstyled, so the heading is styled\nper usage through the `[cmdk-group-heading]` hook.",...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`With more rows than the list cap fits, the list scrolls — by wheel, or by
keyboard: cmdk scrolls the active row into view as the arrow keys move it,
and \`scroll-py-2\` keeps that row off the container edges.`,...S.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`A \`disabled\` row stays visible and searchable but cannot be chosen. cmdk skips it with the
arrow keys and swallows the click, and the row drops its hover and active styling so the
list does not invite the pointer.`,...E.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search agencies'
  },
  render: args => <Command.Root {...args}>
            <Command.Input placeholder="Search agencies..." />
            <Command.List>
                <Command.Item>Pinnacle Shield Insurance</Command.Item>
                <Command.Item>Horizon Risk Solutions</Command.Item>
                <CreateItem />
            </Command.List>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    handleCreate.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: /search agencies/i
    });
    await expect(canvas.queryByText(/create agency/i)).not.toBeInTheDocument();
    await userEvent.type(input, 'Summit');
    const create = await canvas.findByRole('option', {
      name: 'Create agency "Summit"'
    });
    await userEvent.click(create);
    await expect(handleCreate).toHaveBeenCalledWith('Summit');
  }
}`,...k.parameters?.docs?.source},description:{story:"`useCommandState` reads the surrounding `Root` from a component inside it. Here the row\noffering to create an agency appears only when the search text matches no existing one.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Open commands</Button>
            </Popover.Trigger>
            <Popover.Content aria-label="Commands">
                <Command.Root label="Search commands">
                    <Command.Input placeholder="Search..." />
                    <Command.List>
                        {OPTIONS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
                    </Command.List>
                </Command.Root>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const body = within(document.body);
    const trigger = within(canvasElement).getByRole('button', {
      name: /open commands/i
    });
    await userEvent.click(trigger);
    const input = await body.findByRole('combobox', {
      name: /search commands/i
    });
    await waitFor(() => expect(input).toHaveFocus());
    const popover = getComputedStyle(body.getByRole('dialog', {
      name: /commands/i
    }));
    await expect(popover.borderTopWidth).toBe('0px');
    // Tailwind composes box-shadow from several layers; \`shadow-none\` leaves each one transparent.
    await expect(popover.boxShadow).toMatch(/^rgba\\(0, 0, 0, 0\\) 0px 0px 0px 0px(, rgba\\(0, 0, 0, 0\\) 0px 0px 0px 0px)*$/);
    await expect(popover.paddingTop).toBe('0px');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveAttribute('data-state', 'closed'));
  }
}`,...A.parameters?.docs?.source},description:{story:"Inside a `Popover`. The popover hands its border, shadow and padding to the `Command`, so the\npicker draws a single panel. cmdk's list is always on screen, so Escape closes the popover.",...A.parameters?.docs?.description}}}})))()}M();export{v as Default,E as DisabledItem,y as EmptyState,b as Grouped,A as InsidePopover,w as KeyboardNavigation,k as ReadingState,S as ScrollingList,j as __namedExportsOrder,h as default};