document.getElementById('videoButton').addEventListener('click', function () {
    // Oculta el botón de agregar video con una transición
    this.style.transition = "opacity 0.5s ease";
    this.style.opacity = "0";

    // Espera a que la transición termine para ocultarlo completamente
    setTimeout(() => {
        this.style.display = 'none'; // Oculta el botón completamente

        // Muestra el contenedor del video
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.style.display = 'flex';
        videoContainer.style.opacity = '1'; // Transición de opacidad

        // Muestra el video
        const video = document.getElementById('birthdayVideo');
        video.play(); // Reproduce el video

        // Muestra el mensaje letra por letra
        const messageText = "Anahí, quiero que sepas que siempre cuentas con todo mi apoyo. Si alguna vez caes, caemos juntos, y si tropiezas sola, déjame ayudarte a levantarte. Estoy aquí, tanto en los momentos buenos como en los difíciles, siempre dispuesto a darte una mano.";
        let index = 0;
        const messageElement = document.getElementById('messageText');
        messageElement.innerHTML = ""; // Limpiar el mensaje anterior

        const typeWriter = () => {
            if (index < messageText.length) {
                messageElement.innerHTML += messageText.charAt(index);
                index++;
                setTimeout(typeWriter, 50); // Velocidad de la escritura
            }
        };
        typeWriter(); // Iniciar el efecto de escritura

    }, 500); // Duración de la transición de ocultar el botón
});

// Al finalizar el video
document.getElementById('birthdayVideo').addEventListener('ended', function () {
    const funnyButton = document.getElementById('funnyButton');
    funnyButton.style.display = 'block'; // Muestra el botón de mensaje
    funnyButton.style.opacity = '1'; // Muestra el botón de mensaje
});

// Al hacer clic en el botón para mostrar el mensaje de la nube
document.getElementById('funnyButton').addEventListener('click', function () {
    const cloudMessage = document.getElementById('cloudMessage');
    cloudMessage.style.display = 'block'; // Muestra la nube
});