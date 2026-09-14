import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./dist-xs6gOf1u.js";import{t as i}from"./button-BxNj1iBi.js";import{t as a}from"./button-kHFQlRi7.js";import{a as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./dist-SBioCjVu2.js";var p,m,h,g,_,v,y,b,x=e((()=>{d(),r(),p=t(),m=e=>(0,p.jsx)(o,{"data-slot":`popover-root`,...e}),m.displayName=`Popover.Root`,h=e=>(0,p.jsx)(l,{"data-slot":`popover-trigger`,...e}),h.displayName=`Popover.Trigger`,g=e=>(0,p.jsx)(f,{"data-slot":`popover-anchor`,...e}),g.displayName=`Popover.Anchor`,_=e=>(0,p.jsx)(c,{"data-slot":`popover-close`,...e}),_.displayName=`Popover.Close`,v=s,y=n({base:[`z-(--z-index-flyover) rounded-md bg-bg-default-base-primary px-2 py-3 shadow-md`,`border border-border-default-base-primary`,`will-change-[transform,opacity]`,`origin-(--radix-popover-content-transform-origin)`,`data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top`,`data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right`,`data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left`,`data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom`,`data-[state=closed]:animate-dropdown-slide-out`,`motion-reduce:animate-none!`]}),b=({className:e,sideOffset:t=8,...n})=>(0,p.jsx)(s,{children:(0,p.jsx)(u,{"data-slot":`popover-content`,sideOffset:t,className:y({className:e}),...n})}),b.displayName=`Popover.Content`;try{m.displayName=`Popover.Root`,m.__docgenInfo={description:"Root of a non-modal floating surface anchored to a trigger, built on Radix\nPopover. Compose `Root` with `Trigger` / `Content`, plus optional `Anchor`,\n`Close`, and `Portal`. Use for rich interactive overlays (forms, filters,\npickers); prefer `Tooltip` for text hints and `DropdownMenu` for menus.",displayName:`Popover.Root`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{summary:`Root provider for a floating interactive overlay`,see:`{@link https://www.radix-ui.com/primitives/docs/components/popover Radix UI Popover}`,example:`\`\`\`tsx
import { Popover } from '@agentero/design-system/popover';

<Popover.Root>
  <Popover.Trigger asChild>
    <Button>Filters</Button>
  </Popover.Trigger>
  <Popover.Content align="start">
    <FiltersForm />
  </Popover.Content>
</Popover.Root>
\`\`\``}}}catch{}try{h.displayName=`Popover.Trigger`,h.__docgenInfo={description:``,displayName:`Popover.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{g.displayName=`Popover.Anchor`,g.__docgenInfo={description:``,displayName:`Popover.Anchor`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{_.displayName=`Popover.Close`,_.__docgenInfo={description:``,displayName:`Popover.Close`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{v.displayName=`Portal`,v.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{y.displayName=`popoverRecipe`,y.__docgenInfo={description:``,displayName:`popoverRecipe`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{b.displayName=`Popover.Content`,b.__docgenInfo={description:``,displayName:`Popover.Content`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),S,C=e((()=>{x(),S={Root:m,Trigger:h,Anchor:g,Close:_,Portal:v,Content:b}})),w,T,E,D,O,k,A,j,M,N,P;e((()=>{C(),a(),w=t(),{expect:T,userEvent:E,waitFor:D,within:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/Popover`,component:S.Root,tags:[`autodocs`],decorators:[e=>(0,w.jsx)(`div`,{className:`flex min-h-60 items-center justify-center p-10`,children:(0,w.jsx)(e,{})})],parameters:{docs:{description:{component:"Popover is a non-modal floating surface anchored to a trigger, used for\nrich interactive overlays such as forms, filters, and pickers. Compose it\nfrom `Root` / `Trigger` / `Content`, plus optional `Anchor` and `Close`.\nBuilt on Radix UI's Popover primitive, so focus management, dismissal, and\ncollision detection come for free."}}}},A={render:()=>(0,w.jsxs)(S.Root,{children:[(0,w.jsx)(S.Trigger,{asChild:!0,children:(0,w.jsx)(i,{variant:`secondary`,children:`Open popover`})}),(0,w.jsx)(S.Content,{children:(0,w.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`This carrier is appointed for 3 lines of business.`})})]}),play:async({canvasElement:e})=>{let t=O(e),n=O(document.body),r=t.getByRole(`button`,{name:/open popover/i});await T(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument(),await E.click(r);let i=await n.findByText(/3 lines of business/i);await T(i).toBeInTheDocument(),await T(i.closest(`[data-slot="popover-content"]`)).toHaveAttribute(`data-state`,`open`),await E.keyboard(`{Escape}`),await D(()=>T(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument())}},j={render:()=>(0,w.jsx)(`div`,{className:`grid grid-cols-2 gap-6`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,w.jsxs)(S.Root,{children:[(0,w.jsx)(S.Trigger,{asChild:!0,children:(0,w.jsx)(i,{variant:`secondary`,children:e})}),(0,w.jsx)(S.Content,{side:e,children:(0,w.jsxs)(`p`,{className:`text-sm text-text-default-base-primary`,children:[`Opens on `,e]})})]},e))})},M={render:()=>(0,w.jsxs)(S.Root,{children:[(0,w.jsx)(S.Trigger,{asChild:!0,children:(0,w.jsx)(i,{variant:`secondary`,children:`Rename`})}),(0,w.jsx)(S.Content,{align:`start`,children:(0,w.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,w.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-text-default-base-primary`,children:[`New name`,(0,w.jsx)(`input`,{type:`text`,defaultValue:`Untitled`,className:`rounded-md border border-border-default-base-primary px-2 py-1 text-sm`})]}),(0,w.jsx)(S.Close,{asChild:!0,children:(0,w.jsx)(i,{variant:`primary`,size:`sm`,children:`Save`})})]})})]}),play:async({canvasElement:e})=>{let t=O(e),n=O(document.body);await E.click(t.getByRole(`button`,{name:/rename/i})),await T(await n.findByRole(`textbox`)).toBeInTheDocument(),await E.click(n.getByRole(`button`,{name:/save/i})),await D(()=>T(n.queryByRole(`textbox`)).not.toBeInTheDocument())}},N={render:()=>(0,w.jsxs)(S.Root,{children:[(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,w.jsx)(S.Anchor,{className:`rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary`,children:`Anchored here`}),(0,w.jsx)(S.Trigger,{asChild:!0,children:(0,w.jsx)(i,{variant:`secondary`,children:`Toggle from below`})})]}),(0,w.jsx)(S.Content,{side:`top`,children:(0,w.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Positioned against the anchor`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Open popover</Button>
            </Popover.Trigger>
            <Popover.Content>
                <p className="text-sm text-text-default-base-primary">
                    This carrier is appointed for 3 lines of business.
                </p>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: /open popover/i
    });
    await expect(body.queryByText(/3 lines of business/i)).not.toBeInTheDocument();
    await userEvent.click(trigger);
    const content = await body.findByText(/3 lines of business/i);
    await expect(content).toBeInTheDocument();
    await expect(content.closest('[data-slot="popover-content"]')).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByText(/3 lines of business/i)).not.toBeInTheDocument());
  }
}`,...A.parameters?.docs?.source},description:{story:`A minimal Popover: a trigger button that reveals a short text surface on
click and dismisses on outside click or Escape.

@summary Basic click-to-open popover surface`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6">
            {(['top', 'right', 'bottom', 'left'] as const).map(side => <Popover.Root key={side}>
                    <Popover.Trigger asChild>
                        <Button variant="secondary">{side}</Button>
                    </Popover.Trigger>
                    <Popover.Content side={side}>
                        <p className="text-sm text-text-default-base-primary">Opens on {side}</p>
                    </Popover.Content>
                </Popover.Root>)}
        </div>
}`,...j.parameters?.docs?.source},description:{story:`\`side\` sets the preferred placement; Radix flips it on viewport collision.

@summary Popover placement on each of the four sides`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Rename</Button>
            </Popover.Trigger>
            <Popover.Content align="start">
                <div className="flex flex-col gap-3">
                    <label className="flex flex-col gap-1 text-sm text-text-default-base-primary">
                        New name
                        <input type="text" defaultValue="Untitled" className="rounded-md border border-border-default-base-primary px-2 py-1 text-sm" />
                    </label>
                    <Popover.Close asChild>
                        <Button variant="primary" size="sm">
                            Save
                        </Button>
                    </Popover.Close>
                </div>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /rename/i
    }));
    const input = await body.findByRole('textbox');
    await expect(input).toBeInTheDocument();
    await userEvent.click(body.getByRole('button', {
      name: /save/i
    }));
    await waitFor(() => expect(body.queryByRole('textbox')).not.toBeInTheDocument());
  }
}`,...M.parameters?.docs?.source},description:{story:"Rich interactive content — the primary reason to reach for a Popover over a\nTooltip. A `Close` inside the surface dismisses it after submitting.\n\n@summary Popover holding an interactive form with a `Close` action",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <div className="flex flex-col items-center gap-4">
                <Popover.Anchor className="rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary">
                    Anchored here
                </Popover.Anchor>
                <Popover.Trigger asChild>
                    <Button variant="secondary">Toggle from below</Button>
                </Popover.Trigger>
            </div>
            <Popover.Content side="top">
                <p className="text-sm text-text-default-base-primary">Positioned against the anchor</p>
            </Popover.Content>
        </Popover.Root>
}`,...N.parameters?.docs?.source},description:{story:"`Anchor` positions the Content against an element other than the Trigger —\nuseful when the visual anchor differs from the toggle button.\n\n@summary Popover positioned against a separate `Anchor` element",...N.parameters?.docs?.description}}},P=[`Default`,`Sides`,`WithForm`,`WithAnchor`]}))();export{A as Default,j as Sides,N as WithAnchor,M as WithForm,P as __namedExportsOrder,k as default};