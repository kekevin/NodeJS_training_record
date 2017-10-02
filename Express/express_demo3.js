var express = require('express')
var app = express()
/*在浏览器中访问 http://127.0.0.1:8081/images/logo.png（本实例采用了W3Cschool教程的logo）
*/
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('hello world')
})
var server = app.listen(8081, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
