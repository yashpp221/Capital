// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});
