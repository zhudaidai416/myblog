## [React 官方文档](https://react.docschina.org/)

## 认识

一个轻量级的库，只关注 MVC 中的 V（视图）。

:notebook_with_decorative_cover: **特点**

- 单向数据流
- 组件化
- 虚拟 DOM
- learn once，write anywhere
  - react —— PC（WEB）
  - react-native —— 移动端
  - ssr（Next.js）—— 服务器端渲染
  - react-vr —— vr
  - gatsby —— 静态内容
  - reactxp —— PC客户端程序开发

## 环境搭建

```bash
>> create react app（官方脚手架）
  npx create-react-app 项目名

# npm6+
  npm init react-app 项目名
  
>> vite
  npm create vite@latest 项目名 -- --template react
```

## JSX 语法

### 1、概念

React 允许我们在 JS 中插入 HTML 代码，它被称为 JSX，是属于一个 JS 语法的扩展。

### 2、案例

```jsx
const t = <h1>hello</h1>;
```

### 3、JSX 语法规范

- 可以直接将标签赋值给变量
- 如果要在标签之间插入 JS 变量或者 JS 表达式，必须使用 `{}`
- 需要替换部分的关键字，如标签上的属性 class 写为 `className`，for 写为 `htmlFor`
- 事件绑定要使用小驼峰的写法，如 `onClick`
- 所有的标签必须闭合，即 ` <img>` 必须写为 `<img />`，或者 `<img></img>`
- 标签中的注释需要写在 `{/* */}` 中
- 当变量是 `Number，String` 时可以直接显示
- 当变量是 `Null，Undefined，Bollean` 时，就会显示空
- 如果是 Object 则不能直接渲染
- 如果是数组，那么会直接展开数组

### 4、插入变量

```jsx
const title = '您好';
const head = <header>{title}</header>;

{head}
```

### 5、调用函数

```jsx
const sum = () => 3;

{sum()}
```

### 6、属性绑定

```jsx
const title = 'hello';

<h1 title={title}></h1>;
```

### 7、style 绑定

```jsx
const style = {
	color: 'red',
	backgroundColor: 'green'
};

<h1 style={style}></h1>;
```

### 8、class 绑定

```jsx
<p className={n ? 'on' : ''}></p>
<p className={['class1', 'class2', (n ? 'on' : '')].join(' ')}></p>
```

### 9、条件渲染

```jsx
// if
const dom = () => {
  if(flag) {
    return <p>flag 为 true</p>
  } else {
    return <p>flag 为 false</p>
  }
}

{dom()}

// 三元
flag ? <p>flag 为 true</p> : <p>flag 为 false</p>

// &&
flag && <p>flag 为 true</p>
```

### 10、列表渲染

```jsx
const data = ['aa', 'bb', 'cc', 'dd']
const newData = data.map((item, index) => <li key={index}>{item}</li>)

{newData}
```

## 组件化

组件允许将 UI 部分拆分为可独立使用的代码片段。

**组件划分**

- class 组件：使用 class 去创建组件，可以包含逻辑和状态。
- 函数组件：以函数为组件，目前可以为函数组件添加状态，目前主流。

## class 组件

每一个组件一个文件，该文件后缀可以是 `js` 也可以是 `jsx` 。

### 1、组件定义

```jsx
// 写法1：在 constructor 中添加的状态
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);  // 继承必须在这里调用 super
    this.state = {}  // class 组件的 data ，响应式数据
  }
  render(){  // 每一个 class 组件必须设置 render ，然后在 render 中返回 dom 节点
    return (
      <div>
        <h1>React App</h1>
      </div>
    )
  }
}
export default App;

// 写法2：ES7 class 实验性质写法
class App extends React.Component {
  state = {}
  constructor(props) {
    super(props); // 继承必须在这里调用 super
  }
  render() {}
}
export default App;
```

### 2、组件使用

```jsx
import App from './App.js';

<App />
或者
<App></App>
```

### 3、class 组件的状态

#### 1）、概念

组件内部的响应式数据，只能在当前组件内部使用，可以被修改。

#### 2）、定义

```jsx
class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {}
  }
  render() {}
}

// or
class App extends React.Component {
  state = {}
  render() {}
}
```

#### 3）、使用

在组件中通过 `this.state` 的方式访问。

### 4、修改 state

只能调用 `setState` 方法去修改 state 。

#### 1）、语法

```jsx
setState(updater[ , callback])

* updater：可以接受对象类型，也可以接受函数类型
* callback：可选参数，在 state 修改之后执行的回调函数

// 例子
this.setState({
  count: 1
})

// 基于之前的值来修改
this.setState({
  count: this.state.count + 1
})
 
// 使用函数
this.setState((preState, props) => ({
  count: preState.count + 1
})

注：没有(),箭头函数执行方法体（箭头自带return）
this.setState(() => {
  // 执行方法体
})
```

