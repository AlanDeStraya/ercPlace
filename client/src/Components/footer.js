import React from 'react';

const Footer = ({ setSiteUpdatesPopupActive }) => {

	return (
		<footer>
			<div>
				<a id='top-link' href='#top'>^Top</a>
			</div>
			<div>
				<p>Updated 2022-09-18 <em>
					<a id='updatesLink'
						href='#top-link'
						onClick={() => setSiteUpdatesPopupActive(true)} >List of Updates</a>
				</em></p>
			</div>
			<div>
			<a href='mailto:alan@erc.place'>Contact: alan@erc.place</a>
			</div>
		</footer>
	);
};

export default Footer;
