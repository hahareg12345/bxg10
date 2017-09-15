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

        var $html=$(html)
            .on("submit","form",function(e){
                e.preventDefault();

                //获取数据
                var formData=$(this).serialize();
                //ajax提交数据
                $.post("/api/course/create",formData,function (res) {
                    if(res.code!=200) throw new Error(res.msg);

                    //隐藏模态框
                    $html.modal("hide");
                    //刷新课程列表-->模拟点击课程管理按钮
                    $(".menu .list-group a[item=course]").trigger("click");
                })

            })
            .myModal();

    }
})