var express = require("express")
var app = express()
//在express里面设置模板引擎
app.set("vieq engine","ejs")
app.get("/",(req,res)=>{
    var list=['tom','jack','rose'];
    res.render('index.ejs',{list:list})
})


app.listen(3000)