# 三、JavaScript

## 1、数据类型（8 种）

| 基本数据类型                                                       | 引用数据类型                     |
| ------------------------------------------------------------------ | -------------------------------- |
| Undefined、Null、Boolean、String、Number、Symbol(ES6)、BigInt(ES6) | Object（包括数组、函数、对象等） |

- Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题
- BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

## 2、堆内存与栈内存

> **在操作系统中，内存被分为栈区和堆区**，栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

在数据结构中，栈中数据的存取方式为先进后出。堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。

数据存储方式

- 基本数据类型的数据直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

![img](https://pic1.zhimg.com/80/v2-71bbddcf6595423403cba9ff0ca58e04_720w.webp)

## 3、数据类型检测

| 优缺点 | typeof                                                        | instanceof                          | constructor                                    | Object.prototype.toString.call        |
| ------ | ------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------- | ------------------------------------- |
| 优点   | 使用简单                                                      | 能检测出引用类型数据                | 基本能检测所有的类型（除了 null 和 undefined） | 检测出所有的类型                      |
| 缺点   | 只能检测出除 null 外的基本数据类型和引用数据类型中的 function | 不能检测出基本类型，且不能跨 iframe | constructor 易被修改，也不能跨 iframe          | IE6 下，undefined 和 null 均为 Object |

## 4、判断数组的方式

- Object.prototype.toString.call([1, 2, 3]) // [object Array]
- 通过 ES6 的 Array.isArray([1, 2, 3])做判断 // true or false
- [1, 2, 3] instanceof Array // true or false
- Array.prototype.isPrototypeOf([1, 2, 3]) // true or false
- 通过原型链去判断：[1, 2, 3].**proto** === Array.prototype

## 5、Undefined 与 Null

- Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null
- undefined 代表的含义是**未定义**，null 代表的含义是**空对象**。一般变量声明了但还没有定义的时候会返回 undefined，null 主要用于赋值给一些可能会返回对象的变量，作为初始化
- undefined 在 JavaScript 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 undefined 值的判断。我们可以通过一些方法获得安全的 undefined 值，比如说 void 0
- typeof null 的返回值为 object，且 undefined == null 返回 true

## 6、this 的指向问题

> this`是一个在运行时才进行绑定的引用`，在不同的情况下它可能会被绑定不同的对象

**this 永远指向最后调用它的那个对象**

- 函数调用模式：当一个函数不是一个对象的属性，直接作为函数来调用时，this 指向全局对象
- 方法调用模式：当一个函数作为一个对象的方法来调用时，this 指向这个对象
- 构造器调用模式：如果一个函数使用 new 调用时，函数在执行前会创建一个新的对象，this 就指向这个新的对象

> 如何改变 this 的指向？

- 使用 ES6 箭头函数，箭头函数不绑定 this，箭头函数的 this 使用指向函数定义时的 this
- 在函数内部定义一个变量\_this 保存 this
- 使用 apply、call、bind
- new 实例化一个对象

> this 绑定的优先级：new 绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级

## 7、apply、bind 和 call

> apply、bind 和 call 都可以改变 this 的指向

### apply(thisArg[, argsArray])

> `apply()` 方法调用一个具有给定 `this` 值的函数，以及以一个数组（或一个[类数组对象](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections%23working_with_array-like_objects)）的形式提供的参数

thisArg: 在函数运行时使用的 `this` 值。请注意，`this` 可能不是该方法看到的实际值：如果这个函数处于[非严格模式](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，则指定为 `null` 或 `undefined` 时会自动替换为指向全局对象，原始值会被包装

argsArray: 可选。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 函数。如果该参数的值为 `null` 或 `undefined`，则表示不需要传入任何参数

返回值：调用有指定 **`this`** 值和参数的函数的结果

```js
const numbers = [1, 3, 2, 5, 7, 4];
const max = Math.max.apply(null, numbers); // 7
const min = Math.max.apply(null, numbers); // 1
```

### call(thisArg[, arg1[, arg2[, ...]]])

> **`call()`** 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数
> 该方法的语法和作用与 `apply()` 方法类似，只有一个区别，就是 `call()` 方法接受的是**一个参数列表**，而 `apply()` 方法接受的是**一个包含多个参数的数组**

thisArg: 在函数运行时使用的 `this` 值。请注意，`this` 可能不是该方法看到的实际值：如果这个函数处于[非严格模式](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，则指定为 `null` 或 `undefined` 时会自动替换为指向全局对象，原始值会被包装

arg1, arg2, ...：指定的参数列表

返回值：调用有指定 **`this`** 值和参数的函数的结果

### bind(thisArg[, arg1[, arg2[, ...]]])

> **`bind()`** 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用（bind 是创建一个新的函数，我们必须要手动去调用）

thisArg: 调用绑定函数时作为 `this` 参数传递给目标函数的值。如果使用 `new` 运算符构造绑定函数，则忽略该值。当使用 `bind` 在 `setTimeout` 中创建一个函数（作为回调提供）时，作为 `thisArg` 传递的任何原始值都将转换为 `object`。如果 `bind` 函数的参数列表为空，或者`thisArg` 是 `null` 或 `undefined` ，执行作用域的 `this` 将被视为新函数的 `thisArg`

arg1, arg2, ...: 指定的参数列表

返回值：返回一个原函数的拷贝，并拥有指定的 **`this`** 值和初始参数

## 8、伪数组（类数组）

> 一个拥有 length 属性和若干索引属性的对象可以被成为类数组对象，类数组对象和数组类似，但不能调用数组的方法
> 常见的类数组对象：arguments 和 DOM 方法的返回结果，还有**一个函数**也可以被看作是类数组对象，因为它含有 length 属性值，代表可接收的参数个数

## 9、类数组如何转换为数组

- 通过 call 方法调用数组的 slice 方法

```js
Array.prototype.slice.call(arrayLike);
```

- 通过 call 方法调用数组的 splice 方法

```js
Array.prototype.splice.call(arrayLike, 0);
```

- 通过 apply 调用数组的 concat 方法

```js
Array.prototype.concat.apply([], arrayLike);
```

- 通过 Array.from 方法

```js
Array.from(arrayLike);
```

- 通过展开运算符

```js
const array = [...arrayLike];
```

## 10、如何遍历类数组

> `arguments`是一个对象，它的属性是从 0 开始依次递增的数字，还有`callee`和`length`等属性，与数组相似；但是它却没有数组常见的方法属性，如`forEach`, `reduce`等，所以叫它们类数组

- 使用 call 或 apply 方法

```js
function sum() {
    Array.prototype.forEach.call(arguements, a => { console.log(a) })
}

function sum() {
    Array.prototype.forEach.apply(arguements, [a => { console.log(a)] })
}
```

- 使用 Array.from 方法将类数组转化成数组

```js
function sum() {
  const args = Array.from(arguements);
  args.forEach((a) => {
    console.log(a);
  });
}
```

- 使用展开运算符将类数组转成数组

```js
function sum() {
  const args = [...arguements];
  args.forEach((a) => {
    console.log(a);
  });
}
```

## 11、for...in 与 for...of

| 区别     | for...in                                     | for...of                         |
| -------- | -------------------------------------------- | -------------------------------- |
| 遍历对象 | 对象的键名，会遍历整个原型链，性能差         | 对象的键值，只遍历当前对象       |
| 遍历数组 | 返回数组中所有可枚举属性，包括原型链上的属性 | 只返回对应数组的下标对应的属性值 |

> for...in 循环主要是为了遍历对象，不适用于遍历数组，for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象

## 12、ajax

> **AJAX** Ajax 即“AsynchronousJavascriptAndXML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。它是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。其缺点如下：

- 本身是针对 MVC 编程，不符合前端 MVVM 的浪潮
- 基于原生 XHR 开发，XHR 本身的架构不清晰
- 不符合关注分离（Separation of Concerns）的原则
- 配置和调用方式非常混乱，而且基于事件的异步模型不友好

## 13、fetch

> **Fetch** fetch 号称是 AJAX 的替代品，是在 ES6 出现的，使用了 ES6 中的 promise 对象。Fetch 是基于 promise 设计的。Fetch 的代码结构比起 ajax 简单多。**fetch 不是 ajax 的进一步封装，而是原生 js，没有使用 XMLHttpRequest 对象**

| 优点                                           | 缺点                                                                                                                                                       |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 语法简洁，更加语义化                           | fetch 只对网络请求报错，对 400，500 都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。 |
| 基于标准 Promise 实现，支持 async/await        | fetch 默认不会带 cookie，需要添加配置项： fetch(url, {credentials: 'include'})                                                                             |
| 更加底层，提供的 API 丰富（request, response） | fetch 不支持 abort，不支持超时控制，使用 setTimeout 及 Promise.reject 的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费                   |
| 脱离了 XHR，是 ES 规范里新的实现方式           | fetch 没有办法原生监测请求的进度，而 XHR 可以                                                                                                              |

## 14、axios

> Axios 是一种基于 Promise 封装的 HTTP 客户端

- 浏览器端发起 XMLHttpRequests 请求
- node 端发起 http 请求
- 支持 Promise API
- 监听请求和返回
- 对请求和返回进行转化
- 取消请求
- 自动转换 json 数据
- 客户端支持抵御 XSRF 攻击

## 15、数组的遍历方法

| 方法        | 改变原数组 | 特点                                                                                                                             |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| forEach     | 否         | 无返回值                                                                                                                         |
| map         | 否         | 返回新数组，可链式调用                                                                                                           |
| filter      | 否         | 过滤数组，返回包含符合条件的元素的数组，可链式调用                                                                               |
| for...of    | 否         | for...of 遍历具有 Iterator 迭代器的对象的属性，返回的是数组的元素、对象的属性值，不能遍历普通的 obj 对象，将异步循环变成同步循环 |
| every       | 否         | 遍历的数组里的元素全部符合条件时，返回 true                                                                                      |
| some        | 否         | 遍历的数组里的元素至少有一个符合条件时，返回 true                                                                                |
| find        | 否         | 返回第一个符合条件的值                                                                                                           |
| findIndex   | 否         | 返回第一个返回条件的值的索引值                                                                                                   |
| reduce      | 否         | 对数组正序操作                                                                                                                   |
| reduceRight | 否         | 对数组逆序操作                                                                                                                   |

## 16、深拷贝

> 深拷贝是将一个对象从内存中完整的拷贝一份出来，从堆内存中开辟一个新的区域存放新对象（新旧对象不共享同一块内存），且**修改新对象不会影响原来的对象**（深拷贝采用了在堆内存中申请新的空间来存储数据，这样每个可以避免指针悬挂）

实现方式如下：

### JSON.parse(JSON.stringify())

> 这也是利用 JSON.stringify 将对象转成 JSON 字符串，再用 JSON.parse 把字符串解析成对象，一去一来，新的对象产生了，而且对象会开辟新的栈，实现深拷贝。**这种方法虽然可以实现数组或对象深拷贝,但不能处理函数和正则**，因为这两者基于 JSON.stringify 和 JSON.parse 处理后，得到的正则就不再是正则（变为空对象），得到的函数就不再是函数（变为 null）了

### lodash 的\_.cloneDeep

> 需要安装 lodash

### jQuery.extend()

### 手写递归循环

> 递归方法实现深度克隆原理：**遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝**

```js
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
```

## 17、浅拷贝

> 浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以**如果其中一个对象改变了这个地址，就会影响到另一个对象**

实现方式如下：

### Object.assign()

> Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象

```js
let obj1 = { person: { name: "kobe", age: 41 }, sports: "basketball" };
let obj2 = Object.assign({}, obj1);
obj2.person.name = "wade";
obj2.sports = "football";
console.log(obj1); // { person: { name: 'wade', age: 41 }, sports: 'basketball' }
```

### lodash 的\_.clone

> 需要安装 lodash

### 展开运算符

> 展开运算符是一个 es6 / es2015 特性，它提供了一种非常方便的方式来执行浅拷贝，这与 Object.assign ()的功能相同

```js
let obj1 = { name: "Kobe", address: { x: 100, y: 100 } };
let obj2 = { ...obj1 };
obj1.address.x = 200;
obj1.name = "wade";
console.log("obj2", obj2); // obj2 { name: 'Kobe', address: { x: 200, y: 100 } }
```

### Array.prototype.concat()

```js
let arr = [
  1,
  3,
  {
    username: "kobe",
  },
];
let arr2 = arr.concat();
arr2[2].username = "wade";
console.log(arr); //[ 1, 3, { username: 'wade' } ]
```

### Array.prototype.slice()

```js
let arr = [
  1,
  3,
  {
    username: " kobe",
  },
];
let arr3 = arr.slice();
arr3[2].username = "wade";
console.log(arr); // [ 1, 3, { username: 'wade' } ]
```

## 18、赋值与深/浅拷贝的区别

> 对于引用数据类型

| 赋值                                                                                                                                                                                                       | 深拷贝                                                                                          | 浅拷贝                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。 | 从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。 | 重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存，会相互影响。 |

|        | 和原数据是否指向同一对象 | 第一层数据为基本数据类型且修改基本类型数据时 | 原数据中包含子对象且修改子对象时 |
| ------ | ------------------------ | -------------------------------------------- | -------------------------------- |
| 赋值   | 是                       | 改变会使原数据一起改变                       | 改变会使原数据一起改变           |
| 深拷贝 | 否                       | 改变不会使原数据一起改变                     | 改变不会使原数据一起改变         |
| 浅拷贝 | 否                       | 改变不会使原数据一起改变                     | 改变会使原数据一起改变           |

## 19、forEach 如何跳出循环

> forEach 是不能通过`break`或者`return`来实现跳出循环的，forEach 的回调函数形成了一个作用域，在里面使用`return`并不会跳出，只会被当做`continue`

实现方法：try...catch

```js
function getItemById(arr, id) {
  var item = null;
  try {
    arr.forEach(function (curItem, i) {
      if (curItem.id == id) {
        item = curItem;
        throw Error();
      }
    });
  } catch (e) {}
  return item;
}
```

## 20、闭包

> 闭包是指有权访问另一个函数作用域中的变量的**函数**
> 闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成

### 用途

- 使我们在函数外部能够访问到函数内部的变量。通过使用闭包，可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来**创建私有变量**
- 使已经运行结束的函数上下文中的**变量对象继续留在内存中**，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收

### 使用场景

- `return` 回一个函数
- 函数作为参数
- 自动执行函数
- 循环赋值
- 回调函数
- 节流防抖
- 函数柯里化

### 执行过程

1. 形成私有上下文
2. 进栈执行
3. 开始一系列操作
4. 初始化作用域链（两头<当前作用域，上级作用域>）
5. 初始化 this
6. 初始化 arguments
7. 赋值形参
8. 变量提升
9. 代码执行
10. 正常情况下，代码执行完成之后，私有上下文出栈被回收。但是遇到特殊情况，如果当前私有上下文执行完成之后中的某个东西被执行上下文以外的东西占用，则当前私有上下文就不会出栈释放，也就是形成了不被销毁的上下文，闭包

### 注意事项

> 容易导致内存泄漏。闭包会携带包含其它的函数作用域，因此会比其他函数占用更多的内存。过度使用闭包会导致内存占用过多，所以要谨慎使用闭包。

## 21、执行上下文

> 执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候，它都是在执行上下文中运行

执行上下文有三种类型

- 全局执行上下文：任何不在函数内部的都是全局执行上下文，它首先会创建一个全局的 window 对象，并且设置 this 的值等于这个全局对象，一个程序中只有一个全局执行上下文
- 函数执行上下文： 每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建，它会按定义的顺序（将在后文讨论）执行一系列步骤
- eval 函数执行上下文：执行在 `eval` 函数内部的代码也会有它属于自己的执行上下文

## 22、执行上下文栈

> JavaScript 引擎使用执行上下文栈来管理执行上下文
> 当 JavaScript 执行代码时，首先遇到全局代码，会创建一个全局执行上下文并且压入执行栈中，每当遇到一个函数调用，就会为该函数创建一个新的执行上下文并压入栈顶，引擎会执行位于执行上下文栈顶的函数，当函数执行完成之后，执行上下文从栈中弹出，继续执行下一个上下文。当所有的代码都执行完毕之后，从栈中弹出全局执行上下文

```js
let a = "Hello World!";

function first() {
  console.log("Inside first function");
  second();
  console.log("Again inside first function");
}

function second() {
  console.log("Inside second function");
}

first();
console.log("Inside Global Execution Context");
```

![img](https://pic2.zhimg.com/v2-501cccd4154d618d6f2d555ae30caaa9_r.jpg)

> 当上述代码在浏览器加载时，JavaScript 引擎创建了一个全局执行上下文并把它压入当前执行栈。当遇到 `first()` 函数调用时，JavaScript 引擎为该函数创建一个新的执行上下文并把它压入当前执行栈的顶部。
> 当从 `first()` 函数内部调用 `second()` 函数时，JavaScript 引擎为 `second()` 函数创建了一个新的执行上下文并把它压入当前执行栈的顶部。当 `second()` 函数执行完毕，它的执行上下文会从当前栈弹出，并且控制流程到达下一个执行上下文，即 `first()` 函数的执行上下文。
> 当 `first()` 执行完毕，它的执行上下文从栈弹出，控制流程到达全局执行上下文。一旦所有代码执行完毕，JavaScript 引擎从当前栈中移除全局执行上下文

## 23、执行上下文的三个阶段

> 创建阶段 → 执行阶段 → 回收阶段

### 创建阶段

1. this 绑定
2. 在全局执行上下文中，this 指向全局对象（window 对象）
3. 在函数执行上下文中，this 指向取决于函数如何调用。如果它被一个引用对象调用，那么 this 会被设置成那个对象，否则 this 的值被设置为全局对象或者 undefined
4. 创建词法环境组件
5. 词法环境是一种有**标识符——变量映射**的数据结构，标识符是指变量/函数名，变量是对实际对象或原始数据的引用
6. 词法环境的内部有两个组件：**环境记录器**:用来储存变量个函数声明的实际位置，**外部环境的引用**：可以访问父级作用域
7. 创建变量环境组件
8. 变量环境也是一个词法环境，其环境记录器持有变量声明语句在执行上下文中创建的绑定关系

### 执行阶段

在这阶段，执行变量赋值、代码执行。如果 `Javascript` 引擎在源代码中声明的实际位置找不到变量的值，那么将为其分配 `undefined` 值

### 回收阶段

执行上下文出栈等待虚拟机回收执行上下文

## 24、作用域 Scope

> 作用域是在运行时代码中的某些特定部分中变量、函数和对象的可访问性。换句话说，作用域决定了代码区块中变量和其他资源的可见性。**作用域就是一个独立的地盘，让变量不会外泄、暴露出去**。也就是说**作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。**

### 全局作用域

- 直接写在 script 标签的 JS 代码，都在全局作用域。在全局作用域下声明的变量叫做全局变量（在块级外部定义的变量）
- 所有末定义直接赋值的变量自动声明为拥有全局作用域
- 全局变量在全局的任何位置下都可以使用；全局作用域中无法访问到局部作用域的中的变量
- 全局作用域在页面打开的时候创建，在页面关闭时销毁
- **所有 window 对象的属性拥有全局作用域**

> _var 和 function 命令声明的全局变量和函数是 window 对象的属性和方法_
> let 命令、const 命令、class 命令声明的全局变量，不属于 window 对象的属性

值得注意的是，**块语句**（大括号之间的语句，如 if 语句、switch 语句、for 循环语句、while 语句）不会创建一个新的作用域，在块语句中定义的变量将保留在它们存在的作用域中

### 函数作用域（局部作用域）

- 调用函数时会创建函数作用域，函数执行完毕之后，作用域销毁。每调用一次函数就会创建一个新的函数作用域，他们之间是相互独立的
- 在函数作用域中可以访问全局变量，在全局作用域中一般情况下无法访问函数内的变量（可以通过闭包访问）
- 在函数作用域中操作一个变量时，它会先在自身作用域内寻找，如果有就直接使用，如果没有就向上一级作用域中寻找，知道找到全局作用域中。如果全局作用域中仍未找到，则报错

### 块级作用域

块级作用域可通过新增命令 let 和 const 声明，所声明的变量在指定的块级作用域外无法被访问，块级作用域在如下情况被创建：

- 在一个函数内部
- 在一个代码块（由一对花括号包裹）内部

let 声明的语法与 var 的语法一致。基本上可以用 let 来代替 var 进行变量声明，但会将变量的作用域限制在当前代码块中。块级作用域有以下几个特点：

- 声明变量不会提升到代码块顶部
- 禁止重复声明

### 25.作用域链

> 在某个作用域内访问一个变量时，会先在当前作用域内寻找，如果没有找到，则去上一级作用域内寻找，以此类推。这样的变量作用域访问的链式结构，被称为作用域链

作用域链的作用是**保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，可以访问到外层环境的变量和函数。**

## 26、预解析（变量提升）

JS 引擎在执行一段代码的时候，会按照下面的步骤进行工作

- 把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值
- 吧函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用
- 先提升 function，再提升 var 声明的变量

> 区别

- JavaScript 代码执行前引擎会先进行预编译，预编译期间会将变量声明与函数声明提升至其对应作用域的最顶端，函数内声明的变量只会提升至该函数作用域最顶层。当函数内部定义的一个变量与外部相同时，那么函数体内的这个变量就会被上升到最顶端
- 函数提升只会提升函数声明式写法，函数表达式的写法不存在函数提升
- 函数提升的优先级大于变量提升的优先级，即函数提升在变量提升之上

## 27、内存泄露

> 内存泄露是指由于疏忽或错误造成程序未能释放已经不再使用的内存

内存泄露的原因有以下几种：

- **意外的全局变量**：由于使用为声明的变量，而意外的创建了一个变量，这个变量将一直留在内存中无法被回收
- **被遗忘的定时器或回调函数**：设置了 setInterval 定时器而忘记销毁，如果循环函数有对外部的引用的话，这个变量将一直被留在内存中无法被回收
- **脱离 DOM 的引用**：获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收
- **闭包**：不合理的使用闭包，从而导致某些变量一直被留在内存当中

## 28、函数式编程的优缺点

| 优点             | 缺点                             |
| ---------------- | -------------------------------- |
| 降低维护成本     | 过渡包装会导致性能开销           |
| 代码的复用性更强 | 资源占用更强                     |
| 组合起来更加优雅 | 为了实现迭代，可能会掉入递归陷阱 |

## 29、纯函数

> 纯函数是对给定的输入返还相同的输出的函数，并且要求所有的数据都是不可变的

特性

- 函数内部传入指定的值，就会返回唯一确定的值
- 不会造成超出作用域的变化，例如修改全局变量或引用传递的参数

优势

- 通过纯函数可以产生可测试的代码
- 不依赖外部环境计算，不会产生副作用，复用性高
- 可读性高，不管是不是纯函数，都会有一个语义化的名称，便于阅读
- 符合模块化概念及单一职责原则

## 30、高阶函数

> 高阶函数是指使用其它函数作为参数、或者返回一个函数作为返回值的函数

常见的高阶函数

- Array.prototype.map
- Array.prototype.filter
- Array.prototype.forEach
- Array.prototype.reduce

## 31、函数柯里化

> 柯里化（Currying）又叫函数的部分求值，是把**接受多个参数**的函数变换成**接受一个单一参数**（最初函数的第一个参数）的函数，并且返回接受余下的参数且返回结果的新函数的技术

优点

- 参数复用：需要输入多个参数，最终只需输入一个，其余通过 arguments 对象获取
- 提前确认：避免重复判断某一条件是否符合，不符合则 return
- 延迟运行：避免重复执行程序，等真正需要结果的时候再执行

```js
function curry(fn, args) {
  args = args || [];
  var arity = fn.length;

  return function () {
    var _args = Array.prototype.slice.call(arguments);
    Array.prototype.unshift.call(_args, ...args);
    _args = _args.concat(args);

    if (_args.length < arity) {
      return currying.call(null, fn, _args);
    }

    return fn.apply(null, _args);
  };
}
```

## 32、箭头函数

> ES6 中允许使用“箭头”（**=>**） 来定义函数。箭头函数相当于匿名函数，并且简化了函数定义

特点

- 箭头函数不绑定 this，箭头函数里的 this 永远指向定义箭头函数时所处的作用域
- 箭头函数的 this 永远不会变，call、apply、bind 也无法改变
- 箭头函数只能声明成**匿名函数**，但可以通过表达式的方式让箭头函数具名
- 箭头函数没有原型 prototype
- 因为 this 的指向问题，箭头函数不能作为构造函数使用
- 箭头函数没有 arguments 在箭头函数内部访问这个变量访问的是外部环境的 arguments， 可以使用 ...代替

## 33、Promise

> ES6 新增的一种异步编程的解决方案，比传统的回调函数和事件更加的合理和强大。通过`Promise`可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。`Promise`可以解决异步的问题，但不能说 Promise 是异步的

### 特点

1. 对象的状态不受外界影响。`Promise`对象代表一个异步操作，有三种状态：
2. `pending`——进行中
3. `resolved`——已成功
4. `rejected`——已失败
5. 一旦状态改变，就不会再发生变化，任何时候都可以得到这个结果。`Promise`对象状态的改变只有两种可能：
6. `pending`——`resolved`
7. `pending`——`rejected`
8. `Promise`内部发生错误，不会影响到外部程序的执行。
9. `Promise`一旦执行则无法取消：
10. 一旦创建就会立即执行，无法中途取消（**\*缺点 1\***）
11. 如果不设置回调函数，`Promise`内部抛出的错误将不会反应到外部（**\*缺点 2\***）
12. 当处于`pending`状态时，无法得知目前进展到哪一阶段，即无法预测是刚刚开始还是即将完成（**\*缺点 3\***）

### 用法

创建`Promise`实例时，必须传入一个函数作为参数：

```js
new Promise(() => {});
```

该函数可以接收另外两个由 JavaScript 引擎提供的函数，`resolve`和`reject`:

- `resolve`——将`Promise`对象的状态从`pending`变为`resolved`，将异步操作的结果作为参数传递出去
- `reject`——将`Promise`对象的状态从`pending`变为`rejected`，将异步操作报出的错误作为参数传递出去

```js
const promise = new Promise((resolve, reject) => {
  if (true) resolve("value");
  else reject("error");
});
```

`Promise`实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数：

```js
promise.then(
  (value) => {
    console.log(value); // 'value'
  },
  (error) => {
    console.log(error); // 'error'
  }
);
```

当`then`方法只有一个函数参数时，此时为`resolved`状态的回调方法：

```js
promise.then((value) => {
  // 只有状态为resolved时才能调用，如果返回的是rejected状态，则报错 Uncaught (in promise) error
  console.log(value);
});
```

> 只有当`promise`的状态变为`resolved`或者`rejected`时，`then`方法才会被调用

`Promise`新建后就会立即执行，并且调用`resolve`或`reject`后不会终结 `Promise`的参数函数的执行。

```js
let promise = new Promise((resolve) => {
  console.log("1");
  resolve();
  console.log("2");
});
promise.then((resolved) => {
  console.log("3");
});
console.log("3");
```

`resolve`返回的是另外一个`Promise`实例：

```js
const p1 = new Promise((_, reject) => {
  setTimeout(() => reject("error"), 3000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(p1), 1000);
});
p2.then(
  (result) => console.log(result),
  (error) => console.log(error) // error
);
```

> 上面代码中，`p1`是一个 `Promise`，3 秒之后变为`rejected`。`p2`的状态在 1 秒之后改变，`resolve`方法返回的是`p1`。由于`p2`返回的是另一个 Promise，导致`p2`自己的状态无效了，由`p1`的状态决定`p2`的状态。所以，后面的`then`语句都变成针对后者（`p1`）。又过了 2 秒，`p1`变为`rejected`，导致触发`catch`方法指定的回调函数。可以理解成`p2.then` 实际上是`p1.then` > **当`resolve`返回的是另一个`Promise`实例的时候，当前`Promise`实例的状态会根据返回的`Promise`实例的状态来决定**

### 常用 API

**Promise.resolve**()

有时需要将现有对象转为 Promise 对象，`Promise.resolve()`方法就起到这个作用，且实例状态为 resolve：

```js
Promise.resolve("foo");
// 等价于
return new Promise((resolve) => resolve("foo"));
```

`Promise.resolve()`的参数有以下几种情况：

- **参数是一个`Promise`实例：**

```js
const promise = new Promise((resolve) => {
  resolve("resolve");
});
let p = Promise.resolve(promise);
// p 相当于
let p = new Promise((resolve) => {
  resolve(promise);
});
console.log(p === promise); // true
```

- **参数是一个`thenable`对象：**

`thenable`对象指的是具有 then 方法的对象，`Promise.resolve()`会将这个对象转为`Promise`对象，然后立即执行`thenable`对象的`then`方法

```js
const thenable = {
  then(resolve, reject) {
    resolve("resolved");
  },
};
const p1 = Promise.resolve(thenable);
p1.then((res) => {
  console.log(res); // 'resolved'
});
```

> 上面代码中，`thenable`对象的`then()`方法执行后，对象`p1`的状态就变为`resolved`，从而立即执行最后那个`then()`方法指定的回调函数，输出'resolved'

- **参数不是具有`then()`方法的对象，或者根本不是对象**

```js
const promise = Promise.resolve({ name: "James" });
promise.then((res) => {
  console.log(res); // {name: 'James'}
});
```

> 当参数是不含有`then()`方法的对象，或者根本不是对象时，会直接返回该参数

- **不带有任何参数**

```js
const promise = Promise.resolve();
promise.then((res) => {
  console.log(res); // undefined
});
```

> ```
> Promise.resolve()`方法允许调用时不带参数，直接返回一个`resolved`状态的 `Promise` 对象，传参为`undefined
> ```

**Promise.reject()**

```
Promise.reject(reason)`方法也会返回一个新的 `Promise` 实例，该实例的状态为`rejected
const promise = Promise.reject('Error')
// 等价于
const promise = new Promise((resolve, reject) => {
    reject('Error')
})
```

**Promise.all()**

`Promise.all()`方法用于将多个 `Promise` 实例，包装成一个新的 `Promise` 实例

```js
const p1 = new Promise((resolve, reject) => {});
const p1 = new Promise((resolve, reject) => {});
const p1 = new Promise((resolve, reject) => {});
const promise = Promise.all([p1, p2, p3]);
promise.then(
  (result) => {},
  (error) => {}
);
```

面代码中，`Promise.all()`方法接受一个数组作为参数，`p1`、`p2`、`p3`都是 Promise 实例，如果不是，就会调用`Promise.resolve`方法，将参数转为 `Promise` 实例，再进一步处理。另外，`Promise.all()`方法的参数可以不是数组，但必须具有 `Iterator` 接口，且返回的每个成员都是 `Promise` 实例。`p`的状态由`p1`、`p2`、`p3`决定，分成两种情况：

- 只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数
- 只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数

```js
const number = 35;

const p1 = new Promise((resolve, reject) => {
  if (number >= 10) resolve("p1 success!");
  else reject("p1 failed!");
});
const p2 = new Promise((resolve, reject) => {
  if (number >= 20) resolve("p2 success!");
  else reject("p2 failed!");
});
const p3 = new Promise((resolve, reject) => {
  if (number >= 30) resolve("p3 success!");
  else reject("p3 failed!");
});
const promise = Promise.all([p1, p2, p3]).then(
  (res) => {
    console.log(res); // 当number为35时，res值为[ 'p1 success!', 'p2 success!', 'p3 success!' ]
  },
  (error) => {
    console.log(error); // 当number为25时，p3会返回rejected，promise状态会变成rejected，error值为p3 failed!
  }
);
```

> 如果作为参数的 `Promise` 实例，自己定义了`catch`方法，那么它一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法

```js
const p1 = new Promise((resolve) => {
  resolve("hello");
})
  .then((result) => result)
  .catch((e) => e);

const p2 = new Promise(() => {
  throw new Error("报错了");
})
  .then((result) => result)
  .catch((e) => e); // p2实际上是catch返回的promise实例

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
```

## 34、EventLoop

> `为了解决单任务执行过长的问题`，`和处理高优先级的任务`，所以需要将任务划

- 为了解决单个任务执行时间过长，把 js 任务分为同步任务和异步任务，同步任务直接执行，异步任务放入任务队列等待执行
- 为了解决异步队列中等待任务的执行优先级的问题，把异步任务分为微任务和宏任务，同步任务执行完后，就先执行微任务

### 同步和异步

> 我们知道了浏览器页面是由任务队列和事件循环系统来驱动的，但是队列要一个一个执行，如果某个任务(http 请求)是个耗时任务，那浏览器总不能一直卡着，所以为了防止主线程阻塞，就将任务分为同步任务和异步任务

- 同步任务：就是任务一个一个执行，如果某个任务执行时间过长，后面的任务只能一直等下去
- 异步任务：就是进程在执行某个任务时，该任务需要等一段时间才能返回，这时候就把这个任务放到专门处理异步任务的任务队列中去，执行栈则继续往下执行，不会因为这个任务而阻塞

### 微任务和宏任务

> JS 执行时，V8 会创建一个全局执行上下文，在创建上下文的同时，**V8 也会在内部创建一个微任务队列**

**有微任务队列，自然就有宏任务队列，宏任务队列中的每一个任务则都称为宏任务，在当前宏任务执行过程中，如果有新的微任务产生，就添加到微任务队列中**

- 微任务包括：promise.then()、queueMicrotask()、MutationObserver(监听 DOM)、node 中的 process.nextTick 等
- 宏任务包括：渲染事件、请求、script、setTimeout、setInterval、Node 中的 setImmediate、I/O 等

![img](https://pic4.zhimg.com/v2-a3e3877a1e690f05dba7f743b8cd6a4b_r.jpg)

### 事件循环

> 任务进栈到出栈的循环。即一个宏任务，所有微任务，渲染；一个宏任务，所有微任务，渲染.....

循环过程

1. 所有同步任务都在主线程上依次进行，形成一个执行栈，异步任务进入到一个任务队列中
2. 当执行栈中任务执行完后，再去检查微任务队列中的微任务是否完成，有就继续执行，如果微任务过程中又产生新的微任务，就添加到微任务队列末尾继续执行，直到所有微任务全部执行完毕
3. 微任务执行完后，再到任务队列检查是否有宏任务，有就取出最先进入队列的宏任务压入执行栈中执行其同步代码
4. 然后回到第 2 步执行该宏任务中的微任务，如此反复，直到宏任务也执行完，如此循环

```js
<script>
    setTimeout(function () {
        console.log('setTimeout')
    }, 0)
    new Promise(function (resolve) {
        console.log('promise1')
        for( let i = 0; i < 1000; i++ ) {
            i === 999 && resolve()
        }
        console.log('promise2')
    }).then(function ()  {
        console.log('promise3')
    })
    console.log('script')
</script>
```

> 输出结果：`promise1` -> `promise2` -> `script` -> `promise3` -> `setTimeout`

- script 是宏任务，先执行里面的微任务
- 遇到宏任务 setTimeout 放到异步处理模块
- 继续执行 promise，打印 promise1
- 遇到 for 循环，执行，遇到 resolve()回调，回调属于微任务，放到微任务队列
- 继续执行，打印 promise2
- 继续执行，打印 script
- 执行栈内任务执行完毕，取出微任务队列中的任务
- 执行 promise 的 then 回调，打印 promise3
- 所有微任务执行完毕，去任务队列中取出下一个宏任务
- 执行 setTimeout，打印 setTimeout

## 35、async/await

> `async`声明 function 是一个异步函数，返回一个`promise`对象，可以使用 then 方法添加回调函数。
> `async`函数内部`return`语句返回的值，会成为`then`方法回调函数的参数。
> 如果 async 函数没有返回值 async 函数返回一个 undefined 的 promise 对象

```js
async function test() {
  return "test";
}
console.log(test); // [AsyncFunction: test] async函数是[`AsyncFunction`]构造函数的实例
console.log(test()); // Promise { 'test' }

// async返回的是一个promise对象
test().then((res) => {
  console.log(res); // 'test'
});
```

> **await 操作符只能在异步函数 async function 内部使用**
> 如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果，也就是说它会阻塞后面的代码，等待 Promise 对象结果；如果等待的不是 Promise 对象，则返回该值本身

```js
async function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("test 1000");
    }, 1000);
  });
}
function fn() {
  return "fn";
}

async function next() {
  let res0 = await fn(),
    res1 = await test(),
    res2 = await fn();
  console.log(res0);
  console.log(res1);
  console.log(res2);
}
next(); // 1s 后才打印出结果 为什么呢 就是因为 res1在等待promise的结果 阻塞了后面代码。
```

### 错误处理

> 如果`await`后面的异步操作出错，那么等同于`async`函数返回的 Promise 对象被`reject`

```js
async function test() {
  await Promise.reject("错误了");
}

test().then(
  (res) => {
    console.log("success", res);
  },
  (err) => {
    console.log("err ", err); // err 错误了
  }
);
```

> 防止出错的方法，也是将其放在`try...catch`代码块之中

```js
async function test() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error("错误了");
    });
  } catch (e) {
    console.log("err", e);
  }
  return await "成功了";
}
```

> 多个`await`命令后面的异步操作，如果不存在继发关系（即互不依赖），最好让它们同时触发

```js
let foo = await getFoo();
let bar = await getBar();
// 上面这样写法 getFoo完成以后，才会执行getBar

// 同时触发写法 ↓

// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```

### 优点

> async/await 的优势在于处理由多个 Promise 组成的 then 链，在之前的 Promise 文章中提过用 then 处理回调地狱的问题，async/await 相当于对 promise 的进一步优化。 假设一个业务，分多个步骤，且每个步骤都是异步的，而且依赖上个步骤的执行结果

```js
// 假设表单提交前要通过俩个校验接口

async function check(ms) {
  // 模仿异步
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`check ${ms}`);
    }, ms);
  });
}
function check1() {
  console.log("check1");
  return check(1000);
}
function check2() {
  console.log("check2");
  return check(2000);
}

// -------------promise------------
function submit() {
  console.log("submit");
  // 经过俩个校验 多级关联 promise传值嵌套较深
  check1().then((res1) => {
    check2(res1).then((res2) => {
      /*
       * 提交请求
       */
    });
  });
}
submit();

// -------------async/await-----------
async function asyncAwaitSubmit() {
  let res1 = await check1(),
    res2 = await check2(res1);
  console.log(res1, res2);
  /*
   * 提交请求
   */
}
```

## 36、防抖

> 当事件触发时，相应的函数不会立即触发，而是等待一段时间；
> 当事件连续触发时，函数的触发等待时间会被不断重置（推迟）。

通俗的讲，防抖就是，每次触发事件时，在一段时间后才真正响应这个事件，具体应用如下：

- 输入框中频繁输入内容，如果输入框**改变一次就发送一次请求**的话，会对服务器造成很大的压力，所以我们希望在连续输入的时候不发送请求，直到用户输入完或者一段时间没有继续输入的话才发送请求；
- 频繁点击按钮触发事件（恶意的行为）
- 用户缩放浏览器时频繁触发 resize 事件
- 王者荣耀回城

### 如何实现防抖函数

```js
function debounce(callback, time) {
  let timer;
  return function () {
    clearTimeout(timer);
    let args = arguments;
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, time);
  };
}
```

## 37、节流

> 如果事件被频繁出发，那么节流函数会按照一定的频率来执行函数；
> 不管中间触发了多少次，执行函数的**频率总是固定的**。

说白了节流就是在间隔一段时间执行一次，具体应用如下：

- 王者荣耀冷却中的技能无法再次释放；
- 监听滚动事件，比如是否滑到底部自动加载更多，用 throttle 来判断；
- 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）。

### 如何实现节流函数

```js
function throttle(func, delay) {
  let timer;
  return function () {
    let args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func.apply(this, args);
      }, delay);
    }
  };
}
```

## 38、forEach、map 和 for 循环

### forEach

1. 没有返回值；

```js
var a = [1, 2, 3, 4, 5];
var b = a.forEach((item) => {
  item = item * 2;
});
console.log(b); // undefined
```

1. 无法中断执行；
2. 可以使用`return`跳过当前循环；
3. 跳过数组的空位，但不会跳过`null`和`undefined`；

```js
var a = [null, , undefined];
a.forEach((item) => {
  console.log("item", item); // null undefined
});
```

1. 改变数组情况;
2. 为什么直接修改 item 无法修改原数组呢，因为 item 的值并不是相应的原数组中的值，而是重新建立的一个新变量，值和原数组相同。因此，如果 item 是基础数据类型，那么并不会改变数组里面的值，如果是引用类型，那么 item 和数组里面的值是指向同一内存地址，则都会被改变。

```js
var a = [1, 2, 3, 4, 5];
a.forEach((item) => {
  item = item * 2;
});
console.log(a); // [1,2,3,4,5]
```

- 数组中的对象的值也没有改变，是因为新创建的变量和原数组中的对象虽然指向同一个地址，但改变的是新变量的值，也就是`重新赋值`，即新对象的值为 2，原数组中的对象还是`{num:1}`。

```js
var a = [1, "1", { num: 1 }, true];
a.forEach((item, index, arr) => {
  item = 2;
});
console.log(a); // [1,'1',{num:1},true]
```

- 由于对象是引用类型，新对象和旧对象指向的都是同一个地址，所以新对象把 num 变成了 2，原数组中的对象也改变了。

```js
var a = [1, "1", { num: 1 }, true];
a.forEach((item, index, arr) => {
  item.num = 2;
  item = 2;
});
console.log(a); // [1,'1',{num:2},true]
```

1. 手写 forEach 方法；

```js
Array.prototype.new_forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
```

### map

1. 有返回值；

```js
var a = [1, 2, 3, 4, 5];
var b = a.map((item) => {
  return (item = item * 2);
});
console.log(a); // [1,2,3,4,5]
console.log(b); // [2,4,6,8,10]
```

1. 无法中断执行，同 forEach；
2. 可以使用`return`跳过当前循环，同 forEach；
3. 跳过数组的空位，但不会跳过`null`和`undefined`，同 forEach；
4. 改变数组情况，同 forEach;
5. 手写 map 方法；

```js
Array.prototype.new_map = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};
```

### for 循环

1. for 循环是个语句，forEach 和 map 则是表达式；
2. for 循环可以使用 `break` 结束循环；
3. for 循环可以使用 `continue` 语句跳过当前循环；
4. for 循环不会跳过数组的空位，会默认空位为 undefined；

### 性能对比

1. for 循环当然是最简单的，因为它没有任何额外的函数调用栈和上下文；
2. forEach 其次，因为它其实比我们想象得要复杂一些，[它的函数签名](https://link.zhihu.com/?target=https%3A//link.juejin.cn/%3Ftarget%3Dhttps%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray%2FforEach)实际上是 `array.forEach(function(currentValue, index, arr), thisValue)` 它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能；
3. map 最慢，因为它的返回值是一个等长的全新的数组，数组创建和赋值产生的性能开销很大。
