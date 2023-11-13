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

- 优点：**易维护、易复用、易扩展**，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统更加灵活、更加易于维护

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

作用：原型链为**对象成员**查找机制提供一个方向，或者说一条路线

![原型链2](/images/原型链2.png)

查找规则：

- 当访问一个对象成员（属性/方法）时，首先查找这个<font color="red">对象自身</font>有没有该成员（属性/方法）
- 如果没有就查找它的原型对象（也就是 `__proto__` 指向的 <font color="red">prototype 原型对象</font>）
- 如果还没有就查找原型对象的原型对象（<font color="red">Object 的原型对象</font>）
- 依此类推一直找到 Object 为止（<font color="red">null</font>）
- 原型链就在于为对象成员查找机制提供一个方向，或者说一条路线

```js
function Person(name) {
  this.name = name
}

Object.prototype.sayHi = function () {
  console.log('Object 的 sayHi')
}
const zs = new Person('张三')
zs.sayHi()  // Object 的 sayHi

console.log(zs.__proto__ === Person.prototype)  // true
console.log(Person.prototype.__proto__ === Obeject.prototype)  // true
console.log(Object.prototype.__proto__)  // null
```

#### 1）、instanceof 运算符

用来<font color="red">检测构造函数的原型对象 `.prototype`</font> 是否存在于<font color="red">实例对象</font>的原型链上

语法：`实例对象 instanceof 构造函数`，返回的是布尔值

~~~js
// 简单理解（不准确）：是指当前对象是不是构造函数的实例对象
function Person(name) {
  this.name = name
}
function Person1(name) {
  this.name = name
}
const zs = new Person('张三')
console.log(zs instanceof Person)  // true
console.log(zs instanceof Person1)  // false


// 判断变量的类型，typeof 判断基本数据类型，判断引用数据类型结果都是 Object，无法精确判断
const arr = 123
console.log(typeof arr === 'number')  // true
console.log(typeof [])  // Object

const arr = [1, 2, 3]
console.log(arr instanceof Array)  //  true
console.log(arr instanceof Object)  //  true


// 理解原理：判断构造函数的原型对象是否在实例对象的原型链上
// 通俗理解为，当前的对象是否是构造函数原型底下的孩子
console.log(zs instanceof Object)  //  true

console.log(arr)  // __proto__
console.log(arr.__proto__ === Array.prototype)  // true
console.log(Array.prototype.__proto__ === Object.prototype)  // true
~~~

:warning: 注：instanceof 一般可用于判断具体的引用数据类型，比 typeof 更准确，typeof 一般只用于判断基本数据类型

### 5、原型继承

继承是面向对象编程的另一个特征。龙生龙、凤生凤、老鼠的儿子会打洞描述的正是继承的含义

有些公共的**属性和方法**可以写到**父级**身上，**子级**通过**继承**也可以**使用**这些属性和方法

JavaScript 中大多是借助<font color="red">原型对象实现继承</font>的特性

#### 1）、字面量对象继承

```js
// 不要用字面量创建对象后赋值给原型，因为多个构造函数的原型对象指向同一个对象，会导致修改时都修改，应该每个构造函数的原型对象各自独立
const person = {
  eyes: 2,
  eat() {
    console.log('我会吃饭')
  }
}
function Man() {}
function Woman() {}

Man.prototype = person
Woman.prototype = person
Woman.prototype.baby = function(){
  console.log('我会生孩子')
}

const m1 = new Man()
m1.eat()
m1.baby()  // 我会生孩子，也能调用 baby 方法
const w1 = new Woman()
w1.eat()
w1.baby()  // 我会生孩子
```

问题：如果给女人添加一个 baby 方法，男人也会自动增加

原因：男人和女人都同时使用了同一个对象，根据引用类型的特点，他们指向同一个对象，修改一个就会都影响（**对象不独立**）

![原型继承1](/images/原型继承1.png)

缺点：

- 使用同一个对象，修改任何一个都会影响其他
- 对象不独立的问题

#### 2）、构造函数实例化对象继承

解决： 构造函数实例化对象继承，因为 new 每次都会创建一个新的对象

![原型继承2](/images/原型继承2.png)

~~~js
function Man() {}
function Woman() {}

// 1、抽取封装 - 公共的属性和方法
function Person() {
  this.eyes = 2
}
Person.prototype.eat = function () {
  console.log('我会吃饭')
}

// 2、继承 - 借助于原型对象
Man.prototype = new Person()
Man.prototype.constructor = Man  // 因为对象覆盖了原型对象，所以在把 constructor 指回当前构造函数
Woman.prototype = new Person()
Woman.prototype.constructor = Woman

