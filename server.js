const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 31415;

app.use(express.static(__dirname + "/../public"));

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})