# CSS

## 1、BFC

理解：BFC 是 CSS 布局的一个概念，是一块独立的渲染区域，一个环境，里面的元素不会影响到外部的元素。

:notebook_with_decorative_cover: 如何生成 BFC（脱离文档流）

- 根元素，即 HTML 元素（最大的一个 BFC）
- float 的值不为 none
- position 的值为absolute 或 fixed
- overflow 的值不为 visible（默认值，内容不会被修剪，会呈现在元素框之外）
- display 的值为inline-block、table-cell、table-caption

:notebook_with_decorative_cover: BFC 布局规则

- 内部的 Box 会在垂直方向，一个接一个地放置
- 属于同一个 BFC 的两个相邻的 Box 的 margin 会发生重叠
-  BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此，文字环绕效果，设置 float
- BFC 的区域不会与 float box 重叠

## 2、垂直居中一个元素

- 绝对定位。通过与父元素的绝对定位来让自身实现垂直居中。
- 如果居中的是行内元素，可以设置父级 height 与 line-height 相等
- 设置 margin/padding 居中
- 相对位置偏移居中
- flex 居中。设置 align-items:center 即可

## 3、