Woman.prototype.baby = function () {
  console.log('我会生孩子')
}

const m1 = new Man()
m1.eat()
const w1 = new Woman()
w1.eat()
w1.baby()
~~~

总结：

- 创建父级构造函数
- 将所有公共的方法放到父级的原型对象上
- 将子级构造函数的原型对象指向父级构造函数创建的实例对象

![原型继承3](/images/原型继承3.png)

### 3）、拓展 - 面试题

```js
function Foo() {
  getName = function () {
    alert(1)
  }
  return this  // this 指向 window
}

Foo.getName = function () {
  alert(2)
}

Foo.prototype.getName = function () {
  alert(3)
}

var getName = function () {
  alert(4)
}

function getName() {
  alert(5)
}

Foo.getName()  // 2
getName()  // 4
Foo().getName()  // 1  过程：window.getName()，5=>4=>1
getName()  // 1
new Foo().getName()  // 3
```

## 深浅拷贝

### 1、浅拷贝

浅拷贝：把对象拷贝给一个<font color="red">新的</font>对象，开发中我们经常需要<font color="red">复制</font>一个对象

如果<font color="red">直接赋值</font>，则复制的是<font color="red">地址</font>，修改任何一个对象，另一个对象都会变化

![浅拷贝1](/images/浅拷贝1.png)

   ![浅拷贝2](/images/浅拷贝2.png)                                                                               

**常见方法：**

- 拷贝对象

  - `Object.assgin()`

  - 展开运算符 `{...obj}`

- 拷贝数组

  - `Array.prototype.concat()` 

  - `[...arr]`

~~~js
// 拷贝对象
const obj = {
  name: '呆呆'
}

// 方法1
const newObj = {}
Object.assign(newObj, obj)  // 或者写成：const newObj = Object.assign({}, obj)
// 方法2
const newObj = { ...obj }

console.log(newObj === obj)  // false
newObj.name = '朱朱'
console.log(obj)  // { name: '呆呆' }
console.log(newObj)  // { name: '朱朱' }
~~~

```js
// 拷贝数组
const arr = ['呆呆', '朱朱']

// 方法1
const arr1 = []
const newArr = arr1.concat(arr)  // const newArr = [].concat(arr)
// 方法2
const newArr = [...arr]

newArr[1] = '朱小呆'
console.log(arr)  // ['呆呆', '朱朱']
console.log(newArr)  // ['呆呆', '朱小呆']
```

**总结**：浅拷贝就是把对象里的属性和值复制一份，放到新对象中存储，新老对象是不同的地址值，所以修改其中一个对象，不会影响另一个对象的属性

```js
// 浅拷贝的问题：如果遇到多层拷贝还是会影响原来的对象
const obj = {
  name: '佩奇',
  family: {
    father: '猪爸爸'
  }
}

const newObj = { ...obj }
// console.log(newObj)

newObj.family.father = 'dad'
console.log(obj)  // 两者的 family.father 是一样的
console.log(newObj)
```

**总结**：浅拷贝就是只拷贝对象第一层的数据，如果全部都是基本数据类型则没有问题，只要有引用数据类型的属性，就会将其地址值复制一份，导致两个对象的属性共用同一个对象

> :warning: 注：
>
> - 如果是基本数据类型，拷贝的是值
> - 如果是引用数据类型，拷贝的是地址
> - 简单理解：如果是单层对象，没问题，如果有多层就有问题，还是会影响原来对象
>

### 2、深拷贝

深拷贝：<font color="red">拷贝多层</font>，不再拷贝地址

**常见方法：**

- 通过 JSON 序列化实现
- lodash 库实现
- 通过递归实现

#### 1）、JSON 序列化

序列化：将对象转成字符串 `JSON.stringify()` 

反序列化：将字符串转成对象 `JSON.parse()` 

`JSON.stringify()` 序列化为 JSON 字符串，然后再 `JSON.parse()` 转回对象格式

~~~js
const obj = {
  name: '佩奇',
  family: {
    father: '猪爸爸'
  },
  hobby: ['跳泥坑', '唱歌']
}

const newObj = JSON.parse(JSON.stringify(obj))

console.log(newObj === obj)  // false
newObj.family.father = 'dad'
console.log(obj)
console.log(newObj)


// 注意事项：JSON.stringify 序列化的时候无法拷贝 function 和 undefined
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
console.log(newObj)  // 丢失了 love 和 sayHi 函数
~~~

>:warning: 缺点：function 或 undefined 等，在序列化过程中会被忽略

