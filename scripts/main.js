
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
    arrows: true,
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