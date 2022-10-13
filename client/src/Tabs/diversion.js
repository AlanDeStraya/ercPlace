import React from 'react';
import { useState, useEffect } from 'react';

import './diversion.css';

import ObstructionFinder from '../Components/obstructionFinder.js';
import DiversionControl from '../Components/diversionControl.js';
import DiversionLive from '../Components/diversionLive.js';
import Log from '../Components/log.js';


const Diversion = ({ testMode, setTestMode, socket }) => {

	const [diversionState, setDiversionState] = useState({active: false, open: false, planNumber: '', issue: '', trainNumber: '', location: ''});

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
			
			<DiversionLive
				diversionState={diversionState}
				setDiversionState={setDiversionState}
				socket={socket} />

			<button id='test-mode-button'
				onClick={() => {
				// test / off
				const pass = prompt('Enter password:');
				socket.emit('cIsAlan', pass);
				console.log(pass)} } >Testing mode</button>
				
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
