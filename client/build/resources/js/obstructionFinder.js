let numOfTrainsEl = document.getElementById('numOfTrains');
let fourButton = document.getElementById('fourTrains');
let fiveButton = document.getElementById('fiveTrains');
let sixButton = document.getElementById('sixTrains');
let sevenButton = document.getElementById('sevenTrains');
let eightButton = document.getElementById('eightTrains');
let nineButton = document.getElementById('nineTrains');
let tenButton = document.getElementById('tenTrains');
let elevenButton = document.getElementById('elevenTrains');
let twelveButton = document.getElementById('twelveTrains');
let thirteenButton = document.getElementById('thirteenTrains');
let fourteenButton = document.getElementById('fourteenTrains');
let fifteenButton = document.getElementById('fifteenTrains');
const trainNumButtons = [fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton, tenButton, elevenButton, twelveButton, thirteenButton, fourteenButton, fifteenButton]
    
fourButton.num = 4;
fiveButton.num = 5;
sixButton.num = 6;
sevenButton.num = 7;
eightButton.num = 8;
nineButton.num = 9;
tenButton.num = 10;
elevenButton.num = 11;
twelveButton.num = 12;
thirteenButton.num = 13;
fourteenButton.num = 14;
fifteenButton.num = 15;
let numTrains = 11;    

function setNumTrains(evt) {
  numTrains = evt.currentTarget.num;
  numOfTrainsEl.innerText = numTrains;
	choosePlan();
}
for(let i = 0; i < trainNumButtons.length; i++) {
  trainNumButtons[i].addEventListener('click', setNumTrains);
}

let areaOneOne = document.getElementById('area-one-one');
let areaTwoOne = document.getElementById('area-two-one');
let areaThreeOne = document.getElementById('area-three-one');
let areaFourOne = document.getElementById('area-four-one');
let areaFiveOne = document.getElementById('area-five-one');
let areaSixOne = document.getElementById('area-six-one');
let areaSevenOne = document.getElementById('area-seven-one');
let areaEightOne = document.getElementById('area-eight-one');
let areaNineOne = document.getElementById('area-nine-one');
let areaTenOne = document.getElementById('area-ten-one');
let areaElevenOne = document.getElementById('area-eleven-one');
let areaTwelveOne = document.getElementById('area-twelve-one');
let areaThirteenOne = document.getElementById('area-thirteen-one');
let areaFourteenOne = document.getElementById('area-fourteen-one');
    
let areaOneTwo = document.getElementById('area-one-two');
let areaTwoTwo = document.getElementById('area-two-two');
let areaThreeTwo = document.getElementById('area-three-two');
let areaFourTwo = document.getElementById('area-four-two');
let areaFiveTwo = document.getElementById('area-five-two');
let areaSixTwo = document.getElementById('area-six-two');
let areaSevenTwo = document.getElementById('area-seven-two');
let areaEightTwo = document.getElementById('area-eight-two');
let areaNineTwo = document.getElementById('area-nine-two');
let areaTenTwo = document.getElementById('area-ten-two');
let areaElevenTwo = document.getElementById('area-eleven-two');
let areaTwelveTwo = document.getElementById('area-twelve-two');
let areaThirteenTwo = document.getElementById('area-thirteen-two');
let areaFourteenTwo = document.getElementById('area-fourteen-two');
let closedAreas = [];
const areaButtons = [areaOneOne, areaTwoOne, areaThreeOne, areaFourOne, areaFiveOne, areaSixOne, areaSevenOne, areaEightOne, areaNineOne, areaTenOne, areaElevenOne, areaTwelveOne, areaThirteenOne, areaFourteenOne, areaOneTwo, areaTwoTwo, areaThreeTwo, areaFourTwo, areaFiveTwo, areaSixTwo, areaSevenTwo, areaEightTwo, areaNineTwo, areaTenTwo, areaElevenTwo, areaTwelveTwo, areaThirteenTwo, areaFourteenTwo]
for(let i = 0; i < areaButtons.length; i++) {
  areaButtons[i].close = false;
}
    
function toggle(evt) {
  if(evt.currentTarget.close === false) {
    evt.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
    evt.currentTarget.close = true;
closedAreas.push(evt.currentTarget);
  } else if(evt.currentTarget.close === true) {
    evt.currentTarget.style.backgroundColor = 'transparent';
    evt.currentTarget.close = false;
		let areaIndex = closedAreas.indexOf(evt.currentTarget);
		closedAreas.splice(areaIndex, 1);
  }
	choosePlan();
}
    
for(let i = 0; i < areaButtons.length; i++) {
  areaButtons[i].addEventListener('click', toggle);
}
    
let manualButton = document.getElementById('manual');
let tunnelOneButton = document.getElementById('tunnel-one');
let tunnelTwoButton = document.getElementById('tunnel-two');
let clearButton = document.getElementById('clear');
    
function enterManual() {
  clearClosedArray();
  let manPlan = window.prompt('Enter the plan number:');
  plan = manPlan.replace('.', 'p');
  showPlan();
}
manualButton.addEventListener('click', enterManual);

function clearClosedArray() {
  for(let i = 0; i < areaButtons.length; i++) {
    areaButtons[i].style.backgroundColor = 'transparent';
    areaButtons[i].close = false;
  	closedAreas = [];
  }	
}

function clearAll() {
	clearClosedArray();
	choosePlan();
}

clearButton.addEventListener('click', clearAll);
		
function tunnelFireOne() {
	let arr = [areaTwoOne, areaThreeOne, areaFourOne, areaFiveOne, areaTwoTwo, areaThreeTwo, areaFourTwo, areaFiveTwo];
	for(let i = 0; i < arr.length; i++) {
		arr[i].style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
		if(!arr[i].close) {
			arr[i].close = true;
			closedAreas.push(arr);
		}
	}
	choosePlan();
}
tunnelOneButton.addEventListener('click', tunnelFireOne);
		
		
function tunnelFireTwo() {
	let arr = [areaTwoOne, areaThreeOne, areaFourOne, areaFiveOne, areaSixOne, areaTwoTwo, areaThreeTwo, areaFourTwo, areaFiveTwo, areaSixTwo];
	for(let i = 0; i < arr.length; i++) {
		arr[i].style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
		if(!arr[i].close) {
			arr[i].close = true;
			closedAreas.push(arr);
		}
	}
	choosePlan();
}
tunnelTwoButton.addEventListener('click', tunnelFireTwo);
    
let plan;
let graphicEl = document.getElementById('graphic');
		