#### 2）、局部数据修改

```jsx
// 写法1
const newUser = object.assign(this.state.user, { name: 'lily' })

// 写法2
const newUser = {
  ...this.state.user,
  name: 'lily'
}
this.setState({
  user: newUser
})
```

#### 3）、数组数据修改

React 执行 diff 时是比较引用，直接修改源对象的值，引用值是不发生改变，React 无法检测到，就不会重新渲染，所以需要使用不可变对象（不直接改源对象，而是返回新对象）。

即修改数组不能使用 push, splice 等等方法。

```jsx
this.setState({
  arr: [...this.state.arr, 新值]
})
```

#### 4）、 state 的更新是异步还是同步？

```jsx
changeC = () => {
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
}
这里的结果是只增加了 1，原因是： state 的更新可能是异步的，出与性能的考虑，React 会把多个 setState 的调用合并为一个调用；

setState 方法通过一个队列机制实现 state 更新，当执行 setState 的时候，会将更新的 state 合并后放入队列，而不会立即更新。

如果不想 setState 被合并，那么需要传递函数来实现：
changeC = () => {
  this.setState((preState) => ({
    count: preState.count + 1
  }))
  this.setState((preState) => ({
    count: preState.count + 1
  }))
  this.setState((preState) => ({
    count: preState.count + 1
  }))
}
```

### 5、class 组件事件处理

React 中所有的事件都是合成事件。

与原生事件注册的方式不一样，以 `on` 开头，后面跟上事件名，事件名使用大驼峰写法，即 `onClick` 。

#### 1）、事件绑定

```jsx
// 写法1：需要在构造函数中绑定 this
class Counter extends React.Component {
  constructor(props) {
    // ...
    // 绑定函数 this 指向
    this.changeCount = this.changeCount.bind(this);
  }
  changeCount() {}
  render(){
    return <div onClick={this.changeCount}></div>
  }
}

// 写法2：在 render 中绑定 this
// 存在问题：每次视图更新，都会重新绑定
class Counter extends React.Component {
  changeCount() {}
  render(){
    return <div onClick={this.changeCount.bind(this)}></div>
  }
}

// 写法3：使用箭头函数
// 存在问题：每次视图更新，都会重新
class Counter extends React.Component {
  changeCount() {}
  render(){
    return <div onClick={()=>this.changeCount()}></div>
  }
}

// 写法4：ES7写法（实验性质）
class Counter extends React.Component {
  changeCount = () => {}
  render(){
    return <div onClick={this.changeCount}></div>
  }
}
```

#### 2）、参数传递

```jsx
// 方式1：在 render 中绑定 this
export default class Counter extends Component {
  changeCount(str) {}

  render() {
    return <div onClick={this.changeCount.bind(this, 'abc')}></div>
  }
}

// 方式2：箭头函数
export default class Counter extends Component {
  changeCount(str) {}

  render() {
    return <div onClick={() => this.changeCount('abc')}></div>
  }
}

// 方式3：给标签自定义属性
<button data-msg="hi" onClick={this.changeCount}></button>
changeCount = (e) => {

}
```

### 6、props

父组件传递给子组件的数据，子组件不能修改该数据，在 class 组件中通过 this.props 的方式获取。

#### 1）、使用

```jsx
// 子组件
export default class Welcome extends Component {
  render() {
    return (
      <div className='welcome'>{this.props.msg}</div>
    )
  }
}

// 父组件
<Welcome msg="Hi Props" />
```

#### 2）、[props 约束](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)

```jsx
// 因为从 React 15.x 开始移除了 props 约束，所以需要安装第三方模块实现
npm i --save prop-types

// props 约束 
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends Component {
  render() {
    return (
      <div className='welcome'>{this.props.msg}</div>
    )
  }
}
Welcome.propTypes = {
  msg: PropTypes.string
  msg: PropTypes.string.isRequired
}
```

### 7、class 组件生命周期

* constructor：加载的时候调用一次，初始化 state

* render：更新 DOM 树的，每次渲染都会重新调用

* componentDidMount：组件渲染之后调用一次，一般在这个阶段发起请求、操作 DOM 节点

* shouldComponentUpdate：组件接收到新的 props 或者 state 的时候调用，该函数内返回 true 则渲染组件，返回 False 就不渲染

* componentDidUpdate：组件更新后，可以获取最新的 state

* componentWillUnmount：组件卸载，需要清除计时器、事件绑定等

## css 处理

