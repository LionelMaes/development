$(document).ready(function () {
  $('button').click(function () {
    $('#child').hide('fast');
    $('#parent').append('<p>Hieronder vind je jouw unieke code</p>')
    $("p").addClass("code");
    $(".code").css("margin", "1em");
    $('#parent').append('<img src = "images/qrCode.png"/>')
    $('#parent').append('<button id = "terug"onclick="terug()">Ga terug</button>');
    $('#terug').css("margin-top", "1em");
    $('#parent').fadeIn('fast');
  });
});

function terug() {
  location.reload();
}