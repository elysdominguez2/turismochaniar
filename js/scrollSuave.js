$(document).ready(function () {

  //Mostrar y ocultar Boton de volver arriba

  var btnVolverArriba = $('#btnVolverArriba');

  $(window).on('scroll', function () {

    var viajesOffsetTop = $('#viajes').offset().top;

    if ($(window).scrollTop() >= viajesOffsetTop) {

      btnVolverArriba.css('margin-right', 0);

    }else if ($(window).scrollTop() <= viajesOffsetTop/2) {

      btnVolverArriba.css('margin-right', '-60px');
    }
  })

  // Movimientos suaves de scroll de Inicio y Volver btnVolverArriba

  $('a.volver-arriba').on('click', function(e){
    e.preventDefault();

    if ($(window).scrollTop() !=0) {
      $('html, body').stop().animate({scrollTop: 0}, 1000);
    }
  })

  // Movimientos suaves de scroll para el resto

  $('a.scroll-suave').on('click', function(e){
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-chanar').on('click', function(e){
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 10
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-clientes').on('click', function(e){
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 68
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });


});
