$(document).ready(function () {

  var slider = $('#clienteOpinion');

  $('#clienteOpinion .opinion:last'). insertBefore('#clienteOpinion .opinion:first');

  slider.css('margin-left', '-53%');

  function moverDerecha() {
    slider.animate({
      marginLeft: '-119%'
    }, 700, function () {
      $('#clienteOpinion .opinion:first').insertAfter('#clienteOpinion .opinion:last');
      slider.css('margin-left', '-53%');
    });
  }

  setInterval(moverDerecha, 7000);


});
