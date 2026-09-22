import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-kkoXerTt.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./createLucideIcon-CmOAI7rl.js";import{n as a,t as o}from"./trash-ejV0TtFm.js";import{n as s,t as c}from"./button-CsB_uHIV.js";import{n as l,t as u}from"./table-BsfUdBnw.js";var d,f;function p(){return(p=e((()=>{r(),d={name:`pencil`,size:24,node:[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}],[`path`,{d:`m15 5 4 4`,key:`1mk7zo`}]]},d.node,f=i(d)})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{m=t(),p(),a(),l(),s(),h=n(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v=[{id:`1`,name:`Alice Williams`,email:`alice@example.com`,role:`Admin`,amount:`$1,200`},{id:`2`,name:`Bob Johnson`,email:`bob@example.com`,role:`User`,amount:`$340`},{id:`3`,name:`Charlie Brown`,email:`charlie@example.com`,role:`User`,amount:`$980`},{id:`4`,name:`Diana Prince`,email:`diana@example.com`,role:`Editor`,amount:`$2,450`},{id:`5`,name:`Evan Davis`,email:`evan@example.com`,role:`User`,amount:`$75`},{id:`6`,name:`Fiona Clark`,email:`fiona@example.com`,role:`Admin`,amount:`$610`},{id:`7`,name:`George Hill`,email:`george@example.com`,role:`User`,amount:`$1,890`},{id:`8`,name:`Hannah Scott`,email:`hannah@example.com`,role:`Editor`,amount:`$430`}],y=(e,t={})=>(0,h.jsxs)(u.Root,{...e,children:[(0,h.jsx)(u.Head,{children:(0,h.jsxs)(u.Row,{children:[t.checkbox&&(0,h.jsx)(u.Header,{children:(0,h.jsx)(`input`,{type:`checkbox`,"aria-label":`Select all rows`})}),(0,h.jsx)(u.Header,{children:`Name`}),(0,h.jsx)(u.Header,{children:`Email`}),(0,h.jsx)(u.Header,{children:`Role`}),(0,h.jsx)(u.Header,{style:{textAlign:`right`},children:`Amount`}),t.actions&&(0,h.jsx)(u.Header,{children:(0,h.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,h.jsxs)(u.Body,{children:[v.map(e=>(0,h.jsxs)(u.Row,{children:[t.checkbox&&(0,h.jsx)(u.Cell,{children:(0,h.jsx)(`input`,{type:`checkbox`,"aria-label":`Select ${e.name}`})}),(0,h.jsx)(u.Cell,{className:`font-bold`,children:e.name}),(0,h.jsx)(u.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,h.jsx)(u.Cell,{children:e.role}),(0,h.jsx)(u.Cell,{style:{textAlign:`right`},children:e.amount}),t.actions&&(0,h.jsx)(u.Cell,{style:{width:`0.0625rem`,position:`sticky`,right:0},children:(0,h.jsxs)(u.RowActions,{children:[(0,h.jsx)(c,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Edit ${e.name}`,children:(0,h.jsx)(f,{})}),(0,h.jsx)(c,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Delete ${e.name}`,children:(0,h.jsx)(o,{})})]})})]},e.id)),t.totals&&(0,h.jsxs)(u.Row,{children:[(0,h.jsx)(u.Cell,{className:`font-bold`,children:`Total`}),(0,h.jsx)(u.Cell,{}),(0,h.jsx)(u.Cell,{}),(0,h.jsx)(u.Cell,{className:`font-bold`,style:{textAlign:`right`},children:`$8,375`})]})]})]}),b={title:`Components/Table`,component:u.Root,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Low-level presentational table primitive: native `<table>` markup themed for\nscrolling, sticky rows, cell padding, dividers, hover, and expandable rows.\nFor sorting/toolbar/pagination, prefer `DataTable`."}}},decorators:[e=>(0,h.jsx)(`div`,{className:`p-4`,children:(0,h.jsx)(e,{})})],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},embed:{control:`boolean`},enclosed:{control:`boolean`},sticky:{control:`inline-radio`,options:[void 0,`header`,`headerAndFooter`]}},args:{size:`md`,embed:!1},render:e=>y(e)},x={parameters:{a11y:{test:`error`}},play:async({canvasElement:e})=>{let t=_(e);await g(t.getByText(`Alice Williams`)).toBeInTheDocument(),await g(t.getByRole(`columnheader`,{name:`Name`})).toBeInTheDocument()}},S={render:()=>(0,h.jsx)(`div`,{className:`flex flex-col gap-6`,children:[`sm`,`md`,`lg`].map(e=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,h.jsxs)(`span`,{className:`text-xs text-text-default-base-tertiary`,children:[`size="`,e,`"`]}),y({size:e})]},e))})},C={args:{sticky:`header`},decorators:[e=>(0,h.jsx)(`div`,{className:`flex h-55 flex-col`,children:(0,h.jsx)(e,{})})],play:async({canvasElement:e})=>{let t=_(e).getByRole(`columnheader`,{name:`Name`});e.querySelector(`[data-slot=table-scroll]`)?.scrollTo({top:120}),await g(t).toHaveStyle({borderBottomWidth:`0px`}),await g(getComputedStyle(t).boxShadow).not.toBe(`none`)}},w={args:{sticky:`headerAndFooter`},render:e=>y(e,{totals:!0}),decorators:[e=>(0,h.jsx)(`div`,{className:`flex h-55 flex-col`,children:(0,h.jsx)(e,{})})]},T={args:{embed:!0}},E={args:{enclosed:!0}},D={render:e=>y(e,{checkbox:!0})},O={render:e=>y(e,{actions:!0}),play:async({canvasElement:e})=>{let t=_(e);await g(t.getAllByRole(`button`,{name:/Edit /})).toHaveLength(v.length),await g(t.getAllByRole(`button`,{name:/Delete /})).toHaveLength(v.length)}},k={render:e=>(0,h.jsx)(()=>{let[t,n]=(0,m.useState)(v[0].id);return(0,h.jsxs)(u.Root,{...e,children:[(0,h.jsx)(u.Head,{children:(0,h.jsxs)(u.Row,{children:[(0,h.jsx)(u.Header,{children:(0,h.jsx)(`span`,{className:`sr-only`,children:`Expand`})}),(0,h.jsx)(u.Header,{children:`Name`}),(0,h.jsx)(u.Header,{children:`Email`}),(0,h.jsx)(u.Header,{children:`Role`})]})}),(0,h.jsx)(u.Body,{children:v.slice(0,4).map(e=>(0,h.jsxs)(m.Fragment,{children:[(0,h.jsxs)(u.Row,{children:[(0,h.jsx)(u.Cell,{children:(0,h.jsx)(u.ExpandButton,{isExpanded:t===e.id,toggleExpanded:()=>n(t===e.id?null:e.id),"aria-label":`Toggle ${e.name}`})}),(0,h.jsx)(u.Cell,{className:`font-bold`,children:e.name}),(0,h.jsx)(u.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,h.jsx)(u.Cell,{children:e.role})]}),t===e.id&&(0,h.jsx)(u.ExpandedRow,{children:(0,h.jsx)(u.Cell,{colSpan:4,children:(0,h.jsxs)(`div`,{className:`py-2 text-text-default-base-secondary`,children:[`Extended details for `,e.name,` — `,e.amount,` lifetime value.`]})})})]},e.id))})]})},{})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Default args playground.

@summary Default table`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="flex flex-col gap-1">
                    <span className="text-xs text-text-default-base-tertiary">size=&quot;{size}&quot;</span>
                    {renderTable({
        size
      })}
                </div>)}
        </div>
}`,...S.parameters?.docs?.source},description:{story:`The three row densities. \`size\` sets row min-height: sm 48 / md 64 / lg 88px.

@summary size — sm / md / lg`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`\`sticky="header"\` pins the header while the body scrolls. Needs a bounded-height parent.

@summary sticky="header" with a scrolling body`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'headerAndFooter'
  },
  render: args => renderTable(args, {
    totals: true
  }),
  decorators: [Story => <div className="flex h-55 flex-col">
                <Story />
            </div>]
}`,...w.parameters?.docs?.source},description:{story:`\`sticky="headerAndFooter"\` pins the header and the last body row (totals here).

@summary sticky="headerAndFooter" with a pinned totals row`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    embed: true
  }
}`,...T.parameters?.docs?.source},description:{story:`\`embed\` drops the per-row dividers and tightens the edge gutter to 1rem.

@summary embed — no row dividers, 1rem edge gutter`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    enclosed: true
  }
}`,...E.parameters?.docs?.source},description:{story:`\`enclosed\` wraps the table in a bordered, rounded container — the standalone
"card" look, as opposed to a full-bleed page table.

@summary enclosed — bordered, rounded card container`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => renderTable(args, {
    checkbox: true
  })
}`,...D.parameters?.docs?.source},description:{story:`A leading checkbox column; checkbox cells collapse to zero width.

@summary Selectable rows with a collapsing checkbox column`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Hover-revealed row actions pinned to the trailing edge.

@summary Hover-revealed row actions`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Demo = () => {
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
    };
    return <Demo />;
  }
}`,...k.parameters?.docs?.source},description:{story:"`Table.ExpandButton` toggles a `Table.ExpandedRow` detail panel under its row.\n\n@summary Expandable rows with a detail panel",...k.parameters?.docs?.description}}},A=[`Default`,`Sizes`,`StickyHeader`,`StickyHeaderAndFooter`,`Embed`,`Enclosed`,`WithCheckbox`,`WithRowActions`,`ExpandableRows`]})))()}j();export{x as Default,T as Embed,E as Enclosed,k as ExpandableRows,S as Sizes,C as StickyHeader,w as StickyHeaderAndFooter,D as WithCheckbox,O as WithRowActions,A as __namedExportsOrder,b as default};