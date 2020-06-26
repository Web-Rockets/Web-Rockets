const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// --------- database connection ------
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://exquizzle:admin@clusterzero-acjrx.mongodb.net/scratch', { useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo Database');
});
// --------- database connection ------

// --------- Schema imports -----------
// --------- import to Controllers
// --------- Schema imports -----------

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

function newConnection(socket) {
  // console.log('new connection:', socket.id);
  // function to receive code
  // socket.on('mouse', mouseMsg);
  // socket.on('down', (data) => {
  //   socket.broadcast.emit('down', data);
  // });
  // receieves mouse coordinates
  // function mouseMsg(data) {
  // console.log('data:', data);
  // broadcasts data to everyone who is connected
  // socket.broadcast.emit('mouseback', data);
  // globally emit data to everyone
  // io.sockets.emit('mouse', data);
  // }
}