function choosePlan() {
	if((numTrains >= 7 && numTrains <= 12) && (((areaOneOne.close || areaTwoOne.close) && closedAreas.length === 1) 
			|| (areaOneOne.close && areaTwoOne.close && closedAreas.length === 2))) {
		plan = '1p1';
			
	} else if((numTrains >= 7 && numTrains <= 12) && (((areaOneTwo.close || areaTwoTwo.close) && closedAreas.length === 1) 
			|| (areaOneTwo.close && areaTwoTwo.close && closedAreas.length === 2))) {
		plan = '1p2';
		
	} else if(numTrains <= 6 && ((areaOneOne.close && closedAreas.length === 1)
			|| (areaTwoOne.close && closedAreas.length === 1)
			|| (areaOneOne.close && areaTwoOne.close && closedAreas.length === 2))) {
		plan = '1p3';
				
	} else if(numTrains <= 6 && ((areaOneTwo.close && closedAreas.length === 1)
			|| (areaOneTwo.close && closedAreas.length === 1)
			|| (areaTwoTwo.close && closedAreas.length === 1)
			|| (areaOneTwo.close && areaTwoTwo.close && closedAreas.length === 2))) {
		plan = '1p4';
		
	} else if((numTrains >= 13 && (areaOneOne.close || areaTwoOne.close 
			|| areaOneTwo.close || areaTwoTwo.close) && closedAreas.length === 1)
			|| (((areaOneOne.close && areaOneTwo.close) || (areaOneOne.close && areaTwoTwo.close) 
			|| (areaOneTwo.close && areaTwoOne.close)) && closedAreas.length === 2)
			|| (numTrains >= 13 && ((areaOneOne.close && areaTwoOne.close) && (areaOneTwo.close && areaTwoTwo.close)) && closedAreas.length === 2)
			|| (areaOneOne.close && areaOneTwo.close && areaTwoOne.close && closedAreas.length === 3)
			|| (areaOneOne.close && areaOneTwo.close && areaTwoTwo.close && closedAreas.length === 3)) {
		plan = '1p5';
		
	} else if(((areaTwoOne.close && areaTwoTwo.close) && closedAreas.length === 2)
			|| ((areaTwoOne.close && areaTwoTwo.close && areaOneOne.close)	|| (areaTwoOne.close && areaTwoTwo.close && areaOneTwo.close) && closedAreas.length === 3)
			|| (areaTwoOne.close && areaTwoTwo.close && areaOneOne.close && areaOneTwo.close && closedAreas.length === 4)) {
		plan = '1p6';
		
	} else if(numTrains <= 12 && (
			((areaThreeOne.close || areaFourOne.close || areaFiveOne.close) && closedAreas.length === 1) 
			|| (((areaThreeOne.close && areaFourOne.close) || (areaThreeOne.close && areaFiveOne.close) || (areaFourOne.close && areaFiveOne.close)) && closedAreas.length === 2)
			|| (areaThreeOne.close && areaFourOne.close && areaFiveOne.close && closedAreas.length === 3)))	{
		plan = '2p1';
		
	} else if(
		numTrains <= 12 && (
			((areaThreeTwo.close || areaFourTwo.close || areaFiveTwo.close) && closedAreas.length === 1)
			|| (((areaThreeTwo.close && areaFourTwo.close) || (areaThreeTwo.close && areaFiveTwo.close) || (areaFourTwo.close && areaFiveTwo.close)) && closedAreas.length === 2)
			|| (areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && closedAreas.length === 3)))	{
		plan = '2p2';
		
	} else if(
		numTrains > 12 && ((
			((areaThreeOne.close || areaFourOne.close || areaFiveOne.close) && closedAreas.length === 1)
			|| (((areaThreeOne.close && areaFourOne.close) || (areaFourOne.close && areaFiveOne.close)) && closedAreas.length === 2)
			|| (areaThreeOne.close && areaFourOne.close && areaFiveOne.close && closedAreas.length === 3))
			|| (((areaThreeTwo.close || areaFourTwo.close || areaFiveTwo.close) && closedAreas.length === 1)
			|| (((areaThreeTwo.close && areaFourTwo.close) || (areaFourTwo.close && areaFiveTwo.close)) && closedAreas.length === 2)
			|| (areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && closedAreas.length === 3))))	{
		plan = '2p3';
		
	} else if((areaThreeOne.close && areaThreeTwo.close) && closedAreas.length === 2)	{
		plan = '2p4';
		
	} else if(areaFiveOne.close && areaFiveTwo.close && closedAreas.length === 2) {
		plan = '2p5';
		
	} else if(areaThreeOne.close && areaFourOne.close && areaFiveOne.close 
			&& areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && closedAreas.length === 6) {
		plan = '2p6';
		
	} else if(areaSixOne.close && areaSixTwo.close && closedAreas.length == 2) {
		plan = '2p7';
		
	} else if(numTrains < 13 && ((areaSevenOne.close || areaEightOne.close || areaNineOne.close) && closedAreas.length === 1) 
			|| (((areaSevenOne.close && areaEightOne.close) || (areaEightOne.close && areaNineOne.close) || (areaSevenOne.close && areaNineOne.close) ) && closedAreas.length === 2 ) || (areaSevenOne.close && areaEightOne.close && areaNineOne.close && closedAreas.length === 3)) {
		plan = '3p1';
		
	} else if(numTrains < 13 && ( ((areaSevenTwo.close || areaEightTwo.close || areaNineTwo.close) && closedAreas.length === 1) 
			|| (((areaSevenTwo.close && areaEightTwo.close) || (areaEightTwo.close && areaNineTwo.close) || (areaSevenTwo.close && areaNineTwo.close) ) && closedAreas.length === 2 ) || (areaSevenTwo.close && areaEightTwo.close && areaNineTwo.close && closedAreas.length === 3))) {
		plan = '3p2';
		
	} else if(areaTenTwo.close && closedAreas.length === 1) {
		plan = '3p3';
		
	} else if(areaSevenOne.close && areaSevenTwo.close && closedAreas.length === 2) {
		plan = '3p4';
		
	} else if((areaEightOne.close && areaEightTwo.close && closedAreas.length === 2) 
			|| (numTrains > 12 && (areaSevenOne.close || areaEightOne.close || areaNineOne.close
			|| areaSevenTwo.close || areaEightTwo.close || areaNineTwo.close) && closedAreas.length === 1)) {
		plan = '3p5';
		
	} else if(areaNineOne.close && areaNineTwo.close && closedAreas.length === 2) {
		plan = '3p6';
		
	} else if(areaElevenOne.close && closedAreas.length === 1) {
		plan = '4p1';
		
	} else if(areaElevenTwo.close && closedAreas.length === 1) {
		plan = '4p2';
		
	} else if(areaElevenOne.close && areaElevenTwo.close && closedAreas.length === 2) {
		plan = '4p3';
		
	} else if(areaTwelveOne.close && closedAreas.length === 1) {
		plan = '5p1';
		
	} else if(areaTwelveTwo.close && closedAreas.length === 1) {
		plan = '5p2';
		
	} else if(areaTwelveOne.close && areaTwelveTwo.close && closedAreas.length === 2) {
		plan = '5p3';
		
	} else if(numTrains > 6 && numTrains < 13 && (areaThirteenOne.close || areaFourteenOne.close) && closedAreas.length === 1) {
		plan = '6p1';
		
	} else if(numTrains > 6 && numTrains < 13 && (areaThirteenTwo.close || areaFourteenTwo.close) && closedAreas.length === 1) {
		plan = '6p2';
		
	} else if(numTrains < 7 && ((areaThirteenOne.close || areaFourteenOne.close) && closedAreas.length === 1)
			|| (areaThirteenOne.close && areaFourteenOne.close && closedAreas.length === 2)) {
		plan = '6p3';
		
	} else if(numTrains < 7 && ((areaThirteenTwo.close || areaFourteenTwo.close) && closedAreas.length === 1)
			|| (areaThirteenTwo.close && areaFourteenTwo.close && closedAreas.length === 2)) {
		plan = '6p4';
		
	} else if(
		(areaFourteenOne.close && areaFourteenTwo.close && closedAreas.length === 2)
			|| (numTrains >= 13 && (areaFourteenOne.close || areaFourteenTwo.close) && closedAreas.length === 1)
			|| (numTrains >= 13 && (areaThirteenOne.close || areaThirteenTwo.close) && closedAreas.length === 1)) {
		plan = '6p5';
		
	} else if(areaThirteenOne.close && areaThirteenTwo.close && closedAreas.length === 2) {
		plan = '6p6';
		
	} else if(areaTwoOne.close && areaThreeOne.close && areaFourOne.close && areaFiveOne.close &&
		areaTwoTwo.close && areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && closedAreas.length === 8) {
		plan = '7p1';
		
	} else if(areaTwoOne.close && areaThreeOne.close && areaFourOne.close && areaFiveOne.close && areaSixOne.close && 
		areaTwoTwo.close && areaThreeTwo.close && areaFourTwo.close && areaFiveTwo.close && areaSixTwo.close && closedAreas.length === 10) {
		plan = '7p2';
		
	} else {
		plan = undefined
	}
	showPlan();
}
		
		
function showPlan() {
	if(!plan) {
		graphicEl.innerHTML = '<p>No obstruction plan available</p>';
		detailsEl.innerHTML = '';
		papidsEl.innerHTML = '';
		csEl.innerHTML = '';
	} else {
		graphicEl.innerHTML = `<img src='resources/images/plan${plan}.png'>`
		showDetails();
	}
}
		
		
let detailsEl = document.getElementById('details');
let oblocation, routing, notes;
		
function showDetails() {
	setDetails();
	detailsEl.innerHTML = `
	<hr>
	<h2>Plan Details</h2>
	<table>
		<thead>
			<tr>
				<th>Obstruction Location</th><th>Routing</th><th>Notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>${oblocation}</td><td>${routing}</td><td>${notes}</td>
			</tr>
		</tbody>
	</table>`
	showPapids();
};

