/**
 * 图表统计模块
 * Author:Wilbert
 *   Date:2017/9/16
 */
define([
    "text!tpls/chart.html",
    "jquery",
    "echarts",
    "common/api"
],function(chartTpl,$,echarts,commonApi){
    //echarts就是echarts功能的入口


    return function(){
        //1、通过ajax请求所有讲师的数据
        commonApi.get("teacher",{},function(res){
            //a、获取包含了所有讲师数据的数组
            var result=res.result;
            //b、把数组包装成echarts支持的数据格式
            var chartArray=[
                {value:0,name:"男"},
                {value:0,name:"女"}
            ];
            //c、把result中的每一个数据按照指定的要求，放到数组中
            result.forEach(function(v){
                //1、判断当前是男还是女
                // if(v.tc_gender==0){
                //     chartArray[0].value++;
                // }else{
                //     chartArray[1].value++;
                // }

                // chartArray[v.tc_gender==0?0:1].value++;

                chartArray[v.tc_gender].value++;


            });
            //构建一个性别数组
            var genderArray=chartArray.map(function(v){
                return v.name;
            });  //genderArray=["男","女"]



            var $chart=$(chartTpl);

            $(".main .content-container").html($chart);

            //获取main元素-->DOM元素
            var chartPie=$chart.find(".chart-pie").get(0);

            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(chartPie);

            // 指定图表的配置项和数据
            var option = {
                //设置标题部分的内容
                title : {
                    text: '网站中讲师男女比例',
                    x:'center',          //水平方向的对齐方式
                    textStyle:{
                        color:"red"
                    }
                },

                //图例
                legend: {
                    orient: 'horizontal',     //垂直:vertical  水平:horizontal
                    left: 'left',
                    //数组中数据的个数决定了图例的个数
                    data:genderArray      //这里的数据值必须要跟数据中的name值一一对应
                },

                //提示框
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c}"
                },


                series : [
                    {
                        name: '',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        //饼图的数据
                        data:chartArray,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

        })


    }
})