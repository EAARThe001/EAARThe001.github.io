const message = "¿Qué sería de un cumpleaños sin flores? 🌸 Aunque sean virtuales, ¡aquí tienes! Te las mereces porque eres una persona increíble, fuerte, valiente y mucho más. Has soportado y superado muchas cosas, eso me impresiona. Por eso de momento ten. No sé cuáles son tus flores o colores favoritos, así que ¿qué tal si me lo dices? 😄💐";
const messageDiv = document.getElementById('message');
const flowerElements = document.querySelectorAll('.flower');

let currentIndex = 0;

function typeMessage() {
    if (currentIndex < message.length) {
        messageDiv.innerHTML += message.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeMessage, 50); // Ajusta la velocidad de aparición
    } else {
        changeFlowerColors(); // Cambia el color de las flores al finalizar el mensaje
    }
}

function changeFlowerColors() {
    flowerElements.forEach(flower => {
        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Color aleatorio
        flower.querySelectorAll('.flower__leaf').forEach(leaf => {
            leaf.style.backgroundColor = randomColor;
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    typeMessage();
});
