/*var hello = require('./hello')
hello.world()*/
/*引用hello模块下的world*/
var Hello = require('./hello')
hello = new Hello()
hello.setName('BYVoid')
hello.sayHello()