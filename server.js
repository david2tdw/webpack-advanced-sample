let express = require('express')
let app = express()

app.get('/user', (req, res) => {
  res.json({name: '刘小夕23'})
})

app.listen(4000)

// 访问方法：
// http://localhost:4000/user

// 通过proxy 使我们访问 http://localhost:8888/api/user 重定向到 http://localhost:4000/user
// 每次更改内容需要重启（run code）