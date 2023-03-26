# [w3school](https://www.w3school.com.cn/index.html)

# [MDN - HTML](https://developer.mozilla.org/zh-CN/docs/Learn/HTML)

# 网页的构成

网页由结构（html）、样式 （css）、行为（js）组成

- HTML：用来呈现网页中的结构和内容。
- CSS：美化页面，对结构进行排版、布局。
- JS：实现页面中的交互逻辑。

W3C：国际万维网联盟，是一个组织，这个组织定义的标准叫做 W3C 标准。倡导结构、样式、行为三者分离。主要是三种不同类型文件： `.html` 、 `.css` 、 `.js` 。

这是文件的扩展名，如：

- .rp：axure类型文件

- .txt：文本文件
- .doc：word
- .xls：execl表格
- .ppt：ppt
- .mp4：视频
- .mp3：音频

# HTML

HTML，超文本标记语言， Hyper Text Markup Language（HTML）

在代码中，是以 `<标签名称>` 的形式

## 1、html 历史

- html1

- html2

- html3

- html4、html4.0、html 4.01

- xhtml1

  过滤版，W3C 目标是把 HTML 发展成 XML ，在中途就做了一 XHTML 过渡版本。

- html5

  全世界主浏览软件和硬件商，组织在一起，研发了自己的标准，这个标准就 W3C 的标准有冲突。他们就和 W3C 进行协商，最终产生了 HTML5 这个版本。这个版本中，减少对富媒体资源的依赖。如 flash ，要看 flash 动画，视频，必须要安装插件。导致浏览器的性能下降。

  新增加了很多的功能 。如 canvas 标签，这写替代 Flash 。video、audio、视频和音频标签。

- xhtml ：html的严格版，严谨版

  :notebook_with_decorative_cover: xhtml的语法规则：

​			1、标签与属性全部小写

​			2、标签必须闭合

​			3、属性=“值”，不能简写

​			4、标签顺序要一致

## 2、html 文件的后缀名

- .html

- .htm

  DOS（磁盘）操作系统里，文件扩展名只支持最多三个字母（选讲）

- .shtml

  将ssl技术嵌入进去，保障网页的安全性（选讲）

## 3、如何开发网页

方式1：先在指定的硬盘目录下，创建一个学习资源的目录，再把这个目录，拖拽到 vscode 桌面的图标上，就会自动打开 vscode 开发工具， 这样就有一个工程目录了。

方式2：先打开 vscode 开发工具，通过 `菜单-文件-打开文件夹` ，选择我们存放资源文件夹打开，这样也实现打开一个工程目录了。

1）、创建一个 demo1.html 文件

:notebook_with_decorative_cover: 标准的文档结构

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>

  </body>
</html>
```

2）、安装 `Open In Default Browser` ，可以通过右键，选择“在浏览器中打开”来预览网页。

3）、安装 google 的 `chrome 浏览器` ，访问 https://www.google.cn/chrome ，下载安装。

4）、在操作系统的 `设置-应用-默认应用` 中，浏览器设置 chrome 为默认。

# 文档结构标签

## 1、DOCTYPE 

DOCTYPE，document type 的缩写。一个 `文档类型标记` 是一种标准通用标记语言的文档类型声明。

```html
 <!DOCTYPE html>：告诉浏览器，使用 html5 的标准来解析文档
```

## 2、html

这是一个 `根标签` 。除了 DOCTYPE 以外，其它所有标签，都必须写在根中间。

```html
<html lang="en"> 开始标签
  在开始标签和结束标签之间，写其它标签和内容。
</html> 结束标签

