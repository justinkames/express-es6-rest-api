'use strict';

let sinon = require('sinon');
let chai = require('chai');
chai.should();

let Todo = require('../../../models/todo');

describe('TodoController', () => {

    it('should set the todo properties', () => {
        let title = 'title';
        let description = 'description';
        let todo = new Todo(title, description);

        todo.description.should.equal(description);
        todo.title.should.equal(title);
    });
});
