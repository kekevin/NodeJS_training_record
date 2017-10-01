/*var http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.write('hello world')
  res.end()
}).listen(8888)*/
var http=require('http')
function onRequest(req,res) {
  res.writeHead(200,{'Content-Type':'text:plain'})
  res.write('hello world')
  res.end()
}
http.createServer(onRequest).listen(8888)