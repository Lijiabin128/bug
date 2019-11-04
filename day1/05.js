var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    if (req.url=='/favicon.ico') {
        return
    }
    
    // url.parse().query 可以处理get请求
    console.log(url.parse(req.url, true))
    var obj = url.parse(req.url, true).query
    res.end("您的用户名是" + obj.username)
}).listen(3000)