# [w3school - css](https://www.w3school.com.cn/cssref/index.asp)

# [MDN - CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

# CSS 基础

## 1、定义

Cascading Style Sheets 层叠样式表，简称 CSS 。

## 2、作用

对页面结构进行排版布局，美化，动画实现，交互的实现。

## 3、三大特性

- 层叠性
- 继承性
- 优先级

## 4、引入方式

### 1）、内联样式表

```html
<p style="color:red; font-size: 20px;">内联样式表</p>
```

### 2）、内部（内嵌）样式表

```html
<head>
  <style>
    选择器 {
      css属性名称：值;
	    css属性名称：值;
    }
  </style>
</head>

<!-- 例子 -->
<head>
  <style type="text/css">
    h1 {
      border: 1px green solid;  /* 边框：粗细度 颜色 样式（实线，虚线。。。）*/
    }
    h2 {
      color: blue;
      font-size: 14px;
    }
  </style> 
</head>
```

### 3）、外部样式表

```  html
<head>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>

* rel="stylesheet"：当前文档与被链接文档之间的关系。stylesheet：表示是文档的外部样式表。
* type="text/css"：被链接文档的MIME类型。text/css类型描述样式表。在html5中，可以不写type属性。
* href：被链接文档的位置
```

> :warning: 注：
>
> 1、如果有多个外部样式表的文件，那么可以使用多个 link 来引用。
>
> 2、一个 link 标签，只能对应一个外部样式表文件。
>
> 3、开发时，要先创建 css 文件，再在 html 文件中，使用 link 引用 外部样式表文件。

### 4）、导入样式表

```html
@import "外部样式表文件路径";

<!-- 例子 -->
<style type="text/css">
  写法1：
  @import "a.css";
  
  写法2：
	@import url(./css/demo1.css);
	@import url(./css/a.css);
	h2 {
		font-size: 14px;
	}
</style>

<!-- demo1.css文件中 -->
@import url(./a.css);
@import url(./border.css);
p {
	color: yellowgreen;
}
```

> :warning: 注：
>
> 1、用 `引号` 包起来，以 `;` 结束。
>
> 2、只能使用在外部样式表文件或内部样式表的开头位置。
>
> 3、如有多个要引入的文件，分行写。

### 5）、优先级

内联样式表 > 内部（内嵌）样式表 > 外部样式表 > 浏览器缺省设置

# 选择器

## 1、元素选择器

使用 `html标签` 作为选择器的名称，也被称为元素选择器。

```css
选择器名称（h1,p,span,li,ul...） {
  css属性名：值;
}
```

> :warning: 注：和选择器名称相同的 HTML 标签都会受影响。除非整个页面中，某一个标签的样式都一样，否则，应该少使用元素选择器。

## 2、类选择器

使用自定义的名称，以 `.` 作为前缀，通过 HTML 标签的 class 属性调用选择器。

```html
.类选择器名称 {
	css属性名：值;
}

<开始标签 class="类选择器名称"></结束标签>

<!-- 例子 -->
<style>
  .div1 {}
</style>

<h1 class="div1"></h1>
<div class="div1"></div>
<p class="div1"></p>
```

> :warning: 注：
>
> - 可以重复引用 。只有被引用，样式表才可以起作用！
> - 调用多个类选择器时，以空格隔开
> - class属性可写多个类名

:notebook_with_decorative_cover: 选择器命名规则

- 不能有特殊符号 @、￥ 等

- 首字母不能是数字或者下划线

- 常见的取名方式（可以以 “_” 、“-”、大写来规范）

  > 例子：xx_content、xx-content、xxContent（class不建议用）

## 3、ID 选择器

使用自定义的名称，以 `#` 作为前缀，通过 HTML 标签的 id 属性调用选择器。

```html
#ID选择器名称 {
	css属性名：值;
}

<开始标签 id="id选择器名称"></结束标签>
```

> :warning: 注：一个 ID 选择器，在同一个页面中只能被引入一次！

## 4、通配符选择器

选择网页中所有的 HTML 元素。

```html
* {
  css属性名：值;
}

<!-- 例子 -->
<head>
  <style>
    * {
      color: red;
    }
  </style>
</head>
<body>
  <div>呆呆</div>
  <span>哈哈</span>
  <ul>
    <li>嘿嘿</li>
  </ul>
</body>

结果：所有的标签字体都为红色
```

## 5、 后代选择器

