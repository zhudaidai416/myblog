## [ECharts](https://echarts.apache.org/examples/zh/index.html)

## [ECharts 配置手册](https://echarts.apache.org/zh/option.html#title)

## 引入

### 1、npm 获取

```bash
npm install echarts --save
```

### 2、源代码下载

下载地址：https://echarts.apache.org/zh/download.html

```html
<!-- html文件引入 -->
<script src="echarts.min.js" ></script>
```

### 3、CDN 引入

::: tip 链接

Staticfile CDN（国内）：https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js

jsDelivr：https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js

cdnjs：https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js

:::

```html
<!-- html文件引入 -->
<script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js" ></script>
```

## 使用步骤

```js
<div id="main" style="width: 600px;height:400px;"></div>

var myChart = echarts.init(document.getElementById('main'));
myChart.setOption(option);



```

### vue 中引入

1、全局引入

```js
// main.js中引入echarts
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
```

2、按需引入

```vue
<template>
	<div id="main" style="width:600px;height:400px;"></div>
</template>

<script>
  var echarts = require('echarts')
  export default {
    name: 'index',
    data() {
      return {
        
      }
    },
    mounted() {
      var myChart = echarts.init(document.getElementById('main'));
			myChart.setOption({
        ... // option的内容
      })
    }
  } 
</script>
```



## 相关配置

1、