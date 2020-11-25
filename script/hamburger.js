//hamburger

$(function() {

    $(".bars").on("click", function() {
        $(".bars").toggleClass('bars-open');
        $('.nav-menu').slideToggle(600);
    });


    $('.nav-menu a').on("click", function() {
        $('.nav-menu').slideToggle(600);
        $(".bars-open").toggleClass('bars-open');

    });

});