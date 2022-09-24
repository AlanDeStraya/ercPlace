import React from 'react';

const Header = () => {
	return (
		<>
			<header>
				<div id='tabs'>
					<h1>ERC.Place</h1>
					<h1>Diversion</h1>
				</div>

				<nav>
					<ul>
						<li><a href='./iosReference.html' target='_blank'>IOS Reference</a></li>
						<li><a href='#rules'>Rules</a></li>
						<li><a href='#workInstructions'>Work Instructions</a></li>
						<li><a href='#troubleshooting'>Troubleshooting</a></li>
						<li><a href='#misc'>Misc</a></li>
						<li><a href='#manuals'>Manuals</a></li>
						<li><a href='#teams'>Teams Files</a></li>
						<li><a href='#resources'>NERC</a></li>
					</ul>
				</nav>
			</header>
			<div id='topSpacer'></div>
		</>
	);
};

export default Header;