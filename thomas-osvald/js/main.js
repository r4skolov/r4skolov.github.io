
$(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        draggable: false,
        swipe: false,
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: false,
        centerPadding: '0px',
        draggable: false,
        swipe: false,
        prevArrow: '.button-slider__prev',
        nextArrow: '.button-slider__next',
      });

});







$(function(){
  $('.slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav__big',
      draggable: false,
      swipe: false,
    });
    $('.slider-nav__big').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-big',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
      centerPadding: '0px',
      draggable: true,
      swipe: false,
      prevArrow: '<button  type="button" class="slider-big__btn slider-big__prev">Prev</button>',
      nextArrow: '<button  type="button" class="slider-big__btn slider-big__next">Next</button>',
      
    });

});



$(function(){
  $('.slider-tabs').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    verticalSwiping: true,
    focusOnSelect: true,
    variableWidth: false,
    centerPadding: '0px',
    draggable: true,
    swipe: true,
    infinite: false,
    prevArrow: '<button  type="button" class="slider-tabs__btn slider-tabs__prev">Up</button>',
    nextArrow: '<button  type="button" class="slider-tabs__btn slider-tabs__next">Down</button>',
    });

});


$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    autoScroling:false,
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    fadingEffect:true, 
    fadingEffect:'slides', 
    scrollHorizontally: true,
    scrollingSpeed: 800,
    afterLoad: true,
    
  });

});


const CLASS_LIST = {
    MODAL: 'modal',
    MODAL_ACTIVE: 'modal--active',
    MODAL_HAS_SCROLL: 'modal--has-scroll',
    MODAL_DIALOG_BODY: 'modal__dialog-body',
    TRIGGER_OPEN: 'js-modal-open',
    TRIGGER_CLOSE: 'js-modal-close'
    
};



document.addEventListener('click', (event) => {
    //open
    if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
      console.log('open');
      event.preventDefault();

      const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
      const modalId = target.getAttribute('href').replace('#', '');
      const modal = document.getElementById(modalId);

      document.body.style.overflow = 'hidden';

      modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
    }

    if ( 
      event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
      event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
    ) {
      console.log('close');
      event.preventDefault();

      const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);
      modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);

      document.body.style.overflow = 'visible';
    }

    $('.modal').on('wheel', function (e) {
      e.stopPropagation();
})

});



$('.tab').on('click', function(e){
  e.preventDefault();

 $('.tab').removeClass('tab--active');
 $('.tabs-content').removeClass('tabs-content--active');
 $(this).addClass('tab--active');
 $($(this).attr('href')).addClass('tabs-content--active')

 $('.product-slider').slick('setPosition');
});

