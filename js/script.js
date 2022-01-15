$(document).ready(function(){
    $('.navigation__icon').click(function(event){
        $(this).toggleClass('active');
        $('.navigation__wrapper').toggleClass('active');
        $('.navigation__list').toggleClass('active');
        $('body').toggleClass('locked');
    })
})
