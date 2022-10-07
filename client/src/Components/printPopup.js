import React from 'react';

const PrintPopup = ({ closePopups }) => {
	return (
		<div id='print' className='popup'>
			<div className='popupx' id='printx' onClick={closePopups}>X</div>
			<h3>How to Print Maintenance Plan</h3>
			<ul>
				<li>Select columns from 'Day/Date' to 'Description' (inclusive). No need to include other columns.</li>
				<li>Change font to 18</li>
				<li>Adjust row heights (by double-clicking on the row, close to its bottom) <strong>** Important Step **</strong></li>
				<li>Press <em>Ctrl + P</em></li>
				<li>Under 'Printer Properties' select 'Color: Auto-Color' (middle one)</li>
				<li>Under settings:
					<ol>
						<li>Change 'Print Active Sheets' to 'Print Selection'</li>
						<li>Print One sided</li>
						<li>Collated</li>
						<li>Landscape Orientation</li>
						<li>Ledger (11 x 17)</li>
						<li>Narrow Margins</li>
						<li>Fit All Columns on One Page</li>
					</ol>
				</li>
				<li>Print and staple.</li>
			</ul>
		</div>
	);
};

export default PrintPopup;
