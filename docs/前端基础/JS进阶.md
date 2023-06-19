

## 函数

### 1、函数的创建

```js
>> 函数的声明 - 有提升
function 函数名(形参) {
  // 函数体
}

>> 函数表达式
let 变量 = function() {}
let 变量 = () => {}
```

### 2、参数

```js
>> 形参
function 函数名(形参) {}

>> 实参
函数名(实参)

>> 参数默认值
function 函数名(参数=值) {}
```

### 3、arguments 对象

该对象可以获取所有的实际参数（实参），不管有没有设置形参。

### 4、函数返回值

- 执行函数得到一个结果
- return 之后的代码不会再执行
- 如何返回多个值？将值放在对象、数组里

### 5、IIFE（自运行匿名函数）

1）、理解

该函数是指在创建后就会自动运行，不需要调用也无法调用，**生命周期只有一次**。

2）、定义

```js
(function(形参){
  // 在这里添加需要执行的代码块
})(实参)

(function(形参){
  // 在这里添加需要执行的代码块
}(实参))
```

```js
// 例子
console.log('全局');

(function() {
  var a = 'abc'
  console.log('IIFE');
})();
console.log(a);  // 输出：a is not defined
```

3）、特性

- 将所有的运算过程放在函数中，函数**执行完毕后**就会**销毁**，不会污染全局
- **只执行一次**

### 6、递归函数

1）、理解

递归函数是指在函数内部通过自己调用自己本身的一种场景。

2）、用法

```js
function 函数名() {
  if (出口) {  // 满足一定的条件就必须停止函数的调用，否则容易陷入死循讯
		// ...
  }
  
  // 入口
  函数名()
}
```

3）、应用

阶乘、树形菜单、省市区级联选择

```js
// 例子：累加 - 递归实现从1乘到10
function add(n) {
  if(n == 1) {
    return 1;
  }
  return n * add(n - 1)
}
console.log(add(10))

/*
  伪代码
  第一次：return 10 * add(9)
  第二次：return 10 * 9 * add(8)
  第三次：return 10 * 9 * 8 add(7)
  第四次：return 10 * 9 * 8 * 7 * add(6)
  第五次：return 10 * 9 * 8 * 7 * 6 * add(5)
  第六次：return 10 * 9 * 8 * 7 * 6 * 5 * add(4)
  第七次：return 10 * 9 * 8 * 7 * 6 * 5 * 4 * add(3)
  第八次：return 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * add(2)
  第九次：return 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * add(1)
  第十次：return 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
  第十一次：？
*/
```

## 惰性载入

1、理解

主要用来减少代码每次执行时的重复性分支判断，通过对对象的重新定义来屏蔽原来的对象分支判断。

2、例子

```html
<button id="btn1">按钮1</button>
<button id="btn2">按钮2</button>
<button id="btn3">按钮3</button>

<script>
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');

  // 原生 JS 封装事件，考虑所有浏览器兼容情况
  let event = {
    on: function(dom, type, fn) {
      console.log('绑定事件的时候先判断浏览器');

      if(window.addEventListener) {  // 现代浏览器
        dom.addEventListener(type, fn, false);
      } else if(window.attachEvent) {  // 高版本 IE
        dom.attachEvent('on' + type, fn);
      } else {  // 兼容所有写法
        dom['on' + type] = fn;
      }
    }
  }

  // 添加事件
  event.on(btn1, 'click', function() {
    console.log('btn1被点击了');
  });
  event.on(btn2, 'click', function() {
    console.log('btn2被点击了');
  });
  event.on(btn3, 'click', function() {
    console.log('btn3被点击了');
  });
</script>
```

运行结果：![惰性载入1](/images/%E6%83%B0%E6%80%A7%E8%BD%BD%E5%85%A51.png)

```js
// 问题：需要判断3次浏览器类型吗？
// 不需要，因为当我们打开浏览器的时候，当前什么浏览器就已经确定了，那么只需要我们判断一次即可
// 优化代码
let event = {
  on: function(dom, type, fn) {
    console.log('绑定事件的时候先判断浏览器');

    if(window.addEventListener) {  // 现代浏览器
      // 判断浏览器后就应该重写 event.on
      event.on = function(dom, type, fn) {
        dom.addEventListener(type, fn, false);
      }
    } else if(window.attachEvent) {  // 高版本 IE
      event.on = function(dom, type, fn) {
        dom.attachEvent('on' + type, fn);
      }
    } else {  // 兼容所有写法
      event.on = function(dom, type, fn) {
        dom['on' + type] = fn;
      }
    }

    // 第一个添加事件的元素会添加失败，所以保证首次调用能正常监听
    return event.on(dom, type, fn);
  }
}

event.on(btn1, 'click', function() {
  console.log('btn1被电击了');
});
event.on(btn2, 'click', function() {
  console.log('btn2被dian le');
});
event.on(btn3, 'click', function() {
  console.log('btn3');
});
```

运行结果：![惰性载入2](/images/%E6%83%B0%E6%80%A7%E8%BD%BD%E5%85%A52.png)

## 编译原理（了解）

