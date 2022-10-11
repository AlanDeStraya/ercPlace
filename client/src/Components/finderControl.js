import React from 'react';

const FinderControl = ({ numTrains, setNumTrains, numTrainsDeclared, setNumTrainsDeclared, obstructionPlanNumber, setObstructionPlanNumber, openBoxes, setOpenBoxes }) => {

	function declareTrains() {
		setNumTrains(prompt('How many trains?'));
		setNumTrainsDeclared(true);
	};

	return (
		<div id='finder-control'>
			<div id='selectNumOfTrains'>
				<p>{numTrainsDeclared ? 'Declared' : 'Scheduled'} # of Trains: {numTrains}</p>
				<button	onClick={declareTrains}>Declare Manually</button>
			</div>
			<div id='selectAreas'>
				<button onClick={() => console.log('removethis')}>Select Areas</button>
				<button onClick={() => console.log('removethis')}>Confirm Areas</button>
			</div>
			<div id='selectVisibility'>
				<button onClick={() => console.log('removethis')}>Show Details</button>
				<button onClick={() => console.log('removethis')}>Hide Details</button>
			</div>
		</div>
	);

};

export default FinderControl;
