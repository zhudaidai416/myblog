## 编程思想

### 1、面向过程

面向过程就是分析出解决问题所需要的步骤，然后用**函数**把这些步骤**一步一步**实现，使用的时候再**一个一个**的依次调用就可以了。

面向过程，就是按照我们分析好了的步骤，按照步骤解决问题。

![面向过程编程](/images/面向过程编程.png)

### 2、面向对象（oop）

面向对象是把事务分解成为一个个对象，然后由对象之间**分工与合作**。

面向对象是以对象功能来划分问题，而不是步骤。

![面向对象编程](/images/面向对象编程.png)

在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工。

面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目。

**面向对象的特性：**

- 封装性


- 继承性
- 多态性

### 3、编程思想对比

**面向过程**

- 优点：**性能**比面向对象**高**，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程

- 缺点：不灵活、复用性较差


**面向对象**

- 优点：**易维护、易复用、易扩展**，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护

- 缺点：性能比面向过程低


## 构造函数

**封装**是面向对象思想中比较重要的一部分，js 面向对象可以**通过构造函数实现的封装**

把公共的属性和方法**抽取封装到**构造函数里面来实现数据的**共享**，这样创建的实例对象可以使用这些属性和方法了

- 构造函数体现了面向对象的**封装**特性
- 构造函数实例创建的对象**彼此独立**、互不影响

```js
// 构造函数实现封装
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayHi = function () {
    console.log('hi~')
  }
}

// 实例对象使用属性和方法
const zs = new Person('张三', 18)
const ls = new Person('李四', 19)

console.log(zs === ls)  // false 

// 通过构造函数创建对象时，如果把方法放到实例对象身上，会导致创建多个对象时，方法也跟着创建了多个，造成内存浪费
console.log(zs.sayHi === ls.sayHi)  // false 两个函数不一样
```

![构造函数封装](/images/构造函数封装.png)

前面我们学过的构造函数方法很好用，但是存在**浪费内存**的问题

## 原型

### 1、原型对象 - prototype

JavaScript 规定，每一个构造函数都有一个 `prototype` 属性，指向另一个对象，所以我们也称为原型对象

**使用场景：**

- 可以解决：构造函数封装时**函数**（方法）会多次创建，占用内存的问题

- 原型对象可以挂载**函数**，对象实例化**不会**多次创建原型对象里面的函数，节约内存

**特点：**

- 所有通过构造函数创建出来的实例对象，都可以访问原型对象中的成员
- 实例对象创建时，不会重复创建原型对象，每个构造函数的原型对象是唯一的，因为它是跟随构造函数走的
- 对象会优先找自己身上的属性和方法，找不到才去原型上查找属性和方法，就近原则

**作用：**

- 可以把那些公共的属性和方法，直接定义在 prototype 对象上
- 实例对象可直接访问原型对象中属性和方法
- 这些属性和方法不会多次内存中创建，从而节约内存

![原型对象](/images/原型对象.png)


```js
function Person(name, age) {
  this.name = name
  this.age = age
  // this.sayHi = function () {
  //   console.log('hi~')
  // }
}

Person.prototype.sayHi = function () {
  console.log('hi~')
  console.log(this)  // 原型对象 this 指向实例对象，即指向实例对象 zs 或 ls
}

console.log(Person.prototype)  // 原型对象

// 实例化
const zs = new Person('张三', 18)
const ls = new Person('李四', 19)

console.log(zs.sayHi === ls.sayHi)  //  true
```

**构造函数和原型对象中的 this 都指向实例化的对象**

> - 箭头函数不能做构造函数，因为箭头函数里面没有 this
> - 原型对象里面的函数如果需要用到 this，也不要用箭头函数

### 2、constructor 属性


每个原型对象里面都有个 `constructor` 属性（constructor 构造函数）

作用：该属性**指向**该原型对象的**构造函数**， 简单理解，就是指向我的爸爸，我是有爸爸的孩子

**使用场景：**

- 如果有多个对象的方法，我们可以给原型对象采取**对象形式赋值**

- 但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了

- 此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数

![constructor属性](/images/constructor属性.png)


~~~js
function Person(name) {
  this.name = name
}

