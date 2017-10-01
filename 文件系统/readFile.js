/*
var fs = require('fs')
fs.readFile('content.txt', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})*/

var fs = require('fs')
fs.readFile('content.txt','utf-8', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})
