"use strict";(self.webpackChunkvitalroute_logistics_website=self.webpackChunkvitalroute_logistics_website||[]).push([[538],{8538:(e,i,t)=>{t.r(i),t.d(i,{default:()=>l});var s=t(5043),o=t(2646);const n=(0,t(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=t(579);const l=()=>{const[e,i]=(0,s.useState)(!1),t=(0,s.useCallback)((()=>{const t=window.scrollY;!e&&t>350?i(!0):t<=350&&i(!1)}),[e]);(0,s.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[t]);return(0,r.jsx)(n,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,r.jsx)(o.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.dda5db9b.chunk.js.map