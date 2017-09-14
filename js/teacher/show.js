/**
 * 查看讲师模块
 * Author:Wilbert
 *   Date:2017/9/12
 */
define([
    "text!tpls/teacherShow.html",    //查看讲师模态框模板
    "template",                      //"arttemplate模板引擎"
    "jquery"
],function(teacherShowTpl,template,$){


    return function(id){
        // //0、在加载一个新的模态框的时候，把之前的删除
        // $("#modalTeacherShow").remove();
        //
        // //1、编译模板
        // var html=template.render(teacherShowTpl,{});
        // //2、把编译好的内容放到页面中的指定位置，把它以模态框的形式呈现出来
        // $(html).appendTo("body").modal();           //$("body").append(html);


        $.ajax({
            url:"/api/teacher/view",
            type:"get",
            data:{
                tc_id:id
            },
            success:function(res){

                //1、编译模板
                var html=template.render(teacherShowTpl,res);
                //2、把编译好的内容放到页面中的指定位置，把它以模态框的形式呈现出来
                $(html).appendTo("body").modal().on('hidden.bs.modal', function (e) {
                    //该事件将会在模态框隐藏之后触发
                    //alert("触发了");

                    //设置模态框在隐藏之后，删除模态框的容器-->jquery操作

                    //this-->模态框的容器
                    $(this).remove();
                });

            }
        })



    }
})