// 1、constructor 属性在原型对象里面
console.log(Person.prototype)

// 2、constructor 属性：指向原型对象的构造函数
console.log(Person.prototype.constructor === Person)  // true

// 3、有什么使用场景呢？
Person.prototype.sing = function () {
  console.log('我会唱歌')
}
Person.prototype.dance = function () {
  console.log('我会跳舞')
}

Person.prototype = {
  // 不加，没有 constructor 属性，={} 相当于覆盖原先的构造函数
  constructor: Person,  // 手动指定一个 constructor 指回构造函数
  sing() {
    console.log('我会唱歌')
  },
  dance() {
    console.log('我会跳舞')
  }
}
~~~

### 3、原型

对象都会有一个属性 ` __proto__` 指向构造函数的 prototype 原型对象

之所以我们对象可以使用构造函数 prototype 原型对象的方法，就是因为对象有 `__proto__ 原型`的存在

> :warning: 注：
>
> - `__proto__` 原先是 JS 非标准属性，但是 es6 规范中开始标准化，`[[Prototype]]` 和 `__proto__` 意义相同
>
>   ![prototype](/images/prototype.png)
>
> - 尽量<font color="red">不要修改</font>这个属性，对性能影响非常严重的
>
> - 约定： `prototype`：<font color="red">原型对象</font>， `__proto__`：<font color="red">原型</font>

![原型](/images/原型.png)

~~~js
function Person(name) {
  this.name = name
}

// 实例对象里面有 __proto__ 属性
const zs = new Person('张三')
console.log(zs)

// __proto__ 指向原型对象
console.log(zs.__proto__ === Person.prototype)  // true
~~~

### 4、原型链

`__proto__` 属性链状结构称为原型链

作用：原型链为对象成员查找机制提供一个方向，或者说一条路线

![原型链2](/images/原型链2.png)

- 当访问一个对象成员（属性/方法）时，首先查找这个对象自身有没有该成员（属性/方法）
- 如果没有就查找它的原型对象（也就是 `__proto__` 指向的 prototype 原型对象）
- 如果还没有就查找原型对象的原型对象（Object 的原型对象）
- 依此类推一直找到 Object 为止（null）
- 原型链就在于为对象成员查找机制提供一个方向，或者说一条路线

```js
// Person 构造函数
function Person(name) {
  this.name = name
}

// 1、实例对象
const zs = new Person('张三')
zs.sayHi = function () {
  console.log('实例对象的方法')
}
zs.sayHi()

// 2、Person 原型对象
Person.prototype.sayHi = function () {
  console.log('Person原型对象的方法')
}
zs.sayHi()

// 3、Ojbect 原型对象
Object.prototype.sayHi = function () {
  console.log('Object原型对象的方法')
}
zs.sayHi()

// 4、null
zs.sayHi()
console.log(zs.sayHi)  // undefined
```

#### 1）、instanceof 运算符

用来检测构造函数的原型对象 .prototype 是否存在于实例对象的原型链上

~~~js
// 语法:  实例对象 instanceof 构造函数

function Person(name) {
  this.name = name
}

function Person1(name) {
  this.name = name
}
const zs = new Person('张三')
console.log(zs instanceof Person)  // true
console.log(zs instanceof Person1)  // false

// 数组 
const arr = [1, 2, 3]
console.log(arr instanceof Array)  //  true
console.log(arr instanceof Object)  //  true 

console.log(arr) // __proto__
console.log(arr.__proto__ === Array.prototype) // true
console.log(Array.prototype.__proto__ === Object.prototype) // true
~~~

### 4、原型继承

继承是面向对象编程的另一个特征。龙生龙、凤生凤、老鼠的儿子会打洞描述的正是继承的含义

有些公共的属性和方法可以写到父级身上，子级通过继承也可以使用这些属性和方法

JavaScript 中大多是借助原型对象实现继承的特性

~~~js
// 1、抽取封装 公共的属性和方法 Person构造函数
// 父级
function Person() {
  this.eyes = 2
}
Person.prototype.eat = function () {
  console.log('我会吃饭')
}
console.log(new Person())
console.log(new Person() === new Person())  // false

