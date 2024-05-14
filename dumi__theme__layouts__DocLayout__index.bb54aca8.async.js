"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{49313:function(Pn,X,e){e.d(X,{Z:function(){return fn},f:function(){return S}});var on=e(667294),S=on.createContext(!1);function fn(){return on.useContext(S)}},438746:function(Pn,X,e){e.d(X,{Z:function(){return b}});var on=e(97857),S=e.n(on),fn=e(952677),v=e.n(fn),P=e(805574),w=e.n(P),Sn=e(385956),s=e(667294),J=e(302559);function l(G){return G.replace("-cn","").replace(/\/$/,"")}function b(){var G=(0,Sn.useLocation)(),Q=G.search,Y=(0,J.default)(),u=w()(Y,2),r=u[1],d=s.useCallback(function(t,C){var x=l(t);if(r==="cn"&&(x="".concat(x,"-cn")),Q&&(x="".concat(x).concat(Q)),C){var L;v()(C)==="object"?L=C[r]:L=C,x="".concat(x,"#").concat(L)}return x},[r,Q]);return S()(S()({},G),{},{pathname:l(G.pathname),getLink:d})}},361446:function(Pn,X,e){var on=e(805574),S=e.n(on),fn=e(719632),v=e.n(fn),P=e(9783),w=e.n(P),Sn=e(168400),s=e.n(Sn),J=e(667294),l=e(844183),b=e(566254),G=e(647759),Q=e(693967),Y=e.n(Q),u=e(385956),r=e(472638),d=e(438746),t=e(785893),C,x,L;function rn(I){return I&&/^\d+\.\d+\.\d+$/.test(I)}var Cn=(0,G.kc)(function(I){var k=I.css,D=I.token;return{link:k(C||(C=s()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:k(x||(x=s()([`
    margin-inline-end: 0;
  `]))),subtitle:k(L||(L=s()([`
    margin-inline-start: `,`px;
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),D.marginXS,D.fontSizeSM)}}),h=function(k){var D=Cn(),V=D.styles,O=k.before,N=k.after,nn=k.link,W=k.title,z=k.subtitle,an=k.search,en=k.tag,H=k.className;return!O&&!N?(0,t.jsxs)(r.Z,{to:"".concat(nn).concat(an),className:Y()(H,w()({},V.link,en)),children:[(0,t.jsxs)("span",{children:[W,z&&(0,t.jsx)("span",{className:V.subtitle,children:z})]}),en&&(0,t.jsx)(l.Z,{bordered:!1,className:Y()(V.tag),color:rn(en)||en==="New"?"success":"processing",children:en.replace("VERSION",b.Z)})]}):(0,t.jsxs)(r.Z,{to:"".concat(nn).concat(an),className:H,children:[O,W,z&&(0,t.jsx)("span",{className:V.subtitle,children:z}),N]})},j=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=(0,u.useFullSidebarData)(),V=(0,d.Z)(),O=V.pathname,N=V.search,nn=(0,u.useSidebarData)(),W=k.before,z=k.after,an=(0,J.useMemo)(function(){var en,H=v()(nn!=null?nn:[]);if(O.startsWith("/docs/spec")){var cn=H.splice(0,1);H.push.apply(H,v()(cn))}if(O.startsWith("/docs/react")){var xn,B=(xn=Object.entries(D).find(function(M){var p=S()(M,1),F=p[0];return F.startsWith("/changelog")}))===null||xn===void 0?void 0:xn[1];B&&H.splice(1,0,B[0])}if(O.startsWith("/changelog")){var c,E=(c=Object.entries(D).find(function(M){var p=S()(M,1),F=p[0];return F.startsWith("/docs/react")}))===null||c===void 0?void 0:c[1];E&&(H.unshift(E[0]),H.push.apply(H,v()(E.slice(1))))}return(en=H==null?void 0:H.reduce(function(M,p){if(p!=null&&p.title)if(O.startsWith("/docs/spec")){var F,ln,un=p.children.reduce(function(f,A){var $,K,sn=($=(K=A.frontmatter)===null||K===void 0?void 0:K.type)!==null&&$!==void 0?$:"default";return f[sn]||(f[sn]=[]),f[sn].push(A),f},{}),mn=[];mn.push.apply(mn,v()((F=(ln=un.default)===null||ln===void 0?void 0:ln.map(function(f){return{label:(0,t.jsxs)(r.Z,{to:"".concat(f.link).concat(N),children:[W,f==null?void 0:f.title,z]}),key:f.link.replace(/(-cn$)/g,"")}}))!==null&&F!==void 0?F:[])),Object.entries(un).forEach(function(f){var A=S()(f,2),$=A[0],K=A[1];$!=="default"&&mn.push({type:"group",label:$,key:$,children:K==null?void 0:K.map(function(sn){return{label:(0,t.jsxs)(r.Z,{to:"".concat(sn.link).concat(N),children:[W,sn==null?void 0:sn.title,z]}),key:sn.link.replace(/(-cn$)/g,"")}})})}),M.push({label:p==null?void 0:p.title,key:p==null?void 0:p.title,children:mn})}else{var pn;M.push({type:"group",label:p==null?void 0:p.title,key:p==null?void 0:p.title,children:(pn=p.children)===null||pn===void 0?void 0:pn.map(function(f){var A,$;return{label:(0,t.jsx)(h,{before:W,after:z,link:f.link,title:f==null?void 0:f.title,subtitle:(A=f.frontmatter)===null||A===void 0?void 0:A.subtitle,search:N,tag:($=f.frontmatter)===null||$===void 0?void 0:$.tag}),key:f.link.replace(/(-cn$)/g,"")}})})}else{var gn=p.children||[];gn.every(function(f){var A;return f==null||(A=f.frontmatter)===null||A===void 0?void 0:A.date})&&gn.sort(function(f,A){var $,K;return(($=f.frontmatter)===null||$===void 0?void 0:$.date)>((K=A.frontmatter)===null||K===void 0?void 0:K.date)?-1:1}),M.push.apply(M,v()(gn.map(function(f){var A;return{label:(0,t.jsx)(h,{before:W,after:z,link:f.link,title:f==null?void 0:f.title,search:N,tag:(A=f.frontmatter)===null||A===void 0?void 0:A.tag}),key:f.link.replace(/(-cn$)/g,"")}})))}return M},[]))!==null&&en!==void 0?en:[]},[nn,D,O,N,k]);return[an,O]};X.Z=j},148050:function(Pn,X,e){e.r(X);var on=e(168400),S=e.n(on),fn=e(667294),v=e(639389),P=e.n(v),w=e(879587),Sn=e(647759),s=e(785893),J,l="https://github.com/ant-design/ant-design/edit/master/",b=(0,Sn.kc)(function(Q){var Y=Q.token,u=Q.css,r=Y.colorIcon,d=Y.colorText,t=Y.iconCls;return{editButton:u(J||(J=S()([`
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
    `])),Y.marginXS,t,r,Y.fontSizeLG,Y.motionDurationSlow,d)}}),G=function(Y){var u=Y.title,r=Y.filename,d=b(),t=d.styles;return(0,s.jsx)(w.Z,{title:u,children:(0,s.jsx)("a",{className:t.editButton,href:"".concat(l).concat(r),target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(v.EditOutlined,{})})})};X.default=G},787729:function(Pn,X,e){e.r(X),e.d(X,{default:function(){return io}});var on=e(805574),S=e.n(on),fn=e(693967),v=e.n(fn),P=e(727484),w=e.n(P),Sn=e(533852),s=e(667294),J=e(75529),l=e(715778),b=e(385956),G=e(302559),Q=e(438746),Y=e(168400),u=e.n(Y),r=e(370917),d=e(647759),t=e(785893),C,x={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},L=function(){var n=(0,d.Fg)(),a=function g(y){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return m<=10?`
.palette-`.concat(y,"-").concat(m,` {
  background: `).concat(n["".concat(y,"-").concat(m)],`;
}
`).concat(g(y,m+1),`
    `):""},i=function g(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return y<=13?`
.palette-gray-`.concat(y,` {
  background: `).concat(x[y],`;
}
`).concat(g(y+1),`
    `):""};return(0,t.jsx)(r.xB,{styles:(0,r.iv)(C||(C=u()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-inline-end: 0;
              }

              .main-color-item {
                margin-inline-end: 0;

                &:hover {
                  margin-inline-end: -`,`px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 `,`px;
            font-size: `,`px;
            text-align: center;
          }

          &-picker {
            margin: `,`px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-inline-start: `,`px;
              font-size: `,`px;
              font-family: Consolas, sans-serif;
              .ant-row-rtl & {
                margin-inline-end: `,`px;
                margin-inline-start: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-inline-start: `,`px;
              color: `,`;
              font-size: `,`px;

              .ant-row-rtl & {
                margin-inline-end: `,`px;
                margin-inline-start: 0;
              }

              &-dark {
                margin-inline-start: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-inline-end: `,`px;
            padding: 0 `,`px;
            font-size: `,`px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all `,`;

            &:first-child {
              border-radius: `,"px ",`px 0 0;
            }

            &:last-child {
              border-radius: 0 0 `,"px ",`px;
            }

            &:hover {
              margin-inline-end: -`,`px;
              border-radius: 0 `,"px ",`px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all `,`;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all `,`;
          }
        }

        .color-title {
          margin: 0 0 `,`px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: `,`px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: `,"px ",`px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-inline-end: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: `,"px ",`px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: `,`px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),n.paddingXS,n.marginMD,n.fontSizeXL,n.marginLG,n.margin,n.fontSize,n.margin,n.margin,n.colorError,n.fontSize,n.margin,a("blue"),a("purple"),a("cyan"),a("green"),a("magenta"),a("red"),a("volcano"),a("orange"),a("gold"),a("yellow"),a("lime"),a("geekblue"),i(),n.marginXXS,n.paddingSM,n.fontSize,n.motionDurationMid,n.borderRadiusSM,n.borderRadiusSM,n.borderRadiusSM,n.borderRadiusSM,n.marginXS,n.borderRadiusSM,n.borderRadiusSM,n.motionDurationSlow,n.motionDurationSlow,n.marginLG,n.fontSize,n.paddingXL,n.paddingXL-4,n.borderRadiusSM,n.borderRadiusSM,n.paddingXS)})},rn=L,Cn,h=function(){var o=(0,d.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(Cn||(Cn=u()([`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          > a[aria-hidden]:first-child {
            float: left;
            width: 20px;
            padding-inline-end: `,`px;
            font-size: 0;
            line-height: inherit;
            text-align: right;
            padding-inline-end: `,`px;
            margin-inline-start: -`,`px;

            [data-direction='rtl'] & {
              float: right;
            }

            &:hover {
              border: 0;
            }

            > .icon-link::before {
              font-size: `,`px;
              content: '#';
            }
          }

          &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
            visibility: hidden;
          }
        }
      `])),o.paddingXXS,o.paddingXXS,o.marginLG,o.fontSizeXL)})},j,I=function(){var o=(0,d.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(j||(j=u()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),o.colorText,o.fontSize,o.fontFamily,o.lineHeight,o.colorBgContainer)})},k=e(693399),D,V=function(){var o=(0,d.Fg)(),n=o.anchorTop;return s.useInsertionEffect(function(){(0,k.updateCSS)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,t.jsx)(r.xB,{styles:(0,r.iv)(D||(D=u()([`
        @layer global {
          body,
          div,
          dl,
          dt,
          dd,
          ul,
          ol,
          li,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          pre,
          code,
          form,
          fieldset,
          legend,
          input,
          textarea,
          p,
          blockquote,
          th,
          td,
          hr,
          button,
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            margin: 0;
            padding: 0;
          }

          ul,
          ol {
            list-style: none;
          }

          img {
            vertical-align: middle;
            border-style: none;
          }

          [id] {
            scroll-margin-top: `,`px;
          }

          [data-prefers-color='dark'] {
            color-scheme: dark;
          }

          [data-prefers-color='light'] {
            color-scheme: light;
          }
        }
      `])),n)})},O=e(510274),N,nn=function(){var n=(0,d.Fg)(),a=n.antCls,i=n.colorPrimary;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(N||(N=u()([`
        .markdown {
          color: `,`;
          font-size: `,`px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: `,`px;
          margin-bottom: `,`px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-inline-start: `,`px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: `,`px;
        }

        .markdown h5 {
          font-size: `,`px;
        }

        .markdown h6 {
          font-size: `,`px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: `,`px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-inline-start: `,`px;
          padding-inline-start: `,`px;
          list-style-type: circle;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-inline-start: `,`px;
          padding-inline-start: `,`px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background-color: `,`;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: `,"px ",`px;
            font-size: `,`px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 `,`px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-inline-end: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-inline-start: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-inline-end: 0.8em;
            padding-inline-start: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-inline-start: `,`px;
          opacity: 0;
          transition: opacity `,`;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-inline-start: `,`px;
          text-decoration: none;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: `,`px;
            transition: all `,`;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: `,"px ",`px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all `,`;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: `,`;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: `,`px;
            margin-bottom: `,`px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: `,`px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),n.colorText,n.fontSize,n.marginXS,n.marginMD,n.colorTextHeading,n.fontFamily,n.marginSM,n.colorTextHeading,n.fontFamily,n.fontSizeLG,n.fontSize,n.fontSizeSM,n.marginLG,n.colorSplit,a,n.marginMD,n.paddingXXS,n.marginMD,n.paddingXXS,n.marginMD,n.paddingXXS,a,n.marginMD,n.paddingXXS,n.siteMarkdownCodeBg,n.colorSplit,n.borderRadiusSM,n.codeFamily,n.siteMarkdownCodeBg,n.borderRadius,n.colorText,Math.max(n.fontSize-1,12),n.colorBgLayout,n.siteMarkdownCodeBg,n.borderRadius,n.paddingSM,n.paddingMD,n.fontSize,n.marginMD,n.colorTextSecondary,n.colorSplit,n.colorSplit,n.marginXS,n.motionDurationSlow,n.marginXS,n.marginXS,n.marginXS,a,n.colorTextSecondary,n.fontSizeLG,n.motionDurationSlow,n.colorText,n.colorSplit,n.paddingSM,n.paddingLG,n.colorSplit,n.colorSplit,n.colorSplit,n.motionDurationSlow,Math.max(n.fontSize-1,12),n.codeFamily,n.lineHeight,n.colorSplit,n.colorText,n.fontWeightStrong,n.magenta7,Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),a,a,n.marginXS,n.marginXS,a,n.padding,i,new O.C(i).setAlpha(.75).toHex8String(),a,a,n.colorWhite,a,new O.C(i).setAlpha(.75).toHexString(),a,a,new O.C(i).setAlpha(.75).toHexString(),a,a,a,a,new O.C(i).setAlpha(.6).toHexString(),a,a,a)})},W=nn,z,an=function(){var o=(0,d.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(z||(z=u()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: `,"px ",`px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: `,`;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: `,`;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: `,`px 0;
          padding: `,"px ",`px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: `,`;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),o.padding,o.paddingXL,o.colorText,o.fontSize,o.borderRadius,o.colorText,o.lineHeightLG,o.margin,o.paddingSM,o.paddingMD,o.colorBgLayout)})},en,H=function(){var n=(0,d.Fg)(),a=n.antCls,i=n.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(en||(en=u()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 `,`px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all `,`;

          &.code-box-simplify {
            border-radius: 0;
            margin-bottom: 0;

            .code-box-demo {
              padding: 0;
              border-bottom: 0;
            }
          }

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: `,`px;
            cursor: pointer;
            opacity: 0.75;
            transition: all `,`;
            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: `,`px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: `,`px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: `,`px;

            `,` {
              color: `,`;
              transition: all `,`;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: `,`px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: `,`px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity `,`;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: `,`px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: `,"px ",`px;
              font-size: `,`px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
          display: flex;
          align-items: center;
          column-gap: `,`px;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),n.lineWidth*2,n.margin,n.colorBgContainer,n.colorSplit,n.borderRadiusLG,n.motionDurationMid,n.colorText,n.colorBgContainer,n.colorBgContainer,n.borderRadiusLG,n.borderRadiusLG,n.colorPrimary,n.fontSizeXL,n.motionDurationSlow,n.colorBgContainer,n.borderRadius,n.borderRadius,n.margin,n.colorText,n.fontSize,n.fontSizeSM,n.paddingXXS,i,n.colorTextSecondary,n.motionDurationSlow,n.colorText,a,a,n.colorText,n.colorSplit,n.fontSize,n.borderRadius,n.borderRadius,n.fontSizeSM,n.colorSplit,a,a,n.borderRadius,n.borderRadius,n.colorBgContainer,n.colorSplit,n.paddingSM,n.colorSplit,n.motionDurationSlow,n.colorTextSecondary,n.colorText,i,n.fontSize,n.colorBgContainer,i,n.green6,n.colorBgContainer,n.paddingSM,n.padding,n.fontSize,n.purple3,n.purple6,n.marginSM,a)})},cn=H,xn,B=function(){var o=(0,d.Fg)(),n=o.antCls,a=o.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(xn||(xn=u()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: `,`px;
            cursor: pointer;
            transition:
              color `,` ease-in-out,
              background-color `,` ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: `,"px 0 ",`px;
              font-size: 36px;
              transition: transform `,` ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color `,` ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all `,` cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: `,`px;
          background: `,`;
          border-radius: `,`px;
        }
      `])),o.borderRadiusSM,o.motionDurationSlow,o.motionDurationSlow,a,o.marginSM,o.marginXS,o.motionDurationSlow,n,o.motionDurationSlow,o.colorPrimary,a,n,o.motionDurationSlow,o.fontSizeSM,o.colorBgLayout,o.borderRadiusXS)})},c,E=function(){var o=(0,d.Fg)(),n=o.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(c||(c=u()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 `,`px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all `,`;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: `,`px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: `,`px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: `,`px;
                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),o.marginXS,o.colorIcon,o.motionDurationSlow,o.colorIconHover,o.paddingXS,o.colorBorder,o.borderRadiusSM,o.colorTextSecondary,n,o.fontSizeHeading2,o.colorLinkHover)})},M,p=function(){var o=(0,d.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(M||(M=u()([`
        /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

        .browser-mockup {
          position: relative;
          border-top: 2em solid rgba(230, 230, 230, 0.7);
          border-radius: `,"px ",`px 0 0;
          box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
        }

        .browser-mockup::before {
          position: absolute;
          top: -1.25em;
          left: 1em;
          display: block;
          width: 0.5em;
          height: 0.5em;
          background-color: #f44;
          border-radius: 50%;
          box-shadow:
            0 0 0 2px #f44,
            1.5em 0 0 2px #9b3,
            3em 0 0 2px #fb5;
          content: '';
        }

        .browser-mockup.with-tab::after {
          position: absolute;
          top: -2em;
          left: 5.5em;
          display: block;
          width: 20%;
          height: 0;
          border-right: 0.8em solid transparent;
          border-bottom: 2em solid white;
          border-left: 0.8em solid transparent;
          content: '';
        }

        .browser-mockup.with-url::after {
          position: absolute;
          top: -1.6em;
          left: 5.5em;
          display: block;
          width: calc(100% - 6em);
          height: 1.2em;
          background-color: #fff;
          border-radius: `,`px;
          content: '';
        }
        .browser-mockup > * {
          display: block;
        }
      `])),o.borderRadiusSM,o.borderRadiusSM,o.borderRadiusXS)})},F,ln=function(){var o=(0,d.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(F||(F=u()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-inline-end: 0;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: `,`px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-inline-start: `,`px;
            .ant-row-rtl & {
              margin-inline-end: `,`px;
              margin-inline-start: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: `,`px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: `,`px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: `,`px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 `,`px;
                  font-size: `,`px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: `,`px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: `,`px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;
              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 `,`px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: `,`px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: `,`px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: `,`px;
                    font-size: `,`px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: `,`px;
                    font-size: `,`px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background-image: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');
            background-repeat: no-repeat;
            background-size: cover;
            .ant-row {
              margin: 0 `,`px;
            }

            .page3-block {
              margin-bottom: `,`px;
              padding: `,`px;
              background: `,`;
              border-radius: `,`px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: `,`px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-inline-start: `,`px;
              }
            }
          }
        }
      `])),o.screenLG,o.padding,o.padding,o.margin,o.margin,o.marginMD,o.marginXL,o.fontSize,o.paddingMD,o.fontSize,o.marginXL,o.fontSize,o.colorBgContainer,o.padding,o.colorSplit,o.marginXL,o.marginXXS,o.marginXS,o.fontSizeSM,o.margin,o.fontSizeSM,o.colorLink,o.marginXS,o.marginXL,o.paddingLG,o.colorBgContainer,o.borderRadiusSM,o.fontSizeSM,o.padding)})},un,mn=function(){var o=(0,d.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(un||(un=u()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),o.colorPrimary,o.colorPrimary,o.colorPrimary,o.colorPrimary,o.colorPrimary)})},pn,gn=function(){var o=(0,d.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(pn||(pn=u()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-inline-start: `,`px;

          .ant-row-rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: `,`px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: `,`px;
          color: `,`;
          font-size: `,`px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: `,`px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: `,`px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all `,`;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow:
            0 1px 0 0 #ddd,
            0 3px 0 0 `,`,
            0 4px 0 0 #ddd,
            0 6px 0 0 `,`,
            0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: `,"px 0 ",`px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-inline-end: 12.5%;
            margin-bottom: `,`px;
            padding: `,`px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: `,`px;

            &:last-child {
              margin-inline-end: 0;
            }

            h4 {
              margin: `,"px 0 ",`px;
            }

            p {
              font-size: `,`px;
              line-height: 24px;
            }
          }
        }
      `])),o.marginLG,o.marginLG,o.padding,o.colorPrimary,o.colorError,o.marginMD,o.colorText,o.fontSizeSM,o.colorTextSecondary,o.fontSizeSM,o.paddingSM,o.colorBgContainer,o.borderRadius,o.motionDurationSlow,o.colorBgContainer,o.colorBgContainer,o.marginXXL,o.marginLG,o.marginLG,o.paddingLG,o.borderRadiusSM,o.margin,o.marginXS,o.fontSizeSM)})},f,A="dumi-default-",$=function(){var o=(0,d.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(f||(f=u()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),A,o.colorText,o.colorBgContainer,o.colorBgContainer,o.colorTextPlaceholder,A,o.colorBgElevated,o.colorBgElevated,A,o.controlItemBgActive,o.controlItemBgHover,o.colorText,o.colorText)})},K,sn=function(){var o=(0,d.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(K||(K=u()([`
        .design-inline-cards {
          display: flex;
          margin: 0 -`,`px;
        }
        .design-inline-cards > * {
          flex: 10%;
          margin: 0 `,`px;
        }
        .design-inline-cards img {
          width: 100%;
          max-width: 100%;
        }
        .design-inline-cards h4 {
          margin-bottom: 0;
        }
      `])),o.marginMD,o.marginMD)})},Ln=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I,{}),(0,t.jsx)(V,{}),(0,t.jsx)(W,{}),(0,t.jsx)(an,{}),(0,t.jsx)(cn,{}),(0,t.jsx)(B,{}),(0,t.jsx)(E,{}),(0,t.jsx)(p,{}),(0,t.jsx)(ln,{}),(0,t.jsx)(mn,{}),(0,t.jsx)(gn,{}),(0,t.jsx)(sn,{}),(0,t.jsx)(rn,{}),(0,t.jsx)(h,{}),(0,t.jsx)($,{})]})},On=Ln,Dn=e(97857),T=e.n(Dn),kn=e(9783),Tn=e.n(kn),Fn=e(639389),Nn=e.n(Fn),Vn=e(469181),Zn=e(344682),Xn=e(11739),Yn=e(709894),Kn=e(883458),de=e(722449),_n=function(n){var a=n.direction;return(0,t.jsx)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(a==="ltr"?"1":"-1",")")},children:(0,t.jsx)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"})})},qn=function(n){return(0,t.jsx)(Nn(),T()(T()({},n),{},{component:function(){return(0,t.jsx)(_n,{direction:n.direction})}}))},re=qn,nt=e(840070),Bn=e(373638),ae=e(438199),pe,ge,et=(0,d.kc)(function(o){var n=o.token,a=o.css,i=n.headerHeight,g=n.colorTextHeading,y=n.fontFamily,m=n.mobileMaxWidth;return{logo:a(pe||(pe=u()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: `,`px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,g,y,i,g,n.marginSM,m),title:a(ge||(ge=u()([`
      line-height: 32px;
    `])))}}),tt=function(n){var a=n.isZhCN,i=(0,b.useLocation)(),g=i.search,y=et(),m=y.styles;return(0,t.jsx)("h1",{children:(0,t.jsxs)(b.Link,{to:Bn.J1("/",a,g),className:m.logo,children:[(0,t.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,t.jsx)("span",{className:m.title,children:"Ant Design"})]})})},ot=tt,rt=e(719632),at=e.n(rt),he=e(24768),ne=e(472638),fe,it={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},lt=(0,d.kc)(function(o){var n=o.token,a=n.antCls,i=n.iconCls,g=n.fontFamily,y=n.fontSize,m=n.headerHeight,Z=n.menuItemBorder,R=n.colorPrimary,_=n.colorText;return{nav:(0,d.iv)(fe||(fe=u()([`
      height: 100%;
      font-size: `,`px;
      font-family: Avenir, `,`, sans-serif;
      border: 0 !important;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-inline-end: `,`px;
          padding-inline-start: `,`px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: '';
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),y,g,a,a,a,40+12*2,m,n.paddingSM,n.paddingSM,m,Z,_,a,i,a,R,a,a)}}),st=function(n){var a,i,g=n.isZhCN,y=n.isMobile,m=n.responsive,Z=n.directionText,R=n.onLangChange,_=n.onDirectionChange,dn=(0,b.useLocation)(),Mn=dn.pathname,tn=dn.search,hn=(0,G.default)(it),jn=S()(hn,1),wn=jn[0],U=(0,b.useFullSidebarData)(),vn=((a=U["/docs/blog"])===null||a===void 0||(a=a[0])===null||a===void 0?void 0:a.children)||[],q=lt(),En=q.styles,zn=y?"inline":"horizontal",Un=Mn.split("/").filter(Boolean).slice(0,-1).join("/"),bn=Un||"home";Mn.startsWith("/changelog")?bn="docs/react":Mn.startsWith("/docs/resources")&&(bn="docs/resources");var Rn=[],In=[{label:(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,t.jsx)(b.FormattedMessage,{id:"app.header.lang"}),onClick:R,key:"switch-lang"},{label:Z,onClick:_,key:"switch-direction"}];y?Rn=In:m==="crowded"&&(Rn=[{label:(0,t.jsx)(Fn.MenuOutlined,{}),key:"additional",children:[].concat(In)}]);var Hn=[{label:(0,t.jsx)(ne.Z,{to:Bn.J1("/docs/spec/introduce",g,tn),children:wn.design}),key:"docs/spec"},{label:(0,t.jsx)(ne.Z,{to:Bn.J1("/docs/react/introduce",g,tn),children:wn.development}),key:"docs/react"},{label:(0,t.jsx)(ne.Z,{to:Bn.J1("/components/overview/",g,tn),children:wn.components}),key:"components"},vn.length?{label:(0,t.jsx)(ne.Z,{to:Bn.J1(vn.sort(function(Wn,Gn){var ee,Qn;return((ee=Wn.frontmatter)===null||ee===void 0?void 0:ee.date)>((Qn=Gn.frontmatter)===null||Qn===void 0?void 0:Qn.date)?-1:1})[0].link,g,tn),children:wn.blog}),key:"docs/blog"}:null,{label:(0,t.jsx)(ne.Z,{to:Bn.J1("/docs/resources",g,tn),children:wn.resources}),key:"docs/resources"},g?{key:"mirror",label:(0,t.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"})}:null].concat(at()((i=Rn)!==null&&i!==void 0?i:[])).filter(Boolean);return(0,t.jsx)(he.Z,{mode:zn,selectedKeys:[bn],className:En.nav,disabledOverflow:!0,items:Hn})},dt=st,ct=e(879587),xe,ve,be,ye,Se,Jn="1.2em",ut=(0,d.kc)(function(o){var n=o.token,a=o.css,i=n.colorText,g=n.colorBorder,y=n.colorBgContainer,m=n.colorBgTextHover,Z=n.borderRadius,R=n.controlHeight,_=n.motionDurationMid;return{btn:a(xe||(xe=u()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,g,R,R,Z,_,_,m,Jn,Jn,Jn),innerDiv:a(ve||(ve=u()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Jn,Jn),labelStyle:a(be||(be=u()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Jn,i,i),label1Style:a(ye||(ye=u()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,y),label2Style:a(Se||(Se=u()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),mt=function(n){var a=n.label1,i=n.label2,g=n.tooltip1,y=n.tooltip2,m=n.value,Z=n.pure,R=n.onClick,_=ut(),dn=_.styles,Mn=dn.btn,tn=dn.innerDiv,hn=dn.labelStyle,jn=dn.label1Style,wn=dn.label2Style,U=(0,t.jsx)("button",{onClick:R,className:Mn,"aria-label":n["aria-label"],children:(0,t.jsxs)("div",{className:"btn-inner",children:[Z&&(m===1?a:i),!Z&&(0,t.jsxs)("div",{className:tn,children:[(0,t.jsx)("span",{className:v()(hn,m===1?jn:wn),children:a}),(0,t.jsx)("span",{className:v()(hn,m===1?wn:jn),children:i})]})]})},"lang-button");return g||y?(0,t.jsx)(ct.Z,{title:m===1?g:y,children:U}):U},ce=mt,we,Ce,je,Me,Ee,ke,Te=1120,Le=1200,pt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},gt=(0,d.kc)(function(o){var n=o.token,a=o.css,i="#ced4d9";return{header:a(we||(we=u()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
        border: none;
      }

      .dumi-default-search-bar {
        display: inline-flex;
        align-items: center;
        flex: auto;
        margin: 0;
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;
          max-width: calc(100vw - 768px);

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: `,`px;
          position: static;
          top: unset;
          transform: unset;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,i,i,i,n.borderRadiusSM),menuRow:a(Ce||(Ce=u()([`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: `,`px;
      padding-inline-end: `,`px;

      > * {
        flex: none;
        margin: 0;
      }
    `])),n.paddingSM,n.padding),dataDirectionIcon:a(je||(je=u()([`
      width: 20px;
    `]))),popoverMenu:Tn()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:a(Me||(Me=u()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:a(Ee||(Ee=u()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:a(ke||(ke=u()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-color: unset;
        }
      }
    `])))}}),ht=function(){var n=(0,G.default)(pt),a=S()(n,2),i=a[0],g=a[1],y=(0,b.useSiteData)(),m=y.pkg,Z=(0,Bn.Is)(),R=(0,s.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),_=S()(R,2),dn=_[0],Mn=_[1],tn=(0,s.useContext)(ae.Z),hn=tn.direction,jn=tn.isMobile,wn=tn.bannerVisible,U=tn.updateSiteConfig,vn=(0,s.useRef)(null),q=(0,b.useLocation)(),En=q.pathname,zn=q.search,Un=gt(),bn=Un.styles,Rn=(0,s.useCallback)(function(){Mn(function(yn){return T()(T()({},yn),{},{menuVisible:!1})})},[]),In=(0,s.useCallback)(function(){Mn(function(yn){return T()(T()({},yn),{},{windowWidth:window.innerWidth})})},[]),Hn=(0,s.useCallback)(function(yn){Mn(function(An){return T()(T()({},An),{},{menuVisible:yn})})},[]),Wn=function(){U({direction:hn!=="rtl"?"rtl":"ltr"})},Gn=function(){U({bannerVisible:!1}),Bn.Fy()&&localStorage.setItem(nt.ANT_DESIGN_NOT_SHOW_BANNER,w()().toISOString())};(0,s.useEffect)(function(){Rn()},[q]),(0,s.useEffect)(function(){return In(),window.addEventListener("resize",In),function(){window.removeEventListener("resize",In),vn.current&&clearTimeout(vn.current)}},[]);var ee=(0,s.useCallback)(function(yn){var An=window.location.href,se=window.location.pathname;if(/overview/.test(se)&&/0?[1-39][0-3]?x/.test(yn)){window.location.href=An.replace(window.location.origin,yn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(yn)?"":"/react","/introduce")).replace(/\/$/,"");return}var oe=new URL(An.replace(window.location.origin,yn));oe.host.includes("antgroup")?(oe.pathname="".concat(oe.pathname.replace(/\/$/,""),"/"),window.location.href=oe.toString()):window.location.href=oe.href.replace(/\/$/,"")},[]),Qn=(0,s.useCallback)(function(){var yn="".concat(window.location.protocol,"//"),An=window.location.href.slice(yn.length);Bn.Fy()&&localStorage.setItem("locale",Bn.KE(En)?"en-US":"zh-CN"),window.location.href=yn+An.replace(window.location.pathname,Bn.J1(En,!Bn.KE(En),zn).pathname)},[q]),lo=(0,s.useMemo)(function(){return hn!=="rtl"?"RTL":"LTR"},[hn]),so=(0,s.useMemo)(function(){return hn==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[hn]),co=dn.menuVisible,le=dn.windowWidth,Ve=dn.searching,Ke=T()(Tn()({},m.version,m.version),Z==null?void 0:Z.docVersions),uo=Object.keys(Ke).map(function(yn){return{value:Ke[yn],label:yn}}),Je=["","index","index-cn"].includes(En),Qe=g==="cn",mo=hn==="rtl",me=null;le<Te?me="crowded":le<Le&&(me="narrow");var po=v()(bn.header,"clearfix",{"home-header":Je}),Ye={isZhCN:Qe,isRTL:mo},_e=(0,t.jsx)(dt,T()(T()({},Ye),{},{responsive:me,isMobile:jn,directionText:lo,onLangChange:Qn,onDirectionChange:Wn}),"nav"),te=[_e,(0,t.jsx)(Vn.Z,{size:"small",className:bn.versionSelect,defaultValue:m.version,onChange:ee,dropdownStyle:so,popupMatchSelectWidth:!1,getPopupContainer:function(An){return An.parentNode},options:uo},"version"),(0,t.jsx)(ce,{onClick:Qn,value:Bn.KE(En)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,t.jsx)(ce,{onClick:Wn,value:hn==="rtl"?2:1,label1:(0,t.jsx)(re,{className:bn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,t.jsx)(re,{className:bn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(ce,{value:1,label1:(0,t.jsx)(Fn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];le<Te?te=Ve?[]:[_e]:le<Le&&(te=Ve?[]:te);var qe=Je?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,t.jsxs)("header",{className:po,children:[jn&&(0,t.jsx)(Zn.Z,{overlayClassName:bn.popoverMenu,placement:"bottomRight",content:te,trigger:"click",open:co,arrow:{pointAtCenter:!0},onOpenChange:Hn,children:(0,t.jsx)(Fn.MenuOutlined,{className:"nav-phone-icon"})}),Qe&&wn&&(0,t.jsx)(J.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,t.jsx)(Xn.Z,{className:bn.banner,message:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:jn?i.shortMessage:i.message}),(0,t.jsx)("a",{className:bn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var An,se;(An=(se=window).gtag)===null||An===void 0||An.call(se,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Gn})}),(0,t.jsxs)(Yn.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,t.jsx)(Kn.Z,T()(T()({},qe[0]),{},{children:(0,t.jsx)(ot,T()(T()({},Ye),{},{location:q}))})),(0,t.jsx)(Kn.Z,T()(T()({},qe[1]),{},{children:(0,t.jsxs)("div",{className:bn.menuRow,children:[(0,t.jsx)(de.ZP,{}),!jn&&te]})}))]})]})},ft=ht,go=e(945462),De=e(777502),xt=function(n){var a=n.children,i=n.title,g=n.desc;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.Helmet,{children:[(0,t.jsx)("title",{children:i}),(0,t.jsx)("meta",{property:"og:title",content:i}),g&&(0,t.jsx)("meta",{name:"description",content:g})]}),(0,t.jsx)("div",{style:{minHeight:"100vh"},children:a}),(0,t.jsx)(De.default,{})]})},vt=xt,bt=e(86198),Be=e(259696),ze=e(49313),yt=function(){var n=(0,b.useRouteMeta)(),a=s.useMemo(function(){var m;if(!n.frontmatter.subtitle&&!n.frontmatter.title)m="404 Not Found - Ant Design";else{var Z;m="".concat(n.frontmatter.subtitle||""," ").concat(((Z=n.frontmatter)===null||Z===void 0?void 0:Z.title)||""," - Ant Design")}var R=n.frontmatter.description||"";return[m,R]},[n]),i=S()(a,2),g=i[0],y=i[1];return(0,t.jsxs)(b.Helmet,{children:[(0,t.jsx)("title",{children:g}),(0,t.jsx)("meta",{property:"og:title",content:g}),y&&(0,t.jsx)("meta",{name:"description",content:y})]})},Ae=yt,St=e(148050),wt=e(468990),Ct=e(823493),jt=e.n(Ct),Mt=e(658192),Pe,Oe,Fe,Re=["scroll","resize"],Et=(0,d.kc)(function(o){var n=o.token,a=o.css,i=n.boxShadowSecondary,g=n.antCls;return{affixTabs:a(Pe||(Pe=u()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1001;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity `,`,
        transform `,`;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,n.motionDurationSlow,n.motionDurationSlow,g,g,g),affixTabsFixed:a(Oe||(Oe=u()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:a(Fe||(Fe=u()([`
      text-transform: capitalize;
    `])))}}),Ie=32,kt=function(){var n=s.useRef(null),a=s.useRef([]),i=s.useState(!1),g=S()(i,2),y=g[0],m=g[1],Z=s.useState(void 0),R=S()(Z,2),_=R[0],dn=R[1],Mn=Et(),tn=Mn.styles,hn=tn.affixTabs,jn=tn.affixTabsFixed,wn=tn.span;function U(q){var En=document.getElementById(q);if(En){var zn=En.offsetTop-n.current.offsetHeight-Ie;(0,Mt.Z)(zn)}}s.useEffect(function(){var q=document.querySelectorAll("h2[id]");a.current=Array.from(q).map(function(En){var zn=En.id;return zn}),m(!0)},[]),s.useEffect(function(){var q=decodeURIComponent((location.hash||"").slice(1));q&&U(q)},[y]);var vn=s.useMemo(function(){function q(){for(var En=window,zn=En.scrollY,Un=n.current.offsetHeight,bn=a.current.length-1;bn>=0;bn-=1){var Rn=a.current[bn],In=document.getElementById(Rn),Hn=In.offsetTop-Un-Ie;if(Hn<=zn){dn(Rn);return}}dn(void 0)}return jt()(q)},[]);return s.useEffect(function(){return Re.forEach(function(q){return window.addEventListener(q,vn)}),vn(),function(){Re.forEach(function(q){return window.removeEventListener(q,vn)})}},[]),(0,t.jsx)("div",{className:v()(hn,_&&jn),ref:n,children:(0,t.jsx)(wt.Z,{activeKey:_,centered:!0,size:"large",onChange:U,items:a.current.map(function(q){return{key:q,label:(0,t.jsx)("span",{className:wn,children:q.replace(/-/g," ")})}})})})},Tt=kt,Ne,He,We,Ze=40,ie=1208,ue=24,Lt=function(){var n=(0,ze.Z)();return(0,d.kc)(function(a){var i=a.token,g=a.css,y=i.antCls;return{resourcePage:g(Ne||(Ne=u()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),ie),resourceContent:g(He||(He=u()([`
        padding: 0 `,`px;
        max-width: `,`px;
        margin: 0 auto;
        box-sizing: content-box;
        min-height: 100vh;

        @media only screen and (max-width: 767.99px) {
          & {
            article {
              padding: 0 `,`px;
            }
            `,`-col {
              padding-top: `,`px !important;
              padding-bottom: `,`px !important;
            }
          }
        }
      `])),Ze,ie,ue,y,i.padding,i.padding),banner:g(We||(We=u()([`
        padding: 0 `,`px;
        overflow: hidden;
        `,`
        background-size: cover;

        h1 {
          box-sizing: content-box;
          max-width: `,`px;
          margin: 56px auto 16px;
        }

        section {
          max-width: `,`px;
          margin: 0 auto 56px;
          font-weight: 200;
          font-size: `,`px;
          line-height: 24px;
        }

        @media only screen and (max-width: 767.99px) {
          & {
            margin: 0 -`,`px;
            padding: 0 `,`px;
          }
        }
      `])),Ze,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",ie,ie,i.fontSizeLG,ue,ue)}})()},Dt=function(n){var a,i=n.children,g=Lt(),y=g.styles,m=(0,b.useRouteMeta)(),Z=(0,ze.Z)(),R=(0,t.jsxs)(bt.Z,{children:[(0,t.jsx)(Ae,{}),(0,t.jsxs)("div",{id:"resources-page",className:y.resourcePage,children:[(0,t.jsx)(Tt,{}),(0,t.jsxs)("div",{className:y.banner,children:[(0,t.jsxs)(Be.Z.Title,{style:{fontSize:30},children:[(a=m.frontmatter)===null||a===void 0?void 0:a.title,(0,t.jsx)(St.default,{title:(0,t.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:m.frontmatter.filename})]}),(0,t.jsx)("section",{children:m.frontmatter.description})]}),(0,t.jsx)("div",{className:y.resourceContent,children:i}),(0,t.jsx)(De.default,{})]})]});return Z?R:(0,t.jsx)(J.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:R})},Bt=Dt,zt=e(106750),At=e(217187),Pt=e(340908),Ot=e(524229),Ft=e(548657),Rt=e(442708),It=function(n){var a=n.children,i=n.fallback,g=i===void 0?(0,t.jsx)(Ft.Z.Input,{active:!0,size:"small"}):i,y=n.delay,m=y===void 0?200:y;return(0,t.jsx)(Rt.df,{triggerOnce:!0,delay:m,children:function(R){var _=R.inView,dn=R.ref;return(0,t.jsx)("div",{ref:dn,children:(0,t.jsx)(s.Suspense,{fallback:g,children:_?a:(0,t.jsx)("span",{})})})}})},$n=It,Xe,Nt=s.lazy(function(){return Promise.all([e.e(3156),e.e(7721)]).then(e.bind(e,617721))}),Ht=s.lazy(function(){return e.e(9148).then(e.bind(e,349148))}),Wt=s.lazy(function(){return e.e(8301).then(e.bind(e,368301))}),Zt=s.lazy(function(){return e.e(8598).then(e.bind(e,458598))}),Xt=s.lazy(function(){return Promise.resolve().then(e.bind(e,777502))}),$t=s.lazy(function(){return e.e(6720).then(e.bind(e,366720))}),Ut=s.lazy(function(){return Promise.all([e.e(1249),e.e(9285),e.e(5557)]).then(e.bind(e,135557))}),Gt=s.lazy(function(){return Promise.resolve().then(e.bind(e,148050))}),Vt=(0,d.kc)(function(o){var n=o.token,a=o.css;return{articleWrapper:a(Xe||(Xe=u()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 `,`px;
      }
    }
  `])),n.screenLG,n.paddingLG*2)}}),Kt=function(n){var a,i,g,y=n.children,m=(0,b.useRouteMeta)(),Z=(0,Q.Z)(),R=Z.pathname,_=Z.hash,dn=(0,s.useContext)(ae.Z),Mn=dn.direction,tn=Vt(),hn=tn.styles,jn=(0,At.Z)(!1),wn=S()(jn,2),U=wn[0],vn=wn[1],q=(0,s.useState)("tsx"),En=S()(q,2),zn=En[0],Un=En[1],bn=(0,s.useMemo)(function(){var Wn;return((Wn=m.toc)===null||Wn===void 0?void 0:Wn.filter(function(Gn){return Gn._debug_demo}).map(function(Gn){return Gn.id}))||[]},[m]),Rn=bn.includes(_.slice(1));(0,s.useLayoutEffect)(function(){vn(Rn)},[]);var In=(0,s.useMemo)(function(){return{showDebug:U,setShowDebug:vn,codeType:zn,setCodeType:Un}},[U,zn,bn]),Hn=Mn==="rtl";return(0,t.jsx)(Ot.Z.Provider,{value:In,children:(0,t.jsxs)(Kn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,t.jsx)($n,{fallback:null,children:(0,t.jsx)(Wt,{showDebug:U,debugDemos:bn})}),(0,t.jsxs)("article",{className:v()(hn.articleWrapper,{rtl:Hn}),children:[(a=m.frontmatter)!==null&&a!==void 0&&a.title?(0,t.jsxs)(Be.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,t.jsxs)(zt.Z,{gap:"small",children:[(0,t.jsx)("div",{children:(i=m.frontmatter)===null||i===void 0?void 0:i.title}),(0,t.jsx)("div",{children:(g=m.frontmatter)===null||g===void 0?void 0:g.subtitle}),!R.startsWith("/components/overview")&&(0,t.jsx)($n,{fallback:null,children:(0,t.jsx)(Gt,{title:(0,t.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:m.frontmatter.filename})})]}),R.startsWith("/components/")&&(0,t.jsx)($n,{fallback:null,children:(0,t.jsx)(Ut,{pathname:R})})]}):null,(0,t.jsx)($n,{fallback:null,children:(0,t.jsx)(Zt,{})}),!m.frontmatter.__autoDescription&&m.frontmatter.description,m.frontmatter.category==="Components"&&String(m.frontmatter.showImport)!=="false"&&(0,t.jsx)(Pt.Z,{source:!0,component:m.frontmatter.title,filename:m.frontmatter.filename,version:m.frontmatter.tag}),(0,t.jsx)("div",{style:{minHeight:"calc(100vh - 64px)",width:"calc(100% - 10px)"},children:y}),(0,t.jsx)($n,{children:(0,t.jsx)(Ht,{zhihuLink:m.frontmatter.zhihu_url,yuqueLink:m.frontmatter.yuque_url,juejinLink:m.frontmatter.juejin_url})}),(0,t.jsx)($n,{fallback:(0,t.jsx)("div",{style:{height:50,marginTop:120}}),children:(0,t.jsx)(Nt,{filename:m.frontmatter.filename})})]}),(0,t.jsx)($n,{fallback:null,children:(0,t.jsx)($t,{rtl:Hn})}),(0,t.jsx)(Xt,{})]})})},Jt=Kt,Qt=e(650010),Yt=e(361446),$e,Ue,_t=(0,d.kc)(function(o){var n=o.token,a=o.css,i=n.antCls,g=n.fontFamily,y=n.colorSplit;return{asideContainer:a($e||($e=u()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: `,`px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: `,`px;
          margin-bottom: `,`px;
          font-size: `,`px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-inline-start: 40px !important;

          `,`-row-rtl & {
            padding-inline-end: 40px !important;
            padding-inline-start: `,`px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-inline-start: `,`px;
            padding-inline-start: 60px;

            `,`-row-rtl & {
              padding-inline-end: 60px;
              padding-inline-start: `,`px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-inline-start: 80px !important;

            `,`-row-rtl & {
              padding-inline-end: 80px !important;
              padding-inline-start: `,`px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }
    `])),g,i,i,i,i,n.fontSize,i,i,n.margin,n.margin,n.fontSize,y,i,i,i,i,i,i,i,i,i,i,i,i,i,n.padding,i,i,n.marginXXS,i,n.padding,i,i,i,n.padding,i,i),mainMenu:a(Ue||(Ue=u()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
        scrollbar-width: thin;
        scrollbar-color: unset;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),qt=function(){var n=(0,b.useSidebarData)(),a=(0,s.useContext)(ae.Z),i=a.isMobile,g=a.theme,y=_t(),m=y.styles,Z=(0,Yt.Z)(),R=S()(Z,2),_=R[0],dn=R[1],Mn=g.includes("dark"),tn=(0,d.Fg)(),hn=tn.colorBgContainer,jn=(0,t.jsx)(J.ZP,{theme:{components:{Menu:{itemBg:hn,darkItemBg:hn}}},children:(0,t.jsx)(he.Z,{items:_,inlineIndent:30,className:m.asideContainer,mode:"inline",theme:Mn?"dark":"light",selectedKeys:[dn],defaultOpenKeys:n==null?void 0:n.map(function(wn){var U=wn.title;return U}).filter(Boolean)})});return i?(0,t.jsx)(Qt.Z,{children:jn},"Mobile-menu"):(0,t.jsx)(Kn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:m.mainMenu,children:(0,t.jsx)("section",{className:"main-menu-inner",children:jn})})},no=qt,Ge,eo=(0,d.kc)(function(o){var n=o.css,a=o.token;return{main:n(Ge||(Ge=u()([`
    display: flex;
    margin-top: `,`px;
  `])),a.contentMarginTop)}}),to=function(n){var a=n.children,i=eo(),g=i.styles;return(0,t.jsxs)("main",{className:g.main,children:[(0,t.jsx)(Ae,{}),(0,t.jsx)(no,{}),(0,t.jsx)(Jt,{children:a})]})},oo=to,ro={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},ao=function(){var n=(0,b.useOutlet)(),a=(0,Q.Z)(),i=a.pathname,g=a.search,y=a.hash,m=(0,G.default)(ro),Z=S()(m,2),R=Z[0],_=Z[1],dn=(0,s.useRef)(null),Mn=(0,s.useContext)(ae.Z),tn=Mn.direction,hn=(0,b.useSiteData)(),jn=hn.loading;(0,s.useLayoutEffect)(function(){_==="cn"?w().locale("zh-cn"):w().locale("en")},[]),(0,s.useEffect)(function(){var U=document.getElementById("nprogress-style");U&&(dn.current=setTimeout(function(){var vn;(vn=U.parentNode)===null||vn===void 0||vn.removeChild(U)},0))},[]),(0,s.useEffect)(function(){var U=y.replace("#","");if(U){var vn;(vn=document.getElementById(decodeURIComponent(U)))===null||vn===void 0||vn.scrollIntoView()}},[jn,y]),(0,s.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+g)},[a]);var wn=s.useMemo(function(){return["","/"].some(function(U){return U===i})||["/index"].some(function(U){return i.startsWith(U)})?(0,t.jsx)(vt,{title:R.title,desc:R.description,children:n}):i.startsWith("/docs/resource")?(0,t.jsx)(Bt,{children:n}):i.startsWith("/theme-editor")?n:(0,t.jsx)(oo,{children:n})},[i,n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.Helmet,{encodeSpecialCharacters:!1,children:[(0,t.jsx)("html",{lang:_==="cn"?"zh-CN":_,"data-direction":tn,className:v()({rtl:tn==="rtl"})}),(0,t.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,t.jsx)("meta",{property:"og:description",content:R.description}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,t.jsxs)(J.ZP,{direction:tn,locale:_==="cn"?l.default:void 0,children:[(0,t.jsx)(On,{}),(0,t.jsx)(ft,{}),wn]})]})},io=ao},840070:function(Pn,X,e){e.r(X),e.d(X,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return D},default:function(){return N}});var on=e(97857),S=e.n(on),fn=e(805574),v=e.n(fn),P=e(667294),w=e(900210),Sn=e(368655),s=e(359020),J=e(965516),l=e(471232),b=e(385956),G=e(49313),Q=e(217187),Y=e(438746),u=e(513769),r=e.n(u),d=e(75529),t=e(647759),C=e(438199),x=e(785893),L=["children","theme"],rn=64,Cn=38,h=function(W){var z=W.children,an=W.theme,en=r()(W,L),H=(0,P.useContext)(d.ZP.ConfigContext),cn=H.getPrefixCls,xn=H.iconPrefixCls,B=cn(),c=J.Z.useToken(),E=c.token,M=(0,P.useContext)(C.Z),p=M.bannerVisible;return P.useEffect(function(){d.ZP.config({theme:an})},[an]),(0,x.jsx)(t.f6,S()(S()({},en),{},{theme:an,customToken:{headerHeight:rn,bannerHeight:Cn,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:E.colorFillTertiary,antCls:".".concat(B),iconCls:".".concat(xn),marginFarXS:E.marginXXL/6*7,marginFarSM:E.marginXXL/3*5,marginFar:E.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:rn+E.margin+(p?Cn:0)},children:z}))},j=h,I=P.lazy(function(){return Promise.all([e.e(7898),e.e(4137),e.e(263)]).then(e.bind(e,531434))}),k=768,D="ANT_DESIGN_NOT_SHOW_BANNER",V=function(){var W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return W.map(function(z){return z==="dark"?J.Z.darkAlgorithm:z==="compact"?J.Z.compactAlgorithm:null}).filter(Boolean)},O=function(){var W=(0,b.useOutlet)(),z=(0,Y.Z)(),an=z.pathname,en=(0,b.useSearchParams)(),H=v()(en,2),cn=H[0],xn=H[1],B=(0,Q.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),c=v()(B,2),E=c[0],M=E.theme,p=M===void 0?[]:M,F=E.direction,ln=E.isMobile,un=E.bannerVisible,mn=un===void 0?!1:un,pn=c[1],gn=(0,P.useCallback)(function(T){pn(function(Fn){return S()(S()({},Fn),T)});var kn=cn.toString(),Tn=cn;Object.entries(T).forEach(function(Fn){var Nn=v()(Fn,2),Vn=Nn[0],Zn=Nn[1];if(Vn==="direction"&&(Zn==="rtl"?Tn.set("direction","rtl"):Tn.delete("direction")),Vn==="theme"){var Xn;Tn=(0,b.createSearchParams)(S()(S()({},Tn),{},{theme:Zn.filter(function(Yn){return Yn!=="light"})})),(Xn=document.querySelector("html"))===null||Xn===void 0||Xn.setAttribute("data-prefers-color",Zn.includes("dark")?"dark":"light")}}),Tn.toString()!==kn&&xn(Tn)},[cn,xn]),f=function(){gn({isMobile:window.innerWidth<k})};(0,P.useEffect)(function(){var T=cn.getAll("theme"),kn=cn.get("direction");return pn({theme:T,direction:kn==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",T.includes("dark")?"dark":"light"),f(),window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}},[]);var A=P.useMemo(function(){return{direction:F,updateSiteConfig:gn,theme:p,isMobile:ln,bannerVisible:mn}},[ln,F,gn,p,mn]),$=P.useMemo(function(){return{algorithm:V(p),token:{motion:!p.includes("motion-off")},cssVar:!0,hashed:!1}},[p]),K=P.useState(function(){return(0,w.createCache)()}),sn=v()(K,1),Ln=sn[0];(0,b.useServerInsertedHTML)(function(){var T=(0,w.extractStyle)(Ln,{plain:!0,types:"style"});return(0,x.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:T}})}),(0,b.useServerInsertedHTML)(function(){var T=(0,w.extractStyle)(Ln,{plain:!0,types:["cssVar","token"]});return(0,x.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:T}})}),(0,b.useServerInsertedHTML)(function(){return(0,x.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,s.$Z)()}})});var On=an.startsWith("/~demos"),Dn=W;return On||(Dn=(0,x.jsxs)(l.Z,{children:[W,(0,x.jsx)(P.Suspense,{children:(0,x.jsx)(I,{value:p,onChange:function(kn){return gn({theme:kn})}})})]})),(0,x.jsx)(G.f.Provider,{value:p.includes("dark"),children:(0,x.jsx)(w.StyleProvider,{cache:Ln,linters:[w.legacyNotSelectorLinter,w.parentSelectorLinter,w.NaNLinter],children:(0,x.jsx)(C.Z.Provider,{value:A,children:(0,x.jsx)(j,{theme:$,children:(0,x.jsx)(Sn.HappyProvider,{disabled:!p.includes("happy-work"),children:Dn})})})})})},N=O},777502:function(Pn,X,e){e.r(X),e.d(X,{default:function(){return I}});var on=e(805574),S=e.n(on),fn=e(168400),v=e.n(fn),P=e(667294),w=e(639389),Sn=e(510274),s=e(647759),J=e(630770),l=e(385956),b=e(391298),G=e(302559),Q=e(438746),Y=e(438199),u=e(693399),r=e(785893),d="ant-where-checker",t={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function C(){var k=(0,G.default)(t),D=S()(k,1),V=D[0],O=P.useState(!0),N=S()(O,2),nn=N[0],W=N[1];return P.useEffect(function(){var z=document.createElement("p");z.className=d,z.style.position="fixed",z.style.pointerEvents="none",z.style.visibility="hidden",z.style.width="0",document.body.appendChild(z),(0,u.updateCSS)(`
:where(.`.concat(d,`) {
  content: "__CHECK__";
}
    `),d);var an=getComputedStyle(z),en=an.content;W(String(en).includes("CHECK")),document.body.removeChild(z),(0,u.removeCSS)(d)},[]),nn?null:(0,r.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[V.whereNotSupport," ",(0,r.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:V.whereDocUrl,children:V.whereDocTitle})]})})}var x=C,L,rn,Cn={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},h=function(){var D=(0,P.useContext)(Y.Z),V=D.isMobile;return(0,s.kc)(function(O){var N=O.token,nn=O.css,W=new Sn.C((0,J.Z)("#f0f3fa","#fff")).onBackground(N.colorBgContainer).toHexString();return{holder:nn(L||(L=v()([`
        background: `,`;
      `])),W),footer:nn(rn||(rn=v()([`
        background: `,`;
        color: `,`;
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

        * {
          box-sizing: border-box;
        }

        h2,
        a {
          color: `,`;
        }

        .rc-footer-column {
          margin-bottom: `,`px;
          :last-child {
            margin-bottom: `,`px;
          }
        }

        .rc-footer-item-icon {
          top: -1.5px;
        }

        .rc-footer-container {
          max-width: 1208px;
          margin-inline: auto;
          padding-inline: `,`px;
        }

        .rc-footer-bottom {
          box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
          .rc-footer-bottom-container {
            font-size: `,`px;
          }
        }
      `])),W,N.colorTextSecondary,N.colorText,V?60:0,V?20:0,N.marginXXL,N.fontSize)}})()},j=function(){var D=(0,Q.Z)(),V=(0,G.default)(Cn),O=S()(V,2),N=O[0],nn=O[1],W=h(),z=W.styles,an=D.getLink,en=P.useMemo(function(){var H=nn==="cn",cn={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:H?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:H?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:H?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},xn={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,r.jsx)(w.AntDesignOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,r.jsx)(w.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,r.jsx)(w.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(w.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,r.jsx)(w.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};H&&xn.items.push({icon:(0,r.jsx)(w.UsergroupAddOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:an("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var B={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,r.jsx)(w.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(w.HistoryOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:an("/changelog"),LinkComponent:l.Link},{icon:(0,r.jsx)(w.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:an("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,r.jsx)(w.BugOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,r.jsx)(w.IssuesCloseOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,r.jsx)(w.MessageOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,r.jsx)(w.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,r.jsx)(w.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},c={icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,r.jsx)(w.BgColorsOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:an("/theme-editor"),LinkComponent:l.Link}]};return[cn,xn,B,c]},[nn,D.search]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{columns:en,className:z.footer,bottom:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,r.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,r.jsx)("div",{children:N.owner})]})}),(0,r.jsx)(x,{})]})},I=j},373638:function(Pn,X,e){e.d(X,{J1:function(){return l},Is:function(){return u},Fy:function(){return G},KE:function(){return J},qE:function(){return b}});var on=e(661227),S=e(805574),fn=e(97857),v=e(385564),P=e(842348),w=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),Sn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":w?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function s(r,d,t,C){var x=r.map(function(h){return h.meta}).filter(function(h){return!h.skip}),L=[],rn=function(j,I){return(j.order||0)-(I.order||0)};x.sort(rn).forEach(function(h){if(h.category&&(h.category=h.category[d]||h.category),h.type&&(h.type=h.type[d]||h.type),h!=null&&h.title&&(h.title=h.title[d]||h.title),!h.category){L.push(h);return}if(h.category==="Components"&&h.type){var j=L.find(function(D){return(D==null?void 0:D.title)===h.type});j||(j={type:"type",title:h.type,children:[],order:C[h.type]},L.push(j)),j.children=j.children||[],j.children.push(h);return}var I=L.find(function(D){return(D==null?void 0:D.title)===h.category});if(I||(I={type:"category",title:h.category,children:[],order:t[h.category]},L.push(I)),I.children=I.children||[],h.type){var k=I.children.filter(function(D){return(D==null?void 0:D.title)===h.type})[0];k||(k={type:"type",title:h.type,children:[],order:C[h.type]},I.children.push(k)),k.children=k.children||[],k.children.push(h)}else I.children.push(h)});function Cn(h){return h.sort(rn).map(function(j){return j.children?_objectSpread(_objectSpread({},j),{},{children:Cn(j.children)}):j})}return Cn(L)}function J(r){return/-cn\/?$/.test(r)}function l(r,d,t,C){var x=r.startsWith("/")?r:"/".concat(r),L;if(d?x==="/"?L="/index-cn":x.endsWith("/")?L=x.replace(/\/$/,"-cn/"):(L="".concat(x,"-cn"),L=L.replace(/(-cn)+/,"-cn")):L=/\/?index-cn/.test(x)?"/":x.replace("-cn",""),C){var rn=C[d?"zhCN":"enUS"];L+="#".concat(rn)}return{pathname:L,search:t}}function b(r){var d="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",t=new Image,C,x=function(rn){C||(C=!0,t.src="",r(rn))};return t.onload=function(){return x("responded")},t.onerror=function(){return x("error")},t.src=d,setTimeout(function(){return x("timeout")},1500)}function G(){var r="test",d=window.localStorage;try{return d.setItem(r,"1"),d.removeItem(r),!0}catch(t){return!1}}function Q(r){return new Promise(function(d,t){var C=document.createElement("script");C.type="text/javascript",C.src=r,C.onload=d,C.onerror=t,document.head.appendChild(C)})}function Y(r){var d=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(r))return"";var t=flattenDeep(r.filter(function(C){if(Array.isArray(C)){var x=_slicedToArray(C,1),L=x[0];return L==="p"}return!1}).map(function(C){var x=flatten(C),L=_toArray(x),rn=L[0],Cn=L.slice(1),h=Cn.filter(function(j){return typeof j=="string"&&!d.includes(j)}).join("");return[rn,h]})).find(function(C){return C&&typeof C=="string"&&!d.includes(C)});return t}var u=function(){return Sn}},647727:function(Pn,X,e){e.d(X,{Z:function(){return on.Z}});var on=e(843534)},471232:function(Pn,X,e){e.d(X,{Z:function(){return Cn}});var on=e(97857),S=e.n(on),fn=e(805574),v=e.n(fn),P=e(667294),w=e(693967),Sn=e.n(w),s=e(544695),J=e(73287),l=e(215570),b=e(269924),G=e(890887),Q=e(414466),Y=e(9783),u=e.n(Y),r=e(286665),d=function(j){var I=j.componentCls,k=j.colorText,D=j.fontSize,V=j.lineHeight,O=j.fontFamily;return u()({},I,{color:k,fontSize:D,lineHeight:V,fontFamily:O})},t=function(){return{}},C=(0,r.I$)("App",d,t),x=e(785893),L=function(){return P.useContext(Q.Z)},rn=function(j){var I=j.prefixCls,k=j.children,D=j.className,V=j.rootClassName,O=j.message,N=j.notification,nn=j.style,W=j.component,z=W===void 0?"div":W,an=(0,P.useContext)(J.E_),en=an.getPrefixCls,H=en("app",I),cn=C(H),xn=v()(cn,3),B=xn[0],c=xn[1],E=xn[2],M=Sn()(c,H,D,V,E),p=(0,P.useContext)(Q.J),F=P.useMemo(function(){return{message:S()(S()({},p.message),O),notification:S()(S()({},p.notification),N)}},[O,N,p.message,p.notification]),ln=(0,l.Z)(F.message),un=v()(ln,2),mn=un[0],pn=un[1],gn=(0,G.Z)(F.notification),f=v()(gn,2),A=f[0],$=f[1],K=(0,b.Z)(),sn=v()(K,2),Ln=sn[0],On=sn[1],Dn=P.useMemo(function(){return{message:mn,notification:A,modal:Ln}},[mn,A,Ln]);(0,s.ln)("App")(!(E&&z===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");var T=z===!1?P.Fragment:z,kn={className:M,style:nn};return B((0,x.jsx)(Q.Z.Provider,{value:Dn,children:(0,x.jsx)(Q.J.Provider,{value:F,children:(0,x.jsxs)(T,S()(S()({},z===!1?void 0:kn),{},{children:[On,pn,$,k]}))})}))};rn.useApp=L;var Cn=rn},86198:function(Pn,X,e){e.d(X,{Z:function(){return xn}});var on=e(719632),S=e.n(on),fn=e(9783),v=e.n(fn),P=e(805574),w=e.n(P),Sn=e(513769),s=e.n(Sn),J=e(97857),l=e.n(J),b=e(667294),G=e(693967),Q=e.n(G),Y=e(518475),u=e(73287),r=e(121790),d=e(45598),t=e(296708);function C(B,c,E){if(typeof E=="boolean")return E;if(B.length)return!0;var M=(0,d.default)(c);return M.some(function(p){return p.type===t.Z})}var x=e(900210),L=e(286665),rn=function(c){var E=c.componentCls,M=c.bodyBg,p=c.lightSiderBg,F=c.lightTriggerBg,ln=c.lightTriggerColor;return v()({},"".concat(E,"-sider-light"),v()(v()({background:p},"".concat(E,"-sider-trigger"),{color:ln,background:F}),"".concat(E,"-sider-zero-width-trigger"),{color:ln,background:F,border:"1px solid ".concat(M),borderInlineStart:0}))},Cn=rn,h=function(c){var E=c.antCls,M=c.componentCls,p=c.colorText,F=c.triggerColor,ln=c.footerBg,un=c.triggerBg,mn=c.headerHeight,pn=c.headerPadding,gn=c.headerColor,f=c.footerPadding,A=c.triggerHeight,$=c.zeroTriggerHeight,K=c.zeroTriggerWidth,sn=c.motionDurationMid,Ln=c.motionDurationSlow,On=c.fontSize,Dn=c.borderRadius,T=c.bodyBg,kn=c.headerBg,Tn=c.siderBg;return v()(v()(v()(v()({},M,l()(l()(v()(v()(v()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:T,"&, *":{boxSizing:"border-box"}},"&".concat(M,"-has-sider"),v()({flexDirection:"row"},"> ".concat(M,", > ").concat(M,"-content"),{width:0})),"".concat(M,"-header, &").concat(M,"-footer"),{flex:"0 0 auto"}),"".concat(M,"-sider"),{position:"relative",minWidth:0,background:Tn,transition:"all ".concat(sn,", background 0s"),"&-children":v()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(E,"-menu").concat(E,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:A},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:A,color:F,lineHeight:(0,x.unit)(A),textAlign:"center",background:un,cursor:"pointer",transition:"all ".concat(sn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:mn,insetInlineEnd:c.calc(K).mul(-1).equal(),zIndex:1,width:K,height:$,color:F,fontSize:c.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Tn,borderStartStartRadius:0,borderStartEndRadius:Dn,borderEndEndRadius:Dn,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Ln," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Ln),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:c.calc(K).mul(-1).equal(),borderStartStartRadius:Dn,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:Dn}}}}),Cn(c)),{},{"&-rtl":{direction:"rtl"}})),"".concat(M,"-header"),v()({height:mn,padding:pn,color:gn,lineHeight:(0,x.unit)(mn),background:kn},"".concat(E,"-menu"),{lineHeight:"inherit"})),"".concat(M,"-footer"),{padding:f,color:p,fontSize:On,background:ln}),"".concat(M,"-content"),{flex:"auto",color:p,minHeight:0})},j=function(c){var E=c.colorBgLayout,M=c.controlHeight,p=c.controlHeightLG,F=c.colorText,ln=c.controlHeightSM,un=c.marginXXS,mn=c.colorTextLightSolid,pn=c.colorBgContainer,gn=p*1.25;return{colorBgHeader:"#001529",colorBgBody:E,colorBgTrigger:"#002140",bodyBg:E,headerBg:"#001529",headerHeight:M*2,headerPadding:"0 ".concat(gn,"px"),headerColor:F,footerPadding:"".concat(ln,"px ").concat(gn,"px"),footerBg:E,siderBg:"#001529",triggerHeight:p+un*2,triggerBg:"#002140",triggerColor:mn,zeroTriggerWidth:p,zeroTriggerHeight:p,lightSiderBg:pn,lightTriggerBg:pn,lightTriggerColor:F}},I=(0,L.I$)("Layout",function(B){return[h(B)]},j,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),k=e(785893),D=["prefixCls","suffixCls","className","tagName"],V=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function O(B){var c=B.suffixCls,E=B.tagName,M=B.displayName;return function(p){var F=b.forwardRef(function(ln,un){return(0,k.jsx)(p,l()({ref:un,suffixCls:c,tagName:E},ln))});return F}}var N=b.forwardRef(function(B,c){var E=B.prefixCls,M=B.suffixCls,p=B.className,F=B.tagName,ln=s()(B,D),un=b.useContext(u.E_),mn=un.getPrefixCls,pn=mn("layout",E),gn=I(pn),f=w()(gn,3),A=f[0],$=f[1],K=f[2],sn=M?"".concat(pn,"-").concat(M):pn;return A((0,k.jsx)(F,l()({className:Q()(E||sn,p,$,K),ref:c},ln)))}),nn=b.forwardRef(function(B,c){var E=b.useContext(u.E_),M=E.direction,p=b.useState([]),F=w()(p,2),ln=F[0],un=F[1],mn=B.prefixCls,pn=B.className,gn=B.rootClassName,f=B.children,A=B.hasSider,$=B.tagName,K=B.style,sn=s()(B,V),Ln=(0,Y.default)(sn,["suffixCls"]),On=b.useContext(u.E_),Dn=On.getPrefixCls,T=On.layout,kn=Dn("layout",mn),Tn=C(ln,f,A),Fn=I(kn),Nn=w()(Fn,3),Vn=Nn[0],Zn=Nn[1],Xn=Nn[2],Yn=Q()(kn,v()(v()({},"".concat(kn,"-has-sider"),Tn),"".concat(kn,"-rtl"),M==="rtl"),T==null?void 0:T.className,pn,gn,Zn,Xn),Kn=b.useMemo(function(){return{siderHook:{addSider:function(_n){un(function(qn){return[].concat(S()(qn),[_n])})},removeSider:function(_n){un(function(qn){return qn.filter(function(re){return re!==_n})})}}}},[]);return Vn((0,k.jsx)(r.V.Provider,{value:Kn,children:(0,k.jsx)($,l()(l()({ref:c,className:Yn,style:l()(l()({},T==null?void 0:T.style),K)},Ln),{},{children:f}))}))}),W=O({tagName:"div",displayName:"Layout"})(nn),z=O({suffixCls:"header",tagName:"header",displayName:"Header"})(N),an=O({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(N),en=O({suffixCls:"content",tagName:"main",displayName:"Content"})(N),H=W,cn=H;cn.Header=z,cn.Footer=an,cn.Content=en,cn.Sider=t.Z,cn._InternalSiderContext=t.D;var xn=cn},715778:function(Pn,X,e){e.r(X),e.d(X,{default:function(){return G}});var on=e(174219),S=e(97857),fn=e.n(S),v=e(585369),P={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},w=P,Sn={lang:fn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},v.Z),timePickerLocale:fn()({},w)};Sn.lang.ok="\u786E\u5B9A";var s=Sn,J=s,l="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",b={locale:"zh-cn",Pagination:on.Z,DatePicker:s,TimePicker:w,Calendar:J,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",emptyText:"\u6682\u65E0\u6570\u636E",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",deselectAll:"\u53D6\u6D88\u5168\u9009",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00",collapse:"\u6536\u8D77"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:l,method:l,array:l,object:l,number:l,date:l,boolean:l,integer:l,float:l,regexp:l,email:l,url:l,hex:l},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},G=b}}]);
