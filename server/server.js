const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 31415;
const io = require('socket.io')(server)
const path = require('path');

let users = {};
let messages = [];
let usersOnline = 0;
let messageId = 1;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/obstructionFinder', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'obstructionFinder.html'));
});

app.get('/diversionChecklist', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'diversionChecklist.html'));
});

app.get('/sim', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'sim.html'));
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});



	// io.emit to all
	// socket.emit to this socket connection only

io.on('connection', socket => {
	
  users[socket.id] = {status: 'online'};
  socket.on('cNewUser', name => {
    users[socket.id].name = name;
    socket.broadcast.emit('sUserConnected', name);
    socket.emit('sNewUserPackge', {users: users, messages: messages});
  });

  usersOnline = Object.keys(users).length;
  console.log('A client connected, users online: ' + usersOnline);
  io.emit('sNumUsersOnline', usersOnline);

  socket.on('disconnect', () => {
    delete users[socket.id].status;
    usersOnline = Object.keys(users).length;
    console.log('A client disconnected, users online: ' + usersOnline);
		io.emit('sNumUsersOnline', usersOnline);
  });

  socket.on('cStartEvent', time => {
    console.log(time);
    io.emit('sStartEvent', time);
  });

  socket.on('ack', () => {
    console.log('ackd');
  });

  socket.on('cIsAlan', str => {
    const ok = 'ok'
    const nope = 'nope'
    console.log('auth req received');
    if(str === 'test') {
      socket.emit('sAuthAlan', ok);
      console.log('turned on');
    } else if(str === 'off') {
      socket.emit('sAuthAlan', nope);
      console.log('turned off');
    } else {
      socket.emit('sAuthAlan', usersOnline);
      console.log('invalid command');
    }

    socket.on('cAlert', obj => {
      io.emit('sAlert', obj);
    });
  });



  socket.on('cChatMessage', msg => {
    let now = new Date();
    let hours = now.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    let mins = now.getMinutes();
    mins = mins < 10 ? '0' + mins : mins;
    let secs = now.getSeconds();
    secs = secs < 10 ? '0' + secs : secs;
    let stamp = now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear() + ' ' + hours + ":" + mins + ":" + secs;

    const newMessage = { message: msg, messageId: Date.now(), sender: users[socket.id].name, timestamp: stamp };
    messages.push(newMessage);
    if(messages.length > 99) {
      messages.shift();
    }
    io.emit('sChatMessage', newMessage);
  });

  socket.on('disconnect', () => {
    let now = new Date();
    let hours = now.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    let mins = now.getMinutes();
    mins = mins < 10 ? '0' + mins : mins;
    let secs = now.getSeconds();
    secs = secs < 10 ? '0' + secs : secs;
    let stamp = now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear() + ' ' + hours + ":" + mins + ":" + secs;
		const discoMessage = { message: `${users[socket.id]} left the chat`, messageId: messageId, sender: users[socket.id], timestamp: stamp };
		io.emit('sChatMessage', discoMessage);
		delete users[socket.id];
	});
	socket.on('cTyping', name => {
		socket.broadcast.emit('sTyping', name);
	});
	socket.on('cNotTyping', name => {
		socket.broadcast.emit('sNotTyping', name);
	});

});







server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});




