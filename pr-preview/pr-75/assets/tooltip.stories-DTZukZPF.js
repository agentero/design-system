import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n}from"./button-Cl-n4-AG.js";import{t as r}from"./button-2R4F7loS.js";import{n as i,t as a}from"./tooltip-BeutkbnG.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{r(),i(),o=t(),{expect:s,userEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Tooltip`,component:a,tags:[`autodocs`],argTypes:{content:{control:`text`},side:{control:`radio`,options:[`top`,`right`,`bottom`,`left`]},align:{control:`radio`,options:[`start`,`center`,`end`]},sideOffset:{control:`number`},delayDuration:{control:`number`},asChild:{control:`boolean`},children:{table:{disable:!0}}},args:{content:`Archive this carrier`,side:`top`,asChild:!0,children:(0,o.jsx)(n,{variant:`secondary`,children:`Hover me`})},decorators:[e=>(0,o.jsx)(`div`,{className:`flex min-h-40 items-center justify-center p-10`,children:(0,o.jsx)(e,{})})],parameters:{docs:{description:{component:`Tooltip reveals a short, non-essential hint anchored to a trigger element
on hover or focus.`}}}},f={render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsx)(n,{variant:`secondary`,children:`Hover me`})}),play:async({canvasElement:e,args:t})=>{let n=u(e),r=u(document.body),i=n.getByRole(`button`,{name:/hover me/i});await s(r.queryByText(t.content)).not.toBeInTheDocument(),await c.hover(i),await s((await r.findAllByText(t.content)).length).toBeGreaterThan(0),await s(i).toHaveAttribute(`aria-describedby`),await c.unhover(i),await l(()=>s(r.queryByText(t.content)).not.toBeInTheDocument())}},p={render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsx)(n,{variant:`secondary`,children:`Focus me`})}),play:async({canvasElement:e,args:t})=>{let n=u(e),r=u(document.body),i=n.getByRole(`button`,{name:/focus me/i});await c.tab(),await s(i).toHaveFocus(),await s((await r.findAllByText(t.content)).length).toBeGreaterThan(0),await s(i).toHaveAttribute(`aria-describedby`)}},m={render:()=>(0,o.jsxs)(`div`,{className:`grid grid-cols-2 gap-6`,children:[(0,o.jsx)(a,{content:`Tooltip on top`,side:`top`,asChild:!0,children:(0,o.jsx)(n,{variant:`secondary`,children:`Top`})}),(0,o.jsx)(a,{content:`Tooltip on the right`,side:`right`,asChild:!0,children:(0,o.jsx)(n,{variant:`secondary`,children:`Right`})}),(0,o.jsx)(a,{content:`Tooltip on the bottom`,side:`bottom`,asChild:!0,children:(0,o.jsx)(n,{variant:`secondary`,children:`Bottom`})}),(0,o.jsx)(a,{content:`Tooltip on the left`,side:`left`,asChild:!0,children:(0,o.jsx)(n,{variant:`secondary`,children:`Left`})})]})},h={render:e=>(0,o.jsx)(a,{...e,content:`Opens in a new tab`,side:`bottom`,asChild:!0,children:(0,o.jsx)(`a`,{href:`https://agentero.com`,target:`_blank`,rel:`noreferrer`,className:`text-text-default-base-primary underline`,children:`Docs`})}),play:async({canvasElement:e})=>{let t=u(e),n=u(document.body),r=t.getByRole(`link`,{name:/docs/i});await c.hover(r),await s((await n.findAllByText(/opens in a new tab/i)).length).toBeGreaterThan(0)}},g={args:{content:`This carrier requires a completed appointment before you can request quotes for this line of business.`},render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsx)(n,{variant:`secondary`,children:`Why is this disabled?`})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
            <Button variant="secondary">Hover me</Button>
        </Tooltip>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: /hover me/i
    });
    await expect(body.queryByText(args.content as string)).not.toBeInTheDocument();
    await userEvent.hover(trigger);
    const tooltips = await body.findAllByText(args.content as string);
    await expect(tooltips.length).toBeGreaterThan(0);
    await expect(trigger).toHaveAttribute('aria-describedby');
    await userEvent.unhover(trigger);
    await waitFor(() => expect(body.queryByText(args.content as string)).not.toBeInTheDocument());
  }
}`,...f.parameters?.docs?.source},description:{story:`Default hint revealed on hover; hides again on unhover.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
            <Button variant="secondary">Focus me</Button>
        </Tooltip>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: /focus me/i
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    const tooltips = await body.findAllByText(args.content as string);
    await expect(tooltips.length).toBeGreaterThan(0);
    await expect(trigger).toHaveAttribute('aria-describedby');
  }
}`,...p.parameters?.docs?.source},description:{story:"Opens on keyboard focus too, wiring `aria-describedby` on the trigger.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6">
            <Tooltip content="Tooltip on top" side="top" asChild>
                <Button variant="secondary">Top</Button>
            </Tooltip>
            <Tooltip content="Tooltip on the right" side="right" asChild>
                <Button variant="secondary">Right</Button>
            </Tooltip>
            <Tooltip content="Tooltip on the bottom" side="bottom" asChild>
                <Button variant="secondary">Bottom</Button>
            </Tooltip>
            <Tooltip content="Tooltip on the left" side="left" asChild>
                <Button variant="secondary">Left</Button>
            </Tooltip>
        </div>
}`,...m.parameters?.docs?.source},description:{story:"`side` sets the preferred placement; it flips on viewport collision.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args} content="Opens in a new tab" side="bottom" asChild>
            <a href="https://agentero.com" target="_blank" rel="noreferrer" className="text-text-default-base-primary underline">
                Docs
            </a>
        </Tooltip>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const link = canvas.getByRole('link', {
      name: /docs/i
    });
    await userEvent.hover(link);
    const tooltips = await body.findAllByText(/opens in a new tab/i);
    await expect(tooltips.length).toBeGreaterThan(0);
  }
}`,...h.parameters?.docs?.source},description:{story:"`asChild` decorates an already-interactive trigger instead of wrapping it in a `<button>`.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This carrier requires a completed appointment before you can request quotes for this line of business.'
  },
  render: args => <Tooltip {...args}>
            <Button variant="secondary">Why is this disabled?</Button>
        </Tooltip>
}`,...g.parameters?.docs?.source},description:{story:"Content wraps at the `32ch` max width.",...g.parameters?.docs?.description}}},_=[`Default`,`OpensOnFocus`,`Sides`,`AsChild`,`LongContent`]}))();export{h as AsChild,f as Default,g as LongContent,p as OpensOnFocus,m as Sides,_ as __namedExportsOrder,d as default};