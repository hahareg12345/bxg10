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
], function (personalTpl, $, template, api) {

    /**
     * 从提交表单的数据中找到tc_name
     * @param formData
     */
    function getName(formData) {
        var result;

        //1、这个字符串是以&连接的大的字符串，同时每一段都是一个数据
        var datas = formData.split("&");
        //2、遍历数组，找到tc_name开头的那一个
        datas.forEach(function (v) {
            //v：每一串："tc_name=ccc"

            var keyValues = v.split("=");
            var key = keyValues[0];
            var value = keyValues[1];

            if (key == "tc_name") {
                result = decodeURI(value);
            }

        });

        //3、返回指定的数据
        return result;
    }


    return function () {

        api.get("teacher/profile", {}, function (res) {


            var html = template.render(personalTpl, res.result);

            $(html)
                .on("submit", "form", function (e) {
                    e.preventDefault();

                    //获取表单数据
                    var formData = $(this).serialize();       //表单name

                    api.post("teacher/modify", formData, function (res) {

                        var tc_name=getName(formData);

                        //要把一个新的用户名保存在cookie；但是cookie中保存用户名是以userInfo作为整体来进行保存的；这里只是修改了用户名，并没有修改头像

                        //1、获取原来的cookie值
                        var userInfoStr=$.cookie("userInfo");
                        //2、把原来的cookie值反序列化为JSON对象
                        var userInfoObj=JSON.parse(userInfoStr);
                        //3、修改对象中的tc_name属性
                        userInfoObj.tc_name=tc_name;
                        //4、把全新的对象序列化为一个JSON数据
                        userInfoStr=JSON.stringify(userInfoObj);
                        //5、把新的JSON数据存储到cookie中
                        $.cookie("userInfo",userInfoStr);

                        //真刷新
                        location.reload();
                    })
                })
                .myModal();

            //添加到页面中之后再去渲染富文本编辑器
            var ue = UE.getEditor('introduceContainer');
            ue.ready(function(){

                ue.setContent(res.result.tc_introduce);
            })
        })
    }
})