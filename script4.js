// Mostrar la foto y la nota al hacer clic en el icono de regalo 🎁
function mostrarFotoNota() {
    var fotoNota = document.getElementById("fotoNota");
    if (fotoNota.style.display === "none") {
        fotoNota.style.display = "block";
    } else {
        fotoNota.style.display = "none";
    }
}

function toggleCupon() {
    const cupon = document.getElementById('cupon');
    cupon.style.display = cupon.style.display === 'none' ? 'block' : 'none';
}

// Confetti al hacer clic
document.addEventListener("click", (event) => {
    bursty(event.pageX, event.pageY);
});

function bursty(x, y) {
    const burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 0: 200 },
        count: 20,
        children: {
            fill: { white: "#c2aafc" },
            duration: 2000,
        },
    }).tune({
        x: x,
        y: y,
    });
    burst.replay();
}

// Confetti aleatorio en intervalos
setInterval(() => randomizedConfetti(), 1000);

function randomizedConfetti() {
    let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100));
    let randomY = Math.floor(Math.random() * (window.innerHeight - 200));

    const burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 0: 200 },
        count: 20,
        degree: 360,
        children: {
            fill: { white: "#34E1FF" },
            duration: 2000,
        },
    }).tune({
        x: randomX,
        y: randomY,
    });
    burst.replay();
}

// Función para crear globos al azar
function crearGlobos() {
    const globosContainer = document.querySelector('.globos-container');
    const coloresGlobos = ['#FF5733', '#33FF57', '#3357FF', '#F5C933', '#9333F5', '#FF33A1', '#FF8C33'];

    for (let i = 0; i < 10; i++) { // Cambia 10 por la cantidad deseada de globos
        const globo = document.createElement('div');
        const colorAleatorio = coloresGlobos[Math.floor(Math.random() * coloresGlobos.length)];
        globo.className = 'globo';
        globo.style.backgroundColor = colorAleatorio;
        globo.style.top = Math.random() * 100 + 'vh'; // Posición vertical aleatoria
        globo.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        globosContainer.appendChild(globo);
    }
}

// Llamar a la función para crear los globos al cargar la página
window.onload = crearGlobos;