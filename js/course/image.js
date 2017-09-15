/**
 * 课程图片模块
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseImage.html",
    "jquery",
    "template"
],function(courseImageTpl,$,template){

    return function(id){
        $.get("/api/course/picture",{cs_id:id},function(res){


            //1、编译模板
            var html=template.render(courseImageTpl,res.result);
            //2、把内容放到页面中的指定位置
            var $html=$(html);
            $(".main .content-container").html($html);
        })


    }
})