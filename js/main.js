const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  speed: 800,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  keyboard: {
    enabled : true
  },
  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: true
  // }
});