import{d as v,e as h,o as e,c as s,x as i,b as o,A as a,t as u,_ as k,a as r,F as g,M as _,y as b}from"./chunks/framework.d6bf9272.js";const y=/[\u0000-\u001f]/g,S=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,x=/[\u0300-\u036F]/g,w=t=>t.normalize("NFKD").replace(x,"").replace(y,"").replace(S,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),V=["href"],C={class:"box"},z={class:"box-header"},N=["innerHTML"],T={key:1,class:"icon"},I=["src","alt"],M=["id"],L={key:0,class:"desc"},$=v({__name:"MNavLink",props:{icon:null,title:null,desc:null,link:null},setup(t){const n=t,c=h(()=>n.title?w(n.title):""),l=h(()=>typeof n.icon=="object"?n.icon.svg:"");return(p,d)=>t.link?(e(),s("a",{key:0,class:"m-nav-link",href:t.link,target:"_blank",rel:"noreferrer"},[i("article",C,[i("div",z,[o(l)?(e(),s("div",{key:0,class:"icon",innerHTML:o(l)},null,8,N)):t.icon&&typeof t.icon=="string"?(e(),s("div",T,[i("img",{src:t.icon,alt:t.title,onerror:"this.parentElement.style.display='none'"},null,8,I)])):a("",!0),t.title?(e(),s("h5",{key:2,id:o(c),class:"title"},u(t.title),9,M)):a("",!0)]),t.desc?(e(),s("p",L,u(t.desc),1)):a("",!0)])],8,V)):a("",!0)}});const A=k($,[["__scopeId","data-v-34c86459"]]),J=["id"],P=["href"],R={class:"m-nav-links"},U=v({__name:"MNavLinks",props:{title:null,items:null},setup(t){const n=t,c=h(()=>w(n.title));return(l,p)=>(e(),s(g,null,[t.title?(e(),s("h2",{key:0,id:o(c),tabindex:"-1"},[r(u(t.title)+" ",1),i("a",{class:"header-anchor",href:`#${o(c)}`,"aria-hidden":"true"},"#",8,P)],8,J)):a("",!0),i("div",R,[(e(!0),s(g,null,_(t.items,({icon:d,title:f,desc:j,link:m})=>(e(),b(A,{key:m,icon:d,title:f,desc:j,link:m},null,8,["icon","title","desc","link"]))),128))])],64))}});const q=k(U,[["__scopeId","data-v-9d353451"]]),D=[{title:"好用工具",items:[{icon:"https://tinypng.com/images/apple-touch-icon.png",title:"TinyPNG",desc:"在线图片压缩工具",link:"https://tinypng.com"},{icon:"https://www.emojiall.com/img/logo-white.png",title:"emoji",desc:"emoji表情符号",link:"https://www.emojiall.com/"},{icon:"https://overapi.com/static/images/overapi-logo.png",title:" OverAPI",desc:"各种语言快速查询表",link:"https://overapi.com"},{icon:"https://caniuse.com/img/favicon-128.png",title:"Can I use",desc:"前端 API 兼容性查询",link:"https://caniuse.com"}]},{title:"HTML5&CSS3",items:[{icon:"https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",title:"MDN | Web 开发者指南",desc:"Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资",link:"https://developer.mozilla.org/zh-CN"},{icon:"https://no.buging.cn/img/w3school.png",title:"w3school",desc:"w3school在线教程",link:"https://www.w3school.com.cn"},{icon:"https://static.runoob.com/images/favicon.ico",title:"菜鸟教程",desc:"学的不仅是技术，更是梦想！",link:"https://www.runoob.com"},{icon:"https://sass.bootcss.com/assets/img/logos/sass-77bd637b.png",title:"Sass",desc:"Sass 是成熟、稳定、强大的 CSS 扩展语言。",link:"https://sass.bootcss.com"},{icon:"https://less.bootcss.com/public/img/less_logo.png",title:"Less",desc:"给 CSS 加点料,是一门向后兼容的 CSS 扩展语言。",link:"https://less.bootcss.com"},{icon:"https://no.buging.cn/img/stylus.png",title:"Stylus",desc:"富有表现力的、动态的、健壮的 CSS",link:"https://stylus-lang.com"},{title:"渐变背景CSS3样式",desc:"一个集合180中免费的线性渐变网站",link:"https://color.oulu.me"}]},{title:"JavaScript&TypeScript",items:[{icon:"/icons/jquery.svg",title:"jQuery API",desc:"一个兼容多浏览器的 JavaScript 框架",link:"https://jquery.cuishifeng.cn"},{icon:"https://no.buging.cn/img/TypeScriptcn.png",title:"TypeScript",desc:"TypeScript 是 JavaScript 超集",link:"https://www.tslang.cn/"}]},{title:"Vue",items:[{icon:"https://cn.vuejs.org/logo.svg",title:"Vue 2",desc:"渐进式 JavaScript 框架",link:"https://v2.cn.vuejs.org"},{icon:"https://cn.vuejs.org/logo.svg",title:"Vue 3",desc:"渐进式 JavaScript 框架",link:"https://cn.vuejs.org"},{icon:"https://cn.vuejs.org/logo.svg",title:"Vue CLI",desc:"Vue.js 开发的标准工具",link:"https://cli.vuejs.org/"},{icon:"https://cn.vuejs.org/logo.svg",title:"Vue Router",desc:"Vue.js 的官方路由为 Vue.js 提供富有表现力、可配置的、方便的路由",link:"https://router.vuejs.org/zh"},{icon:"https://cn.vuejs.org/logo.svg",title:"Vuex",desc:"Vue.js 状态管理",link:"https://v3.vuex.vuejs.org/"},{icon:"https://pinia.vuejs.org/logo.svg",title:"Pinia",desc:"符合直觉的 Vue.js 状态管理库",link:"https://pinia.vuejs.org/zh"}]},{title:"React",items:[{icon:"https://zh-hans.reactjs.org/favicon.ico",title:"React",desc:"用于构建用户界面的 JavaScript 库",link:"https://zh-hans.reactjs.org"},{icon:"https://reactrouter.com/favicon-light.png",title:"React Router",desc:"React 的声明式路由",link:"https://reactrouter.com"},{icon:"https://cn.redux.js.org/img/redux.svg",title:"Redux",desc:"JavaScript 应用的状态容器，提供可预测的状态管理",link:"https://cn.redux.js.org"},{icon:"https://zh.mobx.js.org/assets/mobx.png",title:"MobX",desc:"一个小型、快速、可扩展的 React 状态管理解决方案",link:"https://zh.mobx.js.org"},{icon:"https://ahooks.js.org/simple-logo.svg",title:"ahooks",desc:"一套高质量可靠的 React Hooks 库",link:"https://ahooks.js.org/zh-CN"}]},{title:"小程序",items:[{icon:"https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png",title:"微信小程序",desc:"微信小程序官方开发者文档",link:"https://developers.weixin.qq.com/miniprogram/dev/framework/"},{icon:"	https://web-assets.dcloud.net.cn/unidoc/zh/icon.png",title:"uni-app",desc:"一个使用 Vue.js 开发所有前端应用的框架",link:"https://uniapp.dcloud.net.cn"},{icon:"https://cdn.docschina.org/home/logo/taro.png",title:"Taro",desc:"多端统一开发解决方案",link:"https://taro.jd.com"}]},{title:"编译&构建&打包",items:[{icon:"https://www.webpackjs.com/icon_180x180.png",title:"Webpack 中文网",desc:"一个用于现代 JavaScript 应用程序的静态模块打包工具",link:"https://www.webpackjs.com"},{icon:"https://cn.vitejs.dev/logo.svg",title:"Vite 中文文档",desc:"下一代前端工具链",link:"https://cn.vitejs.dev"},{icon:"",title:"",desc:"",link:""}]},{title:"UI库",items:[{icon:"https://no.buging.cn/img/bootcss.jpg",title:"Bootstrap",desc:"简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。",link:"https://www.bootcss.com"},{icon:"https://no.buging.cn/img/element.png",title:"Element",desc:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库",link:"https://element.eleme.cn/#/zh-CN"},{icon:"https://element-plus.org/images/element-plus-logo-small.svg",title:"Element Plus",desc:"基于 Vue 3，面向设计师和开发者的组件库",link:"https://element-plus.org/zh-CN/#/zh-CN"},{icon:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",title:"Ant Design",desc:"助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～",link:"https://ant.design/index-cn"},{icon:"https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png",title:"Vant",desc:"轻量、可靠的移动端 Vue 组件库",link:"https://vant-contrib.gitee.io/vant/v1/#/zh-CN/intro"},{icon:"https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png",title:"Vant Weapp",desc:"轻量、可靠的移动端 Vue 组件库",link:"https://vant-contrib.gitee.io/vant-weapp/#/home"},{icon:"https://www.uviewui.com/common/logo.png",title:"uView",desc:"uView UI，是全面兼容nvue的uni-app生态框架",link:"https://www.uviewui.com"},{icon:"https://taro-ui.jd.com/img/logo-taro.png",title:"Taro UI",desc:"Taro UI 是一款基于 Taro 框架开发的多端 UI 组件库",link:"https://taro-ui.jd.com"},{icon:"",title:"WeUI",desc:"WeUI 是一套同微信原生视觉体验一致的基础样式库",link:"https://weui.io/"}]}];const E=i("h1",{id:"文档导航",tabindex:"-1"},[r("文档导航 "),i("a",{class:"header-anchor",href:"#文档导航","aria-label":'Permalink to "文档导航"'},"​")],-1),H=i("p",null,[r("该导航由 "),i("a",{href:"https://github.com/maomao1996",target:"_blank",rel:"noreferrer"},"maomao"),r(" 开发，引用自"),i("a",{href:"https://github.com/maomao1996/vitepress-fe-nav",target:"_blank",rel:"noreferrer"},"github仓库")],-1),F=JSON.parse('{"title":"文档导航","description":"","frontmatter":{"layoutClass":"m-nav-layout","outline":[2,3,4]},"headers":[],"relativePath":"文档导航/文档导航.md","lastUpdated":1679592731000}'),W={name:"文档导航/文档导航.md"},O=Object.assign(W,{setup(t){return(n,c)=>(e(),s("div",null,[E,H,(e(!0),s(g,null,_(o(D),({title:l,items:p})=>(e(),b(q,{title:l,items:p},null,8,["title","items"]))),256))]))}});export{F as __pageData,O as default};
