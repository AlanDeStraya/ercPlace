import React from 'react';

const FinderControl = ({ numTrains, setNumTrains, numTrainsDeclared, setNumTrainsDeclared, diversionState, setDiversionState, openBoxes, setOpenBoxes }) => {

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

{/* convert to invert buttons per mini buttons below */}
				<div id='selectAreas'>
					{!openBoxes.areas && <button 
						onClick={() => {
							setOpenBoxes(prevState => {
								let obj = Object.assign({}, prevState); 
								obj.areas = true;
								return { obj };
							})
						}}>Select Areas</button>}
					{openBoxes.areas && <button
            onClick={() =>  {
              setOpenBoxes(prevState => {
                let obj = Object.assign({}, prevState);
                obj.areas = false;
                return { obj };
              })
            }}>Confirm Areas</button>}
				</div>


				<div id='selectVisibility'>
					{!openBoxes.details && <button
            onClick={() => {
              setOpenBoxes(prevState => {
                let obj = Object.assign({}, prevState);
                obj.tables = true;
                return { obj };
              })
            }}>Show Details</button>}
					{openBoxes.details && <button
            onClick={() => {
              setOpenBoxes(prevState => {
                let obj = Object.assign({}, prevState);
                obj.tables = false;
                return { obj };
              })
            }}>Hide Details</button>}
				</div>
        

        <div id='select-detail-section'>
          <button className='mini-button'
            onClick={() => {
              setOpenBoxes(prevState => {
                let obj = Object.assign({}, prevState);
                obj.pic = !obj.pic;
                return { obj }
              })
            }}>Graphic</button>
          <button className='mini-button'
            onClick={() => {
              setOpenBoxes(prevState => {
                let obj = Object.assign({}, prevState);
                obj.plan = !obj.plan;
                return { obj }
              })
            }}>Plan Details</button>
          <button className='mini-button'
            onClick={() => {
              setOpenBoxes(prevState => {
                let obj = Object.assign({}, prevState);
                obj.comm = !prevState.comm;
                return { obj }
              })
            }}>PA/PIDS</button>
          <button className='mini-button'
            onClick={() => {
              setOpenBoxes(prevState => {
                let obj = Object.assign({}, prevState);
                obj.tweet = !prevState.tweet;
                return { obj }
              })
            }}>Twitter/SMS</button>
        </div>

			</div>
			<p id='statement'></p>
		</div>
	);

};

export default FinderControl;
