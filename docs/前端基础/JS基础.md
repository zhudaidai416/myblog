## 核心语法基础

### 1、JavaScript的定义

是一种运行在**客户端（浏览器）**的**编程语言**，可以用来创建动态更新的内容，控制多媒体、制作图像动画等交互效果。

一种直译式脚本语言，一种动态类型、弱类型、基于原型的语言。

**组成部分**

- 核心（ECMAScript）：描述该语言的语法和基本对象
- 文档对象模型（DOM）：描述处理网页内容的方法和接口
- 浏览器对象模型BOM）：描述与浏览器进行交互的方法和接口

### 2、JavaScript 书写位置

1）、内部 JavaScript

在 HTML 中嵌入 JavaScript 脚本（内嵌式）

```html
<script type="text/javascript">
  JavaScript代码
</script>
```

> :warning: 注：将 script 标签放在 <font color="red">HTML 文件的底部</font>附近的原因：浏览器会按照代码在文件中的<font color="red">顺序加载</font> HTML。

2）、外部 JavaScript

代码写在以 `.js` 结尾的文件里

```html
<script type="text/javascript" src="JavaScript文件名.js"></script>
```

> :warning: 注：script 标签中间<font color="red">无需写代码</font>，否则会被忽略！
>
> 外部 JavaScript 会使代码更加有序，更易于复用，且没有了脚本的混合，HTML 也会更加易读

3）、行内 JavaScript

代码写在标签内部，直接编写在元素的事件属性中（所有 on 开头的属性名）

```html
<input type="button" value="Press Me" onclick="alert('Hello World');">

<!-- 伪URL方法（在a标签href属性写入js代码）-->
<a href="javascript:alert('Hello World');">Click</a>
```

### 3、js 的注释和结束符

- 单行注释
  - 符号：`//`
  - 作用：// 右边这一行的代码会被忽略
  - 快捷键：`ctrl+/`
- 块注释，多行注释
  - 符号：`/*  */`
  - 作用：在 /* 和 */ 之间的所有内容都会被忽略
  - 快捷键：`alt+shift+a`

- 结束符
  - 作用：使用英文的 `;` 代表语句结束
  - 实际情况：实际开发中，可写可不写，浏览器（JavaScript 引擎）可以自动推断语句的结束位置
  - 约定：为了风格统一，结束符要么每句都写，要么每句都不写（按照团队要求）

## 输入输出语句

交互：<font color="red">用户输入数据</font> → 数据处理 → <font color="red">输出结果</font>展示给用户

### 1、输入     

```js
prompt('请输入你的姓名')
作用：显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字
```

### 2、输出

```js
// 语句1
alert('页面警示框输出的内容')
作用：页面弹出警告框

// 语句2
document.write('向页面文档输出的内容')
作用：在body标签内输出内容
document.write('<h1>h1内容</h1>')
提示：如果输出的内容写标签，也会被解析成网页元素

// 语句3
console.log('控制台输出内容')
作用：控制台输出语法，程序员调试使用

// 语句4
innerHTML写入HTML元素
```

## 变量

变量是计算机中用来**存储数据**的**容器（盒子）**

作用：记录计算机中数据的不同状态

> :warning: 注：变量不是数据本身，它们仅仅是一个用于存储数值的容器，可以理解为是一个个用来装东西的纸箱子。 

### 1、声明变量

要想使用变量，首先需要创建变量（也称为声明变量或者定义变量）

```js
var 变量名
let 变量名

* 声明变量有两部分构成：声明关键字、变量名（标识）
* let即关键字（let：允许、许可、让、要），所谓关键字是系统提供的专门用来声明（定义）变量的词语
```

### 2、变量赋值

定义了一个变量后，就能够初始化它（赋值）。在变量名之后跟上一个“=”，然后是数值。

> :warning: 注：数字直接存储，字符用单引号引起来，表示一段信息

```js
变量名 = 值
let age
age = 18

let age = 18
```

简写：也可以声明变量的时候直接完成赋值操作，这种操作也称为**变量初始化**

当对某个值进行操作时，使用变量

### 3、更新变量

变量赋值后，还可以通过简单地给它一个不同的值来更新它。

```js
let age = 18
age = 19
console.log(age)  // 19

// 变量不能重复声明
// 未捕获的语法错误：标识符age已经被定义了
// Uncaught SyntaxError: Identifier 'age' has already been declared
```

