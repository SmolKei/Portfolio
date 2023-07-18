"use strict";

const theme  = document.querySelector('.colormod');
const themebtn  = document.querySelector('.colormod > span');
const button  = document.querySelectorAll('.btn');
const brand  = document.querySelector('.brand > h3 > a');
const projet  = document.querySelectorAll('.projet-description');
const mainmenu  = document.querySelector('.main-menu');
const submenu  = document.querySelector('.sublang');
const langmenu  = document.querySelector('.lang');

function setytheme() {
   
    brand.style.color = "#000";
    themebtn.style.backgroundColor = "#fd0130";
        themebtn.style.borderColor = "#000f0f";
        mainmenu.style.borderColor = "transparent";
        document.documentElement.style.setProperty("--data-bgcolr", "url(./assets/image/separatorY.svg)");
        document.documentElement.style.setProperty('--data-colglitch1', "#3a381f");
        document.documentElement.style.setProperty('--data-colglitch2', "#625e1b");
        document.documentElement.style.setProperty('--data-color-lang', "#00f0ff");
        document.documentElement.style.setProperty('--data-color-menu', "transparent");
};


theme.addEventListener('click', ()=> {
    document.body.classList.toggle("yellow");
    button.forEach(btn  => {
        btn.classList.toggle('border');
    })
    projet.forEach(desc => {
        desc.classList.toggle("change");
    })
    if(document.body.classList.contains("yellow")) {
        // je store le theme en local
        localStorage.setItem("theme", "light");
        submenu.style.borderColor = "#00f0ff"
        setytheme();
    }
    else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "dark");
        themebtn.style.backgroundColor = "";
        themebtn.style.borderColor = "";
        brand.style.color = "";
        submenu.style.borderColor = "";
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
    button.forEach(btn  => {
        btn.classList.toggle('border');
    })
    projet.forEach(desc => {
        desc.classList.toggle("change");
    })
    setytheme();
}

// je cherche le thème par défaut de l'user, s'il est clair, alors j'ajoute la classe "yellow", sinon je la retire

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e)=> {
    if(e.matches) {
        document.body.classList.toggle("yellow");
    }
});


// -------------------------- choix de langue --------------------------

const lang = {
    en: {
      intro1: `I'm a junior <br><span id="swap"></span> <span class="bl">|</span>developper.`,
      intro2: "Currently in a DWWM course, I wish to increase my skills in the Web and Mobile Web development industry.",
      cv: "Download cv",
      contact: "contact me",
      title1: "Home",
      title2: "Projects",
      title3: "Skills",
      button: "see",
      next: "next",
      prev: "previous"
    }
  };
  
  // Function to set the language in localStorage
  function setLanguage(language) {
    localStorage.setItem('language', language);
  }
  
  // Function to get the language from localStorage
  function getLanguage() {
    return localStorage.getItem('language');
  }
  
  // Function to update the language display on the page
  function updateLanguageDisplay() {
    const languageDisplay = document.getElementById('language-display');
    const language = getLanguage();
    if (language === 'en') {
      languageDisplay.textContent = 'EN';
      updateContent(lang[language]);
      document.documentElement.setAttribute('lang', 'en');
    } else {
      languageDisplay.textContent = 'FR';
      updateContent(null); // Revert to original HTML content
      document.documentElement.setAttribute('lang', 'fr');
    }
  }
  
  // Function to update the HTML content based on the selected language
  function updateContent(languageData) {
    const introElement = document.querySelector('.intro');
    const introElement2 = document.querySelector('.intro2');
    const langSpan = document.querySelector('.lang span');
    const li1  = document.querySelector('.main-menu > li:nth-child(1) > a');
    const li2  = document.querySelector('.main-menu > li:nth-child(2) > a');
    const li3  = document.querySelector('.main-menu > li:nth-child(3) > a');
    const cvbtn  = document.querySelector('.cv > p');
    const ctcbtn  = document.querySelector('.contact > p');
    const projettitle  = document.querySelector('.project-title > h2');
    const skilltitle  = document.querySelector('.skill-title > h2');
    const nextbtn  = document.querySelector('.swiper-button-next > p');
    const prevbtn  = document.querySelector('.swiper-button-prev > p');
    const voir  = document.querySelectorAll('.voir > p > a');

    if (languageData) {
      introElement.innerHTML = `${languageData.intro1}`;
      introElement2.innerHTML = `${languageData.intro2}`;
      langSpan.textContent = document.documentElement.lang;
      li1.innerHTML = `${languageData.title1}`;
      li2.innerHTML = `${languageData.title2}`;
      li3.innerHTML = `${languageData.title3}`;
      cvbtn.innerHTML = `${languageData.cv}`;
      ctcbtn.innerHTML = `${languageData.contact}`;
      projettitle.innerHTML = `${languageData.title2}`;
      skilltitle.innerHTML = `${languageData.title3}`;
      nextbtn.innerHTML = `${languageData.next}`;
      prevbtn.innerHTML = `${languageData.prev}`;
      voir.forEach(see => {
        see.innerHTML = `${languageData.button}`;
      });
    } 
  }
  
  // Function to handle the language change event
  function handleLanguageChange(event) {
    event.preventDefault();
    const selectedLanguage = event.target.getAttribute('href').substring(1);
    setLanguage(selectedLanguage);
    updateLanguageDisplay();
    // Additional code to update other content based on language change
  
    // Reload the page to apply the language changes
    location.reload();
  }
  
  // Event listener for language links
  const languageLinks = document.querySelectorAll('a[href="#en"], a[href="#fr"]');
  languageLinks.forEach(link => {
    link.addEventListener('click', handleLanguageChange);
  });
  
  // On page load, update the language display
  updateLanguageDisplay();
  const storedLanguage = getLanguage();
  if (storedLanguage) {
    updateContent(lang[storedLanguage]);
  }