* lang：html 标签的标签属性，lang 语言
```

## 3、head

`网页头部标签` ，主要包含一些与网页渲染有关的内容，如网页标签，网页编码，网页的兼容性和响应式。

## 4、meta

`元标签` ，只能写在 `<head>` 标签中间，一般会在 `<title>` 标签之前写它。

如：设置网页的编码： `<meta charset="utf-8" />` ：元标签，是一个单标签，没有闭合标签。

## 5、title

`网页标题标签` ，写在 `<head>` 标签中，必须写 `<meta >` 之后，确保标题使用 utf-8 的标签来显示。

```html
<title>这是一个标题标签</title>
```

## 6、body

网页的 `主体标签` ，主要包含网页的结构和内容。

## 7、标签分类

- 单标签（非闭合标签）：就是在写标签时只有开始标签，没有结束标签。由于没有结束标签，所以只能在开始标签的 `>` 前，先打一 `空格` ，再打 `/` ，表示闭合标签。
- 双标签（闭合标签）：在写标签时要写开始标签，同时还必须要写结束标签。结束标签中，在标签名前，加 `/` ，表示闭合标签。

> :warning: 注：html5 标准中，单标签是可以不写 `/` ，HTML5 之前的标准，必须要闭合标签。
> 把一个标签，写在另一个标签的开始标签与结束标签之间，称为 `嵌套写法` 。
> 把一个标签，写在一个标签之前，或者之后，称为 `并列写法` 。

## 8、标签属性

每个标签都有公共的和私有的标签属性。

语法 ： `标签属性名 = "值"` ，标签属性的名称都是 `小写` 的。

每次都是键值对的写法： key="value" ,使用 `空格` 来分隔每个标签属性。

> 如：`<html lang="en">` ，lang="en"，它就是 `<html>` 标签的标签属性。
>
> - lang="en"，用于 `<html>` ，lang 表示设置一个语言，方便搜索引擎进行识辩，收录网页。同时，也方便浏览器进行语言的显示、转换、翻译。
>
>
> - lang="zh"
>
>
> 如：`<meta charset="UTF-8" />` ，设置 `字符编码` 。
>
> - ASCII码：不能代表汉字
>
> - gbk2312：录入了一些汉字，但是比较少，有一些偏僻的汉字就不能编译出来
> - gbk：gbk2312的补充版，又加了一些汉字和繁体字
> - unicode：万国码 ，所有国家的语言都包含在里面
> - UTF-8：unicode 升级版，包含了更多的字体，基本用它就可以满足需求了
>
>
> 网站优化，在搜索关键字时，提高页面与关键字的匹配率。让用户关注到你的页面，吸引流量。
>
> ```html
> <meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家!" />       
> <meta name="Keywords" content="网上购物,网上商城,手机,笔记本,数码,配件,手表,京东" />
> 
> * description：描述
> * Keywords：关键字
> * content：内容
> * 作用：为了提高搜索引擎
> ```
>

# 基本标签

最早的布局是使用表格 table 来布局，现在流行布局是 div+css 布局。

## 1、div 与 span

- div 标签是块标签、双标签。

- span 标签是内联标签。如果不强调它是双标签，则默认就是一个双标签。单标签会强调出来！


作用： div 用于 `布局` ，对应线框图中，每一个大框框。span 主要用于 `包裹文本内容` ，对应 axure 中的文本标签。

## 2、p

块标签、 段落标签，语义化的标签，在使用它时，网页中的内容表示一个文章的段落。

> :warning: 注： p标签中， `不能嵌套任何一个块标签，只能嵌套内联标签` 。这是块标签中的一个另类！
>
> 当网页上要显示一段文本时，可以使用 p 标签。

## 3、标题标签

h1~h6：用来显示文章的标题，或者强调标题栏的内容。如页面加粗显示，强调内容的单独一行的文本，一般是标题。根据字号大小，来选择使用哪一个标题标签。

:notebook_with_decorative_cover: 特征： 加粗，数字越大，字号越大， `独占一行` 显示，上下都有外边距。

## 4、特殊字符

| 符号       | 写法    |
| ---------- | ------- |
| 空格       | &nbsp   |
| < 小于     | &lt     |
| > 大于     | &gt     |
| & 符号     | &quot   |
| “” 双引号  | &amp    |
| © 版权     | &copy   |
| ® 注册商标 | &reg    |
| × 乘号     | &times  |
| ÷ 除号     | &divide |

## 5、列表标签

### 1）、有序列表

ol（父级标签）>  li（子标签）

```html
<ol type="1">  
	<li>第1名</li>  <!-- 列表成员，会根据父标签，显示不同列表项目符号，默认是数字。 -->
	<li>第2名</li>
	<li>第3名</li>
	<li>第4名</li>
</ol>

* type="1、A、a、I、i" 
  1：阿拉伯数字
  A/a：大、小写字母
  I、i：大、小写的罗马数字
```

### 2）、无序列表

```html
<ul type="disc">
	<li>第1名</li>
	<li>第2名</li>
	<li>第3名</li>
	<li>第4名</li>
</ul>

* type="disc、circle、square"
  disc：实心圆点
  circle：空心圆
  square：方块
