function choosePlan(stateObj, areas) {
	const checkedAreas = [...areas];
  const numAreas = checkedAreas.filter(i => i).length;
  let numTrains = stateObj.numTrains;
  let plan;
  
	if((numTrains >= 7 && numTrains <= 12) && (((checkedAreas[0] || checkedAreas[1]) && numAreas === 1) 
			|| (checkedAreas[0] && checkedAreas[1] && numAreas === 2))) {
		plan = '1p1';
			
	} else if((numTrains >= 7 && numTrains <= 12) && (((checkedAreas[14] || checkedAreas[15]) && numAreas === 1) 
			|| (checkedAreas[14] && checkedAreas[15] && numAreas === 2))) {
		plan = '1p2';
		
	} else if(numTrains <= 6 && ((checkedAreas[0] && numAreas === 1)
			|| (checkedAreas[1] && numAreas === 1)
			|| (checkedAreas[0] && checkedAreas[1] && numAreas === 2))) {
		plan = '1p3';
				
	} else if(numTrains <= 6 && ((checkedAreas[14] && numAreas === 1)
			|| (checkedAreas[14] && numAreas === 1)
			|| (checkedAreas[15] && numAreas === 1)
			|| (checkedAreas[14] && checkedAreas[15] && numAreas === 2))) {
		plan = '1p4';
		
	} else if((numTrains >= 13 && (checkedAreas[0] || checkedAreas[1] 
			|| checkedAreas[14] || checkedAreas[15]) && numAreas === 1)
			|| (((checkedAreas[0] && checkedAreas[14]) || (checkedAreas[0] && checkedAreas[15]) 
			|| (checkedAreas[14] && checkedAreas[1])) && numAreas === 2)
			|| (numTrains >= 13 && ((checkedAreas[0] && checkedAreas[1]) && (checkedAreas[14] && checkedAreas[15])) && numAreas === 2)
			|| (checkedAreas[0] && checkedAreas[14] && checkedAreas[1] && numAreas === 3)
			|| (checkedAreas[0] && checkedAreas[14] && checkedAreas[15] && numAreas === 3)) {
		plan = '1p5';
		
	} else if((((checkedAreas[1] && checkedAreas[15]) && numAreas === 2)
			|| ((checkedAreas[1] && checkedAreas[15] && checkedAreas[0])	|| (checkedAreas[1] && checkedAreas[15] && checkedAreas[14])) && numAreas === 3)
			|| (checkedAreas[1] && checkedAreas[15] && checkedAreas[0] && checkedAreas[14] && numAreas === 4)) {
		plan = '1p6';
		
	} else if(numTrains <= 12 && (
			((checkedAreas[2] || checkedAreas[3] || checkedAreas[4]) && numAreas === 1) 
			|| (((checkedAreas[2] && checkedAreas[3]) || (checkedAreas[2] && checkedAreas[4]) || (checkedAreas[3] && checkedAreas[4])) && numAreas === 2)
			|| (checkedAreas[2] && checkedAreas[3] && checkedAreas[4] && numAreas === 3)))	{
		plan = '2p1';
		
	} else if(
		numTrains <= 12 && (
			((checkedAreas[16] || checkedAreas[17] || checkedAreas[18]) && numAreas === 1)
			|| (((checkedAreas[16] && checkedAreas[17]) || (checkedAreas[16] && checkedAreas[18]) || (checkedAreas[17] && checkedAreas[18])) && numAreas === 2)
			|| (checkedAreas[16] && checkedAreas[17] && checkedAreas[18] && numAreas === 3)))	{
		plan = '2p2';
		
	} else if(
		numTrains > 12 && ((
			((checkedAreas[2] || checkedAreas[3] || checkedAreas[4]) && numAreas === 1)
			|| (((checkedAreas[2] && checkedAreas[3]) || (checkedAreas[3] && checkedAreas[4])) && numAreas === 2)
			|| (checkedAreas[2] && checkedAreas[3] && checkedAreas[4] && numAreas === 3))
			|| (((checkedAreas[16] || checkedAreas[17] || checkedAreas[18]) && numAreas === 1)
			|| (((checkedAreas[16] && checkedAreas[17]) || (checkedAreas[17] && checkedAreas[18])) && numAreas === 2)
			|| (checkedAreas[16] && checkedAreas[17] && checkedAreas[18] && numAreas === 3))))	{
		plan = '2p3';
		
	} else if((checkedAreas[2] && checkedAreas[16]) && numAreas === 2)	{
		plan = '2p4';
		
	} else if(checkedAreas[4] && checkedAreas[18] && numAreas === 2) {
		plan = '2p5';
		
	} else if(checkedAreas[2] && checkedAreas[3] && checkedAreas[4] 
			&& checkedAreas[16] && checkedAreas[17] && checkedAreas[18] && numAreas === 6) {
		plan = '2p6';
		
	} else if(checkedAreas[5] && checkedAreas[19] && numAreas === 2) {
		plan = '2p7';
		
	} else if(numTrains < 13 && (((checkedAreas[6] || checkedAreas[7] || checkedAreas[8]) && numAreas === 1) 
			|| (((checkedAreas[6] && checkedAreas[7]) || (checkedAreas[7] && checkedAreas[8]) || (checkedAreas[6] && checkedAreas[8]) ) && numAreas === 2 ) || (checkedAreas[6] && checkedAreas[7] && checkedAreas[8] && numAreas === 3))) {
		plan = '3p1';
		
	} else if(numTrains < 13 && ( ((checkedAreas[20] || checkedAreas[21] || checkedAreas[22]) && numAreas === 1) 
			|| (((checkedAreas[20] && checkedAreas[21]) || (checkedAreas[21] && checkedAreas[22]) || (checkedAreas[20] && checkedAreas[22]) ) && numAreas === 2 ) || (checkedAreas[20] && checkedAreas[21] && checkedAreas[22] && numAreas === 3))) {
		plan = '3p2';
		
	} else if(checkedAreas[23] && numAreas === 1) {
		plan = '3p3';
		
	} else if(checkedAreas[6] && checkedAreas[20] && numAreas === 2) {
		plan = '3p4';
		
	} else if((checkedAreas[7] && checkedAreas[21] && numAreas === 2) 
			|| (numTrains > 12 && (checkedAreas[6] || checkedAreas[7] || checkedAreas[8]
			|| checkedAreas[20] || checkedAreas[21] || checkedAreas[22]) && numAreas === 1)) {
		plan = '3p5';
		
	} else if(checkedAreas[8] && checkedAreas[22] && numAreas === 2) {
		plan = '3p6';
		
	} else if(checkedAreas[10] && numAreas === 1) {
		plan = '4p1';
		
	} else if(checkedAreas[24] && numAreas === 1) {
		plan = '4p2';
		
	} else if(checkedAreas[10] && checkedAreas[24] && numAreas === 2) {
		plan = '4p3';
		
	} else if(checkedAreas[11] && numAreas === 1) {
		plan = '5p1';
		
	} else if(checkedAreas[25] && numAreas === 1) {
		plan = '5p2';
		
	} else if(checkedAreas[11] && checkedAreas[25] && numAreas === 2) {
		plan = '5p3';
		
	} else if(numTrains > 6 && numTrains < 13 && (checkedAreas[12] || checkedAreas[13]) && numAreas === 1) {
		plan = '6p1';
		
	} else if(numTrains > 6 && numTrains < 13 && (checkedAreas[26] || checkedAreas[27]) && numAreas === 1) {
		plan = '6p2';
		
	} else if(numTrains < 7 && (((checkedAreas[12] || checkedAreas[13]) && numAreas === 1)
			|| (checkedAreas[12] && checkedAreas[13] && numAreas === 2))) {
		plan = '6p3';
		
	} else if(numTrains < 7 && (((checkedAreas[26] || checkedAreas[27]) && numAreas === 1)
			|| (checkedAreas[26] && checkedAreas[27] && numAreas === 2))) {
		plan = '6p4';
		
	} else if(
		(checkedAreas[13] && checkedAreas[27] && numAreas === 2)
			|| (numTrains >= 13 && (checkedAreas[13] || checkedAreas[27]) && numAreas === 1)
			|| (numTrains >= 13 && (checkedAreas[12] || checkedAreas[26]) && numAreas === 1)) {
		plan = '6p5';
		
	} else if(checkedAreas[12] && checkedAreas[26] && numAreas === 2) {
		plan = '6p6';
		
	} else if(checkedAreas[1] && checkedAreas[2] && checkedAreas[3] && checkedAreas[4] &&
		checkedAreas[15] && checkedAreas[16] && checkedAreas[17] && checkedAreas[18] && numAreas === 8) {
		plan = '7p1';
		
	} else if(checkedAreas[1] && checkedAreas[2] && checkedAreas[3] && checkedAreas[4] && checkedAreas[5] && 
		checkedAreas[15] && checkedAreas[16] && checkedAreas[17] && checkedAreas[18] && checkedAreas[19] && numAreas === 10) {
		plan = '7p2';
		
	} else {
		plan = '';
	}
  return plan.replace('p', '.');
}

export default choosePlan;