匹配所有指定元素的后代元素（包括子元素以及子元素的子元素等后代元素），以 `空格` 来分隔两个选择器。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>后代选择器</title>
  <style>
    div p {
      background-color: aliceblue;
    }
  </style>
</head>
<body>
  <div>
    <p>this is p.</p>
    <div>
      <h2>this is h2.</h2>
      <p>this is p.</p>
    </div>
  </div>
</body>
</html>
```

![后代选择器](/images/后代选择器.png)

## 6、子元素选择器

只能选择作为某元素子元素的元素，以 `>` 来分隔两个选择器。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>子元素选择器</title>
  <style>
    div>p {
      background-color: aliceblue;
    }
  </style>
</head>
<body>
  <div>
    <p>this is p.</p>
    <section>
      <h2>this is h2.</h2>
      <p>this is p.</p>
    </section>
  </div>
</body>
</html>
```

![子元素选择器](/images/子元素选择器.png)

## 7、并集选择器

通过 `,` 来分隔多个选择器，可以是 id、class、元素和其他派生（复合）选择器。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>并集选择器</title>
  <style>
    p,h3,li {
      background-color: aliceblue;
    }
  </style>
</head>
<body>
  <div>
    <p>this is p.</p>
    <h3>this is h3.</h3>
    <p>this is p.</p>
    <li>this is p.</li>
  </div>
</body>
</html>
```

![并集选择器](/images/并集选择器.png)

## 8、交集选择器

给指定的 HTML 元素定义一个专用的选择器。其它 HTML 元素即使使用后都无效。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>交集选择器</title>
  <style>
    p.text-center {
      background-color: aliceblue;
      color: plum;
    }
  </style>
</head>
<body>
  <div>
    <p class="text-center">this is p.</p>
    <h3 class="text-center">this is h3.</h3>
    <p class="text-center">this is p.</p>
    <li class="text-center">this is p.</li>
  </div>
</body>
</html>
```

![交集选择器](/images/交集选择器.png)

## 9、权重

!important`（无限大）` > 内联样式`（1000）` > id选择器`（100）` > class选择器（属性选择器）`（10）` > 元素（标签）选择器`（1）` > 通配符选择器

❓ 优先级法则

- 选择器都有一个权值，权重越大越优先
- 权重相等时，后出现的样式表设置要优先于先出现的样式表设置
- 创作者的规则高于浏览者：即网页编写者设置的 CSS 样式的优先权高于浏览器所设置的样式
- 继承的 CSS 样式不如后来指定的 CSS 样式
- 同一组属性设置中标有 `!important` 规则的优先级最大

# 常用属性

## 1、背景属性

| 属性                  | 含义                 | 说明                             |
| --------------------- | -------------------- | -------------------------------- |
| background-color      | 背景颜色             | transparent 透明                 |
| background-image      | 背景图片             | url                              |
| background-repeat     | 背景图片的重复方式   | no-repeat、repeat                |
| background-position   | 背景图片的显示位置   | top、bottom、left、right、center |
| background-attachment | 背景图片是否跟随滚动 | scroll(默认)、fixed固定不动      |
| background            | 简写                 |                                  |

## 2、文本属性

| 属性            | 含义           | 说明                   |
| --------------- | -------------- | ---------------------- |
| color           | 颜色           | 英文单词，`rgb`,16进制 |
| line-height     | 行高           | 行之间的间距           |
| text-align      | 水平对齐方式   | 常用文本居中           |
| vertical-align  | 垂直对齐方式   | 常用文本与图片对齐     |
| text-indent     | 首行缩进       |                        |
| text-decoration | 文本修饰       | underline,`overline`,  |
| text-transform  | 字母大小写转换 | 首字母大小写等         |
| letter-spacing  | 字符间距       |                        |
| letter-spacing  | 单词间距       | 只对英文有效           |
| white-space     | 空白的处理     | 文本超出后是否换行     |
| text-shadow     | 文字阴影       |                        |

## 3、字体属性

| 属性        | 含义     | 说明                   |
| ----------- | -------- | ---------------------- |
| font-family | 字体系列 | 宋体，微软雅黑等       |
| font-size   | 字体大小 | `px`,`em`,`rem`,%      |
| font-weight | 字体粗细 | 使用数字表示加粗或变细 |
| font-style  | 字体样式 | italic，normal         |
| font        | 字体简写 |                        |

## 4、列表属性





# 盒子模型

# 浮动布局

# 固定布局

# 其他属性

