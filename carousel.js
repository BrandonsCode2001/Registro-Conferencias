// carousel.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides    = document.querySelectorAll('.slide');
    const prevBtn   = document.querySelector('.carousel .prev');
    const nextBtn   = document.querySelector('.carousel .next');
    let currentIndex = 0;
  
    function updateCarousel() {
      container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      updateCarousel();
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });
  });
  