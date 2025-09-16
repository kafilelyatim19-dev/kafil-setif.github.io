// فتح وإغلاق القائمة المنسدلة
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.right = '0';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.right = '-100%';
});
