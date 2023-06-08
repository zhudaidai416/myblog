## [HBuilderX 安装](https://www.dcloud.io/hbuilderx.html)

## 条件编译

以 `#ifdef` 或 `#ifndef` 加 **`%PLATFORM%`** 开头，以 `#endif` 结尾。

```js
#ifdef：if defined 仅在某平台存在
#ifndef：if not defined 除了某平台均存在
%PLATFORM%：平台名称
```

```js
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
```

## [目录结构](https://uniapp.dcloud.net.cn/tutorial/project.html)

## [分包处理](https://blog.csdn.net/shuai1999m/article/details/124969445)

1、在 manifest.json 文件中找到源码视图，配置 subPackages，小程序在pages.json 配置**第三步**以下操作即可生效，app分包必须在 manifest.json 配置开启

```json
"mp-weixin" : {
  "appid" : "",
  "setting" : {
      "urlCheck" : false
  },
  "usingComponents" : true,
  "optimization" : {
    "subPackages" : true  // 配置subPackages
  }
},
```

2、创建分包的文件，根据个人需求配置多个包，这里只分了一个包 pagesA，把需要分包的文件复制到 pagesA 中，这里**值得注意**的是，在你复制的文件中如果有使用主包的组件或静态文件，并且主包中的文件没有再复用的文件此时都需要复制到 pagesA 中
