/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/9/14
 */
var first=(function(){
    var num=10;

    return function(){
        //需求：希望由second模块修改num的值
        //-->观点1：second模块不能直接修改num的值，因为作用域的关系
        //-->观点2：发布订阅模式：间接修改num的值
        //          -->first模块正好依赖了second模块，同时first模块内部调用了second模块的返回值，所以正好把这一段逻辑放到一个函数中，利用词法作用域的机制：,
        //          -->闭包函数，在闭包函数内部同样的可以访问num的值

        //调用了second模块
        second(function(){
            num=5;
        });

        console.log(num);//10
    }
})()