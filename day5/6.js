var express = require("express")
var app = express()
//路由中间件
var router = express.Router()
app.use(router)
//验证码接口
router.get('/',(req,res)=>{
    res.send("1")
})
router.get("/code",(req,res)=>{
    //设置响应头，解决跨域问题
    res.header("Access-Control-Allow-Origin","*")
    /**
     * 随机数 math.random
     * 
     */
    var randomNum = function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str = "ABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890"
    var result = ''
    for(var i =0;i < 4;i ++){
        result += str[randomNum(0,str.length-1)]
    }
    console.log(result)
    res.send({'success':"请求成功","data":result})
})
app.listen(3000)