var util = require('util')

function Person() {
  this.name = 'byvoid'
  this.toString = () => {
    return this.name
  }
}

var obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj, true))
/*
*
Person { name: 'byvoid', toString: [Function] }
Person {
  name: 'byvoid',
  toString: { [Function] [length]: 0, [name]: '' } }*/