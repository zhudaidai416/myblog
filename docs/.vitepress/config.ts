import { defineConfig } from 'vitepress';
import { nav } from './nav';
import sidebar from './sidebar';
import algolia from './algolia';

export default defineConfig({

  // 部署站点的 base URL，即仓库
  base: '/myblog/',

  // 标签页图标
  head: [
    ['link', { rel: 'icon', href: 'images/logo2.png' }]
  ],

  // 站点语言、标题、描述
  lang: 'zh-CN',
  title: '朱呆呆',
  titleTemplate: '个人博客',
  description: '朱呆呆博客包含前端常用知识、好用工具等...',

  // 防止无效链接而导致构建失败
  ignoreDeadLinks: true,

  // 选择生成干净的目录结构 
  cleanUrls: true,

  // 页面的最后更新时间
  lastUpdated: true,

  // markdown 配置
  markdown: {
    lineNumbers: true
  },

  // 主题配置
  themeConfig: {
    i18nRouting: false,

    // 标题和logo
    siteTitle: '⌨ 朱呆呆 ʘᴗʘ',
    logo: 'images/logo.png',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // 搜索
    algolia,

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhudaidai416' },
      { icon: { svg: '<svg t="1679564367155" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2986" width="32" height="32"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="2987"></path></svg>' }, link: 'https://juejin.cn/user/3883893549705992' }
    ],

    // 右侧大纲配置
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    // 页脚
    footer: {
      message: 'welcome to zhudaidai\'s blog!',
      copyright: 'Copyright © 2023-present 朱呆呆'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/zhudaidai416/myblog/tree/master/docs/:path',
      text: '在 GitHub 上编辑'
    },

    lastUpdatedText: '上次更新',

    // 上下页文本提示文字
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})