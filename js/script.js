const burgerBtn = document.querySelector('.header__burger');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.mobile-menu__close');

function toggleMenu(open) {
  if(open) {
    mobileMenu.classList.add('open');
    overlay.classList.add('active');
    burgerBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
  } else {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }
}

burgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  toggleMenu(!isOpen);
});

closeBtn.addEventListener('click', () => {
  toggleMenu(false);
});

overlay.addEventListener('click', () => {
  toggleMenu(false);
});

// FUNCION SCROLL TARJETAS DE JUEGOS
document.querySelectorAll('.tarjetas').forEach((scrollContainer) => {
  const hintButton = scrollContainer.querySelector('.scroll-hint');

  scrollContainer.addEventListener('scroll', () => {
    if (scrollContainer.scrollLeft > 50) {
      hintButton.style.opacity = '0';
    } else {
      hintButton.style.opacity = '1';
    }
  });
});