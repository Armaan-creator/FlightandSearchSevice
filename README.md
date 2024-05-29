# Welcome to Flight Service

## Project Setup
-clone the project on your local
-Execute the `npm start` on the same path as of your root directory of the downloaded project
-create a `.env` file in the root directory and add the following environment variable
    -`PORT-3000`
-Inside the 'src/config' folder create a new file  'config.json' and then add the folowing piece of json

````

{
  "development": {
    "username": "<DB_username>",
    "password": "<DB_password>",
    "database": "Database_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


`````