import React from 'react';

const PlanDetails = ({ diversionState, setDiversionState, openBoxes, setOpenBoxes }) => {

    return (
      <div id='plan-details'>
        {openBoxes.pic && <div id='graphic'>{diversionState.planNumber === '' ? <p>No plan available</p> : <img src={`./resources/images/plan${diversionState.planNumber.replace('.', 'p')}.png`}></img>}</div>}
        {openBoxes.plan && <div id='details' className='bolded'></div>}
        {openBoxes.comm && <div id='papids' className='bolded'></div>}
        {openBoxes.tweet && <div id='cs'></div>}
      </div>
	  )

};

export default PlanDetails;
