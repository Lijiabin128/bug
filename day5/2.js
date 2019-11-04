var express = require("express")
var path = require("path")
var app = express()
var cookieparser = require("cookie-parser")

var static = path.resolve(__dirname,"public")
app.use(cookieparser()); //让express和cookie建立起联系，深层签名

app.use(express.static(static))
app.get("/",(req,res)=>{
    res.send({"data":"login中的cookie为"+req.cookies})
    
})
//设置
app.get("/login",(req,res)=>{
    var obj = req.query.username
    // req.cookies.cookiename = obj 
    //设置cookie   maxAge  过期时长   httpOnly  只允许在服务端修改cookie值   signed  是否生成签名   domain  域名
    res.cookie("username", obj, {
        maxAge: 90000,
        httpOnly: true
    })
    res.send({"data":obj})
    console.log(req)
})
//获取
app.get("/list",(req,res)=>{
    console.log(req.cookies.cookiename)
    res.send()
})

app.listen(3000)