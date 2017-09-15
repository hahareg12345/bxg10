/**
 * 课时列表
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseTimeList.html",
    "jquery",
    "template"
],function(courseTimeListTpl,$,template){
    //1、准备一个页面结构：模板文件，text插件获取模板内容

    return function(cs_id){

        //2、获取数据
        $.get("/api/course/lesson",{cs_id:cs_id},function(res){

            //3、渲染模板
            var html=template.render(courseTimeListTpl,res.result);
            var $html=$(html);

            //4、把内容添加到页面中
            $(".main .content-container").html($html);
        })


    }
})