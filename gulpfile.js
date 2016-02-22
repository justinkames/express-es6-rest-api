// Use babel to transpile to ES6 to ES5
require('babel-core/register');
// include all tasks
require('require-dir')('build/tasks');
