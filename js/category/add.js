/**
 * 添加分类
 * Author:Wilbert
 *   Date:2017/9/14
 */
define([
    "jquery",
    "text!tpls/categoryAdd.html",       //添加分类模态框模板
    "template"
], function ($, categoryAddTpl, template) {

    return function () {


        $.ajax({
            url: "/api/category/top",
            type: "get",
            success: function (res) {

                //0、在数组的头部：预置顶级分类的数据
                res.result.unshift({
                    cg_id:0,
                    cg_name:"顶级分类"
                });

                //1、编译模板
                var html = template.render(categoryAddTpl, res);

                //2、把内容放到页面中
                var $html = $(html)
                    //实现提交表单
                    .on("submit","form",function(e){
                        //this:form标签

                        e.preventDefault();

                        var formData=$(this).serialize();//表单的name
                        $.ajax({
                            url:"/api/category/add",
                            type:"post",
                            data:formData,
                            success:function(res){
                                //this:ajax对象

                                if(res.code!=200) throw new Error(res.msg);

                                //隐藏模态框
                                $html.modal("hide");

                                //刷新分类列表
                                $(".menu .list-group a[item=category]").trigger("click");

                            }
                        })

                    })
                    .appendTo("body").modal()
                    .on("hidden.bs.modal", function () {

                        $html.remove();
                    });

            }
        })


    }
})