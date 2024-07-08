## Java 基础语法

### 1、注释

写在程序中对代码进行解释说明的文字，方便自己和其他人查看，以便理解程序

```java
单行注释：
	// 注释内容，只能写一行

多行注释：/* + 回车
  /*
    注释内容1
   	注释内容2
  */

文档注释：/** + 回车
  /**
  	文档注释的内容是可以提取到一个程序说明文档中去的
  	注释内容
  */
```

| 快捷键           | 功能                         |
| ---------------- | ---------------------------- |
| Ctrl + /         | 单行注释（对当前行进行注释） |
| Ctrl + Shift + / | 对选中的代码进行多行注释     |

### 2、字面量

数据在程序中的书写格式

| 常用数据 | 生活中的写法 |        程序中的写法        | 说明                                                            |
| -------- | ------------ | :------------------------: | --------------------------------------------------------------- |
| 整数     | 666，-88     |          666，-88          | 写法一致                                                        |
| 小数     | 13.14，-5.21 |        13.14，-5.21        | 写法一致                                                        |
| 字符     | A，0，我     |       ‘A’，‘0’，‘我’       | 程序中必须使用<font color="red">单引号</font>，有且仅能一个字符 |
| 字符串   | 黑马程序员   | “HelloWorld”，“黑马程序员” | 程序中必须使用<font color="red">双引号</font>，内容可有可无     |
| 布尔值   | 真、假       |        true 、false        | 只有两个值：<br>true：代表真，false：代表假                     |
| 空值     |              |         值是：null         | 一个特殊的值，空值                                              |

> :warning: 注：特殊字符
>
> \n：换行
>
> \t：一个 tab

### 3、变量

用来记住程序要处理的数据，编写的代码更灵活，管理代码更方便

定义格式： `数据类型 变量名 = 初始值;`

注意事项：

```java
1、变量要先声明才能使用

2、变量是什么类型，就应该用来装什么类型的数据，否则报错

3、变量定义在哪个{}范围内，就只在哪个大括号内有效。变量的有效范围称之为变量的作用域
	{
		int a = 10;
		System.out.println(a); // 这是对的
	}
	System.out.println(a); // 报错

4、在同一个作用域内，不能有两个同名的变量
	{
		int a = 10;
		int a = 20; // 报错
	}

5、变量没有初始化，不能直接使用
	int a; // 仅仅定义了变量，但是没有初始值
	System.out.println(a); // 报错

6、变量可以定义在同一行
	如：int a=10, b=20; // a和b都是int类型
```

### 4、关键字

关键字是 java 语言中有特殊含义的单词，不能作为类名、变量名

|  abstract  |    assert    |  boolean  |   break    |  byte  |
| :--------: | :----------: | :-------: | :--------: | :----: |
|    case    |    catch     |   char    |   class    | const  |
|  continue  |   default    |    do     |   double   |  else  |
|    enum    |   extends    |   final   |  finally   | float  |
|    for     |     goto     |    if     | implements | import |
| instanceof |     int      | interface |    long    | native |
|    new     |   package    |  private  | protected  | public |
|   return   |   strictfp   |   short   |   static   | super  |
|   switch   | synchronized |   this    |   throw    | throws |
| transient  |     try      |   void    |  volatile  | while  |

### 5、标志符

标志符就是名字，我们写程序时会起一些名字，如类名、变量名等等都是标识符

**标识符规则：**

- 基本组成：由数字、字母、下划线（\_）和美元符（$）等组成
- 强制要求：不能以数字开头、不能用关键字做为名字、且是区分大小

**标识符的建议规范：**

```java
1、所有的名字要见名知意，便于自己和别人阅读
	class Student {} // 一看这个类就知道表示一个学生
	int age =10;  // 一看这个变量就知道表示年龄

2、类名：首字母大写（大驼峰命名）
	class Student {}

3、变量名：第二个单词开始首字母大写（小驼峰命名）
	double applePrice = 7.5;
```

## 数据详解

数据在计算机底层都是采用二进制来存储的

- 计算机中数据最小的组成单元：使用 8 个二进制位为一组，称之为一个字节（byte，简称 B）

- 字节中的每个二进制位就称为位（bit，简称 b）, `1B = 8b`

