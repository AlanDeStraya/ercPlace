import React from 'react';
import { useState } from 'react';

import ObstructionFinder from './obstructionFinder.js';
import DiversionControl from './diversionControl.js';
import DiversionLive from './diversionLive.js';


const DivApp = ({ socket }) => {

	const [diversionActive, setDiversionActive] = useState(false);
	const [obstructionPlanNumber, setObstructionPlanNumber] = useState();


	return (
		<>
			<ObstructionFinder
				obstructionPlanNumber={obstructionPlanNumber}
				setObstructionPlanNumber={setObstructionPlanNumber} />
			<DiversionControl
				socket={socket} />
			<DiversionLive
				diversionActive={diversionActive}
				setDiversionActive={setDiversionActive}
				obstructionPlanNumber={obstructionPlanNumber}
				setObstructionPlanNumber={setObstructionPlanNumber}
				socket={socket} />
		</>
	);

};

export default DivApp;
