var http = require("http")

var server = http.createServer(function(req,res){

    res.end("hello node")
})
server.listen(3000,function(){
    console.log("服务器已挂起")
})