function setDetails() {
	if(plan === '1p1') {
		oblocation = '1.1 Obstruction on track 1 <br> 11 trains (LYO open)';
		routing = '<strong>East Loop LYO-BLA: </strong>LN01 - LN07 start PAR-W resume PAR-E (10 trains)<br><strong>Shuttle Train TUN-LYO: </strong>Assign 1 train to dedicated shuttle track 2';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 1.5</li><li>If 11 trains on ML: 1 shuttle, 1 removed/parked, 9 on loop</li><li>If possible, step-back at LYO-W</li><li>If possible, serve TUN-W</li></ul>';
	} else if(plan === '1p2') {
		oblocation = '1.2 Obstruction track 2<br>7-11 trains (LYO open)';
		routing = "<strong>East Loop LYO-BLA: </strong>LN01 to DE01 start LYO-W resume PAR-E (10 trains)<br><strong>Shuttle Train TUN-LYO: </strong>Assign 1 train to dedicated shuttle track 1";
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 1.5</li><li>If 11 trains on ML: 1 shuttle, 1 removed/parked, 9 on loop</li><li>If possible, step-back at LYO-E</li></ul>';
	} else if(plan === '1p3') {
		oblocation = '1.3 Obstruction track 1<br>6 trains or less (LYO open)';
		routing = '<strong>Single Tracking: </strong>LN01-DW02 start PAR-W resume TUN';
		notes = '6 trains: Park 1 each at TUN and BLA, use to fill gaps.'
	} else if(plan === '1p4') {
		oblocation = '1.4 Obstruction track 2<br>6 trains or less (LYO open)';
		routing = '<strong>Single Tracking: </strong>LN01-DE01 start TUN resume PAR-E';
		notes = '6 trains: Park 1 each at TUN and BLA, use to fill gaps.'
	} else if(plan === '1p5') {
		oblocation = '1.5 Obstruction both tracks TUN-LYO west gate (LYO open)<br>or<br>Obstruction on either track during peak 13 trains (LYO open)';
		routing = '<strong>R1:</strong> TUN-RID<br><strong>East Loop LYO-BLA:</strong> Line 7 (11 trains)'
		notes = 'If possible, step-back at LYO';
	} else if(plan === '1p6') {
		oblocation = '1.6 Both tracks closed west gate LYO to LYO interlocking';
		routing = '<strong>R1:</strong> TUN-RID<br><strong>East Loop RID-BLA:</strong>LN01-LN19 start TRE-W resume HUR-E (9 trains)';
		notes = 'If possible, step-back at RID';
	} else if(plan === '2p1') {
		oblocation = '2.1 Obstruction track 1<br>11 trains or less';
		routing = '<strong>Single Tracking:</strong> LN01-DW01 start UOT-W resume LYO-W (8 trains)';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 2.3, 2.4, 2.5, 2.6, or 2.7</li><li>If 11 trains on ML: Park 1 each at TUN/BLA, use to fill gaps. Remove/park 1 train</li></ul>';
	} else if(plan === '2p2') {
		oblocation = '2.2 Obstruction track 2<br>11 trains or less';
		routing = '<strong>Single Tracking:</strong> LN01-DE02 start LYO-E resume UOT-E (8 trains)';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 2.3, 2.4, 2.5, 2.6, or 2.7</li><li>If 11 trains on ML: Park 1 each at TUN/BLA, use to fill gaps. Remove/park 1 train</li></ul>';
	} else if(plan === '2p3') {
		oblocation = '2.3 Obstruction on track 1 or 2, 13 trains (at least 1 platform open at PAR and RID)';
		routing = '<strong>R1:</strong> LYO to RID<br><strong>West Loop TUN-PAR:</strong> Line 6 (4 trains)<br><strong>East Loop RID-BLA:</strong> LN01-LN19 start TRE-W resume HUR-E (9 trains)';
		notes = 'If possible, step-back at PAR and RID (if only one platform available for turnback)';
	} else if(plan === '2p4') {
		oblocation = '2.4 Both tracks closed LYO interlocking to west gate RID (RID open)';
		routing = '<strong>R1:</strong> LYO to RID<br><strong>West Shuttle TUN-LYO:</strong> alternating on each track (2 trains)<br><strong>East Loop RID-BLA:</strong> LN01-LN19 start TRE-W resume HUR-E (9 trains)';
		notes = '<ul><li>If 13 trains on ML, remove/park 2 trains</li><li>If possible, step-back at RID</li></ul>';
	} else if(plan === '2p5') {
		oblocation = '2.5 Both tracks closed east gate PAR to west gate PUOT (PAR, PUOT open)';
		routing = '<strong>R1:</strong> LYO-LEE<br><strong>West Loop:</strong> Line 6 TUN-PAR (4 trains)<br><strong>East Loop UOT-BLA:</strong> Line 12 (9 trains)';
		notes = 'If possible, step-back at UOT (turnback is at pseudo platform)';
	} else if(plan === '2p6') {
		oblocation = '2.6 Both tracks closed west gate PAR to east gate RID';
		routing = '<strong>R1:</strong> LYO-LEE<br><strong>West Shuttle TUN-LYO:</strong> alternating on each track (2 trains)<br><strong>East Loop UOT-BLA:</strong> Line 12 (9 trains)';
		notes = '<ul><li>If 13 trains on ML, remove/park 2 trains</li><li>If possible, stepback at UOT (turnback at pseudo platform)</li></ul>';
	} else if(plan === '2p7') {
		oblocation = '2.7 Both tracks closed PUOT to UOT interlocking';
		routing = '<strong>R1:</strong> LYO-HUR + LEE<br><strong>West Loop TUN-PAR:</strong> Line 6 (4 trains)<br><strong>East Loop HUR-E - BLA:</strong> Line 16  (6 trains)';
		notes = '<ul><li>If 13 trains on ML, remove/park 3 trains</li><li>If possible, stepback at HUR-E</li></ul>';
	} else if(plan === '3p1') {
		oblocation = '3.1 Obstruction track 1<br>UOT interlocking to HUR crossover';
		routing = '<strong>Single Tracking:</strong> LN01-DW02 start TRE-W resume RID-W (7 trains)';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 3.5 or 3.6.</li><li>If 11 trains on ML: park 1 each at TUN/BLA, use to fill gaps. Remove/park 2 trains.</li></ul>';
	} else if(plan === '3p2') {
		oblocation = '3.2 Obstruction track 2<br>UOT interlocking to HUR crossover';
		routing = '<strong>Single Tracking:</strong> LN01-DW02 start RID-E resume TRE-E (7 trains)';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 3.5 or 3.6.</li><li>If 11 trains on ML: park 1 each at TUN/BLA, use to fill gaps. Remove/park 2 trains.</li></ul>';
	} else if(plan === '3p3'){
		oblocation = '3.3 Obstruction track 2 HUR west crossover to HUR crossover';
		routing = '<strong>Single Tracking:</strong> LN01-DE04 start HUR-E resume TRE-E';
		notes = 'If 13 trains on ML, park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '3p4'){
		oblocation = 'Both tracks closed UOT interlocking to east gate UOT';
		routing = '<strong>R1:</strong> LYO-HUR + LEE<br><strong>West Loop TUN-PAR:</strong> Line 6 (4 trains)<br><strong>East Loop HUR-E - BLA:</strong> Line 16 (5 trains)';
		notes = '<ul><li>If 13 trains on ML, 4 must be removed/parked.</li><li>If possible, step-back at HUR-E</li></ul>';
	} else if(plan === '3p5') {
		oblocation = '3.5 Both tracks closed east gate UOT to west gate HUR (UOT, HUR-E open)';
		routing = '<strong>R1:</strong> RID-HUR + LEE<br><strong>West Loop 5 TUN-UOT:</strong> Line (8 trains)<br><strong>East Loop HUR-E - BLA:</strong> Line 16 (5 trains)';
		notes = 'If possible, step-back at HUR-E';
	} else if(plan === '3p6') {
		oblocation = '3.6 Both tracks closed west gate HUR to HUR west crossover';
		routing = '<strong>R1:</strong> RID-STL + LEE<br><strong>West Loop TUN-UOT:</strong> Line 5 (8 trains)<br><strong>East Loop TRE-E - BLA:</strong> Line 18 (5 trains)';
		notes = 'If possible, step-back at TRE-E';
	} else if(plan === '4p1') {
		oblocation = '4.1 Obstruction track 1';
		routing = '<strong>Single Tracking:</strong> LN01-DW05 start STL-W resume HUR-W (11 trains)';
		notes = 'If 13 trains on ML park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '4p2') {
		oblocation = '4.2 Obstruction track 2';
		routing = '<strong>Single Tracking:</strong> LN01-DE06 start HUR-E resume STL-E (11 trains)';
		notes = 'If 13 trains on ML park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '4p3') {
		oblocation = '4.3 Obstruction both tracks';
		routing = '<strong>R1:</strong> HUR-STL<br><strong>Shuttle Train STL-BLA:</strong> alternating on each track (2 trains)<br><strong>West Loop TUN-HUR:</strong> Line 4 (PHUR-W) (9 trains)';
		notes = '<ul><li>If 13 trains on ML, 2 must be removed/parked</li><li>If possible, step-back HUR-E (turnback is at a pseudo platform)</li></ul>';
	} else if(plan === '5p1') {
		oblocation = '5.1 Obstruction track 1';
		routing = '<strong>Single Tracking:</strong> LN01-DW08 start STL-W resume TRE-W (11 trains)';
		notes = 'If 13 trains on ML park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '5p2') {
		oblocation = '5.2 Obstruction track 2';
		routing = '<strong>Single Tracking:</strong> LN01-DE09 start TRE-E resume STL-E (11 trains)';
		notes = 'If 13 trains on ML park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '5p3') {
		oblocation = '5.3 Obstruction on both tracks';
		routing = '<strong>R1:</strong> HUR-STL<br><strong>Shuttle Train STL-BLA:</strong> alternating on each track (2 trains)<br><strong>West Loop TUN-HUR:</strong> Line 4 (PHUR-W) (9 trains)';
		notes = 'If possible, step-back at TRE-E';
	} else if(plan === '6p1') {
		oblocation = '6.1 Obstruction track 1, STL-E open<br>7-11 trains';
		routing = '<strong>West Loop TUN-STL:</strong> LN01-DW02 start STL-E resume TRE-W (10 trains)<br><strong>Single Tracking:</strong> Shuttle train on track 2 STL-E - BLA-E';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 6.5</li><li>If possible, step-back at STL-E</li></ul>';
	} else if(plan === '6p2') {
    oblocation = '6.2 Obstruction track 2, STL-W open<br>7-11 trains';
    routing = '<strong>West Loop TUN-STL:</strong> LN01-LN02 start TRE-E resume TRE-W (10 trains)<br><strong>Single Tracking:</strong> Shuttle train track 1 STL-W - BLA-W';
    notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 6.5</li><li>If possible, 2 EROs on shuttle train and step-back at STL-W';
  } else if(plan === '6p3') {
		oblocation = '6.3 Obstruction track 1<br>4-6 trains only';
		routing = '<strong>Single Tracking:</strong> LN01-DW02 start BLA resume TRE-W';
		notes = '';
	} else if(plan === '6p4') {
		oblocation = '6.4 Obstruction track 2<br>4-6 trains only';
		routing = '<strong>Single Tracking:</strong> LN01-DE01 start TRE-E resume BLA';
		notes = '';
	} else if(plan === '6p5') {
		oblocation = '6.5 Obstruction on both tracks, STL open';
		routing = '<strong>R1:</strong> STL-BLA<br><strong>West Loop TUN-STL:</strong> Line 2 (11 trains)';
		notes = 'If 13 trains on ML, 2 must be parked';
	} else if(plan === '6p6') {
		oblocation = '6.6 Obstruction on both tracks, STL closed';
		routing = '<strong>R1:</strong> HUR-BLA<br><strong>West Loop TUN-TRE-E:</strong> Line 3 (10 trains)';
		notes = '<ul><li>If 13 trains on ML, 3 must be removed/parked</li><li>If possible, step-back at TRE-E</li></ul>'
	} else if(plan === '7p1') {
		oblocation = '7.1 No stage-2 fire alarm';
		routing = '<strong>R1:</strong> TUN-LEE<br><strong>Shuttle Train TUN-PIM:</strong> (1 train, either track)<br><strong>East Loop PUOT-BLA:</strong> Line 12 (9 trains)';
		notes = 'If possible, 2 EROs on shuttle train, step-back at UOT-W (turnback is at pseudo platform)';
	} else if(plan === '7p2') {
		oblocation = '7.2 With stage-2 fire alarm';
		routing = '<strong>R1:</strong> TUN-HUR + LEE<br><strong>Shuttle Train TUN-PIM:</strong> (1 train, either track)<br><strong>East Loop HUR-E - BLA:</strong> Line 16 (6 trains)';
		notes = 'If 13 trains on ML, 6 must be removed/parked';
	} else {
		oblocation = undefined;
		routing = undefined;
		notes = undefined;
	}
};

		
let papidsEl = document.getElementById('papids');
let planno, livepa, tgbaker;
		