// 男人构造函数
function Man() {

}
// 女人构造函数
function Woman() {

}

// 2、继承 - 借助于原型对象
Man.prototype = new Person()
Man.prototype.constructor = Man
console.log(Man.prototype)
const zs = new Man()
// console.log(zs)

Woman.prototype = new Person()
Woman.prototype.constructor = Woman

const xl = new Woman()
// console.log(xl)

Woman.prototype.baby = function () {
  console.log('我会生孩子')
}
console.log(xl)
console.log(zs)  // 张三没有baby方法了
~~~

## 深浅拷贝

### 1、浅拷贝

浅拷贝：把对象拷贝给一个新的对象，开发中我们经常需要复制一个对象

如果直接赋值，则复制的是地址，修改任何一个对象，另一个对象都会变化

常见方法：

- 拷贝对象：`Object.assgin()` / 展开运算符 `{...obj}` 拷贝对象
- 拷贝数组：`Array.prototype.concat()` 或者 `[...arr]`

~~~js
// 1、对象拷贝
const obj = {
  name: '佩奇'
}

// Object.assign()
const newObj = {}
Object.assign(newObj, obj)
// console.log(newObj)
console.log(newObj === obj)  // false
newObj.name = '乔治'
console.log(obj)
console.log(newObj)

// 展开运算符
const newObj = { ...obj }
console.log(newObj === obj)  // false
newObj.name = '乔治'
console.log(obj)
console.log(newObj)


// 2、数组拷贝
const arr = ['佩奇', '乔治']
// 2.1 concat 方法实现数组浅拷贝
const arr1 = []
const newArr = arr1.concat(arr)
console.log(newArr)
newArr[1] = '猪爸爸'
console.log(arr)
console.log(newArr)

// 2.2 展开运算符
const newArr = [...arr]
console.log(newArr)
newArr[1] = '猪爸爸'
console.log(arr)
console.log(newArr)

// 3、浅拷贝的问题如果遇到多层拷贝还是会影响原来的对象
const obj = {
  name: '佩奇',
  family: {
    father: '猪爸爸'
  }
}
const newObj = { ...obj }
// console.log(newObj)
newObj.family.father = 'dad'
console.log(newObj)
console.log(obj)
~~~

> :warning: 注：
>
> - 如果是基本数据类型拷贝值
> - 如果是引用数据类型拷贝的是地址
> - 简单理解：如果是单层对象，没问题，如果有多层就有问题，还是会影响原来对象
>

### 2、深拷贝

深拷贝：拷贝多层，不再拷贝地址

常见方法：

- 通过 JSON 序列化实现
- lodash 库实现
- 通过递归实现

#### 1）、通过 JSON 序列化实现

`JSON.stringify()` 序列化为 JSON 字符串，然后再 `JSON.parse()` 转回对象格式

~~~js

// 深拷贝实现方式一：JSON序列化（常用的方式）
const obj = {
  name: '佩奇',
  family: {
    father: '猪爸爸'
  },
  hobby: ['跳泥坑', '唱歌']
}

console.log(JSON.stringify(obj))
console.log(JSON.parse(JSON.stringify(obj)))
const newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj === obj)  // false
newObj.family.father = 'dad'
console.log(obj)
console.log(newObj)

// 注意事项：JSON.stringify序列化的时候会忽略 function undefined
const obj = {
  name: '佩奇',
  love: undefined,
  family: {
    father: '猪爸爸'
  },
  hobby: ['跳泥坑', '唱歌'],
  sayHi() {
    console.log('我会唱歌')
  }
}
const newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)
~~~

>缺点：function 或 undefined 等，在序列化过程中会被忽略

####  2）、js 库 lodash 实现深拷贝

官网地址：https://www.lodashjs.com/

~~~html
<body>
  <!-- 引入lodash库 -->
  <script src="./js/lodash.min.js"></script>
  <script>
    const obj = {
      name: '佩奇',
      love: undefined,
      family: {
        father: '猪爸爸'
      },
      hobby: ['跳泥坑', '唱歌'],
      sayHi() {
        console.log('我会唱歌')
      }
    }
    // lodash 库实现
    const newObj = _.cloneDeep(obj)
    // console.log(newObj)
    newObj.family.father = 'dad'
    console.log(obj)
    console.log(newObj)

  </script>
