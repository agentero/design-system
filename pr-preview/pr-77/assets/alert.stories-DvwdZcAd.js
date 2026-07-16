import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./alert-CPNqh8g4.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{a(),r(),u=t(),{expect:d,fn:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h=e=>(0,u.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,u.jsx)(`path`,{d:`M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2zm-2 18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h-4v1z`})}),g=[`neutral`,`success`,`danger`,`warning`,`info`,`creative`,`dynamic`,`playful`],_=[`sm`,`md`],v=({children:e})=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:e}),y={title:`Components/Alert`,component:l,tags:[`autodocs`],argTypes:{color:{control:`select`,options:g},size:{control:`radio`,options:_},ghost:{control:`boolean`},hasIcon:{control:`boolean`},onDismiss:{control:`boolean`},icon:{control:`select`,options:[`default`,`star`,`check`,`error`,`info`,`warning`],mapping:{default:void 0,star:o,check:s,error:i,info:n,warning:c}}},args:{color:`neutral`,size:`sm`,ghost:!1,hasIcon:!0},render:({onDismiss:e,...t})=>(0,u.jsx)(l,{...t,onDismiss:e?()=>{}:void 0,children:(0,u.jsxs)(l.Content,{children:[(0,u.jsx)(l.Title,{children:`Title`}),(0,u.jsx)(l.Paragraph,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]})}),parameters:{docs:{description:{component:"Alert surfaces feedback about outcomes or state changes — success, danger,\nwarning, or info. Compose it from `Alert.Content`, `Alert.Title`,\n`Alert.Paragraph`, `Alert.Actions`, and `Alert.Button` to build the layout\nyour flow needs. Eight colors, two sizes, and a ghost mode cover most\nfeedback scenarios."}}}},b={},x={args:{color:`neutral`}},S={args:{color:`success`}},C={args:{color:`danger`}},w={args:{color:`warning`}},T={args:{color:`info`}},E={args:{color:`creative`}},D={args:{color:`dynamic`}},O={args:{color:`playful`}},k={args:{color:`danger`,ghost:!0}},A={args:{size:`sm`}},j={args:{size:`md`}},M={args:{color:`warning`,onDismiss:f()},argTypes:{onDismiss:{control:!1,action:`onDismiss`}},render:e=>(0,u.jsx)(l,{...e,children:(0,u.jsxs)(l.Content,{children:[(0,u.jsx)(l.Title,{children:`Title`}),(0,u.jsx)(l.Paragraph,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]})}),play:async({canvasElement:e,args:t})=>{let n=m(e),r=n.getByRole(`alert`);await d(r).toHaveAttribute(`data-slot`,`alert-root`),await d(r).toHaveAccessibleName(`Title`);let i=n.getByRole(`button`,{name:`Dismiss`});await p.click(i),await d(t.onDismiss).toHaveBeenCalledTimes(1)}},N={args:{color:`info`},render:({onDismiss:e,...t})=>(0,u.jsxs)(l,{...t,onDismiss:e?()=>{}:void 0,children:[(0,u.jsxs)(l.Content,{children:[(0,u.jsx)(l.Title,{children:`Update available`}),(0,u.jsx)(l.Paragraph,{children:`Reload to apply the latest version.`})]}),(0,u.jsx)(l.Actions,{children:(0,u.jsx)(l.Button,{onClick:()=>{},children:`Reload`})})]})},P={args:{color:`warning`,size:`md`,onDismiss:(()=>{})},render:({onDismiss:e,...t})=>(0,u.jsxs)(l,{...t,onDismiss:e?()=>{}:void 0,children:[(0,u.jsxs)(l.Content,{children:[(0,u.jsx)(l.Title,{children:`Session expiring`}),(0,u.jsx)(l.Paragraph,{children:`Renew to continue editing.`})]}),(0,u.jsx)(l.Actions,{children:(0,u.jsx)(l.Button,{onClick:()=>{},children:`Renew session`})})]})},F={args:{color:`info`,hasIcon:!1}},I={args:{color:`creative`,icon:h}},L={args:{color:`success`},render:({onDismiss:e,...t})=>(0,u.jsx)(l,{...t,onDismiss:e?()=>{}:void 0,children:(0,u.jsxs)(l.Content,{children:[(0,u.jsx)(l.Title,{children:`Formatted content`}),(0,u.jsx)(l.ParagraphHtml,{html:`Review the <strong>terms</strong> or <a href='https://example.com'>read the docs</a>.`})]})})},R={args:{color:`info`,hasIcon:!1,size:`md`},render:({onDismiss:e,...t})=>(0,u.jsxs)(l,{...t,onDismiss:e?()=>{}:void 0,children:[(0,u.jsx)(l.Pictograms,{children:(0,u.jsxs)(`svg`,{viewBox:`0 0 64 64`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:[(0,u.jsx)(`circle`,{cx:`32`,cy:`32`,r:`28`,fill:`currentColor`,opacity:`0.15`}),(0,u.jsx)(`circle`,{cx:`32`,cy:`32`,r:`14`,fill:`currentColor`})]})}),(0,u.jsxs)(l.Content,{children:[(0,u.jsx)(l.Title,{children:`Pictogram example`}),(0,u.jsx)(l.Paragraph,{children:`Pictograms scale to 64×64px regardless of the configured size.`})]})]})},z={args:{color:`neutral`},render:({onDismiss:e,...t})=>(0,u.jsx)(l,{...t,onDismiss:e?()=>{}:void 0,children:(0,u.jsx)(l.Paragraph,{children:`This field is required.`})})},B={args:{color:`success`},render:({onDismiss:e,...t})=>(0,u.jsx)(l,{...t,onDismiss:e?()=>{}:void 0,children:(0,u.jsxs)(l.Content,{children:[(0,u.jsx)(l.Title,{children:`Upload complete`}),(0,u.jsx)(l.Paragraph,{children:`12 documents were added to the policy.`}),(0,u.jsx)(`div`,{children:(0,u.jsx)(l.Button,{onClick:()=>{},children:`View documents`})})]})})},V={render:()=>(0,u.jsx)(v,{children:g.map(e=>(0,u.jsx)(l,{color:e,children:(0,u.jsxs)(l.Content,{children:[(0,u.jsx)(l.Title,{children:e}),(0,u.jsxs)(l.Paragraph,{children:[`This is a `,e,` alert variant with the default icon.`]})]})},e))})},H={render:()=>(0,u.jsx)(v,{children:g.map(e=>(0,u.jsx)(l,{color:e,ghost:!0,children:(0,u.jsxs)(l.Content,{children:[(0,u.jsxs)(l.Title,{children:[e,` (ghost)`]}),(0,u.jsxs)(l.Paragraph,{children:[`This is a `,e,` ghost alert variant with the ghost icon color.`]})]})},e))})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `color`, `size`, `ghost`, `hasIcon`, and\n`onDismiss` from the Controls panel to explore every visual combination.\n\n@summary Default args playground for Alert",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  }
}`,...x.parameters?.docs?.source},description:{story:`Neutral color is the default and carries no strong semantic signal — use it
for generic inline information.

@summary Neutral color (default)`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success'
  }
}`,...S.parameters?.docs?.source},description:{story:`Success color confirms a positive outcome — saved record, completed task,
healthy state.

@summary Success color for positive outcomes`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'danger'
  }
}`,...C.parameters?.docs?.source},description:{story:`Danger color flags errors and destructive outcomes that require the user's
attention.

