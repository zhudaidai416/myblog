# 封装 axios

```js
import axios from 'axios'
import store from '@/store/index'
// import QS from 'qs'
import router from '../router'
import { Loading, Message } from 'element-ui';

// 我们的项目环境可能有开发环境、测试环境和生产环境。我们通过node的环境变量来匹配我们的默认的接口url前缀
// 环境的切换
let baseURL
if (process.env.NODE_ENV == 'development') {
  baseURL = '/api'; // 对应换成后端给的接口地址 http://192.168.10.111:3000/
}
else if (process.env.NODE_ENV == 'test') { // 测试
  baseURL = '/test';
}
else if (process.env.NODE_ENV == 'production') {
  baseURL = 'https://www.faychou.com';
}

// 实例化 axios
const instance = axios.create({
  baseURL, // 设置 axios 的默认请求地址
  timeout: 5000, // 请求超时
  headers: { // 可定义统一的请求头部
    post: {
      // 'Content-Type': 'application/json'
      // 如果后端不支持 JSON 数据，则需要设置 application/x-www-form-urlencoded;charset=UTF-8
    }
  }
})

let loadingInstance;

// 请求拦截器(在发送请求之前做些什么：统一处理 token，显示loading 等等)
instance.interceptors.request.use(config => {
  const token = store.state.token

  // 可添加开启loading效果的函数
  loadingInstance = Loading.service()

  // token 存在就添加到请求头里
  // 这个写法是 nodejs 的格式，必须在 Authorization 中加上 token，并且 token 前必须加上 'Bearer ' 字符串
  // java 不需要 'Bearer ' 前缀，也可能将 token 放在 Authorization 字段也可能放在 Auth 字段
  token && (config.headers.Authorization = 'Bearer ' + token)
  // token && (config.headers.Auth = token)

  // 过滤请求参数中的 null undefined ''的函数
  // cleanObject()

  // 如果是以 application/x-www-form-urlencoded;charset=UTF-8 格式提交数据
  // 则需要将 POST 的数据序列化 QS.stringify(params)
  return config
},
  error => {
    return Promise.error(error);
  })

// 响应拦截器(对响应数据做点什么)
instance.interceptors.response.use(response => {
  // 可添加关闭 loading 效果的函数
  loadingInstance.close()

  // 如果返回的状态码为 200，说明接口请求成功，可以正常拿到数据     
  // 否则的话抛出错误
  if (response.status == 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response);
  }
},
  error => {
    loadingInstance.close() // 可添加关闭loading效果的函数

    // 跟后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等

    if (error.response.status === 401) { // 未登录则跳转登录页面，并携带当前页面的路径
      Message.error('请登录！')
      router.replace({ // 回退登录页                 
        path: '/login',
        query: { // 参数
          redirect: router.currentRoute.fullPath // 记录你想访问的路径，那么登陆后可以实现直接跳转到该路径而不是首页
        }
      });
    } else if (error.response.status === 403) { // token 过期
      // Message.error('token失效，请重新登录！')
      // removeStorageToken() // 清除本地过期 token
      router.replace({ // 回退登录页                 
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      });
    } else if (error.response.status === 404) { // 404

    } else if (error.response.status === 408) { // 超时

    } else if (error.response.status === 500) { // 500 错误

    } else {
      if (!window.navigator.onLine) {
        // Message.warning('网络异常，请检查网络是否正常连接')
      } else {
        // Message.warning('服务器异常，请联系管理员')
      }
    }
    return Promise.reject(error) // 将错误继续返回给到具体页面
  })

export default instance
```

