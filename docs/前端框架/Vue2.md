# [Vue2 官方文档](https://v2.cn.vuejs.org/)

# Vue认识

## 1、前端三大框架

- Angular（最早的是Angular.js）


- Vue.js


- React.js


## 2、前端与后端分离

各司其职，前端应用与后端应用一般是分开部署。

前端负责内容：网页内容、页面路由、Ajax数据交互

后端负责内容：接口、操作数据库、权限控制...

## 3、服务器端渲染与客户端渲染

| 服务端渲染                                                   | 客户端渲染                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| 由服务器将数据组合成 html 标签后，由前端展示，如普通 HTML 页面 | 服务端向前端传输数据，如 JSON ，由前端组装成 html 页面展示 |
| 如 Pug 、 EJS 等模板引擎                                     | 如 Vue 、 React 等框架                                     |
| 优点：1、安全，因为服务器的内容对前端都不可见2、对 SEO 有利，由于搜索引擎只会读取 html ，不会执行 JavaScript ，因此客户端渲染的页面在搜索引擎看来只是个空白页面。 | 优点：1、节省流量，数据量少2、用户体验好，可以不用刷新页面 |
| 一般需要安全性高的页面，比如注册、登录，会使用服务端渲染     | 安全性要求不高的页面，如商品页等，会使用客户端渲染         |

## 4、开发模式

1）、MVC

2）、MVP

3）、MVVM

- M：数据层
- V：视图层
- VM：ViewMoudle，一个抽象层

## 5、什么是 Vue

渐进式 JavaScript 框架

SPA

即singel page application（单页应用程序），也就是整个应用只有一个 html 文件。

优点：

- 即时性
- 不需要加载整个页面就可以修改内容
- 页面之间的切换不会出现白屏的现象
- 服务器压力小

缺点：

- 首次加载耗时比较多（因为首次需要一次性加载完所有资源）
- css命名冲突
- 前进后退功能复杂度较高

## 6、Vue 特点

- 组件化（一个视图功能）
- 虚拟DOM
- 响应式数据（绑定的变量发生改变的时候，视图层会自动更新）

## 7、Vue 引入

```js
// 第一步、引入框架 JavaScript
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>

// 第二步、实例化
let vm = new Vue()
```

# Vue 语法

## 1、Mustache 插值语法

1）、说明

在标签之间使用 `{{}}` 进行插值，页面渲染后， `{{}}` 内的语法会替换为 data 中的数据。

2）、应用

```html
直接渲染：<p>{{msg}}</p>

简单的加减乘除：<p>{{num + 1}}</p>

调用函数（内置函数、也可以是自定义函数）：<p>{{new Date()}}</p>

三元运算符：{{ 条件 ?  真 : 假 }}
```

> 注意：不能使用 if else、switch、for

## 2、v-bind

1）、说明

在vue中，以 `v-` 开头的表示指令，表示 vue 提供的特殊属性。

v-bind 可以在标签属性上响应式更新数据。

2）、应用

```html
<p v-bind:title="myTitle"></p>
<p v-bind:id="'list'+myId">{{msg}}</p>

// v-bind简写
<p :title="myTitle"></p>
<p :id="'list'+myId">{{msg}}</p>

// 样式绑定
// class名为：active，如果 isActive 为true，则active生效
<p :class="{active:isActive}">首页</p>

// 多个class的控制
<p :class="{active:isActive text-danger: hasError}">首页</p>

// 数组
<p :class="[class1,class2]">数组 class</p>

// 三元运算
<p :class="[isActive ? 'color1':'color2']">三元运算</p>

// style绑定对象
<p :style="myStyle">style绑定对象</p>

// 同时绑定多个style对象
<p :style="[myStyle,myStyle2]">style绑定多个对象</p>
```

## 3、v-once

1）、说明

表示只执行一次插值，当数据改变后，插值处的内容不会更新。

2）、应用

```html
<p v-once>{{msg}}</p>
```

## 4、v-text 和 v-html

1）、说明

类似 innerText 和 innerHtml 。

2）、应用

```html
<p v-text="myText"></p>
<p v-html="myText"></p>
```

## 5、条件渲染

1）、说明

符合条件的就会渲染节点。

2）、应用

```html
>> v-if
<button v-if="isShow">按钮</button>

>> v-else-if、v-else 
v-else-if 必须跟在 v-if 或者 v-else-if 的后面。
v-else 必须跟在 v-if 或者 v-else-if 的后面。

同时控制多个节点的渲染。
可以使用 template 标签，该标签不会渲染出来。

<template v-if="isShow">
  <p>第一个节点</p>
  <p>第二个节点</p>
  <p>第三个节点</p>
</template>
```

## 6、v-show

1）、说明

是否显示当前元素。

2）、应用

```html
<p v-show="isShow"></p>
```

v-if 与 v-show 的区别

- v-if 是真正的渲染，所有会有插入节点和移除节点的过程

- v-show 任何情况下都会被渲染，只是切换 display 属性

- v-if 有比较高的切换开销，而  v-show 有更高的初始化渲染开销

## 7、列表渲染

1）、说明

可以基于一个数组去渲染相同的节点。

2）、应用

```html
>> 基础语法
// item 表示数组中元素
<li v-for="item in 数组">{{item}}</li>
// index 表示下标
<li v-for="(item, index) in 数组">{{item}}</li>

>> key 属性
// 从而重用和重新排序现有元素，你需要为每项提供一个唯一 key
<li v-for="(item, index) in 数组" :key="唯一值">{{item}}</li>

// 唯一值：可以使用 index，但不是最好，建议使用 id
```

## 8、事件绑定v-on

```js
// 方式一
<button v-on:事件名="直接修改数据的代码"></button>

// 方式二
<button v-on:事件名="调用函数名"></button>

new Vue({
  data: {},
  methods: {
    函数名() {}
  }
})
```

```js
// 例子
<button v-on:click="sayHi"></button>

// 简写
<button @click="sayHi"></button>

new Vue({
  methods: {
    sayHi() {
      console.log('Hi');
    }
  }
})
```

```js
// 获取事件对象
<button v-on:click="getE">获取事件对象</button>

new Vue({
  methods: {
    getE(e) {
      console.log(e);
    }
  }
})

// 调用函数时传递参数
<button v-on:click="getOther(123)">触发事件并传递参数</button>

new Vue({
  methods: {
    getOther(num) {
      console.log(num)
    }
  }
})

// 传递参数并手动注入事件对象，注意：$event固定写法
<button v-on:click="getOther2(123, $event)">传递参数及事件对象</button>

new Vue({
  methods: {
    getOther2(num, e) {
      console.log(e, num)
      console.log(arguments)
    }
  }
})
```

