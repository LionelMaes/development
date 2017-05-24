function claimReward() {

  var child = document.getElementById("child");
  var parent = document.getElementById("parent");
  parent.removeChild(child);

  var titel = document.createElement("p");
  var tekst = document.createTextNode("Hieronder vind je jouw unieke code");
  titel.appendChild(tekst);

  parent.appendChild(titel);

  parent.className = "titel";


}