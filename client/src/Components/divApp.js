import React from 'react';
import { useState } from 'react';
import io from 'socket.io-client';
import ObstructionFinder from './obstructionFinder.js';
const socket = io();


const DivApp = ({ obstructionPlanNumber, setObstructionPlanNumber }) => {

	const [diversionActive, setDiversionActive] = useState(false);

	socket.on('sStartEvent', time => {
		console.log(time);
		socket.emit('ack');
	});

	return (
		<>
			<button
				onClick={() => {
					const eventStartTime = Date.now();
					socket.emit('cStartEvent', eventStartTime)} } >START</button>
			<ObstructionFinder
				obstructionPlanNumber={obstructionPlanNumber}
				setObstructionPlanNumber={setObstructionPlanNumber} />

			<button onClick={() => socket.emit('cTestSend', {user: 'me', test: 'yes a test'})}>Test button</button>
			<button
				onClick={() => {
					const pass = prompt('Enter password:');
					socket.emit('cIsAlan', pass)} } >Testing mode</button>
		</>
	);

};

export default DivApp;
