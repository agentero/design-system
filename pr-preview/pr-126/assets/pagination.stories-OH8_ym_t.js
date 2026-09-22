import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CetWM_i1.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./pagination-0uN0RzaQ.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{a=t(),r(),o=n(),{expect:s,fn:c,userEvent:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Pagination`,component:i,tags:[`autodocs`],argTypes:{currentPage:{control:{type:`number`,min:0,step:1}},totalCount:{control:{type:`number`,min:0,step:10}},pageSize:{control:{type:`number`,min:1,step:1}},onPageChange:{table:{disable:!0}},className:{table:{disable:!0}}},args:{currentPage:1,totalCount:1e3,pageSize:10,onPageChange:e=>console.log(`onPageChange`,e)},parameters:{docs:{description:{component:`Pagination is a 1-indexed paged navigation control with previous/next icon
buttons, numeric page buttons, and a leading "X - Y of Z" entries summary.
The page list collapses long ranges with \`…\` ellipses so the control stays
compact regardless of total page count. Use it for lists, tables, or grids
that are split across pages.`}}}},f={args:{onPageChange:c()},argTypes:{onPageChange:{control:!1,action:`onPageChange`}},parameters:{a11y:{test:`error`}},play:async({canvasElement:e,args:t})=>{let n=u(e),r=n.getByRole(`navigation`,{name:`Pagination`});await s(r).toBeInTheDocument(),await s(n.getByText(/1 - 10 of 1,000/)).toBeInTheDocument();let i=n.getByRole(`button`,{name:`Go to previous page`}),a=n.getByRole(`button`,{name:`Go to next page`});await s(i).toBeDisabled(),await s(a).toBeEnabled();let o=n.getByRole(`button`,{name:`1`}),c=n.getByRole(`button`,{name:`2`});await s(o).toHaveAttribute(`aria-current`,`page`),await s(c).not.toHaveAttribute(`aria-current`),await l.click(n.getByRole(`button`,{name:`3`})),await s(t.onPageChange).toHaveBeenLastCalledWith(3),await l.click(a),await s(t.onPageChange).toHaveBeenLastCalledWith(2)}},p={args:{currentPage:2,totalCount:30,pageSize:10}},m={args:{currentPage:2,totalCount:1e3,pageSize:10}},h={args:{currentPage:99,totalCount:1e3,pageSize:10}},g={args:{currentPage:50,totalCount:1e3,pageSize:10}},_={args:{currentPage:100,totalCount:1e3,pageSize:10,onPageChange:c()},argTypes:{onPageChange:{control:!1,action:`onPageChange`}},play:async({canvasElement:e,args:t})=>{let n=u(e),r=n.getByRole(`button`,{name:`Go to previous page`}),i=n.getByRole(`button`,{name:`Go to next page`});await s(r).toBeEnabled(),await s(i).toBeDisabled(),await s(n.getByRole(`button`,{name:`100`})).toHaveAttribute(`aria-current`,`page`),await l.click(r),await s(t.onPageChange).toHaveBeenLastCalledWith(99)}},v={render:({totalCount:e,pageSize:t})=>{let[n,r]=(0,a.useState)(1);return(0,o.jsx)(i,{currentPage:n,totalCount:e,pageSize:t,onPageChange:r})},play:async({canvasElement:e})=>{let t=u(e);await s(await t.findByRole(`button`,{current:`page`})).toHaveTextContent(`1`);let n=t.getByRole(`button`,{name:`Go to next page`});await l.click(n),await l.click(n),await s(await t.findByRole(`button`,{current:`page`})).toHaveTextContent(`3`),await s(t.getByText(/21 - 30 of 1,000/)).toBeInTheDocument()}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Default args playground. The first page of a 1,000-item list paged 10 at a
time — renders pages 1–5, an ellipsis, and the last page (100), with the
previous-page button disabled because we're on page 1.

@summary Default args playground for Pagination`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalCount: 30,
    pageSize: 10
  }
}`,...p.parameters?.docs?.source},description:{story:`Short list whose total pages fit in the visible window — no ellipsis is
rendered. Exercises the \`totalPageNumbers >= totalPageCount\` branch in
\`getPages\`.

@summary Short page list with no ellipsis collapse`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalCount: 1000,
    pageSize: 10
  }
}`,...m.parameters?.docs?.source},description:{story:`Current page sits near the start of the range — left ellipsis is hidden,
right ellipsis is shown, and the last page button anchors the right edge.

@summary Right-side ellipsis only (current page near start)`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 99,
    totalCount: 1000,
    pageSize: 10
  }
}`,...h.parameters?.docs?.source},description:{story:`Current page sits near the end of the range — left ellipsis is shown, right
ellipsis is hidden, and the first page button anchors the left edge.

@summary Left-side ellipsis only (current page near end)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 50,
    totalCount: 1000,
    pageSize: 10
  }
}`,...g.parameters?.docs?.source},description:{story:`Current page sits in the middle of the range — both ellipses are visible,
with the first and last page buttons anchoring each edge.

@summary Both ellipses visible (current page in middle)`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Last page selected — the next-page button is disabled and the active page
indicator sits on the trailing number.

@summary Last page selected with disabled next button`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Interactive controlled example. Local \`useState\` owns the page; clicking a
page, previous, or next button updates it so the active page indicator and
entries summary follow along.

@summary Interactive controlled example backed by \`useState\``,...v.parameters?.docs?.description}}},y=[`Default`,`FewPages`,`DotsRight`,`DotsLeft`,`DotsBoth`,`LastPage`,`Controlled`]})))()}b();export{v as Controlled,f as Default,g as DotsBoth,h as DotsLeft,m as DotsRight,p as FewPages,_ as LastPage,y as __namedExportsOrder,d as default};