var EventEmitter = require('events').EventEmitter
// EventEmitter 事件发送和事件监听器功能的封装，on和emit
/*
* var events = require('events')//引入
* var eventEmitter = new events.EventEmitter()//创建eventEmitter对象*/

var event = new EventEmitter()
//event 对象 注册了事件 some_event 的一个监听器
event.on('some_event', () => {
  console.log('some_event occured')
})
setTimeout(() => {
  event.emit('some_Event')//event 提交事件
}, 1000)