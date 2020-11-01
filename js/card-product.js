var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 20,
    thumbs: {
      swiper: galleryThumbs
    }
  });