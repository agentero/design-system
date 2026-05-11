import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-CfUKPPcD.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{i,n as a,r as o,t as s}from"./lib-XMjO6GLr.js";var c,l,u,d,f,p,m=t((()=>{c=function(e){return e[e.Normal=0]=`Normal`,e[e.Dots=1]=`Dots`,e}({}),l=(e,t)=>{let n=t-e+1;return Array.from({length:n},(t,n)=>({number:n+e,type:c.Normal}))},u=1,d=1,f={number:0,type:c.Dots},p=({totalCount:e,pageSize:t,currentPage:n})=>{let r=Math.ceil(e/t);if(d+5>=r)return l(1,r);let i=Math.max(n-d,1),a=Math.min(n+d,r),o=i>2,s=a<r-2;if(!o&&s)return[...l(1,3+2*d),f,{number:r,type:c.Normal}];if(o&&!s){let e=l(r-(3+2*d)+1,r);return[{number:u,type:c.Normal},f,...e]}if(o&&s){let e=l(i,a);return[{number:u,type:c.Normal},f,...e,f,{number:r,type:c.Normal}]}return[]}})),h,g,_,v,y=t((()=>{h=r(),g=e=>(0,h.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,h.jsx)(`path`,{d:`M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z`})}),_=e=>(0,h.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,h.jsx)(`path`,{d:`M10.4539 12L14.5269 16.0731C14.6654 16.2115 14.7362 16.3856 14.7394 16.5952C14.7427 16.8048 14.6718 16.982 14.5269 17.1269C14.3821 17.2718 14.2064 17.3442 14 17.3442C13.7936 17.3442 13.618 17.2718 13.4731 17.1269L8.97892 12.6327C8.88532 12.5391 8.81929 12.4404 8.78084 12.3365C8.74238 12.2327 8.72314 12.1205 8.72314 12C8.72314 11.8795 8.74238 11.7673 8.78084 11.6635C8.81929 11.5596 8.88532 11.4609 8.97892 11.3673L13.4731 6.8731C13.6116 6.73463 13.7856 6.6638 13.9952 6.6606C14.2048 6.65738 14.3821 6.72821 14.5269 6.8731C14.6718 7.01796 14.7443 7.1936 14.7443 7.4C14.7443 7.6064 14.6718 7.78203 14.5269 7.9269L10.4539 12Z`})}),v=e=>(0,h.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,h.jsx)(`path`,{d:`M12.9462 12L8.87309 7.92689C8.73462 7.78844 8.66379 7.6144 8.66059 7.40479C8.65737 7.19519 8.7282 7.01795 8.87309 6.87309C9.01795 6.7282 9.19359 6.65576 9.39999 6.65576C9.60639 6.65576 9.78202 6.7282 9.92689 6.87309L14.4211 11.3673C14.5147 11.4609 14.5807 11.5596 14.6192 11.6635C14.6577 11.7673 14.6769 11.8795 14.6769 12C14.6769 12.1205 14.6577 12.2327 14.6192 12.3365C14.5807 12.4404 14.5147 12.5391 14.4211 12.6327L9.92689 17.1269C9.78844 17.2654 9.6144 17.3362 9.40479 17.3394C9.19519 17.3426 9.01795 17.2718 8.87309 17.1269C8.7282 16.982 8.65576 16.8064 8.65576 16.6C8.65576 16.3936 8.7282 16.218 8.87309 16.0731L12.9462 12Z`})});try{g.displayName=`IconHorizontalDots`,g.__docgenInfo={description:`Three-dot ellipsis glyph rendered inside the page list to indicate a
collapsed range between page numbers. The fill follows the surrounding
text color so it inherits the pagination button color tokens.`,displayName:`IconHorizontalDots`,props:{}}}catch{}try{_.displayName=`IconKeyboardArrowLeft`,_.__docgenInfo={description:`Left-chevron glyph rendered inside the previous-page icon button. The fill
follows the surrounding text color so it inherits the pagination button
color tokens.`,displayName:`IconKeyboardArrowLeft`,props:{}}}catch{}try{v.displayName=`IconKeyboardArrowRight`,v.__docgenInfo={description:`Right-chevron glyph rendered inside the next-page icon button. The fill
follows the surrounding text color so it inherits the pagination button
color tokens.`,displayName:`IconKeyboardArrowRight`,props:{}}}catch{}})),b,x,S,C=t((()=>{o(),s(),m(),y(),b=r(),x=i({slots:{root:`flex h-8 items-center justify-between gap-4`,summary:`text-base text-text-default-base-tertiary`,list:`flex items-center gap-2`,item:`flex min-w-8 h-8`,button:[`relative inline-flex items-center justify-center`,`text-sm font-semibold rounded-md cursor-pointer no-underline whitespace-nowrap`,`min-w-8 h-8 px-1`,`border border-solid border-transparent`,`bg-bg-button-ghost-enable text-text-button-ghost-enable`,`transition-[background-color,border-color,color] duration-200`,`disabled:pointer-events-none disabled:opacity-30`,`focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-[0.0625rem] focus-visible:outline-focus-ring-button-primary`,`hover:not-aria-[current=page]:border-border-button-secondary-enable hover:not-aria-[current=page]:shadow-1`,`[&_svg]:size-8 [&_svg]:-mx-2 [&_svg]:fill-current`],dots:`inline-flex size-8 items-center justify-center text-text-button-ghost-enable [&_svg]:size-4 [&_svg]:fill-current`},variants:{active:{true:{button:`bg-bg-button-ghost-hover border-bg-button-ghost-hover`}}}}),S=({onPageChange:e,totalCount:t,currentPage:n,pageSize:r,className:i})=>{let o=p({currentPage:n,totalCount:t,pageSize:r});if(n===0||o.length===0)return null;let s=()=>e(n+1),l=()=>e(n-1),u=o.length>=2,d=o[o.length-1].number,f=n*r-r+1,m=n*r>t?t:n*r,h=x();return(0,b.jsxs)(`nav`,{"aria-label":`Pagination`,className:a(h.root(),i),children:[(0,b.jsxs)(`span`,{className:h.summary(),children:[f,` - `,m,` of `,Intl.NumberFormat(`en-US`).format(t)]}),u&&(0,b.jsxs)(`ul`,{className:h.list(),children:[(0,b.jsx)(`li`,{className:h.item(),children:(0,b.jsx)(`button`,{type:`button`,onClick:l,disabled:n===1,"aria-label":`Go to previous page`,className:h.button(),children:(0,b.jsx)(_,{})})}),o.map(({number:t,type:r},i)=>r===c.Dots?(0,b.jsx)(`li`,{className:h.item(),children:(0,b.jsx)(`span`,{"aria-hidden":`true`,className:h.dots(),children:(0,b.jsx)(g,{})})},i):(0,b.jsx)(`li`,{className:h.item(),children:(0,b.jsx)(`button`,{type:`button`,onClick:()=>e(t),"aria-current":n===t?`page`:void 0,className:h.button({active:n===t}),children:Intl.NumberFormat(`en-US`).format(t)})},i)),(0,b.jsx)(`li`,{className:h.item(),children:(0,b.jsx)(`button`,{type:`button`,onClick:s,disabled:n===d,"aria-label":`Go to next page`,className:h.button(),children:(0,b.jsx)(v,{})})})]})]})};try{x.displayName=`paginationRecipe`,x.__docgenInfo={description:"Style recipe for Pagination using tailwind-variants. Multi-slot recipe that\nowns every element the component renders: the `root` `<nav>`, the entries\n`summary`, the `list` and per-page `item` wrappers, the page/prev/next\n`button`, and the ellipsis `dots` span. The `active` variant paints the\ncurrent page button.\n\nExported for advanced composition (e.g., styling a custom element to match\na Pagination slot). Prefer rendering the `Pagination` component.",displayName:`paginationRecipe`,props:{active:{defaultValue:null,description:``,name:`active`,required:!1,type:{name:`boolean`}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{S.displayName=`Pagination`,S.__docgenInfo={description:`Pagination is a 1-indexed paged navigation control with previous/next icon
buttons, numeric page buttons, and a leading "X - Y of Z" entries summary.
The page list collapses long ranges with \`…\` ellipses, keeping at most a
handful of buttons in view regardless of total page count. Use it whenever
a list, table, or grid is split across pages and the user needs direct
access to specific pages (not just prev/next).

The control short-circuits to \`null\` when \`currentPage === 0\` (legacy "off"
sentinel) or when there are no pages to show, so it's safe to mount
unconditionally above a list that may be empty.

Do **not** use Pagination for infinite-scroll feeds, sub-page-1 indexing
(the \`0\` value is reserved as the off-switch), or as a tab/segmented
control — it's strictly a page-of-pages affordance.`,displayName:`Pagination`,props:{onPageChange:{defaultValue:null,description:``,name:`onPageChange`,required:!0,type:{name:`(page: number) => void`}},totalCount:{defaultValue:null,description:``,name:`totalCount`,required:!0,type:{name:`number`}},currentPage:{defaultValue:null,description:``,name:`currentPage`,required:!0,type:{name:`number`}},pageSize:{defaultValue:null,description:``,name:`pageSize`,required:!0,type:{name:`number`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`string`}}}}}catch{}})),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;t((()=>{w=e(n(),1),C(),T=r(),{expect:E,fn:D,userEvent:O,within:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/Pagination`,component:S,tags:[`autodocs`],argTypes:{currentPage:{control:{type:`number`,min:0,step:1}},totalCount:{control:{type:`number`,min:0,step:10}},pageSize:{control:{type:`number`,min:1,step:1}},onPageChange:{table:{disable:!0}},className:{table:{disable:!0}}},args:{currentPage:1,totalCount:1e3,pageSize:10,onPageChange:e=>console.log(`onPageChange`,e)},parameters:{docs:{description:{component:`Pagination is a 1-indexed paged navigation control with previous/next icon
buttons, numeric page buttons, and a leading "X - Y of Z" entries summary.
The page list collapses long ranges with \`…\` ellipses so the control stays
compact regardless of total page count. Use it for lists, tables, or grids
that are split across pages.`}}}},j={args:{onPageChange:D()},argTypes:{onPageChange:{control:!1,action:`onPageChange`}},parameters:{a11y:{test:`error`}},play:async({canvasElement:e,args:t})=>{let n=k(e);await E(n.getByRole(`navigation`,{name:`Pagination`})).toBeInTheDocument(),await E(n.getByText(/1 - 10 of 1,000/)).toBeInTheDocument();let r=n.getByRole(`button`,{name:`Go to previous page`}),i=n.getByRole(`button`,{name:`Go to next page`});await E(r).toBeDisabled(),await E(i).toBeEnabled();let a=n.getByRole(`button`,{name:`1`}),o=n.getByRole(`button`,{name:`2`});await E(a).toHaveAttribute(`aria-current`,`page`),await E(o).not.toHaveAttribute(`aria-current`),await O.click(n.getByRole(`button`,{name:`3`})),await E(t.onPageChange).toHaveBeenLastCalledWith(3),await O.click(i),await E(t.onPageChange).toHaveBeenLastCalledWith(2)}},M={args:{currentPage:2,totalCount:30,pageSize:10}},N={args:{currentPage:2,totalCount:1e3,pageSize:10}},P={args:{currentPage:99,totalCount:1e3,pageSize:10}},F={args:{currentPage:50,totalCount:1e3,pageSize:10}},I={args:{currentPage:100,totalCount:1e3,pageSize:10,onPageChange:D()},argTypes:{onPageChange:{control:!1,action:`onPageChange`}},play:async({canvasElement:e,args:t})=>{let n=k(e),r=n.getByRole(`button`,{name:`Go to previous page`}),i=n.getByRole(`button`,{name:`Go to next page`});await E(r).toBeEnabled(),await E(i).toBeDisabled(),await E(n.getByRole(`button`,{name:`100`})).toHaveAttribute(`aria-current`,`page`),await O.click(r),await E(t.onPageChange).toHaveBeenLastCalledWith(99)}},L={render:({totalCount:e,pageSize:t})=>{let[n,r]=(0,w.useState)(1);return(0,T.jsx)(S,{currentPage:n,totalCount:e,pageSize:t,onPageChange:r})},play:async({canvasElement:e})=>{let t=k(e);await E(await t.findByRole(`button`,{current:`page`})).toHaveTextContent(`1`);let n=t.getByRole(`button`,{name:`Go to next page`});await O.click(n),await O.click(n),await E(await t.findByRole(`button`,{current:`page`})).toHaveTextContent(`3`),await E(t.getByText(/21 - 30 of 1,000/)).toBeInTheDocument()}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onPageChange: fn()
  },
  argTypes: {
    onPageChange: {
      control: false,
      action: 'onPageChange'
    }
  },
  parameters: {
    a11y: {
      test: 'error'
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const nav = canvas.getByRole('navigation', {
      name: 'Pagination'
    });
    await expect(nav).toBeInTheDocument();
    await expect(canvas.getByText(/1 - 10 of 1,000/)).toBeInTheDocument();
    const prev = canvas.getByRole('button', {
      name: 'Go to previous page'
    });
    const next = canvas.getByRole('button', {
      name: 'Go to next page'
    });
    await expect(prev).toBeDisabled();
    await expect(next).toBeEnabled();
    const page1 = canvas.getByRole('button', {
      name: '1'
    });
    const page2 = canvas.getByRole('button', {
      name: '2'
    });
    await expect(page1).toHaveAttribute('aria-current', 'page');
    await expect(page2).not.toHaveAttribute('aria-current');
    await userEvent.click(canvas.getByRole('button', {
      name: '3'
    }));
    await expect(args.onPageChange).toHaveBeenLastCalledWith(3);
    await userEvent.click(next);
    await expect(args.onPageChange).toHaveBeenLastCalledWith(2);
  }
}`,...j.parameters?.docs?.source},description:{story:`Default args playground. The first page of a 1,000-item list paged 10 at a
time — renders pages 1–5, an ellipsis, and the last page (100), with the
previous-page button disabled because we're on page 1.

@summary Default args playground for Pagination`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalCount: 30,
    pageSize: 10
  }
}`,...M.parameters?.docs?.source},description:{story:`Short list whose total pages fit in the visible window — no ellipsis is
rendered. Exercises the \`totalPageNumbers >= totalPageCount\` branch in
\`getPages\`.

@summary Short page list with no ellipsis collapse`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalCount: 1000,
    pageSize: 10
  }
}`,...N.parameters?.docs?.source},description:{story:`Current page sits near the start of the range — left ellipsis is hidden,
right ellipsis is shown, and the last page button anchors the right edge.

@summary Right-side ellipsis only (current page near start)`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 99,
    totalCount: 1000,
    pageSize: 10
  }
}`,...P.parameters?.docs?.source},description:{story:`Current page sits near the end of the range — left ellipsis is shown, right
ellipsis is hidden, and the first page button anchors the left edge.

@summary Left-side ellipsis only (current page near end)`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 50,
    totalCount: 1000,
    pageSize: 10
  }
}`,...F.parameters?.docs?.source},description:{story:`Current page sits in the middle of the range — both ellipses are visible,
with the first and last page buttons anchoring each edge.

