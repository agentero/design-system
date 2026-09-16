import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-CJtQUq95.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{t as o}from"./button-DrJ6l9tm.js";import{t as s}from"./button-oiY0HWOM.js";import{a as c,n as l,o as u,r as d,t as f}from"./command-CCS23kOj.js";import{a as p,i as m,o as h,r as g,s as _,t as v}from"./dist-B-4aaBPN2.js";import{n as y,t as b}from"./input-g27hKh11.js";var x,S,C,w,T,E,D,O,k=e((()=>{_(),a(),x=r(),S=e=>(0,x.jsx)(p,{"data-slot":`combobox-root`,...e}),S.displayName=`Combobox.Root`,C=e=>(0,x.jsx)(h,{"data-slot":`combobox-trigger`,...e}),C.displayName=`Combobox.Trigger`,w=e=>(0,x.jsx)(v,{"data-slot":`combobox-anchor`,...e}),w.displayName=`Combobox.Anchor`,T=m,E=i({base:[`z-(--z-index-flyover) w-75 will-change-[transform,opacity]`,`origin-(--radix-popover-content-transform-origin)`,`data-[state=open]:animate-combobox-in`,`data-[state=closed]:animate-combobox-out`,`motion-reduce:animate-none!`]}),D=e=>e.preventDefault(),O=({className:e,children:t,align:n=`start`,sideOffset:r=8,collisionPadding:i=8,role:a=`dialog`,label:o,container:s,portalled:c=!0,forceMount:l,onOpenAutoFocus:u,onCloseAutoFocus:d,...f})=>{let p=a===`presentation`?D:void 0,h=(0,x.jsx)(g,{"data-slot":`combobox-content`,align:n,sideOffset:r,collisionPadding:i,role:a,"aria-label":o,forceMount:l,onOpenAutoFocus:u??p,onCloseAutoFocus:d??p,className:E({className:e}),...f,children:(0,x.jsx)(`div`,{"data-slot":`combobox-content-inner`,className:`[transform-origin:inherit]`,children:t})});return c?(0,x.jsx)(m,{container:s,forceMount:l,children:h}):h},O.displayName=`Combobox.Content`;try{S.displayName=`Combobox.Root`,S.__docgenInfo={description:"Root of a combobox: a filterable list in a surface anchored to a trigger,\nbuilt on Radix Popover. Compose `Root` with `Trigger` / `Content`, plus\n`Anchor` when the surface should align to something other than the trigger.\n\n`Content` is deliberately **chrome-less** — no border, background or shadow.\nIt only positions and animates, because the `Command` that goes inside\ncarries the panel chrome itself. Nesting `Command` in a `Popover.Content`\ninstead paints two borders. Use `Popover` for overlays that need their own\nchrome, and `Combobox` whenever the content is a `Command`.",displayName:`Combobox.Root`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{},tags:{summary:`Root provider for a trigger-anchored filterable list`,see:`{@link https://www.radix-ui.com/primitives/docs/components/popover Radix UI Popover}`,example:`\`\`\`tsx
import { Combobox } from '@agentero/design-system/combobox';
import { Command } from '@agentero/design-system/command';

<Combobox.Root>
  <Combobox.Trigger asChild>
    <Button variant="secondary">{selected ?? 'Select a state'}</Button>
  </Combobox.Trigger>
  <Combobox.Content label="Select a state">
    <Command.Root label="Search states">
      <Command.Input placeholder="Search..." />
      <Command.List>
        {options.map(option => (
          <Command.Item key={option} onSelect={select}>
            {option}
          </Command.Item>
        ))}
      </Command.List>
      <Command.Empty>No options found</Command.Empty>
    </Command.Root>
  </Combobox.Content>
</Combobox.Root>
\`\`\``}}}catch{}try{C.displayName=`Combobox.Trigger`,C.__docgenInfo={description:``,displayName:`Combobox.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Button that opens the combobox dialog`}}}catch{}try{w.displayName=`Combobox.Anchor`,w.__docgenInfo={description:"Positions `Content` against something other than the trigger — wrap the\nsearch input with it when the trigger is a button elsewhere in the row.",displayName:`Combobox.Anchor`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Positioning anchor for the combobox surface`}}}catch{}try{O.displayName=`Combobox.Content`,O.__docgenInfo={description:'Floating surface with the legacy 100ms fade and scale (0.95 to 1).\nSelf-portals to the body; use `container` to change the destination, or\n`portalled={false}` when already wrapped in `Combobox.Portal`.\n\nDefaults to 300px wide. Pass `className="w-(--radix-popover-trigger-width)"`\nto match the trigger. `sideOffset` defaults to 8 like every other\ntrigger-anchored DS surface; Marketplace wrappers pass 4 for legacy spacing.\n\nA button trigger opens a named dialog: provide `label`, `aria-label` or\n`aria-labelledby`. When an external input owns the combobox semantics set\n`role="presentation"` and anchor with `Anchor`, not `Trigger` — a trigger\nwould still announce `aria-haspopup="dialog"` for a presentational surface.\nThat mode also keeps focus in the input on open and close, as shown in the\nanchored search story.\n\nThe inner `combobox-content-inner` slot is retained for legacy selectors.',displayName:`Combobox.Content`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},role:{defaultValue:{value:`dialog`},declarations:[{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`}],description:`Named dialog for a button trigger. This is the default.
Unnamed surface when an external input owns the combobox semantics.`,name:`role`,required:!1,tags:{},type:{name:`enum`,raw:`"dialog" | "presentation"`,value:[{value:`"dialog"`},{value:`"presentation"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`}],description:`Accessible name of the dialog.`,name:`label`,required:!1,tags:{},type:{name:`string`}},container:{defaultValue:null,declarations:[{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`}],description:`Portal destination. Defaults to document.body.`,name:`container`,required:!1,tags:{},type:{name:`Element | DocumentFragment | null`}},portalled:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`}],description:"Set false inside an explicit `Combobox.Portal`, which then owns the destination.",name:`portalled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Unpainted floating surface holding a filterable list`,dataAttribute:`{string} data-slot - Always set to "combobox-content"`}}}catch{}})),A,j=e((()=>{k(),A={Root:S,Trigger:C,Anchor:w,Portal:T,Content:O}})),M=e((()=>{y()})),N,P,F,I,L,R,z,B,V,H,U,W,G=e((()=>{N=t(n(),1),u(),j(),s(),l(),M(),P=r(),F={title:`Components/Combobox`,component:A.Root,tags:[`autodocs`],parameters:{docs:{description:{component:"Combobox is a `Command` in a surface anchored to a trigger. The surface\nitself is chrome-less — it positions and animates, nothing more — because\n`Command.Root` already carries the border, radius, shadow and background.\nReach for `Popover` when the content has no chrome of its own."}}}},I=[`Condo`,`Dwelling Fire`,`Flood`,`Homeowners`,`Landlord`],L={render:()=>{let[e,t]=(0,N.useState)(!1),[n,r]=(0,N.useState)();return(0,P.jsxs)(A.Root,{open:e,onOpenChange:t,children:[(0,P.jsx)(A.Trigger,{asChild:!0,children:(0,P.jsx)(o,{variant:`secondary`,children:n??`Select a line of business`})}),(0,P.jsx)(A.Content,{label:`Select a line of business`,children:(0,P.jsxs)(f.Root,{label:`Search lines of business`,children:[(0,P.jsx)(f.Input,{placeholder:`Search...`}),(0,P.jsx)(f.List,{children:I.map(e=>(0,P.jsx)(f.Item,{onSelect:()=>{r(e),t(!1)},children:e},e))}),(0,P.jsx)(f.Empty,{children:`No options found`})]})})]})}},R={render:()=>(0,P.jsxs)(A.Root,{defaultOpen:!0,children:[(0,P.jsx)(A.Trigger,{asChild:!0,children:(0,P.jsx)(o,{variant:`secondary`,children:`Open`})}),(0,P.jsx)(A.Content,{label:`Select a line of business`,children:(0,P.jsxs)(f.Root,{label:`Search lines of business`,children:[(0,P.jsx)(f.Input,{placeholder:`Search...`}),(0,P.jsx)(f.List,{children:I.map(e=>(0,P.jsx)(f.Item,{children:e},e))}),(0,P.jsx)(f.Empty,{children:`No options found`})]})})]})},z={render:()=>(0,P.jsx)(`div`,{className:`w-125`,children:(0,P.jsxs)(A.Root,{defaultOpen:!0,children:[(0,P.jsx)(A.Trigger,{asChild:!0,children:(0,P.jsx)(o,{variant:`secondary`,align:`justify`,className:`w-full`,children:`Select a line of business`})}),(0,P.jsx)(A.Content,{label:`Select a line of business`,className:`w-(--radix-popover-trigger-width)`,children:(0,P.jsxs)(f.Root,{label:`Search lines of business`,children:[(0,P.jsx)(f.Input,{placeholder:`Search...`}),(0,P.jsx)(f.List,{children:I.map(e=>(0,P.jsx)(f.Item,{children:e},e))}),(0,P.jsx)(f.Empty,{children:`No options found`})]})})]})})},B={render:()=>{let[e,t]=(0,N.useState)(!1),[n,r]=(0,N.useState)(``),[i,a]=(0,N.useState)(),o=(0,N.useCallback)(e=>a(e?.id),[]),s=(0,N.useRef)(null);return(0,P.jsx)(A.Root,{open:e,onOpenChange:t,children:(0,P.jsxs)(f.Root,{label:`Search lines of business`,className:`overflow-visible border-0 bg-transparent shadow-none`,children:[(0,P.jsx)(A.Anchor,{asChild:!0,children:(0,P.jsx)(c.Input,{asChild:!0,value:n,onValueChange:e=>{r(e),t(!0)},children:(0,P.jsx)(b,{ref:s,size:`sm`,placeholder:`Search...`,"aria-expanded":e,"aria-controls":e?i:void 0,onFocus:()=>t(!0),onClick:()=>t(!0),onKeyDown:n=>{(n.key===`ArrowDown`||n.key===`ArrowUp`)&&t(!0),n.key===`Enter`&&!e&&n.preventDefault()}})})}),(0,P.jsx)(A.Content,{role:`presentation`,className:`w-(--radix-popover-trigger-width)`,onInteractOutside:e=>{s.current?.contains(e.target)&&e.preventDefault()},children:(0,P.jsxs)(`div`,{className:d().root(),children:[(0,P.jsx)(f.List,{ref:o,label:`Lines of business`,children:I.map(e=>(0,P.jsx)(f.Item,{value:e,onSelect:()=>{r(e),t(!1)},children:e},e))}),(0,P.jsx)(f.Empty,{children:`No options found`})]})})]})})}},V={render:()=>{let[e,t]=(0,N.useState)(null);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`div`,{ref:t,"data-testid":`combobox-container`}),e&&(0,P.jsxs)(A.Root,{children:[(0,P.jsx)(A.Trigger,{asChild:!0,children:(0,P.jsx)(o,{children:`Open options`})}),(0,P.jsx)(A.Content,{container:e,"aria-label":`Custom options`,children:(0,P.jsxs)(f.Root,{label:`Search custom options`,children:[(0,P.jsx)(f.Input,{}),(0,P.jsx)(f.List,{children:(0,P.jsx)(f.Item,{children:`Homeowners`})})]})})]})]})}},H={render:()=>{let[e,t]=(0,N.useState)(null);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`h2`,{id:`external-options-label`,children:`External options`}),(0,P.jsx)(`div`,{ref:t,"data-testid":`external-combobox-container`}),e&&(0,P.jsxs)(A.Root,{defaultOpen:!0,children:[(0,P.jsx)(A.Trigger,{asChild:!0,children:(0,P.jsx)(o,{children:`Open options`})}),(0,P.jsx)(A.Portal,{container:e,children:(0,P.jsx)(A.Content,{portalled:!1,"aria-labelledby":`external-options-label`,children:(0,P.jsxs)(f.Root,{label:`Search external options`,children:[(0,P.jsx)(f.Input,{}),(0,P.jsx)(f.List,{children:(0,P.jsx)(f.Item,{children:`Homeowners`})})]})})})]})]})}},U={render:()=>(0,P.jsxs)(A.Root,{defaultOpen:!0,children:[(0,P.jsx)(A.Trigger,{asChild:!0,children:(0,P.jsx)(o,{children:`Choose a state`})}),(0,P.jsx)(A.Content,{label:`Choose a state`,sideOffset:4,side:`bottom`,avoidCollisions:!1,children:(0,P.jsxs)(f.Root,{label:`Search states`,children:[(0,P.jsx)(f.Input,{}),(0,P.jsx)(f.List,{children:(0,P.jsx)(f.Item,{children:`California`})})]})})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>();
    return <Combobox.Root open={open} onOpenChange={setOpen}>
                <Combobox.Trigger asChild>
                    <Button variant="secondary">{value ?? 'Select a line of business'}</Button>
                </Combobox.Trigger>
                <Combobox.Content label="Select a line of business">
                    <Command.Root label="Search lines of business">
                        <Command.Input placeholder="Search..." />
                        <Command.List>
                            {LINES_OF_BUSINESS.map(option => <Command.Item key={option} onSelect={() => {
              setValue(option);
              setOpen(false);
            }}>
                                    {option}
                                </Command.Item>)}
                        </Command.List>
                        <Command.Empty>No options found</Command.Empty>
                    </Command.Root>
                </Combobox.Content>
            </Combobox.Root>;
  }
}`,...L.parameters?.docs?.source},description:{story:`@summary Button trigger over a filterable list`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root defaultOpen>
            <Combobox.Trigger asChild>
                <Button variant="secondary">Open</Button>
            </Combobox.Trigger>
            <Combobox.Content label="Select a line of business">
                <Command.Root label="Search lines of business">
                    <Command.Input placeholder="Search..." />
                    <Command.List>
                        {LINES_OF_BUSINESS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
                    </Command.List>
                    <Command.Empty>No options found</Command.Empty>
                </Command.Root>
            </Combobox.Content>
        </Combobox.Root>
}`,...R.parameters?.docs?.source},description:{story:`The surface paints nothing of its own. Two borders on a combobox mean the
content was dropped in a \`Popover.Content\` instead of here.

@summary Panel chrome belongs to Command, not the floating surface`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-125">
            <Combobox.Root defaultOpen>
                <Combobox.Trigger asChild>
                    <Button variant="secondary" align="justify" className="w-full">
                        Select a line of business
                    </Button>
                </Combobox.Trigger>
                <Combobox.Content label="Select a line of business" className="w-(--radix-popover-trigger-width)">
                    <Command.Root label="Search lines of business">
                        <Command.Input placeholder="Search..." />
                        <Command.List>
                            {LINES_OF_BUSINESS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
                        </Command.List>
                        <Command.Empty>No options found</Command.Empty>
                    </Command.Root>
                </Combobox.Content>
            </Combobox.Root>
        </div>
}`,...z.parameters?.docs?.source},description:{story:`The surface is 300px wide by default. When the trigger is a full-width form
control, match it with \`w-(--radix-popover-trigger-width)\` instead.

@summary Match the floating surface to its trigger width`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [listId, setListId] = useState<string>();
    const listRef = useCallback((node: HTMLDivElement | null) => setListId(node?.id), []);
    const inputRef = useRef<HTMLInputElement>(null);
    return <Combobox.Root open={open} onOpenChange={setOpen}>
                <Command.Root label="Search lines of business" className="overflow-visible border-0 bg-transparent shadow-none">
                    <Combobox.Anchor asChild>
                        <CommandPrimitive.Input asChild value={search} onValueChange={value => {
            setSearch(value);
            setOpen(true);
          }}>
                            <Input ref={inputRef} size="sm" placeholder="Search..." aria-expanded={open} aria-controls={open ? listId : undefined} onFocus={() => setOpen(true)} onClick={() => setOpen(true)} onKeyDown={event => {
              if (event.key === 'ArrowDown' || event.key === 'ArrowUp') setOpen(true);
              if (event.key === 'Enter' && !open) event.preventDefault();
            }} />
                        </CommandPrimitive.Input>
                    </Combobox.Anchor>
                    <Combobox.Content role="presentation" className="w-(--radix-popover-trigger-width)" onInteractOutside={event => {
          if (inputRef.current?.contains(event.target as Node)) event.preventDefault();
        }}>
                        <div className={commandRecipe().root()}>
                            <Command.List ref={listRef} label="Lines of business">
                                {LINES_OF_BUSINESS.map(option => <Command.Item key={option} value={option} onSelect={() => {
                setSearch(option);
                setOpen(false);
              }}>
                                        {option}
                                    </Command.Item>)}
                            </Command.List>
                            <Command.Empty>No options found</Command.Empty>
                        </div>
                    </Combobox.Content>
                </Command.Root>
            </Combobox.Root>;
  }
}`,...B.parameters?.docs?.source},description:{story:`Keep the input and list under one Command.Root so arrow keys and Enter reach
the same selection state across the portal. The input owns combobox semantics,
so the surface is presentational and leaves focus in the input by default —
only outside interactions on the input itself still need handling.
cmdk's unstyled Input composes with the DS Input through asChild, keeping
filtering and active-option announcements inside cmdk.

