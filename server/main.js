//express_demo.js 文件
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, '../dist/index.html'));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
