$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this);
        blockid = $this.data('collapse');
        $this.toggleClass('active');
        $('.answers_toggle').toggleClass('active');
        $(blockid).slideToggle();
});



/* slider */

$(function(){ 
    $('.intro__slider').slick({
        infinite: true,
        adaptiveHeight: true,
        touchMove:true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth:false,
        autoplay: false,
        prevArrow: '.intro-btn__prev',
        nextArrow: '.intro-btn__next',
    })
    $(".intro__slider").on('afterChange', function(event, slick, currentSlide){
        $(".countsSlides_1").text(currentSlide + 1);
     });
    


 $('.teacher__slider').slick({
    infinite: true,
    adaptiveHeight: true,
    touchMove:true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth:true,
     prevArrow: '.teacher__btn',
    nextArrow:  '.teacher__btn ',
    })
    $(".teacher__slider").on('afterChange', function(event, slick, currentSlide){
        $(".countsSlides_2").text(currentSlide + 1);
    });

    $('.concerts__slider').slick({
        infinite: true,
        adaptiveHeight: true,
        touchMove:true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth:true,
        prevArrow: ' .concerts__btn',
        nextArrow: ' .concerts__btn',
    })

    $(".concerts__slider").on('afterChange', function(event, slick, currentSlide){
        $(".countsSlides_3").text(currentSlide + 1);
     });
});
 





$("#burger").on("click", function(event) {
    event.preventDefault();
  
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    $('body').toggleClass('lock');
  
    $('#nav').on('wheel', function (e) {
      e.stopPropagation();
    });
  });