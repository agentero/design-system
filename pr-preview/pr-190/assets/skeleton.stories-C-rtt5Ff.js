import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./skeleton-DVVxKlZy.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Skeleton`,component:r,tags:[`autodocs`],argTypes:{className:{control:`text`}},args:{className:`h-4 w-40`},parameters:{docs:{description:{component:`Skeleton renders a pulsing placeholder box while content loads. Size and
shape it with Tailwind classes to mirror the content it stands in for.`}}}},c={play:async({canvasElement:e})=>{let t=o(e),n=e.querySelector(`[data-slot="skeleton"]`);await a(n).toBeInTheDocument(),await a(n).toHaveAttribute(`aria-hidden`,`true`),await a(t.queryByRole(`generic`,{hidden:!1,name:/./})).toBeNull()}},l={render:()=>(0,i.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,i.jsx)(r,{className:`h-4 w-full`}),(0,i.jsx)(r,{className:`h-4 w-full`}),(0,i.jsx)(r,{className:`h-4 w-2/3`})]})},u={render:()=>(0,i.jsxs)(`div`,{className:`flex w-80 items-center gap-3`,children:[(0,i.jsx)(r,{className:`size-10 shrink-0 rounded-full`}),(0,i.jsxs)(`div`,{className:`flex w-full flex-col gap-2`,children:[(0,i.jsx)(r,{className:`h-4 w-1/2`}),(0,i.jsx)(r,{className:`h-3 w-3/4`})]})]})},d={render:()=>(0,i.jsxs)(`div`,{className:`flex w-80 flex-col gap-3 rounded-lg border border-border-default-base-primary p-4`,children:[(0,i.jsx)(r,{className:`h-32 w-full rounded-md`}),(0,i.jsx)(r,{className:`h-5 w-1/2`}),(0,i.jsx)(r,{className:`h-4 w-full`}),(0,i.jsx)(r,{className:`h-4 w-2/3`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvasElement.querySelector('[data-slot="skeleton"]');
    await expect(skeleton).toBeInTheDocument();
    await expect(skeleton).toHaveAttribute('aria-hidden', 'true');
    await expect(canvas.queryByRole('generic', {
      hidden: false,
      name: /./
    })).toBeNull();
  }
}`,...c.parameters?.docs?.source},description:{story:"Default placeholder box, sized via `className`; hidden from assistive technologies.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
        </div>
}`,...l.parameters?.docs?.source},description:{story:`Compose plain skeletons to sketch the loading shape of real content.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 items-center gap-3">
            <Skeleton className="size-10 shrink-0 rounded-full" />
            <div className="flex w-full flex-col gap-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
            </div>
        </div>
}`,...u.parameters?.docs?.source},description:{story:"`rounded-full` for avatars; pair with text lines for a list-item placeholder.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-3 rounded-lg border border-border-default-base-primary p-4">
            <Skeleton className="h-32 w-full rounded-md" />
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
        </div>
}`,...d.parameters?.docs?.source},description:{story:`A card-shaped placeholder: media area, title, and body lines.`,...d.parameters?.docs?.description}}},f=[`Default`,`TextBlock`,`ListItem`,`Card`]})))()}p();export{d as Card,c as Default,u as ListItem,l as TextBlock,f as __namedExportsOrder,s as default};