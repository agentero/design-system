import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CMjc2Ha1.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./button-DrK6R0jt.js";import{t as a}from"./button-FLy_wGt9.js";import{a as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./data-table-DBD5zo6o.js";import{t as p}from"./pagination-CqEAWjHV.js";import{n as m,t as h}from"./dropdown-menu-D7-240C6.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{g=t(n(),1),o(),u(),a(),m(),s(),_=r(),{expect:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x=e=>(0,_.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,_.jsx)(`path`,{fill:`currentColor`,d:`M12 19.27q-.619 0-1.06-.441a1.45 1.45 0 0 1-.44-1.06q0-.618.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06 0 .62-.44 1.06-.441.44-1.06.44m0-5.77q-.619 0-1.06-.44A1.44 1.44 0 0 1 10.5 12q0-.619.44-1.06.442-.44 1.06-.44t1.06.44q.44.442.44 1.06t-.44 1.06q-.441.44-1.06.44m0-5.77q-.619 0-1.06-.44a1.44 1.44 0 0 1-.44-1.06q0-.618.44-1.059.442-.44 1.06-.44t1.06.44q.44.44.44 1.06 0 .618-.44 1.06-.441.44-1.06.44`})}),S=e=>(0,_.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,_.jsx)(`path`,{fill:`currentColor`,d:`M16.627 12.75H5.25a.73.73 0 0 1-.535-.215A.73.73 0 0 1 4.5 12q0-.32.215-.535a.73.73 0 0 1 .535-.215h11.377l-5.17-5.17a.7.7 0 0 1-.22-.521q.003-.3.236-.532A.78.78 0 0 1 12 4.802a.7.7 0 0 1 .527.225l6.34 6.34a.83.83 0 0 1 .256.633.828.828 0 0 1-.256.633l-6.34 6.34a.72.72 0 0 1-.514.213.75.75 0 0 1-.54-.213.74.74 0 0 1-.233-.534q0-.303.233-.535z`})}),C=e=>(0,_.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,...e,children:(0,_.jsx)(`path`,{fill:`currentColor`,d:`M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-1.5 1.5V9.25L12 3.5l7.5 5.75V20.5h-6v-6h-3v6z`})}),w={quoted:`Quoted`,readyToQuote:`Ready to quote`},T=[{leadId:`1`,contact:`Alice Williams`,address:`Austin, TX`,phoneNumber:`(512) 555-0142`,email:`alice@example.com`,insuranceType:`Home`,createdAt:`Jun 2, 2026`,status:`quoted`},{leadId:`2`,contact:`Bob Johnson`,address:`Denver, CO`,phoneNumber:`(303) 555-0188`,email:`bob@example.com`,insuranceType:`Auto`,createdAt:`Jun 5, 2026`,status:`readyToQuote`},{leadId:`3`,contact:`Charlie Brown`,address:`Seattle, WA`,phoneNumber:`(206) 555-0119`,email:`charlie@example.com`,insuranceType:`Home`,createdAt:`Jun 7, 2026`,status:`readyToQuote`},{leadId:`4`,contact:`Diana Prince`,address:`Miami, FL`,phoneNumber:`(305) 555-0167`,email:`diana@example.com`,insuranceType:`Renters`,createdAt:`Jun 9, 2026`,status:`quoted`},{leadId:`5`,contact:`Evan Davis`,address:`Chicago, IL`,phoneNumber:`(312) 555-0153`,email:`evan@example.com`,insuranceType:`Auto`,createdAt:`Jun 11, 2026`,status:`readyToQuote`},{leadId:`6`,contact:`Fiona Clark`,address:`Boston, MA`,phoneNumber:`(617) 555-0124`,email:`fiona@example.com`,insuranceType:`Home`,createdAt:`Jun 13, 2026`,status:`quoted`}],E=l(),D=[E.accessor(`contact`,{header:`Applicant`,enableSorting:!1,meta:{style:{width:`auto`}},cell:({row:e})=>(0,_.jsxs)(`div`,{className:`flex flex-col`,children:[(0,_.jsx)(`span`,{className:`truncate font-bold`,children:e.original.contact}),(0,_.jsx)(`span`,{className:`text-sm text-text-default-base-secondary`,children:e.original.address})]})}),E.accessor(`phoneNumber`,{header:`Contact info`,enableSorting:!1,meta:{style:{width:`15rem`}},cell:({row:e})=>(0,_.jsxs)(`div`,{className:`flex flex-col`,children:[(0,_.jsx)(`span`,{className:`text-sm text-text-default-base-secondary`,children:e.original.phoneNumber}),(0,_.jsx)(`a`,{href:`mailto:${e.original.email}`,className:`text-sm text-text-default-base-secondary underline hover:no-underline`,children:e.original.email})]})}),E.accessor(`insuranceType`,{header:`Insurance type`,enableSorting:!1,meta:{style:{width:`10rem`}},cell:({row:e})=>(0,_.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,_.jsx)(C,{className:`size-5 shrink-0 text-icon-default-base-secondary`}),(0,_.jsx)(`span`,{className:`truncate text-sm font-bold`,children:e.original.insuranceType})]})}),E.accessor(`createdAt`,{header:`Created`,enableSorting:!0,sortDescFirst:!0,meta:{style:{width:`8rem`}}}),E.accessor(`status`,{header:`Status`,enableSorting:!1,meta:{style:{width:`8.75rem`}},cell:({row:e})=>w[e.original.status]}),E.display({id:`actions`,header:()=>(0,_.jsx)(`span`,{className:`sr-only`,children:`Actions`}),meta:{style:{width:`0.0625rem`,position:`sticky`,right:0,textAlign:`right`}},cell:({row:e})=>(0,_.jsxs)(c.RowActions,{children:[(0,_.jsx)(i,{asChild:!0,variant:`ghost`,size:`sm`,iconOnly:!0,"aria-label":`View lead details`,children:(0,_.jsx)(`a`,{href:`/leads/${e.original.leadId}`,children:(0,_.jsx)(S,{})})}),(0,_.jsxs)(h.Root,{children:[(0,_.jsx)(h.Trigger,{asChild:!0,children:(0,_.jsx)(i,{variant:`ghost`,size:`sm`,"data-slot":`button`,"aria-label":`Lead actions`,className:`data-[state=open]:opacity-100`,children:(0,_.jsx)(x,{})})}),(0,_.jsx)(h.Portal,{children:(0,_.jsxs)(h.Content,{align:`end`,children:[(0,_.jsx)(h.Item,{children:`View lead details`}),(0,_.jsx)(h.Item,{children:`Get quotes`})]})})]})]})})],O={title:`Components/DataTable`,component:f.Root,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"DataTable is the data-driven table compound built on TanStack Table. This\nstory shows a representative leads table: an `Applicant` column with a name +\naddress, contact info, insurance type with an icon, a sortable `Created`\ncolumn, a status badge, and hover-revealed row actions (open + a kebab menu).\nThe toolbar (search + filters) and the footer pagination are **separate\ncomponents** composed inside `ToolBar` / `Footer`."}}},decorators:[e=>(0,_.jsx)(`div`,{className:`flex h-112 flex-col`,children:(0,_.jsx)(e,{})})]},k={argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},embed:{control:`boolean`},enclosed:{control:`boolean`},sticky:{control:`inline-radio`,options:[void 0,`header`,`headerAndFooter`]}},args:{size:`md`,embed:!0,enclosed:!1,sticky:`header`},render:e=>(0,_.jsx)(`div`,{className:e.enclosed?`flex min-h-0 flex-1 flex-col p-4`:`contents`,children:(0,_.jsx)(f.Root,{data:T,columns:D,children:(0,_.jsx)(f.Table,{size:e.size,embed:e.embed,enclosed:e.enclosed,sticky:e.sticky})})})},A={render:()=>{let[e,t]=(0,g.useState)([]),[n,r]=(0,g.useState)(1),[a,o]=(0,g.useState)(``),s=(0,g.useMemo)(()=>T.filter(e=>e.contact.toLowerCase().includes(a.toLowerCase())),[a]);return(0,_.jsxs)(f.Root,{data:s,columns:D,state:{sorting:e},onSortingChange:t,getSortedRowModel:d(),enableSortingRemoval:!1,rowHref:e=>`/leads/${e.leadId}`,children:[(0,_.jsxs)(f.ToolBar,{children:[(0,_.jsx)(`input`,{value:a,onChange:e=>o(e.target.value),placeholder:`Search...`,"aria-label":`Search leads`,className:`h-8 w-60 rounded-md border border-border-default-base-primary px-3 text-sm outline-none`}),(0,_.jsx)(i,{variant:`secondary`,size:`sm`,children:`Filters`})]}),(0,_.jsx)(f.Table,{}),(0,_.jsx)(f.Footer,{children:(0,_.jsx)(p,{totalCount:T.length,currentPage:n,pageSize:10,onPageChange:r})})]})},play:async({canvasElement:e})=>{let t=b(e);await v(t.getByRole(`toolbar`)).toBeInTheDocument(),await v(t.getByText(`Alice Williams`)).toBeInTheDocument(),await v(t.getByText(/1 - 6 of 6/)).toBeInTheDocument(),await y.click(t.getByText(`Created`)),await v(t.getByText(`Applicant`)).toBeInTheDocument()}},j={render:()=>(0,_.jsx)(f.Root,{data:[],columns:D,children:(0,_.jsx)(f.Table,{})}),play:async({canvasElement:e})=>{await v(b(e).getByText(`No results.`)).toBeInTheDocument()}},M={render:()=>(0,_.jsx)(f.Root,{data:[],columns:D,isLoading:!0,children:(0,_.jsx)(f.Table,{})}),play:async({canvasElement:e})=>{await v(b(e).queryByText(`No results.`)).not.toBeInTheDocument()}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg']
    },
    embed: {
      control: 'boolean'
    },
    enclosed: {
      control: 'boolean'
    },
    sticky: {
      control: 'inline-radio',
      options: [undefined, 'header', 'headerAndFooter']
    }
  },
  args: {
    size: 'md',
    embed: true,
    enclosed: false,
    sticky: 'header'
  },
  render: (args: ComponentProps<typeof DataTable.Table>) =>
  // \`enclosed\` is a bordered card, so give it breathing room from the canvas
  // edges; \`contents\` keeps the layout untouched when it's off.
  <div className={args.enclosed ? 'flex min-h-0 flex-1 flex-col p-4' : 'contents'}>
            <DataTable.Root data={LEADS} columns={columns}>
                <DataTable.Table size={args.size} embed={args.embed} enclosed={args.enclosed} sticky={args.sticky} />
            </DataTable.Root>
        </div>
}`,...k.parameters?.docs?.source},description:{story:"Playground for `DataTable.Table` display props — toggle `size`, `embed`,\n`enclosed`, and `sticky` from the controls panel.\n\n@summary Display props playground (size / embed / enclosed / sticky)",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const data = useMemo(() => LEADS.filter(l => l.contact.toLowerCase().includes(search.toLowerCase())), [search]);
    return <DataTable.Root data={data} columns={columns} state={{
      sorting
    }} onSortingChange={setSorting} getSortedRowModel={getSortedRowModel()} enableSortingRemoval={false} rowHref={lead => \`/leads/\${lead.leadId}\`}>
                <DataTable.ToolBar>
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." aria-label="Search leads" className="h-8 w-60 rounded-md border border-border-default-base-primary px-3 text-sm outline-none" />
                    <Button variant="secondary" size="sm">
                        Filters
                    </Button>
                </DataTable.ToolBar>

                <DataTable.Table />

                <DataTable.Footer>
                    <Pagination totalCount={LEADS.length} currentPage={page} pageSize={10} onPageChange={setPage} />
                </DataTable.Footer>
            </DataTable.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('toolbar')).toBeInTheDocument();
    await expect(canvas.getByText('Alice Williams')).toBeInTheDocument();
    await expect(canvas.getByText(/1 - 6 of 6/)).toBeInTheDocument();
    await userEvent.click(canvas.getByText('Created'));
    await expect(canvas.getByText('Applicant')).toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source},description:{story:`A leads-table composition: sortable \`Created\` column, a status badge, row
navigation via \`rowHref\`, hover-revealed actions, a search input + filters in
the toolbar, and pagination in the footer.

@summary Representative leads table composition`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <DataTable.Root data={[] as Lead[]} columns={columns}>
            <DataTable.Table />
        </DataTable.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('No results.')).toBeInTheDocument();
  }
}`,...j.parameters?.docs?.source},description:{story:`No rows: the table renders its default empty state instead of body rows.

@summary Empty state when there are no rows`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <DataTable.Root data={[] as Lead[]} columns={columns} isLoading>
            <DataTable.Table />
        </DataTable.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByText('No results.')).not.toBeInTheDocument();
  }
}`,...M.parameters?.docs?.source},description:{story:`Loading: the body is dimmed and the empty state is suppressed while data is
in flight.

@summary Loading state dims the table and hides the empty state`,...M.parameters?.docs?.description}}},N=[`Playground`,`Leads`,`Empty`,`Loading`]}))();export{j as Empty,A as Leads,M as Loading,k as Playground,N as __namedExportsOrder,O as default};