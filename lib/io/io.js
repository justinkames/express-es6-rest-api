'use strict';

let io = require('socket.io');
let TodoService = require('../services/todo-service');

function app(app) {

    const iolib = io(app.server);

    let nrConnections = 0;
    let sockets = [];

    pushRealTimeDbUpdates(iolib);
    pushRandomServerEvents(iolib);

    iolib.on('connection', function (socket) {

        socket.on('join', function (name) {
            nrConnections++;
            socket.broadcast.emit('events', `${name} is watching.`);
            sockets.push({id: socket.id, name: name});
            broadcastNrOfUsers();
        });

        socket.on('disconnect', () => {
            nrConnections--;
            const userIndex = sockets.findIndex(elem => elem.id === socket.id);
            const username = sockets[userIndex]  ? sockets[userIndex].name : 'Unknown user';
            socket.broadcast.emit('events', `${username} stopped watching.`);
            sockets.splice(userIndex);
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
                    if (lastKnownInsertedRecordId > 0) {
                        todoService.getRecordsBetweenId(lastKnownInsertedRecordId, lastInsertedRecordId, (err, result) => {
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
    }, 10000);
}

module.exports = app;