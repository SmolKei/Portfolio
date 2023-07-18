"use strict";

const burger = document.querySelector('.burgerbox');
const cross = document.querySelector('.burger');
const menu = document.querySelector('ul');
const navbar = document.querySelector('.navbar');
const menu1 = document.querySelectorAll('li:not(.colormod)');
const cv = document.querySelector('.cv');
const menubtn = document.querySelectorAll('li:not(.contactbtn) > a');

let isAnimating = false; // Flag variable to track animation state

burger.addEventListener("click", function () {
  if (isAnimating) {
    return; // Ignore click if animation is in progress
  }

  isAnimating = true; // Set animation state to true

  navbar.classList.toggle('open');
  document.body.classList.toggle('open');
burger.animate({ opacity: [0, 0, 1] }, { duration: 2000, fill: 'forwards' });

  if (!this.classList.contains("cross")) {
    this.classList.add("cross");
  } else {
    burger.style.left = "";
    burger.style.transform = "";
    menu1.forEach(item => {
      item.style.width = "";
    });

    menu.style.width = "";
  }
});

cross.addEventListener("transitionend", function (e) {
  if (e.propertyName !== "transform") return;
  if (burger.classList.contains("cross")) {
    burger.style.transform = "rotate(720deg)";
    burger.style.left = "1.5rem";
    menu1.forEach(item => {
      item.style.width = "calc(90vw - 1rem)";
    });
    menu.style.width = "100%";
  }
});

burger.addEventListener("transitionend", function (e) {
  if (e.propertyName !== "left") return;
  if (this.style.left === "") {
    this.classList.remove("cross");
  }
  isAnimating = false; // Reset animation state to false
});

cv.addEventListener("click", () => {
  window.open('./public/assets/image/cv1.pdf');
});

menubtn.forEach(button => {
  button.addEventListener('click', () => {
    if (isAnimating) {
      return; // Ignore click if animation is in progress
    }

    isAnimating = true; // Set animation state to true

    navbar.classList.remove('open');
    menu.style.width = "";
    menu1.forEach(item => {
      item.style.width = "";
    });
    document.body.classList.remove('open');
    burger.style.left = "";
    burger.style.transform = "";
    burger.animate({ opacity: [0, 0, 1] }, { duration: 2000, fill: 'forwards' });
  });
});