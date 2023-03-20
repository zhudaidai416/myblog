# [canvas使用文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)

# 一、概念

HTML5 提出来的。IE9+ 支持。是一块画布、可以通过 JS 在上面进行各种图示图表、图像、动画的绘制。

# 二、应用场景

- 验证码
- echarts（d3.js）
- 网页游戏（微信小游戏:跳一跳）
- 图片、视频处理
- 图片裁剪

# 三、创建画布

```html
// 第一步、在 html 中创建指定大小的画布，默认 300 * 150px。
<canvas id="myCanvas" width="300" height="150">
  您当前的浏览器不支持（不支持该语法的就会显示文字，支持的就不会显示出来）
</canvas>

// 第二步、获取渲染上下文对象
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');  // 2D渲染上下文
</script>

扩展：3D 是 webGL 技术，对应的框架是 three.js。
```

# 四、图形绘制

```javascript
// 绘制一个填充的矩形，默认颜色是黑色
ctx.fillRect(x,y,width,height);

// 绘制一个矩形的边框
ctx.strokeRect(x, y, width, height);

// 清除指定矩形区域，让清除部分完全透明
ctx.clearRect(x, y, width, height);

* x：x 轴坐标，正方向是向右，坐标原点是 canvas 的左上角
* y：y 轴坐标，正方向是向下
* width：矩形宽度，单位：像素（px）
* height：矩形高度
```

# 五、样式控制

```javascript
// 设置图形的填充颜色
ctx.fillStyle = color;

// 设置图形的边框颜色
ctx.strokeStyle = color;

// 边框线条的粗细，默认值是1
ctx.lineWidth = 值;
```

# 六、路径

## 1、什么是路径

canvas 中除了矩形外，其他图形都必须通过路径绘制，然后再选择是描边还是填充。

## 2、路径绘制

```javascript
// 表示开始进行路径绘制，每次调用该方法后，将会重新开始绘制新路径。
ctx.beginPath();

// 路径的起始点坐标。
ctx.moveTo(x, y);

// 从上与一点绘制到当前坐标，两点之间形成直线。
ctx.lineTo(x, y);

// 结束路径绘制，该方法不用每次绘制完毕后调用，因为调用该方法后，会自动将起点坐标与结束点坐标连接起来。
ctx.closePath();

// 填充路径。
ctx.fill();

// 描边路径。
ctx.stroke();

// 圆弧路径绘制。
ctx.arc(x, y, r, startAngle, endAngle, bool);

* x: 圆心 x 轴坐标
* y：圆心 y 轴坐标 
* r：圆的半径
* startAngle：开始绘制圆的角度
* endAngle：结束绘制时的角度
* bool：布尔值，表示顺时针（true）还是逆时针（false）绘制，默认顺时针

// 贝塞尔二次曲线，绘制一般曲线。
ctx.quadraticCurveTo(cp1x, cp1y, x, y);

* cp1x：控制点 x 轴坐标
* cp1y：控制点 y 轴坐标
* x：绘制点 x 轴坐标
* y：绘制点 y 轴坐标
```

## 3、实例

```html
// 绘制一个圆形
<canvas id="myCanvas" width="500" height="500"></canvas>
  
<script>
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')

  // 路径绘制
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(100, 100);
  ctx.lineTo(50, 100);
  ctx.closePath();
  ctx.stroke();

  // 绘制圆
  ctx.beginPath();
  ctx.arc(200, 70, 50, 0, Math.PI * 2,false);
  ctx.closePath();
  ctx.stroke();

  // 曲线绘制
  ctx.beginPath();
  ctx.moveTo(300, 20);
  ctx.quadraticCurveTo(300, 200, 400, 20);
  ctx.stroke();
</script>
```

运行结果：![canvas实例](/images/canvas实例.png)

# 七、图像操作

## 1、绘制图像

```javascript
// 将图片（照片）绘制到 canvas 中。
ctx.drawImage(image, dx, dy);  // 按照原图等比例绘制
ctx.drawImage(image, dx, dy, dWidth, dHeight);
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

* image：图片源(图像、画布或视频)

* sx：可选，截取源图的 x 坐标点
* sy：可选，截取源图的 y 坐标点
* sWidth：可选，截取源图的宽度，实现对源图的截取
* sHeight：可选，截取源图的高度

* dx：绘制到画布中的 x 坐标点
* dy：绘制到画布中的 y 坐标点
* dWidth：可选，绘制到画布中图片宽度，可以实现图片的缩放
* dHeight：可选，绘制到画布中图片高度，可以实现图片的缩放
```

> 注意：通过 canvas 绘制图像时，该图像必须在网页中加载出来，否则无法绘制。
>

## 2、获取像素点信息

```javascript
ctx.getImageData(sx, sy, sw, sh);

* 四个参数依次为获取像素点的 x、y 轴坐标及其宽高。
```

- 该方法返回 ImageData 对象，是一个数组，该数组中依次保存了像素点信息（RGBA）。

- 该方法必须通过服务器访问网页才可以调用的。

## 3、绘制位图

```javascript
// 将 getImageData 对象数据绘制到 canvas 中。
ctx.putImageData(image, dx, dy);
ctx.putImageData(image, dx, dy, dWidth, dHeight);
ctx.putImageData(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```
