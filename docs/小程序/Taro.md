# [Taro](https://taro-docs.jd.com/docs)

## 1、官方支持的平台

H5、ReactNative、微信小程序、京东小程序、百度小程序、支付宝小程序、字节跳动小程序、QQ 小程序、钉钉小程序、企业微信小程序、支付宝 IOT 小程序、飞书小程序

## 2、语法

- 语法与 `react/vue` 语法保持一致
- 组件库使用小程序组件，目前也已经支持 html
- 小程序接口调用使用 `Taro.`
- 没有路由，路由是配置在 page 字段中的
- 请求使用小程序请求 `Taro.request()` ，而不是 axios

## 3、环境搭建

```bash
>> 方式1：全局安装脚手架
  npm install -g @tarojs/cli

  # 创建项目
  taro init myApp（项目名）

  # 微信小程序预览
  npm run dev:weapp

  # 使用 VSCode 开发，使用微信小程序开发工具进行预览（关闭ES6转ES5，代码压缩，格式化检查）

>> 方式2：使用 npx（不全局安装）
  npx @tarojs/cli init myApp（项目名）

>> 版本升级
  # 使用Taro 升级命令更新CLI版本到最新版本
  taro update self
  # 使用Taro 升级命令更新CLI版本到指定版本
  taro update self [版本号]
  # 使用Taro 升级命令将项目依赖升级到与@tarojs/cli一致的版本
  taro update project 
  # 使用Taro 升级命令将项目依赖升级到指定版本
  taro update project [版本号]
```

:notebook_with_decorative_cover: **新建项目选择**

```bash
? 请输入项目介绍 我的app项目
? 请选择框架 React
? 是否需要使用 TypeScript ？ No
? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass
? 请选择编译工具 Webpack5
? 请选择包管理工具 npm
? 请选择模板源 Gitee（最快）
√ 拉取远程模板仓库成功！
? 请选择模板 redux
```

## 4、项目目录结构

```
├── dist                        编译结果目录
|
├── config                      项目编译配置目录
|   ├── index.js                默认配置
|   ├── dev.js                  开发环境配置
|   └── prod.js                 生产环境配置
|
├── src                         源码目录
|   ├── pages                   页面文件目录
|   |   └── index               index 页面目录
|   |       ├── index.js        index 页面逻辑
|   |       ├── index.css       index 页面样式
|   |       └── index.config.js index 页面配置
|   |
|   ├── app.js                  项目入口文件
|   ├── app.css                 项目总通用样式
|   └── app.config.js           项目入口配置（小程序配置文件，js文件可以执行逻辑）
|
├── project.config.json         微信小程序项目配置 project.config.json
├── project.tt.json             字节跳动小程序项目配置 project.tt.json
├── project.swan.json           百度小程序项目配置 project.swan.json
├── project.qq.json             QQ 小程序项目配置 project.qq.json
|
├── babel.config.js             Babel 配置
├── tsconfig.json               TypeScript 配置
├── .eslintrc                   ESLint 配置
|
└── package.json
```

:notebook_with_decorative_cover: **新建 page**

```bash
方式1：手动

方式2：
taro create --name 文件名
```

## 5、[组件库](https://taro-docs.jd.com/docs/components-desc)

react 的 class 组件和 Vue 可直接使用

react 的函数组件需要引入

## 6、UI 库

