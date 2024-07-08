import{_ as h,D as k,c as e,j as i,I as n,w as l,a as s,a3 as p,o as t,aE as r,aF as E,aO as d,aI as g,aG as c,aH as y,aP as b,aQ as F}from"./chunks/framework.CJ5r7Wtd.js";const V=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端基础/JS高级（上）.md","filePath":"前端基础/JS高级（上）.md","lastUpdated":1689614285000}'),u={name:"前端基础/JS高级（上）.md"},o=p("",56),m=i("li",null,"不同函数内部声明的变量无法互相访问",-1),A=i("h4",{id:"_2-、块作用域",tabindex:"-1"},[s("2）、块作用域 "),i("a",{class:"header-anchor",href:"#_2-、块作用域","aria-label":'Permalink to "2）、块作用域"'},"​")],-1),C=i("code",null,"{}",-1),D=p("",7),B=i("li",null,[s("为 "),i("code",null,"window"),s(" 对象动态添加的属性默认也是全局的，不推荐！")],-1),v=i("h3",{id:"_4、作用域链-重点",tabindex:"-1"},[s("4、作用域链（重点） "),i("a",{class:"header-anchor",href:"#_4、作用域链-重点","aria-label":'Permalink to "4、作用域链（重点）"'},"​")],-1),f=p("",122),_=p("",8),q=p("",21),x=i("li",null,[s("通过 "),i("code",null,"new"),s(" 关键字来调用构造函数，可以创建对象")],-1),j=p("",8),w=p("",68);function P(S,T,I,H,O,L){const a=k("font");return t(),e("div",null,[o,i("ul",null,[i("li",null,[n(a,{color:"red"},{default:l(()=>[s("函数内部")]),_:1}),s("声明的变量，在函数外部"),n(a,{color:"red"},{default:l(()=>[s("无法被访问")]),_:1})]),i("li",null,[s("函数的"),n(a,{color:"red"},{default:l(()=>[s("参数")]),_:1}),s("也是函数内部的"),n(a,{color:"red"},{default:l(()=>[s("局部变量")]),_:1})]),m]),A,i("p",null,[s("在 JavaScript 中使用 "),C,s(" 包裹的代码称为代码块，代码块内部声明的变量外部将"),n(a,{color:"red"},{default:l(()=>[s("有可能")]),_:1}),s("无法被访问。")]),D,i("ul",null,[B,i("li",null,[n(a,{color:"red"},{default:l(()=>[s("函数中")]),_:1}),s("未使用任何关键字声明的变量为全局变量，不推荐！！！")]),i("li",null,[s("尽可能少的声明全局变量，防止"),n(a,{color:"red"},{default:l(()=>[s("全局变量被污染")]),_:1})])]),v,i("p",null,[s("嵌套关系的"),n(a,{color:"red"},{default:l(()=>[s("作用域串联")]),_:1}),s("起来形成了作用域链")]),f,i("p",null,[s("箭头函数本身"),n(a,{color:"red"},{default:l(()=>[s("没有 this")]),_:1}),s("，它只会"),n(a,{color:"red"},{default:l(()=>[s("沿用上一层作用域的 this")]),_:1})]),_,i("p",null,[s("解构赋值：可以将"),n(a,{color:"red"},{default:l(()=>[s("数组中的值或对象的属性")]),_:1}),s("取出，"),n(a,{color:"red"},{default:l(()=>[s("赋值")]),_:1}),s("给其他变量")]),i("p",null,[s("解构：其实就是把一个事物的"),n(a,{color:"red"},{default:l(()=>[s("结构进行拆解")]),_:1})]),q,i("ul",null,[i("li",null,[s("它们的命名以"),n(a,{color:"red"},{default:l(()=>[s("大写字母")]),_:1}),s("开头")]),x]),j,i("ul",null,[i("li",null,[s("为构造函数传入参数，创建结构相同但值"),n(a,{color:"red"},{default:l(()=>[s("不同的对象")]),_:1})]),i("li",null,[s("构造函数创建的实例对象"),n(a,{color:"red"},{default:l(()=>[s("彼此独立")]),_:1}),s("互不影响")])]),w])}const W=h(u,[["render",P]]);export{V as __pageData,W as default};
