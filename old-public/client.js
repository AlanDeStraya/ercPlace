//const socket = io();

let radarOn = false;
let mapEl = document.getElementById('map');
let forecastEl = document.getElementById('forecastBorder');
let radarButtonEl = document.getElementById('radarButton');
radarButton.addEventListener('click', toggleRadar);

function toggleRadar() {
  if(radarOn === false) {
    radarOn = true;
    mapEl.style.zIndex = '1';
		forecastEl.style.zIndex = '0';
  } else if(radarOn) {
    radarOn = false;
		mapEl.style.zIndex = '0';
		forecastEl.style.zIndex = '1';
  }
};


document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
      closePrint();
      closeScadaAlarms();
      closeUpdates();
  }
});


/*
socket.on('event', func => {
  //socket.emit('something');
});

*/


