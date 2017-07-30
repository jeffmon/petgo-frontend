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

function reqListener() {}