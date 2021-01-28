$(document).ready(function () {
    $('.rev_slider').slick({
         dots: false,
    speed: 300,
    arrows: false,
      infinite: true,
       focusOnSelect: true,
      asNavFor: '.slider-second',
    responsive: [
    {
      breakpoint: 768,
      settings: {
   arrows: false,
        }
      }
       ]
   
  });
  $('.slider-second').slick({
    slidesToShow: 6,
  slidesToScroll: 1,
    asNavFor: '.rev_slider',
    dots: true,
    centerMode: false,
    
    focusOnSelect: true,
    variableWidth:false,
    arrows: true,
    infinite: true,
    

    responsive: [
    {
      breakpoint: 767,
        settings: {
        slidesToShow: 3,
  slidesToScroll: 1,
    arrows: true,
        }
      }
       ]

  });

});