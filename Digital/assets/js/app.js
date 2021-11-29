(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burgerMenu = _interopRequireDefault(require("./components/burger-menu"));

var _tabs = _interopRequireDefault(require("./components/tabs"));

var _slider = _interopRequireDefault(require("./components/slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ACTIVE_CLASS = "active";

(function ($) {
  // When DOM is ready
  $(function () {
    //const accordions = new Accordion();
    _burgerMenu["default"].init(); // let timerId;


    _tabs["default"].init();

    _slider["default"].init();

    new fullpage('#fullpage', {
      scrollSpeed: 1500,
      verticalCentered: true,
      controlArrows: false,
      //options here
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      normalScrollElements: '.scroll-wrap',
      // autoScrolling: true,
      // scrollHorizontally: true
      // anchors: anchorsPage,
      // slidesNavigation: true,
      // scrollingSpeed: 1000,
      afterLoad: function afterLoad() {
        $('.wrapper').addClass('animate');
      },
      onLeave: function onLeave(origin, destination, direction) {
        // if (timerId) {
        //   clearTimeout(timerId);
        // }
        var lastSlide = document.querySelector(".swiper-slide-active.last-slide");

        if (lastSlide && direction === "down") {
          return false;
        }
      }
    });
    var bullets = document.querySelectorAll(".swiper-pagination-bullet");
    bullets.forEach(function (item, index) {
      item.addEventListener("click", function (event) {
        document.querySelector('.js-burger-open').classList.remove('active');
        document.querySelector('.js-burger').classList.remove('active');
        document.querySelector('body').classList.remove('overflow');
        fullpage_api.moveTo('firstPage'); // new Promise(resolve => {
        //     timerId = setTimeout(() => {
        //       resolve();
        //     }, 1500);
        //   })
        //   .then(() => {
        //     fullpage_api.moveTo('firstPage');
        //   });
      });
    });
    var backBtn = document.querySelectorAll(".back-link");
    backBtn.forEach(function (item) {
      item.addEventListener("click", function () {
        fullpage_api.moveTo('firstPage');
      });
    });
    var ACTIVE_CLASS = "active";
    var PLACEHOLDER_VISIBLE_MS = 2000; // function activatePlaceholder(placeholderNode) {
    //   // if (!placeholderNode.classList.contains("anim-wrap")) {
    //   //   return;
    //   // }
    //   placeholderNode.classList.add(ACTIVE_CLASS);
    //   placeholderNode.style.cssText = `
    //     z-index: 2;
    //     opacity: 0;
    //   `;
    //   if (placeholderNode.nextElementSibling) {
    //     placeholderNode.nextElementSibling.style.cssText = `
    //     z-index: ${String(mainWrapChildren.length + 1)};
    //     opacity: 1;
    //   `;
    //   }
    //   setTimeout(() => {
    //     placeholderNode.classList.remove(ACTIVE_CLASS);
    //   }, PLACEHOLDER_VISIBLE_MS);
    // }

    var nextSlideBtns = document.querySelectorAll(".button-next");
    var mainWrap = document.querySelector(".main-wrap2");
    var mainWrapChildren = mainWrap.children;
    nextSlideBtns.forEach(function (elem) {
      return elem.addEventListener("click", function (event) {
        fullpage_api.moveTo('firstPage');
        var generalWrap = event.target.closest(".general-wrap"); // const nextPlaceholder = placeholderWrap.nextElementSibling;
        // activatePlaceholder(generalWrap);

        generalWrap.classList.add(ACTIVE_CLASS);
        generalWrap.style.cssText = "\n        z-index: 2;\n        opacity: 0;\n      ";

        if (generalWrap.nextElementSibling) {
          generalWrap.nextElementSibling.style.cssText = "\n        z-index: ".concat(String(mainWrapChildren.length + 1), ";\n        opacity: 1;\n      ");
        }

        setTimeout(function () {
          generalWrap.classList.remove(ACTIVE_CLASS);
        }, PLACEHOLDER_VISIBLE_MS);
      });
    });
    var swiperBullets = document.querySelectorAll(".swiper-pagination-bullet");
    swiperBullets.forEach(function (elem, index) {
      elem.setAttribute("data-anim-placeholder", "placeholder" + index);
      elem.addEventListener("click", function (event) {
        var placeholderDepend = event.target.dataset.animPlaceholder;
        var targetPlaceholder = document.querySelector("[data-attach-placeholder=".concat(placeholderDepend, "]")); // activatePlaceholder(targetPlaceholder);

        targetPlaceholder.classList.add(ACTIVE_CLASS);

        _toConsumableArray(mainWrapChildren).forEach(function (elem) {
          return elem.style.cssText = "\n          z-index: 2;\n          opacity: 0;\n        ";
        });

        if (targetPlaceholder.nextElementSibling) {
          targetPlaceholder.nextElementSibling.style.cssText = "\n          z-index: ".concat(String(mainWrapChildren.length + 1), ";\n          opacity: 1;\n        ");
        }

        setTimeout(function () {
          targetPlaceholder.classList.remove(ACTIVE_CLASS);
        }, PLACEHOLDER_VISIBLE_MS);
      });
    }); // function resizeHandler() {
    //   const scrollWrap = document.querySelector(".scroll-wrap");
    //   scrollWrap.style.height = scrollWrap.clientHeight + "px";
    // }
    // resizeHandler();
    // window.addEventListener("resize", resizeHandler);
    // methods
    // fullpage_api.setAllowScrolling(false);
  });
})(jQuery);

},{"./components/burger-menu":2,"./components/slider":3,"./components/tabs":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BURGER = document.querySelector('.js-burger-open');
var NAV = document.querySelector('.js-burger');
var BODY = document.querySelector('body');
var CLASS_OVERFLOW = 'overflow';
var CLASS_ACTIVE = 'active';

var burgerMenu = function () {
  var burgeInit = function burgeInit() {
    if (!BURGER) return;
    BURGER.addEventListener('click', function (e) {
      if (!e.currentTarget.classList.contains('active')) {
        openBurger();
      } else {
        closeBurger();
      }
    });
  };

  var openBurger = function openBurger() {
    BURGER.classList.add(CLASS_ACTIVE);
    NAV.classList.add(CLASS_ACTIVE);
    BODY.classList.add(CLASS_OVERFLOW);
  };

  var closeBurger = function closeBurger() {
    BURGER.classList.remove(CLASS_ACTIVE);
    NAV.classList.remove(CLASS_ACTIVE);
    BODY.classList.remove(CLASS_OVERFLOW);
  };

  var init = function init() {
    burgeInit();
  };

  return {
    init: init,
    closeBurger: closeBurger
  };
}();

var _default = burgerMenu;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ACTIVE_CLASS = "active";
var DELAY_INACTIVE = 2000;

var swiperSlider = function () {
  var swiperEvents = new Swiper('.js-events-slider', {
    slidesPerView: 1,
    spaceBetween: 60,
    speed: 800,
    breakpoints: {
      320: {
        spaceBetween: 40,
        slidesPerView: 1.5
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 2.5
      }
    }
  });
  var swiperAbout = new Swiper('.js-about-slider', {
    speed: 800,
    breakpoints: {
      320: {
        spaceBetween: 40,
        slidesPerView: 1.5
      },
      1024: {
        spaceBetween: 80,
        slidesPerView: 0.8
      }
    }
  });
  var menu = ['Компания', 'Проекты', 'Контакты']; // const nextSlideBtns = document.querySelectorAll(".button-next");
  // nextSlideBtns.forEach( item => item.addEventListener("click", event => {
  //   const animWrap = event.target.closest(".anim-wrap");
  //   if (animWrap) {
  //     animWrap.classList.add(ACTIVE_CLASS);
  //     // setTimeout(() => {
  //     //   animWrap.classList.remove(ACTIVE_CLASS);
  //     // }, DELAY_INACTIVE);
  //   }
  // } ));

  var mySwiper = new Swiper('.mySwiper', {
    // simulateTouch: false,
    allowTouchMove: false,
    speed: 1500,
    navigation: {
      nextEl: ".button-next"
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + menu[index] + '</span>';
      }
    }
  });

  var init = function init() {};

  return {
    init: init
  };
}();

var _default = swiperSlider;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CLASS_ACTIVE = 'active';
var wrapList = document.querySelectorAll('.js-tabs');

var tabs = function () {
  var tabsInit = function tabsInit() {
    if (!wrapList.length) return;
    wrapList.forEach(function (wrap) {
      return attachEvents(wrap);
    });

    function attachEvents(parent) {
      var tabList = parent.querySelectorAll('[data-tab]'),
          contentList = parent.querySelectorAll('[data-content]');
      if (!tabList.length) return;
      tabList.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          tabList.forEach(function (btn) {
            return btn.classList.remove(CLASS_ACTIVE);
          });
          e.currentTarget.classList.add(CLASS_ACTIVE);
          var idContent = e.currentTarget.dataset.tab;

          if (idContent === 'all') {
            contentList.forEach(function (content) {
              return content.classList.add(CLASS_ACTIVE);
            });
          } else {
            var currentContentList = document.querySelectorAll("[data-content=\"".concat(idContent, "\"]"));
            contentList.forEach(function (content) {
              return content.classList.remove(CLASS_ACTIVE);
            });
            currentContentList.forEach(function (content) {
              return content.classList.add(CLASS_ACTIVE);
            });
          }
        });
      });
    }
  };

  var init = function init() {
    tabsInit();
  };

  return {
    init: init
  };
}();

var _default = tabs;
exports["default"] = _default;

},{}]},{},[1]);
