$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position>=200){
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
        if(position>=500){
            $('.mission-camera-image').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.mission-camera-image').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
        if(position >= 3400) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
          } else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
          }
    })
    $('.gallery-list-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        let value = $(this).attr('data-filter');
        if(value === 'all')
          $('.filter').show(300);
        else{
            $('.filter').not('.'+value).hide(300);
            $('.filter').filter('.'+value).show(300);
        }
    })
})































