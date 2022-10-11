export function findScheduledTrains() {
	const now = new Date();
	const day = now.getDay();
	const hour = now.getHours();
	
	//if 13 train schedule
	
	if(day === 0) {
		//sun
		if(hour < 3) {
			return 7;
		} else if(hour >= 9 && hour < 19) {
			return 11;
		} else if(hour >= 19 && hour < 23) {
			return 7;
		} else {
			return 0;
		}
	} else if(day >= 1 && day <= 4) {
		//m-t
		if(hour < 1 && day !== 1){
			return 4;
		} else if(hour === 5) {
			return 7;
		} else if(hour >= 6 && hour < 9) {
			return 13;
		} else if(hour >= 9 && hour < 14) {
			return 11;
		} else if(hour >= 14 && hour < 18) {
			return 13;
		} else if(hour >= 18 && hour < 22) {
			return 11;
		} else if(hour >= 22 && hour < 23) {
			return 7;
		} else if(hour >= 23) {
			return 4;
		} else {
			return 0;
		}
	} else if(day === 5) {
		//f
		if(hour < 1 && day !== 1){
			return 4;
		} else if(hour === 5) {
			return 7;
		} else if(hour >= 6 && hour < 9) {
			return 13;
		} else if(hour >= 9 && hour < 14) {
			return 11;
		} else if(hour >= 14 && hour < 18) {
			return 13;
		} else if(hour >= 18 && hour < 22) {
			return 11;
		} else if(hour >= 22) {
			return 7;
		} else {
			return 0;
		}
	} else if(day === 6) {
		//sat
		if(hour < 2){
			return 7;
		} else if(hour >= 6 && hour < 19) {
			return 11;
		} else if(hour >= 19) {
			return 7;
		} else {
			return 0;
		}
	}
};