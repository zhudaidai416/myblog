## [Element Plus](https://element-plus.org/zh-CN/#/zh-CN)

## 引入

### 1、全局引入

```bash
# 安装
npm install element-plus --save
```

main.ts

```tsx
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

tsconfig.json

```json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

### 2、按需引入

```bash
# 按需加载插件
npm install -D unplugin-vue-components unplugin-auto-import

# 处理图标的按需加载
npm i -D unplugin-icons
```

把下列代码插入到你的 `Vite` 或 `Webpack` 的配置文件中

#### Vite

```tsx
// vite.config.ts 文件

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),  // 自动导入 Element ui 相关函数
        IconsResolver(),  // 自动导入图标组件
      ],
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        ElementPlusResolver(),  // 自动导入Element 组件
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

#### Webpack

```js
// webpack.config.js 文件

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