- 计算机发展出了 KB、MB、GB、TB、… 这些数据单位

  - 1 B = 8 b

  - 1 KB = 1024 B
  - 1 MB = 1024 KB
  - 1 GB = 1024 MB
  - 1 TB = 1024 GB

![字节](/images/字节.png)

### 1、字符的存储原理

ASCII 编码表：即美国信息交换标准编码，规定了现代英语、数字字符、和其他西欧字符对应的数字编号

![ASCII编码表](/images/ASCII编码表.png)

### 2、图片的存储原理

- 图片就是无数个像素点组成
- 每个像素点的数据：用 0 ~ 255* 255* 255 表示其颜色

### 3、声音的存储原理

![声音存储](/images/声音存储.png)

### 4、数据的其他表示形式

#### 1）、二进制

十进制 ➡ 二进制：除二取余法

![十进制转二进制](/images/十进制转二进制.png)

```java
// 二进制 ➡ 十进制

1101 ➡ 1*2^3+1*2^2+1*2^0 = 13
```

#### 2）、八进制

每 3 位二进制作为一个单元，最小数是 0，最大数是 7，共 8 个数字

```java
// 二进制 ➡ 八进制

97：01100001
		01、100、001 ➡ 141
```

#### 3）、十六进制

每 4 位二进制作为一个单元，最小数是 0，最大数是 15，共 16 个数字，依次用： 0~9 A B C D E F

```java
// 二进制 ➡ 十六进制

97：01100001
		0110、0001 ➡ 61
250：11111010
  	1111、1010 ➡ FA
```

Java 程序中支持书写二进制、八进制、十六进制的数据，分别需要以`0B 或者 0b、0、0X 或者 0x 开头`

```java
// 不同进制在 Java 程序中的书写格式

System.out.pirntln('a'+1); // 98
System.out.pirntln(0b01100001); // 97
System.out.pirntln(0141); // 97
System.out.pirntln(0x61); // 97
```

## 数据类型

- 基本数据类型
- 引用数据类型

### 1、基本数据类型

4 大类 8 种

<table>
  <tbody align="center"> 
    <tr>
      <th style="text-align:center;" colspan=2>数据类型</th>
      <th style="text-align:center;">内存占用(字节数)</th>
      <th style="text-align:center;">数据范围</th>
    </tr>
    <tr>
      <td rowspan=4>整型</td>
      <td>byte</td>
      <td>1</td>
      <td>-128~127</td>
    </tr>
    <tr>
      <td>short</td>
      <td>2</td>
      <td>-32768~32767</td>
    </tr>
    <tr>
      <td>int<font color="red">（默认）</font></td>
      <td>4</td>
      <td>-2147483648~2147483647（10位数，大概21亿多）</td>
    </tr>
    <tr>
      <td>long</td>
      <td>8</td>
      <td>-9223372036854775808 ~ 9223372036854775807（19位数）</td>
    </tr>
    <tr>
      <td rowspan=2>浮点型（小数）</td>
      <td>float</td>
      <td>4</td>
      <td>1.401298 E -45 到 3.4028235 E +38</td>
    </tr>
    <tr>
      <td>double<font color="red">（默认）</font></td>
      <td>8</td>
      <td>4.9000000 E -324 到1.797693 E +308</td>
    </tr>
    <tr>
      <td>字符型</td>
      <td>char</td>
      <td>2</td>
      <td>0-65535</td>
    </tr>
    <tr>
      <td>布尔型</td>
      <td>boolean</td>
      <td>1</td>
      <td>true，false</td>
    </tr>
  </tbody>
</table>

```java
// long 类型，需要在其后面加上 L/l
long number = 73642422442424L;

// float 类型，需要在其后面加上 F/f
float score = 99.5F;
```

### 2、自动类型转换（<font color="red">小范围类型变量 ➡ 大范围类型变量</font>）

类型范围小的变量，可以直接赋值给类型范围大的变量

![自动类型转换原理](/images/自动类型转换原理.png)

**自动类型转换的其它形式：**

![自动类型转换](/images/自动类型转换.png)

```java
int c = 100; // 4位
double d = c; // 8位，发生自动类型转换
System.out.println(d); // 100.0

char ch = 'a'; // 'a' 97 ➡ 00000000 01100001
int i = ch; // 发生自动类型转换 ➡  00000000 00000000 00000000 01100001
System.out.println(i); // 97
```

