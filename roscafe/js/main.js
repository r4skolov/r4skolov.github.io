// Sliders

$(function(){
    $('.banner-slider').slick({
        infinite: true,
        touchMove:true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        prevArrow: '<button class="banner-slider__btn banner-slider__btn-prev"> <img src="/roscafe/img/arrow_prev.png" alt=""></button>',
        nextArrow: '<button class="banner-slider__btn banner-slider__btn-next"><img src="/roscafe/img/arrow_next.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 834,
              settings: {
                arrows: false,
                dots: true
              },
            },
        ]
    });

    $('.product-slider').slick({
        infinite: true,
        touchMove:true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        adaptiveHeight: true,
        variableWidth: true,
        useTransforms: false,
        useCSS: false,
        prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img src="/roscafe/img/products/product-arrowprev.png" alt=""></button>',
        nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img src="/roscafe/img/products/product-arrownext.png"" alt=""></button>',
        responsive: [
            {
              breakpoint: 834,
              settings: {
                arrows: false,
                dots: false,
              },
            },
        ]

    });

    $('.bgoods-slider').slick({
        infinite: true,
        touchMove:true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        adaptiveHeight: true,
        variableWidth: true,
        useTransforms: false,
        useCSS: false,
        prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img src="/roscafe/img/products/product-arrowprev.png" alt=""></button>',
        nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img src="/roscafe/img/products/product-arrownext.png"" alt=""></button>',
        responsive: [
            {
              breakpoint: 834,
              settings: {
                arrows: false,
                dots: false,
              },
            },
        ]

    });


    $('.product-slider__main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-slider__nav',
      responsive: [
        {
          breakpoint: 901,
          settings: {
            arrows: false,
            dots: true,
          },
        },
    ]
      
    });
    $('.product-slider__nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product-slider__main',
      dots: false,
      centerMode: true,
      vertical: true,
      focusOnSelect: true,
      prevArrow: '<button class="slider__nav-btn "><img src="/roscafe/img/product-slider/arrow-side.png" alt=""></button>',
        nextArrow: '<button class="slider__nav-btn"><img src="/roscafe/img/product-slider/arrow-side-down.png" alt=""></button>',
    });

});


// Burger

$("#burger").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#mobile__menu").toggleClass("active");
    $('body').toggleClass('lock');
  
});



// Button-filter
$("#filter-button").on("click", function(event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#catalog-filter").toggleClass("active");
  $('body').toggleClass('lock');
});


//Mobile filter btn 
$("#close-catalog__filter").on("click", function(event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#catalog-filter").toggleClass("active");
  $('body').toggleClass('lock');
  
});




// Drop search
$("#search").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#search_dropdown").toggleClass("active");
});


// 
$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this);
      blockid = $this.data('collapse');
      $this.toggleClass('active');
      $('.mobile-button__toggle--active').toggleClass('active');
      $(blockid).slideToggle();
});



//Input style
(function($) {
  $(function() {
    $('input, select').styler();
  });

  })(jQuery);
  $('.catalog-rating__corn').on('click', function(){
    $(this).toggleClass('rating-corn-active')
});






$(function () {
  $(".catalog-product__item").slice(0, 4).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".catalog-product__item:hidden").slice(0, 4).slideDown();
      if ($(".catalog-product__item:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      $('.catalog-product__item').slick('setPosition');
  });
});

//Catalog list
$('.catalog-filter__grid').on('click', function(){
  $(this).addClass('catalog-filter__button--active');
  $('.catalog-filter__list').removeClass('catalog-filter__button--active');
  $('.catalog-product__item').removeClass('catalog-product__item--list');
});

$('.catalog-filter__list').on('click', function(){
  $(this).addClass('catalog-filter__button--active');
  $('.catalog-filter__grid').removeClass('catalog-filter__button--active');
  $('.catalog-product__item').addClass('catalog-product__item--list');
});


$('.card-favorite__btn').on('click', function(){
  $(this).toggleClass('card-favorite--active')
});


//Tabs
$('.tab').on('click', function(e){
  e.preventDefault();

 $('.tab').removeClass('tab--active');
 $('.tabs-content').removeClass('tabs-content--active');
 $(this).addClass('tab--active');
 $($(this).attr('href')).addClass('tabs-content--active')

});


