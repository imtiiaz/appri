$(function () {

    //menu fix


    $(window).bind('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('menu_fix');
        } else {
            $('header').removeClass('menu_fix');
        }
    });

    // Smooth Scroll

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    // Counter

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // testimonial slider

    $('.testimonial_slider').slick({
        autoplay: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.test_img_slider'
    });
    $('.test_img_slider').slick({
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_slider',
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
        responsive: [

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    // partner slider

    $('.partner_slider').slick({
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    // scroll top 


    $(".chevron_up").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1000);
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $(".chevron_up").fadeIn();
        } else {
            $(".chevron_up").fadeOut();
        }
    });
    
    
    // WOW js
    
    new WOW().init();

    // Closes responsive menu when a scroll link is clicked


    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


});
