var mySwiper = new Swiper('.swiper-container-abbout', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-abbout',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    })