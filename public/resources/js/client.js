//const socket = io();


const fireEl = document.getElementById('fire');
const fireButtonEl = document.getElementById('fireMode');
function hideFire() {
  fireEl.style.visibility = 'hidden';
}
let fireActive = false;
function showFire() {
  if(fireActive === false){
    fireEl.style.visibility = 'visible';
    fireEl.style.opacity = '1';
    fireActive = true;
  } else if(fireActive === true) {
    fireEl.style.opacity = '0';
    window.setTimeout(hideFire, 400);
    fireActive = false;
  }
}
fireButtonEl.addEventListener('click', showFire);

const obstructionEl = document.getElementById('obstructionPlans');
const obstructionButtonEl = document.getElementById('obstructionButton');
function hideObstruction() {
  obstructionEl.style.visibility = 'hidden';
}
let obstructionActive = false;
function showObstruction() {
  if(obstructionActive === false) {
    obstructionEl.style.visibility = 'visible';
    obstructionEl.style.opacity = '1';
    obstructionActive = true;
  } else if(obstructionActive === true) {
    obstructionEl.style.opacity = '0';
    window.setTimeout(hideObstruction, 400);
    obstructionActive = false;
  }
}
obstructionButtonEl.addEventListener('click', showObstruction);
      
      
      
let isDark;
let darkness = window.matchMedia("(prefers-color-scheme: dark)");
function toggleDarkMode(input) {
  if (input.matches) {
    document.documentElement.className = 'dark';
    isDark = true;
  } else {
    document.documentElement.className = 'light';
    isDark = false;
  }
}
toggleDarkMode(darkness); // Call listener function at run time
darkness.addListener(toggleDarkMode); // state changes
const darkButtonEl = document.getElementById('darkMode');
function toggleDark() {
  if (isDark) {
    isDark = false;
    document.documentElement.className = 'light';
  } else if(!isDark) {
    isDark = true;
    document.documentElement.className = 'dark';
  }
}
darkButtonEl.addEventListener('click', toggleDark);

let radarOn = false;
let weatherEl = document.getElementById('weather');
let radarButtonEl = document.getElementById('radarButton');
radarButton.addEventListener('click', toggleRadar);

function toggleRadar() {
  if(radarOn === false) {
    radarOn = true;
    weatherEl.innerHTML = '<div id="map"></div>';
		let map = L.map("map").setView([45.5, -75.7], 8);
			
      let OpenStreetMap_Mapnik = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
      .addTo(map);

		  let wmsLayer = L.tileLayer
		  .wms("https://geo.weather.gc.ca/geomet?", {
		    layers: "RADAR_1KM_RRAI",
		    version: "1.3.0",
		    opacity: 0.5
		  })
			.addTo(map);
  } else if(radarOn) {
    radarOn = false;
    weatherEl.innerHTML = '<iframe title="Environment Canada Weather" width="300px" height="191px" src="https://weather.gc.ca/wxlink/wxlink.html?cityCode=on-118&amp;lang=e" allowtransparency="true" frameborder="0"></iframe>';
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


