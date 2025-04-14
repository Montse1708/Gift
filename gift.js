document.querySelector('.open-gift-btn').addEventListener('click', function () {
    const lidGroup = document.querySelector('.gift-lid-group');
    const bowImg = document.querySelector('.gift-bow-img');
    const openBtn = document.querySelector('.open-gift-btn');

    // Aplica transformaciones al grupo y al moño
    lidGroup.style.transform = 'translateY(-120px)';
    bowImg.style.transform = 'translate(-50%, -120px)';

    // Desaparece el botón inmediatamente
    openBtn.style.display = 'none';

    // Después de 1 segundo, muestra el mensaje de regalo abierto
    setTimeout(function () {
        const giftMessage = document.querySelector('.gift-message');
        giftMessage.style.display = 'block';
        giftMessage.style.opacity = '1';
    }, 1000);

    // Después de 3 segundos (el tiempo necesario para la animación), redirige a otra página
    setTimeout(function () {
        window.location.href = 'birthday.html'; // Cambia esta URL a la página de destino
    }, 3000); // Redirige después de 3 segundos
});
