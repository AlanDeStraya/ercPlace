import React from 'react';
import { useState, useRef } from 'react';

const AreaSelector = ({ diversionState, setDiversionState }) => {

	const [selectedAreas, setSelectedAreas] = useState([]);

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
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
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
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-one-one' />
          <label className='area' id='area-one-one' for='a-one-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-two-one' />
          <label className='area' id='area-two-one' for='a-two-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-three-one' />
          <label className='area' id='area-three-one' for='a-three-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-four-one' />
          <label className='area' id='area-four-one' for='a-four-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-five-one' />
          <label className='area' id='area-five-one' for='a-five-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-six-one' />
          <label className='area' id='area-six-one' for='a-six-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-seven-one' />
          <label className='area' id='area-seven-one' for='a-seven-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-eight-one' />
          <label className='area' id='area-eight-one' for='a-eight-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-nine-one' />
          <label className='area' id='area-nine-one' for='a-nine-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-ten-one' />
          <label className='area' id='area-ten-one' for='a-ten-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-eleven-one' />
          <label className='area' id='area-eleven-one' for='a-eleven-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-twelve-one' />
          <label className='area' id='area-twelve-one' for='a-twelve-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-thirteen-one' />
          <label className='area' id='area-thirteen-one' for='a-thirteen-one'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-fourteen-one' />
          <label className='area' id='area-fourteen-one' for='a-fourteen-one'></label>
        </div>
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
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-one-two' />
          <label className='area' for='a-one-two' id='area-one-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-two-two' />
          <label className='area' for='a-two-two' id='area-two-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-three-two' />
          <label className='area' for='a-three-two' id='area-three-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-four-two' />
          <label className='area' for='a-four-two' id='area-four-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-five-two' />
          <label className='area' for='a-five-two' id='area-five-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-six-two' />
          <label className='area' for='a-six-two' id='area-six-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-seven-two' />
          <label className='area' for='a-seven-two' id='area-seven-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-eight-two' />
          <label className='area' for='a-eight-two' id='area-eight-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-nine-two' />
          <label className='area' for='a-nine-two' id='area-nine-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-ten-two' />
          <label className='area' for='a-ten-two' id='area-ten-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-eleven-two' />
          <label className='area' for='a-eleven-two' id='area-eleven-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-twelve-two' />
          <label className='area' for='a-twelve-two' id='area-twelve-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-thirteen-two' />
          <label className='area' for='a-thirteen-two' id='area-thirteen-two'></label>&nbsp;
        </div>
				<div className='area-container'>
          <input type='checkbox' className='area-checkbox' id='a-fourteen-two' />
          <label className='area' for='a-fourteen-two' id='area-fourteen-two'></label>
        </div>
			</div>
			<div id='bottom-buttons'>
				<button id='enter-plan-manually' onClick={() => {
					setDiversionState(() => {
						let obj = Object.assign({}, diversionState);
						obj.planNumber = window.prompt('Enter plan number:').replace('.', 'p');
						return obj;
					})
				}
					
				}>Enter Plan Manually</button>
				<button id='tunnel-one'>Downtown Tunnel Closed</button>
				<button id='tunnel-two'>Downtown Tunnel Closed, Stage 2 Fire Alarm</button>
				<button id='clear-all-areas'>Clear all</button>
			</div>
		</div>
	)
};

export default AreaSelector;