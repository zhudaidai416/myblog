# mysql的封装

## 方法一

```js
// 连接数据库
// 1. 需要使用连接数据库的模块 npm install mysql -s
const mysql = require('mysql')

module.exports = {
  dbMysql(sql,arr,fun){
    
    // 2. 创建数据库连接 localhost和127.0.0.1都代表本机ip  
    let db = mysql.createConnection({
      host:'localhost',
      post:3306,
      user:'root',
      password:'root',
      database:'project'
    })
    
    // 3. 连接数据库
    db.connect()
    
    // 4. 操作数据库连接
    // db.query(sql语句,该sql语句的需要的参数数据类型时候数组,回调函数-操作数据库完毕后执行的函数)
    db.query(sql,arr,function(err,data){
    // 这里的err代表数据库报错信息  data代表数据库操作成功的信息
      if(!err){
        fun(data)
      }else{
        console.log(err)
      }
    })
    
    // 5. 关闭数据库连接  
    db.end()
  }
}
```

## 方法二

```js
const mysql = require('mysql');

// 数据库连接池配置
const mysqlConfig = {
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'w304'
}

function query(sql, options) {
  return new Promise((resolve, reject) => {
    // 创建连接池
    let pool = mysql.createPool(mysqlConfig);

    pool.getConnection((err, connection) => {
      if (err) { 	// 连接失败
        reject(err);
      } else {
        connection.query(sql, options, (error, result) => {
          if (error) { 	// 数据库操作失败
            reject(error)
          } else {
            resolve(result)
          }
        })
      }

      // 释放连接池
      connection.release();
    })
  })
}

module.exports = query
```
