# 核心语法基础

## 1、JavaScript的定义

一种直译式脚本语言，一种动态类型、弱类型、基于原型的语言

### 1）、组成部分

- 核心（ECMAScript）：描述该语言的语法和基本对象
- 文档对象模型（DOM）：描述处理网页内容的方法和接口
- 浏览器对象模型（BOM）：描述与浏览器进行交互的方法和接口

### 2）、两种类型注释

- 单行注释：//
- 多行注释：/*  */

## 2、JavaScript添加的方法

1、在HTML中嵌入JavaScript脚本（内嵌式）

```javascript
<script type="text/javascript">
    JavaScript代码
</script>
```

2、在HTML中链接一个外部的JavaScript文件

```javascript
<script type="text/javascript" src="JavaScript文件名.js"></script>
```

3、直接编写在元素的事件属性中（所有on开头的属性名）

```javascript
<input type="button" value="Press Me" onclick="alert('Hello World');">
```

4、伪URL方法（在a标签href属性写入js代码）

```javascript
<a href="javascript:alert('Hello World');">Click</a>
```

# 变量输入输出

## 1、输入

- prompt()


## 2、输出

- 控制台输出：console.log()
- 页面输出：document.write()
- 弹出框输出（警告）：alert()
- innerHTML 写入 HTML 元素

# 变量

## 1、声明变量

```
关键字var	变量名字
```

## 2、变量赋值

```
变量名 = 值
```

简写：一边声明变量，一边赋值

当对某个值进行操作时，使用变量

## 3、命名变量

规范：

- 第一个字符必须是字母、下划线（_）或美元符号（$）

- 余下的字符可以是下划线、美元符号或任何字母或数字字符

驼峰命名法：变量名字的第一个字母是大写，后面的字母是小写

关键字、保留字、true、false、null并不能作为标识符

- 常见关键字

|  break   |    else    |  new   |  var  |
| :------: | :--------: | :----: | :---: |
|   case   |  finally   | return | void  |
|  catch   |    for     | switch | while |
| continue |  function  |  this  | with  |
| default  |     if     | throw  |       |
|  delete  |     in     |  try   |       |
|    do    | instanceof | typeof |       |

- 常见保留字

| abstract |    enum    |    int    |    short     |
| :------: | :--------: | :-------: | :----------: |
| boolean  |   export   | interface |    static    |
|   byte   |  extends   |   long    |    super     |
|   char   |   final    |  native   | synchronized |
|  class   |   float    |  package  |    throws    |
|  const   |    goto    |  private  |  transient   |
| debugger | implements | protected |   volatile   |
|  double  |   import   |  public   |              |

# 数据类型

## 1、基本数据类型

string字符串、number数值、boolean布尔、undefined、null

## 2、引用数据类型

object对象、array数组、function函数

# 运算符

## 1、操作符：typeof

```
typeof undefined    // undefined
typeof null        // object
```

## 2、算数运算符：\+    -    *    /    %

## 3、比较（关系）运算符：\>    <    >=    <=    ==    !=    ===    !==

返回的一定是布尔值

|       表达式        |  值   |
| :-----------------: | :---: |
| null  ==  undefined | true  |
|   ‘NaN’  ==  NaN    | false |
|     5  ==  NaN      | false |
|    NaN  ==  NaN     | false |
|    false  ==  0     | true  |
|     true  ==  1     | true  |
|     true  ==  2     | false |
|  undefined  ==  0   | false |
|     null  ==  0     | false |
|   ‘100’  ==  100    | true  |
|   ‘100’  ===  100   | false |

## 4、逻辑运算符：&&并且  ||或者  !取反

## 5、一元运算：++  --

- 如使用前置（Prefix）自增，操作符在操作数前（例如 ++x）， 操作数会加一，然后返回加一之后的值。
- 后置自增（例如 x++），操作数会加一 3，然后返回加一之前的值

## 6、二元运算

## 7、三元运算：条件表达式 ? 表达式1 : 表达式2

> 当结果为true时，执行表达式1，否则执行表达式2

## 8、赋值运算符：=  +=  -=  *=  /=

# 数据类型之间的转换

## 1、转数字

- parseInt()：将值转成整数数字
- parseFloat()：将值转成小数点数字
- Number()

## 2、转字符串

- String()

## 3、转布尔值

Boolean()

# 转义符

| 字面量 |  含义  |
| :----: | :----: |
|   \n   |  换行  |
|   \t   |  制表  |
|   \b   |  空格  |
|   \r   |  回车  |
|   \f   |  进纸  |
|  \ \   |  斜杠  |
|  \ '   | 单引号 |
|  \ ''  | 双引号 |

# 编程三大结构

顺序结构：语句的顺序执行

分支结构：有些代码执行有些代码不执行，会有条件约束

循环结构：重复执行一个或几个模块，直到满足某个条件为止

## 1、分支结构

### 1）、单分支

```javascript
if(条件表达式){

}
```

### 2）、双分支

```javascript
if(条件表达式){

}else{

}
```

### 3）、多分支

```javascript
if(条件表达式){

}else if(条件表达式){

}else{

}
```

```javascript
switch(){
    case 1:        ;break;
    case 2:        ;break;
    case 3:        ;break;
    default:    ;break;
}
```

注意：

- switch里面的case判断等同于else if（）{}

- case判断===要比较值和数据类型

## 2、循环结构

### 1）、while循环（先验证后循环）

```javascript
while(条件表达式){
    循环体
}
```

### 2）、do-while循环（先循环后验证）

```javascript
do{
    循环体（先执行一次）
}while(条件表达式)
```

### 3）、for循环（先判断后循环）

```javascript
for(表达式1;表达式2;表达式3){

}

* 表达式1：循环变量的初始化
* 表达式2：判断条件
* 表达式3：循环变量的改变
```

### 4）、跳出循环

- break：跳出循环

- continue：跳出本次循环

# 数组

## 1、数组定义

定义：连续的储存空间

通过下标获取数组的某个值，数组的下标从0开始

## 2、遍历数组

```javascript
for(var i=0;i<arr.length;i++){
    console.log("arr[i]")
}
```

## 3、创建数组

### 1）、通过字面量创建

```javascript
var arr = []
```

### 2）、通过构造器创建

```javascript
var arr = new Array()
var arr = new Array(5)   //创建长度为5的数组
var arr = new Array("朱一龙",4,16)   //创建有数据的数组
```

## 4、引用数组

1、通过数组下标添加

2、通过for循环遍历

## 5、常用方法

数组的方法：增 删 改 查

### 1）增

- push()：在末尾添加

- unshift()：在第一个添加


### 2）、删

- pop()：删除数组的最后一项

- shift()：删除数组的第一项

- splice(起始下标,删除几个)：删除指定项

### 3）、改

插入：splice(起始下标,0,插入内容)

替换：splice(起始下标,删除数量,替换内容)

