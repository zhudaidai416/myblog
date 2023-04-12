export const nav = [
  { text: '前端导航', link: 'https://no.buging.cn' },
  {
    text: '前端知识',
    activeMatch: '/前端知识',
    items: [
      {
        text: '前端基础',
        items: [
          { text: 'HTML', link: '/前端基础/HTML.md' },
          { text: 'JS', link: '/前端基础/JS基础.md' }
        ]
      },
      {
        text: '前端框架',
        items: [
          { text: 'Vue2', link: '/前端框架/Vue2.md' },
          { text: 'Vue3', link: '/前端框架/Vue3.md' }
        ]
      }
    ]
  },
  {
    text: '好用工具',
    activeMatch: '/好用工具',
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
          { text: 'Adobe全家桶安装包', link: 'https://www.yuque.com/yihulaojiu-gsfg9/zz2qv5/vixkf6' },
          { text: '前端面试题', link: 'https://docs.qq.com/doc/DQ09uU1J6Rk1nYXdL' }
        ]
      },
    ]
  },
  {
    text: '大神博客',
    activeMatch: '/大神博客',
    items: [
      {
        text: '✨大神博客',
        items: [
          { text: '茂茂物语', link: 'https://notes.fe-mm.com' },
          { text: 'Vite中文文档', link: 'https://process1024.github.io/vitepress' },
          { text: 'VueHook Plus', link: 'https://inhiblab-core.gitee.io/docs/hooks' },
          { text: 'ChoDocs', link: 'https://chodocs.cn/' },

        ]
      },
    ]
  }
]