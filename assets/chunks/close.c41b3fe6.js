import{_ as n}from"../app.8010b454.js";import{d as p,o as f,A as m,B as e,E as a,a as t,G as r}from"./framework.31e4baf8.js";import"./theme.010f9db0.js";const k=p({__name:"close",setup(i){const l=()=>{n.info({raMessage:"消息",raShowClose:!0})},c=()=>{n.success({raMessage:"成功",raShowClose:!0})},u=()=>{n.error({raMessage:"错误",raShowClose:!0})},_=()=>{n.warning({raMessage:"警告",raShowClose:!0})};return(g,C)=>{const o=r("ra-button"),s=r("ra-col"),d=r("ra-row");return f(),m(d,null,{default:e(()=>[a(s,null,{default:e(()=>[a(o,{class:"ra-message-button",onClick:l},{default:e(()=>[t("消息")]),_:1})]),_:1}),a(s,null,{default:e(()=>[a(o,{class:"ra-message-button",onClick:c},{default:e(()=>[t("成功")]),_:1})]),_:1}),a(s,null,{default:e(()=>[a(o,{class:"ra-message-button",onClick:u},{default:e(()=>[t("错误")]),_:1})]),_:1}),a(s,null,{default:e(()=>[a(o,{class:"ra-message-button",onClick:_},{default:e(()=>[t("警告")]),_:1})]),_:1})]),_:1})}}});export{k as default};
