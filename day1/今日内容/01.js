// 初始服务器
// node 模块
// 加载http模块
var http = require('http');
// 创建服务器 链式
http.createServer(function (req, res) {
    // req==>request 请求
    // res==>response 响应
    // 打印参数
    // console.log(arguments);
    // 结束响应==>响应客户端
    res.end('Hello Node！你好，中国！');
}).listen(3000, function () {
    console.log('服务器已经挂起');
})

// // 非链式
// var server=http.createServer(function (req,res) {
//     // req==>request 请求
//     // res==>response 响应
//     console.log(arguments);
//     // 结束响应==>响应客户端
//     res.end('Hello Node');
// })
// server.listen()