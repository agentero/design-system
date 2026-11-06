import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Cs3OWi5P.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./createLucideIcon-WxAO00Ex.js";import{n as a,t as o}from"./trash-CV1ZdxTL.js";import{n as s,t as c}from"./button-BFkAtJ3l.js";import{n as l,t as u}from"./table-BtDz489Y.js";import{n as d,t as f}from"./dropdown-menu-sxIjMsMz.js";import{n as p,t as m}from"./switch-C4VCeblB.js";var h,g;function _(){return(_=e((()=>{r(),h={name:`pencil`,size:24,node:[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}],[`path`,{d:`m15 5 4 4`,key:`1mk7zo`}]]},h.node,g=i(h)})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{v=t(),_(),a(),l(),s(),d(),p(),y=n(),{expect:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w=e=>e.getAnimations({subtree:!0}).filter(e=>e instanceof CSSTransition),T=[{id:`1`,name:`Alice Williams`,email:`alice@example.com`,role:`Admin`,amount:`$1,200`},{id:`2`,name:`Bob Johnson`,email:`bob@example.com`,role:`User`,amount:`$340`},{id:`3`,name:`Charlie Brown`,email:`charlie@example.com`,role:`User`,amount:`$980`},{id:`4`,name:`Diana Prince`,email:`diana@example.com`,role:`Editor`,amount:`$2,450`},{id:`5`,name:`Evan Davis`,email:`evan@example.com`,role:`User`,amount:`$75`},{id:`6`,name:`Fiona Clark`,email:`fiona@example.com`,role:`Admin`,amount:`$610`},{id:`7`,name:`George Hill`,email:`george@example.com`,role:`User`,amount:`$1,890`},{id:`8`,name:`Hannah Scott`,email:`hannah@example.com`,role:`Editor`,amount:`$430`}],E=(e,t={})=>(0,y.jsxs)(u.Root,{...e,children:[(0,y.jsx)(u.Head,{children:(0,y.jsxs)(u.Row,{children:[t.checkbox&&(0,y.jsx)(u.Header,{children:(0,y.jsx)(`input`,{type:`checkbox`,"aria-label":`Select all rows`})}),(0,y.jsx)(u.Header,{children:`Name`}),(0,y.jsx)(u.Header,{children:`Email`}),(0,y.jsx)(u.Header,{children:`Role`}),(0,y.jsx)(u.Header,{style:{textAlign:`right`},children:`Amount`}),t.actions&&(0,y.jsx)(u.Header,{children:(0,y.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,y.jsxs)(u.Body,{children:[T.map(e=>(0,y.jsxs)(u.Row,{children:[t.checkbox&&(0,y.jsx)(u.Cell,{children:(0,y.jsx)(`input`,{type:`checkbox`,"aria-label":`Select ${e.name}`})}),(0,y.jsx)(u.Cell,{className:`font-bold`,children:e.name}),(0,y.jsx)(u.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,y.jsx)(u.Cell,{children:e.role}),(0,y.jsx)(u.Cell,{style:{textAlign:`right`},children:e.amount}),t.actions&&(0,y.jsx)(u.Cell,{style:{width:`0.0625rem`,position:`sticky`,right:0},children:(0,y.jsxs)(u.RowActions,{children:[(0,y.jsx)(c,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Edit ${e.name}`,children:(0,y.jsx)(g,{})}),(0,y.jsx)(c,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Delete ${e.name}`,children:(0,y.jsx)(o,{})})]})})]},e.id)),t.totals&&(0,y.jsxs)(u.Row,{children:[(0,y.jsx)(u.Cell,{className:`font-bold`,children:`Total`}),(0,y.jsx)(u.Cell,{}),(0,y.jsx)(u.Cell,{}),(0,y.jsx)(u.Cell,{className:`font-bold`,style:{textAlign:`right`},children:`$8,375`})]})]})]}),D={title:`Components/Table`,component:u.Root,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Low-level presentational table primitive: native `<table>` markup themed for\nscrolling, sticky rows, cell padding, dividers, hover, and expandable rows.\nFor sorting/toolbar/pagination, prefer `DataTable`."}}},decorators:[e=>(0,y.jsx)(`div`,{className:`p-4`,children:(0,y.jsx)(e,{})})],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},embed:{control:`boolean`},enclosed:{control:`boolean`},sticky:{control:`inline-radio`,options:[void 0,`header`,`headerAndFooter`]}},args:{size:`md`,embed:!1},render:e=>E(e)},O={parameters:{a11y:{test:`error`}},play:async({canvasElement:e})=>{let t=C(e);await b(t.getByText(`Alice Williams`)).toBeInTheDocument(),await b(t.getByRole(`columnheader`,{name:`Name`})).toBeInTheDocument()}},k={render:()=>(0,y.jsx)(`div`,{className:`flex flex-col gap-6`,children:[`sm`,`md`,`lg`].map(e=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsxs)(`span`,{className:`text-xs text-text-default-base-tertiary`,children:[`size="`,e,`"`]}),E({size:e})]},e))})},A={args:{sticky:`header`},decorators:[e=>(0,y.jsx)(`div`,{className:`flex h-55 flex-col`,children:(0,y.jsx)(e,{})})],play:async({canvasElement:e})=>{let t=C(e).getByRole(`columnheader`,{name:`Name`});e.querySelector(`[data-slot=table-scroll]`)?.scrollTo({top:120}),await b(t).toHaveStyle({borderBottomWidth:`0px`}),await b(getComputedStyle(t).boxShadow).not.toBe(`none`)}},j={args:{sticky:`headerAndFooter`},render:e=>E(e,{totals:!0}),decorators:[e=>(0,y.jsx)(`div`,{className:`flex h-55 flex-col`,children:(0,y.jsx)(e,{})})]},M={args:{embed:!0}},N={args:{enclosed:!0}},P={render:e=>E(e,{checkbox:!0}),play:async({canvasElement:e})=>{let t=C(e).getByLabelText(`Select Alice Williams`).closest(`td`);await b(getComputedStyle(t).paddingInlineEnd).toBe(`0px`)}},F={render:e=>(0,y.jsx)(`form`,{children:(0,y.jsx)(u.Root,{...e,children:(0,y.jsx)(u.Body,{children:T.slice(0,3).map(e=>(0,y.jsxs)(u.Row,{children:[(0,y.jsx)(u.Cell,{children:e.name}),(0,y.jsx)(u.Cell,{children:(0,y.jsx)(m,{size:`sm`,defaultChecked:!0,"aria-label":`Notify ${e.name}`})})]},e.id))})})}),play:async({canvasElement:e})=>{let t=C(e).getByRole(`switch`,{name:`Notify Alice Williams`}).closest(`td`);await b(t.querySelector(`input[type="checkbox"][aria-hidden]`)).not.toBeNull(),await b(getComputedStyle(t).paddingInlineEnd).not.toBe(`0px`)}},I={render:e=>E(e,{actions:!0}),play:async({canvasElement:e})=>{let t=C(e);await b(t.getAllByRole(`button`,{name:/Edit /})).toHaveLength(T.length),await b(t.getAllByRole(`button`,{name:/Delete /})).toHaveLength(T.length)}},L={render:e=>(0,y.jsxs)(u.Root,{...e,children:[(0,y.jsx)(u.Head,{children:(0,y.jsxs)(u.Row,{children:[(0,y.jsx)(u.Header,{children:`Name`}),(0,y.jsx)(u.Header,{children:`Email`}),(0,y.jsx)(u.Header,{children:(0,y.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,y.jsx)(u.Body,{children:T.slice(0,3).map(e=>(0,y.jsxs)(u.Row,{children:[(0,y.jsx)(u.Cell,{className:`font-bold`,children:e.name}),(0,y.jsx)(u.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,y.jsx)(u.Cell,{style:{width:`0.0625rem`,position:`sticky`,right:0},children:(0,y.jsx)(u.RowActions,{children:(0,y.jsxs)(f.Root,{children:[(0,y.jsx)(f.Trigger,{asChild:!0,children:(0,y.jsx)(c,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Actions for ${e.name}`,children:(0,y.jsx)(g,{})})}),(0,y.jsx)(f.Portal,{children:(0,y.jsxs)(f.Content,{align:`end`,children:[(0,y.jsx)(f.Item,{children:`Edit`}),(0,y.jsx)(f.Item,{children:`Delete`})]})})]})})})]},e.id))})]}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`button`,{name:`Actions for ${T[0].name}`}),r=n.closest(`[data-slot=table-row-actions]`),i=n.closest(`tr`),a=t.getByRole(`button`,{name:`Actions for ${T[1].name}`}).closest(`tr`);await b(getComputedStyle(r).opacity).toBe(`0`),await x.click(n),await C(document.body).findByRole(`menu`),await S(()=>b(w(i)).toHaveLength(0)),await b(getComputedStyle(r).opacity).toBe(`1`);let o=getComputedStyle(i).backgroundColor;await b(o).not.toBe(getComputedStyle(a).backgroundColor),await x.keyboard(`{Escape}`),await S(()=>b(C(document.body).queryByRole(`menu`)).not.toBeInTheDocument()),await b(n).toHaveFocus(),await S(()=>b(w(i)).toHaveLength(0)),await b(getComputedStyle(r).opacity).toBe(`1`),await b(getComputedStyle(i).backgroundColor).toBe(o)}},R=({name:e})=>{let[t,n]=(0,v.useState)(!1);return(0,y.jsx)(u.RowActions,{children:(0,y.jsxs)(f.Root,{children:[(0,y.jsx)(f.Trigger,{asChild:!0,children:(0,y.jsx)(c,{variant:`ghost`,size:`sm`,iconOnly:!0,loading:t,"aria-label":`Actions for ${e}`,children:(0,y.jsx)(g,{})})}),(0,y.jsx)(f.Portal,{children:(0,y.jsx)(f.Content,{align:`end`,children:(0,y.jsx)(f.Item,{onSelect:e=>{e.preventDefault(),n(!0)},children:`Archive`})})})]})})},z={render:e=>(0,y.jsxs)(u.Root,{...e,children:[(0,y.jsx)(u.Head,{children:(0,y.jsxs)(u.Row,{children:[(0,y.jsx)(u.Header,{children:`Name`}),(0,y.jsx)(u.Header,{children:(0,y.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,y.jsx)(u.Body,{children:T.slice(0,2).map(e=>(0,y.jsxs)(u.Row,{children:[(0,y.jsx)(u.Cell,{className:`font-bold`,children:e.name}),(0,y.jsx)(u.Cell,{style:{width:`0.0625rem`,position:`sticky`,right:0},children:(0,y.jsx)(R,{name:e.name})})]},e.id))})]}),play:async({canvasElement:e})=>{let t=C(e),n=C(document.body),r=t.getByRole(`button`,{name:`Actions for ${T[0].name}`}),i=r.closest(`[data-slot=table-row-actions]`),a=r.closest(`tr`),o=t.getByRole(`button`,{name:`Actions for ${T[1].name}`}).closest(`tr`);await x.click(r),await x.click(await n.findByRole(`menuitem`,{name:`Archive`})),await S(()=>b(r).toBeDisabled()),await b(n.getByRole(`menu`)).toBeInTheDocument(),await S(()=>b(w(a)).toHaveLength(0)),await b(getComputedStyle(i).opacity).toBe(`1`),await b(getComputedStyle(a).backgroundColor).not.toBe(getComputedStyle(o).backgroundColor),await x.keyboard(`{Escape}`),await S(()=>b(n.queryByRole(`menu`)).not.toBeInTheDocument())}},B={render:e=>{let[t,n]=(0,v.useState)(T[0].id);return(0,y.jsxs)(u.Root,{...e,children:[(0,y.jsx)(u.Head,{children:(0,y.jsxs)(u.Row,{children:[(0,y.jsx)(u.Header,{children:(0,y.jsx)(`span`,{className:`sr-only`,children:`Expand`})}),(0,y.jsx)(u.Header,{children:`Name`}),(0,y.jsx)(u.Header,{children:`Email`}),(0,y.jsx)(u.Header,{children:`Role`})]})}),(0,y.jsx)(u.Body,{children:T.slice(0,4).map(e=>(0,y.jsxs)(v.Fragment,{children:[(0,y.jsxs)(u.Row,{children:[(0,y.jsx)(u.Cell,{children:(0,y.jsx)(u.ExpandButton,{isExpanded:t===e.id,toggleExpanded:()=>n(t===e.id?null:e.id),"aria-label":`Toggle ${e.name}`})}),(0,y.jsx)(u.Cell,{className:`font-bold`,children:e.name}),(0,y.jsx)(u.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,y.jsx)(u.Cell,{children:e.role})]}),t===e.id&&(0,y.jsx)(u.ExpandedRow,{children:(0,y.jsx)(u.Cell,{colSpan:4,children:(0,y.jsxs)(`div`,{className:`py-2 text-text-default-base-secondary`,children:[`Extended details for `,e.name,` — `,e.amount,` lifetime value.`]})})})]},e.id))})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Default args playground.

@summary Default table`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="flex flex-col gap-1">
                    <span className="text-xs text-text-default-base-tertiary">size=&quot;{size}&quot;</span>
                    {renderTable({
        size
      })}
                </div>)}
        </div>
}`,...k.parameters?.docs?.source},description:{story:`The three row densities. \`size\` sets row min-height: sm 48 / md 64 / lg 88px.

@summary size — sm / md / lg`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`\`sticky="header"\` pins the header while the body scrolls. Needs a bounded-height parent.

@summary sticky="header" with a scrolling body`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'headerAndFooter'
  },
  render: args => renderTable(args, {
    totals: true
  }),
  decorators: [Story => <div className="flex h-55 flex-col">
                <Story />
            </div>]
}`,...j.parameters?.docs?.source},description:{story:`\`sticky="headerAndFooter"\` pins the header and the last body row (totals here).

@summary sticky="headerAndFooter" with a pinned totals row`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    embed: true
  }
}`,...M.parameters?.docs?.source},description:{story:`\`embed\` drops the per-row dividers and tightens the edge gutter to 1rem.

@summary embed — no row dividers, 1rem edge gutter`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    enclosed: true
  }
}`,...N.parameters?.docs?.source},description:{story:`\`enclosed\` wraps the table in a bordered, rounded container — the standalone
"card" look, as opposed to a full-bleed page table.

@summary enclosed — bordered, rounded card container`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`A leading checkbox column; checkbox cells collapse to zero width.

@summary Selectable rows with a collapsing checkbox column`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`A Switch renders a hidden checkbox so a form can read its value without JS.
Radix keeps it while the Switch sits in a form, and on the server render
before hydration. A cell holding a Switch is not a selection column, so it
keeps its padding.

@summary A cell holding a Switch keeps its padding`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Hover-revealed row actions pinned to the trailing edge.

@summary Hover-revealed row actions`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
                                            <PencilIcon />
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
}`,...L.parameters?.docs?.source},description:{story:`A row keeps its hover look, and its actions stay visible, while a menu
opened from one of those actions is open. The pointer leaves the row for the
menu, so without it the actions would fade out under the open menu. Escape
hands keyboard focus back to the action, so the row keeps that look.

@summary Row stays highlighted while its actions menu is open`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`The row stays highlighted while its menu is open even when the trigger turns
\`loading\`, and with it disabled, because the menu item that started the work
keeps the menu open.

@summary Row stays highlighted while a loading trigger's menu is open`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"`Table.ExpandButton` toggles a `Table.ExpandedRow` detail panel under its row.\n\n@summary Expandable rows with a detail panel",...B.parameters?.docs?.description}}},V=[`Default`,`Sizes`,`StickyHeader`,`StickyHeaderAndFooter`,`Embed`,`Enclosed`,`WithCheckbox`,`WithSwitch`,`WithRowActions`,`WithRowActionsMenu`,`WithLoadingRowActionsMenu`,`ExpandableRows`]})))()}H();export{O as Default,M as Embed,N as Enclosed,B as ExpandableRows,k as Sizes,A as StickyHeader,j as StickyHeaderAndFooter,P as WithCheckbox,z as WithLoadingRowActionsMenu,I as WithRowActions,L as WithRowActionsMenu,F as WithSwitch,V as __namedExportsOrder,D as default};