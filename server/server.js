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



io.on('connection', socket => {
  socket.on('event', param => {
    //do a thing
    //io.emit('event', extraStuff);
    //socket.emit
    //socket.broadcast.emit
  });

});










server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
