## 前端自动化工程

### 1、打包工具

- Grunt
- Gulp
- [webpack](https://www.webpackjs.com/)
- vite（vue3，react）

### 2、模块化处理

#### 1）、AMD

浏览器异步加载方案。

实现者：requireJS

#### 2）、CMD

浏览器异步加载方案。

实现者：seaJS

#### 3）、CommonJS

服务器端同步加载方案。

实现者：NodeJS

#### 4）、ES6

### 3、[webpack](https://www.webpackjs.com/)

当下最热门的资源模块管理和打包工具。

### 4、环境配置

```bash
# 全局安装的 webpack 工具
npm i webpack-cli -g
# 本地环境
npm i -D webpack webpack-cli
```

### 5、配置文件

项目根目录下创建 `webpack.config.js` 文件

## webpack 配置

### 1、[entry](https://www.webpackjs.com/configuration/entry-context/#entry)

起点或是应用程序的起点入口。

```js
entry: {
  home: "./home.js",
  about: "./about.js",
  contact: "./contact.js"
}
```

### 2、output

项目输出设置

```js
// 对于单个入口起点，filename 会是一个静态名称。
filename: "bundle.js"

// 使用入口名称
filename: "[name].bundle.js"

// 使用每次构建过程中，唯一的 hash 生成
filename: "[name].[hash].bundle.js"
```

### 3、mode

告知 webpack 使用相应模式的内置优化。

```bash
WARNING:The 'mode' option has not been set...

node src/index.js

mode: 'development',  // 模式
```

### 4、module

主要用于定义对模块的处理逻辑。

webpack 本身只能处理 js 模块，但是可以通过 loader 转换器将各种资源转化为 js 模块，这样所有的资源都可以被 webpack 处理。

#### 1）、css 处理

```js
// 安装
npm i -D css-loader style-loader
* css-loader：解析 css 文件路径
* style-loader：用于把 css 解析到 html 的 style 中

// 配置
module: {
  rules: [
    {
      test: /\.css$/,  // 匹配要处理的文件
      use: ['style-loader','css-loader'],  // 使用哪些 loader 来处理这些文件，loader 处理顺序从右往左执行的
      include: '',  // 只匹配这个目录
      exclude: '',  // 排除这些目录
    }
  ]
}
```

#### 2）、sass 处理

```js
// 安装
npm i -D sass-loader sass

// 配置
在 css 配置基础上再加。
module: {
  rules: [
    {
      test: /\.(scss|css)$/,
      use: ['style-loader','css-loader','sass-loader'],
    }
  ]
}
```

#### 3）、图片字体处理

```js
// 安装
npm i -D url-loader file-loader

// 配置
module: {
  rules: [
    {
      test: /\.(png|jpg|gif|webp|jpeg|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {  // loader 配置
          limit: 8192,  // 超过指定大小的图片需要 file-loader 做路径处理
          name: '[name].[hash:8].[ext]',
          esModule: false  // 可以允许在标签属性上使用 require 动态加载
        }
      },
      exclude: /node_modules/
    }
  ]
}
```

#### 4）、js / react 处理

```js
// 安装
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties  @babel/plugin-transform-runtime

// 配置
module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,  // 排除 node_modules 文件夹
      loader: 'babel-loader',  //注意 webpack2.x 是不支持 loader 简写
      options: {  // loader的可选项
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          ['@babel/plugin-transform-runtime', { "corejs": 3 }],
          ["@babel/plugin-proposal-class-properties", { "loose": true }]
        ]
      }
    }
  ]
}
```

### 5、plugins

插件。

#### 1）、html-webpack-plugin

```js
// 安装
npm i -D html-webpack-plugin

// 配置
{
  ...
  plugins: [
    new HtmlPlugin()
  ]
}
```

### 6、devServer

配置本地服务器。

```js
// 安装
npm i -D webpack-dev-server

// 配置
devServer: {
  contentBase: path.join(__dirname, "dist"),
  historyApiFallback: true,  // 任意的404 响应都会被替换为 index.html
  compress: true, // 开启 Gzip 压缩
  port: 8000,  // 端口号
  open: true,  // 是否自动打开浏览器
  hot: true,  // 热加载
  prot: {  // 反向代理，解决开发时的跨域

  }
}
```

### 7、resolve

```js
resolve: {
  extensions: ['.js', '.jsx', '.vue'], // 导入这些文件时可以省略后缀
  alias: { // 路径别名
    '@': path.resolve(__dirname, 'src')
  }
}
```