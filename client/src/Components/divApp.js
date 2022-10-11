import React from 'react';
import { useState } from 'react';
import io from 'socket.io-client';
const socket = io();

const DivApp = () => {

	return (
		<button
				onClick={() => {
					const eventStartTime = Date.now();
					socket.emit('cStartEvent', eventStartTime)} } >START</button>
	);

};

export default DivApp;
