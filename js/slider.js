$(document).ready(function () {

  var slider = $('#slider');

  $('#slider .slide:last'). insertBefore('#slider .slide:first');

  slider.css('margin-left', '-43%');

  function moverDerecha() {
    slider.animate({
      marginLeft: '-105.6%'
    }, 700, function () {
      $('#slider .slide:first').insertAfter('#slider .slide:last');
      slider.css('margin-left', '-43%');
    });
  }

  setInterval(moverDerecha, 5000);


});