function showPapids() {
	setPapids();
	papidsEl.innerHTML = `
	<hr>
	<h2>PA/PIDS</h2>
	<table>
		<thead>
			<tr>
				<th>Plan #</th><th>Live PA (every 5 mins or as needed or as otherwise indicated)</th><th>TG Baker</th>
			</tr>
		</thead>
		<tbody>
			<td>${planno}</td><td>${livepa}</td><td>${tgbaker}</td>
		</tbody>
	</table>`
    showCs();
}
		
function setPapids() {
	planno = plan.replace('p', '.');
	if(plan === '1p1') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Service on line 1 is reduced between Tunney's Pasture and Lyon Stations. Customers travelling westbound from Lyon Station may need to transfer to a shuttle train to complete their trip.<br><br>Attention: Le fréquence de service sur la Ligne 1 est réduite entre les stations Tunney's Pasture et Lyon. Les clients voyageant en direction ouest au station Lyon puissent avoir besoin de transférer à un train navette pour compléter leur trajet.</em><br><br><strong>LYO:</strong><br><em>Attention: Customers travelling west must use the eastbound platform.<br><br>Attention: Les clients voyageant vers l'ouest doivent utiliser le quai est.</em>";
		tgbaker = '<strong>TUN-W, BAY-W, PIM-W:</strong> 3B and close platforms';
	} else if(plan === '1p2') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Service on Line 1 is reduced between Tunney's Pasture and Lyon Stations. Customers travelling westbound from Lyon Station may need to transfer to a shuttle train to complete their trip.<br><br>Attention: Le fréquence de service sur la Ligne 1 est réduite entre les stations Tunney's Pasture et Lyon. Les clients voyageant en direction ouest à Lyon puissent avoir besoin de transférer à un train navette pour compléter leur trajet.</em>";
		tgbaker = "<strong>LYO-E, PIM-E, BAY-E:</strong> 3A and close platforms.";
	} else if(plan === '1p3') {
		livepa = '<strong>All platforms:</strong><br><em>Delay announcement (if required)</em>';
		tgbaker = '<strong>LYO-W, PIM-W, BAY-W:</strong> 3B and close platforms';
	} else if(plan === '1p4') {
		livepa = '<strong>All platforms:</strong><br><em>Delay announcement (if required)</em>';
		tgbaker = '<strong>LYO-E, PIM-E, BAY-E:</strong> 3A and close platforms';
	} else if(plan === '1p5') {
		livepa = "<strong>BLA-LYO:</strong><br><em>Attention: Customers travelling westbound towards Tunney's Pasture must transfer to R1 replacement bus service at Lyon Station. Delays are expected.<br><br>Attention: Les clients voyageant en direction ouest vers Tunney's Pasture doivent transférer au service d'autobus de remplacement R1 au station Lyon. Des retards sont prévus.</em>";
		tgbaker = "<strong>TUN, BAY, PIM (all zones):</strong> 5D and close platforms";
	} else if(plan === '1p6') {
		livepa = "<strong>BLA-RID:</strong><br><em>Attention: Customers travelling westbound towards Tunney's Pasture must transfer to R1 replacement bus service at Rideau Station. Delays are expected.<br><br>Attention: Les clients voyageant en direction ouest vers Tunney's Pasture doivent transférer au service d'autobus de remplacement R1 au station Rideau. Des retards sont prévus.</em>";
		tgbaker = "<strong>TUN, BAY, PIM, LYO, PAR (all zones):</strong> 5D and close platforms";
	} else if(plan === '2p1') {
		livepa = "<strong>All platforms:</strong><br><em>Delay announcement (if required)</em>";
		tgbaker = "<strong>PAR-W, RID-W:</strong> 3B and close platforms";
	} else if(plan === '2p2') {
		livepa = "<strong>All platforms:</strong><br><em>Delay announcement (if required)</em>";
		tgbaker = "<strong>PAR-E, RID-E:</strong> 3A and close platforms";
	} else if(plan === '2p3') {
		livepa = "<strong>All platforms:</strong><br><em>Attention: Line 1 is not operating between Parliament and Rideau Stations. R1 replacement bus service is operating between Parliament and Rideau Stations.<br><br>Attention: La ligne 1 ne fonctionne pas entre les stations Parliament et Rideau. Le service d'autobus de remplacement R1 est en service entre les stations Parliament et Rideau.</em>";
		tgbaker = "Close platforms not in service (if applicable)";
	} else if(plan ==='2p4') {
		livepa = "<strong>All platforms:</strong><br><em>Attention: Line 1 is not operating between Lyon and Rideau Stations. R1 replacement bus service is operating between Lyon and Rideau Stations.<br><br>Attention: La ligne 1 ne fonctionne pas entre les stations Lyon et Rideau. Le service d'autobus de remplacement R1 est en service entre les stations Lyon et Rideau.</em>";
		tgbaker = "<strong>PAR (all zones):</strong> 5D and close platforms";
	} else if(plan === '2p5') {
		livepa = "<strong>All platforms:</strong><br><em>Attention: Line 1 is not operating between Parliament and UOttawa stations. R1 replacement bus service is operating between Parliament and Lees Stations.<br><br>Attention: La ligne 1 ne fonctionne pas entre les stations Parliament et UOttawa. Le service d'autobus de remplacement R1 est en service entre les stations Parliament et Lees.</em>";
		tgbaker = "<strong>RID (all zones):</strong> 5D and close platforms"
	} else if(plan === '2p6') {
		livepa = "<strong>All platforms:</strong><br><em>Attention: Line 1 is not operating between Lyon and UOttawa stations. R1 replacement bus service is operating between Lyon and Lees Stations.<br><br>Attention: La ligne 1 ne fonctionne pas entre les stations Lyon et UOttawa. Le service d'autobus de remplacement R1 est en service entre les stations Lyon et Lees.</em>";
		tgbaker = "<strong>PAR, RID (all zones):</strong> 5D and close platforms";
	} else if(plan === '2p7') {
		livepa = "<strong>All platforms:</strong><br><em>Attention: Line 1 is not operating between Parliament and Hurdman stations. R1 replacement bus service is operating between Lyon and Lees Stations.<br><br>Attention: La ligne 1 ne fonctionne pas entre les stations Parliament et Hurdman. Le service d'autobus de remplacement R1 est en service entre les stations Lyon et Lees.</em>";
		tgbaker = "<strong>RID, UOT, LEE (all zones):</strong> 5D and close platforms";
	} else if(plan === '3p1') {
		livepa = "<strong>All platforms:</strong><br><em>Delay announcements (if required)</em>";
		tgbaker = "<strong>HUR-W, LEE-W, UOT-W:</strong> 3B and close platforms";
	} else if(plan === '3p2') {
		livepa = "<strong>All platforms:</strong><br><em> Delay announcements (if required)</em>";
		tgbaker = "<strong>HUR-E, LEE-E, UOT-E:</strong> 3A and close platforms";
	} else if(plan === '3p3') {
		livepa = "<strong>All platforms:</strong><br><em> Delay announcements (if required)</em>";
		tgbaker = "Close platforms not in service (if applicable)."
	} else if(plan === '3p4') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Line 1 is not operating betweeen Parliament and Hurdman Stations. R1 replacement bus service is operating between Parliament and Hurdman stations.<br><br>Attention: La Ligne 1 ne fonctionne pas entre les stations Parliament et Hurdman. Le service d'autobus de remplacement R1 est en service entre les stations Parliament et Hurdman.</em>";
		tgbaker = "RID, UOT, LEE (all zones):</strong> 5D and close platforms";
	} else if(plan === '3p5') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Line 1 is not operating betweeen UOttawa and Hurdman Stations. R1 replacement bus service is operating between Rideau and Hurdman stations.<br><br>Attention: La Ligne 1 ne fonctionne pas entre les stations UOttawa et Hurdman. Le service d'autobus de remplacement R1 est en service entre les stations Rideau et Hurdman.</em>";
		tgbaker = "<strong>LEE, HUR (all zones): 5D and close platforms";
	} else if(plan === '3p6') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Line 1 is not operating betweeen UOttawa and Tremblay Stations. R1 replacement bus service is operating between Rideau and St Laurent stations.<br><br>Attention: La Ligne 1 ne fonctionne pas entre les stations UOttawa et Tremblay. Le service d'autobus de remplacement R1 est en service entre les stations Rideau et St Laurent.</em>";
	} else if(plan === '4p1') {
		livepa = "<strong>All platforms:</strong><br><em> Delay announcements (if required)</em>";
		tgbaker = "<strong>TRE-W:</strong> 3B and close platforms"
	} else if(plan === '4p2') {
		livepa = "<strong>All platforms:</strong><br><em> Delay announcements (if required)</em>";
		tgbaker = "<strong>TRE-E:</strong> 3A and close platforms"
	} else if(plan === '4p3') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Line 1 is not operating betweeen Hurdman and St Laurent Stations. R1 replacement bus service is operating between Hurdman and St Laurent stations.<br><br>Attention: La Ligne 1 ne fonctionne pas entre les stations Hurdman et St Laurent. Le service d'autobus de remplacement R1 est en service entre les stations Hurdman et St Laurent.</em>";
		tgbaker = "<strong>TRE (all zones):</strong> 5D and close platforms";
	} else if(plan === '5p1') {
		livepa = "<strong>All platforms:</strong><br><em> Delay announcements (if required)</em>";
		tgbaker = '';
	} else if(plan === '5p2') {
		livepa = "<strong>All platforms:</strong><br><em> Delay announcements (if required)</em>";
		tgbaker = '';
	} else if(plan === '5p3') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Line 1 is not operating betweeen Tremblay and St Laurent Stations. R1 replacement bus service is operating between Hurdman and St Laurent stations.<br><br>Attention: La Ligne 1 ne fonctionne pas entre les stations Tremblay et St Laurent. Le service d'autobus de remplacement R1 est en service entre les stations Hurdman et St Laurent.</em>";
		tgbaker = "Close platforms not in use (if applicable)";
	} else if(plan === '6p1') {
		livepa = "<strong>All platforms:</strong><br><em>Attention: Service on Line 1 is reduced between Stl Laurent and Blair stations. Customers travelling eastbound from St Laurent Station may need to transfer to a shuttle train to complete their trip.<br><br>Attention: Le fréquence de service sur la Ligne 1 est réduite entre les stations St Laurent et Blair. Les clients voyageant en direction est au station St Laurent puissent avoir besoin de transférer à un train navette pour compléter leur trajet.</em>";
		tgbaker = "<strong>CYR-W:</strong> 3B Close platform";
	} else if(plan === '6p2') {
		livepa = "<strong>All platforms:</strong><br><em>Attention: Service on Line 1 is reduced between Stl Laurent and Blair stations. Customers travelling eastbound from St Laurent Station may need to transfer to a shuttle train to complete their trip.<br><br>Attention: Le fréquence de service sur la Ligne 1 est réduite entre les stations St Laurent et Blair. Les clients voyageant en direction est au station St Laurent puissent avoir besoin de transférer à un train navette pour compléter leur trajet.</em><br><br><strong>STL:</strong><br><em>Attention: Customers travelling east must use the westbound platform.<br><br>Attention: Les clients voyageant vers l'est doivent utiliser le quai ouest.</em>";
		tgbaker = "<strong>CYR-W:</strong> 3A Close platform";
	} else if(plan === '6p3') {
		livepa = "<strong>All platforms:</strong><br><em> Delay announcements (if required)</em>";
		tgbaker = "<strong>STL-W, CYR-W:</strong> 3B Close platfoms";
	} else if(plan === '6p4') {
		livepa = "<strong>All platforms:</strong><br><em> Delay announcements (if required)</em>";
		tgbaker = "<strong>STL-E, CYR-E:</strong> 3A Close platfoms";
	} else if(plan === '6p5') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Line 1 is not operating betweeen St Laurent and Blair Stations. R1 replacement bus service is operating between St Laurent and Blair stations.<br><br>Attention: La Ligne 1 ne fonctionne pas entre les stations St Laurent et Blair. Le service d'autobus de remplacement R1 est en service entre les stations St Laurent et Blair.</em>";
		tgbaker = "<strong>CYR, BLA (all zones):</strong> 5D Close platforms";
	} else if(plan === '6p6') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Line 1 is not operating betweeen Tremblay and Blair Stations. R1 replacement bus service is operating between Hurdman and Blair stations.<br><br>Attention: La Ligne 1 ne fonctionne pas entre les stations Tremblay et Blair. Le service d'autobus de remplacement R1 est en service entre les stations Hurdman et Blair.</em>";
		tgbaker = "STL, CYR, BLA (all zones):</strong> 5D Close platforms";
	} else if(plan === '7p1') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Line 1 is not operating betweeen Pimisi and UOttawa Stations. R1 replacement bus service is operating between Tunney's and Lees stations.<br><br>Attention: La Ligne 1 ne fonctionne pas entre les stations Pimisi et UOttawa. Le service d'autobus de remplacement R1 est en service entre les stations Tunney's et Lees.</em>";
		tgbaker = "<strong>LYO, PAR, RID (all zones):</strong> 5D Close platforms";
	} else if(plan === '7p2') {
		livepa = "<strong>All platforms:</strong><br><em> Attention: Line 1 is not operating betweeen Pimisi and Hurdman Stations. R1 replacement bus service is operating between Tunney's and Hurdman stations.<br><br>Attention: La Ligne 1 ne fonctionne pas entre les stations Pimisi et Hurdman. Le service d'autobus de remplacement R1 est en service entre les stations Tunney's et Hurdman.</em>";
		tgbaker = "<strong>LYO, PAR, RID, UOT, LEE (all zones):</strong> 5D Close platforms";
	} else {
		livepa = undefined;
		tgbaker = undefined;
	}
}
		
