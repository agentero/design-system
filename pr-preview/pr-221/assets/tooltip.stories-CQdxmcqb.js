import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./button-p7PGYRyV.js";import{n as i,r as a,t as o}from"./tooltip-CFV1yMKq.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),a(),s=t(),{expect:c,fn:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Tooltip`,component:o,tags:[`autodocs`],argTypes:{content:{control:`text`},side:{control:`radio`,options:[`top`,`right`,`bottom`,`left`]},align:{control:`radio`,options:[`start`,`center`,`end`]},sideOffset:{control:`number`},delayDuration:{control:`number`},asChild:{control:`boolean`},children:{table:{disable:!0}}},args:{content:`Archive this carrier`,side:`top`,asChild:!0,children:(0,s.jsx)(r,{variant:`secondary`,children:`Hover me`})},decorators:[e=>(0,s.jsx)(`div`,{className:`flex min-h-40 items-center justify-center p-10`,children:(0,s.jsx)(e,{})})],parameters:{docs:{description:{component:`Tooltip reveals a short, non-essential hint anchored to a trigger element
on hover or focus.`}}}},m={render:e=>(0,s.jsx)(o,{...e,children:(0,s.jsx)(r,{variant:`secondary`,children:`Hover me`})}),play:async({canvasElement:e,args:t})=>{let n=f(e),r=f(document.body),i=n.getByRole(`button`,{name:/hover me/i});await c(r.queryByText(t.content)).not.toBeInTheDocument(),await u.hover(i);let a=await r.findAllByText(t.content);await c(a.length).toBeGreaterThan(0),await c(i).toHaveAttribute(`aria-describedby`),await u.unhover(i),await d(()=>c(r.queryByText(t.content)).not.toBeInTheDocument())}},h={render:e=>(0,s.jsx)(o,{...e,children:(0,s.jsx)(r,{variant:`secondary`,children:`Focus me`})}),play:async({canvasElement:e,args:t})=>{let n=f(e),r=f(document.body),i=n.getByRole(`button`,{name:/focus me/i});await u.tab(),await c(i).toHaveFocus();let a=await r.findAllByText(t.content);await c(a.length).toBeGreaterThan(0),await c(i).toHaveAttribute(`aria-describedby`)}},g={render:()=>(0,s.jsx)(i,{children:(0,s.jsxs)(`div`,{className:`flex gap-2`,children:[(0,s.jsx)(o,{content:`Edit carrier`,asChild:!0,children:(0,s.jsx)(r,{variant:`secondary`,children:`Edit`})}),(0,s.jsx)(o,{content:`Archive carrier`,asChild:!0,children:(0,s.jsx)(r,{variant:`secondary`,children:`Archive`})})]})}),play:async({canvasElement:e})=>{let t=f(e),n=t.getByRole(`button`,{name:`Edit`}),r=t.getByRole(`button`,{name:`Archive`});await u.hover(n),await d(()=>c(n).toHaveAttribute(`data-state`,`delayed-open`)),await u.unhover(n),await u.hover(r),await d(()=>c(r).toHaveAttribute(`data-state`,`instant-open`))}},_={render:()=>(0,s.jsxs)(`div`,{className:`grid grid-cols-2 gap-6`,children:[(0,s.jsx)(o,{content:`Tooltip on top`,side:`top`,asChild:!0,children:(0,s.jsx)(r,{variant:`secondary`,children:`Top`})}),(0,s.jsx)(o,{content:`Tooltip on the right`,side:`right`,asChild:!0,children:(0,s.jsx)(r,{variant:`secondary`,children:`Right`})}),(0,s.jsx)(o,{content:`Tooltip on the bottom`,side:`bottom`,asChild:!0,children:(0,s.jsx)(r,{variant:`secondary`,children:`Bottom`})}),(0,s.jsx)(o,{content:`Tooltip on the left`,side:`left`,asChild:!0,children:(0,s.jsx)(r,{variant:`secondary`,children:`Left`})})]})},v={render:e=>(0,s.jsx)(o,{...e,content:`Opens in a new tab`,side:`bottom`,asChild:!0,children:(0,s.jsx)(`a`,{href:`https://agentero.com`,target:`_blank`,rel:`noreferrer`,className:`text-text-default-base-primary underline`,children:`Docs`})}),play:async({canvasElement:e})=>{let t=f(e),n=f(document.body),r=t.getByRole(`link`,{name:/docs/i});await u.hover(r);let i=await n.findAllByText(/opens in a new tab/i);await c(i.length).toBeGreaterThan(0)}},y=l(e=>e.preventDefault()),b={args:{asChild:!1},render:e=>(0,s.jsx)(`form`,{onSubmit:y,children:(0,s.jsx)(o,{...e,content:`Rated through ITC`,children:(0,s.jsx)(`span`,{className:`rounded-sm border border-border-default-base-primary px-1.5 text-xs`,children:`RATER`})})}),play:async({canvasElement:e})=>{let t=f(e).getByRole(`button`,{name:/rater/i});await c(t).toHaveAttribute(`type`,`button`),await u.click(t),await c(y).not.toHaveBeenCalled()}},x={args:{content:`This carrier requires a completed appointment before you can request quotes for this line of business.`},render:e=>(0,s.jsx)(o,{...e,children:(0,s.jsx)(r,{variant:`secondary`,children:`Why is this disabled?`})})},S=[`Default`,`OpensOnFocus`,`SharedProvider`,`Sides`,`AsChild`,`InsideAForm`,`LongContent`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Default hint revealed on hover; hides again on unhover.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Opens on keyboard focus too, wiring `aria-describedby` on the trigger.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
            <div className="flex gap-2">
                <Tooltip content="Edit carrier" asChild>
                    <Button variant="secondary">Edit</Button>
                </Tooltip>
                <Tooltip content="Archive carrier" asChild>
                    <Button variant="secondary">Archive</Button>
                </Tooltip>
            </div>
        </TooltipProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const edit = canvas.getByRole('button', {
      name: 'Edit'
    });
    const archive = canvas.getByRole('button', {
      name: 'Archive'
    });
    await userEvent.hover(edit);
    await waitFor(() => expect(edit).toHaveAttribute('data-state', 'delayed-open'));
    await userEvent.unhover(edit);
    await userEvent.hover(archive);
    await waitFor(() => expect(archive).toHaveAttribute('data-state', 'instant-open'));
  }
}`,...g.parameters?.docs?.source},description:{story:`Inside a \`TooltipProvider\`, the first tooltip waits for the hover delay; the next one opens at once.

@summary Shared provider: only the first tooltip waits for the hover delay`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"`side` sets the preferred placement; it flips on viewport collision.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"`asChild` decorates an already-interactive trigger instead of wrapping it in a `<button>`.",...v.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: false
  },
  render: args => <form onSubmit={onSubmit}>
            <Tooltip {...args} content="Rated through ITC">
                <span className="rounded-sm border border-border-default-base-primary px-1.5 text-xs">
                    RATER
                </span>
            </Tooltip>
        </form>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /rater/i
    });
    await expect(trigger).toHaveAttribute('type', 'button');
    await userEvent.click(trigger);
    await expect(onSubmit).not.toHaveBeenCalled();
  }
}`,...b.parameters?.docs?.source},description:{story:'Without `asChild` the trigger is a `type="button"`, so a tooltip inside a form never submits it.',...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This carrier requires a completed appointment before you can request quotes for this line of business.'
  },
  render: args => <Tooltip {...args}>
            <Button variant="secondary">Why is this disabled?</Button>
        </Tooltip>
}`,...x.parameters?.docs?.source},description:{story:"Content wraps at the `32ch` max width.",...x.parameters?.docs?.description}}}})))()}C();export{v as AsChild,m as Default,b as InsideAForm,x as LongContent,h as OpensOnFocus,g as SharedProvider,_ as Sides,S as __namedExportsOrder,p as default};