'use strict';

const {Router} = require('express');
const TodoController = require('./controllers/todo-controller');
const config = require('config');

function RouterSetup() {
    const todoController = new TodoController();
    const router = Router();
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

module.exports = RouterSetup;
