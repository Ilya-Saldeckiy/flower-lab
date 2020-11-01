const slider = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let mySwiperNav = new Swiper(sliderNav, {
watchSlidesVisibility: true,
watchSlidesProgress: true,
spaceBetween: 400,
simulateTouch:false,
loop: true,
direction: 'horizontal',
pagination: {
el: '.swiper-pagination',
clickable: true,
},
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
})

let mySwiper = new Swiper(slider, {
spaceBetween: 600,
simulateTouch:false,
loop: true,
pagination: {
el: '.swiper-pagination',
clickable: true,
},
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
thumbs: {
swiper: mySwiperNav,
}
})