数组下标直接赋值

> 修改替换 ：注意第二个参数代表删除几个，如果删除0个则代表插入
>
> 删除1个则第三个参数值会进行插入

### 4）、合并：concat

```javascript
var arr1 = [123,'234',true]
var arr2 = [false,'hahah']
var arr3 = arr1.concat(arr2)    //[123,'234',true,false,'hahah']
```

> 注：谁调用concat的方法，谁就在前面
>
> concat合并方法，既不会改变arr1也不会改变arr2，会生成一个新的数组

### 5）、数组的抽取截取

```javascript
slice(起始下标【要被截取】,结束下标【不会被截取】)
```

> 注：slice方法 也会生成一个新数组，原数组不会发生改变

### 6）、数组的串联：join()

```javascript
var arr6 = [1,2,3,5,6,6,3,3,1,3,4,6]
var newArr = arr6.join("*")
// 把数组的每一项都获取出来并将*把他们连接变成一个字符串
console.log(newArr)
```

### 7）、数组的反转：reverse()

> 注：会改变原数组

### 8）、清空数组

- var arr=[]
- arr.length = 0
- arr.splice(0,arr.length)

# Math对象

Math对象是一个内置对象

## 1、随机数

Math.random()

一个大数字和一个小数字组成一个范围

 随机数*（大数字-小数字）+ 小数字就能得到这个范围内的数字

## 2、取整方法

Math.round()：四舍五入

Math.ceil()：向上取整

Math.floor()：向下取整

Math.pow(数值,几次方)：次方计算

Math.abs()：绝对值

Math.sqrt()：平方根

# 函数

## 1、函数的创建

```javascript
>> 函数的声明 - 有提升
function 函数名(形参){
  // 函数体
}

>> 函数表达式
var 变量 = function(){}
var 变量 = () => {}
```

## 2、参数

```javascript
>> 形参
function 函数名(形参){}

>> 实参
函数名(实参)

>> 参数默认值
function 函数名(参数=值){}
```

## 3、arguments 对象

该对象可以获取所有的实际参数（实参），不管有没有设置形参。

## 4、函数返回值

- 执行函数得到一个结果
- return 之后的代码不会再执行
- 如何返回多个值？将值放在对象、数组里

## 5、IIFE（自运行匿名函数）

1）、理解

该函数是指在创建后就会自动运行，不需要调用也无法调用，`生命周期只有一次`。

2）、定义

```javascript
(function(形参){
  // 在这里添加需要执行的代码块
})(实参)

(function(形参){
  // 在这里添加需要执行的代码块
}(实参))
```

```javascript
// 例子
console.log('全局');

(function() {
  var a = 'abc'
  console.log(' IIFE');
})();
console.log(a);  // 输出：a is not defined
```

3）、特性

- 将所有的运算过程放在函数中，函数`执行完毕后`就会`销毁`，不会污染全局
- `只执行一次`

## 6、递归函数

1）、理解

递归函数是指在函数内部通过自己调用自己本身的一种场景。

2）、用法

```javascript
function 函数名(){
  if(出口){  // 满足一定的条件就必须停止函数的调用，否则容易陷入死循讯
		// ...
  }
  
  // 入口
  函数名()
}
```

3)、应用

阶乘、树形菜单、省市区级联选择

```javascript
// 例子：累加 - 递归实现从 1 乘到  10
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

# 惰性载入

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

运行结果：![惰性载入1](/images/惰性载入1.png)

```javascript
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

运行结果：![惰性载入2](/images/惰性载入2.png)

# 编译原理（了解）

## 1、编译分类

- 编译型语言

在程序执行之前，需要借助一个程序，将高级程序语言编写的代码翻译为计算器能读懂的机器语言，然后直接能被运行。如C语言、C++。

- 解释型语言

不需要提前编译，在代码运行的时候再进行编译（JS、python）。

## 2、编译原理

### 1）、JS渲染引擎

负责整个 JS 程序的编译以及执行。

### 2）、编译器

主要负责词法分析、语法分析、代码生成。

```javascript
编译三个步骤，以 var a = 5; 这段代码为例：

第一步、「分词/词法分析」：编译器会对程序代码进行分解，分为词法单元，'var', 'a', '=', '5', ';' 。

第二步、「解析/语法分析」：这个过程就是将词法单元转换为一个由元素逐级嵌套所组成的程序语法树，称为 抽象语法树（AST）。

第三步、「代码生成」：将 AST 转换为一组机器指令，用来创建一个叫 a 的变量，分配内存等。
```

### 3）、作用域

在执行代码的时候，对一些变量访问权限的控制。

### 4）、JS 代码执行的过程

- 预编译阶段：由编译器将 JS 编译为可执行的代码，在这个阶段就会进行变量的声明，并对变量的声明进行提升（函数声明提升），但是值为 undefined；

- 代码执行阶段：主要任务就是执行代码逻辑，也会在这一个阶段完成执行上下文的创建。

## 3、作用域

### 1）、概念

一段程序代码中所用到的名字并不总是有效的，而是限定这个名字的可用性代码范围，那么我们就称之作用域。

即变量和函数是有一个作用范围的，离开这个范围就无法使用。

### 2）、JS 执行环境

执行环境也称为执行上下文，在程序运行的时候，会生成一个管理函数和变量的对象，它决定了变量和函数的生命周期，以及访问其他数据的权限。

- 全局执行环境

最外围的执行环境，任何不在函数中的代码都在全局执行上下文中。

- 函数执行环境

每当一个函数被调用的时候，都会为该函数创建一个全新的上下文环境并推入执行栈中，在代码执行完毕后，将该环境弹出（即销毁）。

- Eval 函数执行上下文

### 3）、根据执行环境划分作用域

- 全局作用域：在函数外部的代码，在任意地方都可以使用。
- 函数作用域：在函数内部的代码，函数外无法使用。
- ES6 块级作用域：可以通过 let ， const 关键字声明变量，就有可能形成块级作用域。

> 注：ES5 没有块级概念

```javascript
// 例子
var a = 123;  // 全局
function foo() {
  console.log(a);  // 全局变量可以在任意地方访问
  var b = 456;  // 局部作用域下的变量，只能在该作用域下生效，函数执行完毕后就会销毁
  console.log(b);
}
foo();
console.log(b);  // 无法访问了：b is not defined


// ES5 没有块级概念
for(var i = 0; i< 5; i++) {}
console.log(i);  // 这里实际上是全局变量


// ES6 块级
for(let j = 0; j < 5; j++) {
  console.log(j);
}
console.log('外部：', j);  // 输出：j is not defined
```

### 4）、作用域链（重点）

作用域规定了一个变量/函数的访问权限。

当使用一个变量的时候，是如何查找这个变量？

会从当前上下文环境中查找，没有没有找到，就会从上层执行上下文环境中查找，一直找到全局执行上下文，在这个过程中所经历的一个过程（链条）就称为作用域链。

