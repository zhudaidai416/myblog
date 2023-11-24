## [w3school - css](https://www.w3school.com.cn/cssref/index.asp)

## [MDN - CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

## CSS 基础

### 1、定义

Cascading Style Sheets 层叠样式表，简称 CSS 。

### 2、作用

对页面结构进行排版布局，美化，动画实现，交互的实现。

### 3、三大特性

- 层叠性
- 继承性
- 优先级

### 4、引入方式

#### 1）、内联样式表

```html
<p style="color:red; font-size: 20px;">内联样式表</p>
```

#### 2）、内部（内嵌）样式表

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

#### 3）、外部样式表

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

#### 4）、导入样式表

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

#### 5）、优先级

内联样式表 > 内部（内嵌）样式表 > 外部样式表 > 浏览器缺省设置

## 选择器

### 1、元素选择器

使用 `html标签` 作为选择器的名称，也被称为元素选择器。

```css
选择器名称（h1,p,span,li,ul...） {
  css属性名：值;
}
```

> :warning: 注：和选择器名称相同的 HTML 标签都会受影响。除非整个页面中，某一个标签的样式都一样，否则，应该少使用元素选择器。

### 2、类选择器

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

### 3、ID 选择器

使用自定义的名称，以 `#` 作为前缀，通过 HTML 标签的 id 属性调用选择器。

```html
#ID选择器名称 {
	css属性名：值;
}

<开始标签 id="id选择器名称"></结束标签>
```

> :warning: 注：一个 ID 选择器，在同一个页面中只能被引入一次！

### 4、通配符选择器

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

### 5、 后代选择器

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

### 6、子元素选择器

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

### 7、并集选择器

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

### 8、交集选择器

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

### 9、权重

!important`（无限大）` > 内联样式`（1000）` > id选择器`（100）` > class选择器（属性选择器）`（10）` > 元素（标签）选择器`（1）` > 通配符选择器

❓ 优先级法则

- 选择器都有一个权值，权重越大越优先
- 权重相等时，后出现的样式表设置要优先于先出现的样式表设置
- 创作者的规则高于浏览者：即网页编写者设置的 CSS 样式的优先权高于浏览器所设置的样式
- 继承的 CSS 样式不如后来指定的 CSS 样式
- 同一组属性设置中标有 `!important` 规则的优先级最大

## 常用属性

### 1、背景属性

| 属性                  | 含义                 | 说明                             |
| --------------------- | -------------------- | -------------------------------- |
| background-color      | 背景颜色             | transparent 透明                 |
| background-image      | 背景图片             | url                              |
| background-repeat     | 背景图片的重复方式   | no-repeat、repeat                |
| background-position   | 背景图片的显示位置   | top、bottom、left、right、center |
| background-attachment | 背景图片是否跟随滚动 | scroll(默认)、fixed固定不动      |
| background            | 简写                 |                                  |

### 2、文本属性

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

### 3、字体属性

| 属性        | 含义     | 说明                   |
| ----------- | -------- | ---------------------- |
| font-family | 字体系列 | 宋体，微软雅黑等       |
| font-size   | 字体大小 | `px`,`em`,`rem`,%      |
| font-weight | 字体粗细 | 使用数字表示加粗或变细 |
| font-style  | 字体样式 | italic，normal         |
| font        | 字体简写 |                        |

### 4、列表属性





## 盒子模型

## 浮动布局

## [flex](https://www.runoob.com/w3cnote/flex-grammar.html)

