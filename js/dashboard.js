var punten = 210;

if (punten >= 100) && (punten < 200) {
  $('#bier').ready(function () {
    $('#bierImage').hide('fast');
    $('#bier').append('<img src ="images/bierEenDerde.png" id="bierImage">')
  })
} else if (punten >= 200) && (punten < 300) {
  $('#bier').ready(function () {
    $('#bierImage').hide('fast');
    $('#bier').append('<img src ="images/bierHalf.png" id="bierImage">')
  })
}