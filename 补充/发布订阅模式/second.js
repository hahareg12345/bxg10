/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/9/14
 */
var second=(function(){

    return function(callback){
        console.log("second模块");

        //修改num的值
        callback();
    }
})();