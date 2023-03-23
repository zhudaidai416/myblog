import { defineConfig } from 'vitepress';

export default defineConfig({
  // 部署站点的 base URL，即仓库
  base: '/myblog/',

  // 站点语言、标题、描述
  lang: 'zh-CN',
  title: '朱呆呆',
  titleTemplate: '个人博客',
  description: '朱呆呆个人技术博客包含前端常用知识、好用工具等',

  // 防止无效链接而导致构建失败
  ignoreDeadLinks: true,

  // 选择生成干净的目录结构 
  cleanUrls: true,

  // 页面的最后更新时间
  lastUpdated: true,

  // 主题配置
  themeConfig: {
    i18nRouting: false,

    // 标题和logo
    siteTitle: '⌨ 朱呆呆 ʘᴗʘ',
    logo: 'images/logo.png',

    // 导航栏
    nav: [
      { text: '前端基础', link: '/前端基础/HTML.md', activeMatch: '/前端基础' },
      {
        text: '前端框架',
        items: [
          { text: 'Vue2', link: '/前端框架/Vue3.md' },
          { text: 'Vue3', link: '/前端框架/Vue3.md' }
        ]
      },
      {
        text: '好用工具',
        items: [
          {
            text: '🌼我的',
            items: [
              { text: '呆呆导航', link: '/文档导航/文档导航.md' },
              { text: '呆呆剪辑', link: 'https://space.bilibili.com/420455865' }
            ]
          },
          {
            text: 'VitePress官方文档',
            items: [
              { text: 'VitePress', link: 'https://vitepress.dev' },
            ]
          },
          {
            text: '🛠工具',
            items: [
              { text: '前端导航', link: 'https://no.buging.cn' },
              { text: '前端面试题', link: 'https://docs.qq.com/doc/DQ09uU1J6Rk1nYXdL' }
            ]
          },
        ]
      },
      {
        text: '✨大神博客',
        items: [
          {
            text: '大神博客',
            items: [
              { text: '茂茂物语', link: 'https://notes.fe-mm.com' },
              { text: 'Vite中文文档', link: 'https://process1024.github.io/vitepress' },
              { text: 'VueHook Plus', link: 'https://inhiblab-core.gitee.io/docs/hooks' },
            ]
          },
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/前端基础/': [
        {
          text: 'HTML5&CSS3',
          items: [
            { text: 'HTML', link: '/前端基础/HTML.md' },
            { text: 'CSS', link: '/前端基础/CSS.md' },
          ]
        },
        {
          text: 'JavaScript',
          items: [
            { text: 'JavaScript', link: '/前端基础/JavaScript.md' },
            { text: 'TypeScript', link: '/前端基础/TypeScript.md' },
          ]
        },
      ],
      '/前端框架/': [
        {
          text: '前端框架',
          items: [
            { text: 'Vue2', link: '/前端框架/Vue2.md' },
            { text: 'Vue3', link: '/前端框架/Vue3.md' },
            { text: 'React', link: '/前端框架/React.md' },
          ]
        }
      ],
      '/小程序/': [
        {
          text: '小程序',
          items: [
            { text: '微信小程序', link: '/小程序/微信小程序.md' },
            { text: 'uniapp', link: '/小程序/uniapp.md' },
            { text: 'Taro', link: '/小程序/Taro.md' },
          ]
        }
      ],
      '/其它/': [
        {
          text: '其它',
          items: [
            { text: 'NodeJs', link: '/其它/NodeJs.md' },
            { text: 'sql语句', link: '/其它/sql语句.md' },
            { text: 'Sass', link: '/其它/Sass.md' },
            { text: 'Less', link: '/其它/Less.md' },
            { text: 'Git', link: '/其它/Git.md' },
            { text: 'canvas', link: '/其它/canvas.md' },
            { text: '闭包', link: '/其它/闭包练习题.md' },
          ]
        }
      ],

    },

    // 右侧大纲配置
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    // 配置顶部右侧的社交链接
    socialLinks: [
      { icon: { svg: '<svg t="1679221577314" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3227" width="300" height="300"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="3228"></path></svg>' }, link: 'https://gitee.com/zhudaidai' },
      { icon: 'github', link: 'https://github.com/zhudaidai416' },
      { icon: { svg: '<svg t="1679564367155" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2986" width="32" height="32"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="2987"></path></svg>'} , link: 'https://juejin.cn/user/3883893549705992' }
    ],

    // 页脚
    footer: {
      message: 'welcome to zhudaidai\'s blog!',
      copyright: 'Copyright © 2023-present 朱呆呆'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    // 上下篇文本提示文字
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})