"use strict";
document.addEventListener("DOMContentLoaded", function() {
    // objeto email
    const email = {
        email: "",
        asunto: "",
        mensaje: ""
    };

    // Selecciona los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector("#spinner");

    // Asignar eventos
    inputEmail.addEventListener("input", validar);
    inputAsunto.addEventListener("input", validar);
    inputMensaje.addEventListener("input", validar);
    btnReset.addEventListener("click", function(event) {
        event.preventDefault();
        resetFormulario();
    });
    formulario.addEventListener("submit", enviarEmail);
    
    function validar(event) {
        // Revisa que los campos enten llenos
        if (event.target.value.trim() === "") {
            mostrarAlerta("Este campo esta vacio", event.target.parentElement);
            email[event.target.name] = "";
            comprobarEmail();
            return;
        };

        // Revisa que el email sea correcto
        if (event.target.id === "email" && !validarEmail(event.target.value)) {
            mostrarAlerta("El email no es valido", event.target.parentElement);
            email[event.target.name] = "";
            comprobarEmail();
            return;
        };

        // Limpia la alerta
        limpiarAlerta(event.target.parentElement);

        // Se asignan los valores al objeto email
        email[event.target.name] = event.target.value.trim().toLowerCase();

        // Se comprueba el objeto email
        comprobarEmail();
    };

    function mostrarAlerta(mensaje, referencia) {
        // Elimina las alertas anteriores sobre el mismo input
        limpiarAlerta(referencia); 
        
        // Generar alerta HTML
        const error = document.createElement("P");
        error.textContent = `${mensaje}`;
        error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

        // Introduce la alerta al HTML
        referencia.appendChild(error);
    };

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector(".bg-red-600");
        if (alerta) {
            alerta.remove(); // Elimina la alerta 
        };
    };

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    };

    function comprobarEmail() {
        if(Object.values(email).includes("")) {
            btnSubmit.classList.add("opacity-50");
            btnSubmit.disabled = true;
            return
        }

        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;
    };

    function enviarEmail(event) {
        event.preventDefault();
        spinner.classList.add("flex");
        spinner.classList.remove("hidden");

        setTimeout( () => {
            spinner.classList.add("hidden");
            spinner.classList.remove("flex");
            resetFormulario();
            const AlertaSucces = document.createElement("P");
            AlertaSucces.classList.add("bg-green-500", "text-white", "p-2", "text-center", "rounded-lg", "mt-10", "font-bold", "text-sm", "uppercase");
            AlertaSucces.textContent = "Mensaje enviado correctamente";
            formulario.appendChild(AlertaSucces);
            setTimeout(() => {
                AlertaSucces.remove();
            }, 3000);
        }, 5000);
    };

    function resetFormulario() {
        email.email = "";
        email.asunto = "";
        email.mensaje = "";
        formulario.reset();
        comprobarEmail();
    };
});