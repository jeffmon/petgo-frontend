$("#play-sound").click(function() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://bcda0588.ngrok.io/sound');
  oReq.send();
});

$("#give-treat").click(function() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://bcda0588.ngrok.io/treat');
  oReq.send();
});

$("#open-door").click(function() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://bcda0588.ngrok.io/open');
  oReq.send();
});

$("#close-door").click(function() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://bcda0588.ngrok.io/close');
  oReq.send();
});

function reqListener() {}