const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {}

app.use('/asset', express.static(path.join(__dirname, '../client/asset')));
