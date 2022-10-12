import React from 'react';

const FinderControl = ({ numTrains, setNumTrains, numTrainsDeclared, setNumTrainsDeclared, obstructionPlanNumber, setObstructionPlanNumber, openBoxes, setOpenBoxes }) => {

	function declareTrains() {
		setNumTrains(prompt('How many trains?'));
		setNumTrainsDeclared(true);
	};

	return (
		<div id='finder-control'>
			<div id='finder-tools'>
				<div id='selectNumOfTrains'>
					<p>{numTrainsDeclared ? 'Declared' : 'Scheduled'} # of Trains: {numTrains}</p>
					<button	onClick={declareTrains}>Change</button>
				</div>
				<div id='selectAreas'>
					{!openBoxes.areas && <button 
						onClick={() => {
							setOpenBoxes(prevState => {
								let obj = Object.assign({}, prevState.areas); 
								obj.areas = true;
								return { obj };
							})
						}}>Select Areas</button>}
					{openBoxes.areas && <button onClick={() => console.log('removethis')}>Confirm Areas</button>}
				</div>
				<div id='selectVisibility'>
					{!openBoxes.details && <button onClick={() => console.log('removethis')}>Show Details</button>}
					{openBoxes.details && <button onClick={() => console.log('removethis')}>Hide Details</button>}
				</div>
			</div>
			<p id='statement'></p>
		</div>
	);

};

export default FinderControl;
