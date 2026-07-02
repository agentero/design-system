import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{J as n,W as r,f as i,g as a,i as o,ot as s,t as c}from"./lucide-react-DKBrLrt-.js";import{t as l}from"./button-TMK171MJ.js";import{t as u}from"./button-BG3_Ritg.js";import{n as d,t as f}from"./dropdown-menu-3-rM-dkM.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{c(),u(),d(),p=t(),m={title:`Components/DropdownMenu`,component:f.Root,tags:[`autodocs`],parameters:{docs:{description:{component:"DropdownMenu is a compound overlay for secondary actions, bulk operations,\nor navigation shortcuts triggered off a button or icon. Compose it from\n`Root` / `Trigger` / `Portal` / `Content` and fill the menu with `Item`,\n`Separator`, `Label`, and — for nested flows — `Sub` / `SubTrigger` /\n`SubContent`. Built on Radix UI's DropdownMenu primitive, so keyboard\nnavigation, focus trapping, typeahead, and collision detection come for\nfree."}}}},h={render:()=>(0,p.jsxs)(f.Root,{children:[(0,p.jsx)(f.Trigger,{asChild:!0,children:(0,p.jsxs)(l,{size:`md`,variant:`secondary`,children:[`Click me`,(0,p.jsx)(s,{})]})}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.Content,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Edit clicked`),children:`Edit`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Duplicate clicked`),children:`Duplicate`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Archive clicked`),children:`Archive`}),(0,p.jsx)(f.Separator,{}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Delete clicked`),children:(0,p.jsx)(`span`,{className:`text-red-500`,children:`Delete`})})]})})]})},g={render:()=>(0,p.jsxs)(f.Root,{children:[(0,p.jsx)(f.Trigger,{asChild:!0,children:(0,p.jsxs)(l,{size:`md`,variant:`secondary`,children:[`More Options`,(0,p.jsx)(s,{})]})}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.Content,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Undo`),children:`Undo`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Redo`),children:`Redo`}),(0,p.jsx)(f.Separator,{}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Copy`),children:`Copy`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Cut`),children:`Cut`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Paste`),children:`Paste`}),(0,p.jsx)(f.Separator,{}),(0,p.jsx)(f.Item,{disabled:!0,children:`Print (disabled)`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Export`),children:`Export`})]})})]})},_={render:()=>(0,p.jsxs)(f.Root,{children:[(0,p.jsx)(f.Trigger,{asChild:!0,children:(0,p.jsxs)(l,{size:`md`,variant:`secondary`,children:[`Actions`,(0,p.jsx)(s,{})]})}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.Content,{children:[(0,p.jsxs)(f.Item,{onSelect:()=>console.log(`Copy`),children:[(0,p.jsx)(n,{}),`Copy`]}),(0,p.jsx)(f.Separator,{}),(0,p.jsxs)(f.Item,{onSelect:()=>console.log(`Delete`),className:`data-[highlighted]:bg-red-100`,children:[(0,p.jsx)(i,{className:`text-red-500`}),(0,p.jsx)(`span`,{className:`text-red-500`,children:`Delete`})]})]})})]})},v={render:()=>(0,p.jsxs)(f.Root,{children:[(0,p.jsx)(f.Trigger,{asChild:!0,children:(0,p.jsxs)(l,{size:`md`,variant:`secondary`,children:[`Account Menu`,(0,p.jsx)(s,{})]})}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.Content,{children:[(0,p.jsx)(f.Label,{children:`Profile`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`View Profile`),children:`View Profile`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Edit Profile`),children:`Edit Profile`}),(0,p.jsx)(f.Separator,{}),(0,p.jsx)(f.Label,{children:`Settings`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Preferences`),children:`Preferences`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Privacy`),children:`Privacy`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Notifications`),children:`Notifications`}),(0,p.jsx)(f.Separator,{}),(0,p.jsx)(f.Label,{children:`Account`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Billing`),children:`Billing`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Logout`),className:`data-[highlighted]:bg-red-100`,children:(0,p.jsx)(`span`,{className:`text-red-500`,children:`Logout`})})]})})]})},y={render:()=>(0,p.jsxs)(f.Root,{children:[(0,p.jsx)(f.Trigger,{asChild:!0,children:(0,p.jsxs)(l,{size:`md`,variant:`secondary`,children:[`File Options`,(0,p.jsx)(s,{})]})}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.Content,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`New File`),children:`New File`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Open`),children:`Open`}),(0,p.jsx)(f.Separator,{}),(0,p.jsxs)(f.Sub,{children:[(0,p.jsxs)(f.SubTrigger,{children:[(0,p.jsx)(a,{}),`Share`]}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.SubContent,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Email`),children:`Email`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Slack`),children:`Slack`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Copy Link`),children:`Copy Link`})]})})]}),(0,p.jsxs)(f.Sub,{children:[(0,p.jsxs)(f.SubTrigger,{children:[(0,p.jsx)(r,{}),`Move to`]}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.SubContent,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Archive`),children:`Archive`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Projects`),children:`Projects`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Drafts`),children:`Drafts`})]})})]}),(0,p.jsx)(f.Separator,{}),(0,p.jsxs)(f.Item,{onSelect:()=>console.log(`Delete`),className:`data-[highlighted]:bg-red-100`,children:[(0,p.jsx)(i,{className:`text-red-500`}),(0,p.jsx)(`span`,{className:`text-red-500`,children:`Delete`})]})]})})]})},b={render:()=>(0,p.jsxs)(f.Root,{children:[(0,p.jsx)(f.Trigger,{asChild:!0,children:(0,p.jsxs)(l,{size:`md`,variant:`secondary`,children:[`Organization Menu`,(0,p.jsx)(s,{})]})}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.Content,{children:[(0,p.jsx)(f.Label,{children:`Organization`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Dashboard`),children:`Dashboard`}),(0,p.jsxs)(f.Sub,{children:[(0,p.jsxs)(f.SubTrigger,{children:[(0,p.jsx)(o,{}),`Teams`]}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.SubContent,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`View All Teams`),children:`View All Teams`}),(0,p.jsx)(f.Separator,{}),(0,p.jsxs)(f.Sub,{children:[(0,p.jsx)(f.SubTrigger,{children:`Engineering`}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.SubContent,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Frontend`),children:`Frontend`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Backend`),children:`Backend`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`DevOps`),children:`DevOps`})]})})]}),(0,p.jsxs)(f.Sub,{children:[(0,p.jsx)(f.SubTrigger,{children:`Design`}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.SubContent,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Product Design`),children:`Product Design`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Brand`),children:`Brand`})]})})]}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Marketing`),children:`Marketing`})]})})]}),(0,p.jsx)(f.Separator,{}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Settings`),children:`Settings`})]})})]})},x={render:()=>(0,p.jsxs)(f.Root,{children:[(0,p.jsx)(f.Trigger,{asChild:!0,children:(0,p.jsxs)(l,{size:`md`,variant:`secondary`,children:[`Document Actions`,(0,p.jsx)(s,{})]})}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.Content,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`View`),children:`View`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Edit`),children:`Edit`}),(0,p.jsx)(f.Separator,{}),(0,p.jsxs)(f.Sub,{children:[(0,p.jsxs)(f.SubTrigger,{children:[(0,p.jsx)(n,{}),`Export as`]}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.SubContent,{children:[(0,p.jsx)(f.Item,{onSelect:()=>console.log(`PDF`),children:`PDF`}),(0,p.jsx)(f.Item,{onSelect:()=>console.log(`Word`),children:`Word Document`}),(0,p.jsx)(f.Item,{disabled:!0,children:`Excel (Premium only)`}),(0,p.jsx)(f.Item,{disabled:!0,children:`PowerPoint (Premium only)`})]})})]}),(0,p.jsxs)(f.Sub,{children:[(0,p.jsxs)(f.SubTrigger,{disabled:!0,children:[(0,p.jsx)(a,{}),`Share (Sign in required)`]}),(0,p.jsx)(f.Portal,{children:(0,p.jsxs)(f.SubContent,{children:[(0,p.jsx)(f.Item,{children:`Email`}),(0,p.jsx)(f.Item,{children:`Link`})]})})]})]})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button size="md" variant="secondary">
                    Click me
                    <ChevronDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onSelect={() => console.log('Edit clicked')}>Edit</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Duplicate clicked')}>
                        Duplicate
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Archive clicked')}>
                        Archive
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item onSelect={() => console.log('Delete clicked')}>
                        <span className="text-red-500">Delete</span>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
}`,...h.parameters?.docs?.source},description:{story:`A minimal DropdownMenu with four \`Item\`s — edit/duplicate/archive plus a
separator before a destructive delete. Use this as the starting point for
most overflow menus.

@summary Basic menu with item rows and a separated destructive action`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button size="md" variant="secondary">
                    More Options
                    <ChevronDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onSelect={() => console.log('Undo')}>Undo</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Redo')}>Redo</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item onSelect={() => console.log('Copy')}>Copy</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Cut')}>Cut</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Paste')}>Paste</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item disabled>Print (disabled)</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Export')}>Export</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
}`,...g.parameters?.docs?.source},description:{story:'Multiple clusters of `Item`s split by `Separator` rules — mirrors an\n"edit history / clipboard / export" overflow menu. Demonstrates the\n`disabled` state on a menu row.\n\n@summary Menu with multiple `Separator`-split groups and a disabled item',...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button size="md" variant="secondary">
                    Actions
                    <ChevronDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onSelect={() => console.log('Copy')}>
                        <CopyIcon />
                        Copy
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item onSelect={() => console.log('Delete')} className="data-[highlighted]:bg-red-100">
                        <Trash2Icon className="text-red-500" />
                        <span className="text-red-500">Delete</span>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
}`,..._.parameters?.docs?.source},description:{story:`Menu items with leading icons and a destructive row using the
\`data-[highlighted]:bg-red-100\` + \`text-red-500\` escape hatch. Use this
pattern when a row should read as destructive.

@summary Icon-leading items with a destructive delete row`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button size="md" variant="secondary">
                    Account Menu
                    <ChevronDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                    <DropdownMenu.Label>Profile</DropdownMenu.Label>
                    <DropdownMenu.Item onSelect={() => console.log('View Profile')}>
                        View Profile
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Edit Profile')}>
                        Edit Profile
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Label>Settings</DropdownMenu.Label>
                    <DropdownMenu.Item onSelect={() => console.log('Preferences')}>
                        Preferences
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Privacy')}>Privacy</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Notifications')}>
                        Notifications
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Label>Account</DropdownMenu.Label>
                    <DropdownMenu.Item onSelect={() => console.log('Billing')}>Billing</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Logout')} className="data-[highlighted]:bg-red-100">
                        <span className="text-red-500">Logout</span>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
}`,...v.parameters?.docs?.source},description:{story:"`Label`-segmented Profile / Settings / Account sections with a\ndestructive Logout row. Use `Label` to name groups that would otherwise\nbe ambiguous from the item text alone.\n\n@summary Menu with `Label`-titled sections and a destructive logout row",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button size="md" variant="secondary">
                    File Options
                    <ChevronDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onSelect={() => console.log('New File')}>New File</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Open')}>Open</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>
                            <Share2Icon />
                            Share
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item onSelect={() => console.log('Email')}>Email</DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => console.log('Slack')}>Slack</DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => console.log('Copy Link')}>
                                    Copy Link
                                </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>
                            <FolderInputIcon />
                            Move to
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item onSelect={() => console.log('Archive')}>
                                    Archive
                                </DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => console.log('Projects')}>
                                    Projects
                                </DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => console.log('Drafts')}>Drafts</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item onSelect={() => console.log('Delete')} className="data-[highlighted]:bg-red-100">
                        <Trash2Icon className="text-red-500" />
                        <span className="text-red-500">Delete</span>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
}`,...y.parameters?.docs?.source},description:{story:"One level of nesting: Share and Move-to submenus wired via `Sub` /\n`SubTrigger` / `SubContent`. Each submenu is portaled independently so\nit escapes the parent's stacking context.\n\n@summary Single-level submenus for Share and Move-to flows",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button size="md" variant="secondary">
                    Organization Menu
                    <ChevronDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                    <DropdownMenu.Label>Organization</DropdownMenu.Label>
                    <DropdownMenu.Item onSelect={() => console.log('Dashboard')}>Dashboard</DropdownMenu.Item>
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>
                            <UsersIcon />
                            Teams
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item onSelect={() => console.log('View All Teams')}>
                                    View All Teams
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Engineering</DropdownMenu.SubTrigger>
                                    <DropdownMenu.Portal>
                                        <DropdownMenu.SubContent>
                                            <DropdownMenu.Item onSelect={() => console.log('Frontend')}>
                                                Frontend
                                            </DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => console.log('Backend')}>
                                                Backend
                                            </DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => console.log('DevOps')}>
                                                DevOps
                                            </DropdownMenu.Item>
                                        </DropdownMenu.SubContent>
                                    </DropdownMenu.Portal>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Design</DropdownMenu.SubTrigger>
                                    <DropdownMenu.Portal>
                                        <DropdownMenu.SubContent>
                                            <DropdownMenu.Item onSelect={() => console.log('Product Design')}>
                                                Product Design
                                            </DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => console.log('Brand')}>
                                                Brand
                                            </DropdownMenu.Item>
                                        </DropdownMenu.SubContent>
                                    </DropdownMenu.Portal>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Item onSelect={() => console.log('Marketing')}>
                                    Marketing
                                </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item onSelect={() => console.log('Settings')}>Settings</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
}`,...b.parameters?.docs?.source},description:{story:`Two levels of nesting: Organization → Teams → (Engineering, Design).
Deeper nesting is rarely a good UX — prefer splitting into separate
screens once the tree grows past two levels.

