/*
* 参数描述如下：
encoding - 使用的编码。默认为 'utf8' 。
start - 指定开始读取的索引位置，默认为 0。
end - 结束位置，默认为缓冲区的末尾*/
buf = new Buffer(26)
for (let i = 0; i < 26; i++) {
  buf[i] = i + 97
}
console.log(buf.toString('ascii'))
console.log(buf.toString('ascii', 0, 4))
console.log(buf.toString('utf8', 0, 4))
console.log(buf.toString(undefined, 0, 4))
var buf = new Buffer('www.baidu.com')
var json = buf.toJSON(buf)
console.log(buf.length)
console.log(json)


var buffer1 = new Buffer('www.baidu.com')
var buffer2 = new Buffer('hello!!')
var buffer3 = Buffer.concat([buffer1, buffer2])
console.log(buffer3.toString())
console.log(buffer3.toJSON(buffer3))

var buffer1 = new Buffer('abcde')
var buffer2 = new Buffer('abcd')
var res = buffer1.compare(buffer2)
console.log('res', res)

var buffer1 = new Buffer('abc')
var buffer2 = new Buffer(3)
buffer1.copy(buffer2)
console.log(buffer2.toString())


var buffer1 = new Buffer('youj');
// 剪切缓冲区
var buffer2 = buffer1.slice(0, 2);
console.log("buffer1 content: " + buffer1);
console.log("buffer2 content: " + buffer2.toString());