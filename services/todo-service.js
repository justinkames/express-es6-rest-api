import pool from '../db/db.js';

export default class TodoService {
	constructor() {}

	list(cb) {
		pool.getConnection((err, conn) => {
			conn.query('SELECT * FROM Todo', (err, rows, fields) => {
				cb(err, rows);
				conn.release();
			});
		});
	}

	save(todo, cb) {
		pool.getConnection((err, conn) => {
			conn.query('INSERT INTO Todo SET ?', todo, function(err, res) {
				cb(err, res);
				conn.release();
			});
		});
	}

	update(todo, cb) {
		console.log('id :', todo.id, ' | title :', todo.title, ' | descr :', todo.description);
		pool.getConnection((err, conn) => {
			conn.query('UPDATE Todo SET title = ?, description = ? WHERE id = ?', [todo.title, todo.description, todo.id], (err, res) => {
				if(!err) {
					console.log(`changed rows : ${res.changedRows}`);
				}
				cb(err, res);
				conn.release();
			});
		});
	}

	removeByTitle(title, cb) {
		pool.getConnection((err, conn) => {
			connection.query('DELETE FROM Todo WHERE title = : ',['title'], function (err, res) {
				cb(err, res);
			});
		});
	}
}
