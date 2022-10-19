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
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "activatedBy": "",
        "flowchartOutcome": undefined,
        "enhanced": true
      }
    
    case implementDiversion:
      return {
        "name": "Implement Diversion",
        "id": id,
        "time": time,
        "status": "suggested",
        "desk": "mainline",
        "logBook": true,
        "activatedBy": "",
        "flowchartOutcome": undefined,
        "enhanced": true
      }
  
  // SCADA
      
    case callRTM:
      return {
        "name": "Call RTM",
        "id": id,
        "time": time,
        "status": "suggested",
        "desk": "scada",
        "logBook": false,
        "activatedBy": "",
        "flowchartOutcome": undefined,
        "enhanced": true
      }



  // COMMS
    case notifySupt:
      return {
        "name": "Notify Superintendent",
        "id": id,
        "time": time,
        "status": "suggested",
        "desk": "comms",
        "logBook": false,
        "activatedBy": "",
        "flowchartOutcome": undefined,
        "enhanced": false
      }
  }
}

export default populate;