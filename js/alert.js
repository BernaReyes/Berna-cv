function mostrarAlert() {
    window.alert("Estamos trabajando en ello!");
  }

  //TOOGLE POPUP****************************
  document.getElementById('togglePopup').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    var popup = document.getElementById('miPopup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
  });

  // Función para cerrar el popup
  function cerrarPopup() {
    document.getElementById('miPopup').style.display = 'none';
  }
