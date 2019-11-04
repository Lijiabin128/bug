var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200,{"Content-type":"text/html;charest = utf-8"})
    if (req.url == "favicon.ico") {
        return
    }
    if (req.url == "/") {
        fs.readFile("./html/bar.html", (err, data) => {
            res.end(data)
        })

    } else if (req.url == "/foo") {
        fs.readFile("./html/foo.html", (err, data) => {
            res.end(data)
        })
    } else if (req.url == "/txt") {
        
        fs.readFile("./html/404.txt", (err, data) => {
            res.end(data.toString())
        })
    } else {
        fs.readFile("./html/404.html", (err, data) => {
            res.end(data)
        })
    }

}).listen(3000)