# 浏览器&服务器

## 1、前端（浏览器）

在本机开发网站，只能在本机预览，其他人看不到的。

## 2、后端（服务器）

浏览器如何访问服务器资源

- 访问页面 -> 返回页面 --> 设置静态资源

- 访问数据 -> 返回数据 --> 设置路由

> 提示：
> 	GET 请求方式：
> 		1、直接在浏览器地址栏输入地址访问
> 		2、通过 Ajax 的 GET 进行请求

# 请求响应流程

1、前端发送请求

2、服务器拦截请求，通过路由分发任务

3、分发给控制器，控制解析这个请求，拿到前端发送的参数

4、把操作数据库的东西发给数据持久的方法

5、拿到数据库操作后的结果（数据操作成功、数据操作失败、拿到数据）

6、根据业务逻辑将数据库的结果返回前端

7、拿到后响应给前端的数据，根据业务逻辑，渲染页面

# 前期准备工作

1、相关命令

```bash
mkdir 文件夹名字 // 创建文件夹
cd 文件夹名字 // 进入某个文件夹
npm init // package.json 初始化
npm install 模块名 // 默认将模块写入生产环境依赖
npm install 模块名 --save // 将模块写入生产环境依赖
npm install 模块名 --save-dev // 将模块写入开发环境依赖

npm install nrm -g
npm install express@4 -s	// express
npm install morgan -s	// 下载日志依赖
npm install serve-favicon -s	// 小图标模块
npm install mysql -s	// 数据库模板

// 只要修改的是服务器文件里面的代码，保存后需要重新启动服务器
// 使用热启动服务器，实时更新，无需重新启动服务器
npm install nodemon -g	// 热启动服务器
// 热启动服务器指令
nodemon app.js
```

2、查看是否安装node环境和npm包管理工具

```bash
# 打开cmd，输入
node -v
npm -v
```

3、新建好服务器的文件

```javascript
项目根目录
├─ 服务器主文件	  // app.js
├─ 路由			 // router
├─ 控制器		    // controller
├─ 数据持久化	   // dao
├─ 服务器配置	   // config
└─ 静态资源文件夹	 // src
   ├─ javascript
   ├─ css
   ├─ images
   ├─ lib
   ├─ pages
   ├─ font
   └─ index.html	// 首页
```

4、打开vscode-终端-打开终端

1）、安装nrm包，用来修改npm源

```javascript
npm install
```

```javascript
npm install nrm -g
```

> -g：全局安装

2）、测试所有的镜像源的网络延迟

```javascript
nrm text

/*	运行结果
  npm ------ 923ms
  yarn ----- 940ms
  tencent -- 137ms
  cnpm ----- 1115ms
* taobao --- 121ms
  npmMirror - 983ms
  */
```

3）、将镜像源修改为淘宝

```javascript
nrm use taobao
```

# 初始化项目

```javascript
// 命令初始化
npm init

/*	目录结构
  ├─ config
  ├─ controller
  ├─ dao
  ├─ router
  ├─ src
  ├─ app.js
  └─ package.json	// 多出的文件，这个文件就是该项目的描述文件
*/
```

# 下载express框架

通过express框架搭建服务器，至此，项目基础搭建完毕

```javascript
npm install express@4 -s

/*	目录结构
  ├─ config
  ├─ controller
  ├─ dao
  ├─ router
  ├─ src
  ├─ app.js
  ├─ node_modules
  └─ package.json
*/
```

> 注：@后面是版本号
>
> -s：局部安装

# 编写服务器主文件代码

```javascript
// 引入express @require：node环境中封装的外部引入文件的方法
const express = require('express')
// 引入日志模块
const logger = require('morgan')

// 运行express，得到服务器对象 @express方法返回了一个对象
const app = express()	// app对象即为服务器对象

// 通过app服务器对象去配置服务器 @启动服务器各种功能
// ======================================
// 1、日志功能 下载日志依赖：npm install morgan -s @下载后在上文引入
app.use(logger('dev'))	// 使用日志
// 2、配置服务器静态资源 @__dirname在node环境自带的项目目录的绝对路径（当前文件的根目录）
app.use(express.static(__dirname + '/src'))
// 3、通过服务器监听端口号 @提示开发者服务器正在运行
app.listen(8888,function(){
    console.log('服务器已启动……')
})
```

