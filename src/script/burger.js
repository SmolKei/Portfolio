"use strict";

const burger  = document.querySelector('.burgerbox');
const cross = document.querySelector('.burger');
const menu = document.querySelector('ul');
const navbar = document.querySelector('.navbar');
const menu1  = document.querySelectorAll('li:not(.colormod)');
const cv  = document.querySelector('.cv');

burger.addEventListener("click", function() {
    navbar.classList.toggle('open');
    document.body.classList.toggle('open');
    burger.animate({opacity: [0, 1]}, {duration: 2700, fill: 'forwards'});
    if(!this.classList.contains("cross"))
        this.classList.add("cross");
        
    else
    {
        burger.style.left = "";
        burger.style.transform = "";
        menu1.forEach(item => {

            item.style.width = "";
        })
        menu.style.width = "";
    }
});
cross.addEventListener("transitionend", function(e) {
    if(e.propertyName !== "transform")return;
    if(burger.classList.contains("cross"))
    {
        burger.style.transform = "rotate(720deg)";
        burger.style.left = "1.5rem";
        menu1.forEach(item => {

            item.style.width = "calc(90vw - 1rem)";
        })
        menu.style.width = "100%";
    }
});
burger.addEventListener("transitionend", function(e) {
    if(e.propertyName !== "left")return;
    if(this.style.left === "")
    {
        this.classList.remove("cross");
    }
})

cv.addEventListener("click", () => {
    window.open('./public/assets/image/dots-top-menu-mobile.png').onload;
})