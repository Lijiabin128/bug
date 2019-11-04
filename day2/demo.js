var http = require("http");
var path = require("path");
var form = require("formidable")
var sd = require("silly-datetime")
var fs = require("fs")
http.createServer((req,res)=>{
    if(req.url == "/dopost"){

        var fm = form.IncomingForm()
        //fields  文本域   files 文件域
        fm.uploadDir = "./uploads"
        console.log(fm)
        // console.log(form.IncomingForm().uploaddir)
        fm.parse(req,function(err,fields,files){
            console.log(fm)
            var low = files.pic.path

            var extname = path.extname(files.pic.name);

            var time = sd.format(new Date(),"YYYYMMDDHHmmss")

            var fanishon = "./uploads/"+time+extname

            fs.rename(low,fanishon,(err)=>{

                if(err) throw err
            })
            res.end("fm")
        })
    } 
}).listen(3000)