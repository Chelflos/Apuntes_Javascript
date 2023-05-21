window.onload = function() {
    const botonBuscar = document.getElementById("botonBuscar");
    botonBuscar.addEventListener("click", buscarPalabra);
  };
  
  function buscarPalabra() {
    const palabraBuscada = document.getElementById("inputPalabra").value;
    const contenido = document.getElementById("contenido");
  
    // Reiniciar estilos de resaltado previos
    const elementosResaltados = contenido.getElementsByClassName("highlight");
    Array.from(elementosResaltados).forEach(function(elemento) {
      elemento.classList.remove("highlight");
    });
  
    // Buscar y resaltar la palabra
    const regex = new RegExp(palabraBuscada, "gi");
    const parrafos = contenido.getElementsByTagName("p");
  
    for (let i = 0; i < parrafos.length; i++) {
      const textoParrafo = parrafos[i].innerText;
      const textoResaltado = textoParrafo.replace(regex, "<span class='highlight'>$&</span>");
      parrafos[i].innerHTML = textoResaltado;
  
      // Hacer scroll hacia el primer resultado
      const primerElementoResaltado = parrafos[i].getElementsByClassName("highlight")[0];
      if (primerElementoResaltado) {
        primerElementoResaltado.scrollIntoView({ behavior: "smooth" });
        break; // Detener la búsqueda después de resaltar el primer resultado
      }
    }
  }