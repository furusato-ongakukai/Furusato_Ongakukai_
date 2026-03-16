
// ============ NAV ============
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    nav.classList.add('visible');
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
