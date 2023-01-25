$(document).ready(function () {

  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function () {

    var viajesOffsetTop = $('#viajes').offset().top;

    if ($(window).scrollTop() >= viajesOffsetTop) {

      fixedHeader.css('margin-top', 0);

    }else if ($(window).scrollTop() <= viajesOffsetTop/2) {

      fixedHeader.css('margin-top', '-68px');
    }
  })

});
