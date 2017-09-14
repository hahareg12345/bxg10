/**
 * 分类列表
 * Author:Wilbert
 *   Date:2017/9/14
 */
define([
    "jquery",
    "text!tpls/categoryList.html",  //分类列表模板
    "template"
],function($,categoryListTpl,template){


    return function(){
        //1、编译模板
        var html=template.render(categoryListTpl,{});
        //2、把内容放到页面中的指定位置
        $(".main .content-container").html(html);
    }
})