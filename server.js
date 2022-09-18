const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 31415;

const path = require('path');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})