/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    500,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // アイコンにアニメーションをつける //
    $('.social-icon').hover(
        function(){
        $(this).animate(
        {'font-size':'35px'},500   
        );},
        function(){
        $(this).animate(
        {'font-size':'20px'},500     
        );}
    );
    // 写真リンクにアニメーションをつける //
    $('.grandmodal').hover(
        function(){
            $(this).animate(
                {'font-size':'34px'},500
            );},
        function(){
            $(this).animate(
                {'font-size':'32px'},500
            );}
    );
    $('.smallmodal').hover(
        function(){
            $(this).animate(
                {'font-size':'18px'},500
            );},
        function(){
            $(this).animate(
                {'font-size':'16px'},500
            );}
    );
    
    // モーダルで写真をスライドで表示する //
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });

    // slick.jsを使ってスライド表示する //
    $('.slick').slick({
        adaptiveHeight: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    dots: false,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    dots: false,
                }
            },
        ]
    });
    
})(jQuery); // End of use strict
