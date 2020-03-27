webpack进阶篇

## 参考
[带你深度解锁Webpack系列(进阶篇)](https://juejin.im/post/5e6518946fb9a07c820fbaaf)

[vue-cli项目中使用mockjs模拟数据](https://www.jianshu.com/p/aea89b5e6d33)

## server.js
在index.js中，在调用 '/api/user'接口时，需要先启动server.js服务，通过proxy将前台的接口转发到4000端口(webpack.dev.config.js)

## Mock.js

使用这种方法，当数据改变时，不需要重启任何服务器。

mock.js中定义模拟数据，和拦截url。
在index.js中引入mock.js, 通过axios定义默认host地址请求，不需要走代理。

