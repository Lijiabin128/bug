var http = require("http")
var url = require("url")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var result = "http://localhost:3000?username=hahha&password=a"
    var obj = url.parse(result)
    // var obj = url.resolve("http://localhost:3000","/aa")
    console.log(obj)
    res.end()
}).listen(3000)