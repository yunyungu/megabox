$(function(){

    // Membership&Vip 이동
    function fnMembership(idx){
        if(idx==0){
            $('.tab li').removeClass('active');
            $('.tab li').eq(0).addClass('active');
            $('.vip').addClass('active');
            $('.membership').removeClass('active');
        }else{
            $('.tab li').removeClass('active');
            $('.tab li').eq(1).addClass('active');
            $('.vip').removeClass('active');
            $('.membership').addClass('active');
        };
    };
    let locHref = location.href;
    let startIdx = locHref.indexOf('#');
    let targetTxt = locHref.slice(startIdx+1);
    if(targetTxt=='vip'){
        targetIdx = 0;
    }else{
        targetIdx = 1;
    };
    fnMembership(targetIdx);
    
    $('.membership-item').click(function(){
        let thisIdx = $('.membership-item').index($(this));
        if(thisIdx==0 || thisIdx==2){
            targetIdx = 0;
        }else{
            targetIdx = 1;
        }
        fnMembership(targetIdx);
    });


    // membership 자세히보기 이동_Mobile
    $('.btn-art').click(function(){
        let thisData = $(this).attr('role-data');
        let ww=$(window).width();
        if(ww<=767){
            $('.art-list').hide();
            $(`#${thisData}`).slideDown(300);
        };
    });

    // Desktop resize
        $(window).resize(function(){
            let ww=$(window).width();
            if(ww>=768){
                $('.art-list').show();
                $('.art03 li').show();  
            }else{
                $('.art-list').hide();
                $('.art03 li').hide();
                $('.coup-tit').show();  
                $('.coup-mvip').show();
            };
        });

    //vip members swiper
    const vipSlider = new Swiper('.vip-swiper',{
        slidesPerView:1.1,
        spaceBetween:20,
        autoplay:true,
        pagination:{
            el:'.vip-pagination',
            type:'fraction',
        },
        scrollbar:{
            el:'.vip-scrollbar',
        }, 
        breakpoints:{
            768:{
                slidesPerView:2,
            },
            960:{
                slidesPerView:2,
                spaceBetween:40,
            },
        },           
    });

    $('.vip-prev,.btn-prev').click(function(){
        vipSlider.slidePrev();
    });
    $('.vip-next,.btn-next').click(function(){
        vipSlider.slideNext();
    });

    $('.btn-ss').click(function(){
        $(this).toggleClass('start');
        if($(this).hasClass('start')){
            vipSlider.autoplay.stop();
        }else{
            vipSlider.autoplay.start();
        };
    });

    $('.btn-vip-nav').click(function(){
        let ww = $(window).width();
        if(ww <= 767){
            let thisIdx = $('.btn-vip-nav').index($(this));
            $('.art03 li').not('.coup-tit').hide();
            if(thisIdx==0){                
                $('.coup-mvip').show();
            }else if(thisIdx==1){
                $('.coup-vvip').show();
            }else{
                $('.coup-vip').show();
            };
        };
    });
    
});