> :warning: 注：let 不允许对同一个变量多次声明

### 4、声明多个变量

多个变量中间用逗号隔开

```js
// 不是很直观，可读性较差
let age = 18, sex = '女'

// 建议一个变量占一行，可读性更好
let age = 18
let sex = '女'
```

内存：计算机中存储数据的地方，相当于一个空间

- 字节：Byte
- GB = 1024 MB
- MB = 1024 KB
- KB = 1024 B
- Byte = 8 bit

变量本质：是程序在**内存中**申请的一块用来存放数据的**小空间**

### 5、变量命名规则与规范

规则：

- 不能用关键字
- 关键字：有特殊含义的字符，JavaScript 内置的一些英文词汇。例如：let、var、if、for 等

- 只能用下划线、字母、数字、$ 组成，且数字不能开头
- 字母严格<font color="red">区分大小写</font>，如 Age 和 age 是不同的变量

规范：

- 见名知意，起名要有意义
- 遵守小驼峰命名法
  - 第一个单词首字母小写，后面每个单词首字母大写。例：userName

关键字、保留字、true、false、null 并不能作为标识符

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

## 常量

- const
- 定义：也是一个容器，用于保存数据的
- 和变量的区别：常量里面保存的值是<font color="red">不允许</font>改变的
- 使用场景：当某个值永远不会改变的时候，我们可以使用常量来保存，目的为了程序的安全

> :warning: 注：1、常量不允许重新赋值，可以理解为是只读的
>
> 2、声明的时候必须赋值（初始化）
>
> 拓展：一般情况下常量大家都习惯用全大写，_ 连接

## 数据类型

### 1、基本数据类型

number 数字型、string 字符串型、boolean 布尔型、undefined 未定义型、null 空型

#### 1）、number

数字：可以用于运算操作，比如对数字的加减乘除等操作

js 中的整数、小数等统一称为数字类型

#### 2）、string

字符串：通过单引号‘’、双引号“”或反引号``包裹的数据都属于字符串（必须成对出现）

单引号和双引号没有本质上的区别，推荐使用单引号

> :warning: 注：1、单引号可以互相嵌套，但是不可以自己嵌套自己（口诀：外双内单、外单内双）
>
> 2、一定注意变量名不要加引号，否则认为是字符串

反引号：解决字符串拼接的问题

**字符串拼接**

