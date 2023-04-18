# JS

## 1、export 和 export default 有什么区别？

- `export` 是命名导出，每个模块可以命名导出多个
- `export default` 是默认导出，每个模块只能默认导出一个
- 使用 `export default` 导出的使用 `import XX from 'xxx'` 来导入
- 使用 `export` 导出的使用 `import { exportName } from 'xxx'` 来导入
- 两者可以同时存在

## 2、 说下 var、let 和 const 有什么区别？

- var、let 定义变量，const 定义常量
- var 存在变量提升，let 和 const 不存在变量提升
- let、const 有块级作用域（以大括号为边界）
- const 声明的变量，基本类型的数据无法修改，但是数组和对象可以修改内部的属性值
- var 可以重复声明，let、const 在同一个块级作用域中重复声明会报语法错误
- 浏览器的全局对象是 window ，Node 的全局对象是 global 。var 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 let 和 const 不会
- 在使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用 var 声明的变量不存在暂时性死区
- 在变量声明时，var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。

## 3、请说说 new String("A") 和 String("A") 分别返回的结果，请解释为什么？

- new String("A")：返回类型是引用类型，在堆内存储，返回值是字符串对象
- String("A”)：返回类型是基本类型，在栈内存储，返回值是字符串值，和直接定义‘A’没区别

## 4、在严格模式下，全局作用域中函数中 this 的值是什么？

全局作用域中函数中的 this 指向 undefined 。

## 5、箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？

- 箭头函数没有 this，它会从自己的作用域链的上一层继承 this（因此无法使用 apply / call / bind 进行绑定 this 值）
- 箭头函数不可以使用 arguments 对象，该对象在函数体内不存在，如果要用，可以用 rest 参数代替
- 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数
- 不可以使用 new 命令，因为没有自己的 this 以及 prototype 属性

## 6、数据类型检测的方式有哪些？

```js
// typeof
console.log(typeof 2);             // number
console.log(typeof true);          // boolean
console.log(typeof 'str');         // string
console.log(typeof []);            // object    
console.log(typeof function(){});  // function
console.log(typeof {});            // object
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object

// instanceof
// 是判断在其原型链中能否找到该类型的原型
// instanceof只能正确判断引用数据类型，而不能判断基本数据类型
console.log(2 instanceof Number);               // false
console.log(true instanceof Boolean);           // false
console.log('str' instanceof String);           // false
console.log([] instanceof Array);               // true
console.log(function(){} instanceof Function);  // true
console.log({} instanceof Object);              // true

// constructor
// constructor有两个作用，一是判断数据的类型，二是对象实例通过 constrcutor 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，constructor 就不能用来判断数据类型了
console.log((2).constructor === Number);                // true
console.log((true).constructor === Boolean);            // true
console.log(('str').constructor === String);            // true
console.log(([]).constructor === Array);                // true
console.log((function() {}).constructor === Function);  // true
console.log(({}).constructor === Object);               // true

// Object.prototype.toString.call()
var a = Object.prototype.toString;

console.log(a.call(2));             // [object Number]
console.log(a.call(true));          // [object Boolean]
console.log(a.call('str'));         // [object String]
console.log(a.call([]));            // [object Array]
console.log(a.call(function(){}));  // [object Function]
console.log(a.call({}));            // [object Object]
console.log(a.call(undefined));     // [object Undefined]
console.log(a.call(null));          // [object Null]

// Array.isArray()
// 判断数组
Array.isArray(obj);
console.log(Array.isArray([]));     // true
console.log(Array.isArray(123));    // false
console.log(Array.isArray(null));   // false
```

## 7、null 和 undefined 区别

首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。 undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。 undefined 在 JavaScript 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 undefined 值的判断。我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。 当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object” ，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

## 8、|| 和 && 操作符的返回值？

|| 和 && 首先会对第一个操作数执行条件判断，如果其不是布尔值就先强制转换为布尔类型，然后再执行条件判断。

- 对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。
- && 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。

|| 和 && 返回它们其中一个操作数的值，而非条件判断的结果

```js
true && console.log(1)   // 1
false && console.log(1)  // false
```

## 9、new 操作符的实现原理。

new 操作符的执行过程：

- 首先创建了一个新的空对象
- 设置原型，将对象的原型设置为函数的 prototype 对象
- 让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
- 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

```js
// 具体实现
function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // 判断参数是否是一个函数
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObject;
}
// 使用方法
// objectFactory(构造函数, 初始化参数);
```

## 10、为什么函数的 arguments 参数是类数组而不是数组？如何遍历类数组?

arguments 是一个对象，它的属性是从 0 开始依次递增的数字，还有 callee 和 length 等属性，与数组相似；但是它却没有数组常见的方法属性，如 forEach，reduce 等，所以叫它们类数组。

```js
// 要遍历类数组，有三个方法
// 1、将数组的方法应用到类数组上，这时候就可以使用call和apply方法
function foo(){
  Array.prototype.forEach.call(arguments, a => console.log(a))
}

// 2、使用Array.from方法将类数组转化成数组
function foo(){
  const arrArgs = Array.from(arguments)
  arrArgs.forEach(a => console.log(a))
}

// 3、使用展开运算符将类数组转化成数组
function foo(){
  const arrArgs = [...arguments]
  arrArgs.forEach(a => console.log(a))
}
```

## 11、如何判断一个对象是不是空对象？

```js
Object.keys(obj).length === 0
```

## 12、null，undefined 的区别？

undefined 的含义是未定义，一般变量声明了但还没有赋值的时候会返回 undefined。

null 表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null 表示一个空对象指针。

## 13、&&、 || 和 !! 运算符分别能做什么

- `&&` 叫逻辑与，在其操作数中找到第一个虚值表达式并返回它，如果没有找到任何虚值表达式，则返回最后一个真值表达式。它采用短路来防止不必要的工作。
- `||` 叫逻辑或，在其操作数中找到第一个真值表达式并返回它。这也使用了短路来防止不必要的工作。在支持 ES6 默认函数参数之前，它用于初始化函数中的默认参数值。
- `!!` 运算符可以将右侧的值强制转换为布尔值，这也是将值转换为布尔值的一种简单方法。

## 13、ajax中 get 和 post 有什么区别?

- get 和 post 都是数据提交的方式。
- get 的数据是通过网址问号后边拼接的字符串进行传递的。
- post 是通过一个 HTTP 包体进行传递数据的。
- get 的传输量是有限制的，post 是没有限制的。
- get 有缓存，post 没有。
- get 只接受 ASCII 字符的参数数据类型，post 没有限制。
- get 请求参数会保留历史记录，post 中参数不会保留。
- get 在浏览器回退时无害，post 会再次提交请求。
- get 的安全性相对没有 post 高。
- 一般用 get 来获取数据，post 一般用来修改数据。

## 14、post一般用于修改服务器上的资源，对所发送的信息没有限制。比如

- 无法使用缓存文件（更新服务器上的文件或数据库）。
- 向服务器发送大量数据（POST 没有数据量限制）。
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠。

## 15、一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）

- 查找浏览器缓存
- DNS 解析、查找该域名对应的 IP 地址、重定向（301）、发出第二个GET请求
- 进行 HTTP 协议会话
- 客户端发送报头（请求报头）
- 服务器回馈报头（响应报头）
- html 文档开始下载文档树建立，根据标记请求所需指定MIME类型的文件
- 文件显示
- 浏览器这边做的工作大致分为以下几步：
- 加载：根据请求的 URL 进行域名解析，向服务器发起请求，接收文件（HTML、JS、CSS、图象等）。
- 解析：对加载到的资源（HTML、JS、CSS等）进行语法解析，建议相应的内部数据结构（比如HTML 的 DOM 树，JS的（对象）属性表，CSS 的样式规则等等）

## 16、什么是事件代理

事件代理（Event Delegation），又称之为事件委托。是 JavaScript 中常用绑定事件的常用技巧。顾名思义，”事件代理“即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。事件代理的原理是 DOM 元素的事件冒泡。
使用事件代理的好处是：

- 可以提高性能
- 可以大量节省内存占用，减少事件注册，比如在 table 上代理所有 td 的 click 事件就非常棒
- 可以实现当新增子对象时无需再次对其绑定

## 17、0.1+0.2 !== 0.3 ?

面试的时候，问你这个问题，要是回答错误的话，估计面试官对基础很是怀疑！！！

问你这个题目的时候，你可以牵扯出很多问题，比如 JS 如何存储小数的呢？比如聊一聊二进制，比如实际开发中，遇到精度的问题，你是怎么解决的，你有什么好办法。

聊完这个，你可以牵扯出最大安全数，比如 JavaScript 的最大安全整数是多少，超出这个范围的话，怎么解决精度问题呢？

ES规范中新提出的 BigInt 解决了什么问题呢，你又发现了BigInt中哪些坑呢？

如何解决精度问题呢？

答：因为 0.1 的二进制值是个无限循环小数，JavaScript 使用 64 位 `IEEE 754` 标准，只能表示 52 位小数，所以精度丢失，所以 `0.1 + 0.2 !== 0.3`。

解决：

- 在计算前将值转换为整数 再进行计算
- 对结果进行位截取后进行比较

## 18、为什么会有 BigInt 的提案？

JavaScript 中 Number.MAX_SAFE_INTEGER 表示最大安全数字，计算结果是 9007199254740991，即在这个数范围内不会出现精度丢失（小数除外）。但是一旦超过这个范围，js 就会出现计算不准确的情况，这在大数计算的时候不得不依靠一些第三方库进行解决，因此官方提出了 BigInt 来解决此问题。

## 19、== 操作符的强制类型转换规则？

对于 == 来说，如果对比双方的类型不⼀样，就会强制类型转化后再进行比较，进行如下判断流程：

- 首先会判断两者类型是否相同，相同的话就比较两者的大小

- 类型不相同的话，就会进行类型转换

-  会先判断是否在对比 null 和 undefined，是的话就会返回 true

- 判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number

  ```js
  1 == '1'
        ↓
   1 == 1
  ```

- 判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断

  ```js
  '1' == true
   ↓
  '1' == 1
   ↓
   1 == 1
  ```

- 判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断

  ```js
  '1' == { name: 'js' }
   ↓
  '1' == '[object Object]'
  
  // 对普通对象来说，除非自行定义 toString() 方法，否则会调⽤ toString()
  （Object.prototype.toString()）来返回内部属性 [[Class]] 的值，如"[object
  Object]"。如果对象有自己的 toString() 方法，字符串化时就会调用该方法并使用其返回值。
  ```

## 20、如何判断一个对象是空对象？

```js
// 使用 JSON 自带的 stringify 方法来判断

if (JSON.stringify(Obj) == "{}") {
  console.log("空对象");
}

// 使用ES6新增的方法 Object.keys() 来判断
if (Object.keys(Obj).length === 0) {
  console.log("空对象");
}
```

## 21、const 对象的属性可以修改吗？

const 保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。对于基本类型的数据（数 值、字符串、布尔值），其值就保存在变量指向的那个内存地址，因此等同于常量。 但对于引用类型的数据（主要是对象和数组）来说，变量指向数据的内存地址，保存的只是⼀个指针，const 只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。

## 22、如果 new 一个箭头函数的会怎么样？

箭头函数是 ES6 中的提出来的，它没有 prototype，也没有自己的 this 指向，更不可以使用 arguments 参 数，所以不能 New 一个箭头函数。 new 操作符的实现步骤如下：

- 创建一个对象
- 将构造函数的作用域赋给新对象（也就是将对象的proto属性指向构造函数的 prototype 属性）
- 指向构造函数中的代码，构造函数中的 this 指向该对象（也就是为这个对象添加属性和方法）
- 返回新的对象

所以，上面的第二、三步，箭头函数都是没有办法执行的。

## 23、扩展运算符的作用及使用场景

1、对象扩展运算符 对象的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中。

```js
let bar = { a: 1, b: 2 };
let baz = { ...bar };  // { a: 1, b: 2 }
```

扩展运算符内部的同名属性会被覆盖掉

```js
let bar = { a: 1, b: 2 };
let baz = { ...bar, ...{ a: 2, b: 4 } };  // {a: 2, b: 4}
```

2、数组扩展运算符 数组的扩展运算符可以将一个数组转为用逗号分隔的参数序列，且每次只能展开一层数组。

```js
console.log(...[1, 2, 3]);
// 1 2 3

console.log(...[1, [2, 3, 4], 5]);
// 1 [2, 3, 4] 5
```

将数组转换为参数序列

```js
function add(x, y) {
  return x + y;
}
const numbers = [1, 2];
add(...numbers);  // 3
```

合并数组

```js
const [first, ...rest] = [1, 2, 3, 4, 5];
first;  // 1
rest;  // [2, 3, 4, 5]
```

如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错

```js
const [...rest, last] = [1, 2, 3, 4, 5];  // 报错
const [first, ...rest, last] = [1, 2, 3, 4, 5];  // 报错
```

将字符串转为真正的数组

```js
[..."hello"]; // [ "h", "e", "l", "l", "o" ]
```

## 24、对 rest 参数的理解？

扩展运算符被用在函数形参上时，它还可以把一个分离的参数序列整合成一个数组，这一点经常用于获取函数的多余参数，或者处理函数参数个数不确定的情况。

```js
function mutiple(...args) {
  console.log(args);  // [1, 2, 3, 4]
  let result = 1;
  for (var val of args) {
    result *= val;
  }
  return result;
}
mutiple(1, 2, 3, 4);  // 24
```

