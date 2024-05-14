"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5946],{65946:function(B,p,d){d.r(p);var w=d(168400),_=d.n(w),y=d(97857),P=d.n(y),f=d(667294),s=d(387350),h=d(647759),k=d(385956),c=d(785893),m,v,x,b,E;s.ZP.registerNode("behavior-start-node",{draw:function(e,n){var l=s.ZP.Util.getTextSize(e.label,16)[0],r=[l+20*2,48],t=n.addShape("rect",{name:"start-node",attrs:{width:r[0],height:r[1],y:-r[1]/2,radius:8,fill:"#fff"}});return n.addShape("text",{attrs:{text:"".concat(e.label),fill:"rgba(0, 0, 0, 0.88)",fontSize:16,fontWeight:500,x:20,textBaseline:"middle"},name:"start-node-text"}),t},getAnchorPoints:function(){return[[0,.5],[1,.5]]}}),s.ZP.registerNode("behavior-sub-node",{draw:function(e,n){var l=s.ZP.Util.getTextSize(e.label,14)[0],r=16,t=[l+16*2+(e.targetType?12:0)+(e.link?20:0),40],o=n.addShape("rect",{name:"sub-node",attrs:{width:t[0],height:t[1],y:-t[1]/2,radius:8,fill:"#fff",cursor:"pointer"}});if(n.addShape("text",{attrs:{text:"".concat(e.label),x:e.targetType?12+16:r,fill:"rgba(0, 0, 0, 0.88)",fontSize:14,textBaseline:"middle",cursor:"pointer"},name:"sub-node-text"}),e.targetType&&n.addShape("rect",{name:"sub-node-type",attrs:{width:8,height:8,radius:4,y:-4,x:12,fill:e.targetType==="mvp"?"#1677ff":"#A0A0A0",cursor:"pointer"}}),e.children){var a=e.children,i=a.length;n.addShape("rect",{name:"sub-node-children-length",attrs:{width:20,height:20,radius:10,y:-10,x:t[0]-4,fill:"#404040",cursor:"pointer"}}),n.addShape("text",{name:"sub-node-children-length-text",attrs:{text:"".concat(i),x:t[0]+6-s.ZP.Util.getTextSize("".concat(i),12)[0]/2,textBaseline:"middle",fill:"#fff",fontSize:12,cursor:"pointer"}})}return e.link&&n.addShape("dom",{attrs:{width:16,height:16,x:t[0]-12-16,y:-8,cursor:"pointer",html:`
            <div style="width: 16px; height: 16px;">
              <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="\u9875\u9762-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="DatePicker" transform="translate(-890.000000, -441.000000)" fill-rule="nonzero">
                          <g id="\u7F16\u7EC4-30" transform="translate(288.000000, 354.000000)">
                              <g id="\u7F16\u7EC4-7\u5907\u4EFD-7" transform="translate(522.000000, 79.000000)">
                                  <g id="right-circle-outlinedd" transform="translate(80.000000, 8.000000)">
                                      <rect id="\u77E9\u5F62" fill="#000000" opacity="0" x="0" y="0" width="16" height="16"></rect>
                                      <path d="M10.4171875,7.8984375 L6.5734375,5.1171875 C6.490625,5.0578125 6.375,5.115625 6.375,5.21875 L6.375,5.9515625 C6.375,6.1109375 6.4515625,6.2625 6.58125,6.35625 L8.853125,8 L6.58125,9.64375 C6.4515625,9.7375 6.375,9.8875 6.375,10.0484375 L6.375,10.78125 C6.375,10.8828125 6.490625,10.9421875 6.5734375,10.8828125 L10.4171875,8.1015625 C10.4859375,8.0515625 10.4859375,7.9484375 10.4171875,7.8984375 Z" id="\u8DEF\u5F84" fill="#BFBFBF"></path>
                                      <path d="M8,1 C4.134375,1 1,4.134375 1,8 C1,11.865625 4.134375,15 8,15 C11.865625,15 15,11.865625 15,8 C15,4.134375 11.865625,1 8,1 Z M8,13.8125 C4.790625,13.8125 2.1875,11.209375 2.1875,8 C2.1875,4.790625 4.790625,2.1875 8,2.1875 C11.209375,2.1875 13.8125,4.790625 13.8125,8 C13.8125,11.209375 11.209375,13.8125 8,13.8125 Z" id="\u5F62\u72B6" fill="#BFBFBF"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
            </div>
          `},name:"sub-node-link"}),o},getAnchorPoints:function(){return[[0,.5],[1,.5]]},options:{stateStyles:{hover:{stroke:"#1677ff","sub-node-link":{html:`
            <div style="width: 16px; height: 16px;">
              <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="\u9875\u9762-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="DatePicker" transform="translate(-890.000000, -441.000000)" fill-rule="nonzero">
                          <g id="\u7F16\u7EC4-30" transform="translate(288.000000, 354.000000)">
                              <g id="\u7F16\u7EC4-7\u5907\u4EFD-7" transform="translate(522.000000, 79.000000)">
                                  <g id="right-circle-outlinedd" transform="translate(80.000000, 8.000000)">
                                      <rect id="\u77E9\u5F62" fill="#000000" opacity="0" x="0" y="0" width="16" height="16"></rect>
                                      <path d="M10.4171875,7.8984375 L6.5734375,5.1171875 C6.490625,5.0578125 6.375,5.115625 6.375,5.21875 L6.375,5.9515625 C6.375,6.1109375 6.4515625,6.2625 6.58125,6.35625 L8.853125,8 L6.58125,9.64375 C6.4515625,9.7375 6.375,9.8875 6.375,10.0484375 L6.375,10.78125 C6.375,10.8828125 6.490625,10.9421875 6.5734375,10.8828125 L10.4171875,8.1015625 C10.4859375,8.0515625 10.4859375,7.9484375 10.4171875,7.8984375 Z" id="\u8DEF\u5F84" fill="#1677ff"></path>
                                      <path d="M8,1 C4.134375,1 1,4.134375 1,8 C1,11.865625 4.134375,15 8,15 C11.865625,15 15,11.865625 15,8 C15,4.134375 11.865625,1 8,1 Z M8,13.8125 C4.790625,13.8125 2.1875,11.209375 2.1875,8 C2.1875,4.790625 4.790625,2.1875 8,2.1875 C11.209375,2.1875 13.8125,4.790625 13.8125,8 C13.8125,11.209375 11.209375,13.8125 8,13.8125 Z" id="\u5F62\u72B6" fill="#1677ff"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
            </div>
          `}}}}},"rect");var M=function(e){var n=function l(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=P()({},r);switch(t){case 0:o.type="behavior-start-node";break;case 1:o.type="behavior-sub-node",o.collapsed=!0;break;default:o.type="behavior-sub-node";break}return r.children&&(o.children=r.children.map(function(a){return l(a,t+1)})),o};return n(e)},D=(0,h.kc)(function(u){var e=u.token;return{container:(0,h.iv)(m||(m=_()([`
    width: 100%;
    height: 600px;
    background-color: #f5f5f5;
    border: 1px solid #e8e8e8;
    border-radius: `,`px;
    overflow: hidden;
    position: relative;
  `])),e.borderRadiusLG),title:(0,h.iv)(v||(v=_()([`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: `,`px;
  `])),e.fontSizeLG),tips:(0,h.iv)(x||(x=_()([`
    display: flex;
    position: absolute;
    bottom: 20px;
    right: 20px;
  `]))),mvp:(0,h.iv)(b||(b=_()([`
    margin-inline-end: `,`px;
    display: flex;
    align-items: center;
    &::before {
      display: block;
      width: 8px;
      height: 8px;
      margin-inline-end: `,`px;
      background-color: #1677ff;
      border-radius: 50%;
      content: '';
    }
  `])),e.marginMD,e.marginXS),extension:(0,h.iv)(E||(E=_()([`
    display: flex;
    align-items: center;
    &::before {
      display: block;
      width: 8px;
      height: 8px;
      margin-inline-end: `,`px;
      background-color: #a0a0a0;
      border-radius: 50%;
      content: '';
    }
  `])),e.marginXS)}}),S=function(e){var n=e.data,l=(0,f.useRef)(null),r=D(),t=r.styles,o=(0,k.useRouteMeta)();return(0,f.useEffect)(function(){var a=new s.ZP.TreeGraph({container:l.current,width:l.current.scrollWidth,height:l.current.scrollHeight,renderer:"svg",modes:{default:["collapse-expand","drag-canvas"]},defaultEdge:{type:"cubic-horizontal",style:{lineWidth:1,stroke:"#BFBFBF"}},layout:{type:"mindmap",direction:"LR",getHeight:function(){return 48},getWidth:function(g){return s.ZP.Util.getTextSize(g.label,16)[0]+40},getVGap:function(){return 10},getHGap:function(){return 60},getSide:function(g){return g.data.direction}}});a.on("node:mouseenter",function(i){a.setItemState(i.item,"hover",!0)}),a.on("node:mouseleave",function(i){a.setItemState(i.item,"hover",!1)}),a.on("node:click",function(i){var g=i.item.getModel(),C=g.link;C&&(window.location.hash=C)}),a.data(M(n)),a.render(),a.fitCenter()},[]),(0,c.jsxs)("div",{ref:l,className:t.container,children:[(0,c.jsx)("div",{className:t.title,children:"".concat(o.frontmatter.title," \u884C\u4E3A\u6A21\u5F0F\u5730\u56FE")}),(0,c.jsxs)("div",{className:t.tips,children:[(0,c.jsx)("div",{className:t.mvp,children:"MVP \u884C\u4E3A\u76EE\u7684"}),(0,c.jsx)("div",{className:t.extension,children:"\u62D3\u5C55\u884C\u4E3A\u76EE\u7684"})]})]})};p.default=S}}]);
