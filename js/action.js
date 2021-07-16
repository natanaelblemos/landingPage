$(document).ready(function(){
    $('section ul li').mouseover(function(){
        $(this).children('.li_item_sombra').stop().animate({
            width: '0px',
        },500);
    });
    $('section ul li').mouseout(function(){
        $(this).children('.li_item_sombra').stop().animate({
            width: '280px',
        },500);
    });
});