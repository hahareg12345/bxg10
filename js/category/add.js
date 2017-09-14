/**
 * 添加分类
 * Author:Wilbert
 *   Date:2017/9/14
 */
define([
    "jquery",
    "text!tpls/categoryAdd.html",       //添加分类模态框模板
    "template"
],function($,categoryAddTpl,template){

    return function(){

        //1、编译模板
        var html=template.render(categoryAddTpl,{});

        //2、把内容放到页面中
        var $html=$(html)
            .appendTo("body").modal()
            .on("hidden.bs.modal",function(){

                $html.remove();
            });

    }
})