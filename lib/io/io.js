'use strict';

import io from 'socket.io';
import TodoService from '../services/todo-service';

export default app => {

	let todoService = new TodoService();
	let nrConnections = 0;
	let lastKnownInsertedRecordId = 0;

	io(app.server).on('connection', function(client) {
		client.on('join', function(data) {
			console.log(data);
			client.emit('events', `${data} joined`);
			nrConnections++;
		});
		client.on('disconnect', () => {
			console.log('someone left..');
			nrConnections--;
			client.broadcast.emit('events', 'Someone left the room');
		});

		setInterval(() => {
			todoService.getLastInsertedRecordId((err, result) => {
				if(!err) {
					let lastInsertedRecordId = result[0].id;
					if(lastInsertedRecordId > lastKnownInsertedRecordId) {
						console.log(`${lastInsertedRecordId} ${lastKnownInsertedRecordId}`);
						// select where ID > X and < X
						if(lastKnownInsertedRecordId > 0 ) {
							console.log(`between ${lastKnownInsertedRecordId} and ${lastInsertedRecordId}`);
							todoService.getRecordsBetweenId(lastKnownInsertedRecordId, lastInsertedRecordId, (err, result) => {
								console.log('SENDING the following results', JSON.stringify(result));
								client.emit('dbupdates', JSON.stringify(result));
							});
						}
					}
					lastKnownInsertedRecordId = lastInsertedRecordId;
				}
			})
		}, 3000);
	});
}
