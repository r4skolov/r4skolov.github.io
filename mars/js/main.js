$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this);
        blockid = $this.data('collapse');
        $this.toggleClass('active');
        $(blockid).slideToggle();
});



/* slider */



$('#slider_1').slick({
    infinite: true,
    adaptiveHeight: true,
    touchMove:true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth:true,
    prevArrow: '.arrow_prev',
    nextArrow: '.arrow_next',
})
$("#slider_1").on('afterChange', function(event, slick, currentSlide){
    $(".countsSlides").text(currentSlide + 1);
 });


/*
 window.addEventListener("resize", function() {
    if (window.innerWidth < 600) {
      $('#slider_1').slick('unslick');
      sliderIsLive = false;
    }
    else {
      if (sliderIsLive) {
        $('#slider_1').slick();
        sliderIsLive = true;
      }
    }
  });
*/

 $('.teacher_slider').slick({
    infinite: true,
    adaptiveHeight: true,
    touchMove:true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth:true,
    prevArrow: '.teacher_btn-prev',
    nextArrow: '.teacher_btn-next',
})
$(".teacher_slider").on('afterChange', function(event, slick, currentSlide){
    $(".countsSlides_2").text(currentSlide + 1);
 });


 $('.concerts_slider').slick({
    infinite: true,
    adaptiveHeight: true,
    touchMove:true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth:true,
    prevArrow: '.concerts_btn-prev',
    nextArrow: '.concerts_btn-next',
})

$(".concerts_slider").on('afterChange', function(event, slick, currentSlide){
    $(".countsSlides_3").text(currentSlide + 1);
 });
