$(function(){

    $('.product-slider').slick({
        infinite: true,
        touchMove:true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        adaptiveHeight: false,
        variableWidth: true,
        prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img src="/img/products/product-arrowprev.png" alt=""></button>',
        nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img src="/img/products/product-arrownext.png"" alt=""></button>',
      
    });


});


