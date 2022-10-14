import React from 'react';
import { useEffect, useState } from 'react';

import findStopwatchTime from '../Utils/findStopwatchTime.js';

const DiversionControl = ({ socket, diversionState, setDiversionState }) => {

	const [startTime, setStartTime] = useState(0);
	const [stopwatchTime, setStopwatchTime] = useState('');

  socket.on('sStartEvent', time => {
		console.log(time);
		setStartTime(() => {
			return time;
		});
  });


	useEffect(() => {
		let interval = null;
		console.log(startTime);
		if(diversionState.active) {
			interval = setInterval(() => {
				setStopwatchTime(() => {
					return findStopwatchTime(startTime);
				});
			}, 1000);
		} else if(!diversionState.active && stopwatchTime != 0) {
			clearInterval(interval);
		}
		console.log(stopwatchTime);
		return () => clearInterval(interval);
	}, [diversionState.active, stopwatchTime]);


  return (
    <div id='diversion-control'>
      {!diversionState.open && <button id='event-start-button'
	onClick={() => {
		const eventStartTime = Date.now();
		socket.emit('cStartEvent', eventStartTime)
		setDiversionState(() => {
              let obj = Object.assign({}, diversionState);
              obj.active = true;
              obj.open = true;
              return obj;
            });
          }}>START</button>}

      {diversionState.open ? diversionState.active ? <p id='stopwatch'>{stopwatchTime}</p> 
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
