import{d,h as p,w as c,_ as m,D as u,o as _,A as f,B as a,G as t,a as n}from"./framework.d4319e1f.js";const B=d({setup(){const e=p("phone");return c(e,()=>{console.log(e.value)}),{modelValue:e}}});function V(e,l,b,i,h,$){const o=u("ra-tab-panel"),r=u("ra-tabs");return _(),f(r,{modelValue:e.modelValue,"onUpdate:modelValue":l[0]||(l[0]=s=>e.modelValue=s),"ra-type":"card"},{default:a(()=>[t(o,{label:"电脑",name:"computed"},{default:a(()=>[n("电脑")]),_:1}),t(o,{label:"手机",name:"phone"},{default:a(()=>[n("手机")]),_:1}),t(o,{label:"冰箱",name:"Refrigerator"},{default:a(()=>[n("冰箱")]),_:1})]),_:1},8,["modelValue"])}const x=m(B,[["render",V]]);export{x as default};
