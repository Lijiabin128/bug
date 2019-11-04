// 如何解决乱码
var http =require('http');
http.createServer((req,res) => {
    // 设置请求响应头 Content-type 文本类型  text/html text/plain  image/jpeg
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    res.end('你好中国！')   //结束响应必须写在最后
}).listen(3000)