</body>
~~~

#### 3）、通过递归实现深拷贝

递归：所谓递归就是一种函数调用自身的操作

简单理解：函数内部自己调用自己，就是递归，这个函数就是递归函数

递归函数的作用和循环效果类似

由于递归很容易发生“栈溢出”错误（stackoverflow），所以记得添加退出条件 return

~~~js
// 1、利用函数递归打印3句话
let i = 1
function fn() {
  console.log(`我是第${i}句话`)
  if (i >= 3) return
  i++
  fn()  // 递归
}
fn()

// 2、练习：利用递归函数实现 setTimeout 每隔一秒钟输出当前时间
function timer() {
  const time = new Date().toLocaleString()
  console.log(time)  // 输出当前时间
  setTimeout(timer, 1000)  // 函数递归
}
timer()
~~~

深拷贝思路：

- 深拷贝的核心是利用函数递归
- 封装函数，里面先判断拷贝的是数组还是对象
- 然后开始遍历
- 如果属性值是引用数据类型（比如数组或者对象），则再次递归函数
- 如果属性值是基本数据类型，则直接赋值即可

~~~js
// 递归实现深拷贝 - 简版实现对象和数组的拷贝
const obj = {
  name: '佩奇',
  family: {
    father: '猪爸爸'
  },
  hobby: ['跳泥坑', '唱歌'],
}

// 封装深拷贝函数 cloneDeep()
function cloneDeep(oldObj) {
  // 先判断拷贝的是数组还是对象
  const newObj = Array.isArray(oldObj) ? [] : {}

  // 遍历拷贝属性和值
  for (let k in oldObj) {
    // console.log(k)  // k 是属性
    // console.log(oldObj[k])  // oldObj[k] 是属性值
    // 把旧对象的值给新对象的属性
    if (typeof oldObj[k] === 'object') {
      // 如果属性值是引用数据类型，则需要递归再次拷贝
      newObj[k] = cloneDeep(oldObj[k])

    } else {
      // 否则属性值是基本数据类型，则直接赋值即可
      newObj[k] = oldObj[k]
    }
  }

  // 返回新对象
  return newObj
}
const newObj = cloneDeep(obj)
newObj.family.father = 'dad'
console.log(newObj)
console.log(obj)
~~~

## 异常处理

### 1、throw

异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运

- `throw` 抛出异常信息，程序也会终止执行
- `throw` 后面跟的是错误提示信息
- `Error` 对象配合 `throw` 使用，能够设置更详细的错误信息

```js
function counter(x, y) {
  if(!x || !y) {
    // throw '参数不能为空!';
    throw new Error('参数不能为空!')
  }
  return x + y
}
counter()
```

### 2、try ... catch

- `try...catch` 用于捕获错误信息
- 将预估可能发生错误的代码写在 `try` 代码段中
- 如果 `try` 代码段中出现错误后，会执行 `catch` 代码段，并截获到错误信息

```js
function foo() {
  try {
    // 查找 DOM 节点
    const p = document.querySelector('.p')
    p.style.color = 'red'
  } catch (error) {
    // try 代码段中执行有错误时，会执行 catch 代码段
    // 查看错误信息
    console.log(error.message)
    // 终止代码继续执行
    return

  }
  finally {
      alert('执行')
  }
  console.log('如果出现错误，我的语句不会执行')
}
foo()
```


### 3、debugger

相当于断点调试

## 处理this

### 1、改变this

 JavaScript 中允许指定（改变）函数中 this 的指向，有 3 个方法可以动态指定普通函数中 this 的指向

- call()
- apply()
- bind()

#### 1）、call

使用 `call` 方法调用函数，同时指定函数中 `this` 的值

- `call` 方法能够在调用函数的同时指定 `this` 的值
- 使用 `call` 方法调用函数时，第1个参数为 `this` 指定的值
- `call` 方法的其余参数会依次自动传入函数做为函数的参数

