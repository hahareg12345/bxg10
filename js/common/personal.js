/**
 * 个人中心
 * Author:Wilbert
 *   Date:2017/9/16
 */
define([
    "text!tpls/personal.html",
    "jquery",
    "template",
    "common/api"
],function(personalTpl,$,template,api){

    return function(){

        api.get("teacher/profile",{},function(res){


            var html=template.render(personalTpl,res.result);

            $(html).myModal();
        })
    }
})