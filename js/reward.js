$(document).ready(function () {
  $('button').click(function () {
    $('#child').fadeOut('fast');
    $('#parent').append('<p>Hieronder vind je jouw unieke code</p>')
    $("p").addClass("code");
    $(".code").css("margin", "1em");
    $('#parent').append('<img src = "images/qrCode.png"/>')



  });
});