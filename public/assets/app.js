const app = angular.module('app',['btford.socket-io']);

app.factory('mySocket', socketFactory => {
	return socketFactory();
});

app.controller('appCtrl', ($scope, mySocket) => {

	$scope.nrOfUsers = 0;
	$scope.broadcasts = [];
	$scope.events = [];
	$scope.dbupdates = [];

	mySocket.emit('join', 'user #'+Math.floor(Math.random()*10000,2));

	// display number of connected users
	mySocket.on('nrOfUsers', data => {
		$scope.nrOfUsers = data;
	});

	// any broadcast
	mySocket.on('broadcasts', data => {
		$scope.broadcasts.push(data);
	});

	// events
	mySocket.on('events', data => {
		$scope.events.push(data);
	});

	// database updates
	mySocket.on('dbupdates', data => {
		const todo = JSON.parse(data);
		console.log('@@ received', todo);
		$scope.dbupdates.push(`${todo[0].ID} - ${todo[0].title}`);
	});
});

