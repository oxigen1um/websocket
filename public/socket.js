const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const socket = io('http://localhost:3000');

function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  socket.emit('chat', input.value);
  input.value = '';
});

socket.on('connect', function() {
  setStatus('ONLINE');
});

socket.on('disconnect', function() {
  setStatus('DISCONNECTED');
});

socket.on('chat', function(message) {
  printMessage(message);
});

socket.on('ready', function(message) {
  printMessage(message);
});