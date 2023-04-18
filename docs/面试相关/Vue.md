# Vue

## 1、在使用计算属性的时候，函数名和 data 数据源中的数据可以同名吗 ?

不可以同名。因为 data、props、methods、computed 最终都会挂载到 vue 实例上，因此各自在初始化的时候都会有属性重名的判断，所以这四者属性名不能重复。

## 2、怎么解决 vue 打包后静态资源图片失效的问题？

## 3、怎么解决 vue 动态设置 img 的 src 不生效的问题？

require('@/assets/images/xxx.png')

## 4、怎么访问到子组件的实例或者子元素？

this.$refs

## 5、在子组件中怎么访问到父组件的实例？

this.$parent

## 6、在组件中怎么访问到根实例？

this.$root

## 7、说说你对 slot 的理解有多少？slot 使用场景有哪些？

slot 即插槽, 在使用组件的时候, 在组建内部插入东西，通过插槽可以让用户可以拓展组件，去更好地复用组件和对其做定制化处理。

比如布局组件、表格列、下拉选、弹框显示内容等。

## 8、vue 在 created 和 mounted 这两个生命周期中请求数据有什么区别呢？



## 9、vue 在开发过程中要同时跟N个不同的后端人员联调接口（请求的 url 不一样）时你该怎么办？

devServer 中把所有的服务人员的地址代理都写进去，然后动态更改接口的 baseUrl ，这样切换不同后端人员的时候不用重启。

## 10、为什么 data 属性必须声明为返回一个初始数据对应的函数呢？

对象为引用类型，当重用组件时，由于数据对象都指向同一个 data 对象，当在一个组件中修改 data 时，其他重用的组件中的 data 会同时被修改；而使用返回对象的函数，由于每次返回的都是一个新对象（ Object 的实例），引用地址不同，则不会出现这个问题。

## 11、v-for 循环中 key 有什么作用？

给每个 dom 元素加上 key 作为唯一标识 ，diff 算法可以正确的识别这个节点，使页面渲染更加迅速。

## 12、vue 中组件的 name 有什么作用？

- 当你用 vue-tools 时 vue-devtools 调试工具里显示的组件名称是由 vue 中组件 name 决定的。

- DOM 做递归组件时，比如说 detail.vue 组件里有个 list.vue 子组件，递归迭代时需要调用自身 name 。

- 当项目使用 keep-alive时，可搭配组件 name 进行缓存过滤，使用了keep-alive导致我们第二次进入的时候页面不会重新请求，即触发 mounted 函数。这里的 Detail 就是该组件的名字 。

## 13、Vue 子组件和父组件生命周期执行顺序？

#### 加载渲染过程：

父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子
beforeMount -> 子 mounted -> 父 mounted

#### 子组件更新过程：

父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

#### 父组件更新过程：

父 beforeUpdate -> 父 updated

#### 销毁过程：

父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

## 14、为什么 Vue data 必须是函数？

- 在 Vue 中根实例的 data 可以是对象也可以是函数，但是在组件中的 data 必须要是一个函数，组件就是可以复用的 Vue 实例，把公共的模块抽离出来，达到复用和直接使用的效果。
- 如果 data 是一个对象的话，对象是一个引用类型；它会在堆空间中开辟一片区域，将内存地址存入。这就使得所有的组件公共一个 data，当一个组件中修改了 data 中的数据就会出现一变全变的现象。
- 如果 data 是一个函数的话，且使用 return 返回一个对象；这就使得每复用一次组件就会返回一个全新的 data （这就相当于 scoped，每一个组件 data 都是私有的，互不干扰，各个组件维护自己的 data ）。

## 15、ElementUI 怎么修改组件的默认样式？

```js
// ⽅式1、直接按照 element 默认修改主题的⽅式, 直接修改配置；

// ⽅式2、⽤ >>> 穿透，如： .el-table >>> .el-table__header ；

// ⽅式3、直接修改主题 theme；
```

## 16、vue 组件之间的通信都有哪些？

```js
props
$on $emit
$parent、$children、$refs
bus
vuex
provide、inject
$attrs、$listeners
```

## 17、v-show 和 v-if 有什么区别？使用场景分别是什么？

区别：v-if 不渲染 DOM，v-show 会渲染 DOM。
v-show 使用场景：预渲染需求、需要频繁切换显示状态。

## 18、watch 怎么深度监听对象变化？

deep 设置为 true 就可以监听到对象的变化。

```js
'obj.xx': { 
 	handler: function(newVal, oldVal) {},
 	deep: true
}
```

## 19、使用 Object.defineProperty 来进行数据劫持有什么缺点？

在对一些属性进行操作时，使用这种方法无法拦截，比如通过下标方式修改数组数据或者给对象新增属性，这都不能触发组件的重新渲染，因为 `Object.defineProperty` 不能拦截到这些操作。更精确的来说，对于数组而言，大部分操作都是拦截不到的，只是 Vue 内部通过重写函数的方式解决了这个问题。

