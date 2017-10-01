var http = require('http')
var url = require('url')

function start() {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname
    console.log('requset for' + pathname + 'recedived')
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('hello world')
    res.end()
  }

  http.createServer(onRequest).listen(8888)
  console.log('server has started')
}

exports.start = start