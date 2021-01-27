$(function(){
    $('.banner-slider').slick({
        infinite: true,
        touchMove:true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        prevArrow: '<button class="banner-slider__btn banner-slider__btn-prev"> <img src="/img/arrow_prev.png" alt=""></button>',
        nextArrow: '<button class="banner-slider__btn banner-slider__btn-next"><img src="/img/arrow_next.png" alt=""></button>',
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
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        adaptiveHeight: true,
        variableWidth: true,
        prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img src="/img/products/product-arrowprev.png" alt=""></button>',
        nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img src="/img/products/product-arrownext.png"" alt=""></button>',
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
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        adaptiveHeight: true,
        variableWidth: true,
        prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img src="/img/products/product-arrowprev.png" alt=""></button>',
        nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img src="/img/products/product-arrownext.png"" alt=""></button>',
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

});

$("#burger").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#mobile__menu").toggleClass("active");
    $('body').toggleClass('lock');
  
});

$("#search").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#search_dropdown").toggleClass("active");
  
});

$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this);
        blockid = $this.data('collapse');
        $this.toggleClass('active');
        $('.mobile-button__toggle--active').toggleClass('active');
        $(blockid).slideToggle();
});




