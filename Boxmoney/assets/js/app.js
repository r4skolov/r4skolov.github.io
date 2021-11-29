(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _accordion = _interopRequireDefault(require("./components/accordion"));

var _tabs = _interopRequireDefault(require("./components/tabs"));

var _popup = _interopRequireDefault(require("./components/popup"));

var _burgerMenu = _interopRequireDefault(require("./components/burger-menu"));

var _scrollTo = _interopRequireDefault(require("./components/scroll-to"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
(function ($) {
  // When DOM is ready
  $(function () {
    _accordion["default"].init();

    _tabs["default"].init();

    _popup["default"].init();

    _burgerMenu["default"].init();

    _scrollTo["default"].init();

    $('.js-tabs-btn').on('click', function () {
      var idParent = $(this).closest('.ui-block').attr('id');

      _scrollTo["default"].top(idParent);
    });
  });
})(jQuery);

},{"./components/accordion":2,"./components/burger-menu":3,"./components/popup":4,"./components/scroll-to":5,"./components/tabs":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CLASS_TITLE = 'js-accordion-open';
var CLASS_CONTENT = 'js-content-accordion';
var CLASS_DESCRIPTION = 'js-accordion-description';
var CLASS_ACTIVE = 'active';
var CLASS_ACCORDION_ALL = 'js-accordion-all';
var ACCORDION_LIST = document.querySelectorAll('.js-accordion');

var accordion = function () {
  var accordionInit = function accordionInit() {
    ACCORDION_LIST.forEach(function (accordion) {
      var contentAccordion = accordion.querySelectorAll(".".concat(CLASS_CONTENT));
      var titleAccordion = accordion.querySelectorAll(".".concat(CLASS_TITLE));

      if (accordion.classList.contains(CLASS_ACCORDION_ALL)) {
        titleAccordion.forEach(function (title) {
          title.addEventListener('click', function () {
            showAccordion(this.dataset.accordion, contentAccordion, true);
            this.classList.toggle(CLASS_ACTIVE);
          });
        });
      } else {
        titleAccordion.forEach(function (title) {
          title.addEventListener('click', function (_ref) {
            var target = _ref.target;
            showAccordion(target.dataset.accordion, contentAccordion, false);

            if (target.classList.contains(CLASS_ACTIVE)) {
              title.classList.remove(CLASS_ACTIVE);
            } else {
              titleAccordion.forEach(function (title) {
                return title.classList.remove(CLASS_ACTIVE);
              });
              title.classList.add(CLASS_ACTIVE);
            }
          });
        });
      }
    });

    function getDesctiptionHeight(currentAccordion) {
      var description = currentAccordion.querySelector(".".concat(CLASS_DESCRIPTION));
      var height = description.offsetHeight;
      var marginTop = +window.getComputedStyle(description).marginTop.replace('px', '');
      var marginBottom = +window.getComputedStyle(description).marginBottom.replace('px', '');
      return height + marginTop + marginBottom;
    }

    function showAccordion(toggle, contentAccordion, all) {
      var currentAccordion = document.getElementById(toggle);

      if (currentAccordion.classList.contains(CLASS_ACTIVE)) {
        currentAccordion.classList.remove(CLASS_ACTIVE);
        currentAccordion.style.maxHeight = '0';
      } else {
        var heightDescription = getDesctiptionHeight(currentAccordion);

        if (!all) {
          contentAccordion.forEach(function (content) {
            content.classList.remove(CLASS_ACTIVE);
            content.style.maxHeight = '0';
          });
        }

        currentAccordion.classList.add(CLASS_ACTIVE);
        currentAccordion.style.maxHeight = heightDescription + 'px';
      }
    }

    ;
  };

  var init = function init() {
    if (ACCORDION_LIST.length > 0) {
      accordionInit();
    }
  };

  return {
    init: init
  };
}();

var _default = accordion;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
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
    BURGER.addEventListener('click', function () {
      BURGER.classList.toggle(CLASS_ACTIVE);
      NAV.classList.toggle(CLASS_ACTIVE);
      BODY.classList.toggle(CLASS_OVERFLOW);
    });
  };

  var init = function init() {
    burgeInit();
  };

  return {
    init: init
  };
}();

var _default = burgerMenu;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var POPUP_SHOW = document.querySelectorAll('.show-popup');
var POPUPS = document.querySelectorAll('[data-popup]');
var OVERLAY = document.querySelector('.js-overlay');
var BODY = document.querySelector('body');
var CLOSE_BTN = document.querySelectorAll('.js-popup-close');
var CLASS_ACTIVE = 'active';
var CLASS_OVERFLOW = 'overflow';

var popups = function () {
  if (!POPUPS.length) return;

  function fadeOut(el) {
    var changeOpasity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -0.8;
    if (!el) return;
    requestAnimationFrame(function anim() {
      var opacity = +window.getComputedStyle(el).opacity;

      if (opacity <= 0) {
        el.style.opacity = 0;
        el.style.display = 'none';
        el.classList.remove(CLASS_ACTIVE);
        return;
      }

      el.style.opacity = opacity + changeOpasity;
      if (opacity > 0) requestAnimationFrame(anim);
    });
  }

  function fadeIn(el) {
    var changeOpasity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.8;
    if (!el) return;
    el.style.display = 'block';
    el.classList.add(CLASS_ACTIVE);
    requestAnimationFrame(function anim() {
      var opacity = +window.getComputedStyle(el).opacity;

      if (opacity >= 1) {
        el.style.opacity = 1;
        return;
      }

      el.style.opacity = opacity + changeOpasity;
      if (opacity < 1) requestAnimationFrame(anim);
    });
  }

  var hidePopup = function hidePopup() {
    fadeOut(OVERLAY);
    BODY.classList.remove(CLASS_OVERFLOW);
    POPUPS.forEach(function (popup) {
      return fadeOut(popup);
    });
  };

  var showPopup = function showPopup(target) {
    fadeIn(OVERLAY);
    BODY.classList.add(CLASS_OVERFLOW);
    var currentPopup = document.querySelector("[data-popup=\"".concat(target, "\"]"));
    fadeIn(currentPopup);
  };

  var showPopupInit = function showPopupInit() {
    if (POPUP_SHOW.length) {
      POPUP_SHOW.forEach(function (opener) {
        opener.addEventListener('click', function () {
          showPopup(this.dataset.trigger);
        });
      });
    }

    if (OVERLAY) {
      OVERLAY.addEventListener('click', function () {
        hidePopup();
      });
    }

    if (CLOSE_BTN.length) {
      CLOSE_BTN.forEach(function (closure) {
        closure.addEventListener('click', function () {
          hidePopup();
        });
      });
    }
  };

  var init = function init() {
    if (POPUPS.length) {
      showPopupInit();
    }
  };

  return {
    init: init,
    showPopup: showPopup
  };
}();

var _default = popups;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// const ACTIVE = 'active';
var NAV_LINKS = document.querySelectorAll('.js-link-to');

var scrollTo = function () {
  var initScroll = function initScroll() {
    if (!NAV_LINKS.length) return;
    NAV_LINKS.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = e.currentTarget.getAttribute('href').substring(1);
        top(href);
      });
    });
  };

  var top = function top(id) {
    var scrollTarget = document.getElementById(id);
    if (!scrollTarget) return;
    var topOffset = 0;
    var fixHeader = document.querySelector('.js-fixed-header');

    if (fixHeader) {
      topOffset = fixHeader.offsetHeight;
    }

    var elementPosition = scrollTarget.getBoundingClientRect().top;
    var offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  var init = function init() {
    initScroll();
  };

  return {
    init: init,
    top: top
  };
}();

var _default = scrollTo;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CLASS_ACTIVE = 'active';

var tabs = function () {
  var tabsInit = function tabsInit() {
    var wrapList = document.querySelectorAll('.js-tabs');
    if (!wrapList.length) return;
    wrapList.forEach(function (wrap) {
      return attachEvents(wrap);
    });

    function attachEvents(parent) {
      var tabList = parent.querySelectorAll('.js-tabs-btn'),
          contentList = parent.querySelectorAll('[data-content]');
      if (!tabList.length) return;
      tabList.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          tabList.forEach(function (btn) {
            return btn.classList.remove(CLASS_ACTIVE);
          });
          contentList.forEach(function (content) {
            return content.classList.remove(CLASS_ACTIVE);
          });
          e.currentTarget.classList.add(CLASS_ACTIVE);
          var idContent = e.currentTarget.dataset.tab;
          var content = document.querySelector("[data-content=\"".concat(idContent, "\"]"));
          content.classList.add(CLASS_ACTIVE);
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
