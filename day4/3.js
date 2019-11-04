//接收get请求传输的方式
var express = require("express")
var app = express()
app.get('/',(req,res)=>{
    res.send("默认请求")
})
app.get("/list",(req,res)=>{
    console.log("接收到的参数为:"+req.query.username)
    res.send({"data":req.query})
})
app.get("/getid/:id",(req,res)=>{
    console.log(req)
    res.send("请求成功")
})

app.listen(3000)