// PREGUNTA 1"-------------------------------------------------------------------------------------------------------------------
// Esta función se llama cuando se hace clic en el botón "Mostrar opciones"
function mostrarPopup1() {
    // Obtiene el elemento con el ID "popup" y le quita la clase "oculto"
    var popup = document.getElementById("popup1");
    popup.classList.remove("oculto");
  
    // Obtiene todos los checkboxes dentro del popup
    var opciones = popup.querySelectorAll('input[type="checkbox"]');
  
    // Agrega un listener de evento para cada checkbox
    opciones.forEach(function(opcion) {
      opcion.addEventListener('click', function() {
        // Deselecciona todas las opciones, excepto la que fue clickeada
        opciones.forEach(function(op) {
          if (op != opcion) {
            op.checked = false;
          }
        });
      });
    });
  }
// Esta función se llama cuando se hace clic en el botón "Aceptar" dentro del popup
function ocultarPopup1() {
  // Obtiene la opción seleccionada dentro del popup
  var opcionSeleccionada = document.querySelector('input[name="opcion1"]:checked');
  
  // Si se ha seleccionado una opción, muestra el valor de la opción en el contenedor ubicado debajo de la pregunta
  if (opcionSeleccionada) {
    document.getElementById("opcion-seleccionada1").textContent = opcionSeleccionada.value;
    document.getElementById("opcion-imagen1").setAttribute("src", opcionSeleccionada.closest("label").querySelector(".icono").getAttribute("src"));
  } else {
    // Si no se ha seleccionado ninguna opción, vacía el contenido del contenedor ubicado debajo de la pregunta
    document.getElementById("opcion-seleccionada1").textContent = "";
    document.getElementById("opcion-imagen1").setAttribute("src", "");
  }
  
  // Oculta el popup agregando la clase "oculto" al elemento con el ID "popup"
  document.getElementById("popup1").classList.add("oculto");   
}



// PREGUNTA 2"-------------------------------------------------------------------------------------------------------------------
// Esta función se llama cuando se hace clic en el botón "Mostrar opciones"
function mostrarPopup2() {
  // Obtiene el elemento con el ID "popup" y le quita la clase "oculto"
  var popup = document.getElementById("popup2");
  popup.classList.remove("oculto");

  // Obtiene todos los checkboxes dentro del popup
  var opciones = popup.querySelectorAll('input[type="checkbox"]');

  // Agrega un listener de evento para cada checkbox
  opciones.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      // Deselecciona todas las opciones, excepto la que fue clickeada
      opciones.forEach(function(op) {
        if (op != opcion) {
          op.checked = false;
        }
      });
    });
  });
}
// Esta función se llama cuando se hace clic en el botón "Aceptar" dentro del popup
function ocultarPopup2() {
  // Obtiene la opción seleccionada dentro del popup
  var opcionSeleccionada = document.querySelector('input[name="opcion2"]:checked');
  
  // Si se ha seleccionado una opción, muestra el valor de la opción en el contenedor ubicado debajo de la pregunta
  if (opcionSeleccionada) {
    document.getElementById("opcion-seleccionada2").textContent = opcionSeleccionada.value;
    document.getElementById("opcion-imagen2").setAttribute("src", opcionSeleccionada.closest("label").querySelector(".icono").getAttribute("src"));
  } else {
    // Si no se ha seleccionado ninguna opción, vacía el contenido del contenedor ubicado debajo de la pregunta
    document.getElementById("opcion-seleccionada2").textContent = "";
    document.getElementById("opcion-imagen2").setAttribute("src", "");
  }
  
  // Oculta el popup agregando la clase "oculto" al elemento con el ID "popup"
  document.getElementById("popup2").classList.add("oculto");   
}
// AJUSTES GLOBALES=======================================================================//////////////////
// Función para generar el enlace desde el boton de compartir
function generarEnlace() {
  // Obtener las opciones seleccionadas de las preguntas
  const opcion1 = document.querySelector('input[name="opcion1"]:checked') ? document.querySelector('input[name="opcion1"]:checked').value : '';
  const opcion2 = document.querySelector('input[name="opcion2"]:checked') ? document.querySelector('input[name="opcion2"]:checked').value : '';

  // Obtener las imágenes de las opciones seleccionadas de las preguntas
  const imagen1 = document.querySelector('input[name="opcion1"]:checked') ? document.querySelector('input[name="opcion1"]:checked').getAttribute('data-imagen') : '';
  const imagen2 = document.querySelector('input[name="opcion2"]:checked') ? document.querySelector('input[name="opcion2"]:checked').getAttribute('data-imagen') : '';

  // Generar el enlace con las respuestas y las imágenes
  const enlace = `http://127.0.0.1:5500/?opcion1=${opcion1}&opcion2=${opcion2}&imagen1=${imagen1}&imagen2=${imagen2}`;

  // Mostrar un mensaje con el enlace generado
  Swal.fire({
    title: 'Enlace generado',
    html: `El enlace para compartir es:<br><a href="${enlace}">${enlace}</a>`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
}
//------------------------------------------------------////////////////////////////
// Función para cargar las respuestas desde el enlace generado

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const opcion1 = urlParams.get('opcion1') || '';
  const opcion2 = urlParams.get('opcion2') || '';
  const imagen1 = urlParams.get('imagen1') || '';
  const imagen2 = urlParams.get('imagen2') || '';

  // Actualizar las respuestas de las preguntas con los valores del enlace
  if (opcion1) {
    document.querySelector(`input[name="opcion1"][value="${opcion1}"]`).checked = true;
    document.querySelector('#opcion1-img').src = imagen1;
  }

  if (opcion2) {
    document.querySelector(`input[name="opcion2"][value="${opcion2}"]`).checked = true;
    document.querySelector('#opcion2-img').src = imagen2;
  }
});


