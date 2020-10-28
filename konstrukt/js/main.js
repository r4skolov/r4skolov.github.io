
$(window).on('load resize', function() {
  if ($(window).width() < 420) {
    $('#item:not(.slick-initialized)').slick({
      centerMode: true,
      arrows:false,
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      touchMove:true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth:true
    });
  } else {
    $("#item.slick-initialized").slick("unslick");
  }
});



$(function() {


  //Скрол хедер//
var header = $("#header"),
    mainH = $("#four").innerHeight ();
    scrollOffset = 0;

$(window).on("scroll", function() {

  scrollOffset = $(this).scrollTop();

  if(scrollOffset > mainH) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }

});




//Скрол к блоку//

$("[data-scroll").on("click", function(event) {
    event.preventDefault();


    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);    

});


//Бургер меню//

$("#nav_toggle").on("click", function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

});

});
