import React from 'react';
import { useState, useEffect } from 'react';

import './diversion.css';

import ObstructionFinder from '../Components/obstructionFinder.js';
import DiversionControl from '../Components/diversionControl.js';
import DiversionLive from '../Components/diversionLive.js';
import Log from '../Components/log.js';

// Function to persist state
// import React from 'react';

// export default function usePersistedState(key, defaultValue) {
//   const [state, setState] = React.useState(() => {
//     const persistedState = localStorage.getItem(key);
//     return persistedState ? JSON.parse(persistedState) : defaultValue;
//   });
//   React.useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [state, key]);
//   return [state, setState];
// }

const Diversion = ({ testMode, setTestMode, subHeader, setSubheader, socket }) => {

	const [diversionState, setDiversionState] = useState({
		active: false,
		open: false,
		startTime: 0,
		stopwatchTime: 0,
		numTrains: findScheduledTrains(),
		numTrainsDeclared: false,
		planNumber: '',
		issue: '',
		trainNumber: '',
		location: ''
	});

  useEffect(() => {
    if(diversionState.active) {
      socket.emit('cAlert', {type: 'alert', content: `**TEST** Obstruction Plan ${diversionState.planNumber} in effect due to ${diversionState.issue} at ${diversionState.location} involving ${diversionState.trainNumber}. **TEST**`});
    } else {
      socket.emit('cAlert', {type: '', content: ''});
    }
  }, [diversionState.active]);

//temp if/else
	if(testMode) {
///////////////

	return (

		<div id='diversion'>
		
			<div id='diversion-top'>
				<ObstructionFinder
          diversionState={diversionState}
          setDiversionState={setDiversionState}
					socket={socket} />
				<DiversionControl
          diversionState={diversionState}
          setDiversionState={setDiversionState}
					socket={socket} />
			</div>
			
			{ diversionState.open && 
			<DiversionLive
				diversionState={diversionState}
				setDiversionState={setDiversionState}
				socket={socket} /> }

			<button id='test-mode-button'
				onClick={() => {
          // test / off
          const pass = prompt('Enter password:');
          socket.emit('cIsAlan', pass);
          } } >Testing mode</button>
				
		</div>
	);







} else {

	return (

		<div id='diversion-holding-page'>
			<h2>DiversionLive - a full-stack web application - Coming Soon</h2>
			<a href='https://erc.place/obstructionFinder.html'>Old Obstruction Finder</a>
			<button
				onClick={() => {
					// test / off
					const pass = prompt('Enter password:');
					socket.emit('cIsAlan', pass);
					console.log(pass)} } >Testing mode</button>

		</div>

	);
}

};


export default Diversion;