@summary Danger color for errors and destructive outcomes`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning'
  }
}`,...w.parameters?.docs?.source},description:{story:`Warning color signals caution — the user should review before proceeding.

@summary Warning color for cautionary feedback`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info'
  }
}`,...T.parameters?.docs?.source},description:{story:`Info color highlights tips, hints, or secondary informational content.

@summary Info color for informational highlights`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'creative'
  }
}`,...E.parameters?.docs?.source},description:{story:`Creative color uses a brand-aligned purple accent for marketing or
onboarding moments.

@summary Creative brand accent color`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'dynamic'
  }
}`,...D.parameters?.docs?.source},description:{story:`Dynamic color uses a brand-aligned orange accent for activity or
momentum-focused content.

@summary Dynamic brand accent color`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'playful'
  }
}`,...O.parameters?.docs?.source},description:{story:`Playful color uses a brand-aligned pink accent for lighter or celebratory
content.

@summary Playful brand accent color`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'danger',
    ghost: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Ghost mode removes the background and padding so the alert blends inline
with surrounding text (e.g., form field errors). Colors switch to the ghost
token ramp for lower visual weight.

@summary Ghost mode for inline, low-emphasis alerts`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...A.parameters?.docs?.source},description:{story:`Small size (default) uses compact padding and 14/12px typography — suitable
for inline alerts inside forms, tables, or cards.

@summary Small size (default, compact)`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...j.parameters?.docs?.source},description:{story:`Medium size uses larger padding and 18/14px typography — suitable for
standalone alerts in empty states, modals, or dedicated feedback regions.

@summary Medium size (prominent, standalone)`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    onDismiss: fn()
  },
  argTypes: {
    onDismiss: {
      control: false,
      action: 'onDismiss'
    }
  },
  render: args => <Alert {...args}>
            <Alert.Content>
                <Alert.Title>Title</Alert.Title>
                <Alert.Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert.Paragraph>
            </Alert.Content>
        </Alert>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByRole('alert');
    await expect(root).toHaveAttribute('data-slot', 'alert-root');
    await expect(root).toHaveAccessibleName('Title');
    const dismiss = canvas.getByRole('button', {
      name: 'Dismiss'
    });
    await userEvent.click(dismiss);
    await expect(args.onDismiss).toHaveBeenCalledTimes(1);
  }
}`,...M.parameters?.docs?.source},description:{story:`Dismissible alert. Providing \`onDismiss\` shows an icon-only close button
with \`aria-label="Dismiss"\` that inherits the alert's color.

@summary Alert with a dismiss button`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Content>
                <Alert.Title>Update available</Alert.Title>
                <Alert.Paragraph>Reload to apply the latest version.</Alert.Paragraph>
            </Alert.Content>
            <Alert.Actions>
                <Alert.Button onClick={() => {}}>Reload</Alert.Button>
            </Alert.Actions>
        </Alert>
}`,...N.parameters?.docs?.source},description:{story:'Alert with a trailing action pinned to the right edge. Use `Alert.Actions`\n+ `Alert.Button` for the common "message + action" pattern.\n\n@summary Alert with a trailing action button',...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    size: 'md',
    onDismiss: (() => {}) as never
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Content>
                <Alert.Title>Session expiring</Alert.Title>
                <Alert.Paragraph>Renew to continue editing.</Alert.Paragraph>
            </Alert.Content>
            <Alert.Actions>
                <Alert.Button onClick={() => {}}>Renew session</Alert.Button>
            </Alert.Actions>
        </Alert>
}`,...P.parameters?.docs?.source},description:{story:`Alert combining a dismiss button with a trailing action. Dismiss is pinned
to the right edge after the actions.

@summary Alert with both dismiss and action`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info',
    hasIcon: false
  }
}`,...F.parameters?.docs?.source},description:{story:`Alert rendered without the built-in color icon. Use \`hasIcon={false}\` when
the surrounding context already conveys the semantic intent.

@summary Alert without the default icon`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'creative',
    icon: IconLightbulb
  }
}`,...I.parameters?.docs?.source},description:{story:`Alert with a caller-supplied icon that replaces the default color icon. The
custom icon receives the slot-computed className so color tokens still
apply.

