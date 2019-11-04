//art-template
/**
 * 简洁而高效的模板引擎
 * 语法：标准语法   原始语法
 * 
 * 标准语法
 * {{}}  插值表达式
 * 
 * 
 * 原始语法
 * <%#for(var i=0;i< a.length;i++){%>
 *   <%#<li><%#=a[i]%></li>%>
 *  <%#}%>
 * 
 * 清除缓存
 * npm cachr clean -f   (--force)
   当权限的问题时
 * npm config set proxy null
 * 
 */
 var fs = require("fs")
 var http = require("http")
 var art = require("art-template")
 http.createServer((req,res)=>{
     if(req.url=="/favicon.ico"){
         return
     }
     fs.readFile("./static/index.art",(err,data)=>{
         //获取art-template模板
         var template = data.toString()  //buffer
         //data是获取的页面的所有信息，数据格式是buffer二进制。使用的时候需要用tostring来进行解码
         //template是模板 通过模板中变量的方法来渲染页面
         console.log(template)
         //render 模板 数据
         //定义数据
         var list = ["tom",'jack','rose']
         var htmlData = art.render(template,{a:list})
        //  console.log(htmlData)
         res.end(htmlData)
     })
 }).listen(3000)