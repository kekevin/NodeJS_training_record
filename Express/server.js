var express = require('express');
var app = express();
/*可使用静态文件*/
app.use(express.static('public'));
/*浏览器转到index的时候，res.sendfile =》index文件，相当于打开index*/
app.get('/index.htm', function (req, res) {
  res.send('hello!!!')
  console.log(__dirname)
 res.sendFile(__dirname + "/" + "index.htm");
})
/*浏览器转到process_get的时候,页面显示index发送来的数据*/
app.get('/process_get', function (req, res) {

  // 输出 JSON 格式
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
