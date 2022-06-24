const navigationBlock = document.querySelector("nav");
const navigationLinks = document.querySelectorAll(".nav__item");
const languageSwitcher = document.querySelector(".lang-switch__vertical");
const languageSwitcherItems = document.querySelectorAll(".lang-switch__item");
const textOnEnglish = document.querySelectorAll("[lang=eng]");
const textOnRussian = document.querySelectorAll("[lang=ru]");
const burgerMenu = document.querySelector(".hamburger");
const navigationLinksBlock = document.querySelector('.nav__links');

navigationBlock.addEventListener("click", handleNavigationLinks);
languageSwitcher.addEventListener("click", handleLanguageSwitcher);
burgerMenu.addEventListener("click", handleHamburgerMenu);

let currentLanguage = 'ENG';

function handleNavigationLinks(e) {
  if (!e.target.parentNode.classList.contains("nav__item")) return;

  for (link of navigationLinks) {
    if (link.classList.contains("nav__item_active")) {
      link.classList.remove("nav__item_active");
    }
  }
  e.target.parentNode.classList.add("nav__item_active");
  toggleHamburgerMenu()
}

function handleLanguageSwitcher(e) {
  if (!e.target.classList.contains("lang-switch__item") ||
      e.target.classList.contains("lang-switch__item_active")
      ) return

  for (lang of languageSwitcherItems) {
    if (lang.classList.contains('lang-switch__item_active')) {
      lang.classList.remove('lang-switch__item_active');
    }
  }
  e.target.classList.add('lang-switch__item_active');
  currentLanguage = e.target.innerHTML;
  changePageLanguage();
}

function changePageLanguage() {
  if (currentLanguage === 'ENG') {
    textOnRussian.forEach(item => item.classList.add('hidden'))
    textOnEnglish.forEach(item => item.classList.remove('hidden'))
  }
  if (currentLanguage === 'RU') {
    textOnEnglish.forEach(item => item.classList.add('hidden'))
    textOnRussian.forEach(item => item.classList.remove('hidden'))
  }
}

function handleHamburgerMenu() {
  toggleHamburgerMenu()
}

function toggleHamburgerMenu() {
  if (!burgerMenu.classList.contains('hamburger_active')) {
    burgerMenu.classList.add('hamburger_active');
    navigationLinksBlock.classList.add('nav__links_active');
  } else {
    burgerMenu.classList.remove('hamburger_active');
    navigationLinksBlock.classList.remove('nav__links_active');
  }
}