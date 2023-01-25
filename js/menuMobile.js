$(document).ready(function () {

var numero = 1;

$('#botonMenu').on('click', function (e) {

  e.preventDefault();
  if (numero == 1) {
    $('.menu-mobile .menu-principal').animate({right:0}, 300, function () {
      numero = 0;
    });
  } else {
    $('.menu-mobile .menu-principal').animate({right:'-100%'}, 300, function () {
      numero = 1;
    });
  }
})

$('.menu-mobile .menu-principal').on('click', function () {

  $('.menu-mobile .menu-principal').animate({right:'-100%'}, 300, function () {
    numero = 1;
  });

})

});
