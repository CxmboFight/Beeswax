const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

// Toggle menu open/close with accessibility attribute updates
function toggleMenu() {
  const isActive = navList.classList.toggle('active');
  hamburger.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isActive);
}

// Close menu when a nav link is clicked (mobile-friendly)
function closeMenuOnLinkClick(e) {
  if (e.target.closest('a')) {
    navList.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

hamburger.addEventListener('click', toggleMenu);
navList.addEventListener('click', closeMenuOnLinkClick);