### 1、编译分类

- 编译型语言

在程序执行之前，需要借助一个程序，将高级程序语言编写的代码翻译为计算器能读懂的机器语言，然后直接能被运行。如 C 语言、C++ 。

- 解释型语言

不需要提前编译，在代码运行的时候再进行编译（JS、python）。

### 2、编译原理

#### 1）、JS渲染引擎

负责整个 JS 程序的编译以及执行。

#### 2）、编译器

主要负责词法分析、语法分析、代码生成。

```js
编译三个步骤，以 var a = 5; 这段代码为例：

第一步、「分词/词法分析」：编译器会对程序代码进行分解，分为词法单元，'var', 'a', '=', '5', ';' 。

第二步、「解析/语法分析」：这个过程就是将词法单元转换为一个由元素逐级嵌套所组成的程序语法树，称为 抽象语法树（AST）。

第三步、「代码生成」：将 AST 转换为一组机器指令，用来创建一个叫 a 的变量，分配内存等。
```

#### 3）、作用域

在执行代码的时候，对一些变量访问权限的控制。

#### 4）、JS 代码执行的过程

- 预编译阶段：由编译器将 JS 编译为可执行的代码，在这个阶段就会进行变量的声明，并对变量的声明进行提升（函数声明提升），但是值为 undefined；

- 代码执行阶段：主要任务就是执行代码逻辑，也会在这一个阶段完成执行上下文的创建。

## 作用域

作用域（scope）规定了变量能够被访问的“范围”，离开了这个“范围”变量便不能被访问。

- 全局作用域：`<script>` 和 js 文件
- 局部作用域
  - 块级作用域：大括号内部
  - 函数作用域：函数内部

### 1、JS 执行环境

执行环境也称为执行上下文，在程序运行的时候，会生成一个管理函数和变量的对象，它决定了变量和函数的生命周期，以及访问其他数据的权限。

- 全局执行环境

  最外围的执行环境，任何不在函数中的代码都在全局执行上下文中。

- 函数执行环境

  每当一个函数被调用的时候，都会为该函数创建一个全新的上下文环境并推入执行栈中，在代码执行完毕后，将该环境弹出（即销毁）。

- Eval 函数执行上下文

### 2、局部作用域

#### 1）、函数作用域

在函数**内部声明的变量**只能在**函数内部被访问**，外部无法直接访问。

```js
// 声明 counter 函数
function counter(x, y) {
  // 函数内部声明的变量
  const s = x + y
  console.log(s)  // 18
}

// 使用 counter 函数
counter(10, 8)

// 访问变量 s
console.log(s)  // 报错
```

- <font color="red">函数内部</font>声明的变量，在函数外部<font color="red">无法被访问</font>
- 函数的<font color="red">参数</font>也是函数内部的<font color="red">局部变量</font>
- 不同函数内部声明的变量无法互相访问

#### 2）、块作用域

在 JavaScript 中使用 `{}` 包裹的代码称为代码块，代码块内部声明的变量外部将<font color="red">有可能</font>无法被访问。

> :warning: 注：ES5 没有块级概念

```js
// 例1
{
  // age 只能在该代码块中被访问
  let age = 18
  console.log(age)  // 正常
}

// 超出了 age 的作用域
console.log(age)  // 报错


// 例2
let flag = true
if (flag) {
  // str 只能在该代码块中被访问
  let str = 'hello world!'
  console.log(str)  // 正常
}

// 超出了 age 的作用域
console.log(str) // 报错


// 例3：ES6 块级
for(let t = 1; t <= 6; t++) {
  // t 只能在该代码块中被访问
  console.log(t)  // 正常
}

// 超出了 t 的作用域
console.log(t)  // 报错


// ES5 没有块级概念
for(var i = 0; i< 5; i++) {}
console.log(i);  // 这里实际上是全局变量
```

- `let/const` 声明会产生块作用域，`var` 不会产生块作用域
- 不同代码块之间的变量无法互相访问
- 推荐使用 `let` 或 `const`

### 3、全局作用域

`<script>` 标签和 `.js` 文件的【最外层】就是全局作用域，在此声明的变量在函数内部也可以被访问。

全局作用域中声明的变量，任何其它作用域都可以被访问。

```html
<script>
  // 此处是全局
  const num = 10
  function sayHi() {
    // 此处为局部
    console.log(num)  // 函数内部可以使用全局作用域的变量
    
    num3 = 30  // 在函数中使用变量，但没有进行声明 —— 全局变量
  }
  
  // var关键字也可以用于声明变量
  // 弊端：用 var 声明的变量都被放到 window 身上了，就是 window 的属性
  var num2 = 10
  console.log(num2)

  // 此处为全局
</script>
```

- 为 `window` 对象动态添加的属性默认也是全局的，不推荐！
- <font color="red">函数中</font>未使用任何关键字声明的变量为全局变量，不推荐！！！
- 尽可能少的声明全局变量，防止<font color="red">全局变量被污染</font>

### 4、作用域链（重点）

嵌套关系的<font color="red">作用域串联</font>起来形成了作用域链