[NutUI](https://nutui.jd.com/#/)：京东风格的轻量级移动端 Vue 组件库

[Taro UI](https://taro-ui.jd.com/#/)：一套基于 Taro 框架开发的多端 UI 组件库

# 常见接口调用

## 1、小程序登录

### 1）、常见登录

- 自建登录体系（用户名、密码）（手机号，验证码）
- 第三方登录（QQ，微信扫码，微博扫码...）
- 微信静默登录

### 2）、小程序登录流程（以 Taro 为例）

```jsx
// 第一步、小程序端调用 wx.login() 获取 code
Taro.login({
success(res) {
  console.log('获取登录凭证：', res);

  // 向后端服务器请求
  Taro.request({
    url: '', //仅为示例，并非真实的接口地址
    data: {
      code: res.code
    },
    // header: {
    //   'content-type': 'application/json' // 默认值
    // },
    success: function (res) {
      console.log(res.data)
    }
  })
}
})

// 第二步、服务器端请求微信服务器
axios({
  url: 'https://api.weixin.qq.com/sns/jscode2session',
  method: 'GET',
  params: {
    appid: 'wxd5b8e55fa99824ac',
    secret: 'e13c9ab601f444a2ce594dae2ad7d77f',
    js_code: code,
    grant_type: 'authorization_code'
  }
})
  .then(resp => {

    if (resp.status == 200) {
      console.log('微信服务器返回.success', resp.data);

      res.json({
        code: 200,
        msg: 'ok',
        data: {
          openid: resp.data.openid
        }
      })
    }
  })
  .catch(err => {
    console.log('微信服务器返回.fail', err)
  })
```

# 内网穿透

# 地图

```js
// app.config.js文件引入

requiredPrivateInfos: ["chooseLocation", "choosePoi"]
```

[打开地图选择位置](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html)

```js
wx.chooseLocation({
  success(res) {
    console.log('返回位置：', res)
    setAddress({
      address: res.address,
      latitude: res.latitude,
      longitude: res.longitude,
      name: res.name
    })
  },
  fail(err) {
    console.log('返回位置失败：', err)
  }
})
```

显示位置

```js
wx.choosePoi({
  success(res) {
    console.log('返回位置：', res)
  },
  fail(err) {
    console.log('返回位置失败：', err)
  }
})
```

# [图片上传](https://taro-docs.jd.com/docs/apis/network/upload/uploadFile)

```jsx
Taro.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success(imageRes) {
    console.log('选择的图片：', imageRes);
    const tem = imageRes.tempFilePaths[0];

    uploadHttp({
      url: '/wechat/activity/uploadpreview',
      filePath: tem,
      name: 'img',
      formData: {
        msg: '活动封面图'
      },
      success(uploadRes) {
        console.log('图片上传成功：', uploadRes.data);
        const res = JSON.parse(uploadRes.data)
        setImg(res.data);
      },
      fail(uploadErr) {
        console.log('图片上传失败：', uploadErr)
      }
    })
  },
  fail(err) {
    console.log('选择图片失败', err);
  }
})
```

# 消息通知

- 后端会有一张消息表 → 当某个事件发生的时候（点赞、回复。。。），去向消息表添加一条未读消息数据。

- 前端（如何拿到未读消息数据）→ 及时性

- AJAX - 前端主动向后端请求


:mag_right: 解决方案

- 轮询：前端每隔一段时间向后端请求，获取新数据 → 缺点：开销很大
- websocket → 双工通信，前后端双向通信，即时聊天工具、区块链、股票信息等等

# [订阅消息（模板消息）](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html)

## 1、消息类型

- 一次性订阅消息
- 长期订阅消息
- 设备订阅消息

## 2、实现步骤

### 1）、步骤一：获取模板 ID

![获取模板ID](https://res.wx.qq.com/wxdoc/dist/assets/img/subscribe-message.b562750a.jpg)

### 2）、步骤二：获取下发权限（小程序端）

```js
wx.requestSubscribeMessage(Object object)
```

### 3）、步骤三：调用接口下发订阅消息（服务器端）

前提- 需要获取 access_token

```js
subscribeMessage.send
```

# 小程序优化

## 1、分包加载

```js
// app.config.js文件

pages: [  // pages 作为主包，打开小程序就会默认加载，一般tabbar作为主包，其他视情况
  "pages/index/index",
  // "pages/publicActivity/index",
  // "pages/activityDetail/index",
  "pages/message/index",
  "pages/me/index",
],
subpackages: [  // 分包，只有访问这些页面时才会加载资源
  {
    "root": "pages/packageA",  // 这个分包的根路径
    "name": 'packageA',  // 分包名字
    "pages": [  // 这个分包中的页面路径，其中页面路径为分包根路径的相对路径
      "publicActivity/index",
    ]
  },
  {
    "root": "pages/packageB",
    "name": 'packageB',
    "pages": [
      "activityDetail/index",
    ]
  },
],
```

## 2、分包预加载

```js
// app.config.js文件

preloadRule: {  // 分包预下载
  "pages/index/index": {  // 访问主页，下载 packageB 包
    "network": "all",  // 在指定网络下预下载，可选值为 → all：不限网络；wifi：仅 wifi 下预下载
    "packages": ["packageB"]  // 进入页面后预下载分包的 root 或 name，APP 表示主包
  },
},
```

