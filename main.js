/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/9/9
 */
require.config({
    baseUrl:"js",       //设置基础目录
    paths:{             //paths中每一个路径都不能携带.js后缀名
        jquery:"lib/jquery-2.1.4",
        bootstrap:"../assets/bootstrap/js/bootstrap",
        //jquery用于cookie操作的插件
        cookie:"lib/jquery.cookie",
        //requireJS官方提供的用于加载html文件的插件
        text:"lib/text",
        //模板文件夹的路径
        tpls:"../tpls",
        //配置arttemplate模板引擎的路径
        template:"lib/template-web",

        //配置日期控件的路径
        datetimepicker:"../assets/bootstrap-datetimepicker/js/bootstrap-datetimepicker",
        //配置日期控件语言包的路径
        datetimepickerlang:"../assets/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN"
    },
    shim:{
        //在以后加载bootstrap的时候，先读取jquery的内容
        bootstrap:{
            deps:["jquery"]
        },
        datetimepickerlang:{
            deps:["datetimepicker"]
        }

    }

});

//在index.html页面一加载的时候就加载了bootstrap
require([
    "jquery",
    "teacher/list",
    "category/list",        //分类列表
    "course/list",          //课程列表
    "course/add",           //添加课程
    "cookie",
    "bootstrap",
    "datetimepicker",        //日期控件
    "datetimepickerlang",     //日期控件的语言包
    "common/myModal"        //自己写的牛逼哄哄的一个基于bootstrap的模态框插件
],function($,teacherList,categoryList,courseList,courseAdd){
    //template就是arttemplate模板引擎的入口函数


    //1、点击实现菜单的切换
    //  a、给各个菜单烂绑定单击事件-->事件委托
    $(".menu .list-group").on("click","a",function(){
        //b、判断点击的是哪一个按钮-->分别判断拥有什么样的类名
        
        var item=$(this).attr("item");
        switch(item){
            //讲师管理
            case "teacher":
                //-->加载讲师列表模块       -->结果：渲染出讲师列表的页面
                teacherList();
                
                break;
            //课程管理
            case "course":
                courseList();
                
                
                break;
            //课程分类
            case "category":
                categoryList();

                break;
            case "course-add":
                courseAdd();
                
                break;
            //图表统计
            case "chart":
                $(".main .content-container").html("图表统计")
                break;
        }


        $(this).addClass("active").siblings().removeClass("active");
    });


    //默认点击讲师管理按钮？
    //      -->模拟点击讲师管理按钮
    $(".menu .list-group a[item=teacher]").trigger("click");        //触发按钮的单击事件


    //2、展示用户名和用户头像？
    var userInfoStr=$.cookie("userInfo");       //"{tc_avatar:...,tc_name:...}"


    //判断用户有没有登录过-->企业级项目都必须要登录之后才能访问
    if(!userInfoStr){
        //跳转到登录页面
        location.href="login.html";
    }

    var userInfo=JSON.parse(userInfoStr);                   //{tc_avatar:...,tc_name:...}
    //  把用户名和用户头像展示在页面指定位置
    $(".profile img").attr("src",userInfo.tc_avatar);
    $(".profile h3").html(userInfo.tc_name);


})