修饰符

- 事件修饰符
  - .stop
  - .prevent

- 按键修饰符
  - .enter
  - .space

## 9、数据修改

1）、说明

在视图层中所有绑定的变量，都必须在 data 中定义，这样的数据才会是响应式数据。

响应式数据：数据改变，视图层自动更新，视图层改变，数据自动更新。

Vue2 实现原理：数据劫持 + 观察者模式

2）、基础数据的修改（string、number、boolean、null、undefined）

```js
vm.num = 值;
```

3）、引用数据修改

```js
// 数组 
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

this.数组 = 新数组;  // 用新数组覆盖原来的数组

// 对象
Vue.set(target, key, value);
vm.$set(target, key, value);
this.$set(target, key, value);
```

## 10、v-model

1）、说明

主要应用在表单元素，实现表单元素的 value 与 data 中的数据绑定（双向绑定）

2）、应用

```js
<input type="text" v-model="text">

new Vue({
  data: {
  	text: ''
  }
})
```

# 脚手架

1）、说明

脚手架可以理解为一个搭建 vue 环境的工具。

2）、脚手架安装

```cmd
// 脚手架安装
npm install -g @vue/cli
mac安装：sudo npm install -g @vue/cli

// 检查是否已经安装成功
vue --version
运行结果：@vue/cli 5.0.8  // 表示安装成功
```

3）、搭建项目

```cmd
>> 第一步、创建项目
vue create 项目名

>> 第二步、项目配置，根据提示进行选择
? Please pick a preset:
  Default ([Vue 3] babel, eslint)
> Default ([Vue 2] babel, eslint)
  Manually select features

>> 第三步、进入项目、并启动
cd 项目名
npm run serve

运行结果：
App running at:
- Local:   http://localhost:8080/
- Network: http://192.168.0.101:8080/

Note that the development build is not optimized.
To create a production build, run npm run build.
```

4）、项目目录结构

```cmd
├─ public  // 静态资源目录，开发期间不需要修改的
├─ src  // 源代码目录
│	├─ assets  // 资源目录，一般存放 css、图片、字体等
│	├─ components  // 公共组件目录
│	├─ App.vue  // vue 组件
│	└─ main.js  // 入口文件，一般在这里实例化 vue
├─ .gitignore  // git 忽略文件
├─ babel.config.js  // babel 配置文件，转化语法
└─ vue.config.js  // vue 配置文件
```

5）、vscode 插件：Vetur

6）、浏览器插件：vue devtools

# 组件

## 1、组件概念

组件就是一个提供特定功能的一段代码，包含 html ， css ， js ，相当于一个自定义标签。

使用组件是为了解决代码高耦合、低内聚、无重用的问题。

现在的开发不是为了创建 html 文件，而是创建各个组件，通过大量的组件而完成的。

## 2、组件的定义

### 1）、全局组件

```vue
Vue.component('组件名',{

})
// 使用（可以在任意地方使用）
<组件名></组件名>
```

```js
// 例子
// 在main.js引入
import MyModal from './components/MyModal.vue'

Vue.component('MyModal', MyModal)

// 接下来在其他任意组件内不需要在 components 中注册了，而是直接使用
<MyModal />
```

### 2）、局部组件

```vue
new Vue({
  components:{
    局部组件
  }
})
```

```vue
// 例子
<template>
  <div id="app">
    <MyModal />
		<MyModal></MyModal>
</template>

<script>
import MyModal from './components/MyModal.vue'

export default {
  name: 'App',
  components: {
    MyModal,
  }
}
</script>
```

### 3)、单文件组件

该组件是一个文件，以 `.vue` 结尾。

```vue
该文件包含三个部分

>> template：这一部分编写 html 代码的，并且只能有一个根标签
<template></template>

>> style：该部分完成当前组件的 css 代码
<style></style>
   
>> script：该部分完成组件的 js 逻辑处理
<script></script>
   

注意： data 必须是一个函数，然后在函数中返回对象
如果在组件中 data 写为对象，那么每一个组件的 data 都会相互影响。
<script>
  exexport default {
    name: '',
    data(){
      return {
        变量
      }
    },
  }
</script>
```

## 3、组件中引入子组件

### App.vue 中引入子组件 Todo.vue

```vue
// 第一步、创建子组件
components文件夹下创建Todo.vue

<template>
  <div id="app">
    // 第四步、在 template 中直接当做标签使用
    <Todo />
		<Todo></Todo>
</template>

<script>
// 第二步、通过 import from 引入子组件
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  // 第三步、注册子组件
  components: {
    Todo,
  }
}
</script>
```

## 4、props

1）、说明

props 是父组件传递给子组件的数据，子组件只能使用，而不能修改。

2）、应用

```vue
// 父组件： app.vue 
<template>
	<TodoMvc title="代办列表"></TodoMvc>
</template>

// 子组件：接受 title
<template>
	<div class="todo">
		<h2>{{title}}</h2>
	</div>
</template>

// 父组件： app.vue 
<script>
	export default {
		name: 'TodoMvc', // 组件名
		props: ['title']
	}
</script>
// 如果是在 js 中访问 props，那么通过 this.title 的方式访问
```

## 5、动态组件

1）、说明

渲染一个元组件，根据 is 的值来决定渲染哪一个组件。

2）、语法

```vue
<component is="组件名"></component>
```

3）、案例

```vue
<el-button @click="changeLogin">切换</el-button>
<component :is="whichWay"></component>

<script>
import QrUser from '../components/QrUser.vue'
import UserAccount from '../components/UserAccount.vue'

export default {
  name: 'LoginKeep',
  data() {
    return {
      whichWay: 'UserAccount'
    }
  },
  components: {
    UserAccount,
    QrUser
  },
  methods: {
    changeLogin() {
      if(this.whichWay === 'UserAccount') {
        this.whichWay = 'QrUser'
      } else {
        this.whichWay = 'UserAccount'
      }
    }
  }
}
</script>
```

## 6、组件缓存（keep-alive） - 性能优化

1）、说明

通过 keep-alive 组件去包裹组件，那么会将当前组件缓存，切换组件时就不会销毁组件了。组件第一次加载后，就不会销毁了，那么组件的部分生命周期就不会再执行。

2）、语法

