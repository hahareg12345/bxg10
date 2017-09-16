/**
 * 处理通用的ajax请求
 * Author:Wilbert
 *   Date:2017/9/16
 */
define([
    "jquery"
], function ($) {

    var obj={
        /**
         *
         * @param url
         * @param type
         * @param data
         * @param callback 接受了匿名函数的内存地址
         */
        ajax: function (url, type, data, callback) {
            $.ajax({
                url: "/api/"+url,
                type: type,
                data: data,
                success: function (result) {
                    if (result.code != 200) throw new Error(result.msg);


                    callback(result);
                },
                error: function (res) {
                    throw new Error(res);
                }
            });
        }
    };

    var fns=["get","post"];
    fns.forEach(function(name){
        //name：方法名

        obj[name]=function(url, data, callback){
            //如何调用ajax方法？
            this.ajax(url,name,data,callback);
        };
    });


    return obj;
});
// //main.js
// require(["common/api"], function (api) {
//
//     api.ajax("teacher", "get", {},function (res) {
//         //这里的形参res，接受了callback调用时候，传入的实参
//     });
// })