页面上要显示新闻列表、导航、辅助导航时，都可以使用列表标签（有序、无序）
```

### 3）、自定义列表（无列表项目符号）

```html
<dl> 
	<!-- dt 自定义标题标签，会靠左对齐显示 -->
	<dt>老板</dt>
	<!-- dd 自定义内容标签，会空2个字符显示 -->
	<dd></dd>
</dl>

<!-- 例子 -->
<dl>
  <dt>自定义标题</dt>
  <dd>自定义内容</dd>
  <dd>自定义内容</dd>
  <dt>自定义标题</dt>
  <dd>自定义内容</dd>
  <dd>自定义内容</dd>
</dl>
```

![自定义列表标签](/images/自定义列表标签.png)

## 6、超链接标签

```html
<a href="https://www.baidu.com" target="">链接文字</a>

* href：链接的目标地址；外网域名要加上http:// 或 https://
* target：
  _self：在当前窗口中显示页面（默认）
  _blank：在新窗口中显示网页
  _top：在顶层窗口中显示网页
  _parent：在父级窗口显示网页
* name：在指定name的窗口中显示网页
```

## 7、水平分割线与换行标签

```html
<hr />：水平分割线

<br />：换行标签，都是一个单标签
```

## 8、字体标签

```html
<font face="宋体" color="#83cbac" size="7">字体</font>

* face：设置字体
* color：设置颜色
* size：设置字号，1-7，7最大
```

## 9、图片标签

```html
<img src="" alt="" title="" width="" height="">

* src：图片路径
* alt：当路径错误时，替代的文本内容
* width：图片宽度，值是一个数字，不带单位，默认单位像素（px）
* height：图片高度，值是一个数字，不带单位，默认单位像素（px）
* title：鼠标在图片悬停时，显示图片的标题
```

> :warning: 注：当你要修改图片， width 和 height 中，只需要写一个属性就可以了。图片会自动根据大小比例进行调整，缩放大小。

## 10、[文本格式化标签](https://www.w3school.com.cn/html/html_formatting.asp)

| 标签       | 作用               |
| ---------- | ------------------ |
| `<b>`      | 文字加粗           |
| `<strong>` | 文字加粗，加重语气 |
| `<big>`    | 大号字             |
| `<small>`  | 小号字             |
| `<i>`      | 文字倾斜           |
| `<em>`     | 文字倾斜，加重语气 |
| `<sup>`    | 上标字             |
| `<sub>`    | 下标字             |
| `<del>`    | 删除字             |
| `<u>`      | 下划线             |
| `<strike>` | 删除线             |
| `<q>`      | 双引号             |
| `<pre>`    | 预格式化标签       |

:notebook_with_decorative_cover: pre（ 预格式化标签）：

标签中的内容，如何写、排版，就在页面按排版来显示，但是字号变小 。

```html
<pre>
  预格式化标签（做了解，这些如果在工作中用的话，它们的样式也都需要清除掉）自带文字默认样式的标签，比如加粗，倾斜这些
  <strong>让文字加粗</strong>
  <b>让文字加粗</b>
  <em>让文字倾斜</em>
  <i>让文字倾斜</i>
  <del>删除效果</del>
  <u>下划线</u>
</pre>
```

![文本格式化标签](/images/文本格式化标签.png)

## 11、音频和视频标签（HTML5 新增）

### 1）、音频

 <audio src="/videos/宫野栞-入海（时光代理人版本）.mp3" controls></audio>

```html
<audio src="./videos/宫野栞-入海（时光代理人版本）.mp3" controls autoplay muted></audio>
```

| 属性     | 值       | 描述                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| autoplay | autoplay | 自动播放                                                     |
| controls | controls | 显示控制面板                                                 |
| loop     | loop     | 当媒介文件完成播放后再次开始播放                             |
| preload  | preload  | 视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| src      | url      | 要播放的视频的 url                                           |
| muted    | muted    | 静音                                                         |

### 2）、视频

<video src="/videos/时光代理人主题曲.mp4" width="300"></video>

```html
<video src="./videos/时光代理人主题曲.mp4" autoplay="autoplay" width="400"></video>
```

| 属性     | 值       | 描述                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| autoplay | autoplay | 自动播放                                                     |
| controls | controls | 显示控制面板                                                 |
| loop     | loop     | 当媒介文件完成播放后再次开始播放                             |
| preload  | preload  | 视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| src      | url      | 要播放的视频的 url                                           |
| muted    | muted    | 静音                                                         |
| width    | pixels   | 视频播放器的宽度                                             |
| height   | pixels   | 视频播放器的高度                                             |

## 12、内联框架

```html
<iframe name="myWindow" src="default.html" frameborder="1" width="500" height="500"</iframe>

