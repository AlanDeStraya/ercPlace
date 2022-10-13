import React from 'react';

const FinderControl = ({ numTrains, setNumTrains, numTrainsDeclared, setNumTrainsDeclared, diversionState, setDiversionState, openBoxes, setOpenBoxes }) => {

	function declareTrains() {
		setNumTrains(prompt('How many trains?'));
		setNumTrainsDeclared(true);
	};

  let trainStatement = ''
  let locationStatement = ''
  if(diversionState.trainNumber) {
    trainStatement = ` with train ${diversionState.trainNumber}`;
  }
  if(diversionState.location) {
    locationStatement = ` ${diversionState.location}`;
  }

	return (
		<div id='finder-control'>
			<div id='finder-tools'>
				<div id='selectNumOfTrains'>
					<p>{numTrainsDeclared ? 'Declared' : 'Scheduled'} # of Trains: {numTrains}</p>
					<button	onClick={declareTrains}>Change</button>
				</div>

        <button 
					onClick={() => {
						setOpenBoxes(openBoxes => {
							let obj = Object.assign({}, openBoxes); 
							obj.areas = !openBoxes.areas;
							return obj;
						});
					}}>{openBoxes.areas ? `Confirm Areas` : 'Select Areas'}</button>


				<button
           onClick={() => {
             setOpenBoxes(openBoxes => {
               let obj = Object.assign({}, openBoxes);
               obj.tables = !openBoxes.tables;
               return obj;
             });
           }}>{openBoxes.tables ? `Hide Details` : `Show Details`}</button>
        

        <div id='select-detail-section'>
          <button className='mini-button'
            style={{backgroundColor: openBoxes.pic && 'orange'}}
            onClick={() => {
              setOpenBoxes(openBoxes => {
                let obj = Object.assign({}, openBoxes);
                obj.pic = !openBoxes.pic;
                return obj;
              });
            }}>Graphic</button>

          <button className='mini-button'
            style={{backgroundColor: openBoxes.plan && 'blue'}}
            onClick={() => {
              setOpenBoxes(openBoxes => {
                let obj = Object.assign({}, openBoxes);
                obj.plan = !openBoxes.plan;
                return obj;
              });
            }}>Plan Details</button>

          <button className='mini-button'
            style={{backgroundColor: openBoxes.comm && 'red'}}
            onClick={() => {
              setOpenBoxes(openBoxes => {
                let obj = Object.assign({}, openBoxes);
                obj.comm = !openBoxes.comm;
                return obj;
              });
            }}>PA/PIDS</button>

          <button className='mini-button'
            style={{backgroundColor: openBoxes.tweet && 'green'}}
            onClick={() => {
              setOpenBoxes(openBoxes => {
                let obj = Object.assign({}, openBoxes);
                obj.tweet = !openBoxes.tweet;
                return obj;
              });
            }}>Twitter/SMS</button>
        </div>

			</div>
      {diversionState.active && <p id='statement'>`Obstruction plan ${diversionState.planNumber} due to ${diversionState.issue}${trainStatement}${locationStatement}.` </p>}

		</div>
	);

};

export default FinderControl;
