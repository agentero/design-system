import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-VsmLEPyg.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{t as o}from"./button-CrGwGRnH.js";import{t as s}from"./button-QqXNofWE.js";import{a as c,n as l,o as u,r as d,t as f}from"./command-Bv_55VUk.js";import{a as p,i as m,o as h,r as g,s as _,t as v}from"./dist-pem-mpPO2.js";import{n as y,t as b}from"./input-g27hKh11.js";var x,S,C,w,T,E,D,O=e((()=>{_(),a(),x=r(),S=e=>(0,x.jsx)(p,{"data-slot":`combobox-root`,...e}),S.displayName=`Combobox.Root`,C=e=>(0,x.jsx)(h,{"data-slot":`combobox-trigger`,...e}),C.displayName=`Combobox.Trigger`,w=e=>(0,x.jsx)(v,{"data-slot":`combobox-anchor`,...e}),w.displayName=`Combobox.Anchor`,T=m,E=i({base:[`z-(--z-index-flyover) w-75 will-change-[transform,opacity]`,`data-[side=bottom]:origin-top data-[side=top]:origin-bottom`,`data-[state=open]:animate-combobox-in`,`data-[state=closed]:animate-combobox-out`,`motion-reduce:animate-none!`]}),D=({className:e,children:t,align:n=`start`,sideOffset:r=4,collisionPadding:i=8,role:a=`dialog`,label:o,container:s,portalled:c=!0,forceMount:l,...u})=>{let d=(0,x.jsx)(g,{"data-slot":`combobox-content`,align:n,sideOffset:r,collisionPadding:i,role:a,"aria-label":o,forceMount:l,className:E({className:e}),...u,children:(0,x.jsx)(`div`,{"data-slot":`combobox-content-inner`,className:`[transform-origin:inherit]`,children:t})});return c?(0,x.jsx)(m,{container:s,forceMount:l,children:d}):d},D.displayName=`Combobox.Content`;try{S.displayName=`Combobox.Root`,S.__docgenInfo={description:"Root of a combobox: a filterable list in a surface anchored to a trigger,\nbuilt on Radix Popover. Compose `Root` with `Trigger` / `Content`, plus\n`Anchor` when the surface should align to something other than the trigger.\n\n`Content` is deliberately **chrome-less** — no border, background or shadow.\nIt only positions and animates, because the `Command` that goes inside\ncarries the panel chrome itself. Nesting `Command` in a `Popover.Content`\ninstead paints two borders. Use `Popover` for overlays that need their own\nchrome, and `Combobox` whenever the content is a `Command`.",displayName:`Combobox.Root`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{},tags:{summary:`Root provider for a trigger-anchored filterable list`,see:`{@link https://www.radix-ui.com/primitives/docs/components/popover Radix UI Popover}`,example:`\`\`\`tsx
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
\`\`\``}}}catch{}try{C.displayName=`Combobox.Trigger`,C.__docgenInfo={description:``,displayName:`Combobox.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Button that opens the combobox dialog`}}}catch{}try{w.displayName=`Combobox.Anchor`,w.__docgenInfo={description:"Positions `Content` against something other than the trigger — wrap the\nsearch input with it when the trigger is a button elsewhere in the row.",displayName:`Combobox.Anchor`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Positioning anchor for the combobox surface`}}}catch{}try{T.displayName=`Portal`,T.__docgenInfo={description:"Optional external portal. Pair it with `Content portalled={false}` so the\ncontent stays inside this portal's container. Otherwise use `Content container`.",displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{},tags:{summary:`External portal for a combobox surface`}}}catch{}try{E.displayName=`comboboxRecipe`,E.__docgenInfo={description:`Positioning and legacy fade/scale animation for the unpainted surface.`,displayName:`comboboxRecipe`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{D.displayName=`Combobox.Content`,D.__docgenInfo={description:'Floating surface with the legacy 100ms fade and scale (0.95 to 1).\nSelf-portals to the body; use `container` to change the destination, or\n`portalled={false}` when already wrapped in `Combobox.Portal`.\n\nDefaults to 300px wide. Pass `className="w-(--radix-popover-trigger-width)"`\nto match the trigger. `sideOffset` defaults to Marketplace\'s 4px; pass 8\nwhen adopting Producerflow\'s legacy spacing.\n\nA button trigger opens a named dialog: provide `label`, `aria-label` or\n`aria-labelledby`. For an external input that owns the combobox semantics,\nexplicitly set `role="presentation"` and keep focus and keyboard handling\nin the input\'s composition, as shown in the anchored search story.\n\nThe inner `combobox-content-inner` slot is retained for legacy selectors.',displayName:`Combobox.Content`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},role:{defaultValue:{value:`dialog`},declarations:[{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`}],description:`Named dialog for a button trigger. This is the default.
Unnamed surface when an external input owns the combobox semantics.`,name:`role`,required:!1,tags:{},type:{name:`enum`,raw:`"dialog" | "presentation"`,value:[{value:`"dialog"`},{value:`"presentation"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`}],description:`Accessible name of the dialog.`,name:`label`,required:!1,tags:{},type:{name:`string`}},container:{defaultValue:null,declarations:[{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`}],description:`Portal destination. Defaults to document.body.`,name:`container`,required:!1,tags:{},type:{name:`Element | DocumentFragment | null`}},portalled:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/combobox/combobox.tsx`,name:`TypeLiteral`}],description:`Set false when using an external Portal or rendering inline. Defaults to true.`,name:`portalled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Unpainted floating surface holding a filterable list`,dataAttribute:`{string} data-slot - Always set to "combobox-content"`}}}catch{}})),k,A=e((()=>{O(),k={Root:S,Trigger:C,Anchor:w,Portal:T,Content:D}})),j=e((()=>{y()})),M,N,P,F,I,L,R,z,B,V,H,U,W=e((()=>{M=t(n(),1),u(),A(),s(),l(),j(),N=r(),P={title:`Components/Combobox`,component:k.Root,tags:[`autodocs`],parameters:{docs:{description:{component:"Combobox is a `Command` in a surface anchored to a trigger. The surface\nitself is chrome-less — it positions and animates, nothing more — because\n`Command.Root` already carries the border, radius, shadow and background.\nReach for `Popover` when the content has no chrome of its own."}}}},F=[`Condo`,`Dwelling Fire`,`Flood`,`Homeowners`,`Landlord`],I={render:()=>{let[e,t]=(0,M.useState)(!1),[n,r]=(0,M.useState)();return(0,N.jsxs)(k.Root,{open:e,onOpenChange:t,children:[(0,N.jsx)(k.Trigger,{asChild:!0,children:(0,N.jsx)(o,{variant:`secondary`,children:n??`Select a line of business`})}),(0,N.jsx)(k.Content,{label:`Select a line of business`,children:(0,N.jsxs)(f.Root,{label:`Search lines of business`,children:[(0,N.jsx)(f.Input,{placeholder:`Search...`}),(0,N.jsx)(f.List,{children:F.map(e=>(0,N.jsx)(f.Item,{onSelect:()=>{r(e),t(!1)},children:e},e))}),(0,N.jsx)(f.Empty,{children:`No options found`})]})})]})}},L={render:()=>(0,N.jsxs)(k.Root,{defaultOpen:!0,children:[(0,N.jsx)(k.Trigger,{asChild:!0,children:(0,N.jsx)(o,{variant:`secondary`,children:`Open`})}),(0,N.jsx)(k.Content,{label:`Select a line of business`,children:(0,N.jsxs)(f.Root,{label:`Search lines of business`,children:[(0,N.jsx)(f.Input,{placeholder:`Search...`}),(0,N.jsx)(f.List,{children:F.map(e=>(0,N.jsx)(f.Item,{children:e},e))}),(0,N.jsx)(f.Empty,{children:`No options found`})]})})]})},R={render:()=>(0,N.jsx)(`div`,{className:`w-125`,children:(0,N.jsxs)(k.Root,{defaultOpen:!0,children:[(0,N.jsx)(k.Trigger,{asChild:!0,children:(0,N.jsx)(o,{variant:`secondary`,align:`justify`,className:`w-full`,children:`Select a line of business`})}),(0,N.jsx)(k.Content,{label:`Select a line of business`,className:`w-(--radix-popover-trigger-width)`,children:(0,N.jsxs)(f.Root,{label:`Search lines of business`,children:[(0,N.jsx)(f.Input,{placeholder:`Search...`}),(0,N.jsx)(f.List,{children:F.map(e=>(0,N.jsx)(f.Item,{children:e},e))}),(0,N.jsx)(f.Empty,{children:`No options found`})]})})]})})},z={render:()=>{let[e,t]=(0,M.useState)(!1),[n,r]=(0,M.useState)(``),[i,a]=(0,M.useState)(),o=(0,M.useCallback)(e=>a(e?.id),[]),s=(0,M.useRef)(null);return(0,N.jsx)(k.Root,{open:e,onOpenChange:t,children:(0,N.jsxs)(f.Root,{label:`Search lines of business`,className:`overflow-visible border-0 bg-transparent shadow-none`,children:[(0,N.jsx)(k.Anchor,{asChild:!0,children:(0,N.jsx)(c.Input,{asChild:!0,value:n,onValueChange:e=>{r(e),t(!0)},children:(0,N.jsx)(b,{ref:s,size:`sm`,placeholder:`Search...`,"aria-expanded":e,"aria-controls":e?i:void 0,onFocus:()=>t(!0),onClick:()=>t(!0),onKeyDown:n=>{(n.key===`ArrowDown`||n.key===`ArrowUp`)&&t(!0),n.key===`Enter`&&!e&&n.preventDefault()}})})}),(0,N.jsx)(k.Content,{role:`presentation`,className:`w-(--radix-popover-trigger-width)`,onOpenAutoFocus:e=>e.preventDefault(),onCloseAutoFocus:e=>e.preventDefault(),onInteractOutside:e=>{s.current?.contains(e.target)&&e.preventDefault()},children:(0,N.jsxs)(`div`,{className:d().root(),children:[(0,N.jsx)(f.List,{ref:o,label:`Lines of business`,children:F.map(e=>(0,N.jsx)(f.Item,{value:e,onSelect:()=>{r(e),t(!1)},children:e},e))}),(0,N.jsx)(f.Empty,{children:`No options found`})]})})]})})}},B={render:()=>{let[e,t]=(0,M.useState)(null);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{ref:t,"data-testid":`combobox-container`}),e&&(0,N.jsxs)(k.Root,{children:[(0,N.jsx)(k.Trigger,{asChild:!0,children:(0,N.jsx)(o,{children:`Open options`})}),(0,N.jsx)(k.Content,{container:e,"aria-label":`Custom options`,children:(0,N.jsxs)(f.Root,{label:`Search custom options`,children:[(0,N.jsx)(f.Input,{}),(0,N.jsx)(f.List,{children:(0,N.jsx)(f.Item,{children:`Homeowners`})})]})})]})]})}},V={render:()=>{let[e,t]=(0,M.useState)(null);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`h2`,{id:`external-options-label`,children:`External options`}),(0,N.jsx)(`div`,{ref:t,"data-testid":`external-combobox-container`}),e&&(0,N.jsxs)(k.Root,{defaultOpen:!0,children:[(0,N.jsx)(k.Trigger,{asChild:!0,children:(0,N.jsx)(o,{children:`Open options`})}),(0,N.jsx)(k.Portal,{container:e,children:(0,N.jsx)(k.Content,{portalled:!1,"aria-labelledby":`external-options-label`,children:(0,N.jsxs)(f.Root,{label:`Search external options`,children:[(0,N.jsx)(f.Input,{}),(0,N.jsx)(f.List,{children:(0,N.jsx)(f.Item,{children:`Homeowners`})})]})})})]})]})}},H={render:()=>(0,N.jsxs)(k.Root,{defaultOpen:!0,children:[(0,N.jsx)(k.Trigger,{asChild:!0,children:(0,N.jsx)(o,{children:`Choose a state`})}),(0,N.jsx)(k.Content,{label:`Choose a state`,sideOffset:8,side:`bottom`,avoidCollisions:!1,children:(0,N.jsxs)(f.Root,{label:`Search states`,children:[(0,N.jsx)(f.Input,{}),(0,N.jsx)(f.List,{children:(0,N.jsx)(f.Item,{children:`California`})})]})})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`@summary Button trigger over a filterable list`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`The surface paints nothing of its own. Two borders on a combobox mean the
content was dropped in a \`Popover.Content\` instead of here.

@summary Panel chrome belongs to Command, not the floating surface`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`The surface is 300px wide by default. When the trigger is a full-width form
control, match it with \`w-(--radix-popover-trigger-width)\` instead.

@summary Match the floating surface to its trigger width`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
                    <Combobox.Content role="presentation" className="w-(--radix-popover-trigger-width)" onOpenAutoFocus={event => event.preventDefault()} onCloseAutoFocus={event => event.preventDefault()} onInteractOutside={event => {
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
}`,...z.parameters?.docs?.source},description:{story:`Keep the input and list under one Command.Root so arrow keys and Enter reach
the same selection state across the portal. The input owns combobox semantics;
the surface is presentational and leaves focus in the input.
cmdk's unstyled Input composes with the DS Input through asChild, keeping
filtering and active-option announcements inside cmdk.

@summary Search input anchoring a keyboard-accessible list`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`@summary Content portalled into a custom container`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`@summary External portal with Content's automatic portal disabled`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root defaultOpen>
            <Combobox.Trigger asChild>
                <Button>Choose a state</Button>
            </Combobox.Trigger>
            <Combobox.Content label="Choose a state" sideOffset={8} side="bottom" avoidCollisions={false}>
                <Command.Root label="Search states">
                    <Command.Input />
                    <Command.List>
                        <Command.Item>California</Command.Item>
                    </Command.List>
                </Command.Root>
            </Combobox.Content>
        </Combobox.Root>
}`,...H.parameters?.docs?.source},description:{story:`Marketplace uses the default 4px offset. Producerflow's legacy surface uses 8px.

@summary Preserve Producerflow's legacy spacing with sideOffset`,...H.parameters?.docs?.description}}},U=[`Default`,`ChromeLessSurface`,`MatchingTriggerWidth`,`AnchoredToTheSearchField`,`CustomContainer`,`ExternalPortal`,`ProducerflowSpacing`]}));W();export{z as AnchoredToTheSearchField,L as ChromeLessSurface,B as CustomContainer,I as Default,V as ExternalPortal,R as MatchingTriggerWidth,H as ProducerflowSpacing,U as __namedExportsOrder,P as default,k as n,A as r,W as t};