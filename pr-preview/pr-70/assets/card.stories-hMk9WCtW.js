import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-D_wwe7cI.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{n as o,t as s}from"./lib-Dkaf_tmd.js";import{i as c,t as l}from"./dist-DDeifBRX.js";import{t as u}from"./button-CkWJD283.js";import{t as d}from"./button-DROrEMUS.js";import{n as f,t as p}from"./avatar-C0X9-rp9.js";import{i as m,t as h}from"./icons-CrUOF4r0.js";var g=e((()=>{f()})),_,v,y,b,x,S,C,w,T,E=e((()=>{_=t(n(),1),c(),a(),s(),v=r(),y=i({slots:{root:`flex flex-col overflow-clip rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-xs`,header:`flex flex-col`,body:`flex flex-col`,footer:`flex items-center gap-3`},variants:{spacing:{none:{header:`border-b border-border-default-base-primary px-6 py-4`,body:`p-6`,footer:`border-t border-border-default-base-primary px-6 py-4`},md:{root:`gap-4 p-6`},lg:{root:`gap-6 p-10`}}},defaultVariants:{spacing:`md`}}),b=(0,_.createContext)(null),x=()=>{let e=(0,_.use)(b);if(!e)throw Error(`Card sub-components must be used within a Card`);return e},S=({className:e,children:t,...n})=>{let r=x();return(0,v.jsx)(`div`,{"data-slot":`card-header`,...n,className:o(r.header(),e),children:t})},S.displayName=`Card.Header`,C=({className:e,children:t,...n})=>{let r=x();return(0,v.jsx)(`div`,{"data-slot":`card-body`,...n,className:o(r.body(),e),children:t})},C.displayName=`Card.Body`,w=({className:e,children:t,...n})=>{let r=x();return(0,v.jsx)(`div`,{"data-slot":`card-footer`,...n,className:o(r.footer(),e),children:t})},w.displayName=`Card.Footer`,T=({spacing:e=`md`,asChild:t,className:n,children:r,...i})=>{let a=y({spacing:e});return(0,v.jsx)(b,{value:a,children:(0,v.jsx)(t?l:`div`,{"data-slot":`card-root`,...i,className:o(a.root(),n),children:r})})},T.Header=S,T.Body=C,T.Footer=w;try{y.displayName=`cardRecipe`,y.__docgenInfo={description:``,displayName:`cardRecipe`,props:{spacing:{defaultValue:{value:`md`},description:``,name:`spacing`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"lg"`},{value:`"none"`}]}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{T.displayName=`Card`,T.__docgenInfo={description:"Surface container — border, radius, and shadow — with optional\n`Card.Header` / `Card.Body` / `Card.Footer` sections. No fixed width and no\nbuilt-in content: size it from the parent and compose whatever you need.\nPass `asChild` to render a semantic element (`<article>`, `<section>`) or an\nanchor instead of the default `<div>`.",displayName:`Card`,props:{spacing:{defaultValue:{value:`md`},description:"Internal spacing: `none` (divider-separated bands), `md` (default), `lg`.",name:`spacing`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"lg"`},{value:`"none"`}]}},asChild:{defaultValue:null,description:"Render the single child element instead of a `<div>` (via Radix `Slot`) — e.g. an `<article>`, `<section>`, or `<a>`.",name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{T.Header.displayName=`Card.Header`,T.Header.__docgenInfo={description:``,displayName:`Card.Header`,props:{}}}catch{}try{T.Body.displayName=`Card.Body`,T.Body.__docgenInfo={description:``,displayName:`Card.Body`,props:{}}}catch{}try{T.Footer.displayName=`Card.Footer`,T.Footer.__docgenInfo={description:``,displayName:`Card.Footer`,props:{}}}catch{}})),D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{g(),d(),m(),E(),D=r(),{expect:O,within:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/Card`,component:T,tags:[`autodocs`],argTypes:{spacing:{control:`radio`,options:[`none`,`md`,`lg`],description:"Internal padding + section rhythm. `none` uses divider-separated bands."}},parameters:{docs:{description:{component:"Card is a surface container — border, radius, and a subtle shadow — into\nwhich you compose whatever you need. It ships no fixed width and no built-in\ncontent: size it from the parent and fill it with the optional\n`Card.Header` / `Card.Body` / `Card.Footer` sections (or arbitrary children).\nThe `spacing` prop is the only visual knob: `md` / `lg` pad the card and gap\nits sections, while `none` turns the sections into divider-separated bands."}}}},j=()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(T.Header,{className:`flex-row items-center justify-between`,children:[(0,D.jsx)(p,{src:`https://i.pravatar.cc/96?img=47`,alt:`Ada Lovelace`,size:`lg`}),(0,D.jsx)(u,{variant:`ghost`,iconOnly:!0,"aria-label":`More options`,children:(0,D.jsx)(h,{})})]}),(0,D.jsxs)(T.Body,{children:[(0,D.jsx)(`p`,{className:`font-semibold text-text-default-base-primary`,children:`Ada Lovelace`}),(0,D.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Visionary mathematician and writer, known for her pioneering work on Charles Babbage's Analytical Engine.`})]}),(0,D.jsxs)(T.Footer,{children:[(0,D.jsx)(u,{children:`Follow`}),(0,D.jsx)(u,{variant:`secondary`,children:`Message`})]})]}),M={args:{spacing:`md`},render:e=>(0,D.jsx)(T,{...e,className:`w-100`,children:(0,D.jsx)(j,{})}),play:async({canvasElement:e})=>{let t=k(e);await O(e.querySelector(`[data-slot="card-root"]`)).toBeInTheDocument(),await O(e.querySelector(`[data-slot="card-header"]`)).toBeInTheDocument(),await O(e.querySelector(`[data-slot="card-body"]`)).toBeInTheDocument();let n=e.querySelector(`[data-slot="card-footer"]`);await O(n).toBeInTheDocument(),await O(k(n).getAllByRole(`button`)).toHaveLength(2),await O(t.getByText(`Ada Lovelace`)).toBeVisible()}},N={args:{spacing:`none`},render:e=>(0,D.jsx)(T,{...e,className:`w-100`,children:(0,D.jsx)(j,{})}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-slot="card-header"]`),n=e.querySelector(`[data-slot="card-body"]`),r=e.querySelector(`[data-slot="card-footer"]`);await O(t).toHaveClass(`border-b`),await O(n).toHaveClass(`p-6`),await O(r).toHaveClass(`border-t`)}},P={args:{spacing:`lg`},render:e=>(0,D.jsx)(T,{...e,className:`w-100`,children:(0,D.jsx)(j,{})})},F={args:{spacing:`md`},render:e=>(0,D.jsx)(T,{...e,className:`w-100`,children:(0,D.jsx)(`p`,{className:`text-text-default-base-primary`,children:`Put anything you want in here — the Card just provides the border, radius, and shadow.`})})},I={args:{spacing:`md`},render:e=>(0,D.jsx)(T,{...e,asChild:!0,className:`w-100`,children:(0,D.jsx)(`article`,{children:(0,D.jsx)(j,{})})}),play:async({canvasElement:e})=>{await O(e.querySelector(`[data-slot="card-root"]`)?.tagName).toBe(`ARTICLE`)}},L={render:()=>(0,D.jsxs)(`div`,{className:`flex flex-wrap items-start gap-6`,children:[(0,D.jsx)(T,{spacing:`none`,className:`w-80`,children:(0,D.jsx)(j,{})}),(0,D.jsx)(T,{spacing:`md`,className:`w-80`,children:(0,D.jsx)(j,{})}),(0,D.jsx)(T,{spacing:`lg`,className:`w-80`,children:(0,D.jsx)(j,{})})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'md'
  },
  render: args => <Card {...args} className="w-100">
            <SampleContent />
        </Card>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvasElement.querySelector('[data-slot="card-root"]');
    await expect(root).toBeInTheDocument();
    await expect(canvasElement.querySelector('[data-slot="card-header"]')).toBeInTheDocument();
    await expect(canvasElement.querySelector('[data-slot="card-body"]')).toBeInTheDocument();
    const footer = canvasElement.querySelector('[data-slot="card-footer"]');
    await expect(footer).toBeInTheDocument();
    await expect(within(footer as HTMLElement).getAllByRole('button')).toHaveLength(2);
    await expect(canvas.getByText('Ada Lovelace')).toBeVisible();
  }
}`,...M.parameters?.docs?.source},description:{story:"Default `md` spacing: padded card with gap-separated sections.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'none'
  },
  render: args => <Card {...args} className="w-100">
            <SampleContent />
        </Card>,
  play: async ({
    canvasElement
  }) => {
    const header = canvasElement.querySelector('[data-slot="card-header"]');
    const body = canvasElement.querySelector('[data-slot="card-body"]');
    const footer = canvasElement.querySelector('[data-slot="card-footer"]');
    await expect(header).toHaveClass('border-b');
    await expect(body).toHaveClass('p-6');
    await expect(footer).toHaveClass('border-t');
  }
}`,...N.parameters?.docs?.source},description:{story:'`spacing="none"`: zero root padding; sections become edge-to-edge bands split by dividers.',...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'lg'
  },
  render: args => <Card {...args} className="w-100">
            <SampleContent />
        </Card>
}`,...P.parameters?.docs?.source},description:{story:'`spacing="lg"`: roomier padding and gap for prominent surfaces.',...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'md'
  },
  render: args => <Card {...args} className="w-100">
            <p className="text-text-default-base-primary">
                Put anything you want in here — the Card just provides the border, radius, and shadow.
            </p>
        </Card>
}`,...F.parameters?.docs?.source},description:{story:`The foundation only — no sections, arbitrary children.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'md'
  },
  render: args => <Card {...args} asChild className="w-100">
            <article>
                <SampleContent />
            </article>
        </Card>,
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector('[data-slot="card-root"]');
    await expect(root?.tagName).toBe('ARTICLE');
  }
}`,...I.parameters?.docs?.source},description:{story:"`asChild` renders the card surface as a semantic element (here, an `<article>`).",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-start gap-6">
            <Card spacing="none" className="w-80">
                <SampleContent />
            </Card>
            <Card spacing="md" className="w-80">
                <SampleContent />
            </Card>
            <Card spacing="lg" className="w-80">
                <SampleContent />
            </Card>
        </div>
}`,...L.parameters?.docs?.source},description:{story:`All three spacing treatments side by side.`,...L.parameters?.docs?.description}}},R=[`Default`,`Sectioned`,`Large`,`FoundationOnly`,`AsChild`,`Spacings`]}))();export{I as AsChild,M as Default,F as FoundationOnly,P as Large,N as Sectioned,L as Spacings,R as __namedExportsOrder,A as default};