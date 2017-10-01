var express = require('express')
var app = express()
app.get('/', (req, res) => {
  res.send('你好，世界')
})
app.listen(3000, () => {
  console.log('app is listen')
})