- `+` 可以实现字符串的拼接，最常见是字符串拼接变量
- 口诀：数字相加，字符相连
- 模板字符串
  - ``拼接字符串和变量
  - \`${变量名}\`
  - 口诀：反引中间变量套，直接 $ 大括号
  - 反引号中间的字符串**可以换行**的

#### 3）、boolean

布尔型：用于判断真假的数据类型，通常用来判断条件是否成立

true：真，false：假

#### 4）、undefined

未定义是比较特殊的类型，只有一个值 undefined

只声明变量，不赋值的情况下，变量的默认值为 undefined，一般很少直接为某个变量赋值为 undefined

使用场景：可以通过检测这个变量是不是 undefined，判断用户是否有数据传递过来

#### 5）、null

仅仅是一个代表“无”、“空”或者“值未知”的特殊值

undefined 和 null 的区别：

- undefined：没有赋值，不存在
- null：赋值了，但是内容为空

> :warning: 注：typeof null 返回的是 object，对象类型，不代表 null 就是引用数据类型

### 2、引用数据类型

object 对象、Array 数组、Function 函数

## 运算符

### 1、操作符：typeof

```js
typeof undefined  // undefined
typeof null  // object
```

### 2、算数运算符

算数运算符：也叫数学运算符，主要包括加、减、乘、除、取余（求模）等

- \+ ： 求和
- \- ： 求差
- \* ：求积
- / ： 求商
- % ： 取模（取余数）
  - 开发中经常作为某个数字是否被整除

> :warning: 注：在计算失败时，显示的结果是 NaN （not a number）

### 3、赋值运算符

对变量进行赋值的运算符

- = ：将等号右边的值赋予给左边，要求左边必须是一个容器
- += 
- -=
- *=
- /= 
- %= 

使用这些运算符可以在对变量赋值时进行快速操作，从而可以简化代码

### 4、自增/自减运算符

| 符号 | 作用 | 说明                       |
| ---- | ---- | -------------------------- |
| ++   | 自增 | 变量自身的值加1，例如：x++ |
| --   | 自减 | 变量自身的值减1，例如：x-- |

> :warning: 注：1、只有变量能够使用自增和自减运算符
>
> 2、++ -- 可以在变量前面也可以在变量后面，比如 x++ 或者 ++x

- 单独使用的时候，++ 在前和在后没有区别，如果参与运算就有区别了
- 前缀式：++ 放在变量前面，**先**对变量值进行 **+1** ，**再**拿变量的值进行**运算**
- 后缀式：++ 放在变量后面，**先**拿变量值进行**运算**，**再**对变量的值进行 **+1**

### 5、比较（关系）运算符

使用场景：比较两个数据大小，是否相等，根据比较结果返回一个布尔值（true/false）

- \> ：左边是否大于右边
- < ：左边是否小于右边
- \>= ：左边是否大于或等于右边
- <= ：左边是否小于或等于右边
- <font color="red">=== ：左右两边是否类型和值都相等</font>
- == ：左右两边值是否相等
- != ：左右值不相等
- <font color="red">!== ：左右两边是否不全等</font>

|       表达式        |  值   |
| :-----------------: | :---: |
| null  ==  undefined | true  |
|    ‘NaN’ ==  NaN    | false |
|     5  ==  NaN      | false |
|    NaN  ==  NaN     | false |
|    false  ==  0     | true  |
|     true  ==  1     | true  |
|     true  ==  2     | false |
|  undefined  ==  0   | false |
|     null  ==  0     | false |
|   ‘100’  ==  100    | true  |
|   ‘100’  ===  100   | false |

### 6、逻辑运算符

使用场景：可以把多个布尔值放到一起运算，最终返回一个布尔值

| 符号 | 名称   | 日常读法 | 特点                         | 口诀           |
| ---- | ------ | -------- | ---------------------------- | -------------- |
| &&   | 逻辑与 | 并且     | 符号两边有一个假的结果为假   | 一假则假       |
| \|\| | 逻辑或 | 或者     | 符号两边有一个真的结果为真   | 一真则真       |
| !    | 逻辑非 | 取反     | true 变 false，false 变 true | 真变假，假变真 |

### 7、运算符优先级

| 优先级 | 顺序                         |
| ------ | ---------------------------- |
| 1      | ()                           |
| 2      | ++   --    !                 |
| 3      | 先   *   /   %   后   +    - |
| 4      | >   >=    <   <=             |
| 5      | ==   !=   ===   !==          |
| 6      | 先   &&   后   \|\|          |
| 7      | =                            |

## 数据类型转换

把一种数据类型转换成另外一种数据类型

### 1、转数字

- Number()
  - 成功，返回一个数字类型
  - 无法转换混合字符串，会返回 NaN
- parseInt()
  - 只保留<font color="red">整数</font>
  - 开头是数字，会自动舍弃数字后的字符串
  - 必须保证开头是数字，否则返回 NaN
- parseFloat()
  - 可以保留<font color="red">小数</font>
  - 注意事项同 parseInt()

布尔型转换成数字：true 为 1 ，false 为 0

null 转换成数字为 0，undefined 为 NaN

### 2、转字符串

- String()
- 变量.toString(进制)

### 3、转布尔

- Boolean()

  - 返回 true 或 false

  - 如果值为 false、0、‘’、null、undefined、NaN，则返回 false，其余返回为 true

### 隐式转换

某些运算符被执行时，系统内部**自动**将数据类型进行转换，这种转换称为隐式转换

- 转数字
  - 算术运算符：-、*、/、%，比较运算符 > == 等
  - \+ 号作为正号可以把字符串转换成数字型
- 转字符串
  - \+ 加号字符串拼接
- 转布尔值
  - ! 逻辑非

```js
// 1、转数字型
let age = '18'
console.log(age - 2)
console.log(age < 20)

// 2、转字符串型
let age = '18'
console.log(age + '岁')  // string：18岁

