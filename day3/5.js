//buffer  二进制数据  缓存区
/**
*什么是buffer？
*从类型上说，就是一个类数组
*从内存上说，就是开辟新内存空间
*
*作用
*处理二进制数据
*解决数据传输过大
*
*案例 文件流 事件流 tcp
*别名；缓存区 （等待区）
*
*什么是二进制数据  八进制  十六进制
*返回的就是0和1
*010010101101
*
*创建buffer？
*new buffer()  已被废除
*
*因为buffer是一个全局对象，所以，它不需要通过require加载
*
*buffer可以传输的类型
*string buffer ArrayBuffer Array or Array-like  Object
*
*buffer下有那些方法
*toJson toString slice contact length 
*字节 bit  byte
*
*buffer 的编码类型
*utf-8  base64(上传图片的时候用到)  hex  Ascii  unicode
*
*buffer(缓存区) 和 cache(缓存) 的区别
*buffer相当于临时存储   cache是永久的，只要不主动清除就不会消失

*/
//buffer.from  相当于将字符串转为buffer
//第一种定义buffer的方法
var buf = Buffer.from('node')
console.log(buf.contact)

//第二种buffer的定义方法
//返回一个已初始化的数据，防止生成新的数据包含旧数据
// var buf = Buffer.alloc(10)
// console.log(buf.length)

//第三种buffer的定义方法
//不安全，不推荐使用  未被初始化的buffer
// var buf = Buffer.allocUnsafe(10)
// console.log(buf)
