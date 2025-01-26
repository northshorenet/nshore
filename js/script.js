// Toggle mobile navigation
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Display current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
