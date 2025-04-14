// Espera hasta que termine la animación del pastel
setTimeout(() => {
    const btnContainer = document.getElementById('sorpresaBtnContainer');
    btnContainer.classList.remove('oculto');
    btnContainer.classList.add('fade-in'); // agrega la animación de aparición
  }, 6500); // Aparece después de 6.5 segundos
 
  // Redirige al hacer clic en el botón
  document.getElementById('sorpresaBtnContainer').addEventListener('click', function() {
    // Cambia la URL a la página de destino
    window.location.href = "./html/gift.html";  // Reemplaza con la URL de destino
  });
    