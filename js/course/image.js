/**
 * 课程图片模块
 * Author:Wilbert
 *   Date:2017/9/15
 */
define([
    "text!tpls/courseImage.html",
    "jquery",
    "template"
],function(courseImageTpl,$,template){

    return function(id){
        $.get("/api/course/picture",{cs_id:id},function(res){


            //1、编译模板
            var html=template.render(courseImageTpl,res.result);
            //2、把内容放到页面中的指定位置
            var $html=$(html);
            $(".main .content-container").html($html);


            //3、在内容已经添加到页面中之后，再去渲染uploadify
            $("#fileCourse").uploadify({
                formData:{
                    cs_id:id
                },                      ////额外提交的一些参数
                fileObjName:"cs_cover_original",        //作为装载文件内容的name值
                swf           : '../assets/uploadify/uploadify.swf',    //flash文件
                uploader      : '/api/uploader/cover',      //服务器地址  /api/teacher
                fileTypeExts : '*.gif; *.jpg; *.png; *.jpeg',//指定上传文件的扩展名
                multi:false,               ////指定用户一次性是否可以选择多个文件；默认值为：true
                //等到上传成功调用该方法
                onUploadSuccess : function(file, data, response) {

                    // console.log(file);      //上传的文件信息：文件名
                    // console.log(data);      //服务器返回的数据
                    // console.log(response);

                    //刷新课程列表
                    $(".menu .list-group a[item=course]").trigger("click");
                }
            });
        })


    }
})