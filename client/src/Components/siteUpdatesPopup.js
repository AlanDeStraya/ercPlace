import React from 'react';

const SiteUpdatesPopup = ({ closePopups }) => {
	return (
		<div id='updates' className='popup'>
			<div className='popupx' id='updatesx' onClick={closePopups} >X</div>
			<h3>Updates</h3>
			<ul>
				<li>2022-10-07 - <strong>Migrated all Sharepoint++ functionality to ERC.place</strong> - (except for weather radar). ERC.Place is live.</li>
				<br />
				<li>2022-09-18 - <strong>Changed weather widget to Environment Canada</strong> - official source of weather with alerts</li>
				<li>2022-09-17 - <strong>Added weather radar map</strong> - map showing weather radar</li>
				<li>2022-08-30 - <strong>Added improved maintenance plan print instruction</strong> - popup with more thorough instructions</li>
				<li>2022-08-24 - <strong>Linked Lieu Requests sheet</strong> - new sheet to track lieu requests</li>
				<li>2022-08-23 - <strong>New Obstruction Plan Finder features</strong> - added CS messaging and button to enter plan manually</li>
				<li>2022-08-16 - <strong>Added R1 Bus stop locations</strong> - showing locations of R1 stops for each station and direction</li>
				<li>2022-08-16 - <strong>Added link to schedules</strong> - link to schedule folder on regular sharepoint</li>
				<li>2022-08-11 - <strong>Added list of rules qualified personnel</strong> - "RTM and Contractor EROR Training Report"</li>
				<li>2022-08-08 - <strong>Added Obstruction Plan Finder</strong> - tool for selecting obstruction plans (in development)</li>
				<li>2022-07-30 - <strong>Consolidated contacts</strong> - all contacts in one sheet</li>
				<li>2022-07-30 - <strong>Downloading SCADA Alarms & secure key code</strong> - added instructions for SCADA alarm download</li>
				<li>2022-07-27 - <strong>Map, Civic Addresses</strong> - added digital version of guideway map and civic address excel</li>
				<li>2022-07-27 - <strong>WSS/WSM reset procedures</strong> - added troubleshooting for wayside screens</li>
				<li>2022-07-24 - <strong>Device-responsive layout</strong> - site responsive to screen-size changes</li>
				<li>2022-07-19 - <strong>Created keyboard shortcuts section</strong> - a few handy keyboard shortcuts</li>
				<li>2022-07-19 - <strong>Created Track Segment Speeds</strong> - excel sheet, added under Teams Files</li>
				<li>2022-07-13 - <strong>Added Weather widget</strong> - from unofficial source (working on Environment Canada source)</li>
				<li>2022-07-12 - <strong>Created Diversion Checklist</strong> - prototype for checklists</li>
				<li>2022-07-11 - <strong>Created Payphones info</strong> - excel sheet, under Misc</li>
				<li>2022-07-10 - <strong>Added Teams Files section</strong> - Comms Card, SCADA Handover/Issues, Diversion Stats, Launch Email</li>
				<li>2022-07-04 - <strong>Added User Manuals</strong> - Onyx, IndigoVision, P25, Fire Panel, TG Baker under Manuals</li>
				<li>2022-07-04 - <strong>Added CAD, Telestaff, Logistik</strong> - under NERC resources</li>
			</ul>
		</div>
	);
};

export default SiteUpdatesPopup;
