import{d as $,h as c,_ as T,D as t,o as d,c as m,G as l,B as n,a as p,F as _,L as B,A as g,t as w}from"./framework.d4319e1f.js";const y=$({setup(){let e=0;const a=c([{label:"电脑",name:"computed"},{label:"手机",name:"phone"},{label:"冰箱",name:"refrigerator"}]),r=c("computed");return{modelValue:r,data:a,addTab:()=>{e++,a.value.push({label:`New Tab ${e}`,name:`content_${e}`}),r.value=`content_${e}`},removeClick:u=>{a.value=a.value.filter(s=>s.name!==u)}}}});function D(e,a,r,b,f,u){const s=t("ra-button"),i=t("ra-col"),k=t("ra-row"),v=t("ra-tab-panel"),C=t("ra-tabs");return d(),m(_,null,[l(k,{"ra-gutter":[0,30]},{default:n(()=>[l(i,null,{default:n(()=>[l(s,{onClick:e.addTab},{default:n(()=>[p("添加")]),_:1},8,["onClick"])]),_:1})]),_:1}),l(C,{modelValue:e.modelValue,"onUpdate:modelValue":a[0]||(a[0]=o=>e.modelValue=o),"ra-type":"border-card","ra-closeable":"",onRaTabRemove:a[1]||(a[1]=o=>e.removeClick(o))},{default:n(()=>[(d(!0),m(_,null,B(e.data,(o,V)=>(d(),g(v,{key:V,"ra-label":o.label,"ra-name":o.name},{default:n(()=>[p(w(o.label),1)]),_:2},1032,["ra-label","ra-name"]))),128))]),_:1},8,["modelValue"])],64)}const N=T(y,[["render",D]]);export{N as default};
