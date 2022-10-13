import React from 'react';
import { useRef } from 'react';

const AreaSelector = ({ selectedAreas, setSelectedAreas, diversionState, setDiversionState, openBoxes, setOpenBoxes }) => {

  let areaOneOne = useRef();
  let areaTwoOne = useRef();
  let areaThreeOne = useRef();
  let areaFourOne = useRef();
  let areaFiveOne = useRef();
  let areaSixOne = useRef();
  let areaSevenOne = useRef();
  let areaEightOne = useRef();
  let areaNineOne = useRef();
  let areaTenOne = useRef();
  let areaElevenOne = useRef();
  let areaTwelveOne = useRef();
  let areaThirteenOne = useRef();
  let areaFourteenOne = useRef();
      
  let areaOneTwo = useRef();
  let areaTwoTwo = useRef();
  let areaThreeTwo = useRef();
  let areaFourTwo = useRef();
  let areaFiveTwo = useRef();
  let areaSixTwo = useRef();
  let areaSevenTwo = useRef();
  let areaEightTwo = useRef();
  let areaNineTwo = useRef();
  let areaTenTwo = useRef();
  let areaElevenTwo = useRef();
  let areaTwelveTwo = useRef();
  let areaThirteenTwo = useRef();
  let areaFourteenTwo = useRef();


  function toggleArea(event) {
    const target = event.currentTarget;
    if(!selectedAreas.includes(target)) {
      target.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
      // closedAreas.push(target);
      setSelectedAreas(() => {
        return [...selectedAreas, target]
      });
    } else {
      target.style.backgroundColor = 'transparent';
      setSelectedAreas(() => {
        let areaIndex = selectedAreas.indexOf(target);
        let arr = [...selectedAreas];
        return arr.splice(areaIndex, 1);
      });
    }
  }

	if(openBoxes.areas) { 
    return (
		<div id='area-selector'>
			<p id='area-instruction'>Click all obstructed areas (click again to de-select)</p>
			<div id='track-one-areas'>
				<button className='area' onClick={toggleArea} ref={areaOneOne} id='area-one-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaTwoOne} id='area-two-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaThreeOne} id='area-three-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaFourOne} id='area-four-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaFiveOne} id='area-five-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaSixOne} id='area-six-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaSevenOne} id='area-seven-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaEightOne} id='area-eight-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaNineOne} id='area-nine-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaTenOne} id='area-ten-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaElevenOne} id='area-eleven-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaTwelveOne} id='area-twelve-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaThirteenOne} id='area-thirteen-one'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaFourteenOne} id='area-fourteen-one'></button>
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
				<button className='area' onClick={toggleArea} ref={areaOneTwo} id='area-one-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaTwoTwo} id='area-two-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaThreeTwo} id='area-three-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaFourTwo} id='area-four-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaFiveTwo} id='area-five-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaSixTwo} id='area-six-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaSevenTwo} id='area-seven-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaEightTwo} id='area-eight-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaNineTwo} id='area-nine-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaTenTwo} id='area-ten-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaElevenTwo} id='area-eleven-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaTwelveTwo} id='area-twelve-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaThirteenTwo} id='area-thirteen-two'></button>&nbsp;
				<button className='area' onClick={toggleArea} ref={areaFourteenTwo} id='area-fourteen-two'></button>
			</div>
			<div id='bottom-buttons'>
				<button id='enter-plan-manually'>Enter Plan Manually</button>
				<button id='tunnel-one'>Downtown Tunnel Closed</button>
				<button id='tunnel-two'>Downtown Tunnel Closed, Stage 2 Fire Alarm</button>
				<button id='clear-all-areas'>Clear all</button>
			</div>
		</div>
	)}

};

export default AreaSelector;
