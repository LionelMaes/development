var punten = 100;

if (punten <= 100) {
  $('#bier').ready(function () {
    $('#bierImage').hide('fast');
    $('#bier').append('<img src ="images/bierEenDerde.png" id="bierImage">')
  })