import{a as u}from"../app.8010b454.js";import{d as _,h as p,_ as d,o as i,A as m,B as t,E as r,a as f,G as e}from"./framework.31e4baf8.js";import"./theme.010f9db0.js";const k=_({setup(){const o=p(null);function a(){u.create({raTitle:"提示",raWidth:"30%",raContent:"dark soul III",raOnOk:async()=>{await new Promise(n=>{setTimeout(()=>{n()},2e3)})}})}return{content:o,openModal:a}}});function C(o,a,n,w,B,h){const s=e("ra-button"),c=e("ra-col"),l=e("ra-row");return i(),m(l,null,{default:t(()=>[r(c,null,{default:t(()=>[r(s,{class:"ra-modal-button",onClick:o.openModal},{default:t(()=>[f("打开对话框")]),_:1},8,["onClick"])]),_:1})]),_:1})}const I=d(k,[["render",C]]);export{I as default};
