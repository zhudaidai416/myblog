# 一、HTTP

## 1、GET 和 POST 的请求的区别

| 区别 | GET | POST |
| --- | --- | --- |
| 幂等性   | 是 | 否 |
| 应用场景 | 用于对服务器资源不会产生影响的场景（比如请求一个网页的资源等） | 用于对服务器资源会产生影响的情景（比如注册用户等） |
| 是否缓存 | 是 | 否 |
| 传参方式 | 查询字符串传参 | 请求体传参 |
| 安全性 | 将参数放入 url 中向服务器发送，不安全 | 在请求体中，安全 |
| 请求长度 | 浏览器对于 url 长度有限制，会受到影响 | 在请求体中，不会收到浏览器影响 |
| 参数类型 | ASCII 字符 | 文件、图片等 |

> 幂等性：指一个请求方法执行一次和多次的效果完全相同

## 2、POST 和 PUT 的请求的区别

| 区别 | POST | PUT |
| :--: | :--: | :--: |
| 作用 | 创建数据 | 更新数据 |

> 为什么 POST 请求会发送两次？

- 第一次请求为 options 预检请求，状态码为 204

作用 1：询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求
作用 2： 检测服务器是否为同源请求，是否支持跨域

- 第二次请求为真正的 POST 请求

## 3、常见的 HTTP 请求头和响应头

| HTTP Request Header | 定义                            |
| ------------------- | -----------------------------   |
| Accept              | 浏览器能够处理的内容类型          |
| Accept-Charset      | 浏览器能够显示的字符集            |
| Accept-Encoding     | 浏览器能够处理的压缩编码          |
| Accept-Language     | 浏览器当前设置的语言              |
| Connection          | 浏览器与服务器之间连接的类型       |
| Cookie              | 浏览器当前页面设置的任何 Cookie   |
| Host                | 当前发出请求的页面所在的域        |
| Referer             | 当前发出请求的页面的 URL         |
| User-Agent          | 浏览器的用户代理字符串           |

| HTTP Responses Header | 定义                                             |
| --------------------- | ------------------------------------------------ |
| Date                  | 表示消息发送的时间，时间的描述格式由 rfc822 定义 |
| server                | 服务器名称                                       |
| Connection            | 浏览器与服务器之间连接的类型                     |
| Cache-Control         | 控制 HTTP 缓存                                   |
| content-type          | 表示后面的文档属于什么 MIME 类型                 |

| Content-Type                      | 定义                                   |
| --------------------------------- | -------------------------------------- |
| application/x-www-form-urlencoded | 浏览器原生 form 表单                   |
| multipart/form-data               | 表单上传文件                           |
| application/json                  | 服务器消息主体是序列化后的 JSON 字符串 |
| text/xml                          | 提交 XML 格式的数据                    |

## 4、状态码 304

> 为什么会有 304？

服务器为了提高网站访问速度，对之前访问的部分页面指定缓存机制。当客户端再次请求页面时，服务器会判断请求的页面是否已被缓存，若已经被缓存则返回 304，此时客户端将调用缓存内容。

**状态码 304 不应该被认为是一种错误，而是对客户端有缓存情况下服务端的一种响应。**

> 产生较多 304 状态码的原因是什么？

- 页面更新周期长或者长时间未更新
- 纯静态页面或强制生成静态 HTML

> 304 状态码过多会造成什么问题？

- 网站快照停止
- 收录减少
- 权重下降

## 5、常见的 HTTP 请求方法

| 方法   | 作用                   |
| ------ | ---------------------- |
| GET    | 向服务器获取数据       |
| POST   | 向服务器发送数据       |
| PUT    | 修改数据               |
| PATCH  | 用于对资源进行部分修改 |
| DELETE | 删除指定数据           |

## 6、Cookie

> Cookie 是最早被提出来的本地存储方式，在此之前，服务端是无法判断网络中的两个请求是否是同一用户发起的，为解决这个问题，Cookie 就出现了。Cookie 的大小只有 4kb，它是一种纯文本文件，每次发起 HTTP 请求都会携带 Cookie

### 特性

- Cookie 一旦创建成功，就无法修改
- Cookie 是无法跨域的
- 每个域名下 Cookie 的数量不能超过 20 个，每个 Cookie 的大小不能超过 4kb
- 存在安全问题，一旦被拦截，即可获得 session 的所有信息
- Cookie 在请求一个新的页面的时候都会被发送出去

