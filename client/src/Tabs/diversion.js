import React from 'react';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ObstructionFinder from '../Components/obstructionFinder.js';

const socket = io();
console.log(socket);


const Diversion = () => {
	return (

		<div id='diversion-holding-page'>
			<h2>Diversion App - Coming Soon</h2>
			<a href='https://ats-simulation.neocities.org/obstructionFinder.html'>Old Obstruction Finder</a>
		</div>

	);
};
		/*

const Diversion = () => {

	const [isConnected, setIsConnected] = useState(socket.connected);
	const [diversionActive, setDiversionActive] = useState(false);

	useEffect(() => {
		socket.on('connect', () => {
			setIsConnected(true);
			console.log(`connected: ${isConnected}`);
		});
		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
		};
	}, []);

	socket.on('sNumUsersOnline', num => {
		console.log(`${num} users are online`);
	});

	socket.on('sAckTest', str => {
		console.log(str);
	});


	return (
		<>
			<ObstructionFinder
				diversionActive={diversionActive}
				setDiversionActive={setDiversionActive} />

			<button onClick={() => socket.emit('cTestSend', {user: 'me', test: 'yes a test'})}>Test button</button>
		</>
	);
};

*/

export default Diversion;
