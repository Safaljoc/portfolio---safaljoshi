const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

// Toggle the mobile menu
function toggleMenu() {
navLinks.classList.toggle('open');

```
// Update hamburger icon and aria attribute
const isOpen = navLinks.classList.contains('open');
menuButton.innerHTML = isOpen ? '✕' : '☰';
menuButton.setAttribute('aria-expanded', isOpen);
```

}

// Open/close menu when hamburger is clicked
menuButton.addEventListener('click', toggleMenu);

// Close menu when a nav link is clicked (mobile only)
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
if (navLinks.classList.contains('open')) {
toggleMenu();
}
});
});

// Optional: close menu if clicking outside
document.addEventListener('click', (e) => {
if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && e.target !== menuButton) {
toggleMenu();
}
});
