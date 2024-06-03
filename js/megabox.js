$(function(){
    function fnAlert(msg){
        alert(msg);
    }
    function objClose(item){
        item.hide();
    };

    // popup ad event (하루동안 보지 않기  cookie 설정)
    $('.btn-close-ad').click(function(){
        objClose($('.ad01'));
    });
    if($.cookie('cokPop')=='none'){
        objClose($('#main-popup'));
    }else{
        $('#main-popup').show();
    };

    $('#btn-popup-close').click(function(){
        if($('#chk-pop').is(':checked')){
            $.cookie('cokPop','none',{expires:1});
        };
        objClose($('#main-popup'));
    });

    // header button event
    $('.btn-header').click(function(e){
        $('.sub-nav').hide();
        $('.dis-none').not($(this).next()).hide();
        $(this).next().toggle();
        $('.dt-nav .main-nav').removeClass('active');
        e.preventDefault();
    }) ;

    // login btn event
    $('.btn-login').click(function(){
        $('#login-form').show();            
        $('.dis-none').hide();
        $('body').addClass('lock');
    });
    $('#btn-login-close').click(function(){
        $('#login-form').hide();
        $('body').removeClass('lock');
    });

    // main nav event
    $('.main-nav>li').mouseenter(function(){            
        $('.main-nav>li').not($(this)).children('.sub-nav').css({
            display:'none',
        });
        $(this).children('.sub-nav').css({
            display:'flex',
        });
        let idx = $('.main-nav>li').index($(this));
        if(idx!=4){
            $('.dt-nav .main-nav').addClass('active');
        }else{
            $('.dt-nav .main-nav').removeClass('active');
        };
    });
    $('.header').mouseleave(function(){
        $('.sub-nav').hide();
        $('.dt-nav .main-nav').removeClass('active');
    });
    
    // mobile nav event
    $('#btn-set').click(function(){
        alert('로그인이 필요한 서비스입니다.');
        $('.m-nav').hide();
        location.href='./index.html';
    });
    $('#btn-m-nav-close').click(function(){            
        $('.m-nav').hide();
        $('body').removeClass('lock');
    });
    $('.btn-nav').click(function(){            
        $('.m-nav').show();
        $('body').addClass('lock');
    });
    $('#btn-m-login').click(function(e){
        $('.logon-form').show();
        $('.m-nav').hide();
        $('body').removeClass('lock');
        e.preventDefault();
    });
    $('#btn-all').click(function(){
        if($(this).text()=='전체메뉴 보기'){
            $('.m-nav-list02').css({
                display:'grid',
            })
            $(this).text('전체메뉴 닫기');
        }else{
            $('.m-nav-list02').css({
                display:'none',
            })
            $(this).text('전체메뉴 보기');
        };
    });
    
    // 폭 360미만 기기 지원x
    let ww=$(window).width();
    if(ww<=359){
        fnAlert('지원하지 않는 기기입니다.');
    };
    $(window).resize(function(){
        ww=$(window).width();
        if(ww>=1100){
            $('.m-nav').hide();
        };    
    });

    // login form esc 버튼으로 닫기 기능 (keycode == 27 : ESC)
    $(document).keydown(function(e){
        if(e.keyCode==27){
            $('body').removeClass('lock');
            $('.logon-form').hide();
        };
    });

    // heart btn event
    $('.hit button').click(function(){
        $(this).toggleClass('click');
    });

});