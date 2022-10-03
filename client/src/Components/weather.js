import React from 'react';

const Weather = () => {
	return (
		<section id='weatherContainer'>
			<div id='weather'>
				<div id='forecastBorder' className='weatherItem'>
					<iframe id='forecast' title="Environment Canada Weather" src="https://weather.gc.ca/wxlink/wxlink.html?cityCode=on-118&amp;lang=e" allowtransparency="true" frameborder="0"></iframe>
				</div>
				<div className='weatherItem' id="map"></div>
			</div>
			<button id='radarButton'>Toggle Radar</button>

		</section>
	);
};

export default Weather;
