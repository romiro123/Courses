const burgerBtn = document.querySelector('#burder');
const menuOpen = document.querySelector('.nav__list');

burgerBtn.addEventListener('click', () => {
  menuOpen.classList.toggle('nav-open');
})

document.addEventListener('click', function (event) {
  if (event.target.closest('#burder') == null && event.target.closest('.nav__list') == null) {
    menuOpen.classList.remove('nav-open');
  }
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 20) {
    menuOpen.classList.remove('nav-open');
  }
}, { passive: true });
