/**
 * 课程基本信息模块
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseBaseInfo.html",
    "jquery",
    "template"

],function(courseBaseInfoTpl,$,template){


    return function(){
        //1、编译模板
        var html=template.render(courseBaseInfoTpl,{});
        //2、把内容放到页面中
        var $html=$(html);
        $(".main .content-container").html($html);

    }
})