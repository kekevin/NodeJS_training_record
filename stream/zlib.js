var fs = require('fs')
var zlib = require('zlib')
fs.createReadStream('input.txt').pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))
//创建读取流，读取input，管道通向zlib创建压缩文件，管道在通向创建一个文件压缩文件input.txt.gz
console.log('zlib file finish')