import React from 'react';
import { useState, useEffect } from 'react';

import './diversion.css';

import ObstructionFinder from '../Components/obstructionFinder.js';
import DiversionControl from '../Components/diversionControl.js';
import DiversionLive from '../Components/diversionLive.js';
import Log from '../Components/log.js';


const Diversion = ({ testMode, setTestMode, socket }) => {

	const [diversionActive, setDiversionActive] = useState(false);
	const [obstructionPlanNumber, setObstructionPlanNumber] = useState();

//temp if/else
	if(testMode) {
///////////////

	return (

		<>
			<ObstructionFinder
				obstructionPlanNumber={obstructionPlanNumber}
				setObstructionPlanNumber={setObstructionPlanNumber}
				socket={socket} />
			<DiversionControl
				socket={socket} />
			<DiversionLive
				diversionActive={diversionActive}
				setDiversionActive={setDiversionActive}
				obstructionPlanNumber={obstructionPlanNumber}
				setObstructionPlanNumber={setObstructionPlanNumber}
				socket={socket} />
			<button
				onClick={() => {
				// test / off
				const pass = prompt('Enter password:');
				socket.emit('cIsAlan', pass);
				console.log(pass)} } >Testing mode</button>
		</>
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
