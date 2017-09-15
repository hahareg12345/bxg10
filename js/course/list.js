/**
 * 课程列表
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseList.html",
    "jquery",
    "template"
],function(courseListTpl,$,template){


    return function(){
        //1、编译模板
        var html=template.render(courseListTpl,{});
        //2、把内容放到页面中的指定位置
        $(".main .content-container").html(html);
    }
})