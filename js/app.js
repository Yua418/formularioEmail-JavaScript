"use strict";
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");

    // Asignar eventos
    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);
    
    function validar(event) {
        if (event.target.value.trim() === "") {
            mostrarAlerta(event.target.name, event.target.parentElement);
        } else {
            console.log("Hay datos wey", event.target.value);
        };
    };

    function mostrarAlerta(mensaje, referencia) {
        // Comprueva si ya existe una alerta
        const alerta = document.querySelector(".bg-red-600");

        // Generar alerta HTML
        const error = document.createElement("P");
        error.textContent = `El campo de ${mensaje} esta vacio`;
        error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

        // Introduce la alerta al HTML
        referencia.appendChild(error);
    };
});