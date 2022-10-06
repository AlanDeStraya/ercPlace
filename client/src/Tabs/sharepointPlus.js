import React from 'react';

import Weather from '../Components/weather.js';
import Rules from '../Components/rules.js';
import WorkInstructions from '../Components/workInstructions.js';
import Troubleshooting from '../Components/troubleshooting.js';
import Misc from '../Components/misc.js';
import Manuals from '../Components/manuals.js';
import TeamsFiles from '../Components/teamsFiles.js';
import NercResources from '../Components/nercResources.js';
import Sidebar from '../Components/sidebar.js';
import PrintPopup from '../Components/printPopup.js';
import ScadaPopup from '../Components/scadaPopup.js';
import SiteUpdatesPopup from '../Components/siteUpdatesPopup.js';

import { useState } from 'react';


const SharepointPlus = () => {

	const [printPopupActive, setPrintPopupActive] = useState(false);
	const [scadaPopupActive, setScadaPopupActive] = useState(false);
	const [siteUpdatesPopupActive, setSiteUpdatesPopupActive] = useState(false);

	function togglePrintPopupActive() {
		console.log('toggle button clicked');
		if(printPopupActive === false) {
			setPrintPopupActive(true);
			console.log('print popup active must be false');
		} else if(printPopupActive === true) {
			setPrintPopupActive(false);
		}
	};
	function toggleScadaPopupActive() {
		if(scadaPopupActive === false) {
			setScadaPopupActive(true);
		} else if(scadaPopupActive === true) {
			setScadaPopupActive(false);
		}
	};

	return (
		<div id='sharepointPlus'>
			<article>
				<Weather />
				<Rules />
				<WorkInstructions />
				<Troubleshooting />
				<Misc />
				<Manuals />
				<TeamsFiles />
				<NercResources
					togglePrintPopupActive={togglePrintPopupActive}
					toggleScadaPopupActive={toggleScadaPopupActive} />
			</article>
			<Sidebar />

			{printPopupActive && <PrintPopup />}
			{scadaPopupActive && <ScadaPopup />}
			{siteUpdatesPopupActive && <SiteUpdatesPopup />}

		</div>
	);
};

export default SharepointPlus;
