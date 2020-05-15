const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => res.sendFile(__dirname, '/index.html'));

io.on('connect', (socket) => {
  console.log('Socket connected..');

  // Say Hi to all connected clients
  io.emit('broadcast', '[Server]: Welcome stranger!');

  socket.on('message', (msg) => {
    console.log('message received:', msg);
    io.emit('message', msg);
  });

  // Say Bye to all connected clients
  socket.on('disconnect', function () {
    console.log('Socket disconnecting..');
    io.emit('broadcast', '[Server]: Bye, bye, stranger!');
  });
});

const port = process.env.PORT || 3001;
app.set('port', port);

http.listen(port, () => {
  console.log('listening on *:3001');
});