```js
// 1、改变this指向 - call 
const obj = { name: '佩奇' }

// call() 作用： 第一个调用函数  第二改变this指向
function fun(x, y) {
  console.log(this)
  // console.log(x + y)
  return x + y
}
fun()  // this 指向 window
fun.call(obj)  //  this 指向 obj 对象
fun.call(obj, 1, 2)  //  this 指向 obj 对象
console.log(fun.call(obj, 1, 2))  // 返回值就是函数 返回值


// 2、call的应用场景 - 检测数据类型
// 2.1 typeof 检测数据类型不够精确的
console.log(typeof '123') // string
console.log(typeof []) // object
console.log(typeof null) // object

// 2.2 Object.prototype.toString()  返回的结果是[object xxx类型]
// console.log(Object.prototype.toString('123')) //  [object Object]
console.log(Object.prototype.toString.call('123'))  // [object String]
console.log(Object.prototype.toString.call(123))  // [object Number]
console.log(Object.prototype.toString.call([]))  // [object Array]
console.log(Object.prototype.toString.call(null))  // [object Null]
```

#### 2）、apply

使用 `call` 方法**调用函数**，同时指定函数中 `this` 的值

- `apply` 方法能够在调用函数的同时指定 `this` 的值
- 使用 `apply` 方法调用函数时，第1个参数为 `this` 指定的值
- `apply` 方法第2个参数为数组，数组的单元值依次自动传入函数做为函数的参数

```html
<body>
  <script>
    // 改变this指向apply 
    // 1. 基本使用
    const obj = { name: '佩奇' }
    function fun(x, y) {
      console.log(this)
      console.log(x + y)
    }
    fun()
    // fun.apply()  // 1. 作用1调用函数
    // fun.apply(obj)  // 2. 作用2 改变this指向 obj
    fun.apply(obj, [1, 2])  // 参数必须是数组

    // 2. 使用场景- 求数组的最大值/最小值
    console.log(Math.max(...[1, 2, 3]))  // 3

    // apply 或者 call 如果不需要改变this指向 写 null 
    console.log(Math.max.apply(null, [8, 2, 3]))  // 8
    console.log(Math.min.apply(null, [8, 2, 3]))  // 2

  </script>
</body>
```

#### 3）、bind

`bind` 方法并**不会调用函数**，而是创建一个指定了 `this` 值的新函数

```html
<body>
  <button class="code">发送验证码</button>
  <script>
    const obj = { name: '佩奇' }
    //改变this指向-bind方法
    // 1. 基本使用
    function fun(x, y, z) {
      console.log(this)
      console.log(x + y + z)
    }
    // fun()
    // fun.bind()  // bind不会调用函数
    // const fn = fun.bind()  // 返回的是对原来函数的拷贝
    // console.log(fn)
    // console.log(fn === fun)  // false

    // const fn = fun.bind(obj)  // bind 可以改变this指向
    const fn = fun.bind(obj, 1, 2, 3)  // 


    fn()  // 调用函数


    // 2. 使用场景 - 不需要调用函数，但是又想改变函数内部的this指向

    // 1. 发送短信5秒倒计时业务
    const codeBtn = document.querySelector('.code')
    let flag = true  // 开关变量，用来防止多次点击
    codeBtn.addEventListener('click', function () {
      if (flag) {
        // 1.2 利用定时器做倒计时效果 setInterval 
        let i = 5
        // 点击之后立马变化文字
        this.innerHTML = `05秒后重新获取`
        // 定时器
        let timerId = setInterval(function () {
          i--
          this.innerHTML = `0${i}秒后重新获取`

          // 1.3 时间到了 就显示文字为 重新获取
          if (i === 0) {
            this.innerHTML = `重新获取`
            // 停止定时器
            clearInterval(timerId)
            flag = true
          }
        }.bind(this), 1000)
        // 关闭开关 
        flag = false
      }
    })
  </script>
</body>
```

注：`bind` 方法创建新的函数，与原函数的唯一的变化是改变了 `this` 的值。

