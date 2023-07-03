"use strict";

const swiper = new Swiper('.swiper', {
    // paramètre défaut
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    centerSlides: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },
    renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
                ' of ' +
                '<span class="' + totalClass + '"></span>';
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: ".swiper-button-disabled"
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