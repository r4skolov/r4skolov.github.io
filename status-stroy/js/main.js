$(function(){
    $('.main-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="main__slider-btn main__slider-btn__prev"><img src="img/arrow_prev.svg" alt=""></button>',
        nextArrow: '<button class="main__slider-btn main__slider-btn__next"><img src="img/arrow_next.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                dots: true,
                infinite: true
                
              }
            }
        ]
    });


    $('.project-slider').slick({
        infinite: true,
    adaptiveHeight: true,
    touchMove:true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth:true,
        arrows: false,
        useTransforms: false,
        useCSS: false,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            
            centerMode: true,
          }
        }
    ]
    });

    $('.projects-slider').slick({
      infinite: true,
      touchMove:true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth:true,
      arrows: false,
      centerMode: true,
     
    });
});



$('.tab').on('click', function(e){
    e.preventDefault();

   $('.tab').removeClass('tab--active');
   $('.tabs-content').removeClass('tabs-content--active');
   $(this).addClass('tab--active');
   $($(this).attr('href')).addClass('tabs-content--active')

});

$("#burger").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#mobile__menu").toggleClass("active");
    $('body').toggleClass('lock');
    $('.header-transparent').toggleClass('active');

});

$(window).on('load resize', function() {
    if ($(window).width() < 558) {
      $('.clients-slider:not(.slick-initialized)').slick({
        arrows:true,
        dots: false,
        infinite: true,
        adaptiveHeight: false,
        touchMove:true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth:false,
        useTransforms: false,
        useCSS: false,
        prevArrow: '<button class="clients-slider__btn clients-btn__prev"><svg class="client-slider__arrow"><use xlink:href="#arrow__left"></use></svg></button>',
        nextArrow: '<button class="clients-slider__btn clients-btn__next"><svg class="client-slider__arrow"><use xlink:href="#arrow__right"></use></svg></button>',
      });
    } else {
      $(".clients-slider.slick-initialized").slick("unslick");
    }
  });