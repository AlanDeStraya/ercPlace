import React from 'react';

const Header = ({ darkness, toggleDarkness, openTab, setOpenTab }) => {

	function chooseTab() {
		if(openTab === 'SharepointPlus') {
			return (
				<div id='tabs'>
					<h1 className='open-tab'>ERC.Place</h1>
					<h1 onClick={() => setOpenTab('Diversion')}>Diversion</h1>
					<h1 onClick={() => setOpenTab('IosReference')}>IOS Codes</h1>
				</div>
					);
		} else if(openTab === 'Diversion') {
			return (
				<div id='tabs'>
					<h1 onClick={() => setOpenTab('SharepointPlus')}>ERC.Place</h1>
					<h1 className='open-tab'>Diversion</h1>
					<h1 onClick={() => setOpenTab('IosReference')}>IOS Codes</h1>
				</div>
					);
		} else if(openTab === 'IosReference') {
			return (
				<div id='tabs'>
					<h1 onClick={() => setOpenTab('SharepointPlus')}>ERC.Place</h1>
					<h1 onClick={() => setOpenTab('Diversion')}>Diversion</h1>
					<h1 className='open-tab'>IOS Codes</h1>
				</div>
					);
		}
	}


	return (
		<>
			<header>

					{chooseTab()}


				<div id='header-right'>
					<nav>
						<ul>
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
					<button className='dark-mode-button sharepointButton' onClick={() => toggleDarkness('light')}><i class="fa-solid fa-sun"></i></button> :
					<button className='dark-mode-button sharepointButton' onClick={() => toggleDarkness('dark')}><i class="fa-solid fa-moon"></i></button> }
				</div>
			</header>
			<div id='topSpacer'></div>
		</>
	);
};

export default Header;
