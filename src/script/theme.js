"use strict";

const theme  = document.querySelector('.colormod');
const themebtn  = document.querySelector('.colormod > span');
const button  = document.querySelectorAll('.btn');
const brand  = document.querySelector('.brand > h3 > a');
const projet  = document.querySelectorAll('.projet-description');
const mainmenu  = document.querySelector('.main-menu');

theme.addEventListener('click', ()=> {
    document.body.classList.toggle("yellow");
    button.forEach(btn  => {
        btn.classList.toggle('border');
    })
    brand.style.color = "#000";
    projet.forEach(desc => {
        desc.classList.toggle("change");
    })
    if(document.body.classList.contains("yellow")) {
        // je stroe le theme en local
        localStorage.setItem("theme", "light");
        themebtn.style.backgroundColor = "#fd0130";
        themebtn.style.borderColor = "#000f0f";
        mainmenu.style.borderColor = "transparent";
        document.documentElement.style.setProperty("--data-bgcolr", "url(./assets/image/separatorY.svg)");
        document.documentElement.style.setProperty('--data-colglitch1', "#3a381f");
        document.documentElement.style.setProperty('--data-colglitch2', "#625e1b");
        document.documentElement.style.setProperty('--data-color-lang', "#00f0ff");
        document.documentElement.style.setProperty('--data-color-menu', "transparent");
    }
    else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "dark");
        themebtn.style.backgroundColor = "";
        themebtn.style.borderColor = "";
        brand.style.color = "";
        document.documentElement.style.setProperty("--data-bgcolr", "");
        document.documentElement.style.setProperty('--data-colglitch1', "");
        document.documentElement.style.setProperty('--data-colglitch2', "");
        document.documentElement.style.setProperty('--data-color-lang', "");
        document.documentElement.style.setProperty('--data-color-menu', "");
        mainmenu.style.borderColor = "";
    }
});


// Je récupère le choix du user

let getMode = localStorage.getItem("theme");

if(getMode && getMode === "light") {
    document.body.classList.add("yellow");
}

// je cherche le thème par défaut de l'user, s'il est clair, alors j'ajoute la classe "yellow", sinon je la retire

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e)=> {
    if(e.matches) {
        document.classList.toggle("yellow");
    }
});


// -------------------------- choix de langue --------------------------


// A faire