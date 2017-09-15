/**
 * 课时列表
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseTimeList.html",
    "jquery",
    "template",
    "courseTime/edit"
], function (courseTimeListTpl, $, template,courseTimeEdit) {
    //1、准备一个页面结构：模板文件，text插件获取模板内容

    return function f3(cs_id) {

        //2、获取数据
        $.get("/api/course/lesson", {cs_id: cs_id}, function (res) {

            //3、渲染模板
            var html = template.render(courseTimeListTpl, res.result);
            var $html = $(html);

            $html
                //点击编辑按钮
                .on("click", ".btn-edit", function () {
                    var ct_id=$(this).parent().attr("ct_id");

                    courseTimeEdit(ct_id,function(){

                        f3(cs_id);
                    });
                })

            //4、把内容添加到页面中
            $(".main .content-container").html($html);
        })


    }
})