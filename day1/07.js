//获取文件路径
var path = require("path")
//resolve  如果是绝对路径，会覆盖掉前一个路径  如果是相对路径，会拼接到第一个路径后，形成新路径
// console.log(path.resolve("C:/Windows/System32/cmd.exe","./dd"))
//
// console.log(path.normalize("C:/Windows/System32/cmd.exe","./dd"))
//判断是否是绝对路径 相对巨鲸
// console.log(path.isAbsolute("C:/Windows/System32/cmd.exe"))
//判断是否是相对路径
// console.log(path.relative("C:/Windows/System32/cmd.exe"))
//按照特定的标点分割进行路径的拼接，形成正确的新路径 
// console.log(path.join("/as","//sad"))
//返回当前目录 D:/UserData/Desktop
// console.log(path.dirname('D:/UserData/Desktop/今日内容'))
//返回目录名称 今日内容
// console.log(path.basename('D:/UserData/Desktop/今日内容'))
//获取文件的后缀名
// console.log(path.extname('C:/Windows/System32/1.txt'))


/*
 querystring  
 模块   ex

*/
