/**
 * 课程列表
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseList.html",
    "jquery",
    "template",
    "course/image",      //课程图片
    "course/baseInfo",    //课程基本信息模块
    "courseTime/list"       //课时列表
], function (courseListTpl, $, template, courseImage,courseBaseInfo,courseTimeList) {


    return function () {
        //$.get专门用于get请求：   类似的：$.post
        //参数1：url
        //参数2：data
        //参数3：success
        $.get("/api/course", {}, function (res) {
            if (res.code != 200) throw new Error(res.msg);

            //编译模板
            var html = template.render(courseListTpl, res);

            var $html = $(html);

            //给课程列表中的图片绑定单击事件
            $html
                .on("click", "a", function () {
                    var cs_id = $(this).parent().parent().attr("cs_id");

                    //调用课程图片模块
                    courseImage(cs_id);
                })
                //点击课程基本信息按钮
                .on("click", ".btn-baseinfo", function () {
                    //从该按钮开始一直往上查找，直到找到类名为media的元素截止：$(this).parent().parent().parent()
                    var $media=$(this).parents(".media");

                    var cs_id=$media.attr("cs_id");


                    courseBaseInfo(cs_id);

                })
                .on("click",".btn-time",function(){
                    var $media=$(this).parents(".media");
                    var cs_id=$media.attr("cs_id");

                    courseTimeList(cs_id);

                })

            $(".main .content-container").html($html);
        })
    }
})