| 方法  | 相同点       | 传递参数                    | 是否调用函数 | 使用场景                                       |
| ----- | ------------ | --------------------------- | ------------ | ---------------------------------------------- |
| call  | 改变this指向 | 传递参数列表  arg1, arg2... | 调用函数     | Object.prototype.toString.call()  检测数据类型 |
| apply | 改变this指向 | 参数是数组                  | 调用函数     | 跟数组相关，比如求数组最大值和最小值等         |
| bind  | 改变this指向 | 传递参数列表  arg1, arg2... | 不调用函数   | 改变定时器内部的this指向                       |

### 2、this 指向

this的取值 不取决于函数的定义，而是取决于怎么调用的（this指向调用者）

- 全局内调用： fn()  指向 window
- 对象内的方法调用：obj.fn()  指向调用对象
- 构造函数调用：newPerson()   指向实例对象
- 事件处理函数中调用：指向当前触发事件的DOM元素
- 特殊调用 比如 call、apply、bind可以改变this指向，fun.call(obj)    指向 obj

~~~js
// this指向总结
// 1、普通函数
// 1.1 全局内调用
function fn() {
  console.log(this)  // window
}
fn()

// 1.2 对象内调用
const obj = {
  name: '佩奇',
  sayHi() {
    console.log(this)  // obj
  }
}
obj.sayHi()

// 1.3 构造函数内this
function Person() {
  this.name = name
  console.log(this)
}
const zs = new Person()

// 1.4 事件处理函数中的this
document.querySelector('button').addEventListener('click', function () {
  console.log(this)
})

// 1.5 特殊调用 call、apply、bind 可以改变 this 指向
const o = { name: '佩奇' }
function fun() {
  console.log(this)
}
fun.call(o)


// 2、箭头函数 没有this，是沿用上一级作用域的 this
~~~

## 性能优化

### 1、防抖（debounce）

防抖: 单位时间内，频繁触发事件，只执行最后一次

举个栗子：王者荣耀回城，只要被打断就需要重新来

使用场景：

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>利用防抖实现性能优化</title>
  <style>
    .box {
      width: 500px;
      height: 500px;
      background-color: #ccc;
      color: #fff;
      text-align: center;
      font-size: 100px;
    }
  </style>
</head>

<body>
  <div class="box"></div>
  <script src="./js/lodash.min.js"></script>
  <script>
    // 利用防抖实现性能优化
    //需求： 鼠标在盒子上移动，里面的数字就会变化 + 1
    const box = document.querySelector('.box')
    let i = 1
    function mouseMove() {
      box.innerHTML = i++
      // 如果里面存在大量消耗性能的代码，比如dom操作，比如数据处理，可能造成卡顿
    }
    // 添加事件
    // box.addEventListener('mousemove', mouseMove)

    // 利用lodash库实现防抖 - 500毫秒之后采取+1
    // 语法: _.debounce(fun, 时间)
    box.addEventListener('mousemove', _.debounce(mouseMove, 500))
  </script>
</body>

</html>
~~~

#### 手写防抖函数

核心思路：防抖的核心就是利用定时器（setTimeout）来实现

- 声明一个定时器变量 

- 当鼠标每次滑动都先判断是否有定时器了，如果有定时器先清除以前的定时器

- 如果没有定时器则开启定时器，记得存到变量里面

- 在定时器里面调用要执行的函数


~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>防抖函数实现</title>
  <style>
    .box {
      width: 500px;
      height: 500px;
      background-color: #ccc;
      color: #fff;
      text-align: center;
      font-size: 100px;
    }
  </style>
</head>

<body>
  <div class="box"></div>
  <script src="./js/lodash.min.js"></script>
  <script>
    // 利用防抖实现性能优化
    //需求： 鼠标在盒子上移动，里面的数字就会变化 + 1
    const box = document.querySelector('.box')
    let i = 1
    function mouseMove() {
      box.innerHTML = i++
      // 如果里面存在大量消耗性能的代码，比如dom操作，比如数据处理，可能造成卡顿
    }
    // box.addEventListener('mousemove', _.debounce(mouseMove, 500))

    // 手写防抖函数
    // 核心是利用 setTimeout定时器来实现
    // 1. 声明定时器变量
    // 2. 每次鼠标移动（事件触发）的时候都要先判断是否有定时器，如果有先清除以前的定时器
    // 3. 如果没有定时器，则开启定时器，存入到定时器变量里面
    // 4. 定时器里面写函数调用
    function debounce(fn, t) {
      let timer
      // return 返回一个匿名函数
      return function () {
        // 2.3.4
        if (timer) clearTimeout(timer)
        timer = setTimeout(function () {
          fn()  // 加小括号调用 fn函数
        }, t)
      }
    }
    box.addEventListener('mousemove', debounce(mouseMove, 500))

    //  debounce(mouseMove, 500)  // 调用函数
    // debounce(mouseMove, 500)  = function () { 2.3.4}
  </script>