* name：内联框架的名称，配合a标签的target属性，可以实现链接在指定的内联框架中显示
* src：设置一个默认打开的页面
* frameborder：内联框架的边框样式
  0：不显示边框
  1：显示边框
* width：内联框架的宽度
* height：内联框架的高度
```

iframe 是一个内联标签

🔖 步骤：

- 在 iframe 添加 name 属性，并给一个名称。
- a 标签中，添加 target ，值为 iframe 的 name 属性的值。这样就在内联窗口中，显示链接的页面了。

```html
<!-- 例子 -->
<ul>
  <li>
    <a href="a.html" target="myWindow">a页面</a>
  </li>
  <li>
    <a href="b.html" target="myWindow">b页面</a>
  </li>
  <li></li>
</ul>

<iframe name="myWindow" src="默认页面.html" frameborder="0" width="60%" height="400"></iframe>
```

![内联框架](/images/内联框架.png)

# 锚点

把页面滚动到锚点所在位置，让锚点移动到浏览器的顶部或者是底部。

```html
<a name="锚点名称"></a>  // 埋一下锚点
<a href="#锚点名称">回到顶部</a>  // 跳到锚点所在位置
```

```html
<!-- 例子 -->
<ul>
  <li>
    <a href="#top">顶部</a>
  </li>
  <li>
    <a href="#center">中间</a>
  </li>
  <li>
    <a href="#bottom">底部</a>
  </li>
</ul>

<div style="width: 100%;height: 400px;background-color: #ede3e7;">
  <a name="top"></a>
</div>

<div style="width: 100%;height: 400px;background-color: #f0c9cf;">
  <a name="center"></a>
</div>

<div style="width: 100%;height: 400px;background-color: #a4cab6;">
  <a name="bottom"></a>
</div>
```

![锚点](/images/锚点.png)

# 块元素与内联元素

## 1、块级标签

- 每一个块标签，在浏览器中，都是 `另起一行，单独显示` ，并且 `独占一行`
- 可以用来布局页面
- 可以嵌套块元素，也可以嵌套内联元素
- 块级标签有 header，footer，section，nav，ul，ol，li，div，h1~h6，p...

## 2、内联标签

- 多个内联标签，都依次在 `同一行显示` ，如果内容超过一行的长度，自动折行
- 不可以用来布局页面
- 只能嵌套内联元素，不能嵌套块元素
- 内联标签有 a，img，input，button，span...

# 路径

## 1、相对路径

根据文件自己当前的位置，去寻找目标文件。

- `. `：表示当前路径
- `..`：表示返回上一级目录或者文件夹
- `/`：路径与路径之间的分隔符号

## 2、绝对路径

以硬盘的盘符开始，网站项目中不可使用。

> 如：C:\Users\daidai\Pictures\一二布布\1.jpg
>

## 3、根路径

从项目服务器所在的根路径开始，去寻找目标文件。

> 如：/root/www/images/1.jpg
>

# table

## 1、表格的基本结构

```html
<table>
  <tr>
    <td>1行</td>
  </tr>
  <tr>
    <td>2行</td>
  </tr>
  <tr>
    <td>3行</td>
  </tr>
</table>