####  2）、js 库 lodash里面的 `_.cloneDeep`

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
    
    const newObj = _.cloneDeep(obj)
    // console.log(newObj)
    
    newObj.family.father = 'dad'
    console.log(obj)
    console.log(newObj)
  </script>
</body>
~~~

> :warning: 优点：相较于序列化和反序列化的优势更加完善
>
> 缺点：需要额外引入一个第三方的 js 文件，增加项目体积

#### 3）、递归

递归：所谓递归就是一种<font color="red">函数调用自身</font>的操作

- 简单理解：函数内部<font color="red">自己调用自己</font>，就是递归，这个函数就是递归函数
- 递归函数的作用和<font color="red">循环</font>效果类似

- 由于递归很容易发生“栈溢出”错误（stackoverflow），所以记得添加<font color="red">退出条件 return</font>


~~~js
// 1、打印3句话
let i = 1
function fn() {
  i++
  console.log(`我是第${i}句话`)
  if (i >= 3) return
  fn()  // 递归
}
fn()

// 2、实现 setTimeout 模拟 setInterval 效果，每隔一秒钟输出当前时间
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
// 简版
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

异常处理是指预估代码执行过程中<font color="red">可能发生的错误</font>，然后最大程度的避免错误的发生导致整个程序无法继续运行

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

![异常处理throw](/images/异常处理throw.png)

### 2、try ... catch

- `try...catch` 用于捕获错误信息
- 将预估可能发生错误的代码写在 `try` 代码段中
- 如果 `try` 代码段中出现错误后，会执行 `catch` 代码段，并截获到错误信息
- `finally`  不管是否有错误，<font color="red">都会执行</font>

```js
function foo() {
  try {
    // 可能出现错误的代码
    const p = document.querySelector('.p')  // 查找 DOM 节点
    p.style.color = 'red'
  } catch (error) {
    // try 出现错误会进入 catch 并捕获异常，error：错误参数
    console.log(error.message)  // 查看错误信息
    return  // 终止代码继续执行
  } finally {
    // 不管有没有错误都会进入 finally
    alert('不管有没有错误都会执行')
  }
  console.log('如果出现错误，我的语句不会执行')
}
foo()
```

- **总结**：try 里面的代码有可能会出错，如果出错会进入到 catch，代码不会终止，继续往后执行
- 如果有 finally，则不论成功还是失败都会执行 finally 中的代码
- 错误处理一般广泛运用于网络请求中，因为网络请求是未知的，受多方因素影响，例如：网速、网络稳定、用户中断。。。

### 3、debugger

debugger 语句调用<font color="red">调试功能</font>，例如设置断点

```js
const arr = [1, 3, 5]
const newArr = arr.map((item, index) => {
  debugger
  console.log(item)  // 当前元素
  console.log(index)  // 当前元素索引号
  return item + 10
})
console.log(newArr)  // [11, 13, 15]
```

![异常处理debugger](/images/异常处理debugger.png)

## 处理this

### 1、改变this

 JavaScript 中允许<font color="red">指定（改变）函数中 this 的指向</font>，有 3 个方法可以动态指定普通函数中 this 的指向

- call()
- apply()
- bind()

#### 1）、call

使用 `call` 方法**调用函数**，同时**指定**被调用函数中 **this 的指向**

```js
fun.call(thisArg, arg1, arg2, ...)

* thisArg：在 fun 函数运行时指定的 this 值
* arg1，arg2：传递的其他参数
* 返回值就是函数的返回值，因为它就是调用函数
* 使用场景：Object.prototype.toString.call(数据) —— 检测数据类型
```

- `call` 方法能够在调用函数的同时指定 `this` 的值
- 使用 `call` 方法调用函数时，第 1 个参数为 `this` 指定的值
- `call` 方法的其余参数会依次自动传入函数做为函数的参数

```js
const obj = { name: '呆呆' }
function fun(x, y) {
  console.log(this)
  console.log(x + y)
}

fun(1, 2)  // this => window，fun 是全局的，所以等于是 window.fun()
fun.call(obj)  //  this 指向 obj 对象
fun.call(obj, 1, 2)  // 3
// this 指向 obj 对象，返回值就是函数返回值


// 使用场景 - 检测数据类型
// 1、typeof 检测数据类型不够精确的
console.log(typeof '123') // string
console.log(typeof []) // object
console.log(typeof null) // object

// 2、Object.prototype.toString()  返回的结果是[object xxx类型]
// console.log(Object.prototype.toString('123')) //  [object Object]
console.log(Object.prototype.toString.call('123'))  // [object String]
console.log(Object.prototype.toString.call(123))  // [object Number]
console.log(Object.prototype.toString.call([]))  // [object Array]
console.log(Object.prototype.toString.call(null))  // [object Null]
```

