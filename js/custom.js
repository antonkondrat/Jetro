$(function () {

   $(".slider__inner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      speed: 500,
      asNavFor: ".slider__nav"
   });

   $(".slider__nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: ".slider__inner",
      focusOnSelect: true,
      variableWidth: true
   });

});
