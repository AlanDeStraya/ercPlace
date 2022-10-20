import React from 'react';

import findDetails from '../Utils/findDetails.js';

const PlanDetails = ({ diversionState, openBoxes }) => {

    return (
      <div id='plan-details'>
        {openBoxes.pic && <div id='graphic'>{diversionState.planNumber === ''
          ? <p>No plan available</p>
          : <img src={`./resources/images/plan${diversionState.planNumber.replace('.', 'p')}.png`} alt=''></img>}</div>}
        
        {openBoxes.plan && <div id='details' className='bolded'>{findDetails(diversionState.planNumber)}</div>}
        {openBoxes.comm && <div id='papids' className='bolded'></div>}
        {openBoxes.tweet && <div id='cs'></div>}
      </div>
	  )

};

export default PlanDetails;
