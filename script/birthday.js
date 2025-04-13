let explodedCount = 0;
const totalBalloons = document.querySelectorAll('.balloon').length;
const nextBtn = document.getElementById('nextBtn');

document.querySelectorAll('.balloon').forEach(balloon => {
  balloon.addEventListener('click', function () {
    const message = balloon.querySelector('.message');

    // Si ya fue explotado, no hacer nada
    if (balloon.classList.contains('exploded')) return;

    // Explota el globo
    balloon.classList.add('exploded');

    // Muestra el mensaje después de la explosión
    setTimeout(() => {
      message.style.display = 'block';
      setTimeout(() => {
        message.style.opacity = '1';
      }, 50);
    }, 300);

    // Aumenta el contador
    explodedCount++;

    // Si todos los globos están explotados, muestra el botón
    if (explodedCount === totalBalloons) {
      setTimeout(() => {
        nextBtn.style.display = 'block';
        nextBtn.style.opacity = '0';
        setTimeout(() => {
          nextBtn.style.transition = 'opacity 0.5s ease';
          nextBtn.style.opacity = '1';
        }, 50);
      }, 1000); // Espera un poco para que se vea bonito
    }
  });
});
