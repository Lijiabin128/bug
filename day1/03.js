var http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
    // 读取文件
    fs.readFile('./node.txt',function (err,data) {
        console.log(data.toString());
        res.end(data)
    })
    }).listen(3000)