### 如何解决无法跨域问题？

- 使用 Nginx 反向代理
- 在一个站点登陆之后，往其他网站写 Cookie。服务端的 Session 存储到一个节点，Cookie 存储 sessionId

### 应用场景

- 和 session 结合使用，将 sessionId 存储到 Cookie 中，每次发送请求都会携带这个 sessionId，以便于服务端识别和响应
- 可以用来统计页面的点击次数

## 7、LocalStorage

> LocalStorage 是 HTML5 新引入的特性，由于有的时候我们存储的信息较大，Cookie 就不能满足我们的需求，这时候 LocalStorage 就派上用场了

### 优点

- LocalStorage 能存储 5MB 的信息
- LocalStorage 能够持久化存储数据，数据不会随着页面的关闭而消失，除非手动清除
- 仅存储在本地，发起 HTTP 请求的时候不会被携带

### 缺点

- 存在兼容性问题，IE8 以下版本浏览器不支持
- 如果浏览器设置为隐私模式，我们将无法获取到 LocalStorage
- 受到同源策略的限制，即端口、协议、主机地址有任何一个不相同，都不会访问

### 常用 API

| API                              | 注释                                |
| -------------------------------- | ----------------------------------- |
| localStorage.setItem(key, value) | 保存数据到 localStorage             |
| localStorage.getItem(key)        | 从 localStorage 获取数据            |
| localStorage.removeItem(key)     | 从 localStorage 删除 key 对应的数据 |
| localStorage.clear()             | 从 localStorage 删除所有保存的数据  |
| localStorage.key(index)          | 获取某个索引的 Key                  |

### 应用场景

- 一些网站配置个人设置的时候，比如肤色、字体等会将数据保存在 LocalStorage 中
- 保存一些不经常变动的个人信息或用户浏览信息

## 8、SessionStorage

> SessionStorage 和 LocalStorage 都是在 HTML5 才提出来的存储方案，SessionStorage 主要用于临时保存同一窗口(或标签页)的数据，刷新页面时不会删除，关闭窗口或标签页之后将会删除这些数据

### SessionStorage 与 LocalStorage 对比

- SessionStorage 和 LocalStorage 都在**本地进行数据存储**
- SessionStorage 也有同源策略的限制，但是 SessionStorage 有一条更加严格的限制，SessionStorage**只有在同一浏览器的同一窗口下才能够共享**
- LocalStorage 和 SessionStorage**都不能被爬虫爬取**

### 常用 API

| API                                | 注释                                  |
| ---------------------------------- | ------------------------------------- |
| sessionStorage.setItem(key, value) | 保存数据到 sessionStorage             |
| sessionStorage.getItem(key)        | 从 sessionStorage 获取数据            |
| sessionStorage.removeItem(key)     | 从 sessionStorage 删除 key 对应的数据 |
| sessionStorage.clear()             | 从 sessionStorage 删除所有保存的数据  |
| sessionStorage.key(index)          | 获取某个索引的 Key                    |

### 应用场景

- 由于 SessionStorage 具有时效性，所以可以用来存储一些网站的游客登录的信息，还有临时的浏览记录的信息。当关闭网站之后，这些信息也就随之消除了

## 9、Cookie、LocalStorage、SessionStorage 区别

| Cookie | LocalStorage | SessionStorage |
| --- | --- | --- |
| 实最开始是服务器端用于记录用户状态的一种方式，由服务器设置，在客户端存储，然后每次发起同源请求时，发送给服务器端。cookie 最多能存储 4 k 数据，它的生存时间由 expires 属性指定，并且 cookie 只能被同源的页面访问共享 | html5 提供的一种浏览器本地存储的方法，它一般也能够存储 5M 或者更大的数据。它和 sessionStorage 不同的是，除非手动删除它，否则它不会失效，并且 localStorage 也只能被同源页面所访问共享 | html5 提供的一种浏览器本地存储的方法，它借鉴了服务器端 session 的概念，代表的是一次会话中所保存的数据。它一般能够存储 5M 或者更大的数据，它在当前窗口关闭后就失效了，并且 sessionStorage 只能被同一个窗口的同源页面所访问共享 |
