var net = require('net')
var client=net.connect({port:8080},()=>{
  console.log('链接服务器')
})
client.on('data',(data)=>{
  console.log(data.toString())
  client.end()
})
client.on('end',()=>{
  console.log('断开与服务器的连接');
})
/*链接服务器
hello!!!!
断开与服务器的连接
* */