@summary Both ellipses visible (current page in middle)`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 100,
    totalCount: 1000,
    pageSize: 10,
    onPageChange: fn()
  },
  argTypes: {
    onPageChange: {
      control: false,
      action: 'onPageChange'
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const prev = canvas.getByRole('button', {
      name: 'Go to previous page'
    });
    const next = canvas.getByRole('button', {
      name: 'Go to next page'
    });
    await expect(prev).toBeEnabled();
    await expect(next).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: '100'
    })).toHaveAttribute('aria-current', 'page');
    await userEvent.click(prev);
    await expect(args.onPageChange).toHaveBeenLastCalledWith(99);
  }
}`,...I.parameters?.docs?.source},description:{story:`Last page selected — the next-page button is disabled and the active page
indicator sits on the trailing number.

@summary Last page selected with disabled next button`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: ({
    totalCount,
    pageSize
  }) => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalCount={totalCount} pageSize={pageSize} onPageChange={setPage} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole('button', {
      current: 'page'
    })).toHaveTextContent('1');
    const next = canvas.getByRole('button', {
      name: 'Go to next page'
    });
    await userEvent.click(next);
    await userEvent.click(next);
    await expect(await canvas.findByRole('button', {
      current: 'page'
    })).toHaveTextContent('3');
    await expect(canvas.getByText(/21 - 30 of 1,000/)).toBeInTheDocument();
  }
}`,...L.parameters?.docs?.source},description:{story:`Interactive controlled example. Local \`useState\` owns the page; clicking a
page, previous, or next button updates it so the active page indicator and
entries summary follow along.

@summary Interactive controlled example backed by \`useState\``,...L.parameters?.docs?.description}}},R=[`Default`,`FewPages`,`DotsRight`,`DotsLeft`,`DotsBoth`,`LastPage`,`Controlled`]}))();export{L as Controlled,j as Default,F as DotsBoth,P as DotsLeft,N as DotsRight,M as FewPages,I as LastPage,R as __namedExportsOrder,A as default};