**作用**：作用域链本质上是底层的**变量查找机制（就近原则）**

- 在函数被执行时，会优先查找**当前函数作用域**中查找变量
- 如果当前作用域查找不到，则会**逐级向上查找**父级作用域直到全局作用域
- 都找不到则提示错误，**这个变量没有被定义过**
- 子作用域**能够**访问父作用域，父级作用域**无法访问**子级作用域

```js
// 全局作用域
let a = 11
let b = 22

// 局部作用域
function f() {
  let a = 1
  // 局部作用域
  function g() {
    a = 2
    console.log(a)  // 修改的是f()中定义的 a
  }
  g()  // 调用 g
}
f()  // 调用 f
```

## [垃圾回收机制](https://zh.javascript.info/garbage-collection)

垃圾回收机制（Garbage Collection）  简称 GC

JS 中内存的分配和回收都是**自动完成**的，内存在不使用的时候会被**垃圾回收器**自动回收

**堆栈空间分配区别**

- 栈（操作系统）：由操作系统自动分配释放函数的参数值、局部变量等，基本数据类型放到栈里面。
- 堆（操作系统）：一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收，复杂数据类型放到堆里面。

**内存的生命周期**

- 内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存 
- 内存使用：即读写内存，也就是使用变量、函数等

- 内存回收：使用完毕，由垃圾回收器自动回收不再使用的内存 

> :warning: 注：
>
> - 全局变量一般不会回收(关闭页面回收)
> - 一般情况下**局部变量的值**, 不用了, 会被**自动回收**掉
>

### 1、引用计数法

这是最初级的垃圾收集算法。此算法简化理解为“对象有没有其他对象引用到它”，如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。

**算法说明：**

- 跟踪记录被**引用的次数**
- 如果被引用了一次，那么就记录次数1,多次引用会累加 `++`
- 如果减少一个引用就减 1  `--`
- 如果引用次数是 0，则释放内存

```js
// 原理是统计所有对象的引用计数, 只要没有人引用对象了(零引用), 就会被回收掉

// 创建一个对象，被 o 变量所引用，计数为 1
let o = {
  name: ''
}

let o2 = o  // o2 变量是第二个对该对象的引用，计数为 2

o = 123  // 该对象的原始引用 o 已经没有了，计数为 1

o2 = null  // 此时对象所有引用都没有了，计数为 0，垃圾回收机制会回收
```

弊端：循环引用

两个对象内的属性相互引用对象，两个对象的引用计数永远都大于 0，无法回收导致内存泄漏

```js
// 由于 o1 和 o2 互相引用着对方, 哪怕没有变量引用它俩了, 在内存中依然不会被销毁, 因为引用计数是 1
// 所以引用计数法极易导致内存泄漏
// 在 2012 年之后所有现代浏览器都取消这种算法了, 取而代之的是标记清除法
function f() {
  let o = {}
  let o2 = {}
  o.a = o2  // o 引用 o2
  o2.a = o  // o2 引用 o
  return '呆呆'
}
f()
```

### 2、标记清除法

- 从 2012 年起，所有现代浏览器都使用了标记 - 清除垃圾回收算法
- 参考链接：https://zh.javascript.info/garbage-collection

假定全局作为根开始，一层一层往局部去标记所有的对象，打完标记之后，如果有些对象没有标记，就会被清除

**核心：**

- 标记清除算法将“不再使用的对象”定义为“无法达到的对象”。 
- 就是从根部（在 JS 中就是全局对象）出发定时扫描内存中的对象。凡是能从根部到达的对象，都是还需要使用的。
- 那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。

![标记清除法](/images/标记清除法.png)

## 内存泄漏

程序中分配的**内存**由于某种原因程序**未释放或无法释放**

**引起内存泄漏的情况**

- 全局变量：不会被回收的

- 闭包使用不当就会引起内存泄漏

- 没有清理的 dom 元素引用

  ```html
  <button id="btn">移除dom</button>
  <p id="content">被移除的内容</p>
  
  <script>
    let btn = document.getElementById('btn')
    let content = document.getElementById('content')
  
    btn.onclick = function(){
      document.body.removeChild(content)  //除了移除节点
      content = null  // 也要清空 content 的值
    }
  </script>
  ```

  ![闭包3](/images/%E9%97%AD%E5%8C%853.png)

- 被遗忘的定时器

- 事件监听

- 子元素存在的引用

## 闭包（重点、难点）

### 1、定义

一个函数对周围状态的引用捆绑在一起，闭包让开发者可以从**内部函数访问外部函数的作用域**

>简单理解：闭包 =  内层函数 + 外层函数的变量 

```js
// 闭包 : 内层函数 + 外层函数变量
function outer() {
  const a = 1
  function inner() {
    console.log(a)
  }
  inner()
}
outer()
```

### 2、实现手段

```js
// 方式一：直接将内部函数暴露给全局
(function() {
  var i;
  window.getI = function() {
    // 会在这里访问 i 或者修改 i
  }
})();

// 方式二：将函数执行结果返回
var iii = (function() {
  var i;
  return function() {
    // ...
  }
})();
```

**例子**：

