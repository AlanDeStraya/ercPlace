import React from 'react';

import findDetails from '../Utils/findDetails.js';
import findPapids from '../Utils/findPapids.js';
import findTweet from '../Utils/findTweet.js';

const PlanDetails = ({ diversionState, openBoxes }) => {

    return (
      <div id='plan-details'>
        {openBoxes.pic && <div id='graphic'>{diversionState.planNumber === ''
          ? <p>No plan available</p>
          : <img src={`./resources/images/plan${diversionState.planNumber.replace('.', 'p')}.png`} alt=''></img>}</div>}
        
        {openBoxes.plan && <div id='details' className='bolded'>{findDetails(diversionState.planNumber)}</div>}
        {openBoxes.comm && <div id='papids' className='bolded'>{findPapids(diversionState.planNumber)}</div>}
        {openBoxes.tweet && <div id='cs'>{findTweet(diversionState.planNumber)}</div>}
      </div>
	  )

};

export default PlanDetails;
