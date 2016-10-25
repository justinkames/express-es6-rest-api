### Introduction
POC showcasing CRUD operations with Express JS (ES6) and MySQL. Real time database push notifications with socket.io.

### Requirements

- Node JS ( 6.8.1 )
- MySQL DB ( execute script @ .bin/create-script.sql ).

### Technologies

- Express 4
- Angular
- Gulp JS
- MySQL
- ESlint

### Features

- Server reload on file change with nodemon.
- Unit testing with mocha, sinon and chai (es6).
- Injectable properties with NPM config module.
- Rest API example with isolated controller functions for unit testing.
- MySQL connection and MySQL CRUD examples.
- Real time communicatoin with socket.io.

### Installation development

- `$ npm i` or `$ yarn`
- `$ npm run-script startdev`

- set db credentials in config/dev.json.

- browse api @ `http://localhost:3000/api`
- browse index @ `http://localhost:3000`

### Scripts

- "` $ npm start`": "`NODE_CONFIG_DIR=lib/config NODE_ENV=prod node .bin`",
- "` $ npm run startdev`": "`NODE_CONFIG_DIR=lib/config NODE_ENV=dev DEBUG=express:router,application nodemon .bin`",
- "` $ npm test`": "`NODE_CONFIG_DIR=lib/config NODE_ENV=dev gulp watch-mocha`",

### CURL examples

- curl -X GET localhost:3000/api/todos
- curl -H "Content-Type: application/json" -X POST -d '{"title":"clean", "description":"clean the house"}' localhost:3000/api/todos
- curl -H "Content-Type: application/json" -X PUT -d '{"title":"clean", "description":"clean all the houses"}' localhost:3000/api/todos/1

# Best Practices

- https://blog.risingstack.com/node-js-best-practices/

# Research & Resources

- http://expressjs.com/en/guide/migrating-4.html => framework
- http://nodemon.io/ => code reload
- https://babeljs.io/ => transpiling
- https://mochajs.org/ => javascript test framework running on node js [ async testing ]
- http://chaijs.com/ => assertion libraray
- https://github.com/visionmedia/supertest => http assertions made easy
- https://github.com/visionmedia/superagent => client side http request library
- http://eslint.org/docs/user-guide/getting-started
- https://github.com/google/eslint-config-google
- https://strongloop.com/strongblog/modular-node-js-express/
