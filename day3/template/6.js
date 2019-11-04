//ejs
/**
 * 高效的javascript的模板引擎
 * 
 * render 渲染
 * 第一个参数代表的是模板 第二个参数代表的数据（obj）
 * <%%>  流程控制标签
 * <%=%> 输出
 * <%#%> 注释
 * <%_%> 去除前面的空格
 * <% %> 去除后面的空格
 * <%-%> 语句解析  转译结构到模板  <include/>包含
 * 
 * 
 * 
 * template 模板
 */

 var http = require("http")
 var ejs = require("ejs")
 var fs = require("fs")
//  console.log(ejs)
 http.createServer((req,res)=>{
     fs.readFile('./view/index.ejs',(err,data)=>{
         var template = data.toString()
         var list = ['vue','react','node']
         var result = ejs.render(template,{list:list})
         //response 相应前端请求
         res.end(result)
     })
   
 }).listen(3000)