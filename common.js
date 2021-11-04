$(function(){
    $('.header-bottom .dep1').mouseenter(function(){
        $('.header-bottom .dep2').stop().slideDown('on');
    })
    $('.header-bottom .dep1').mouseleave(function(){
        $('.header-bottom .dep2').stop().slideUp('on');
    })

})