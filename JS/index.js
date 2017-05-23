var write;
var yearBalk = document.getElementById('date_login');
var currentYear = new Date().getFullYear();
var accounts = [];
//inladen van de json
$(function () {
  $.ajax({
    url: 'data/Accounts.json'
    , dataType: 'json'
    , success: onSuccess
    , error: function (err) {
      console.error('Fout: ', err);
    }
  })

  function onSuccess(data) {
    accounts = data.accounts;
    gelukt();
  }
});
//de datas in de options scrhijven
function writeDates() {
  for (i = 1946; i <= currentYear; i++) {
    write += '<option id="' + i + '">' + i + '</option>';
  }
  console.log('bizarre');
  yearBalk.innerHTML = write;
}
writeDates();

function gelukt() {
  console.log('json geladen');
}
var aanmelden = document.getElementById('button_aanmelden');
var registreren = document.getElementById('button_registreren');

//aanmelden email+ password of username+ password
aanmelden.onclick = function () {
  console.log(document.getElementById('mail').value);
  
  var usernameInput = document.getElementById('username_login').value;
  
  console.log(usernameInput + '1');
  
  for (i = 0; i < accounts.length; i++) {
    
    console.log(accounts[i].username + '2');
    
    if ( (document.getElementById('mail').value == accounts[i].email) || (usernameInput == accounts[i].username) ) 
    {
      if (document.getElementById('password').value == accounts[i].password) {
        window.location.href = "dashboard.html";
      }
    }
  };
}




