```jsx
>> 切换 class
  <div className={isActive ? '' : ''}></div>

>> style 处理
  const style = {
    color: 'red',
    backgroundColor: 'green'
  }
  <div style={style}></div>

	// 或者
  <div style={{color: 'red'}}></div>

>> 引入 css 代码
  import '../assets/css/todo.css';

>> 局部 css 样式
  1、要求新建: 文件名.module.css;
  2、在该文件中创建 css 代码，比如；
    .btn_default {
      background: '';
    }
  3、导入样式
    import styles from '文件名.module.css';

    <button className={styles.btn_default}></button>

>> 引入 sass 
  // 只需要在当前环境中安装以下模块就可以直接使用。
  npm i sass
```

## 插槽

### 1、匿名插槽

写在每个组件之间的内容都可以被 props.children 获取。

```jsx
// 语法
<App>之间</App>
props.children


// ========== 例子 ==========
// 父组件 
<TodoButton>新增</TodoButton>

// 子组件
...
return (
  <button>
    { this.props.children }
  </button>
)
```

### 2、具名插槽

```jsx
// 语法
<App title="" />
props.title


// ========== 例子 ==========
// 父组件 
<TodoList right={<TodoButton>删除</TodoButton>}></TodoList>

// 子组件
<div>{this.props.right}</div>
```

### 3、作用域插槽

允许给子组件传递自定义内容，同时父组件也能拿到子组件的数据。

```jsx
// 语法
<App title={(参数) => 父组件方法(参数)} />
props.title(传参)


// ========== 例子 ==========
// 父组件 
<TodoList
  data={todoList}
  right={(item) => <TodoButton onClick={ () => this.delTodo(item.id) }>删除</TodoButton>}>
</TodoList>

// 子组件
const lis = data.map(item => {
  return (
    <div className='todo-item' key={item.id}>
      <div className='todo-item-text'>{ item.text }</div>
      <div>{ this.props.right && this.props.right(item) }</div>
    </div>
  )
})
```

## 表单数据绑定

### 1、受控组件

表单组件中的数据是由 React 维护的。

```jsx
...
state = {
  text: ''
}
onTodoTextChange = (e) => {
  this.setState({
    text: e.target.value
  })
}

<input value={ text } onChange={ this.onTodoTextChange } />
```

### 2、非受控组件（不推荐）

## 组件通信

### 1、props

父组件给子组件传递数据。

### 2、子组件给父组件传递数据

```jsx
// 父组件 
callback = (id) => {}
<Button callback={ callback }></Button>

// 子组件 
this.props.callback('传递给父组件数据')
```

## ref

获取节点。

```jsx
class ... {
  constructor() {
    super()
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // 必须通过 current 获取节点
    // 即 this.myRef.current 表示 dom ，相当于 document.getElementById()
    this.myRef.current.focus();
  }

  render() {
    return (
      <input ref={this.myRef} />
    )
  }
}
```

## 函数组件

最开始的函数组件是无状态组件（UI展示），React 16.7 版本后，新增加了一个叫 hooks 的函数，使得函数组件有了状态，有了生命周期。

### 1、函数组件结构

函数组件接受一个参数，该参数是父组件传递的 props ，组件内部必须返回 React 元素。

```jsx
function 组件名(props) {
  // ...
  return()
}
```

### 2、函数组件事件处理

```jsx
function App(props) {
 function onHandler() {
   console.log('事件');
 }

  return (
    <div>
      <button onClick={onHandler}>按钮</button>
    </div>
  );
}

export default App;
```

## hooks

可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

### 1、useState

该方法用于定义函数组件的 state 的。

```jsx
import { useState } from 'react';

function App(props) {
  const [state, setState] = useState(0);
  const [msg, setMsg] = useState('');
}

* 调用 useState 需要传递一个参数，该参数是状态初始值
* 调用 useState 后，会返回一个数组，该数组有两个元素
* 元素1就是 state ，元素2就是修改 state 的方法
* 注意：解构的两个数组元素名字是自定义的
* useState 是可以重复调用的，每一次调用就会返回一个状态值
```

:warning: **使用 hooks 函数需要注意的问题**

- 只能在函数顶层调用 hook
- 也不能写在循环、条件判断中
- 只能是在函数组件中或者自定义 hook 函数中

:notebook_with_decorative_cover: **state 的惰性初始化**

state 的初始值可以是一个函数，需要在函数中返回值，改返回值就是 state 的初始值。

```jsx
const [doubleC, setDoubleC] = useState(() => {
  // 初始化的时候需要经过复杂运算才能得到结果
  const num = count * 2;
  return num
})
```

useState 返回值数组的第二个参数可以接受一个函数作为参数

setState 或者 setMsg 接受函数作为参数，函数的第一个参数会接受 state 的值，并返回最新的 state。

```jsx
setState((preState) => {
  return preState + 1
})
```

useState 接受的是一个对象，只需要更新对象中某一个属性

```jsx
const [user, setUser] = useState({
  name: 'jack',
  age: 18
})
const onChangeAge = () => {
  setUser({
    ...user,
    age: 20
  })
}
```

