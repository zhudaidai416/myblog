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

## Upload 上传

图片本地预览

```vue
<template>
  <el-upload
    class="avatar-uploader"
    ref="uploadRef"
    :show-file-list="false"
    :auto-upload="false"
    :on-change="onSelectFile">
    <img v-if="imgUrl" :src="imgUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
  <!-- 另外写一个按钮也绑定上传的事件 -->
  <el-button
    type="primary"
    :icon="Plus"
    size="large"
    @click="uploadRef.$el.querySelector('input').click()"
    >选择图片
  </el-button>
</template>

<script setup>
import { ref } from 'vue'
const uploadRef = ref()
const onSelectFile = (uploadFile) => {
  // 本地图片预览
  // imgUrl.value = URL.createObjectURL(uploadFile.raw)

  // 基于 FileReader 读取图片预览
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imgUrl.value = reader.result
  }
}
</script>
```

