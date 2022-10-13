import React from 'react';
import { useState, useRef } from 'react';

const AreaSelector = ({ selectedAreas, setSelectedAreas, diversionState, setDiversionState, openBoxes }) => {



/*
  function toggleArea(event) {
	console.log(event.currentTarget);
	console.log(selectedAreas);
    const target = event.currentTarget;
    if(selectedAreas.includes(target) === false) {
      target.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
      setSelectedAreas(() => {
				let arr = [...selectedAreas, target];
        return arr;
      });
    } else if(selectedAreas.includes(target) === true) {
      target.style.backgroundColor = 'transparent';
      setSelectedAreas(() => {
        let arr = [...selectedAreas];
        let areaIndex = arr.indexOf(target);
        return arr.splice(areaIndex, 1);
      });
    }
    console.log(selectedAreas);
  }*/

function toggleArea() {
	console.log('eff');
}

	if(openBoxes.areas) { 
    return (
		<div id='area-selector'>
			<p id='area-instruction'>Click all obstructed areas (click again to de-select)</p>
			<div id='track-one-areas'>
				<button className='area' onClick={toggleArea} id='area-one-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-two-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-three-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-four-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-five-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-six-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-seven-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-eight-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-nine-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-ten-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-eleven-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-twelve-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-thirteen-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-fourteen-one'></button>
			</div>
			<div className='labels'>
				<p>TUN-W</p>&nbsp;
				<p>BAY-W</p>&nbsp;
				<p>PIM-W</p>&nbsp;
				<p>LYO-W</p>&nbsp;
				<p>PAR-W</p>&nbsp;
				<p>RID-W</p>&nbsp;
				<p>UOT-W</p>&nbsp;
				<p>LEE-W</p>&nbsp;
				<p>HUR-W</p>&nbsp;
				<p>TRE-W</p>&nbsp;
				<p className='label-extra-one'>STL-W</p>&nbsp;
				<p>CYR-W</p>&nbsp;
				<p className='label-extra-two'>BLA-W</p>
			</div>
			<div>
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station cplat1'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station'></div>&nbsp;
				<div className='t1s station stl'></div>&nbsp;
				<div className='t1s station cplat1'></div>&nbsp;
				<div className='t1s station cplat1 bla'></div>
			</div>

			<div id='track1'></div>
			<div id='xovers'>
				<div className='xover' id='tunx'><p>X</p></div>
				<div className='xover' id='lyox'><p>X</p></div>
				<div className='xover' id='uotx'><p>X</p></div>
				<div className='xover' id='hurx'><p>/ \</p></div>
				<div className='xover' id='trex'><p>/ \</p></div>
				<div className='xover' id='stlx'><p>/ \</p></div>
				<div className='xover' id='blax'><p>\ /</p></div>
			</div>
			<div id='track2'></div>

			<div>
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station cplat2'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station'></div>&nbsp;
				<div className='t2s station stl'></div>&nbsp;
				<div className='t2s station cplat2'></div>&nbsp;
				<div className='t2s station cplat2 bla'></div>
			</div>
			<div className='labels'>
				<p>TUN-E</p>&nbsp;
				<p>BAY-E</p>&nbsp;
				<p>PIM-E</p>&nbsp;
				<p>LYO-E</p>&nbsp;
				<p>PAR-E</p>&nbsp;
				<p>RID-E</p>&nbsp;
				<p>UOT-E</p>&nbsp;
				<p>LEE-E</p>&nbsp;
				<p>HUR-E</p>&nbsp;
				<p>TRE-E</p>&nbsp;
				<p className='label-extra-one'>STL-E</p>&nbsp;
				<p>CYR-E</p>&nbsp;
				<p className='label-extra-two'>BLA-E</p>
			</div>
			<div id='track-two-areas'>
				<button className='area' onClick={toggleArea} id='area-one-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-two-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-three-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-four-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-five-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-six-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-seven-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-eight-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-nine-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-ten-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-eleven-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-twelve-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-thirteen-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} id='area-fourteen-two'></button>
			</div>
			<div id='bottom-buttons'>
				<button id='enter-plan-manually' onClick={() => {
					setDiversionState(() => {
						let obj = Object.assign({}, diversionState);
						let num = window.prompt('Enter plan number:');
						console.log(num);
						obj.planNumber = num.replace('.', 'p');
						console.log(obj.planNumber);
						return obj;
					})
				}
					
				}>Enter Plan Manually</button>
				<button id='tunnel-one'>Downtown Tunnel Closed</button>
				<button id='tunnel-two'>Downtown Tunnel Closed, Stage 2 Fire Alarm</button>
				<button id='clear-all-areas'>Clear all</button>
			</div>
		</div>
	)}

};

export default AreaSelector;