在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用 Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为 Proxy 是 ES6 的语法。

## 20、Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？

不会立即同步执行重新渲染。Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环 tick 中，Vue 刷新队列并执行实际（已去重的）工作。

## 21、Vue 的性能优化有哪些？

### 编码阶段

- 尽量减少 data 中的数据，data 中的数据都会增加 getter 和 setter ，会收集对应的watcher
- v-if 和 v-for 不能连用
- 如果需要使用 v-for 给每项元素绑定事件时使用事件代理
- SPA 页面采用 keep-alive 缓存组件
- 在更多的情况下，使用 v-if 替代 v-show
- key 保证唯一
- 使用路由懒加载、异步组件
- 防抖、节流
- 第三方模块按需导入
- 长列表滚动到可视区域动态加载
- 图片懒加载

### SEO 优化

- 预渲染
- 服务端渲染 SSR

### 打包优化

- 压缩代码
- Tree Shaking/Scope Hoisting
- 使用cdn加载第三方模块
- 多线程打包 happypack
- splitChunks 抽离公共文件
- sourceMap 优化

### 用户体验

- 骨架屏
- PWA
- 还可以使用缓存（客户端缓存、服务端缓存）优化、服务端开启 gzip 压缩等。

## 22、v-if 和 v-for 哪个优先级更高？如果同时出现，应如何优化？

v-for 优先于 v-if 被解析，如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能。

要避免出现这种情况，则在外层嵌套 template，在这一层进行 v-if 判断，然后在内部进行 v-for 循环。如果条件出现在循环内部，可通过计算属性提前过滤掉那些不需要显示的项。

## 23、keep-alive 中的生命周期哪些？

keep-alive是 Vue 提供的一个内置组件，用来对组件进行缓存——在组件切换过程中将状态保留在内存中，防止重复渲染 DOM 。

如果为一个组件包裹了 keep-alive，那么它会多出两个生命周期：deactivated、activated。同时，beforeDestroy 和 destroyed 就不会再被触发了，因为组件不会被真正销毁。

当组件被换掉时，会被缓存到内存中、触发 deactivated 生命周期；当组件被切回来时，再去缓存里找这个组件、触发 activated钩子函数。

## 24、路由的 hash 和 history 模式的区别

Vue-Router 有两种模式：hash 模式和 history 模式。默认的路由模式是 hash 模式。

### hash 模式

简介： hash 模式是开发中默认的模式，它的 URL 带着一个 # ，例如：`http://www.abc.com/#/vue`，它的 hash 值就是 `#/vue`。

特点：hash 值会出现在 URL 里面，但是不会出现在 HTTP 请求中，对后端完全没有影响。所以改变 hash 值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的 IE 浏览器也支持这种模式。hash 路由被称为是前端路由，已经成为 SPA（单页面应用）的标配。

原理： hash 模式的主要原理就是 onhashchange() 事件：

```js
window.onhashchange = function(event){
    console.log(event.oldURL, event.newURL);
    let hash = location.hash.slice(1);
}
```

使用 onhashchange 事件的好处就是，在页面的 hash 值发生变化时，无需向后端发起请求，window 就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash 值变化对应的 URL 都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退。虽然是没有请求后端服务器，但是页面的 hash 值和对应的 URL 关联起来了。

### history 模式

简介： history 模式的 URL 中没有 #，它使用的是传统的路由分发模式，即用户在输入一个 URL 时，服务器会接收这个请求，并解析这个 URL，然后做出相应的逻辑处理。

特点： 当使用 history 模式时，URL就像这样：`http://abc.com/user/id` 。相比 hash 模式更加好看。但是，history 模式需要后台配置支持。如果后台没有正确配置，访问时会返回 404 。

API： history api 可以分为两大部分，切换历史状态和修改历史状态：

- 修改历史状态：包括了 HTML5 History Interface 中新增的 `pushState()` 和 `replaceState()` 方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了 url，但浏览器不会立即向后端发送请求。如果要做到改变 url 但又不刷新页面的效果，就需要前端用上这两个 API 。

- 切换历史状态： 包括 `forward()`、`back()`、`go()` 三个方法，对应浏览器的前进，后退，跳转操作。

虽然 history 模式丢弃了丑陋的 #。但是，它也有自己的缺点，就是在刷新页面的时候，如果没有相应的路由或资源，就会刷出 404 来。

如果想要切换到 history模式，就要进行以下配置（后端也要进行配置）：

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

### 两种模式对比

- history 模式的 pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
- pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
- pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
- pushState() 可额外设置 title 属性供后续使用。
- hash 模式下，仅 hash 符号之前的 url 会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回 404 错误；history 模式下，前端的 url 必须和实际向后端发起请求的 url一致，如果没有对用的路由处理，将返回 404 错误。

