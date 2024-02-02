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

var myChart = echarts.init(document.getElementById('main'))
option = []
myChart.setOption(option)
```

## 项目中引入

[教程](https://echarts.apache.org/handbook/zh/basics/import/)

1、全局引入

```js
import * as echarts from 'echarts'

// 初始化echarts实例
var myChart = echarts.init(document.getElementById('main'))
// 绘制图表
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
})
```

2、按需引入

```js
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components'
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

// 接下来的使用就跟之前一样，初始化图表，设置配置项
var myChart = echarts.init(document.getElementById('main'))
myChart.setOption({
  // ...
})
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
	<div ref="main" style="width:600px;height:400px;"></div>
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
      var myChart = echarts.init(this.$refs.main)
			myChart.setOption({
        ... // option的内容
      })
    }
  }
</script>
```



## 相关配置

1、