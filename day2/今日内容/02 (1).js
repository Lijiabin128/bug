// 模块 module 使用common.js模式
/* 
node中：作用域叫做模块作用域，和块级作用域(只能在当前作用域生效)相似
node.js中每一个js文件就是一个模块，只能在当前模块中生效
node模块
    exports  module.exports
    抛出 暴露
exports与module.exports的区别?
    1.两者默认都是一个空对象
    2.exports是指向module.exports的引用(module.exports中包含exports)

ES6模块化
    export  export default
*/
var foo= require('./foo');
console.log(foo);
// console.log(module);