# Express 4 / ES 6 / REST API / MYSQL

### Introduction

POC showcasing CRUD operations with express js (es6) and mysql, coverage reports on es6 code with istanbul and isparta. Real time database push notifications with Socket.io.

### Technologies

- Node JS
- Gulp JS
- Express 4
- ES6 syntax
- MYSQL
- Eslint ( google style )

### Features

- Server reload on file change with nodemon
- Unit testing with mocha, sinon and chai (es6)
- Mocha / Istanbul / iSparta coverage reports ( gulp tasks )
- Injectable properties with NPM config module
- Rest API example with isolated controller functions for unit testing
- MYSQL connection ( pool ) and CRUD examples

### Installation development

- `$ npm i`
- `$ npm run-script startdev` == `$ NODE_CONFIG_DIR=lib/config NODE_ENV=dev DEBUG=express:router,application nodemon .bin`
- browse api @ `http://localhost:3000/api`
- browse index @ `http://localhost:3000`

### Scripts

- "npm start": "NODE_CONFIG_DIR=lib/config NODE_ENV=prod node .bin",
- "npm startdev": "NODE_CONFIG_DIR=lib/config NODE_ENV=dev DEBUG=express:router,application nodemon .bin",
- "npm coverage-report": "NODE_CONFIG_DIR=lib/config NODE_ENV=dev gulp coverage-report",
- "npm test": "NODE_CONFIG_DIR=lib/config NODE_ENV=dev gulp watch-mocha",

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
