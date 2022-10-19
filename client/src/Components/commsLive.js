import React from 'react';

import Chat from './chat.js';

const CommsLive = ({ socket }) => {

	return (
		<div id='comms-live'>
			<h4>Comms</h4>
			<div className='after-title'>
				<div id='comms-log' className='log'>
					<a href='mailto:pte-ts-to-ocenhancedline1incidentreporting@ottawa.ca?subject=Test Diversion?body=Diversion in place'>Test email</a>
				</div>
				<div id='comms-suggestions' className='suggestions'>
				</div>
				<Chat
					socket={socket} />
			</div>
		</div>
		
	);

};

export default CommsLive;
