import React from 'react';

const PlanDetails = ({ obstructionPlanNumber, setObstructionPlanNumber, openBoxes, setOpenBoxes }) => {

  console.log(`openboxes.tables = ${openBoxes.tables}`);
	if(openBoxes.tables) {
    return (
      <div id='plan-details'>
        {openBoxes.pic && <div id='graphic'></div>}
        {openBoxes.plan && <div id='details' className='bolded'></div>}
        {openBoxes.comm && <div id='papids' className='bolded'></div>}
        {openBoxes.tweet && <div id='cs'></div>}
      </div>
	  )
  }

};

export default PlanDetails;