```vue
<keep-alive>
  组件
</keep-alive>

>> 参数
include：缓存
exclude：不缓存

>> 生命周期
activated
deactivated

<!-- 缓存时，默认是缓存所有已经渲染的组件 -->
<!-- 现在只想缓存部分组件，那么使用 include 属性来决定只缓存哪些组件 -->
<keep-alive include="UserAccount">
  <component :is="whichWay"></component>
</keep-alive>

或者使用 exclude 来决定哪些组件不缓存。
```

## 7、组件封装

某一段代码或者某个需求重复出现后。

组件怎么封装：`props 和 slot`

# ES6 模块化

## 1、前端模块化方案

- CMD

- AMD

- CommonJS

​		该方案是服务器端同步加载方案，实现者是NodeJS

​		require()

​		module.exports

- ES6 模块化

​		import from

​		export default

## 2、语法

```js
/ >> import from：引入模块 /
import 变量 from 地址
import 文件地址;   // 一般引入一些非 js ，比如 css 文件


/ >> export：暴露模块，可以暴露任何顶级的变量：function、class、const /
// a.js文件暴露
export const a='123';
// b.js文件引入变量a
import {a} from './a';


/ >> export default：暴露模块 - 默认导出，在该关键字后面可以跟上任何一个值，一个文件只能使用一次。 /
// a.js文件暴露
function foo(){
  console.log('foo function');
}
export default foo;
// b.js文件引入函数foo
import foo from './a';


/ >> 同时使用 export 和 export default 导出 /
// a.js文件暴露
export const a='123';
function foo(){
  console.log('foo function');
}
export default foo;
// b.js文件引入变量a、函数foo
import foo,{a} from './a';
```

# 生命周期（钩子函数）

## 1、概念

是指每一个 vue 实例被创建时都要经过的一系列的初始化过程，在这个过程中`自动运行一系列`的函数。

## 2、钩子函数

```js
-- 组件生命周期
>> beforeCreate()
实例初始化完成后，在数据观测和事件配置之前调用，在当前阶段 data、methods 等是不可以被访问的。

>> created()
实例已经创建，可以访问 data ，但是不能访问 dom 节点，可以用于在这里发起请求。

>> beforeMount()
在节点挂载之前调用。

>> mounted()
节点挂载完成后调用，可以访问 data ，可以访问节点，可以发起请求。

// 注意：以上4个生命周期函数只会在实例挂载的时候依次调用，并且只会调用一次。

>> beforeUpdate()
数据更新前调用。

>> updated()
发生在更新之后，可以拿到更新后的 data。

// 警惕：不要在这里修改数据，因为修改数据后又会导致该函数调用，就会陷入死循环。

>> beforeDestroy()
实例销毁之前，一般在这里进行一些计时器、事件的清除工作。（取消未完成的请求、取消计时器、取消事件绑定）

>> destroyed()
实例销毁后。

-- keep-alive 生命周期
-- 动画 生命周期
-- vue-router 生命周期
```

# 计算属性和属性监听

## 1、计算属性 - [computed](https://v2.cn.vuejs.org/v2/api#computed)

1）、概念

主要用于对数据进行改造输出的，适用于复杂数据的转换、统计、格式编辑等场景。

计算属性会在调用后对结果进行缓存，如果再次调用，依赖的数据没有发生改变，那么直接从缓存中取出之前的结果使用，如果依赖的数据发生改变了，再重新计算，然后再次缓存。

2）、语法

```js
{
  data(){},
  computed:{
    函数名(){
      return 结果;  // 必须设置返回值
    }
  }
}

// 使用
可以直接用在{{}}, v-if , v-for , v-bind
```

## 2、属性监听 - [watch](https://v2.cn.vuejs.org/v2/api#watch)

1）、说明

监控已有的属性，一旦属性发生改变就会自动调用对应的方法。监测数据变化，可以监测 data，prop，

2）、应用场景

根据数据变化去请求、监控用户输入、分页页码发生改变需要请求新的数据。

3）、语法

```js
{
  data(){},
  watch:{
    监听的属性名(新值，旧值){
      // 逻辑处理
    }
  }
}
```

## 3、总结 - computed、methods 和 watch 的使用

computed

- 是一个数据，可以用在 v-if，v-for，v-bind，{{}}
- 执行一个函数后，得到的数据（做复杂计算、数据格式化）
- 处理的数据有缓存，只有依赖的 data 或者 props 发生改变后才会重复执行
- 在一个页面中多个地方重复调用同一个计算属性，只会执行一次

methods

- 是一个方法，只能用在 v-on，{{foo()}}，方法之间的调用
- 方法不会缓存，所以多次调用就会执行多次

watch

- 监测数据变化的，可以检测 data，props，router

# 自定义指令

## 1、说明

Vue 内置了很多的指令，同时也允许开发者自定义指令。

## 2、语法

### 1）、全局自定义指令

```js
Vue.directive(指令名, {})
```

```js
// 例子 - 自动获取焦点
// 在 main.js 中定义
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

// 然后在其他任意一个组件中就可以直接使用
```

### 2）、局部自定义指令

```vue
{
  data() {},
  directives: {
    指令名: {
      // 指令配置
    }
  }
}
```

```vue
// 例子 - 自动获取焦点
<script>
export default {
  directives: {
    focus: {
    // 指令的定义
      inserted(el){
        el.focus()
      }
    }
  }
</script>
```

### 3）、获取标签节点后，触发 focus 也行

```js
// 原生 JS 方式
document.getElementById('').focus()
```

```vue
// Vue 方式

// 给标签或者组件添加 ref 属性
<template>
  <input type="text" ref="myInput">
</template>

// 然后在 mounted（钩子函数） 中可以通过 this.$refs.myInput 获取当前组件或者标签
<script>
export default {
  mounted() {
		// 这里必须选择 mounted 生命周期
    this.$refs.myInput.focus()
  },
}
</script>
```

# 图片处理

```vue
// 方式1
<img src="../assets/images/g1.jpeg" alt="">
最终图片路径会发生改变

// 方式2
<img :src="item.img" alt="">
如果是相对地址的图片，渲染后找不到图片资源

解决方案：
  >> 必须给绝对地址；
  >> 通过 require 引入
    // item.img = 'assets/images/g1.jpeg'
    // @ 是一个路径别名，表示 src 所在绝对路径
    require('@/' + item.img);

// 方式3
import 图片别名 from 地址
```

方式1：最终图片路径会发生改变![图片资源引入](/images/图片资源引入.png)

## 1、直接渲染img

```vue
// 相对路径
<img alt="Vue logo" src="../assets/logo.png">

// 绝对路径
<img alt="Vue logo" src="http://www.logo.png">
```

