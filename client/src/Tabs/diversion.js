import React from 'react';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import DivApp from '../Components/divApp.js';
import Log from '../Components/log.js';


const socket = io();

const Diversion = ({ diversionPageOpen }) => {

	const [isConnected, setIsConnected] = useState(socket.connected);

	const [testMode, setTestMode] = useState(false);

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

	let userAlan = '';
	socket.on('sAuthAlan', str => {
		//nope/ok
		console.log(str);
		if(str === 'nope') {
			setTestMode(false);
		} else if(str === 'ok') {
			setTestMode(true);
		}
	});


//temp if/else
	if(testMode) {
///////////////

	return (

		<>	{/*

					*/}

					<DivApp socket={socket} />
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
			<h2>Diversion App - Coming Soon</h2>
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
