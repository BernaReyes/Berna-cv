var seccionActual = null;

    function mostrarSeccion(id) {
      var seccionAMostrar = document.getElementById(id);

      // Ocultar la sección actualmente visible, si hay alguna
      if (seccionActual) {
        seccionActual.style.display = 'none';
      }

      // Mostrar la nueva sección
      seccionAMostrar.style.display = 'block';
      seccionActual = seccionAMostrar;
    }