## 2、动态绑定

```
npm run build  // 打包代码
```

```vue
// import
<img :src="logo" alt="">

<script>
import logo from '../assets/logo.png'
export default {
  ...
  data() {
    return {
      logo
    }
  }
}
</script>


// require
<img :src="logo" alt="">

<script>
export default {
  ...
  data() {
    return {
      logo: require('../assets/logo.jpg')
      // 或者
      logo: require('@/assets/logo.jpg')
    }
  }
}
</script>
```

# 插槽 - (主要用在封装组件 - UI)

## 1、概念

可以允许开发者进行组件的扩展，可以更好的复用组件以及定制化处理。

使用组件的时候，双标签之间插入的内容是不会渲染出来的。

## 2、匿名插槽 - 默认插槽

```vue
// 父组件
<子组件>
  <template v-slot>
    任意内容
  </template>
</子组件>

// 子组件
<slot>这里是插槽位置</slot>
```

## 3、具名插槽

1）、说明

相对匿名插槽来讲，slot 是带有 name 命名的

2）、语法

```vue
// 父组件
<子组件>
  <template v-slot:header>
    ....
  </template>
  这里的内容是默认插槽
</子组件>

// 子组件
<div>
  <slot name="header"></slot>
  <slot></slot>
</div>
```

## 4、作用域插槽

# 组件通信 - 组件之间数据的传递

## 1、说明

默认情况下，每一个组件的作用域都是独立的，也就是说组件中的 data、methods 都只能在当前组件使用，无法传递给其他组件，更加无法修改其他组件的 data。

为什么要通信，不少于2个组件需要传递信息的时候。

## 2、通信方式

### 1）、props（父传子）

该方法用于父组件向子组件传递数据，子组件只能使用不能修改，但是不建议跨多个组件传值。

```vue
// 父组件
<MyBrotherA msg="Hi my child" />

// 子组件
<template>
  <div class="my-brother-a">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'MyBrotherA',
  props: ['msg']
}
</script>
```

### 2）、事件回调 $emit（子传父）

子组件向父组件传递数据。

实现思路：父组件向子租价传递方法 -> 子组件通过 $emit 去触发这个方法。

```vue
// 父组件
<template>
  <MyBrotherA @add="addText" />
</template>

<script>
import MyBrotherA from './MyBrotherA.vue'

export default {
  name: 'MyFather',
  components: {
    MyBrotherA
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    addText(text) {
      console.log('接收到子组件传递的数据：',text);

      this.list.push(text);
    }
  }
}
</script>

// 子组件
<template>
  <input type="text" v-model="text" placeholder="子组件A 输入框" @keydown.enter="addChild">
</template>

<script>
export default {
  name: 'MyBrotherA',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    addChild() {
      // 父组件给子组件添加了一个自定义事件，事件名为 add，那么该事件可以在子组件中通过 $emit 去触发
      this.$emit('add', this.text);
    }
  }
}
</script>
```

### 3）、sync（子修改父）

可以实现父子组件双向的数据传递，允许子组件接收到父组件的数据后，直接修改数据。

```vue
// 父组件
<Child :visible.sync="showModal" />

// 子组件
onClose() {
  this.$emit('update:visible', false)
}
```

### 4）、event bus —— 见十六点

可以用于兄弟组件，注意事项，在 `$emit` 之前，必须要先 `$on` 。

### 5）、$root

所有组件通过 `this.$root` 访问根组件。

```js
new Vue({
  data:{
    msg: 'Hi'
  }
})
```

### 6）、$parent

子组件通过 `this.$parent` 可以获取父组件实例。

### 7）、$chidren

父组件通过 `this.$chidren` 可以获取子组件实例。

### 8）、$ref

获取 DOM 节点，或者组件实例。

### 9）、[v-model](https://v2.cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)

只能用在表单元素

### 10）、vuex

vue2.x 状态管理工具。

# [路由](https://router.vuejs.org/zh/)

## 1、概念

SPA（单页应用程序）-可以通过路由模拟多页应用效果。

前端路由理解为单页开发中，负责页面内容的分发，根据不同的 url 地址去展示不同的内容。

## 2、环境搭建

```cmd
// 第一步、创建项目
# vue/cli 脚手架
vue create 项目名

// 第二步、项目配置，根据提示进行选择，空格表示选中
Vue CLI v5.0.8
? Please pick a preset: 'Manually select features
? Check the features needed for your project: 'Babel, Router, Linter
? Choose a version of Vue.js that you want to start the project with '2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) 'Yes
? Pick a linter / formatter config: 'Basic
? Pick additional lint features: 'Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? 'In dedicated config files
? Save this as a preset for future projects? 'No
```

![路由项目配置](/images/路由项目配置.png)

## 3、路由配置

### src/router/index.js

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'  //方法1

Vue.use(VueRouter)  // vue 中所有使用的三方模块引入后都必须注册

const routes = [  // 路由配置
  /方法1：
  {
    path: '/',  // 路径
    name: 'home',  // 路由名
    component: HomeView  // 当前路径匹配的组件，即访问当前路径时，显示该组件
  },
    
  /方法2：
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')  // 路由懒加载，表示当访问该路径时，才去执行该函数，然后加载该组件，用于优化
  }
]

