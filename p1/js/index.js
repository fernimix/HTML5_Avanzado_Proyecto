/* Inicializamos la librería */
impress().init();

/* Activación del slider */
$(document).ready(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
  });
});