hash 模式和 history 模式都有各自的优势和缺陷，还是要根据实际情况选择性的使用。

## 25、说说你对虚拟 DOM 的理解？

1、虚拟 dom 顾名思义就是虚拟的 dom 对象，它本身就是一个 JavaScript 对象，只不过它是通过不同的属性去描述一个视图结构。

2、通过引入 vdom 我们可以获得如下好处：

- 将真实元素节点抽象成 VNode，有效减少直接操作 dom 次数，从而提高程序性能
- 直接操作 dom 是有限制的，比如：diff、clone 等操作，一个真实元素上有许多的内容，如果直接对其进行 diff 操作，会去额外 diff 一些没有必要的内容；同样的，如果需要进行 clone 那么需要将其全部内容进行复制，这也是没必要的。但是，如果将这些操作转移到 JavaScript 对象上，那么就会变得简单了。
- 操作 dom 是比较昂贵的操作，频繁的 dom 操作容易引起页面的重绘和回流，但是通过抽象 VNode 进行中间处理，可以有效减少直接操作 dom 的次数，从而减少页面重绘和回流。
- 同一 VNode 节点可以渲染成不同平台上的对应的内容，比如：渲染在浏览器是 dom 元素节点，渲染在 Native（ iOS、Android） 变为对应的控件、可以实现 SSR 、渲染到 WebGL 中等等。
- Vue3 中允许开发者基于 VNode 实现自定义渲染器（renderer），以便于针对不同平台进行渲染。

3、vdom 如何生成？在vue中我们常常会为组件编写模板 - template， 这个模板会被编译器 - compiler 编译为渲染函数，在接下来的挂载（mount）过程中会调用 render 函数，返回的对象就是虚拟 dom 。但它们还不是真正的 dom ，所以会在后续的 patch 过程中进一步转化为 dom 。

4、挂载过程结束后，vue 程序进入更新流程。如果某些响应式数据发生变化，将会引起组件重新 render ，此时就会生成新的 vdom ，和上一次的渲染结果 diff 就能得到变化的地方，从而转换为最小量的 dom 操作，高效更新视图。

## 26、你知道哪些 vue3 新特性？

1、api 层面 Vue3 新特性主要包括：

- Composition API
- SFC
- Composition API语法糖
- Teleport 传送门
- Fragments 片段
- Emits 选项
- 自定义渲染器
- SFC CSS 变量
- Suspense

2、在框架层面的改进

- 虚拟 DOM 重写
- 编译器优化：静态提升、patchFlags、block等
- 基于Proxy的响应式系统
- 更好的摇树优化
- TypeScript + 模块化
- 更容易扩展

## 27、怎么定义动态路由？怎么获取传过来的动态参数？

很多时候，我们需要将给定匹配模式的路由映射到同一个组件，这种情况就需要定义动态路由。

例如，我们可能有一个 User 组件，它应该对所有用户进行渲染，但用户 ID 不同。在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，例如：`{ path: '/users/:id', component: User }`，其中 `:id` 就是路径参数；

路径参数用冒号 `:` 表示。当一个路由被匹配时，它的 params 的值将在每个组件中以 `this.$route.params` 的形式暴露出来；

参数还可以有多个，例如 `/users/:username/posts/:postId `；除了 `$route.params` 之外，`$route` 对象还公开了其他有用的信息，如 `$route.query` 、`$route.hash` 等。

## 28、说说 nextTick 的使用和原理？

nextTick 是等待下一次 DOM 更新刷新的工具方法。

Vue 有个异步更新策略，意思是如果数据变化，Vue 不会立刻更新 DOM ，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更会异步的批量更新。这一策略导致我们对数据的修改不会立刻体现在 DOM 上，此时如果想要获取更新后的 DOM 状态，就需要使用 nextTick 。

场景：created 中想要获取 DOM 时，响应式数据变化后获取 DOM 更新后的状态，比如希望获取列表更新后的高度。

在 Vue 内部，nextTick 之所以能够让我们看到DOM更新后的结果，是因为我们传入的 callback 会被添加到队列刷新函数（flushSchedulerQueue）的后面，这样等队列内部的更新函数都执行完毕，所有 DOM 操作也就结束了，callback 自然能够获取到最新的 DOM 值。

## 29、Proxy 与 Object.defineProperty 优劣对比

1、Proxy 的优势如下

- Proxy 可以直接监听对象而非属性
- Proxy 可以直接监听数组的变化
- Proxy 有多达 13 种拦截方法，不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的
- Proxy 返回的是一个新对象，我们可以只操作新的对象达到目的，而Object.defineProperty 只能遍历对象属性直接修改
- Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利

2、Object.defineProperty 的优势如下

- 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题，而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。
