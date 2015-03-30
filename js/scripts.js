/**
 * Created by goba on 23.03.15.
 */
$(document).ready(function(){


    $("select").msDropDown();


    $('input[type=text],input[type=email],input[type=date]').focus(function(){
        $(this).css({border: '2px solid red'});
    }).blur(function(){
        var newVal = $(this).val().trim();
        $(this).val(newVal);
        if ($(this).val() == "" ) {
            $(this).css({border: '1px solid red', background: '#FBACAC'})
        }
        else{
            $(this).css({border: '1px solid green', background: 'white'})
        }

    });

    $('#pass').blur(function(){
        pass1 =$(this).val();
        if (pass1.length <6){
            alert('Enter 6 characters!');
                }
    });
    $('#pass1').blur(function(){
        pass2 =$(this).val();
        if (pass1 != pass2){
            $('#popupWrapper').show();

            $('#closeMe').click(function () {
                $('#popupWrapper').hide();
            });
        }
    });



    $('.bxslider').bxSlider({
        auto: 'true',
        autoControls: false,
        pager:'true'
    });

    $('.sector1').click(function(){
       console.log($(this).parents());
    });

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

    $('.dropdown-inside').mouseenter(function(){
        $('.dropdown-inside').css('background','yellow');
    });$('.dropdown-inside').mouseleave(function(){
        $('.dropdown-inside').css('background','white');
    });

    $('.man1').mouseenter(function () {
        $('.man1').css('opacity','0');
    });$('.man1').mouseleave(  function () {
        $('.man1').css('opacity','1');
    });

    $('.FolowUs').click(function(){
        $('.icontop').css('display','block');
    });


    $('.xlogo').click(function(){
        $('.icontop').css('display','none');
    });


    var login =  prompt('Login','');
    if((login=='Admin')||(login == 'admin')){
        var password = prompt('password','');
        if(password=='123'){
            alert('Грац')
        }
        else{
            alert('Не правильний пароль')
        }
    }
    else{
        alert('Не правильний логін')
    }
});