// 3、转布尔型
// age不是布尔值，所以会先隐式转换成布尔值，后取反
let age = 18
console.log(!age)  // false
```

> 例：实际开发场景中的登录功能，登录成功后，服务器会给一个令牌让我们存储起来，可以根据本地是否有这个令牌来判断用户是否登录，即 `!str`

## 转义符

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

## 表达式和语句

表达式：可以<font color="red">被求值</font>的代码，并将其计算出一个结果

语句：一段<font color="red">可以执行</font>的代码，是一个<font color="red">行为</font>，例如分支语句和循环语句

## 编程三大结构

顺序结构：从上往下依次执行

分支结构：根据条件选择执行代码

循环结构：某段代码被重复执行

![编程三大结构.png](/images/编程三大结构.png)

### 1、分支语句

根据条件判定真假，来选择性地执行想要的代码

#### 1）、if 语句

```js
// 单分支语句
if (条件) {
  满足条件要执行的代码
}

// 双分支语句
if (条件) {
  满足条件要执行的代码
} else {
  不满足条件执行的代码
}

// 多分支语句
if (条件1) {

} else if (条件2) {

} else {

}
```

- 小括号内的条件结果是布尔值，为 true 时，进入大括号里执行代码；为 false，则不执行
- 小括号内的结果不是布尔值，会发生类型转换为布尔值，类似 Boolean()
- 如果大括号只有一个语句，大括号可以省略

#### 2）、三元运算符

使用场景：一些简单的双分支，可以使用三元运算符，写起来比 if else 双分支更简单

```js
// 如果满足条件true就执行表达式1，否则就执行表达式2
条件 ? 表达式1 : 表达式2
```

#### 3）、switch 语句

使用场景：适用于有多个条件的时候，也属于分支语句，大部分情况下和 if 多分支语句功能相同

```js
// 找到跟小括号里数据全等的case值，并执行里面对应的代码
// 若没有全等===的则执行default里的代码

switch (表达式) {
  case 值1:
    代码1
    break
  case 值2:
    代码2
    break
  default:
    代码n
}
```

注意：

- switch 语句一般用于**等值判断**，if 适用于**区间判断**

- switch 一般需要配合 **break 关键字**使用，没有会造成 case 穿透

- if 多分支语句开发要比 switch 更重要，使用也更多


### 2、循环结构

#### 1）、while 循环（先验证后循环）

```js
while (循环条件) {
  // 循环体
}
```

- 跟 if 语句很像，都要满足小括号里的条件为 true 才会进入循环体执行代码
- while 大括号里代码执行完毕后不会跳出，而是继续回到小括号里判断条件是否满足，若满足又执行大括号里的代码，然后再回到小括号判断条件，直到括号内条件不满足，即跳出

#### 2）、do-while 循环（先循环后验证）

```js
do{
  // 循环体（先执行一次）
} while (循环条件)
```

#### 3）、for循环（先判断后循环）

```js
for (初始值;循环条件;变量计数) {
  // 满足条件执行的循环体
}
```

#### 4）、中止循环

- break：中止**整个循环**，一般用于结果已经得到，后续的循环不需要的时候可以使用

- continue：中止**本次循环**，一般用于排除或者跳出某一个选项的时候

无限循环

- while(true)
- for( ;; )

### 3、循环嵌套

一个循环语句里面又包含另一个循环语句

外部循环每循环一次，内部循环执行所有次

```js
for (初始值;循环条件;变量计数) {
  for (初始值;循环条件;变量计数) {
  
  }
}
```

## 数组

### 1、数组定义

定义：连续的储存空间

- 数组是按顺序保存（**有序**），所以每个数据都有自己的编号
- 编号从 0 开始，数据的编号经常称为**索引或下标**
- 数组可以存储**任意类型**的数据

### 2、创建数组

#### 1）、通过字面量创建

```js
let 数据名 = [数据1, 数据2, ..., 数据n]
```

#### 2）、通过构造器创建

```js
let arr = new Array()
let arr = new Array(5)  // 创建长度为5的数组
let arr = new Array("朱一龙", 4, 16)  // 创建有数据的数组
```

### 3、引用数组

- 通过数组下标添加

- 通过 for 循环遍历

  ```js
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
  ```

### 4、常用方法

数组的方法：增 删 改 查

#### 1）、增

- push(新增数据)：在数组**末尾**添加
- unshift(新增数据)：在数组**开头**添加

返回值：该数组的新长度，都会**修改原数组**

#### 2）、删

- pop()：删除数组的**最后一个元素**

- shift()：删除数组的**第一元素**

  返回值：被删除的那个元素

- splice(起始下标,删除个数)：**删除指定项**

#### 3）、改

- 数组下标直接赋值：`数组[索引] = 新值`

  返回值：如果下标不存在，则是新增一个数组元素，并修改了数组长度（尽量避免）

- 插入：`splice(起始下标,0,插入内容)`

- 替换：`splice(起始下标,删除个数,替换内容)`


> :warning: 注：修改替换 ：注意第二个参数代表删除几个
>
> 如果删除 0 个则代表插入
>
> 删除 1 个则第三个参数值会进行插入，插入在下标为 1 的位置上

#### 4）、查

语法：`数组[索引]`

返回值：如果查询不到则返回 undefined

#### 5）、合并：concat

```js
let arr1 = [123,'234',true]
let arr2 = [false,'hahah']
let arr3 = arr1.concat(arr2)  // [123, '234', true, false, 'hahah']
```

> :warning: 注：谁调用 concat 的方法，谁就在前面
>
> concat 合并方法，既不会改变 arr1 也不会改变 arr2，会生成一个新的数组

#### 6）、抽取截取

```js
slice(起始下标【要被截取】,结束下标【不会被截取】)
```

> :warning: 注：slice 方法也会生成一个新数组，原数组不会发生改变

#### 7）、串联：join()

```js
let arr = [1,2,3,5,6,6,3,3,1,3,4,6]
let newArr = arr.join("*")
// 把数组的每一项都获取出来并将*把他们连接变成一个字符串
console.log(newArr)
```

#### 8）、反转：reverse()

> :warning: 注：会改变原数组

#### 9）、清空数组

- var arr=[]
- arr.length = 0
- arr.splice(0,arr.length)

#### 10）、排序：sort

会修改原数组

```js
let arr = [4, 5, 2, 1, 3]