# 运行服务器

```javascript
// 启动服务器，终端上运行 @ctrl+c：终止服务器，pgUp：恢复上条命令，ctrl+l：清空命令
node app.js

// 测试服务器工作状态，通过浏览器打开页面，地址栏输入
ip地址:端口号/默认打开src中的index.html文件

/* 两种写法
    172.16.114.131:8888/index.html
    localhost:8888/index.html
*/
// 至此，服务器搭建完毕>>>
```

通过get方法请求，200：状态码

# 添加小图标

```javascript
// 下载小图标模块：npm install serce-favicon -s

// 在app.js的开头一定要引用serve-favicon
const favicon = require('serve-favicon')

// 配置使用该模块，一般会配置在静态资源的后面
// app.use(express.static(__dirname + '/src'))
app.use(favicon(__dirname+'/src/images/ba3.jpg'))
```

# 路由配置

## root/router/index_router.js

```javascript
const express = require('express')
// 引入路由
const rooter = express.Router()
// 引入控制器 @控制器用于分发请求
const stuCtrl = require('../controller/stuCtrl')

// 请求分发
// router.get('/接口名称',控制器名称.接口方法)
router.get('/addStu',stuCtrl.addStu)

// module.exports：公开这个文件里面的某个对象
// 在index路由文件下公开了一个路由对象
module.exports = router

/*
将路由对象从index_router.js中暴露出来
这样我们就可以在app.js入口文件中引入router文件
服务器便能够通过index_router.js中的方法对请求进行拦截
*/
```

## root/app.js

```javascript
// 引入路由文件 @自定义的index_router.js
const myRooter = require('./router/index_router')

// 挂载路由，路由对象的使用应该在静态资源之前
app.use(myRooter)
// app.use(express.static(__dirname + '/src'))
```

# 控制器

## root/controller/stuCtrl.js

```javascript
// 引入数据库配置文件
const db = require('../config/dbConfig')

// 控制器：stuCtrl
const stuCtrl = {
    ···
    // req：请求发送过来的数据
    // resp：需要返回给前端的数据
    addStu(req,resp){
        // sql：sql语句
        // arr：sql操作的数据
        // function(){}：回调函数
        db.dbConnect(sql,arr,function(){
            ···
        })
    }
    ···
}
```

## root/config/dbConfig.js（封装调用数据库方法）

```javascript
// 安装mysql数据库模块：npm install mysql -s 
// 引入数据库模块
const mysql = require('mysql')

// 暴露服务器操作的方法
module.exports = {
    // 数据库操作方法
    dbConnect(sql, arr, callback) {
        // 数据库信息
        var db = mysql.createConnection({
            host: 'localhost', // 数据库所在设备ip地址
            port: 3306, // 数据库连接端口号
            user: 'root', // 数据库账号
            password: 'root', // 数据库密码
            database: 'w304_demo' // 数据库名称
        })
        db.connect() // 连接数据库
        // sqlConnect.query(sql语句,该sql语句的需要的参数数据类型时候数组,回调函数-操作数据库完毕后执行的函数)
        db.query(sql, arr, callback) // 数据库操作
        db.end() // 关闭数据库
    }
}
```

# 父子路由

接口过多时，可以将路由进行细化

由一个主路由将请求分发给子路由，子路由再将请求发给对应的控制器

当然同上文的路由配置一样，需要在app.js中引入路由文件

但是只需要引入一个主路由即可

## 主路由 parent_router.js

```javascript
const express = require('express')
const rooter = express.Router()

// 路由分发
router.use('/user',require('./child_router'))
···

module.exports = router
```

## 子路由 child_router.js

```javascript
const express = require('express')
const rooter = express.Router()
const stuCtrl = require('../controller/stuCtrl')

// 请求分发
router.get('/addStu',stuCtrl.addStu)

module.exports = router
```

# 提交给后端的方法

## 1、同步请求

get与post都为同步请求

get请求的数据能够直接从url上捕获，不安全

get请求时接口中获取的数据为`req.query`