#### 2）、apply

使用 `apply` 方法**调用函数**，同时**指定**被调用函数中 **this 的值**

```js
fun.apply(thisArg, [argsArray])

* thisArg：在 fun 函数运行时指定的 this 值
* argsArray：传递的值，必须包含在数组里面
* 返回值就是函数的返回值，因为它就是调用函数
* 使用场景：apply 主要跟数组有关系，比如使用 Math.max() 求数组的最大值
```

- `apply` 方法能够在调用函数的同时指定 `this` 的值
- 使用 `apply` 方法调用函数时，第 1 个参数为 `this` 指定的值
- `apply` 方法第 2 个参数为数组，数组的单元值依次自动传入函数做为函数的参数

```js
const obj = { name: '呆呆' }
function fun(x, y) {
  console.log(this)
  console.log(x + y)
}

fun(1, 2)
fun.apply()  // 调用函数
fun.apply(obj)  // 改变 this 指向 obj
fun.apply(obj, [1, 2])  // 参数必须是数组


// 使用场景 - 求数组的最大值/最小值
const arr = [8, 2, 3]
console.log(Math.max(...arr))  // 8
// apply 或者 call 如果不需要改变 this 指向写 null 
console.log(Math.max.apply(null, arr))  // 8
console.log(Math.min.apply(null, arr))  // 2
```

**总结**：call 和 apply 的区别

- 都是<font color="red">调用函数</font>，都能<font color="red">改变 this 指向</font>
- 参数不一样，call 是<font color="red">传递参数列表</font>，apply 传递的必须是<font color="red">数组</font>
- call 可以用来检测数据类型，apply 可以求数组最大值

#### 3）、bind

`bind` 方法并**不会调用函数**，而是创建一个指定了 `this` 值的新函数

```js
fun.bind(thisArg, arg1, arg2, ...)
         
* thisArg：在 fun 函数运行时指定的 this 值
* arg1，arg2：传递的其他参数
* 返回由指定的 this 值和初始化参数改造的原函数拷贝（新函数）
* 使用场景：当我们只是想改变 this 指向，并且不想调用这个函数时，可以使用 bind，比如改变定时器内部的 this 指向
```

```js
const obj = { name: '呆呆' }
function fun(x, y, z) {
  console.log(this)
  console.log(x + y + z)
}

// fun()
// fun.bind()  // bind 不会调用函数
// const fn = fun.bind()  // 返回的是对原来函数的拷贝
// console.log(fn)
// console.log(fn === fun)  // false

// const fn = fun.bind(obj)  // bind 可以改变 this 指向
const fn = fun.bind(obj, 1, 2, 3) 
fn()  // 调用函数


// 使用场景
document.querySelector('button').addEventListener('click', function () {
  setTimeout(function() {
    this.color.style = 'red'
  }.bind(this), 3000)  // 没有.bind(this)，setTimeout 中的 this 指向 window
  
  // 箭头函数出来之后，bind 就不用了
  setTimeout(() => {
    this.color.style = 'red'
  }, 3000)
})
```

