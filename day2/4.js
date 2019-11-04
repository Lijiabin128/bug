var fs = require("fs")
var http = require("http")
http.createServer((req,res)=>{
    //读取内容
    // fs.readFile("./1.txt",(err,data)=>{
    //     res.end(data)
    // })
    // 同步读取
    // var a= fs.readFileSync('./1.txt')
    // res.end(a)
    //修改内容
    // fs.writeFile("./1.txt","asdasdas",(err)=>{
    //     if(err) throw err
    //     res.end("写入成功")
    // })
    //添加内容
    // fs.appendFile("./1.txt","4545454",(err)=>{
    //     if(err) throw err
    //     res.end("添加成功")
    // })
    // fs.writeFile('1.txt','1236666666',{'flag':'a'},(err) => {
    //     if(err) throw err;
    //     res.end()
    // })
    //创建目录
    // fs.mkdir("./1",(err)=>{
    //     if(err) throw err
    //     res.end("创建成功")
    // })
    // 创建文件 writeFile有则写入，无则创建并写入
    // fs.writeFile('./abing/1.js','123456',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.end('Success!')
    // })
    // 删除文件
    // fs.unlink('./abing/1.txt',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.end('Success!')
    // })
    // 删除目录
    // fs.rmdir('./abing',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.end('Success!')
    // })
    // 判断文件状态
    // fs.stat('./1.txt',(err,stats) => {
    //     // 查看是否是目录
    //     // console.log(stats.isDirectory());
    //     // 查看是否是文件
    //     console.log(stats.isFile());
    //     res.end('Success!')
    // })
    // 重命名
    // fs.rename('./1.txt','./2.txt',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    // })
    //拷贝
    // fs.copyFile("./1.txt","./2.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end()
    // })
    //打开文件
    fs.open("./1.txt",(err)=>{
        if(err){
            throw err
        }
        res.end()
    })
}).listen(3000)
