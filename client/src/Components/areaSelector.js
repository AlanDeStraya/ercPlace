import React from 'react';
import { useState, useRef } from 'react';

const areaArray = ['area-one-one', 'area-two-one', 'area-three-one', 'area-four-one', 'area-five-one', 'area-six-one', 'area-seven-one', 'area-eight-one', 'area-nine-one', 'area-ten-one', 'area-eleven-one', 'area-twelve-one', 'area-thirteen-one', 'area-fourteen-one', 'area-one-two', 'area-two-two', 'area-three-two', 'area-four-two', 'area-five-two', 'area-six-two', 'area-seven-two', 'area-eight-two', 'area-nine-two', 'area-ten-two', 'area-eleven-two', 'area-twelve-two', 'area-thirteen-two', 'area-fourteen-two'];

const AreaSelector = ({ diversionState, setDiversionState, socket }) => {

	const [areas, setAreas] = useState(areaArray.reduce(
    (options, option) => ({...options, [option]: false}), {}
  ));

  function clearAll() {
    Object.keys(areas).forEach(checkbox => {
      setAreas(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: false
        }
      }));
    });
  };

  function handleAreaChange(changeEvent) {
    const { name } = changeEvent.target;

    setAreas(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  /*
  function confirmAreas(event) {
    event.preventDefault();
    socket.emit('cChosePlan', areas);
  };
  */

  function createArea(areaName) {
	console.log('creating area');
    return (
      <div className='area-container' key={areaName}>
        <input onCheckboxChange={handleAreaChange} isSelected={areas[areaName]} type='checkbox' className='area-checkbox' id={`${areaName}-box`} />
        <label className='area' id={areaName} htmlFor={`${areaName}-box`}></label>&nbsp;
      </div>
    )
  };

  function createAreasOne() {
	console.log('creating areasss');
    return areaArray.slice(0, areaArray.legnth / 2).map(a => createArea(a));
  };
  function createAreasTwo() {
    areaArray.slice(areaArray.length / 2).map(a => createArea(a));
  };

/*
  function toggleArea(event) {
	console.log(event.currentTarget);
	console.log(atreas);
    const target = event.currentTarget;
    if(areats.includes(target) === false) {
      target.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
      setAreas(() => {
				let arr = [...areas, target];
        return arr;
      });
    } else if(areas.includes(target) === true) {
      target.style.backgroundColor = 'transparent';
      setAreas(() => {
        let arr = [...areas];
        let areaIndex = arr.indexOf(target);
        return arr.splice(areaIndex, 1);
      });
    }
    console.log(areas);
  }
  ///////////////////////////////////////////////////////////////////////////////////
  good explanation for checkboxes
  http://react.tips/checkboxes-in-react-16/
  
   import React, { Component } from "react";
import Checkbox from "./Checkbox";
const OPTIONS = ["One", "Two", "Three"];
class App extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };
  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };
  selectAll = () => this.selectAllCheckboxes(true);
  deselectAll = () => this.selectAllCheckboxes(false);
  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };
  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
  
  */

	function toggleArea() {
		console.log('eff');
	}
 
    return (
		<div id='area-selector'>
			<p id='area-instruction'>Click all obstructed areas (click again to de-select)</p>
			<div id='track-one-areas'>
        {createAreasOne()}
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
				{createAreasTwo()}
			</div>
			<div id='bottom-buttons'>
				<button id='enter-plan-manually' onClick={() => {
					setDiversionState(() => {
						let obj = Object.assign({}, diversionState);
						obj.planNumber = window.prompt('Enter plan number:');
						return obj;
					})
				}
					
				}>Enter Plan Manually</button>
				<button id='tunnel-one'>Downtown Tunnel Closed</button>
				<button id='tunnel-two'>Downtown Tunnel Closed, Stage 2 Fire Alarm</button>
				<button id='clear-all-areas' onClick={clearAll}>Clear all</button>
			</div>
		</div>
	)
};

export default AreaSelector;
