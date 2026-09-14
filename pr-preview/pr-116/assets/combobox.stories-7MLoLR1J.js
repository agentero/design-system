import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-BWEs6izN.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{t as o}from"./button-BxNj1iBi.js";import{t as s}from"./button-kHFQlRi7.js";import{a as c,i as l,o as u,r as d,s as f,t as p}from"./dist-SBioCjVu2.js";import{n as m,t as h}from"./command-BgYzl0lk.js";import{n as g,t as _}from"./input-D84gv-Vy.js";var v,y,b,x,S,C,w,T=e((()=>{f(),a(),v=r(),y=e=>(0,v.jsx)(c,{"data-slot":`combobox-root`,...e}),y.displayName=`Combobox.Root`,b=e=>(0,v.jsx)(u,{"data-slot":`combobox-trigger`,...e}),b.displayName=`Combobox.Trigger`,x=e=>(0,v.jsx)(p,{"data-slot":`combobox-anchor`,...e}),x.displayName=`Combobox.Anchor`,S=l,C=i({base:[`z-(--z-index-flyover) w-75 will-change-[transform,opacity]`,`origin-(--radix-popover-content-transform-origin)`,`data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top`,`data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right`,`data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left`,`data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom`,`data-[state=closed]:animate-dropdown-slide-out`,`motion-reduce:animate-none!`]}),w=({className:e,align:t=`start`,sideOffset:n=4,collisionPadding:r=8,role:i=`presentation`,...a})=>(0,v.jsx)(l,{children:(0,v.jsx)(d,{"data-slot":`combobox-content`,align:t,sideOffset:n,collisionPadding:r,role:i,className:C({className:e}),...a})}),w.displayName=`Combobox.Content`;try{y.displayName=`Combobox.Root`,y.__docgenInfo={description:"Root of a combobox: a filterable list in a surface anchored to a trigger,\nbuilt on Radix Popover. Compose `Root` with `Trigger` / `Content`, plus\n`Anchor` when the surface should align to something other than the trigger.\n\n`Content` is deliberately **chrome-less** — no border, background or shadow.\nIt only positions and animates, because the `Command` that goes inside\ncarries the panel chrome itself. Nesting `Command` in a `Popover.Content`\ninstead paints two borders. Use `Popover` for overlays that need their own\nchrome, and `Combobox` whenever the content is a `Command`.",displayName:`Combobox.Root`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{},tags:{summary:`Root provider for a trigger-anchored filterable list`,see:`{@link https://www.radix-ui.com/primitives/docs/components/popover Radix UI Popover}`,example:`\`\`\`tsx
import { Combobox } from '@agentero/design-system/combobox';
import { Command } from '@agentero/design-system/command';

<Combobox.Root>
  <Combobox.Trigger asChild>
    <Button variant="secondary">{selected ?? 'Select a state'}</Button>
  </Combobox.Trigger>
  <Combobox.Content>
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
\`\`\``}}}catch{}try{b.displayName=`Combobox.Trigger`,b.__docgenInfo={description:``,displayName:`Combobox.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{x.displayName=`Combobox.Anchor`,x.__docgenInfo={description:"Positions `Content` against something other than the trigger — wrap the\nsearch input with it when the trigger is a button elsewhere in the row.",displayName:`Combobox.Anchor`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{S.displayName=`Portal`,S.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{},tags:{}}}catch{}try{C.displayName=`comboboxRecipe`,C.__docgenInfo={description:``,displayName:`comboboxRecipe`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{w.displayName=`Combobox.Content`,w.__docgenInfo={description:'The floating surface. Self-portals to the body and animates on open/close\nfollowing `side`.\n\nDefaults to a fixed 300px, the width a combobox list reads well at\nregardless of its trigger. Pass `className="w-(--radix-popover-trigger-width)"`\nto match the trigger instead — the right call when the trigger is a\nfull-width form control.\n\n`sideOffset` defaults to 4 rather than the 8 the other trigger-anchored\nsurfaces use: a list the trigger filters reads as attached to it, not as a\nseparate overlay.\n\n`role` defaults to `presentation`, overriding the `dialog` Radix puts on\nevery popover. The surface holds no semantics of its own — the `listbox` and\nits accessible name belong to the `Command` inside — and a `dialog` wrapped\naround a listbox both misreports the pattern and demands a name of its own\n(axe `aria-dialog-name`), one every consumer would have to remember. Pass\n`role="dialog"` plus `aria-label` for the rare surface that really is one.',displayName:`Combobox.Content`,filePath:`/home/runner/work/design-system/design-system/src/combobox/combobox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Chrome-less floating surface holding the filterable list`,dataAttribute:`{string} data-slot - Always set to "combobox-content"`}}}catch{}})),E,D=e((()=>{T(),E={Root:y,Trigger:b,Anchor:x,Portal:S,Content:w}})),O=e((()=>{g()})),k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{k=t(n(),1),D(),s(),m(),O(),A=r(),{expect:j,userEvent:M,waitFor:N,within:P}=__STORYBOOK_MODULE_TEST__,F={title:`Components/Combobox`,component:E.Root,tags:[`autodocs`],parameters:{docs:{description:{component:"Combobox is a `Command` in a surface anchored to a trigger. The surface\nitself is chrome-less — it positions and animates, nothing more — because\n`Command.Root` already carries the border, radius, shadow and background.\nReach for `Popover` when the content has no chrome of its own."}}}},I=[`Condo`,`Dwelling Fire`,`Flood`,`Homeowners`,`Landlord`],L={render:()=>{let[e,t]=(0,k.useState)(!1),[n,r]=(0,k.useState)();return(0,A.jsxs)(E.Root,{open:e,onOpenChange:t,children:[(0,A.jsx)(E.Trigger,{asChild:!0,children:(0,A.jsx)(o,{variant:`secondary`,children:n??`Select a line of business`})}),(0,A.jsx)(E.Content,{children:(0,A.jsxs)(h.Root,{label:`Search lines of business`,children:[(0,A.jsx)(h.Input,{placeholder:`Search...`}),(0,A.jsx)(h.List,{children:I.map(e=>(0,A.jsx)(h.Item,{onSelect:()=>{r(e),t(!1)},children:e},e))}),(0,A.jsx)(h.Empty,{children:`No options found`})]})})]})},play:async({canvasElement:e})=>{let t=P(e),n=P(document.body);await M.click(t.getByRole(`button`,{name:/select a line of business/i}));let r=await n.findByRole(`combobox`,{name:/search lines of business/i});await j(n.getAllByRole(`option`)).toHaveLength(5),await M.type(r,`flo`),await N(()=>j(n.getAllByRole(`option`)).toHaveLength(1)),await M.click(n.getByRole(`option`,{name:`Flood`})),await N(()=>j(t.getByRole(`button`,{name:`Flood`})).toBeVisible())}},R={render:()=>(0,A.jsxs)(E.Root,{defaultOpen:!0,children:[(0,A.jsx)(E.Trigger,{asChild:!0,children:(0,A.jsx)(o,{variant:`secondary`,children:`Open`})}),(0,A.jsx)(E.Content,{children:(0,A.jsxs)(h.Root,{label:`Search lines of business`,children:[(0,A.jsx)(h.Input,{placeholder:`Search...`}),(0,A.jsx)(h.List,{children:I.map(e=>(0,A.jsx)(h.Item,{children:e},e))}),(0,A.jsx)(h.Empty,{children:`No options found`})]})})]}),play:async()=>{let e=await N(()=>{let e=document.querySelector(`[data-slot="combobox-content"]`);if(!e)throw Error(`Combobox.Content is not mounted`);return e}),t=getComputedStyle(e);await j(t.borderTopWidth).toBe(`0px`),await j(t.boxShadow).toBe(`none`),await j([`transparent`,`rgba(0, 0, 0, 0)`]).toContain(t.backgroundColor);let n=e.querySelector(`[data-slot="command-root"]`);await j(n).toBeInTheDocument(),await j(getComputedStyle(n).borderTopWidth).not.toBe(`0px`)}},z={render:()=>(0,A.jsx)(`div`,{className:`w-125`,children:(0,A.jsxs)(E.Root,{defaultOpen:!0,children:[(0,A.jsx)(E.Trigger,{asChild:!0,children:(0,A.jsx)(o,{variant:`secondary`,align:`justify`,className:`w-full`,children:`Select a line of business`})}),(0,A.jsx)(E.Content,{className:`w-(--radix-popover-trigger-width)`,children:(0,A.jsxs)(h.Root,{label:`Search lines of business`,children:[(0,A.jsx)(h.Input,{placeholder:`Search...`}),(0,A.jsx)(h.List,{children:I.map(e=>(0,A.jsx)(h.Item,{children:e},e))}),(0,A.jsx)(h.Empty,{children:`No options found`})]})})]})}),play:async({canvasElement:e})=>{let t=P(e).getByRole(`button`,{name:/select a line of business/i}),n=await N(()=>{let e=document.querySelector(`[data-slot="combobox-content"]`);if(!e)throw Error(`Combobox.Content is not mounted`);return e});await N(()=>j(Math.round(n.getBoundingClientRect().width)).toBe(Math.round(t.getBoundingClientRect().width)))}},B={render:()=>{let[e,t]=(0,k.useState)(!1),[n,r]=(0,k.useState)(``),i=I.filter(e=>e.toLowerCase().includes(n.trim().toLowerCase()));return(0,A.jsxs)(E.Root,{open:e,onOpenChange:t,children:[(0,A.jsx)(E.Anchor,{asChild:!0,children:(0,A.jsx)(_,{size:`sm`,"aria-label":`Search lines of business`,placeholder:`Search...`,value:n,onFocus:()=>t(!0),onChange:e=>{r(e.target.value),t(!0)}})}),(0,A.jsx)(E.Content,{className:`w-(--radix-popover-trigger-width)`,onOpenAutoFocus:e=>e.preventDefault(),children:(0,A.jsxs)(h.Root,{label:`Lines of business`,shouldFilter:!1,children:[(0,A.jsx)(h.List,{children:i.map(e=>(0,A.jsx)(h.Item,{value:e,children:e},e))}),(0,A.jsx)(h.Empty,{children:`No options found`})]})})]})},play:async({canvasElement:e})=>{let t=P(e),n=P(document.body),r=t.getByRole(`textbox`,{name:/search lines of business/i});await M.click(r),await N(()=>j(n.getAllByRole(`option`)).toHaveLength(5)),await M.type(r,`flo`),await N(()=>j(n.getAllByRole(`option`)).toHaveLength(1)),await j(r).toHaveFocus()}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>();
    return <Combobox.Root open={open} onOpenChange={setOpen}>
                <Combobox.Trigger asChild>
                    <Button variant="secondary">{value ?? 'Select a line of business'}</Button>
                </Combobox.Trigger>
                <Combobox.Content>
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Content portals to the body, so it is outside the story canvas.
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /select a line of business/i
    }));
    const input = await body.findByRole('combobox', {
      name: /search lines of business/i
    });
    await expect(body.getAllByRole('option')).toHaveLength(5);
    await userEvent.type(input, 'flo');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
    await userEvent.click(body.getByRole('option', {
      name: 'Flood'
    }));
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Flood'
    })).toBeVisible());
  }
}`,...L.parameters?.docs?.source},description:{story:`Button trigger over a filterable list — the shape most consumers need.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root defaultOpen>
            <Combobox.Trigger asChild>
                <Button variant="secondary">Open</Button>
            </Combobox.Trigger>
            <Combobox.Content>
                <Command.Root label="Search lines of business">
                    <Command.Input placeholder="Search..." />
                    <Command.List>
                        {LINES_OF_BUSINESS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
                    </Command.List>
                    <Command.Empty>No options found</Command.Empty>
                </Command.Root>
            </Combobox.Content>
        </Combobox.Root>,
  play: async () => {
    const content = await waitFor(() => {
      const element = document.querySelector('[data-slot="combobox-content"]');
      if (!element) throw new Error('Combobox.Content is not mounted');
      return element;
    });
    const styles = getComputedStyle(content);
    await expect(styles.borderTopWidth).toBe('0px');
    await expect(styles.boxShadow).toBe('none');
    // Any of the transparent spellings is fine; a painted background is not.
    await expect(['transparent', 'rgba(0, 0, 0, 0)']).toContain(styles.backgroundColor);

    // The chrome belongs to the Command panel nested inside it.
    const panel = content.querySelector('[data-slot="command-root"]');
    await expect(panel).toBeInTheDocument();
    await expect(getComputedStyle(panel!).borderTopWidth).not.toBe('0px');
  }
}`,...R.parameters?.docs?.source},description:{story:"The surface paints nothing of its own. Two borders on a combobox mean the\ncontent was dropped in a `Popover.Content` instead of here.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-125">
            <Combobox.Root defaultOpen>
                <Combobox.Trigger asChild>
                    <Button variant="secondary" align="justify" className="w-full">
                        Select a line of business
                    </Button>
                </Combobox.Trigger>
                <Combobox.Content className="w-(--radix-popover-trigger-width)">
                    <Command.Root label="Search lines of business">
                        <Command.Input placeholder="Search..." />
                        <Command.List>
                            {LINES_OF_BUSINESS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
                        </Command.List>
                        <Command.Empty>No options found</Command.Empty>
                    </Command.Root>
                </Combobox.Content>
            </Combobox.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /select a line of business/i
    });
    const content = await waitFor(() => {
      const element = document.querySelector('[data-slot="combobox-content"]');
      if (!element) throw new Error('Combobox.Content is not mounted');
      return element;
    });
    await waitFor(() => expect(Math.round(content.getBoundingClientRect().width)).toBe(Math.round(trigger.getBoundingClientRect().width)));
  }
}`,...z.parameters?.docs?.source},description:{story:"The surface is 300px wide by default. When the trigger is a full-width form\ncontrol, match it with `w-(--radix-popover-trigger-width)` instead.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const matches = LINES_OF_BUSINESS.filter(option => option.toLowerCase().includes(search.trim().toLowerCase()));
    return <Combobox.Root open={open} onOpenChange={setOpen}>
                <Combobox.Anchor asChild>
                    <Input size="sm" aria-label="Search lines of business" placeholder="Search..." value={search} onFocus={() => setOpen(true)} onChange={event => {
          setSearch(event.target.value);
          setOpen(true);
        }} />
                </Combobox.Anchor>
                <Combobox.Content className="w-(--radix-popover-trigger-width)" onOpenAutoFocus={event => event.preventDefault()}>
                    <Command.Root label="Lines of business" shouldFilter={false}>
                        <Command.List>
                            {matches.map(option => <Command.Item key={option} value={option}>
                                    {option}
                                </Command.Item>)}
                        </Command.List>
                        <Command.Empty>No options found</Command.Empty>
                    </Command.Root>
                </Combobox.Content>
            </Combobox.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const field = canvas.getByRole('textbox', {
      name: /search lines of business/i
    });
    await userEvent.click(field);

    // The list collapses to zero height while itemless, so wait on the rows.
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(5));
    await userEvent.type(field, 'flo');

    // Focus stays in the field: the list is anchored to it, not focused itself.
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
    await expect(field).toHaveFocus();
  }
}`,...B.parameters?.docs?.source},description:{story:"`Anchor` positions the surface against something other than the trigger —\nhere the search input itself, so the list hangs off the field the user types\nin. Give `Content` `onOpenAutoFocus` that prevents default, or focus jumps\nout of that input the moment the list opens.",...B.parameters?.docs?.description}}},V=[`Default`,`ChromeLessSurface`,`MatchingTriggerWidth`,`AnchoredToTheSearchField`]}))();export{B as AnchoredToTheSearchField,R as ChromeLessSurface,L as Default,z as MatchingTriggerWidth,V as __namedExportsOrder,F as default};