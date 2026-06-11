const contenedorTutoriales = document.getElementById('contenedorTutoriales');
const scrollBoton = document.getElementById('scrollTutoriales');

// FUNCION SCROL IMAGENES
 document.querySelectorAll('.scroll-imagenes').forEach((scrollContainer) => {
    const hintButton = scrollContainer.querySelector('.scroll-hint');

    scrollContainer.addEventListener('scroll', () => {
      if (scrollContainer.scrollLeft > 20) {
        hintButton.style.opacity = '0';
      } else {
        hintButton.style.opacity = '1';
      }
    });
  });

  // FUNCION SCROL TUTORIALES
  // Solo ocultar si se ha hecho scroll realmente (evitar ocultarlo al cargar)
  contenedorTutoriales.addEventListener('scroll', () => {
    // Detectar si el usuario ha hecho scroll hacia la derecha
    if (contenedorTutoriales.scrollLeft > 50) {
      scrollBoton.classList.add('oculto');
    } else {
      scrollBoton.classList.remove('oculto');
    }
  });

  // Mostrar el botón al cargar por si algún estilo lo ocultó por defecto
  window.addEventListener('load', () => {
    scrollBoton.classList.remove('oculto');
  });