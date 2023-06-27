"use strict";

const burger  = document.querySelector('.burgerbox');
const cross = document.querySelector('.burger');
const menu = document.querySelector('ul');
const logo = document.querySelector('.logo');
burger.addEventListener("click", function() {
    logo.classList.toggle('active');
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
});
burger.addEventListener("transitionend", function(e) {
    if(e.propertyName !== "left")return;
    if(this.style.left === "")
    {
        this.classList.remove("cross");
    }
})
