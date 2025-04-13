document.querySelectorAll('.balloon').forEach(balloon => {
    balloon.addEventListener('click', function() {
      // Desaparece el globo
      balloon.classList.add('exploded');
  
      // Muestra el mensaje en la misma posición que el globo
      const message = balloon.querySelector('.message');
      setTimeout(() => {
        message.style.display = 'block';
        message.style.opacity = '1';
      }, 500); // Espera medio segundo para mostrar el mensaje
    });
  });
  