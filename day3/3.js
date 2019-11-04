//监控日志
var fs = require("fs")

var readline = require("readline")
var readStream = fs.createReadStream("./1.txt")

var rl = readline.createInterface({
    input:readStream
})

rl.on("line",(linenum)=>{
    console.log(new Date() + "linenum执行")
    console.log(linenum)
})
rl.on("close",()=>{
    console.log("linenum监听数据完毕")
})