```js
// 模拟游戏环境，角色有生命条，初始值为 100，吃血包后增加声明，受到伤害就会减少生命
var lives = 100; // 初始生命值

// 受到伤害后减生命
lives -= 1;

// 如果迟到血包
lives += 1;

console.log(lives);

// lives 是全局变量，那么就可以在任意地方、任意时间进行访问以及修改
```

![闭包1](/images/%E9%97%AD%E5%8C%851.png)

```js
// 怎么解决，不允许外部去访问或者修改该数据
// 通过闭包来解决这个问题

// 方式一：直接将内部函数暴露给全局
(function() {
  var lives = 100;  // 外层函数的局部变量

  window.getLives = function() {
    return lives;  // 内层函数引用了外层函数的变量，导致外层函数执行结束后，该变量并不会销毁
  }

  window.addLives = function() {  // 提供方法来增加值
    lives++;
  }
})();

console.log(getLives());  // 通过闭包提供的方法来访问变量
```

![闭包2](/images/%E9%97%AD%E5%8C%852.png)

```js
// 方式二：将函数执行结果返回
var game = (function() {
  var lives = 50;

  // return function() {
  //   return lives;  // console.log(game());来获取lives的值
  // }
  
  return {
    getLives() {
      return lives
    },
    addLives() {
      lives++;
    }
  }
})();

game.addLives();
game.addLives();
console.log(game.getLives());
```

### 3、特点

- 函数嵌套函数
- 内层函数访问了外层函数的局部变量，导致该变量常驻内存
- 将内部函数暴露出去（return 或者 window），实现函数外访问函数内的变量

### 4、作用

- 延长变量的生命周期
- 创建私有变量：实现数据的私有，避免全局污染，外层函数也可以访问里层函数变量
- 闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来

```js
// 闭包的应用：实现数据的私有 - 统计函数的调用次数
// 这个 count 是个全局变量，很容易被修改
let count = 1
function fn() {
  count++
  console.log(`函数被调用${count}次`)
}


// 闭包的写法
function outer() {
  let count = 1
  function fn() {
    count++
    console.log(`函数被调用${count}次`)
  }
  return fn
}

const re = outer()
// const re = function fn() {
//   count++
//   console.log(`函数被调用${count}次`)
// }

re()
re()
// const fn = function() { }  函数表达式
```

### 5、产生的问题

- 一旦发生闭包，意味着外层函数的局部变量不会随着函数的结束而释放，会长期存在一个叫 closure（闭包）的空间中
- 闭包会导致内存泄漏，但这种内存泄漏是必要的，我们无法阻止的，只能说尽量少用闭包，但必须用的时候还是得用

### 6、案例

#### 1)、封装一个缓存工具

```js
function createCache() {
  const data = {}  // 局部变量，外部无法访问

  return {
    set(key, val) {
      data[key] = val;
    },
    get(key) {
      return data[key]
    }
  }
}

const cache = createCache();
cache.set('token', 'daidai');
cache.set('username', 'admin');

console.log(cache.get('token'));
```

#### 2）、实现首字母大写

```js
function capterToUpper(str) {
  console.log('计算过程很复杂，需要花费很多时间');
  return str.charAt(0).toUpperCase() + str.substr(1);
}

// 缓存函数：fn 就是需要被缓存的函数
function cached(fn) {
  const cache = {}; // 缓存数据

  return function(str) {
    var hit = cache[str];  // 冲缓存中取出要处理的 str

    // 如果该字符串第一次执行，那么就执行 cache[str] = fn(str)
    // 如果是第二次及三四次，那么 cache 中就已经保存了以前的结果，则直接取出使用
    return hit || (cache[str] = fn(str))
  }
}

// 调用缓存函数 - 重新包装 capterToUpper
const capitalize = cached(capterToUpper)

capitalize('helloWorld');
capitalize('helloWorld');
capitalize('helloWorld');
capitalize('helloVue');
```

#### 3）、任务队列

```js
function queue() {
  const waitingQueue = [];  // 任务队列，所有的任务必须推进来
  let isRunning = false;  // 标记，记录当前事都有任务正在执行

  function execute(task, resolve, reject) {
    task()
      .then(res => {  // 成功
        resolve(res)
      })
      .catch(err => {  // 失败
        reject(err)
      })
      .finally(() => {  // 无论成功与否都会执行
        
        // 此时，上一个任务已经执行完毕了，如果任务队列中有任务则触发下一个任务，否则设置 isRunning 为 false，表示任务处理完毕
        if(waitingQueue.length) {
          const next = waitingQueue.shift();  // 最开始进入数组中的元素，肯定排在最前面
          execute(next.task, next.resolve, next.reject);
        } else {
          isRunning = false;
        }
      })
  }

  return function(task) {  // 接受 task 作为参数
    return new Promise((resolve, reject) => {
      if(isRunning) {
        waitingQueue.push({task, resolve, reject})
      } else {
        isRunning = true;
        execute(task, resolve, reject);  // 执行任务
      }
    })
  }
}

// 任务1
const task1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('task1')
    }, 3000);
  })
}
// 任务2
const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('task2')
    }, 1000);
  })
}
// 任务3
const task3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('task3')
    }, 0);
  })
}

const myQueue = queue();

// 需求：必须先保证完成 task1，然后再完成task2，最后完成task3
myQueue(task1).then((res) => console.log(res))
myQueue(task2).then((res) => console.log(res))
myQueue(task3).then((res) => console.log(res))
```

