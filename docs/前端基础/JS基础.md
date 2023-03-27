## 核心语法基础

### 1、JavaScript的定义

一种直译式脚本语言，一种动态类型、弱类型、基于原型的语言

#### 1）、组成部分

- 核心（ECMAScript）：描述该语言的语法和基本对象
- 文档对象模型（DOM）：描述处理网页内容的方法和接口
- 浏览器对象模型（BOM）：描述与浏览器进行交互的方法和接口

#### 2）、两种类型注释

- 单行注释：//
- 多行注释：/*  */

### 2、JavaScript添加的方法

1、在HTML中嵌入JavaScript脚本（内嵌式）

```js
<script type="text/javascript">
    JavaScript代码
</script>
```

2、在HTML中链接一个外部的JavaScript文件

```js
<script type="text/javascript" src="JavaScript文件名.js"></script>
```

3、直接编写在元素的事件属性中（所有on开头的属性名）

```js
<input type="button" value="Press Me" onclick="alert('Hello World');">
```

4、伪URL方法（在a标签href属性写入js代码）

```js
<a href="javascript:alert('Hello World');">Click</a>
```

## 变量输入输出

### 1、输入

- prompt()


### 2、输出

- 控制台输出：console.log()
- 页面输出：document.write()
- 弹出框输出（警告）：alert()
- innerHTML 写入 HTML 元素

## 变量

### 1、声明变量

```js
关键字var	变量名字
```

### 2、变量赋值

```js
变量名 = 值
```

简写：一边声明变量，一边赋值

当对某个值进行操作时，使用变量

### 3、命名变量

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

## 数据类型

### 1、基本数据类型

string字符串、number数值、boolean布尔、undefined、null

### 2、引用数据类型

object对象、array数组、function函数

## 运算符

### 1、操作符：typeof

```js
typeof undefined    // undefined
typeof null        // object
```

### 2、算数运算符：\+    -    *    /    %

### 3、比较（关系）运算符：\>    <    >=    <=    ==    !=    ===    !==

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

### 4、逻辑运算符：&&并且  ||或者  !取反

### 5、一元运算：++  --

- 如使用前置（Prefix）自增，操作符在操作数前（例如 ++x）， 操作数会加一，然后返回加一之后的值。
- 后置自增（例如 x++），操作数会加一 3，然后返回加一之前的值

### 6、二元运算

### 7、三元运算：条件表达式 ? 表达式1 : 表达式2

> 当结果为true时，执行表达式1，否则执行表达式2

### 8、赋值运算符：=  +=  -=  *=  /=

## 数据类型之间的转换

### 1、转数字

- parseInt()：将值转成整数数字
- parseFloat()：将值转成小数点数字
- Number()

### 2、转字符串

- String()

### 3、转布尔值

Boolean()

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

## 编程三大结构

顺序结构：语句的顺序执行

分支结构：有些代码执行有些代码不执行，会有条件约束

循环结构：重复执行一个或几个模块，直到满足某个条件为止

### 1、分支结构

#### 1）、单分支

```js
if(条件表达式){

}
```

#### 2）、双分支

```js
if(条件表达式){

}else{

}
```

#### 3）、多分支

```js
if(条件表达式){

}else if(条件表达式){

}else{

}
```

```js
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

### 2、循环结构

#### 1）、while循环（先验证后循环）

```js
while(条件表达式){
    循环体
}
```

#### 2）、do-while循环（先循环后验证）

```js
do{
    循环体（先执行一次）
}while(条件表达式)
```

#### 3）、for循环（先判断后循环）

```js
for(表达式1;表达式2;表达式3){

}

* 表达式1：循环变量的初始化
* 表达式2：判断条件
* 表达式3：循环变量的改变
```

#### 4）、跳出循环

- break：跳出循环

- continue：跳出本次循环

## 数组

### 1、数组定义

定义：连续的储存空间

通过下标获取数组的某个值，数组的下标从0开始

### 2、遍历数组

```js
for(var i=0;i<arr.length;i++){
    console.log("arr[i]")
}
```

### 3、创建数组

#### 1）、通过字面量创建

```js
var arr = []
```

#### 2）、通过构造器创建

```js
var arr = new Array()
var arr = new Array(5)   //创建长度为5的数组
var arr = new Array("朱一龙",4,16)   //创建有数据的数组
```

### 4、引用数组

1、通过数组下标添加

2、通过for循环遍历

### 5、常用方法

数组的方法：增 删 改 查

#### 1）增

- push()：在末尾添加

- unshift()：在第一个添加


#### 2）、删

- pop()：删除数组的最后一项

- shift()：删除数组的第一项

- splice(起始下标,删除几个)：删除指定项

#### 3）、改

插入：splice(起始下标,0,插入内容)

替换：splice(起始下标,删除数量,替换内容)

数组下标直接赋值

> 修改替换 ：注意第二个参数代表删除几个，如果删除0个则代表插入
>
> 删除1个则第三个参数值会进行插入

#### 4）、合并：concat

```js
var arr1 = [123,'234',true]
var arr2 = [false,'hahah']
var arr3 = arr1.concat(arr2)    //[123,'234',true,false,'hahah']
```

> 注：谁调用concat的方法，谁就在前面
>
> concat合并方法，既不会改变arr1也不会改变arr2，会生成一个新的数组

#### 5）、数组的抽取截取

```js
slice(起始下标【要被截取】,结束下标【不会被截取】)
```

> 注：slice方法 也会生成一个新数组，原数组不会发生改变

#### 6）、数组的串联：join()

```js
var arr6 = [1,2,3,5,6,6,3,3,1,3,4,6]
var newArr = arr6.join("*")
// 把数组的每一项都获取出来并将*把他们连接变成一个字符串
console.log(newArr)
```

#### 7）、数组的反转：reverse()

> 注：会改变原数组

#### 8）、清空数组

- var arr=[]
- arr.length = 0
- arr.splice(0,arr.length)

## Math对象

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

