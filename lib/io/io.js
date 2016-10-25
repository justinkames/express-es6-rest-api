'use strict';

let io = require('socket.io');
let TodoService = require('../services/todo-service');

function app(app) {

	const iolib = io(app.server);

	let nrConnections = 0;
	let sockets = [];

	pushRealTimeDbUpdates(iolib);
	pushRandomServerEvents(iolib);

	iolib.on('connection', function(socket) {

		socket.on('join', function(name) {
			nrConnections++;
			socket.broadcast.emit('events', `${name} joined the room.`);
			sockets.push({id: socket.id, name: name});
			broadcastNrOfUsers();
		});

		socket.on('disconnect', () => {
			nrConnections--;
			socket.broadcast.emit('events', `Someone left the room`);
			sockets.splice([sockets.findIndex(elem => elem.id === socket.id)]);
			broadcastNrOfUsers();
		});

		function broadcastNrOfUsers() {
			iolib.emit('nrOfUsers', sockets.length);
		}
	});
}

function pushRealTimeDbUpdates(iolib) {

	const todoService = new TodoService();
	let lastKnownInsertedRecordId = 0;

	setInterval(() => {
		todoService.getLastInsertedRecordId((err, result) => {
			if (!err) {
				let lastInsertedRecordId = result[0].id;
				if (lastInsertedRecordId > lastKnownInsertedRecordId) {
						// select where ID > X and < X
					if (lastKnownInsertedRecordId > 0 ){
						console.debug(`between ${lastKnownInsertedRecordId} and ${lastInsertedRecordId}`);
						todoService.getRecordsBetweenId(lastKnownInsertedRecordId, lastInsertedRecordId, (err, result) => {
							console.debug('SENDING the following results', JSON.stringify(result));
							iolib.emit('dbupdates', JSON.stringify(result));
						});
					}
				}
				lastKnownInsertedRecordId = lastInsertedRecordId;
			}
		});
	}, 2000);
}

function pushRandomServerEvents(iolib) {
	setInterval(() => {
		iolib.emit('broadcasts', new Date());
	}, 5000);
}

module.exports = app;