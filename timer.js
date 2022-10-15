//timer

const [diversionState, setDiversionState] = useState({active: false, open: false, startTime: 0, stopwatchTime: 0, numTrains: undefined, numTrainsDeclared: false, planNumber: '', issue: '', trainNumber: '', location: ''});


//diversion control
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




//server
  socket.on('cStartEvent', time => {
    io.emit('sStartEvent', time);
  });




//diversion control
	  socket.on('sStartEvent', time => {
		console.log(time);
		setDiversionState(() => {
			let obj = Object.assign({}, diversionState);
			obj.startTime = time;
			console.log(obj)
			return obj;
		});
  });
	
	
	
	
//diversion control
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
	
	
//diversion control
	<p id='stopwatch'>{startTime}</p>