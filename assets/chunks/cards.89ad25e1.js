import{d,h as p,w as c,_ as m,o as _,A as f,B as a,E as t,a as r,G as l}from"./framework.31e4baf8.js";const B=d({setup(){const e=p("phone");return c(e,()=>{console.log(e.value)}),{modelValue:e}}});function V(e,n,b,i,h,$){const o=l("ra-tab-panel"),u=l("ra-tabs");return _(),f(u,{modelValue:e.modelValue,"onUpdate:modelValue":n[0]||(n[0]=s=>e.modelValue=s),"ra-type":"card"},{default:a(()=>[t(o,{"ra-label":"电脑","ra-name":"computed"},{default:a(()=>[r("电脑")]),_:1}),t(o,{"ra-label":"手机","ra-name":"phone"},{default:a(()=>[r("手机")]),_:1}),t(o,{"ra-label":"冰箱","ra-name":"Refrigerator"},{default:a(()=>[r("冰箱")]),_:1})]),_:1},8,["modelValue"])}const x=m(B,[["render",V]]);export{x as default};
