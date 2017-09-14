/**
 * 分类列表
 * Author:Wilbert
 *   Date:2017/9/14
 */
define([
    "jquery",
    "text!tpls/categoryList.html",  //分类列表模板
    "template",
    "category/add",      //添加分类模块
    "category/edit"     //编辑分类模块
], function ($, categoryListTpl, template, categoryAdd,categoryEdit) {


    return function () {
        $.ajax({
            url: "/api/category",
            type: "get",
            success: function (res) {

                //1、编译模板
                var html = template.render(categoryListTpl, res);//传入res就可以在模板内容遍历result

                var $html = $(html);      //把字符串转换为jquery对象

                //给添加分类按钮绑定事件
                $html
                    .on("click", ".btn-add", function () {

                        categoryAdd();
                    })
                    .on("click",".btn-edit",function(){
                        //获取分类id
                        var id=$(this).parent().attr("cg_id");
                        //把分类id传入编辑分类模块
                        categoryEdit(id);
                    });

                //2、把内容放到页面中的指定位置
                $(".main .content-container").html($html);
            }
        })
    }
})