import{s as m,r as s,j as e,V as g,b6 as oe,d as i,a as Z,e as q,y as x,R as H,X as Y}from"./index.b078bf5f.js";import{R as ne}from"./18d64e70.js";const U=m.input(n=>({width:"302px",height:"29px",marginTop:"5px",padding:"0px 4px",outline:"none",border:"none",borderBottom:"1px solid #FFFFFF",color:n.textColor||"rgb(255, 255, 255)",backgroundColor:"transparent",fontFamily:"var(--font-family-regular)",fontSize:n.fontSize||"20px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",title:n.title||"","::placeholder":{color:n.placeholderColor||"white"},"::-ms-reveal":{display:"none"}})),_=n=>{const{isPasswordVisible:t,placeholder:p,onChange:f,maxLength:a=25,value:c,placeholderColor:r,textColor:h,fontSize:w,onKeyDown:v}=n,[F,C]=s.useState(!1);return e.jsx(U,{title:p,value:c,maxLength:a,type:t?"text":"password",onChange:l=>{f(l.target.value)},onFocus:()=>C(!0),onBlur:()=>C(!1),placeholder:F?"":p,placeholderColor:r,textColor:h,fontSize:w,onKeyDown:v})},W=n=>{const{isPasswordVisible:t,onClick:p}=n;return e.jsx(g,{type:"左右___主轴居中",style:{flex:"0 0 auto",cursor:"pointer"},onClick:()=>{p()},children:t?e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.984985 10C1.76832 5.73333 5.50665 2.5 9.99998 2.5C14.4933 2.5 18.2317 5.73333 19.0158 10C18.2325 14.2667 14.4933 17.5 9.99998 17.5C5.50665 17.5 1.76832 14.2667 0.984985 10ZM9.99998 14.1667C11.1051 14.1667 12.1649 13.7277 12.9463 12.9463C13.7277 12.1649 14.1667 11.1051 14.1667 10C14.1667 8.89493 13.7277 7.83512 12.9463 7.05372C12.1649 6.27232 11.1051 5.83333 9.99998 5.83333C8.89492 5.83333 7.83511 6.27232 7.05371 7.05372C6.27231 7.83512 5.83332 8.89493 5.83332 10C5.83332 11.1051 6.27231 12.1649 7.05371 12.9463C7.83511 13.7277 8.89492 14.1667 9.99998 14.1667ZM9.99998 12.5C9.33694 12.5 8.70106 12.2366 8.23222 11.7678C7.76338 11.2989 7.49999 10.663 7.49999 10C7.49999 9.33696 7.76338 8.70107 8.23222 8.23223C8.70106 7.76339 9.33694 7.5 9.99998 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 9.99998 12.5Z",fill:"#74EBD5"})}):e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.76665 4.94628L1.16165 2.34044L2.33999 1.16211L18.8392 17.6604L17.6608 18.8396L14.9025 16.0813C13.4366 17.011 11.7359 17.5033 9.99998 17.5004C5.50665 17.5004 1.76832 14.2671 0.984985 10.0004C1.34408 8.06025 2.31964 6.28771 3.76665 4.94628ZM12.2983 13.4771L11.0783 12.2571C10.6117 12.4804 10.0873 12.5534 9.57743 12.4661C9.06756 12.3788 8.59732 12.1355 8.23154 11.7697C7.86577 11.4039 7.62246 10.9337 7.53517 10.4238C7.44787 9.91396 7.52089 9.38957 7.74415 8.92294L6.52415 7.70294C5.99391 8.50418 5.75688 9.46405 5.85318 10.42C5.94948 11.376 6.37319 12.2693 7.05258 12.9487C7.73197 13.6281 8.62528 14.0518 9.58124 14.1481C10.5372 14.2444 11.4971 14.0073 12.2983 13.4771ZM6.64499 3.13378C7.68415 2.72544 8.81665 2.50044 9.99998 2.50044C14.4933 2.50044 18.2317 5.73378 19.0158 10.0004C18.7605 11.3888 18.1866 12.699 17.3392 13.8279L14.1225 10.6113C14.1519 10.4113 14.1667 10.2077 14.1667 10.0004C14.1668 9.40165 14.0378 8.80986 13.7886 8.2654C13.5393 7.72094 13.1757 7.2366 12.7223 6.84537C12.269 6.45414 11.7367 6.16521 11.1617 5.99826C10.5866 5.83132 9.98233 5.79028 9.38999 5.87794L6.64499 3.13378Z",fill:"#989898"})})})},J=({text:n,onClick:t,disabled:p})=>e.jsx("button",{onClick:t,disabled:p,style:{width:"341px",height:"54px",marginTop:"36px",background:p?"#D9D9D9":"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",borderRadius:"12px",border:"none",cursor:p?"not-allowed":"pointer"},children:e.jsx("span",{style:{width:"40px",height:"29px",fontFamily:"var(--font-family-primary)",fontStyle:"normal",fontWeight:400,fontSize:"20px",lineHeight:"29px",textAlign:"center",color:"#FFFFFF"},children:n})}),X=({text:n,onClick:t,disabled:p})=>e.jsx("button",{onClick:t,disabled:p,style:{position:"absolute",width:"341px",height:"54px",top:"388px",left:"29px",background:p?"#D9D9D9":"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",borderRadius:"12px",border:"none",cursor:p?"not-allowed":"pointer"},children:e.jsx("span",{style:{width:"40px",height:"29px",fontFamily:"var(--font-family-primary)",fontStyle:"normal",fontWeight:400,fontSize:"20px",lineHeight:"29px",textAlign:"center",color:"#FFFFFF"},children:n})}),ie=m.div`
  position: absolute;
  width: 399px;
  height: 399px;
  left: calc(50% - 399px / 2);
  top: 0px;
  background: #3e3e3e;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px;
`,Q=m.div`
  position: absolute;
  width: 399px;
  height: 488px;
  left: calc(50% - 399px / 2);
  top: 0px;
  background: #3e3e3e;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px;
`,re=m.div`
  // width: 80px;
  // height: 80px;
  // margin-top: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`,le=m.div`
  width: 72px;
  height: 35px;
  margin-top: 8px;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  background: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 4px;
  width: 309px;
  height: 29px;
  margin-top: 20px;
`;m.input`
  width: 301px;
  height: 29px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  outline: none;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  padding: 0px 4px;
  &::placeholder {
    color: #ffffff;
  }
`;const G=m.span`
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #74ebd5;
  cursor: pointer;
`,ae=m.div`
  display: flex;
  justify-content: space-between;
  width: 341px;
  margin-top: 14px;
`,ee=m.div`
  width: 72px;
  width: 100%;
  height: 35px;
  margin-top: 8px;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  background: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;m.input`
  width: 301px;
  height: 29px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  outline: none;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  padding: 0px 4px;
  &::placeholder {
    color: #ffffff;
  }
`;const de=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 341px;
  margin-top: 15px;
`;m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
`;m.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${n=>n.checked?"#74EBD5":"transparent"};
  border: 1px solid #74ebd5;
  position: relative;
  margin-right: 8px;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    background: #ffffff;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${n=>n.checked?"block":"none"};
  }
`;m.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;const te=({onClick:n})=>e.jsx("div",{style:{position:"absolute",left:"11px",top:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},onClick:n,children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),N=({onClick:n})=>e.jsx("div",{style:{position:"absolute",right:"11px",top:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},onClick:n,children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),$=m.div`
  display: flex;
  flex-direction: column;
  // gap: 13px;
  gap: 26px;
  width: 309px;
  height: 194;
`,V=m.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 309px;
  height: 29px;
`,K=()=>e.jsx(re,{children:e.jsx("img",{src:oe(i.getCurrentDevice().deviceType.company)+"/login_logo.png",alt:i.driverDisplayName,width:80})}),pe=n=>{const{email:t,setEmail:p,password:f,setPassword:a,isPasswordVisible:c,setIsPasswordVisible:r,onLogin:h,onForgotPassword:w,onRegister:v,onClose:F,isEmailInvalid:C}=n,l=Z(),[S,d]=s.useState(!1),[I,k]=s.useState(!1);return s.useEffect(()=>{f!==""&&(f.length<6||f.length>25||f.includes(" "))?k(!0):k(!1)},[f]),e.jsxs(ie,{children:[e.jsx(K,{}),e.jsx(le,{children:l.请登录||"请登录"}),e.jsx(N,{onClick:F}),e.jsxs(g,{type:"上下",style:{},children:[e.jsx(q,{type:"正文内容",text:l.邮箱||"邮箱"}),e.jsxs(g,{type:"上下",style:{position:"relative"},children:[e.jsx(U,{type:"email",value:t,onChange:j=>p(j.target.value),placeholder:S?"":l.邮箱||"邮箱",onFocus:()=>d(!0),onBlur:()=>d(!1)}),C&&e.jsx("span",{style:{position:"absolute",top:35,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:l.请输入正确的邮箱||"请输入正确的邮箱"})]}),e.jsxs(g,{type:"上下",style:{},children:[e.jsx(q,{type:"正文内容",text:l.密码||"密码"}),e.jsxs(g,{type:"左右",style:{position:"relative"},children:[e.jsx(_,{value:f,isPasswordVisible:c,placeholder:l.密码||"密码",onChange:a,onKeyDown:j=>{j.key==="Enter"&&h()},style:{}}),I&&e.jsx("span",{style:{position:"absolute",top:35,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:l.密码长度限制625个字符且不允许有空格||"密码长度限制6-25个字符且不允许有空格"}),e.jsx(g,{style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)"},children:e.jsx(W,{isPasswordVisible:c,onClick:()=>r(!c)})})]})]})]}),e.jsxs(g,{type:"上下",style:{},children:[e.jsx(J,{onClick:h,disabled:t===""||f===""||C||i.isWaitingServerResponse,text:i.isWaitingServerResponse?l.请稍候||"请稍候":l.登录||"登录"}),e.jsxs(ae,{children:[e.jsx(G,{onClick:v,children:l.尚未注册账号去注册||"尚未注册账号?去注册"}),e.jsx(G,{onClick:w,children:l.忘记密码||"忘记密码?"})]})]})]})},ce=n=>{const{email:t,setEmail:p,username:f,setUsername:a,isUsernameInvalid:c,password:r,setPassword:h,confirmPassword:w,setConfirmPassword:v,isPasswordVisible:F,setIsPasswordVisible:C,isConfirmPasswordVisible:l,setIsConfirmPasswordVisible:S,agreeToTerms:d,setAgreeToTerms:I,onRegister:k,onBack:j,onClose:T,isEmailInvalid:L}=n,u=Z(),[R,B]=s.useState(!1),[D,O]=s.useState(!1),[P,E]=s.useState(!1),[y,z]=s.useState(!1),[M,b]=s.useState(!1);return s.useEffect(()=>{r!==""&&(r.length<6||r.length>25||r.includes(" "))?E(!0):E(!1)},[r]),s.useEffect(()=>{z(w!==""&&w!==r)},[w,r]),e.jsxs(Q,{children:[e.jsx(te,{onClick:j}),e.jsx(N,{onClick:T}),e.jsx(K,{}),e.jsx(ee,{children:u.请注册||"请注册"}),M?e.jsx($,{children:e.jsx("div",{style:{whiteSpace:"pre-wrap",fontFamily:"var(--font-family-regular)",fontSize:"14px",width:"309px",height:"194px",overflowY:"auto",padding:"5px 10px"},children:u.用户协议内容||"用户协议内容"})}):e.jsxs($,{children:[e.jsx(V,{children:e.jsxs(g,{type:"上下",style:{position:"relative"},children:[e.jsx(U,{type:"email",value:t,onChange:o=>p(o.target.value),placeholder:R?"":u.邮箱||"邮箱",onFocus:()=>B(!0),onBlur:()=>B(!1)}),L&&e.jsx("span",{style:{position:"absolute",top:35,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:u.邮箱只允许字母数字下划线及连字符||"邮箱只允许字母、数字、下划线及连字符"})]})}),e.jsxs(V,{children:[e.jsx(U,{type:"text",value:f,onChange:o=>a(o.target.value),placeholder:D?"":u.用户名称||"用户名称",onFocus:()=>O(!0),onBlur:()=>O(!1)}),c&&e.jsx("span",{style:{position:"absolute",top:35,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:u.用户名长度限制420个字符且不允许有空格||"用户名长度限制4-20个字符且不允许有空格"})]}),e.jsx(V,{children:e.jsxs(g,{type:"左右",style:{position:"relative"},children:[e.jsx(_,{value:r,isPasswordVisible:F,placeholder:u.密码||"密码",onChange:h,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),P&&e.jsx("span",{style:{position:"absolute",top:35,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:u.密码长度限制625个字符且不允许有空格||"密码长度限制6-25个字符且不允许有空格"}),e.jsx(g,{style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)"},children:e.jsx(W,{isPasswordVisible:F,onClick:()=>C(!F)})})]})}),e.jsx(V,{children:e.jsxs(g,{type:"左右",style:{position:"relative"},children:[e.jsx(_,{value:w,isPasswordVisible:l,placeholder:u.确认密码||"确认密码",onChange:v,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),y&&e.jsx("span",{style:{position:"absolute",top:35,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:u.两次密码输入不一致||"两次密码输入不一致"}),e.jsx(g,{style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)"},children:e.jsx(W,{isPasswordVisible:l,onClick:()=>S(!l)})})]})})]}),e.jsx(de,{children:M?e.jsx(X,{onClick:()=>{b(!1),I(!d)},text:u.同意||"同意"}):e.jsxs(e.Fragment,{children:[e.jsx("button",{style:{position:"absolute",width:"341px",height:"54px",top:"388px",left:"29px",background:"transparent",zIndex:!d||i.isWaitingServerResponse?1:-10,cursor:"not-allowed",border:"none"},onClick:()=>{x.error(u.请同意用户协议||"请同意用户协议!",i.toastOptions)}}),e.jsx(X,{onClick:k,disabled:!d||i.isWaitingServerResponse,text:i.isWaitingServerResponse?u.请稍候||"请稍候":u.注册||"注册"})]})}),!M&&e.jsx(ne,{isSelected:d,onClick:()=>{d?I(!d):b(!0)},text:u.同意用户协议||"同意用户协议",textColor:"#74EBD5",style:{cursor:"pointer",position:"absolute",left:"192px",bottom:"16px",transform:"translateX(-50%)",fontSize:"12px",fontFamily:"var(--font-family-medium)",fontWeight:500}})]})},xe=n=>{const{email:t,setEmail:p,verificationCode:f,setVerificationCode:a,password:c,setPassword:r,confirmPassword:h,setConfirmPassword:w,onRequestVerificationCode:v,onSubmit:F,onBack:C,onClose:l,isEmailInvalid:S}=n,d=Z(),[I,k]=s.useState(!1),[j,T]=s.useState(!1),[L,u]=s.useState(!1),[R,B]=s.useState(!1),[D,O]=s.useState(!1),[P,E]=s.useState(!1),[y,z]=s.useState(0);s.useEffect(()=>{c!==""&&(c.length<6||c.length>25||c.includes(" "))?O(!0):O(!1)},[c]),s.useEffect(()=>{E(h!==""&&h!==c)},[h,c]),s.useEffect(()=>{let b;return y>0&&(b=setInterval(()=>{z(o=>o-1)},1e3)),()=>{b&&clearInterval(b)}},[y]);const M=()=>{S||t.length===0||y>0||(v(),z(60))};return e.jsxs(Q,{children:[e.jsx(te,{onClick:C}),e.jsx(N,{onClick:l}),e.jsx(K,{}),e.jsx(ee,{children:d.忘记密码||"忘记密码"}),e.jsxs($,{children:[e.jsx(V,{children:e.jsxs(g,{type:"上下",style:{position:"relative"},children:[e.jsx(U,{type:"email",value:t,onChange:b=>p(b.target.value),placeholder:I?"":d.邮箱||"邮箱",onFocus:()=>k(!0),onBlur:()=>k(!1)}),S&&e.jsx("span",{style:{position:"absolute",top:35,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:d.请输入正确的邮箱||"请输入正确的邮箱"})]})}),e.jsxs(V,{children:[e.jsx(U,{type:"text",value:f,onChange:b=>a(b.target.value),placeholder:j?"":d.验证码||"验证码",onFocus:()=>T(!0),onBlur:()=>T(!1)}),e.jsx("button",{onClick:M,disabled:y>0,style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:y>0?"#ccc":"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",borderRadius:"6px",border:"none",cursor:y>0?"not-allowed":"pointer",width:"140px",height:"32px",fontFamily:"var(--font-family-primary)",fontStyle:"normal",fontWeight:400,fontSize:"16px",lineHeight:"24px",color:"#FFFFFF"},children:y>0?`${y}s`:d.获取验证码||"获取验证码"})]}),e.jsx(V,{children:e.jsxs(g,{type:"左右",style:{position:"relative"},children:[e.jsx(_,{value:c,isPasswordVisible:L,placeholder:d.密码||"密码",onChange:r,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),D&&e.jsx("span",{style:{position:"absolute",top:35,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:d._6至25个字符之间包括字母和数字||"6至25个字符之间，包括字母和数字"}),e.jsx(g,{style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)"},children:e.jsx(W,{isPasswordVisible:L,onClick:()=>u(!L)})})]})}),e.jsx(V,{children:e.jsxs(g,{type:"左右",style:{position:"relative"},children:[e.jsx(_,{value:h,isPasswordVisible:R,placeholder:d.确认密码||"确认密码",onChange:w,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),P&&e.jsx(q,{type:"提示文本",style:{position:"absolute",top:35,color:"#ff4d4f"},text:d.两次密码输入不一致||"两次密码输入不一致"}),e.jsx(g,{style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)"},children:e.jsx(W,{isPasswordVisible:R,onClick:()=>B(!R)})})]})})]}),e.jsx(g,{type:"上下",style:{alignItems:"center",marginTop:"26px"},children:e.jsx(J,{onClick:F,disabled:!1,text:d.提交||"提交"})})]})},fe=n=>{const t=Z(),[p,f]=s.useState(i.logInOrRegisterPopUpInitialPage||"login"),[a,c]=s.useState(""),[r,h]=s.useState(""),[w,v]=s.useState(""),[F,C]=s.useState(!1),[l,S]=s.useState(""),[d,I]=s.useState(""),[k,j]=s.useState(!1),[T,L]=s.useState(!1),[u,R]=s.useState(!1),[B,D]=s.useState(!1);s.useEffect(()=>()=>{i.logInOrRegisterPopUpInitialPage="login"},[]),s.useEffect(()=>{c(""),h(""),S(""),v(""),I(""),C(!1),j(!1),L(!1),R(!1),D(!1)},[p]);const O=o=>{v(o),C(o!==""&&!/^\S{4,20}$/.test(o))},P=o=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o),E=o=>{c(o),D(o!==""&&!P(o))},y=async()=>{if(!a||!r){x.error(t.请填写完整信息||"请填写完整信息",i.toastOptions);return}if(!P(a)){x.error(t.邮箱格式不正确||"邮箱格式不正确",i.toastOptions);return}const o=await H.userLogin(Y,a,r);o.errCode===0?(i.currentUser=o.data,x.success(t.登录成功||"登录成功",i.toastOptions),n.onClose()):x.error(t[o.errMsg]||o.errMsg||t.登录失败||"登录失败",i.toastOptions)},z=async()=>{if(!a||!w||!r||!l){x.error(t.请填写完整信息||"请填写完整信息",i.toastOptions);return}if(!P(a)){x.error(t.邮箱格式不正确||"邮箱格式不正确",i.toastOptions);return}if(r!==l){x.error(t.两次密码输入不一致||"两次密码输入不一致",i.toastOptions);return}if(!u){x.error(t.请同意用户协议||"请同意用户协议",i.toastOptions);return}const o=await H.userRegister(Y,w,"male",a,r);if(o.errCode===0)x.success(t.注册成功||"注册成功",i.toastOptions),f("login");else if(typeof o.errMsg=="object"){const A=Object.getOwnPropertyNames(o.errMsg)[0],se=o.errMsg[A];x.error(t[se]||t[A]||t.注册失败||"注册失败",i.toastOptions)}else x.error(t[o.errMsg]||o.errMsg||t.注册失败||"注册失败",i.toastOptions)},M=async()=>{if(!a){x.error(t.请输入邮箱||"请输入邮箱",i.toastOptions);return}if(!P(a)){x.error(t.邮箱格式不正确||"邮箱格式不正确",i.toastOptions);return}const o=await H.reqFindPassVerifyCode(Y,a);o.errCode===0?x.success(t.验证码已发送||"验证码已发送",i.toastOptions):x.error(o.errMsg||t.验证码发送失败||"验证码发送失败",i.toastOptions)},b=async()=>{if(!a||!d||!r||!l){x.error(t.请填写完整信息||"请填写完整信息",i.toastOptions);return}if(!P(a)){x.error(t.请填写完整信息||"请填写完整信息",i.toastOptions);return}if(!P(a)){x.error(t.邮箱格式不正确||"邮箱格式不正确",i.toastOptions);return}const o=await H.findPassword(Y,a,d,r);o.errCode===0?(x.success(t.密码重置成功||"密码重置成功",i.toastOptions),f("login")):x.error(o.errMsg,i.toastOptions)};return e.jsx("div",{style:{position:"fixed",width:"100%",height:"100%",zIndex:9998},children:e.jsx("div",{style:{position:"fixed",width:"399px",left:"calc(50% - 399px/2)",top:"25%",background:"#3E3E3E",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",zIndex:9998},children:p==="login"?e.jsx(pe,{email:a,setEmail:E,password:r,setPassword:h,isPasswordVisible:k,setIsPasswordVisible:j,onLogin:y,onForgotPassword:()=>{f("forgotPassword"),c("")},onRegister:()=>{f("register"),c(""),h("")},onClose:n.onClose,isEmailInvalid:B}):p==="forgotPassword"?e.jsx(xe,{email:a,setEmail:E,verificationCode:d,setVerificationCode:I,password:r,setPassword:h,confirmPassword:l,setConfirmPassword:S,onRequestVerificationCode:M,onSubmit:b,onBack:()=>f("login"),onClose:n.onClose,isEmailInvalid:B}):p==="register"?e.jsx(ce,{email:a,setEmail:E,username:w,setUsername:O,isUsernameInvalid:F,password:r,setPassword:h,confirmPassword:l,setConfirmPassword:S,isPasswordVisible:k,setIsPasswordVisible:j,isConfirmPasswordVisible:T,setIsConfirmPasswordVisible:L,agreeToTerms:u,setAgreeToTerms:R,onRegister:z,onBack:()=>f("login"),onClose:n.onClose,isEmailInvalid:B,showAgreement:!0}):null})})},he=Object.freeze(Object.defineProperty({__proto__:null,LogInOrRegisterPopUp:fe},Symbol.toStringTag,{value:"Module"}));export{fe as L,_ as P,W as a,he as b};
