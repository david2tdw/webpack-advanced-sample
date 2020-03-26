import './index.less' // 引入css
// import './css/main/index.css'
import A from './a'

A()

console.log($, _map)

console.log('DEV:' + DEV)
// 在启动server.js后，url没有匹配上依然会走proxy
fetch('/api/user')
  .then(res => res.json()) //res.json()
  .then(data => console.log(data))
  .catch(err => console.log(err))

// webpack.dev.config.js的 devServer.before 拦截所有的请求。
fetch('/login/account', {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'admin',
    password: '888'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))

$('#login').click(function() {
  location.href = '/login.html'
})
