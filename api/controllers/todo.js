
'use strict';

import {Router} from 'express';
import TodoService from '../../services/todo-service';
import Todo from '../../models/todo';

let router = Router();
let todoService = new TodoService();

// curl -X GET localhost:3000/api/todos
router.get('/', (req, res) => {
	todoService.list((err, rows) => {
		if (!err) {
			return res.json(rows);
		}
	});
});

// curl -H "Content-Type: application/json" -X POST -d '{"title":"clean", "description":"clean the house"}' localhost:3000/api/todos
router.post('/', (req, res) => {
	let title = req.body.title;
	let description = req.body.description;

	if (title && description) {
		let todo = new Todo(title, description);

		todoService.save(todo, (err, result) => {
			if (err) {
				return res.status(500).json({error: 'Something went wrong saving the record.'});
			}
			return res.json({result: `Last inserted id : ${result.insertId}`});
		});
	} else {
		return res.status(400).json({msg: 'Bad request.'});
	}
});

// curl -H "Content-Type: application/json" -X PUT -d '{"title":"clean", "description":"clean the house"}' localhost:3000/api/todos/1
router.put('/:id', (req, res) => {
	let id = req.params.id;
	let title = req.body.title;
	let description = req.body.description;
	let todo = new Todo(title, description, id);

	todoService.update(todo, (err, result) => {
		if (err) {
			return res.status(400).json({message: 'Something went wrong updating the record'});
		} else {
			return res.json({message: 'Succesfully updated the record.'});
		}
	});

});

export default router;