* 表格由table标签来定义。每个表格均有若干行（tr），每行被分割为若干单元格（td）
```

:notebook_with_decorative_cover: 表格相关标签

| 表格     | 描述         |
| -------- | ------------ |
| table    | 表格         |
| caption  | 表格标题     |
| th       | 表格的表头   |
| tr       | 表格的行     |
| td       | 表格单元     |
| thead    | 表格的页眉   |
| tbody    | 表格的主体   |
| tfoot    | 表格的页脚   |
| col      | 表格列的属性 |
| colgroup | 表格列的组   |

当在页面中，显示一个数据表时用表格，偶尔也会用于与表单配合使用！

> :warning: 注：不会使用 table 进行整个页面的布局！！！
>

- table > tr > td：这样一个嵌套组合
- table > thead + tbody + tfoot
- thead > tr > td
- tbody > tr > td
- tfoot > tr > td
- 表的栏目： thead > tr > th

- 表的标题： table > caption


表格的嵌套组件标签，越是内容的标签， align 级别越高。

## 2、table

| 属性        | 值                             | 描述                                                       |
| ----------- | ------------------------------ | ---------------------------------------------------------- |
| align       | left、center、right            | 表格相对周围元素的对齐方式（不赞成使用，请使用样式代替。） |
| bgcolor     | rgb(x,x,x)、#xxxxxx、colorname | 表格的背景颜色（不赞成使用，请使用样式代替。）             |
| border      | px                             | 表格边框的宽度                                             |
| cellpadding | px、%                          | 单元边沿与其内容之间的空白                                 |
| cellspacing | px、%                          | 单元格之间的空白                                           |
| width       | px、%                          | 表格的宽度                                                 |

## 3、tr

| 属性    | 值                                 | 描述                                             |
| ------- | ---------------------------------- | ------------------------------------------------ |
| align   | left、center、right、justify、char | 表格行的内容对齐方式                             |
| bgcolor | rgb(x,x,x)、#xxxxxx、colorname     | 表格行的背景颜色（不赞成使用，请使用样式代替。） |
| valign  | top、middle、bottom、baseline      | 表格行中内容的垂直对齐方式                       |

## 4、td

| 属性    | 值                                 | 描述                                             |
| ------- | ---------------------------------- | ------------------------------------------------ |
| align   | left、center、right、justify、char | 单元格内容的水平对齐方式                         |
| bgcolor | rgb(x,x,x)、#xxxxxx、colorname     | 单元格的背景颜色（不赞成使用，请使用样式代替。） |
| colspan | number                             | 单元格可横跨的列数                               |
| rowspan | number                             | 单元格可横跨的行数                               |
| width   | px、%                              | 表格单元格的宽度（不赞成使用，请使用样式代替。） |
| height  | px、%                              | 表格单元格的高度（不赞成使用，请使用样式代替。） |
| valign  | top、middle、bottom、baseline      | 单元格内容的垂直排列方式                         |

## 5、caption

```html
<table border="1" width="50%">
  <caption>表格标题，默认显示在表格上方，水平居中</caption>
  <tr>
    <td>栏目1</td>
    <td>栏目2</td>
  </tr>
  <tr>
    <td>第2行</td>
  </tr>
</table>
```

![带有caption的表格](/images/带有caption的表格.png)

## 6、th

表格的表头使用 th 标签进行定义。浏览器会把表头显示为粗体居中的文本。

```html
<table border="1" width="50%">
  <tr>
    <th>栏目1</th>
    <th>栏目2</th>
  </tr>
  <tr>
    <td>内容</td>
    <td>内容</td>
  </tr>
  <tr>
    <td>内容</td>
    <td>内容</td>
  </tr>
</table>
```

![带有th的表格](/images/带有th的表格.png)

## 7、表格单元格合并

- rowspan：**从上向下**跨行合并单元格。所以标签属性要写在第1行的列上。
- colspan：**从左向右**跨列合并单元格。要写要第1列上。

> :warning: 注：多余的单元格，一定要删除！！！
>

```html
<table border="1" width="50%">
  <!-- <caption>表格标题，默认显示在表格上方，水平居中</caption> -->
  <tr>
    <td rowspan="2">跨行合并2个</td>
    <td>内容</td>
    <td>内容</td>
    <td>内容</td>
  </tr>
  <tr>
    <td>内容</td>
    <td>内容</td>
    <td>内容</td>
  </tr>
  <tr>
    <td>内容</td>
    <td colspan="3">跨列合并3个</td>
  </tr>
</table>
```

![表格合并](/images/表格合并.png)

# form

```html
<!-- 所有的表单项，都应该由form包裹。-->
<form></form>

* name：表单的名称，必须写的，每个表单都有一个唯一的名称，在同一个页面不能重名。
* action：提交的地址，服务器的地址
* method：提交的方式
  get
  post
* enctype：被提交数据的编码
  application/x-www-form-urlencoded：在发送前编码所有的字符（默认）
  multipart/form-data：不对字符编码。
  text/plain：空格转换为“+”加号，但不对特殊字符编码。

html5新增属性
* autocomplete：是否启用表单的自动完成功能
  on/off
* novalidate：提交表单时不进行验证
  novalidate
