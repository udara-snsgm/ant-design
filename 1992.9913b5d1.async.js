(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1992],{438746:function(Ce,W,t){"use strict";t.d(W,{Z:function(){return O}});var X=t(97857),x=t.n(X),r=t(952677),g=t.n(r),U=t(805574),E=t.n(U),w=t(385956),h=t(667294),H=t(302559);function j(D){return D.replace("-cn","").replace(/\/$/,"")}function O(){var D=(0,w.useLocation)(),R=D.search,b=(0,H.default)(),C=E()(b,2),l=C[1],p=h.useCallback(function(v,c){var d=j(v);if(l==="cn"&&(d="".concat(d,"-cn")),R&&(d="".concat(d).concat(R)),c){var m;g()(c)==="object"?m=c[l]:m=c,d="".concat(d,"#").concat(m)}return d},[l,R]);return x()(x()({},D),{},{pathname:j(D.pathname),getLink:p})}},858992:function(Ce,W,t){"use strict";t.r(W),t.d(W,{default:function(){return at}});var X=t(97857),x=t.n(X),r=t(667294),g=t(385956),U=t(9783),E=t.n(U),w=t(168400),h=t.n(w),H=t(805574),j=t.n(H),O=t(639389),D=t.n(O),R=t(944226),b=t(11739),C=t(879587),l=t(106750),p=t(707898),v=t(647759),c=t(693967),d=t.n(c),m=t(826961),Z=t.n(m),Y=t(438746),e=t(785893),a=function(n){var o=n.children;return(0,e.jsx)("div",{className:"browser-mockup with-url",children:o})},M=a,K=function(n){var o=n.children,s=(0,r.useState)(!1),u=j()(s,2),y=u[0],T=u[1];return(0,r.useLayoutEffect)(function(){T(!0)},[]),y?o:null},L=K,me=function(){return(0,e.jsx)("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:(0,e.jsx)("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})})},ie=function(n){return(0,e.jsx)(D(),x()({component:me},n))},je=ie,Be=t(941346),Le=t(259696),se=t(468990),Ze=t(224292),Fe=t.n(Ze),ce=t(626826),ze=t(915660),G=t.n(ze),Se=t(524229),Ue=t(728207),be=t(302559),Ke=t(965516),de=function(n){var o=n.error,s=Ke.Z.useToken(),u=s.token;return o?(0,e.jsx)(b.Z,{banner:!0,type:"error",message:o.toString(),style:{color:u.colorError}}):null},ve=de,Ee,pe,De=(0,v.kc)(function(i){var n=i.token,o=i.css,s=n.colorBgContainer,u=n.colorIcon;return{editor:o(Ee||(Ee=h()([`
      // override dumi editor styles
      .dumi-default-source-code-editor {
        .dumi-default-source-code {
          background: `,`;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre,
        .dumi-default-source-code-editor-textarea {
          padding: `,"px ",`px;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre {
          font-size: `,`px;
          line-height: 2;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        // disable dumi default copy button
        .dumi-default-source-code-copy {
          display: none;
        }

        &::after {
          border-radius: 0 !important;
        }

        &:hover:not(:focus-within) {
          &::after {
            box-shadow: 0 0 0 1px `,` inset;
          }
        }
      }
    `])),s,n.paddingSM,n.padding,n.fontSize,n.colorPrimaryBorderHover),editableIcon:o(pe||(pe=h()([`
      position: absolute;
      z-index: 2;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 16px;
      inset-inline-end: 56px;
      color: `,`;
    `])),u)}}),Ve={cn:{demoEditable:"\u7F16\u8F91 Demo \u53EF\u5B9E\u65F6\u9884\u89C8"},en:{demoEditable:"Edit demo with real-time preview"}},Me="hide-live-demo-tip",Pe=function(n){var o=(0,r.useState)(!1),s=j()(o,2),u=s[0],y=s[1],T=De(),F=T.styles,P=(0,be.default)(Ve),I=j()(P,1),z=I[0];(0,r.useEffect)(function(){var k=!localStorage.getItem(Me);k&&y(!0)},[]);var N=function($){y($),$||localStorage.setItem(Me,"true")};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:F.editor,children:[(0,e.jsx)(Ue.Z,{lang:n.lang,initialValue:n.initialValue,onChange:n.onChange}),(0,e.jsx)(ve,{error:n.error})]}),(0,e.jsx)(C.Z,{title:z.demoEditable,open:u,onOpenChange:N,children:(0,e.jsx)(O.EditFilled,{className:F.editableIcon})})]})},fe=Pe,Oe,Re,ge,Te=(0,v.kc)(function(i){var n=i.token,o=i.css,s=n.colorIcon,u=n.antCls;return{code:o(Oe||(Oe=h()([`
      position: relative;
      margin-top: -`,`px;
    `])),n.margin),copyButton:o(Re||(Re=h()([`
      color: `,`;
      position: absolute;
      z-index: 2;
      top: 16px;
      inset-inline-end: `,`px;
      width: 32px;
      text-align: center;
      padding: 0;
    `])),s,n.padding),copyIcon:o(ge||(ge=h()([`
      `,`-typography-copy {
        position: relative;
        margin-inline-start: 0;

        // expand clickable area
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          left: -9px;
          bottom: -5px;
          right: -9px;
        }
      }
      `,"-typography-copy:not(",`-typography-copy-success) {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }
    `])),u,u,u,s,s)}}),We={tsx:"TypeScript",jsx:"JavaScript",style:"CSS"};function He(i){return Fe()(i,[[function(n){return ce.isElement(n)&&ce.getTagName(n)==="pre"},function(n,o){var s=ce.getAttributes(n);return(0,e.jsx)("pre",{className:"language-".concat(s.lang),children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:s.highlighted}})},o)}]])}var Ge=function(n){var o=n.sourceCode,s=o===void 0?"":o,u=n.jsxCode,y=u===void 0?"":u,T=n.styleCode,F=T===void 0?"":T,P=n.entryName,I=n.onSourceChange,z=n.error,N={};s&&(N.tsx=""),y&&(N.jsx=""),F&&(N.style="");var k=r.useState(N),$=j()(k,2),ee=$[0],ne=$[1],te=(0,r.useContext)(Se.Z),xe=te.codeType,oe=te.setCodeType,J={tsx:s==null?void 0:s.trim(),jsx:y==null?void 0:y.trim(),style:F==null?void 0:F.trim()};(0,r.useEffect)(function(){var S={tsx:G().highlight(s,G().languages.javascript,"jsx"),jsx:G().highlight(y,G().languages.javascript,"jsx"),style:G().highlight(F,G().languages.css,"css")};Object.keys(S).forEach(function(re){S[re]||delete S[re]}),ne(S)},[y,s,F]);var Q=Object.keys(ee),A=Te(),_=A.styles,Ie=(0,r.useMemo)(function(){return Q.map(function(S){return{label:We[S],key:S,children:(0,e.jsxs)("div",{className:_.code,children:[S==="tsx"?(0,e.jsx)(fe,{error:z,lang:S,initialValue:J[S],onChange:function(ke){I==null||I(E()({},P,ke))}}):He(["pre",{lang:S,highlighted:ee[S]}]),(0,e.jsx)(Be.ZP,{type:"text",className:_.copyButton,children:(0,e.jsx)(Le.Z.Text,{className:_.copyIcon,copyable:{text:J[S]}})})]})}})},[JSON.stringify(ee),_.code,_.copyButton,_.copyIcon]);return Q.length?Q.length===1?(0,e.jsx)(fe,{error:z,lang:Q[0],initialValue:J[Q[0]],onChange:function(re){I==null||I(E()({},P,re))}}):(0,e.jsx)(se.Z,{centered:!0,className:"highlight",activeKey:xe,onChange:oe,items:Ie}):null},$e=Ge,Rn=function(){return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})})},Tn=function(n){return(0,e.jsx)(D(),x()({component:Rn},n))},In=Tn,Nn=t(148050),An=function(n){var o=n.color,s=o===void 0?"currentColor":o;return(0,e.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:s,children:[(0,e.jsx)("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),(0,e.jsx)("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"})]})},Bn=function(n){return(0,e.jsx)(D(),x()({component:An},n))},Zn=Bn,Fn=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 14",fill:"currentColor",children:(0,e.jsx)("path",{d:"M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z"})})},zn=function(n){return(0,e.jsx)(D(),x()({component:Fn},n))},Un=zn,Kn=t(438199),Vn=t(373638),nn,Wn=b.Z.ErrorBoundary;function Hn(i){return Z().compressToBase64(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}var he=function(n){var o=n.type,s=n.demo;window.gtag&&window.gtag("event","demo",{event_category:o,event_label:s})},we;function Gn(){var i=(0,r.useState)(!1),n=j()(i,2),o=n[0],s=n[1];return(0,r.useEffect)(function(){var u;(u=we)!==null&&u!==void 0||(we=new Promise(function(y){(0,Vn.qE)(function(T){return y(T!=="timeout"&&T!=="error")})})),we.then(s)},[]),o}var $n=(0,v.kc)(function(i){var n=i.token,o=n.borderRadius;return{codeHideBtn:(0,v.iv)(nn||(nn=h()([`
      position: sticky;
      bottom: 0;
      z-index: 1;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 `,"px ",`px;
      border-top: 1px solid `,`;
      color: `,`;
      transition: all `,` ease-in-out;
      background-color: `,`;
      cursor: pointer;
      &:hover {
        color: `,`;
      }
      span {
        margin-inline-end: `,`px;
      }
    `])),o,o,n.colorSplit,n.colorTextSecondary,n.motionDurationMid,n.colorBgElevated,n.colorPrimary,n.marginXXS)}}),wn=function(n){var o=n.asset,s=n.expand,u=n.iframe,y=n.demoUrl,T=n.children,F=n.title,P=n.description,I=n.originDebug,z=n.jsx,N=n.style,k=n.compact,$=n.background,ee=n.filename,ne=n.version,te=n.simplify,xe=n.clientOnly,oe=n.pkgDependencyList,J=(0,r.useContext)(Se.Z),Q=J.showDebug,A=J.codeType,_=(0,g.useSiteData)(),Ie=_.pkg,S=(0,Y.Z)(),re=$n(),ke=re.styles,mn="index.tsx",vn=o.dependencies[mn].value,it=Gn(),Je=(0,r.useRef)(null),pn=(0,r.useRef)(null),Xe=(0,g.useLiveDemo)(o.id,{iframe:!!u,containerRef:pn}),st=Xe.node,ct=Xe.error,dt=Xe.setSource,fn=(0,r.useRef)(null),gn=(0,r.useRef)(null),hn=(0,r.useRef)(null),xn=(0,r.useRef)(null),lt=(0,r.useState)(!1),yn=j()(lt,2),le=yn[0],Ye=yn[1],ut=(0,r.useContext)(Kn.Z),ae=ut.theme,mt=S.hash,vt=S.pathname,pt=S.search,ft="https://ant.design".concat(vt).concat(pt,"#").concat(o.id),gt=(0,r.useState)(!1),Cn=j()(gt,2),ht=Cn[0],xt=Cn[1];(0,r.useEffect)(function(){var f=/preview-(\d+)-ant-design/;xt(f.test(window.location.hostname))},[]);var jn=function(B){Ye(function(ue){return!ue}),he({type:"expand",demo:B})};(0,r.useEffect)(function(){if(o.id===mt.slice(1)){var f;(f=fn.current)===null||f===void 0||f.click()}},[]),(0,r.useEffect)(function(){Ye(s)},[s]);var yt=!u&&xe?(0,e.jsx)(L,{children:T}):T;Je.current||(Je.current=u?(0,e.jsx)(M,{children:(0,e.jsx)("iframe",{src:y,height:u===!0?void 0:u,title:"demo",className:"iframe-demo"})}):yt);var Ct=d()("code-box",{expand:le,"code-box-debug":I,"code-box-simplify":te}),ye=F,jt=d()("highlight-wrapper",{"highlight-wrapper-expand":le}),Qe=`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="theme-color" content="#000000">
        </head>
        <body>
          <div id="container" style="padding: 24px" />
          <script>const mountNode = document.getElementById('container');<\/script>
        </body>
      </html>
    `,Lt={compilerOptions:{target:"esnext",module:"esnext",esModuleInterop:!0,moduleResolution:"node",jsx:"react",jsxFactory:"React.createElement",jsxFragmentFactory:"React.Fragment"}},q=A==="tsx"?"tsx":"js",V=z.split(`
`).reduce(function(f,B){var ue=B.match(/import .+? from '(.+)';$/);if(ue!=null&&ue[1]){var _e,qe,Ae=ue[1].split("/"),en=Ae[0].startsWith("@")?"".concat(Ae[0],"/").concat(Ae[1]):Ae[0];(_e=f[en])!==null&&_e!==void 0||(f[en]=(qe=oe[en])!==null&&qe!==void 0?qe:"latest")}return f},{antd:Ie.version});V["@ant-design/icons"]="latest",q==="tsx"&&(V["@types/react"]="^18.0.0",V["@types/react-dom"]="^18.0.0"),V.react="^18.0.0",V["react-dom"]="^18.0.0";var St={title:"".concat(ye," - antd@").concat(V.antd),html:Qe,js:`const { createRoot } = ReactDOM;
`.concat(z.replace(/import\s+(?:React,\s+)?{(\s+[^}]*\s+)}\s+from\s+'react'/,"const { $1 } = React;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'antd';/,"const { $1 } = antd;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'@ant-design\/icons';/,"const { $1 } = icons;").replace("import moment from 'moment';","").replace("import React from 'react';","").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router';/,"const { $1 } = ReactRouter;").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router-dom';/,"const { $1 } = ReactRouterDOM;").replace(/([A-Za-z]*)\s+as\s+([A-Za-z]*)/,"$1:$2").replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),editors:"001",css:"",js_external:["react@18/umd/react.development.js","react-dom@18/umd/react-dom.development.js","dayjs@1/dayjs.min.js","antd@".concat(Ie.version,"/dist/antd-with-locales.min.js"),"@ant-design/icons/dist/index.umd.js","react-router-dom/dist/umd/react-router-dom.production.min.js","react-router/dist/umd/react-router.production.min.js"].map(function(f){return"https://unpkg.com/".concat(f)}).join(";"),js_pre_processor:"typescript"},bt={title:"".concat(ye," - antd@").concat(V.antd),js:"".concat(/import React(\D*)from 'react';/.test(z)?"":`import React from 'react';
`,`import { createRoot } from 'react-dom/client';
`).concat(z.replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),css:"",json:JSON.stringify({name:"antd-demo",dependencies:V},null,2)},Ne=q==="tsx"?vn:z,Ln="import React from 'react';",Sn=/import React(\D*)from 'react';/,bn=Ne.match(Sn);if(bn){var Et=j()(bn,1);Ln=Et[0],Ne=Ne.replace(Sn,"").trim()}var En=`
`.concat(Ln,`
import './index.css';
`).concat(Ne,`
    `).trim(),Dn=(N||"").trim().replace(new RegExp("#".concat(o.id,"\\s*"),"g"),"").replace("</style>","").replace("<style>",""),Mn=`import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('container')).render(<Demo />);
  `,Dt={title:"".concat(ye," - antd@").concat(V.antd),main:"index.js",dependencies:x()(x()({},V),{},{"rc-util":oe["rc-util"],react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"}),devDependencies:{typescript:"^5.0.2"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead"]},Mt={files:E()(E()(E()({"package.json":{content:Dt},"index.css":{content:Dn}},"index.".concat(q),{content:Mn}),"demo.".concat(q),{content:En}),"index.html",{content:Qe})},Pn={title:"".concat(ye," - antd@").concat(V.antd),template:"create-react-app",dependencies:V,description:"",files:E()(E()(E()({"index.css":Dn},"index.".concat(q),Mn),"demo.".concat(q),En),"index.html",Qe)};q==="tsx"&&(Pn.files["tsconfig.json"]=JSON.stringify(Lt,null,2));var Pt=ae.includes("dark")?"#303030":"#f0f2f5",Ot={padding:u||k?0:void 0,overflow:u||k?"hidden":void 0,backgroundColor:$==="grey"?Pt:void 0},On=(0,e.jsxs)("section",{className:Ct,id:o.id,children:[(0,e.jsx)("section",{className:"code-box-demo",style:Ot,ref:pn,children:st||(0,e.jsx)(Wn,{children:(0,e.jsx)(r.StrictMode,{children:Je.current})})}),!te&&(0,e.jsxs)("section",{className:"code-box-meta markdown",children:[(0,e.jsxs)("div",{className:"code-box-title",children:[(0,e.jsx)(C.Z,{title:I?(0,e.jsx)(g.FormattedMessage,{id:"app.demo.debug"}):"",children:(0,e.jsx)("a",{href:"#".concat(o.id),ref:fn,children:ye})}),(0,e.jsx)(Nn.default,{title:(0,e.jsx)(g.FormattedMessage,{id:"app.content.edit-demo"}),filename:ee})]}),P&&(0,e.jsx)("div",{className:"code-box-description",dangerouslySetInnerHTML:{__html:P}}),(0,e.jsxs)(l.Z,{wrap:!0,gap:"middle",className:"code-box-actions",children:[ht&&(0,e.jsx)(C.Z,{title:(0,e.jsx)(g.FormattedMessage,{id:"app.demo.online"}),children:(0,e.jsx)("a",{className:"code-box-code-action",target:"_blank",rel:"noreferrer",href:ft,children:(0,e.jsx)(O.LinkOutlined,{"aria-label":"open in new tab",className:"code-box-online"})})}),it?(0,e.jsxs)("form",{className:"code-box-code-action",action:"//riddle.alibaba-inc.com/riddles/define",method:"POST",target:"_blank",ref:hn,onClick:function(){var B;he({type:"riddle",demo:o.id}),(B=hn.current)===null||B===void 0||B.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(bt)}),(0,e.jsx)(C.Z,{title:(0,e.jsx)(g.FormattedMessage,{id:"app.demo.riddle"}),children:(0,e.jsx)(Un,{className:"code-box-riddle"})})]}):null,(0,e.jsx)(C.Z,{title:(0,e.jsx)(g.FormattedMessage,{id:"app.demo.stackblitz"}),children:(0,e.jsx)("span",{className:"code-box-code-action",onClick:function(){he({type:"stackblitz",demo:o.id}),R.Z.openProject(Pn,{openFile:["demo.".concat(q)]})},children:(0,e.jsx)(O.ThunderboltOutlined,{className:"code-box-stackblitz",style:{transform:"scale(1.2)"}})})}),(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",ref:xn,onClick:function(){var B;he({type:"codepen",demo:o.id}),(B=xn.current)===null||B===void 0||B.submit()},children:[(0,e.jsx)(L,{children:(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(St)})}),(0,e.jsx)(C.Z,{title:(0,e.jsx)(g.FormattedMessage,{id:"app.demo.codepen"}),children:(0,e.jsx)(je,{className:"code-box-codepen"})})]}),Q&&(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank",ref:gn,onClick:function(){var B;he({type:"codesandbox",demo:o.id}),(B=gn.current)===null||B===void 0||B.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"parameters",value:Hn(JSON.stringify(Mt))}),(0,e.jsx)(C.Z,{title:(0,e.jsx)(g.FormattedMessage,{id:"app.demo.codesandbox"}),children:(0,e.jsx)(In,{className:"code-box-codesandbox"})})]}),(0,e.jsx)(C.Z,{title:(0,e.jsx)(g.FormattedMessage,{id:"app.demo.separate"}),children:(0,e.jsx)("a",{className:"code-box-code-action","aria-label":"open in new tab",target:"_blank",rel:"noreferrer",href:y,children:(0,e.jsx)(Zn,{className:"code-box-separate"})})}),(0,e.jsx)(C.Z,{title:(0,e.jsx)(g.FormattedMessage,{id:"app.demo.code.".concat(le?"hide":"show")}),children:(0,e.jsxs)("div",{className:"code-expand-icon code-box-code-action",children:[(0,e.jsx)("img",{alt:"expand code",src:ae!=null&&ae.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",className:le?"code-expand-icon-hide":"code-expand-icon-show",onClick:function(){return jn(o.id)}}),(0,e.jsx)("img",{alt:"expand code",src:ae!=null&&ae.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",className:le?"code-expand-icon-show":"code-expand-icon-hide",onClick:function(){return jn(o.id)}})]})})]})]}),le&&(0,e.jsxs)("section",{className:jt,children:[(0,e.jsx)($e,{sourceCode:vn,jsxCode:z,styleCode:N,error:ct,entryName:mn,onSourceChange:dt}),(0,e.jsxs)("div",{tabIndex:0,role:"button",className:ke.codeHideBtn,onClick:function(){return Ye(!1)},children:[(0,e.jsx)(O.UpOutlined,{}),(0,e.jsx)(g.FormattedMessage,{id:"app.demo.code.hide.simplify"})]})]},"code")]});return(0,r.useEffect)(function(){if(N){var f=document.createElement("style");return f.type="text/css",f.innerHTML=N,f["data-demo-url"]=y,document.head.appendChild(f),function(){document.head.removeChild(f)}}},[N,y]),ne?(0,e.jsx)(p.Z.Ribbon,{text:ne,color:ne.includes("<")?"red":void 0,children:On}):On},kn=wn,Jn=t(15009),tn=t.n(Jn),Xn=t(899289),Yn=t.n(Xn),Qn=t(471232),_n=t(820640),qn=t.n(_n),et=t(124220),on,rn,an,sn,cn,dn,ln,un,nt=(0,v.kc)(function(i){var n=i.token,o=i.css;return{wrapper:o(on||(on=h()([`
    position: relative;
    border: 1px solid `,`;
    border-radius: `,`px;
    padding: `,"px ","px ",`px;
    margin-bottom: `,`px;
  `])),n.colorBorderSecondary,n.borderRadius,n.paddingMD,n.paddingLG,n.paddingMD*2,n.marginLG),title:o(rn||(rn=h()([`
    font-size: `,`px;
    font-weight: `,`;
    color: `,`;

    &:hover {
      color: `,`;
    }
  `])),n.fontSizeLG,n.fontWeightStrong,n.colorTextHeading,n.colorTextHeading),description:o(an||(an=h()([`
    margin-top: `,`px;
  `])),n.margin),demo:o(sn||(sn=h()([`
    margin-top: `,`px;
    display: flex;
    justify-content: center;
  `])),n.marginLG),copy:o(cn||(cn=h()([`
    position: absolute;
    inset-inline-end: `,`px;
    inset-block-start: `,`px;
    cursor: pointer;
  `])),n.paddingMD,n.paddingMD),copyTip:o(dn||(dn=h()([`
    color: `,`;
  `])),n.colorTextTertiary),copiedTip:o(ln||(ln=h()([`
    .anticon {
      color: `,`;
    }
  `])),n.colorSuccess),tip:o(un||(un=h()([`
    color: `,`;
    margin-top: `,`px;
  `])),n.colorTextTertiary,n.marginMD*2)}}),tt=function(n){var o=n.children,s=n.title,u=n.description,y=n.tip,T=n.asset,F=nt(),P=F.styles,I=(0,r.useRef)(null),z=r.useState(!1),N=j()(z,2),k=N[0],$=N[1],ee=Qn.Z.useApp(),ne=ee.message,te=function(){var xe=Yn()(tn()().mark(function oe(){var J;return tn()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(A.prev=0,!I.current){A.next=8;break}return A.next=4,(0,et.Sg)(I.current);case 4:J=A.sent,qn()(JSON.stringify(J.toSketchJSON())),$(!0),setTimeout(function(){$(!1)},5e3);case 8:A.next=13;break;case 10:A.prev=10,A.t0=A.catch(0),ne.error("\u590D\u5236\u5931\u8D25");case 13:case"end":return A.stop()}},oe,null,[[0,10]])}));return function(){return xe.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:P.wrapper,id:T.id,children:[(0,e.jsx)("a",{className:P.title,href:"#".concat(T.id),children:s}),u&&(0,e.jsx)("div",{className:P.description,dangerouslySetInnerHTML:{__html:u}}),(0,e.jsx)("div",{className:P.copy,children:k?(0,e.jsxs)("div",{className:P.copiedTip,children:[(0,e.jsx)(O.CheckOutlined,{}),(0,e.jsx)("span",{style:{marginInlineStart:8},children:"\u5DF2\u590D\u5236\uFF0C\u4F7F\u7528 Kitchen \u63D2\u4EF6\u5373\u53EF\u7C98\u8D34"})]}):(0,e.jsxs)("div",{onClick:te,className:P.copyTip,children:[(0,e.jsx)(O.SketchOutlined,{}),(0,e.jsx)("span",{style:{marginInlineStart:8},children:"\u590D\u5236 Sketch JSON"})]})}),(0,e.jsx)("div",{className:P.demo,ref:I,children:o}),(0,e.jsx)("div",{className:P.tip,children:y})]})},ot=tt,rt=function(n){var o=(0,g.useTabMeta)();return(o==null?void 0:o.frontmatter.title)==="Design"?(0,e.jsx)(ot,x()({},n)):(0,e.jsx)(kn,x()({},n))},at=rt},148050:function(Ce,W,t){"use strict";t.r(W);var X=t(168400),x=t.n(X),r=t(667294),g=t(639389),U=t.n(g),E=t(879587),w=t(647759),h=t(785893),H,j="https://github.com/ant-design/ant-design/edit/master/",O=(0,w.kc)(function(R){var b=R.token,C=R.css,l=b.colorIcon,p=b.colorText,v=b.iconCls;return{editButton:C(H||(H=x()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: `,`px;
        `,` {
          display: block;
          color: `,`;
          font-size: `,`px;
          transition: all `,`;
          &:hover {
            color: `,`;
          }
        }
      }
    `])),b.marginXS,v,l,b.fontSizeLG,b.motionDurationSlow,p)}}),D=function(b){var C=b.title,l=b.filename,p=O(),v=p.styles;return(0,h.jsx)(E.Z,{title:C,children:(0,h.jsx)("a",{className:v.editButton,href:"".concat(j).concat(l),target:"_blank",rel:"noopener noreferrer",children:(0,h.jsx)(g.EditOutlined,{})})})};W.default=D},373638:function(Ce,W,t){"use strict";t.d(W,{J1:function(){return j},Is:function(){return C},Fy:function(){return D},KE:function(){return H},qE:function(){return O}});var X=t(661227),x=t(805574),r=t(97857),g=t(385564),U=t(842348),E=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),w={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":E?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function h(l,p,v,c){var d=l.map(function(e){return e.meta}).filter(function(e){return!e.skip}),m=[],Z=function(a,M){return(a.order||0)-(M.order||0)};d.sort(Z).forEach(function(e){if(e.category&&(e.category=e.category[p]||e.category),e.type&&(e.type=e.type[p]||e.type),e!=null&&e.title&&(e.title=e.title[p]||e.title),!e.category){m.push(e);return}if(e.category==="Components"&&e.type){var a=m.find(function(L){return(L==null?void 0:L.title)===e.type});a||(a={type:"type",title:e.type,children:[],order:c[e.type]},m.push(a)),a.children=a.children||[],a.children.push(e);return}var M=m.find(function(L){return(L==null?void 0:L.title)===e.category});if(M||(M={type:"category",title:e.category,children:[],order:v[e.category]},m.push(M)),M.children=M.children||[],e.type){var K=M.children.filter(function(L){return(L==null?void 0:L.title)===e.type})[0];K||(K={type:"type",title:e.type,children:[],order:c[e.type]},M.children.push(K)),K.children=K.children||[],K.children.push(e)}else M.children.push(e)});function Y(e){return e.sort(Z).map(function(a){return a.children?_objectSpread(_objectSpread({},a),{},{children:Y(a.children)}):a})}return Y(m)}function H(l){return/-cn\/?$/.test(l)}function j(l,p,v,c){var d=l.startsWith("/")?l:"/".concat(l),m;if(p?d==="/"?m="/index-cn":d.endsWith("/")?m=d.replace(/\/$/,"-cn/"):(m="".concat(d,"-cn"),m=m.replace(/(-cn)+/,"-cn")):m=/\/?index-cn/.test(d)?"/":d.replace("-cn",""),c){var Z=c[p?"zhCN":"enUS"];m+="#".concat(Z)}return{pathname:m,search:v}}function O(l){var p="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",v=new Image,c,d=function(Z){c||(c=!0,v.src="",l(Z))};return v.onload=function(){return d("responded")},v.onerror=function(){return d("error")},v.src=p,setTimeout(function(){return d("timeout")},1500)}function D(){var l="test",p=window.localStorage;try{return p.setItem(l,"1"),p.removeItem(l),!0}catch(v){return!1}}function R(l){return new Promise(function(p,v){var c=document.createElement("script");c.type="text/javascript",c.src=l,c.onload=p,c.onerror=v,document.head.appendChild(c)})}function b(l){var p=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(l))return"";var v=flattenDeep(l.filter(function(c){if(Array.isArray(c)){var d=_slicedToArray(c,1),m=d[0];return m==="p"}return!1}).map(function(c){var d=flatten(c),m=_toArray(d),Z=m[0],Y=m.slice(1),e=Y.filter(function(a){return typeof a=="string"&&!p.includes(a)}).join("");return[Z,e]})).find(function(c){return c&&typeof c=="string"&&!p.includes(c)});return v}var C=function(){return w}},471232:function(Ce,W,t){"use strict";t.d(W,{Z:function(){return Y}});var X=t(97857),x=t.n(X),r=t(805574),g=t.n(r),U=t(667294),E=t(693967),w=t.n(E),h=t(544695),H=t(73287),j=t(215570),O=t(269924),D=t(890887),R=t(414466),b=t(9783),C=t.n(b),l=t(286665),p=function(a){var M=a.componentCls,K=a.colorText,L=a.fontSize,me=a.lineHeight,ie=a.fontFamily;return C()({},M,{color:K,fontSize:L,lineHeight:me,fontFamily:ie})},v=function(){return{}},c=(0,l.I$)("App",p,v),d=t(785893),m=function(){return U.useContext(R.Z)},Z=function(a){var M=a.prefixCls,K=a.children,L=a.className,me=a.rootClassName,ie=a.message,je=a.notification,Be=a.style,Le=a.component,se=Le===void 0?"div":Le,Ze=(0,U.useContext)(H.E_),Fe=Ze.getPrefixCls,ce=Fe("app",M),ze=c(ce),G=g()(ze,3),Se=G[0],Ue=G[1],be=G[2],Ke=w()(Ue,ce,L,me,be),de=(0,U.useContext)(R.J),ve=U.useMemo(function(){return{message:x()(x()({},de.message),ie),notification:x()(x()({},de.notification),je)}},[ie,je,de.message,de.notification]),Ee=(0,j.Z)(ve.message),pe=g()(Ee,2),De=pe[0],Ve=pe[1],Me=(0,D.Z)(ve.notification),Pe=g()(Me,2),fe=Pe[0],Oe=Pe[1],Re=(0,O.Z)(),ge=g()(Re,2),Te=ge[0],We=ge[1],He=U.useMemo(function(){return{message:De,notification:fe,modal:Te}},[De,fe,Te]);(0,h.ln)("App")(!(be&&se===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");var Ge=se===!1?U.Fragment:se,$e={className:Ke,style:Be};return Se((0,d.jsx)(R.Z.Provider,{value:He,children:(0,d.jsx)(R.J.Provider,{value:ve,children:(0,d.jsxs)(Ge,x()(x()({},se===!1?void 0:$e),{},{children:[We,Ve,Oe,K]}))})}))};Z.useApp=m;var Y=Z},991343:function(){},824654:function(){}}]);
