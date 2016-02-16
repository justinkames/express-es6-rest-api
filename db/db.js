import config from 'config';
import mysql from 'mysql';

let host = config.get('host');
let user = config.get('user');
let password = config.get('pass');
let db = config.get('db');

console.log('trying to connect to host :', host);
console.log('trying to connect with user :', user);
console.log('trying to connect to password :', password);
console.log('trying to connect to db :', db);

let pool = mysql.createPool({
	limit: 10,
	host: host,
	user: user,
	password: password,
	database: db
});

export default pool;
