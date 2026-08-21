import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Dn0ebc72.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./button-WXZ2nqeE.js";import{t as a}from"./button-DZFgYK9S.js";import{n as o,t as s}from"./decorators-BBj7YOsL.js";import{n as c,t as l}from"./table-C30DO0MU.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{u=t(n(),1),s(),a(),c(),d=r(),{expect:f,within:p}=__STORYBOOK_MODULE_TEST__,m=[{id:`1`,name:`Alice Williams`,email:`alice@example.com`,role:`Admin`,amount:`$1,200`},{id:`2`,name:`Bob Johnson`,email:`bob@example.com`,role:`User`,amount:`$340`},{id:`3`,name:`Charlie Brown`,email:`charlie@example.com`,role:`User`,amount:`$980`},{id:`4`,name:`Diana Prince`,email:`diana@example.com`,role:`Editor`,amount:`$2,450`},{id:`5`,name:`Evan Davis`,email:`evan@example.com`,role:`User`,amount:`$75`},{id:`6`,name:`Fiona Clark`,email:`fiona@example.com`,role:`Admin`,amount:`$610`},{id:`7`,name:`George Hill`,email:`george@example.com`,role:`User`,amount:`$1,890`},{id:`8`,name:`Hannah Scott`,email:`hannah@example.com`,role:`Editor`,amount:`$430`}],h=e=>(0,d.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,d.jsx)(`path`,{fill:`currentColor`,d:`M5.154 19H6.39l9.26-9.26-1.237-1.236-9.26 9.26zM4.558 20.5a.88.88 0 0 1-.646-.259.88.88 0 0 1-.258-.645v-2.094q0-.18.065-.344a.9.9 0 0 1 .206-.304L15.483 5.156q.222-.202.49-.312a1.5 1.5 0 0 1 .562-.11q.291 0 .555.11.264.11.46.33l1.207 1.221q.22.197.323.461.103.264.103.552 0 .291-.106.556a1.4 1.4 0 0 1-.32.49L7.3 20.229a1.3 1.3 0 0 1-.304.206 1.4 1.4 0 0 1-.344.065z`})}),g=e=>(0,d.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,d.jsx)(`path`,{fill:`currentColor`,d:`M7.308 20.5q-.749 0-1.278-.53a1.74 1.74 0 0 1-.53-1.278V6h-.25a.73.73 0 0 1-.535-.215.73.73 0 0 1-.215-.535q0-.32.215-.535A.73.73 0 0 1 5.25 4.5H9q0-.367.259-.626a.85.85 0 0 1 .626-.259h4.23q.368 0 .626.26A.85.85 0 0 1 15 4.5h3.75q.32 0 .535.215a.73.73 0 0 1 .215.535.73.73 0 0 1-.215.535.73.73 0 0 1-.535.215h-.25v12.692q0 .749-.53 1.278-.53.53-1.278.53zM17 6H7v12.692a.3.3 0 0 0 .087.221.3.3 0 0 0 .22.087h9.385a.3.3 0 0 0 .221-.087.3.3 0 0 0 .087-.22z`})}),_=(e,t={})=>(0,d.jsxs)(l.Root,{...e,children:[(0,d.jsx)(l.Head,{children:(0,d.jsxs)(l.Row,{children:[t.checkbox&&(0,d.jsx)(l.Header,{children:(0,d.jsx)(`input`,{type:`checkbox`,"aria-label":`Select all rows`})}),(0,d.jsx)(l.Header,{children:`Name`}),(0,d.jsx)(l.Header,{children:`Email`}),(0,d.jsx)(l.Header,{children:`Role`}),(0,d.jsx)(l.Header,{className:`text-right`,children:`Amount`}),t.actions&&(0,d.jsx)(l.Header,{children:(0,d.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,d.jsxs)(l.Body,{children:[m.map(e=>(0,d.jsxs)(l.Row,{children:[t.checkbox&&(0,d.jsx)(l.Cell,{children:(0,d.jsx)(`input`,{type:`checkbox`,"aria-label":`Select ${e.name}`})}),(0,d.jsx)(l.Cell,{className:`font-bold`,children:e.name}),(0,d.jsx)(l.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,d.jsx)(l.Cell,{children:e.role}),(0,d.jsx)(l.Cell,{className:`text-right`,children:e.amount}),t.actions&&(0,d.jsx)(l.Cell,{className:`sticky right-0 w-px`,children:(0,d.jsxs)(l.RowActions,{children:[(0,d.jsx)(i,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Edit ${e.name}`,children:(0,d.jsx)(h,{})}),(0,d.jsx)(i,{variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`Delete ${e.name}`,children:(0,d.jsx)(g,{})})]})})]},e.id)),t.totals&&(0,d.jsxs)(l.Row,{children:[(0,d.jsx)(l.Cell,{className:`font-bold`,children:`Total`}),(0,d.jsx)(l.Cell,{}),(0,d.jsx)(l.Cell,{}),(0,d.jsx)(l.Cell,{className:`font-bold text-right`,children:`$8,375`})]})]})]}),v={title:`Components/Table`,component:l.Root,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Low-level presentational table primitive: native `<table>` markup themed for\nscrolling, sticky rows, cell padding, dividers, hover, and expandable rows.\nFor sorting/toolbar/pagination, prefer `DataTable`."}}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},embed:{control:`boolean`},enclosed:{control:`boolean`},sticky:{control:`inline-radio`,options:[void 0,`header`,`headerAndFooter`]}},args:{size:`md`,embed:!1},render:e=>_(e)},y={parameters:{a11y:{test:`error`}},play:async({canvasElement:e})=>{let t=p(e);await f(t.getByText(`Alice Williams`)).toBeInTheDocument(),await f(t.getByRole(`columnheader`,{name:`Name`})).toBeInTheDocument()}},b={render:()=>(0,d.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`sm`,`md`,`lg`].map(e=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,d.jsxs)(`span`,{className:`text-xs text-text-default-base-tertiary`,children:[`size="`,e,`"`]}),_({size:e})]},e))})},x={args:{sticky:`header`},decorators:[o(`flex h-55 flex-col`)],play:async({canvasElement:e})=>{let t=p(e).getByRole(`columnheader`,{name:`Name`});e.querySelector(`[data-slot=table-scroll]`)?.scrollTo({top:120}),await f(t).toHaveStyle({borderBottomWidth:`0px`}),await f(getComputedStyle(t).boxShadow).not.toBe(`none`)}},S={args:{sticky:`headerAndFooter`},render:e=>_(e,{totals:!0}),decorators:[o(`flex h-55 flex-col`)]},C={args:{embed:!0}},w={args:{enclosed:!0}},T={render:e=>_(e,{checkbox:!0})},E={render:e=>_(e,{actions:!0}),play:async({canvasElement:e})=>{let t=p(e);await f(t.getAllByRole(`button`,{name:/Edit /})).toHaveLength(m.length),await f(t.getAllByRole(`button`,{name:/Delete /})).toHaveLength(m.length)}},D={render:e=>(0,d.jsx)(()=>{let[t,n]=(0,u.useState)(m[0].id);return(0,d.jsxs)(l.Root,{...e,children:[(0,d.jsx)(l.Head,{children:(0,d.jsxs)(l.Row,{children:[(0,d.jsx)(l.Header,{children:(0,d.jsx)(`span`,{className:`sr-only`,children:`Expand`})}),(0,d.jsx)(l.Header,{children:`Name`}),(0,d.jsx)(l.Header,{children:`Email`}),(0,d.jsx)(l.Header,{children:`Role`})]})}),(0,d.jsx)(l.Body,{children:m.slice(0,4).map(e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsxs)(l.Row,{children:[(0,d.jsx)(l.Cell,{children:(0,d.jsx)(l.ExpandButton,{isExpanded:t===e.id,toggleExpanded:()=>n(t===e.id?null:e.id),"aria-label":`Toggle ${e.name}`})}),(0,d.jsx)(l.Cell,{className:`font-bold`,children:e.name}),(0,d.jsx)(l.Cell,{className:`text-text-default-base-secondary`,children:e.email}),(0,d.jsx)(l.Cell,{children:e.role})]}),t===e.id&&(0,d.jsx)(l.ExpandedRow,{children:(0,d.jsx)(l.Cell,{colSpan:4,children:(0,d.jsxs)(`div`,{className:`py-2 text-text-default-base-secondary`,children:[`Extended details for `,e.name,` — `,e.amount,` lifetime value.`]})})})]},e.id))})]})},{})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Default args playground.

@summary Default table`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="flex flex-col gap-1">
                    <span className="text-xs text-text-default-base-tertiary">size=&quot;{size}&quot;</span>
                    {renderTable({
        size
      })}
                </div>)}
        </div>
}`,...b.parameters?.docs?.source},description:{story:`The three row densities. \`size\` sets row min-height: sm 48 / md 64 / lg 88px.

@summary size — sm / md / lg`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'header'
  },
  decorators: [withContainer('flex h-55 flex-col')],
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
}`,...x.parameters?.docs?.source},description:{story:`\`sticky="header"\` pins the header while the body scrolls. Needs a bounded-height parent.

@summary sticky="header" with a scrolling body`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'headerAndFooter'
  },
  render: args => renderTable(args, {
    totals: true
  }),
  decorators: [withContainer('flex h-55 flex-col')]
}`,...S.parameters?.docs?.source},description:{story:`\`sticky="headerAndFooter"\` pins the header and the last body row (totals here).

@summary sticky="headerAndFooter" with a pinned totals row`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    embed: true
  }
}`,...C.parameters?.docs?.source},description:{story:`\`embed\` drops the per-row dividers and tightens the edge gutter to 1rem.

@summary embed — no row dividers, 1rem edge gutter`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    enclosed: true
  }
}`,...w.parameters?.docs?.source},description:{story:`\`enclosed\` wraps the table in a bordered, rounded container — the standalone
"card" look, as opposed to a full-bleed page table.

@summary enclosed — bordered, rounded card container`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => renderTable(args, {
    checkbox: true
  })
}`,...T.parameters?.docs?.source},description:{story:`A leading checkbox column; checkbox cells collapse to zero width.

@summary Selectable rows with a collapsing checkbox column`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Hover-revealed row actions pinned to the trailing edge.

@summary Hover-revealed row actions`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"`Table.ExpandButton` toggles a `Table.ExpandedRow` detail panel under its row.\n\n@summary Expandable rows with a detail panel",...D.parameters?.docs?.description}}},O=[`Default`,`Sizes`,`StickyHeader`,`StickyHeaderAndFooter`,`Embed`,`Enclosed`,`WithCheckbox`,`WithRowActions`,`ExpandableRows`]}))();export{y as Default,C as Embed,w as Enclosed,D as ExpandableRows,b as Sizes,x as StickyHeader,S as StickyHeaderAndFooter,T as WithCheckbox,E as WithRowActions,O as __namedExportsOrder,v as default};