/**
 * 添加讲师模块
 * Author:Wilbert
 *   Date:2017/9/12
 */
define([
    "jquery",
    "text!tpls/teacherAdd.html",
    "template"

], function ($, teacherAddTpl, template) {


    return function (callback) {
        //1、编译模板
        var html = template.render(teacherAddTpl, {});
        //2、把编译后的内容放到页面中，并且以模态框的形式呈现
        var $html = $(html);



        $html.appendTo("body")
            .modal()
            //应对于所有形式的隐藏，无论是点击提交关闭，还是点击空白关闭，还是点击关闭按钮
            .on("hidden.bs.modal", function () {

                //希望模态框隐藏的时候，把模态框这个容器给删除


                //删除日期控件容器
                $html.find(".date-join").datetimepicker("remove");

                //this-->模态框容器
                $(this).remove();





            })
            .on("submit", "form", function (e) {
                //把同步表单变成异步的表单
                e.preventDefault();

                //获取表单数据
                var formData=$(this).serialize();

                //发送ajax请求
                $.ajax({
                    url:"/api/teacher/add",
                    type:"post",
                    data:formData,
                    success:function(res){
                        if(res.code!=200) throw new Error(res.msg);

                        //数据已经成功的提交到服务器中了


                        //关闭模态框？
                        //-->获取模态框的容器-->$html

                        $html.modal("hide");    //会让模态框隐藏，等模态框已经隐藏起来之后，会触发hidden.bs.modal

                        //刷新讲师列表？
                        //第一种方式:
                        //$(".menu .list-group a[item=teacher]").trigger("click");

                        //第二种方式：
                        //分析：如果刷新讲师列表？只需要重复的执行一下teacher/list.js的功能即可
                        //-->a、一条走不通的路：add.js依赖list.js  会导致模块的循环依赖
                        //-->b、利用一种设计模式：发布(publish)/订阅(subscribe)模式
                        //   teacher/list.js-->teacher/add.js
                        //      在点击添加按钮的事件回调函数中，执行了teacherAdd函数
                        //      teacherAdd(function(){
                        //          //刷新讲师列表的功能
                        //      })

                        //teacher/add.js
                        //  return function(callback){
                        //      //callback接受了匿名函数
                        //      //需要刷新讲师列表的时候执行该匿名函数
                        //  }

                        callback();
                    }
                })




            });


        //等到模态框渲染完成之后，渲染日期控件-->巧妙的避免的z-index的烦恼
        $html.find(".date-join").datetimepicker({
            //日期格式化
            format: 'yyyy-mm-dd',
            weekStart:1,        //一周从周一开始
            daysOfWeekDisabled:[6,0],
            minView:"month",     //最小视图就是月视图-->只能精确到某一天
            autoclose:true,      //选择完日期之后自动关闭控件
            language:"zh-CN",     //语言设置为中文，如果想要设置某个语言，必须先导入的语言包
            todayBtn:true,          //显示"今天"按钮
            todayHighlight:true     //在今天这个月内，如果选中的不是今天，告诉你今天是哪一天
        });

    }
})