### 7、[闭包练习题](/前端基础/闭包练习题.md)

> **总结**
>
> 闭包是什么？闭包就是函数的嵌套，内层函数访问了外层函数的局部变量
>
> 闭包有什么用？实现变量的私有化，让外面的人无法修改内部的变量
>
> 闭包会产生什么现象或问题？内存泄漏，本该被释放的变量，无法及时释放，会存在闭包空间中

## 变量提升

变量提升是 JavaScript 中比较“奇怪”的现象，它允许在变量声明之前即被访问（仅存在于var声明变量）

- 变量提升出现在**当前作用域的最前面**
- 提升时，**只提升**变量**声明**，**不提升**变量**赋值**
- let/const 声明的变量不存在变量提升
- 实际开发中推荐**先声明再访问变量**

```js
// var变量提升
// 1、变量提升会提升到当前作用域的最前面
// 2、只提升变量声明，不提升变量赋值

// 例1
console.log(age)  // undefined
var age = 18
console.log(age)  // 18


// 例2
function fn() {
  console.log(uname)  // undefined
  var uname = 'andy'
}
fn()
```

>JS 初学者经常花很多时间才能习惯变量提升，还经常出现一些意想不到的bug，正因为如此，ES6 引入了块级作用域，用 let 或者 const 声明变量，让代码写法更加规范和人性化。
>
>:warning: 注：关于变量提升的原理分析会涉及较为复杂的词法分析等知识，而开发中使用 `let` 可以轻松规避变量的提升，因此在此不做过多的探讨，有兴趣可[查阅资料](https://segmentfault.com/a/1190000013915935)。

## this

### 1、理解

当函数被调用时，会创建一个活动记录（执行上下文），这个记录会包含函数在哪里调用（调用栈）。函数调用名字、函数参数等信息，而 this 就是这个上下文中的一个属性，会在函数执行的过程中用到的，在非严格模式下总是会指向一个对象，严格模式下可以是任意值。

this 在不同的场合下，表示不同的值。

总之 this 是一个指针，是**在函数运行时进行绑定**的，而不是在编写函数时绑定的，所以它永远指向最后调用它的对象。

### 2、this 指向（非常重要）

#### 1）、默认绑定

在`严格模式`下绑定到 `undefined` ，`非严格模式`绑定到全局对象 `window` 。

```js
function foo() {
  'use strict';  // 严格模式
  console.log(this);  // window
}
window.foo();  // foo 函数调用者是 window
// 非严格模式输出：Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// 严格模式输出：undefined
```

#### 2）、隐式绑定

当函数引用有上下文对象时，则会把函数中的 this 绑定到`这个上下文对象`。

```js
// 隐式调用1
var obj = {
  name: '呆呆',
  sayHi() {
    console.log(this.name);  // 输出：呆呆
  }
}
obj.sayHi();


// 隐式调用2
function sayHi(){
  console.log(this.name);  // 输出：呆呆
}
var obj1 = {
  name: '呆呆',
  sayHi
}
var obj2 = {
  name: '辣辣',
  child: obj1
}
obj2.child.sayHi()
```

```js
// 隐式丢失
// 例子1
function sayHi(){
  console.log(this.name);  // 输出：my window
}
var obj = {
  name: '呆呆',
  sayHi
}
window.name = 'my window'
var otherSayHi = obj.sayHi;
otherSayHi();
// 将obj的sayHi方法赋值给变量otherSayHi，调用的是全局变量，调用者是window，相当于window.otherSayHi();


// 例子2
var obj = {
  name: '呆呆',
  sayHi(){
    console.log(this);  // 输出：{name: '呆呆', sayHi: ƒ}
    setTimeout(function(){  // 实际上是window.setTimeout
      console.log(this.name);  // 输出：''（window.name）
    },0)
  }
}
obj.sayHi()
// obj 调用 sayHi，但是 window 调用 setTimeout，所以 this 是 window
```

#### 3）、构造函数中的 this

当函数通过 new 关键字调用，函数内部的 this 指向`新创建的对象` 。

```js
function Student() {
  this.name = '';
}
Student.prototype.sayHi = function() {
  console.log(this.name);
}
var s = new Student();
// s.name
// s.sayHi()
```

#### 4）、显示绑定

使用 `call`、`bind` 以及 `apply` 来指定 this 指向。

```js
// 借来的 this

fn.call(对象,参数1,参数2,...)
// 将 fn 函数中的 this 指向 call 的第一个参数
* 会立即执行一次 fn 方法；
* 然后 fn 中的 this 临时性修改为 obj；

fn.apply(obj,[参数1,参数2,参数3,...])
// 作用与 call 完全相同，只是传递参数的方式发生改变。

fn.bind(obj, 参数1)
// 永久性的修改函数中 this 的指向，一般用在回调函数中。
```

```js
// 例子 - call、apply
var p1 = {
  name: '呆呆',
  phone(h) {
    console.log(this.name + '给朱朱' + h + '小时打电话')
  }
}

var p2 = {
  name: '辣辣',
}

p1.phone.call(p2,1);  // 输出：辣辣给朱朱1小时打电话
p1.phone.apply(p2,[1]);  // 输出：辣辣给朱朱1小时打电话
```

```js
// 例子 - bind
var p2 = {
  name: '辣辣'
}

var p1 = {
  name: '呆呆',
  phone(h) {
    setTimeout(function() {
      console.log(this.name + '给朱朱打' + h + '个小时的电话');
    }.bind(p2), 0)
  }
}
p1.phone(1);  // 输出：辣辣给朱朱1小时打电话
```

- 总结：

  - call、apply 都是立即执行一次

  - bind 被动执行

  - bind 会永久修改 this 指向

  - call 与 apply 的区别只在于`参数传递`

#### 5）、箭头函数

箭头函数中没有 this 的绑定，只能通过`箭头函数所在的作用域`来决定它的值，所以箭头函数中的 this 始终指向定义函数时 this 的指向。与调用者没有关系。

```js
// 例子
var obj = {
  name: '呆呆',
  sayHi(){
    setTimeout(() => {
      console.log(this.name);  // 输出：呆呆
    },0)
  }
}
obj.sayHi()
// sayHi 所在的作用域就是obj对象
```

## 函数

### 1、函数提升

函数提升与变量提升比较类似。

- 函数提升提升到**当前作用域最前面**
- 函数提升**只提升声明，不提升调用**
- 函数表达式**不存在提升**的现象
- 函数提升能够使函数的声明调用更灵活

```js
// 函数提升
fn()
function fn() {
  console.log('函数提升')
}

// 函数表达式不存在提升
fun()
var fun = function () {
  console.log('函数表达式不存在提升')
}
```

### 2、函数参数

#### 1）、arguments 对象（了解）

arguments 是函数内部内置的伪数组变量，它包含了调用函数时传入的**所有实参**。

```js
// arguments 对象获取所有实参
function sum() {
  // 1、arguments 只存在于函数中 伪数组
  // 2、arguments 可以得到传递过来的所有实参 [1, 2]
  // console.log(arguments)
  
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum)
}
sum(1, 2)
sum(1, 2, 3)
sum(1, 2, 3, 4)

// console.log(arguments) 外面无法使用
```

- arguments 是一个**伪数组**，只存在于函数中
- arguments 的作用是**动态获取函数的实参**
- 可以通过 for 循环依次得到传递过来的实参

> arguments 淘汰的原因：
>
> 1、是可变参数的出现 ES6 新特性 
>
> 2、性能原因：
>
> arguments 就是一个伪数组，仅存在于 function 中，它的作用是装载着所有的实参，因为 arguments 是动态伪数组，数据变化带来的性能损耗较大，每次都会同步更新所有参数，如果参数过多则会出现问题，在开启严格模式后就会彻底禁用 arguments，现在开发中基本不用 arguments 了，可以使用可变参数完全替代 arguments 的功能
>
> 拓展：arguments.callee 代表函数本身，一般用于匿名函数自调用，后来由于 ES6 的出现，不让用 arguments 了， 所以 callee 自然也无法使用了，官方建议给函数起名字
>
> ```js
> function fn(a) {
> // 开启严格模式后, 无法使用 arguments
> // console.log(arguments.callee) // fn
> 
> arguments[0] = 50
> console.log(arguments[0])  // 50
>   
> // arguments 是动态伪数组, 如何理解这个动态?
> // 如果内部的数据发生变化, 会自动同步到形参
> console.log(a)  // 50
> }
> 
> fn(10)
> ```

#### 2）、剩余参数（重点）

允许我们将一个不定数量的参数表示为一个数组

**简单理解**：用于获取多余的实参，并形成一个真数组

使用场景： 也可以解决形参和实参个数不匹配的问题

```js
// 剩余参数获得多余的实参，返回真数组
function sum(x, y, ...other) {  // 在最后一个形参前加上...
  console.log(x, y, other)
}
sum(1, 2)
sum(1, 2, 3)
sum(1, 2, 3, 4)

// 求和效果
function sum(...nums) {
  // console.log(nums)  // [1, 2, 3, 4]
  let sum = 0
  nums.forEach(function (item) {
    sum += item
  })
  console.log(sum)
}
sum(1, 2)
sum(1, 2, 3)
sum(1, 2, 3, 4)
```

**剩余参数和 arguments 区别**

- `...` 是语法符号，置于最末函数形参之前，用于获取**多余**的实参
- 借助 `...` 获取的剩余实参，是个**真数组**
- 箭头函数不支持 arguments，但是可以使用剩余参数
- 开发中，还是提倡多使用**剩余参数**

#### 3）、展开运算符(…)

展开运算符 `…`，将一个**数组/对象**进行展开

~~~js
// 1、基本使用, 不修改原数组
const arr = [1, 2, 3]
console.log(...arr)  // 1 2 3
console.log(arr)  // [1, 2, 3]


// 2、使用场景
// 求数组最大值/最小值
// console.log(Math.max(1, 3, 8))
console.log(Math.max(...arr))  // 3
console.log(Math.min(...arr))  // 1

// 合并数组
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]