@summary Two-level nested submenus inside a parent menu`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button size="md" variant="secondary">
                    Document Actions
                    <ChevronDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onSelect={() => console.log('View')}>View</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => console.log('Edit')}>Edit</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>
                            <CopyIcon />
                            Export as
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item onSelect={() => console.log('PDF')}>PDF</DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => console.log('Word')}>
                                    Word Document
                                </DropdownMenu.Item>
                                <DropdownMenu.Item disabled>Excel (Premium only)</DropdownMenu.Item>
                                <DropdownMenu.Item disabled>PowerPoint (Premium only)</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger disabled>
                            <Share2Icon />
                            Share (Sign in required)
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item>Email</DropdownMenu.Item>
                                <DropdownMenu.Item>Link</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
}`,...x.parameters?.docs?.source},description:{story:"Submenu that contains `disabled` `Item`s alongside a fully-disabled\n`SubTrigger`. Use `disabled` sparingly — prefer hiding unavailable\nactions outright unless the user needs to see them and understand why.\n\n@summary Submenu with `disabled` items and a disabled `SubTrigger`",...x.parameters?.docs?.description}}},S=[`Default`,`WithGroupsAndDividers`,`WithIcons`,`WithGroupTitles`,`WithSubmenu`,`NestedSubmenus`,`SubmenuWithDisabledItems`]}))();export{h as Default,b as NestedSubmenus,x as SubmenuWithDisabledItems,v as WithGroupTitles,g as WithGroupsAndDividers,_ as WithIcons,y as WithSubmenu,S as __namedExportsOrder,m as default};