'use strict';

const TodoService = require('../../services/todo-service');
const Todo = require('../../models/todo');
const todoService = new TodoService();

class TodoController {

	// curl -X GET localhost:3000/api/todos
	list(req, res) {
		todoService.list((err, rows) => {
			if (err) {
				return res.json({error: 'Could not retrieve todos.'});
			}
			return res.json({todos: rows});
		});
	}

	// curl -H "Content-Type: application/json" -X POST -d '{"title":"clean", "description":"clean the house"}' localhost:3000/api/todos
	create(req, res) {
		const title = req.body.title;
		const description = req.body.description;

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
	}

	// curl -H "Content-Type: application/json" -X PUT -d '{"title":"clean", "description":"clean the house"}' localhost:3000/api/todos/1
	update(req, res) {
		const id = req.params.id;
		const title = req.body.title;
		const description = req.body.description;
		const todo = new Todo(title, description, id);
		todoService.update(todo, (err, result) => {
			if (err) {
				return res.status(400).json({message: 'Something went wrong updating the record'});
			}
			return res.json({message: 'Succesfully updated the record!'});
		});
	}
}

module.exports = TodoController;
