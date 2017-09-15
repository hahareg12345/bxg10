/**
 * 编辑课时
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseTimeEdit.html",
    "jquery",
    "template"

],function(courseTimeEditTpl,$,template){

    return function(ct_id,callback){
        $.get("/api/course/chapter/edit",{ct_id:ct_id},function(res){


            //1、编译模板
            var html=template.render(courseTimeEditTpl,res.result);
            //2、把内容放到页面中
            var $html=$(html);
            $html
                .on("submit","form",function(e){
                    e.preventDefault();

                    var formData=$(this).serialize();//表单name值

                    $.post("/api/course/chapter/modify",formData,function(res){

                        //1、隐藏模态框
                        $html.modal("hide");

                        //2、刷新课时列表页面
                        callback();
                    })

                })

            $html.myModal();
        })



    }
})