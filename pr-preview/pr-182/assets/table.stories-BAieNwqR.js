import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BBMTxKPj.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-B0PaHO9a.js";import{n as a,t as o}from"./table-DnvFjTmH.js";import{n as s,t as c}from"./dropdown-menu-BYuMsTfN.js";import{n as l,t as u}from"./switch-BB3eKm1z.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{d=t(),a(),r(),s(),l(),f=n(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_=e=>e.getAnimations({subtree:!0}).filter(e=>e instanceof CSSTransition),v=[{id:`1`,name:`Alice Williams`,email:`alice@example.com`,role:`Admin`,amount:`$1,200`},{id:`2`,name:`Bob Johnson`,email:`bob@example.com`,role:`User`,amount:`$340`},{id:`3`,name:`Charlie Brown`,email:`charlie@example.com`,role:`User`,amount:`$980`},{id:`4`,name:`Diana Prince`,email:`diana@example.com`,role:`Editor`,amount:`$2,450`},{id:`5`,name:`Evan Davis`,email:`evan@example.com`,role:`User`,amount:`$75`},{id:`6`,name:`Fiona Clark`,email:`fiona@example.com`,role:`Admin`,amount:`$610`},{id:`7`,name:`George Hill`,email:`george@example.com`,role:`User`,amount:`$1,890`},{id:`8`,name:`Hannah Scott`,email:`hannah@example.com`,role:`Editor`,amount:`$430`}],y=e=>(0,f.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,f.jsx)(`path`,{fill:`currentColor`,d:`M5.154 19H6.39l9.26-9.26-1.237-1.236-9.26 9.26zM4.558 20.5a.88.88 0 0 1-.646-.259.88.88 0 0 1-.258-.645v-2.094q0-.18.065-.344a.9.9 0 0 1 .206-.304L15.483 5.156q.222-.202.49-.312a1.5 1.5 0 0 1 .562-.11q.291 0 .555.11.264.11.46.33l1.207 1.221q.22.197.323.461.103.264.103.552 0 .291-.106.556a1.4 1.4 0 0 1-.32.49L7.3 20.229a1.3 1.3 0 0 1-.304.206 1.4 1.4 0 0 1-.344.065z`})}),b=e=>(0,f.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,f.jsx)(`path`,{fill:`currentColor`,d:`M7.308 20.5q-.749 0-1.278-.53a1.74 1.74 0 0 1-.53-1.278V6h-.25a.73.73 0 0 1-.535-.215.73.73 0 0 1-.215-.535q0-.32.215-.535A.73.73 0 0 1 5.25 4.5H9q0-.367.259-.626a.85.85 0 0 1 .626-.259h4.23q.368 0 .626.26A.85.85 0 0 1 15 4.5h3.75q.32 0 .535.215a.73.73 0 0 1 .215.535.73.73 0 0 1-.215.535.73.73 0 0 1-.535.215h-.25v12.692q0 .749-.53 1.278-.53.53-1.278.53zM17 6H7v12.692a.3.3 0 0 0 .087.221.3.3 0 0 0 .22.087h9.385a.3.3 0 0 0 .221-.087.3.3 0 0 0 .087-.22z`})}),x=(e,t={})=>(0,f.jsxs)(o.Root,{...e,children:[(0,f.jsx)(o.Head,{children:(0,f.jsxs)(o.Row,{children:[t.checkbox&&(0,f.jsx)(o.Header,{children:(0,f.jsx)(`input`,{type:`checkbox`,"aria-label":`Select all rows`})}),(0,f.jsx)(o.Header,{children:`Name`}),(0,f.jsx)(o.Header,{children:`Email`}),(0,f.jsx)(o.Header,{children:`Role`}),(0,f.jsx)(o.Header,{style:{textAlign:`right`},children:`Amount`}),t.actions&&(0,f.jsx)(o.Header,{children:(0,f.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,f.jsxs)(o.Body,{children:[v.map(e=>(0,f.jsxs)(o.Row,{children:[t.checkbox&&(0,f.jsx)(o.Cell,{children:(0,f.jsx)(`input`,{type:`checkbox`,"aria-label":`Select ${e.name}`})}),(0,f.jsx)(o.Cell,{className:`font-bold`,children:e.name}),(0,f.jsx)(o.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,f.jsx)(o.Cell,{children:e.role}),(0,f.jsx)(o.Cell,{style:{textAlign:`right`},children:e.amount}),t.actions&&(0,f.jsx)(o.Cell,{style:{width:`0.0625rem`,position:`sticky`,right:0},children:(0,f.jsxs)(o.RowActions,{children:[(0,f.jsx)(i,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Edit ${e.name}`,children:(0,f.jsx)(y,{})}),(0,f.jsx)(i,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Delete ${e.name}`,children:(0,f.jsx)(b,{})})]})})]},e.id)),t.totals&&(0,f.jsxs)(o.Row,{children:[(0,f.jsx)(o.Cell,{className:`font-bold`,children:`Total`}),(0,f.jsx)(o.Cell,{}),(0,f.jsx)(o.Cell,{}),(0,f.jsx)(o.Cell,{className:`font-bold`,style:{textAlign:`right`},children:`$8,375`})]})]})]}),S={title:`Components/Table`,component:o.Root,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Low-level presentational table primitive: native `<table>` markup themed for\nscrolling, sticky rows, cell padding, dividers, hover, and expandable rows.\nFor sorting/toolbar/pagination, prefer `DataTable`."}}},decorators:[e=>(0,f.jsx)(`div`,{className:`p-4`,children:(0,f.jsx)(e,{})})],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},embed:{control:`boolean`},enclosed:{control:`boolean`},sticky:{control:`inline-radio`,options:[void 0,`header`,`headerAndFooter`]}},args:{size:`md`,embed:!1},render:e=>x(e)},C={parameters:{a11y:{test:`error`}},play:async({canvasElement:e})=>{let t=g(e);await p(t.getByText(`Alice Williams`)).toBeInTheDocument(),await p(t.getByRole(`columnheader`,{name:`Name`})).toBeInTheDocument()}},w={render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-6`,children:[`sm`,`md`,`lg`].map(e=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,f.jsxs)(`span`,{className:`text-xs text-text-default-base-tertiary`,children:[`size="`,e,`"`]}),x({size:e})]},e))})},T={args:{sticky:`header`},decorators:[e=>(0,f.jsx)(`div`,{className:`flex h-55 flex-col`,children:(0,f.jsx)(e,{})})],play:async({canvasElement:e})=>{let t=g(e).getByRole(`columnheader`,{name:`Name`});e.querySelector(`[data-slot=table-scroll]`)?.scrollTo({top:120}),await p(t).toHaveStyle({borderBottomWidth:`0px`}),await p(getComputedStyle(t).boxShadow).not.toBe(`none`)}},E={args:{sticky:`headerAndFooter`},render:e=>x(e,{totals:!0}),decorators:[e=>(0,f.jsx)(`div`,{className:`flex h-55 flex-col`,children:(0,f.jsx)(e,{})})]},D={args:{embed:!0}},O={args:{enclosed:!0}},k={render:e=>x(e,{checkbox:!0}),play:async({canvasElement:e})=>{let t=g(e).getByLabelText(`Select Alice Williams`).closest(`td`);await p(getComputedStyle(t).paddingInlineEnd).toBe(`0px`)}},A={render:e=>(0,f.jsx)(`form`,{children:(0,f.jsx)(o.Root,{...e,children:(0,f.jsx)(o.Body,{children:v.slice(0,3).map(e=>(0,f.jsxs)(o.Row,{children:[(0,f.jsx)(o.Cell,{children:e.name}),(0,f.jsx)(o.Cell,{children:(0,f.jsx)(u,{size:`sm`,defaultChecked:!0,"aria-label":`Notify ${e.name}`})})]},e.id))})})}),play:async({canvasElement:e})=>{let t=g(e).getByRole(`switch`,{name:`Notify Alice Williams`}).closest(`td`);await p(t.querySelector(`input[type="checkbox"][aria-hidden]`)).not.toBeNull(),await p(getComputedStyle(t).paddingInlineEnd).not.toBe(`0px`)}},j={render:e=>x(e,{actions:!0}),play:async({canvasElement:e})=>{let t=g(e);await p(t.getAllByRole(`button`,{name:/Edit /})).toHaveLength(v.length),await p(t.getAllByRole(`button`,{name:/Delete /})).toHaveLength(v.length)}},M={render:e=>(0,f.jsxs)(o.Root,{...e,children:[(0,f.jsx)(o.Head,{children:(0,f.jsxs)(o.Row,{children:[(0,f.jsx)(o.Header,{children:`Name`}),(0,f.jsx)(o.Header,{children:`Email`}),(0,f.jsx)(o.Header,{children:(0,f.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,f.jsx)(o.Body,{children:v.slice(0,3).map(e=>(0,f.jsxs)(o.Row,{children:[(0,f.jsx)(o.Cell,{className:`font-bold`,children:e.name}),(0,f.jsx)(o.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,f.jsx)(o.Cell,{style:{width:`0.0625rem`,position:`sticky`,right:0},children:(0,f.jsx)(o.RowActions,{children:(0,f.jsxs)(c.Root,{children:[(0,f.jsx)(c.Trigger,{asChild:!0,children:(0,f.jsx)(i,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Actions for ${e.name}`,children:(0,f.jsx)(y,{})})}),(0,f.jsx)(c.Portal,{children:(0,f.jsxs)(c.Content,{align:`end`,children:[(0,f.jsx)(c.Item,{children:`Edit`}),(0,f.jsx)(c.Item,{children:`Delete`})]})})]})})})]},e.id))})]}),play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`button`,{name:`Actions for ${v[0].name}`}),r=n.closest(`[data-slot=table-row-actions]`),i=n.closest(`tr`),a=t.getByRole(`button`,{name:`Actions for ${v[1].name}`}).closest(`tr`);await p(getComputedStyle(r).opacity).toBe(`0`),await m.click(n),await g(document.body).findByRole(`menu`),await h(()=>p(_(i)).toHaveLength(0)),await p(getComputedStyle(r).opacity).toBe(`1`);let o=getComputedStyle(i).backgroundColor;await p(o).not.toBe(getComputedStyle(a).backgroundColor),await m.keyboard(`{Escape}`),await h(()=>p(g(document.body).queryByRole(`menu`)).not.toBeInTheDocument()),await p(n).toHaveFocus(),await h(()=>p(_(i)).toHaveLength(0)),await p(getComputedStyle(r).opacity).toBe(`1`),await p(getComputedStyle(i).backgroundColor).toBe(o)}},N=({name:e})=>{let[t,n]=(0,d.useState)(!1);return(0,f.jsx)(o.RowActions,{children:(0,f.jsxs)(c.Root,{children:[(0,f.jsx)(c.Trigger,{asChild:!0,children:(0,f.jsx)(i,{variant:`ghost`,size:`sm`,iconOnly:!0,loading:t,"aria-label":`Actions for ${e}`,children:(0,f.jsx)(y,{})})}),(0,f.jsx)(c.Portal,{children:(0,f.jsx)(c.Content,{align:`end`,children:(0,f.jsx)(c.Item,{onSelect:e=>{e.preventDefault(),n(!0)},children:`Archive`})})})]})})},P={render:e=>(0,f.jsxs)(o.Root,{...e,children:[(0,f.jsx)(o.Head,{children:(0,f.jsxs)(o.Row,{children:[(0,f.jsx)(o.Header,{children:`Name`}),(0,f.jsx)(o.Header,{children:(0,f.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,f.jsx)(o.Body,{children:v.slice(0,2).map(e=>(0,f.jsxs)(o.Row,{children:[(0,f.jsx)(o.Cell,{className:`font-bold`,children:e.name}),(0,f.jsx)(o.Cell,{style:{width:`0.0625rem`,position:`sticky`,right:0},children:(0,f.jsx)(N,{name:e.name})})]},e.id))})]}),play:async({canvasElement:e})=>{let t=g(e),n=g(document.body),r=t.getByRole(`button`,{name:`Actions for ${v[0].name}`}),i=r.closest(`[data-slot=table-row-actions]`),a=r.closest(`tr`),o=t.getByRole(`button`,{name:`Actions for ${v[1].name}`}).closest(`tr`);await m.click(r),await m.click(await n.findByRole(`menuitem`,{name:`Archive`})),await h(()=>p(r).toBeDisabled()),await p(n.getByRole(`menu`)).toBeInTheDocument(),await h(()=>p(_(a)).toHaveLength(0)),await p(getComputedStyle(i).opacity).toBe(`1`),await p(getComputedStyle(a).backgroundColor).not.toBe(getComputedStyle(o).backgroundColor),await m.keyboard(`{Escape}`),await h(()=>p(n.queryByRole(`menu`)).not.toBeInTheDocument())}},F={render:e=>{let[t,n]=(0,d.useState)(v[0].id);return(0,f.jsxs)(o.Root,{...e,children:[(0,f.jsx)(o.Head,{children:(0,f.jsxs)(o.Row,{children:[(0,f.jsx)(o.Header,{children:(0,f.jsx)(`span`,{className:`sr-only`,children:`Expand`})}),(0,f.jsx)(o.Header,{children:`Name`}),(0,f.jsx)(o.Header,{children:`Email`}),(0,f.jsx)(o.Header,{children:`Role`})]})}),(0,f.jsx)(o.Body,{children:v.slice(0,4).map(e=>(0,f.jsxs)(d.Fragment,{children:[(0,f.jsxs)(o.Row,{children:[(0,f.jsx)(o.Cell,{children:(0,f.jsx)(o.ExpandButton,{isExpanded:t===e.id,toggleExpanded:()=>n(t===e.id?null:e.id),"aria-label":`Toggle ${e.name}`})}),(0,f.jsx)(o.Cell,{className:`font-bold`,children:e.name}),(0,f.jsx)(o.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,f.jsx)(o.Cell,{children:e.role})]}),t===e.id&&(0,f.jsx)(o.ExpandedRow,{children:(0,f.jsx)(o.Cell,{colSpan:4,children:(0,f.jsxs)(`div`,{className:`py-2 text-text-default-base-secondary`,children:[`Extended details for `,e.name,` — `,e.amount,` lifetime value.`]})})})]},e.id))})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'error'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Alice Williams')).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: 'Name'
    })).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source},description:{story:`Default args playground.

@summary Default table`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="flex flex-col gap-1">
                    <span className="text-xs text-text-default-base-tertiary">size=&quot;{size}&quot;</span>
                    {renderTable({
        size
      })}
                </div>)}
        </div>
}`,...w.parameters?.docs?.source},description:{story:`The three row densities. \`size\` sets row min-height: sm 48 / md 64 / lg 88px.

@summary size — sm / md / lg`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'header'
  },
  decorators: [Story => <div className="flex h-55 flex-col">
                <Story />
            </div>],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('columnheader', {
      name: 'Name'
    });
    const scroll = canvasElement.querySelector('[data-slot=table-scroll]');
    scroll?.scrollTo({
      top: 120
    });

    // The separator must survive scrolling — a \`border-b\` would not, since
    // \`border-collapse: collapse\` leaves it behind when the cell pins.
    await expect(header).toHaveStyle({
      borderBottomWidth: '0px'
    });
    await expect(getComputedStyle(header).boxShadow).not.toBe('none');
  }
}`,...T.parameters?.docs?.source},description:{story:`\`sticky="header"\` pins the header while the body scrolls. Needs a bounded-height parent.

@summary sticky="header" with a scrolling body`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'headerAndFooter'
  },
  render: args => renderTable(args, {
    totals: true
  }),
  decorators: [Story => <div className="flex h-55 flex-col">
                <Story />
            </div>]
}`,...E.parameters?.docs?.source},description:{story:`\`sticky="headerAndFooter"\` pins the header and the last body row (totals here).

@summary sticky="headerAndFooter" with a pinned totals row`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    embed: true
  }
}`,...D.parameters?.docs?.source},description:{story:`\`embed\` drops the per-row dividers and tightens the edge gutter to 1rem.

@summary embed — no row dividers, 1rem edge gutter`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    enclosed: true
  }
}`,...O.parameters?.docs?.source},description:{story:`\`enclosed\` wraps the table in a bordered, rounded container — the standalone
"card" look, as opposed to a full-bleed page table.

@summary enclosed — bordered, rounded card container`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => renderTable(args, {
    checkbox: true
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cell = canvas.getByLabelText('Select Alice Williams').closest('td')!;
    await expect(getComputedStyle(cell).paddingInlineEnd).toBe('0px');
  }
}`,...k.parameters?.docs?.source},description:{story:`A leading checkbox column; checkbox cells collapse to zero width.

