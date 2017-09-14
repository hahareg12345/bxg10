/**
 * 讲师列表模块
 * Author:Wilbert
 *   Date:2017/9/11
 */
define([
    "jquery",       //jquery模块
    "text!tpls/teacherList.html",   //讲师列表模板文件
    "template",                    //arttemplate模板引擎
    "teacher/show",    //查看讲师模块              //"./show"是正确答案      //"show"是错误答案
    "teacher/add",      //添加讲师模块
    "teacher/edit"      //编辑讲师模块
], function ($, teacherListTpl, template, teacherShow, teacherAdd,teacherEdit) {


    //把模块的主要业务逻辑写在返回值中
    return function fn3() {
        //fn3是一个特殊的名字，这个特殊的名字不具有声明提升，也不能在函数外面使用，但是在函数体内部访问,fn3指向当前函数

        var fn = arguments.callee;

        $.ajax({
            url: "/api/teacher",
            type: "get",
            success: function (res) {
                if (res.code != 200) throw new Error(res.msg);

                //数据成功获取-->把数据渲染到模板中-->arttemplate模板引擎编译模板内容
                var html = template.render(teacherListTpl, res);
                //把编译之后的结果放到页面中的指定位置
                $(".main .content-container").html(html);

                //给查看按钮绑定事件
                $("div.panel")
                    //查看讲师
                    .on("click", ".btn-show", function () {
                        //this:查看按钮

                        var tc_id = $(this).parent().attr("tc_id");


                        //调用查看讲师模块的代码
                        teacherShow(tc_id);
                    })
                    //添加讲师
                    .on("click", ".btn-add", function () {
                        //this:添加讲师按钮

                        //调用添加讲师模块的代码
                        teacherAdd(function () {


                            //刷新讲师列表？
                            //fn();

                            fn3();
                        });

                    })
                    //启用注销讲师
                    .on("click",".btn-status",function(){

                        var $btnStatus=$(this);

                        $.ajax({
                            url:"/api/teacher/handle",
                            type:"post",
                            data:{
                                tc_id:$(this).parent().attr("tc_id"),
                                tc_status:$(this).parent().attr("tc_status")
                            },
                            success:function(res){
                                if(res.code!=200) throw new Error(res.msg);

                                //已经成功的修改了服务器中的数据
                                //-->修改显示的文本

                                var status=res.result.tc_status;//用户最新的状态值

                                //a、修改状态列文本
                                $btnStatus.parent().siblings(".td-status").text(status==0?"启用":"注销");
                                //b、修改用户状态按钮值
                                $btnStatus.text(status==0?"注销":"启用");
                                //c、修改父元素中的tc_status属性值
                                $btnStatus.parent().attr("tc_status",status);
                            }
                        })

                    })
                    //编辑讲师
                    .on("click",".btn-edit",function(){

                        teacherEdit();
                    })


            }
        })
    }
})
