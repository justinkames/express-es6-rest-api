'use strict';

import sinon from 'sinon';
import chai from 'chai';
chai.should();

import Todo from '../../../models/todo';

describe('TodoController', () => {

	beforeEach(done => {
		done();
	});

	afterEach(done => {
		done();
	});

	it('should set the todo properties', () => {
		let title = 'title';
		let description = 'description';
		let todo = new Todo(title, description);
		todo.description.should.equal(description);
		todo.title.should.equal(title);
	});
});