// 升序排序
arr.sort(function (a, b) {
  return a - b
})

// 降序排序
arr.sort(function (a, b) {
  return b - a
})

// 随机排序
arr.sort(function (a, b) {
	return Math.random() - 0.5  //返回值的正负概率分别为50%，故升降序排列是随机的
})
```

**选择排序原理**：就是从第一个数开始，与后面所有的数相比较，找出最小（最大）的数，放在第一个位置，以此类，每一轮确定一个相对于这一轮最小（最大）的数

**核心**：利用循环嵌套比较，根据索引号来交换变量

①：外层循环是一共进行几轮相比较，通过观察，一共进行<font color="red">数组长度-1</font> 次比较

- for (let i = 0; i < <font color="red">arr.length - 1</font>; i++) 
- 把 i 作为最小值起始索引  <font color="red">minIndex </font>

②：里层循环是每一轮的比较来查找最小值

- 里层循环起始值是 <font color="red">i + 1</font> 个元素开始查找
- for (let j = <font color="red">i + 1</font>; j < arr.length; j++)
- 进行比较的时候，发现最小的数组元素，把当前元素<font color="red">索引号给 minIndex</font>

③：如果 <font color="red">minIndex 和 i 位置不一致</font>，则交换变量

```js
let arr = [44, 33, 22, 11]

// 外层循环控制比较的趟数
// 内层循环控制两两比较的次数
// [44, 33, 22, 11]
// 永远都是minIndex和i的位置进行调换
// i = 0 [11, 33, 22, 44]
// i = 1 [11, 22, 33, 44]
// i = 2 [11, 22, 33, 44]

// 通过嵌套循环来实现选择排序
for (let i = 0; i < arr.length - 1; i++) {
  // 一次遍历, 只能找到一个最小值
  let minIndex = i
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j
    }
  }
  // console.log(minIndex)
  // 进行交换
  // 谁和谁交换?minIndex和i对应的值进行交换
  // if (i !== minIndex) {
  let temp = arr[i]
  arr[i] = arr[minIndex]
  arr[minIndex] = temp
  // }
}
console.log(arr)
```

算法可视化网站： https://visualgo.net/zh/sorting

## 函数

### 1、基本使用

函数：是可以被重复使用的代码块

**作用**：函数可以把具有相同或相似逻辑的代码“包裹”起来，有利于代码复用

声明（定义）一个完整函数包括关键字、函数名、形式参数、函数体、返回值 5 个部分

~~~js
// 声明（定义）函数：利用关键字function定义函数 
function 函数名() {
  函数体
}

// 调用函数：可以重复调用
函数名()
~~~

> :warning: 注：1、函数名命名跟变量一致，采用 `小驼峰` 命名法
>
> 2、函数名经常采用**动词**

~~~js
function sum(参数1, 参数2...) {
  return 结果
}
console.log(sum(1, 2))  // 输出函数返回的结果
~~~

- 函数参数，如果有多个则用逗号分隔，用于接受传递过来的数据
- return 关键字可以把结果返回给调用者

###  2、函数参数

通过向函数传递参数，可以让函数更加灵活多变

**形参：**<font color="red">声明函数</font>时小括号里的叫形参（形式上的参数）

**实参：**<font color="red">调用函数</font>时小括号里的叫实参（实际上的参数）

**执行过程：** 会把实参的数据传递给形参，从而提供给函数内部使用，我们可以把形参理解为变量

```js
// 形参和实参个数不匹配