post请求时接口中获取的数据为`req.body`

```javascript
// 当req.body内为undefined时，按如下方法配置解析post请求的方法

// app.js文件：
const body = require('body-parser')

// post请求解析配置需放在挂载路由前
app.use(body.json())
app.use(body.urlencoded({extended:false}))

// app.use('/',router)    <<<挂载路由
```

**get与post的区别**

|          | get          | post                       |
| -------- | ------------ | -------------------------- |
| 何时使用 | 查询请求     | 几乎所有表单请求（增删改） |
| 请求参数 | 写在open()内 | 写在send()内               |

## 2、异步请求

### ajax

#### 1）、理解

  * 前端主动调用的一个综合技术
  * 用于从后端获取数据 - 前提必须后端给一个入口
  * 无刷新

#### 2）、ajax 应用

 * 验证用户名是否存在
  * 登录
  * 列表数据
  * 上传

#### 3）、请求方式

\>>  GET

* 请求参数是放在 url 中，以 ? 开头，key=value
* 参数可以直接在url中看到，安全性相对较低
* 因为 url 长度有限制，所以 get 请求参数大小也有限制，即不能发送太大的数据
* 如果参数有中文，直接发送会导致乱码，所以必须在发送前对中文进行转码

​	\>>应用场景

- 获取数据；（列表数据、详情数据、是否存在）

- 发送不重要的参数、并且参数数据量不大的时候，采用该方法

\>>  POST

- 参数是放在请求体中，不会在 url 中看到，安全性相对较高

- 原则上来讲请求体中的参数大小没有限制

- 可以直接发送中文

​	\>> 应用场景

 * 表单（提交数据、可能数据量就会比较大）
  * 有隐私数据（注册、登录）

#### 4）、[HTTP状态码](C:\Users\daidai\Desktop\Note\文档\HTTP状态码.pdf)

1xx

2xx -> 200

3xx -> 301 303 304

4xx -> 401 403 404 408

5xx -> 500

#### 5）、Content-Type

数据类型，前后端传输数据的时候必须设置该字段，才能正常接受数据的。

|                                                 |                    |
| ----------------------------------------------- | ------------------ |
| application/x-www-form-urlencoded;charset=utf-8 | 表单的形式提交数据 |
| application/json                                | JSON类型的数据     |
| multipart/form-data                             | 文件上传           |
| text/html                                       | 传输 html 文件     |
| image/jpeg jpg                                  | 图片               |

`ajax`是javascript原生的请求方法

`ajax`请求是异步请求

### 原生ajax

#### 1、get请求

```javascript
// login方法由登录按钮的点击事件触发

// get请求
function login(){
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value

    // 1、创建ajax对象 @实例化
    let ajaxObj = XMLHttpRequest
        // chrome浏览器ajax对象
        ? new XMLHttpRequest()
        // ie浏览器ajax对象
        : new ActiveXObject('Microsoft.XMLHTTP')

    // 2、打开ajax对象
    // ajaxObj,open(请求方式,接口地址,布尔值) @布尔值默认为true
    ajaxObj.open('get','/login?user='+user+'&&pwd='+pwd,true)

    // 3、设置请求成功后执行的回调函数
    ajaxObj.onreadystatechange = function(){
        // 回调函数得到的值总共会有四种情况
        // 这里只选取其中一种
        if(ajaxObj.readyState == 4 && ajaxObj.status == 200){
            console.log('服务器响应了')
            // ajaxObj.responseText内为服务器返回的内容
            console.log(ajaxObj.responseText)
        }
    }
    // 4、发送ajax对象
    ajaxObj.send()
}
```

#### 2、post请求

```javascript
// login方法由登录按钮的点击事件触发

// post请求
function login(){
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value
    // 回调函数
    ajaxObj.onreadystatechange = function(){
        if(ajaxObj.readyState == 4 && ajaxObj.status == 200){
            console.log('服务器响应了')
            console.log(ajaxObj.responseText)
        }
    }
    // 创建ajax对象
    let ajaxObj = XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject('Microsoft.XMLHTTP')
    // 打开ajax对象
    ajaxObj.open('post','/login')
    // 设置请求头
    ajaxObj.setRequestHeader(
        'Content-Type',
        'application/x-www-form-urlencoded'
    )
    // 设置url
    ajaxObj.send(user='+user+'&&pwd='+pwd)
}
```

