(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5557],{920153:function(P,$,t){var x={"./components-changelog-cn.json":[332104,2104],"./components-changelog-en.json":[365212,5212]};function d(r){if(!t.o(x,r))return Promise.resolve().then(function(){var X=new Error("Cannot find module '"+r+"'");throw X.code="MODULE_NOT_FOUND",X});var L=x[r],N=L[0];return t.e(L[1]).then(function(){return t.t(N,19)})}d.keys=function(){return Object.keys(x)},d.id=920153,P.exports=d},135557:function(P,$,t){"use strict";t.r($),t.d($,{default:function(){return yn}});var x=t(97857),d=t.n(x),r=t(667294),L=t(805574),N=t.n(L),X=t(168400),p=t.n(X),F=t(639389),R=t(259696),V=t(344682),H=t(725818),G=t(941346),J=t(302281),Q=t(303352),k=t(647759),K=t(481249),W=t.n(K),B=JSON.parse('{"3.9.3":["https://github.com/ant-design/ant-design/commit/6550df34b639ab0b3bf2c1cbf9b9828735c1fd41"],">= 3.10.0 <=3.10.9":["https://github.com/ant-design/ant-design/commit/6550df34b639ab0b3bf2c1cbf9b9828735c1fd41"],">= 3.11.0 <=3.11.5":["https://github.com/ant-design/ant-design/commit/6550df34b639ab0b3bf2c1cbf9b9828735c1fd41"],">= 4.21.6 < 4.22.0":["https://github.com/ant-design/ant-design/pull/36682"],">= 4.22.2 <= 4.22.5":["https://github.com/ant-design/ant-design/issues/36932","https://github.com/ant-design/ant-design/pull/36800","https://github.com/ant-design/ant-design/issues/37024"],"4.23.0":["https://github.com/ant-design/ant-design/issues/37461"],"4.23.5":["https://github.com/ant-design/ant-design/issues/37929","https://github.com/ant-design/ant-design/issues/37931"],"4.24.0":["https://github.com/ant-design/ant-design/issues/38371"],"5.0.4":["https://github.com/ant-design/ant-design/issues/39284"],"5.0.6":["https://github.com/ant-design/ant-design/issues/39807"],"5.1.0":["https://github.com/react-component/drawer/pull/370"],"5.1.2":["https://github.com/ant-design/ant-design/issues/39949"],"5.1.3":["https://github.com/ant-design/ant-design/issues/40113"],"5.1.4":["https://github.com/ant-design/ant-design/issues/40186"],">= 5.2.3 <= 5.3.0":["https://github.com/ant-design/ant-design/pull/40719#issuecomment-1453418135"],"5.4.1":["https://github.com/ant-design/ant-design/issues/41751"],">= 5.4.3 <= 5.4.5":["https://github.com/ant-design/cssinjs/pull/108","https://github.com/ant-design/ant-design/pull/41993"],"5.6.2":["https://github.com/ant-design/ant-design/issues/43113"],"5.6.3":["https://github.com/ant-design/ant-design/issues/43190"],"5.7.0":["https://github.com/ant-design/ant-design/issues/43684"],"5.7.1":["https://github.com/ant-design/ant-design/issues/43654","https://github.com/ant-design/ant-design/issues/43684"],"5.8.0":["https://github.com/ant-design/ant-design/issues/43943"],"5.9.1":["https://github.com/ant-design/ant-design/issues/44907"],"5.10.0":["https://github.com/ant-design/ant-design/issues/45289"],"5.11.0":["https://github.com/ant-design/ant-design/issues/45742"],"5.11.1":["https://github.com/ant-design/ant-design/issues/45883"],"5.11.2":["https://github.com/ant-design/ant-design/issues/46005"],"5.11.4":["https://github.com/ant-design/ant-design/pull/46103"],"5.12.3":["https://github.com/ant-design/ant-design/issues/46525"],"5.12.6":["https://github.com/ant-design/ant-design/issues/46719"],"5.13.0":["https://github.com/ant-design/ant-design/pull/46962"],"5.14.0":["https://github.com/ant-design/ant-design/issues/47354"],"5.15.0":["https://github.com/ant-design/ant-design/pull/47504#issuecomment-1980459433"],">= 5.16.0 <= 5.16.1":["https://github.com/ant-design/ant-design/issues/48200"],"5.16.3":["https://github.com/ant-design/ant-design/issues/48568"]}'),Y=t(154098),w=t.n(Y);function q(i){var n=i;if(n.status==="fulfilled")return n.value;throw n.status==="rejected"?n.reason:(n.status==="pending"||(n.status="pending",n.then(function(e){n.status="fulfilled",n.value=e},function(e){n.status="rejected",n.reason=e})),n)}var _=q,nn=t(912444),tn=t.n(nn),en=t(272004),sn=t.n(en),an=t(9783),on=t.n(an),ln=function(){function i(){tn()(this,i),on()(this,"cache",new Map)}return sn()(i,[{key:"get",value:function(e){return this.cache.get(e)}},{key:"set",value:function(e,a){this.cache.set(e,a)}},{key:"promise",value:function(e,a){var l=this.get(e);if(l)return l;var o=a();return this.set(e,o),o}}]),i}(),gn=new ln,rn=function(n){var e,a;return typeof n=="string"?(e=function(){return w()(n).then(function(o){return o.json()})},a=n):(e=n.request,a=n.key),_(gn.promise(a,e))},un=rn,cn=t(302559),dn=t(472638),s=t(785893),M,A,E,z,D,I;function hn(i){var n=Object.keys(B).find(function(a){return W().satisfies(i,a)}),e=B[n]||[];return{match:n,reason:Array.isArray(e)?e:[e]}}var mn=(0,k.kc)(function(i){var n=i.token,e=i.css;return{history:e(M||(M=p()([`
    position: absolute;
    top: 0;
    inset-inline-end: `,`px;
  `])),n.marginXS),li:e(A||(A=p()([`
    // white-space: pre;
  `]))),ref:e(E||(E=p()([`
    margin-inline-start: `,`px;
  `])),n.marginXS),bug:e(z||(z=p()([`
    font-size: `,`px;
    color: #aaa;
    margin-inline-start: `,`px;
    display: inline-block;
    vertical-align: inherit;
    cursor: pointer;
    &:hover {
      color: #333;
    }
  `])),n.fontSize,n.marginXS),bugReasonTitle:e(D||(D=p()([`
    padding: `,"px ",`px;
  `])),n.paddingXXS,n.paddingXS),bugReasonList:e(I||(I=p()([`
    width: 100%;
    max-width: 100%;
    li {
      padding: `,"px ",`px;
      a {
        display: flex;
        align-items: center;
        gap: `,`px;
      }
    }
  `])),n.paddingXXS,n.paddingXS,n.marginXXS)}}),pn={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0",bugList:"Bug \u7248\u672C"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update",bugList:"Bug Versions"}},vn=function(n){var e=n.changelog,a=e===void 0?"":e,l=n.refs,o=l===void 0?[]:l,v=n.styles,f=r.useMemo(function(){for(var g=[],u=!1,h="",C=0;C<a.length;C+=1){var S=a[C];if(S!=="`")h+=S;else{var O=h;u&&(O=(0,s.jsx)("code",{children:O})),g.push(O),h="",u=!u}}return g.push(h),g},[a]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:f}),o==null?void 0:o.map(function(g){var u;return(0,s.jsxs)("a",{className:v.ref,href:g,target:"_blank",rel:"noreferrer",children:["#",(u=g.match(/^.*\/(\d+)$/))===null||u===void 0?void 0:u[1]]},g)})]})},fn=function(n,e){var a=un({key:"component-changelog-".concat(e),request:function(){return t(920153)("./components-changelog-".concat(e,".json"))}});return r.useMemo(function(){var l=n.replace(/-/g,""),o=Object.keys(a).find(function(v){return v.toLowerCase()===l.toLowerCase()});return a[o]},[a,n])},bn=function(n){var e,a=n.pathname,l=a===void 0?"":a,o=(0,cn.default)(pn),v=N()(o,2),f=v[0],g=v[1],u=r.useState(!1),h=N()(u,2),C=h[0],S=h[1],O=mn(),b=O.styles,xn=((e=l.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",j=fn(xn,g),Cn=r.useMemo(function(){var m={};return j==null||j.forEach(function(c){m[c.version]=m[c.version]||[],m[c.version].push(c)}),Object.keys(m).map(function(c){var Ln=m[c],U=hn(c);return{children:(0,s.jsxs)(R.Z,{children:[(0,s.jsxs)(R.Z.Title,{level:4,children:[c,U.match&&(0,s.jsx)(V.Z,{destroyTooltipOnHide:!0,placement:"right",title:(0,s.jsx)("span",{className:b.bugReasonTitle,children:f.bugList}),content:(0,s.jsx)("ul",{className:b.bugReasonList,children:U.reason.map(function(y,T){var Z;return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{type:"link",target:"_blank",rel:"noreferrer",href:y,children:[(0,s.jsx)(F.BugOutlined,{}),y==null||(Z=y.replace(/#.*$/,""))===null||Z===void 0?void 0:Z.replace(/^https:\/\/github\.com\/ant-design\/ant-design\/(issues|pull)\//,"#")]})},"reason-".concat(T))})}),children:(0,s.jsx)(F.BugOutlined,{className:b.bug})})]}),(0,s.jsx)("ul",{children:Ln.map(function(y,T){return(0,s.jsx)("li",{className:b.li,children:(0,s.jsx)(vn,d()(d()({},y),{},{styles:b}))},T)})})]})}})},[j]),Sn=H.ZP.useBreakpoint(),On=Sn.md?"48vw":"90vw";return!j||!j.length?null:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(G.ZP,{className:b.history,icon:(0,s.jsx)(F.HistoryOutlined,{}),onClick:function(){S(!0)},children:f.changelog}),(0,s.jsx)(J.Z,{title:f.changelog,extra:(0,s.jsx)(dn.Z,{style:{fontSize:14},to:"/changelog".concat(g==="cn"?"-cn":""),children:f.full}),open:C,width:On,onClose:function(){S(!1)},destroyOnClose:!0,children:(0,s.jsx)(Q.Z,{items:Cn})})]})},jn=bn,yn=function(i){return(0,s.jsx)(r.Suspense,{fallback:null,children:(0,s.jsx)(jn,d()({},i))})}}}]);
