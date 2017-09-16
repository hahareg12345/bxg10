/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/9/16
 */
define([
    "common/api"
],function(api){

    return {
        //获取讲师列表-->数组
        /**
         * teacherModel.getTeacher(function(res){})
         * @param callback
         */
        getTeacher:function(callback){
            api.get("teacher",{},function(res){
                //res.result

                //要把数据传递给用户，用户只能通过回调函数
                callback(res);
            });
        },
        //编辑讲师，获取讲师原来的数据
        editTeacher:function(){

        },
        //编辑讲师，提交表单
        modifyTeacher:function(){

        }

    }
})