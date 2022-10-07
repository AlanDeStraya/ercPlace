import React from 'react';
// import { useState } from 'react';

import './obstructionFinder.css';

const ObstructionFinder = () => {
	return (
		<div id='obstruction-plan-finder'>
			<h2 id='finder-title'>Obstruction Plan Finder</h2>
			<div class='train-counter'>
				<p>Number of Trains: </p><span id='numOfTrains'>(11)</span> <button>Declare Manually</button>
			</div>
			<hr />

			<div id='obstruction-finding-area'>
				<p id='area-instruction'>Click all obstructed areas (click again to de-select)</p>
				<div id='track-one-areas'>
					<button class='area' id='area-one-one'></button>
					<button class='area' id='area-two-one'></button>
					<button class='area' id='area-three-one'></button>
					<button class='area' id='area-four-one'></button>
					<button class='area' id='area-five-one'></button>
					<button class='area' id='area-six-one'></button>
					<button class='area' id='area-seven-one'></button>
					<button class='area' id='area-eight-one'></button>
					<button class='area' id='area-nine-one'></button>
					<button class='area' id='area-ten-one'></button>
					<button class='area' id='area-eleven-one'></button>
					<button class='area' id='area-twelve-one'></button>
					<button class='area' id='area-thirteen-one'></button>
					<button class='area' id='area-fourteen-one'></button>
				</div>
				<div class='labels'>
					<p>TUN-W</p>
					<p>BAY-W</p>
					<p>PIM-W</p>
					<p>LYO-W</p>
					<p>PAR-W</p>
					<p>RID-W</p>
					<p>UOT-W</p>
					<p>LEE-W</p>
					<p>HUR-W</p>
					<p>TRE-W</p>
					<p class='label-extra-one'>STL-W</p>
					<p>CYR-W</p>
					<p class='label-extra-two'>BLA-W</p>
				</div>
				<div>
					<div class='t1s station'></div>
					<div class='t1s station'></div>
					<div class='t1s station cplat1'></div>
					<div class='t1s station'></div>
					<div class='t1s station'></div>
					<div class='t1s station'></div>
					<div class='t1s station'></div>
					<div class='t1s station'></div>
					<div class='t1s station'></div>
					<div class='t1s station'></div>
					<div class='t1s station stl'></div>
					<div class='t1s station cplat1'></div>
					<div class='t1s station cplat1 bla'></div>
				</div>

				<div id='track1'></div>
				<div id='xovers'>
					<div class='xover' id='tunx'><p>X</p></div>
					<div class='xover' id='lyox'><p>X</p></div>
					<div class='xover' id='uotx'><p>X</p></div>
					<div class='xover' id='hurx'><p>/ \</p></div>
					<div class='xover' id='trex'><p>/ \</p></div>
					<div class='xover' id='stlx'><p>/ \</p></div>
					<div class='xover' id='blax'><p>\ /</p></div>
				</div>
				<div id='track2'></div>

				<div>
					<div class='t2s station'></div>
					<div class='t2s station'></div>
					<div class='t2s station cplat2'></div>
					<div class='t2s station'></div>
					<div class='t2s station'></div>
					<div class='t2s station'></div>
					<div class='t2s station'></div>
					<div class='t2s station'></div>
					<div class='t2s station'></div>
					<div class='t2s station'></div>
					<div class='t2s station stl'></div>
					<div class='t2s station cplat2'></div>
					<div class='t2s station cplat2 bla'></div>
				</div>
				<div class='labels'>
					<p>TUN-E</p>
					<p>BAY-E</p>
					<p>PIM-E</p>
					<p>LYO-E</p>
					<p>PAR-E</p>
					<p>RID-E</p>
					<p>UOT-E</p>
					<p>LEE-E</p>
					<p>HUR-E</p>
					<p>TRE-E</p>
					<p class='label-extra-one'>STL-E</p>
					<p>CYR-E</p>
					<p class='label-extra-two'>BLA-E</p>
				</div>
				<div id='track-two-areas'>
					<button class='area' id='area-one-two'></button>
					<button class='area' id='area-two-two'></button>
					<button class='area' id='area-three-two'></button>
					<button class='area' id='area-four-two'></button>
					<button class='area' id='area-five-two'></button>
					<button class='area' id='area-six-two'></button>
					<button class='area' id='area-seven-two'></button>
					<button class='area' id='area-eight-two'></button>
					<button class='area' id='area-nine-two'></button>
					<button class='area' id='area-ten-two'></button>
					<button class='area' id='area-eleven-two'></button>
					<button class='area' id='area-twelve-two'></button>
					<button class='area' id='area-thirteen-two'></button>
					<button class='area' id='area-fourteen-two'></button>
				</div>
				<div id='bottom-buttons'>
					<button id='manual'>Enter Plan Manually</button>
					<button id='tunnel-one'>Downtown Tunnel Closed</button>
					<button id='tunnel-two'>Downtown Tunnel Closed, Stage 2 Fire Alarm</button>
					<button id='clear'>Clear all</button>
				</div>
			</div>
			<hr />
			<div id='graphic'></div>
			<div id='details' class='bolded'></div>
			<div id='papids' class='bolded'></div>
			<div id='cs'></div>
			<br /><br /><br /><br />

		</div>
	);
};

/*
Duplicate - 2.7/3.4 - but different # of trains for east loop
When 'if 13, park trains' - what if 15?
Plans for lost crossovers?
3.2 should be only to HUR west crossover
Many more scenarios not covered by current plans and diagrams
Diagrams not always totally accurate/specific (1.1 vs 1.3)
Graphic for 2.4 shows trains looping TUN-PAR but the plan says 2 shuttles offset TUN-LYO
*/

/*
also include Thales commands, special instructions, basically all the info they need to implement the diversion. Perhaps integrate PA/PIDS (if it's possible to do without making it messy, or do a separate one for that purpose).
*/

export default ObstructionFinder;
