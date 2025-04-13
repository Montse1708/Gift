document.querySelectorAll('.circle-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
  
  let currentIndex = 0;
  
  function changeSlide(direction) {
    const slide = document.querySelector('.carousel-slide');
    const totalSlides = document.querySelectorAll('.carousel-img').length;
  
    currentIndex += direction;
  
    // Carrusel cíclico
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;
  
    const offset = -currentIndex * 320; // 300px + 2*10px margin
    slide.style.transform = `translateX(${offset}px)`;
  }
  