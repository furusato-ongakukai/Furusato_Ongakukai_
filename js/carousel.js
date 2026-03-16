// ============ CAROUSEL ============
let currentSlide = 0;

function goSlide(n) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

setInterval(() => {
  const slides = document.querySelectorAll('.carousel-slide');
  // スライドが1枚以下の場合は自動送りしない
  if (slides.length <= 1) return;
  goSlide((currentSlide + 1) % slides.length);
}, 6000);
