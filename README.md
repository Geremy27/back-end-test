# Back End Test

This test is meant to demonstrate Germán Pardo's experience with express and ORMs.

As requested, the entire project uses sequelize to manage the database.

The libraries used are:

- Sequelize: To manage the database.
- Cors: To avoid cross-origin problems.
- Nodemon: A file watcher makes it easier to develop in express.

The project structure is an MVC arquitecture.

## Running the project

This project uses Node 14.

A MySQL server must be running in port 3306 with database 'people' created.

The configuation can be changed in src/config/database.js

In order to run, the following commands must be executed:

- yarn install
- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all
- yarn dev

## Testing the project

In order to test, the following commands must be executed:

- yarn test