```javascript
// 例子
var a = 0;

function foo() {
  console.log(a);  // 输出：0

  var b = 1;

  function bar() {
    var b = 2;
    var c = 123;
    console.log(b);  // 输出：2
    console.log(a);  // 输出：0
  }
  bar();
  console.log(c);  // 输出：c is not defined
}

foo();
```

# 闭包（重点、难点）

## 1、定义

闭包就是作用域的体现，就是能够读取其他函数内部变量的函数。

一般情况下函数内可以访问函外的变量，但是函数外无法访问函数内的变量，但是通过闭包这个手段就可以在函数外访问函数内部的变量。

## 2、实现手段

```javascript
// 方式一：直接将内部函数暴露给全局
(function() {
  var i;
  window.getI = function() {
    // 会在这里访问 i 或者 修改i
  }
})()

// 方式二：将函数执行结果返回
var iii = (function() {
  var i;
  return function() {
    // ...
  }
})()
```

```javascript
// 模拟游戏环境，角色有生命条，初始值为 100，吃血包后增加声明，受到伤害就会减少生命
var lives = 100; // 初始生命值

// 受到伤害后减生命
lives -= 1;

// 如果迟到血包
lives += 1;

console.log(lives);

// lives 是全局变量，那么就可以在任意地方、任意时间进行访问以及修改
```

![闭包1](/images/闭包1.png)

```javascript
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

![闭包2](/images/闭包2.png)

```javascript
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

game.addLives()
game.addLives()
console.log(game.getLives());
```

## 3、特点

- 函数嵌套函数
- 内层函数访问了外层函数的局部变量，导致该变量常驻内存
- 将内部函数暴露出去（return 或者 window），实现函数外访问函数内的变量

## 4、作用

- 延长变量的生命周期
- 创建私有变量

## 5、闭包可能产生的问题

一般函数运行结束后，内部产生的函数和变量都会被释放，所以每次运行函数都是全新的。

但是由于使用闭包后，会导致函数中部分的变量保留在内存中，会增加内存的消耗，所以闭包不能乱用，否则会造成网页性能问题。

## 6、内存泄漏

1）、概念

JS 创建变量时会给变量分配内存，对于不再使用的变量没有及时释放，会导致内存占用越来越高，有时候就会导致进程崩溃。

2）、垃圾回收机制

当浏览器中不再使用的变量，浏览器就会自动将他们回收，这个过程被称为垃圾回收。

JS 中最常用的垃圾回收机制就是`标记清除`。

也有一种不常用的回收机制即`引用计数法`。

3）、引起内存泄漏的情况

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
      document.body.removeChild(content);  //除了移除节点
      content = null;  // 也要清空 content 的值
    }
  </script>
  ```

  ![闭包3](/images/闭包3.png)

- 被遗忘的定时器

- 事件监听

- 子元素存在的引用

## 7、案例

### 1)、封装一个缓存工具

```javascript
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

### 2）、实现首字母大写

```javascript
function capterToUpper(str) {
  console.log('计算过程很复杂，需要花费很多时间');
  return str.charAt(0).toUpperCase() + str.substr(1);
}