[动画演示](https://www.bilibili.com/video/BV1Rv4y177rj/?spm_id_from=333.999.top_right_bar_window_custom_collection.content.click&vd_source=4a55e10f649fa34686122c7c44b2c9ea)

### 1、容器属性

flex-direction：决定主轴的方向

```css
flex-direction: row | row-reverse | column | column-reverse;

* row（默认值）：水平（起点在左）
* row-reverse：水平反向（起点在右）
* column：垂直
* column-reverse：垂直反向
```

flex-wrap：如果一条轴线排不下，如何换行

```css
flex-wrap: nowrap | wrap | wrap-reverse;

* nowrap（默认值）：不换行
* wrap：换行
* wrap-reverse：行序反向
```

flex-flow：flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap

```css
flex-flow: <flex-direction> <flex-wrap>
```

justify-content：在主轴上的对齐方式

```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;

* flex-start（默认值）：主轴前对齐
* flex-end：后对齐
* center： 居中
* space-between：等距 首尾（首尾贴合容器边缘）
* space-around：等距 两边（前后两侧间隔相等）
* space-evenly：等距 容器（等距包含容器边缘）
```

align-items：在交叉轴上的对齐方式

```css
align-items: flex-start | flex-end | center | baseline | stretch;

* flex-start（默认值）：交叉轴前对齐
* flex-end：交叉轴后对齐
* center：居中
* baseline: 文字基线（项目首行文字对齐）
* stretch：拉伸（如果项目未设置高度或设为 auto，将占满整个容器的高度）
```

align-content：多根轴线的对齐方式

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch;

* flex-start（默认值）：与交叉轴的起点对齐
* flex-end：与交叉轴的终点对齐
* center：与交叉轴的中点对齐
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
* stretch：轴线占满整个交叉轴
```

### 2、项目属性

order：根据其数值定义元素的排序，数值越小排列越靠前（默认值为 0）

flex-grow：放大比例，默认值为 0，即不放大

flex-shrink：缩小比例，默认值为 1，即空间不足会压缩

flex-basis：设置项目的空间占比，默认值为 auto

flex：以上三个属性的简写，默认值为 0 1 auto

align-self：允许项目自身有单独的交叉轴对齐方式，用于覆盖容器属性的 align-items 的

### 3、案例

1）、[骰子案例](https://www.cnblogs.com/hellocd/p/13584058.html)

2）、布局案例

左中右，三列布局，左右两列宽度固定，中间列宽度自适应

```html
<style>
  h1 {
    text-align: center;
  }

  /* 布局案例1 */
  .left1,.right1 {
    width: 200px;
    height: 400px;
    background-color: cadetblue;
  }
  .left1 {
    float: left;
  }
  .right1 {
    float: right;
  }
  .center1 {
    height: 400px;
    margin-left: 210px;
    margin-right: 210px;
    background-color: pink;
  }

  /* 布局案例2 */
  .box2 {
    display: flex;
  }
  .left2,.right2 {
    width: 200px;
    height: 400px;
    background-color: darkseagreen;
  }
  .center2 {
    height: 400px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: pink;
    flex: 1;
  }
</style>
<body>
  <!-- 左中右，三列布局，左右两列宽度固定，中间列宽度自适应 -->
  <h1>布局案例1</h1>
  <div class="box1">
    <div class="left1"></div>
    <div class="right1"></div>
    <div class="center1"></div>
  </div>

  <h1>布局案例2</h1>
  <div class="box2">
    <div class="left2"></div>
    <div class="center2"></div>
    <div class="right2"></div>
  </div>
</body>
```

## grid

[动画演示](https://www.bilibili.com/video/BV18p411A7JB/?spm_id_from=333.337.search-card.all.click&vd_source=4a55e10f649fa34686122c7c44b2c9ea)

### 1、容器属性

display：grid 指定一个容器采用网格布局

```css
display: grid | inline-grid;

* grid：块级容器（宽度撑满整行）
* inline-grid：行内容器（宽度随内容自适应）
```

> :warning: 注：设为网格布局以后，容器子元素（项目）的 `float`、`display: inline-block`、`display: table-cell`、`vertical-align` 和 `column-*` 等设置都将失效。

grid-template-columns：定义每一列的列宽

grid-template-rows：定义每一行的行高

```css
grid-template-columns: 100px 100px 100px;
grid-template-rows: 100px 100px 100px;

grid-template-columns: 33.33% 33.33% 33.33%;
grid-template-rows: 33.33% 33.33% 33.33%;

* 使用绝对单位或者百分比
```

1）、repeat()：简化重复的值

```css
grid-template-columns: repeat(重复的次数, 所要重复的值);

grid-template-columns: repeat(3, 33.33%);

// 重复某种模式
grid-template-columns: repeat(2, 100px 20px 80px);
* 1、4列宽度为100px，2、5列宽度为20px，3、6列宽度为80px
```

2）、auto-fill 关键字：无法确定列数时，自动填充，直到容器不能放置更多的列

auto-fit：同上

```css
grid-template-columns: repeat(auto-fill, 100px);
```

> :warning: 注：只有当容器足够宽，可以在一行容纳所有单元格，并且单元格宽度不固定的时候，才会有[行为差异](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)：`auto-fill` 会用空格子填满剩余宽度，`auto-fit` 则会尽量扩大单元格的宽度。

3）、fr 关键字：方便表示比例关系

```css
grid-template-columns: 1fr 1fr;

* fr 可以与绝对长度的单位结合使用


// 第一列的宽度为150像素，第二列的宽度是第三列的一半
grid-template-columns: 150px 1fr 2fr;
```

4）、minmax()：产生一个长度范围，表示长度就在这个范围之中

```css
grid-template-columns: 1fr 1fr minmax(最小值, 最大值);

// 表示列宽不小于100px，不大于1fr
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

5）、auto 关键字：由浏览器自己决定长度

```css
grid-template-columns: 100px auto 100px;
```

6）、网格线的名称

还可以使用方括号，指定每一根网格线的名字，方便以后的引用

```css
grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
```

网格布局允许同一根线有多个名字，比如 `[fifth-line row-5]`

7）、布局实例

```css
// 左边栏设为70%，右边栏设为30%
grid-template-columns: 70% 30%;

// 传统的十二网格布局
grid-template-columns: repeat(12, 1fr);
```

grid-row-gap：设置行间距

grid-column-gap：设置列间距

grid-gap：grid-column-gap 属性和 grid-row-gap 属性的合并简写形式

```css
grid-row-gap: 20px;
grid-column-gap: 20px;
= grid-gap: 20px 20px;


grid-gap: <grid-row-gap> <grid-column-gap>;

* 省略了第二个值，浏览器认为第二个值等于第一个值
* 根据最新标准，前缀已经删除，写为 column-gap、row-gap、gap
```

grid-template-areas：网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成

```css
grid-template-columns: 100px 100px 100px;
grid-template-rows: 100px 100px 100px;
grid-template-areas: 'a b c'
                     'd e f'
                     'g h i';

// 多个单元格合并成一个区域的写法
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';

* 如果某些区域不需要利用，则使用"点"（.）表示
```

> :warning: 注：区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为 `区域名-start`，终止网格线自动命名为 `区域名-end`
>
> 例子：区域名为 `header`，则起始位置的水平网格线和垂直网格线叫做 `header-start`，终止位置的水平网格线和垂直网格线叫做 `header-end`

grid-auto-flow：划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格

```css
grid-auto-flow: row | column | row dense | column dense;

* row（默认值）：先行后列
* column：先列后行
* row dense：先行后列，并且尽可能紧密填满，尽量不出现空格
* column dense：先列后行，并且尽量填满空格
```

![grid-auto-flow](/images/grid-auto-flow.png)

justify-items：设置单元格内容的水平位置（左中右）

align-items：单元格内容的垂直位置（上中下）

place-items：align-items 属性和 justify-items 属性的合并简写形式

```css
justify-items: start | end | center | stretch;
align-items: start | end | center | stretch;

* start：对齐单元格的起始边缘
* end：对齐单元格的结束边缘
* center：单元格内部居中
* stretch：拉伸，占满单元格的整个宽度（默认值）


place-items: <align-items> <justify-items>;

* 如果省略第二个值，则浏览器认为与第一个值相等
```

justify-content：整个内容区域在容器里面的水平位置（左中右）

align-content：整个内容区域的垂直位置（上中下）

place-content：align-content 属性和 justify-content 属性的合并简写形式

```css
justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}

* start：对齐容器的起始边框
* end：对齐容器的结束边框
* center：容器内部居中
* stretch：项目大小没有指定时，拉伸占据整个网格容器
* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍
* space-between：项目与项目的间隔相等，项目与容器边框之间没有间隔
* space-evenly：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔


place-content: <align-content> <justify-content>

* 如果省略第二个值，则浏览器认为与第一个值相等
```

grid-auto-columns：设置浏览器自动创建的多余网格的列宽

grid-auto-rows：设置浏览器自动创建的多余网格的行高

```css
// 指定新增的行高统一为50px（原始的行高为100px）
grid-template-columns: 100px 100px 100px;
grid-template-rows: 100px 100px 100px;
grid-auto-rows: 50px;
```

grid-template：grid-template-columns、grid-template-rows 和 grid-template-areas 这三个属性的合并简写形式

grid：grid-template-rows、grid-template-columns、grid-template-areas、grid-auto-rows、grid-auto-columns、grid-auto-flow 这六个属性的合并简写形式

> :warning: 注：从易读易写的角度考虑，还是建议不要合并属性

### 2、项目属性

grid-column-start：左边框所在的垂直网格线

grid-column-end：右边框所在的垂直网格线

grid-row-start：上边框所在的水平网格线

grid-row-end：下边框所在的水平网格线

```css
// 指定具体的网格线
// 1号项目的左边框是第2根垂直网格线，右边框是第4根垂直网格线
.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}

* 没有指定上下边框，所以会采用默认位置，即上边框是第一根水平网格线，下边框是第二根水平网格线
* 使用这四个属性，如果产生了项目的重叠，则使用 z-index 属性指定项目的重叠顺序


// 指定为网格线的名字
.item-1 {
  grid-column-start: header-start;
  grid-column-end: header-end;
}


// 使用 span 关键字：表示"跨越"，即左右边框（上下边框）之间跨越多少个网格
.item-1 {
  grid-column-start: span 2;  // 1号项目的左边框距离右边框跨越2个网格
}
```

grid-column：grid-column-start 和 grid-column-end 的合并简写形式

grid-row：grid-row-start 属性和 grid-row-end 的合并简写形式

```css
grid-column: <start-line> / <end-line>;
grid-row: <start-line> / <end-line>;

* 斜杠以及后面的部分可以省略，默认跨越一个网格


// 例子
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}


// 可以使用 span 关键字
.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

grid-area：指定项目放在哪一个区域

还可用作 grid-row-start、grid-column-start、grid-row-end、grid-column-end 的合并简写形式，直接指定项目的位置

```css
grid-area: <row-start> / <column-start> / <row-end> / <column-end>;


// 例子
.item-1 {
  grid-area: e;
}
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
```

justify-self：设置单元格内容的水平位置（左中右），跟 justify-items 属性的用法完全一致，但只作用于单个项目

align-self：设置单元格内容的垂直位置（上中下），跟 align-items 属性的用法完全一致，也是只作用于单个项目

place-self：align-self 属性和 justify-self 属性的合并简写形式

```css
justify-self: start | end | center | stretch;
align-self: start | end | center | stretch;

* start：对齐单元格的起始边缘
* end：对齐单元格的结束边缘
* center：单元格内部居中
* stretch：拉伸，占满单元格的整个宽度（默认值）


place-self: <align-self> <justify-self>;

* 如果省略第二个值，place-self 属性会认为这两个值相等
```

## 固定布局

## 其他属性

