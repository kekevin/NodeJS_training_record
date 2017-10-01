/*
exports.world = () => {
  console.log('helo world')
}*/

function Hello() {
  var hello
  this.setName = (thyName) => {
    name = thyName
  }
  this.sayHello = () => {
    console.log('hello' + name)
  }
}

module.exports = Hello