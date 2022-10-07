import React from 'react';

import { useState } from 'react';

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


const SharepointPlus = () => {

	const [printPopupActive, setPrintPopupActive] = useState(false);
	const [scadaPopupActive, setScadaPopupActive] = useState(false);
	const [siteUpdatesPopupActive, setSiteUpdatesPopupActive] = useState(false);

	function openPrintPopup() {
		setPrintPopupActive(true);
	};
	function openScadaPopup() {
		setScadaPopupActive(true);
	};
	function closePopups() {
		setPrintPopupActive(false);
		setScadaPopupActive(false);
		setSiteUpdatesPopupActive(false);
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
					openPrintPopup={openPrintPopup}
					openScadaPopup={openScadaPopup} />
			</article>
			<Sidebar />

			{printPopupActive && <PrintPopup closePopups={closePopups} />}
			{scadaPopupActive && <ScadaPopup closePopups={closePopups} />}
			{siteUpdatesPopupActive && <SiteUpdatesPopup closePopups={closePopups} />}

		</div>
	);
};

export default SharepointPlus;