@summary Alert with a custom icon override`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Content>
                <Alert.Title>Formatted content</Alert.Title>
                <Alert.ParagraphHtml html="Review the <strong>terms</strong> or <a href='https://example.com'>read the docs</a>." />
            </Alert.Content>
        </Alert>
}`,...L.parameters?.docs?.source},description:{story:`Alert rendering a paragraph from pre-sanitized HTML via
\`Alert.ParagraphHtml\`. The caller is responsible for sanitizing the HTML
string before passing it in.

@summary Alert paragraph rendered from HTML`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info',
    hasIcon: false,
    size: 'md'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Pictograms>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.15" />
                    <circle cx="32" cy="32" r="14" fill="currentColor" />
                </svg>
            </Alert.Pictograms>
            <Alert.Content>
                <Alert.Title>Pictogram example</Alert.Title>
                <Alert.Paragraph>
                    Pictograms scale to 64×64px regardless of the configured size.
                </Alert.Paragraph>
            </Alert.Content>
        </Alert>
}`,...R.parameters?.docs?.source},description:{story:`Alert with a 64×64 pictogram in place of the inline icon. Use
\`Alert.Pictograms\` when the message benefits from a richer illustration.

@summary Alert with a pictogram illustration`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Paragraph>This field is required.</Alert.Paragraph>
        </Alert>
}`,...z.parameters?.docs?.source},description:{story:`Alert rendered with only a paragraph — no title. The root omits
\`aria-labelledby\` since there is no title to reference.

@summary Alert with only a paragraph body`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Content>
                <Alert.Title>Upload complete</Alert.Title>
                <Alert.Paragraph>12 documents were added to the policy.</Alert.Paragraph>
                <div>
                    <Alert.Button onClick={() => {}}>View documents</Alert.Button>
                </div>
            </Alert.Content>
        </Alert>
}`,...B.parameters?.docs?.source},description:{story:"Action button rendered inline below the paragraphs, inside\n`Alert.Content`, rather than pinned to the right via `Alert.Actions`.\n\n@summary Alert with actions placed below the content",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {COLORS.map(color => <Alert key={color} color={color}>
                    <Alert.Content>
                        <Alert.Title>{color}</Alert.Title>
                        <Alert.Paragraph>
                            This is a {color} alert variant with the default icon.
                        </Alert.Paragraph>
                    </Alert.Content>
                </Alert>)}
        </Stack>
}`,...V.parameters?.docs?.source},description:{story:`All eight colors in their primary (non-ghost) treatment, stacked for
comparison. Each alert uses the built-in icon mapping for its color.

@summary Visual comparison of all Alert colors`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {COLORS.map(color => <Alert key={color} color={color} ghost>
                    <Alert.Content>
                        <Alert.Title>{color} (ghost)</Alert.Title>
                        <Alert.Paragraph>
                            This is a {color} ghost alert variant with the ghost icon color.
                        </Alert.Paragraph>
                    </Alert.Content>
                </Alert>)}
        </Stack>
}`,...H.parameters?.docs?.source},description:{story:`All eight colors in ghost mode, stacked for comparison. Ghost alerts use a
lower-weight token ramp and omit background + padding.

@summary Visual comparison of all Alert colors in ghost mode`,...H.parameters?.docs?.description}}},U=[`Default`,`Neutral`,`Success`,`Danger`,`Warning`,`Info`,`Creative`,`Dynamic`,`Playful`,`Ghost`,`SmallSize`,`MediumSize`,`WithDismiss`,`WithActions`,`WithDismissAndAction`,`WithoutIcon`,`WithCustomIcon`,`WithParagraphHtml`,`WithPictograms`,`OnlyParagraph`,`WithActionsBelow`,`AllColors`,`AllGhostColors`]}))();export{V as AllColors,H as AllGhostColors,E as Creative,C as Danger,b as Default,D as Dynamic,k as Ghost,T as Info,j as MediumSize,x as Neutral,z as OnlyParagraph,O as Playful,A as SmallSize,S as Success,w as Warning,N as WithActions,B as WithActionsBelow,I as WithCustomIcon,M as WithDismiss,P as WithDismissAndAction,L as WithParagraphHtml,R as WithPictograms,F as WithoutIcon,U as __namedExportsOrder,y as default};