```

:notebook_with_decorative_cover: get 与 post 的区别

- get：提交的信息会显示在 url 上，不安全，并且 url 会有长度限制
- post：不会显示在 url 上，相比 get 安全一点，支持更多类型的编码格式且不对数据类型做限制

# input

```html
<input >

* type：输入框类型
  text、password、file、image、submit、reset、button、hidden、checkbox、radio
  html5新增的：number、tel、email、color、date、datetime-local、month、search、url、week
* name：表单项目的名字。必须写的
* placeholder：没有值的时候，显示提示信息
* maxlength：输入内容的最大长度
* size：设置输入框的宽度
* value：默认值
* disable：禁用
* readonly：只读
* autofoucs：自动获取光标
```

## 1、单行文本输入框 text

```html
<input type="text">
```

## 2、密码输入框 password

```html
<input type="password">
```

## 3、提交按钮 submit

```html
<input type="submit" value="登录">

* value：显示按钮的名称
```

## 4、重置按钮 reset

```html
<input type="reset" value="重置">
```

## 5、单选 radio

```html
<input type="radio" name="sex" value="男" checked="checked">

* checked：设置为默认选中
* name：必须取相同名称
* value：提交到后台的数据
```

```html
当击输入框相关的文本时，可以激活这个输入框或选项。用于提升用户的体验度。

<!-- label语法1：-->
<label>
    <input type="radio" name="sex" value="男" checked="checked">男
</label>
<label>
    <input type="radio" name="sex" value="女">女
</label>

<!-- label语法2：for属性的值，和input标签中id标签属性的值一致！-->
<input id="usex1" type="radio" name="sex" value="男">
<label for="usex1">男</label>
<input id="usex2" type="radio" name="sex" value="女">
<label for="usex2">女</label>
```

## 6、多选 checkbox

```html
<label>
  <input type="checkbox" name="likes" value="1">吃
</label>
<label>
  <input type="checkbox" name="likes" value="2">睡
</label>
<label>
  <input type="checkbox" name="likes" value="3">玩
</label>
<label>
  <input type="checkbox" name="likes" value="4" checked="checkbox">运动
</label>
```

## 7、文件上传 file

```html
<input type="file" name="photo">

* name="photo"，要与后端接收文件这个参数的名称一致
```

> :warning: 注：如果表单中有文件上传，则表单的提交方式只能是 **POST**
>
> `method="post" 编码：enctype="multipart/form-data"`
>
> 凡是有文件上传，项目中都使用 `multipart/form-data` 编码，formData 对象来传文件和表单的数据。
>

## 8、图片按钮 image

图片按钮的作用是与 `type="submit"` 功能一致，都会提交表单。

```html
<input type="image" src="./login.png">

* src：表示引用图片的路径和文件名
```

## 9、隐藏表单域 hidden

网页上是不能看到这个内容的，但是提交表单数据时，会接收到这个域的数据。一般可以用来隐藏的传数据到后台。

```html
<input type="hidden" name="sourceSite" value="1">
```

## 10、HTML5中增加的 type 属性

- 颜色


```html
color：用于指定颜色的控件
<input type="color" value="#ff0000">

* value：不能使用英文单词
```

- 日期

```html
* date：用于输入日期的控件（年，月，日，不包括时间）
<input type="date" value="2023-04-16">

* datetime：基于 UTC 时区的日期时间输入控件（时分秒及几分之一秒）
<input type="datetime" value="2023-04-16T04:16Z">

* month：用于输入年月的控件不带时区
<input type="month" name="month" value="2023-04">

* week：用于输入一个由星期-年组成的日期日期不包括市区
<input type="week" name="week" value="2023-W16">

* datetime-local：用于输入日期的时间控件，不包含时区
<input type="datetime-local" name="localdatetime" value="2023-04-16T04:16">
```

- 邮件


```html
email：用于编辑email字段
<input type="email" name="email" required="required">

* 必须按email格式进行输入，否则提交报错
* required：必填项，提交表单时，没有输入电子邮件则会提示
```

- 数字


```html
number：用于输入浮点数的控件
<input type="number" value="0" step="2">

