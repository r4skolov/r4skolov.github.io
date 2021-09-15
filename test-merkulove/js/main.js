"use strict";
function disableScroll() {
  var pagePosition = window.scrollY;
  document.body.classList.add('scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
}

function enableScroll() {
  var pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
}

var burger = document.querySelector('.burger');
var menu = document.querySelector('.header__nav');
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');

  if (burger.classList.contains('burger--active')) {
    disableScroll();
  } else {
    enableScroll();
  }
});
"use strict";

var swiper = new Swiper('.hero__slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var slider3 = document.querySelector('.products-slider');
var mySwiper;

function mobileSwiper() {
  if (window.innerWidth <= 640 && slider3.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider3, {
      wrapperClass: 'products-slider__wrapper',
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        641: {
          slidesPerView: 1
        }
      }
    });
    slider3.dataset.mobile = 'true';
  }

  if (window.innerWidth > 640) {
    slider3.dataset.mobile = 'false';

    if (slider3.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

;
mobileSwiper();
window.addEventListener('resize', function () {
  mobileSwiper();
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