@summary Search input anchoring a keyboard-accessible list`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    return <>
                <div ref={setContainer} data-testid="combobox-container" />
                {container && <Combobox.Root>
                        <Combobox.Trigger asChild>
                            <Button>Open options</Button>
                        </Combobox.Trigger>
                        <Combobox.Content container={container} aria-label="Custom options">
                            <Command.Root label="Search custom options">
                                <Command.Input />
                                <Command.List>
                                    <Command.Item>Homeowners</Command.Item>
                                </Command.List>
                            </Command.Root>
                        </Combobox.Content>
                    </Combobox.Root>}
            </>;
  }
}`,...V.parameters?.docs?.source},description:{story:`@summary Content portalled into a custom container`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    return <>
                <h2 id="external-options-label">External options</h2>
                <div ref={setContainer} data-testid="external-combobox-container" />
                {container && <Combobox.Root defaultOpen>
                        <Combobox.Trigger asChild>
                            <Button>Open options</Button>
                        </Combobox.Trigger>
                        <Combobox.Portal container={container}>
                            <Combobox.Content portalled={false} aria-labelledby="external-options-label">
                                <Command.Root label="Search external options">
                                    <Command.Input />
                                    <Command.List>
                                        <Command.Item>Homeowners</Command.Item>
                                    </Command.List>
                                </Command.Root>
                            </Combobox.Content>
                        </Combobox.Portal>
                    </Combobox.Root>}
            </>;
  }
}`,...H.parameters?.docs?.source},description:{story:`@summary External portal with Content's automatic portal disabled`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root defaultOpen>
            <Combobox.Trigger asChild>
                <Button>Choose a state</Button>
            </Combobox.Trigger>
            <Combobox.Content label="Choose a state" sideOffset={4} side="bottom" avoidCollisions={false}>
                <Command.Root label="Search states">
                    <Command.Input />
                    <Command.List>
                        <Command.Item>California</Command.Item>
                    </Command.List>
                </Command.Root>
            </Combobox.Content>
        </Combobox.Root>
}`,...U.parameters?.docs?.source},description:{story:`The surface sits 8px from its trigger like every other DS overlay. Marketplace's
legacy spacing is 4px — pass \`sideOffset\` in the wrapper, not in every call site.

@summary Preserve Marketplace's legacy spacing with sideOffset`,...U.parameters?.docs?.description}}},W=[`Default`,`ChromeLessSurface`,`MatchingTriggerWidth`,`AnchoredToTheSearchField`,`CustomContainer`,`ExternalPortal`,`MarketplaceSpacing`]}));G();export{B as AnchoredToTheSearchField,R as ChromeLessSurface,V as CustomContainer,L as Default,H as ExternalPortal,U as MarketplaceSpacing,z as MatchingTriggerWidth,W as __namedExportsOrder,F as default,A as n,j as r,G as t};