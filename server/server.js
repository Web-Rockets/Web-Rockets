const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use('/asset', express.static(path.join(__dirname, '../client/asset')));

app.get('/', (req, res) => {
  console.log('inside the *');
  res.sendFile(path.join(__dirname, '../index.html'));
});

const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {}
