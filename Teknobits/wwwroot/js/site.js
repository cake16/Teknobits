// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const palabras = ["Innovando", "Optimizando Procesos", "Materializando tus ideas", "Ayudando a tu negocio"];
let palabraIndex = 0;
let letraIndex = 0;
const velocidad = 150;
const delayPalabra = 1000;
const contenedor = document.getElementById("typing");

function escribir() {
    if (letraIndex < palabras[palabraIndex].length) {
        contenedor.textContent += palabras[palabraIndex][letraIndex];
        letraIndex++;
        setTimeout(escribir, velocidad);
    } else {
        setTimeout(borrar, delayPalabra);
    }
}

function borrar() {
    if (letraIndex > 0) {
        contenedor.textContent = palabras[palabraIndex].substring(0, letraIndex - 1);
        letraIndex--;
        setTimeout(borrar, velocidad / 2);
    } else {
        palabraIndex = (palabraIndex + 1) % palabras.length;
        setTimeout(escribir, velocidad);
    }
}

escribir();

