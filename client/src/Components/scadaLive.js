import React from 'react';

const ScadaLive = ({ socket }) => {

	return (
		<div id='scada-live'>
			<h4>SCADA</h4>
			<div className='after-title'>
				<div id='scada-log' className='log'>
				</div>
				<div id='scada-suggestions' className='suggestions'>
				</div>
			</div>
		</div>
	);

};

export default ScadaLive;
