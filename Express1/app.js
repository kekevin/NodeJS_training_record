var express = require('express')
var app = express()
app.use(express.static('./public'))
function middleware1(req, res, next) {
  console.log(req.query)
  if (req.query.chain) {
    req.message = 'gello from middleware1'
    next()
  } else {
    res.send('hort form middleware1')
  }
}

function middleware2(req, res, next) {
  req.message = 'gello from middleware2'
  next()
}

app.get('/', middleware1, middleware2, (req, res, next) => {
  res.send(req.message + 'middleware 3')
})
app.post('/hello', (req, res) => {
  res.send('hello hello【post】')
})
app.listen(3000)
