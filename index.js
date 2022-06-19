let nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav__item')

nav.addEventListener('click', handleNavigationLinks)

function handleNavigationLinks(e) {
  if (!e.target.classList.contains('nav__item')) return 

  for (link of navLinks) {
    if (link.classList.contains('nav__item_active')) {
      link.classList.remove('nav__item_active');
    }
  }
  e.target.classList.add('nav__item_active')
}