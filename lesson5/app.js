var async = require('async')
var concurrencyCount = 0
//调用它时，它会返回 http://www.baidu.com 的页面内容回来。
var fetchUrl = (url, callback) => {
//  console.log('callback', callback)
  var delay = parseInt((Math.random() * 10000000) * 2000, 10)
  concurrencyCount++
  console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
  setTimeout(() => {
    concurrencyCount--
    callback(null, url + 'html content')
  }, delay)
}
var urls = []
for (var i = 0; i < 30; i++) {
  urls.push('http://www.baidu.com/' + i);
}
// 使用asynct 来并发抓取，
async.mapLimit(urls, 5, (url, callback) => {
  // 将单个url传入
  fetchUrl(url, callback)
}, (err, result) => {
  console.log('final:', result)
})