var http = require('http'),
    fs = require('fs');
http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        return
    }
    /* 
    1.如果地址栏访问的是/ 则加载bar.html
    2.如果地址栏访问的是/foo 则加载foo.html
    */
    if (req.url == '/' || req.url == '') {
        fs.readFile('./HTML/bar.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url == '/foo') {
        fs.readFile('./HTML/foo.html', (err, data) => {
            res.end(data)
        })
    } else {
        fs.readFile('./HTML/404.html', (err, data) => {
            res.end(data)
        })
    }
}).listen(3000)