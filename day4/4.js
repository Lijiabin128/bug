//接收post传输的数据
//中间件 body-parser
/*
    当使用post请求时，必须使用中间件body-parser
*/
var express = require("express")
var bodyParser = require("body-parser")
var app = express()
console.log(app.use)
//使用中间件 use 使用
/*
    app.use(bodyParser.json()) //处理json数据
    app.use(bodyParser.urlencoded({extended:false}))//处理字符串
*/
app.use(bodyParser.json()) //处理json数据
app.use(bodyParser.urlencoded({extended:false}))//处理字符串
//req 接收     res 响应
app.get('/',(req,res)=>{
    res.send("首页")
})
app.post('/dopost',(req,res)=>{
    console.log(req)
    console.log(req.body)
    res.send({"data":"接收到的post的数据为："+ req.body.username})
})


app.listen(3000)