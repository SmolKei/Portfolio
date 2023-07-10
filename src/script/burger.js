"use strict";

const burger  = document.querySelector('.burgerbox');
const cross = document.querySelector('.burger');
const menu = document.querySelector('ul');
const navbar = document.querySelector('.navbar');
// const cmod  = document.querySelector('.colormod');
const menu1  = document.querySelectorAll('li:not(.colormod)');
burger.addEventListener("click", function() {
    navbar.classList.toggle('open');
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
        // cmod.style.display = "none";
    }
});
burger.addEventListener("transitionend", function(e) {
    if(e.propertyName !== "left")return;
    if(this.style.left === "")
    {
        this.classList.remove("cross");
    }
})
