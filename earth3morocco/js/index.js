$(function() {

    //轮播代码
    $('#sahara_jca').jcarousel({
        wrap: 'circular', //循环滚动播放
        animation: 'slow'
    }).jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });

    //页数控制
    $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'img', function() {
        var pagination_active_class_index = Number($(this)[0].className.split(' ')[0]);
        $(this)[0].src = "//static.qyer.com/models/project/hades/earth3morocco/images/slide/slide_pagination_"+
        pagination_active_class_index+"_active.png";
    })
    .on('jcarouselpagination:inactive', 'img', function() {
        var pagination_class_index = Number($(this)[0].className.split(' ')[0]);
        $(this)[0].src = "//static.qyer.com/models/project/hades/earth3morocco/images/slide/slide_pagination_"+
        pagination_class_index+".png";
    })
    .on('click', function(e) {
        e.preventDefault();
    })
    .jcarouselPagination({
        perPage: 1,
        item: function(page) {
            return '<img class="'+page+'"src=//static.qyer.com/models/project/hades/earth3morocco/images/slide/slide_pagination_'+page+'.png>';
        }
    });
    
    //奇幻体验 js控制 begin
    var commonPath = "//static.qyer.com/models/project/hades/earth3morocco/images/";
    function click_callback(goal,other1,other2){
        $('.'+goal).click(function(){
            $('.'+goal)[0].src = commonPath + "feeling/" + goal + "_active.png";
            $('.'+other1)[0].src = commonPath + "feeling/" + other1 + "_tab.png";
            $('.'+other2)[0].src = commonPath + "feeling/" + other2 + "_tab.png";
            //目标出现
            $('#'+goal+' .picture1').animate({left:"20px"},1000);
            $('#'+goal+' .picture2').animate({right:"20px"},1000);

            // $('#'+goal+' .desc').animate({opacity: "1"},1000).delay(500);
            $('#'+goal+' .describe1').animate({left:"390px"},2000);
            $('#'+goal+' .describe2').animate({right:"20px"},2000);
            //其它消失
            $('#'+other1).animate({opacity: "0"},100,function(){
                $(this).css({opacity: "1"});
                //$('#'+other1+' .desc').css({opacity: "0"});
                $('#'+other1+' .describe1').css({left: "-1000px"});
                $('#'+other1+' .describe2').css({right: "-2000px"});
                $('#'+other1+' .picture1').css({left: "-1000px"});
                $('#'+other1+' .picture2').css({right: "-2000px"});
            });
            $('#'+other2).animate({opacity: "0"},100,function(){
                $(this).css({opacity: "1"});
                //$('#'+other2+' .desc').css({opacity: "0"});
                $('#'+other2+' .describe1').css({left: "-1000px"});
                $('#'+other2+' .describe2').css({right: "-2000px"});
                $('#'+other2+' .picture1').css({left: "-1000px"});
                $('#'+other2+' .picture2').css({right: "-2000px"});
            });
        });
    }
    click_callback('culture','customs','risk');
    click_callback('customs','culture','risk');
    click_callback('risk','customs','culture');
    //奇幻体验 js控制 end

    //奇幻味蕾 begin
    var numAnimation = 0;
    var disToBody = $('.taste').offset().top;
    var handler = function(){
        var scrollHeight = document.body.scrollTop;
        if(scrollHeight >= disToBody - 400){
            numAnimation ++;
            if(numAnimation>1){
                window.removeEventListener('scroll',handler,false);
            }
            $('.food1_img').css({"-webkit-animation":'animation_food1_img 1s',"opacity": "1"});
            $('.food1_desc').css({'-webkit-animation':'animation_food1_desc 1s',"opacity": "1"});
            $('.food2_img').css({'-webkit-animation':'animation_food2_img 1s',"opacity": "1"});
            $('.food2_desc').css({'-webkit-animation':'animation_food2_desc 1s',"opacity": "1"});
            $('.food3_img').css({'-webkit-animation':'animation_food3_img 1s',"opacity": "1"});
            $('.food3_desc').css({'-webkit-animation':'animation_food3_desc 1s',"opacity": "1"});
            $('.food4_img').css({'-webkit-animation':'animation_food4_img 1s',"opacity": "1"});
            $('.food4_desc').css({'-webkit-animation':'animation_food4_desc 1s',"opacity": "1"});
            $('.food5_img').css({'-webkit-animation':'animation_food5_img 1s',"opacity": "1"});
            $('.food5_desc').css({'-webkit-animation':'animation_food5_desc 1s',"opacity": "1"});
        }else{
            $('li').css('-webkit-animation','');
        }
    }
    window.addEventListener('scroll',handler,false);
    //奇幻味蕾 end

    //奇幻旅途 begin
    $('#journey_jca').jcarousel({
        wrap: 'circular', //循环滚动播放
        animation: 'slow'
    }).jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });
    $('.jcarousel-control-prev')
    .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
    }).on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
    }).jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-control-next')
    .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
    }).on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
    }).jcarouselControl({
        target: '+=1'
    });
    //奇幻旅途 end

    //路线推荐，进入某个poi，显示tips，切换背景和文字
    $(".map i").click(function(){
        //切换tips
        var top = $(this)[0].offsetTop - 25;
        var left = $(this)[0].offsetLeft + 3;
        $('.map .tips').css({"top": top,"left":left});  
        //背景图更换,介绍更换
        var poiIndex = Number(String.prototype.substring.call($(this)[0].className,3,4));
        changeIndex(poiIndex);
    });

    function changeIndex(index){
        for(var i=1; i<=7; i++){
            if(i==index){
                $(".bg"+i).css("z-index",2);
                $(".desc"+i).css("z-index",3);
            }else{
                $(".bg"+i).css("z-index",1);
                $(".desc"+i).css("z-index",0);
            }
        }
    }
    
    
    //页面统计相关代码
    window._RATrack = window._RATrack || {
        'platform': 'web', 
        'channel': 'daole',
        'page_type': 'detail',
        'ugc_type': 'daole_zt',
        'ugc_content': '奇幻之旅－摩洛哥'
    };
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//static.qyer.com/qyer_ui_frame/m/js/dist/base_beacon_ga.js";
    document.getElementsByTagName("head")[0].appendChild(script);

});