```html
<body>
  <button class="code">发送验证码</button>
  <script>
    // 使用场景 - 修改定时器内部的 this 指向
    
    // 1、发送短信5秒倒计时业务
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

> :warning: 注：`bind` 方法创建新的函数，与原函数的唯一的变化是改变了 `this` 的值。

#### 4）、总结

| 方法  | 相同点         | 传递参数                    | 是否调用函数 | 使用场景                                       |
| ----- | -------------- | --------------------------- | ------------ | ---------------------------------------------- |
| call  | 改变 this 指向 | 传递参数列表  arg1, arg2... | 调用函数     | Object.prototype.toString.call()  检测数据类型 |
| apply | 改变 this 指向 | 参数是数组                  | 调用函数     | 跟数组相关，比如求数组最大值和最小值等         |
| bind  | 改变 this 指向 | 传递参数列表  arg1, arg2... | 不调用函数   | 改变定时器内部的 this 指向                     |

### 2、this 指向

this的取值不取决于函数的定义，而是取决于怎么<font color="red">调用</font>的（this 指向调用者）

- <font color="red">全局</font>内调用： fn() 指向 window
- <font color="red">对象内的方法</font>调用：obj.fn() 指向调用对象
- <font color="red">构造函数</font>调用：new Person() 指向实例对象
- <font color="red">事件处理函数</font>中调用：指向当前触发事件的 DOM 元素
- <font color="red">特殊调用</font>，比如 call、apply、bind 可以改变 this 指向，fun.call(obj)    指向 obj

~~~js
// this 指向总结
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

// 1.3 构造函数内 this
function Person() {
  this.name = name
  console.log(this) // 新创建的对象
}
const zs = new Person()

// 1.4 事件处理函数中的 this
document.querySelector('button').addEventListener('click', function () {
  console.log(this)  // 事件源
})

// 1.5 特殊调用 call、apply、bind 可以改变 this 指向
const o = { name: '呆呆' }
function fun() {
  console.log(this)  // 人为干预，就看指向的是谁
}
fun.call(o)


// 2、箭头函数：没有this，是沿用上一级作用域的 this
~~~

## 性能优化

### 1、防抖（debounce）

防抖: 单位时间内，频繁触发事件，<font color="red">只执行最后一次</font>

![防抖](/images/防抖.png)

例子：王者荣耀回城，只要被打断就需要重新来

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
  <title>防抖</title>
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
    //需求：鼠标在盒子上移动，鼠标停止500ms之后，里面的数字才会变化+1
    const box = document.querySelector('.box')
    let i = 1
    function mouseMove() {
      box.innerHTML = i++
      // 如果里面存在大量消耗性能的代码，比如 dom 操作，比如数据处理，可能造成卡顿
    }
    // 添加事件
    // box.addEventListener('mousemove', mouseMove)

    // 利用 lodash 库实现防抖 - 500毫秒之后才去+1
    // 语法: _.debounce(fun, 时间)
    box.addEventListener('mousemove', _.debounce(mouseMove, 500))
  </script>
</body>

</html>
~~~

#### 手写防抖函数

核心思路：防抖的核心就是利用定时器（**setTimeout**）来实现

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
  <title>手写防抖函数</title>
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
  <script>
    //需求：鼠标在盒子上移动，鼠标停止500ms之后，里面的数字才会变化+1
    const box = document.querySelector('.box')
    let i = 1
    function mouseMove() {
      box.innerHTML = i++
    }

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
    // debounce(mouseMove, 500)  = function () { 2.3.4 }
  </script>
</body>

</html>
~~~

### 2、节流（throttle）

节流：单位时间内，频繁触发事件，<font color="red">只执行一次</font>

![节流](/images/节流.png)

例子：

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
  <title>节流</title>
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
    // 需求：鼠标在盒子上移动，不管移动多少次，每隔500ms才+1
    const box = document.querySelector('.box')
    let i = 1
    function mouseMove() {
      box.innerHTML = i++
    }

    // 利用 lodash 库实现节流 - 500毫秒之后采取+1
    // 语法: _.throttle(fun, 时间)
    box.addEventListener('mousemove', _.throttle(mouseMove, 3000))

  </script>
</body>

</html>
~~~

#### 手写节流函数

核心思路：节流的核心就是利用定时器（**setTimeout**）来实现

- 声明一个定时器变量

- 当鼠标每次滑动都先判断是否有定时器了，如果有定时器则不开启新定时器

- 如果没有定时器则开启定时器，记得存到变量里面

  - 定时器里面调用执行的函数

  - 定时器里面要把定时器清空

> :warning: 注：在 setTimeout 中是无法删除定时器的，因为定时器还在运作，所以使用 timer = null 而不是 clearTimeout(timer)

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>手写节流函数</title>
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
    // 需求：鼠标在盒子上移动，不管移动多少次，每隔500ms才+1
    const box = document.querySelector('.box')
    let i = 1
    function mouseMove() {
      box.innerHTML = i++
    }

    function throttle(fn, t) {
      let timer = null
      return function () {
        if (!timer) {
          // 开启定时器
          timer = setTimeout(function () {
            fn()
            // 清空 timer 变量
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

### 3、总结

| 性能优化 | 说明                                     | 使用场景                                                     |
| -------- | ---------------------------------------- | ------------------------------------------------------------ |
| 防抖     | 单位时间内，频繁触发事件，只执行最后一次 | 搜索框搜索输入、手机号、邮箱验证输入检测                     |
| 节流     | 单位时间内，频繁触发事件，只执行一次     | 高频事件:鼠标移动 mousemove、页面尺寸缩放 resize、滚动条滚动scroll 等等 |

- 手写防抖函数：只要有定时器就要清除定时器后开启
- 手写节流函数：判断内存中有没有正在开启的定时器，如果有就不能再开了，如果没有才开启定时器，定时器执行时记得清除定时器 id 标识
