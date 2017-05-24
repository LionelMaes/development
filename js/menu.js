var hamburger = document.getElementById('hamburger');
var teller = 1;
var mainObject = document.getElementsByTagName('main');
mainObject = mainObject[0];
hamburger.onclick = function () {
  console.log('erin');
  teller = teller + 1;
  console.log(mainObject);
  var write = '';
  if (teller % 2 == 0) {
    write += '<nav class="menu"><ul> <a href="dashboard.html"> <li> Dashboard </li></a>  <a href="profiel.html"> <li>Mijn profiel</li></a><a href="">  <li>Leaderboard</li></a><a href="reward.html">  <li>Mijn rewards</li></a><a href="media.html"><li>Mijn media</li></a><a href="faq.html"><li>FAQ</li></a><a href="#">   <li>Instellingen</li> </a><a href="about.html">  <li>About</li></a></ul></nav>';
    console.log(write);
    document.getElementById('uitgeklapte_menu').innerHTML = write;
    mainObject.className = 'ingeklapt';
    console.log(mainObject);
  }
  else if (teller % 2 == 1) {
    console.log(mainObject);
    document.getElementById('uitgeklapte_menu').innerHTML = '';
    mainObject.className = 'uitgeklapt';
  }
  else {
    document.getElementById('uitgeklapte_menu').innerHTML = "";
  }
};