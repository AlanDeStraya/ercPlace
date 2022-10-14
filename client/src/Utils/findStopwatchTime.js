function findStopwatchTime(startTime) {
	const now = Date.now();
	let diffInSeconds = Math.floor((now - startTime) / 1000);	
	let seconds = diffInSeconds % 60;
	let minutes = Math.floor(diffInSeconds / 60);
	let hours = Math.floor(diffInSeconds / 360);
	if(seconds < 10) {
		seconds = `0${seconds}`;
	} else {
		seconds = `${seconds}`;
	}
	if(minutes < 10) {
		minutes = `0${minutes}`;
	} else {
		minutes = `${minutes}`;
	}
	if(hours < 10) {
		hours = `0${hours}`;
	} else {
		hours = `${hours}`;
	}

	console.log(seconds);
	console.log(minutes);
	console.log(hours);

	if(hours == 0) {
		return `${minutes}:${seconds}`;
	} else {
		return `${hours}:${minutes}:${seconds}`;
	}
};

export default findStopwatchTime;
