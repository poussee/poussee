// Carousel marcas

 $(document).ready(function(){
  $('.logomarcas').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<i class="left-arrow"></i>',
  nextArrow: '<i class="right-arrow"></i>',
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: 
  [
  {
     breakpoint: 600,
     settings: {
         infinite: true,
         arrows: true,
         dots: false,
         slidesToShow: 2,
         slidesToScroll: 2
     }
  },
  {
     breakpoint: 480,
     settings: {
         infinite: true,
         arrows: true,
         dots: false,
         slidesToShow: 1,
         slidesToScroll: 1
     }
  }
  ]
  });
});

// Carousel montadoras

$(document).ready(function() {
  $(".montadoras").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-chevron-left"></i>',
    nextArrow: '<i class="fa fa-chevron-right"></i>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});

// Carousel solucoes

$(document).ready(function() {
  $(".sistemas-boxes").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<i class="fa fa-chevron-right"></i>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});