### 2、useEffect

该函数可以看作是函数组件的生命周期，包含 componentDidMount，componentDidUpdate 以及 componentWillUnmount，在 render 之后执行。

```jsx
import { useEffect } from 'react'

function App() {
  useEffect(callback, [dependencies])
}

>> dependencies
  该参数是 useEffect 的依赖，可以决定 useEffect 的 callback 什么时候执行。

  * 如果该参数不存在，则初始化、组件任意状态值改变都会导致 callback 执行
  * 如果该参数传递一个 []，只有组件初始化和销毁的时候才会触发 callback
  * 该参数传入 [a]，表示在依赖 a 发生变化时才会触发 callback

 // ========== 例子 ==========
  useEffect(() => {
    console.log('Counter');
  }, [count]);

  useEffect(() => {
    // ...
  }, [user]);

>> callback
  回调函数，一般用于发起请求、添加计时器、事件绑定，在该函数中可以 return 一个函数，这个函数作为下一次 callback 执行前的调用，用于清除上一次 callback 产生的副作用。

  // ========== 例子 ==========
  useEffect(() => {
    console.log('Counter');  // 组件加载的时候执行
    return () => {
      // 组件卸载的时候执行
      console.log('useEffect 回调函数的返回值函数');
    }
  }, []);

  // 没有设置依赖的时候，每次渲染视图，callback 都会执行，那么 callback 的返回值函数也必然会执行
  useEffect(() => {
    console.log('Counter');
    const timer = setInterval(() => console.log(Date.now()), 1000)
    return () => {
      console.log('useEffect 回调函数的返回值函数');

      // 组件卸载之后需要干掉计时器
      clearInterval(timer)
    }
  });
```

### 3、useRef

与 createRef 类似，用于获取 dom 元素或者组件实例。

```jsx
import {useRef} from 'react';

function App() {
  const myRef = useRef();

  useEffect(() => {
    console.log(myRef.current); // 需要通过 current 获取节点
  }, [])

  return (
    <div ref={myRef}></div>
  )
}
```

## fragment

默认情况下 react 的 render 只支持单标签渲染，如果想要渲染多标签，那么可以使用该组件，可以在不多增加标签嵌套的情况下，渲染节点。

```html
<React.Fragment>
  <div></div>
  <div></div>
  <div></div>
</React.Fragment>

// 简写
<>
  <div></div>
  <div></div>
  <div></div>
</>
```

## portal

期望渲染的节点能够脱离父组件范围，可以将节点放在任意我期望的位置。

使用场景：比如 模态框。

```jsx
ReactDOM.craetePortal(child, container)

* child：任何有效的节点或者 React 组件
* container：希望将 child 放在什么位置，应该是一个 DOM 节点
```

## 高阶组件

### 1、高阶函数

一个函数接受一个函数作为参数，然后返回一个函数。

### 2、高阶组件（HOC）

HOC 是 React 中组件复用的高级技巧，具体是指以组件为参数，然后返回新组件的函数。

### 3、基本结构

```jsx
const HOC = (Component) => {
  // 逻辑处理
  return <NewComponent />
}
```

### 4、应用场景

#### 1）、属性代理

比如统一处理多个组件的 loading 效果。

```jsx
const WithTable = (Component) => {
  // console.log('接受组件', Component)

  // 创建新组件
  const NewComponent = (props) => {
    if (props.loading) {
      return <div>loading...</div>
    } else {
      return <Component />
    }
  }

  return NewComponent;
}

export default WithTable

// 包装组件props处理
const WithTable = (Component) => {

  // props = {loading: false, titile: ''} = {loading, ...otherProps}
  const NewComponent = ({ loading, ...otherProps }) => {
    console.log('HOC 的 props：', otherProps);
    if (loading) {
      return <div>loading...</div>
    } else {
      return <Component {...otherProps} />
    }
  }

  // 创建一个新组件
  // const Loading = () => <div>loading...</div>

  return NewComponent;
}
```

## 性能优化

### 1、场景

```jsx
>> 父子组件嵌套
  - Father render - 
  ClassA.jsx:14 ClassA constructor
  ClassA.jsx:23 ClassA render
  ClassA.jsx:17 ClassA componentDidMount
  Father useEffect - 

>> 子组件数据改变后
  子组件要 render；
  父组件不变；

>> 父组件状态改变
  父组件 render；
  子组件无论与父组件的状态是否有关，都会 render;
```

### 2、优化手段

