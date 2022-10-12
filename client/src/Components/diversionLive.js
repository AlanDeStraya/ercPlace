import React from 'react';

import CommsLive from './commsLive.js';
import MainlineLive from './mainlineLive.js';
import ScadaLive from './scadaLive.js';

const DiversionLive = ({ diversionState, setDiversionState, socket }) => {

	return (
		<div id='diversion-live'>
			<CommsLive
				socket={socket} />
			<MainlineLive
				socket={socket} />
			<ScadaLive
				socket={socket} />
		</div>
	);

};

export default DiversionLive;