// 1、形参个数过多，会自动补充undefined 
function sum(x, y) {  // 形参 
  return x + y
}
console.log(sum(1, 2))  // 实参 3
console.log(sum(1))  // 实参 NaN， 1 + undefined = NaN

// 2、实参个数过多，则多余的实参会被忽略
console.log(sum(1, 2, 3)) // 实参 3

// 3、开发中提倡要保证实参和形参个数统一
```

在 js 中 实参的个数和形参的个数可以不一致

- 如果形参过多，会自动填上 undefined
- 如果实参过多，那么多余的实参会被忽略

### 3、逻辑中断

逻辑中断： 存在于逻辑运算符 **&& 和 ||** 中，左边如果满足一定条件会中断代码执行，也称为逻辑短路

```js
false && anything  // 逻辑与左边false则中断，如果左边为true，则返回右边代码的值

true || anything  // 逻辑或左边true则中断，如果左边为false，则返回右边代码的值
```

~~~js
// 例子
// 1、逻辑与中断：如果左边为假，则中断，如果左边为真，则返回右边的值
console.log(false && 1 + 2)  // false
console.log(0 && 1 + 2)  // 0
console.log('' && 1 + 2)  // ''
console.log(undefined && 1 + 2)  // undefined
console.log(true && 1 + 2)  // 3：此处不会发生逻辑中断
console.log(1 && 1 + 2)  // 3：此处不会发生逻辑中断

// 2、逻辑或中断，如果左侧为真，则中断，如果左侧为假，则返回右边的值
console.log(true || 1 + 2) // true：发生了中断
console.log(1 || 1 + 2) // 1：发生了中断
console.log(false || 1 + 2) // 3：此处不会发生逻辑中断

// 3、使用场景
function sum(x, y) {  // x = undefined
  //  x = undefined || 0
  // x = 1 || 0
  x = x || 0
  y = y || 0
  return x + y
}
console.log(sum())  // 0
console.log(sum(1, 2)) // 3
~~~

### 4、函数默认参数

默认参数：可以给形参设置默认值

> 这个默认值只会在缺少实参传递或者实参是 undefined 才会被执行

**默认参数和逻辑中断使用场景区别：**

- 默认参数主要处理<font color="red">函数形参</font>（处理参数要比逻辑中断更简单）
- 逻辑中断<font color="red">除了参数</font>还可以处理更多的需求

~~~js
// 默认参数: 给形参一个默认值
// 默认参数里面的值执行：
// 1、没有实参传递过来x=0 
// 2、有实参传递但是传递的是undefined，x=0
function sum(x = 0, y = 0) {
  return x + y
}
console.log(sum())  // 0
console.log(sum(undefined, undefined))  // 0
console.log(sum(1, 2))  // 3
~~~

### 5、函数返回值

返回值：把处理结果返回给调用者

函数的本质是封装（包裹），函数体内的逻辑执行完毕后，函数外部如何获得函数内部的执行结果呢？

要想获得函数内部逻辑的执行结果，需要通过 `return` 这个关键字，将内部执行结果传递到函数外部，这个被传递到外部的结果就是返回值。

```js
// 函数返回值细节
// 1、return结束函数，return后面的代码不会执行了，break退出循环或者switch
function sum(x, y) {
  return x + y
  console.log('我不会执行')
}
console.log(sum(1, 3))

// 2、return和被返回的结果不要换行
function sum(x, y) {
  return
  x + y
}
console.log(sum(1, 3))