```jsx
>> shouldComponentUpdate - 针对 class 组件，如果 props 和 state 都没有改变
  shouldComponentUpdate(nextProps, nextState) {
    // 该生命周期必须返回一个布尔值，如果为 true，则render，否则不render
    console.log('ClassA shouldComponentUpdate', nextProps, nextState)

    if (this.props.num2 != nextProps.num2 || this.state != nextState) {
      return true;
    } else {
      return false;
    }
  }

>> PureComponent
  React.PureComponent 和 React.Component用法差不多，唯一不同的是 PureComponent 会浅比较 props 和 state 是否相同，从而决定是否重新渲染组件。
```

### 3、useMemo

这个函数的返回值会被缓存，在组件第一次渲染的时候执行，以后会在依赖发生改变后再次执行。

作用：一般用于比较复杂的运算或者耗时操作。

```jsx
useMemo(create, deps);

* create：是一个函数，函数的返回值作为缓存值。
* deps：依赖，是一个数组。
```

### 4、memo

和 PureComponent 类似，用于性能调优，函数组件和类组件都可以使用，区别是 memo 只能判断 props 而不能处理 state 的改变。

```jsx
memo(组件)
```

## [路由](https://reactrouter.com/en/main)

### 1、环境搭建

```bash
# 直接在现有的项目中添加路由
npm install react-router-dom
```

### 2、路由引入

#### 1）、BrowserRouter

history 模式路由，即路径中是带 `/`

```jsx
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>,
  root
);
```

#### 2）、HashRouter

hash 路由，即路径中带 `#`

```jsx
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    {/* The rest of your app goes here */}
  </HashRouter>,
  root
);
```

### 3、路由组件

#### 1）、Route

用于匹配当前 url 要渲染的组件。

```jsx
<Route path="url" element={<组件 />} />

* index：表示默认路由，设置该属性后，Route 不能有子组件
```

#### 2）、Routes

作为 Route 的上一级组件，可以优化路径匹配。

```jsx
// ========== 例子 ==========
<Routes>
  <Route path="/" element={<MyLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="setting" element={<Setting />} />
  </Route>
  <Route path="/login" element={<Login />} />
</Routes>
```

#### 3）、Link

用于链接跳转，最终会被渲染为 a 标签。

```js
import { Link } from 'react-router-dom';、

<Link to=" "></Link>
* to：链接的路径
```

#### 4）、路由嵌套

```jsx
// 第一步
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>

// 第二步、在父组件中使用 <Outlet /> 渲染子组件
// Layout 
import { Outlet } from 'react-router-dom';
<div>
  <Outlet />
</div>
```

#### 5）、useNavigate

用于返回一个类似 history 的对象，可用于编程式导航。

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// 传递 url 参数
navigate('/home');

// 传递数字来表示前进或者后退多少
navigate(-1);

// 替换历史记录
navigate('/', {replace: true});
```

#### 6）、useSearchParams

获取url的查询参数。

```jsx
import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams()
console.log('获取查询参数：', searchParams.get('id'));
```

#### 7）、useParams

获取动态参数。

```jsx
import { useParams } from "react-router-dom";

const params = useParams();
console.log('获取动态参数：', params);
```

## [Ant Design](https://ant.design/index-cn)

```bash
>> UI 安装
  npm i antd

>> 配置模块安装
  npm i @craco/craco babel-plugin-import -D
	npm i @craco/craco babel-plugin-import -D --legacy-peer-deps（解决版本冲突）

>> 修改 package.json 里的 scripts
  "script": {
    "start": "craco start"
  }

>> 根目录下创建配置文件 craco.config.js 文件
  module.exports = {
    babel: {
      plugins: [
        ["import", {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css'
        }]
      ]
    },
    webpack: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  };

>> 版本冲突问题
  问题显示：
    Fix the upstream dependency conflict, or retry
    npm ERR! this command with --force, or --legacy-peer-deps
    npm ERR! to accept an incorrect (and potentially broken) dependency resolution.

  看到这个表示安装的模块与依赖有版本冲突的问题，在安装的后面添加 --legacy-peer-deps 解决
  npm i @craco/craco -D --legacy-peer-deps
```

```jsx
React.createElement(LaptopOutlined)

=> 生成: <LaptopOutlined />
```

## context

提供了一个无需为每层组件手动添加 props ，就能在组件树中进行数据传递的方法。

### 1、class 组件 - [context](https://react.docschina.org/docs/context.html)

```jsx
// 第一步、创建 context 对象，参数是一个默认值
const MyContext = React.createContext(defaultValue);

// 第二步、使用 Provider 组件包装所有子组件
// value 就是传递给子组件树的数据
<MyContext.Provider value={{msg: 'Hi'}}>
  // 子组件
</MyContext.Provider>

// 第三步、class 组件使用 value 
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>


// ========== 例子 ==========
<MyContext.Consumer>
  {
    (value) => {
      return <p>{value.msg}</p>
    }
  }
</MyContext.Consumer>
```

### 2、函数组件 - useContext

允许在函数组件中使用 context 对象，在 context 值发生改变时重新渲染。

问题：context 的值发生改变，无论子组件是否引用 value， 都会导致子组件重新渲染。

```jsx
import { useContext } from 'react';

