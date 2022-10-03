import React from 'react';

const Header = ({ darkness, toggleDarkness }) => {



	return (
		<>
			<header>
				<div id='tabs'>
					<h1>ERC.Place</h1>
					<h1>Diversion</h1>
				</div>

				<div id='header-right'>
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
					{ darkness === 'dark' ?
					<button className='dark-mode-button' onClick={() => toggleDarkness('light')}><i class="fa-solid fa-sun"></i></button> :
					<button className='dark-mode-button' onClick={() => toggleDarkness('dark')}><i class="fa-solid fa-moon"></i></button> }
				</div>
			</header>
			<div id='topSpacer'></div>
		</>
	);
};

export default Header;
