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
  
    // Si llegas al final o al principio, regresa en ciclo
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;
  
    const offset = -currentIndex * 300; // 300 es el ancho de cada imagen
    slide.style.transform = `translateX(${offset}px)`;
  }
  