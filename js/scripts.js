/**
 * Created by goba on 23.03.15.
 */
$(document).ready(function(){
   $('.sector1, .block').mouseenter(function(){
      $('.block').slideDown();
   });$('.sector1, .block').mouseleave(function(){
        $('.block').slideUp();
    });

    $('.sector3, .block2').mouseenter(function(){
        $('.block2').slideDown();
    });$('.sector3, .block2').mouseleave(function(){
        $('.block2').slideUp();
    });

    $('.dropdown li').hover(function(){
        $(this).find('.dropdown-inside').animate({height: "show"}, 1000);
    });
    $('.dropdown li').mouseleave(function(){
        $(this).find('.dropdown-inside').animate({height: "hide"}, 1000);
    });
});
