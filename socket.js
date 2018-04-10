const Server = require('socket.io');

const server = new Server(3000);

server.on('connect', function(socket) {
  socket.on('chat', function(message) {
    server.emit('chat', message);
  });
  
  socket.emit('ready', 'Добро пожаловать в чат');
});