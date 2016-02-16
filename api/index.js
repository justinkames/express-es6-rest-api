'use strict';

import {Router} from 'express';
import todoController from './controllers/todo';
import config from 'config';
var router = Router();

export default function() {
	router.use('/todos', todoController);
	router.use('/', (req, res) => {
		return res.json({apiVersion: config.get('apiVersion')});
	});
	return router;
}
