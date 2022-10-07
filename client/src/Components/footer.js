import React from 'react';

const Footer = ({ setSiteUpdatesPopupActive }) => {

	function openSiteUpdatesPopup() {
		setSiteUpdatesPopupActive(true);
	};

	return (
		<footer>
			<div>
				<a id='top-link' href='#top'>^Top</a>
			</div>
			<div>
				<p>Updated 2022-09-18 <em>
					<a id='updatesLink'
						href='#top-link'
						onClick={openSiteUpdatesPopup} >List of Updates</a>
				</em></p>
			</div>
			<div>
			<a href='mailto:alan@erc.place'>Contact: alan@erc.place</a>
			</div>
		</footer>
	);
};

export default Footer;
