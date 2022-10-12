import React from 'react';

const MainlineLive = ({ socket }) => {

	return (
		<div id='mainline-live'>
			<h4>Main</h4>
			<div className='after-title'>
				<div id='mainline-log' className='log'>
				</div>
				<div id='mainline-suggestions' className='suggestions'>
				</div>
			</div>
		</div>

	);

};

export default MainlineLive;