// 3、如果函数没有return，则默认返回的是undefined
function fn() {}
console.log(fn())  // undefined
```

- **结束函数**：return会立即结束当前函数，所以后面代码不会再被执行
- **不要换行**：在 return 关键字和被返回的表达式之间不允许使用换行符，否则内部执行相当于会自动补充分号
- **默认返回**：函数可以没有 return，这种情况函数默认返回值为 undefined

### 6、作用域

**作用域（scope）**： 变量或者值在代码中可用性的范围

**作用**：作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了名字冲突。

#### 1）、全局作用域

作用于所有代码执行的环境（整个 script 标签内部）或者一个独立的 js 文件

处于全局作用域内的变量，称为**全局变量**，可以被任意地方访问和修改

#### 2）、局部作用域

- 函数作用域。作用于函数内的代码环境
- 块级作用域。{ } 大括号内部

处于局部作用域内的变量，称为**局部变量**，只能在当前作用域中访问和修改

>:warning: 注：1、如果函数内部，变量没有声明，直接赋值，也当全局变量看，但是强烈不推荐
>
>2、但是有一种情况，函数内部的形参可以看做是局部变量。

#### 变量的访问原则

访问原则：在能够访问到的情况下**先局部**，局部没有**再找全局**，总结： `就近原则`

### 7、匿名函数

- 具名函数：带有名字的函数（只要能够访问到函数，就可以调用，不用看声明的时机和顺序）

- 匿名函数：没有名字的函数，无法直接使用


#### 1）、函数表达式

将匿名函数赋值给一个变量，并且通过变量名称进行调用，我们将这个称为**函数表达式**

~~~js
// 声明
let fn = function() {
  console.log('函数表达式')
}
// 调用
fn()
~~~

- 其实函数也是一种数据类型
- 函数表达式必须先定义，后使用
- 函数的形参和实参使用跟具名函数一致

#### 2）、立即执行函数

IIFE（立即执行函数表达式）（Immediately Invoked Function Expression）

**场景介绍**：避免全局变量之间的污染

**注意**：多个立即执行函数要用 `;` 隔开，要不然会报错

~~~js
(function(){
  
})();

(function(){
  
}());
~~~

## 对象

> 对象（Object）：JavaScript里的一种数据类型（引用类型），也是用于存储数据的
>
> 好处：可以用来详细的描述某个事物，是用键值对形式存储语义更明了
>
> 特点：对象数据是无序的，数组有序的  

### 对象基本使用

对象有属性和方法组成

#### 对象属性

数据描述性的信息称为属性，如人的姓名、身高、年龄、性别等，一般是名词性的。

1. 属性都是成 对出现的，包括属性名和值，它们之间使用英文 `:` 分隔
2. 多个属性之间使用英文 `,` 分隔
3. 属性就是依附在对象上的变量（对象外是变量，对象内是属性）

**1. 定义对象属性**

```html
<script>
  // 对象也是一种数据类型，保存数据同时可以更直观的描述事物
  // 1. 定义对象属性
  let pig = {
    sex: '女',
    age: 4,
    uname: '佩奇',
    weight: 12.6
  }
</script>
```

**2. 访问对象属性**

声明对象，并添加了若干属性后，可以使用 `.` 获得对象中属性对应的值，我称之为属性访问

```html
<script>
  // 对象也是一种数据类型，保存数据同时可以更直观的描述事物
  // 1. 定义对象属性
  let pig = {
    sex: '女',
    age: 4,
    uname: '佩奇',
    weight: 12.6
  }

  // 2. 访问对象属性  对象.属性
  console.log(pig.age)  // 4
  console.log(pig.weight)  // 12.6
