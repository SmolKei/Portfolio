"use strict";

const swiper = new Swiper('.swipe-content', {
    // paramètre défaut
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // define width
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});