* min：允许输入的最小有效数字
* max：允许输入的最大有效数字
* step：只能输入数字，每次数字变化的大小值
```

- 搜索框

```html
search：用于输入搜索字符串的单行文本字段 ，换行会被从输入的值中自动移除
<input type="search" name="search" placeholder="搜索内容">
```

- 电话号码

```html
tel：用于输入电话号码的控件
<input type="tel" name="tel" placeholder="请输入你的电话号码">
```


- url


```html
url：用于编辑 URL 的字段
<input type="url" name="url" placeholder="请输入url..." required="required">

* url：必须按http://www.xxx.xx的格式进行输入，否则提交报错
* required：验证输入字符串是否是一个url
```

# select

```html
<select name="edu" id="edu" multiple="multiple">
  <option value="1">本科</option>
  <option value="2">专科</option>
  <option value="3">职高</option>
  <option value="4" selected="selected">高中</option>
</select>

* value：当选中这个option，提交表单时，是提交的select标签的值
* size：表示列表同时显示的选项的数量
* selected：设置当前项为默认的选中项
* multiple="multiple"：允许用户按ctrl不放，连续选择
```

> :warning: 注：与多选框、单选框的默认选中 checked 进行区别。

![select标签](/images/select标签.png)

# textarea

```html
<textarea name="info" id="info" cols="30" rows="10"></textarea>

* cols：设置一行输入字符的列数，可以控制宽度
* rows：设置有多少行，可以控制高度
* maxlength：最大输入数量
* placeholder：提示信息
```

![textarea标签](/images/textarea标签.png)

# button

```html
<button type="submit">提交</button>
<button type="reset">重置</button>
<button type="button">普通按钮</button>

<!-- value="登录"，表示按钮的文本，功能，名称 -->
<!-- 以下三个type的值，和上面三个按钮功能相同。-->
<input type="submit" value="登录">  
<input type="reset" value="我想重新写">
<input type="button" value="普通按钮">
```

# 表单与表格嵌套应用

```html
<form>
  <table>  
    <tbody>
      <tr>
        <td>姓名：</td>
        <td>
          <input type="text" name="username" placeholder="" />
        </td>
      </tr>
    </tbody>
  </table>
</form>
```

# 特殊的标签属性

- `readonly="readonly"` ：只读，不可以写入或者修改数据
- `disabled="disabled"` ：禁用属性
- `required="required"` ：表示必填，不能为空值

# legend 和 fieldset

```html
<fieldset>
  <legend>个人信息</legend>
  姓名：<input type="text" size="30"> <br>
  年龄：<input type="text" size="30"> <br>
  生日：<input type="text" size="30"> <br>
</fieldset>

* fieldset：可以将表单内的相关元素分组，并且会在相关表单元素周围绘制边框
* legend：用来组合表单的相关元素，表示了其父级fieldset内容的标题
```

![fieldset标签](/images/fieldset标签.png)

# HTML5  新增标签

每个 HTML5 新增加的标签，都是块标签。

| 标签    | 作用                                                         |
| ------- | ------------------------------------------------------------ |
| header  | 头部                                                         |
| footer  | 尾部                                                         |
| nav     | 导航                                                         |
| section | 定义文档中的节，比如章节，一般用在大内容块                   |
| article | 文章内容，论坛帖子，一则网站新闻，一篇博客文章               |
| aside   | 装载非正文类的内容。例如广告，成组的链接，侧边栏等等         |
| address | 地址，包括联系地址，电话，传真，邮箱等联系方式的内容         |
| figure  | 标记文档中的一个图像。figure 元素带有一个标题 figcaption 标签 |

> :warning: 注：header 标签不能被放在 footer 、address 或者另一个 header 元素内部

## 1、figure

figure 标签规定独立的流内容（图像、图表、照片、代码等等）。元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。

```html
<figure>
  <div><img src="img.png" alt=""></div>
  <figcaption>图片标题</figcaption>
</figure>
```

## 2、hgroup

表示文档部分的多级标题，用于对网页或区段（section）的标题进行组合。网页在界面上没有区别，增强了语义化的理解。

```html
<hgroup>
  <h1>呆呆</h1>
  <h2>朱朱</h2>
</hgroup>
```

## 3、datalist

配合 input 标签使用，用来表示可选的列表，可用于搜索功能。

```html
<input list="browsers">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

![datalist标签](/images/datalist标签.png)

## 4、blockquote

blockquote 标签定义摘自另一个源的块引用。浏览器通常会对 blockquote 元素进行缩进。

```html
<blockquote>文字部分</blockquote>
```

![blockquote标签](/images/blockquote标签.png)