#### 1）、表达式的自动类型转换

在表达式中，小范围类型的变量，会自动转换成表达式中较大范围的类型，再参与运算

`byte 、short、char ➡ int ➡ long ➡ float ➡ double`

> :warning: **注意事项：**
>
> - 表达式的最终结果类型由表达式中的<font color="red">最高类型</font>决定
> - 在表达式中，<font color="red">byte、short、char</font> 是直接转换成 <font color="red">int</font> 类型参与运算

```java
byte a = 10;
int b = 20;
long c = 30;
➡ long result = a + b + c;


byte b1 = 110;
byte b2 = 80;
➡ int b3 = b1 + b2;
```

### 3、强制类型转换（<font color="red">大范围类型变量 ➡ 小范围类型变量</font>）

强行将类型范围大的变量、数据赋值给类型范围小的变量

格式：`数据类型 变量2 = (数据类型)变量1、数据`

快捷键：`alt + enter`

```java
int a = 20;
byte b = (byte)a;
```

**强制类型转换的原理**

强行把前面几个字节砍掉，但是有数据丢失的风险

![强制类型转换原理](/images/强制类型转换原理.png)

> :warning: ​**注意事项：**
>
> - 强制类型转换<font color="red">**可能**造成数据（丢失）溢出</font>
> - 浮点型强转成整型，<font color="red">直接丢掉小数部分，保留整数部分返回</font>

```java
double d = 99.5;
int m = (int) d;
System.out.println(m); // 99
```

## 运算符

### 1、算术运算符

| 符号 |                   名称                   |
| ---- | :--------------------------------------: |
| +    |                    加                    |
| -    |                    减                    |
| \*   |                    乘                    |
| /    | 除（在 Java 中两个整数相除结果还是整数） |
| %    |                   取余                   |

```java
System.out.println(5 / 2); // 2
System.out.println(5.0 / 2); // 2.5

// 一定要小数点的写法
int i = 5;
int j = 2;
System.out.println(1.0 * i / j); // 2.5
```

> :warning: 注：
>
> “+”符号除了用于加法运算，还可以作为<font color="red">连接符</font>
>
> “+”符号与字符串运算的时候是用作连接符的，其结果依然是一个字符串
>
> 能算则算，不能算就拼接在一起

```java
int a = 5;
System.out.println("abc" + a); // "abc5"
System.out.println(a + 5); // 10
System.out.println("daidai" + a + 'a'); // "daidai5a"
System.out.println(a + 'a' + "daidai"); // "102daidai"


// 例子（数值拆分）：一个三位数，将其拆分为个位、十位、百位后，打印在控制台

公式总结：
个位 ：数值 % 10
十位 ：数值 / 10 % 10
百位 ：数值 / 10 / 10 % 10
千位 ：数值 / 10 / 10 / 10 % 10
...
```

### 2、自增自减运算符

| 符号     | 说明                                         |
| -------- | -------------------------------------------- |
| 自增：++ | 放在某个变量前面或者后面，对变量自身的值加 1 |
| 自减：-- | 放在某个变量前面或者后面，对变量自身的值减 1 |

> :warning: 注：
>
> - ++ 、-- 只能操作变量，不能操作字面量
>
> - 如果单独使用放前放后是没有区别的
>
> - 非单独使用（<font color="red">如在表达式中、或者同时有其它操作</font>）
>
>   - 在变量<font color="red">前</font>，**先**进行变量**自增/自减**，**再使用变量**
>
>   - 在变量<font color="red">后</font>，**先使用**变量，**再**进行变量**自增/自减**

```java
int i = 10;
int result = ++i; // 先加后用
System.out.println(result); // 11
System.out.println(i); // 11

int j = 10;
int result2 = j++; // 先用后加
System.out.println(result2); // 10
System.out.println(j); // 11


int c = 10; // 变化过程 ➡ 10 11 12 11
int d = 5; // 变化过程 ➡  5 4 5
int result3 = c++ + ++c - --d - ++d + 1 + c--;
               10 +  12 -  4  -  5  + 1 + 12
System.out.println(result3); // 26
System.out.println(c); // 11
System.out.println(d); // 5
```

### 3、赋值运算符

