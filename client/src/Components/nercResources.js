import React from 'react';

const NercResources = ({togglePrintPopupActive, toggleScadaPopupActive}) => {
	return (
		<section>
			<sub id='resources'></sub>
			<h2>New ERC Resources</h2>
			<ul>
				<li><a href='https://mycentre.ottawa.ca/home#Shell-home' target='_blank' rel="noreferrer">Pay/Leave</a></li>
				<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations/Scheduling/Forms/Case%20View.aspx?id=%2Fsites%2FRailOperations%2FScheduling%2FTOCC+Staff&viewid=8691d665-c171-4c2c-acb3-f97532cde2b9' target='_blank' rel="noreferrer">Sharepoint Scheduling Folder</a></li>
				<li><a href='https://www.logistikunicorp.com/en/index.asp' target='_blank' rel="noreferrer">Logistik</a></li>
				<li><a href='http://webstaff.transit.local/webstaff/servlet/ServletController.asp?device=stdbrowser&action=doBeginLogin' target='_blank' rel="noreferrer">Telestaff</a></li>
				<li><a href='http://10.136.12.88/CADIncidentManagement/' target='_blank' rel="noreferrer">CAD</a></li>
				<li><a href='https://ottawacity.sharepoint.com/sites/RailOperations' target='_blank' rel="noreferrer">Sharepoint</a></li>
				<li><a href='https://www.chickpeasottawa.com/' target='_blank'>Mission Critical Support</a></li>

				<li id='scadaAlarmsLink'><a href='#resources' onClick={toggleScadaPopupActive}>Downloading SCADA Alarms (& secure key code)</a></li>
				<li id='printLink'><a href='#resources' onClick={togglePrintPopupActive}>Print Maintenance Plan</a></li>

				<li className='setUp'>To consider when setting up city PC:
					<ul>
						<li>Printer - Windows + R => \\cmfp037\BLFB01F02MFD</li>
						<li>Auto-start apps - Windows + R => shell:startup</li>
						<li>Email signature</li>
						<li>Taskbar pins</li>
						<li>Default browser</li>
						<li>Bookmarks</li>
						<li>Set up OneDrive</li>
						<li>Night light</li>
					</ul>
				</li>
				<li className='setUp'>CCTV computer:
					<ul>
						<li>VLC as default media player</li>
						<li>Mouse Without Borders - 976VGFdrmb</li>
						<li>S-VMX Titanium Client: 172.16.xx.96:80</li>
						<li>Username: mitron, Password: mitron</li>
					</ul>
				</li>
			</ul>
				<h3>Shortcuts</h3>
				<ul>
					<li>Windows + L => Lock your computer!</li>
					<li>Windows + Shift + S => Snip tool shortcut</li>
					<li>Windows + E => Windows explorer</li>
					<li>Windows + D => Minimize all windows</li>
					<li>Ctrl + L, Alt + Enter => duplicate tab (eg to make another CAD)</li>
				</ul>
		</section>
	);
};

export default NercResources;
