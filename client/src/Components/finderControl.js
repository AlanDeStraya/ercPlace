import React from 'react';
import { useEffect } from 'react';

import findScheduledTrains from '../Utils/findScheduledTrains.js';

const FinderControl = ({ diversionState, setDiversionState, openBoxes, setOpenBoxes, socket }) => {

	function declareTrains(event) {
    setDiversionState(() => {
      let obj = Object.assign({}, diversionState);
      obj.numTrains = event.target.value;
      obj.numTrainsDeclared = true;
      return obj;
    });
	};

  function declareLocation(event) {
    setDiversionState(() => {
      let obj = Object.assign({}, diversionState);
      obj.location = event.target.value;
      return obj;
    });
  };

  function declareIssue(event) {
    setDiversionState(() => {
      let obj = Object.assign({}, diversionState);
      obj.issue = event.target.value;
      return obj;
    });
  };

  function declareIncidentTrain(event) {
    setDiversionState(() => {
      let obj = Object.assign({}, diversionState);
      obj.trainNumber = event.target.value;
      return obj;
    });
  };
  

  useEffect(() => {
    setDiversionState(() => {
      let obj = Object.assign({}, diversionState);
      obj.numTrains = findScheduledTrains();
      return obj;
    });
  }, [])

  /*
  let trainStatement = '';
  let locationStatement = '';
  if(diversionState.trainNumber) {
    trainStatement = ` with train ${diversionState.trainNumber}`;
  }
  if(diversionState.location) {
    locationStatement = ` ${diversionState.location}`;
  }
*/


	return (
		<div id='finder-control'>
			<div id='finder-tools'>
				
				<div id='selectNumOfTrains'>
					<p>Number of Trains:&nbsp;</p><input onChange={declareTrains} id='input-number-of-trains' placeholder={diversionState.numTrains} ></input>
				</div>

        <button 
					onClick={() => {
            if(openBoxes.areas === true) {
							socket.emit('cChoosePlan', diversionState.planNumber);
              setOpenBoxes(() => {
                let obj = Object.assign({}, openBoxes);
                obj.tables = true;
                return obj;
              });
            }
						setOpenBoxes(openBoxes => {
							let obj = Object.assign({}, openBoxes); 
							obj.areas = !openBoxes.areas;
							return obj;
						});
					}}>{openBoxes.areas ? `Confirm Areas` : 'Select Areas'}</button>

				<div id='show-tables-control'>
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
			</div>
      {diversionState.planNumber && 
      <div id='statement'>
        <p>{`Obstruction plan ${diversionState.planNumber} due to `}</p>
        <select onChange={declareIssue} >
          <option value='Issue' selected>-issue-</option>
          <option value='a train issue'>Train</option>
          <option value='an infrastructure issue'>Infrastructure</option>
          <option value='a passenger incident'>Passenger</option>
        </select>
        <p>{` at `}</p>
        <input autoComplete='off' placeholder='-location-' onChange={declareLocation} ></input>
        <p>{` involving train `}</p>
        <input autoComplete='off' placeholder='-####-' onChange={declareIncidentTrain} ></input>
      </div>}

		</div>
	);

};

export default FinderControl;
