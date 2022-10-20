import React from 'react';

import Chat from './chat.js';

const CommsLive = ({ diversionState, liveLog, socket }) => {

	const subject = `Obstruction Plan ${diversionState.planNumber} at ${diversionState.location} involving ${diversionState.incidentTrain}.`
	const body = JSON.stringify(diversionState);

	return (
		<div id='comms-live'>
			<h4>Comms</h4>
			<div className='after-title'>
				<div id='comms-log' className='log'>
				<a href={`mailto:pte-ts-to-ocenhancedline1incidentreporting@ottawa.ca?subject=${subject}&body=${body}`}>Test email</a>
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

// 