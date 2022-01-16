$(document).ready(function(){
    $('.navigation__icon').click(function(event){
        $(this).toggleClass('active');
        $('.navigation__wrapper').toggleClass('active');
        $('.navigation__list').toggleClass('active');
        $('body').toggleClass('locked');
    })

    if ($('#page-1').hasClass('page-active')){
        $('.button-back').addClass('disabled')
    }

    else {
        $('.button-back').removeClass('disabled')
    }

    if ($('#page-13').hasClass('page-active')){
        $('.button-next').addClass('disabled')
    }

    else {
        $('.button-next').removeClass('disabled')
    }

})
