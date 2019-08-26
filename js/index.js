/**
 * Created by 123 on 2017/2/15.
 */
$(function () {
    /*轮播 */
    var banner_list = $(".banner_list");
    var dot = $(".banner_nav li");
    var bannerItemW = 0;
    var bannerItemH = 0;
    var banner = $("div.banner");
    var banner_item = $("li.banner_item");
    var timer=null;
    var num = 0;
    setBannerWidth();//页面首次加载时 初始化 每个部分的 宽度好高度值
    $(window).resize(function () {//窗口改变时 重置各个部分的宽度 高度值
        setBannerWidth()
    });
    dot.click(function () {//点的点击事件
        clearInterval(timer);
        num =  $(this).index();
        moveBanner(num);
        timer=setInterval(function(){automatic()},4000);
    });

    timer=setInterval(function(){automatic()},4000);

    /*___________封装函数_________________*/
    function moveBanner(num) {//设置轮播的动作
        dot.eq(num).addClass("active").siblings().removeClass("active")
        banner_list.animate({left: -bannerItemW * num + "px"},1000);
    }
    /* 初始化时或窗口改变时设置  重置页面各个部分的宽度值  */
    function setBannerWidth() {
        var winW = $(window).width();//获取窗口的宽度
        if (winW >= 1183) {//设置每个轮播块的宽度值
            banner_item.width(1140)
        } else if (winW < 1183 && winW >= 975) {
            banner_item.width(940)
        } else if (winW < 975 && winW >= 768) {
            banner_item.width(720)
        } else if (winW < 768) {
            banner_item.width(winW - 30)
        }
        bannerItemW = banner_item.width();
        bannerItemH = banner_item.height();
        banner.css({height: bannerItemH + "px"});//设置轮播窗口的高度值
        banner_list.css({left: 0 + "px"});//设置轮播列表的 位置
    }
    function automatic(){//自动轮播的函数
        num++;
        if (num==3){
            banner_list.animate({left: -bannerItemW * num + "px"},1000).animate({left: 0 + "px"},0);
            num=0;
            dot.eq(0).addClass("active").siblings().removeClass("active")
        }else {
            moveBanner(num)
        }
    }
})
