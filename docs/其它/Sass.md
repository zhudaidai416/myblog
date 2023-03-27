## CSS预编译器

### 1、理解

属于 css 的扩展语言、支持所有 css 的语法，然后新增语法。

比如：变量、css 导入、css 嵌套、函数等等。

种类很多：less、sass

前提条件：浏览器支持 css 文件、不支持 .less 或者 .scss 文件，所以需要对这些预编译语言提前编译为 css 。

### 2、[sass](https://www.sass.hk/) 安装

根据不同的框架环境依赖的模块是不一样的。

```bash
npm i sass/node-sass/dart-sass

# 或者直接在 vscode 中安装相应插件，编写完 scss 文件后，就会自动转换。

搜索相应关键字 sass

# vue 环境下使用 sass
第一步、安装环境时、选择 sass
第二步、在 style 标签上加上 lang="scss"
```

## [sass 语法](https://www.sass.hk/guide/)

### 1、变量

可以把反复利用到的 css 值定义为变量，然后通过变量名来引用。

```scss
// 定义：以 $ 开头，后面跟上变量名
$theme-color: #ff0;

// 使用
nav {
  background: $theme-color;
}
footer {
  border: 1px solid $theme-color;
}

// 通过 #{} 插值语句可以在选择器或者属性名中使用变量
$b: border;

p .#($b){
  #($b)-left: 1px solid $theme-color;
}
```

### 2、导入

可以导入 scss 文件，也可以导入 css 文件。

```scss
@import '文件名';  // 文件后缀如果是.scss 那么可以省略不写

// 例子
<style lang="scss">
	@import './assets/scss/var';
</style>
```

### 3、css 嵌套

 可以像标签嵌套那样进行套娃操作，从而避免重复编写。

```scss
// scss 嵌套
.body{
  width: 200px;
  a{
    color: red;
  }
  p{
    color: pink;
  }
}

// 编译后为
.body {
  width: 200px;
}
.body a{
  color: red;
}
.body p{
  color: pink;
}
```

```scss
// 父选择器标识符 &
a {
  color: red;
  
  &:hover {
  	color: green;
  }
}
```

### 4、混合

当出现大段重复的代码时，此时就可以使用混合去实现大段样式的复用。

```scss
// 定义混合 - 此段代码可以重复利用
@mixin center {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
}

// 使用 - 通过 @include 来标识
.center{
  @include center;
  background: pink;
}
```

```scss
// 混合允许使用变量 - 类似混合是函数，函数也可以接受参数，并且参数可以有默认值
@mixin center($w) {  // $w 就是参数
  width: $w;
  margin-left: auto;
  margin-right: auto;
}

// 使用 
.content {
  @include center(1000px);
}

@mixin center($w:800px) {  // 默认值
  width: $w;
  margin-left: auto;
  margin-right: auto;
}
// 使用 
.content {
  @include center();  // 没有传值就是默认值
}
```

### 5、继承

一个选择器继承另外一个选择器。

```scss
.error {
  background: red;
  color: #fff;
}

.seriousError {
  @extend .error; // 通过 @extend 去继承另外一个选择器中所有的 css 代码
  background: darkred;
}
```

### 6、运算

```scss
p {
  width: $w/2;
}
```

### 7、函数

```scss
// 随机颜色
@function randomNum($max,$min:0) {
  @return ($min + random($max));
}
```

### 8、颜色函数

### 9、流程控制

```scss
@if
@for
```
