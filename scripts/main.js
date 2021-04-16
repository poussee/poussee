//scrollreveal
ScrollReveal().reveal('.home-title');
ScrollReveal().reveal('.home-text');
ScrollReveal().reveal('.foto-quem', { delay: 500 });
ScrollReveal().reveal('.foto-equipe', { delay: 500 });
ScrollReveal().reveal('.notebook', { delay: 500 });
ScrollReveal().reveal('.img-brands', { delay: 500 });

// Carousel montadoras

$(document).ready(function() {
  $(".montadoras").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="left-arrow"></i>',
    nextArrow: '<i class="right-arrow"></i>',
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