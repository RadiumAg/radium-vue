import{_ as l}from"../app.41c3ca2c.js";import{d as p,D as o,o as d,A as m,B as e,G as a,a as r,a8 as t}from"./framework.d4319e1f.js";import"./theme.07dbcb43.js";const N=p({__name:"basic",setup(f){const c=()=>{l.create({raMessage:"消息"})},_=()=>{l.create({raMessage:t("p",null,[t("span",null,"内容可以是 "),t("i",{style:"color: teal"},"VNode")])})};return(i,b)=>{const n=o("ra-button"),s=o("ra-col"),u=o("ra-row");return d(),m(u,null,{default:e(()=>[a(s,null,{default:e(()=>[a(n,{class:"ra-message-button",onClick:c},{default:e(()=>[r("消息提示")]),_:1})]),_:1}),a(s,null,{default:e(()=>[a(n,{class:"ra-message-button",onClick:_},{default:e(()=>[r("使用VNode")]),_:1})]),_:1})]),_:1})}}});export{N as default};
