var events = require('events')//引入
var eventEmitter = new events.EventEmitter()//创建eventEmitter对象
var connectHander = function connected() {//定义connectHander方法
  console.log('connect success')
  eventEmitter.emit('data_received')//指向data_received
}
eventEmitter.on('connection', connectHander)
eventEmitter.on('data_received', () => {
  console.log('数据接受成功')
})
eventEmitter.emit('connection')//指向connection
console.log('程序执行完毕')