</body>

</html>
~~~

### 2、节流（throttle）

节流：单位时间内，频繁触发事件，只执行一次

举个栗子：

- 王者荣耀技能冷却，期间无法继续释放技能
- 和平精英 98k 换子弹期间不能射击

使用场景：

- 高频事件:鼠标移动 mousemove、页面尺寸缩放 resize、滚动条滚动 scroll 等等

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>利用防抖实现性能优化</title>
  <style>
    .box {
      width: 500px;
      height: 500px;
      background-color: #ccc;
      color: #fff;
      text-align: center;
      font-size: 100px;
    }
  </style>
</head>

<body>
  <div class="box"></div>
  <script src="./js/lodash.min.js"></script>
  <script>
    // 利用节流实现性能优化
    //需求： 鼠标在盒子上移动，里面的数字就会变化 + 1
    const box = document.querySelector('.box')
    let i = 1
    function mouseMove() {
      box.innerHTML = i++
      // 如果里面存在大量消耗性能的代码，比如dom操作，比如数据处理，可能造成卡顿
    }
    // box.addEventListener('mousemove', mouseMove)

    // 利用lodash库实现节流 - 500毫秒之后采取+1
    // 语法: _.throttle(fun, 时间)
    box.addEventListener('mousemove', _.throttle(mouseMove, 3000))

  </script>
</body>

</html>
~~~

#### 手写节流函数

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>利用节流实现性能优化</title>
  <style>
    .box {
      width: 500px;
      height: 500px;
      background-color: #ccc;
      color: #fff;
      text-align: center;
      font-size: 100px;
    }
  </style>
</head>

<body>
  <div class="box"></div>
  <script src="./js/lodash.min.js"></script>
  <script>
    // 利用节流实现性能优化
    //需求： 鼠标在盒子上移动，里面的数字就会变化 + 1
    const box = document.querySelector('.box')
    let i = 1
    function mouseMove() {
      box.innerHTML = i++
      // 如果里面存在大量消耗性能的代码，比如dom操作，比如数据处理，可能造成卡顿
    }
    // box.addEventListener('mousemove', mouseMove)

    // 利用lodash库实现节流 -
    // 语法: _.throttle(fun, 时间)
    // box.addEventListener('mousemove', _.throttle(mouseMove, 3000))

    // 手写一个节流函数- 每隔 500ms + 1

    // 节流的核心就是利用定时器(setTimeout) 来实现
    // 1.声明一个定时器变量
    // 2.当鼠标每次滑动都先判断是否有定时器了，如果有定时器则不开启新定时器
    // 3.如果没有定时器则开启定时器，记得存到变量里面
    // 3.1定时器里面调用执行的函数
    // 3.2定时器里面要把定时器清空
    function throttle(fn, t) {
      let timer = null
      return function () {
        if (!timer) {
          timer = setTimeout(function () {
            fn()
            // 清空定时器
            timer = null
          }, t)
        }
      }
    }

    box.addEventListener('mousemove', throttle(mouseMove, 3000))


  </script>
</body>

</html>
~~~

| 性能优化 | 说明                                     | 使用场景                                                     |
| -------- | ---------------------------------------- | ------------------------------------------------------------ |
| 防抖     | 单位时间内，频繁触发事件，只执行最后一次 | 搜索框搜索输入、手机号、邮箱验证输入检测                     |
| 节流     | 单位时间内，频繁触发事件，只执行一次     | 高频事件:鼠标移动 mousemove、页面尺寸缩放 resize、滚动条滚动scroll 等等 |







