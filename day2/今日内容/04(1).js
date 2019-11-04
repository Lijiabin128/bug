var fs = require('fs'),
    http = require('http');
http.createServer((req, res) => {
    // // 读文件   异步读取
    // fs.readFile('./1.txt',(err,data) => {
    //     res.end(data)
    // })

    // // 同步读取
    // var a= fs.readFileSync('./1.txt')
    // res.end(a)

    // // 写文件
    // fs.writeFile('./1.txt','123456',(err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    //     res.end('写入成功！')
    // })

    // // 追加内容 {flag:a}    a==>append
    // fs.appendFile('./1.txt','追加的内容',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.end('Append Success!')
    // })

    // fs.writeFile('1.txt','1236666666',{'flag':'a'},(err) => {
    //     if(err) throw err;
    //     res.end()
    // })

    // // 创建目录
    // fs.mkdir('./abing',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.end('Success!')
    // })

    // // 创建文件 writeFile有则写入，无则创建并写入
    // fs.writeFile('./abing/1.js','123456',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.end('Success!')
    // })

    // // 删除文件
    // fs.unlink('./abing/1.txt',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.end('Success!')
    // })

    // // 删除目录
    // fs.rmdir('./abing',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.end('Success!')
    // })

    // // 判断文件状态
    // fs.stat('./1.txt',(err,stats) => {
    //     // 查看是否是目录
    //     // console.log(stats.isDirectory());
    //     // 查看是否是文件
    //     console.log(stats.isFile());
    //     res.end('Success!')
    // })

    // // 重命名
    // fs.rename('./1.txt','./2.txt',(err) => {
    //     if (err) {
    //         throw err;
    //     }
    // })

    // 复制文件 copyFile
    // 打开文件
    // 关闭文件

    /* 
    1.判断当前目录里面的内容是文件还是目录
    2.如果是目录则把目录输出
    */
}).listen(3000)