const router = new VueRouter({  // 路由实例化
  mode: 'history',  // 路由模式，另一种模式是 hash
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

## 4、路由组件

```html
>> router-link
   用于路由导航的，最终会被渲染为 a 标签。

>> router-view
   当前url匹配后，在该位置渲染组件。
```

### src/App.vue

```vue
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
```

## 5、嵌套路由

### src/router/index.js

```js
// 第一步、配置
{
  path: '/me',
  name: 'me',
  component: () => import('../views/MeView.vue'),
  children: [  // 设置子路由
    {
      path: 'order',  //注意，子路由的前缀应该是父路由 url ，所以这里不能写 /
      name: 'order',
      component: () => import('../views/OrderView.vue'),
    },
    {
      path: 'setting',
      name: 'setting',
      component: () => import('../views/SettingView.vue'),
    }
  ]
},
```

### src/views/MeView.vue

```vue
// 第二步、在设置 children 的路由页面中配置子路由要展示的位置
<template>
  <div>
    <h3>我的</h3>
    <p>
      <router-link to="/me/order">订单</router-link> -
      <router-link to="/me/setting">个人设置</router-link>
    </p>
    <div class="me-child">
      <router-view/>
    </div>
  </div>
</template>
```

## 6、[跳转路由携带参数](https://router.vuejs.org/zh/guide/essentials/navigation.html)

* hash
* query
* params

```js
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```

# css处理

## 1、全局共有的css

可以编写 css 文件，然后在主模块 main.js 引用

```js
import './assets/css/base.css'
```

## 2、组件中 css 的处理

```vue
<p :class="{on :true}"></p>

<p :style="{}"></p>
```

## 3、单文件组件的 style 标签

因为 css 没有局部和全局的概念，所有的 css 都是全局 css ，所以默认情况下 `<style>` 就是全局，各个组件之间如果 class 名字相同，则会相互影响。

解决方案：给 style 添加 scoped 属性，则当前 style 中的 css 会变为局部 css。

```vue
<style scoped>
</style>
```

小提示：当前单文件组件可以添加多个 style 标签需要局部的添加 scoped 属性，不需要的则写直接 style 。

# filter

## 1、概念

Vue 为开发者提供了一个方法，帮助我们进行数据的筛选处理，一般应用在模板上的。

## 2、定义

```js
>> 全局过滤器
Vue.filter(过滤器名字, function() {
  return ...
})

>> 局部
{
  data() {},
  filters: {
    过滤器名字(value) {
      // 进行逻辑处理，数据格式化，如金钱 ¥1.00
      return 结果
    }
  }
}

// 使用
<div>{{1900 | 过滤器名字}}</div>
```

```js
// 例子1 - 性别数据处理
methods: {
  getStudents() {
    getStudents()
    .then(res => {
     // 可以在这里拿到数据后，先对数据进行处理
       res.forEach(item => item.sexStr = item.sex == 1 ? '男': '女')
       this.studentsList = res
    });
  }
}

// 例子2 - 性别数据处理
<td>{{item.sex | filterSex}}</td>

<script>
  filters: {
    filterSex(val) {
      switch(val) {
        case 1:
          return '男';
        case 2:
          return '女';
        default:
          return '未知';
      }
    }
  },
</script>
```

# 新增/编辑/查看

内容差不多，如何展示？

## 1、弹窗 - 模态框

## 2、新组件

重新跳转一个页面去展示。

### 1）、两个路由界面之间如何传递参数

通过 `this.$route` 可以获取路由信息。

```javascript
* 查询参数：在 URL 中，以 ? 开头的路径部分,后面跟上 key=value&key=value
  this.$route.query
```

```js
* 动态参数：没有直接写死路径
  第一步、设置动态参数路由
    {
      path: 'student/:id',  // 表示匹配 /student/ 下任意路径，比如 /student/abc, /student/123
      name: 'ViewStudent',
      component: () => import('../views/ViewStudent.vue')
    }

  第二步、路径跳转
    this.$router.push('/student/' + id);

  第三步、获取动态参数
    this.$router.params.id
```

# EventBus

## 1、说明

- props：父传子
- $emit：子传父
- sync：子修改父数据
- EventBus：兄弟组件

EventBus 又称为中央事件总线，作为Vue 组件沟通的桥梁，所有的组件会共同使用一个事件中心，可以向该中心去注册事件或者发送事件。

一般用于小型项目，后期维护要求不高的情况。

## 2、实现

```js
/ 第一步、创建一个单独的空 Vue 实例作为事件中心/
/src/bus/Bus.js
import Vue from 'vue'
export default new Vue();

/ 第二步、在组件 A 中监听事件/
/components/ChildA.vue
import Bus from './Bus.js'
export default {
  created(){
  	Bus.$on('send',function(arg)){
  	// 监听到该事件后，怎么处理，该回调函数，可以接受参数，参数是触发该事件时传递的
  	}
	},
  
  // 在组件销毁前取消事件监听，否则可能会出现多次监听同一个事件
  beforeDestroy(){
     Bus.$off('send')
  }
}

/ 第三步、在组件 B 中触发组件 A 监听的时间/
/components/ChildB.vue
import Bus from './Bus.js'
export default {
  methods: {
    sendMsg() {
      Bus.$emit('send',参数)
    }
  }
}
```

## 3、优缺点

- 优点

  - 可以全局使用

  - 比较灵活，代码量小

- 缺点

  - 事件必须成对出现（监听、触发）
  - 事件只能单向传递
  - 事件监听必须在事件触发之前完成
  - 一定要在组件销毁之前取消监听，否则会出现多次监听的效果

# [Vuex](https://vuex.vuejs.org/zh/)

## 1、认识

集中式存储管理当前应用的所有组件状态，保证状态以一种可预测的方式进行变化。

## 2、应用场景

任何两个组件甚至是更多组件之间传递数据。

## 3、特点

驱动式的数据源

声明式的方式将状态映射到视图

## 4、环境

```cmd
// 在已有的项目中加入 vuex
npm i vuex

// 新建项目
vue create 项目名字

Vue CLI v5.0.8
? Please pick a preset: 'Manually select features
? Check the features needed for your project: 'Babel, Router, Vuex, Linter
? Choose a version of Vue.js that you want to start the project with '2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) 'Yes
? Pick a linter / formatter config: 'Basic
? Pick additional lint features: 'Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? 'In dedicated config files
? Save this as a preset for future projects? 'No
```

## 5、核心概念

### store（/src/store/index.js）

每一个 Vue 实例只能包含一个 store 实例，该 store 相当于一个仓库，所有需要跨组件通信的组件都从 store 中读取数据，修改数据的时候也通过 store 提供的方法来修改。

```js
new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```

### 1）、State

作为 store 中的数据，所有跨组件的数据都可以放在这里。

#### a、语法

```js
>> 使用（/src/store/index.js）
  state: {
    num: 0
  },

>> 调用
  // 任何其他组件通过一定的方式都能取得该数据
  // 在组件中（/src/components/vue文件）
  this.$store.state.num
```

#### b、mapState 辅助函数

```js
>> mapState 辅助函数
  用于在组件中简写获取 state 的方式。

  import {mapState} from 'vuex'

  export default {
    computed: mapState({
      // 简化方式1 - 函数返回需要用到的 state
      num: state => state.num,
      
      // 方式2 - 直接传入字符串，将 store 中的 num 映射为当前组件的 numStr
      numStr: 'num',
    }),
    
    // 方式3 - 字符串的写法，如果属性名与属性值一致
    computed: mapState([
      'num'
    ])
  }
```

### 2）、Mutation 

修改 store 中的数据必须通过 Mutation 修改。

该函数内部只能是`同步操作`，不能有其他任何与数据修改无关的操作，比如请求、计时器、本地存储等。

#### a、语法

```js
>> 使用
  mutations: {  // 定义修改数据的方法
    increment(state) {  // 参数 state 就是状态
      state.num += 1;
    },
    incrementPayload(state, payload) {  // 参数2：就是调用 mutation 时传递的数据
      state.num += payload;
    }
  },
    
  // 在组件中调用 Mutation
  this.$store.commit('increment')
  this.$store.commit('incrementPayload', 5)  // 传参
```

#### b、mapMutations 辅助函数

```js
>> mapMutations 辅助函数
  简化修改数据的方法

  methods: {
    ...mapMutations([
      'increment',  // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy'  // 将 `this.incrementPayload(5)` 映射为 `this.$store.commit('incrementPayload', 5)`
    ]),
    ...mapMutations({
      add: 'increment'  // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
```

### 3）、Getter

可以理解为 vuex 的计算属性，getters 的返回值会根据它的依赖被缓存起来，只有它的依赖发生了改变才会被重新计算。

#### a、语法

```js
>> 使用
  getters: {
    doubleNum(state) { // 调用 getters 可以得到 num 的2倍值，但是 num 的值是没有改变的
      return state.num * 2
    },
    // getters 没有第二个参数，但是可以在一个函数中返回一个 geeter，这样该函数就可以设置参数了
    countNumN(state) { // 此时调用 getter 返回的是一个函数而不是值
      return (n) => state.num * n
    }
  },

  // 组件中使用
  this.$store.getters.doubleNum
```

#### b、mapGetters 辅助函数

```js
>> mapGetters 辅助函数
  简写。
```

### 4）、Action

可以用于异步操作、或者其他非纯函数操作（本地存储），当异步完成后，可以去提交 mutation ，从而改变状态。

也就是说 action 也不能修改数据，但是可以在 action 中提交 mutation 。

#### a、语法

```js
>> 使用
  actions: {
    // 异步操作、需要在 1s 之后修改 num
    incrementAsync(context) { // context 是一个与 store 实例具有相同方法和属性的对象
      setTimeout(() => {
        // 调用 mutataion
        context.commit('increment')
      }, 1000)
    },
    incrementAsyncP(context, payload) {
      setTimeout(() => {
        context.commit('incrementPayload', payload)
      }, 1000)
    }
  },

  // 组件中调用 actions
  this.$store.dispatch('incrementAsync');

  this.$store.dispatch('incrementAsyncP', 5); // 传参
```

#### b、mapActions 辅助函数

```js
>> mapActions 辅助函数
  简写。

  methods: {
    ...mapActions(['incrementAsync']),
  }
```

总结：

同步：在组件中调用 mutation -> mutation 修改数据

异步：在组件中调用 action -> action 调用 mutaion -> mutation 修改数据

关于 vuex 中的 actions 的使用

1、请求应该写在哪里

- 如果请求返回的数据知识当前组件中使用，不需要存储在 vuex 中，那么请求直接写在当前组件；
- 如果请求回来的数据需要放在 vuex 中，那么会将请求放在 actions 中处理，请求成功后调用 mutation，然后在组件中调用 actions。
  组件 -> actions -> axios -> mutation 

2、actions 回调处理

因为 action 是异步的，那么如何知道 action 已经执行完毕了。

### 5）、Module

一个 Vue 应用中只能存在一个 store，所有的 state 都会集中在这个 store中，当项目情况非常复杂的情况下，这个 store 就会非常的臃肿。

为了解决 store 臃肿的问题，vuex 允许我们将 store 分割为一个个的小模块，每一个模块都有自己的 state、mutation、action、getter、module 。

#### a、语法

```js
const moduleA = {
  state: () => ({ ... }),
  mutations: {
    add() {},
    ...
  },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { 
    add() {},
    },
  actions: { ... }
}

const store = new Vuex.Store({
  state: {}, // 主模块中的 state
  mutations: {},
  modules: { // 子模块
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.commit('add') -> 默认情况下，模块内部的 getters, mutations, actions 都是挂在在主模块下的，所以调用方式不变
```

####  b、module 命名空间

- 上方默认情况下，有可能出现 moduleA 和 moduleB 中 mutation 名字相同，必然就会冲突。
- 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。

```js
const moduleA = {
  namespaced: true,
  state: () => ({ ... }),
  mutations: {
    add() {},
    ...
  },
  actions: { ... },
  getters: { ... }
}

// 操作
store.state.a
store.commit('a/add')
```

# vue项目创建

```cmd
// 方式1 - 命令式
vue create 项目名

// 方式2 - 可视化
vue ui
```

会出现一个链接 `http://localhost:8000/project/select`

![vueui创建项目1](/images/vueui创建项目1.png)

![vueui创建项目2](/images/vueui创建项目2.png)

![vueui创建项目3](/images/vueui创建项目3.png)

![vueui创建项目4](/images/vueui创建项目4.png)

![vueui创建项目5](/images/vueui创建项目5.png)

# [Element-UI](https://element.eleme.cn/#/zh-CN)

## 1、环境安装

```cmd
npm i element-ui -S
```

## 2、引入框架

### 1）、全局引入

```js
// 在 main.js 中写入以下内容：
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});


// 使用：在其他组件中直接使用 element- UI 组件，而不需要在组件的 component 中注册或者通过 import 引入 
<template>
  <el-button></el-button>
</template>
```

### 2）、按需加载

只引入用到的组件，从而达到减少项目体积的目的。

```js
// 安装模块
npm install babel-plugin-component -D

// 修改根目录下的 .babelrc 文件或者 babel.config.js 文件 
// babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
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

```js
// 重新运行项目

// main.js 组件引入
import Vue from 'vue';
import { Button, Select } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

/* 或写为
Vue.use(Button)
Vue.use(Select)
*/

// 使用组件 
<template>
  <el-button></el-button>
</template>
```

# CSS预编译器

## 1、理解

属于 css 的扩展语言、支持所有 css 的语法，然后新增语法。

比如：变量、css 导入、css 嵌套、函数等等。

种类很多：less、sass

前提条件：浏览器支持 css 文件、不支持 .less 或者 .scss 文件，所以需要对这些预编译语言提前编译为 css 。

## 2、[sass](https://www.sass.hk/) 安装

根据不同的框架环境依赖的模块是不一样的。

```cmd
npm i sass/node-sass/dart-sass

// 或者直接在 vscode 中安装相应插件，编写完 scss 文件后，就会自动转换。

搜索相应关键字 sass

// vue 环境下使用 sass
第一步、安装环境时、选择 sass
第二步、在 style 标签上加上 lang="scss"
```

## 3、[sass 语法](https://www.sass.hk/guide/)

### 1）、变量

可以把反复利用到的 css 值定义为变量，然后通过变量名来引用。

```scss
// 定义：以 $ 开头，后面跟上变量名
$theme-color: #ff0;

// 使用
nav {
  background: $theme-color;
}
footer {
  border: 1px solid $theme-color;
}

// 通过 #{} 插值语句可以在选择器或者属性名中使用变量
$b: border;

p .#($b){
  #($b)-left: 1px solid $theme-color;
}
```

### 2）、导入

可以导入 scss 文件，也可以导入 css 文件。

```scss
@import '文件名';  // 文件后缀如果是.scss 那么可以省略不写

// 例子
<style lang="scss">
	@import './assets/scss/var';
</style>
```

### 3）、css 嵌套

 可以像标签嵌套那样进行套娃操作，从而避免重复编写。

```scss
// scss 嵌套
.body{
  width: 200px;
  a{
    color: red;
  }
  p{
    color: pink;
  }
}

// 编译后为
.body {
  width: 200px;
}
.body a{
  color: red;
}
.body p{
  color: pink;
}
```

```scss
// 父选择器标识符 &
a {
  color: red;
  
  &:hover {
  	color: green;
  }
}
```

### 4）、混合

当出现大段重复的代码时，此时就可以使用混合去实现大段样式的复用。

```scss
// 定义混合 - 此段代码可以重复利用
@mixin center {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
}

// 使用 - 通过 @include 来标识
.center{
  @include center;
  background: pink;
}
```

```scss
// 混合允许使用变量 - 类似混合是函数，函数也可以接受参数，并且参数可以有默认值
@mixin center($w) {  // $w 就是参数
  width: $w;
  margin-left: auto;
  margin-right: auto;
}

// 使用 
.content {
  @include center(1000px);
}

@mixin center($w:800px) {  // 默认值
  width: $w;
  margin-left: auto;
  margin-right: auto;
}
// 使用 
.content {
  @include center();  // 没有传值就是默认值
}
```

### 5）、继承

一个选择器继承另外一个选择器。

```scss
.error {
  background: red;
  color: #fff;
}

.seriousError {
  @extend .error; // 通过 @extend 去继承另外一个选择器中所有的 css 代码
  background: darkred;
}
```

### 6）、运算

```scss
p {
  width: $w/2;
}
```

### 7）、函数

```scss
// 随机颜色
@function randomNum($max,$min:0) {
  @return ($min + random($max));
}
```

### 8）、颜色函数

### 9）、流程控制

```scss
@if
@for
```

# 路由拦截（路由守卫）

对于没有登录的用户，部分路由是不允许访问的。

## 1、router.beforeEach

1）、说明

这是全局路由前置守卫，在进入该路由之前，会先执行该方法，然后再决定是否正常访问想要访问的路由。

2）、语法

src/router/index.js

```js
router.beforeEach((to, from, next) => {

})

* to: 表示想要访问的路由对象，包含当前路由所有的信息
* from：表示你从哪一个路由过来，即跳转之前的路由对象
* next：是一个函数，必须调用该函数才能进入下一个路由，也可以给该函数传递 路径或者路由对象，从而跳转到其他路由
```

```js
// 例子：路由守卫 - 登录拦截
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 在得到路由对象之后写
router.beforeEach((to, from, next) => {
  const token = store.state.token; // 表示用户登录的凭证

  if(to.meta.auth) { // 如果路由中的 meta 字段下的 auth 为true，表示该路由必须登录后访问
    if(token) { // token 存在，表示已经登陆了，那么想干嘛干嘛去
      next();
    } else { // 不存在，表明你没有登录，不好意思，回到登录页
      next('/login');
    }
  } else { // 不需要登录就可以访问
    next(); // 直接下一步
  }
})
```

# [axios](https://www.axios-http.cn/)

## 1、说明

axios 是一个基于Promise 的HTTP 请求库，可以在浏览器和node.js中使用。有非常多的特性

## 2、安装

```cmd
npm i axios
```

## 3、在 vue 中如何使用 axios

```cmd
安装模块
npm i axios vue-axios
```

```js
// main.js 添加
import Vue from 'vue'
import axios from "axios"
import VueAxios from 'vue-axios'

Vue.use(axios, VueAxios)

使用：在任意组件中使用 axios 只需要通过 this 访问
this.axios()
```

## 4、axios 用法

```js
// GET 请求，参数放在 url 中 
axios.get('/user?ID=12345')
.then(function (response) {
  // 处理成功情况
  console.log(response);
})
.catch(function (error) {
  // 处理错误情况
  console.log(error);
})

// GET 请求，参数放在 params 中
axios.get('/user', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
```

```js
// POST 请求 
axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

// 多个并发请求
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });

  // axios 发送 post
  axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });

  // axios 发送 get
  axios({
    method: 'get',
    url: '/user/12345',
    params: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
```

```js
// 因为不同的项目，请求配置是不一样的，所以需要根据项目情况，做 axios 的自定义配置
// 可以创建 axios 实例
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// 然后在项目中直接使用实例
```

## 5、[封装axios](D:\Web304\Note\封装 axios.md)

1）、封装原因

方便修改 baseUrl 、 loading  处理、 token 处理、错误处理、返回数据过滤、取消请求、过滤相同请求

2）、请求

```js
this.$axios({
	url:''
})
.then((res)=>{
  console.log(res)
})
.catch(()=>{

})
```

## 6、请求跨域

1、说明

浏览器基于安全因素的考虑，是不允许进行跨域请求的，如果发生跨域请求，就会发生一下类似的错误。

```cmd
错误提示
Access to XMLHttpRequest at 'http://localhost:3000/users/login' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

以下三个部分任意一个不一样就会跨域：

- 协议：http
- 域名：baidu.com
- 端口号：3000

2、怎么解决

解决方案有很多种，比如前端开发时进行反向代理，使用 JSONP，后端设置 CORS、配置 nginx 反向代理等等。

3、后端设置 CORS

该方法只需要后端允许某一个ip进行访问、前端无需做任何处理。

```js
// 不同的后端处理方式不一样，这里以 nodejs 为例

// 在 app.js 中引入，设置 CORS 解决跨域
app.use('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // 表示允许哪些网站访问，上线后应该直接指定ip而不应该 *
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');//和客户端对应，必须设置以后，才能接收cookie.

  next();
})
```

# express

```cmd
npx express-generator --view=ejs 项目名
```

# JWT 认证

## 1、了解

JTW 全称为 json web token。

## 2、认证方式

### 1）、session 认证流程

- 用户在浏览器中输入用户名和密码，服务器通过密码校验后生成一个session并保存到数据库。
- 服务器为用户生成一个sessionId，并将具有sesssionId的cookie放置在用户浏览器中，在后续的请求中都将带有这个cookie信息进行访问。
- 服务器获取cookie，通过获取cookie中的sessionId查找数据库判断当前请求是否有效。

### 2）、基于 JWT 的认证流程

-  用户在浏览器中输入用户名和密码，服务器通过密码校验后生成一个 token 字符串，并返回给前端。
- 前端获取到token，存储到cookie或者local storage中，在后续的请求中都将带有这个token信息进行访问。
- 服务器获取token值，会去验证 token 是否有效。

### 3）、优缺点

- JWT保存在客户端，在分布式环境下不需要做额外工作。而session因为保存在服务端，分布式环境下需要实现多机数据共享。
- session一般需要结合Cookie实现认证，所以需要浏览器支持cookie，因此移动端无法使用session认证方案。

### 4）、安全性

JWT的payload使用的是base64编码的，因此在JWT中不能存储敏感数据。而session的信息是存在服务端的，相对来说更安全。

### 5）、性能

经过编码之后JWT将非常长，cookie的限制大小一般是4k，cookie很可能放不下，所以JWT一般放在local storage里面。并且用户在系统中的每一次http请求都会把JWT携带在Header里面，HTTP请求的Header可能比Body还要大。而sessionId只是很短的一个字符串，因此使用JWT的HTTP请求比使用session的开销大得多。

### 6）、一次性

无状态是JWT的特点，但也导致了这个问题，JWT是一次性的。想修改里面的内容，就必须签发一个新的JWT。

## 3、JWt 组成

是一个字符串，由三个部分组成：头部、载荷、签证，各部分之间通过 `.` 分割。

`大致长相`：

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiend6IiwiYWdlIjoiMTgifQ.UQmqAUhUrpDVV2ST7mZKyLTomVfg7sYkEjmdDI5XF8Q
```

## 4、token 处理流程

- 客户端发送请求，将账号、密码发送给服务器；
- 服务器验证通过，生成 token，返回给前端；
- 前端获取到 token后存储在本地存储中；
- 之后每一次请求手动将 token 放在请求头中，发送给后端；
- 后端从请求头中获取 token，然后验证该 token 是否是服务器签发的，以及有效期；
- 验证通过，返回前端想要的数据，是否返回错误，不给数据；

## 5、token 生成（服务器生成）

```cmd
// 利用 express-jwt 模块
// 安装
npm i express-jwt
```

```js
// 使用 
const { expressjwt: expressJwt } = require('express-jwt');

//拦截路由、验证 token 是否合法
app.use(expressJwt({
  secret, // 与 生成 token 的 密钥 相同
  algorithms: ['HS256'], // 与生成 token 的加密算法一致
}).unless({ // 路由白名单，以下路由不受验证，可以直接写路径，也可以是正则匹配
  path: ['/users/login']
}))

// 如果没有通过，需要做错误处理
app.use(function(err, req, res, next) {
  if(err.name === 'UnauthorizedError') {
    res.status(401).json() // 这里响应状态吗 401，表示无权限访问
  }
})

```

6、保存 token（前端）

```js
sessionStorage
```

7、每次请求将 token 放在请求头中 （前端）

```js
instance.interceptors.request.use(function (config) {

  // 获取 token
  const token = store.state.token;
  console.log('获取 token：', token);

  // 将 token 放在请求头
  if(token) {
    // 该请求头由前后端约定、但是后端使用 express-jwt，就已经约束 Authorization 字段，并且值以 'Bearer ' 开头
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});
```

8、处理未登录的错误（前端）

```js
instance.interceptors.response.use(function (response) {
  // 响应成功-200，先在这里接收到服务器响应
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  
  return response.data; // 对后端返回的数据过滤，直将 data 返回给页面
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么

  if(error.response.status === 401) { // 表示未登录或者登录过期
    // 第一步、移除 token
    store.commit('removeToken');

    // 第二步、重定向登录页
    router.push('/login');
  }

  return Promise.reject(error);
});
```

# 动画

## 1、说明

Vue 中可以实现在 插入、更新、移除 DOM 的时候，添加过渡效果。

条件 —— 只有以下的方式才能应用动画过渡

- 条件渲染（v-if，v-show）
- 动态组件
- 列表渲染

## 2、使用

需要添加动画的标签或者组件，在外部添加 transition 组件包装。

```vue
<transition>
  <p v-if=""></p>
</transition>

>> Vue 就会给该标签自动增加 6 个 class，在不同的阶段触发。
  v-enter: 表示开始进入过渡

  v-enter-active：正在进入过渡

  v-enter-to：进入过渡结束

  v-leave：准备离开的过渡

  v-leave-active：正在离开的过渡

  v-leave-to：已经离开

注：只是提供了class，动画需要自己写。
```

```vue
// 实例
<style>
.v-enter,
.v-leave-to {
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  opacity: 0;
  transition: all .3s;
}
</style>
```

# nextTick

## 1、说明

- Vue 实现的响应式并不是数据发生变化后 DOM 立即变化，而是按照一定的策略进行 DOM 更新。
- Vue 在更新 DOM 时是异步的，只要监听到数据变化，Vue 将开启一个队列，将同一事件循环中发生的所有数据变更缓存在这个队列中。
- 也就是说 Vue 在修改数据后，视图并不是同步更新的，想要操作更新后的 DOM 就必须使用 nextTick 来操作。

## 2、语法

```js
// 在组件中通过 this 访问
this.$nextTick(() => {
  // 这个方法会在下一次 DOM 更新结束后自动调用，那么就可以在这里对 DOM 进行操作
})

// 全局使用
Vue.nextTick(() => {

})
```

# 异步处理

```js
>> 回调函数
  fs.redFile('', () => {
    fs.redFile('', () => {
    
    })
  })

>> Promise 
  new Promise((resolve, reject) => {
    fs.redFile('', (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
  .then(res => {})
  .catch(err => {})

>> async / await
  console.log(1)
  async function foo() {  // async 依然是异步，但是 foo 函数内部是同步
    const res = await axioa()
    console.log(res)
  }
  foo()
  console.log(3)
```

