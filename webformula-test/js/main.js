"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accardion'); //находим все аккардионы

  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var self = e.currentTarget;
      var control = self.querySelector('.accardion__control'); //

      var content = self.querySelector('.accardion__content'); //то что будем открывать

      self.classList.toggle('open'); // если открыт аккордеон

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var modal = new GraphModal({
    isOpen: function isOpen(modal) {
      console.log('opened');
    },
    isClose: function isClose() {
      console.log('closed');
    }
  }); 
});
"use strict";

//получаем кнопки 
var tabsBtn = document.querySelectorAll('.tabs__btn'); //получаем табы

var tabsItems = document.querySelectorAll('.tabs__item'); //объвяляем функцию с метода форич 

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    var currentBtn = item; //переменная самой кнопки

    var tabId = currentBtn.getAttribute("data-tab"); //получаем атрибуты в переменную

    var currentTab = document.querySelector(tabId); //обращаемся к переменной

    if (!currentBtn.classList.contains('active')) {
      //функция удаления класса активе у кнопок
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      }); //добавляем класс актив

      currentBtn.classList.add('active'); //объявляем функцию айтем с помощью метода forEach для удаления классов 

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      }); //добавляем класс актив

      currentTab.classList.add('active');
    }
  });
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
