const btnLanzar = document.getElementById("btnLanzar");
const statusText = document.getElementById("statusText");

btnLanzar.addEventListener("click", () => {
    const anchoVentana = 400;
    const altoVentana = 300;

    // Cálculo con screen.availWidth y screen.availHeight
    const posX = Math.floor((screen.availWidth - anchoVentana) / 2);
    const posY = Math.floor((screen.availHeight - altoVentana) / 2);

    const parametros = `width=${anchoVentana},height=${altoVentana},left=${posX},top=${posY}`;
    const ventanaSatelite = window.open("satelite.html", "VentanaSatelite", parametros);

    // Verificación para saber si el navegador ha bloqueado la ventana emergente

    // !ventanaSatelite - si devuelve null es porque el pop-up directamente se ha bloqueado.
    // ventanaSatelite.closed - por si el navegador lo ha abierto y se ha cerrado al momento.
    // typeof ... === "undefined" - para evitar fallos si no se crea bien.
    if (!ventanaSatelite || ventanaSatelite.closed || typeof ventanaSatelite.closed === "undefined") {
        statusText.textContent = "Pop-up bloqueado. Concede permisos de ventana emergente.";
        statusText.style.color = "#ef4444";
    } else {
        statusText.textContent = "Satélite desplegado";
        statusText.style.color = "#10b981";
    }
});