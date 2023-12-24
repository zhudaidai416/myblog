# [Pinia](https://pinia.vuejs.org/zh/)

## 1、概念

Pinia 是一个全新的 Vue 状态管理库，是 Vuex 的代替者。

## 2、特点

* vue2 和 vue3 都支持
* 只保留了 state，getter，action
* 不需要模块化了
* 对 ts 的支持很好
* 代码分割

## 3、使用

### 1）、安装

``` bash
npm i pinia
```

### 2）、挂载

``` js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

### 3）、创建store

``` js
// store/index.js
import { defineStore } from 'pinia';

// defineStore 函数返回 store
// defineStore 参数1为 store 的 id，唯一
// defineStore 参数2是一个对象，包含 state、 getters、actions
export const mainStore = defineStore('main', {
  state: () => {
    return { count: 0 }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {  // 在这里修改数据，无论同步异步
    increment() {
      this.count++
    },
    // 异步处理
    async getList() {
      await axios()
      ...
    }
  },
})
```

### 4）、store使用

``` html
<template>
  <div>{{store.count}}</div>
  <div>{{store.doubleCount}}</div>
  <button @click="foo">按钮</button>
</template>

<script setup>
  import {mainStore} from '@/store/index.js';

  const store = mainStore(); // 获取 store 实例
  const foo = () => {
    store.increment();
  }
</script>
```

## 4、state

``` js
const store = mainStore();
// 访问 state
store.count

// 重置 state
store.$reset();

// 默认情况下 state 不能解构的
// const {count} = store; 解构后会失去响应式
import {storeToRefs} from 'pinia';
const {count} = storeToRefs(store); // 此时解构会保证响应式
```

## 5、修改数据

```js
// 方式1 - 简单的数据直接操作 store 就可以了
const store = mainStore();
const add = () => store.count++;

// 方式2 - 通过 action
{
  ...
  actions: { // 在这里修改数据，无论同步异步
    increment() {
      this.count++
    },
  },
}

// 方法3 - 同时修改多个数据，使用 $patch 去修改，该方式是经过优化的
const store = mainStore();

// 函数形式
store.$patch((state) => {
  state.count = 0;
  state.msg = 'Hi'
});

// 对象的形式
store.$patch({
  count: store.count + 2,
  msg: '哈哈哈'
})
```