let arr3 = []
arr3.push(...arr1, ...arr2)
~~~

>剩余参数：函数参数使用，把多个元素**收集**起来**生成一个真数组 （凝聚）**
>
>展开运算符：将数组展开成各个元素（**拆散**）

### 3、箭头函数（重要）

#### 1）、定义

箭头函数比函数表达式更简洁的一种写法

使用场景：箭头函数更适用于那些本来**需要匿名函数的地方，写法更简单**

```js
// 函数表达式
const fn = function () {
  console.log('我是函数表达式')
}
fn()

// 箭头函数
const fn = () => {
  console.log('我是箭头函数')
}
fn()
```

**用法细节：** 

```js
// 1、如果只有一个形参则可以省略小括号，其余个数不能省略，如果没有参数则写空的小括号
const sum = (x) => {
  console.log(x + x)
}
sum(2)

const sum = x => {
  console.log(x + x)
}
sum(2)

// 2、如果函数体只有一句代码，则可以省略大括号，这句代码就是返回值（省略return）
const sum = x => {
  return x + x
}

const sum = x => x + x
console.log(sum(5))

// 3、如果返回的是一个对象，则需要用小括号把对象包裹起来
const fn = function () {
  return {name: '佩奇'}
}

const fn = () => ({ name: '佩奇' })
console.log(fn())

// 4、箭头函数里面没有 arguments，但是有剩余参数
const fn = (...other) => {
  // console.log(arguments)  报错
  console.log(other)
}
fn(1, 2)
```

