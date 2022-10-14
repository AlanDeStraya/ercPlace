import React from 'react';
import { useEffect, useState } from 'react';

import findStopwatchTime from '../Utils/findStopwatchTime.js';

const DiversionControl = ({ socket, diversionState, setDiversionState }) => {
	
  socket.on('sStartEvent', time => {
		console.log(time);
		setDiversionState(() => {
			let obj = Object.assign({}, diversionState);
			obj.startTime = time;
			return obj;
		});
  });


	useEffect(() => {
		let interval = null;
		console.log(diversionState);
		if(diversionState.active) {
			interval = setInterval(() => {
				setDiversionState(() => {
					let obj = Object.assign({}, diversionState);
					obj.stopwatchTime = findStopwatchTime(diversionState.startTime);
					return obj
				});
			}, 1000);
		} else if(!diversionState.active && diversionState.stopwatchTime != 0) {
			clearInterval(interval);
		}
		console.log(diversionState);
		return () => clearInterval(interval);
	}, [diversionState.active, diversionState.stopwatchTime]);


  return (
    <div id='diversion-control'>
      {!diversionState.open && <button id='event-start-button'
	        onClick={() => {
					  const eventStartTime = Date.now();
					  socket.emit('cStartEvent', eventStartTime)
            setDiversionState(diversionState => {
              let obj = Object.assign({}, diversionState);
              obj.active = true;
              obj.open = true;
              return obj;
            });
          }}>START</button>}

      {diversionState.open ? diversionState.active ? <p id='stopwatch'>{findStopwatchTime(diversionState.startTime)}</p> 
      : <button
        onClick={() => {
          setDiversionState(diversionState => {
            let obj = Object.assign({}, diversionState);
            obj.open = false;
            return obj;
          });
        }}>Close and Log</button> : null }

      {diversionState.active && <button id='event-end-button'
          onClick={() => {
            if(window.confirm('Are you sure?') === false) {return};
            setDiversionState(diversionState => {
              let obj = Object.assign({}, diversionState);
              obj.active = false;
              return obj;
            });
          }}>End Event</button>}
    </div>
  );

};

export default DiversionControl;





/*

example timer in react

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
*/
