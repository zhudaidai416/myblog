# [HBuilderX 安装](https://www.dcloud.io/hbuilderx.html)

# 条件编译

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

# [目录结构](https://uniapp.dcloud.net.cn/tutorial/project.html)

