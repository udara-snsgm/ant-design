"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7721],{617721:function(E,v,t){t.r(v),t.d(v,{default:function(){return T}});var h=t(9783),x=t.n(h),j=t(168400),u=t.n(j),p=t(667294),C=t(343156),y=t(647759),S=t(693967),b=t.n(S),A=t(385956),M=t(438199),I=t(548657),z=t(879587),L=t(796586),r=t(785893),N=function(a){var n=a.num,l=n===void 0?3:n;return(0,r.jsx)("li",{children:Array.from({length:l}).map(function(e,i){return(0,r.jsx)(I.Z.Avatar,{size:"small",active:!0,style:{marginInlineStart:i===0?0:-8}},i)})})},O=function(a){var n=a.item,l=n===void 0?{}:n,e=l.username,i=l.url,s=a.loading;return s?(0,r.jsx)(N,{}):e!=null&&e.includes("github-actions")?null:(0,r.jsx)(z.Z,{title:e,children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/".concat(e),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(L.C,{size:"small",src:i,alt:e,children:e})})})})},P=O,d,c,f,g,Z=(0,y.kc)(function(o){var a=o.token,n=o.css;return{contributorsList:n(d||(d=u()([`
    margin-top: 120px !important;
  `]))),listMobile:n(c||(c=u()([`
    margin: 1em 0 !important;
  `]))),title:n(f||(f=u()([`
    font-size: `,`px;
    opacity: 0.5;
    margin-bottom: `,`px;
  `])),a.fontSizeSM,a.marginXS),list:n(g||(g=u()([`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all `,`;
      margin-inline-end: -`,`px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `])),a.motionDurationSlow,a.marginXS)}}),$=function(a){var n=a.filename,l=(0,A.useIntl)(),e=l.formatMessage,i=Z(),s=i.styles,X=(0,p.useContext)(M.Z),D=X.isMobile;return n?(0,r.jsxs)("div",{className:b()(s.contributorsList,x()({},s.listMobile,D)),children:[(0,r.jsx)("div",{className:s.title,children:e({id:"app.content.contributors"})}),(0,r.jsx)(C.Z,{cache:!0,repo:"ant-design",owner:"ant-design",fileName:n,className:s.list,renderItem:function(m,B){return(0,r.jsx)(P,{item:m,loading:B},m==null?void 0:m.url)}})]}):null},T=$}}]);