@summary Selectable rows with a collapsing checkbox column`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <form>
            <Table.Root {...args}>
                <Table.Body>
                    {ROWS.slice(0, 3).map(row => <Table.Row key={row.id}>
                            <Table.Cell>{row.name}</Table.Cell>
                            <Table.Cell>
                                <Switch size="sm" defaultChecked aria-label={\`Notify \${row.name}\`} />
                            </Table.Cell>
                        </Table.Row>)}
                </Table.Body>
            </Table.Root>
        </form>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cell = canvas.getByRole('switch', {
      name: 'Notify Alice Williams'
    }).closest('td')!;
    await expect(cell.querySelector('input[type="checkbox"][aria-hidden]')).not.toBeNull();
    await expect(getComputedStyle(cell).paddingInlineEnd).not.toBe('0px');
  }
}`,...A.parameters?.docs?.source},description:{story:`A Switch renders a hidden checkbox so a form can read its value without JS.
Radix keeps it while the Switch sits in a form, and on the server render
before hydration. A cell holding a Switch is not a selection column, so it
keeps its padding.

@summary A cell holding a Switch keeps its padding`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => renderTable(args, {
    actions: true
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Controls are present in the DOM (hidden until row hover, a visual-only behavior).
    await expect(canvas.getAllByRole('button', {
      name: /Edit /
    })).toHaveLength(ROWS.length);
    await expect(canvas.getAllByRole('button', {
      name: /Delete /
    })).toHaveLength(ROWS.length);
  }
}`,...j.parameters?.docs?.source},description:{story:`Hover-revealed row actions pinned to the trailing edge.

@summary Hover-revealed row actions`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <Table.Root {...args}>
            <Table.Head>
                <Table.Row>
                    <Table.Header>Name</Table.Header>
                    <Table.Header>Email</Table.Header>
                    <Table.Header>
                        <span className="sr-only">Actions</span>
                    </Table.Header>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {ROWS.slice(0, 3).map(row => <Table.Row key={row.id}>
                        <Table.Cell className="font-bold">{row.name}</Table.Cell>
                        <Table.Cell className="text-text-default-base-secondary">{row.email}</Table.Cell>
                        <Table.Cell style={{
          width: '0.0625rem',
          position: 'sticky',
          right: 0
        }}>
                            <Table.RowActions>
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger asChild>
                                        <Button variant="ghost" size="sm" iconOnly aria-label={\`Actions for \${row.name}\`}>
                                            <IconEdit />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Portal>
                                        <DropdownMenu.Content align="end">
                                            <DropdownMenu.Item>Edit</DropdownMenu.Item>
                                            <DropdownMenu.Item>Delete</DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Portal>
                                </DropdownMenu.Root>
                            </Table.RowActions>
                        </Table.Cell>
                    </Table.Row>)}
            </Table.Body>
        </Table.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: \`Actions for \${ROWS[0]!.name}\`
    });
    const actions = trigger.closest<HTMLElement>('[data-slot=table-row-actions]')!;
    const row = trigger.closest('tr')!;
    const idleRow = canvas.getByRole('button', {
      name: \`Actions for \${ROWS[1]!.name}\`
    }).closest('tr')!;
    await expect(getComputedStyle(actions).opacity).toBe('0');
    await userEvent.click(trigger);
    await within(document.body).findByRole('menu');
    await waitFor(() => expect(runningTransitions(row)).toHaveLength(0));
    await expect(getComputedStyle(actions).opacity).toBe('1');
    const rowOpenBackground = getComputedStyle(row).backgroundColor;
    await expect(rowOpenBackground).not.toBe(getComputedStyle(idleRow).backgroundColor);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(document.body).queryByRole('menu')).not.toBeInTheDocument());
    await expect(trigger).toHaveFocus();
    await waitFor(() => expect(runningTransitions(row)).toHaveLength(0));
    await expect(getComputedStyle(actions).opacity).toBe('1');
    await expect(getComputedStyle(row).backgroundColor).toBe(rowOpenBackground);
  }
}`,...M.parameters?.docs?.source},description:{story:`A row keeps its hover look, and its actions stay visible, while a menu
opened from one of those actions is open. The pointer leaves the row for the
menu, so without it the actions would fade out under the open menu. Escape
hands keyboard focus back to the action, so the row keeps that look.

@summary Row stays highlighted while its actions menu is open`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <Table.Root {...args}>
            <Table.Head>
                <Table.Row>
                    <Table.Header>Name</Table.Header>
                    <Table.Header>
                        <span className="sr-only">Actions</span>
                    </Table.Header>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {ROWS.slice(0, 2).map(row => <Table.Row key={row.id}>
                        <Table.Cell className="font-bold">{row.name}</Table.Cell>
                        <Table.Cell style={{
          width: '0.0625rem',
          position: 'sticky',
          right: 0
        }}>
                            <ArchiveRowActions name={row.name} />
                        </Table.Cell>
                    </Table.Row>)}
            </Table.Body>
        </Table.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: \`Actions for \${ROWS[0]!.name}\`
    });
    const actions = trigger.closest<HTMLElement>('[data-slot=table-row-actions]')!;
    const row = trigger.closest('tr')!;
    const idleRow = canvas.getByRole('button', {
      name: \`Actions for \${ROWS[1]!.name}\`
    }).closest('tr')!;
    await userEvent.click(trigger);
    await userEvent.click(await body.findByRole('menuitem', {
      name: 'Archive'
    }));
    await waitFor(() => expect(trigger).toBeDisabled());
    await expect(body.getByRole('menu')).toBeInTheDocument();
    await waitFor(() => expect(runningTransitions(row)).toHaveLength(0));
    await expect(getComputedStyle(actions).opacity).toBe('1');
    await expect(getComputedStyle(row).backgroundColor).not.toBe(getComputedStyle(idleRow).backgroundColor);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());
  }
}`,...P.parameters?.docs?.source},description:{story:`The row stays highlighted while its menu is open even when the trigger turns
\`loading\`, and with it disabled, because the menu item that started the work
keeps the menu open.

@summary Row stays highlighted while a loading trigger's menu is open`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [openId, setOpenId] = useState<string | null>(ROWS[0]!.id);
    return <Table.Root {...args}>
                <Table.Head>
                    <Table.Row>
                        <Table.Header>
                            <span className="sr-only">Expand</span>
                        </Table.Header>
                        <Table.Header>Name</Table.Header>
                        <Table.Header>Email</Table.Header>
                        <Table.Header>Role</Table.Header>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {ROWS.slice(0, 4).map(row => <Fragment key={row.id}>
                            <Table.Row>
                                <Table.Cell>
                                    <Table.ExpandButton isExpanded={openId === row.id} toggleExpanded={() => setOpenId(openId === row.id ? null : row.id)} aria-label={\`Toggle \${row.name}\`} />
                                </Table.Cell>
                                <Table.Cell className="font-bold">{row.name}</Table.Cell>
                                <Table.Cell className="text-text-default-base-secondary">{row.email}</Table.Cell>
                                <Table.Cell>{row.role}</Table.Cell>
                            </Table.Row>
                            {openId === row.id && <Table.ExpandedRow>
                                    <Table.Cell colSpan={4}>
                                        <div className="py-2 text-text-default-base-secondary">
                                            Extended details for {row.name} — {row.amount} lifetime value.
                                        </div>
                                    </Table.Cell>
                                </Table.ExpandedRow>}
                        </Fragment>)}
                </Table.Body>
            </Table.Root>;
  }
}`,...F.parameters?.docs?.source},description:{story:"`Table.ExpandButton` toggles a `Table.ExpandedRow` detail panel under its row.\n\n@summary Expandable rows with a detail panel",...F.parameters?.docs?.description}}},I=[`Default`,`Sizes`,`StickyHeader`,`StickyHeaderAndFooter`,`Embed`,`Enclosed`,`WithCheckbox`,`WithSwitch`,`WithRowActions`,`WithRowActionsMenu`,`WithLoadingRowActionsMenu`,`ExpandableRows`]})))()}L();export{C as Default,D as Embed,O as Enclosed,F as ExpandableRows,w as Sizes,T as StickyHeader,E as StickyHeaderAndFooter,k as WithCheckbox,P as WithLoadingRowActionsMenu,j as WithRowActions,M as WithRowActionsMenu,A as WithSwitch,I as __namedExportsOrder,S as default};