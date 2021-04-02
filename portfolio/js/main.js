document.body.onload = function() {
    setTimeout(function() {
      var preloader = document.getElementById('page-preloader');
      if( !preloader.classList.contains('done'))
      {
        preloader.classList.add('done');
        document.body.classList.remove('hide-scroll');
      }
      
    },1000);
    $('.preloader').on('wheel', function (e) {
      e.stopPropagation();
    })
};

AOS.init({
  disable: 'moblle' 
});