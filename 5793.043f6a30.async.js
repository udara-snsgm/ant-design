"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5793],{235793:function(se,y,t){t.r(y);var K=t(805574),h=t.n(K),S=t(168400),M=t.n(S),P=t(667294),i=t(639389),ae=t.n(i),N=t(8824),Z=t(533130),b=t(739838),F=t(614137),d=t(106750),Y=t(259696),J=t(844183),g=t(933253),k=t(11739),z=t(181632),_=t(647759),G=t(693967),Q=t.n(G),X=t(727484),m=t.n(X),H=t(49313),j=t(302559),L=t(438199),V=t(833494),e=t(785893),T,W,A,B,$=N.Z._InternalPanelDoNotUseOrYouWillBeFired,w=Z.Z._InternalPanelDoNotUseOrYouWillBeFired,q=b.Z._InternalPanelDoNotUseOrYouWillBeFired,C=F.Z._InternalPanelDoNotUseOrYouWillBeFired,ee="Ant Design 5.0 use CSS-in-JS technology to provide dynamic & mix theme ability. And which use component level CSS-in-JS solution get your application a better performance.",te="Ant Design 5.0 \u4F7F\u7528 CSS-in-JS \u6280\u672F\u4EE5\u63D0\u4F9B\u52A8\u6001\u4E0E\u6DF7\u5408\u4E3B\u9898\u7684\u80FD\u529B\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u6211\u4EEC\u4F7F\u7528\u7EC4\u4EF6\u7EA7\u522B\u7684 CSS-in-JS \u89E3\u51B3\u65B9\u6848\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002",f={cn:{yesterday:"\u6628\u5929",lastWeek:"\u4E0A\u5468",lastMonth:"\u4E0A\u6708",lastYear:"\u53BB\u5E74",new:"\u65B0\u589E",update:"\u66F4\u65B0",sampleContent:te,inProgress:"\u8FDB\u884C\u4E2D",success:"\u6210\u529F",taskFailed:"\u4EFB\u52A1\u5931\u8D25",tour:"\u6F2B\u6E38\u5BFC\u89C8\u5E2E\u52A9\u7528\u6237\u5BF9\u65B0\u52A0\u7684\u529F\u80FD\u8FDB\u884C\u5FEB\u901F\u4E86\u89E3"},en:{yesterday:"Yesterday",lastWeek:"Last Week",lastMonth:"Last Month",lastYear:"Last Year",new:"New",update:"Update",sampleContent:ee,inProgress:"In Progress",success:"Success",taskFailed:"Task Failed",tour:"A quick guide for new come user about how to use app."}},I=function(){var s=(0,H.Z)();return(0,_.kc)(function(v){var a=v.token,u=(0,V.EI)(),c=u.carousel;return{card:(0,_.iv)(T||(T=M()([`
        border-radius: `,`px;
        border: 1px solid `,`;
        background: `,`;
        padding: `,`px;
        flex: none;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        > * {
          flex: none;
        }
      `])),a.borderRadius,s?a.colorBorder:"transparent",s?a.colorBgContainer:"#f5f8ff",a.paddingXL),cardCircle:(0,_.iv)(W||(W=M()([`
        position: absolute;
        width: 120px;
        height: 120px;
        background: #1677ff;
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.1;
      `]))),mobileCard:(0,_.iv)(A||(A=M()([`
        height: 395px;
      `]))),nodeWrap:(0,_.iv)(B||(B=M()([`
        margin-top: `,`px;
        flex: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      `])),a.paddingLG),carousel:c}})()},U=function(s){var v=s.title,a=s.node,u=s.type,c=s.index,n=u==="new"?"processing":"warning",x=(0,j.default)(f),E=h()(x,1),O=E[0],l=u==="new"?O.new:O.update,r=I(),o=r.styles,p=(0,P.useContext)(L.Z),D=p.isMobile;return(0,e.jsxs)("div",{className:Q()(o.card,D&&o.mobileCard),children:[(0,e.jsx)("div",{className:o.cardCircle,style:{right:c%2*-20-20,bottom:c%3*-40-20}}),(0,e.jsxs)(d.Z,{align:"center",gap:"small",children:[(0,e.jsx)(Y.Z.Title,{level:4,style:{fontWeight:"normal",margin:0},children:v}),(0,e.jsx)(J.Z,{color:n,children:l})]}),(0,e.jsx)("div",{className:o.nodeWrap,children:a})]})},ne=function(){var s=(0,_.Fg)(),v=I(),a=v.styles,u=(0,j.default)(f),c=h()(u,1),n=c[0],x=(0,P.useContext)(L.Z),E=x.isMobile,O=P.useMemo(function(){return[{title:"Modal",type:"update",node:(0,e.jsx)($,{title:"Ant Design 5.0",width:300,children:n.sampleContent})},{title:"DatePicker",type:"update",node:(0,e.jsx)(w,{value:m()("2022-11-18 14:00:00"),showToday:!1,presets:E?[]:[{label:n.yesterday,value:m()().add(-1,"d")},{label:n.lastWeek,value:m()().add(-7,"d")},{label:n.lastMonth,value:m()().add(-1,"month")},{label:n.lastYear,value:m()().add(-1,"year")}]})},{title:"Progress",type:"update",node:(0,e.jsxs)(d.Z,{gap:"small",vertical:!0,children:[(0,e.jsxs)(d.Z,{gap:"small",align:"center",children:[(0,e.jsx)(g.Z,{type:"circle",trailColor:"#e6f4ff",percent:60,size:14}),n.inProgress]}),(0,e.jsxs)(d.Z,{gap:"small",align:"center",children:[(0,e.jsx)(g.Z,{type:"circle",percent:100,size:14}),n.success]}),(0,e.jsxs)(d.Z,{gap:"small",align:"center",children:[(0,e.jsx)(g.Z,{type:"circle",status:"exception",percent:88,size:14}),n.taskFailed]})]})},{title:"Tour",type:"new",node:(0,e.jsx)(q,{title:"Ant Design 5.0",description:n.tour,style:{width:E?"auto":350},current:3,total:9})},{title:"FloatButton",type:"new",node:(0,e.jsxs)(d.Z,{align:"center",gap:"large",children:[(0,e.jsx)(C,{shape:"square",items:[{icon:(0,e.jsx)(i.QuestionCircleOutlined,{})},{icon:(0,e.jsx)(i.CustomerServiceOutlined,{})},{icon:(0,e.jsx)(i.SyncOutlined,{})}]}),(0,e.jsx)(C,{backTop:!0}),(0,e.jsx)(C,{items:[{icon:(0,e.jsx)(i.QuestionCircleOutlined,{})},{icon:(0,e.jsx)(i.CustomerServiceOutlined,{})},{icon:(0,e.jsx)(i.SyncOutlined,{})}]})]})},{title:"Alert",type:"update",node:(0,e.jsx)(k.Z,{style:{width:400},message:"Ant Design 5.0",description:n.sampleContent,closable:!0})}]},[E]);return E?(0,e.jsx)("div",{style:{margin:"0 16px"},children:(0,e.jsx)(z.Z,{className:a.carousel,children:O.map(function(l,r){var o=l.title,p=l.node,D=l.type;return(0,e.jsx)(U,{title:o,node:p,type:D,index:r},r)})})}):(0,e.jsx)("div",{style:{width:"100%",overflow:"hidden",display:"flex",justifyContent:"center"},children:(0,e.jsx)("div",{style:{display:"flex",alignItems:"stretch",columnGap:s.paddingLG},children:O.map(function(l,r){var o=l.title,p=l.node,D=l.type;return(0,e.jsx)(U,{title:o,node:p,type:D,index:r},r)})})})};y.default=ne}}]);