**总结：**

- 箭头函数属于表达式函数，因此不存在函数提升
- 箭头函数只有一个参数时可以省略圆括号 `()`
- 箭头函数函数体只有一行代码时可以省略花括号 `{}`，并自动做为返回值被返回
- 如果返回的是个对象，则需要把对象用小括号包裹
- 箭头函数中没有 `arguments`，只能使用 `...` 动态获取实参

#### 2）、箭头函数中的 this

以前函数中的 this 指向是根据**如何调用**来确定的。简单理解就是 this 指向**调用者**

```js
console.log(this)  // 此处为 window

// 普通函数
const sayHi() {
  console.log(this)  // 普通函数指向调用者，window.sayHi()，此处为 window
}

btn.addEventListener('cilck', function () {
  console.log(this)  // 当前 this 指向 btn
})

// 对象方法里面的 this
const obj = {
  name: 'andy',
  sayHi: function () {
    console.log(this)  // obj
  }
}
// obj.sayHi()
```

箭头函数本身<font color="red">没有 this</font>，它只会<font color="red">沿用上一层作用域的 this</font>

在开发中【使用箭头函数前需要考虑函数中 this 的值】

- 事件回调函数使用箭头函数时，this 为全局的 window，不太推荐使用箭头函数
- 定时器里面的如果需要 this，可以使用箭头函数

```js
// 箭头函数的中 this 指向 - 沿用上一层作用域的 this
// 例1
const btn = document.querySelector('.btn')

// 箭头函数：此时 this 指向了 window
btn.addEventListener('cilck', () => {
  console.log(this)
})

// 普通函数：此时 this 指向了 DOM 对象
btn.addEventListener('cilck', function () {
  console.log(this)  // 当前 this 指向 btn
})


// 例2
const fn = () => {
  console.log(this)  // window
}
fn()


// 例3
const obj = {
  name: 'andy',
  sayHi: () => {
    console.log(this)  // window
  }
}
obj.sayHi()


// 例4
const obj = {
  name: 'andy',
  sayHi: function () {
    const fun = () => {
      console.log(this)  // obj
    }
    fun()
  }
}
obj.sayHi()
```

~~~js
// 我们可以根据需求来选择是否使用箭头函数 this

// 例1：dom 元素注册事件，需要用到 this，就不要箭头函数
document.querySelector('.btn1').addEventListener('click', function() {
  this.style.color = 'red'
})

document.querySelector('.btn1').addEventListener('click', () => {
  // 此处不能用 this，指向 window，而不是指向按钮
  // this.style.color = 'red'
  document.querySelector('.btn1').style.color = 'red'
})


// 例2：定时器里面需要用到 this，就需要箭头函数
document.querySelector('.btn2').addEventListener('click', function() {
  
  setTimeout(function() {
    // 定时器里面的 this 指向 window，因为定时器属于 window 对象，定时器的函数也由 window 触发
    console.log(this)
    this.style.color = 'red'
  }, 5000)

  // 此处最好使用箭头函数
  setTimeout(() => {
    console.log(this)  // this 指向 btn2
    this.style.color = 'red'
  }, 5000)
})
~~~

### 4、ES6 对象简写

- 在对象中，如果**属性名和属性值**一致，可以简写**只写属性名**即可
- 在对象中，方法（函数）可以简写

