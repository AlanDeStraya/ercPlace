//const socket = io();

let activeTab = 'ercPlace';


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



const printEl = document.getElementById('print');
const printLinkEl = document.getElementById('printLink');
const printxEl = document.getElementById('printx');
printLinkEl.addEventListener('click', openPrint);
printxEl.addEventListener('click', closePrint);
function openPrint() {
  printEl.style.visibility = 'visible';
  printEl.style.opacity = '1';
};
function closePrint() {
  printEl.style.visibility = 'hidden';
  printEl.style.opacity = '0';
};

const scadaAlarmsEl = document.getElementById('scadaAlarms');
const scadaAlarmsLinkEl = document.getElementById('scadaAlarmsLink');
const scadaAlarmsxEl = document.getElementById('scadaAlarmsx');
scadaAlarmsLinkEl.addEventListener('click', openScadaAlarms);
scadaAlarmsxEl.addEventListener('click', closeScadaAlarms);
function openScadaAlarms() {
  scadaAlarmsEl.style.visibility = 'visible';
  scadaAlarmsEl.style.opacity = '1';
};
function closeScadaAlarms() {
  scadaAlarmsEl.style.visibility = 'hidden';
  scadaAlarmsEl.style.opacity = '0';
};

const updatesEl = document.getElementById('updates');
const updatesLinkEl = document.getElementById('updatesLink');
const updatesxEl = document.getElementById('updatesx');
updatesLinkEl.addEventListener('click', openUpdates);
updatesxEl.addEventListener('click', closeUpdates);
function openUpdates() {
  updatesEl.style.visibility = 'visible';
  updatesEl.style.opacity = '1';
};
function closeUpdates() {
  updatesEl.style.visibility = 'hidden';
  updatesEl.style.opacity = '0';
};

/*
function keyPress (e) {
  if(e.key === "Escape") {
      // write your logic here.
  }
}
*/

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


