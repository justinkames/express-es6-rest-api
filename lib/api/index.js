'use strict';

import {Router} from 'express';
import TodoController from './controllers/todo-controller';
import config from 'config';

var router = Router();
let todoController = new TodoController();

export default function() {
	// api/todos
	router.post('/todos', todoController.create);
	router.get('/todos', todoController.list);
	router.put('/todos/:id', todoController.update);

	// /api
	router.use('/', (req, res) => {
		return res.json({apiVersion: config.get('apiVersion')});
	});

	return router;
}
