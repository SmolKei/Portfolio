"use strict";

// const scrollElements = document.querySelector(".boxglitch");
// const cont = document.querySelector('.container');
// const slideleft  = document.querySelector('.slide-left');
// const slideright  = document.querySelector('.slide-right');



// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const elementOutofView = (el) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop > (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// // const anime1 = new Animation(keyframes, timing);

// const displayScrollElement = (element) => {
  

// };

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
//   if(element.classList.contains("slide-left") || element.classList.contains("slide-right"))
//   {
    
//   }
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//       displayScrollElement(el);
//     } else if (elementOutofView(el)) {
//       hideScrollElement(el)
//     }
//   })
// }

// window.addEventListener("scroll", () => { 
//   handleScrollAnimation();
// });
// const comp  = document.querySelector('.competences');
// const anime  = document.querySelector('.js-scroll');

// window.addEventListener("scroll", () => {
//     anime.style.opacity = 0 - comp.getBoundingClientRect().top / 1250;
//     anime.style.transform = `translate3d(0, ${150 + comp.getBoundingClientRect().top / 15}px, 0)`
//     console.log(comp.getBoundingClientRect());
// })

// window.addEventListener("scroll", () => {
//   var pos = window.scrollY;
// console.log(pos);
//   slideleft.style.transform = `translate3d(0px, ${pos}, 0px)`;
// })

// const observer= new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//       entry.target.style.transform = 'translate3d(0px, 0px, 0px';
//     } else {
//       entry.target.style.opacity = 0;
//       entry.target.style.transform = 'translate3d(0px, 150px, 0px';
//     }
//   })
// },{root: cont,
//   rootMargin: "200px",
// });
// observer.observe(scrollElement

// window.addEventListener("scroll", fade);

// function fade(e) {
//   document.querySelectorAll('.js-scroll').forEach(element => {
//     const y = (window.innerHeight - e.pageY)/1

//     element.style.transform = `translate3d(0px, ${y}px, 0px)`;
//   });
// }