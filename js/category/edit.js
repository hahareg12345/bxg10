/**
 * 编辑分类
 * Author:Wilbert
 *   Date:2017/9/14
 */
define([
    "text!tpls/categoryEdit.html",
    "jquery",
    "template"

],function(categoryEditTpl,$,template){

    // //写一个jquery插件：
    // // 1、工具类方法：$.cookie
    // //      $.myFn=function(){}
    // // 2、DOM操作方法：$().modal()
    // $.fn.myModal=function(){        //$("body").myModal();
    //
    //     var $html=this.appendTo("body").modal().on("hidden.bs.modal",function(){
    //         $html.remove();
    //     });
    //
    //     //支持链式编程
    //     return this;
    // };

    return function(id){
        //要调用2个接口，第一个接口获取下拉框的数据，第二个接口获取分类原来的信息，2个数据要一起渲染到页面中-->嵌套ajax
        $.ajax({
            url:"/api/category/edit",
            type:"get",
            data:{cg_id:id},
            success:function(resOld){

                $.ajax({
                    url:"/api/category/top",
                    type:"get",
                    success:function(resTop){
                        //下拉框中预置顶级分类数据
                        resTop.result.unshift({
                            cg_id:0,
                            cg_name:"顶级分类"
                        });
                        //编译模板-->只有一次编译机会，传入的只能是一个对象，把其中一个对象附着在另一个对象中：属性
                        resTop.old=resOld.result;      //后续的模板编译中，通过old属性获取原来的分类信息

                        var html=template.render(categoryEditTpl,resTop);
                        //内容放到页面中，以模态框的形式呈现
                        var $html=$(html).on("submit","form",function(e){
                            e.preventDefault();

                            var formData=$(this).serialize();

                            $.ajax({
                                url:"/api/category/modify",
                                type:"post",
                                data:formData,
                                success:function(res){
                                    //隐藏模态框
                                    $html.modal("hide");
                                    //刷新分类列表
                                    $(".menu .list-group a[item=category]").trigger("click");
                                }
                            })


                        }).myModal();
                    }
                })

            }
        })




        
    }
})