const WebSocket = require('ws');

const server = new WebSocket.Server( { port: 3000 } );

server.on('connection', function(ws) {
  ws.on('message', function(message) {
    if (message === 'exit') {
      ws.close();
    } else {
    server.clients.forEach(function(client) {
      if (client.readyState == WebSocket.OPEN) {
        client.send(message);
      }
  
    });
  }
  });
  ws.send('Добро:)');
});