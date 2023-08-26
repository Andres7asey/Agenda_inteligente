// Función que se ejecuta cuando se hace clic en el botón
function crearNota() {
    // Crear un nuevo elemento div con la clase nota
    var nota = document.createElement("div");
    nota.className = "nota";

    // Generar una posición aleatoria para la nota
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);

    // Asignar la posición a la nota
    nota.style.left = x + "px";
    nota.style.top = y + "px";

    // Generar un color aleatorio para la nota
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Asignar el color a la nota
    nota.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    // Agregar la nota al cuerpo de la página
    document.body.appendChild(nota);
}

// Obtener el botón que crea una nueva nota
var boton = document.getElementById("boton");

// Asignar la función crearNota al evento click del botón
boton.addEventListener("click", crearNota);
