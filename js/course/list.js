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
        //$.get专门用于get请求：   类似的：$.post
        //参数1：url
        //参数2：data
        //参数3：success
        $.get("/api/course",{},function(res){
            if(res.code!=200) throw new Error(res.msg);

            //编译模板
            var html=template.render(courseListTpl,res);

            $(".main .content-container").html(html);
        })
    }
})