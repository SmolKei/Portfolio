"use strict";

const swiper = new Swiper('.swipe-content', {
    // paramètre défaut
    slidesPerView: 5,
    spaceBetween: 15,
    // direction: 'horizontal',
    loop: true,
    centerSlide: "true",
    effect: 'flip',
    grabCursor: "true",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: 'bullets',
        dynamicBullets: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // define width
        0: {
            effect: 'flip',
    flipEffect: {
        slideShadows : false,
    },
        },
        768: {
            effect: 'fade',
            fadeEffect: {
              crossFade: true
            },
        },
        1024: {
            slidesPerView: 8,
        },
    },
});