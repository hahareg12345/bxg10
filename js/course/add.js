/**
 * 添加课程
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseAdd.html",
    "jquery",
    "template"
],function(courseAddTpl,$,template){

    return function(){

        var html=template.render(courseAddTpl,{});

        $(html).myModal();

    }
})