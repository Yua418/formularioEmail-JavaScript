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

## Funciones y ejecucion 
1. **validar()**: Esta funcion toma los datos agregados en las variables `inputEmail`, `inputAsunto` y `inputMensaje` para revisar que tengan informacion.
2. **mostrarAlerta()**: Genera una alerta si uno de los campos del formulario esta vacio.
3. 