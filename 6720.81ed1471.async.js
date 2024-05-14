"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6720],{366720:function(H,E,n){n.r(E);var N=n(805574),g=n.n(N),L=n(97857),s=n.n(L),T=n(168400),l=n.n(T),d=n(667294),i=n(639389),J=n.n(i),y=n(647759),I=n(693967),M=n.n(I),R=n(361446),K=n(438199),o=n(785893),O,p,h,x,B=(0,y.kc)(function(r){var e=r.token,t=r.css,a=e.colorSplit,_=e.iconCls,u=e.fontSizeIcon;return{prevNextNav:t(O||(O=l()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: `,`px;
      border-top: 1px solid `,`;
      display: flex;
    `])),e.fontSize,a),pageNav:t(p||(p=l()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all `,`;
      }

      .chinese {
        margin-inline-start: `,`px;
      }
    `])),_,u,e.motionDurationSlow,e.marginXXS),prevNav:t(h||(h=l()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end `,`;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `])),e.motionDurationSlow),nextNav:t(x||(x=l()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start `,`;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])),e.motionDurationSlow)}}),U=function r(e){return Array.isArray(e)?e.reduce(function(t,a){if(!a)return t;if("children"in a&&a.children){var _;return t.concat((_=r(a.children))!==null&&_!==void 0?_:[])}return t.concat(a)},[]):null},W=function(e){var t=e.rtl,a=B(),_=a.styles,u={className:"footer-nav-icon-before"},P={className:"footer-nav-icon-after"},S=t?(0,o.jsx)(i.RightOutlined,s()({},u)):(0,o.jsx)(i.LeftOutlined,s()({},u)),z=t?(0,o.jsx)(i.LeftOutlined,s()({},P)):(0,o.jsx)(i.RightOutlined,s()({},P)),X=(0,R.Z)({before:S,after:z}),D=g()(X,2),b=D[0],j=D[1],Z=(0,d.useContext)(K.Z),k=Z.isMobile,F=(0,d.useMemo)(function(){var m=U(b);if(!m)return[null,null];var c=-1;return m.forEach(function(A,G){A&&A.key===j&&(c=G)}),[m[c-1],m[c+1]]},[b,j]),C=g()(F,2),v=C[0],f=C[1];return k?null:(0,o.jsxs)("section",{className:_.prevNextNav,children:[v&&d.cloneElement(v.label,{className:M()(_.pageNav,_.prevNav,v.className)}),f&&d.cloneElement(f.label,{className:M()(_.pageNav,_.nextNav,f.className)})]})};E.default=W}}]);