~~~js
// 属性名和属性值相同的时候，可以只写属性名
const username = '呆呆'
const password = 123

const obj = {
 username: username,
 password: password
}

const obj = {
 username,
 password
}

// 对象方法的简写
const obj = {
 sayHi: function() {
   console.log('hi~')
 }
}

const obj = {
  sayHi() {
    console.log('hi~')
  }
}
~~~

## 解构赋值

解构赋值：可以将<font color="red">数组中的值或对象的属性</font>取出，<font color="red">赋值</font>给其他变量

解构：其实就是把一个事物的<font color="red">结构进行拆解</font>

### 1、数组解构

- 右侧数组的值将被赋值给左侧的变量
- 变量的顺序对应数组值的位置依次进行赋值操作

```js
const [a, b, c] = [1, 2, 3]

// 例子：交换2个变量的值
let x = 1
let y = 2;  // 这里必须有分号
[y, x] = [x, y]
console.log(x, y)
```

> :warning: 注：js 中通常必须加分号的情况
>
> ```js
> // 小括号开头
> (function t() {})();
>   // 或者
> ;(function t() {})()
> 
> // 中括号开头
> ;[b, a] = [a, b]
> ```

**变量和值不匹配的情况**

~~~js
// 1、变量多，值少的情况
const [a, b, c, d] = ['小米', '华为', '苹果']
console.log(d)  // undefined

// 2、防止 undefined 传值，可以设置默认值
const [a, b, c, d = '三星'] = ['小米', '华为', '苹果']

// 3、变量少，值多的情况
const [a, b] = ['小米', '华为', '苹果']

// 4、利用剩余参数解决变量少值多的情况
const [a, ...b] = ['小米', '华为', '苹果']
console.log(a)
console.log(b)  // ['华为', '苹果']

// 5、按需导入，忽略某些值
const [a, , c, d] = ['小米', '华为', '苹果', 'vivo']
console.log(a)  // 小米
console.log(c)  // 苹果
console.log(d)  // vivo

// 6、支持多维数组的解构
const [a, b] = ['小米', ['华为', '苹果']]
console.log(b)  // ['华为', '苹果']

const [a, [b, c]] = ['小米', ['华为', '苹果']]
~~~

### 2、对象解构

可以将对象的属性取出，赋值给其他变量

```js
const user = {
  username: '呆呆',
  age: 18
}

// 1、基本语法
const { username, age, gender } = user
console.log(username)  // 小明
console.log(age)  // 18
console.log(gender)  // undefined

// 要求变量名和属性名必须一致
// 如果变量名和属性名不一致，则默认为 undefined
// 变量名不要和外面的变量名冲突，否则会报错


// 2、更改解构变量名（重命名）
// 变量名: 新变量名
const { username: uname, age } = user


// 3、对象数组解构
const arr = [
  {
    username: '小明',
    age: 18
  }
]
const [{ username: uname, age }] = arr


// 4、多级对象解构
const pig = {
  name: '佩奇',
  family: {
    mother: '猪妈妈',
    father: '猪爸爸',
    brother: '乔治'
  }
}
const {name, family: { mother, father, brother} } = pig

const pig = [
  {
    name: '佩奇',
    family: {
      mother: '猪妈妈',
      father: '猪爸爸',
      brother: '乔治'
    }
  }
]
const [{name, family: { mother, father, brother} }] = pig
```

支持多维解构赋值

~~~js
// 这是后台传递过来的数据
const msg = {
  "code": 200,
  "msg": "获取新闻列表成功",
  "data": [
    {
      "id": 1,
      "title": "5G商用自己，三大运用商收入下降",
      "count": 58
    },
    {
      "id": 2,
      "title": "国际媒体头条速览",
      "count": 56
    },
    {
      "id": 3,
      "title": "乌克兰和俄罗斯持续冲突",
      "count": 1669
    },

  ]
}

// 需求1：请将以上 msg 对象，采用对象解构的方式，只选出 data 方便后面使用渲染页面
const { data } = msg
console.log(data)

// 需求2：将上面对象只选出 data 数据，传递给另外一个函数
function render({ data }) {
  // 内部处理
  console.log(data)
}
render(msg)

// 需求3：为了防止 msg 里面的 data 名字混淆，要求渲染函数里面的数据名改为 myData
function render({ data: myData }) {
  // 要求将获取过来的 data 数据 更名为 myData
  // 内部处理
  console.log(myData)
}
render(msg)
~~~

## filter

filter() 方法：创建一个新的数组，新数组中的元素是符合条件的所有元素

主要使用场景： 筛选数组符合条件的元素，并返回筛选之后元素的新数组，不影响原数组

~~~js
const newArr = arr.filter(function (item, index) {
  return 筛选条件
})

* item：数组元素
* index：数组元素的索引号

// 函数内要返回筛选条件，符合条件的情况会把当前遍历的元素加到新数组中，最后 filter 返回新数组

// 例子
const arr = [10, 20, 30, 40]
const newArr = arr.filter(item => item > 30)
console.log(newArr)
~~~

## 