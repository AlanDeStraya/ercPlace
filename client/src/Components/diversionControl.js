import React from 'react';
import { useState } from 'react';

const DiversionControl = ({ socket, diversionState, setDiversionState }) => {

  const [eventStartTime, setEventStartTime] = useState();

  socket.on('sStartEvent', time => {
	console.log(time);
	setEventStartTime(time);
  });


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
          }} >START</button>}

      {diversionState.open ? diversionState.active ? <p id='stopwatch'></p> 
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
