import{d as t,h as s,w as r,_ as l,D as d,o as c,A as p}from"./framework.d4319e1f.js";const u=t({setup(){const e=s(new Date);return r(e,()=>{console.log(e.value)}),{date:e}}});function m(e,o,f,_,i,$){const a=d("ra-calendar");return c(),p(a,{modelValue:e.date,"onUpdate:modelValue":o[0]||(o[0]=n=>e.date=n)},null,8,["modelValue"])}const V=l(u,[["render",m]]);export{V as default};