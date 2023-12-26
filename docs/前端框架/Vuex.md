## [Vuex](https://vuex.vuejs.org/zh/)

## 1、认识

集中式存储管理当前应用的所有组件状态，保证状态以一种可预测的方式进行变化

## 2、应用场景

任何两个组件甚至是更多组件之间传递数据

## 3、特点

驱动式的数据源

声明式的方式将状态映射到视图

## 4、环境

```bash
# 在已有的项目中加入 vuex
npm i vuex


# 新建项目中可选择
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

### store（src/store/index.js）

每一个 Vue 实例只能包含一个 store 实例，该 store 相当于一个仓库，所有需要跨组件通信的组件都从 store 中读取数据，修改数据的时候也通过 store 提供的方法来修改

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

作为 store 中的数据，所有跨组件的数据都可以放在这里

#### a、语法

```js
>> 使用（src/store/index.js）
state: {
  num: 0
},

>> 调用
// 任何其他组件通过一定的方式都能取得该数据
// 在组件中（src/components/vue文件）
computed: {
  num() {
    return this.$store.state.num
  }
}
```

#### b、mapState 辅助函数

```js
// 用于在组件中简写获取 state 的方式

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      // 方式1 - 箭头函数
      num: state => state.num,

    	// 方式2 - 直接传入字符串，将 store 中的 num 映射为当前组件的 numStr
    	numStr: 'num',  // 'num' 等同于 `state => state.num`
  	}),

  // 方式3 - 字符串数组的写法，当映射的计算属性的名称与 state 的子节点名称相同时
    ...mapState([
      'num'
    ])
  }
}
```

### 2）、Getter

可以理解为 vuex 的计算属性，getters 的返回值会根据它的依赖被缓存起来，只有它的依赖发生了改变才会被重新计算

#### a、语法

```js
>> 使用
getters: {
  doubleNum(state) {  // 调用 getters 可以得到 num 的2倍值，但是 num 的值是没有改变的
    return state.num * 2
  },
  // getters 没有第二个参数，但是可以在一个函数中返回一个 getters，这样该函数就可以设置参数了
  countNumN(state) {  // 此时调用 getter 返回的是一个函数而不是值
    return (n) => state.num * n
  }
},

>> 调用
computed: {
  doubleNum() {
    return this.$store.getters.doubleNum
  }
  countNumN() {
    return this.$store.getters.countNumN(3)
  }
}
```

#### b、mapGetters 辅助函数

```js
import { mapGetters } from 'vuex'

export default {
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doubleNum',
    ])
    
    // 将 getter 属性另取名字
    ...mapGetters({
      // 把 `this.double` 映射为 `this.$store.getters.doubleNum`
      double: 'doubleNum'
    })
  }
}
```

### 3）、Mutation

修改 store 中的数据必须通过 Mutation 修改

该函数内部只能是`同步操作`，不能有其他任何与数据修改无关的操作，比如请求、计时器、本地存储等

#### a、语法

```js
>> 使用
mutations: {  // 定义修改数据的方法
  increment(state) {  // 参数 state 就是状态
    state.num += 1
  },
  incrementPayload(state, payload) {  // 参数2：调用 mutation 时传递的数据
    state.num += payload
  }
},

>> 调用
this.$store.commit('increment')
this.$store.commit('incrementPayload', 5)  // 传参
```

#### b、mapMutations 辅助函数

```js
import { mapMutations } from 'vuex'

export default {  
  methods: {
    ...mapMutations([
      'increment',  // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // mapMutations也支持载荷：
      'incrementPayload'  // 将 `this.incrementPayload(5)` 映射为 `this.$store.commit('incrementPayload', 5)`
    ]),
    
    ...mapMutations({
      add: 'increment'  // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```

### 4）、Action

可以用于异步操作、或者其他非纯函数操作（本地存储），当异步完成后，可以去提交 mutation，从而改变状态

也就是说 action 也不能修改数据，但是可以在 action 中提交 mutation

#### a、语法

```js
>> 使用
actions: {
  // 写法1
  incrementAsync(context) {  // context 是一个与 store 实例具有相同方法和属性的对象
    setTimeout(() => {  // 异步操作：需要在 1s 之后修改 num
      // 调用 mutataion
      context.commit('increment')
    }, 1000)
  },
  incrementAsyncP(context, payload) {
    setTimeout(() => {
      context.commit('incrementPayload', payload)
    }, 1000)
  }
  
  // 写法2 - 用参数解构来简化代码
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  },
},

>> 调用
this.$store.dispatch('incrementAsync')
this.$store.dispatch('incrementAsyncP', 5)  // 传参
```

#### b、mapActions 辅助函数

```js
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'incrementAsync',
      'incrementAsyncP'
    ]),
    
     ...mapActions({
      add: 'increment'  // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```

总结

- 同步：在组件中调用 mutation -> mutation 修改数据

- 异步：在组件中调用 action -> action 调用 mutation -> mutation 修改数据


关于 vuex 中的 actions 的使用

1、请求应该写在哪里

- 如果请求返回的数据知识当前组件中使用，不需要存储在 vuex 中，那么请求直接写在当前组件
- 如果请求回来的数据需要放在 vuex 中，那么会将请求放在 actions 中处理，请求成功后调用 mutation，然后在组件中调用 actions
  组件 -> actions -> axios -> mutation

2、actions 回调处理

因为 action 是异步的，那么如何知道 action 已经执行完毕了

### 5）、Module

一个 Vue 应用中只能存在一个 store，所有的 state 都会集中在这个 store中，当项目情况非常复杂的情况下，这个 store 就会非常的臃肿

为了解决 store 臃肿的问题，vuex 允许我们将 store 分割为一个个的小模块，每一个模块都有自己的 state、mutation、action、getter、module

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
  state: {},  // 主模块中的 state
  mutations: {},
  modules: {  // 子模块
    a: moduleA,
    b: moduleB
  }
})

store.state.a  // -> moduleA 的状态
store.commit('add')  // -> 默认情况下，模块内部的 getters, mutations, actions 都是挂在在主模块下的，所以调用方式不变
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
