/**
 * myModal模块
 * Author:Wilbert
 *   Date:2017/9/14
 */
define([
    "jquery"
],function($){

    $.fn.myModal=function(){        //$("body").myModal();
        //this:jquery对象
        var $html=this.appendTo("body").modal().on("hidden.bs.modal",function(){
            //this：DOM元素：

            $html.remove();

            //this.remove();
        });

        //支持链式编程
        return this;
    };
})