<table>
  <tbody align="center"> 
    <tr>
      <th style="text-align:center;"></th>
      <th style="text-align:center;">符号</th>
      <th style="text-align:center;">用法</th>
      <th style="text-align:center;">说明</th>
      <th style="text-align:center;">底层代码形式</th>
    </tr>
    <tr>
      <td>基本的赋值运算符</td>
      <td>=</td>
      <td>int a = 10;</td>
      <td>从右边往左看</td>
      <td>把数据 10 赋值给左边的变量 a 存储</td>
    </tr>
    <tr>
      <td rowspan=6>扩展的赋值运算符</td>
    </tr>
    <tr>
      <td>+=</td>
      <td>a+=b</td>
      <td>加后赋值</td>
      <td>a = (a的类型)(a + b);</td>
    </tr>
    <tr>
      <td>-=</td>
      <td>a-=b</td>
      <td>减后赋值</td>
      <td>a = (a的类型)(a - b);</td>
    </tr>
    <tr>
     	<td>*=</td>
      <td>a*=b</td>
      <td>乘后赋值</td>
      <td>a = (a的类型)(a * b);</td>
    </tr>
    <tr>
     	<td>/=</td>
      <td>a/=b</td>
      <td>除后赋值</td>
      <td>a = (a的类型)(a / b);</td>
    </tr>
    <tr>
     	<td>%=</td>
      <td>a%=b</td>
      <td>取余后赋值</td>
      <td>a = (a的类型)(a % b);</td>
    </tr>
  </tbody>
</table>

> :warning: 注：<font color="red">扩展的赋值运算符隐含了强制类型转换</font>

```java
byte x = 10;
byte y = 30;
x = x + y; // 报错
x+=y; // 等价于 byte x = (byte)(x+y); 这里有隐含的强制类型转换
```

### 4、关系运算符

判断数据是否满足条件，最终会返回一个判断的结果，这个结果是布尔类型的值：true 或 false

<table>
  <tbody align="center"> 
    <tr>
      <th style="text-align:center;">符号</th>
      <th style="text-align:center;">用法</th>
      <th style="text-align:center;">说明</th>
      <th style="text-align:center;">结果</th>
    </tr>
    <tr>
      <td>></td>
      <td>a > b</td>
      <td>判断a是否大于b</td>
      <td rowspan=6>成立返回 true、不成立返回 false</td>
    </tr>
    <tr>
      <td>>=</td>
      <td>a >= b</td>
      <td>判断a是否大于或者等于b</td>
    </tr>
    <tr>
      <td>&lt;</td>
      <td>a &lt; b</td>
      <td>判断a是否小于b</td>
    </tr>
    <tr>
      <td>&lt;=</td>
      <td>a &lt;= b</td>
      <td>判断a是否小于或者等于b</td>
    </tr>
    <tr>
      <td>==</td>
      <td>a == b</td>
      <td>判断a是否等于b</td>
    </tr>
    <tr>
      <td>!=</td>
      <td>a != b</td>
      <td>判断a是否不等于b</td>
    </tr>
  </tbody>
</table>

> :warning: 注：在 java 中判断是否相等一定是“== ” ，千万不要把 “== ”误写成“=”

### 5、逻辑运算符

把多个条件放在一起运算，最终返回布尔类型的值：true、false

| 符号 | 名称     | 用法              |                                     运算逻辑                                      |
| ---- | -------- | ----------------- | :-------------------------------------------------------------------------------: |
| &    | 逻辑与   | 2 > 1 & 3 > 2     |      多个条件必须都是 true，结果才是 true<br>有一个是 false，结果就是 false       |
| \|   | 逻辑或   | 2 > 1 \| 3 < 5    |                    多个条件中只要有一个是 true，结果就是 true                     |
| !    | 逻辑非   | ! (2 > 1)         |                       取反：!true == false、!false == true                        |
| ^    | 逻辑异或 | 2 > 1 ^ 3 > 1     |      前后条件的结果相同，就直接返回 false<br>前后条件的结果不同，才返回 true      |
| &&   | 短路与   | 2 > 10 && 3 > 2   | 判断结果与“&”一样，过程不同：<font color="red">左边为 false</font>，右边则不执行  |
| \|\| | 短路或   | 2 > 1 \| \| 3 < 5 | 判断结果与“\|”一样，过程不同：<font color="red">左边为 true</font>， 右边则不执行 |
