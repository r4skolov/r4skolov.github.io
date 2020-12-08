$(function(){
    $('.banner-section__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/Arrow_left.png" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/Arrow_right.png" alt=""></button>',
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

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider-btn product-slider-btnprev"><img src="img/arrow-right.svg" alt=""></button>',
        nextArrow: '<button class="product-slider-btn product-slider-btnnext"><img src="img/arrow-left.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
              },
            },

            {
                breakpoint: 829,
                settings: {
                  slidesToShow: 2,
                  infinite: true,
                  arrows: false,
                  dots: true
                },
              },
              {
                breakpoint: 566,
                settings: {
                  slidesToShow: 1,
                  infinite: true,
                  arrows: false,
                  dots: true
                },
              }
        ]
    });

    $('.project-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/Arrow_left.png" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/Arrow_right.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1353,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1020,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 688,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: true
            }
          }
      ]
    });
   

    $('.tab').on('click', function(e){
        e.preventDefault();

       $('.tab').removeClass('tab--active');
       $('.tabs-content').removeClass('tabs-content--active');
       $(this).addClass('tab--active');
       $($(this).attr('href')).addClass('tabs-content--active')

       $('.product-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active')
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click',function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200)
    });

    $(".rate-yo").rateYo({
        ratedFill: "#ffce76",
        spacing: "10px"
    });
    
});


$('.aside__btn').on('click', function (){ 
  $(this).next().slideToggle();
});


$("#burger").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#mobile__menu").toggleClass("active");

});


$(window).on('load resize', function() {
  if ($(window).width() < 542) {
    $('.test-slider:not(.slick-initialized)').slick({
      centerMode: true,
      arrows:true,
      dots: false,
      infinite: true,
      adaptiveHeight: true,
      touchMove:true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth:true,
      prevArrow: '<button class="catalog__slider-btn catalog__slider__slider-btnprev">Назад</button>',
      nextArrow: '<button class="catalog__slider-btn catalog__slider__slider-btnnext">Вперед</button>',
    });
  } else {
    $(".test-slider.slick-initialized").slick("unslick");
  }
});