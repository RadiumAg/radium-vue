import{d as f,h as s,w as i,_,D as m,o as l,A as d,B as u,c as v,L as V,a as k,t as C,F as g}from"./framework.d4319e1f.js";const B=f({setup(){const e=s([{label:"电脑",name:"computed"},{label:"手机",name:"phone"},{label:"冰箱",name:"refrigerator"}]),a=s("computed"),t=r=>{e.value=e.value.filter(n=>n.name!==r)};return i(a,()=>{console.log(a.value)}),{modelValue:a,removeClick:t,data:e}}});function $(e,a,t,r,n,w){const p=m("ra-tab-panel"),c=m("ra-tabs");return l(),d(c,{modelValue:e.modelValue,"onUpdate:modelValue":a[0]||(a[0]=o=>e.modelValue=o),"ra-type":"border-card","ra-closeable":"",onRaTabRemove:a[1]||(a[1]=o=>e.removeClick(o))},{default:u(()=>[(l(!0),v(g,null,V(e.data,(o,b)=>(l(),d(p,{key:b,"ra-label":o.label,"ra-name":o.name},{default:u(()=>[k(C(o.label),1)]),_:2},1032,["ra-label","ra-name"]))),128))]),_:1},8,["modelValue"])}const D=_(B,[["render",$]]);export{D as default};