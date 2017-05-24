function claimReward() {

  // Verwijderen elemenenten

  var child = document.getElementById("child");
  var parent = document.getElementById("parent");
  parent.removeChild(child);

  // Toevoegen tekst + code

  var titel = document.createElement("p");
  var tekst = document.createTextNode("Hieronder vind je jouw unieke code");
  titel.appendChild(tekst);
  parent.appendChild(titel);
  parent.className = "titel";

  var x = document.createElement("IMG");
  x.setAttribute("src", "images/qrCode.png");
  x.setAttribute("width", "40%");
  parent.appendChild(x);

  // button toevoegen

  var button = document.createElement("button");
  var tekstButton = document.createTextNode("Terug");

  button.appendChild(tekstButton);
  parent.appendChild(button);

  button.setAttribute("onclick", "terugButton()");
  button.style.margin = "1em";
}

function terugButton() {
  location.reload();
}