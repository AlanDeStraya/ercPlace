import React from 'react';

const PlanDetails = ({ obstructionPlanNumber, setObstructionPlanNumber, openBoxes, setOpenBoxes }) => {

	return (
		<div id='plan-details'>
			<div id='graphic'></div>
			<div id='details' className='bolded'></div>
			<div id='papids' className='bolded'></div>
			<div id='cs'></div>
		</div>
	);

};

export default PlanDetails;
