# Express 4 / ES 6 / REST API / MYSQL

### Introduction

Simple POC showcasing CRUD operations with express and mysql (es6).

### Technologies

- Node JS
- Express 4
- ES6 syntax
- Eslint ( google style )
- MYSQL

### Features

- Server reload on file change with nodemon
- Unit testing with mocha, supertest and chai (es6)
- Injectable properties with NPM config module

### Installation development

- `$ npm i`
- `$ npm run-script startdev` == `$ NODE_ENV=dev DEBUG=express:router,application nodemon .bin/www`
- browse api @ `http://localhost:3000/api`

### Unit testing

- Unit testing with mocha, chai, chai-as-promised, sinon and supertest ( ES6 )
- `$ npm test` == `NODE_ENV=dev ./node_modules/mocha/bin/mocha test/ --recursive --compilers js:babel-core/register`

=> curl -X GET localhost:3000/api/todos
=> curl -H "Content-Type: application/json" -X POST -d '{"title":"clean", "description":"clean the house"}' localhost:3000/api/todos
=> curl -H "Content-Type: application/json" -X PUT -d '{"title":"clean", "description":"clean all the houses"}' localhost:3000/api/todos/1

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
