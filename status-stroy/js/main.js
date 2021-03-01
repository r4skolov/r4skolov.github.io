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


$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});