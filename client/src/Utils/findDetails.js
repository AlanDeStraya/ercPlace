function findDetails(plan) {
  let oblocation, routing, notes;

	if(plan === '1.1') {
		oblocation = '1.1 Obstruction on track 1 <br> 11 trains (LYO open)';
		routing = '<strong>East Loop LYO-BLA: </strong>LN01 - LN07 start PAR-W resume PAR-E (10 trains)<br><strong>Shuttle Train TUN-LYO: </strong>Assign 1 train to dedicated shuttle track 2';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 1.5</li><li>If 11 trains on ML: 1 shuttle, 1 removed/parked, 9 on loop</li><li>If possible, step-back at LYO-W</li><li>If possible, serve TUN-W</li></ul>';
	} else if(plan === '1.2') {
		oblocation = '1.2 Obstruction track 2<br>7-11 trains (LYO open)';
		routing = "<strong>East Loop LYO-BLA: </strong>LN01 to DE01 start LYO-W resume PAR-E (10 trains)<br><strong>Shuttle Train TUN-LYO: </strong>Assign 1 train to dedicated shuttle track 1";
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 1.5</li><li>If 11 trains on ML: 1 shuttle, 1 removed/parked, 9 on loop</li><li>If possible, step-back at LYO-E</li></ul>';
	} else if(plan === '1.3') {
		oblocation = '1.3 Obstruction track 1<br>6 trains or less (LYO open)';
		routing = '<strong>Single Tracking: </strong>LN01-DW02 start PAR-W resume TUN';
		notes = '6 trains: Park 1 each at TUN and BLA, use to fill gaps.'
	} else if(plan === '1.4') {
		oblocation = '1.4 Obstruction track 2<br>6 trains or less (LYO open)';
		routing = '<strong>Single Tracking: </strong>LN01-DE01 start TUN resume PAR-E';
		notes = '6 trains: Park 1 each at TUN and BLA, use to fill gaps.'
	} else if(plan === '1.5') {
		oblocation = '1.5 Obstruction both tracks TUN-LYO west gate (LYO open)<br>or<br>Obstruction on either track during peak 13 trains (LYO open)';
		routing = '<strong>R1:</strong> TUN-RID<br><strong>East Loop LYO-BLA:</strong> Line 7 (11 trains)'
		notes = 'If possible, step-back at LYO';
	} else if(plan === '1.6') {
		oblocation = '1.6 Both tracks closed west gate LYO to LYO interlocking';
		routing = '<strong>R1:</strong> TUN-RID<br><strong>East Loop RID-BLA:</strong>LN01-LN19 start TRE-W resume HUR-E (9 trains)';
		notes = 'If possible, step-back at RID';
	} else if(plan === '2.1') {
		oblocation = '2.1 Obstruction track 1<br>11 trains or less';
		routing = '<strong>Single Tracking:</strong> LN01-DW01 start UOT-W resume LYO-W (8 trains)';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 2.3, 2.4, 2.5, 2.6, or 2.7</li><li>If 11 trains on ML: Park 1 each at TUN/BLA, use to fill gaps. Remove/park 1 train</li></ul>';
	} else if(plan === '2.2') {
		oblocation = '2.2 Obstruction track 2<br>11 trains or less';
		routing = '<strong>Single Tracking:</strong> LN01-DE02 start LYO-E resume UOT-E (8 trains)';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 2.3, 2.4, 2.5, 2.6, or 2.7</li><li>If 11 trains on ML: Park 1 each at TUN/BLA, use to fill gaps. Remove/park 1 train</li></ul>';
	} else if(plan === '2.3') {
		oblocation = '2.3 Obstruction on track 1 or 2, 13 trains (at least 1 platform open at PAR and RID)';
		routing = '<strong>R1:</strong> LYO to RID<br><strong>West Loop TUN-PAR:</strong> Line 6 (4 trains)<br><strong>East Loop RID-BLA:</strong> LN01-LN19 start TRE-W resume HUR-E (9 trains)';
		notes = 'If possible, step-back at PAR and RID (if only one platform available for turnback)';
	} else if(plan === '2.4') {
		oblocation = '2.4 Both tracks closed LYO interlocking to west gate RID (RID open)';
		routing = '<strong>R1:</strong> LYO to RID<br><strong>West Shuttle TUN-LYO:</strong> alternating on each track (2 trains)<br><strong>East Loop RID-BLA:</strong> LN01-LN19 start TRE-W resume HUR-E (9 trains)';
		notes = '<ul><li>If 13 trains on ML, remove/park 2 trains</li><li>If possible, step-back at RID</li></ul>';
	} else if(plan === '2.5') {
		oblocation = '2.5 Both tracks closed east gate PAR to west gate PUOT (PAR, PUOT open)';
		routing = '<strong>R1:</strong> LYO-LEE<br><strong>West Loop:</strong> Line 6 TUN-PAR (4 trains)<br><strong>East Loop UOT-BLA:</strong> Line 12 (9 trains)';
		notes = 'If possible, step-back at UOT (turnback is at pseudo platform)';
	} else if(plan === '2.6') {
		oblocation = '2.6 Both tracks closed west gate PAR to east gate RID';
		routing = '<strong>R1:</strong> LYO-LEE<br><strong>West Shuttle TUN-LYO:</strong> alternating on each track (2 trains)<br><strong>East Loop UOT-BLA:</strong> Line 12 (9 trains)';
		notes = '<ul><li>If 13 trains on ML, remove/park 2 trains</li><li>If possible, stepback at UOT (turnback at pseudo platform)</li></ul>';
	} else if(plan === '2.7') {
		oblocation = '2.7 Both tracks closed PUOT to UOT interlocking';
		routing = '<strong>R1:</strong> LYO-HUR + LEE<br><strong>West Loop TUN-PAR:</strong> Line 6 (4 trains)<br><strong>East Loop HUR-E - BLA:</strong> Line 16  (6 trains)';
		notes = '<ul><li>If 13 trains on ML, remove/park 3 trains</li><li>If possible, stepback at HUR-E</li></ul>';
	} else if(plan === '3.1') {
		oblocation = '3.1 Obstruction track 1<br>UOT interlocking to HUR crossover';
		routing = '<strong>Single Tracking:</strong> LN01-DW02 start TRE-W resume RID-W (7 trains)';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 3.5 or 3.6.</li><li>If 11 trains on ML: park 1 each at TUN/BLA, use to fill gaps. Remove/park 2 trains.</li></ul>';
	} else if(plan === '3.2') {
		oblocation = '3.2 Obstruction track 2<br>UOT interlocking to HUR crossover';
		routing = '<strong>Single Tracking:</strong> LN01-DW02 start RID-E resume TRE-E (7 trains)';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 3.5 or 3.6.</li><li>If 11 trains on ML: park 1 each at TUN/BLA, use to fill gaps. Remove/park 2 trains.</li></ul>';
	} else if(plan === '3.3'){
		oblocation = '3.3 Obstruction track 2 HUR west crossover to HUR crossover';
		routing = '<strong>Single Tracking:</strong> LN01-DE04 start HUR-E resume TRE-E';
		notes = 'If 13 trains on ML, park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '3.4'){
		oblocation = 'Both tracks closed UOT interlocking to east gate UOT';
		routing = '<strong>R1:</strong> LYO-HUR + LEE<br><strong>West Loop TUN-PAR:</strong> Line 6 (4 trains)<br><strong>East Loop HUR-E - BLA:</strong> Line 16 (5 trains)';
		notes = '<ul><li>If 13 trains on ML, 4 must be removed/parked.</li><li>If possible, step-back at HUR-E</li></ul>';
	} else if(plan === '3.5') {
		oblocation = '3.5 Both tracks closed east gate UOT to west gate HUR (UOT, HUR-E open)';
		routing = '<strong>R1:</strong> RID-HUR + LEE<br><strong>West Loop 5 TUN-UOT:</strong> Line (8 trains)<br><strong>East Loop HUR-E - BLA:</strong> Line 16 (5 trains)';
		notes = 'If possible, step-back at HUR-E';
	} else if(plan === '3.6') {
		oblocation = '3.6 Both tracks closed west gate HUR to HUR west crossover';
		routing = '<strong>R1:</strong> RID-STL + LEE<br><strong>West Loop TUN-UOT:</strong> Line 5 (8 trains)<br><strong>East Loop TRE-E - BLA:</strong> Line 18 (5 trains)';
		notes = 'If possible, step-back at TRE-E';
	} else if(plan === '4.1') {
		oblocation = '4.1 Obstruction track 1';
		routing = '<strong>Single Tracking:</strong> LN01-DW05 start STL-W resume HUR-W (11 trains)';
		notes = 'If 13 trains on ML park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '4.2') {
		oblocation = '4.2 Obstruction track 2';
		routing = '<strong>Single Tracking:</strong> LN01-DE06 start HUR-E resume STL-E (11 trains)';
		notes = 'If 13 trains on ML park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '4.3') {
		oblocation = '4.3 Obstruction both tracks';
		routing = '<strong>R1:</strong> HUR-STL<br><strong>Shuttle Train STL-BLA:</strong> alternating on each track (2 trains)<br><strong>West Loop TUN-HUR:</strong> Line 4 (PHUR-W) (9 trains)';
		notes = '<ul><li>If 13 trains on ML, 2 must be removed/parked</li><li>If possible, step-back HUR-E (turnback is at a pseudo platform)</li></ul>';
	} else if(plan === '5.1') {
		oblocation = '5.1 Obstruction track 1';
		routing = '<strong>Single Tracking:</strong> LN01-DW08 start STL-W resume TRE-W (11 trains)';
		notes = 'If 13 trains on ML park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '5.2') {
		oblocation = '5.2 Obstruction track 2';
		routing = '<strong>Single Tracking:</strong> LN01-DE09 start TRE-E resume STL-E (11 trains)';
		notes = 'If 13 trains on ML park 1 each at TUN/BLA, use to fill gaps';
	} else if(plan === '5.3') {
		oblocation = '5.3 Obstruction on both tracks';
		routing = '<strong>R1:</strong> HUR-STL<br><strong>Shuttle Train STL-BLA:</strong> alternating on each track (2 trains)<br><strong>West Loop TUN-HUR:</strong> Line 4 (PHUR-W) (9 trains)';
		notes = 'If possible, step-back at TRE-E';
	} else if(plan === '6.1') {
		oblocation = '6.1 Obstruction track 1, STL-E open<br>7-11 trains';
		routing = '<strong>West Loop TUN-STL:</strong> LN01-DW02 start STL-E resume TRE-W (10 trains)<br><strong>Single Tracking:</strong> Shuttle train on track 2 STL-E - BLA-E';
		notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 6.5</li><li>If possible, step-back at STL-E</li></ul>';
	} else if(plan === '6.2') {
    oblocation = '6.2 Obstruction track 2, STL-W open<br>7-11 trains';
    routing = '<strong>West Loop TUN-STL:</strong> LN01-LN02 start TRE-E resume TRE-W (10 trains)<br><strong>Single Tracking:</strong> Shuttle train track 1 STL-W - BLA-W';
    notes = '<ul><li><strong>Do not use during peak period</strong> (13 trains). Use 6.5</li><li>If possible, 2 EROs on shuttle train and step-back at STL-W';
  } else if(plan === '6.3') {
		oblocation = '6.3 Obstruction track 1<br>4-6 trains only';
		routing = '<strong>Single Tracking:</strong> LN01-DW02 start BLA resume TRE-W';
		notes = '';
	} else if(plan === '6.4') {
		oblocation = '6.4 Obstruction track 2<br>4-6 trains only';
		routing = '<strong>Single Tracking:</strong> LN01-DE01 start TRE-E resume BLA';
		notes = '';
	} else if(plan === '6.5') {
		oblocation = '6.5 Obstruction on both tracks, STL open';
		routing = '<strong>R1:</strong> STL-BLA<br><strong>West Loop TUN-STL:</strong> Line 2 (11 trains)';
		notes = 'If 13 trains on ML, 2 must be parked';
	} else if(plan === '6.6') {
		oblocation = '6.6 Obstruction on both tracks, STL closed';
		routing = '<strong>R1:</strong> HUR-BLA<br><strong>West Loop TUN-TRE-E:</strong> Line 3 (10 trains)';
		notes = '<ul><li>If 13 trains on ML, 3 must be removed/parked</li><li>If possible, step-back at TRE-E</li></ul>'
	} else if(plan === '7.1') {
		oblocation = '7.1 No stage-2 fire alarm';
		routing = '<strong>R1:</strong> TUN-LEE<br><strong>Shuttle Train TUN-PIM:</strong> (1 train, either track)<br><strong>East Loop PUOT-BLA:</strong> Line 12 (9 trains)';
		notes = 'If possible, 2 EROs on shuttle train, step-back at UOT-W (turnback is at pseudo platform)';
	} else if(plan === '7.2') {
		oblocation = '7.2 With stage-2 fire alarm';
		routing = '<strong>R1:</strong> TUN-HUR + LEE<br><strong>Shuttle Train TUN-PIM:</strong> (1 train, either track)<br><strong>East Loop HUR-E - BLA:</strong> Line 16 (6 trains)';
		notes = 'If 13 trains on ML, 6 must be removed/parked';
	} else {
		oblocation = undefined;
		routing = undefined;
		notes = undefined;
	}


  return (
    <>
    <h2>Plan Details</h2>
    <table>
      <thead>
        <tr>
          <th>Obstruction Location</th><th>Routing</th><th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{oblocation}</td><td>{routing}</td><td>{notes}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default findDetails;