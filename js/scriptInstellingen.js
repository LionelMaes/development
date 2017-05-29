var popup = document.getElementById("popup");
$("#kruis").click(function () {
  popup.style.visibility = "hidden";
});
var geluid = document.getElementById("geluid");
var meldingen = document.getElementById("geluid");
var accounts = document.getElementById("geluid");
var taal = document.getElementById("geluid");


function changeToDutch() {
  $("#geluid").html("Geluid");
  $("#meldingen").html("Meldingen");
  $("#accounts").html("Gekoppelde Accounts");
  $("#taal").html("Taal");
  $("#popupTitle").html("Instellingen");
};

function changeToEnglish() {
  $("#geluid").html("Sound");
  $("#meldingen").html("Notifications");
  $("#accounts").html("Linked accounts");
  $("#taal").html("Language");
  $("#popupTitle").html("Settings");
};

function changeToFrench() {
  $("#geluid").html("Son");
  $("#meldingen").html("Rapports");
  $("#accounts").html("Comptes liés");
  $("#taal").html("Langue");
  $("#popupTitle").html("Parametres");
};

function changeToGerman() {
  $("#geluid").html("Ton");
  $("#meldingen").html("Berichte");
  $("#accounts").html("Verbunden Konten");
  $("#taal").html("Sprache");
  $("#popupTitle").html("Einstellungen");
};


$('#taalselector').change(function () {
  var gekozenTaal = $(this).val();
  if (gekozenTaal == 'Nederlands') {
    changeToDutch();
  }
  else if (gekozenTaal == 'Français') {
    changeToFrench();
  }
  else if (gekozenTaal == 'English') {
    changeToEnglish();
  }
  else if (gekozenTaal == 'Deutsch') {
    changeToGerman();
  }
});