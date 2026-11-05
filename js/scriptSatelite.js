const URL_DESTINO = "https://www.ilerna.es"

// Detectar sistema operativo
document.addEventListener("DOMContentLoaded", () => {
    const userAgent = navigator.userAgent;

    let sistema = "Sistema desconocido";

    if (userAgent.includes("Win")) {
        sistema = "Windows";
    } else if (userAgent.includes("Linux")) {
        sistema = "Linux";
    } else if (userAgent.includes("Mac")) {
        sistema = "Mac";
    }

    const saludo = document.getElementById("saludoSO");
    saludo.textContent = `¡Bienvenido usuario de ${sistema}!`;
});


// Redireccionamiento con window.opener
const btnAsignar = document.getElementById("btnAsignar");
const btnReemplazar = document.getElementById("btnReemplazar");

btnAsignar.addEventListener('click', () => {
    if (window.opener && !window.opener.closed) {      // La ventana principal sigue existiendo y no se ha cerrado
        window.opener.location.assign(URL_DESTINO);
    } else {
        alert("La ventana principal no está accesible");
    }
});

btnReemplazar.addEventListener('click', () => {
    if (window.opener && !window.opener.closed) {
        window.opener.location.replace(URL_DESTINO);
    } else {
        alert("La ventana principal no está accesible");
    }
});


// Destrucción con el temporizador
const btnDestruir = document.getElementById("btnDestruir");
const temporizador = document.getElementById("temporizador");

btnDestruir.addEventListener("click", () => {
    btnDestruir.disabled = true;
    let cuenta = 5;

    temporizador.textContent = `Destrucción en ${cuenta} segundos...`
    temporizador.style.color = "#f87171";

    const intervaloVisual = setInterval(() => {
        cuenta--;
        if (cuenta > 0) {
            temporizador.textContent = `Destrucción en ${cuenta} segundos...`;
        } else {
            clearInterval(intervaloVisual); // Cuando llega a 0 paro para que no siga corriendo en segundo plano
        }
    }, 1000);

    // Al pasar los 5 segundos ejecuto el cierre
    setTimeout(() => {
        temporizador.textContent = "Cerrando satélite...";
        window.close();
    }, 5000);
});