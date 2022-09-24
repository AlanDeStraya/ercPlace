import React from 'react';

const ScadaPopup = () => {
	return (
		<div id='scadaAlarms' className='popup'>
			<div className='popupx' id='scadaAlarmsx'>X</div>
			<h2>How to Download SCADA Alarms</h2>
			<h3>Export Alarms</h3>
			<ol>
				<li>Open Alarm History (from main menu, aka Home Depot)</li>
				<li>Click on 'Search' and choose the initial Date and Time and Final Date and Time<br>
					(Ie. Jan 1 2022 00:00:00 to Jan 1 2022 23:59:59 for one full day)<br>
					Note 1: By default, the final date will be the current date so in case a new final date is required, the button will need to be de-selected. </li>
				<li>Select Minimum Priority Alarm - Priority 3</li>
				<li>Click on the button on the bottom of the window 'Include Acknowledgement Records'<br>
					If the number of alarms is bigger than 10,000, the search will need to be split into different exports as 10K is the max that can be exported.</li>
				<li>Go to “Export Data to CSV” (small icon on top of the window)</li>
				<li>Fill in the file name (recommended to name the file as per the date of the alarms that are being exported)</li>
				<li>Once the export is complete, it will indicate “Export Successful”</li>
			</ol>
			<p>Download each day starting from Monday to Sunday. Go back to the search menu and repeat steps 3 to 8 for each day.  Note that if the search menu hasn't been closed, only the dates will have to be chosen, the time and minimum priority level will remain.</p>
			<h3>Export Data to the Key</h3>
			<ol>
				<li>Retrieve Secure Key from Matt Pieter's desk</li>
				<li>Insert secure key (unlock it first - key 1: 14589071, key 2: 23670982 - notice the button pattern to remember)</li>
				<li>Go to Data Export Viewer</li>
				<li>Click Alarm History, click 'Results'</li>
				<li>Go to Folder (2022) and the last subfolder inside that Folder Year (2022)</li>
				<li>Select the file you want to add to the Secure Key</li>
				<li>Click on the “Download” button at the top of the page</li>
				<li>A window will open to select where you want to export the files.  By default on workstation 3 (SCADA desk) the USB drive folder will be selected</li>
				<li>The files need to be downloaded one by one.</li>
				<li>Remember to safely eject the USB stick before removing it.</li>
				<li>Insert the Secure Key into SCADA workstation 3 USB connector. Cable should be accessible on the desktop.</li>
				<li>Open a new email addressed to Bryan Gray (optional to ERC's)</li>
				<li>Title the email as 'SCADA Alarms April 4 - April 10, 2022', for example</li>
				<li>Select all the files you want to email</li>
				<li>Drag and drop from USB to email and send.</li>
			</ol>
		</div>
	);
};

export default ScadaPopup;