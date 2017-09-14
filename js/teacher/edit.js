/**
 * 编辑讲师模块
 * Author:Wilbert
 *   Date:2017/9/14
 */
define([
    "jquery",
    "text!tpls/teacherEdit.html",        //编辑讲师模态框模板
    "template"

], function ($, teacherEditTpl, template) {


    return function (id) {

        $.ajax({
            url: "/api/teacher/edit",
            type: "get",
            data: {tc_id: id},
            success: function (res) {
                if (res.code != 200)   throw new Error(res.msg);


                //1、编译模板
                var html = template.render(teacherEditTpl, res.result);
                //2、把内容放到页面中，并且以模态框呈现出来
                var $html = $(html)
                    //异步：绑定事件
                    .on("submit", "form", function (e) {
                        e.preventDefault();

                        //a、获取表单数据
                        var formData=$(this).serialize();
                        //b、把数据提交到服务器中
                        $.ajax({
                            url:"/api/teacher/update",
                            type:"post",
                            data:formData,
                            success:function(res){
                                if(res.code!=200) throw new Error(res.msg);

                                //成功
                                // -->隐藏模态框
                                $html.modal("hide");//等到模态框隐藏之后就会触发：hidden.bs.modal事件
                                // -->刷新讲师列表
                                $(".menu .list-group a[item=teacher]").trigger("click");

                            }
                        })

                    })
                    //同步：添加到页面中
                    .appendTo("body").modal()
                    //异步：绑定事件
                    .on("hidden.bs.modal", function () {
                        //当模态框隐藏的时候，就删除模态框容器
                        $html.remove();
                    });
            }
        })

    }
})