let csEl = document.getElementById('cs');
let twen, twfr, smsen, smsfr, resen, resfr;
    
function showCs() {
	setCs();
	csEl.innerHTML = `
	<hr>
	<h2>CS Messaging</h2>
	<table class='cs'>
		<thead>
			<tr class='red'>
				<th>Twitter (EN)</th><th>Twitter (FR)</th><th>SMS (EN)</th><th>SMS (FR)</th>
			</tr>
		</thead>
		<tbody>
			<td>${twen}</td><td>${twfr}</td><td>${smsen}</td><td>${smsfr}</td>
		</tbody>
	</table>
  <table class='cs reasons'>
    <thead>
      <tr><th colspan='2'>Preapproved Reasons</th></tr>
      <tr><th>English</th><th>French</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>a medical response.</td>
        <td>une réponse médicale.</td>
      </tr>
      <tr>
        <td>a passenger incident.</td>
        <td>un incident de passager.</td>
      </tr>
      <tr>
        <td>a security incident.</td>
        <td>un incident sécuritaire.</td>
      </tr>
      <tr>
        <td>a stopped train.</td>
        <td>un train immobilisé.</td>
      </tr>
      <tr>
        <td>objects on the track.</td>
        <td>les objets sur la voie.</td>
      </tr>
  </table>
  <table class='cs'>
    <thead>
      <tr class='green'>
        <th>Resolution (EN)</th><th>Resolution (FR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${resen}</td><td>${resfr}</td>
      </tr>
    </tbody>
  </table>`
}

		
function setCs() {
	if(plan === '1p1') {
    twen = 'Line 1: All service at Lyon, Pimisi, and Bayview at the eastbound platforms only due to XX. Change trains at Lyon. Updates to follow.';
    twfr = 'Ligne 1: Tout le service à Lyon, Pimisi et Bayview sur les quais est seulement en raison de XX. Changer de train à Lyon. Mises à jour à suivre.';
    smsen = 'Line 1: All service at Lyon, Pimisi, and Bayview at the eastbound platforms only due to XX. Change trains at Lyon.';
    smsfr = 'Ligne 1: Tout le service à Lyon, Pimisi et Bayview sur les quais est seulement en raison de XX. Changer de train à Lyon.';
    resen = 'RESOLVED, Line 1: Regular train service has resumed. All platforms at Lyon, Pimisi, and Bayview are open. Thank you for your patience.';
    resfr = 'RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Lyon, Pimisi et Bayview sont ouverts. Merci de patienter.';
  } else if(plan === '1p2') {
    twen = 'Line 1: All service at Bayview, Pimisi, and Lyon at the westbound platforms only due to XX. Change trains at Lyon. Updates to follow.';
    twfr = 'Ligne 1: Tout le service à Bayview, Pimisi et Lyon sur les quais ouest seulement en raison de XX. Changer de train à Lyon. Mises à jour à suivre.';
    smsen = 'Line 1: All service at Bayview, Pimisi, and Lyon at the westbound platforms only due to XX. Change trains at Lyon.';
    smsfr = 'Ligne 1: Tout le service à Bayview, Pimisi et Lyon sur les quais ouest seulement en raison de XX. Changer de train à Lyon.';
    resen = 'RESOLVED, Line 1: Regular train service has resumed. All platforms at Bayview, Pimisi, and Lyon are open. Thank you for your patience.';
    resfr = 'RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Bayview, Pimisi, et Lyon sont ouverts. Merci de votre patience.';
  } else if(plan === '1p3') {
    twen = 'Line 1: All service at Lyon, Pimisi, and Bayview at the eastbound platforms only due to XX. Updates to follow.';
    twfr = 'Ligne 1: Tout le serice à Lyon, Pimisi et Bayview sur les quais est seulement en raison de XX. Mises à jour à suivre.';
    smsen = 'Line 1: All service at Lyon, Pimisi, and Bayview at the eastbound platforms only due to XX. Updates to follow.';
    smsfr = 'Ligne 1: Tout le serice à Lyon, Pimisi et Bayview sur les quais est seulement en raison de XX. Mises à  jour à suivre.';
    resen = 'RESOLVED, Line 1: Regular train service has resumed. All platforms at Lyon, Pimisi, and Bayview are open. Thank you for your patience.';
    resfr = 'RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Lyon, Pimisi, et Bayview sont ouverts. Merci de votre patience.';
  } else if(plan === '1p4') {
    twen = 'Line 1: All service at Bayview, Pimisi, and Lyon at the westbound platforms only due to XX. Updates to follow.';
    twfr = 'Ligne 1: Tout le service à Bayview, Pimisi et Lyon sur les quais ouest seulement en raison de XX. Mises à jour à suivre.';
    smsen = 'Line 1: All service at Bayview, Pimisi, and Lyon at the westbound platforms only due to XX.';
    smsfr = 'Ligne 1: Tout le service à Bayview, Pimisi et Lyon sur les quais ouest seulement en raison de XX.';
    resen = 'RESOLVED, Line 1: Regular train service has resumed. All platforms at Bayview, Pimisi, and Lyon are open. Thank you for your patience.';
    resfr = 'RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Bayview, Pimisi, et Lyon sont ouverts. Merci de votre patience.';
  } else if(plan === '1p5') {
    twen = "Line 1: R1 bus service running between Tunney's Pasture and Rideau due to XX. Trains operating between Blair and Lyon. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Rideau en raison de XX. Trains en service entre Blair et Lyon. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Tunney's Pasture and Rideau due to XX. Trains operating between Blair and Lyon.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Rideau en raison de XX. Trains en service entre Blair et Lyon.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '1p6') {
    twen = "Line 1: R1 bus service running between Tunney's Pasture and Rideau due to XX. Trains operating between Blair and Rideau. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Rideau en raison de XX. Trains en service entre Blair et Rideau. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Tunney's Pasture and Rideau due to XX. Trains operating between Blair and Rideau.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Rideau en raison de XX. Trains en service entre Blair et Rideau.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '2p1') {
    twen = "Line 1: All service at Rideau and Parliament at the eastbound platforms only due to XX. Updates to follow.";
    twfr = "Ligne 1: Tout le service à Rideau et Parlement sur les quais est seulement en raison de XX. Mises à jour à suivre.";
    smsen = "Line 1: All service at Rideau and Parliament at the eastbound platforms only due to XX.";
    smsfr = "Ligne 1: Tout le service à Rideau et Parlement sur les quais est seulement en raison de XX.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms at Rideau and Parliament stations are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Rideau et Parlement sont ouverts. Merci de votre patience.";
  } else if(plan === '2p2') {
    twen = "Line 1: All service at Parliament and Rideau at the westbound platforms only due to XX. Updates to follow.";
    twfr = "Ligne 1: Tout le service à Parlement et Rideau sur les quais ouest seulement en raison de XX. Mises à jour à suivre.";
    smsen = "Line 1: All service at Parliament and Rideau at the westbound platforms only due to XX.";
    smsfr = "Ligne 1: Tout le service à Parlement et Rideau sur les quais ouest seulement en raison de XX.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms Parliament and Rideau are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Parlement et Rideau sont ouverts. Merci de votre patience.";
  } else if(plan === '2p3') {
    twen = "Line 1: R1 bus service running between Lyon and Rideau due to XX. No trains between Parliament and Rideau. Trains operating Tunney's Pasture—Parliament and Blair—Rideau. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Rideau en raison de XX. Aucun trains entre Parlement et Rideau. Trains en service Tunney's Pasture—Parlement et Blair—Rideau. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Lyon and Rideau due to XX. No trains between Parliament and Rideau.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Rideau en raison de XX. Aucun trains entre Parlement et Rideau.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '2p4') {
    twen = "Line 1: R1 bus service running between Lyon and Rideau due to XX. No trains between Lyon and Rideau. Trains operating Tunney's Pasture—Lyon and Blair—Rideau. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Rideau en raison de XX. Aucun trains entre Lyon et Rideau. Trains en service Tunney's Pasture—Parlement et Blair—Rideau. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Lyon and Rideau due to XX. No trains between Lyon and Rideau.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Rideau en raison de XX. Aucun trains entre Lyon et Rideau.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '2p5') {
    twen = "Line 1: R1 bus service running between Lyon and Lees due to XX. No trains between Parliament and uOttawa. Trains operating Tunney's Pasture—Parliament and Blair—uOttawa. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Lees en raison de XX. Aucun trains entre Parlement et uOttawa. Trains en service Tunney's Pasture—Parlement et Blair—uOttawa. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Lyon and Lees due to XX. No trains between Parliament and uOttawa.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Lees en raison de XX. Aucun trains entre Parlement et uOttawa.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '2p6') {
    twen = "Line 1: R1 bus service running between Lyon and Lees due to XX. No trains between Lyon and uOttawa. Trains operating Tunney's Pasture—Lyon and Blair—uOttawa. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Lees en raison de XX. Aucun trains entre Lyon et uOttawa. Trains en service Tunney's Pasture—Lyon et Blair—uOttawa. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Lyon and Lees due to XX. No trains between Lyon and uOttawa.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Lees en raison de XX. Aucun trains entre Lyon et uOttawa.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '2p7') {
    twen = "Line 1: R1 bus service running between Lyon and Hurdman due to XX. No trains between Parliament and Hurdman. Trains operating Tunney's Pasture—Parliament and Blair—Hurdman. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Hurdman en raison de XX. Aucun trains entre Parlement et Hurdman. Trains en service Tunney's Pasture—Parlement et Blair—Hurdman. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Lyon and Hurdman due to XX. No trains between Parliament and Hurdman.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Hurdman en raison de XX. Aucun trains entre Parlement et Hurdman.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '3p1') {
    twen = "Line 1: All service at Hurdman, Lees, and uOttawa at the eastbound platforms only due to XX. Updates to follow.";
    twfr = "Ligne 1: Tout le service à Hurdman, Lees et uOttawa sur les quais est seulement en raison de XX. Mises à jour à suivre.";
    smsen = "Line 1: All service at Hurdman, Lees, and uOttawa at the eastbound platforms only due to XX.";
    smsfr = "Ligne 1: Tout le service à Hurdman, Lees et uOttawa sur les quais est seulement en raison de XX.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms at Hudman, Lees, and uOttawa are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais de toutes les stations sont ouverts. Merci de patienter";
  } else if(plan === '3p2') {
    twen = "Line 1: All service at uOttawa, Lees, and Hurdman at the westbound platforms only due to XX. Updates to follow.";
    twfr = "Ligne 1: Tout le service à uOttawa, Lees et Hurdman sur les quais ouest seulement en raison de XX. Mises à jour à suivre.";
    smsen = "Line 1: All service at uOttawa, Lees, and Hurdman at the westbound platforms only due to XX.";
    smsfr = "Ligne 1: Tout le service à uOttawa, Lees et Hurdman sur les quais ouest seulement en raison de XX.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms at uOttawa, Lees, and Hurdman are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais de toutes les stations sont ouverts. Merci de patienter";
  } else if(plan === '3p3') {
    twen = "Line 1: Travel times may be longer between Hurdman and Tremblay due to XX. All platforms at all stations remain open. Updates to follow.";
    twfr = "Ligne 1: Les temps de trajet pourraient être augmentés entre Hurdman et Tremblay en raison de XX. Tous les quais de toutes les stations demeurent ouverts. Mises à jour à suivre.";
    smsen = "Line 1: Travel times may be longer between Hurdman and Tremblay due to XX. All platforms at all stations remain open.";
    smsfr = "Ligne 1: Les temps de trajet pourraient être augmentés entre Hurdman et Tremblay. Tous les quais de toutes les stations demeurent ouverts.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '3p4') {
    twen = "Line 1: R1 bus service running between Lyon and Hurdman due to XX. No trains between Parliament and Hurdman. Trains operating Tunney's Pasture—Parliament and Blair—Hurdman. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Hurdman en raison de XX. Aucun trains entre Parlement et Hurdman. Trains en service Tunney's Pasture—Parlement et Blair—Hurdman. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Lyon and Hurdman due to XX. No trains between Parliement and Hurdman.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Lyon et Hurdman en raison de XX. Aucun trains entre Parlement et Hurdman.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '3p5') {
    twen = "Line 1: R1 bus service running between Rideau and Hurdman due to XX. No trains between uOttawa and Hurdman. Trains operating Tunney's Pasture—uOttawa and Blair—Hurdman. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Rideau et Hurdman en raison de XX. Aucun trains entre uOttawa et Hurdman. Trains en service Tunney's Pasture—uOttawa et Blair—Hurdman. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Rideau and Hurdman due to XX. No trains between uOttawa and Hurdman.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Rideau et Hurdman en raison de XX. Aucun trains entre uOttawa et Hurdman.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '3p6') {
    twen = "Line 1: R1 bus service running between Rideau and St-Laurent due to XX. No trains between uOttawa and Tremblay. Trains operating Tunney's Pasture—uOttawa and Blair—Tremblay. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Rideau et St-Laurent en raison de XX. Aucun trains entre uOttawa et Tremblay. Trains en service Tunney's Pasture—uOttawa et Blair—Tremblay. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Rideau and St-Laurent due to XX. No trains between uOttawa and Tremblay.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Rideau et St-Laurent en raison de XX. Aucun trains entre uOttawa et Tremblay.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '4p1') {
    twen = "Line 1: All service at Tremblay at the eastbound platform only due to XX. Updates to follow.";
    twfr = "Ligne 1: Tout le service à Tremblay sur le quai est seulement en raison de XX. Mises à jour à suivre.";
    smsen = "Line 1: All service at Tremblay at the eastbound platform only due to XX.";
    smsfr = "Ligne 1: Tout le service à Tremblay sur le quai est seulement en raison de XX.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms at all stations are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais de toutes les stations sont ouverts. Merci de votre patience.";
  } else if(plan === '4p2') {
    twen = "Line 1: All service at Tremblay at the westbound platform only due to XX. Updates to follow.";
    twfr = "Ligne 1: Tout le service à Tremblay sur le quai ouest seulement en raison de XX. Mises à jour à suivre.";
    smsen = "Line 1: All service at Tremblay at the westbound platform only due to XX.";
    smsfr = "Ligne 1: Tout le service à Tremblay sur le quai ouest seulement en raison de XX.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms at all stations are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais de toutes les stations sont ouverts. Merci de votre patience.";
  } else if(plan === '4p3') {
    twen = "Line 1: R1 bus service running between Hurdman and St-Laurent due to XX. No trains between Hurdman and St-Laurent. Trains operating Tunney's Pasture—Hurdman and Blair—St-Laurent. Updates to follow.<br>-OR-<br>Line 1: R1 running non-stop between Hurdman and St-Laurent. On-demand shuttle between Hurdman and Tremblay. No trains between Hurdman and St-Laurent. Trains operating Tunney's Pasture—Hurdman and Blair—St-Laurent. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Hurdman et St-Laurent en raison de XX. Aucun trains entre Hurdman et St-Laurent. Trains en service Tunney's Pasture—Hurdman et Blair—St-Laurent. Mises à jour à suivre.<br>-OR-<br>Ligne 1: R1 mis en place sans arrêt entre Hurdman et St-Laurent. Navette sur demande entre Hurdman et Tremblay. Aucun trains entre Hurdman et St-Laurent. Trains en service Tunney's Pasture—Hurdman et Blair—St-Laurent. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Hurdman and St-Laurent due to XX. No trains between Hurdman and St-Laurent.<br>-OR-<br>Line 1: Non-stop R1 between Hurdman and St-Laurent. On-demand shuttle between Hurdman and Tremblay. No trains between Hurdman and St-Laurent.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Hurdman et St-Laurent en raison de XX. Aucun trains entre Hurdman et St-Laurent.<br>-OR-<br>Ligne 1: R1 mis en place sans arrêt entre Hurdman et St-Laurent. Navette sur demande entre Hurdman et Tremblay. Aucun trains entre Hurdman et St-Laurent.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '5p1') {
    twen = "Line 1: Travel times may be longer between Tremblay and St-Laurent due to XX. All platforms at all stations remain open. Updates to follow.";
    twfr = "Ligne 1: Les temps de trajet pourraient être augmentés entre Tremblay et St-Laurent en raison de XX. Tous les quais de toutes les stations demeurent ouverts. Mises à jour à suivre.";
    smsen = "Line 1: Longer travel times between Tremblay and St-Laurent due to XX. All platforms at all stations remain open.";
    smsfr = "Ligne 1: Augmentation des temps de trajet entre Tremblay et St-laurent en raison de XX. Tous les quais de toutes les stations demeurent ouverts.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1:  Service régulier des trains a repris. Merci de votre patience.";
  } else if(plan === '5p2') {
    twen = "Line 1: Travel times may be longer between Tremblay and St-Laurent due to XX. All platforms at all stations remain open. Updates to follow.";
    twfr = "Ligne 1: Les temps de trajet pourraient être augmentés entre Tremblay et St-Laurent en raison de XX. Tous les quais de toutes les stations demeurent ouverts. Mises à jour à suivre.";
    smsen = "Line 1: Longer travel times between Tremblay and St-Laurent due to XX. All platforms at all stations remain open.";
    smsfr = "Ligne 1: Augmentation des temps de trajet entre Tremblay et St-laurent en raison de XX. Tous les quais de toutes les stations demeurent ouverts.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Merci de votre patience.";
  } else if(plan === '5p3') {
    twen = "Line 1: R1 bus service running between Hurdman and St-Laurent due to XX. No trains between Tremblay and St-Laurent. Trains operating Tunney's Pasture—Tremblay and Blair—St-Laurent. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Hurdman et St-Laurent en raison de XX. Aucun trains entre Tremblay et St-Laurent. Trains en service Tunney's Pasture—Tremblay et Blair—St-Laurent. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Hurdman and St-Laurent due to XX. No trains between Tremblay and St-Laurent.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Hurdman et St-Laurent en raison de XX. Aucun trains entre Tremblay et St-Laurent.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '6p1') {
    twen = "Line 1: All service at Cyrville and St-Laurent at the eastbound platforms only due to XX. Change trains at St-Laurent. Updates to follow.";
    twfr = "Ligne 1: Tout le service à Cyrville et St-Laurent sur les quais est seulement en raison de XX. Changer de train à St-Laurent. Mises à jour à suivre.";
    smsen = "Line 1: All service at Cyrville and St-Laurent at the eastbound platforms only due to XX. Change trains at St-Laurent.";
    smsfr = "Ligne 1: Tout le service à Cyrville et St-Laurent sur les quais est seulement en raison de XX. Changer de train à St-Laurent.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms at Cyrville and St-Laurent are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à Cyrville et St-Laurent sont ouverts. Merci de votre patience.";
  } else if(plan === '6p2') {
    twen = "Line 1: All service at St-Laurent and Cyrville at the westbound platforms only due to XX. Change trains at St-Laurent. Updates to follow.";
    twfr = "Ligne 1: Tout le service à St-Laurent et Cyrville sur les quais ouest seulement en raison de XX. Changer de train à St-Laurent. Mises à jour à suivre.";
    smsen = "Line 1: All service at St-Laurent and Cyrville at the westbound platforms only due to XX. Change trains at St-Laurent.";
    smsfr = "Ligne 1: Tout le service à St-Laurent et Cyrville sur les quais ouest seulement en raison de XX. Changer de train à St-Laurent.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms at St-Laurent and Cyrville are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à St-Laurent et Cyrville sont ouverts. Merci de votre patience.";
  } else if(plan === '6p3') {
    twen = "Line 1: All service at Cyrville and St-Laurent at the eastbound platforms only due to XX. Updates to follow.";
    twfr = "Ligne 1: Tout le service à Cyrville et St-Laurent sur les quais est seulement en raison de XX. Mises à jour à suivre.";
    smsen = "Line 1: All service at Cyrville and St-Laurent at the eastbound platforms only due to XX.";
    smsfr = "Ligne 1: Tout le service à Cyrville et St-Laurent sur les quais à est seulement en raison de XX.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms at Cyrville and St-Laurent are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1:  Service régulier des trains a repris. Tous les quais à Cyrville et St-Laurent sont ouverts. Merci de votre patience.";
  } else if(plan === '6p4') {
    twen = "Line 1: All service at St-Laurent and Cyrville at the westbound platforms only due to XX. Updates to follow.";
    twfr = "Ligne 1: Tout le service à St-Laurent et Cyrville sur les quais ouest seulement en raison de XX. Mises à jour à suivre.";
    smsen = "Line 1: All service at St-Laurent and Cyrville at the westbound platforms only due to XX.";
    smsfr = "Ligne 1: Tout le service à St-Laurent et Cyrville sur les quais ouest seulement en raison de XX.";
    resen = "RESOLVED, Line 1: Regular train service has resumed. All platforms at St-Laurent and Cyrville are open. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service régulier des trains a repris. Tous les quais à St-Laurent et Cyrville sont ouverts. Merci de votre patience.";
  } else if(plan === '6p5') {
    twen = "Line 1: R1 bus service running between St-Laurent and Blair due to XX. Trains operating between Tunney's Pasture and St-Laurent. Updates to follow.<br>-OR-<br>Line 1: R1 running non-stop between St-Laurent and Blair. On-demand shuttle between St-Laurent and Cyrville. Trains operating between Tunney's Pasture and St-Laurent. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre St-Laurent et Blair en raison de XX. Trains en service entre Tunney's Pasture et St-Laurent. Mises à jour à suivre.<br>-OR-<br>Ligne 1: R1 mis en place sans arrêt entre St-Laurent et Blair. Navette sur demande entre St-Laurent et Cyrville. Trains en service entre Tunney's Pasture et St-Laurent. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between St-Laurent and Blair due to XX. Trains operating between Tunney's Pasture and St-Laurent.<br>-OR-<br>Line 1: Non-stop R1 between St-Laurent and Blair. On-demand shuttle between St-Laurent and Cyrville. Trains operating between Tunney's Pasture and St-Laurent.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre St-Laurent et Blair en raison de XX. Trains en service entre Tunney's Pasture et St-Laurent.<br>-OR-<br>Ligne 1: R1 mis en place sans arrêt entre St-Laurent et Blair. Navette sur demande entre St-Laurent et Cyrville. Trains en service entre Tunney's Pasture et St-Laurent.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '6p6') {
    twen = "Line 1: R1 bus service running between Hurdman and Blair due to XX. Trains operating between Tunney's Pasture and Tremblay. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Hurdman et Blair en raison de XX. Trains en service entre Tunney's Pasture et Tremblay. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service running between Hurdman and Blair due to XX. Trains operating between Tunney's Pasture and Tremblay.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Hurdman et Blair en raison de XX. Trains en service entre Tunney's Pasture et Tremblay.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '7p1') {
    twen = "Line 1: R1 bus service implemented between Tunney's Pasture and Lees due to a fire alarm. No trains between Pimisi and uOttawa. Service at Bayview and Pimisi is at the <strong><em>EAST/WEST</em></strong>bound platforms only. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Lees en raison d'une alarme d'incindie. Aucun trains entre Pimisi et uOttawa. Service aux Bayview et Pimisi sur les quais à l'<strong><em>EST/OUEST</em></strong> seulement. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service implemented between Tunney's Pasture and Lees due to XX. No trains between Pimisi and uOttawa.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Lees en raison de XX. Aucun trains entre Pimisi et uOttawa.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else if(plan === '7p2') {
    twen = "Line 1: R1 bus service implemented between Tunney's Pasture and Hurdman due to a fire alarm. No trains between Pimisi and Hurdman. Service at Bayview and Pimisi is at the <strong><em>EAST/WEST</em></strong>bound platforms only. Updates to follow.";
    twfr = "Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Hurdman en raison d'une alarme d'incindie. Aucun trains entre Pimisi et Hurdman. Service aux Bayview et Pimisi sur les quais à l'<strong><em>EST/OUEST</em></strong> seulement. Mises à jour à suivre.";
    smsen = "Line 1: R1 bus service implemented between Tunney's Pasture and Hurdman due to XX. No trains between Pimisi and Hurdman.";
    smsfr = "Ligne 1: Service d'autobus R1 mis en place entre Tunney's Pasture et Hurdman en raison de XX. Aucun trains entre Pimisi et Hurdman.";
    resen = "RESOLVED, Line 1: R1 bus service has ended. Regular train service has resumed. Thank you for your patience.";
    resfr = "RÉSOLU, Ligne 1: Service d'autobus R1 est terminé. Les trains ont repris le service régulier. Merci de votre patience.";
  } else {
		twen = undefined;
		twfr = undefined;
		smsen = undefined;
		smsfr = undefined;
		resen = undefined;
		resfr = undefined;
	}
}
