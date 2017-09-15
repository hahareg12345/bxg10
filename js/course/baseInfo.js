/**
 * 课程基本信息模块
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseBaseInfo.html",
    "jquery",
    "template"

], function (courseBaseInfoTpl, $, template) {


    return function (id) {
        $.get("/api/course/basic", {cs_id: id}, function (res) {
            if (res.code != 200) throw new Error(res.msg);

            //1、编译模板
            var html = template.render(courseBaseInfoTpl, res.result);
            //2、把内容放到页面中
            var $html = $(html);

            $html
                //给第一个分类下拉框绑定事件-->将会在用户选择了该下拉框中的某一项触发
                .on("change", ".select-top", function () {
                    //获取此时的下拉框的值
                    var val=$(this).val();
                    //ajax请求获取第二个下拉框中的内容
                    $.get("/api/category/child",{cg_id:val},function(res){
                        //return .... ：会首先执行后面的表达式，然后return
                        if(!res) return $html.find(".select-child").html("");

                        if(res.code!=200) throw new Error(res.msg);

                        //数据：res.result
                        //要把数据渲染到第二个下拉框中-->拼接DOM元素
                        var str="";

                        res.result.forEach(function(v){
                            //要把v拼接成一个option标签
                            str+="<option value='"+v.cg_id+"'>"+v.cg_name+"</option>";
                        });
                        //遍历完成之后：str也就是最终的option标签-->放到页面中
                        $html.find(".select-child").html(str);
                    })
                })

            $(".main .content-container").html($html);

        })


    }
})