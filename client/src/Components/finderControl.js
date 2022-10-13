import React from 'react';

const FinderControl = ({ numTrains, setNumTrains, diversionState, setDiversionState, openBoxes, setOpenBoxes }) => {

	function declareTrains(event) {
		setNumTrains(event.target.value);
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
					<p>Number of Trains: </p><input onChange={declareTrains} id='input-number-of-trains' placeholder={numTrains} ></input>
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
        

        <div id='mini-buttons'>
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
      {diversionState.active && <p id='statement'>{`Obstruction plan ${diversionState.planNumber} due to ${diversionState.issue}${trainStatement}${locationStatement}.`}</p>}

		</div>
	);

};

export default FinderControl;
