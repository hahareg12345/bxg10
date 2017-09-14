/**
 * 编辑讲师模块
 * Author:Wilbert
 *   Date:2017/9/14
 */
define([
    "jquery",
    "text!tpls/teacherEdit.html",        //编辑讲师模态框模板
    "template"

],function($,teacherEditTpl,template){


    return function(id){

        $.ajax({
            url:"/api/teacher/edit",
            type:"get",
            data:{tc_id:id},
            success:function(res){
                if(res.code!=200)   throw new Error(res.msg);


                //1、编译模板
                var html=template.render(teacherEditTpl,res.result);
                //2、把内容放到页面中，并且以模态框呈现出来
                var $html=$(html).appendTo("body").modal().on("hidden.bs.modal",function(){
                    //当模态框隐藏的时候，就删除模态框容器
                    $html.remove();
                });
            }
        })
        
    }
})