'use strict';

let config = require('config');
let mysql = require('mysql');

let host = config.get('host');
let user = config.get('user');
let password = config.get('pass');
let db = config.get('db');

let pool = mysql.createPool({
	limit: 10,
	host: host,
	user: user,
	password: password,
	database: db
});

module.exports = pool;
