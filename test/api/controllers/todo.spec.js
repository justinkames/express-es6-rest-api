'use strict';

import chai from 'chai';
import supertest from 'supertest';
import app from '../../../.bin/www';
let should = chai.should();
let request = supertest(app);

describe('/api/todos', () => {
	it('[GET] should be OK (200) and return array of todos', done => {
		request.get('/api/todos')
		.set('Accept', 'application/json')
		.expect(200)
		.end((err, res) => {
			if(err) return done(err);
			chai.expect(err).to.equal(null);
			chai.expect(res.body.todos).to.not.be.empty;
			done();
		});
	});
	it('[POST] should be OK (200) and return a string with text succesfully created', done => {
		request.post('/api/todos')
		.set('Accept', 'application/json')
		.send({title: 'Test', description: 'Test message'})
		.expect(200)
		.end((err, res) => {
			if(err) return done(err);
			chai.expect(err).to.equal(null);
			chai.expect(res.body.message).to.be.an('string');
			chai.expect(res.body.message).to.equal('succesfully created todo');
			done();
		});
	});
});
