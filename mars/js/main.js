//Accardion

$("[data-collapse]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this);
    blockid = $this.data('collapse');
    $this.toggleClass('active');
    $('.answers_toggle').toggleClass('active');
    $(blockid).slideToggle();
});



/* slider */

$(function () {
    $('.intro__slider').slick({
        infinite: true,
        adaptiveHeight: true,
        touchMove: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        autoplay: true,
        prevArrow: '.intro-btn__prev',
        nextArrow: '.intro-btn__next',
    })
    $(".intro__slider").on('afterChange', function (event, slick, currentSlide) {
        $(".countsSlides_1").text(currentSlide + 1);
    });



    $('.teacher__slider').slick({
        infinite: true,
        adaptiveHeight: true,
        touchMove: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '.teacher__btn',
        nextArrow: '.teacher__btn ',
    })
    $(".teacher__slider").on('afterChange', function (event, slick, currentSlide) {
        $(".countsSlides_2").text(currentSlide + 1);
    });

    $('.concerts__slider').slick({
        infinite: true,
        adaptiveHeight: true,
        touchMove: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: ' .concerts__btn',
        nextArrow: ' .concerts__btn',
    })

    $(".concerts__slider").on('afterChange', function (event, slick, currentSlide) {
        $(".countsSlides_3").text(currentSlide + 1);
    });


    $('.tickets-slider').slick({
        infinite: true,
        adaptiveHeight: true,
        touchMove: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '.ticket-slider__btn',
        nextArrow: '.ticket-slider__btn ',
    })
    $(".tickets-slider").on('afterChange', function (event, slick, currentSlide) {
        $(".countsSlides_4").text(currentSlide + 1);
    });

    $('.tickets-slider__brown').slick({
        infinite: true,
        adaptiveHeight: true,
        touchMove: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '.ticket-slider__brown',
        nextArrow: '.ticket-slider__brown ',
    })
    $(".tickets-slider__brown").on('afterChange', function (event, slick, currentSlide) {
        $(".countsSlides_5").text(currentSlide + 1);
    })
});




//Burger
$("#burger").on("click", function(event) {
    event.preventDefault();
  
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    $('body').toggleClass('lock');
  
    $('#nav').on('wheel', function (e) {
      e.stopPropagation();
    });
});


$("[data-scroll").on("click", function(event) {
    event.preventDefault();

    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);    

});