function cargarRespuestasDesdeEnlace() {
  const urlParams = new URLSearchParams(window.location.search);

  const opcion1 = urlParams.get('opcion1');
  const opcion2 = urlParams.get('opcion2');
  const imagen1 = urlParams.get('imagen1');
  const imagen2 = urlParams.get('imagen2');

  if (opcion1 && opcion2) {
    document.querySelector(`input[name="opcion1"][value="${opcion1}"]`).checked = true;
    document.querySelector(`input[name="opcion2"][value="${opcion2}"]`).checked = true;
    document.querySelector('#opcion1-imagen').setAttribute('src', imagen1);
    document.querySelector('#opcion2-imagen').setAttribute('src', imagen2);
  } else if (opcion1) {
    document.querySelector(`input[name="opcion1"][value="${opcion1}"]`).checked = true;
    document.querySelector('#opcion1-imagen').setAttribute('src', imagen1);
  } else if (opcion2) {
    document.querySelector(`input[name="opcion2"][value="${opcion2}"]`).checked = true;
    document.querySelector('#opcion2-imagen').setAttribute('src', imagen2);
  }
}

window.addEventListener('DOMContentLoaded', cargarRespuestasDesdeEnlace);



// Para mostrar las respuestas en los contenedores correspondientes
document.addEventListener('DOMContentLoaded', function() {
  cargarRespuestas();

  function cargarRespuestas() {
    const urlParams = new URLSearchParams(window.location.search);

    const opcion1Respuesta = urlParams.get('opcion1');
    const opcion2Respuesta = urlParams.get('opcion2');

    if (opcion1Respuesta) {
      document.querySelector(`input[name="opcion1"][value="${opcion1Respuesta}"]`).checked = true;
    }

    if (opcion2Respuesta) {
      document.querySelector(`input[name="opcion2"][value="${opcion2Respuesta}"]`).checked = true;
    }
  }
});


document.addEventListener('DOMContentLoaded', function() {
  cargarRespuestasDesdeEnlace();
});
