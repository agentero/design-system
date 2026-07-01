import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-gexUHm1A.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./button-Cuiplw5a.js";import{t as a}from"./button-DPTvyf2Z.js";import{n as o,t as s}from"./table-Btc8Rcmx.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{c=t(n(),1),a(),o(),l=r(),{expect:u,within:d}=__STORYBOOK_MODULE_TEST__,f=[{id:`1`,name:`Alice Williams`,email:`alice@example.com`,role:`Admin`,amount:`$1,200`},{id:`2`,name:`Bob Johnson`,email:`bob@example.com`,role:`User`,amount:`$340`},{id:`3`,name:`Charlie Brown`,email:`charlie@example.com`,role:`User`,amount:`$980`},{id:`4`,name:`Diana Prince`,email:`diana@example.com`,role:`Editor`,amount:`$2,450`},{id:`5`,name:`Evan Davis`,email:`evan@example.com`,role:`User`,amount:`$75`},{id:`6`,name:`Fiona Clark`,email:`fiona@example.com`,role:`Admin`,amount:`$610`},{id:`7`,name:`George Hill`,email:`george@example.com`,role:`User`,amount:`$1,890`},{id:`8`,name:`Hannah Scott`,email:`hannah@example.com`,role:`Editor`,amount:`$430`}],p=e=>(0,l.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,l.jsx)(`path`,{fill:`currentColor`,d:`M5.154 19H6.39l9.26-9.26-1.237-1.236-9.26 9.26zM4.558 20.5a.88.88 0 0 1-.646-.259.88.88 0 0 1-.258-.645v-2.094q0-.18.065-.344a.9.9 0 0 1 .206-.304L15.483 5.156q.222-.202.49-.312a1.5 1.5 0 0 1 .562-.11q.291 0 .555.11.264.11.46.33l1.207 1.221q.22.197.323.461.103.264.103.552 0 .291-.106.556a1.4 1.4 0 0 1-.32.49L7.3 20.229a1.3 1.3 0 0 1-.304.206 1.4 1.4 0 0 1-.344.065z`})}),m=e=>(0,l.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,l.jsx)(`path`,{fill:`currentColor`,d:`M7.308 20.5q-.749 0-1.278-.53a1.74 1.74 0 0 1-.53-1.278V6h-.25a.73.73 0 0 1-.535-.215.73.73 0 0 1-.215-.535q0-.32.215-.535A.73.73 0 0 1 5.25 4.5H9q0-.367.259-.626a.85.85 0 0 1 .626-.259h4.23q.368 0 .626.26A.85.85 0 0 1 15 4.5h3.75q.32 0 .535.215a.73.73 0 0 1 .215.535.73.73 0 0 1-.215.535.73.73 0 0 1-.535.215h-.25v12.692q0 .749-.53 1.278-.53.53-1.278.53zM17 6H7v12.692a.3.3 0 0 0 .087.221.3.3 0 0 0 .22.087h9.385a.3.3 0 0 0 .221-.087.3.3 0 0 0 .087-.22z`})}),h=(e,t={})=>(0,l.jsxs)(s.Root,{...e,children:[(0,l.jsx)(s.Head,{children:(0,l.jsxs)(s.Row,{children:[t.checkbox&&(0,l.jsx)(s.Header,{children:(0,l.jsx)(`input`,{type:`checkbox`,"aria-label":`Select all rows`})}),(0,l.jsx)(s.Header,{children:`Name`}),(0,l.jsx)(s.Header,{children:`Email`}),(0,l.jsx)(s.Header,{children:`Role`}),(0,l.jsx)(s.Header,{style:{textAlign:`right`},children:`Amount`}),t.actions&&(0,l.jsx)(s.Header,{children:(0,l.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,l.jsxs)(s.Body,{children:[f.map(e=>(0,l.jsxs)(s.Row,{children:[t.checkbox&&(0,l.jsx)(s.Cell,{children:(0,l.jsx)(`input`,{type:`checkbox`,"aria-label":`Select ${e.name}`})}),(0,l.jsx)(s.Cell,{className:`font-bold`,children:e.name}),(0,l.jsx)(s.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,l.jsx)(s.Cell,{children:e.role}),(0,l.jsx)(s.Cell,{style:{textAlign:`right`},children:e.amount}),t.actions&&(0,l.jsx)(s.Cell,{style:{width:`0.0625rem`,position:`sticky`,right:0},children:(0,l.jsxs)(s.RowActions,{children:[(0,l.jsx)(i,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Edit ${e.name}`,children:(0,l.jsx)(p,{})}),(0,l.jsx)(i,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Delete ${e.name}`,children:(0,l.jsx)(m,{})})]})})]},e.id)),t.totals&&(0,l.jsxs)(s.Row,{children:[(0,l.jsx)(s.Cell,{className:`font-bold`,children:`Total`}),(0,l.jsx)(s.Cell,{}),(0,l.jsx)(s.Cell,{}),(0,l.jsx)(s.Cell,{className:`font-bold`,style:{textAlign:`right`},children:`$8,375`})]})]})]}),g={title:`Components/Table`,component:s.Root,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Low-level presentational table primitive: native `<table>` markup themed for\nscrolling, sticky rows, cell padding, dividers, hover, and expandable rows.\nFor sorting/toolbar/pagination, prefer `DataTable`."}}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},embed:{control:`boolean`},enclosed:{control:`boolean`},sticky:{control:`inline-radio`,options:[void 0,`header`,`headerAndFooter`]}},args:{size:`md`,embed:!1},render:e=>h(e)},_={parameters:{a11y:{test:`error`}},play:async({canvasElement:e})=>{let t=d(e);await u(t.getByText(`Alice Williams`)).toBeInTheDocument(),await u(t.getByRole(`columnheader`,{name:`Name`})).toBeInTheDocument()}},v={render:()=>(0,l.jsx)(`div`,{className:`flex flex-col gap-6`,children:[`sm`,`md`,`lg`].map(e=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,l.jsxs)(`span`,{className:`text-xs text-text-default-base-tertiary`,children:[`size="`,e,`"`]}),h({size:e})]},e))})},y={args:{sticky:`header`},decorators:[e=>(0,l.jsx)(`div`,{className:`flex h-55 flex-col`,children:(0,l.jsx)(e,{})})]},b={args:{sticky:`headerAndFooter`},render:e=>h(e,{totals:!0}),decorators:[e=>(0,l.jsx)(`div`,{className:`flex h-55 flex-col`,children:(0,l.jsx)(e,{})})]},x={args:{embed:!0}},S={args:{enclosed:!0}},C={render:e=>h(e,{checkbox:!0})},w={render:e=>h(e,{actions:!0}),play:async({canvasElement:e})=>{let t=d(e);await u(t.getAllByRole(`button`,{name:/Edit /})).toHaveLength(f.length),await u(t.getAllByRole(`button`,{name:/Delete /})).toHaveLength(f.length)}},T={render:e=>(0,l.jsx)(()=>{let[t,n]=(0,c.useState)(f[0].id);return(0,l.jsxs)(s.Root,{...e,children:[(0,l.jsx)(s.Head,{children:(0,l.jsxs)(s.Row,{children:[(0,l.jsx)(s.Header,{children:(0,l.jsx)(`span`,{className:`sr-only`,children:`Expand`})}),(0,l.jsx)(s.Header,{children:`Name`}),(0,l.jsx)(s.Header,{children:`Email`}),(0,l.jsx)(s.Header,{children:`Role`})]})}),(0,l.jsx)(s.Body,{children:f.slice(0,4).map(e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsxs)(s.Row,{children:[(0,l.jsx)(s.Cell,{children:(0,l.jsx)(s.ExpandButton,{isExpanded:t===e.id,toggleExpanded:()=>n(t===e.id?null:e.id),"aria-label":`Toggle ${e.name}`})}),(0,l.jsx)(s.Cell,{className:`font-bold`,children:e.name}),(0,l.jsx)(s.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,l.jsx)(s.Cell,{children:e.role})]}),t===e.id&&(0,l.jsx)(s.ExpandedRow,{children:(0,l.jsx)(s.Cell,{colSpan:4,children:(0,l.jsxs)(`div`,{className:`py-2 text-text-default-base-secondary`,children:[`Extended details for `,e.name,` — `,e.amount,` lifetime value.`]})})})]},e.id))})]})},{})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Default args playground.

@summary Default table`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="flex flex-col gap-1">
                    <span className="text-xs text-text-default-base-tertiary">size=&quot;{size}&quot;</span>
                    {renderTable({
        size
      })}
                </div>)}
        </div>
}`,...v.parameters?.docs?.source},description:{story:`The three row densities. \`size\` sets row min-height: sm 48 / md 64 / lg 88px.

@summary size — sm / md / lg`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'header'
  },
  decorators: [Story => <div className="flex h-55 flex-col">
                <Story />
            </div>]
}`,...y.parameters?.docs?.source},description:{story:`\`sticky="header"\` pins the header while the body scrolls. Needs a bounded-height parent.

@summary sticky="header" with a scrolling body`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'headerAndFooter'
  },
  render: args => renderTable(args, {
    totals: true
  }),
  decorators: [Story => <div className="flex h-55 flex-col">
                <Story />
            </div>]
}`,...b.parameters?.docs?.source},description:{story:`\`sticky="headerAndFooter"\` pins the header and the last body row (totals here).

@summary sticky="headerAndFooter" with a pinned totals row`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    embed: true
  }
}`,...x.parameters?.docs?.source},description:{story:`\`embed\` drops the per-row dividers and tightens the edge gutter to 1rem.

@summary embed — no row dividers, 1rem edge gutter`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    enclosed: true
  }
}`,...S.parameters?.docs?.source},description:{story:`\`enclosed\` wraps the table in a bordered, rounded container — the standalone
"card" look, as opposed to a full-bleed page table.

@summary enclosed — bordered, rounded card container`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => renderTable(args, {
    checkbox: true
  })
}`,...C.parameters?.docs?.source},description:{story:`A leading checkbox column; checkbox cells collapse to zero width.

@summary Selectable rows with a collapsing checkbox column`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Hover-revealed row actions pinned to the trailing edge.

@summary Hover-revealed row actions`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"`Table.ExpandButton` toggles a `Table.ExpandedRow` detail panel under its row.\n\n@summary Expandable rows with a detail panel",...T.parameters?.docs?.description}}},E=[`Default`,`Sizes`,`StickyHeader`,`StickyHeaderAndFooter`,`Embed`,`Enclosed`,`WithCheckbox`,`WithRowActions`,`ExpandableRows`]}))();export{_ as Default,x as Embed,S as Enclosed,T as ExpandableRows,v as Sizes,y as StickyHeader,b as StickyHeaderAndFooter,C as WithCheckbox,w as WithRowActions,E as __namedExportsOrder,g as default};