import React from 'react';

import CommsLive from './commsLive.js';
import MainlineLive from './mainlineLive.js';
import ScadaLive from './scadaLive.js';

const DiversionLive = ({ diversionActive, setDiversionActive, obstructionPlanNumber, setObstructionPlanNumber, socket }) => {

	return (
		<>
			<CommsLive
				socket={socket} />
			<MainlineLive
				socket={socket} />
			<ScadaLive
				socket={socket} />
		</>
	);

};

export default DiversionLive;