</script>
```

#### 对象方法

数据行为性的信息称为方法，如跑步、唱歌等，一般是动词性的，其本质是函数。

1. 方法是由方法名和函数两部分构成，它们之间使用 : 分隔
2. 多个属性之间使用英文 `,` 分隔
3. 方法是依附在对象中的函数（对象外是函数，对象内是方法）

**1.定义对象方法**

~~~javascript
// let fn = function() {}
// 对象方法
// 1. 定义对象方法
let pig = {
  uname: '佩奇',
  sing: function () {
    console.log('唱歌')
  },
  dance: function () {
    console.log('跳舞')
  }
}
console.log(pig)

~~~

**2.调用对象方法**

声明对象，并添加了若干方法后，可以使用 `.`  调用对象中函数，我称之为方法调用。

~~~javascript
// let fn = function() {}
// 对象方法
// 1. 定义对象方法
let pig = {
  uname: '佩奇',
  sing: function () {
    console.log('唱歌')
  },
  dance: function () {
    console.log('跳舞')
  },
  sum: function (x, y) {  // 2
    // console.log(x + y)
    return x + y
  }
}
console.log(pig)

// 2. 调用对象方法
pig.sing() // 唱歌
pig.dance()  // 跳舞

// 3. 方法可以传递参数也可以有返回值，跟函数使用基本类似
let re = pig.sum(1, 2) // 1 实参
console.log(re)
~~~

**注：无论是属性或是方法，同一个对象中出现名称一样的，后面的会覆盖前面的。**

### 操作对象

对象本质是无序的数据集合, 操作对象数据无非就是 **增 删 改 查** 

![67109144100](./C:/Users/daidai/Desktop/2023年JavaScript黑马武汉/笔记/assets/1671091441008.png)

![67109148048](./C:/Users/daidai/Desktop/2023年JavaScript黑马武汉/笔记/assets/1671091480487.png)



~~~javascript
<script>
  // 操作对象：对数据 查、增、改、删
  let pig = {
    uname: '佩奇',
    sing: function () {
      console.log('唱歌')
    }
  }

// 1. 查： 对象.属性 对象.方法
console.log(pig.uname)  // 得到属性值
pig.sing()

// 2. 增：对象.新属性 = 新值   对象.新方法 = function(){}
pig.age = 4
pig.dance = function () {
  console.log('跳舞')
}
console.log(pig)

// 3. 改：对象.属性 = 新值  对象.方法 = 新匿名函数
pig.uname = '小猪佩奇'
pig.sing = function () {
  console.log('哼哼哼！！')
}
console.log(pig)

// 4. 删： 了解，因为我们很少对对象里面的数据做删除操作  delete
delete pig.age
delete pig.dance
console.log(pig)
</script>
~~~

#### 查找属性的另外写法

对于多词属性比如中横线分割的属性，点操作就不能用了

我们可以采取：  对象['属性'] 方式， 单引号和双引号都阔以，当然也可以用于其他正常属性

~~~javascript
<script>
  // 查询属性的另外写法  对象['属性'] 这个属性必须加引号
  let pig = {
    'pig-name': '佩奇',
    age: 4
  }
// console.log(pig.pig - name)  // NaN
console.log(pig['pig-name']) // 佩奇
console.log(pig['age']) // 4    === pig.age 
</script>
~~~

> 总结：多词属性或者需要解析变量的时候使用 [] 语法，其余的直接使用点语法

### 遍历对象

for 遍历对象的问题：

- 对象没有长度length，而且是无序的

所以我们要利用 for in 遍历对象

**语法:**

~~~javascript
for (let 变量 in 对象) {
  console.log(变量) // 属性名
  console.log(对象[变量]) // 属性值
}
~~~

1. for in语法中的 k 是一个变量, 在循环的过程中依次代表对象的属性名
2. 由于 k 是变量, 所以必须使用 [ ] 语法解析 
3. 一定记住： k 是获得对象的属性名， 对象名[k] 是获得 属性值
4. 一般不用这种方式遍历数组、主要是用来遍历对象

~~~javascript
<script>
  // 遍历对象
  let pig = {
    sex: '女',
    age: 4,
    uname: '佩奇',
    weight: 12.6,

  }

// for (let key in pig) {
//   console.log(key)  // key 是属性  
//   console.log(pig[key]) // 对象[变量] 是值
// }

for (let key in pig) {
  console.log(key)  // key 是属性   对象.属性
  // console.log(pig.key)   // pig.key  undefined  因为key是个变量不是属性
  // key  'sex'  'age'    对象[key]  对象['sex']  对象['age']
  console.log(pig[key])
}


// 注意：数组遍历用传统for， for in 主要用来遍历对象
let arr = ['red', 'green', 'pink']
for (let k in arr) {
  console.log(k)// 得到字符串类型的索引号
}
</script>
~~~

## Math 对象

Math对象是一个内置对象

### 1、随机数

Math.random()

一个大数字和一个小数字组成一个范围

 随机数*（大数字-小数字）+ 小数字就能得到这个范围内的数字

### 2、取整方法

Math.round()：四舍五入

Math.ceil()：向上取整

Math.floor()：向下取整

Math.pow(数值,几次方)：次方计算

Math.abs()：绝对值

Math.sqrt()：平方根

