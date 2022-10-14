function findStopwatchTime(startTime) {
	const now = Date.now();
	let diff = (now - startTime);	
	let seconds = Math.floor((diff / 1000) % 60);
	let minutes = Math.floor((diff / 1000 / 60) % 60);
	let hours = Math.floor((diff / 1000 / 60 / 60) % 24);
	
  if(hours === 0) {
    return [
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  } else {
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  }
};

export default findStopwatchTime;
