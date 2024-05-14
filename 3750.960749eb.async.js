"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3750],{303840:function(se,I,l){Object.defineProperty(I,"__esModule",{value:!0}),I.default=void 0;const te=R(l(554434));function R(H){return H&&H.__esModule?H:{default:H}}const U=te;I.default=U,se.exports=U},793582:function(se,I,l){l.r(I),l.d(I,{default:function(){return wr}});var te=l(9783),R=l.n(te),U=l(513769),H=l.n(U),ft=l(805574),k=l.n(ft),At=l(97857),j=l.n(At),gt=l(168400),s=l.n(gt),v=l(667294),me=l(416397),Q=l(510274);function J(r){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(r)}function ue(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,o)}return e}function de(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(e),!0).forEach(function(o){pt(r,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):ue(Object(e)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(e,o))})}return r}function pt(r,t,e){return t=vt(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function vt(r){var t=ht(r,"string");return J(t)==="symbol"?t:String(t)}function ht(r,t){if(J(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if(J(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function fe(r,t){var e=t.generateColorPalettes,o=t.generateNeutralColorPalettes,n=r.colorSuccess,i=r.colorWarning,c=r.colorError,f=r.colorInfo,A=r.colorPrimary,d=r.colorBgBase,p=r.colorTextBase,u=e(A),m=e(n),g=e(i),h=e(c),b=e(f),x=o(d,p);return de(de({},x),{},{colorPrimaryBg:u[1],colorPrimaryBgHover:u[2],colorPrimaryBorder:u[3],colorPrimaryBorderHover:u[4],colorPrimaryHover:u[5],colorPrimary:u[6],colorPrimaryActive:u[7],colorPrimaryTextHover:u[8],colorPrimaryText:u[9],colorPrimaryTextActive:u[10],colorSuccessBg:m[1],colorSuccessBgHover:m[2],colorSuccessBorder:m[3],colorSuccessBorderHover:m[4],colorSuccessHover:m[5],colorSuccess:m[6],colorSuccessActive:m[7],colorSuccessTextHover:m[8],colorSuccessText:m[9],colorSuccessTextActive:m[10],colorErrorBg:h[1],colorErrorBgHover:h[2],colorErrorBorder:h[3],colorErrorBorderHover:h[4],colorErrorHover:h[5],colorError:h[6],colorErrorActive:h[7],colorErrorTextHover:h[8],colorErrorText:h[9],colorErrorTextActive:h[10],colorWarningBg:g[1],colorWarningBgHover:g[2],colorWarningBorder:g[3],colorWarningBorderHover:g[4],colorWarningHover:g[5],colorWarning:g[6],colorWarningActive:g[7],colorWarningTextHover:g[8],colorWarningText:g[9],colorWarningTextActive:g[10],colorInfoBg:b[1],colorInfoBgHover:b[2],colorInfoBorder:b[3],colorInfoBorderHover:b[4],colorInfoHover:b[5],colorInfo:b[6],colorInfoActive:b[7],colorInfoTextHover:b[8],colorInfoText:b[9],colorInfoTextActive:b[10],colorBgMask:new Q.C("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}var F=l(965516);function G(r){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(r)}function Ae(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,o)}return e}function ge(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ae(Object(e),!0).forEach(function(o){bt(r,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):Ae(Object(e)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(e,o))})}return r}function bt(r,t,e){return t=yt(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function yt(r){var t=xt(r,"string");return G(t)==="symbol"?t:String(t)}function xt(r,t){if(G(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if(G(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}var jt=F.Z.defaultAlgorithm,P=function(t,e){return new Q.C(t).setAlpha(e).toRgbString()},K=function(t,e){var o=new Q.C(t);return o.darken(e).toHexString()},Ct=function(t){var e=(0,me.generate)(t);return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[4],6:e[5],7:e[6],8:e[4],9:e[5],10:e[6]}},St=function(t,e){var o=t||"#fff",n=e||"#000";return{colorBgBase:o,colorTextBase:n,colorText:P(n,.85),colorTextSecondary:P(n,.45),colorTextTertiary:P(n,.45),colorTextQuaternary:P(n,.25),colorFill:P(n,.06),colorFillSecondary:P(n,.04),colorFillTertiary:P(n,.03),colorFillQuaternary:P(n,.02),colorBgLayout:K(o,4),colorBgContainer:K(o,0),colorBgElevated:K(o,0),colorBgSpotlight:P(n,.85),colorBorder:K(o,15),colorBorderSecondary:K(o,6),colorSplit:P(n,.06)}},Pt=function(t,e){var o=e!=null?e:jt(t);return ge(ge({},o),fe(e!=null?e:t,{generateColorPalettes:Ct,generateNeutralColorPalettes:St}))},pe=Pt;function V(r){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(r)}function ve(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,o)}return e}function he(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ve(Object(e),!0).forEach(function(o){Ot(r,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):ve(Object(e)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(e,o))})}return r}function Ot(r,t,e){return t=Tt(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function Tt(r){var t=Bt(r,"string");return V(t)==="symbol"?t:String(t)}function Bt(r,t){if(V(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if(V(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}var Dt=F.Z.darkAlgorithm,B=function(t,e){return new Q.C(t).setAlpha(e).toRgbString()},N=function(t,e){var o=new Q.C(t);return o.lighten(e).toHexString()},wt=function(t){var e=(0,me.generate)(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},kt=function(t,e){var o=t||"#000",n=e||"#fff";return{colorBgBase:o,colorTextBase:n,colorText:B(n,.85),colorTextSecondary:B(n,.45),colorTextTertiary:B(n,.45),colorTextQuaternary:B(n,.25),colorFill:B(n,.18),colorFillSecondary:B(n,.12),colorFillTertiary:B(n,.08),colorFillQuaternary:B(n,.04),colorBgElevated:N(o,12),colorBgContainer:N(o,8),colorBgLayout:N(o,0),colorBgSpotlight:N(o,26),colorBorder:N(o,26),colorBorderSecondary:N(o,19),colorSplit:B(n,.12)}},Rt=function(t,e){var o=e!=null?e:Dt(t);return he(he({},o),fe(e!=null?e:t,{generateColorPalettes:wt,generateNeutralColorPalettes:kt}))},Ft=Rt;function X(r){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(r)}function be(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,o)}return e}function Y(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?be(Object(e),!0).forEach(function(o){Mt(r,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):be(Object(e)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(e,o))})}return r}function Mt(r,t,e){return t=Et(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function Et(r){var t=Zt(r,"string");return X(t)==="symbol"?t:String(t)}function Zt(r,t){if(X(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if(X(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}var ye={token:{borderRadius:2,colorPrimary:"#1890ff",wireframe:!0}},xe=Y(Y({},ye),{},{algorithm:pe,components:{Menu:{itemBorderRadius:0,subMenuItemBorderRadius:0,itemHoverColor:"#1890ff",itemSelectedColor:"#1890ff",itemSelectedBg:"#e6f7ff",activeBarWidth:3,itemMarginInline:0,itemHoverBg:"transparent"}}}),Nr=Y(Y({},ye),{},{algorithm:Ft,components:{Menu:{itemBorderRadius:0,subMenuItemBorderRadius:0,itemHoverColor:"transparent",itemSelectedColor:"#1890ff",itemSelectedBg:"#111b26",activeBarWidth:3,itemMarginInline:0,itemHoverBg:"transparent"}}}),$=l(639389),L=l(86198),z=l(506380),It=l(75529),M=l(106750),Ht=l(24768),Qt=l(256661),re=l(259696),Nt=l(294047),je=l(941346),Lt=l(371707),O=l(647759),E=l(730717),zt=l(693967),C=l.n(zt),Wt=l(385956),Jt=l(49313),Ce=l(302559),Se=l(472638),Gt=l(438199),Pe=l(373638),Kt=l(902316),Oe=l(833494),Vt=l(82225),W="#1677FF",oe="#ED4192",q=[{color:W,url:null,webp:null},{color:"#5A54F9",url:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/original",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#9E339F",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*CMCMTKV51tIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:oe,url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*s5OdR6wZZIkAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#E0282E",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HE_4Qp_XfQQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F4801A",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xTG2QbottAQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F2BD27",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*hbPfSbF-xPIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#00B96B",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*iM6CQ496P3oAAAAAAAAAAAAADrJ8AQ/fmt.webp"}],Te=q.map(function(r){var t=r.color;return t}),Xt=33;function _(r){if(!r)return null;var t=(0,E.vC)(r).toRgb(),e=q.map(function(n){var i=n.color,c=(0,E.vC)(i).toRgb(),f=Math.sqrt(Math.pow(c.r-t.r,2)+Math.pow(c.g-t.g,2)+Math.pow(c.b-t.b,2));return{color:i,dist:f}}),o=e.sort(function(n,i){return n.dist-i.dist})[0];return o.dist<=Xt?o.color:null}function $t(r){var t,e=_(r);return e?((t=q.find(function(o){return o.color===e}))===null||t===void 0?void 0:t.url)||"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*CLp0Qqc11AkAAAAAAAAAAAAAARQnAQ":null}var a=l(785893),Be,Ut=(0,O.kc)(function(r){var t=r.token;return{image:(0,O.iv)(Be||(Be=s()([`
    transition: all `,`;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: right top;
  `])),t.motionDurationSlow)}}),ae=function(){return{opacity:1}},ne=function(){return{opacity:0}},Yt=function(t){var e=t.colorPrimary,o=t.isLight,n=(0,v.useMemo)(function(){return _(e)},[e]),i=Ut(),c=i.styles,f=(0,v.useState)([]),A=k()(f,2),d=A[0],p=A[1];return v.useLayoutEffect(function(){p([n])},[n]),(0,a.jsx)(Vt.V4,{keys:d,motionName:"transition",onEnterStart:ne,onAppearStart:ne,onEnterActive:ae,onAppearActive:ae,onLeaveStart:ae,onLeaveActive:ne,motionDeadline:500,children:function(m){var g=m.key,h=m.className,b=m.style,x=C()(c.image,h),T=q.find(function(ie){return ie.color===g});if(!T||!T.url)return null;var ee=b||{},S=ee.opacity;return(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{srcSet:T.webp,type:"image/webp"}),(0,a.jsx)("source",{srcSet:T.url,type:"image/jpeg"}),(0,a.jsx)("img",{className:x,style:j()(j()({},b),{},{opacity:o?S:0}),src:T.url,alt:""})]})}})},qt=Yt,_t=l(719632),er=l.n(_t),tr=l(483465),rr=l(534826),De,we,or=(0,O.kc)(function(r){var t=r.token,e=r.css;return{color:e(De||(De=s()([`
    width: `,`px;
    height: `,`px;
    border-radius: 100%;
    cursor: pointer;
    transition: all `,`;
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
    }

    &:focus-within {
      // need \uFF1F
    }
  `])),t.controlHeightLG/2,t.controlHeightLG/2,t.motionDurationFast),colorActive:e(we||(we=s()([`
    box-shadow:
      0 0 0 1px `,`,
      0 0 0 `,"px ",`;
  `])),t.colorBgContainer,t.controlOutlineWidth*2+1,t.colorPrimary)}}),ar=function(t){var e=t.value,o=t.children,n=t.onChange,i=(0,v.useState)(e),c=k()(i,2),f=c[0],A=c[1];return(0,v.useEffect)(function(){var d=setTimeout(function(){n==null||n(f)},200);return function(){return clearTimeout(d)}},[f]),(0,v.useEffect)(function(){A(e)},[e]),(0,a.jsx)(tr.Z,{value:f,onChange:A,presets:[{label:"PresetColors",colors:Te}],children:o})},nr=function(t){var e=t.value,o=t.onChange,n=t.id,i=or(),c=i.styles,f=v.useMemo(function(){var A=(0,E.vC)(e||"").toRgbString(),d=!1,p=Te.map(function(u){var m=(0,E.vC)(u).toRgbString(),g=m===A;return d=d||g,{color:u,active:g,picker:!1}});return[].concat(er()(p),[{color:"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",picker:!0,active:!d}])},[e]);return(0,a.jsxs)(M.Z,{gap:"large",align:"center",wrap:!0,children:[(0,a.jsx)(rr.Z,{value:typeof e=="string"?e:e==null?void 0:e.toHexString(),onChange:function(d){return o==null?void 0:o(d.target.value)},style:{width:120},id:n}),(0,a.jsx)(M.Z,{gap:"middle",children:f.map(function(A){var d=A.color,p=A.active,u=A.picker,m=(0,a.jsx)("label",{className:C()(c.color,R()({},c.colorActive,p)),style:{background:d},onClick:function(){u||o==null||o(d)},children:(0,a.jsx)("input",{type:"radio",name:u?"picker":"color",tabIndex:u?-1:0,onClick:function(h){return h.stopPropagation()}})},d);return u?(0,a.jsx)(ar,{value:e||"",onChange:o,children:m},"colorpicker-".concat(e)):m})})]})},lr=nr,ir=l(181632),ke,Re,Fe,cr=(0,O.kc)(function(){var r=(0,Oe.EI)(),t=r.carousel;return{carousel:t,container:(0,O.iv)(ke||(ke=s()([`
      position: relative;
    `]))),title:(0,O.iv)(Re||(Re=s()([`
      position: absolute;
      top: 15%;
      z-index: 1;
      width: 100%;
      text-align: center;
    `]))),img:(0,O.iv)(Fe||(Fe=s()([`
      width: 100%;
    `])))}}),le=[{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KsMrRZaciFcAAAAAAAAAAAAADrJ8AQ/original",titleColor:"rgba(0,0,0,.88)"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3FkqR6XRNgoAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cSX_RbD3k9wAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MldsRZeax6EAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*vCfCSbiI_VIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BeDBTY9UnXIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Q63XTbk8YaMAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"}],sr=function(t){var e=cr(),o=e.styles,n=t.id,i=t.title,c=t.description,f=(0,O.Fg)(),A=(0,v.useState)(0),d=k()(A,2),p=d[0],u=d[1];return(0,a.jsxs)("div",{className:o.container,children:[(0,a.jsxs)("div",{className:o.title,children:[(0,a.jsx)(re.Z.Title,{id:n,level:1,style:{fontWeight:900,color:le[p].titleColor,fontFamily:"AliPuHui, ".concat(f.fontFamily),fontSize:f.fontSizeHeading2},children:i}),(0,a.jsx)(re.Z.Paragraph,{style:{marginBottom:f.marginXXL,color:le[p].titleColor},children:c})]}),(0,a.jsx)(ir.Z,{className:o.carousel,afterChange:u,children:le.map(function(m,g){return(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:m.imageSrc,className:o.img,alt:""})},g)})})]})},mr=sr,ur=l(473894),dr=l(548558),fr=function(t){var e=t.id,o=t.value,n=t.onChange;return(0,a.jsxs)(M.Z,{gap:"large",children:[(0,a.jsx)(ur.Z,{value:o,onChange:n,style:{width:120},min:0,formatter:function(c){return"".concat(c,"px")},parser:function(c){return c&&parseFloat(c)},id:e}),(0,a.jsx)(dr.Z,{tooltip:{open:!1},style:{width:128},min:0,value:o,max:20,onChange:n})]})},Ar=fr,Me,Ee,Ze={default:"https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg",dark:"https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg",lark:"https://gw.alipayobjects.com/zos/bmw-prod/3e899b2b-4eb4-4771-a7fc-14c7ff078aed.svg",comic:"https://gw.alipayobjects.com/zos/bmw-prod/ed9b04e8-9b8d-4945-8f8a-c8fc025e846f.svg",v4:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bOiWT4-34jkAAAAAAAAAAAAADrJ8AQ/original"},gr={cn:{default:"\u9ED8\u8BA4",dark:"\u6697\u9ED1",lark:"\u77E5\u8BC6\u534F\u4F5C",comic:"\u6843\u82B1\u7F18",v4:"V4 \u4E3B\u9898"},en:{default:"Default",dark:"Dark",lark:"Document",comic:"Blossom",v4:"V4 Theme"}},pr=(0,O.kc)(function(r){var t=r.token,e=r.css;return{themeCard:e(Me||(Me=s()([`
    border-radius: `,`px;
    cursor: pointer;
    transition: all `,`;
    overflow: hidden;
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
      position: absolute;
    }

    img {
      vertical-align: top;
      box-shadow:
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }

    &:focus-within,
    &:hover {
      transform: scale(1.04);
    }
  `])),t.borderRadius,t.motionDurationSlow),themeCardActive:e(Ee||(Ee=s()([`
    box-shadow:
      0 0 0 1px `,`,
      0 0 0 `,"px ",`;
    &,
    &:hover:not(:focus-within) {
      transform: scale(1);
    }
  `])),t.colorBgContainer,t.controlOutlineWidth*2+1,t.colorPrimary)}}),vr=function(t){var e=t.value,o=t.id,n=t.onChange,i=pr(),c=i.styles,f=(0,Ce.default)(gr),A=k()(f,1),d=A[0];return(0,a.jsx)(M.Z,{gap:"large",wrap:!0,children:Object.keys(Ze).map(function(p,u){return(0,a.jsxs)(M.Z,{vertical:!0,gap:"small",justify:"center",align:"center",children:[(0,a.jsxs)("label",{onClick:function(){return n==null?void 0:n(p)},className:C()(c.themeCard,R()({},c.themeCardActive,e===p)),children:[(0,a.jsx)("input",{type:"radio",name:"theme",id:u===0?o:void 0}),(0,a.jsx)("img",{src:Ze[p],alt:p})]}),(0,a.jsx)("span",{children:d[p]})]},p)})})},hr=vr,br=["compact","themeType","colorPrimary"],Ie,He,Qe,Ne,Le,ze,We,Je,Ge,Ke,Ve,Xe,$e,Ue,Ye,qe,_e,et,tt,rt,ot,at,yr=L.Z.Header,xr=L.Z.Content,jr=L.Z.Sider,Cr=function(){return null},Sr={cn:{themeTitle:"\u5B9A\u5236\u4E3B\u9898\uFF0C\u968F\u5FC3\u6240\u6B32",themeDesc:"Ant Design 5.0 \u5F00\u653E\u66F4\u591A\u6837\u5F0F\u7B97\u6CD5\uFF0C\u8BA9\u4F60\u5B9A\u5236\u4E3B\u9898\u66F4\u7B80\u5355",customizeTheme:"\u5B9A\u5236\u4E3B\u9898",myTheme:"\u6211\u7684\u4E3B\u9898",titlePrimaryColor:"\u4E3B\u8272",titleBorderRadius:"\u5706\u89D2",titleCompact:"\u5BBD\u677E\u5EA6",default:"\u9ED8\u8BA4",compact:"\u7D27\u51D1",titleTheme:"\u4E3B\u9898",light:"\u4EAE\u8272",dark:"\u6697\u9ED1",toDef:"\u6DF1\u5EA6\u5B9A\u5236",toUse:"\u53BB\u4F7F\u7528"},en:{themeTitle:"Flexible theme customization",themeDesc:"Ant Design 5.0 enable extendable algorithm, make custom theme easier",customizeTheme:"Customize Theme",myTheme:"My Theme",titlePrimaryColor:"Primary Color",titleBorderRadius:"Border Radius",titleCompact:"Compact",titleTheme:"Theme",default:"Default",compact:"Compact",light:"Light",dark:"Dark",toDef:"More",toUse:"Apply"}},Pr=(0,O.kc)(function(r){var t=r.token,e=r.css,o=r.cx,n=(0,Oe.EI)(),i=n.carousel,c=e(Ie||(Ie=s()([`
    overflow: hidden;
    background: rgba(240, 242, 245, 0.25);
    backdrop-filter: blur(50px);
    box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
    transition: all `,`;
  `])),t.motionDurationSlow);return{demo:c,otherDemo:e(He||(He=s()([`
      &.`,` {
        backdrop-filter: blur(10px);
        background: rgba(247, 247, 247, 0.5);
      }
    `])),o(c)),darkDemo:e(Qe||(Qe=s()([`
      &.`,` {
        background: #000;
      }
    `])),o(c)),larkDemo:e(Ne||(Ne=s()([`
      &.`,` {
        // background: #f7f7f7;
        background: rgba(240, 242, 245, 0.65);
      }
    `])),o(c)),comicDemo:e(Le||(Le=s()([`
      &.`,` {
        // background: #ffe4e6;
        background: rgba(240, 242, 245, 0.65);
      }
    `])),o(c)),menu:e(ze||(ze=s()([`
      margin-inline-start: auto;
    `]))),header:e(We||(We=s()([`
      display: flex;
      align-items: center;
      border-bottom: 1px solid `,`;
      padding-inline: `,`px !important;
      height: `,`px;
      line-height: `,`px;
    `])),t.colorSplit,t.paddingLG,t.controlHeightLG*1.2,t.controlHeightLG*1.2),headerDark:e(Je||(Je=s()([`
      border-bottom-color: rgba(255, 255, 255, 0.1);
    `]))),avatar:e(Ge||(Ge=s()([`
      width: `,`px;
      height: `,`px;
      border-radius: 100%;
      background: rgba(240, 240, 240, 0.75);
      background-size: cover;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    `])),t.controlHeight,t.controlHeight),avatarDark:e(Ke||(Ke=s()([`
      background: rgba(200, 200, 200, 0.3);
    `]))),logo:e(Ve||(Ve=s()([`
      display: flex;
      align-items: center;
      column-gap: `,`px;

      h1 {
        font-weight: 400;
        font-size: `,`px;
        line-height: 1.5;
      }
    `])),t.padding,t.fontSizeLG),logoImg:e(Xe||(Xe=s()([`
      width: 30px;
      height: 30px;
      overflow: hidden;

      img {
        width: 30px;
        height: 30px;
        vertical-align: top;
      }
    `]))),transBg:e($e||($e=s()([`
      background: transparent !important;
    `]))),form:e(Ue||(Ue=s()([`
      width: 100%;
      margin: 0 auto;
    `]))),pos:e(Ye||(Ye=s()([`
      position: absolute;
    `]))),leftTopImagePos:e(qe||(qe=s()([`
      left: 0;
      top: -100px;
      height: 500px;
    `]))),rightBottomPos:e(_e||(_e=s()([`
      right: 0;
      bottom: -100px;
      height: 287px;
    `]))),leftTopImage:e(et||(et=s()([`
      left: 50%;
      transform: translate3d(-900px, 0, 0);
      top: -100px;
      height: 500px;
    `]))),rightBottomImage:e(tt||(tt=s()([`
      right: 50%;
      transform: translate3d(750px, 0, 0);
      bottom: -100px;
      height: 287px;
    `]))),motion:e(rt||(rt=s()([`
      transition: all `,`;
    `])),t.motionDurationSlow),op1:e(ot||(ot=s()([`
      opacity: 1;
    `]))),op0:e(at||(at=s()([`
      opacity: 0;
    `]))),carousel:i}}),nt=[{key:"Design Values",label:"Design Values"},{key:"Global Styles",label:"Global Styles"},{key:"Themes",label:"Themes"},{key:"DesignPatterns",label:"Design Patterns"}],Or=[{key:"Design",label:"Design",icon:(0,a.jsx)($.FolderOutlined,{}),children:nt},{key:"Development",label:"Development",icon:(0,a.jsx)($.FolderOutlined,{})}];function Tr(r,t){if(!t)return"#FFF";var e=(0,E.vC)(r),o=_(r);switch(o){case W:case oe:case"#F2BD27":return;case"#5A54F9":case"#E0282E":return"#FFF";default:return e.toHsb().b<.7?"#FFF":void 0}}var lt={themeType:"default",colorPrimary:"#1677FF",borderRadius:6,compact:"default"},it={default:{},dark:{borderRadius:2},lark:{colorPrimary:"#00B96B",borderRadius:4},comic:{colorPrimary:oe,borderRadius:16},v4:j()({},xe.token)},D=function(t){return t/255};function Br(r){var t=new Q.C(r).toRgb(),e=t.r,o=t.g,n=t.b,i=D(e)*100,c=100,f=Math.max(D(e),D(o),D(n))*1e4,A=(Math.atan2(Math.sqrt(3)*(D(o)-D(n)),2*D(e)-D(o)-D(n))*180/Math.PI+360)%360;return"invert(".concat(i,"%) sepia(").concat(c,"%) saturate(").concat(f,"%) hue-rotate(").concat(A,"deg)")}var Dr=function(){var t=Pr(),e=t.styles,o=(0,Ce.default)(Sr),n=k()(o,2),i=n[0],c=n[1],f=c==="cn",A=(0,Wt.useLocation)(),d=A.search,p=v.useState(lt),u=k()(p,2),m=u[0],g=u[1],h=function(ce,dt){v.startTransition(function(){g(j()(j()({},it[dt.themeType]),dt))})},b=m.compact,x=m.themeType,T=m.colorPrimary,ee=H()(m,br),S=x!=="dark",ie=z.Z.useForm(),kr=k()(ie,1),ct=kr[0],Rr=v.useContext(Gt.Z),Fr=Rr.isMobile,w=v.useMemo(function(){return typeof T=="string"?T:T.toHexString()},[T]),st=v.useMemo(function(){var y=[S?F.Z.defaultAlgorithm:F.Z.darkAlgorithm];return b==="compact"&&y.push(F.Z.compactAlgorithm),x==="v4"&&y.push(pe),y},[S,b,x]);v.useEffect(function(){var y=j()(j()({},lt),{},{themeType:x},it[x]);g(y),ct.setFieldsValue(y)},[x]);var mt=(0,Jt.Z)();v.useEffect(function(){h({},j()(j()({},m),{},{themeType:mt?"dark":"default"}))},[mt]);var Z=_(w),Mr=v.useMemo(function(){var y="transparent",ce=F.Z.defaultAlgorithm(j()(j()({},F.Z.defaultConfig.token),{},{colorPrimary:w}));return x==="dark"?y="#393F4A":Z===W?y="#F5F8FF":y=ce.colorPrimaryHover,[y,ce.colorPrimaryBgHover]},[x,Z,w]),ut=k()(Mr,2),Er=ut[0],Zr=ut[1],Ir=v.useMemo(function(){var y=(0,E.vC)(w).toHsb();return y.b=Math.min(y.b,.7),(0,E.vC)(y).toHexString()},[w]),Hr=v.useMemo(function(){return{token:j()(j()({},ee),{},{colorPrimary:w}),algorithm:st,components:j()({Layout:S?{headerBg:"transparent",bodyBg:"transparent"}:{},Menu:S?{itemBg:"transparent",subMenuItemBg:"transparent",activeBarBorderWidth:0}:{}},x==="v4"?xe.components:{})}},[ee,w,st,x]),Qr=(0,a.jsxs)(It.ZP,{theme:Hr,children:[(0,a.jsx)(Cr,{}),(0,a.jsx)("div",{className:C()(e.demo,R()(R()({},e.otherDemo,S&&Z!==W&&e.otherDemo),e.darkDemo,!S)),style:{borderRadius:m.borderRadius},children:(0,a.jsxs)(L.Z,{className:e.transBg,children:[(0,a.jsxs)(yr,{className:C()(e.header,e.transBg,!S&&e.headerDark),children:[(0,a.jsxs)("div",{className:e.logo,children:[(0,a.jsx)("div",{className:e.logoImg,children:(0,a.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",style:{filter:Z===W?void 0:Br(Ir)},alt:""})}),(0,a.jsx)("h1",{children:"Ant Design 5.0"})]}),(0,a.jsxs)(M.Z,{className:e.menu,gap:"middle",children:[(0,a.jsx)($.BellOutlined,{}),(0,a.jsx)($.QuestionCircleOutlined,{}),(0,a.jsx)("div",{className:C()(e.avatar,R()({},e.avatarDark,x==="dark")),style:{backgroundColor:Zr,backgroundImage:"url(".concat($t(Z),")")}})]})]}),(0,a.jsxs)(L.Z,{className:e.transBg,hasSider:!0,children:[(0,a.jsx)(jr,{className:C()(e.transBg),width:200,children:(0,a.jsx)(Ht.Z,{mode:"inline",className:C()(e.transBg),selectedKeys:["Themes"],openKeys:["Design"],style:{height:"100%",borderRight:0},items:Or,expandIcon:!1})}),(0,a.jsxs)(L.Z,{className:e.transBg,style:{padding:"0 24px 24px"},children:[(0,a.jsx)(Qt.Z,{style:{margin:"16px 0"},items:[{title:(0,a.jsx)($.HomeOutlined,{})},{title:"Design",menu:{items:nt}},{title:"Themes"}]}),(0,a.jsxs)(xr,{children:[(0,a.jsx)(re.Z.Title,{level:2,children:i.customizeTheme}),(0,a.jsx)(Nt.Z,{title:i.myTheme,extra:(0,a.jsxs)(M.Z,{gap:"small",children:[(0,a.jsx)(Se.Z,{to:(0,Pe.J1)("/theme-editor",f,d),children:(0,a.jsx)(je.ZP,{type:"default",children:i.toDef})}),(0,a.jsx)(Se.Z,{to:(0,Pe.J1)("/docs/react/customize-theme",f,d),children:(0,a.jsx)(je.ZP,{type:"primary",children:i.toUse})})]}),children:(0,a.jsxs)(z.Z,{form:ct,initialValues:m,onValuesChange:h,labelCol:{span:3},wrapperCol:{span:21},className:e.form,children:[(0,a.jsx)(z.Z.Item,{label:i.titleTheme,name:"themeType",children:(0,a.jsx)(hr,{})}),(0,a.jsx)(z.Z.Item,{label:i.titlePrimaryColor,name:"colorPrimary",children:(0,a.jsx)(lr,{})}),(0,a.jsx)(z.Z.Item,{label:i.titleBorderRadius,name:"borderRadius",children:(0,a.jsx)(Ar,{})}),(0,a.jsx)(z.Z.Item,{label:i.titleCompact,name:"compact",htmlFor:"compact_default",children:(0,a.jsx)(Lt.ZP.Group,{options:[{label:i.default,value:"default",id:"compact_default"},{label:i.compact,value:"compact"}]})})]})})]})]})]})]})})]});return Fr?(0,a.jsx)(mr,{title:i.themeTitle,description:i.themeDesc,id:"flexible"}):(0,a.jsx)(Kt.Z,{title:i.themeTitle,titleColor:Tr(w,S),description:i.themeDesc,id:"flexible",background:Er,decoration:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:C()(e.motion,S&&Z===W?e.op1:e.op0),children:[(0,a.jsx)("img",{className:C()(e.pos,e.leftTopImage),src:"https://gw.alipayobjects.com/zos/bmw-prod/bd71b0c6-f93a-4e52-9c8a-f01a9b8fe22b.svg",alt:""}),(0,a.jsx)("img",{className:C()(e.pos,e.rightBottomImage),src:"https://gw.alipayobjects.com/zos/bmw-prod/84ad805a-74cb-4916-b7ba-9cdc2bdec23a.svg",alt:""})]}),(0,a.jsxs)("div",{className:C()(e.motion,!S||!Z?e.op1:e.op0),children:[(0,a.jsx)("img",{className:C()(e.pos,e.leftTopImagePos),src:"https://gw.alipayobjects.com/zos/bmw-prod/a213184a-f212-4afb-beec-1e8b36bb4b8a.svg",alt:""}),(0,a.jsx)("img",{className:C()(e.pos,e.rightBottomPos),src:"https://gw.alipayobjects.com/zos/bmw-prod/bb74a2fb-bff1-4d0d-8c2d-2ade0cd9bb0d.svg",alt:""})]}),(0,a.jsx)(qt,{isLight:S,colorPrimary:w})]}),children:Qr})},wr=Dr}}]);
