import type { NavLink } from './components/type'

type NavData = {
    title: string
    items: NavLink[]
}

export const NAV_DATA: NavData[] = [
    {
        title: '好用工具',
        items: [
            {
                icon: 'https://tinypng.com/images/apple-touch-icon.png',
                title: 'TinyPNG',
                desc: '在线图片压缩工具',
                link: 'https://tinypng.com'
            },
            {
                title: 'removebg',
                desc: '在线抠图软件',
                link: 'https://www.remove.bg/zh'
            },
            {
                icon: 'https://www.emojiall.com/img/logo-white.png',
                title: 'emoji',
                desc: 'emoji表情符号',
                link: 'https://www.emojiall.com/'
            },
            {
                icon: 'https://overapi.com/static/images/overapi-logo.png',
                title: ' OverAPI',
                desc: '各种语言快速查询表',
                link: 'https://overapi.com'
            },
            {
                icon: 'https://caniuse.com/img/favicon-128.png',
                title: 'Can I use',
                desc: '前端 API 兼容性查询',
                link: 'https://caniuse.com'
            },
            {
                icon: 'https://www.bootcdn.cn/assets/img/logo.png',
                title: 'BootCDN',
                desc: 'Bootstrap 中文网开源项目免费 CDN 加速服务',
                link: 'https://www.bootcdn.cn/'
            },
            {
                title: '扣子',
                desc: 'AI 智能体开发平台',
                link: 'https://www.coze.cn/'
            },
        ]
    },
    {
        title: 'HTML5&CSS3',
        items: [
            {
                icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
                title: 'MDN | Web 开发者指南',
                desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
                link: 'https://developer.mozilla.org/zh-CN'
            },
            {
                icon: 'https://no.buging.cn/img/w3school.png',
                title: 'w3school',
                desc: 'w3school在线教程',
                link: 'https://www.w3school.com.cn'
            },
            {
                icon: 'https://static.runoob.com/images/favicon.ico',
                title: '菜鸟教程',
                desc: '学的不仅是技术，更是梦想！',
                link: 'https://www.runoob.com'
            },
            {
                icon: 'https://sass.bootcss.com/assets/img/logos/sass-77bd637b.png',
                title: 'Sass',
                desc: 'Sass 是成熟、稳定、强大的 CSS 扩展语言。',
                link: 'https://sass.bootcss.com'
            },
            {
                icon: 'https://less.bootcss.com/public/img/less_logo.png',
                title: 'Less',
                desc: '给 CSS 加点料,是一门向后兼容的 CSS 扩展语言。',
                link: 'https://less.bootcss.com'
            },
            {
                icon: 'https://no.buging.cn/img/stylus.png',
                title: 'Stylus',
                desc: '富有表现力的、动态的、健壮的 CSS',
                link: 'https://stylus-lang.com'
            },
            {
                // icon: '/icons/json-cn.ico',
                title: '渐变背景CSS3样式',
                desc: '一个集合180中免费的线性渐变网站',
                link: 'https://color.oulu.me'
            }
        ]
    },
    {
        title: 'JavaScript & TypeScript',
        items: [
            {
                icon: '/icons/jquery.svg',
                title: 'jQuery API',
                desc: '一个兼容多浏览器的 JavaScript 框架',
                link: 'https://jquery.cuishifeng.cn'
            },
            {
                icon: 'https://no.buging.cn/img/TypeScriptcn.png',
                title: 'TypeScript',
                desc: 'TypeScript 是 JavaScript 超集',
                link: 'https://www.tslang.cn/'
            },
            {
                icon: '',
                title: 'TypeScript 教程',
                desc: 'TypeScript 教程',
                link: 'https://wangdoc.com/typescript/'
            },

        ]
    },
    {
        title: '数据库',
        items: [
            {
                title: 'IndexedDB 入门教程',
                desc: '浏览器数据库 IndexedDB 入门教程 - 阮一峰的网络日志',
                link: 'https://www.ruanyifeng.com/blog/2018/07/indexeddb.html'
            }
        ]
    },
    {
        title: 'Vue',
        items: [
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue 2',
                desc: '渐进式 JavaScript 框架',
                link: 'https://v2.cn.vuejs.org'
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue 3',
                desc: '渐进式 JavaScript 框架',
                link: 'https://cn.vuejs.org'
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue CLI',
                desc: 'Vue.js 开发的标准工具',
                link: 'https://cli.vuejs.org/'
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue Router',
                desc: 'Vue.js 的官方路由为 Vue.js 提供富有表现力、可配置的、方便的路由',
                link: 'https://router.vuejs.org/zh'
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vuex',
                desc: 'Vue.js 状态管理',
                link: 'https://v3.vuex.vuejs.org/'
            },
            {
                icon: 'https://pinia.vuejs.org/logo.svg',
                title: 'Pinia',
                desc: '符合直觉的 Vue.js 状态管理库',
                link: 'https://pinia.vuejs.org/zh'
            },
        ]
    },
    {
        title: 'React',
        items: [
            {
                icon: 'https://zh-hans.reactjs.org/favicon.ico',
                title: 'React',
                desc: '用于构建用户界面的 JavaScript 库',
                link: 'https://zh-hans.reactjs.org'
            },
            {
                icon: 'https://reactrouter.com/favicon-light.png',
                title: 'React Router',
                desc: 'React 的声明式路由',
                link: 'https://reactrouter.com'
            },
            {
                icon: 'https://cn.redux.js.org/img/redux.svg',
                title: 'Redux',
                desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
                link: 'https://cn.redux.js.org'
            },
            {
                icon: 'https://zh.mobx.js.org/assets/mobx.png',
                title: 'MobX',
                desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
                link: 'https://zh.mobx.js.org'
            },
            {
                icon: 'https://ahooks.js.org/simple-logo.svg',
                title: 'ahooks',
                desc: '一套高质量可靠的 React Hooks 库',
                link: 'https://ahooks.js.org/zh-CN'
            }
        ]
    },
    {
        title: '小程序',
        items: [
            {
                icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
                title: '微信小程序',
                desc: '微信小程序官方开发者文档',
                link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
            },
            {
                icon: '	https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
                title: 'uni-app',
                desc: '一个使用 Vue.js 开发所有前端应用的框架',
                link: 'https://uniapp.dcloud.net.cn'
            },
            {
                icon: 'https://cdn.docschina.org/home/logo/taro.png',
                title: 'Taro',
                desc: '多端统一开发解决方案',
                link: 'https://taro.jd.com'
            },
        ]
    },
    {
        title: '编译&构建&打包',
        items: [
            {
                icon: 'https://www.webpackjs.com/icon_180x180.png',
                title: 'Webpack 中文网',
                desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
                link: 'https://www.webpackjs.com'
            },
            {
                icon: 'https://cn.vitejs.dev/logo.svg',
                title: 'Vite 中文文档',
                desc: '下一代前端工具链',
                link: 'https://cn.vitejs.dev'
            },
            {
                icon: 'https://no.buging.cn/img/nodeapp.png',
                title: 'Node.js',
                desc: 'Node.js 是一个开源的、跨平台的 JavaScript 运行时环境',
                link: 'https://nodejs.cn'
            },
        ]
    },
    {
        title: '图标库',
        items: [
            {
                icon: 'https://img.alicdn.com/imgextra/i2/O1CN01FF1t1g1Q3PDWpSm4b_!!6000000001920-55-tps-508-135.svg',
                title: 'iconfont',
                desc: '阿里妈妈MUX倾力打造的矢量图标管理、交流平台',
                link: 'https://www.iconfont.cn'
            },
            {
                icon: '',
                title: 'Font Awesome',
                desc: '一套绝佳的图标字体库和CSS框架',
                link: 'https://fontawesome.dashgame.com'
            },
            {
                icon: 'https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg',
                title: 'flaticon',
                desc: 'Vector Icons and Stickers - PNG, SVG, EPS, PSD and CSS',
                link: 'https://www.flaticon.com'
            },
            {
                icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.598fc011.svg',
                title: 'IconPark',
                desc: '丰富多彩的资源库免费使用',
                link: 'https://iconpark.oceanengine.com'
            },
            {
                icon: '',
                title: '',
                desc: '',
                link: ''
            },
        ]
    },
    {
        title: '组件库',
        items: [
            {
                icon: 'https://www.jq22.com/img/logo.png',
                title: 'jQuery 插件库',
                desc: '收集最全最新最好的 jQuery 插件',
                link: 'https://www.jq22.com/'
            },
            {
                icon: 'https://no.buging.cn/img/bootcss.jpg',
                title: 'Bootstrap',
                desc: '简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。',
                link: 'https://www.bootcss.com'
            },
            {
                icon: 'https://no.buging.cn/img/element.png',
                title: 'Element',
                desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
                link: 'https://element.eleme.cn/#/zh-CN'
            },
            {
                icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
                title: 'Element Plus',
                desc: '基于 Vue 3，面向设计师和开发者的组件库',
                link: 'https://element-plus.org/zh-CN/#/zh-CN'
            },
            {
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                title: 'Ant Design',
                desc: '助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～',
                link: 'https://ant.design/index-cn'
            },
            {
                icon: 'https://no.buging.cn/img/echarts.png',
                title: 'Echarts',
                desc: '一个基于 JavaScript 的开源可视化图表库',
                link: 'https://echarts.apache.org'
            },
            {
                icon: 'http://datav.jiaminghi.com/favicon.ico',
                title: 'DataV',
                desc: 'Vue 大屏数据展示组件库',
                link: 'http://datav.jiaminghi.com'
            },
            {
                icon: 'http://mars3d.cn/assets/png/logo-v1FyDH5L.png',
                title: 'Mars3D',
                desc: 'Mars3D 三维可视化平台 | 地图开发',
                link: 'http://mars3d.cn'
            },
            {
                icon: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png',
                title: 'Vant',
                desc: 'Vue2 版本',
                link: 'https://vant-ui.github.io/vant/v2/#/zh-CN/'
            },
            {
                icon: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png',
                title: 'Vant',
                desc: 'Vue3 版本',
                link: 'https://vant-ui.github.io/vant/#/zh-CN'
            },
            {
                icon: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png',
                title: 'Vant Weapp',
                desc: '微信小程序版本',
                link: 'https://vant-ui.github.io/vant-weapp/#/home'
            },
            {
                icon: 'https://www.uviewui.com/common/logo.png',
                title: 'uView',
                desc: 'uView UI，是全面兼容nvue的uni-app生态框架',
                link: 'https://www.uviewui.com'
            },
            {
                icon: 'https://taro-ui.jd.com/img/logo-taro.png',
                title: 'Taro UI',
                desc: 'Taro UI 是一款基于 Taro 框架开发的多端 UI 组件库',
                link: 'https://taro-ui.jd.com'
            },
            {
                icon: '',
                title: 'WeUI',
                desc: 'WeUI 是一套同微信原生视觉体验一致的基础样式库',
                link: 'https://weui.io/'
            },
            {
                icon: '',
                title: 'Naive UI',
                desc: '一个 Vue 3 组件库，比较完整，主题可调，使用 TypeScript',
                link: 'https://www.naiveui.com/zh-CN/os-theme'
            },




        ]
    }
]