**注意：**

<mark>1、onreadystatechange是一个事件</mark>

<mark>2、每当 readyState 改变时，就会触发 onreadystatechange 事件</mark>

<mark>3、readyState 属性存有 XMLHttpRequest 的状态信息</mark>

ajax（XMLHttpRequest）对象的三个属性：

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 |
| readyState         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。<br/>- 0: 请求未初始化<br>- 1: 服务器连接已建立<br>- 2: 请求已接收<br>- 3: 请求处理中<br>- 4: 请求已完成，且响应已就绪 |
| status             | 200: "OK"<br>404: 未找到页面                                 |

`onreadystatechange` 事件被触发 4 次（0 - 4）, 分别是： 0-1、1-2、2-3、3-4，对应着 readyState 的每个变化。所以回调函数中，当 <mark>readyState == 4 && status ==200</mark> 才是完全正确的返回状态

### 原生ajax的封装

```javascript
function myAjax(obj){
  return new Promise((resolve,reject) => {
    obj = obj || {}

    let method = obj.method || 'GET'
    let url = obj.url || null
    let data = obj.data || null
    let headers = obj.headers || {}
    let async = obj.async || true

    data = formatData(data)
    console.log(data)

    let ajaxObj 

    ajaxObj = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    if(method.toUpperCase() === 'GET'){
      ajaxObj.open(method, url + '?' + data , async)
      ajaxObj.send(null)
    }else if(method.toUpperCase() === 'POST'){
      ajaxObj.open(method,url,async)
      ajaxObj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
      ajaxObj.send(data)
    }

    ajaxObj.onreadystatechange = function(){
      if(ajaxObj.readyState !==4){
        return;
      }
      if(ajaxObj.status >=200 && ajaxObj.status <300 || ajaxObj.status==304){
        console.log('获取后端返回的数据',ajaxObj.responseText)
        resolve(JSON.parse(ajaxObj.responseText))
      }else{
        reject(ajaxObj.status)
      }
    }
  })
}

function formatData(data){
  if(data){
    let arr = [];
    for(var key in data){
      arr.push(key + '=' + data[key])
    }
    return arr.join('&')
  }
}
```



## 提交给后端的方法

引入文件后，可以得到公开的对象

表单元素的name是后端的键值对中的key



# fs（文件系统）

## 1、理解

属于 nodejs 内置模块，是不需要安装的，直接通过 `require` 引入之后使用。该模块用于文件及文件目录的创建、删除、查询等。

## 2、语法

### 1）、读取文件内容——异步读取

```javascript
fs.readFile(path[,options],callback)

*path：要读取文件的路径及其文件名
*options：可选参数，要读取文件的相关配置
*callback：回调函数，文件读取成功或者失败后要执行的方法
```

```javascript
const fs = require('fs')

// doc：文件读取成功，读取到的文件内容
fs.readFile('./demo.txt','utf-8',(err,doc) => {
  if(err){
    return console.log('失败的原因',err)
  }
  console.log('文件读取成功',doc)
})
```

![fs读取文件](/images/fs读取文件.png)

### 2)、写入文件内容——异步写入

```javascript
fs.writeFile(file，data[,options],callback)

*file：写入文件的路径
*data：写入的数据
*options：可选参数，要写入文件的相关配置，比如编码格式，这里默认是utf-8
*callback：回调函数，文件读取成功或者失败后要执行的方法
```

```javascript
const fs = require('fs')

fs.writeFile('./w.txt','朱呆呆',(err) => {
  if(err){
    return console.log('文件写入失败',err)
  }
  console.log('写入内容成功')
})
```

# 异步

## 1、理解

简单来说，异步就是执行到该代码时，不用等到它执行完毕，而是继续执行后面的代码。

## 2、异步场景

fs 模块部分的方法、ajax、计时器、数据库操作

## 3、异步编程

回调函数——容易产生回调地狱（回调嵌套，代码可读性非常差、后期维护非常困难，我们把这种情况称为回调地狱）

