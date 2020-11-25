const nav = document.querySelector('#fixed');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}


window.addEventListener('scroll', fixNav);


//hamburger

$(function() {

    $(".bars").on("click", function() {
        $(".bars").toggleClass('bars-open');
        $('.nav-menu').slideToggle(600);
    });

    $('.nav-menu a').on('click', function() {
        var ww = $(window).width();
        if (ww < 768) {
            $('.nav-menu').slideToggle(600);
            $('.bars-open').toggleClass('bars-open');
        }
    });

});