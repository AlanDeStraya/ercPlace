const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 31415;
const io = require('socket.io')(server)
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/build')));
/*
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
*/

let usersOnline = 0;

io.on('connection', socket => {
  usersOnline++;
  console.log('A client connected');
  io.emit('sNumUsersOnline', usersOnline);

  socket.on('disconnect', () => {
    console.log('A client disconnected');
    usersOnline--;
  });

  const testContent = 'testAckContent';
  socket.on('cTestSend', (obj) => {
    console.log(obj);
    io.emit('sAckTest', testContent);
  });

  socket.on('cStartEvent', param => {
    const eventStartTime = Date.now();
    io.emit('sStartEvent', eventStartTime);
    //socket.emit
    //socket.broadcast.emit
  });

});





server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});





/*

// Each new connection is assigned a random 20-characters identifier.
// This identifier is synced with the value on the client-side.
*
// server-side
io.on("connection", (socket) => {
  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
});

// client-side
socket.on("connect", () => {
  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
});
Upon creation, the Socket joins the room identified by its own id, which means you can use it for private messaging:

io.on("connection", socket => {
  socket.on("private message", (anotherSocketId, msg) => {
    socket.to(anotherSocketId).emit("private message", socket.id, msg);
  });
});




// As long as you do not overwrite any existing attribute, you can attach any attribute to the Socket instance and use it later:

// in a middleware
io.use(async (socket, next) => {
  try {
    const user = await fetchUser(socket);
    socket.user = user;
  } catch (e) {
    next(new Error("unknown user"));
  }
});

io.on("connection", (socket) => {
  console.log(socket.user);

  // in a listener
  socket.on("set username", (username) => {
    socket.username = username;
  });
});



// You can call join to subscribe the socket to a given channel:

io.on("connection", socket => {
  socket.join("some room");
});
*
// And then simply use to or in (they are the same) when broadcasting or emitting:

io.to("some room").emit("some event");

// You can emit to several rooms at the same time:

io.to("room1").to("room2").to("room3").emit("some event");

// In that case, a union is performed: every socket that is at least in one of the rooms will get the event once (even if the socket is in two or more rooms).

// join a room:
io.on("connection", (socket) => {
  console.log(socket.rooms); // Set { <socket.id> }
  socket.join("room1");
  console.log(socket.rooms); // Set { <socket.id>, "room1" }
});




// as middleware:
socket.use(([event, ...args], next) => {
  // do something with the packet (logging, authorization, rate limiting...)
  // do not forget to call next() at the end
  next();
});





// basic emit
  socket.emit(...);

  // to all clients in the current namespace except the sender
  socket.broadcast.emit(...);

  // to all clients in room1 except the sender
  socket.to("room1").emit(...);

  // to all clients in room1 and/or room2 except the sender
  socket.to("room1").to("room2").emit(...);

  // to all clients in room1
  io.in("room1").emit(...);

  // to all clients in namespace "myNamespace"
  io.of("myNamespace").emit(...);

  // to all clients in room1 in namespace "myNamespace"
  io.of("myNamespace").to("room1").emit(...);

  // to individual socketid (private message)
  io.to(socketId).emit(...);

  // to all clients on this node (when using multiple nodes)
  io.local.emit(...);

  // to all connected clients
  io.emit(...);

  // WARNING: `socket.to(socket.id).emit()` will NOT work, as it will send to everyone in the room
  // named `socket.id` but the sender. Please use the classic `socket.emit()` instead.

  // with acknowledgement
  socket.emit("question", (answer) => {
    // ...
  });



create unique id
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}








// Using Date objects
const start = Date.now();

// The event to time goes here:
doSomethingForALongTime();
const end = Date.now();
const elapsed = end - start; // elapsed time in milliseconds

*/