Promise——ES6

# Promise

## 1、概念

主要用于解决异步编程的问题，比回调更合理。从语法上说， Promise 是一个对象。

## 2、语法

```javascript
new Promise((resolve,reject) => {
  // 成功
  if(条件){
    resolve()
  }
  // 失败
  if(条件){
	reject()
  }
})
```

可以放同步代码也可以放异步代码

## 3、Promise 的状态

- 创建 Promise 时，默认 -pending 状态

- 当调用 resolve 函数的时候，状态改为 fufilled 状态（成功）

- 当调用 reject 函数的时候，状态改为 rejected 状态（失败）

> 规定：只能 pending --> fufilled，或者 pending --> rejected
>
> 理解：在 Promise内，只能调用 resolve() 或者 reject()
>
> 重要：promise内部是同步的，then 才是异步。

## 4、then函数 

该函数接受两个参数，第一个参数是 Promise 成功的回调，第二个参数是 Promise 失败的回调（一般用catch替换）

```javascript
// 写法1
new Promise((resolve, reject) => {
   // ...
})
    // 成功
  .then(
    (res) => {
      console.log('成功：', res);
    },
    (err) => {
      console.log('失败：', err);
    }
  )

// 写法2
new Promise((resolve, reject) => {
    // ...
})
  // 成功
  .then((res) => {
    console.log('成功：', res);
  })
  .catch((err) => {
    console.log('失败：', err);
  })
```

```javascript
// then支持链式写法，即.then()之后还可以继续.then()
// 因为then可以返回Promise或者返回一个同步，这个可以继续传递给下一个then
new Promise()
  .then()
  .then()
  ...
```

## 5、Promise.resolve()

- 这里的 resolve 的参数是一个原始值，那么直接表示 fufilled（成功状态）
- 不带参数，也是直接表示 fufilled
- 也可以传递 Promise 对象，那么直接返回该对象

```javascript
Promise.resolve(123)
// 等同于
new Promise((resolve, reject) => {
  resolve(123)
})
```

## 6、Promise.reject()

- 这里的 reject 的参数是一个原始值，那么直接表示 rejected（失败状态）
- 不带参数，也是直接表示 rejected
- 也可以传递 Promise 对象，那么直接返回该对象

```javascript
Promise.reject(123)
// 等同于
new Promise((resolve, reject) => {
  reject(123)
})
```

## 7、Promise.all()

- 用于并发情况，all 接受一个数组参数，数组中元素都是 Promise，这些 Promise 一起成功，或者一起失败。一定会等到最慢的那一个。


- 应用场景：并发请求，同时发起请求，一起返回数据。


## 8、Promise.race()

- 赛跑的意思，最先执行完毕的会输出。


- 应用场景： 图片加载、请求超时

###### 例子：

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1500)
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 2000)
});

-------------------Promise.all()实例-------------------
Promise.all([p1, p2, p3]) // 同时处理三个 Promise
  .then(res => console.log('一起成功：', res))
  .catch(err => console.log('一起失败：', err))

// 输出成功结果：一起成功： [ 1, 2, 3 ]
p3改成：setTimeout(() => reject(3), 2000)
// 输出失败结果：一起失败： 3

-------------------Promise.race()实例-------------------
Promise.race([p1, p2, p3]) // 
  .then(res => console.log('最快的成功：', res))
  .catch(err => console.log('最快的失败则失败：', err))

// 输出结果：最快的成功： 1
p1改成：setTimeout(() => reject(1), 1000)
// 输出结果：最快的失败则失败： 1
```

# async / await

## 1、理解

- 也是解决异步编程的，目前的终极解决方案。

- 该语法是基于 promise 的，在函数前加上 async 关键字，函数内部遇到 await 就会等到它返回结果，然后执行下一步。

## 2、语法

```javascript
async function() {
  await Promise
}
```

> 注： async 依然是属于异步的，内部代码才是同步的。

## 3、async 错误捕获

因为 await 接受 Promise 的返回值，这个返回值可能是成功的也可能是失败。所以需要通过 try catch 去捕获错误。

```javascript
async function() {
  try {
    await Promise
  } catch(err) {
    // 错误处理
  }
}
```

























