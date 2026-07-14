import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CnVz2yGL.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./pagination-CCjbq01j.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{o=t(n(),1),i(),s=r(),{expect:c,fn:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Pagination`,component:a,tags:[`autodocs`],argTypes:{currentPage:{control:{type:`number`,min:0,step:1}},totalCount:{control:{type:`number`,min:0,step:10}},pageSize:{control:{type:`number`,min:1,step:1}},onPageChange:{table:{disable:!0}},className:{table:{disable:!0}}},args:{currentPage:1,totalCount:1e3,pageSize:10,onPageChange:e=>console.log(`onPageChange`,e)},parameters:{docs:{description:{component:`Pagination is a 1-indexed paged navigation control with previous/next icon
buttons, numeric page buttons, and a leading "X - Y of Z" entries summary.
The page list collapses long ranges with \`…\` ellipses so the control stays
compact regardless of total page count. Use it for lists, tables, or grids
that are split across pages.`}}}},p={args:{onPageChange:l()},argTypes:{onPageChange:{control:!1,action:`onPageChange`}},parameters:{a11y:{test:`error`}},play:async({canvasElement:e,args:t})=>{let n=d(e);await c(n.getByRole(`navigation`,{name:`Pagination`})).toBeInTheDocument(),await c(n.getByText(/1 - 10 of 1,000/)).toBeInTheDocument();let r=n.getByRole(`button`,{name:`Go to previous page`}),i=n.getByRole(`button`,{name:`Go to next page`});await c(r).toBeDisabled(),await c(i).toBeEnabled();let a=n.getByRole(`button`,{name:`1`}),o=n.getByRole(`button`,{name:`2`});await c(a).toHaveAttribute(`aria-current`,`page`),await c(o).not.toHaveAttribute(`aria-current`),await u.click(n.getByRole(`button`,{name:`3`})),await c(t.onPageChange).toHaveBeenLastCalledWith(3),await u.click(i),await c(t.onPageChange).toHaveBeenLastCalledWith(2)}},m={args:{currentPage:2,totalCount:30,pageSize:10}},h={args:{currentPage:2,totalCount:1e3,pageSize:10}},g={args:{currentPage:99,totalCount:1e3,pageSize:10}},_={args:{currentPage:50,totalCount:1e3,pageSize:10}},v={args:{currentPage:100,totalCount:1e3,pageSize:10,onPageChange:l()},argTypes:{onPageChange:{control:!1,action:`onPageChange`}},play:async({canvasElement:e,args:t})=>{let n=d(e),r=n.getByRole(`button`,{name:`Go to previous page`}),i=n.getByRole(`button`,{name:`Go to next page`});await c(r).toBeEnabled(),await c(i).toBeDisabled(),await c(n.getByRole(`button`,{name:`100`})).toHaveAttribute(`aria-current`,`page`),await u.click(r),await c(t.onPageChange).toHaveBeenLastCalledWith(99)}},y={render:({totalCount:e,pageSize:t})=>{let[n,r]=(0,o.useState)(1);return(0,s.jsx)(a,{currentPage:n,totalCount:e,pageSize:t,onPageChange:r})},play:async({canvasElement:e})=>{let t=d(e);await c(await t.findByRole(`button`,{current:`page`})).toHaveTextContent(`1`);let n=t.getByRole(`button`,{name:`Go to next page`});await u.click(n),await u.click(n),await c(await t.findByRole(`button`,{current:`page`})).toHaveTextContent(`3`),await c(t.getByText(/21 - 30 of 1,000/)).toBeInTheDocument()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Default args playground. The first page of a 1,000-item list paged 10 at a
time — renders pages 1–5, an ellipsis, and the last page (100), with the
previous-page button disabled because we're on page 1.

@summary Default args playground for Pagination`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalCount: 30,
    pageSize: 10
  }
}`,...m.parameters?.docs?.source},description:{story:`Short list whose total pages fit in the visible window — no ellipsis is
rendered. Exercises the \`totalPageNumbers >= totalPageCount\` branch in
\`getPages\`.

@summary Short page list with no ellipsis collapse`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalCount: 1000,
    pageSize: 10
  }
}`,...h.parameters?.docs?.source},description:{story:`Current page sits near the start of the range — left ellipsis is hidden,
right ellipsis is shown, and the last page button anchors the right edge.

@summary Right-side ellipsis only (current page near start)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 99,
    totalCount: 1000,
    pageSize: 10
  }
}`,...g.parameters?.docs?.source},description:{story:`Current page sits near the end of the range — left ellipsis is shown, right
ellipsis is hidden, and the first page button anchors the left edge.

@summary Left-side ellipsis only (current page near end)`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 50,
    totalCount: 1000,
    pageSize: 10
  }
}`,..._.parameters?.docs?.source},description:{story:`Current page sits in the middle of the range — both ellipses are visible,
with the first and last page buttons anchoring each edge.

@summary Both ellipses visible (current page in middle)`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Last page selected — the next-page button is disabled and the active page
indicator sits on the trailing number.

@summary Last page selected with disabled next button`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Interactive controlled example. Local \`useState\` owns the page; clicking a
page, previous, or next button updates it so the active page indicator and
entries summary follow along.

@summary Interactive controlled example backed by \`useState\``,...y.parameters?.docs?.description}}},b=[`Default`,`FewPages`,`DotsRight`,`DotsLeft`,`DotsBoth`,`LastPage`,`Controlled`]}))();export{y as Controlled,p as Default,_ as DotsBoth,g as DotsLeft,h as DotsRight,m as FewPages,v as LastPage,b as __namedExportsOrder,f as default};