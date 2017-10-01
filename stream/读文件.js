var fs = require('fs')
var data = ''
// 创建可读流
var readerStream = fs.createReadStream('input.txt')
// 设置编码为 utf8。
readerStream.setEncoding('UTF8')
//处理流事件
readerStream.on('data', (chunk) => {
  data += chunk
})
readerStream.on('end', () => {
  console.log(data)
})
readerStream.on('error', (err) => {
  console.log(err.stack)
})
console.log('end!!!')