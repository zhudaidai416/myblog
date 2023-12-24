# [Element](https://element.eleme.cn/#/zh-CN)

## 引入

### 1、全局引入

```bash
# 安装 element-ui
npm i element-ui -S
```

在 `main.js` 中写入：

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 2、按需引入

```bash
# 按需引入
npm install babel-plugin-component -D
```

将 `.babelrc` 修改为：

> 若项目目录没有 `.babelrc` 文件，可以写在 `babel.config.js`
>
> `.babelrc` 是一个 json 格式的文件。在 `.babelrc` 配置文件中，主要是对预设（presets）和插件（plugins）进行配置。

```json
{
  "presets": [["@babel/preset-env", { "modules": false }],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

在 plugins 文件夹下新建 `element.js` 文件

```js
import Vue from 'vue';
import {
  Button,  
  Select, 
  Menu
} from 'element-ui';

Vue.use(Button);
Vue.use(Select);
Vue.use(Menu);
```

在 `main.js` 中引入：

```js
import './plugins/element.js';
```

## menu

```css
.el-menu,
.el-menu--horizontal>.el-menu-item,
::v-deep .el-menu--horizontal>.el-submenu .el-submenu__title {
  height: 40px;
  line-height: 40px;
  background-color: #178FFD;
  color: #FFFFFF;
  border: none;
}

.el-menu--horizontal>.el-menu-item,
::v-deep .el-menu--horizontal>.el-submenu .el-submenu__title{
  width: 135px;
  text-align: center;
  padding: 0;
}

// 设置选中el-menu-item时的状态
::v-deep .el-menu-item.is-active {
  border: none !important;
  color: #FFFFFF !important;
  background-color: #117DE1;
}

// 设置hover时el-menu-item时的样式 
.el-menu-item:hover,
::v-deep .el-submenu__title:hover {
  color: #FFFFFF !important;
  background-color: #117DE1 !important;
  border-bottom: none !important;
}

// 一级菜单选中的样式
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {}

// 下拉图标隐藏
::v-deep .el-submenu__title {
  .el-icon-arrow-down {
    display: none;
  }
}

// 二级菜单悬浮及背景样式
.el-menu--popup-bottom-start {}

.el-menu--popup-bottom-start .el-menu-item {}

.el-menu--popup-bottom-start .el-menu-item:hover {}
```



## tooltip

```css
// tooltip 箭头样式
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow:after,
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow {
  border-width: 0 !important;  // 不要箭头
}

// tooltip 内容
.el-tooltip__popper.is-dark {}
```

