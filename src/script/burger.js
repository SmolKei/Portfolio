"use strict";

const burger  = document.querySelector('.burgerbox');
const cross = document.querySelector('.burger');
const menu = document.querySelector('ul');
const navbar = document.querySelector('.navbar');
const body  = document.querySelector('body');
burger.addEventListener("click", function() {
    navbar.classList.toggle('open');
    burger.animate({opacity: [0, 1]}, {duration: 2700, fill: 'forwards'});
    if(!this.classList.contains("cross"))
        this.classList.add("cross");
        
    else
    {
        burger.style.left = "";
        burger.style.transform = "";
        menu.style.width = "";
        
    }
});
cross.addEventListener("transitionend", function(e) {
    if(e.propertyName !== "transform")return;
    if(burger.classList.contains("cross"))
    {
        burger.style.transform = "rotate(720deg)";
        burger.style.left = "5%";
        menu.style.width = "100%";
    }
    else {
        burger.animate({opacity: [0, 1]}, {duration: 2000, fill: 'forwards'});
    }
});
burger.addEventListener("transitionend", function(e) {
    if(e.propertyName !== "left")return;
    if(this.style.left === "")
    {
        this.classList.remove("cross");
    }
})
