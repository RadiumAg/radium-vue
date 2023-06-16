import{_ as o,D as l,c as r,G as n,B as e,z as a,a as t,O as p,o as E}from"./chunks/framework.d4319e1f.js";const B=JSON.parse('{"title":"Scrollbar 滚动条","description":"","frontmatter":{},"headers":[],"relativePath":"zh/scrollbar.md","filePath":"zh/scrollbar.md"}'),C={name:"zh/scrollbar.md"},c=a("h1",{id:"scrollbar-滚动条",tabindex:"-1"},[t("Scrollbar 滚动条 "),a("a",{class:"header-anchor",href:"#scrollbar-滚动条","aria-label":'Permalink to "Scrollbar 滚动条"'},"​")],-1),i=a("h4",{id:"竖向滚动",tabindex:"-1"},[t("竖向滚动 "),a("a",{class:"header-anchor",href:"#竖向滚动","aria-label":'Permalink to "竖向滚动"'},"​")],-1),d=a("p",null,[t("最基本得滚动，设置"),a("code",null,"ra-height"),t("滚动条高度后就可以使用")],-1),D=a("p",null,"scrollbar/vertical",-1),k=a("h4",{id:"横向滚动",tabindex:"-1"},[t("横向滚动 "),a("a",{class:"header-anchor",href:"#横向滚动","aria-label":'Permalink to "横向滚动"'},"​")],-1),F=a("p",null,[t("​ 默认滚动容器得"),a("code",null,"宽度"),t("为"),a("code",null,"100%"),t(",超出宽度后自动出现滚动条")],-1),h=a("p",null,"scrollbar/horizontal",-1),_=p('<h4 id="scrollbar-api" tabindex="-1">Scrollbar Api <a class="header-anchor" href="#scrollbar-api" aria-label="Permalink to &quot;Scrollbar Api&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th>类型</th><th style="text-align:left;">可选值</th><th>默认值</th></tr></thead><tbody><tr><td style="text-align:left;">ra-height</td><td style="text-align:left;">滚动条高度</td><td>string</td><td style="text-align:left;">——</td><td>——</td></tr><tr><td style="text-align:left;">ra-max-height</td><td style="text-align:left;">滚动条最大高度</td><td>string</td><td style="text-align:left;">——</td><td>——</td></tr><tr><td style="text-align:left;">ra-native</td><td style="text-align:left;">是否使用原生滚动条</td><td>boolean</td><td style="text-align:left;">——</td><td>——</td></tr><tr><td style="text-align:left;">ra-wrap-style</td><td style="text-align:left;">滚动容器行内样式</td><td>string[ ]</td><td style="text-align:left;">——</td><td>——</td></tr><tr><td style="text-align:left;">ra-wrap-class</td><td style="text-align:left;">滚动容器自定义类名</td><td>string[ ]</td><td style="text-align:left;">——</td><td>——</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th>回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">raScroll</td><td style="text-align:left;">滚动时报告滚动位置</td><td>[scrollLeft,ScrollTop]</td></tr></tbody></table>',4);function b(g,x,f,u,y,m){const s=l("vp-example");return E(),r("div",null,[c,i,d,n(s,{path:"../../examples/scrollbar/vertical.vue",source:"%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Era%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Escrollbar%20ra%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Eheight%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22230px%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ediv%20v%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Efor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22(item%2C%20index)%20in%2020%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3Ekey%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22index%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22ra-scrollbar-item%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20item%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ediv%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Era%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Escrollbar%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Etemplate%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Escript%20setup%20lang%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Escript%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A"},{default:e(()=>[D]),_:1}),k,F,n(s,{path:"../../examples/scrollbar/horizontal.vue",source:"%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Era%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Escrollbar%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ediv%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22ra-scrollbar-item-horizontal-container%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ediv%0A%20%20%20%20%20%20%20%20v%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Efor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22(item%2C%20index)%20in%2020%22%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3Ekey%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22index%22%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22ra-scrollbar-item-horizontal%22%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20item%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ediv%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ediv%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Era%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Escrollbar%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Etemplate%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Escript%20setup%20lang%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Escript%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A"},{default:e(()=>[h]),_:1}),_])}const v=o(C,[["render",b]]);export{B as __pageData,v as default};
