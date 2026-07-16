import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-giFftrYz.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{n as o,t as s}from"./lib-Dkaf_tmd.js";import{r as c,t as l}from"./dist-BW3FT58x2.js";import{n as u,t as d}from"./tooltip-BeutkbnG.js";var f,p,m,h,g,_=e((()=>{f=t(n(),1),c(),p=r(),m=`Label`,h=f.forwardRef((e,t)=>(0,p.jsx)(l.label,{...e,ref:t,onMouseDown:t=>{t.target.closest(`button, input, select, textarea`)||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}})),h.displayName=m,g=h})),v=e((()=>{u()})),y,b,x,S=e((()=>{_(),a(),s(),v(),y=r(),b=i({slots:{root:`flex flex-row items-start gap-1`,label:`mb-2 flex text-sm font-semibold text-text-default-base-primary`},variants:{readonly:{true:{label:`text-text-default-base-secondary`}},optional:{true:{label:`after:font-normal after:text-text-default-base-tertiary after:content-['_(optional)']`}}},defaultVariants:{readonly:!1,optional:!1}}),x=({className:e,children:t,optional:n=!1,readonly:r=!1,info:i,infoIcon:a,ref:s,...c})=>{let l=b({optional:n,readonly:r}),u=(0,y.jsx)(r?`dt`:g,{ref:s,"data-slot":`label`,className:o(l.label(),e),...c,children:t});return i&&a?(0,y.jsxs)(`div`,{className:l.root(),"data-slot":`label-root`,children:[u,(0,y.jsx)(d,{content:i,children:a})]}):u};try{b.displayName=`labelRecipe`,b.__docgenInfo={description:``,displayName:`labelRecipe`,props:{readonly:{defaultValue:{value:`false`},description:``,name:`readonly`,required:!1,type:{name:`boolean`}},optional:{defaultValue:{value:`false`},description:``,name:`optional`,required:!1,type:{name:`boolean`}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{x.displayName=`Label`,x.__docgenInfo={description:'Accessible caption for a form control, built on Radix\'s Label primitive\n(associates with the control via `htmlFor`, prevents text selection on\ndouble-click). Pass `optional` for a muted " (optional)" suffix, `readonly`\nto render a dimmed `<dt>` for read-only summaries (place it inside a `<dl>`),\nand `info` + `infoIcon` for an inline help tooltip.',displayName:`Label`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}},readonly:{defaultValue:{value:`false`},description:``,name:`readonly`,required:!1,type:{name:`boolean`}},optional:{defaultValue:{value:`false`},description:``,name:`optional`,required:!1,type:{name:`boolean`}},info:{defaultValue:null,description:"Tooltip content shown next to the label; rendered only alongside `infoIcon`.",name:`info`,required:!1,type:{name:`ReactNode`}},infoIcon:{defaultValue:null,description:"Trigger for the `info` tooltip (e.g. a help icon); kept as a prop so the DS stays icon-agnostic. Give it an accessible name.",name:`infoIcon`,required:!1,type:{name:`ReactNode`}}}}}catch{}})),C,w,T,E,D,O,k,A,j,M,N;e((()=>{S(),C=r(),{expect:w,userEvent:T,within:E}=__STORYBOOK_MODULE_TEST__,D=()=>(0,C.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`More information`,children:(0,C.jsx)(`path`,{d:`M12 2a10 10 0 100 20 10 10 0 000-20zm0 15.25a.75.75 0 110-1.5.75.75 0 010 1.5zm1.03-4.32c-.4.28-.53.45-.53.82v.25h-1v-.25c0-.86.4-1.31.97-1.71.5-.35.78-.58.78-1.05 0-.55-.43-.94-1.06-.94-.6 0-1.05.35-1.14.94l-.99-.13c.16-1.05.98-1.71 2.14-1.71 1.2 0 2.05.72 2.05 1.82 0 .84-.44 1.25-1.19 1.71z`})}),O=({children:e})=>(0,C.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:e}),k={title:`Components/Label`,component:x,tags:[`autodocs`],argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},optional:{control:`boolean`},readonly:{control:`boolean`}},args:{children:`Email`,optional:!1,readonly:!1},parameters:{docs:{description:{component:'Label captions a form control. Associate it with an input via `htmlFor` so\nclicking the label focuses the control. Use `optional` for a muted\n" (optional)" suffix, `readonly` to render a dimmed `<dt>` for read-only\nsummaries, and `info` + `infoIcon` for an inline help tooltip.'}}}},A={args:{htmlFor:`email`},play:({canvasElement:e})=>{let t=E(e).getByText(`Email`);w(t).toHaveAttribute(`data-slot`,`label`),w(t.tagName).toBe(`LABEL`),w(t).toHaveAttribute(`for`,`email`)}},j={render:()=>(0,C.jsxs)(O,{children:[(0,C.jsx)(x,{htmlFor:`default`,children:`Default label`}),(0,C.jsx)(x,{htmlFor:`optional`,optional:!0,children:`Optional field`}),(0,C.jsxs)(`dl`,{children:[(0,C.jsx)(x,{readonly:!0,children:`Read-only field`}),(0,C.jsx)(`dd`,{children:`Read-only value`})]})]}),play:({canvasElement:e})=>{let t=E(e);w(t.getByText(`Default label`).tagName).toBe(`LABEL`),w(t.getByText(`Read-only field`).tagName).toBe(`DT`)}},M={render:()=>(0,C.jsx)(x,{htmlFor:`tier`,info:`Determines the agency's quoting access.`,infoIcon:(0,C.jsx)(D,{}),children:`Agency tier`}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByTestId(`tooltip-trigger`);w(t.getByText(`Agency tier`)).toHaveAttribute(`data-slot`,`label`),await T.hover(r),w((await n.findAllByText(/quoting access/i)).length).toBeGreaterThan(0)}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'email'
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Email');
    expect(label).toHaveAttribute('data-slot', 'label');
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('for', 'email');
  }
}`,...A.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `optional` and `readonly` from the\nControls panel to explore each state.\n\n@summary Default args playground for Label",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            <Label htmlFor="default">Default label</Label>
            <Label htmlFor="optional" optional>
                Optional field
            </Label>
            <dl>
                <Label readonly>Read-only field</Label>
                <dd>Read-only value</dd>
            </dl>
        </Stack>,
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Default label').tagName).toBe('LABEL');
    expect(canvas.getByText('Read-only field').tagName).toBe('DT');
  }
}`,...j.parameters?.docs?.source},description:{story:'The default label, the `optional` variant with its muted " (optional)"\nsuffix, and the `readonly` variant rendered as a dimmed `<dt>` inside a\n`<dl>` for read-only summaries.\n\n@summary Default, optional, and read-only labels',...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Label htmlFor="tier" info="Determines the agency's quoting access." infoIcon={<HelpIcon />}>
            Agency tier
        </Label>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByTestId('tooltip-trigger');
    expect(canvas.getByText('Agency tier')).toHaveAttribute('data-slot', 'label');
    await userEvent.hover(trigger);
    const tooltips = await body.findAllByText(/quoting access/i);
    expect(tooltips.length).toBeGreaterThan(0);
  }
}`,...M.parameters?.docs?.source},description:{story:`With \`info\` and \`infoIcon\`, Label renders a flex wrapper placing a help
trigger beside the caption; hovering the icon reveals the tooltip. The icon
is supplied by the consumer so the design system stays icon-library agnostic.

@summary Label with an inline help tooltip`,...M.parameters?.docs?.description}}},N=[`Default`,`States`,`WithInfo`]}))();export{A as Default,j as States,M as WithInfo,N as __namedExportsOrder,k as default};