import React from 'react';

import Chat from './chat.js';

const CommsLive = ({ socket }) => {

	return (
		<div id='comms-live'>
			<h4>Comms</h4>
			<div className='after-title'>
				<div id='comms-log' className='log'>
				</div>
				<div id='comms-suggestions' className='suggestions'>
				</div>
				<Chat
					socket={socket} />
			</div>
			
		
	);

};

export default CommsLive;
