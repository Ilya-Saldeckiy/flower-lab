var mySwiper = new Swiper('.swiper-container-abbout', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 800
        },
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination-abbout',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    })