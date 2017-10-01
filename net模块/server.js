var net = require('net')
var server = net.createServer((connection) => {
  console.log('client connected')
  connection.on('end', () => {
    console.log('客户端关闭连接');
  })
  connection.write('hello!!!!')
  connection.pipe(connection)
})
server.listen(8080, function () {
  console.log('server is listening');
});
/*
* server is listening
* client connected
* 客户端关闭连接
* */