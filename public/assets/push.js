var server = document.getElementById('messages');
var broadcasts = document.getElementById('broadcasts');
var events = document.getElementById('events');

var socket = io.connect('http://localhost:3000');

socket.on('connect', function(data) {
	socket.emit('join', 'admin');
});

socket.on('messages', function(data) {
	server.innerHTML = server.innerHTML + data + '<br/>';
});

socket.on('broad', function(data) {
	broadcasts.innerHTML = broadcasts.innerHTML + data + '<br/>';
});

socket.on('events', function(data) {
	events.innerHTML = events.innerHTML + data + '<br/>';
});

socket.on('dbupdates', function(data) {
	dbupdates.innerHTML = dbupdates.innerHTML + data + '<br/>';
});
