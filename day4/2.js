var express = require("express")

var app = express()
//get  指代get请求
app.get('/',(req,res)=>{
    console.log(arguments)
    res.send({"scussee":"ok","data":[{"name":"1","age":2},{"name":"1","age":2}]})
})
//all 代表所有
//什么情况下收购用app.all   控制全局的功能时，需要使用
app.all((req,res)=>{
    res.send({"scussee":"ok","data":[{"name":"1","age":2},{"name":"1","age":2}]})
})
app.listen(3000)