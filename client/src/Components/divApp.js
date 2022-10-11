import React from 'react';
import { useState } from 'react';

const DivApp = ({socket}) => {

	socket.on('sStartEvent', time => {
		console.log(time);
	});

	return (
		<button
				onClick={() => {
					const eventStartTime = Date.now();
					socket.emit('cStartEvent', eventStartTime)} } >START</button>
	);

};

export default DivApp;
