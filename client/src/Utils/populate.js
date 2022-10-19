function populate(task) {
  let now = new Date();
  let id = now.valueOf();
  let time = now.toLocaleTimeString('en-GB');

  switch (task) {

  // MLC
    case systemHold:
      return {
        "name": "System Hold",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": ['releaseSystemHold'],
        "remove": []
      }
    
    case releaseSystemHold:
      return {
        "name": "Release System Hold",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": [],
        "remove": []
      }
    
    case divertOneTrain:
      return {
        "name": "Divert One Train",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": false,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": [],
        "remove": []
      }
    
    case implementDiversion:
      return {
        "name": "Implement Diversion",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": ['closePlatforms', 'antibunchingOn', 'constantHeadwayOn', 'modifyTurnbackDwells', 'parkExtraTrains', 'liftDiversion'],
        "remove": ['divertOneTrain']
      }

    case parkExtraTrains:
      return {
        "name": "Park Extra Trains",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": false,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": [],
        "remove": []
      }

    case modifyTurnbackDwells:
      return {
        "name": "Modify Turnback Dwells",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": ['resetTurnbackDwells'],
        "remove": []
      }

    case resetTurnbackDwells:
      return {
        "name": "Reset Turnback Dwells",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": [],
        "remove": []
      }

    case constantHeadwayOn:
      return {
        "name": "Constant Headway On",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": ['constantHeadwayOff'],
        "remove": []
      }

    case constantHeadwayOff:
      return {
        "name": "Constant Headway Off",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": [],
        "remove": []
      }

    case liftDiversion:
      return {
        "name": "Lift Diversion",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": [],
        "remove": []
      }

    case closePlatforms:
      return {
        "name": "Close Platforms",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": false,
        "flowchartOutcome": undefined,
        "enhanced": false,
        "add": [],
        "remove": []
      }

    case issueTOP:
      return {
        "name": "Issue TOP",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": false,
        "add": ['cancelTOP'],
        "remove": []
      }

    case cancelTOP:
      return {
        "name": "Cancel TOP",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": false,
        "add": [],
        "remove": []
      }

    case issueIGA:
      return {
        "name": "Issue IGA",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": false,
        "add": ['cancelTOP'],
        "remove": []
      }

    case cancelIGA:
      return {
        "name": "Cancel IGA",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "flowchartOutcome": undefined,
        "enhanced": false,
        "add": [],
        "remove": []
      }


  // SCADA  
    case callRTM:
      return {
        "name": "Call RTM",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "scada",
        "logBook": false,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": ['techETA'],
        "remove": []
      }
    
    case techETA:
      return {
        "name": "Tech ETA",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "scada",
        "logBook": false,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": ['techArrival', 'techETA'],
        "remove": []
      }
    
    case techArrival:
      return {
        "name": "Tech Arrival",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "scada",
        "logBook": false,
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": [],
        "remove": []
      }


  // COMMS
    case notifySupt:
      return {
        "name": "Notify Superintendent",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "comms",
        "logBook": false,
        "activatedBy": "",
        "flowchartOutcome": undefined,
        "enhanced": false,
        "add": [],
        "remove": []
      }

    case notifyComms:
      return {
        "name": "Notify Comms/CS",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "comms",
        "logBook": false,
        "activatedBy": "",
        "flowchartOutcome": undefined,
        "enhanced": false,
        "add": [],
        "remove": []
      }

    case notifyEscalation:
      return {
        "name": "Notify Escalation",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "comms",
        "logBook": false,
        "activatedBy": "",
        "flowchartOutcome": undefined,
        "enhanced": true,
        "add": [],
        "remove": []
      }

    case initialEnhanced:
      return {
        "name": "Initial Enhanced",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "comms",
        "logBook": false,
        "activatedBy": "",
        "flowchartOutcome": undefined,
        "enhanced": false,
        "add": [],
        "remove": []
      }

    case startAnnouncements:
      return {
        "name": "Start Announcements",
        "id": id,
        "content": "",
        "time": time,
        "status": "suggested",
        "desk": "comms",
        "logBook": false,
        "activatedBy": "",
        "flowchartOutcome": undefined,
        "enhanced": false,
        "add": [],
        "remove": []
      }

  }
}

export default populate;


// ** cleanup ** remove extra properties