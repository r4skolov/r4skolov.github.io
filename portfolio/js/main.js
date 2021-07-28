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


document.querySelector('.themetoggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML()
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
   
      document.querySelector('.themetoggle .day').classList.add('theme-switch__active');
      document.querySelector('.themetoggle .night').classList.remove('theme-switch__active');
     
    }
    else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.themetoggle .day').classList.remove('theme-switch__active');
      document.querySelector('.themetoggle .night').classList.add('theme-switch__active');
    }
  } catch (err) { }
}

addDarkClassToHTML();