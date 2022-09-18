const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 31415;
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));


server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})