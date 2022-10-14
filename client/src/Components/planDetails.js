import React from 'react';

const PlanDetails = ({ diversionState, setDiversionState, openBoxes, setOpenBoxes }) => {
	if(openBoxes.tables && diversionState.planNumber) {
    return (
      <div id='plan-details'>
        {openBoxes.pic && <div id='graphic'><img src={`./resources/images/plan${diversionState.planNumber}.png`}></img></div>}
        {openBoxes.plan && <div id='details' className='bolded'></div>}
        {openBoxes.comm && <div id='papids' className='bolded'></div>}
        {openBoxes.tweet && <div id='cs'></div>}
      </div>
	  )
  } else if(openBoxes.tables && diversionState.planNumber === '') {
	return (
		<div id='plan-details'>
        	{openBoxes.pic && <div id='graphic'><p>No plan available</p></div>}
	        {openBoxes.plan && <div id='details' className='bolded'></div>}
        	{openBoxes.comm && <div id='papids' className='bolded'></div>}
	        {openBoxes.tweet && <div id='cs'></div>}
		</div>
	)
}

};

export default PlanDetails;