// 缓存函数：fn 就是需要被缓存的函数
function cached(fn) {
  const cache = {}; // 缓存数据

  return function(str) {
    var hit = cache[str]; // 冲缓存中取出要处理的 str

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

### 3）、任务队列

```javascript
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

## 8、[闭包练习题](C:\Users\daidai\Desktop\Note\闭包练习题.md)

# 对象

## 1、JS 数据类型

基本数据类型：Number、Null、String、Boolean、Undefined、Symbol（ES6 新增）

引用数据类型：Object（Function、Array）

## 2、Symbol

1）、概念

表示独一无二的值

2）、用法

```javascript
var s1 = Symbol();  // 每次调用该函数一定会得到不同的值
var s2 = Symbol();
console.log(s1 == s2);  // false

var s3 = Symbol('foo');  // 带上参数与不带参数一样
var s4 = Symbol();
console.log(s3 == s4);  // false

const id = Symbol();
let obj = {
  [id]: '19880416'
}
```

3）、案例

```javascript
// 使用 Symbol 解决对象属性被覆盖的问题
const name = Symbol('name');
const age = Symbol('age');

let t1 = {
  [name]: '朱一龙',
  [age]: 18
}
let t2 = {
  city: '武汉',
  age: 3
}
// 对象合并（两种方式）时，属性相同则会发生覆盖
// const t3 = Object.assign({},t1,t2)
const t3 = {
  ...t1,
  ...t2
}
console.log(t3)  // {name: '朱一龙', age: 3, city: '武汉'}
// 添加 Symbol 后输出的结果： {city: '武汉', age: 3, Symbol(name): '朱一龙', Symbol(age): 18}
```

4）、总结

- Symbol() 函数返回值一定是唯一的
- Symbol() 可以作为对象属性的标识
- 调用 Symbol() 函数不需要加 new
- Symbol() 作为对象属性时，不能被 for in （Object.keys）访问

## 3、对象属性访问

```javascript
>> 对象.属性名
t1.name

>> 对象['属性名'] —— []可以添加任意合法的表达式
var obj = {
  name: 'daidai'
}
obj.name
obj['name']

var a = 'name'
obj[a]

var b = 'nam'
obj[b + 'e']
```

## 4、销毁对象

```javascript
obj = null;  // 销毁对象
obj.属性 = '';  // 只是清空了属性值
delete obj.属性  // 删除属性
```

## 5、值的复制（重点、难点）

### 1）、堆栈

堆和栈都是运行时内存中分配的一个数据区域，两者都是临时存放数据的地方。

### 2）、基本数据类型

所有的值保存在栈内存中，访问的方式是按值访问。

基本数据类型的值被复制的时候：会在栈中创建一个新值，然后把值复制到新变量分配的位置上，两个值互不影响。

### 3）、引用数据类型

引用数据类型的值是保存在堆内存中的，变量中保存的是一个指针，该指针放在栈中，直接复制的时候，两者相互影响。

```javascript
var num1 = 123;
var num2 = num1;  // 基本数据类型值保存在栈中，复制的时候直接复制的是值，所以两者互相不影响。
num1 = 456;
console.log(num1, num2);  // 输出：456 123


var obj1 = {
  name: '呆呆'
}
var obj2 = obj1;  // 引用数据类型栈中保存地址，值保存在堆中，复制时是复制的地址，该地址都指向同一个堆中的位置，所以互相影响。
obj1.age = 12;
console.log(obj1,obj2)  // 输出：{name: '呆呆', age: 12} {name: '呆呆', age: 12}
```

### 4）、对象的值的复制

- 浅拷贝：`...`，`Object.assign()`，`Array.map()`，`Array.filter()`，`Array.silce` 等等。只会拷贝第一层，属性中嵌套了对象或者数组，那么还是直接复制的地址。

  ```javascript
  // 例子
  var obj1 = {
    name: '呆呆',
  }
  
  // 方法1：将obj1的值合并到{}中，返回一个新的对象
  // var obj2 = Object.assign({}, obj1);
  
  // 方法2：
  var obj2 = {...obj1};
  obj1.age = 12;
  
  console.log(obj1, obj2);  // 输出：{name: '呆呆', age: 12} {name: '呆呆'}
  ```

  ```javascript
  // 例子 - 属性中嵌套了对象
  var obj1 = {
    name: '朱朱',
    children: [
      {
        name: '呆呆'
      }
    ]
  }
  // var obj2 = Object.assign({}, obj1);
  var obj2 = {...obj1};
  obj1.age = 12;
  obj1.children.push({
    name: '辣辣'
  })
  
  console.log(obj1, obj2);  // 输出：{name: '朱朱', children: Array(2), age: 3} {name: '朱朱', children: Array(2)}
  ```

  ![浅拷贝](/images/浅拷贝.png)

- 深拷贝：手写代码，递归遍历对象实现一个个属性的拷贝；技巧：JSON

  无论对象中嵌套多深，都实现值的拷贝。

```javascript
// 例子
var obj1 = {
  name: '朱朱',
  city: undefined,
  address: null,
  sayHi() {},
  children: [
    {
      name: '呆呆'
    }
  ]
}

var obj2 = JSON.parse(JSON.stringify(obj1));  // 无法拷贝 undefined, 方法
obj1.age = 12;
obj1.children.push({
  name: '辣辣'
})

console.log(obj1, obj2);
// 输出：{name: '朱朱', city: undefined, address: null, children: Array(2), sayHi: ƒ, …} {name: '朱朱', address: null, children: Array(1)}
```

![深拷贝](/images/深拷贝.png)

# 原型（非常重要）

## 1、面向对象编程

### 1）、面向过程编程

以过程为中心。

### 2）、面向对象编程

以事物为中心。

### 3）、面向对象的组成

- 对象：具体的实例。

- 类：具有共同特征的一类事物的抽象，比如人类、猫类。

```javascript
// 方法1 - 内置构造函数
var obj = new Object();
```

```javascript
// 方法2 - 字面量
var obj = {};
console.log(obj);

// 需求 - 创建一批学生
var s1 = {
  name: '',
  age: 0,
  city: '',
  address: ''
}
var s2 = {
  name: '',
  age: 0,
  city: '',
  address: ''
}
var s3 = {
  name: '',
  age: 0,
  city: '',
  address: ''
}
```

```javascript
// 方法3 - 工厂函数
// 通过函数的封装，去减少重复性的工作
function craeteStudent(name, age, city) {
  var obj = {};  // 全新对象
  obj.name = name;
  obj.age = age;
  obj.city = city;
  return obj;
}
var s1 = craeteStudent();
var s2 = craeteStudent();
var s3 = craeteStudent();

// 工厂方法也会存在一些问题：每次调用工厂函数都会在内部创建一个对象，每一个对象都是全新的对象，各个对象之间没有任何的关系，所以无法搞清楚每一个对象到底是谁的实例，也就是无法解决对象对象识别问题。
```

```javascript
// 方法4 - 构造函数
function Student(name, age, city) {
  // 隐藏代码：var obj = {}
  // 隐藏代码 this = obj
  this.name = name;
  this.age = age;
  this.city = city;
  this.sayHi = function() {
    console.log('Hi');
  }
  // 隐藏代码：return this
}

// 调用构造函数 - 实例化
var s1 = new Student('lily', 12, '成都');  // 必须使用 new 关键字
var s2 = new Student('lucy', 12, '成都'); 
console.log(s1, s2);
console.log(s1 instanceof Student);  // true
console.log('s1.sayHi === s2.sayHi:', s1.sayHi === s2.sayHi);  // false，注意对象存放在不同的堆中，所以方法即使是一样的，但是地址不同

// 结论：通过构造函数可以解决批量化创建相同结构的对象，并且也解决了对象识别问题。

// new 关键字做了哪些事情
// 1. 自动创建一个空对象
// 2. 修改函数的上下文为该空对象，即函数内部的 this 表示该空对象
// 3. 执行函数体、为该对象添加属性添加方法  
// 4. 如果没有返回其他对象，那么会自动返回创建的空对象
```

### 4）、对象识别

`instanceof` 运算符用于检测构造函数的属性是否出现在某个实例对象的原型链上。即当前实例是否来源于这个构造函数。

```javascript
object instanceof constructor
实例 instanceof 构造函数（类）

* object：某个实例对象
* constructor：某个构造函数
```

### 5）、方法过载

在构造函数中直接创建的方法，在实例化时所有的对象都会拥有一个独立的方法，不同对象的同一个方法在不同的堆空间中，导致浪费内存。

```javascript
// 例子 - 所有对象拥有同一个方法
function Student() {
  this.sayHi = function() {}
}

s1.sayHi === s2.sayHi;  // false

// 解决方法：引入原型，来避免浪费内存
```

## 2、原型

### 1）、概念

在 JS 中，每一个「`函数`」都有一个「`prototype`」属性，这个属性其实也是一个指针（地址），会指向`函数的原型对象`，原型对象上所有的属性和方法都可以被实例共享。

### 2）、访问

```javascript
函数.prototype // 返回一个对象，这个对象中所有的方法属性，实例共享
```

```javascript
// 方法5 - 原型
function Student(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
Student.prototype.sayHi = function() {
  console.log('Hi');
}

var s1 = new Student('lily', 12, '成都');
var s2 = new Student('lucy', 12, '成都'); 
console.log('s1.sayHi === s2.sayHi:', s1.sayHi === s2.sayHi);  // true
```

### 3）、作用

- 解决方法过载的问题

- 可以对类的功能进行扩展

  ```javascript
  // 对现有的框架进行扩展
  
  // 使用axios前，需在main.js文件装入2个模块
  import axios from './http'
  // import VueAxios from 'vue-axios'
  // Vue.use(VueAxios, axios)
  
  // 所有组件都是 Vue 的实例，所以在组件中可以通过 this.axios 进行请求
  Vue.prototype.axios = axios  // 将封装的axios挂载到Vue的原型上
  ```

  ```javascript
  // 对现有的 js 语法进行扩展
  
  // 案例 - 实现一个方法，接受一个参数，指定删除数组中某一个元素
  // 所有的数组都是 Array 的实例
  // 扩展数组方法
  Array.prototype.remove = function(index) {
    this.splice(index, 1);
  }
  
  const arr = ['a', 'b', 'c', 'd'];  // new Array()
  arr.remove(2);
  console.log(arr);
  ```

### 4）、`__proto__`

每一个「`实例对象`」都有一个 「`__proto__`」属性，会指向它的`构造函数的原型` 。

### 5）、constructor

每一个「`原型对象`」都有一个 「`constructor`」属性，该属性指向`构造函数` 。

### 6）、原型链

当访问对象属性的时候，如果对象本身不存在该属性，那么就会在原型对象上查找该属性，如果原型对象上也没有，就会在原型对象的原型上查找，如此循环下去，直到找到该属性或者到达顶级对象。对象查找属性的过程所经过的对象构成一个链条，称为`原型链` 。

属性查找顺序︰`对象本身 -> 构造原型 -> 构造原型的原型 -> ... -> null`

![原型链](/images/原型链.png)

```javascript
console.log(s1);
console.log('s1.__proto__ === Student.prototype:',  s1.__proto__ === Student.prototype); // true
    console.log('Student.prototype.constructor === Student:', Student.prototype.constructor === Student); // true


console.log(Student.prototype.__proto__); // Object.prototype
console.log(Student.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.dir(Student.__proto__);
console.dir(Function.prototype.__proto__);
```

```javascript
/*
思考题1
  实现时间对象的扩展，要求调用 formate 方法返回 yy-mm-dd 这种格式的日期。
  例如：new Date().formate();  // 2022-09-14
*/

Date.prototype.formate = function() {
  const y = this.getFullYear()
  const m = this.getMonth() + 1) >= 10 ? (this.getMonth() + 1) : '0' + (this.getMonth() + 1)
  const d = this.getDate() >=10 ? this.getDate() : '0' + this.getDate()
  return y + '-' + m + '-' + d
}

var d = new Date()
console.log(d.formate())

/*
思考题2:
  要求封装一个 Dom 操作，实现以下功能。
  var box = new Dom('id'); // 可以返回当前 id 的这个 dom 节点
  box.on(type, fn) // 添加事件
  box.html() // 返回该 dom 的节点内容
  box.html('内容') // 可以修改 dom 节点的内容 

  进阶：
    box.on().html() // 类似 jQuery 的链式调用
*/

<button id="btn">按钮</button>
<p id="txt">文字</p>

function $(id) {
  this.dom = document.getElementById(id);
}
$.prototype.on = function(type, fn, bool = false) {
  this.dom.addEventListener(type, fn, bool);
  return this;
}
$.prototype.html = function(val) {
  if(val) {
    this.dom.innnerHTML = val;
    return this;
  } else {
    return this.dom.innnerHTML;
  }
  
}

const btn = new $('btn');
btn.on('click',function(){
  console.log('on事件');
  console.log(new $('txt').html());
}).html('添加')
```

# this

## 1、理解

当函数被调用时，会创建一个活动记录（执行上下文），这个记录会包含函数在哪里调用（调用栈）。函数调用名字、函数参数等信息，而 this 就是这个上下文中的一个属性，会在函数执行的过程中用到的，在非严格模式下总是会指向一个对象，严格模式下可以是任意值。

this 在不同的场合下，表示不同的值。

总之 this 是一个指针，是`在函数运行时进行绑定`的，而不是在编写函数时绑定的，所以它永远指向最后调用它的对象。

## 2、this 指向（非常重要）

### 1）、默认绑定

在`严格模式`下绑定到 `undefined` ，`非严格模式`绑定到全局对象 `window` 。

```javascript
function foo() {
  'use strict';  // 严格模式
  console.log(this);  // window
}
window.foo();  // foo 函数调用者是 window
// 非严格模式输出：Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// 严格模式输出：undefined
```

### 2）、隐式绑定

当函数引用有上下文对象时，则会把函数中的 this 绑定到`这个上下文对象` 。

```javascript
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

```javascript
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

### 3）、构造函数中的 this

当函数通过 new 关键字调用，函数内部的 this 指向`新创建的对象` 。

```javascript
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

### 4）、显示绑定

使用 `call`、`bind` 以及 `apply` 来指定 this 指向。

```javascript
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

```javascript
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

```javascript
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

### 5）、箭头函数

箭头函数中没有 this 的绑定，只能通过`箭头函数所在的作用域`来决定它的值，所以箭头函数中的 this 始终指向定义函数时 this 的指向。与调用者没有关系。

```javascript
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

# 面向对象三大特征

JS 是属于面向对象编程的，但是在 ES5之前，JS没有类的概念的，是基于原型来实现的面向对象编程。

## 1、封装

### 1）、理解

通过封装可以实现隐藏对象内部实现的细节，然后对外提供一致的接口。

### 2）、如何封装

- 将不需要公开的数据进行私有化处理，外部就无法直接访问
- 可以提供一些特权方法对属性进行访问或者处理

```javascript
// 例子 - 需求：如果是女生，那么年龄不应该暴露出去
function User(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

// 实例化
var u1 = new User('辣辣',18,'女');
console.log(u1.age);  
// 不足：年龄可以被访问，所以需要进行更细致地封装

// 如何私有化处理：
* 法1：将age变为函数内部的局部变量
* 法2：age使用Symbol表示，唯一值，外部无法拿到
```

[封装细化的详细过程](C:\Users\daidai\Desktop\Note\代码\封装过程 - 详细版.html)

```javascript
// 例子 - 细化版
(function(){
  var _age = Symbol();
  var _name = Symbol();
  function User(name, age, sex) {
    this[_name] = name;  // 私有属性
    this[_age] = age;  // 如果是女生，那么年龄不应该暴露出去
    this.sex = sex; 
  }
  User.prototype.getAge = function() {  // 特权属性
    if(this.sex === '女') {
      return '保密'
    } else {
      return this[_age]
    }
  }
  User.prototype.getName = function(){
    return this[_name];
  }
  User.prototype.setName = function(newName){
    this[_name] = newName;
  }  

  // 静态属性/静态方法
  // 直接在构造函数(也是个对象)上添加属性或者方法，那么该属性或者方法只能通过构造函数访问
  User.version = '1.0.0'

  // 暴露
  window.User = User;
})()

// 实例化
var u1 = new User('辣辣',18,'女');
var u2 = new User('朱朱',3,'男');
console.log(u1.getAge());  // 保密
console.log(u2.getAge());  // 3
console.log(u2.name);  // undefined
u2.setName('呆呆');
console.log(u2.getName());  // 呆呆
console.log(u1._age);  // undefined
console.log(u1);  // 此时虽然User有3个属性，能访问并直接修改的只有sex

console.log(u1.version);  // undefined，实例无法访问静态属性
console.log(User.version);  // 1.0.0
```

## 2、继承

### 1）、理解

将多个构造函数中的类似代码提取出来，从而减少冗余代码的目的。

- 子类实例化的对象必须拥有父类所有的属性和方法
- 子类实例化的对象也要属于父类

### 2）、例子

#### a、构造函数继承

可以实现子类继承父类中所有的属性和方法，但是无法实现子类继承父类原型中的属性和方法。

```javascript
function User(name, age) {  // 父级构造函数
  this.name = name
  this.age = age
}
User.prototype.sayHi = function() {
  console.log(this.name + ' Hi');
}

// 构造函数继承 - 可以实现子类继承父类中所有的属性和方法，但是无法实现子类继承父类原型中的属性和方法
function Student(name, age, classname) {  // 子构造函数，能够实现继承 User 中的属性和方法
  this.classname = classname;

  // 借用父类的构造函数
  // User.apply(this, [name, age])
  User.apply(this, arguments)  // 相当于在这里执行 User 函数，并且将 User 函数中的 this 指向 Student
}

// 实例化
var s1 = new Student('小乔', 18, '高三1班');
s1.sayHi();  // 输出：s1.sayHi is not a function
console.log(s1.name,s1.age);  // 输出：小乔 18
```

#### b、原型继承

实现子类继承了父类原型上所有的属性和方法，也继承了父类所有的属性和方法，但是父类部分的属性无法获取到值。

```javascript
function User(name, age) {  // 父级构造函数
  this.name = name
  this.age = age
}
User.prototype.sayHi = function() {
  console.log(this.name + ' Hi');
}

// 原型继承：实现子类继承了父类原型上所有的属性和方法，也继承了父类所有的属性和方法，但是父类部分的属性无法获取到值
function Student(name, age, classname) {  // 子构造函数，能够实现继承 User 中的属性和方法
  this.classname = classname;
}

Student.prototype = new User();  // 替换 Student 的原型
Student.prototype.constructor = Student;  // 找回构造函数属性

// 实例化
var s1 = new Student('小乔', 18, '高三1班');
s1.sayHi();  // 输出：undefined Hi
console.log(s1.name,s1.age);  // 输出：undefined undefined
```

#### c、组合式继承

组合式继承存在的问题：两次调用 User 函数，子类原型也继承了父类属性（多余的）。

```javascript
function User(name, age) { // 父级构造函数
  this.name = name
  this.age = age
}
User.prototype.sayHi = function() {
  console.log(this.name + ' Hi');
}

function Student(name, age, classname) {
  this.classname = classname;

  // 第一步、实现子类继承父类所有的属性和方法
  User.apply(this, arguments)
}

// 第二步、实现子类继承父类原型上所有的属性和方法
Student.prototype = new User();

// 第三步、找回子类的构造函数
Student.prototype.constructor = Student;

// 实例化
var s1 = new Student('小乔', 18, '高三1班');
s1.sayHi();
console.log(s1);
```

#### d、寄生组合式继承

ES5 中相对比较完美的继承

```javascript
function User(name, age) {  // 父级构造函数
  this.name = name
  this.age = age
}
User.prototype.sayHi = function() {
  console.log(this.name + ' Hi');
}

function Teacher(name, age, course) {
  this.course = course;

  // 第一步、实现子类继承父类所有的属性和方法
  User.apply(this, arguments);
}

// 第二步、子类继承父类原型方法
function inheritprotoType(Child, Father) {
  function F() {}
  F.prototype = Father.prototype;
  Child.prototype = new F();  // F 是空函数，几乎不占据内存的
  Child.prototype.constructor = Child;
}
inheritprotoType(Teacher, User);  // 调用后实现继承
var t1 = new Teacher('张老师', 33, ' JS');
t1.sayHi();
console.log(t1)
```

## 3、多态

### 1）、理解

方法可以根据传递的参数类型、参数个数等进行区别，然后返回不同的结果。

### 2）、例子

```javascript
function Person() {
  this.show = function() {
    console.log('正在访问人类的世界');
  }
}

function Cat() {
  this.show = function() {
    console.log('正在访问猫星人的世界');
  }
}

function output(obj) {
  obj.show();
}

// 同一个函数传递不同的对象，能产生不同的结果，就是多态
output(new Person());
output(new Cat());
```

```javascript
>> 场景
$().html()
$().html('内容')
$().css('color')
$().css('color', 'red');
$().css({
  color: 'red'
})
```

# class

## 1、概念

ES5  之前是没有`类`的概念，使用`构造函数`来替代类。

class 是 ES6 提出来的一个语法糖，更加接近传统语言中的类的写法，作为对象的模板。

## 2、语法

```javascript
// ES5 
function Person() {  // 类 / 构造函数
  this.name = '';
}
Person.prototype.sayHi = function() {}  // 原型

Person.version = '1.0.0';  // 静态属性

// 实例化 - 根据 类 的模板生成对象
var p1 = new Person();
p1.name;
p1.sayHi();
Person.version;
```

```javascript
// ES6
class Person {  // 类
  constructor() {  // 构造函数 
    this.name = '';
  }
  sayHi() {  // 相当于ES5构造函数原型上的方法
    // ...
  }

  static version = '1.0.0';  // 静态属性
}

// 实例化
var p2 = new Person();  // 调用 class 必须使用关键字 new
p2.name;
p2.sayHi();
Person.version;
```

## 3、constructor

constructor 是 class 的默认方法，通过 new 调用 class 时，会自动执行该方法，如果创建 class 的时候没有添加 constructor，那么会自动生成一个空的 constructor。

```javascript
// ES6 
class Person {
  constructor(name, age) { // 构造函数 
    this.name = name;
    this.age = age;
  }
}

// ES7
class Person {
  name = '';
  age = '';
}
```

## 4、静态属性

如果在一个属性或者方法前面加上 static 关键字，那么这个属性或方法就不能被实例继承，只能通过类名来调用。

```javascript
class Person {
  static version = '1.0.0';
  static run() {
    console.log('run')
  }
}
Person.version
Person.run()
```

## 5、class 继承

直接通过 extends 关键字来实现继承。

```javascript
class Student extends Person {  // 子类继承父类
  constructor(name, age, classname) {
    super(name, age);  // 子类构造中必须调用 super,这里 super 理解为父类的构造函数
    this.classname = classname
  }
}
```

## 6、getter 和 setter

使用 get 和 set 关键词对属性访问和属性设置进行拦截。

```javascript
class Vue {
  constructor() {
    this.state = {
      msg: 'Hi'
    }
  }
  get f() { // 当访问 实例的 f 属性时，会触发该方法，必须在该方法中设置返回值
    return this.state.msg;
  }
  set f(newVal) { // 当修改实例的 f 属性时，就会触发该方法
    this.state.msg = newVal;
  }
}

var vue = new Vue();
vue.f = 'Hello';
console.log(vue.f);
```

## 7、[案例 - 使用 class 封装 Ajax](C:\Users\daidai\Desktop\Note\代码\myAjax.js)

# JS 设计模式

设计模式就是来帮助我们写出可复用和可维护性的程序。

代码的高内聚、低耦合。

设计原则：

- 单一职责
- 最少知识
- 开放 - 封闭

## 1、工厂模式

1）、说明

是为了解决多个类似对象声明的问题。

2）、案例

```javascript
// 简单工厂模式
function UserFactory(role) {
  function SuperAdmin() {
    this.name = '超级管理员';
    this.viewPage = ['首页','权限','应用数据','学生管理'];	
  }
  function Admin() {
    this.name = '管理员';
    this.viewPage = ['首页','应用数据','学生管理'];
  }
  function User() {
    this.name = '超级管理员';
    this.viewPage = ['首页'];
  }
  
  switch(role) {
    case 'SuperAdmin':
      return new SuperAdmin();
    case 'Admin':
      return Admin();
    case 'User':
      return User();
    default:
      throw new Error('参数错误，可选参数应该是SuperAdmin，Admin，User')
  }
}
UserFactory('SuperAdmin')
```

```javascript
// 通过安全模式去创建工厂
function UserFactory(role) {
  if(this instanceof UserFactory) {  //判断是否使用 new 关键字来调用方法 
      if(!this[role]){  //判断参数传递是否正确
      throw new Error('参数错误，可选参数应该是SuperAdmin，Admin，User')
    }
    return new this[role]();
  } else {
    return new UserFactory(role);
  }
  
}
UserFactory.prototype.SuperAdmin = function() {
    this.name = '超级管理员';
    this.viewPage = ['首页','权限','应用数据','学生管理'];	
}
UserFactory.prototype.Admin = function() {
    this.name = '管理员';
    this.viewPage = ['首页','应用数据','学生管理'];
}
UserFactory.prototype.User = function() {
    this.name = '超级管理员';
    this.viewPage = ['首页'];
}
  
var a = new UserFactory('Admin');
console.log(a);  // 输出：UserFactory.Admin {name: '管理员', viewPage: Array(3)}
var b = UserFactory('Admin');  // 少了new，需要进行改造
console.log(b);  // 输出：参数错误，可选参数应该是SuperAdmin，Admin，User
```

## 2、单例模式

1）、说明

在某些情况下，一些对象只需要一个实例，而不能创建很多个，比如全局缓存、模态框、store。

2）、思想

如果实例已经创建，则直接返回。

3）、单例的实现

```javascript
const Singleton = (function() {
  let instance;
  
  return function() {
    if(instance) {
      return instance
    }
    return instance = this
  }
})()
```

4）、案例

```javascript
// 案例1 - 模态框
<button id="btn">模态框</button>

const Singleton = (function() {
  let instance;
  
  return function() {
    if(instance) {
      return instance;
    }
    modal();
    return instance = this;
  }
})();

function modal() {
  var div = document.createElement('div');
  div.style.width = '300px';
  div.style.height = '100px';
  div.style.background = 'pink';
  document.body.appendChild(div);
}

const btn = document.getElementById('btn');
btn.onclick = function() {
  new Singleton();
}
// 输出：点击按钮只显示一个模态框
```

```javascript
// 案例2 - 全局数据存储对象
function Store(state) {
  this.state = {...state}
  this.setState = function() {}
  this.getState = function() {}
}

let createStore = (function() {
  let instance;
  
  return function(state) {
    if(!(this instanceof createStore)) {
      return new createStore(state);
    }
    if(instance) {
      return instance;
    }
    return instance = new Store(state);
  }
})();

const store = createStore({
  num: 0
})
const store2 = createStore({
  msg: 'Hi'
})
console.log(store.state);  // 输出：{num: 0}
console.log(store2.state);  // 输出：{num: 0}
```

## 3、策略模式

1）、说明

定义了一系列的算法，把它们封装起来，并且使它们可以相互的替换。

2）、案例

```javascript
// 案例1 - 返回今天星期几
var w = new Date().getDay();

// 法1：
var week;
switch(w) {
  case 0:
    week = '星期天';
    break;
  case 1:
    week = '星期一';
    break;
  // ...
}

// 法2：
var week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
console.log(week[w]);
```

```javascript
// 案例2 - 通过城市名去返回城市地标
// 法1：
switch(city){
  case '北京':
    return '故宫';
  case '成都':
    return '熊猫基地';
}

// 法2：
const a = {
  beijing: {
    city: '北京',
    logo: '故宫'
  }
}
```

```javascript
// 案例3 - 年终奖分配
var nianzhong = {
  A: function(c) {
    return salary * 2;
  },
  B: function(c) {
    return salary * 1;
  },
  C: function(c) {
    return 0;
  },
  D: function(c) {
    return -salary;
  },
}

nianzhong['A'](6000);
nianzhong['B'](5000);
nianzhong['C'](4000);
```

```javascript
// 案例4 - 简单的表单验证策略
<form>
  <input type="text" id="user">
  <input type="password" id="pwd">
  <button type="button" id="subbtn">登录</button>
</form>

const strategies = {
  isEmpty: function(value, errorMsg) {
    if(value === ''){
      return errorMsg;
    }
  },
  minLength: function(value, length, errorMsg) {
    if(value.length < length) {
      return errorMsg;
    }
  }
}

document.getElementById('subbtn').onclick = function() {
  var userValue = document.getElementById('user').value;
  var pwdValue = document.getElementById('pwd').value;

  var userStrategy = strategies.isEmpty(userValue, '请输入账号');
  var pwdStrategy = strategies.isEmpty(pwdValue, '请输入密码');
  var pwdLength = strategies.minLength(pwdValue, 6, '密码不能小于六位');

  var err = userStrategy || pwdStrategy || pwdLength;
  if(err) {
    return alert(err);
  }
}
```

## 4、观察者模式

1）、概念

观察者模式是指一个对象维持一系列依赖于它的对象，当有状态发生变更的时候，就会去通知这一系列的对象去更新。

2）、组成

- Subject：主题、有订阅方法和通知方法等。

- Observer：观察者，观察主题，会有一个更新的方法。

3）、举例

- 观察者：所有要买房的人
- 主题：楼盘

4）、应用场景

当一个对象的状态发生改变时，需要通知其它对象，如 Vue2.0 的响应式数据（观察者 + 数据劫持）

5）、案例

```javascript
// 观察者：购房者
function Observer(name) {
  this.name = name;
}
Observer.prototype.update = function(msg) {  // 更新
  console.log(this.name + '收到 - ' + msg + ' - 通知了');
}

// 主题：楼盘
function Subject(name) {
  this.name = name;
  this.observers = [];  // 收集所有关注该楼盘的对象
}
Subject.prototype.add = function(observer) {  // 添加关注者
  this.observers.push(observer)
}
Subject.prototype.notify = function(msg) {  // 通知
  for(var i = 0; i < this.observers.length; i++) {
    this.observers[i].update(this.name + '-' + msg);
  }
}
Subject.prototype.remove = function(observer) {  // 移除某一个
  for(var i = 0; i < this.observers.length; i++) {
    if(this.observers[i] === observer) {
      this.observers.splice(i, 1);
    }
  }
}
Subject.prototype.clear = function(observer) {  // 移除所有
  this.observers = [];
}

// 创建观察者
const lilei = new Observer('李雷');
const hanmeimei = new Observer('韩梅梅');
const lucy = new Observer('lucy');

// 主题
const rongchuang = new Subject('融创');
const hengda = new Subject('恒大');

// 关注融创楼盘
rongchuang.add(lilei);
rongchuang.add(hanmeimei);

// 关注恒大楼盘
hengda.add(lucy);

// 发布新楼盘
rongchuang.notify('新楼盘');
hengda.notify('破产了');

/*
  输出结果：
    李雷收到 - 融创-新楼盘 - 通知了
    韩梅梅收到 - 融创-新楼盘 - 通知了
    lucy收到 - 恒大-破产了 - 通知了
*/
```

## 5、发布/订阅者模式

1）、概念

是指希望接受通知的对象给予一个主题通过自定义事件订阅，发布事件的对象通过事件中心去通知所有的主题订阅者。

2）、组成

- 发布者（主题）

- 订阅者

- 事件中心：第三方中介

  即发布和订阅都必须通过事件中心，禁止一切`私下交易`。

3）、案例

```javascript
function EventBus() {
  this.handleEvents = {};
}
EventBus.prototype.on = function(type, callback) {  // 订阅
  if(!this.handleEvents[type]) {
    this.handleEvents[type] = [];
  }
  this.handleEvents[type].push(callback);
}
EventBus.prototype.emit = function(type, ...args) {  // 发布
  if(this.handleEvents[type]) {  // 如果存在这个事件
    const handleEvent = this.handleEvents[type].slice();  // 浅拷贝

    handleEvent.forEach(callback => {
      callback.apply(this, args);  // 确保 this 指针正确
    });
  }
}
const bus = new EventBus();  // 事件中心

// 购房者进行房源订阅
bus.on('yaochuang', function(msg) {
  console.log('李雷订阅的：', msg);
})
bus.on('yaochuang', function(msg) {
  console.log('韩梅梅订阅的：', msg);
})
bus.on('wanke', function(msg) {
  console.log('lucy订阅的：', msg);
})

console.log(bus);

// 发布消息
bus.emit('yaochuang', '有新楼盘了')
bus.emit('wanke', '加推两栋，只要999999')

/*
  输出结果：
    李雷订阅的：有新楼盘了
    韩梅梅订阅的：有新楼盘了
    lucy订阅的：加推两栋，只要999999
*/
```

# 路由

根据不同的 `url` 返回不同的页面。

## 1、路由划分

- 前端路由

  前端控制页面的展示，分配路径。

- 后端路由

  每次访问一个页面，都会发送一个请求（GET），然后后端返回 html 文件，交给浏览器进行渲染。

  php、jsp、ejs

## 2、前端路由模式

都是伴随 AJAX 的发展的，前端流行单页应用（SPA），所以会在当前的 html 中进行`无刷新`的交互。

### 1）、hash 模式

http://localhost:3000/home#login

该地址中的 # 之后的内容发生改变，是不会刷新页面的（hash值改变，不会向服务器发起请求）。

当 hash 发生改变的时候，就会触发 hashchange 这个事件。

### 2）、history 模式

在 HTML 5 发布后才新增的一种模式，给 history 对象增加了两个 API，分别是 `pushState` 和 `replaceState` 。此时调用该方法可实现修改 url,但是不会发起请求，所以也可以实现前端路由，并且该方式不会在路径中出现 # 这个符号，所以更加美观。

```javascript
>> history.state
   history 的状态值，可以不断的堆叠的。

>> history.pushState(state, titile, url)
   用于在历史中添加一条记录，该方法不会触发浏览器的刷新。

   * state：添加记录相关的状态对象；
   * titile：新页面的标题，但是目前浏览器基本忽略了该字段，所以可以不填
   * url：新的地址。

注意：必须保证是在服务器模式下使用。
```

### 3）、popstate 事件

每当同一个文档的浏览器历史出现变化时，就会触发该事件。

> 注意：调用 pushState 和 replaceState 并不会触发该事件，只有点击浏览器的`前进后退按钮`，`才会触发`该事件，或者通过 JS 去调用 `history.go()`，`history.back()` 和 `history.forward()` 才会触发。

# 响应式数据

## 1、语法

```javascript
Object.defineProperty(obj, prop, des)
数据劫持，会直接在一个对象上定义一个属性，或者修改一个现有的属性，然后返回这个对象。

>> 参数说明
  obj：必填，要劫持的目标对象
  prop：必填，要定义或者修改的属性名称
  des：必填，被定义或者修改的属性描述，是一个对象
  
    * value：表示 prop 属性的属性值，不能同时设置 get。
    * writable：该字段为 true 时，prop 属性才可以被修改，默认值为 false。
    * configurable：当值为 true 时，属性才可以被改变或者删除，默认为 false。
    * enumerable：为 true 时，prop 属性能够出现在对象的枚举属性中（可以被遍历，即 for in, Object.keys等），默认值为 false。
    * get：一个给属性提供 getter 的方法。
    * set：一个给属性提供 setter 的方法。
```

```javascript
// 案例
var obj = {
  name: '呆呆',
  city: '成都'
}

Object.defineProperty(obj, 'age', {
  // value: 18,
  // writable: true,  // 可以被修改
  configurable: true,  // 可以被改变或者删除
  enumerable: true,  // 可以被遍历
  get: function() {
    return 18;
  },
  set: function() {
    obj.age = 20;
  }
});

// obj.age = 20;
// console.log(obj.age);

// delete obj.age;
console.log(obj);

for(var i in obj) {
  console.log(i,obj[i]);
}
```

## 2、案例

```javascript
// 单个属性劫持
<div id="app1"></div>

let data = {
  name: '呆呆',
}

let vm = {};
Object.defineProperty(vm, 'msg', {
  get() {
    return data.name;
  },
  set(newValue) {
    if(newValue === data.name){
      return;
    }
    data.msg = newValue;
    document.querySelector('#app1').innerHTML = data.msg;
  }
})
```

运行结果：![单个属性劫持](/images/单个属性劫持.png)

```javascript
// 多个属性劫持
<div id="app2"></div>

let data = {
  msg: '呆呆',
  age: 18
}

let vm = {};
function defineReact() {
  Object.values(data)  // 返回数组，由对象的属性值组成
  const arr = Object.keys(data);  // 遍历对象的key值(对象的属性)
  console.log(arr);
  arr.forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return data[key];
      },
      set(newValue) {
        if(newValue === data[key]) {
          return;
        }
        data[key] = newValue;

        // 视图更新
        document.querySelector('#app2').innerHTML = data[key];
      }
    })
  })
}
defineReact();
```

运行结果：![多个属性劫持](/images/多个属性劫持.png)



