/* 
1.定义一个路由文件router.js
2.在router中定义三个路由视图
3.在03.js中通过路径进行访问路由视图
*/
var http = require('http'),
    fs = require('fs'),
    router = require('./router');
http.createServer((req, res) => {
    // req.url
    // if (req.url == '/') {
    //     // fs.readFile('') 不使用fs
    //     // console.log(router);
    //     router.home(req, res)
    // } else if (req.url == '/about') {
    //     router.about(req, res)
    // } else if (req.url == '/news') {
    //     router.news(req, res)
    // } else {
    //     res.end('404')
    // }

    switch (req.url) {
        case '/':
            router.home(req, res)
            break;
        case '/about':
            router.about(req, res)
            break;
        case '/news':
            router.news(req, res)
            break;
        default:
            res.end('404 NOT FOUND!')
            break;
    }
    // 注意break和continue的区别
}).listen(3000)