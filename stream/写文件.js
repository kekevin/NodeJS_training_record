var fs = require('fs')
var data = 'www.baidu.com'
var writerStream = fs.createWriteStream('out.txt')
writerStream.write(data, 'UTF8')
writerStream.end()

// 处理流事件 --> data, end, and error
writerStream.on('finish', () => {
  console.log('写入完成')
})
writerStream.on('error', (err) => {
  console.log(err.stack)
})
console.log('完毕')