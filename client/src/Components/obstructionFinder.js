import React from 'react';
import { useState, useEffect } from 'react';

import FinderControl from './finderControl.js';
import AreaSelector from './areaSelector.js';
import PlanDetails from './planDetails.js';

import findScheduledTrains from '../Utils/findScheduledTrains.js';


const ObstructionFinder = ({ diversionState, setDiversionState }) => {

	console.log('rendering finder');
	const [numTrains, setNumTrains] = useState();
	const [numTrainsDeclared, setNumTrainsDeclared] = useState(false);
	const [selectedAreas, setSelectedAreas] = useState([]);
	const [openBoxes, setOpenBoxes] = useState({areas: false, tables: false, pic: false, plan: false, comm: false, tweet: false});

	useEffect(() => {
		numTrainsDeclared === false && setNumTrains(findScheduledTrains());
	}, []);


	return (
		<div id='obstruction-plan-finder'>

{/* finder control component */}
			<FinderControl
				numTrains={numTrains}
				setNumTrains={setNumTrains}
				numTrainsDeclared={numTrainsDeclared}
				setNumTrainsDeclared={setNumTrainsDeclared}
				diversionState={diversionState}
				setDiversionState={setDiversionState}
				openBoxes={openBoxes}
				setOpenBoxes={setOpenBoxes} />

{/* finding area component */}
			<AreaSelector
				diversionState={diversionState}
				setDiversionState={setDiversionState}
				openBoxes={openBoxes}
				setOpenBoxes={setOpenBoxes}
				selectedAreas={selectedAreas}
				setSelectedAreas={setSelectedAreas} />

{/* details component */}
			<PlanDetails
				diversionState={diversionState}
				setDiversionState={setDiversionState}
				openBoxes={openBoxes}
				setOpenBoxes={setOpenBoxes} />

			<br /><br /><br /><br />

		</div>
	);
};

/*
Duplicate - 2.7/3.4 - but different # of trains for east loop
When 'if 13, park trains' - what if 15?
Plans for lost crossovers?
3.2 should be only to HUR west crossover
Many more scenarios not covered by current plans and diagrams
Diagrams not always totally accurate/specific (1.1 vs 1.3)
Graphic for 2.4 shows trains looping TUN-PAR but the plan says 2 shuttles offset TUN-LYO
*/

/*
also include Thales commands, special instructions, basically all the info they need to implement the diversion. Perhaps integrate PA/PIDS (if it's possible to do without making it messy, or do a separate one for that purpose).
*/

export default ObstructionFinder;
