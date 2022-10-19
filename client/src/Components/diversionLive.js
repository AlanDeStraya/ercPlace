import React from 'react';
import { useState } from 'react';

import CommsLive from './commsLive.js';
import MainlineLive from './mainlineLive.js';
import ScadaLive from './scadaLive.js';

const DiversionLive = ({ diversionState, setDiversionState, socket }) => {

	const [liveLog, setLiveLog] = useState({}) 

	return (
		<div id='diversion-live'>
			<CommsLive
				diversionState={diversionState}
				liveLog={liveLog}
				socket={socket} />
			<MainlineLive
				socket={socket} />
			<ScadaLive
				socket={socket} />
		</div>
	);

};

export default DiversionLive;


/*

- onclick diversion start, populate initial set
- initial set depends on statement info for SCADA
- ? otherwise SCADA can determine statement info dynamically
- function to populate based on argument

*/
