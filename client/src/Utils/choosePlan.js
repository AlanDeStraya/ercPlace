function choosePlan() {
  const numAreas = checkedAreas.filter(i => i).length;
  let numTrains = diversionState.numTrains;
  let plan;
  /*
3 areaFourOne
4 areaFiveOne
5 areaSixOne
6 areaSevenOne
7 areaEightOne
8 areaNineOne
9 areaTenOne
10 areaElevenOne
11 areaTwelveOne
12 areaThirteenOne
13 areaFourteenOne
16 areaThreeTwo
17 areaFourTwo
18 areaFiveTwo
19 areaSixTwo
20 areaSevenTwo
21 areaEightTwo
22 areaNineTwo
23 areaTenTwo
24 areaElevenTwo
25 areaTwelveTwo
26 areaThirteenTwo
27 areaFourteenTwo
*/
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
		
	} else if(((checkedAreas[1] && checkedAreas[15]) && numAreas === 2)
			|| ((checkedAreas[1] && checkedAreas[15] && checkedAreas[0])	|| (checkedAreas[1] && checkedAreas[15] && checkedAreas[14]) && numAreas === 3)
			|| (checkedAreas[1] && checkedAreas[15] && checkedAreas[0] && checkedAreas[14] && numAreas === 4)) {
		plan = '1p6';
		
	} else if(numTrains <= 12 && (
			((checkedAreas[2] || areaFourOne.close || areaFiveOne.close) && numAreas === 1) 
			|| (((checkedAreas[2] && areaFourOne.close) || (checkedAreas[2] && areaFiveOne.close) || (areaFourOne.close && areaFiveOne.close)) && numAreas === 2)
			|| (checkedAreas[2] && areaFourOne.close && areaFiveOne.close && numAreas === 3)))	{
		plan = '2p1';
		
	} else if(
		numTrains <= 12 && (
			((areaThreeTwo.close || areaFourTwo.close || areaFiveTwo.close) && numAreas === 1)
			|| (((areaThreeTwo.close && areaFourTwo.close) || (areaThreeTwo.close && areaFiveTwo.close) || (areaFourTwo.close && areaFiveTwo.close)) && numAreas === 2)
			|| (areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && numAreas === 3)))	{
		plan = '2p2';
		
	} else if(
		numTrains > 12 && ((
			((checkedAreas[2] || areaFourOne.close || areaFiveOne.close) && numAreas === 1)
			|| (((checkedAreas[2] && areaFourOne.close) || (areaFourOne.close && areaFiveOne.close)) && numAreas === 2)
			|| (checkedAreas[2] && areaFourOne.close && areaFiveOne.close && numAreas === 3))
			|| (((areaThreeTwo.close || areaFourTwo.close || areaFiveTwo.close) && numAreas === 1)
			|| (((areaThreeTwo.close && areaFourTwo.close) || (areaFourTwo.close && areaFiveTwo.close)) && numAreas === 2)
			|| (areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && numAreas === 3))))	{
		plan = '2p3';
		
	} else if((checkedAreas[2] && areaThreeTwo.close) && numAreas === 2)	{
		plan = '2p4';
		
	} else if(areaFiveOne.close && areaFiveTwo.close && numAreas === 2) {
		plan = '2p5';
		
	} else if(checkedAreas[2] && areaFourOne.close && areaFiveOne.close 
			&& areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && numAreas === 6) {
		plan = '2p6';
		
	} else if(areaSixOne.close && areaSixTwo.close && numAreas == 2) {
		plan = '2p7';
		
	} else if(numTrains < 13 && ((areaSevenOne.close || areaEightOne.close || areaNineOne.close) && numAreas === 1) 
			|| (((areaSevenOne.close && areaEightOne.close) || (areaEightOne.close && areaNineOne.close) || (areaSevenOne.close && areaNineOne.close) ) && numAreas === 2 ) || (areaSevenOne.close && areaEightOne.close && areaNineOne.close && numAreas === 3)) {
		plan = '3p1';
		
	} else if(numTrains < 13 && ( ((areaSevenTwo.close || areaEightTwo.close || areaNineTwo.close) && numAreas === 1) 
			|| (((areaSevenTwo.close && areaEightTwo.close) || (areaEightTwo.close && areaNineTwo.close) || (areaSevenTwo.close && areaNineTwo.close) ) && numAreas === 2 ) || (areaSevenTwo.close && areaEightTwo.close && areaNineTwo.close && numAreas === 3))) {
		plan = '3p2';
		
	} else if(areaTenTwo.close && numAreas === 1) {
		plan = '3p3';
		
	} else if(areaSevenOne.close && areaSevenTwo.close && numAreas === 2) {
		plan = '3p4';
		
	} else if((areaEightOne.close && areaEightTwo.close && numAreas === 2) 
			|| (numTrains > 12 && (areaSevenOne.close || areaEightOne.close || areaNineOne.close
			|| areaSevenTwo.close || areaEightTwo.close || areaNineTwo.close) && numAreas === 1)) {
		plan = '3p5';
		
	} else if(areaNineOne.close && areaNineTwo.close && numAreas === 2) {
		plan = '3p6';
		
	} else if(areaElevenOne.close && numAreas === 1) {
		plan = '4p1';
		
	} else if(areaElevenTwo.close && numAreas === 1) {
		plan = '4p2';
		
	} else if(areaElevenOne.close && areaElevenTwo.close && numAreas === 2) {
		plan = '4p3';
		
	} else if(areaTwelveOne.close && numAreas === 1) {
		plan = '5p1';
		
	} else if(areaTwelveTwo.close && numAreas === 1) {
		plan = '5p2';
		
	} else if(areaTwelveOne.close && areaTwelveTwo.close && numAreas === 2) {
		plan = '5p3';
		
	} else if(numTrains > 6 && numTrains < 13 && (areaThirteenOne.close || areaFourteenOne.close) && numAreas === 1) {
		plan = '6p1';
		
	} else if(numTrains > 6 && numTrains < 13 && (areaThirteenTwo.close || areaFourteenTwo.close) && numAreas === 1) {
		plan = '6p2';
		
	} else if(numTrains < 7 && ((areaThirteenOne.close || areaFourteenOne.close) && numAreas === 1)
			|| (areaThirteenOne.close && areaFourteenOne.close && numAreas === 2)) {
		plan = '6p3';
		
	} else if(numTrains < 7 && ((areaThirteenTwo.close || areaFourteenTwo.close) && numAreas === 1)
			|| (areaThirteenTwo.close && areaFourteenTwo.close && numAreas === 2)) {
		plan = '6p4';
		
	} else if(
		(areaFourteenOne.close && areaFourteenTwo.close && numAreas === 2)
			|| (numTrains >= 13 && (areaFourteenOne.close || areaFourteenTwo.close) && numAreas === 1)
			|| (numTrains >= 13 && (areaThirteenOne.close || areaThirteenTwo.close) && numAreas === 1)) {
		plan = '6p5';
		
	} else if(areaThirteenOne.close && areaThirteenTwo.close && numAreas === 2) {
		plan = '6p6';
		
	} else if(checkedAreas[1] && checkedAreas[2] && areaFourOne.close && areaFiveOne.close &&
		checkedAreas[15] && areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && numAreas === 8) {
		plan = '7p1';
		
	} else if(checkedAreas[1] && checkedAreas[2] && areaFourOne.close && areaFiveOne.close && areaSixOne.close && 
		checkedAreas[15] && areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && areaSixTwo.close && numAreas === 10) {
		plan = '7p2';
		
	} else {
		diversionState.planNumber = '';
	}

  return plan.replace('p', '.');

}

export default choosePlan;