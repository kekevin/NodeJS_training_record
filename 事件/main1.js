var event = require('events')
var emitter = new event.EventEmitter()
/*
* EventEmitter.on(event, listener)、emitter.addListener(event, listener) 为指定事件注册一个监听器，接受一个字 符串 event 和一个回调函数 listener*/
emitter.once('someEvent', (arg1, arg2) => {
  console.log('listener1', arg1, arg2)
})

/* 发射 event 事件，传 递若干可选参数到事件监听器的参数表。*/
emitter.emit('someEvent','dino',1881)
emitter.emit('someEvent','dino',1881)