function App() {
  const context = useContext(MyContext);  // 需要接受context作为参数

  return (
    <div>{context.msg}</div>
  )
}
```

### 3、Provider 封装

#### 1）、class 组件 —— 封装

```jsx
import React, { Component } from 'react';
import MyContext from '@/store/index';

export default class Provider extends Component {
  state = {
    msg: '呆呆'
  }
  setMsg = (msg) => {
    this.setState({
      msg
    })
  }
  render() {
    const value = {
      msg: this.state.msg,
      setMsg: this.setMsg,
    }
    return (
      <MyContext.Provider value={value}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

// index.js 文件
import Provider from '@/store/Provider';
root.render(
  <Provider>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
```

#### 2）、函数组件 —— 封装

```jsx
import React, { useState } from 'react';
import MyContext from '@/store/index';

export default function FnProvider(props) {
  const [msg, setMsg] = useState('呆呆')
  return (
    <MyContext.Provider value={{
      msg,
      setMsg
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

// index.js 文件
import FnProvider from '@/store/FnProvider';
root.render(
  <FnProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </FnProvider>
);
```

## useReducer

useReducer 是 useState 的替代方案，能够解决 useState 状态更新逻辑散落在 UI 中，不能独立复用，不方便测试。
所以当处理比较复杂的数据时，更建议使用 useReducer。

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);

  * reducer：是一个纯函数（无副作用，即无请求、计时器、事件绑定、甚至是本地存储），接收状态并返回状态，在函数内部通过 action 对象来处理状态
  * initialArg：一个初始化的 state
  * 返回值 state：就是数据
  * 返回值 dispatch：用于触发 action 的，即触发数据更新
```

```jsx
import { useReducer } from 'react';

// 参数 state 即当前状态
// 参数 action 是一个对象，该对象必须拥有 type 属性，其他属性根据需要设置
function reducer(state, action) {
  switch(action.type) { // 即 根据 action.type 决定如何修改数据
    case 'ADD':
      return [...state, action.todo]

    case 'DEL':
      return state.filter((item) => item.id != action.id)
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  // 修改数据
  dispatch({
    type: 'ADD',
    todo
  })

  // 删除
  dispatch({
    type: 'DEL',
    id: 1
  })
}
```

:warning: 使用 context、useReducer，数据不能直接绑带表单里，数据是通过 `dispatch` 来修改，绑到表单则会直接修改，不合逻辑

## [Redux](https://cn.redux.js.org/)

### 1、react 数据通信

- props
- 事件回调
- context + useReducer
- mobx（小型的状态管理工具）
- redux

### 2、redux 认识

redux 是 JS 的状态容器，可以使用一个叫 action 对象的事件来管理和更新应用的状态。不依赖任何的框架，可以在 JS 中独立使用。

### 3、环境

```bash
>> 新项目
  npx create-react-app 项目名 --template redux

  npx create-react-app 项目名 --template redux-typescript

>> 老项目
  npm i redux react-redux (--legacy-peer-deps)
```

**项目引入**

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();


// store 创建
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```

### 4、核心概念

#### 1）、store

store 是一个对象，用于存放整个应用的状态，且一个应用只能有一个 store 。

```jsx
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
export default store;
```

#### 2）、数据获取

```jsx
store.getState();  // 返回应用当前的状态
```

#### 3）、reducer

是一个纯函数，会根据不同的 action 对象返回一个新的 state 。

```jsx
function reducer (state = [], action) {
  switch(action.type) {
  
  }
}
```

**纯函数**

- 不修改传入的参数
- 不要执行有副作用的操作，比如 `API` ，`计时器`等等
- 也不要调用非纯函数，如 `new Date()`

#### 4）、action

是一个对象，该对象必须拥有 type 属性，也可以设置其他属性。

```jsx
// 使用
const action = {
  type: 'ADD'
}

// 参数
const action = {
  type: 'ADD',
  payload: {}
}

// 一般我们在写的时候，很少直接写死，而是通过函数返回 action 对象
const addAction = function(payload) {
  type: '',
  payload: {}
}
```

#### 5）、dispatch

是一个函数，需要修改 state 的时候，调用该函数，然后传入 action ，此时 reducer 函数就会根据 `action.type` 来决定返回什么内容。

#### 6）、subscribe

一旦 state 的值发生改变，就会自动运行该函数。

```jsx
store.subscribe(() => {
  //...
})
```

#### 7）、combineReducers

用于将多个 reducer 合并为一个 reducer 。

```jsx
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
  home,
  user,
  todo
})
store = createStore(mainReducer)
```

### 5、异步处理

#### 1）、了解

reducer 函数是一个纯函数，不允许在里面进行异步操作

dispatch 函数用于提交 action 对象

```jsx
// 接受一个对象
diapatch({
  type: 'LOGIN'
})

// 调用了一个函数，该函数返回了一个对象
const LoginAction = (payload) => ({
  type: 'LOGIN,
  payload
})
dispatch(LoginAction({}))
```

#### 2）、redux-thunk

因为在 reducer 中只能同步操作，那么要想异步处理 redux 就只能在组件中先进行异步操作，然后成功后再 dispatch。

但是会让redux 的逻辑散落在UI中，不易于后期管理。

接用该插件可以实现 dispatch 一个函数，然后在这个函数中处理异步。

```jsx
dispatch(function(payload) {
  // ... 异步处理
  return function(dispatch) {
    dispatch(LoginAction({}))
  }
})

环境配置：
npm i redux-thunk

代码中配置：
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(mainReducer, applyMiddleware([thunkMiddleware])); 
```

## react-redux

目前官方推荐的将 react 和 redux 进行绑定的库。

### 1、Provider

该组件会作为整个应用的顶层组件，接受 store 属性，该属性应该使用store 来进行赋值。

```jsx
<Provider store={store}>   
  <App />
</Provider>
```

### 2、useSelector

用于组件中获取 store 的 hook 。

``` jsx
import { useSelector } from 'react-redux';

const App = () => {
  const state = useSelector(selector,equalityFn)
}

* selector：是一个函数，返回 state 中的某个值
```

### 3、useDispatch

返回 dispatch 函数的引用。

```jsx
import {useDispatch} from 'react-redux';

const App =() => {
  const dispatch = useDispatch()

  dispatch({
    type: ''
  })
}
```

## redux 调试工具

浏览器安装扩展 Redux DevTools

```jsx
代码中配置： 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建 store
const store = createStore(mainReducer, composeEnhancers(
  applyMiddleware(...middlewares)
));
```

## 搜索功能

### 1、实现逻辑

#### 1）、正常情况

- 点击搜索按钮 ➡ 发送请求（有参数） ➡ 后端返回数据
- 点击重置按钮 ➡ 发送请求（没有参数或者参数为空值） ➡ 后端返回数据

#### 2）、前端自己模拟本地 JSON 数据

- 点击搜索按钮 ➡ 根据参数处理本地数据（数据只有一份，过滤的时候就会改造数据，无法还原的）
- 怎么解决 ➡ 改造之前先拷贝一份数据（备份）

## 动态路由

### 1、创建 Icon 组件

```jsx
import * as Icon from "@ant-design/icons";

function createIcon(name) {
  return React.createElement(Icon[name]);
}

用法：
React.createElement(LaptopOutlined)
=> 生成: <LaptopOutlined />
```

### 2、菜单改造

```jsx
// 路由的数据结构
menu = [
  {
    key: 1,
    path: "/",
    label: "工作台",
    icon: "dashboard",
  },
  {
    key: 2,
    label: "活动管理",
    path: "",
    icon: "",
    children: [
      {
        key: 3,
        path: "/activity/list",
        label: "所有活动",
        icon: "",
      },
      {
        key: 4,
        path: "/activity/type",
        label: "活动分类",
        icon: "",
      },
    ],
  },
]

// 代码逻辑
import * as _ from 'lodash';
import { Link } from "react-router-dom";
function filterMenu(data) {
  const cloneData = _.cloneDeep(data);  // 借用 loadash 函数库来实现深拷贝

  const newData = cloneData.filter((item, index) => {
    if (!item.hidden) {  // 判断是否需要在菜单中展示当前菜单项（用户权限）
    // 改造后：{ label: '菜单项一', key: 'item-1', icon: <UserOutlined> , children: [] }
      item.icon = createIcon(item.icon);  // createIcon 函数见1
      item.label = <Link to={item.path}>{item.label}</Link>
      if (item.children && item.children.length > 0) {
        item.children = filterMenu(item.children);  // 子菜单进行递归再次判断
      }
      return true;
    } else {
      return false;
    }
  });
  return newData
}
```

### 3、动态路由

```jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import * as _ from "lodash";

// 数据结构 => 树状结构转为扁平结构
function treeToLevel1(data) {
  let result = [];

  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    var cloneObj = _.cloneDeep(obj);
    delete cloneObj.children;

    if (obj.component) {
      result.push(cloneObj);
    }

    if (obj.children && obj.children.length > 0) {
      var tem = treeToLevel1(obj.children);
      result = result.concat(tem);
    }
  }

  return result;
}

// 自定义 hooks
function useRouteToDom() {
  const authList = useSelector((state) => state.user.authList);  // redux获取数据
  const domData = treeToLevel1(authList);
  console.log("转树状：", domData);

  // 改造后：<Route path="authority/employee" element={<Employee />} />

  const arr = domData.map((item, index) => {
    const Com = React.lazy(() => import(`../${item.component}/index.jsx`));
    console.log("动态加载组件：", Com);

    return <Route key={index} path={item.path} element={<Com />} />;
  });
  console.log("处理后路由：", arr);
  return arr;
}

const AsyncRouter = () => {
  const authList = useSelector((state) => state.user.authList);
  const domData = treeToLevel1(authList);
  console.log("转树状：", domData);

  const arr = domData.map((item, index) => {
    const Com = React.lazy(() => import(`../${item.component}/index.jsx`));
    console.log("动态加载组件：", Com);

    return <Route key={index} path={item.path} element={<Com />} />
    // <React.Suspense callback={<div>loading...</div>}>
    // <Com />
    {/* </React.Suspense>} />; */ }
  });
  console.log("处理后路由：", arr);

  return (
    <React.Suspense callback={<div>loading...</div>}>
      <Routes>{arr}</Routes>
    </React.Suspense >
  );
};

export default React.memo(AsyncRouter);
```

## [打印功能](https://www.npmjs.com/package/react-to-print)

### 1、环境

```bash
环境安装
npm install --save react-to-print
```

```jsx
// 写法1
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

const Example = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />  // 需要打印的内容
    </div>
  );
};


// 写法2
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
```

## react 结合 ts

1、创建ts 项目

```bash
create-react-app myapp（项目名） --template redux-typescript
```

2、原项目引入

```bash
npm i typescript @types/node @types/react @types/react-dom @types/axios

# 根目录下的

const container:HTMLElement = document.getElementById("root")!;
const root = createRoot(container);
```

## 自定义 hooks

### 1、自定义 hooks

以 use 开头，自定义 hooks 可以调用 React hooks 。

### 2、例子

```jsx
// 场景1：管理界面 - 表格 - 会请求数据、分页、搜索
import { useState } from 'react';
export const useList = (listReg: any) => {
  const [list] = useState([]);
  
  const getList = () => {
    
  }
  
  return {
    listReg()
    .then((res) => {
      if(res.data.code == '200'){
        setList(res.data.data)
      } else {
        
        
      }
    })
    .catch((err: any) => {
      // ...
    })
  }

}

// 调用
const api = () => axios({})
const { list, getList } = useList(axios())
```

```jsx
// 场景2：本地存储 - 没有响应式

```

## 即时通讯

### 1、http 协议

HTTP 协议有一个缺陷 - 通信只能由客户端发起，通信完成之后就会断开连接。

### 2、解决手段

#### 1）、轮询(短轮询，长轮询)

浏览器每隔一段时间就向服务器端发送请求，服务器端接收到请求后，无论是否有新的数据，都会直接进行响应。

优点：简单，很容易理解（客户端每隔一段时间请求）。

缺点：浪费服务器资源、服务器端压力比较大。

:notebook_with_decorative_cover: 实现

```jsx
function getApi() {
  axios({})
}

setInterval(() => {
  getApi();
}, 5000);
```

#### 2）、websocket

### 3、websocket 概念

2011年成为标准，目前所有浏览器都已经支持。

websocket 是一个全双工通讯协议，该协议允许服务器主动向客户端推送消息，客户端也可以主动向服务器推送消息。

在 websocket 中，浏览器和服务器只需要完成一次握手，两者就可以创建持久性的连接。

websocket  默认使用请求协议为 `ws://` ，默认端口也是 `80` ，加密协议为 `wss://` ，端口号 `443` 。

:notebook_with_decorative_cover: 课外知识点

在浏览器地址栏输入url（域名）并回车到看到网页的这一个过程中，经历了哪些阶段？

- 浏览器缓存
- DNS
- TCP 三次握手
- http 请求
- 浏览器渲染（html，css，js）

### 4、使用场景

- 社交app
- 直播
- 客服系统
- 消息通知
- 股价
- 大屏数据

### 5、实现

- ws 模块
- socket.io

## ws

是 nodejs 下一个极简的 websocket 实现方案。

### 1、模块安装 - 服务器端

```bash
npm i ws
```

### 2、引入 - 服务器端

```jsx
const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({
  port: 8080, // 端口号
});

// 建立连接成功
wss.on('connection', (ws) => {
  // 监听前端发送的事件
  ws.on('message', (data) => {
    console.log('接收到前端发送的数据', data);
  });

  // 给前端发送数据
  ws.send('something', '数据');
});
```

### 3、前端连接

```jsx
let wsUrl = "ws://127.0.0.1:8080";
const ws = new WebSocket(wsUrl);

// 建立连接 
ws.onopen = function (e) {
  console.log("客户端socket'开启");
};

// 发送消息
ws.send('');

// 接受消息
ws.on('message', () => {});
```

