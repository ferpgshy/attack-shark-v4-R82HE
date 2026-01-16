import{s as r,a as b,r as u,j as e,a6 as k,a7 as C}from"./index.b078bf5f.js";import{C as w,B as y}from"./eb259a23.js";const z=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,_=r.div`
  background-color: var(--color-background-dark);
  color: var(--color-text-default);
  border-radius: 8px;
  padding: 24px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
`,S=r.h2`
  margin: 0 0 24px 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,g=r.div`
  margin-bottom: 16px;
`,m=r.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
`,B=r.input`
  background-color: var(--color-background-white);
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: var(--color-highlight-2);
  }
`,M=r.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: var(--color-highlight-2);
  }
`,D=r.div`
  padding: 8px 0;
  font-size: 14px;
`,L=({title:o,name:t,nameLabel:i,descriptionLabel:s,isNameEditable:n,onCancel:a,onConfirm:l,disableConfirm:c=!1})=>{const x=b(),[h,f]=u.useState(t),[p,v]=u.useState(""),j=()=>{l({name:n?h:void 0,description:p||void 0})};return e.jsx(z,{children:e.jsxs(_,{children:[e.jsx(w,{onClick:a,children:"×"}),e.jsx(S,{children:o}),e.jsxs(g,{children:[e.jsx(m,{children:i}),n?e.jsx(B,{type:"text",value:h,onChange:d=>f(d.target.value)}):e.jsx(D,{children:t})]}),e.jsx("div",{style:{borderBottom:"0.5px solid #D5D5D5",margin:"16px 0"}}),e.jsxs(g,{children:[e.jsx(m,{children:s}),e.jsx(M,{value:p,onChange:d=>v(d.target.value)})]}),e.jsxs(y,{children:[e.jsx(k,{onClick:a,disabled:c,text:x.取消}),e.jsx(C,{onClick:j,disabled:c,text:x.确认})]})]})})};var T=L;const N=o=>{const t=b();let i="",s="",n="",a="",l=!1;switch(o.type){case"config":i=t.分享配置||"分享配置",s=t.配置名称||"配置名称",n=o.name,a=t.配置描述||"配置描述",l=!1;break;case"macro":i=t.宏分享||"宏分享",s=t.宏名称||"宏名称",n=o.name,a=t.宏描述||"宏描述",l=!1;break;case"light":i=t.分享灯光||"分享灯光",s=t.灯光名称||"灯光名称",n=o.name,a=t.灯光描述||"灯光描述",l=!0;break;case"screen":i=t.分享屏幕||"分享屏幕",s=t.屏幕名称||"屏幕名称",n=o.name,a=t.屏幕描述||"屏幕描述",l=!0;break}return e.jsx("div",{children:o.show&&e.jsx(T,{title:i,nameLabel:s,name:n,onCancel:o.onCancel,onConfirm:o.onConfirm,descriptionLabel:a,isNameEditable:l})})};export{N as S};
