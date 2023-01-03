# Simulador de formularios de email - JavaScript
``
Este es un pequeño proyecto para practicar sobre los formularios en JavaScript, el HTML y CSS son una plantilla web, el archivo *app.js* es el importante en este caso.

Para evitar errores, se utiliza un `.addEventListener("DOMContentLoaded")` que verificara que toda la pagia ya este cargada.


## Variables y funcion 
1. **const inputEmail**: Toma la etiqueta input con id "email" que se encuentra en la linea 17.
2. **const inputAsunto**: Toma la etiqueta input con id "asunto" que se encuentra en la linea 22.
3. **const inputMensaje**: Toma la etiqueta textarea con id "mensaje" que se encuentra en la linea 27.
4. **const error**: Crea una etiqueta parrafo para ser utlizado en una alerta.
5. **const formulario**: Toma la etiqueta formulario con id "formulario" que se encuentra en la linea 14.
6. **const alerta**: Verifica si un mensaje de alerta ya esta creado, fijandose en si en la referencia de cada input en particular hay una clase unica que le pertenece a los mensajes de alerta.
7. **const regex**: Contiene una *expresion regular* para verificar un email.
8. **const resultado**: Utiliza la expresion `regex` sobre el email.
9. **const email**: Este es un objeto que guarda todos los campos del email escrito.
10. **const btnSubmit**: Toma la etiqueta button de tipo submit que se encuentra en la linea 31.
11. **const btnReset**: Toma la etiqueta button de tipo reset que se encuentra en la linea 42.
12. **const spinner**: Toma la etiqueta div con la id spinner que se encuentra en la linea 54.
13. **const AlertaSucces**: Crea una alerta que informa que la tarea se cumplio con exito.

## Funciones y ejecucion 
1. **validar()**: Esta funcion toma los datos agregados en las variables `inputEmail`, `inputAsunto` y `inputMensaje` para revisar que tengan informacion.
2. **mostrarAlerta()**: Genera una alerta si uno de los campos del formulario esta vacio.
3. **limpiarAlerta()**: Elimina una alerta cuando uno de los campos del furmulario se encuentre con datos.
4. **validarEmail()**: Esta funcion contiene una *expresión regular* que busca un patron en una cadena de texto (email en este caso) para verificar que cumpla con el patron requerido.
5. **comprobarEmail**: Comprueba que los campos sean correctos (retornando true si hay algo mal) y habilita la variable `btnSubmit` en consecuencia.
6. **enviarEmail**: simula el envio de un email poniendo una pantalla de carga ficticia.
7. **resetFormulario**: Resetea el formulario, borrando todos los datos.